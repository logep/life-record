----------------------------------------
----------------------------------------
#  推荐 7 个 yyds 的开源项目

[ Github掘金计划 ](javascript:void\(0\);)

**Github掘金计划** ![]()

微信号 GithubStar

功能介绍 用心发掘 Github 和 Gitee 上优质的开源项目。

____

_2021-10-15 12:59_ _发表于_

收录于合集

以下文章来源于逛逛GitHub ，作者老逛

![](images/0)
**逛逛GitHub** .

每天推荐一个好玩的 GitHub 开源项目。

华为天才少年又出新作，自制了一个钢铁侠的机械臂，而且已经开源。本文就盘点最近比较火的开源项目，包括：

  * 钢铁侠的机械臂
  * 秒杀系统设计与实现
  * 个人独立博客系统
  * 适用于 Android 电视和电视盒的应用
  * 软件工程技术面试个人指南
  * 开源身份验证和授权服务器
  * 构建管理面板、工作流

01  
钢铁侠的机械臂前几天 B 站UP主 “稚晖君” 利用国庆假期，自制了一款小型高精度机械臂Dummy，而这款机械臂，甚至能通过远程控制，给葡萄缝针。  
这个天才 Up 主还发布过自动驾驶自行车、迷你型Linux电脑、“螃蟹号火星探测器”、充电宝显示器、带屏幕的NFC名片等。具体可以看这篇文章：[这黑科技从
B站 火到
GitHub](http://mp.weixin.qq.com/s?__biz=MzUxNjg4NDEzNA==&mid=2247503435&idx=1&sn=7ae5471282de3074d6708b542698de01&chksm=f9a21d82ced59494f15aa325b3474f060ac661148e8d80e518e2fb91e0ff240effe70761df70&scene=21#wechat_redirect)现在机械臂机器人项目已经开源，大家可以看一看：

    
    
    地址：https://github.com/peng-zhihui/Dummy-Robot  
    视频：https://www.bilibili.com/video/BV12341117rG?

![图片](https://mmbiz.qpic.cn/mmbiz_png/ePw3ZeGRruySnReUZ90ibyyfyZaRet6j8jDoqzRyb6zQEG3KAXV9Tu8uJAwn7nKdlI64YT42fA2ArNITxuibNceg/640?wx_fmt=png)

  

02秒杀系统设计与实现并发大流量如何进行秒杀架构，本仓库对这部分知识做了一个系统的整理，写了一套系统。本 GitHub 还有许多其他的知识。

学习本系列知识之前，如果你完全没接触过 MQ、SpringBoot、Redis、Dubbo、ZK
、Maven,lua等，那么我建议你可以先在网上搜一下每一块知识的快速入门， 也可以下载本项目边做边学习。

    
    
    地址：https://github.com/qiurunze123/miaosha

03个人独立博客系统Halo 是一款现代化的个人独立博客系统，给习惯写博客的同学多一个选择。

#####  **代码开源**

我们的所有代码开源在 GitHub 上且处于积极维护状态，截止目前已经发布了 59 个版本。您也可以在上面提交您的问题或者参与代码贡献。 **易于部署**  
采用了程序与用户配置分离的方式，迁移和备份成本大大降低。您只需要一条命令即可运行成功，同时也支持 Docker 部署。 **REST API**  
提供了完善的 Content API 和 Admin API，你可以用于开发单页面模板，微信小程序，各种系统的插件等。‍ **模板系统**  
完善的模板系统，支持自定义配置，支持在线安装和更新。开发主题也十分方便，欢迎大家参与主题的开发。 **附件系统**  
支持本地上传，阿里云 OSS/又拍云 OSS/七牛云 OSS/SM.MS 等云存储，你可以更方便的管理你文章中的附件。 **评论系统**  
拥有独立的评论插件，使用 Vue 开发，只需在页面引入构建好的 JS 文件即可，完美地和主题相结合。目前已有多款评论组件，你可以非常方便的切换。

    
    
    地址：https://docs.halo.run/

![图片](https://mmbiz.qpic.cn/mmbiz_png/ePw3ZeGRruySnReUZ90ibyyfyZaRet6j8wGPaTYFfjODkO5MuotUHTNrMAc79F1y4advsuntU9RuiciaSErd1SIOQ/640?wx_fmt=png)![图片](https://mmbiz.qpic.cn/mmbiz_png/ePw3ZeGRruySnReUZ90ibyyfyZaRet6j8oOibkvHOuUEbv01p3zR8RiapZsasQ78uQTkOib7TJscu9FY29dAdgGDWg/640?wx_fmt=png)
**Linux**  

    
    
     $ wget https://dl.halo.run/release/halo-1.4.12.jar  
    $ java -jar halo-1.4.12.jar

 **Windows**  

    
    
     $ wget https://dl.halo.run/release/halo-1.4.12.jar  
    $ java -jar halo-1.4.12.jar

  
04SmartTubeNextSmartTubeNext 是一款适用于 Android 电视和电视盒的高级 YouTube 应用，免费且开源。 特点：无广告
| 赞助商块 | 可调播放速度| 4k 及更高 | 60fps | HDR 。

    
    
    地址：https://github.com/DingMr/SmartTubeNext

  
![图片](https://mmbiz.qpic.cn/mmbiz_png/ePw3ZeGRruySnReUZ90ibyyfyZaRet6j8BTl7QUiciaN2QiayorfY9vYgLjpZr164k9hqeJV5s0p5cPL8vKjTN1RTw/640?wx_fmt=png)05面试指南软件工程技术面试个人指南。  
![图片](https://mmbiz.qpic.cn/mmbiz_png/ePw3ZeGRruySnReUZ90ibyyfyZaRet6j8FMricsxGnMeibqrc6w7Ztx0pAPl5RUNhVLgicHKmbWlNIuMB5UZojafjw/640?wx_fmt=png)

## 在线练习

  * LeetCode

  * Virtual Judge

  * CareerCup

  * HackerRank

  * CodeFights

  * Kattis

  * HackerEarth

  * Codility

  * Code Forces

  * Code Chef

  * Sphere Online Judge - SPOJ

  * InterviewBit

在线面试编程

  * Pramp

  * Gainlo

  * Refdash

  * Interviewing.io

![图片](https://mmbiz.qpic.cn/mmbiz_png/ePw3ZeGRruySnReUZ90ibyyfyZaRet6j8BbJpAn2kP5KKB5JxFmicTyj60e4D0tsbDMkicAjuhfCLROagqpuTorug/640?wx_fmt=png)  
06AutheliaAuthelia 是一个开源身份验证和授权服务器，通过 Web 门户为您的应用程序提供双因素身份验证和单点登录 (SSO)。它充当
nginx、Traefik 或 HAProxy 等反向代理的伴侣，让他们知道是否应该允许或重定向请求到 Authelia 的门户进行身份验证。  

    
    
    地址：https://github.com/authelia/authelia

文档可从 www.authelia.com/docs
获得。下面是一个简单的架构图：![图片](https://mmbiz.qpic.cn/mmbiz_png/ePw3ZeGRruySnReUZ90ibyyfyZaRet6j8ms3ohTg7T1h0KO1Vx5HmvX2I3Nj50vRtpFBYzia8PbdwsGfU4bKsTbA/640?wx_fmt=png)07Appsmithappsmith：一个开放源代码平台，用于构建管理面板，工作流，业务应用程序和任何内部工具。

    
    
    地址：https://github.com/appsmithorg/appsmith

Appsmith 是一个开源前端框架，无需CSS/HTML，用于构建管理面板、CRUD 应用程序和工作流几乎不需要代码。您可以连接到 API 或数据库，例如
MongoDB、PostgreSQL 或 MYSQL，还可以访问图表、小部件和其他用于构建 UI 的自定义工具。  

可视化拖放用户界面使用现成的组件在创纪录的时间内构建工作流。将常见元素（如表格、图表、表单等）直接拖到您的应用中。包括文本、表单、输入、按钮、表格、图像、图表、复选框、开关、单选按钮、日期选择器、下拉菜单、文件选择器、容器、地图、模态、富文本编辑器、标签和视频。快速集成Appsmith
自动使用任何 DB、Rest API 或 GraphQL 作为数据源，并支持 OAuth 2.0 和 CURL。这是我们所有预建集成的列表。目前适用于
PostgreSQL、MongoDB、MySQL、Firestore、S3、Redshift、Elastic Search、DynamoDB、Redis 和
MSFT SQL Server。![图片](data:image/svg+xml,%3C%3Fxml version='1.0'
encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1'
version='1.1' xmlns='http://www.w3.org/2000/svg'
xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg
stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-
opacity='0'%3E%3Cg transform='translate\(-249.000000, -126.000000\)'
fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1'
height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

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

