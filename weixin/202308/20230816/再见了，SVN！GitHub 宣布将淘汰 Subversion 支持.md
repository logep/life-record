----------------------------------------
----------------------------------------
#  再见了，SVN！GitHub 宣布将淘汰 Subversion 支持

[ Github掘金计划 ](javascript:void\(0\);)

**Github掘金计划** ![]()

微信号 GithubStar

功能介绍 用心发掘 Github 和 Gitee 上优质的开源项目。

____

_2023-02-15 00:30_ _发表于 湖北_

收录于合集

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/BcyAypujBVaJOjZopWC7VWgibu3sz7e4CveIYLBZDX3YzwUkR4uEFvcnZRrJHtX6Nly58562iaDFvPyO4fNzE9gw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

来源：InfoQ、编译：核子可乐、Tina在 Git 的绝对统治下，你还记得 SVN 吗？

明年一月，GitHub 将从 GitHub.com 删除 Subversion 支持，GitHub Enterprise Server
不久后也将遵循此操作。

GitHub 是全球规模最大的 Subversion 主机，但现在因为维护成本和版本控制的演变，GitHub 正在淘汰这个服务。

1GitHub 告别 Subversion

GitHub 于 2010 年引入 Subversion
支持，那时候版本控制软件的格局与现在有很大的不同，大部分人使用的是有十年发展历史的集中式版本控制系统 Subversion ，而 Git
则是一个新生事物。当时，谁都没有料到分布式版本控制最终会接管集中式版本控制，更不会有人预料到 Git 会在十年后发展成为主流。

如今，十三年已经过去，有高达 94% 的开发人员在使用 Git，而 Subversion 比以前少见得多。而且，根据 GitHub 的说法，每个月只有
5000 个存储库收到 SVN 请求，其中仅 0.02％的请求通过 Subversion 端点发送。

GitHub 的联合创始人 Scott Chacon 发推表示，“13 年前的愚人节，GitHub 发布了有史以来最好的愚人节帖子：SVN 在 GitHub
上完全可用。尽管它已经有了很长的历史，但现在它终于要结束了。”

![图片](https://mmbiz.qpic.cn/mmbiz_png/YriaiaJPb26VOXPiaXepziatFkqVGoXju4EHj5Phy6mG4y0RJ8Csq4lG7ickBAwnGfbd1lgUlfRJsvhaW2MheJ086uw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

对此，有网友表示惊讶：“GitHub 居然到现在还支持 SVN？？”在 Git 后端上提供 SVN 并不是常用方法。比如 GitHub 的老对手
GitLab 仅支持 Git 以及最大的云提供商的托管服务 AWS CodeCommit、Cloud Source Repositories，而 Azure
Repos 从未有过 Subversion 接口。

GitHub 停止 Subversion 支持也给其他企业敲响了警钟，Newfold Digital WP 战略负责人 Joost de Valk
跟评道：“GitHub 正在淘汰 Subversion 支持。也许是 WordPress 停止使用 Subversion 的时候了？”

![图片](https://mmbiz.qpic.cn/mmbiz_png/YriaiaJPb26VOXPiaXepziatFkqVGoXju4EHyAVqLLggZGcL2VDnyOlO70hjRlZyEoNk9fBkxbtg2MUyOV4LwevcBw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

我们创建了一个高质量的技术交流群，与优秀的人在一起，自己也会优秀起来，赶紧[点击加群](https://mp.weixin.qq.com/s?__biz=MzAxODcyNjEzNQ==&mid=2247554212&idx=4&sn=609c66e339d7345ab00205da2abb8f9e&chksm=9bd3b93caca4302ad7fd37133fb45f526d4268914a5f65839285adbd5dc7c77b057168f4a8d5&scene=21&token=2077530613&lang=zh_CN#wechat_redirect)，享受一起成长的快乐。

2为什么 Git 会成为版本控制市场上的独苗？

根据 2022 年 Stack Overflow 开发者调查报告，对于目前的版本控制软件市场份额，Git 占据了约 94%，其次是 SVN (Apache
Subversion) 和 Mercurial。

![图片](https://mmbiz.qpic.cn/mmbiz_png/YriaiaJPb26VOXPiaXepziatFkqVGoXju4EHUqkzHjdh1ZTKW7iaHXDKB5ib67H3x3KF0Q3h3WtwWgVeQBAvHogYic4Aw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

曾经有一段时间，SVN 和 Mercurial 表现也很突出，相信很多有十年以上开发经验的人会记得它们。只是如今，很明显，Git
成为了绝对的赢家。现在，让我们一起回忆一下版本控制的演变历史吧。

Apache Subversion

Subversion（SVN）是一套开源版本控制系统，通过中央服务器进行源代码维护；任何打算变更代码的用户都可以通过客户端访问到这些文件。与 Git
使用的分布式模型相比，SVN 的客户端 -
服务器模型显得比较老派，变更会先被存储在本地，并在推送到上游代码仓库时被分发至中央历史记录（及其他分支）。事实上，SVN
确实是以之前的版本控制为基础，最初就是想成为 CVS（并发版本系统）的高兼容度继任方案。有些朋友可能不太熟悉，CVS 最初发布于 1982
年，属于版本控制系统（RCS）的一种前端和扩展。

上一代版本控制方案主要面向 10 到 15
年前的软件构建方式。当时，软件会被构建成集中代码仓库，所添加的全部功能都被合并至单一主干当中。分支本身很少见，即使有最终也会被吸纳进主干内。各种重要文件——特别是那些大型二进制文件——都可以进行“锁定”，防止其他开发人员在我们处理的同时做出变更。另外，文件、分支、标签等一切都以目录的形式存在。这种模型非常适合集中工作的开发团队，最终成果就是特定的一个版本，通过光盘或者下载链接的形式分发。

SVN 就是这种模型的免费开源版本。作为付费型客户端 - 服务器版本控制系统的典型代表，Perforce
在大型企业（特别是谷歌）中具备一定吸引力；但对于不打算为此额外花钱的用户，SVN
是个不错的选择。不少小公司（包括我们自己）刚开始都会用集中式版本控制来管理代码，这甚至成了很多开发团队的习惯和偏好。

 **但过去十几年间，工程组织的运作方式发生了颠覆性的变化**
。不再由中央开发团队在单一代码仓库上工作；现在我们面对的是多个独立团队，每个团队各自负责一项或多项服务。VonC 是一位版本控制专家，帮助很多企业摆脱了
SVN。他认为 SVN 是一种专为“敏捷性较为低下的工作方式”而设计的方案。“这已经妨碍到了管理、代码仓库的创建 /
注册、以及常规开发工作流程。与之相对应的是，分布式模型在这些方面更加敏捷。我认为近期不断壮大的远程办公声势，将会进一步冲击这些封闭的环境系统。”

SVN 越来越无人问津的另一个原因，就是 Git 用事实证明了自己更好、更强。高级软件工程师 Quentin Headen 在刚开始工作那会曾用过
SVN。“在我看来，SVN 有两个致命缺点。首先，它采用集中式设计，就是说 SVN
服务器必须处于运行状态才能接收开发者提交的变更。一旦互联网发生故障，麻烦就大了。第二点，分支是种负担。一旦创建了分支，就没法将其删除（如果我没记错的话）。虽然有一条命令可以删掉分支，但它仍然会被保留在历史记录中。Git
分支就更轻松易用，能在必要时直接删除。”

很明显，随着新一代版本控制系统的诞生，SVN 失去了其优势地位。而且需要注意的是，当时冲击 SVN 的绝不止 Git 这一位。

Mercurial

没错，Git 并不是分布式版本控制家族的唯一成员。Mercurial 与 Git 同样于 2005
年首次亮相，取得的江湖地位也在伯仲之间。但最终，天下尽归于 Git，这个相信大家已经看到了。

当初，Mercurial 似乎更照顾用过早期版本控制系统的开发者。VonC 指出，“这有点类似于 VHS 与 Betamax（两种磁带格式）之争。”

Mercurial 的核心开发人员 Raphaël Gomès 和 Pierre-Yves David 提到，时至今日不少大型企业仍在以某种形式使用着
Mercurial，包括 Mozilla、Facebook（可能已经转移到 Mercurial 的 Rust 移植版本，名为 Eden）、谷歌（在其
Piper 自定义版本控制方案中保留了部分 Mercurial 功能）、诺基亚和 Jane Street。

“如今，Mercurial
的核心优势就是它能在体量极大的项目（处理数百万次提交和数百万个文件）上进行扩展。多年以来，众多公司在性能改进和专用功能方面做出贡献，这让 Mercurial
成为管理极大 monorepos 的可行选择。”

来自谷歌的 Ry4an Brase 解释了 Mercurial 仍具生命力的原因：“Git 已经与文件系统紧密结合。甚至 GitHub
也将代码仓库当成了磁盘上的文件进行访问。而大量用户针对单个代码仓库执行提交的并发需求，一定会超过文件系统的访问承载上限。谷歌和 Facebook
发现，Mercurial 能够适应这类数据存储需求，但 Git 不行。但随着 Git v2.38 和 Scalar
等近期发布的新成果，这种优势可能会逐步减弱。”

但 Mercurial 在吸引那些掌握大量 monorepos 的客户方面，还有另外一手绝活——可移植性与可扩展性。它是用 Python
编写的，所以不需要被编译成本地代码。只要具备 Python 解释器，它就能在任意操作系统上成为可行的版本控制选项。Mercurial
还具有强大的扩展系统。Gomès 和 David 解释道，“扩展系统允许用户对 Mercurial
的各个方面做出调整，包括自定义行为或接入现有系统，这种灵活性在企业环境中非常受欢迎。”

如今，Mercurial 仍然拥有不少铁杆粉丝。该项目也还是个挺活跃的项目，Gomès 和 David
仍然在做代码贡献、管理发布周期，并举办年度会议。虽然算不上市场领先的工具，但 Mercurial 牢牢守住了自己的一席之地。

为什么 Git 能笑到最后？

纵观 2022 年版本控制领域的基本格局，其实不难理解为什么分布式版本控制成了软件开发者们的首选方案。但是，为什么 Git 的市场份额会比
Mercurial 大那么多？它们的诞生时间相似、功能配置接近，颇有种既生瑜、何生亮之感。Brase 给出的理由是，“对于个人项目，我会选择
Mercurial。但如果是要创办一家公司，我会使用 Git 来避免重新培训和新人难上手等问题。”

Mercurial 当然也有自己的优势，SVN 用户对它的设计和集中式操作会感觉非常熟悉。VonC 表示，“Mercurial
其实上手更快、用起来感觉更熟悉，因为它跟 Subversion
有那么几分相似，只是采用了分布式模型。”但这种过于忠实旧时光的思路未必就是好事，“这也成了反对者拒绝 Mercurial
的理由，因为在去中心化开发成为主流的今天，在分布式模型外面套上传统工具的壳子实在没什么必要。”

至于 Git 为什么能压倒性胜出，也许可以简单归结为强大的平台与可观的首发用户群体。Gomès 和 David 坦言，“Mercurial 之所以在
2010 年代之初输给了 Git， **一方面是因为当时 GitHub 的飞速发展，另一方面是因为 Linux 社区对 Git 拥有天然认同** 。”

尽管 Mercurial 最初也占据了一点有利位置，但随着时间推移，这种优势逐渐消散。Brase 认为，“Mercurial 的最初定位是通过内置的 Web
UI 提供精心设计且连贯顺畅的用户体验。GitHub 虽然没能为 Git 提供同等水平的 Web
用户界面和连贯性，但庞大的贡献者群体和创始者的感召力最终牢牢压制住了 Mercurial。”

庞大贡献者群体所对应的，自然就是“雪崩”般的功能发布；再加上对用户需求的关注，无疑让 Git 顺利斩获可观的市场份额。近 15 年前，曾经有人将 Git
比作是“百战天龙”（特别擅长用身边小物件达成意外惊喜的特工片主角），而 Mercurial 则更像“007”。只要熟悉命令行，那 Git
能帮我们为几乎一切问题拼凑出定制化解决方案；而 Mercurial 相对更挑工作，如果合适则更加快速高效。面对现状，他的最新观点是“我当初对 Git
的用户界面最不满意，但它在多年的发展中逐步做出了改进（我现在用的是基于 Emacs 的 Git 前端，体验很好）；而 Mercurial
的主要缺点是在大型代码仓库上执行程度很慢，而且直到现在也没能解决。”

与“百战天龙”中的 MacGyver 一样，Git 一直在即兴发挥、迎接挑战。而如同 007 的经典男主 James Bond，Mercurial
也坚持着自己的行事风格——在某些情况下效果很好，但有时候则相当拉胯。Brase 认为，“我们可以通过一个例子来体会 Git 和 Mercurial
在处理新功能时的差别，即「config」命令。「git config」和「hg config」都是用于编辑用户邮件地址等设置的命令。「git
config」命令会自动为用户修改「~/.gitrc」，而且大多数情况下是正确的。Mercurial
的缔造者则坚决拒绝一切会编辑配置文件的提交贡献。相反，「hg
config」只会在「~/.hgrc」上启动文本编辑器。这就像在嘲讽我们，被文本配置文件吓倒的程序员，就像是会晕血的医生——统统不合格。”

总而言之，虽然 Git
好像已经成了版本控制市场上的独苗，但这个世界总有更多解决问题的办法，如果大家对目前的某些选项感到沮丧，不妨再多探究一番。一定还有别的途径，一定还有其他值得学习的新思路。

 **参考链接：**

https://www.infoq.com/news/2023/02/github-subversion-svn/

https://survey.stackoverflow.co/2022/#version-control-version-control-system

https://stackoverflow.blog/2023/01/09/beyond-git-the-other-version-control-
systems-developers-use/

 **推荐**

用心发掘优质开源项目，欢迎关注，欢迎点赞分享！

历史优质开源项目推荐地址：[Github
掘金计划](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzIwNDgzMzI3Mg==&action=getalbum&album_id=1571213952619954180#wechat_redirect)。

  * [计算机基础](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1635325633234780161&__biz=MzIwNDgzMzI3Mg==#wechat_redirect)：精选计算机基础（操作系统、计算机网络、算法、数据结构）相关的开源项目。
  * [神器工具](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzIwNDgzMzI3Mg==&action=getalbum&album_id=1692140336665378820#wechat_redirect) : 一些好用的插件、软件、网站。
  * [程序人生](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzIwNDgzMzI3Mg==&action=getalbum&album_id=2084343476975878144#wechat_redirect)：编程经历、英语学习、延寿指南。
  * [项目实战](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1632590550748938241&__biz=MzIwNDgzMzI3Mg==#wechat_redirect) ：精选实战类型的开源项目。

  

预览时标签不可点

