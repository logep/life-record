----------------------------------------
----------------------------------------
#  Github 优质 C 开源项目汇总！2022 最新版

原创 小金  [ Github掘金计划 ](javascript:void\(0\);)

**Github掘金计划** ![]()

微信号 GithubStar

功能介绍 用心发掘 Github 和 Gitee 上优质的开源项目。

____

_2022-07-03 11:53_ _发表于 湖北_

收录于合集

#github 12 个

#c语言 4 个

#Github掘金计划 81 个

你好，我是小金。周末收集整理了一些不错的 C 语言开源项目，分享一下！

## SQLite

SQLite 是一款轻型的数据库，是遵守 ACID 的关系型数据库管理系统，它包含在一个相对小的 C
库中。它的设计目标是嵌入式的，而且已经在很多嵌入式产品中使用了它，它占用资源非常的低。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/BcyAypujBVavV3oZu6eLgiaF6GZ8qdkIib86RncaM05G4sU6lriclvX6zxgOKneGqq7FxRV7hCQOdZjk9DvuCRzLQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

SQLite 是在 2000 年发布的，到目前为止已经有 21 年了。

像大家现在使用的微信，它本地就是通过 SQLite 来存储的数据。

注意：微信本身的服务器就不能使用 SQLite，毕竟，并发量太大，SQLite 没办法满足。

![图片](https://mmbiz.qpic.cn/mmbiz_png/BcyAypujBVavV3oZu6eLgiaF6GZ8qdkIibwwvWf9CjW2ibqpubwnAYjibDldv36TK9bSNbCllDqMTUwWUOl3lOibOlw/640?wx_fmt=png)

SQLite 的作者是 D. Richard Hipp（理查德希普），作者非常的有个性，用到的软件工具都是自己写，他写了不少工具，比如 SQLite、Bug
追踪系统 CVSTrac、版本管理系统 Fossil。

项目地址：https://sqlite.org/src/doc/trunk/README.md

相关阅读：[微信为什么使用 SQLite
保存聊天记录？](https://mp.weixin.qq.com/s?__biz=MzIwNDgzMzI3Mg==&mid=2247491524&idx=1&sn=9376ced93714d871591e5ce94789e43d&scene=21#wechat_redirect
"微信为什么使用 SQLite 保存聊天记录？")

## althttpd

SQLite 作者最新开源的 Web 服务器 althttpd，我们可以先来看下这个项目的时间线。

![图片](https://mmbiz.qpic.cn/mmbiz_png/BcyAypujBVavV3oZu6eLgiaF6GZ8qdkIibMgXvZ8Kia6ek7iaFqds2F0gACZzXumOavdHfzKMZkF9IVlhoy19qZrwg/640?wx_fmt=png)

可以看出来开源工作是最近才开始的，但是实际上 althttpd 从 2004 年开始就在支撑 https://sqlite.org/
网站的运行，althttpd 的设计目标就是为了简单、安全同时低资源消耗。

在 2018 年，http://sqlite.org 每天要响应 50 万的 HTTP 请求，而只用了价值 40
美金的服务器，而且服务器处于很低的负载（0.1 或者 0.2），可以看出其性能还是不错的。

我们来看下 althttpd 的代码，项目实际只有一个 c 文件，整体行数也不多，是一个非常不错的学习项目。

![图片](https://mmbiz.qpic.cn/mmbiz_png/BcyAypujBVavV3oZu6eLgiaF6GZ8qdkIib0QfDjgiaRmfb7yPdb88iawoicd2UoLz6YGF1x4nIOJlGZ1HCoe7BjBGcw/640?wx_fmt=png)

而且项目中有一个介绍文件 `althttpd.md`，详细介绍了 althttpd 的设计哲学、项目使用说明等。

![图片](https://mmbiz.qpic.cn/mmbiz_png/BcyAypujBVavV3oZu6eLgiaF6GZ8qdkIibiccu3jOkorr7Qq3jxTWRFeib3LpY3NicibNtC9ibTwhVjIEfibzemo7Fqhbw/640?wx_fmt=png)

从 althttpd 的设计哲学可以看出来，作者是一个很克制的人，并不是希望去做一个功能非常丰富的 Web 服务器，而是希望 althttpd
在满足功能要求的前提下，能够尽量保持代码的简洁，这是非常值得我们学习的。

更多项目详情请查看如下链接。

项目地址：https://sqlite.org/althttpd/doc/trunk/althttpd.md

相关阅读：[SQLite 作者最新开源力作！只有一个C文件的 Web
服务器！！](https://mp.weixin.qq.com/s?__biz=MzIwNDgzMzI3Mg==&mid=2247486778&idx=1&sn=11f49a718ca285c8edec4af660087a90&chksm=973b65ada04cecbb6c3fb1314248ae816fd3c76af467ce37d8a4a34431817ae9ee104952fbc0&token=1308953709&lang=zh_CN&scene=21#wechat_redirect
"SQLite 作者最新开源力作！只有一个C文件的 Web 服务器！！")

## TDengine

TDengine 是一款高性能、分布式、支持 SQL
的时序数据库。而且除时序数据库功能外，它还提供缓存、数据订阅、流式计算等功能，最大程度减少研发和运维的复杂度，且核心代码，包括集群功能全部开源（开源协议，AGPL
v3.0）。

![图片](https://mmbiz.qpic.cn/mmbiz_png/BcyAypujBVavV3oZu6eLgiaF6GZ8qdkIibjA2buMC1Y3s41IsMDJD9SAwAvZodetSAosrYeVsFoCX9KvdaJibCtuw/640?wx_fmt=png)

  * • Gitee地址：https://gitee.com/taosdata/TDengine

  * • Github 地址：https://github.com/taosdata/TDengine

  * • 官网：https://www.taosdata.com

## rt-thread

RT-Thread 是一个来自中国的开源物联网操作系统，它提供了非常强的可伸缩能力：从一个可以运行在 ARM Cortex-M0 芯片上的极小内核，到中等的
ARM Cortex-M3/4/7 系统，甚至是运行于 MIPS32、ARM Cortex-A 系列处理器上功能丰富系统

项目地址：https://gitee.com/rtthread/rt-thread

![图片](https://mmbiz.qpic.cn/mmbiz_png/BcyAypujBVavV3oZu6eLgiaF6GZ8qdkIibkovicgZr3JLibkYv4wZlsZ9JIEHjoo1ygZOffEribaHHK3pz8S8mE7pCQ/640?wx_fmt=png)

## Tinyhttpd

Tiny­httpd 是一个超轻量型 Http Server，使用 C 语言开发，全部代码只有 502 行 (包括注释)，附带一个简单的
Client，可以通过阅读这段代码理解一个 Http Server 的本质。

项目地址:https://github.com/LippiOuYang/Tinyhttpd

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/BcyAypujBVavV3oZu6eLgiaF6GZ8qdkIibJicjwH1VWVk9KomcjJlTZibwX6JLyVcO9ib5nibj9TsT0HtQAQ3LVvfeOw/640?wx_fmt=jpeg)

## cJSON

cJ­SON 是一个 JSON 编解码器，非常轻量级，C 文件只有 500 多行，速度也非常理想。cJ­SON 也存在几个弱点，虽然功能不是非常强大，但
cJ­SON 的小身板和速度是最值得赞赏的。其代码被非常好地维护着，结构也简单易懂，可以作为一个非常好的 C 语言项目进行学习。

项目地址:https://github.com/DaveGamble/cJSON

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/BcyAypujBVavV3oZu6eLgiaF6GZ8qdkIibQwMRiaJ8EwISzDaOriaiaYWOFUgpr99NjE3FY4mEaS62c3vUSk2aMUIQA/640?wx_fmt=jpeg)img

## Redis

Re­dis 是一个使用 C 语言写成的，开源的 key-value 数据库。Re­dis 支持的操作和数据类型比 Mem­cached
要多，现在主要用于缓存，支持主从同步机制.

项目地址:https://redis.io/

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/BcyAypujBVavV3oZu6eLgiaF6GZ8qdkIiboTDLMsfervTT03DSOesJdib2fjDwcqNmnbMMIc5mCDS7SVY6fAchMwg/640?wx_fmt=jpeg)

## dperf

dperf是世界领先的网络压力测试仪，代码8K左右，对学习TCP/IP，DPDK都有帮助，上周通过了Linux基金会评审，已经是DPDK生态项目。

![图片](https://mmbiz.qpic.cn/mmbiz_png/BcyAypujBVavV3oZu6eLgiaF6GZ8qdkIibJx9HnxOuTOM4icl7Xh1erqwh1bFEcJREph6e4AtAFibd5GpTDH6lkjXQ/640?wx_fmt=png)

项目地址：https://github.com/baidu/dperf

相关阅读：[千万级 CPS 的开源网络压测软件 dperf
开源了！！！](https://mp.weixin.qq.com/s?__biz=MzIwNDgzMzI3Mg==&mid=2247491558&idx=1&sn=e54cef446eaf7466a4c65f282b117356&chksm=973b7771a04cfe6705071146cdc5f5e7530bad1d985e79dbfe143817990f50f982337783d8a2&token=864077681&lang=zh_CN&scene=21#wechat_redirect
"千万级 CPS 的开源网络压测软件 dperf 开源了！！！")

## Seafile

Seafile 是一款安全、高性能的开源网盘（云存储）软件。Seafile
提供了主流网盘（云盘）产品所具有的功能，包括文件同步、文件共享等。在此基础上，Seafile 还提供了高级的安全保护功能以及群组协作功能。

![图片](https://mmbiz.qpic.cn/mmbiz_png/BcyAypujBVavV3oZu6eLgiaF6GZ8qdkIibPeibu2ia0ZIbj2arOteqgZgyKmfow4kI4nbawOia2HeM0zV3pviaOpIuCA/640?wx_fmt=png)

由于 Seafile 是开源的，你可以把它部署在私有云的环境中，作为私有的企业网盘。Seafile 支持 Mac、Linux、Win­dows
三个桌面平台，支持 An­droid 和 iOS 两个移动平台。

![图片](https://mmbiz.qpic.cn/mmbiz_png/BcyAypujBVavV3oZu6eLgiaF6GZ8qdkIibwgqVhqwCibMjc8xAAj5DTcziaudyJlwds9jyic6wcJA5plKFgkDCpnbVA/640?wx_fmt=png)

项目地址: https://github.com/haiwen/seafile

相关阅读：[替换百度云！这款开源网盘颜值更高功能更全面！](https://mp.weixin.qq.com/s?__biz=MzIwNDgzMzI3Mg==&mid=2247491384&idx=1&sn=18130702f6a28de50ad5b29a5a2023aa&scene=21#wechat_redirect
"替换百度云！这款开源网盘颜值更高功能更全面！")

## 推荐

  * • [Github 掘金计划](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzIwNDgzMzI3Mg==&action=getalbum&album_id=1571213952619954180#wechat_redirect "Github 掘金计划") ：历史优质原创文章汇总！

  * • [程序人生](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzIwNDgzMzI3Mg==&action=getalbum&album_id=2084343476975878144#wechat_redirect "程序人生")：编程经历、英语学习、延寿指南。

  * • [神器工具](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzIwNDgzMzI3Mg==&action=getalbum&album_id=1692140336665378820#wechat_redirect "神器工具") : 一些好用的插件、软件、网站。

  * • [编程基础](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1632585323454971905&__biz=MzIwNDgzMzI3Mg==#wechat_redirect "编程基础") ：精选编程基础如学习路线、编程语言相关的开源项目。

  * • [计算机基础](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1635325633234780161&__biz=MzIwNDgzMzI3Mg==#wechat_redirect "计算机基础")：精选计算机基础（操作系统、计算机网络、算法、数据结构）相关的开源项目。

  * • [技术面试](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1632589980491366403&__biz=MzIwNDgzMzI3Mg==#wechat_redirect "技术面试") ：精选技术面试相关的开源项目。

  * • [项目实战](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1632590550748938241&__biz=MzIwNDgzMzI3Mg==#wechat_redirect "项目实战") ：精选实战类型的开源项目。

用心发掘 Github 和 Gitee 上优质的开源项目。

欢迎关注！欢迎点赞分享！

预览时标签不可点

收录于合集 #github

12个

上一篇Github 200k 点赞！堪称最强计算机自学指南！下一篇全球最火的程序员学习路线！没有之一！前端、后端、Java、Python ... 都有

[阅读原文](javascript:;)

