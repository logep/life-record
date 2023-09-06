----------------------------------------
----------------------------------------
#  这 6 个爬虫开源项目 yyds

[ Github掘金计划 ](javascript:void\(0\);)

**Github掘金计划** ![]()

微信号 GithubStar

功能介绍 用心发掘 Github 和 Gitee 上优质的开源项目。

____

_2021-10-22 11:51_ _发表于_

收录于合集

以下文章来源于逛逛GitHub ，作者老逛

![](images/0)
**逛逛GitHub** .

每天推荐一个好玩的 GitHub 开源项目。

今天盘点 6 个爬虫开源项目，它们可以帮你爬天爬地怕空气，爬微博、爬B站、爬知乎、爬*站。

提前声明，切勿使用这些项目从事非法商业活动，仅用于用于科研学习![图片](https://mmbiz.qpic.cn/mmbiz_png/ePw3ZeGRruwUHqTcia2xl9gw7Lwd9SxHQ3icJDiaaHISfwic7lNgfiabtn0wMEPjw3CAV8z5a9LU99q9UbU0BVIuLlw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

#

* * *

01微博爬虫这个开源项目程序可以持续爬取一个或多个新浪微博用户（如李文di、无疫烦）的数据，并将结果信息写入文件或数据库。写入信息几乎包括用户微博的所有数据，包括用户信息和微博信息两大类。

    
    
    地址：https://github.com/dataabc/weiboSpider

爬取结果可写入文件和数据库，具体的写入文件类型如下：

  * txt文件
  * csv文件
  * json文件
  * MySQL数据库
  * MongoDB数据库
  * SQLite数据库

同时支持下载微博中的图片和视频，具体的可下载文件如下：

  * 原创微博中的原始图片
  * 转发微博中的原始图片
  * 原创微博中的视频
  * 转发微博中的视频
  * 原创微博Live Photo中的视频
  * 转发微博Live Photo中的视频

首先需要修改 config.json 文件，然后爬取，程序会自动生成一个 weibo
文件夹，我们以后爬取的所有微博都被存储在这里。然后程序在该文件夹下生成一个名为"微博名字"的文件夹，明星的所有微博爬取结果都在这里。文件夹里包含一个csv文件、一个txt文件、一个json文件、一个img文件夹和一个video文件夹，img文件夹用来存储下载到的图片，video文件夹用来存储下载到的视频。如果你设置了保存数据库功能，这些信息也会保存在数据库里，数据库设置见设置数据库部分。

#

* * *

02Python爬虫教程Python爬虫教程系列、从 0 到 1 学习 Python 爬虫，包括浏览器抓包，手机 APP 抓包，如
fiddler、mitmproxy，各种爬虫涉及的模块的使用，如：requests、beautifulSoup、selenium、appium、scrapy
等，以及验证码识别，MySQL，MongoDB 数据库的 Python 使用，多线程多进程爬虫的使用，css
爬虫加密逆向破解，JS爬虫逆向，分布式爬虫，爬虫项目实战实例等。

    
    
    地址：https://github.com/wistbean/learn_python3_spider

![图片](https://mmbiz.qpic.cn/mmbiz_png/ePw3ZeGRruwUHqTcia2xl9gw7Lwd9SxHQHRC7ia7u5C2DsVSY1QQEa6nID31AzVEXXKH7ZCz3yyibicPjuVARI7Shg/640?wx_fmt=png)

#

* * *

03爬虫集合这个开源项目收集了各种爬虫 ，包括
Blibli、博客园、百度百科、北邮人、百度云网盘、Boss、贝壳、豆瓣、CSDN、抖音、GitHub、京东、知乎、拉钩、链家、微信公众号、网易云等等，你能想到的国内外网站爬虫，都可以先来这里看看有没有开源的爬虫。

    
    
    地址：https://github.com/facert/awesome-spider

#

* * *

04智能爬虫平台

这个开源平台以流程图的方式定义爬虫，是一个高度灵活可配置的爬虫平台。你可以在该平台配置各种爬虫。

    
    
    地址：https://gitee.com/ssssssss-team/spider-flow

![图片](https://mmbiz.qpic.cn/mmbiz_png/ePw3ZeGRruwUHqTcia2xl9gw7Lwd9SxHQ6PduLKAmYTAQicfuRBwM2icSAibZKsO6qv21sSqBcnicicBk0c2jicm2PkCQ/640?wx_fmt=png)接下来以流程图的方式，开始配置一些变量和参数，点开始就能爬出你想要的数据。  
![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg
width='1px' height='1px' viewBox='0 0 1 1' version='1.1'
xmlns='http://www.w3.org/2000/svg'
xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg
stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-
opacity='0'%3E%3Cg transform='translate\(-249.000000, -126.000000\)'
fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1'
height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)![图片](https://mmbiz.qpic.cn/mmbiz_png/ePw3ZeGRruwUHqTcia2xl9gw7Lwd9SxHQDhMkCVRGAcPnGEo1k5ekPNC08faBic2NA7aO22FRWg2rkJxewxATjfw/640?wx_fmt=png)

#

* * *

05Java爬虫Spiderman
是一个Java开源Web数据抽取工具，它能够收集指定的Web页面并从这些页面中提取有用的数据。Spiderman主要是运用了像XPath，正则表达式等这些技术来实数据抽取。

    
    
    地址：https://gitee.com/l-weiwei/spiderman

#

* * *

06爬虫大全这个开源项目包含多种网站、电商数据爬虫。包含：淘宝商品、微信公众号、大众点评、招聘网站、闲鱼、阿里任务、scrapy博客园、微博、百度贴吧、豆瓣电影、包图网、全景网、豆瓣音乐、某省药监局、搜狐新闻、机器学习文本采集、fofa资产采集、汽车之家、国家统计局、百度关键词收录数、蜘蛛泛目录、今日头条、豆瓣影评️️️。

    
    
    地址：https://gitee.com/AJay13/ECommerceCrawlers

![图片](https://mmbiz.qpic.cn/mmbiz_png/ePw3ZeGRruwUHqTcia2xl9gw7Lwd9SxHQ1PGaGYHFiaB3KAeByO5ZeyKu7rxJXLfzKy3KyH2ThibosWHXA39muHrQ/640?wx_fmt=png)

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

