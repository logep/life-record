----------------------------------------
----------------------------------------
#  Redis 替代品强势来袭，性能提升一倍！！

[ Github掘金计划 ](javascript:void\(0\);)

**Github掘金计划** ![]()

微信号 GithubStar

功能介绍 用心发掘 Github 和 Gitee 上优质的开源项目。

____

_2023-02-28 00:03_ _发表于 湖北_

收录于合集 #Github掘金计划 81个

![图片](https://mmbiz.qpic.cn/mmbiz_png/BcyAypujBVZscjFqibT8o716OJrFXt2ZjiahLlib6bp0wicZ033pKtsrefcPqxuLnM6q0icHDq43NDS6ibur4vsgNP7g/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

## 什么是KeyDB？

KeyDB是Redis的高性能分支，专注于多线程，内存效率和高吞吐量。除了多线程之外，KeyDB还具有仅在Redis
Enterprise中可用的功能，例如Active Replication，FLASH存储支持以及一些根本不可用的功能，例如直接备份到AWS S3。

KeyDB与Redis协议，模块和脚本保持完全兼容性。这包括脚本和事务的原子性保证。由于KeyDB与Redis开发保持同步，因此KeyDB是Redis功能的超集，从而使KeyDB取代了现有Redis部署。

在相同的硬件上，KeyDB每秒可以执行的查询数量是Redis的两倍，而延迟却降低了60％。Active-
Replication简化了热备用故障转移，使您可以轻松地在副本上分配写操作并使用基于TCP的简单负载平衡/故障转移。KeyDB的高性能可让您在更少的硬件上做更多的事情，从而降低了运营成本和复杂性。

![图片](https://mmbiz.qpic.cn/mmbiz_png/GjuWRiaNxhnQ1zkFbjklUAW3u8LXesJVuiazEzwbGuNmD3PeNGSwLU75aibNUZSjo1oCtjREtnEoaOso5AX0ehTVQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

在此处查看完整的基准测试结果和设置信息：

> “
>
> https://docs.keydb.dev/blog/2019/10/07/blog-post/

## 走进KeyDB-- 转载

KeyDB项目是从redis fork出来的分支。众所周知redis是一个单线程的kv内存存储系统，而KeyDB在100%兼容redis
API的情况下将redis改造成多线程。

项目git地址：

> “
>
> https://github.com/JohnSully/KeyDB

网上公开的技术细节比较少，本文基本是通过阅读源码总结出来的，如有错漏之处欢迎指正。

## 多线程架构

### 线程模型

KeyDB将redis原来的主线程拆分成了主线程和worker线程。每个worker线程都是io线程，负责监听端口，accept请求，读取数据和解析协议。如图所示：

![图片](https://mmbiz.qpic.cn/mmbiz_png/GjuWRiaNxhnQ1zkFbjklUAW3u8LXesJVuGdYFOXOYURg6KWHN7vyN64HxibnfZn0bjtGfbenG3UkQyEwCjgZ3osg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

KeyDB使用了`SO_REUSEPORT`特性，多个线程可以绑定监听同个端口。

每个worker线程做了cpu绑核，读取数据也使用了`SO_INCOMING_CPU`特性，指定cpu接收数据。

解析协议之后每个线程都会去操作内存中的数据，由一把全局锁来控制多线程访问内存数据。

主线程其实也是一个worker线程，包括了worker线程的工作内容，同时也包括只有主线程才可以完成的工作内容。在worker线程数组中下标为0的就是主线程。

主线程的主要工作在实现`serverCron`，包括：

  * 处理统计
  * 客户端链接管理
  * db数据的resize和reshard
  * 处理aof
  * replication主备同步
  * cluster模式下的任务

### 链接管理

在redis中所有链接管理都是在一个线程中完成的。在KeyDB的设计中，每个worker线程负责一组链接，所有的链接插入到本线程的链接列表中维护。链接的产生、工作、销毁必须在同个线程中。每个链接新增一个字段

    
    
    int iel; /* the event loop index we're registered with */  
    

用来表示链接属于哪个线程接管。

KeyDB维护了三个关键的数据结构做链接管理：

  * `clients_pending_write`：线程专属的链表，维护同步给客户链接发送数据的队列
  * `clients_pending_asyncwrite`：线程专属的链表，维护异步给客户链接发送数据的队列
  * `clients_to_close`：全局链表，维护需要异步关闭的客户链接

分成同步和异步两个队列，是因为redis有些联动api，比如`pub/sub`，pub之后需要给sub的客户端发送消息，pub执行的线程和sub的客户端所在线程不是同一个线程，为了处理这种情况，KeyDB将需要给非本线程的客户端发送数据维护在异步队列中。

同步发送的逻辑比较简单，都是在本线程中完成，以下图来说明如何同步给客户端发送数据：

![图片](https://mmbiz.qpic.cn/mmbiz_png/GjuWRiaNxhnQ1zkFbjklUAW3u8LXesJVuhFXIKsHcINTicWLTunWpV996kt0mFicoWKsVamTvoq2uw3MeicFF8CDMw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

如上文所提到的，一个链接的创建、接收数据、发送数据、释放链接都必须在同个线程执行。异步发送涉及到两个线程之间的交互。KeyDB通过管道在两个线程中传递消息：

    
    
    int fdCmdWrite; //写管道  
    int fdCmdRead; //读管道  
    

本地线程需要异步发送数据时，先检查client是否属于本地线程，非本地线程获取到client专属的线程ID，之后给专属的线程管到发送`AE_ASYNC_OP::CreateFileEvent`的操作，要求添加写socket事件。专属线程在处理管道消息时将对应的请求添加到写事件中，如图所示：

![图片](https://mmbiz.qpic.cn/mmbiz_png/GjuWRiaNxhnQ1zkFbjklUAW3u8LXesJVun7RbrRUqEN4bRdPic5ibfCZlUcVFV8kIrb25hylqT2VmTg3lDcx9SYibw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

redis有些关闭客户端的请求并非完全是在链接所在的线程执行关闭，所以在这里维护了一个全局的异步关闭链表。

![图片](https://mmbiz.qpic.cn/mmbiz_png/GjuWRiaNxhnQ1zkFbjklUAW3u8LXesJVuib74EbCceICRIobQSe6mVDwH7qobD9xKDDJPhrKV5zaCWNIDSQ1WFeg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

### 锁机制

KeyDB实现了一套类似spinlock的锁机制，称之为fastlock。

fastlock的主要数据结构有：

    
    
    struct ticket  
    {  
        uint16_t m_active;  //解锁+1  
        uint16_t m_avail;  //加锁+1  
    };  
    struct fastlock  
    {  
        volatile struct ticket m_ticket;  
       
        volatile int m_pidOwner; //当前解锁的线程id  
        volatile int m_depth; //当前线程重复加锁的次数  
    };  
    

使用原子操作`__atomic_load_2`，`__atomic_fetch_add`，`__atomic_compare_exchange`来通过比较`m_active=m_avail`判断是否可以获取锁。fastlock提供了两种获取锁的方式：

  *  **try_lock** ：一次获取失败，直接返回
  *  **lock** ：忙等，每`1024 * 1024`次忙等后使用`sched_yield` 主动交出cpu，挪到cpu的任务末尾等待执行。

在KeyDB中将`try_lock`和事件结合起来，来避免忙等的情况发生。每个客户端有一个专属的lock，在读取客户端数据之前会先尝试加锁，如果失败，则退出，因为数据还未读取，所以在下个`epoll_wait`处理事件循环中可以再次处理。

![图片](https://mmbiz.qpic.cn/mmbiz_png/GjuWRiaNxhnQ1zkFbjklUAW3u8LXesJVuXsupUicdu4xX91RIfKHoWC92heIibmeRsjt8ibmbDc4SPPPPRu0HCyPqg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

## Active-Replica

KeyDB实现了多活的机制，每个replica可设置成可写非只读，replica之间互相同步数据。主要特性有：

  * 每个replica有个uuid标志，用来去除环形复制
  * 新增加rreplay API，将增量命令打包成rreplay命令，带上本地的uuid
  * key，value加上时间戳版本号，作为冲突校验，如果本地有相同的key且时间戳版本号大于同步过来的数据，新写入失败。采用当前时间戳向左移20位，再加上后44位自增的方式来获取key的时间戳版本号。

## 文档

https://docs.keydb.dev/docs/commands

来源：https://developer.aliyun.com/article/705239

  

推荐

用心发掘优质开源项目，欢迎关注，欢迎点赞分享！

历史优质开源项目推荐地址：[Github
掘金计划](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzIwNDgzMzI3Mg==&action=getalbum&album_id=1571213952619954180#wechat_redirect)。

  * [计算机基础](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1635325633234780161&__biz=MzIwNDgzMzI3Mg==#wechat_redirect)：精选计算机基础（操作系统、计算机网络、算法、数据结构）相关的开源项目。

  * [神器工具](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzIwNDgzMzI3Mg==&action=getalbum&album_id=1692140336665378820#wechat_redirect) : 一些好用的插件、软件、网站。

  * [程序人生](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzIwNDgzMzI3Mg==&action=getalbum&album_id=2084343476975878144#wechat_redirect)：编程经历、英语学习、延寿指南。

  * [项目实战](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1632590550748938241&__biz=MzIwNDgzMzI3Mg==#wechat_redirect) ：精选实战类型的开源项目。

预览时标签不可点

收录于合集 #Github掘金计划

81个

上一篇用代码创造音乐！剑桥大学的这个开源项目又火了！！下一篇推荐一款超好用的开源 PDF 阅读神器！

