----------------------------------------
----------------------------------------
#  CLU编程语言的发明人，年过80依然对编程充满热情

[ Github掘金计划 ](javascript:void\(0\);)

**Github掘金计划** ![]()

微信号 GithubStar

功能介绍 用心发掘 Github 和 Gitee 上优质的开源项目。

____

_2021-10-19 10:13_ _发表于_

收录于合集

![图片](https://mmbiz.qpic.cn/mmbiz_png/BcyAypujBVbxP6QlGwxoWRGTJNnoXRgWZH4oKad4niagym6v1Wk4STFfCvt7tVJWhspMryIrkIafMZoKxRfQrmQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

来源：网络

编辑：David

  

你听说过CLU语言吗？也许没有。

  

这门发明于上世纪70年代的计算机编程语言并未获得广泛使用，和Python、C++、Java、C#这些后来大名鼎鼎的热门语言相比，CLU的名气确实没那么响。

  

 **但实际上，在这些热门语言中都能看到CLU的影子。**

>  **CLU是C++的模板的主要启发者。**
>
>  **CLU的异常处理机制影响了后来的语言如C++和Java。**
>
>  **Python和C#所包含的迭代器，最早出现在CLU中。**
>
>  **Python和Ruby从CLU中引入了传共享调用、yield语句和多赋值。**
>
> https://zh.wikipedia.org/wiki/CLU

CLU的发明人是2008年图灵奖得主Barbara
Liskov和她在MIT的学生们。最近，随着CLU被放到了在Github上，Liskov团队在上世纪70年代创建CLU编程语言的早期工作开始受到越来越多人的关注。

师从麦卡锡，师徒都得过图灵奖

  

Barbara Liskov，1939年生，美国国家工程院院士、美国艺术与科学院院士和计算机机械协会 (ACM) 院士。1961
年在加州大学伯克利分校获得数学学士学位， 1968年在斯坦福大学获得计算机科学博士学位， **是 第一位获得计算机科学博士学位的美国女性。**  

  

 **她的导师是1971年图灵奖得主、第一次提出“人工智能”一词的约翰·麦卡锡。**

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/UicQ7HgWiaUb312nuZyKAsIYnSI4h4T5iaZ6pxRGxsYkPQiaTcVCzD2aicnOAqB9nic23icG8ukXl5xJJ663hbH3HPiclw/640?wx_fmt=jpeg)

  

她于 1996 年获得女性工程师协会成就奖，2004 年获得 IEEE 约翰·冯·诺依曼奖章。

**2008 年因“对编程语言和系统设计的实践与理论基础，尤其是数据抽象化、容错和分布式计算的贡献”获得图灵奖。**

2002 年，Liskov 被《探索》杂志评为科学界最重要的 50 位女性之一。该杂志称
她“上世纪70年代在数据抽象方面的工作，为编写更加复杂和微妙的计算机程序铺平了道路，同时也是开发在网络连接的分布式计算机集合上运行的应用程序的关键人物。”

  

现在是2021年，距离Barbara Liskov 因对编程语言和系统设计的实践和理论基础的贡献获得图灵奖已经 13
年了，如今，这位CLU编程语言的创始人仍在继续致力于解决一些有趣的问题。

  

近日，theregister对这位今天仍活跃在学术一线的计算机科学家进行了采访。

年过八十，依然热爱编程的老太太

  

“在CLU开始起步时，由于当时编程语言的状态，有很多东西需要创新。”她说。

“我们那时候必须面对的是 **泛型问题**
，因为在抽象数据类型的概念提出之前，实际上已经需要泛型了。如果要写一个分类程序，谁都不想每次都重写不同类型的数组。但当时人们还没有真正认识到这个问题。

“当有了抽象数据类型之后就很清楚了，我们需要泛型，所以必须弄清楚如何处理泛型问题，这很重要。”

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/UicQ7HgWiaUb312nuZyKAsIYnSI4h4T5iaZw9rvvTcibBBgSVtIfXMODNicLcyNQECD4Xwy7gWl6uddR6nt0icA1yYEw/640?wx_fmt=jpeg)Barbara
Liskov在讨论抽象数据类型的设计  

还有 **错误处理问题** ，这在当时往往有点原始。Liskov
回忆起当时关于恢复模型与替代方案的争论：“问题是，在错误出现之后，能否通过控制恢复引发错误的那段代码，还是只是结束了那段代码？我们必须正视这一点。”

“如果没有办法在主数据流之外单独处理错误，那么就像今天很多时候一样，代码中很多错误的出现与错误的源头离得非常远，很难追踪到。

除了错误处理，Liskov **对迭代器的进一步创新** 也很突出。“这说明我们在某种程度上领先于时代，因为我们正在研究人们尚未真正面对的东西。”

“数据抽象是一件大事。”她说，“但所有其他的东西也都跟着来了。”

“如果你回顾一下上世纪90 年代Java 发生的事情，看看Java是如何使用参数多态的， **其实就是没有使用。** ”Liskov 笑道，

当然，Liskov 团队将 CLU 作为一个研究项目来开展，因此不受多个团体的需求的影响。但到了70 年代后期，分歧出现了：
**是尝试将这个语言商业化，还是继续坚持走研究的道路。Liskov 选择了后者。** “我的团队中没有一个学生感觉自己在创业。”

在今天，先把一些研究成果发在网上，再建立一个与之相关社区并没有多难，但上世纪70年代末的情况完全不同。“那时候要想这么做，必须通过公司，”她说。

编程第一要务：做真正需要做的事

  

在过去 20 年里，Liskov 参与的大部分开发工作都是在 C++
中进行的。“很多开发工作已经不再在机器编程语言中进行了。这是一个很大的改进，”她说，“数据抽象化的程度得到了提升，而且我确实认为模块化的原则已经很好理解了。”

不过，“令我感到遗憾，或者说与我的期望不同的是， **我希望编程语言强制执行封装。”**

“确实，”她承认，“有时你不得不违反这个原则，尤其是在构建一些低级平台时。”

然而，Liskov 认为封装（即将数据与处理该数据的方法一起打包成一个单元）是编程的一个关键部分：这样做“有利于模块化方式的运行”。

“在学术上，你可以加一些东西进去，然后和你的学生讨论它有多么重要，这样很好。但 **想让编译器强制执行一些东西，就完全是另一回事了。”**

不过和上世纪70年代相比，今天我们拥有巨大的存储能力，在设计模块时，结构的紧凑可以设计上的精巧：“是的，一方面尽量追求可用性，另一方面又要尽量简洁。”

Liskov 对她的学生 Russ Atkinson、Alan Snyder 和 Craig Schaffert 以及同样在MIT并于 1973
年与她一起改进 CLU 基础概念的 Stephen Zilles给予极高的赞扬。

![图片](https://mmbiz.qpic.cn/mmbiz_png/UicQ7HgWiaUb312nuZyKAsIYnSI4h4T5iaZbdVX7gdeZ1ib0732aiaznc35AuQt4LgtM9pjVu5bo2sHIIdNzdspIicgQ/640?wx_fmt=png)

  

另外，Bob Scheifler、Eliot Moss 和 Toby Bloom 也出现在 1979 年 10 月的 CLU 参考手册中。《CLU
的历史》一文中给出了更详细的贡献人员名单。

  

尽管已经年过八十，Liskov仍然对编程和技术充满热情。她曾说过：

  

 **你可以用编程语言做几乎任何事情。但问题在于：你要做真正需要做的事情。这些事情是容易做，还是难做？**

  

今天，这句话仍然值得我们思考。  

参考链接：

https://www.theregister.com/2021/09/16/barbara_liskov_interview/

https://news.mit.edu/2008/liskov-0630

https://en.wikipedia.org/wiki/Barbara_Liskov

https://medium.com/a-computer-of-ones-own/barbara-liskov-inventor-of-abstract-
data-types-9f8908fdcf86

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

  

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg
width='1px' height='1px' viewBox='0 0 1 1' version='1.1'
xmlns='http://www.w3.org/2000/svg'
xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg
stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-
opacity='0'%3E%3Cg transform='translate\(-249.000000, -126.000000\)'
fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1'
height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

预览时标签不可点

