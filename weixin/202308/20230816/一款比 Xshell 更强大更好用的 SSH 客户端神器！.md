----------------------------------------
----------------------------------------
#  一款比 Xshell 更强大更好用的 SSH 客户端神器！

[ Github掘金计划 ](javascript:void\(0\);)

**Github掘金计划** ![]()

微信号 GithubStar

功能介绍 用心发掘 Github 和 Gitee 上优质的开源项目。

____

_2022-02-05 11:36_ _发表于_

收录于合集 #神器工具 48个

由于需要连接远程 Linux 服务器，早期使用过 Putty，SecureCRT，后面主要使用 Xshell。  

自从接触了 MobaXterm之后，个人感觉比 Xshell 更好用，堪称SSH客户端的神器啊！

MobaXterm 和 Xshell 的关系，就像 IntelliJ IDEA 和 Eclipse 的关系一样，功能更加强大，效果更加炫酷。

接下来，介绍 MobaXterm 的下载、安装、简单使用，以及其强大的功能亮点（优点）。

## MobaXterm 下载

如果是个人使用，下载家庭版（免费的）就可以满足基本工作需求；如果想要使用更丰富的功能，可以使用专业版（收费的）。

个人使用的是家庭版 v12.3，已经足够满足工作需求了。

##### 1、以下是MobaXterm家庭版的下载地址（当前最新版本是 v12.4）：

> https://mobaxterm.mobatek.net/download-home-edition.html

![图片](https://mmbiz.qpic.cn/mmbiz_png/WwPkUCFX4x4znb055yFicraOlb050QwBWnscMU94KLCYGxSSmov4Oph2jC7OYpQTiasicUZhIl8gichkYTV0QDS34A/640?wx_fmt=png)

## MobaXterm 安装  

下载的是一个zip格式的压缩文件，如下：

![图片](https://mmbiz.qpic.cn/mmbiz_png/eQPyBffYbucsH1pRuRPibEN4N7leWeYEnH9a6ibINiauQPTvmnT9CaYZe9pJYhy9AKZekDEWAhWjQ84NERAibGPNlQ/640?wx_fmt=png)

解压后，双击 msi 文件进行安装

![图片](https://mmbiz.qpic.cn/mmbiz_png/WwPkUCFX4x4znb055yFicraOlb050QwBWqS3o1sksibLMicvpwiccBa9LibWkdE9ccIrI2O4IGYGz9lApTbXZKcg1KQ/640?wx_fmt=png)

以下是安装界面（安装一路选择“next”即可）：  
![图片](https://mmbiz.qpic.cn/mmbiz_png/WwPkUCFX4x4znb055yFicraOlb050QwBWd5cFjX96084G7U8vLIDBIDFiaAfcoEQqs4BVrAvwibTdI83mazu4FVLw/640?wx_fmt=png)

![图片](https://mmbiz.qpic.cn/mmbiz_png/WwPkUCFX4x4znb055yFicraOlb050QwBWXZriaI7gkWibsL58y7C85Jdn6H1ckjjlWmYNlhy1zk5ZH5RyV5sooLBA/640?wx_fmt=png)

![图片](https://mmbiz.qpic.cn/mmbiz_png/WwPkUCFX4x4znb055yFicraOlb050QwBWaQHDpmZPwVb2YzUvDRXpIbcT21o6ibXGU4E25HqMLwldu1Y0HelYpQA/640?wx_fmt=png)

![图片](https://mmbiz.qpic.cn/mmbiz_png/WwPkUCFX4x4znb055yFicraOlb050QwBWuXvw1xPiaMicXldavE4xDasRNPkTj5Ec58N4t8tBjmBGZIKEiaQpBC2uw/640?wx_fmt=png)

安装完毕后，即可在桌面上看到 MobaXterm 的桌面快捷图标，如下图：

![图片](https://mmbiz.qpic.cn/mmbiz_png/WwPkUCFX4x4znb055yFicraOlb050QwBWfic8pNFria0qXQcBJOEYuagdNX1FP090E6jd47ZMKpMLJTaVeadeTkUw/640?wx_fmt=png)

## MobaXterm 简单使用  

##### 1、双击桌面上的 MobaXterm 图标，进入使用界面，选择 Session --> SSH，如下图：

![图片](https://mmbiz.qpic.cn/mmbiz_png/WwPkUCFX4x4znb055yFicraOlb050QwBW8fNkBH7953FsCWpVX6YM2J23eHAWbHGLrSbFibiaYGSyZwX3tK5WNPsg/640?wx_fmt=png)

##### 2、填写需要连接的远程主机 IP 和 用户名，如下图：  

![图片](https://mmbiz.qpic.cn/mmbiz_png/WwPkUCFX4x4znb055yFicraOlb050QwBWEcoGMhRMRvGTJbn5WGOFXdFbLA0NKNM0t7CCbDJWibhjbWnUhicOBlwg/640?wx_fmt=png)

##### 3、点击 “OK”，进入到远程机器的密码输入页面，输入主机的正确登录密码。  

选择“Yes”，即可保存密码，以后访问该主机，不用每次再输入主机密码。

![图片](https://mmbiz.qpic.cn/mmbiz_png/WwPkUCFX4x4znb055yFicraOlb050QwBWZz7jqx64AWiaTL1L9pkk9SicibI6nSPMe1ibg1Dr5xKTdMwvEiaSyPBCfUA/640?wx_fmt=png)

至此，即可操作远程的主机，进行相应的工作。  

## MobaXterm 功能亮点（优点）

##### 1、内嵌Sftp模块，可以很方便地进行上传或者下载文件（支持拖拽）

在命令窗口进入需要文件上传或者下载的目录，勾选“Follow terminal folder”，左侧的 Sftp 目录就会跳转到相应的目录。

 **1）文件上传的两种方式：**

a）点击 MobaXterm 的文件上传按钮，在本地目录下，选中需要上传的文件，点击确定，即可完成上传。

b）在本地目录下，选中需要上传的文件，将文件拖到 Sftp 的远程目录下，即可完成上传。

 **2）文件下载的两种方式：**

a）在远程服务器目录下，选中需要下载的文件，点击下载功能按钮，再选择相应的保存路径，即可下载。

b）在远程服务器目录下，选中需要下载的文件，将文件拖出到本地目录下，即可完成下载。

![图片](https://mmbiz.qpic.cn/mmbiz_png/WwPkUCFX4x4znb055yFicraOlb050QwBW9CSvJcqs6XpuVgTricEgxY4TragRQibM3OhXAhjPJnGPJnR1MZuK1dbA/640?wx_fmt=png)

##### 2、自带监控功能，可以很方便地检测远程机器资源的使用情况  

左侧菜单栏下方，点击“Remote monitoring”，即可看到远程机器资源的实时使用情况；再次点击，使用情况将会被隐藏。

![图片](https://mmbiz.qpic.cn/mmbiz_png/WwPkUCFX4x4znb055yFicraOlb050QwBWgF0tnYWicqUKVib7chppgjyibvlT67bO0gJrK56EXu9qicMpUUnHbafUpw/640?wx_fmt=png)

##### 3、可以很方便地查看 Session 列表  

由于工作中可能会接触不同的项目，需要连接不同的远程环境。我们经常会创建多个文件夹保存远程机器的 Session 信息

![图片](https://mmbiz.qpic.cn/mmbiz_png/WwPkUCFX4x4znb055yFicraOlb050QwBWD6okeribicaUMEttnic2zDF6ianNfNy3tlSdS3Ben5Vnic4V1SPkVJ1G2Lw/640?wx_fmt=png)

##### 4、连接方式种类丰富  

不仅可以使用SSH，还有其他多种连接方式

![图片](https://mmbiz.qpic.cn/mmbiz_png/WwPkUCFX4x4znb055yFicraOlb050QwBWQxEicw2McKbjWH4gkV6iaCsv3B4KuS8HLRq8ic4wDPSYbhsDiaymloxp2w/640?wx_fmt=png)

##### 5、可以像看Linux系统一样，使用Linux命令查看 windows本地目录和文件  

![图片](https://mmbiz.qpic.cn/mmbiz_png/WwPkUCFX4x5RoLFme5iaJvtV3SEAVb0VdsyoR8VduqldiapEjaIO5ByhqMAZVzX6rlolhOGfnt9Qh9LNZC4dibDvw/640?wx_fmt=png)

##### 6、字体高亮显示效果炫酷  

以 Tomcat 的日志文件内容为例，一些关键字会高亮成不同的颜色，方便问题查找：

![图片](https://mmbiz.qpic.cn/mmbiz_png/WwPkUCFX4x5RoLFme5iaJvtV3SEAVb0VdsmQoEM5XEygff1YMicZRlYCiaSIGXbzLKcaAUgP39OIJtVewdG4mrdXg/640?wx_fmt=png)

##### 7、 支持快速复制 Session 窗口  

在 Session页签上右键点击，选择“Duplicate tab”，即可完成复制

![图片](https://mmbiz.qpic.cn/mmbiz_png/WwPkUCFX4x5RoLFme5iaJvtV3SEAVb0VdQbfJJECctyy5Q4uIAPHV4cPdTvNmvT9XMX8TXAU7UHNicB7K8WIZD3g/640?wx_fmt=png)![图片](https://mmbiz.qpic.cn/mmbiz_png/WwPkUCFX4x5RoLFme5iaJvtV3SEAVb0Vd03ReZGWllLNav46BFRDCI3iaTBf7uKdjhe3xp5ibaU4Bm8uTib6Wwlyqg/640?wx_fmt=png)

##### 8、可以给不同的 Session 页签设置不同的颜色  

在 Session页签上右键点击，选择“Set tab
color”，可以选择自己喜欢的颜色![图片](https://mmbiz.qpic.cn/mmbiz_png/WwPkUCFX4x5RoLFme5iaJvtV3SEAVb0Vd2uiaalVCCicibVf5JzrewyDPwzqxFx0L2ffrHqvbqoibBJPp61c1hVmerQ/640?wx_fmt=png)可以选择基本颜色或者自定义的颜色：  
![图片](https://mmbiz.qpic.cn/mmbiz_png/WwPkUCFX4x5RoLFme5iaJvtV3SEAVb0Vd7QbDfBFMv7dK2aZM7ExZgFcF3gueNENecgc7jzNPEfZT833MRDbiauw/640?wx_fmt=png)修改后，效果如下：  
![图片](https://mmbiz.qpic.cn/mmbiz_png/WwPkUCFX4x4znb055yFicraOlb050QwBWG0ibGdK8TMHwia0xBbmPG1NvVFupNLCDYvgnLely0KcHWnnjZlABG7hA/640?wx_fmt=png)9、支持多个Session
窗口列表展示  

免费的家庭版也支持同时打开多个Session窗口，当打开了多个窗口的时候，可能不方便查看具体想看的Session窗口。

![图片](https://mmbiz.qpic.cn/mmbiz_png/WwPkUCFX4x4znb055yFicraOlb050QwBWG0ibGdK8TMHwia0xBbmPG1NvVFupNLCDYvgnLely0KcHWnnjZlABG7hA/640?wx_fmt=png)

点击 MobaXterm 右上方的“回形针”按钮，即可看到所有打开的 Session 窗口

##### 10、左侧菜单栏可以很方便地弹出和隐藏

1）点击左侧的收缩按钮，即可完成左侧菜单栏的隐藏

![图片](https://mmbiz.qpic.cn/mmbiz_png/WwPkUCFX4x4znb055yFicraOlb050QwBWp4Yb2HYHq1icZtmCvo9icovlnia2TdMoNMxL9AYjznVcFiazlG6YWdCN4w/640?wx_fmt=png)

收缩后效果如下：  

![图片](https://mmbiz.qpic.cn/mmbiz_png/WwPkUCFX4x4znb055yFicraOlb050QwBWF0iaCDiccwkOaqJSaUkiaFbG4RoZjSGmSRib1ibj7hex4icSb68HHJ8icVvug/640?wx_fmt=png)

2）点击左侧的“弹出”按钮，即可弹出菜单栏  

![图片](https://mmbiz.qpic.cn/mmbiz_png/WwPkUCFX4x4znb055yFicraOlb050QwBWd3NT5e2x2Y7yJbpEvEeTSRJa9KlM0OvgOmQqPovkFeJaFdqeNrhv9A/640?wx_fmt=png)

##### 11、MobaXterm 小游戏  

在左侧的Tools工具栏里提供了几款小游戏

![图片](https://mmbiz.qpic.cn/mmbiz_png/WwPkUCFX4x4znb055yFicraOlb050QwBW1eUTBzzQGPPDGL5G5sYMATrvohIgfJC2Lto8YXouQia7rnWlx8cvGKw/640?wx_fmt=png)![图片](https://mmbiz.qpic.cn/mmbiz_png/WwPkUCFX4x4znb055yFicraOlb050QwBWtyyoRWTUBWcyIVOHo1ET81JTPBEkYJKfrdC7BvlZxnPfTvUpNiakZhw/640?wx_fmt=png)

1）俄罗斯方块  

![图片](https://mmbiz.qpic.cn/mmbiz_png/WwPkUCFX4x4znb055yFicraOlb050QwBWPKTP6BeLiaUQwIWktysmoKaCUPiagMtgyDHeV9yke4ssLM5LFUbWCOaw/640?wx_fmt=png)![图片](https://mmbiz.qpic.cn/mmbiz_png/WwPkUCFX4x4znb055yFicraOlb050QwBWA6b7WDcKicdlZicSHeqL7NW0dtpwic99mskfv4c2vpwwG41561lR1EvTg/640?wx_fmt=png)

2）数独  

![图片](https://mmbiz.qpic.cn/mmbiz_png/WwPkUCFX4x4znb055yFicraOlb050QwBWNWp6WCPKPBpPeTfiaktXvcKoIqeiakJ1A1otJGNOPwtibTA5PD2Ow49sw/640?wx_fmt=png)

##### 12、支持四种 Session 窗口分屏效果  

支持四种分屏效果：单一直排、垂直分屏、水平分屏 和 四象限分屏

1）单一直排效果（传统效果，比较常用实用）

![图片](https://mmbiz.qpic.cn/mmbiz_png/WwPkUCFX4x4znb055yFicraOlb050QwBWfPmNiaMtDEKt0Jf7MYH1NJF3h2cBtSVUuicMBHKZmyPsg8iaYJIMMmFpg/640?wx_fmt=png)

2）垂直分屏效果（可用于两个主机的文件对比）  

![图片](https://mmbiz.qpic.cn/mmbiz_png/WwPkUCFX4x4znb055yFicraOlb050QwBWWLMWYfmT19dFjwzDyd9eZ90aGokGomjpA7bSS2ibRDDCxajU6OFM8gw/640?wx_fmt=png)

3）水平分屏  

![图片](https://mmbiz.qpic.cn/mmbiz_png/WwPkUCFX4x4znb055yFicraOlb050QwBWOAQV7J0WEoSaicIcbgjGqjg8aZQicDt6gSCFJ2ib3UowO7oJSy8zf8Tjg/640?wx_fmt=png)

4）四象限分屏  

![图片](https://mmbiz.qpic.cn/mmbiz_png/WwPkUCFX4x4znb055yFicraOlb050QwBWYNQPGibea5OfeEC2uqddgRUrhhmFh91B7C99jeHdvQaOPpHNutia8ekw/640?wx_fmt=png)

##### 13、Session 断开连接后，可以很方便地再次连接  

经常会遇到打开一个Session窗口，如果长时间不操作或者网络中途断开，需要重新登录远程机器的场景。

此时不需要关闭窗口，重新打开一个。

MobaXterm提供了便捷方式：只需要 输入R 即可重启 Session

![图片](https://mmbiz.qpic.cn/mmbiz_png/WwPkUCFX4x4znb055yFicraOlb050QwBWM0TS1XS560MBrqURCgm9wiaib5icxFb1UkicLkUWLquEibmPlMCibUPmibzEA/640?wx_fmt=png)

输入R后，即可再次连接到之前的Session  
![图片](https://mmbiz.qpic.cn/mmbiz_png/WwPkUCFX4x4znb055yFicraOlb050QwBWwibLBTFZDh04q8SFtWPSDUm8TNtJ3eqTfJ5o7qB2AEcl4uA62F1iaKgw/640?wx_fmt=png)PS：  

MobaXterm 真的是一款 SSH客户端神器，强烈推荐大家使用！

如果想炫酷地操作 Linux 远程机器，赶快尝试体验一下 MobaXterm 的各种“神技”吧！

MobaXterm 强大的功能，一定会让你赞叹不已！

 _来源：_ _cnblogs.com/miracle-luna/p/12008869.html_

## 推荐

  * [Github掘金计划](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzIwNDgzMzI3Mg==&action=getalbum&album_id=1571213952619954180#wechat_redirect) ：历史优质原创汇总！用心发掘 Github 和 Gitee 上优质的开源项目。
  * [编程基础](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1632585323454971905&__biz=MzIwNDgzMzI3Mg==#wechat_redirect) ：精选编程基础如学习路线、编程语言相关的开源项目。
  * [计算机基础](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1635325633234780161&__biz=MzIwNDgzMzI3Mg==#wechat_redirect)：精选计算机基础（操作系统、计算机网络、算法、数据结构）相关的开源项目。
  * [技术面试](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1632589980491366403&__biz=MzIwNDgzMzI3Mg==#wechat_redirect) ：精选技术面试相关的开源项目。
  * [项目实战](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1632590550748938241&__biz=MzIwNDgzMzI3Mg==#wechat_redirect) ：精选实战类型的开源项目。
  * [神器工具&网站](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzIwNDgzMzI3Mg==&action=getalbum&album_id=1692140336665378820#wechat_redirect) : 一些好用的插件、软件、网站。

  

用心发掘 Github 和 Gitee 上优质的开源项目。

欢迎关注！欢迎点赞分享！

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/BcyAypujBVZqeicvzhcGl7FLyAw3Xsu2POdZOiaPnQXryMp8gyzkcKF4NGgOydQcCWhicNREhf8fQ1euq2lTzhrtA/640?wx_fmt=jpeg)

预览时标签不可点

收录于合集 #神器工具

48个

上一篇最强动漫换脸神器诞生了！！！下一篇这款开源英语学习神器是真滴哇塞！！！

