----------------------------------------
----------------------------------------
#  B 站 CEO 的身份证被上传到 GitHub 了？

[ Github掘金计划 ](javascript:void\(0\);)

**Github掘金计划** ![]()

微信号 GithubStar

功能介绍 用心发掘 Github 和 Gitee 上优质的开源项目。

____

_2021-09-05 04:03_ _发表于_

收录于合集

#开源趣闻 2 个

#github 12 个

> ##### 本文经AI新媒体量子位（ID：QbitAI）授权转载，转载请联系出处
>
> ##### 明敏 发自 凹非寺

AI 自动补全代码，结果补出来了一张别人的身份证？

GitHub Copilot 又出神操作了。

有人在推特上晒图，表示自己在使用 GitHub Copilot 时，它竟然给补全出了一张身份证信息出来。

![图片](https://mmbiz.qpic.cn/mmbiz_png/YicUhk5aAGtBSy4fibquicAGWweoiaYpn6WGKqfBXibGyC5ZpcZ0Nfwg8nlAhmOicA18omc6scLKpeCTXevhgsP7pLjg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

输入 B 站 CEO 陈睿的信息后，下方竟然自动补出了 **身份证号** 。  

这操作确实够吓人的。

网友就表示：恐成社工库利器啊！

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg
width='1px' height='1px' viewBox='0 0 1 1' version='1.1'
xmlns='http://www.w3.org/2000/svg'
xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg
stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-
opacity='0'%3E%3Cg transform='translate\(-249.000000, -126.000000\)'
fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1'
height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

不过恐慌之际，眼尖的网友们很快发现了问题：

显示的身份证号其实是 **假的** ，其中出生年份和校验位明显都是错的。

陈睿应该是 1978 年生，而这里的证件号上显示为 1988。

> 叔叔我啊，变年轻了

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg
width='1px' height='1px' viewBox='0 0 1 1' version='1.1'
xmlns='http://www.w3.org/2000/svg'
xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg
stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-
opacity='0'%3E%3Cg transform='translate\(-249.000000, -126.000000\)'
fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1'
height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

也就是说，这串所谓的身份证号，其实是 GitHub Copilot 自动生成的 **假数据** 。

这让人们提起来的心稍微放下了一些。

但是原本是生成代码的 GitHub Copilot，怎么会生成个人隐私信息呢？

## 吃了的，不经意又吐出来

这和 GitHub Copilot 的工作原理有一定关系。

GitHub Copilot 由 **Codex** 模型支持，它可以看做是 GPT-3 的升级版，既能看懂代码、也能看懂自然语言。

 **一方面** ，GitHub Copilot 为了能看懂注释，需要接受像 GPT-3 一样的语言训练。

语言模型在生成结果时，往往会随机表现出某些训练数据的特征。

也就是模型 “记住了” 见过的数据信息，处理任务时，把它 “吃进去” 的训练数据又 “吐了出来”。

而对于 GPT-3、BERT 这些超大型语言模型来说，训练数据集的来源往往包罗万象，大部分是从 **网络公共信息** 中抓取，其中免不了
**个人敏感信息** ，比如姓名、地址、身份证号等等。

有人就表示，b 站高层的个人信息可能早就被人恶意曝光了。

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg
width='1px' height='1px' viewBox='0 0 1 1' version='1.1'
xmlns='http://www.w3.org/2000/svg'
xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg
stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-
opacity='0'%3E%3Cg transform='translate\(-249.000000, -126.000000\)'
fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1'
height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

这一次很可能是 GitHub Copilot 在生成结果时，随机表现出了一些训练数据的特征，这部分数据刚好来自陈睿的隐私信息。

事实上，GitHub 的 CEO Nat Friedman 也回应过类似的问题。

他表示 GitHub Copilot 给出的隐私信息都是 **假的** ，是通过训练数据合成而来。

而前不久曝出的 Copilot 抄袭大神代码、原版注释一事，直接让 Nat 这番回应啪啪打脸。

自动生成的代码不仅和原版一样，连 “what the fuck” 那句注释也用上了。

######  **![图片](data:image/svg+xml,%3C%3Fxml version='1.0'
encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1'
version='1.1' xmlns='http://www.w3.org/2000/svg'
xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg
stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-
opacity='0'%3E%3Cg transform='translate\(-249.000000, -126.000000\)'
fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1'
height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)**

######  **△** GitHub Copilot 复刻 Quake 代码

 **另一方面** ，GitHub Copilot 是由数十亿行 **公开代码** 训练的。

有人认为，这可能是训练集中的原始代码就违反了相关隐私条款。

GitHub Copilot 受到错误代码的影响，意外把陈睿的个人信息从数据集里套了出来。

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg
width='1px' height='1px' viewBox='0 0 1 1' version='1.1'
xmlns='http://www.w3.org/2000/svg'
xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg
stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-
opacity='0'%3E%3Cg transform='translate\(-249.000000, -126.000000\)'
fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1'
height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

虽然这次情况可能只是个意外，但是也暴露了 GitHub Copilot 在安全隐私上存在许多风险。

有网友就对 GitHub Copilot 的敏感信息处理，表示担忧：

> 倒是说会对敏感信息处理，但是我觉得总会有漏的。

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg
width='1px' height='1px' viewBox='0 0 1 1' version='1.1'
xmlns='http://www.w3.org/2000/svg'
xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg
stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-
opacity='0'%3E%3Cg transform='translate\(-249.000000, -126.000000\)'
fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1'
height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

小米开源技术委员会主席、小米副总裁崔宝秋则表示，这提醒了用户要注意自己的安全隐私保护，个人数据要记得匿名化。

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg
width='1px' height='1px' viewBox='0 0 1 1' version='1.1'
xmlns='http://www.w3.org/2000/svg'
xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg
stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-
opacity='0'%3E%3Cg transform='translate\(-249.000000, -126.000000\)'
fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1'
height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

## GitHub Copilot 争议不断

事实上，GitHub Copilot 从上线以来就争议不断：

直接照抄源代码、没有开源许可证；

由公共代码库训练，却要以付费商品上线；

……

除了安全隐私上的风险，openAI 还发现 GitHub Copilot 的模型 Codex 与 GPT-3 一样，会生成带有种族主义或其他伦理问题的结果。

最近，自由软件基金会（Free Software Foundation，FSF）也发出了抗议，他们表示使用 GitHub Copilot 必须运行
Visual Studio IDE 或 Visual Studio Code 这种付费软件，侵犯了用户的权益。

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg
width='1px' height='1px' viewBox='0 0 1 1' version='1.1'
xmlns='http://www.w3.org/2000/svg'
xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg
stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-
opacity='0'%3E%3Cg transform='translate\(-249.000000, -126.000000\)'
fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1'
height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

为此，FSF 正在向大众征集 GitHub Copilot 在版权、法律等问题的投稿。

对于这一抗议，GitHub 方面则表示愿意对任何问题持开放态度。

“这是一个全新的领域，我们渴望与开发者就这些话题进行讨论，并引领行业为训练人工智能模型制定适当的标准。”

预览时标签不可点

收录于合集 #开源趣闻

2个

上一篇违反开源协议？知名网红前往深圳公司上门索取源码！

