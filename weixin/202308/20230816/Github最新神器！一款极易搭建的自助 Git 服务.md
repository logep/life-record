----------------------------------------
----------------------------------------
#  Github最新神器！一款极易搭建的自助 Git 服务

原创 小金  [ Github掘金计划 ](javascript:void\(0\);)

**Github掘金计划** ![]()

微信号 GithubStar

功能介绍 用心发掘 Github 和 Gitee 上优质的开源项目。

____

_2021-10-29 12:05_ _发表于_

收录于合集

#Github 52 个

#Github掘金计划 81 个

#git 5 个

#开源项目 31 个

#神器工具 48 个

大家好，我是小金！  

有时候我们需要在内网环境创建一个 Git 服务，方便保存代码和部署应用。一开始想到的也许是
gitlab，确实功能强大，但是有很多功能又用不到，白白浪费资源。后来找到一个更轻量级易部署的开源项目 gitea，不仅功能适用还支持跨平台。

gitea 的社区非常活跃，目前 GitHub 上已经 26.6K+的 star，热度持续上涨中。

![图片](https://mmbiz.qpic.cn/mmbiz_png/BcyAypujBVZ3VSwx6Y8d7ia4erDBQrnlmIfrcWbibajxe7FHArics4gYSaykubicj5INRgnOBbfcW4SFKlau1uniaog/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  * GitHub 地址：https://github.com/go-gitea/gitea
  * 官方文档：https://docs.gitea.io

## 简介

Gitea 是一个自己托管的 Git 服务程序。他和 GitHub, Bitbucket or Gitlab 等比较类似。他是从 Gogs 发展而来，已经
Fork 并且命名为 Gitea。Gitea 的首要目标是创建一个极易安装，运行非常快速，安装和使用体验良好的自建 Git 服务。采用 Go
作为后端语言，这使得只要生成一个可执行程序即可。并且它还支持跨平台，支持 Linux, macOS 和 Windows 以及各种架构，除了
x86，amd64，还包括 ARM 和 PowerPC。

## 功能特性

  * 支持活动时间线
  * 支持 SSH 以及 HTTP/HTTPS 协议
  * 支持 SMTP、LDAP 和反向代理的用户认证
  * 支持反向代理子路径
  * 支持用户、组织和仓库管理系统
  * 支持添加和删除仓库协作者
  * 支持仓库和组织级别 Web 钩子（包括 Slack 集成）
  * 支持仓库 Git 钩子和部署密钥
  * 支持仓库工单（Issue）、合并请求（Pull Request）以及 Wiki
  * 支持迁移和镜像仓库以及它的 Wiki
  * 支持在线编辑仓库文件和 Wiki
  * 支持自定义源的 Gravatar 和 Federated Avatar
  * 支持邮件服务
  * 支持后台管理面板
  * 支持 MySQL、PostgreSQL、SQLite3, MSSQL 和 TiDB（实验性支持） 数据库
  * 支持多语言本地化（21 种语言）

## 快速体验

### 快速安装

#### Linux

目前还没有对应的 Linux 安装包发布，当前可以查看从二进制安装。

所有下载均包括 SQLite, MySQL 和 PostgreSQL
的支持，同时所有资源均已嵌入到可执行程序中，这一点和老版本有所不同。基于二进制的安装非常简单，只要从下载页面（地址：https://dl.gitea.io/gitea）选择对应平台，拷贝下载URL，执行以下命令即可（以Linux为例）：

    
    
    wget -O gitea https://dl.gitea.io/gitea/1.15.4/gitea-1.15.4-linux-amd64  
    chmod +x gitea  
    

在执行了以上步骤之后，你将会获得 `gitea` 的二进制文件，在你复制到部署的机器之前可以先测试一下。在命令行执行完后，你可以 `Ctrl + C`
关掉程序。

    
    
    ./gitea web  
    

#### Windows

下载相应的 exe 文件安装包，采用安装包的方式进行安装，可以在如下地址找到安装包：

    
    
    https://dl.gitea.io/gitea  
    

#### macOS

macOS 平台下当前我们仅支持通过 `brew` 来安装。你可以执行以下命令：

    
    
    brew tap go-gitea/gitea  
    brew install gitea  
    

### 配置数据库

gitea 首次启动时需要配置数据库，它支持 MySQL、PostgreSQL、MSSQL 或 SQLite3
等多种数据库。启动后访问http://127.0.0.1:3000即可看到如下配置页面。

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg
width='1px' height='1px' viewBox='0 0 1 1' version='1.1'
xmlns='http://www.w3.org/2000/svg'
xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg
stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-
opacity='0'%3E%3Cg transform='translate\(-249.000000, -126.000000\)'
fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1'
height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

### 注册登录

配置完成后，进入到首页,点击右上角进行注册登录。

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg
width='1px' height='1px' viewBox='0 0 1 1' version='1.1'
xmlns='http://www.w3.org/2000/svg'
xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg
stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-
opacity='0'%3E%3Cg transform='translate\(-249.000000, -126.000000\)'
fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1'
height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)![图片](data:image/svg+xml,%3C%3Fxml
version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0
0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg'
xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg
stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-
opacity='0'%3E%3Cg transform='translate\(-249.000000, -126.000000\)'
fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1'
height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

### 创建项目

根据对应输入框创建完账户后进入到后台页面，首先需要创建一个仓库。

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg
width='1px' height='1px' viewBox='0 0 1 1' version='1.1'
xmlns='http://www.w3.org/2000/svg'
xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg
stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-
opacity='0'%3E%3Cg transform='translate\(-249.000000, -126.000000\)'
fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1'
height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)![图片](data:image/svg+xml,%3C%3Fxml
version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0
0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg'
xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg
stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-
opacity='0'%3E%3Cg transform='translate\(-249.000000, -126.000000\)'
fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1'
height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

### 项目操作

创建完成后的界面我们应该很熟悉了，这里需要配置 ssh 进行拉取和提交。

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg
width='1px' height='1px' viewBox='0 0 1 1' version='1.1'
xmlns='http://www.w3.org/2000/svg'
xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg
stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-
opacity='0'%3E%3Cg transform='translate\(-249.000000, -126.000000\)'
fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1'
height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

还可以进行 PR 请求，查看版本发布以及动态等。

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg
width='1px' height='1px' viewBox='0 0 1 1' version='1.1'
xmlns='http://www.w3.org/2000/svg'
xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg
stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-
opacity='0'%3E%3Cg transform='translate\(-249.000000, -126.000000\)'
fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1'
height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)![图片](data:image/svg+xml,%3C%3Fxml
version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0
0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg'
xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg
stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-
opacity='0'%3E%3Cg transform='translate\(-249.000000, -126.000000\)'
fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1'
height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

正如 Gitea 的标语一样，只需一杯茶的功夫就可以搭建 Git 服务，如此简易实用，还等什么，赶紧用起来吧！

## 推荐

  * [Github掘金计划](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzIwNDgzMzI3Mg==&action=getalbum&album_id=1571213952619954180#wechat_redirect) ：历史优质原创汇总！用心发掘 Github 和 Gitee 上优质的开源项目。
  * [编程基础](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1632585323454971905&__biz=MzIwNDgzMzI3Mg==#wechat_redirect) ：精选编程基础如学习路线、编程语言相关的开源项目。
  * [计算机基础](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1635325633234780161&__biz=MzIwNDgzMzI3Mg==#wechat_redirect)：精选计算机基础（操作系统、计算机网络、算法、数据结构）相关的开源项目。
  * [技术面试](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1632589980491366403&__biz=MzIwNDgzMzI3Mg==#wechat_redirect) ：精选技术面试相关的开源项目。
  * [项目实战](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1632590550748938241&__biz=MzIwNDgzMzI3Mg==#wechat_redirect) ：精选实战类型的开源项目。
  * [神器工具&网站](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzIwNDgzMzI3Mg==&action=getalbum&album_id=1692140336665378820#wechat_redirect) : 一些好用的插件、软件、网站。

欢迎添加我的好友，向我推荐项目![图片](data:image/svg+xml,%3C%3Fxml version='1.0'
encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1'
version='1.1' xmlns='http://www.w3.org/2000/svg'
xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg
stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-
opacity='0'%3E%3Cg transform='translate\(-249.000000, -126.000000\)'
fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1'
height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/BcyAypujBVZ3VSwx6Y8d7ia4erDBQrnlmShNsYZtv0ODicRXAsibNRicUQt3m4kzxortvUQQKZfl6n1IicmhvZ9n1Aw/640?wx_fmt=jpeg)

Github掘金计划由3位Github爱好者维护  

用心发掘 Github 和 Gitee 上优质的开源项目。

后台回复 **「PDF」** 获取 计算机必读书籍

欢迎关注 **「Github掘金计划」**

  

预览时标签不可点

收录于合集 #Github

52个

上一篇又一款Github开源神器！酷炫的命令行资源监视器下一篇Gitee GVIP 顶级项目！一款开箱即用的国产开源协同办公系统

