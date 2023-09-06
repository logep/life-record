----------------------------------------
----------------------------------------
#  Linux发行版新秀：基于Ubuntu、系统核心 “不可变”

[ Github掘金计划 ](javascript:void\(0\);)

**Github掘金计划** ![]()

微信号 GithubStar

功能介绍 用心发掘 Github 和 Gitee 上优质的开源项目。

____

_2023-01-16 00:30_ _发表于 湖北_

收录于合集

#linux 2 个

#程序员 43 个

# 出品 | OSC开源社区（ID：oschina2013)  

Vanilla OS 是近期才公开发布的 Linux 发行版，基于 Ubuntu 构建，免费且开源，默认桌面环境是 GNOME。虽然 Vanilla OS
的底层是 Ubuntu，但它并不是简单地基于 Ubuntu 进行 "remix"，而且外观看起来也不像 Ubuntu。从官方介绍来看，Vanilla OS
有不小的野心，并且在探索改变操作系统的构建、维护和使用方式。

![图片](https://mmbiz.qpic.cn/mmbiz_png/dkwuWwLoRK8pu7XKKdMC1yxJvesLOglM3rtky6iab0nkibEGVjJZia58RDf6kfp0ddwTq5K6soo3vUribK6FxzH3eg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

Vanilla OS 桌面环境采用了最新的 GNOME 43，删除了各种 Ubuntu 定制和附加组件，目标是为用户提供一个灵活和自由选择软件包的
GNOME 体验。此外，Vanilla OS 是一个不可变的操作系统，系统的核心部分已被锁定，以防止第三方应用程序进行不必要的更改和损坏，或引起错误更新。

![图片](https://mmbiz.qpic.cn/mmbiz_png/dkwuWwLoRK8pu7XKKdMC1yxJvesLOglMkzmEqPjRMIe5RZZE2eJD9QNnT4zkHB3Fxn38AfTYyhLXfnWO9ib4eug/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

Vanilla OS 技术栈构成：Ubuntu — GNOME — Distrobox — ABRoot — Apx

![图片](https://mmbiz.qpic.cn/mmbiz_png/dkwuWwLoRK8pu7XKKdMC1yxJvesLOglMLicF3viavYt0JicuBUQvLtof3D4cFsqk7fB82zXwaLibbgGmEa6fj6wKqA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

 **亮点介绍**

  * 默认使用 GNOME 桌面环境

  * 默认使用 apx 包管理器，并支持 Flatpak, Snap, Appimage

  * “原子级” 系统更新

  * 集成驱动程序管理器

  * 事务 Shell 访问

  * 应用丰富，适合办公，无论是开发者、学生或设计师

  * 游戏生态

* * *

  * apx 包管理器

据介绍，apx 采用了容器化方法，好处是用户安装的任何应用程序都无法更改、改变或影响核心系统包。这提高了安全性、可靠性和稳定性，有点类似于 Fedora
Silverblue 提供的功能。

其次，apx
允许用户从其他发行版档案中安装软件包。为此，它为每个发行版创建了一个容器，并将安装在其中的应用程序与基本系统集成在一起。子系统应用程序像其他应用程序一样工作，可以从
Vanilla OS 控制中心进行管理。

![图片](https://mmbiz.qpic.cn/mmbiz_png/dkwuWwLoRK8pu7XKKdMC1yxJvesLOglMRYicgFbhp1IvTt1k1bdsYoteMjaG3Ud7yL55kyVibsQ13rBVNKEMs5NQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  * 用户体验

Vanilla OS 基于 Ubuntu 22.10，默认使用 GNOME 桌面环境。但与 Ubuntu 不同的是，它选择为用户提供纯净的 GNOME
体验：没有 Ubuntu Dock，没有 Yaru 主题，也没有任何 Ubuntu 的其他修改。

Vanilla OS 预装了一小部分 GNOME Core 应用程序。其中包括 Nautilus 文件管理器、GNOME 软件应用程序和默认 Web
浏览器。还提供了一系列精美的定制壁纸，并包含浅色 / 深色版本。

![图片](https://mmbiz.qpic.cn/mmbiz_png/dkwuWwLoRK8pu7XKKdMC1yxJvesLOglMn8gotssdYSsp9kYicOy1oY7Bla1wKbJ5fBCkUzj23NMO8IltUYlibIug/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

![图片](https://mmbiz.qpic.cn/mmbiz_png/dkwuWwLoRK8pu7XKKdMC1yxJvesLOglMolwcZic6eTk5ibzfLItricMDQ4xIWKvC4P3tYPiaa3ic8bYHWstrk8bbRibw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

相关链接：https://vanillaos.org/2022/12/29/vanilla-os-22-10-kinetic.html

推荐

用心发掘优质开源项目，欢迎关注，欢迎点赞分享！

历史优质开源项目推荐地址：[Github
掘金计划](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzIwNDgzMzI3Mg==&action=getalbum&album_id=1571213952619954180#wechat_redirect)。

  * [计算机基础](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1635325633234780161&__biz=MzIwNDgzMzI3Mg==#wechat_redirect)：精选计算机基础（操作系统、计算机网络、算法、数据结构）相关的开源项目。

  * [神器工具](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzIwNDgzMzI3Mg==&action=getalbum&album_id=1692140336665378820#wechat_redirect) : 一些好用的插件、软件、网站。

  * [程序人生](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzIwNDgzMzI3Mg==&action=getalbum&album_id=2084343476975878144#wechat_redirect)：编程经历、英语学习、延寿指南。

  * [项目实战](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1632590550748938241&__biz=MzIwNDgzMzI3Mg==#wechat_redirect) ：精选实战类型的开源项目。

预览时标签不可点

收录于合集 #linux

2个

上一篇Linux 6.0 正式发布！！！

