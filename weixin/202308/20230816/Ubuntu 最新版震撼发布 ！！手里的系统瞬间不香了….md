----------------------------------------
----------------------------------------
#  Ubuntu 最新版震撼发布 ！！手里的系统瞬间不香了…

[ Github掘金计划 ](javascript:void\(0\);)

**Github掘金计划** ![]()

微信号 GithubStar

功能介绍 用心发掘 Github 和 Gitee 上优质的开源项目。

____

_2022-06-08 13:10_ _发表于 湖北_

收录于合集

来源：OSC开源社区(ID:oschina2013)

不久前，Ubuntu 22.04 LTS发布，该版本在之前的 LTS 版本基础上进行了许多变化。除了Ubuntu 22.04引入的一部分新功能外，LTS
用户还将最终受益于 Ubuntu 20.10、21.04 和 21.10 中的累积变化。

今天这篇文章就来聊一聊Ubuntu 22.04 LTS 'Jammy Jellyfish'
Desktop中的20项新功能、变化和改进，不得不说，桌面化部分越来越好上手了。

####  **20 Changes Between 20.04 and 22.04**

  

 **1\. 默认的
Wayland**![图片](https://mmbiz.qpic.cn/mmbiz_jpg/dkwuWwLoRKibHHzfgOgibLokSd1DqXkna0qGMQCLsVMOl9iaichgNZyHTSqhaD3sGdvNnoR2PMibhfrhO54ql5B5r5g/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)
Wayland 是 Ubuntu 22.04 LTS 中的默认显示服务器。借助 Pipewire 等技术，即使是屏幕共享等在 Wayland
下也能开箱即用，而且没有什么麻烦。在 Ubuntu 22.04 中，Wayland 甚至为那些使用 NVIDIA
显卡的计算机默认提供支持。但是，如果用户发现硬件、应用程序或整体体验在 Wayland 中表现不佳，只需退出并从登录屏幕上选择"Xorg"会话即可。
**2\.
浅色默认外观**![图片](https://mmbiz.qpic.cn/mmbiz_jpg/dkwuWwLoRKibHHzfgOgibLokSd1DqXkna0JkHw5aVR0j9HZa2LMgibrEQR99r3o09iaODXP8ngre5ricfbeib5ApN05Q/640?wx_fmt=jpeg)![图片](https://mmbiz.qpic.cn/mmbiz_jpg/dkwuWwLoRKibHHzfgOgibLokSd1DqXkna0YfOicU48opsRUE5Xuj1iag9bbV3PDXsfcC8IzZurcgxPs44dJDPqVKyA/640?wx_fmt=jpeg)
Yaru GTK
主题已经放弃了"mixed"主题（深色标题栏和浅色控件），转而采用完全浅色主题。窗口的"close"按钮不再由一个明亮的红点来表示，取而代之的是与
vanilla GNOME 42 中的 libadwaita 的外观相呼应，Yaru 在三个窗口控件的后面放置了微妙的灰色"backdots"。 **3\.
更紧凑的 Desktop
UI**![图片](https://mmbiz.qpic.cn/mmbiz_jpg/dkwuWwLoRKibHHzfgOgibLokSd1DqXkna0ibcQ9fDmzXhibCZUnibRlny68ia1Q2UaHMicxMYWGlVay9hEaibrmlYdiajdQ/640?wx_fmt=jpeg)![图片](https://mmbiz.qpic.cn/mmbiz_jpg/dkwuWwLoRKibHHzfgOgibLokSd1DqXkna0zib3tZC9bYicc05hjibYvZNyYpLdqy2B46LUbS6mbeHUlVicfS3zCDcoibQ/640?wx_fmt=jpeg)
由于 GNOME Shell 的上游设计变化，Ubuntu 22.04
看起来比以前更加"compact"。面板小程序、弹出框和菜单使用了更紧密的边距，使得更接近于它们的 origin
point；减少了菜单内的填充；OSD（例如，音量、亮度等）也进行了大修，以不那么显眼。 **4\.
改进的桌面图标体验**![图片](https://mmbiz.qpic.cn/mmbiz_jpg/dkwuWwLoRKibHHzfgOgibLokSd1DqXkna0YH9cMDFiaY8l69owr6c6vEyHVL1weom38ZbCFfclZcjBkuWkQg0iaUTg/640?wx_fmt=jpeg)
新版本改用了比 Ubuntu 20.04
中更好的桌面图标扩展，用户可以将文件和文件夹从文件管理器中拖拽到桌面上，反之亦然。通过系统设置中的（新改进的）外观面板，可以进行少量的桌面图标设置。添加到桌面的新文件夹默认出现在右下角，而不是左上角，不过也可以自行进行配置。
**5\. Horizontal Workspaces**![图片](data:image/svg+xml,%3C%3Fxml version='1.0'
encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1'
version='1.1' xmlns='http://www.w3.org/2000/svg'
xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg
stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-
opacity='0'%3E%3Cg transform='translate\(-249.000000, -126.000000\)'
fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1'
height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E) Ubuntu 22.04 中的 Workspaces
是水平添加/管理的，并且仍然是动态的，而且还有新的多任务设置。用户可以通过按一次 super key，或点击左上角的"activities"标签来访问
workspace switcher。另外，用户也可以通过使用新的多点触控手势在任何时候调用 Workspace。 **6\. App Launcher
Changes**![图片](data:image/svg+xml,%3C%3Fxml version='1.0'
encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1'
version='1.1' xmlns='http://www.w3.org/2000/svg'
xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg
stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-
opacity='0'%3E%3Cg transform='translate\(-249.000000, -126.000000\)'
fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1'
height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E) 和 Workspace 一样也改成了水平的。在
Ubuntu 22.04 中，full-screen launcher 从显示器的底部向上滑动，并从左侧或右侧翻页。还有一些其他的质量改进，以提升 App
Launcher
的体验。包括自由重新排列应用快捷方式的能力（只需拖放图标，就能以用户喜欢的方式重新排列），以及当用户把鼠标放在快捷方式上时，截断/省略的快捷方式名称会完整显示。
**7\. Dock
Differences**![图片](https://mmbiz.qpic.cn/mmbiz_jpg/dkwuWwLoRKibHHzfgOgibLokSd1DqXkna0hNK4WBic9UJaFLh1eYNmEIYIPeVxjSoEWedZa6NK2uLbAhlPN92PRgg/640?wx_fmt=jpeg)
对 Ubuntu Dock 进行了一些调整。trash can item 现在位于 Dock 中而不是桌面上，同时一个新的分隔符将 running app
icons 与 pinned app icons 分开。System Settings > Appearance section 提供了更多的 Dock
设置，包括关闭面板模式的开关（即获得更多的 Dock 外观）；Dock 中应该或不应该显示的选项；以及 Dock 在多显示器设置中的行为方式选择。
**8\. Accent
Colours**![图片](https://mmbiz.qpic.cn/mmbiz_jpg/dkwuWwLoRKibHHzfgOgibLokSd1DqXkna0R8tankUkw93pQSFxO872ibMQWRNKKc4pVVzW9xIJmDaAbvG8rsl3cOQ/640?wx_fmt=jpeg)
Ubuntu 已将 Yaru 主题中的大部分紫色调替换为橙色调。但是如果用户不喜欢橙色，Ubuntu 22.04 也允许用户从 10
种不同的强调色中来进行选择。不过这些会影响到 GKT 主题、GNOME Shell 主题，甚至一些图标。 **9\. 触控板手势**
新的触控板手势，用于打开和关闭 Workspace Switcher 和 App Launcher，并在其中进行分页。在兼容的多点触控板上用三指轻扫即可使用
Workspace Switcher，进一步的三指操作则可显示 App Launcher，而且也可以使用两指轻扫来向左/向右翻页。并且手势动画是 1:1
的，反应速度可以和手部动作保持一致。

## 推荐

  * [Github 掘金计划](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzIwNDgzMzI3Mg==&action=getalbum&album_id=1571213952619954180#wechat_redirect) ：历史优质原创文章汇总！
  * [程序人生](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzIwNDgzMzI3Mg==&action=getalbum&album_id=2084343476975878144#wechat_redirect)：编程经历、英语学习、延寿指南。
  * [神器工具](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzIwNDgzMzI3Mg==&action=getalbum&album_id=1692140336665378820#wechat_redirect) : 一些好用的插件、软件、网站。
  * [编程基础](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1632585323454971905&__biz=MzIwNDgzMzI3Mg==#wechat_redirect) ：精选编程基础如学习路线、编程语言相关的开源项目。
  * [计算机基础](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1635325633234780161&__biz=MzIwNDgzMzI3Mg==#wechat_redirect)：精选计算机基础（操作系统、计算机网络、算法、数据结构）相关的开源项目。
  * [技术面试](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1632589980491366403&__biz=MzIwNDgzMzI3Mg==#wechat_redirect) ：精选技术面试相关的开源项目。
  * [项目实战](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1632590550748938241&__biz=MzIwNDgzMzI3Mg==#wechat_redirect) ：精选实战类型的开源项目。

用心发掘 Github 和 Gitee 上优质的开源项目。

欢迎关注！欢迎点赞分享！

预览时标签不可点

