----------------------------------------
----------------------------------------
#  换掉 Postman + Swagger + JMeter，这 5 个 Java 项目绝了！

Guide哥  [ Github掘金计划 ](javascript:void\(0\);)

**Github掘金计划** ![]()

微信号 GithubStar

功能介绍 用心发掘 Github 和 Gitee 上优质的开源项目。

____

_2021-12-30 14:44_ _发表于_

收录于合集

今天小金推荐的 5 个 Java 项目，每一个都是精品，强烈推荐(用心推荐好项目，嘿嘿)：

  *  **MeterSphere** ：一站式开源持续测试平台，涵盖测试跟踪、接口测试、性能测试、团队协作等功能。
  *  **JustAuth** ：码云 GVP 项目，使用人数最多的第三方登录开源组件，支持 Github、Gitee、今日头条、支付宝、新浪微博、微信、飞书、Google、Facebook、Twitter、StackOverflow 等第三方平台的授权登录。
  *  **DataX-Web** ：基于 DataX 的分布式数据同步工具，可视化操作，降低使用 DataX 的学习成本。
  *  **Recaf** ：一款功能十分强大的 Java 字节码编辑器，基于 ASM 修改字节码。
  *  **PrettyZoo** ：一个基于 Apache Curator 和 JavaFX 实现的 ZooKeeper 图形化管理客户端。

  

另外，今天要推荐的这 5 个开源项目已经被收录进了 awesome-java （非常棒的 Java 开源项目集合，找 Java 项目必备）。

  * Github 地址：https://github.com/CodingDocs/awesome-java
  * Gitee 地址：https://gitee.com/SnailClimb/awesome-java

好了，废话不多说了！正式开始项目推荐。

## MeterSphere：一站式测试平台

![图片](https://mmbiz.qpic.cn/mmbiz_png/iaIdQfEric9TyRaTfZLmErKWlo9hSXdPgMMtPv7ufcX86tRZLXa5cDy5KLrW4U6edsI14sUERyuR2ZpZjibPpdxbg/640?wx_fmt=png)

MeterSphere 是一款基于 Spring Boot + Vue 的一站式开源持续测试平台，涵盖测试跟踪、接口测试、性能测试、团队协作等功能。

你可以将 MeterSphere 看作是 Testlink + Postman + Swagger + JMeter
。不过，其提供的功能还要比这四者加起来还要多的多，有很多小惊喜。

  * MeterSphere 的测试管理功能比 Testlink 更加全面好用，覆盖从编写用例到生成测试报告的完整流程；
  * MeterSphere 完全覆盖了 Postman 的接口测试功能；
  * MeterSphere 支持多种协议的在线 API 文档，支持 Swagger、Postman、HAR 等多种格式导入；
  * MeterSphere 完全兼容 JMeter，并且其功能比 JMeter 更全面好用；
  * MeterSphere 提供了团队协作功能，自带用户管理、租户管理、权限管理、资源管理等功能。
  * ......

![图片](https://mmbiz.qpic.cn/mmbiz_png/iaIdQfEric9TyRaTfZLmErKWlo9hSXdPgM3CJiclX6swshsTtUiafIu25usxWMgKxgPMypua1e39MI03eBicbvtbTwg/640?wx_fmt=png)

MeterSphere功能演示  

Vivo、国家电网、联想、可口可乐、中欧基金等公司都是 MeterSphere 的用户。

![图片](https://mmbiz.qpic.cn/mmbiz_png/iaIdQfEric9TyRaTfZLmErKWlo9hSXdPgMkrvwQc97O89iaG8ha4VqjrWicsbkdTAniaCDU4k92yicfWS6fd7WNmU14w/640?wx_fmt=png)

类似 MeterSphere 的工具还有 Apifox ，这俩都是国产的，并且，做的都非常不错！

如果大家对这个工具感兴趣的话，我后面可以专门出一期教程来详细介绍。

  * 项目地址：https://github.com/metersphere/metersphere
  * 官方文档：https://metersphere.io/docs/index.html
  * 官网：https://metersphere.io/
  * 在线体验：https://demo.metersphere.com/

相关文章推荐：

  * [案例分享｜ 360 借助 MeterSphere 提升自动化测试水平](https://mp.weixin.qq.com/s?__biz=MzI1NTMxMDU1MA==&mid=2247484629&idx=1&sn=f9ad91d3fe86d588e7118b6c5b38bf30&scene=21#wechat_redirect)
  * [MeterSphere 用户访谈录：网鱼网咖](https://mp.weixin.qq.com/s?__biz=MzI1NTMxMDU1MA==&mid=2247484028&idx=1&sn=aa0251921db1b3f3a8fbf6ae407eb5f2&scene=21#wechat_redirect)

## JustAuth:第三方登录开源组件

![图片](https://mmbiz.qpic.cn/mmbiz_png/iaIdQfEric9TyRaTfZLmErKWlo9hSXdPgM21Rx19hPgN4bC6Vu8gAW9nZrWwT2qpiaMvaXLO8bxLJcdxgQUYrI1tQ/640?wx_fmt=png)

JustAuth 是一款使用人数最多的第三方登录开源组件，码云 GVP 项目，支持
Github、Gitee、今日头条、支付宝、新浪微博、微信、飞书、Google、Facebook、Twitter、StackOverflow
等第三方平台的授权登录。

JustAuth 支持的第三方平台概览：

![图片](https://mmbiz.qpic.cn/mmbiz_png/iaIdQfEric9TyRaTfZLmErKWlo9hSXdPgMTK3ae8tNNjHrcHCHZKol0eicvJSU94PGKCPXdV7rORnKgFic3w7JQ04g/640?wx_fmt=png)

并且，官方提供了示例项目 JustAuth-demo[2]供大家进行测试。

![图片](https://mmbiz.qpic.cn/mmbiz_png/iaIdQfEric9TyRaTfZLmErKWlo9hSXdPgMqIPIAFoj1y6wicqVPaUM8MK4LalAuRwpu07GwT4QIZfGPvNs2AZVgTw/640?wx_fmt=png)JustAuth示例项目

  * 项目地址 : https://github.com/justauth/JustAuth
  * 官方文档 : https://justauth.wiki/

相关文章推荐：

  * [JustAuth 实战文档 - 基础篇](https://mp.weixin.qq.com/s?__biz=MzA3NDk3OTIwMg==&mid=2450633273&idx=1&sn=c5a5586f8aaddd0323839d60aec6def9&scene=21#wechat_redirect)
  * 一杯茶的时间，上手第三方登录类库 JustAuth[3]

## DataX-Web：DataX 集成可视化页面

DataX-Web 是一款基于 DataX 的可视化分布式数据同步工具，支持 RDBMS、Hive、HBase、ClickHouse、MongoDB
等数据源，旨在降低使用 DataX 的学习成本。

  * 项目地址：https://github.com/WeiYe-Jing/datax-web
  * 项目介绍 : https://segmentfault.com/u/weiye_jing/articles

![图片](https://mmbiz.qpic.cn/mmbiz_png/iaIdQfEric9TyRaTfZLmErKWlo9hSXdPgMZnzqsBDtCZnmiaH9a17UuOcYW6SXRMYvc0lsUQZiaSZia3icfWjf4k9wzw/640?wx_fmt=png)

之前分享过一篇文章详细介绍过这个开源项目，感兴趣的可以看看：[一款强大的可视化分布式数据同步工具—DataX-Web
](https://mp.weixin.qq.com/s?__biz=Mzg2OTA0Njk0OA==&mid=2247513479&idx=3&sn=82e9b82b6bb5358ff566cba169bff9b8&chksm=cea1fa4cf9d6735a432ecc5b72a41f80306f904eabeb8bdc3ce18cf096d2d2316f3b8fefaf46&token=1161683961&lang=zh_CN&scene=21#wechat_redirect)
。

## Recaf:Java 字节码编辑器

![图片](https://mmbiz.qpic.cn/mmbiz_png/iaIdQfEric9TyRaTfZLmErKWlo9hSXdPgMLPVR4Nia2EsibxniaVyAUuQzFRe1mbpAmw5LAZ70ben3KXPnrn999BhIQ/640?wx_fmt=png)Recaf:
The modern Java bytecode editor

这是一款 Java 编写的 Java 字节码编辑器，基于 ASM（Java 字节码操作框架） 来修改字节码，是不是有点绕口。

通过 Recaf，我们可以轻松反编译 Jar 包或 Class 文件并对其字节码进行修改。

  * 项目地址：https://github.com/Col-E/Recaf
  * 下载地址 (要想使用 Recaf，请确保你的 Java 版本是 Java 8 或者 Java 11+)：https://github.com/Col-E/Recaf/releases
  * 官网：https://www.coley.software/Recaf/

相关文章推荐：

  * Java 字节码编辑器文档说明[4]
  * Recaf: Java bytecode reversing tool I've been working on for the past 3.5 years[5]

## PrettyZoo:优雅的 ZooKeeper 图形化管理客户端

![图片](https://mmbiz.qpic.cn/mmbiz_png/iaIdQfEric9TyRaTfZLmErKWlo9hSXdPgMZe5KSQRHfR2ickRKRfo2vZGaibDW4ccYqyNpzCIS0l8rdwGVn0HYUkvw/640?wx_fmt=png)

PrettyZoo 是一个基于 Apache Curator 和 JavaFX 实现的 ZooKeeper 图形化管理客户端，颜值非常高，支持 Mac /
WIndows / Linux 。你可以使用 PrettyZoo 来实现对 ZooKeeper 的可视化增删改查。

![图片](https://mmbiz.qpic.cn/mmbiz_png/iaIdQfEric9TyRaTfZLmErKWlo9hSXdPgMbPHGGYCm1CnJ4S2tuv1tlntkXRtVRDoptPZTxeFRBnrH1aPVT3Hic6g/640?wx_fmt=png)

考虑到很多小伙伴，不太了解 Apache Curator 和 JavaFX 这两个框架，我这里简单介绍一下：

  *  **Apache Curator** ：Apache Curator 是 Netflix 开源的一款 ZooKeeper 客户端框架，可以对 ZooKeeper 进行增删改查。相比于 ZooKeeper 自带的客户端来说，Curator 的封装更加完善，各种 API 都可以比较方便地使用。像我之前写的简易版 RPC 框架 guide-rpc-framework[6] 就是通过这个框架来对 ZooKeeper 进行增删改查等操作。
  *  **JavaFX** ：JavaFX 是基于 Java 语言的一款桌面软件开发工具，类似 Swing。不过，JavaFx 是将界面和逻辑都分开处理了，就像 Android 开发那样。

另外，PrettyZoo 使用了 Java9 的模块化（Jigsaw）技术，并基于 JPackage 打包了多平台的可运行文件（无需要额外安装 Java
运行时）。

除了可以用来作为管理 ZooKeeper 的工具之外，这个项目也给想要学习 JavaFX 或者 ZooKeeper 的朋友提供了一个非常棒的参考。

  * 项目地址：https://github.com/vran-dev/PrettyZoo
  * 下载地址：https://github.com/vran-dev/PrettyZoo/releases

相关文章推荐：[PrettyZoo, 颜值与功能双在线的 Zookeeper
可视化工具](https://mp.weixin.qq.com/s?__biz=Mzg5NDU4Mzg3Mw==&mid=2247483670&idx=1&sn=67c06412d650a7d44f722c5da3c2fbfa&scene=21#wechat_redirect)

### 参考资料

[1]

awesome-java: _https://github.com/CodingDocs/awesome-java_

[2]

JustAuth-demo: _https://github.com/justauth/JustAuth-demo_

[3]

一杯茶的时间，上手第三方登录类库 JustAuth: _https://juejin.cn/post/6844904144872931342_

[4]

Java 字节码编辑器文档说明:
_http://autp.cn/archives/java%E5%AD%97%E8%8A%82%E7%A0%81%E7%BC%96%E8%BE%91%E5%99%A8%E6%96%87%E6%A1%A3%E8%AF%B4%E6%98%8E_

[5]

Recaf: Java bytecode reversing tool I've been working on for the past 3.5
years:
_https://www.reddit.com/r/java/comments/kjz70b/recaf_java_bytecode_reversing_tool_ive_been/_

[6]

guide-rpc-framework: _https://github.com/Snailclimb/guide-rpc-framework_

·

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

[阅读原文](javascript:;)

