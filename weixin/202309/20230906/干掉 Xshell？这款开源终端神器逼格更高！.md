----------------------------------------
----------------------------------------
#  干掉 Xshell？这款开源终端神器逼格更高！

[ Github掘金计划 ](javascript:void\(0\);)

**Github掘金计划** ![]()

微信号 GithubStar

功能介绍 用心发掘 Github 和 Gitee 上优质的开源项目。

____

_2021-12-12 13:08_ _发表于_

收录于合集

以下文章来源于沉默王二 ，作者沉默王二

![](images/0)
**沉默王二** .

技术文通俗易懂，吹水文风趣幽默。

作为一名程序员，日常工作中免不了要和 Linux 服务器打交道，因为生产环境基本上都是部署在 Linux 环境下的。以前呢，Windows 环境下我会选择
Xshell 来作为终端进行远程操作。  

但随着付费版本的出现，尤其是 Xshell 把 FTP 分离出去后，上传下载文件的话还需要单独装一下 Xftp，这显然没有之前集成在一起方便😖。

还有一点不太方便的是，Xshell 竟然没有 macOS 版。

相信很多小伙伴也在问，有没有一款， **集成了 FTP 功能，并且跨平台的终端工具呢？如果能免费开源的话，就更好了** ！

答案是有的，它就是 **Tabby** ！

![图片](https://mmbiz.qpic.cn/mmbiz_png/z40lCFUAHpmt8klQRnFl2S07licAicNVaBIcqRvoxLMib2kUOZceUKMDyQUica2iaxBXBIfKYeEGrbkv1y7TqvJ0RMg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

GitHub 上已经有 21.4k 的 star 了，这说明 Tabby 非常的受欢迎：

> https://github.com/eugeny/tabby

 _Tabby：我谢谢你呀，能再吹两句吗？_

Tabby 是一个高度可定制化的跨平台的终端工具，支持 Windows、macOS 和 Linux，自带 SFTP 功能，能与 Linux
服务器轻松传输文件，支持多种主题，界面炫酷，插件丰富。

### 一、安装 Tabby

直接到官网 `tabby.sh` 点击「download」按钮就可以跳转到下载页面，最新的 release 版本是 1.0.164。

![图片](https://mmbiz.qpic.cn/mmbiz_png/z40lCFUAHpmt8klQRnFl2S07licAicNVaBewQsVWl1TeNicb5O4ka2WEEMEDJTxK6LERtZ1wYLQF6reJ5IKWOgEkA/640?wx_fmt=png)

Linux 和 Windows 的比较好选，macOS 分为两个版本，一个是 arm64，一个是 x86-64，什么意思呢？

这里简单普及下哈。

> ARM是英国ARM公司提供一种CPU架构的知识产权，目前主流的手机和平板电脑都采用ARM架构，但 ARM
> 不生产芯片，只是从各种嵌入式设备、智能手机、平板电脑、智能穿戴和物联网设备体内的上亿颗处理器中“抽成”。

Apple M1 是苹果公司的第一款基于ARM架构的自研处理器单片系统。

> X86_X64
> 源于英特尔几十年前出品的CPU型号8086，包括后续型号8088/80286/80386/80486/80586等等，8086以及8088被当时的IBM采用，制造出了名噪一时的IBM
> PC机，从此个人电脑风靡一时。

详情可参阅下面这篇：

> https://www.cnblogs.com/zhaoqingqing/p/13145115.html

从这一点上可以证明，Tabby 的更新是非常勤快的，连 macOS 的最新芯片 M1 都支持了，厉害了呀，我的虎斑猫（Tabby）！

按照提示，一步步安装就 OK 了。完成后打开，这界面还是非常炫酷的。

![图片](https://mmbiz.qpic.cn/mmbiz_png/z40lCFUAHpmt8klQRnFl2S07licAicNVaBVzYshQXsYc4UyqwHYicia1aewWtApu89DCnWoZpibGrJMHSdLAsQkwZIQ/640?wx_fmt=png)

## 二、SSH 连接

SSH，也就是 Secure
Shell（安全外壳协议），是一种加密的网络传输协议，可在不安全的网络中为网络服务提供安全的传输环境，通过在网络中创建安全隧道来实现 SSH
客户端和服务器端之间的连接。

之前说要带大家玩转 Linux
服务器，我们先安装了[宝塔面板](https://mp.weixin.qq.com/s?__biz=MzIxNzQwNjM3NA==&mid=2247500849&idx=1&sn=6548eab3d7e53ba989a2598c29d33a11&scene=21#wechat_redirect)这个神器。宝塔里面有自带的终端，但说实话，体验一般。

那不妨我们就使用 Tabby 来与服务器建立一个 SSH 连接吧。

点击「setting」→「profiles & connections」→「new profile」。

![图片](https://mmbiz.qpic.cn/mmbiz_png/z40lCFUAHpmt8klQRnFl2S07licAicNVaB8iaSXI13ACmOW1ybLkex4Xh4GB1icVn23QQDVKwBMpiauzXp03RFffu0Q/640?wx_fmt=png)

填写服务器的 IP 地址和密码，然后点击「save」。

![图片](https://mmbiz.qpic.cn/mmbiz_png/z40lCFUAHpmt8klQRnFl2S07licAicNVaBxm1vSIoMmWKlbb6ibYPaQBKPictagBc3KicUQguY9A85eBche5ehb63jQ/640?wx_fmt=png)

之后点击「运行」按钮，就可以进入到终端页面了。

![图片](https://mmbiz.qpic.cn/mmbiz_png/z40lCFUAHpmt8klQRnFl2S07licAicNVaBMoKtnmpdxXRZ4oT9VRnO71Dlx64mORIAjvZ3799ibWKXziaIfR8z4HaQ/640?wx_fmt=png)

好了，现在可以对服务器进行操作了，执行下 top 命令可以查看服务器上正在运行的进程信息。

![图片](https://mmbiz.qpic.cn/mmbiz_png/z40lCFUAHpmt8klQRnFl2S07licAicNVaBiaAK4QX0icic31A0z8JTVK8vZaE5CpBtcZcNOMEaBgR6SM8pCuHayUrRg/640?wx_fmt=png)

### 三、SFTP 传输文件

Tabby 集成了 SFTP，所以上传下载文件就变得非常的简单。只需要点击一下「SFTP」图标就可以打开文件传输窗口。

![图片](https://mmbiz.qpic.cn/mmbiz_png/z40lCFUAHpmt8klQRnFl2S07licAicNVaB3T0CYty1RGAW2iaoiah5fiaxaYc5L8oBkUichodJ0sD4hwSicnaItU54jEA/640?wx_fmt=png)

上传的时候支持拖拽，完成后会弹出文件传输成功的提示消息。

![图片](https://mmbiz.qpic.cn/mmbiz_png/z40lCFUAHpmt8klQRnFl2S07licAicNVaBsuXUv7jSMMO03ZCVr7UqhWF0xPW1YGfsDhpV5LAXq2Y1Z28OlMATUg/640?wx_fmt=png)

下载的时候点击要下载的文件，然后会弹出存储对话框，选择对应的文件夹，以及修改对应的文件名点击「存储」就可以了。

![图片](https://mmbiz.qpic.cn/mmbiz_png/z40lCFUAHpmt8klQRnFl2S07licAicNVaBKu7veoD8XlKof7NdbticyrBib7SuM8ZViazSiaiaGKwugHqczCrvacHJtvw/640?wx_fmt=png)

### 四、配置 Tabby

「Settings」 的面板下有一个「Appearance」的菜单，可以对 Tabby 的外观进行设置，比如说调整字体，比如说自定义样式。

![图片](https://mmbiz.qpic.cn/mmbiz_png/z40lCFUAHpmt8klQRnFl2S07licAicNVaB0daSuKrJCTKu0HS9vochewTJVicsmSuvvFNQicHHmFE3xRD3HN1PssOg/640?wx_fmt=png)

「Appearance」的菜单可以对 Tabby 的配色方案进行修改，里面的主题非常多，不过我感觉默认的就挺不错，毕竟是官方推荐的。

![图片](https://mmbiz.qpic.cn/mmbiz_png/z40lCFUAHpmt8klQRnFl2S07licAicNVaB192L7hYPdOMHpGBEFnScia13JyNATmXaD15pYzEOrVmvmI9bc61pT5A/640?wx_fmt=png)

「Plugins」 菜单中还有不少插件可供扩展。

![图片](https://mmbiz.qpic.cn/mmbiz_png/z40lCFUAHpmt8klQRnFl2S07licAicNVaBrvkwEgYrdVYPDJW2VvYzh1TJiaiajiaqzfcgPz514qz9Pziawg4lPrCwCw/640?wx_fmt=png)

  * clickable-links - 使终端中的路径和 URL 可点击
  * docker - 连接到 Docker 容器
  * title-control - 允许通过提供要删除的前缀、后缀和/或字符串来修改终端选项卡的标题
  * quick-cmds - 快速向一个或所有终端选项卡发送命令
  * save-output - 将终端输出记录到文件中

这里重点说一下「sync config」 这个插件，可以将配置同步到Github或者Gitee的插件。点击「Get」就可以安装，之后会提示你重启生效。

![图片](https://mmbiz.qpic.cn/mmbiz_png/z40lCFUAHpmt8klQRnFl2S07licAicNVaBeoNZVhuafN5nGYkFOp1Z06S60hBNhFmh4ibukNPibHYJo4QibVtHiczAiag/640?wx_fmt=png)

生效后点击「Sync Config」菜单，就可以看到配置项了，类型可以选择 GitHub、Gitee、GitLab。

![图片](https://mmbiz.qpic.cn/mmbiz_png/z40lCFUAHpmt8klQRnFl2S07licAicNVaBibrneHIkvRp8AjiaB7T5ZZeDXOlQw8ThpUgLv5myGlW2Hnw2OH1icUoHw/640?wx_fmt=png)

这里以 Gitee 为例，进入个人 Gitee 主页，左侧菜单中选择「私人令牌」，然后点击「生成新令牌」。

![图片](https://mmbiz.qpic.cn/mmbiz_png/z40lCFUAHpmt8klQRnFl2S07licAicNVaBKs4WP2AYXLZu91zeHrbibE20Z8CykqgtZRYe25WulART7eF0ic6QkrYw/640?wx_fmt=png)

提交后会生成 token，复制到 Tabby 的 Token 输入框中，然后点击「Upload config」，就可以看到配置信息同步成功了。

![图片](https://mmbiz.qpic.cn/mmbiz_png/z40lCFUAHpmt8klQRnFl2S07licAicNVaBXpWjiawoJ3BxPM0211PSYPUdsj1U03jV2fXkE6PRc10kpWSFpP9ep9A/640?wx_fmt=png)

「Window」 菜单中可以对当前窗口进行设置，比如说改变窗口的主题为 Paper，改变 tab 的位置到底部等等。

![图片](https://mmbiz.qpic.cn/mmbiz_png/z40lCFUAHpmt8klQRnFl2S07licAicNVaB2yzO5lFHCavEnXTChTwVO61eG9ibHRQChJkoicibcjvXHSk2RpaNTlYrw/640?wx_fmt=png)

### 五、总结

SSH 连接和 SFTP 传输恐怕是我们操作 Linux 服务器最常用的两个功能了，那 Tabby
对这两个功能的支持非常的友好，足够的轻量级。关键它是跨平台的，Windows、macOS
都可以用，再把配置信息同步到云上后，多平台下切换起来简直不要太舒服。

Windows 用户习惯用 Xshell，macOS 用户习惯用 iTerm2，但这两款工具都没办法跨平台，多平台操作的用户就可以选择 Tabby
来体验一下，真心不错。

Tabby 的学习资料还比较少，所以希望小金分享的这篇文章能给有需要的小伙伴提供一点点的帮助和启发。

好了，我们下期见!

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

预览时标签不可点

