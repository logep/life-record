----------------------------------------
----------------------------------------
#  一个误操作，GitHub上十年攒的54k+Star全没了！

小金  [ Github掘金计划 ](javascript:void\(0\);)

**Github掘金计划** ![]()

微信号 GithubStar

功能介绍 用心发掘 Github 和 Gitee 上优质的开源项目。

____

_2022-04-17 15:07_ _发表于_

收录于合集 #Github掘金计划 81个

经常逛 Github 的人应该知道，每个项目右上角都有一个 Star
选项。虽然它的翻译是“星星”，但将其理解为关注或点赞或许更为合适：点击即代表你对这个项目的支持与喜爱，因此许多优质开源项目长年累月下来都能获得诸多
Star。

然而，“十年累之，毁于一旦”的悲剧，最近发生在了 HTTPie 项目身上：4月14日，HTTPie 项目开发者 Jakub Roztočil
在其官方博客发布了一篇文章——“ **我们是如何失去 54k GitHub Star 的** ”。

* * *

  

### 十年共获 54k+ Star

HTTPie，是一个开源的命令行 HTTP 工具包，提供命令行交互方式来访问 HTTP 服务。与其它同类型项目不同之处在于：为尽可能使终端的 API
交互人性化，HTTPie 是从头开始构建的。

自 2012 年 2 月 25 日发布第一个公开版本开始，HTTPie 团队就将项目托管在 GitHub 上了。Jakub Roztočil
解释道：“当我意识到自己的 API 测试结果可能会引起开发人员社区的广泛兴趣时，GitHub 作为代码托管平台，显然是个不错的选择。”

事实证明，Jakub Roztočil 的选择没有错：多年来，HTTPie 开发团队对项目不断改进，吸引了众多开发者的使用与好评， **HTTPie
也因此逐渐成为了 GitHub 上最受欢迎的 API 工具，还是 GitHub 上最受欢迎的 80 个公共存储库之一，Star 数高达 54k+** 。

![图片](https://mmbiz.qpic.cn/mmbiz_png/BcyAypujBVap2MT35ncYCr0Bk4yqD0LKic3WDns8NzGm2gib50hxZm3kFvmclq3jeiaz55Hd2MTA49N0vCXeueiblw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

Jakub Roztočil 对这一成绩表示感恩：“这个不起眼的工具居然吸引了如此庞大的社区，真是令人难以置信， **GitHub
在这之中发挥了重要作用** 。”

然而，就在 HTTPie 发展一切顺利、即将迎来在 GitHub 上托管十周年之际， **Jakub Roztočil 的一个误操，令 HTTPie
这十年积攒的所有 Star 都凭空消失了** 。

Jakub Roztočil 懊恼表示：“ **我不小心将 HTTPie 项目的存储库设为私有了** 。”

* * *

  

### 54k+ Star 瞬间消失

那天，Jakub Roztočil 先是将自己的 jakubroztocil/jakubroztocil 设置为私有，即在其个人资料中隐藏了一个空的
README。随后，他只是想以相同的操作在组织资料中也隐去一个空 README 文件，不料却成为了“悲剧”的开始。

不知道是否有人注意到，在 GitHub 进行配置文件和存储库时，通过用户和通过组织的命名虽有不同，但非常相似：name/name（用户）与
name/.github.（组织）——这也就是 Jakub Roztočil 误认为自己在另一个零 Star 的空存储库中的原因：“
**我没有意识到命名存在不一致，所以我错误地选择了私有化 httpie/httpie 而不是 httpie/.github。** ”

（注：httpie/httpie 是拥有 54k+ Star 的项目存储库，而 Jakub Roztočil 本来想隐藏的是
httpie/.github。）

或许有人会问：那将项目再公开不就好了？不错，可问题是 GitHub 有一个“无情”的设定： **一旦将存储库设为私有，将永久删除其所有 Watch 和
Star** 。

也就是说， **HTTPie 用十年积攒下来的 54k+ Star 一瞬之间就没了** 。

###
![图片](https://mmbiz.qpic.cn/mmbiz_png/BcyAypujBVap2MT35ncYCr0Bk4yqD0LKVjP24bmM5yZPL9Uk4ib3Ax73gJORAuakaf3GTRLKz5puMJqWHTyuuVg/640?wx_fmt=png)

* * *

### 聊胜于无的“确认框”  

按常理来说，手机里删个照片都会“温馨提醒”一下，对于这种具有较大影响的操作，GitHub 应该也会提醒吧？

“确实有一个确认框”，Jakub Roztočil 表示：“GitHub 会提醒你一句‘ **你将永远失去这个存储库的所有 Watch 和 Star**
’。”

可是，这个确认框的内容一成不变：不论是对于没有 Star、没有内容的存储库，还是面对具有十年历史、54k+ Star 的存储库，这个
**确认框都几乎一模一样** （只有最后一行的 httpie/httpie 和 httpie/.github
不同）——这对此前刚在其个人资料中顺利隐藏了一个空 README 文件的 Jakub Roztočil 来说，确认框的提醒作用聊胜于无。

一起来对比下面两张图，你能区分出哪一个是空存储库可以安心删除，哪一个会重置已拥有 54k+ Star 的存储库吗？

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/BcyAypujBVap2MT35ncYCr0Bk4yqD0LKEKCtnqSoa66SjfUoR9a15gm2u2Tia8nlLibvZSqLM6OoPsA7EnxYFyKQ/640?wx_fmt=jpeg)

Jakub Roztočil 无奈表示：“提醒内容应更结合实际， **如果确认框中说‘你将失去 54k+ Star’，那我肯定会停下来** 。

* * *

  

### “双标”的 GitHub

可惜，以上分析及感想均产生于在“悲剧”发生之后。

彼时尚未意识到自己错误的 Jakub Roztočil， **在完成操作后看到组织页面的时候，陷入了无尽的茫然** ：为什么我想要隐藏的空 README
文件还在，最受欢迎的 HTTPie 存储库却不见了？

片刻之后，Jakub Roztočil 突然意识到发生了什么，火速回到存储库试图改正，可直到半小时后 GitHub 才允许： **这半小时中，GitHub
忙着级联删除 HTTPie 这十年来所有的 Watch 和 Star** 。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/BcyAypujBVap2MT35ncYCr0Bk4yqD0LKmea4NqTn6TSeJiaLuOoNGNdicIsTLYiaLJL1a59JQh7iaXHyghlU99Frnw/640?wx_fmt=jpeg)

Jakub Roztočil 沮丧道：“我没有办法阻止这个过程，便开始发邮件给 GitHub 寻求支持，可最后也只能在 Star 数降为 0
后，再将存储库公开。”

事发之后，Jakub Roztočil 希望 GitHub 能利用备份帮助其恢复 HTTPie 54k+ Star 的社区，因为 GitHub
自己也曾发生过类似意外：GitHub 团队有次 **不小心将 GitHub Desktop 应用存储库设为私有，随后没几个小时就恢复了包括 Star
在内的一切** ，当时 GitHub 前 CEO 还特地解释是 **通过数据库备份恢复的** 。

但 GitHub 拒绝了 Jakub Roztočil 的请求，理由是这 **会导致不良影响** ，甚至即便 Jakub Roztočil
表示愿意为此提供经济补偿，GitHub 也还是拒绝。

对此，Jakub Roztočil 总结：“GitHub 可以通过备份恢复私有再公开的存储库，但 **前提是这得是他们自己的项目，而不是社区项目**
。他们最多给你发条推文呼吁一下。”

![图片](https://mmbiz.qpic.cn/mmbiz_png/BcyAypujBVap2MT35ncYCr0Bk4yqD0LKmKniatYcqZPggBtfNgk3AuHGicACxcAicHkEzNK52aklxoXc4OVFMU2gg/640?wx_fmt=png)

* * *

### “GitHub 难道不该提供更好的用户体验吗？”  

茫然过，慌乱过，无助过，也愤怒过，但最终 Jakub Roztočil 还是平静地接受了，毕竟一切已尘埃落定，54k+ Star
回不来了。所幸许多开发者在知情后纷纷重新点击了 Star，目前 HTTPie 的 Star 数也已达 4.5k+。（GitHub
地址：https://github.com/httpie/httpie）

![图片](https://mmbiz.qpic.cn/mmbiz_png/BcyAypujBVap2MT35ncYCr0Bk4yqD0LKibucbGCjPdj8YnTV5v6c3VCgGneAJc1khyco1QUSxS7Dic5vShgdQR8A/640?wx_fmt=png)

“虽然我们的选择有限，但至少有一些经验教训想与你们分享。”Jakub Roztočil 在最后如此说道。为避免其他人也发生类似“悲剧”，Jakub
Roztočil 结合 HTTPie 自身官网设计，对开发者提出了两点建议：

  *  **优化 UI/UX 设计** ：当用户要破坏/删除某样东西并产生较大影响时，提醒框应该准确反映后果严重性。

  *  **使用软删除** ：人无完人，难免都会犯错。就算使用硬删除，也尽量延迟其过程。

最后，Jakub Roztočil 所讲述的这段经历，出人意料地在 Hacker News 上 **引起了许多开发者的共鸣** 。

@vaishnavsm：“我真的很喜欢这篇文章。虽然作者显然对他们失去了他的社区并且 GitHub
没有恢复它感到难过（老实说，所有人在类似情况下都会难受的），但他们也在关注未来，并用他们的个人经历作为我们所有人都可以学习的寓言。
**作为设计师和开发人员，我们也将根据其建议改进我们的工具包。谢谢 HTTPie，你获得了一颗新 Star！** ”

@ghoomketu：“那个确认框的对比图真的很可怕，我看了两遍才发现最后一行不同。希望 Github 高层管理人员能尽快注意到这一点并加以改进。”

也有许多人终于在此刻 **爆发了对 GitHub 的不满** 。

@sefrost：“GitHub 自己犯了完全相同的错误，却能通过数据库备份修复它，这确实不公平。”

@bsuvc：“当然，作者应该对此次失误负责，但 **GitHub 难道就不该提供更好的用户体验吗？** 难道不小心私有化然后公开的存储库真的有必要清空其
Star 吗？这难道是项目作者和点击 Star 的开发者们想要看到的吗？”

那么在你看来，GitHub 又有哪些方面需要改进呢？

参考链接：

https://httpie.io/blog/stardust

https://news.ycombinator.com/item?id=31033758#31034195

> 整理 | 郑丽媛
>
> 出品 | CSDN （ID：CSDNnews）

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

收录于合集 #Github掘金计划

81个

上一篇Github 标星第一！这份自学编程指南YYDS下一篇Github 又火了一个教你做菜的项目！居家必备

