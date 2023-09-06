----------------------------------------
----------------------------------------
#  我把手机刷成 Windows 11，还玩上了 PC 游戏！

原创 小金  [ Github掘金计划 ](javascript:void\(0\);)

**Github掘金计划** ![]()

微信号 GithubStar

功能介绍 用心发掘 Github 和 Gitee 上优质的开源项目。

____

_2021-07-09 11:09_ _发表于_

收录于合集

#windows 1 个

#手机 1 个

#Github 52 个

#Github掘金计划 81 个

大家好，我是热爱分享优质开源项目的小金！

[Windows 11
刚刚发布不久](https://mp.weixin.qq.com/s?__biz=MzIwNDgzMzI3Mg==&mid=2247485840&idx=1&sn=9a332a176e10033f8183d3335af97468&chksm=973b6107a04ce81133335a2fe9da1c1fc2edf3ac25050f573dad00af57226f7a82961f26b0f8&token=1144202410&lang=zh_CN&scene=21#wechat_redirect)，就有一些小伙伴开始搞事情了！

Windows 11 既然支持安卓应用，那能否在安卓手机上装 Windows 11 呢？

答案是可以的！国内的几位大神果真就把 Windows 11 装进了手机里。

下图就是使用一加 6T 手机安装 Windows 11 完成之后的效果。

![图片](https://mmbiz.qpic.cn/mmbiz_png/BcyAypujBVZb2lKF7vS0vgchLk0sgvaH3gOxZYYnx54n6gyicXccHdgShReI1bVNmGkOibwrjwJolhqkfCpq3xHQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

从图片可以看出，你所看到的系统配置它果真就和手机配置一样，它果真是骁龙 845 处理器啊！真不是远程桌面投屏，它就是货真价实地运行在安卓手机上的
Windows11 哦！

安装完成之后，甚至说你还能直接用手机玩大型电脑游戏！还挺流畅！

emmm...... 大家知道大部分手机软件对性能优化做的有多么差了吧！

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg
width='1px' height='1px' viewBox='0 0 1 1' version='1.1'
xmlns='http://www.w3.org/2000/svg'
xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg
stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-
opacity='0'%3E%3Cg transform='translate\(-249.000000, -126.000000\)'
fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1'
height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

看了之后，我不禁直呼：“666，有点东西！”。

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg
width='1px' height='1px' viewBox='0 0 1 1' version='1.1'
xmlns='http://www.w3.org/2000/svg'
xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg
stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-
opacity='0'%3E%3Cg transform='translate\(-249.000000, -126.000000\)'
fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1'
height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

但是！并不是每个手机都能够刷入 Windows11 ，需要骁龙 845 / 855 (部分) 的芯片才可以，目前只支持下面这些型号的手机：

  1. 一加 6 (enchilada)
  2. 一加 6T (fajita)
  3. 小米 MIX3 (perseus)
  4. 小米 PocoPhone F1 (beryllium)
  5. 魅族 16th (m1882)
  6. 魅族 16th Plus (m1892)
  7. 锤子坚果 R1 (trident)
  8. 黑鲨手机一代 (skr-a0)
  9. OPPO Find X (pafm00)
  10. 小米 MIX2S (polaris)
  11. LG G7 (judyln)
  12. 三星 S9+ (star2qltechn)
  13. 小米 7（工程机） (dipper-old)
  14. 小米 8 (dipper)
  15. 努比亚 X (nx616j)
  16. 诺基亚 9 PureView(olympic)
  17. 华硕 ZenFone 5Z (draco)

其实，原理还是比较简单的。

我们的电脑一般都是基于 x86 架构的 Windows 11 系统，但是，Windows 11 系统还有一个 arm64 架构版本。

有了 arm64 架构版本 Windows 11 系统，我们还需要一个能够将它和安卓手机连接在一起的桥梁。

这个桥梁就是 UEFI 固件。

根据微软官方描述：

> UEFI，全称“统一的可扩展固定接口”(Unified Extensible Firmware Interface)，
> 是一种详细描述全新类型接口的标准。这种接口用于操作系统自动从预启动的操作环境，加载到一种操作系统上，从而使开机程序化繁为简，节省时间。

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg
width='1px' height='1px' viewBox='0 0 1 1' version='1.1'
xmlns='http://www.w3.org/2000/svg'
xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg
stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-
opacity='0'%3E%3Cg transform='translate\(-249.000000, -126.000000\)'
fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1'
height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

微软联合高通公司基于骁龙 845 推出了 Windows 10 笔记本，支持了 UEFI 固件。

所以说，骁龙 845 芯片的手机可以刷入 Windows11。

现在有开发者在 Github 移植编译了这个 ，让它支持了骁龙 845 / 855 (部分) 的设备可以刷入 Windows 11 系统。

这个项目名叫 Renegade Project，项目地址：https://github.com/edk2-porting 。

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg
width='1px' height='1px' viewBox='0 0 1 1' version='1.1'
xmlns='http://www.w3.org/2000/svg'
xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg
stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-
opacity='0'%3E%3Cg transform='translate\(-249.000000, -126.000000\)'
fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1'
height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

看了一下，几位开发小哥都是国人，有湖北武汉的，有福建厦门的，还有北京的，真就是来自五湖四海的朋友啊！开源让他们聚集在了一起，Github 永远滴神！

需要注意的是：请勿尝试移植到任何索尼和谷歌设备上！ 那样的话，你的 UFS 会被清空!!!

详细教程可以参考：https://forum.renegade-project.org/t/845-windows/36
（备用链接：https://silime.gitee.io/2021/05/20/Windows10-on-arm64/）。

再提醒一次：一定不用用自己的主力机来刷入 Windows11！！！如果你没有一点手机刷机常识的话，请勿轻易尝试！

如果你想看视频教程的话，推荐你去看哔哩哔哩 UP 主极客湾 Geekerwan
录制的视频，地址：https://www.bilibili.com/video/av674010448/ 。

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg
width='1px' height='1px' viewBox='0 0 1 1' version='1.1'
xmlns='http://www.w3.org/2000/svg'
xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg
stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-
opacity='0'%3E%3Cg transform='translate\(-249.000000, -126.000000\)'
fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1'
height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

这个视频昨天上了哔哩哔哩的全站热榜，可见大家对手机装 Windows 11 的热情之高啊！

正如很多网友所说：“你的下一台电脑，何必是电脑！”。

Windows 11 优化了平板触摸操作，以适配越来越多支持触控屏幕的设备。相信未来一定会有一大批运行 Windows 11 系统的平板设备出现。

  

  

## 推荐

  * [编程基础](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1632585323454971905&__biz=MzIwNDgzMzI3Mg==#wechat_redirect) ：精选编程基础如学习路线、编程语言相关的开源项目。
  * [计算机基础](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1635325633234780161&__biz=MzIwNDgzMzI3Mg==#wechat_redirect)：精选计算机基础（操作系统、计算机网络、算法、数据结构）相关的开源项目。
  * [技术面试](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1632589980491366403&__biz=MzIwNDgzMzI3Mg==#wechat_redirect) ：精选技术面试相关的开源项目。
  * [项目实战](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1632590550748938241&__biz=MzIwNDgzMzI3Mg==#wechat_redirect) ：精选实战类型的开源项目。
  * [神器工具&网站](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzIwNDgzMzI3Mg==&action=getalbum&album_id=1692140336665378820#wechat_redirect) : 一些好用的插件、软件、网站。
  * [Java](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1345382825083895808&__biz=Mzg2OTA0Njk0OA==#wechat_redirect) ：Java类开源项目汇总

  

  

用心发掘 Github 和 Gitee 上优质的开源项目。

后台回复 **「PDF」** 获取 图解计算机基础

欢迎关注 **「Github掘金计划」**

预览时标签不可点

