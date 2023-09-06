----------------------------------------
----------------------------------------
#  如果美国封了DNS，俄罗斯将从网络消失？

[ Github掘金计划 ](javascript:void\(0\);)

**Github掘金计划** ![]()

微信号 GithubStar

功能介绍 用心发掘 Github 和 Gitee 上优质的开源项目。

____

_2022-03-02 13:50_ _发表于_

收录于合集

以下文章来源于编程技术宇宙 ，作者轩辕之风O

![](images/0)
**编程技术宇宙** .

用故事说技术，编程从未如此有趣

俄乌战争还在持续，网络中的战争也同样在上演着。

从最近几天的微博热搜就能看出，舆论阵地是何等的重要，一张图、一个视频、一段文字就能把人带跑偏，可见保持独立思考和判断的能力多么难能可贵。

网络阵地如此之重要，大家有没有想过一个问题：
**美国那么爱制裁，互联网是美国人发明的，如果美国制裁俄罗斯互联网，把根域名服务器封了，俄罗斯是否就从互联网消失了？**

![图片](https://mmbiz.qpic.cn/mmbiz_png/jXQDbLkGBYVrA458wtZX6vWpMgpsiaVaNIMpuQUc5dibzftXo9GdWquMuoicv99H91uyBFgh7F9euvkbOmGCYSVYA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

美国会不会干出这事儿我不知道，咱们就从技术上来分析一下，通过封禁根服务器，能不能实现将一个国家从互联网消失。

要回答这个问题，需要了解一些互联网工作的基本常识。

我们平时上网，其本质就是用你手里的客户端软件（比如微博、抖音、微信、浏览器等等）去访问它们背后的服务器（微博服务器、抖音服务器、微信服务器、其他网站的服务器等等），请求数据然后呈现给你。

那如何访问呢？

这些服务器都有属于它们的IP地址，这是一个在互联网中使用的身份标识号码，凭借这个数字，我们手机和电脑发出的网络数据包就能被网络中的“快递系统”不断转发，最终投递到目标服务器。

![图片](https://mmbiz.qpic.cn/mmbiz_png/jXQDbLkGBYVrA458wtZX6vWpMgpsiaVaNJ63b67Rvxcuds9QeibmCs6Gnicvx3L5Geib2j7J1W0iahbqvG1qVjbpDUw/640?wx_fmt=png)

但这些号码数字对我们人类来说没那么好记忆，所以，人们发明了 **域名** 这个东西。

`www.baidu.com`，这就是百度的域名。

这个东西可比数字好记多了！

但互联网的协议是用IP地址进行身份识别的，现在搞了这么个域名，怎么用起来呢？

计算机科学家们又搞了一个翻译系统出来： **域名解析系统DNS** 。

在访问真正的服务器之前，先通过这个解析系统，把这个域名“翻译”成对应的IP地址，拿到这个IP地址后，再去进行后面的网络访问。

![图片](https://mmbiz.qpic.cn/mmbiz_png/jXQDbLkGBYVrA458wtZX6vWpMgpsiaVaNYYicAELJBUKiactcq9cciaEoxp13kY5W048f5QWgzX2xNhmPlEVHzvkWA/640?wx_fmt=png)

当然，这个过程都被现在的软件自动化的进行了，比如你在浏览器里输入`www.baidu.com`之后按下回车，浏览器自动完成了这个解析的过程，这对我们普通的用户来说是透明的（看不见的）。

那么问题来了，这个负责域名解析的东西是什么样的？

它是一台服务器吗？它位于哪个地方呢？

首先，它不是一台服务器，万一崩了，那全世界都上不了网了。

其次，它也不是一个简单的多点集群，全世界的网站这么多，每个节点要存储所有的域名——IP映射关系，那也是不切实际的。

事实上，真正的域名解析系统它是一个分层级的庞大系统。

>   * 本地DNS服务器
>   * 权威域名服务器
>   * 顶级域名服务器
>   * 根域名服务器
>

我们每个电脑和手机里面都设置了本地DNS服务器（简称LDNS），需要解析域名的时候，就向LDNS发出请求。

大家可以在自己的电脑上执行`nslookup`或`ipconfig`命令，查看自己电脑上配置的DNS服务器地址是什么：

![图片](https://mmbiz.qpic.cn/mmbiz_png/jXQDbLkGBYVrA458wtZX6vWpMgpsiaVaNm5NLNQlCibrIQ3ody9oFO3WZYJJHRejpqGickRTcuDKkt93ylz5kFDiaw/640?wx_fmt=png)

我们以`www.example.com`这个域名为例，来看一下DNS的解析过程。

>   * 你的电脑问LDNS：www.example.com的IP是什么？
>   * LDNS：查无此域名，问一下根服务器看看：www.example.com的IP是什么？
>   * 根服务器：我可是十三大长老，哪管这些。你去问负责.com域名解析的顶级域名服务器吧，它肯定知道。
>   * LDNS问.com顶级域名服务器：大佬，www.example.com的IP是什么？
>   * .com顶级域名服务器：这我也不知道，你问问ns.example.com看看，它负责解析所有example.com下面的域名。
>   * LDNS问ns.example.com：大佬，www.example.com的IP是什么？
>   * ns.example.com：这我知道，是xxx.xxx.xx.xxx
>   * LDNS：谢谢大佬
>   * LDNS回复你的电脑：查到了，是xxx.xxx.xx.xxx，可累死我了···
>

整个过程大概是下面这图所示，不过需要说明的是，并不是每一次DNS请求都会经历这样的过程，有些时候中间节点有缓存，路径就会变得不一样了。

![图片](https://mmbiz.qpic.cn/mmbiz_png/jXQDbLkGBYVrA458wtZX6vWpMgpsiaVaNJ6KtcARCJ9xl9ZpribBZGeueebnj80Lib1Ss3bvSX9t1ticOwhwNWVeCA/640?wx_fmt=png)

由此可见，根域名解析服务器在整个过程中扮演的角色至关重要。

那么，问题又来了，全世界有多少根DNS？

答案是13个，其中10个在美国，英国和瑞典各1个，日本1个。

这13个根的名字和IP在这里可以公开查阅：

> https://www.internic.net/domain/named.root

![图片](https://mmbiz.qpic.cn/mmbiz_png/jXQDbLkGBYVrA458wtZX6vWpMgpsiaVaNNfmAS5zmj12Qs5LG9icpicY1xDEX3bDDZymm3FmFQNc4hf3yfhxZgo8w/640?wx_fmt=png)

他们的名字从`A.root-servers.net`到`M.root-servers.net`。

其中，A开头那个是主根，其他12个（B、C、D、E、F、G、H、I、J、K、L、M）是辅根。

由于技术上的历史原因，根服务器只有13个，想知道具体原因的朋友，可以看看这篇文章：

[为何根域名服务器只有13个？](https://mp.weixin.qq.com/s?__biz=MzIxNTM3NDE2Nw==&mid=2247485245&idx=1&sn=24026f2c23a7041c0de5a9d8e16b0f00&scene=21#wechat_redirect)

但是需要注意的是，这里说的13个，并非真的只有13台物理机器，全球的互联网如果都只靠这十三台计算机维系，那风险还是很大的。

在逻辑上，根确实只有13个，但每个根都有镜像啊！

所以，根服务器实际上总共有1518个（截止2022-02-27）之多，在下面这个网站，你可以看到全球所有的根服务器分布情况：

> https://root-servers.org/

![图片](https://mmbiz.qpic.cn/mmbiz_png/jXQDbLkGBYVrA458wtZX6vWpMgpsiaVaNdZJjZ6HoqibWxs3uf3ID5rwQkOaPslOJZRmKvkHBuPJrDDdamQL6JnA/640?wx_fmt=png)

从A到M，每一个根服务器背后都有许多镜像节点，分布在全球不同的地方。

下面是我们中国所拥有的根镜像服务器：

![图片](https://mmbiz.qpic.cn/mmbiz_png/jXQDbLkGBYVrA458wtZX6vWpMgpsiaVaNCQEzXzoNRicaDbXmhw2jYtDPbCVf6eakygib5gYftn8O3N5v7pmzdwmw/640?wx_fmt=png)

单是北京，就拥有8个节点。

![图片](https://mmbiz.qpic.cn/mmbiz_png/jXQDbLkGBYVrA458wtZX6vWpMgpsiaVaNo9vPEibovZdOjyBn7fUuHdZopJ9eCvUme6kwk9iaicZX7PoFsoFiaMBOVQ/640?wx_fmt=png)

再次注意，根服务器的IP只有13个，但是却有一千多个物理服务器节点。

那这是怎么办到的呢？这里用到了一个叫“ **任播** ”的网络技术。简单理解就是： **可以让世界上不同的多台计算机，拥有同一个IP地址** 。

注意，这里的IP地址是公网地址，如果是私有地址那没啥讨论的。

小伙伴儿们可能一脸问号了，具体在网络路由的时候，具体选择哪一台计算机呢？

这个问题说来话长，也不是今天的重点，感兴趣的同学可以看看这个：

> https://docs.microsoft.com/zh-cn/windows-
> server/networking/dns/deploy/anycast

 **我国境内发出的对根DNS的请求，基本上都由国内的镜像完成了，并没有路由到国外的根服务器上去。**

注意这一点，非常重要！

这么多台根服务器，它们是如何协同工作的呢？

简单来说： **所有的辅根从主根同步数据，而所有的镜像从对应的根服务器来同步数据。**

按照这个逻辑，A根就是超级大boss，只要它改了，其他一千多个节点都得跟着改。

那么，如果某一天美国把A根中关于.cn的相关信息全部删掉，那全世界的根服务器都会跟着删掉，那中国将从互联网消失吗？

这个时候，建设自主可控的根镜像服务器的重要性就体现出来了。

服务器在我这儿，我不同步删除的内容，或者同步完加上删除的内容，就能破解这个问题！

因为前面交代了，国内对根DNS的请求，基本都是国内镜像完成的，并没有路由出去。

当然，其他国家的根镜像我们控制不了，他们可能无法访问.cn的域名，但只要他们想要访问，就会加回去，并拒绝同步美国删除的内容，如此一来，最后只有美国人自己访问不了.cn的域名。

同样的道理也适用于俄罗斯，在root-servers网站上，也可以看到俄罗斯同样建设了许多的根镜像服务器，比如首都莫斯科：

![图片](https://mmbiz.qpic.cn/mmbiz_png/jXQDbLkGBYVrA458wtZX6vWpMgpsiaVaN98AU4mgZWEKZxuk27eXVrpUlh96YVsC1lKBs26AbTM649ibnng4kXfw/640?wx_fmt=png)

他们同样可以拒绝同步删除俄罗斯的国家域名.ru的解析信息。

所以，想通过封禁根域名解析服务让一个国家从互联网消失，没那么容易。

但如果是一个没有建设根镜像服务器的国家呢？

## 推荐

  * [Github掘金计划](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzIwNDgzMzI3Mg==&action=getalbum&album_id=1571213952619954180#wechat_redirect) ：历史优质原创汇总！用心发掘 Github 和 Gitee 上优质的开源项目。
  * [编程基础](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1632585323454971905&__biz=MzIwNDgzMzI3Mg==#wechat_redirect) ：精选编程基础如学习路线、编程语言相关的开源项目。
  * [计算机基础](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1635325633234780161&__biz=MzIwNDgzMzI3Mg==#wechat_redirect)：精选计算机基础（操作系统、计算机网络、算法、数据结构）相关的开源项目。
  * [技术面试](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1632589980491366403&__biz=MzIwNDgzMzI3Mg==#wechat_redirect) ：精选技术面试相关的开源项目。
  * [项目实战](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1632590550748938241&__biz=MzIwNDgzMzI3Mg==#wechat_redirect) ：精选实战类型的开源项目。
  * [神器工具&网站](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzIwNDgzMzI3Mg==&action=getalbum&album_id=1692140336665378820#wechat_redirect) : 一些好用的插件、软件、网站。

  

用心发掘 Github 和 Gitee 上优质的开源项目。

欢迎关注！欢迎点赞分享！

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/BcyAypujBVZqeicvzhcGl7FLyAw3Xsu2POdZOiaPnQXryMp8gyzkcKF4NGgOydQcCWhicNREhf8fQ1euq2lTzhrtA/640?wx_fmt=jpeg)

  

预览时标签不可点

