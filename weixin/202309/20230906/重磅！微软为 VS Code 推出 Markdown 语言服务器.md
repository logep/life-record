----------------------------------------
----------------------------------------
#  重磅！微软为 VS Code 推出 Markdown 语言服务器

Matt Bierner  [ Github掘金计划 ](javascript:void\(0\);)

**Github掘金计划** ![]()

微信号 GithubStar

功能介绍 用心发掘 Github 和 Gitee 上优质的开源项目。

____

_2022-08-23 02:00_ _发表于 湖北_

收录于合集

#markdown 1 个

#程序员 43 个

微软近日发布官方博客表示，他们经过半年时间的努力为 VS Code 带来了 Markdown 语言服务器（Markdown Language
Server），这会是一个令人激动的成果。博客地址：https://code.visualstudio.com/blogs/2022/08/16/markdown-
language-server 。

![图片](https://mmbiz.qpic.cn/mmbiz_png/BcyAypujBVZ7ngIy2iaEQCxg1clj8UfM19rmBC20mAPOTfoRNwXOpMwr54hyBZy62QoupcY3HOwUb11SG7KGxbA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

Markdown 语言服务器的诞生可以推动 VS Code 中的 Markdown 工具进一步发展，有了这个语言服务器，微软将把 VS Code
内置的大部分 Markdown 语言工具（如：文档大纲、智能折叠、路径补全等）提供给其他编辑器和工具。目标是推动 Markdown
工具的发展，并使其具有一些与其他编程语言工具类似的智能功能。

![图片](https://mmbiz.qpic.cn/mmbiz_png/BcyAypujBVZ7ngIy2iaEQCxg1clj8UfM19chNVsibp2FTH9U1r7fKwicCXph1yHpI4SoLxCzibxIfZOA3k2ea7N3sw/640?wx_fmt=png)

Markdown 语言服务器的工作将由以下两个新的开源库负责（两个库名字十分接近）：

  *  **Markdown 语言服务（Markdown Language Service）** ：一个 TypeScript 库，提供处理 Markdown 的工具；

  *  **Markdown 语言服务器（Markdown Language Server）** ：一个使用语言服务构建的 Markdown 语言服务器

上述这两个库现在还处于早期阶段，但它们已经被 VS Code 1.70+ 使用了。此次转变还可以将 Markdown
工具转移到一个单独的进程中，这样它就不会阻碍其他扩展。

目前这个 Markdown 语言服务器的功能包括：

  * 文档大纲

  * 文档链接

  * 智能折叠

  * 智能选择

  * 自动补全

  * 重命名

  * 查找所有引用

  * 转到定义

  * 损坏链接的诊断

  * 在文件移动 / 重命名时，自动更新链接

参与此次开发的开发者 Matt Bierner 表示：

> 一个开源的 Markdown 语言服务器可以帮助其他的编辑器，反过来也会吸引更多开发者参与贡献，最终反哺 VS Code。Markdown
> 语言服务器可以把开发人员聚集在一起，在一个更大的项目上工作，最终将使所有人受益，而不是让每个编辑器 / 工具都在重复实现他们自己的 Markdown
> 支持。

Matt Bierner 也分享了促成此次开发的心路历程：

> 多年来，我一直使用 VS Code 相对简单的 Markdown 编辑器。我对语法高亮和内置的 Markdown
> 预览功能感到满意，而文档大纲和可点击的编辑器链接则是锦上添花的功能。我已经习惯了用手打出链接。我已经接受了这样的事实：如果我改变了一个标题的名称，我就需要做一个文本搜索来更新所有指向该标题的链接。因为我认为
> Markdown 只不过是花哨的纯文本。
>
> 但是有一天，当我第 100
> 次输入错误的图片路径后，我终于意识到：这一点都不好玩！我为什么要把我的生命浪费在手动输入图片上？我为什么要浪费我的生命去手动输入和验证这些链接？这就是工具应该发挥的作用。

如果你也想为此做出一些贡献，那么可以点击访问这两个新项目的 GitHub 仓库，提交错误报告、功能请求，甚至是 PR。

  

  * Markdown 语言服务：https://github.com/microsoft/vscode-markdown-languageservice

  * Markdown 语言服务器：https://github.com/microsoft/vscode/tree/main/extensions/markdown-language-features/server

  

 **·········· END ··············**

用心发掘优质开源项目，欢迎关注，欢迎点赞分享！

历史优质开源项目推荐地址：[Github
掘金计划](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzIwNDgzMzI3Mg==&action=getalbum&album_id=1571213952619954180#wechat_redirect)。

  * [计算机基础](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1635325633234780161&__biz=MzIwNDgzMzI3Mg==#wechat_redirect)：精选计算机基础（操作系统、计算机网络、算法、数据结构）相关的开源项目。

  * [神器工具](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzIwNDgzMzI3Mg==&action=getalbum&album_id=1692140336665378820#wechat_redirect) : 一些好用的插件、软件、网站。

  * [程序人生](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzIwNDgzMzI3Mg==&action=getalbum&album_id=2084343476975878144#wechat_redirect)：编程经历、英语学习、延寿指南。

  * [项目实战](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1632590550748938241&__biz=MzIwNDgzMzI3Mg==#wechat_redirect) ：精选实战类型的开源项目。

  

预览时标签不可点

