----------------------------------------
----------------------------------------
#  C语言编写的超好用的新一代 SSH 终端 - WindTerm

[ Github掘金计划 ](javascript:void\(0\);)

**Github掘金计划** ![]()

微信号 GithubStar

功能介绍 用心发掘 Github 和 Gitee 上优质的开源项目。

____

_2022-07-21 12:49_ _发表于 湖北_

收录于合集

以下文章来源于Github爱好者 ，作者WindTerm

![](images/0)
**Github爱好者** .

我们是一群 Github 爱好者，专注分享有价值、有趣的开源项目和学习资料，包括
Python、Golang、Java、Rust、AI、前端、运维、数据分析、大数据、云计算、Kubernetes、Service Mesh 等领域资源。

你好，我是小金。`WindTerm` 是一个专业的跨平台 SSH/Sftp/Shell/Telnet/Serial 开源终端，采用 C
语言编写，完全免费用于商业和非商业用途，没有限制，源代码均在 Apache-2.0 许可条款下提供。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/5tqrztXFpuksYWnEIhFiaFIeYd3qPOReUqSvBCgEUhp4Pt8sTdBwZDX9ibDUsAWkfKHVibmXRic5QWWUWRoxAcibbMA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

具有以下一些特点：

  * 资源消耗少，免安装解压即用
  * 多平台支持（Linux，Mac，Win）
  * 实施了 SSH v2、Telnet、Raw Tcp、串行、Shell 协议。
  * 会话认证支持 SSH 自动执行。
  * 支持 SSH ProxyCommand 或 ProxyJump。
  * 支持 SSH 代理转发。
  * 支持使用密码、公钥、键盘交互、gssapi-with-mic 的 SSH 自动登录。
  * 支持 X11 转发。
  * 支持直接/本地端口转发、反向/远程端口转发和动态端口转发。
  * 支持 XModem、YModem 和 ZModem。
  * 集成 sftp、scp 客户端，支持下载、上传、删除、重命名、新建文件/目录等。
  * 集成本地文件管理器，支持移动到、复制到、删除、重命名、新建文件/目录等。
  * 支持 Windows Cmd、PowerShell 和 Cmd、PowerShell 作为管理员。
  * 支持 Linux bash、zsh、powershell core 等。
  * 支持 MacOS bash、zsh、powershell core 等。

## 安装

`WindTerm` 支持 Linux、Mac、Windows 三大平台，我们只需要前往 Git 代码仓库 Release
页面选择自己对应的平台安装下载解压即可使用，地址：https://github.com/kingToolbox/WindTerm/releases 。

## 使用

第一次启动的时候需要让我们选择一个目录来存放配置文件，一般保持默认即可。启动后默认界面如下所示。

![图片](https://mmbiz.qpic.cn/mmbiz_png/5tqrztXFpuksYWnEIhFiaFIeYd3qPOReULl5EyF23e7knFjQPzJPKOVxxmzbxLSLhBKHvGvEdhldCfcibB7GWjEg/640?wx_fmt=png)

我们可以点击上方的新建会话按钮开始 SSH
连接。![图片](https://mmbiz.qpic.cn/mmbiz_png/5tqrztXFpuksYWnEIhFiaFIeYd3qPOReUngo8jDwy1FMohOjEzKxXqocDJYvPviaMRzuaCA12jsKXMSWNX9mZkicg/640?wx_fmt=png)

在弹出的新建会话窗口中填写你的主机名、端口（默认为
22）以及标签这些即可。![图片](https://mmbiz.qpic.cn/mmbiz_png/5tqrztXFpuksYWnEIhFiaFIeYd3qPOReUCFlJv4PEYXuNlLOrkJFIp7Myc2fiaZVHPvVGZIQcZT4JcWAmvfHu57Q/640?wx_fmt=png)

然后点击 `连接`
按钮即可开始进行远程连接，在弹出的对话框中输入用户名和密码即可登录到远程主机上。我们可以将不需要的一些窗口关掉，只保留会话窗口，让整个界面显得更加清爽。现在我们就可以在会话窗口中执行远程机器上的一些命令，`WindTerm`
也是支持命令自动补全的，非常方便。![图片](https://mmbiz.qpic.cn/mmbiz_png/5tqrztXFpuksYWnEIhFiaFIeYd3qPOReUpLMw9AlGTcAOW1ZpDOQ0uX36gIKumR5XialVAibM7omm7ibdsSYmdrknA/640?wx_fmt=png)

## 配置

此外我们还可以对 `WindTerm` 的一些功能进行定制，点击左上角菜单 `会话` -> `首选项` ->`设置`，可以打开会话配置对话框，比如在
`应用` 选项卡中我们可以设置在启动的时候
`无会话`，这样下次启动的时候就不会自动连接上一次会话了。![图片](https://mmbiz.qpic.cn/mmbiz_png/5tqrztXFpuksYWnEIhFiaFIeYd3qPOReUnaqOAShbPRtJdDXibJ4H1TVquO6Sm6A5BePjFg2BUsPPNufLbBDnZ5g/640?wx_fmt=png)

此外我们还可以定制会话窗口终端的字体，可以设置字体、粗细以及大小，如下所示。![图片](https://mmbiz.qpic.cn/mmbiz_png/5tqrztXFpuksYWnEIhFiaFIeYd3qPOReUib8NCVSNPAJ8X0ZxpnFIVjJIWYhKC4j88zTBziaUmLr0SABz8LIzCEJA/640?wx_fmt=png)

在 `外观` 选项卡下面我们可以设置 `语言`，现在 `WindTerm`
已经支持中文了，所以非常方便，还可以修改主题和窗口不透明度，可以根据自身喜好进行配置。![图片](https://mmbiz.qpic.cn/mmbiz_png/5tqrztXFpuksYWnEIhFiaFIeYd3qPOReUys75ge48CGfPhQfeDF20qKcNZq16cREiaTrjaCAn2vrXsCGQ4MQlWdg/640?wx_fmt=png)

比如我们这里选择的 `dige-black-and-white`
这个主题，则除了终端会显示成黑色其余窗口都会显示成白色的样式，如下所示。![图片](https://mmbiz.qpic.cn/mmbiz_png/5tqrztXFpuksYWnEIhFiaFIeYd3qPOReUVl0fBp8ryS4WYLde003NXMJib9wrw02mZaNxdicQXHxqK4R6ricgfd3IA/640?wx_fmt=png)

此外如果有多个会话窗口的时候，当我们将鼠标悬停到其他会话窗口选项卡后会自动激活，我们可以在 `标签`
选项卡中将其设置为`绝不`，避免误操作。![图片](https://mmbiz.qpic.cn/mmbiz_png/5tqrztXFpuksYWnEIhFiaFIeYd3qPOReU3YRORYKn5jLIsrGRJgddZ9zh0PWB0qZr3QOMZRI0DNtevId5e7Zic9Q/640?wx_fmt=png)

有时候我们需要复制终端中的数据，需要选中内容后再去复制操作，比较麻烦，我们可以直接在 `文本` 选项卡中将 `自动复制选定内容`
勾选上，这样只需要选中内容就会复制上了，可以提高不少效率。![图片](https://mmbiz.qpic.cn/mmbiz_png/5tqrztXFpuksYWnEIhFiaFIeYd3qPOReUfDFNVpZfzWLIL9OS4QIictNQ304iaaBUsG5usGJxibhwyye3qLGc4bgvg/640?wx_fmt=png)

此外我们还可以通过 `WindTerm` 方便的上传下载文件，打开
`文件管理器`，我们只需要将文件拖到该窗口则会自动上传，同样要下载只需要选中对应的文件或目录，右键选择下载即可。![图片](https://mmbiz.qpic.cn/mmbiz_png/5tqrztXFpuksYWnEIhFiaFIeYd3qPOReU2S10uQtWd8lOgbultSKsayhibyrb7lJhN1DBuevCKicvIdiamwoAkBaRw/640?wx_fmt=png)

除了这些基本功能之外，`WindTerm` 还会非常多的功能，比如还具有锁屏功能，作者也在博客 https://kingtoolbox.github.io/
上写了很多关于 `WindTerm` 的文章，感兴趣的可以前往查看。

Git 仓库：https://github.com/kingToolbox/WindTerm 。

 **推荐**

>   * [Github
> 掘金计划](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzIwNDgzMzI3Mg==&action=getalbum&album_id=1571213952619954180#wechat_redirect)
> ：历史优质原创文章汇总！
>
>   *
> [程序人生](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzIwNDgzMzI3Mg==&action=getalbum&album_id=2084343476975878144#wechat_redirect)：编程经历、英语学习、延寿指南。
>
>   *
> [神器工具](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzIwNDgzMzI3Mg==&action=getalbum&album_id=1692140336665378820#wechat_redirect)
> : 一些好用的插件、软件、网站。
>
>   *
> [编程基础](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1632585323454971905&__biz=MzIwNDgzMzI3Mg==#wechat_redirect)
> ：精选编程基础如学习路线、编程语言相关的开源项目。
>
>   *
> [计算机基础](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1635325633234780161&__biz=MzIwNDgzMzI3Mg==#wechat_redirect)：精选计算机基础（操作系统、计算机网络、算法、数据结构）相关的开源项目。
>
>   *
> [技术面试](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1632589980491366403&__biz=MzIwNDgzMzI3Mg==#wechat_redirect)
> ：精选技术面试相关的开源项目。
>
>   *
> [项目实战](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1632590550748938241&__biz=MzIwNDgzMzI3Mg==#wechat_redirect)
> ：精选实战类型的开源项目。
>
>

用心发掘 Github 和 Gitee 上优质的开源项目。

欢迎关注！欢迎点赞分享！

预览时标签不可点

[阅读原文](javascript:;)

