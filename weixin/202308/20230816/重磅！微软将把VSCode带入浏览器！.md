----------------------------------------
----------------------------------------
#  重磅！微软将把VSCode带入浏览器！

[ Github掘金计划 ](javascript:void\(0\);)

**Github掘金计划** ![]()

微信号 GithubStar

功能介绍 用心发掘 Github 和 Gitee 上优质的开源项目。

____

_2021-10-28 12:24_ _发表于_

收录于合集

#程序员 43 个

#神器工具 48 个

![图片](https://mmbiz.qpic.cn/mmbiz_png/uDRkMWLia28jGNXruAccTtSs5QqLsSibD3AZU43fQibfwPOOibDDtPOlOpkUEK4UF6fAFZereuicozGurlyAmwIt61Q/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

原作者：Chris Dias

原文：https://code.visualstudio.com/blogs/2021/10/20/vscode-dev

翻译：韩老师 + Google Translate

早在 2019 年，当`.dev` 顶级域名开放时，我们赶紧注册了 `vscode.dev`。像许多购买`.dev`
域名的人一样，我们不知道我们将用它做啥。反正，也占个坑吧！

### 将 VS Code 带入浏览器

直到今天，当你转到 https://vscode.dev 时，你将看到一个完全在浏览器中运行的轻量级 VS
Code。在本地机器上打开一个文件夹并开始编码。无需任何的安装。如丝般顺滑。![图片](data:image/svg+xml,%3C%3Fxml
version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0
0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg'
xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg
stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-
opacity='0'%3E%3Cg transform='translate\(-249.000000, -126.000000\)'
fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1'
height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)随着 vscode.dev
的出现，我们最终实现了我们最初的愿景，即构建一个可以在浏览器中完全无服务器运行的开发工具。那么，我们可以在 VS Code for the Web
上做什么呢？

### 使用云工具进行本地开发

  
![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg
width='1px' height='1px' viewBox='0 0 1 1' version='1.1'
xmlns='http://www.w3.org/2000/svg'
xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg
stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-
opacity='0'%3E%3Cg transform='translate\(-249.000000, -126.000000\)'
fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1'
height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)支持文件系统访问 API（目前的 Edge 和
Chrome）的现代浏览器允许网页访问本地文件系统（在你的许可下）。这个简单的本地机器网关，快速打开了一些使用 VS Code for the Web
作为零安装本地开发工具的有趣场景，例如：

  * 本地文件查看和编辑。在 Markdown 中快速记笔记（和预览！）。即使你在无法安装完整 VS Code 的受限机器上，仍然可以使用 vscode.dev 查看和编辑本地文件。

  * 结合浏览器工具构建客户端 HTML、JavaScript 和 CSS 应用程序以进行调试。

  * 在 Chromebook 等低功率机器上编辑代码，因为你无法（或者说 “轻松地”）在 Chromebook 安装 VS Code。

  * 在 iPad 上开发。你可以上传 / 下载文件（甚至使用 Files 应用程序将它们存储在云中），以及使用内置的 GitHub 存储库扩展远程打开存储库。

而且，如果你的浏览器不支持本地文件系统
API，仍然可以通过浏览器上传和下载单个文件来打开它们。![图片](data:image/svg+xml,%3C%3Fxml version='1.0'
encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1'
version='1.1' xmlns='http://www.w3.org/2000/svg'
xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg
stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-
opacity='0'%3E%3Cg transform='translate\(-249.000000, -126.000000\)'
fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1'
height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E) **轻量级体验** 由于 VS Code for
the Web
完全在浏览器中运行，因此与你在桌面应用程序中可以执行的操作相比，某些体验自然会受到更多限制。例如，终端和调试器不可用。这是有道理的，因为你无法在浏览器沙箱中编译、运行和调试
Rust 或 Go 应用程序（尽管 Pyodide 和 Web
容器等新兴技术有一天可能会改变这一点）。更微妙的是代码编辑、导航和浏览体验，在桌面上，这些体验通常由需要文件系统、运行时和计算环境的语言服务和编译器提供支持。在浏览器中，这些体验由
_完全在浏览器中运行_
的语言服务（无文件系统，无运行时）提供支持，这些服务提供源代码标记化和语法着色、完成和许多单文件操作。因此，在浏览器中时，体验通常分为以下几类： **好**
：对于大多数编程语言，vscode.dev 为你提供代码语法着色、基于文本的完成和括号对着色。使用 Tree-sitter 语法树，我们能够为流行语言（如
C/C++、C#、Java、PHP、Rust 和 Go）提供额外的体验，例如大纲 / 转到符号和符号搜索。 **更好**
：TypeScript、JavaScript 和 Python 体验都由在浏览器中本地运行的语言服务提供支持。使用这些编程语言，你将获得 “良好”
体验以及丰富的单文件补全、语义突出显示、语法错误等。 **最好** ：对于许多 “webby” 语言，例如 JSON、HTML、CSS 和
LESS，vscode.dev 中的编码体验几乎与桌面相同（包括 Markdown 预览！）。

### 扩展

大多数 UI 自定义扩展（例如主题、键映射和代码段）都可以在 vscode.dev 中使用，你甚至可以通过 Settings Sync 在浏览器、桌面和
GitHub 代码空间之间启用漫游。使用了操作系统模块的 Node.js
代码的扩展，或者运行了可执行文件的扩展，仍然会显示在扩展搜索结果中，但被明确标记为不可用。![图片](data:image/svg+xml,%3C%3Fxml
version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0
0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg'
xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg
stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-
opacity='0'%3E%3Cg transform='translate\(-249.000000, -126.000000\)'
fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1'
height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)也就是说，越来越多的扩展已经更新到可以在浏览器中使用，而且每天都有更多的扩展。

> 注意：如果你是扩展作者并希望在浏览器中使用你的扩展，请查看我们的 Web
> 扩展创作指南。https://code.visualstudio.com/api/extension-guides/web-extensions

例如，Luna Paint - Image Editor 扩展允许你直接在 VS Code 中编辑光栅图像。该扩展为 VS Code
带来了丰富的设计工具（例如图层和混合工具），当然你也可以将图像保存到本地磁盘。![图片](data:image/svg+xml,%3C%3Fxml
version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0
0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg'
xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg
stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-
opacity='0'%3E%3Cg transform='translate\(-249.000000, -126.000000\)'
fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1'
height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)在 GitHub Issue Notebooks
带来了 GitHub Issues 的 Notebook 体验。有了它，你可以将查询、结果，甚至描述查询目的的 Markdown
混合到一个编辑器中。![图片](data:image/svg+xml,%3C%3Fxml version='1.0'
encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1'
version='1.1' xmlns='http://www.w3.org/2000/svg'
xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg
stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-
opacity='0'%3E%3Cg transform='translate\(-249.000000, -126.000000\)'
fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1'
height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

### GitHub

VS Code 的许多扩展都基于 GitHub。例如，CodeTour 扩展允许你创建代码库的指导性演练，而 WikiLens 扩展将 VS Code
和你的存储库变成一个强大的笔记工具（具有双向链接）。为了方便访问 GitHub 中的代码，VS Code for the Web 内置了 GitHub
Repositories、Codespaces 和 Pull Request 扩展。你可以进行快速编辑、审查
PR，并继续进行本地克隆。如果你想要更强大的语言体验或需要在合并提交之前构建、运行和测试更改，你可以使用 GitHub Codespace
来获得更强的开发体验，![图片](data:image/svg+xml,%3C%3Fxml version='1.0'
encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1'
version='1.1' xmlns='http://www.w3.org/2000/svg'
xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg
stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-
opacity='0'%3E%3Cg transform='translate\(-249.000000, -126.000000\)'
fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1'
height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)哇噻，听起来很像 `github.dev`
不是吗？为什么是两个呢 ？？！！真是个好问题呀！`github.dev` 是深度集成到 GitHub 中的 Web 版 VS Code
定制实例。登录是自动的，URL 格式如下 github.com 的 `/organization/repo` 模式，使你可以简单地改变`.com`
到`.dev` 以编辑代码。除了 GitHub 上的存储库，VS Code for the Web 还支持 Azure Repos（Azure DevOps
的一部分）。为了同时使用这两者，VS Code for the Web 支持两种路由，`vscode.dev/github` 以及
`vscode.dev/azurerepos`. 不过，你不必记住这一点，只需在你拥有的任何 URL 前面加上 “vscode.dev”，就行了！例如，更改
`https://github.com/microsoft/vscode` 为：

    
    
    https://vscode.dev/github.com/Microsoft/vscode

对于 Azure Repos，执行相同操作。更改 `https://dev.azure.com/…` 为：

    
    
    https://vscode.dev/dev.azure.com/…

今天，对 Azure Repos 的支持处于读取存储库的预览模式，但我们正在努力尽快提供完整的读 / 写功能。如果你不在 GitHub 或 Azure
DevOps 上，则可以通过扩展提供对其他存储库托管服务的支持，就像在桌面上一样。如上所述，这些扩展需要支持在浏览器中完全运行。

### 再聊聊 URL

就像在桌面上一样，您可以通过支持几乎所有后端、语言和服务的丰富扩展生态系统，来定制 VS Code for the
Web。不像在桌面上，很容易让我们能够提供自定义体验与通过独特的预安装的扩展程序 `vscode.dev` 的网址（例如
`vscode.dev/github` 和 `vscode.dev/azurerepos`）。例如，尝试浏览到
vscode.dev/theme/sdras.。![图片](data:image/svg+xml,%3C%3Fxml version='1.0'
encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1'
version='1.1' xmlns='http://www.w3.org/2000/svg'
xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg
stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-
opacity='0'%3E%3Cg transform='translate\(-249.000000, -126.000000\)'
fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1'
height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)在这里你可以直接体验 @sarah_edo
的夜猫子颜色主题。无需安装！如果您是主题作者，你甚至可以在 README 中创建一个徽章，让用户直接从 Marketplace 试用你的主题（在 VS
Code for the Web 用户指南中了解更多信息：https://code.visualstudio.com/docs/editor/vscode-
web#_themes）。如你所见，`vscode.dev`URL 是我们提供轻量级新体验的强大方式。另一个示例，是 Live Share
来宾会话，也将通过 `https://vscode.dev/liveshare`URL 在浏览器中可用。在 `sessionId`
将被传递到扩展，使加入的体验如丝般顺滑。![图片](data:image/svg+xml,%3C%3Fxml version='1.0'
encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1'
version='1.1' xmlns='http://www.w3.org/2000/svg'
xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg
stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-
opacity='0'%3E%3Cg transform='translate\(-249.000000, -126.000000\)'
fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1'
height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)`vscode.dev`URL
的可能性是无穷无尽的，我们很高兴在未来几个月内与你分享更多想法。

### 未来的路，怎么走？

将 VS Code
引入浏览器是对产品最初愿景的实现。这也是一个全新的开始。任何拥有浏览器和互联网连接的人，都可以使用我们的编辑器。这是未来我们可以真正从任何地方编辑任何内容的基础。

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

收录于合集 #程序员

43个

上一篇又一款Github开源神器！酷炫的命令行资源监视器下一篇重磅！腾讯开源的一大力作

