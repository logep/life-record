----------------------------------------
----------------------------------------
#  手机APP的秘密，看的一清二楚！

[ Github掘金计划 ](javascript:void\(0\);)

**Github掘金计划** ![]()

微信号 GithubStar

功能介绍 用心发掘 Github 和 Gitee 上优质的开源项目。

____

_2022-04-02 12:07_ _发表于_

收录于合集

## 0x00 摘要

在逆向分析以及移动端开发的时候，总会需要对APP的网络行为进行监控测试，本文总结一些抓包思路，并对其使用方法进行实践

在抓包界，Wireshark 应该算是综合排名第一的工具（其实 Wireshark 自带的命令行工具 tshark 更牛逼）

本文总结记录了 5 种抓包方式，掌握其一即可进行实践，欢迎大家一起交流分享

## 0x01 基于 Wireshark

实验步骤：

1.1 在电脑主机上使用猎豹 Wifi之类的工具，开启热点，将所要测试的手机连接该热点，记录其IP地址

![图片](https://mmbiz.qpic.cn/mmbiz_png/jXQDbLkGBYU7dmpMjic0qWoRS5oZsCXfiabHGxpvNicwhGyL0icgRicRgOImSe7Hial1paMaibFFSxEGibqR02Nv8fAt1A/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

1.2 使用 Wireshark 对以上 IP 地址进行捕获

Capture——Options

![图片](https://mmbiz.qpic.cn/mmbiz_png/jXQDbLkGBYU7dmpMjic0qWoRS5oZsCXfiauZu6Dnj7MVoCf7KicRoJKSF50N0wJDrrdKibROssT0Y3Pk6aqL3EKptw/640?wx_fmt=png)![图片](https://mmbiz.qpic.cn/mmbiz_png/jXQDbLkGBYU7dmpMjic0qWoRS5oZsCXfiaJd9qowuUS4HQ01zgbjia9gvEtIbwFaOGc6fToUjYBFYIWyoXm5Yyr4A/640?wx_fmt=png)

1.3 总结

该方法简单粗暴高效，可以将捕获的数据包随时保存下来，便于后续分析或者进行 PCAP 可视化分析。

关于命令行工具 tshark 在此不做赘述，感兴趣的读者自行研究。

## 0x02 基于 tcpdump

实验环境：

下载安装 Genymotion 安卓虚拟机，在该模拟器环境种进行实践操作（基于实体手机亦然，前提是手机必须得 ROOT）

笔者仅在 Android 系统下测试，未在 iOS 系统下实验

实验步骤：

### 2.1 说明

模拟器中自带的 tcpdump 工具，位于：/system/xbin/ 目录下

### 2.2 数据包捕获

可以通过 **adb shell** 命令在 CMD 模式下连接模拟器，su 到 root 模式进行抓包

    
    
    #!bash  
    tcpdump -vv -s 0 -i eth1 -w /sdcard/capture.pcap  
    

参数说明：

  * -vv：获取详细的包信息（注意是两个 v 不是 w）
  * -s 0：不限数据包的长度，如果不加则只获取包头
  * -w xxx.pcap：捕获数据包名称以及存储位置（本例中保存在 sdcard 路径下，数据包名为 capture.pcap）
  * -i eth1：捕获制定的网卡（在 genymotion 虚拟机中，使用 busybox ifconfig 命令可以查看相关信息，一般 genymotion 的 ip 地址都为 10.xx.xx.x）

如果你想指定捕获的数据包长度，可以使用 -c 参数（例如 -c 128） 捕获结束，直接按 Ctrl + C 即可

### 2.3 数据分析

将捕获到的数据包拖到本地使用 Wireshark 进行查看：

    
    
    #!bash  
    adb pull /sdcard/capture.pcap C:\tmp  
    

TIPS：将数据包文件 push 到手机上命令为

    
    
    #!bash  
    adb push C:\tmp\capture.pcap /sdcard/  
    

## 0x03 基于 Fiddler 4

实验步骤：

### 3.1 下载 FIddler 4

### 3.2 设置 Fiddler 4

打开Fiddler，Tools-> Fiddler Options （配置完成记得重启 Fiddler）

![图片](https://mmbiz.qpic.cn/mmbiz_png/jXQDbLkGBYU7dmpMjic0qWoRS5oZsCXfiazhZzRuQDVZiaOl8iaY8g8cibRYvVoQhDDUbjROqsrsQloYHibiaB1LDSTSQ/640?wx_fmt=png)![图片](https://mmbiz.qpic.cn/mmbiz_png/jXQDbLkGBYU7dmpMjic0qWoRS5oZsCXfiaBoQ5crswaP2o3XrYmbYNV73cNVc2aIV7uRCyoURPiaOVUab8Pxm6fLw/640?wx_fmt=png)

### 3.3 设置手机代理

首先，获取安装 Fiddler 4 的 PC 对应的 IP 地址（ipconfig）：

![图片](https://mmbiz.qpic.cn/mmbiz_png/jXQDbLkGBYU7dmpMjic0qWoRS5oZsCXfiayGXrhic14qNv36nQLwHT8kgEZmVAPGhZ33I6lCMNsv7PWxfGibxThXiaw/640?wx_fmt=png)

确保手机和 PC 是连接在同一个局域网中！！！

下面对手机进行设置（笔者使用小米测试机）：点击手机中“设置”——Wi-Fi——选择已经连接的wifi——代理设置改为手动

![图片](https://mmbiz.qpic.cn/mmbiz_png/jXQDbLkGBYU7dmpMjic0qWoRS5oZsCXfia8OPWwzSHJPbeoEpRiasb7DdKgTicLJ9xf9YTfvzUVcFnZAuOz47IgkAA/640?wx_fmt=png)

下载 Fiddler 的安全证书

使用手机浏览器访问：http://10.2.145.187:8888，点击"FiddlerRoot certificate"，然后安装证书即可。

至此，已经全部设置完毕。

### 3.4 数据包捕获

重新打开 Fiddler 4，然后打开手机中的浏览器，访问任意网址，Fiddler 抓包信息如下：

![图片](https://mmbiz.qpic.cn/mmbiz_png/jXQDbLkGBYU7dmpMjic0qWoRS5oZsCXfiaicrj6UEGmqM8JXDgsfqRTiasJMXazX1OU4DRXuj1HrBM6W1ia65ZKXCHw/640?wx_fmt=png)

Enjoy！

## 0x04 基于 Charles

实验环境：

win7 + Charles v3.11

一般使用 Charles 都是基于 MAC OS ，笔者在 mac 平台以及 windows 平台均试验过，操作过程和思路基本一致，因此，本文以 win7
为测试环境

实验步骤：

### 4.1 捕获 http 数据包

手机设置代理：

![图片](https://mmbiz.qpic.cn/mmbiz_png/jXQDbLkGBYU7dmpMjic0qWoRS5oZsCXfia8OPWwzSHJPbeoEpRiasb7DdKgTicLJ9xf9YTfvzUVcFnZAuOz47IgkAA/640?wx_fmt=png)

打开 Charles 即可捕获数据包（Proxy —— Proxy Settings）：

![图片](https://mmbiz.qpic.cn/mmbiz_png/jXQDbLkGBYU7dmpMjic0qWoRS5oZsCXfiarjMxdIF7ic6VPVG5dCrt9xB0HhWxcqjAOZQbjnsYVePeFHdS05FKMaw/640?wx_fmt=png)![图片](https://mmbiz.qpic.cn/mmbiz_png/jXQDbLkGBYU7dmpMjic0qWoRS5oZsCXfiaGckS6R8Lrk01s2n7ibsjb1C2g4FmryLIVzzwkmtsMbCevoxibSQ0XFQQ/640?wx_fmt=png)

### 4.2 捕获 https 数据包

手机端安装证书：

Android 手机或者 iPhone 均可直接访问 http://www.charlesproxy.com/ssl.zip ，然后根据图示点击证书安装

![图片](https://mmbiz.qpic.cn/mmbiz_png/jXQDbLkGBYU7dmpMjic0qWoRS5oZsCXfia4V2Xaxia88W1RwJdZOvK5QnMRrdZOG4GHDQLJfa9VJ0QyxNYvlprfuw/640?wx_fmt=png)![图片](https://mmbiz.qpic.cn/mmbiz_png/jXQDbLkGBYU7dmpMjic0qWoRS5oZsCXfiaBMBGChf3lIiaVVHmCeGsdQSEL0NQdkJtiaYHOw3KYEsWUqdl1dITQiatA/640?wx_fmt=png)![图片](https://mmbiz.qpic.cn/mmbiz_png/jXQDbLkGBYU7dmpMjic0qWoRS5oZsCXfiamEjQWUqV6xRsqlzabTQnRCPibblqdrsicZgXykK3vUhGkfWHgdGpJCLQ/640?wx_fmt=png)

### 设置 Charles：

选择 Proxy —— SSL Proxying Settings —— Locations —— Add

在弹出的表单中填写 Host 域名（也就是你想要抓包链接的主机名），以及对应的 Port 端口（此处相当于过滤作用）

当然，你可以采用更加粗暴的方式：使用通配符，例如你想要捕获所有的 https
包，这里也可以直接都为空，表示捕获所有的主机和端口；或者都分别填“*”星号，匹配所有的字符，捕获所有的 https。

![图片](https://mmbiz.qpic.cn/mmbiz_png/jXQDbLkGBYU7dmpMjic0qWoRS5oZsCXfiaoepZmYMtZUxSMM6icib0pYmSIic71ic3RQb1dkm4j2zC5K0gUU2jf2RxWA/640?wx_fmt=png)![图片](https://mmbiz.qpic.cn/mmbiz_png/jXQDbLkGBYU7dmpMjic0qWoRS5oZsCXfia2bl9VPrdnOgvqGXadrp0zlMxnBnoGQCv7EF0xedu0FtIBolfoJQ9VQ/640?wx_fmt=png)![图片](https://mmbiz.qpic.cn/mmbiz_png/jXQDbLkGBYU7dmpMjic0qWoRS5oZsCXfia5B7eC9u47NE5GchsibllxVJjKGueoyOlktvm3oXdfPo450g0X9bJPdw/640?wx_fmt=png)

## 0x05 基于 Burpsuite

实验步骤：

### 5.1 捕获 http 数据包

PC 端 Burpsuite 设置：

![图片](https://mmbiz.qpic.cn/mmbiz_png/jXQDbLkGBYU7dmpMjic0qWoRS5oZsCXfia6IibCEVNXSyMXve11LOoo9icKRFrIX2wpogl1zb5Iic9NM03yGCgibxpLg/640?wx_fmt=png)

手机端代理设置方法同以上 3.3 4.1

打开 Burpsuite 即可捕获 http 数据包：

![图片](https://mmbiz.qpic.cn/mmbiz_png/jXQDbLkGBYU7dmpMjic0qWoRS5oZsCXfia6zdtDVT6diccAnEFJMoAuBQwbm83TIAAib3MpZMzDgKziaVcBAIVc8MBA/640?wx_fmt=png)

### 5.2 捕获 https 数据包

手机端设置好代理之后，使用浏览器访问：http://burp/

![图片](https://mmbiz.qpic.cn/mmbiz_png/jXQDbLkGBYU7dmpMjic0qWoRS5oZsCXfiaelc4JbhdRSEicP6KL6hcY28kP10ZWKauIWTrMTQx9Tq2KUXiakfTHJTQ/640?wx_fmt=png)![图片](https://mmbiz.qpic.cn/mmbiz_png/jXQDbLkGBYU7dmpMjic0qWoRS5oZsCXfiaLFHRdib5JAOpBn4nIotDUvGmTKanxqwthUz37GPVTrpDmonQkzBAYcA/640?wx_fmt=png)

此处存在一个问题：下载的证书是 der 格式的，我们手机端安装的是 crt 格式的，需要使用 firefox 浏览器转一下格式：可以首先在
Brupsuite 中导出 der 格式证书，然后导入火狐浏览器，然后从火狐浏览器导出证书格式为 crt

![图片](https://mmbiz.qpic.cn/mmbiz_png/jXQDbLkGBYU7dmpMjic0qWoRS5oZsCXfiaQIbIx2g62DdIa08ydB2QNI9BCKac3nz9opiaRpolVeVW9AKHKNtdU2w/640?wx_fmt=png)

打开火狐浏览器：工具——选项——高级——证书——查看证书

![图片](https://mmbiz.qpic.cn/mmbiz_png/jXQDbLkGBYU7dmpMjic0qWoRS5oZsCXfiaJwRqib48cAJBibkzQyPI3xXgzd8P0aeptDjUUW1ZCNa5icygOoXibDUVCw/640?wx_fmt=png)![图片](https://mmbiz.qpic.cn/mmbiz_png/jXQDbLkGBYU7dmpMjic0qWoRS5oZsCXfiagJzDk9mBTunG22TXjEb8mricrvWMIYR4AGAz2fQGyPjicPO0u0dAx2tg/640?wx_fmt=png)![图片](https://mmbiz.qpic.cn/mmbiz_png/jXQDbLkGBYU7dmpMjic0qWoRS5oZsCXfiasGCl3cx7RTb8mT2kue02bEGJuYCAsKCz6E2blJXQg8Q1QD3xwjRwLw/640?wx_fmt=png)

成功捕获 https 数据包

![图片](https://mmbiz.qpic.cn/mmbiz_png/jXQDbLkGBYU7dmpMjic0qWoRS5oZsCXfiaeWcD0a0fBdutwFGggx8MxLOgoiciblHaMGIHbMGXQesjSGwmvibxWyAdQ/640?wx_fmt=png)

## 0x06 总结

当我们停止捕获数据包时，将Fiddler 或 Charles 关闭，此时手机端是无法正常访问网络的，因为设置了代理，这时候需要将代理关闭，即可正常浏览网页

对于大多数走代理的应用可以选择 Fiddler 或 Charles，无需 root，一次配置，终身使用；对于不走代理的 App 可以利用 tcpdump
捕包，然后使用 Wireshark 查看；最简单便捷的便是第一种方法「0x01. 基于 Wireshark」

以上所有工具各有优劣，读者可以根据工作环境，按需使用，个人觉得一般情况下使用 Wireshark + Fiddler 或者 Wireshark +
Charles 即可完成各平台的抓包分析任务

以上工具中只有BurpSuite可以对抓包过程进行交互式操作；Wireshark支持的协议最多，也更底层，功能强大，但过于沉重

对于本文涉及的相关工具的安装、设置、破解、详细使用，不在本文讨论范围之内（Charles
免费版其实还比较厚道，如果重度需要，建议购买正版），本文旨在浅析捕获移动终端数据包的方法和思路。

> 原文地址：https://wooyun.kieran.top/#!/drops/1024.浅析手机抓包方法实践

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

