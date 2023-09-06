----------------------------------------
----------------------------------------
#  Webpack 创始人推出比 Webpack“快 700 倍”的 Turbopack，基于 Rust 编写

Tina  [ Github掘金计划 ](javascript:void\(0\);)

**Github掘金计划** ![]()

微信号 GithubStar

功能介绍 用心发掘 Github 和 Gitee 上优质的开源项目。

____

_2022-10-29 00:33_ _发表于 湖北_

收录于合集

10 月 26 日，Vercel 公司正式宣布推出新的打包工具 Turbopack。Webpack 创建者 Tobias Koppers 于 2021 年
4 月加入该公司，牵头了该项目。

Turbopack 是 Vercel 公司之前一些工作的延续。在此之前，他们用基于 Rust 的 SWC 替换基于 JavaScript 的转译器
Babel，速度提升了 17 倍。他们还替换了 Terser，压缩的速度提高了 6 倍，从而减少了加载时间和带宽的使用。

“Webpack 已被下载超过 30 亿次。它已成为 Web 构建不可或缺的一部分。但就像 Babel 和 Terser 一样，是时候全力以赴了。我加入了
Vercel，组建了一个团队来构建 Web 下一代的打包工具。”Tobias 说。

据 Vercel 首席执行官 Guillermo Rauch 介绍，与 Webpack 一样，Turbopack 也是开源的。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/XIibZ0YbvibkX3siapR3aYGz9KerXKo2LFM2SXlATLUSz06W6fyNRCZbHVhyoxvaWE9VKx97jT6J2Ty5UoEuiapMrw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

Vercel 声称 Turbopack 在大型应用中，展示出了 10 倍于 Vite 的速度，700 倍于 Webpack
的速度。在更大的应用中，差异更加巨大 —— 通常比 Vite 快 20 倍。而且启动速度飞快，在一个 3000 个模块的应用里，Turbopack 只花了
1.8 秒启动，Vite 花了 11.4 秒。

Rauch 说，性能改进不仅是因为基于 Rust ，还在于“基于增量计算思想的架构”。该团队借鉴了谷歌 Bazel
构建系统中的一些想法，该系统适用于大型项目。增量方法意味着避免做重复的工作，“如果你创建一个增量图，开发人员在其中进行更改，只有受影响的图部分会被重新计算。”

Turbopack——目前处于 alpha 预览阶段——是“一种更好的架构，我认为 Rust 和正确架构相结合意味着我们至少在 10
年内不需要改变，”Rauch 表示。

Turbopack 是怎么来的？“Next.js 早在 2016 年就开始使用 Webpack 作为组件，”他说。“我们可能是 Webpack
的最大用户。我们在开始时和 Webpack 创建者 Tobias 聊了很多，因为当时我们有像沃尔玛这样的客户，有超过 250 名工程师在 Next.js
代码库上工作，分享一些关于编译过程的反馈。我们意识到 JavaScript 和 TypeScript 代码的数量增长如此之快，以至于超出了基于
JavaScript 的工具和架构的能力。Tobias 也从未想过该工具会得到如此广泛的采用。”

Webpack 面向单页应用程序 (SPA) ，“但我们不是，因此我们改变了 Webpack 的默认设置。”当 Koppers 加入 Vercel
时，“他带来了 10 年的专业知识，见证了这件事情的发展，”Rauch 说。“他意识到架构和运行时的所有缺陷。因此，Tobias 成为了 Rust
专家。”Turbopack 一个有趣的特性是，多亏了 Rust，它可以编译成 WebAssembly 并在浏览器中运行。

“Turbopack 旨在成为 Webpack 的直接替代品，Next.js 是它的第一个客户，”Vercel 首席技术官 Malte Ubl
说，“随着时间的推移，我们计划针对所有开发者用例继续迭代和改进 Turbopack。”

延伸阅读：https://vercel.com/blog/turbopackhttps://devclass.com/2022/10/25/webpack-
founder-debuts-rust-based-turbopack-that-is-700x-faster/

## 推荐

用心发掘优质开源项目，欢迎关注，欢迎点赞分享！

历史优质开源项目推荐地址：[Github
掘金计划](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzIwNDgzMzI3Mg==&action=getalbum&album_id=1571213952619954180#wechat_redirect)。

  * [计算机基础](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1635325633234780161&__biz=MzIwNDgzMzI3Mg==#wechat_redirect)：精选计算机基础（操作系统、计算机网络、算法、数据结构）相关的开源项目。

  * [神器工具](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzIwNDgzMzI3Mg==&action=getalbum&album_id=1692140336665378820#wechat_redirect) : 一些好用的插件、软件、网站。

  * [程序人生](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzIwNDgzMzI3Mg==&action=getalbum&album_id=2084343476975878144#wechat_redirect)：编程经历、英语学习、延寿指南。

  * [项目实战](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1632590550748938241&__biz=MzIwNDgzMzI3Mg==#wechat_redirect) ：精选实战类型的开源项目。

预览时标签不可点

