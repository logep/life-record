----------------------------------------
----------------------------------------
#  这些 C语言开源项目 YYDS！！！

原创 小金  [ Github掘金计划 ](javascript:void\(0\);)

**Github掘金计划** ![]()

微信号 GithubStar

功能介绍 用心发掘 Github 和 Gitee 上优质的开源项目。

____

_2021-08-25 09:13_ _发表于_

收录于合集

#开源项目 31 个

#c语言 4 个

#Github掘金计划 81 个

#Github 52 个

收集整理了一些不错的 C 语言开源项目，给大家伙分享一下！  

## SQLite

SQLite 是一款轻型的数据库，是遵守 ACID 的关系型数据库管理系统，它包含在一个相对小的 C
库中。它的设计目标是嵌入式的，而且已经在很多嵌入式产品中使用了它，它占用资源非常的低。

![图片](https://mmbiz.qpic.cn/mmbiz_png/BcyAypujBVYHNx8RzicnH7Z37icrsahBDFialKqSTnZI0vDmrGKXSPVhLQEznfGIUHBRhcia3O0QKgTw5vc14hZuwQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

SQLite 是在 2000 年发布的，到目前为止已经有 21 年了。

像大家现在使用的微信，它本地就是通过 SQLite 来存储的数据。

注意：微信本身的服务器就不能使用 SQLite，毕竟，并发量太大，SQLite 没办法满足。

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg
width='1px' height='1px' viewBox='0 0 1 1' version='1.1'
xmlns='http://www.w3.org/2000/svg'
xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg
stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-
opacity='0'%3E%3Cg transform='translate\(-249.000000, -126.000000\)'
fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1'
height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

SQLite 的作者是 D. Richard Hipp（理查德希普），作者非常的有个性，用到的软件工具都是自己写，他写了不少工具，比如 SQLite、Bug
追踪系统 CVSTrac、版本管理系统 Fossil。

项目地址：https://sqlite.org/src/doc/trunk/README.md

相关阅读：如何学习 sqlite 源码？(https://www.zhihu.com/question/22819578)

## althttpd

SQLite 作者最新开源的 Web 服务器 althttpd，我们可以先来看下这个项目的时间线。

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg
width='1px' height='1px' viewBox='0 0 1 1' version='1.1'
xmlns='http://www.w3.org/2000/svg'
xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg
stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-
opacity='0'%3E%3Cg transform='translate\(-249.000000, -126.000000\)'
fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1'
height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

可以看出来开源工作是最近才开始的，但是实际上 althttpd 从 2004 年开始就在支撑 https://sqlite.org/
网站的运行，althttpd 的设计目标就是为了简单、安全同时低资源消耗。

在 2018 年，http://sqlite.org 每天要响应 50 万的 HTTP 请求，而只用了价值 40
美金的服务器，而且服务器处于很低的负载（0.1 或者 0.2），可以看出其性能还是不错的。

我们来看下 althttpd 的代码，项目实际只有一个 c 文件，整体行数也不多，是一个非常不错的学习项目。

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg
width='1px' height='1px' viewBox='0 0 1 1' version='1.1'
xmlns='http://www.w3.org/2000/svg'
xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg
stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-
opacity='0'%3E%3Cg transform='translate\(-249.000000, -126.000000\)'
fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1'
height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

  

而且项目中有一个介绍文件 `althttpd.md`，详细介绍了 althttpd 的设计哲学、项目使用说明等。

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg
width='1px' height='1px' viewBox='0 0 1 1' version='1.1'
xmlns='http://www.w3.org/2000/svg'
xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg
stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-
opacity='0'%3E%3Cg transform='translate\(-249.000000, -126.000000\)'
fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1'
height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

从 althttpd 的设计哲学可以看出来，作者是一个很克制的人，并不是希望去做一个功能非常丰富的 Web 服务器，而是希望 althttpd
在满足功能要求的前提下，能够尽量保持代码的简洁，这是非常值得我们学习的。

更多项目详情请查看如下链接。

项目地址：https://sqlite.org/althttpd/doc/trunk/althttpd.md。

## rt-thread

RT-Thread 是一个来自中国的开源物联网操作系统，它提供了非常强的可伸缩能力：从一个可以运行在 ARM Cortex-M0 芯片上的极小内核，到中等的
ARM Cortex-M3/4/7 系统，甚至是运行于 MIPS32、ARM Cortex-A 系列处理器上功能丰富系统

项目地址：RT-Thread/rt-thread

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg
width='1px' height='1px' viewBox='0 0 1 1' version='1.1'
xmlns='http://www.w3.org/2000/svg'
xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg
stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-
opacity='0'%3E%3Cg transform='translate\(-249.000000, -126.000000\)'
fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1'
height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

### Tinyhttpd

Tiny­httpd 是一个超轻量型 Http Server，使用 C 语言开发，全部代码只有 502 行 (包括注释)，附带一个简单的
Client，可以通过阅读这段代码理解一个 Http Server 的本质。

项目地址:https://github.com/LippiOuYang/Tinyhttpd

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg
width='1px' height='1px' viewBox='0 0 1 1' version='1.1'
xmlns='http://www.w3.org/2000/svg'
xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg
stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-
opacity='0'%3E%3Cg transform='translate\(-249.000000, -126.000000\)'
fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1'
height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

### cJSON

cJ­SON 是一个 JSON 编解码器，非常轻量级，C 文件只有 500 多行，速度也非常理想。cJ­SON 也存在几个弱点，虽然功能不是非常强大，但
cJ­SON 的小身板和速度是最值得赞赏的。其代码被非常好地维护着，结构也简单易懂，可以作为一个非常好的 C 语言项目进行学习。

项目地址:https://github.com/DaveGamble/cJSON

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg
width='1px' height='1px' viewBox='0 0 1 1' version='1.1'
xmlns='http://www.w3.org/2000/svg'
xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg
stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-
opacity='0'%3E%3Cg transform='translate\(-249.000000, -126.000000\)'
fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1'
height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

### FastDFS

FastDFS
是一款轻量级的开源分布式文件系统，功能包括：文件存储、文件同步、文件上传、文件下载等，解决了文件大容量存储和高性能访问问题。特别适合以文件为载体的在线服务，如图片、视频、文档服务等等。

项目地址：https://gitee.com/fastdfs100/fastdfs

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg
width='1px' height='1px' viewBox='0 0 1 1' version='1.1'
xmlns='http://www.w3.org/2000/svg'
xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg
stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-
opacity='0'%3E%3Cg transform='translate\(-249.000000, -126.000000\)'
fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1'
height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

### CMockery

cmock­ery 是 google 发布的用于 C 单元测试的一个轻量级的框架。它很小巧，对其他开源包没有依赖，对被测试代码侵入性小。cmock­ery
的源代码行数不到 3K，你阅读一下 will_re­turn 和 mock 的源代码就一目了然了。

项目地址:https://code.google.com/p/cmockery/downloads/list

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg
width='1px' height='1px' viewBox='0 0 1 1' version='1.1'
xmlns='http://www.w3.org/2000/svg'
xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg
stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-
opacity='0'%3E%3Cg transform='translate\(-249.000000, -126.000000\)'
fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1'
height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

### Webbench

Webbench 是 Radim Kolar 在 1997 年写的一个在 linux 下使用的非常简单的网站压测工具。它使用
fork()模拟多个客户端同时访问我们设定的 URL，测试网站在压力下工作的性能，最多可以模拟 3
万个并发连接去测试网站的负载能力。官网地址:http://home.tiscali.cz/~cz210552/webbench.html

项目地址:https://github.com/EZLippi/WebBench

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg
width='1px' height='1px' viewBox='0 0 1 1' version='1.1'
xmlns='http://www.w3.org/2000/svg'
xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg
stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-
opacity='0'%3E%3Cg transform='translate\(-249.000000, -126.000000\)'
fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1'
height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

### Redis

Re­dis 是一个使用 C 语言写成的，开源的 key-value 数据库。Re­dis 支持的操作和数据类型比 Mem­cached
要多，现在主要用于缓存，支持主从同步机制.

项目地址:https://redis.io/

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg
width='1px' height='1px' viewBox='0 0 1 1' version='1.1'
xmlns='http://www.w3.org/2000/svg'
xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg
stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-
opacity='0'%3E%3Cg transform='translate\(-249.000000, -126.000000\)'
fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1'
height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

### HP-Socket

HP-Socket 是一套通用的高性能 TCP/UDP/HTTP 通信框架，包含服务端组件、客户端组件和 Agent 组件，广泛适用于各种不同应用场景的
TCP/UDP/HTTP 通信系统，提供 C/C++、C#、Del­phi、E（易语言）、Java、Python 等编程语言接口。HP-Socket
对通信层实现完全封装，应用程序不必关注通信层的任何细节；HP-Socket 提供基于事件通知模型的 API 接口，能非常简单高效地整合到新旧应用程序中。

项目地址:https://www.oschina.net/p/hp-socket

## starrtc-server

免费 IM 系统，IM 即时通信消息系统(含一对一文字聊天，群聊，聊天室)，免费一对一 voip 实时通话，录屏，webrtc
服务端，免费直播连麦，互动直播，视频直播，RTSP 拉流，RTMP 推流，语音对讲，免费在线会议，视频会议等服务端程序，支持物联网平台，万水千山总是情，来个
star 行不行

项目地址：https://gitee.com/starRTC/starrtc-server

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg
width='1px' height='1px' viewBox='0 0 1 1' version='1.1'
xmlns='http://www.w3.org/2000/svg'
xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg
stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-
opacity='0'%3E%3Cg transform='translate\(-249.000000, -126.000000\)'
fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1'
height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

## Ekho

Ekho（余音）是一个把文字转换成声音的软件。它目前支持粤语、普通话（国语）、诏安客语、藏语、雅言（中国古代通用语）和韩语（试验中），英文则通过
Fes­ti­val 间接实现。支持 Linux、Win­dows、An­droid.

项目地址:https://github.com/hgneng/ekho

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg
width='1px' height='1px' viewBox='0 0 1 1' version='1.1'
xmlns='http://www.w3.org/2000/svg'
xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg
stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-
opacity='0'%3E%3Cg transform='translate\(-249.000000, -126.000000\)'
fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1'
height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

### Seafile

Seafile 是一款安全、高性能的开源网盘（云存储）软件。Seafile
提供了主流网盘（云盘）产品所具有的功能，包括文件同步、文件共享等。在此基础上，Seafile 还提供了高级的安全保护功能以及群组协作功能。由于
Seafile 是开源的，你可以把它部署在私有云的环境中，作为私有的企业网盘。Seafile 支持 Mac、Linux、Win­dows 三个桌面平台，支持
An­droid 和 iOS 两个移动平台。

项目地址:https://github.com/haiwen/seafile

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg
width='1px' height='1px' viewBox='0 0 1 1' version='1.1'
xmlns='http://www.w3.org/2000/svg'
xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg
stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-
opacity='0'%3E%3Cg transform='translate\(-249.000000, -126.000000\)'
fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1'
height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

  

### ngx-fastdfs

分布式图片实时动态压缩.ngx-fastdfs 是 ng­inx + lua +fastdfs 实现分布式图片实时动态压缩。

项目地址:https://gitee.com/qieangel2013/ngx-fastdfs

> 参考：https://www.geek0ne.com/C-Cpp/Projects.html

## 推荐

  * [Github掘金计划](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzIwNDgzMzI3Mg==&action=getalbum&album_id=1571213952619954180#wechat_redirect) ：历史优质原创汇总！用心发掘 Github 和 Gitee 上优质的开源项目。
  * [编程基础](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1632585323454971905&__biz=MzIwNDgzMzI3Mg==#wechat_redirect) ：精选编程基础如学习路线、编程语言相关的开源项目。
  * [计算机基础](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1635325633234780161&__biz=MzIwNDgzMzI3Mg==#wechat_redirect)：精选计算机基础（操作系统、计算机网络、算法、数据结构）相关的开源项目。
  * [技术面试](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1632589980491366403&__biz=MzIwNDgzMzI3Mg==#wechat_redirect) ：精选技术面试相关的开源项目。
  * [项目实战](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1632590550748938241&__biz=MzIwNDgzMzI3Mg==#wechat_redirect) ：精选实战类型的开源项目。
  * [神器工具&网站](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzIwNDgzMzI3Mg==&action=getalbum&album_id=1692140336665378820#wechat_redirect) : 一些好用的插件、软件、网站。

Github掘金计划由3位Github爱好者维护  

用心发掘 Github 和 Gitee 上优质的开源项目。

后台回复 **「PDF」** 获取 计算机必读书籍

欢迎关注 **「Github掘金计划」**

  

  

预览时标签不可点

收录于合集 #开源项目

31个

上一篇Github标星67k！有哪些值得学习的 Go语言开源项目？下一篇这个国产开源项目帮你一键生成API文档!真香！

[阅读原文](javascript:;)

