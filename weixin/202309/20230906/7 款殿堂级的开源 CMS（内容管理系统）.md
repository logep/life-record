----------------------------------------
----------------------------------------
#  7 款殿堂级的开源 CMS（内容管理系统）

[ Github掘金计划 ](javascript:void\(0\);)

**Github掘金计划** ![]()

微信号 GithubStar

功能介绍 用心发掘 Github 和 Gitee 上优质的开源项目。

____

_2022-11-17 02:38_ _发表于 湖北_

收录于合集

以下文章来源于HelloGitHub ，作者点击关注→

![](images/0)
**HelloGitHub** .

分享 GitHub 上有趣、入门级的开源项目。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/xBgIbW1vdNMeNJdlBgWnz1CAAFoRxzSiaItGn6bj1iaA6ibibabo9rfZ4CZibg9VUwLnakwgsY5X5aB5P2lx4EJBVmA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

最近，有读者留言让我推荐开源 CMS。我本想直接回复 WordPress，但是转念一想我玩 WordPress 是 2010
年左右的事情了，都过去十年了，它会不会有些过时呢？有没有新的、更好玩的开源 CMS 呢？

开源项目这玩意儿， **一想心就躁，看见手就痒** 。借着这股劲儿，今天我就给大家带来 7 款称得上 **殿堂级的开源 CMS** ，它们中有老当益壮的
WordPress（PHP）、国人开发的 Halo（Java）、玩法丰富的 Ghost（JavaScript）、企业级 CMS 的 Django
CMS（Python）、星数最多的 strapi（JavaScript）等等。

下面，我会根据功能将项目分为： **传统 CMS** 和 **无头 CMS** 两大类进行介绍，然后从 **CMS 概念** 到具体项目的 **安装步骤**
，最后特点会用 **粗体** 醒目的标记出来，就算之前不知道 CMS、不会编程的读者，也可以放心地阅读。相信你看完这篇文章就会知道：什么是
CMS、什么是无头 CMS、它们能用来做什么，甚至可以头头是道地向别人介绍几款，让人眼前一亮的开源 CMS 呢！

闲话少叙，让我们直接开始今天的分享。

## 1\. 传统 CMS

CMS 是内容管理系统的英文简称，它是用来管理和发布包括文章、图片、商品等内容的系统。最常见的 CMS
就是博客系统，作者登录管理后台写文章，点击发布后读者就可以访问指定网址，看到作者发布的内容啦。

不管你是不是程序员，如果你想快速构建一个网站，那么下面这些开源 CMS 一定能助你一臂之力。

## 1.1 halo

![图片](https://mmbiz.qpic.cn/mmbiz_png/xBgIbW1vdNMeNJdlBgWnz1CAAFoRxzSiaXKNhElUibMhh2hxgcaYsMyugTeFWqkV07LD7aeKichKolvyKgNwAV6Ig/640?wx_fmt=png)

 **Star 数** ：24.4k｜ **编程语言** ：Java（99.5%）

一款由国人开发的现代化开源 CMS，采用 Spring Boot+Vue.js 编写而成，代码开源完全免费，截止到本文发表时已经迭代了 80
多个版本。国人开发的好处是 **可轻松接入国内的云存储服务，而且文档、社区和操作界面全部是中文的** 。

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg
width='1px' height='1px' viewBox='0 0 1 1' version='1.1'
xmlns='http://www.w3.org/2000/svg'
xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg
stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-
opacity='0'%3E%3Cg transform='translate\(-249.000000, -126.000000\)'
fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1'
height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

 **安装步骤** ，如下：

    
    
    # 本地有 Java  
    1. 下载最新的 jar 包：https://dl.halo.run/release/halo-1.5.4.jar  
    2. 运行：java -jar halo-1.5.4.jar  
      
    # Docker 运行  
    docker run -it -d --name halo-next -p 8090:8090 -v ~/halo-next:/root/halo-next --restart=unless-stopped halohub/halo-dev:2.0.0-beta.1  
    

> 地址：https://github.com/halo-dev/halo

## 1.2 django-cms

![图片](https://mmbiz.qpic.cn/mmbiz_png/xBgIbW1vdNMeNJdlBgWnz1CAAFoRxzSiae6YsqGzXgHTI7yWa5znLG2ASVRFvNYacwQpGOZribavsogoxThILlTw/640?wx_fmt=png)

 **Star 数** ：9k｜ **编程语言** ：Python（59.7%）

由 **Django 编写的企业级 CMS** ，它功能实用、安全可靠，支持拖拽上传图片、轮播图、Docker 部署等功能，
**可轻松进行二次开发，多用于构建企业官网** ，比如：国家地理等网站就是基于它开发而成。

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg
width='1px' height='1px' viewBox='0 0 1 1' version='1.1'
xmlns='http://www.w3.org/2000/svg'
xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg
stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-
opacity='0'%3E%3Cg transform='translate\(-249.000000, -126.000000\)'
fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1'
height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

 **安装步骤** ，如下：

    
    
    $ git clone git@github.com:django-cms/django-cms-quickstart.git  
    $ cd django-cms-quickstart  
    $ docker compose build web && docker compose up -d database_default  
    $ docker compose run web python manage.py migrate && docker compose run web python manage.py createsuperuser  
    $ docker compose up -d  
    $ open http://127.0.0.1:8000  
    

> 地址：https://github.com/django-cms/django-cms

### 1.3 WordPress

![图片](https://mmbiz.qpic.cn/mmbiz_png/xBgIbW1vdNMeNJdlBgWnz1CAAFoRxzSia2YyPicDsficqPPxr6KRrKaGfpagZz2moYibZwYjoYiaRR399mBOeoR8zEQ/640?wx_fmt=png)

 **Star 数** ：16.8k｜ **编程语言** ：PHP（62.5%）

作为全球最流行的 CMS，它的市场占有率一直处于独占鳌头那一档(64.2%)。我认为这些得益于它：
**傻瓜式的安装方式、丰富的主题和插件、十年如一日的更新迭代** ，以及优秀的商业模式。

有多少人的第一个博客是用它搞起来的？算我一个🙋

![图片](https://mmbiz.qpic.cn/mmbiz_png/xBgIbW1vdNMeNJdlBgWnz1CAAFoRxzSiaI6CxqSugdpFWLicoujGgRiaAgw1wunTnHt7AtRUCQU4mtRPaCicJvGpfw/640?wx_fmt=png)

> 地址：https://github.com/WordPress/WordPress

### 1.4 joomla-cms

![图片](https://mmbiz.qpic.cn/mmbiz_png/xBgIbW1vdNMeNJdlBgWnz1CAAFoRxzSia5dCo7U17pbWI2A0equztYmW7t5WZxF3MaZKicePa5glNZTv27zqeYhA/640?wx_fmt=png)

 **Star 数** ：4.3k｜ **编程语言** ：PHP（92.2%）

它是和 WordPress 同时期开源的 PHP CMS 项目，与 WordPress 不同的是 **Joomla! 更加灵活，但学习曲线也更陡峭**
。它具有较强的通用性，再加上丰富多元的扩展，可用来搭建商业网站、个人博客、信息管理系统、Web 服务等。作为开源至今已有 **18 年历史的 CMS**
，肯定还是有点东西的。

> 地址：https://github.com/joomla/joomla-cms

![图片](https://mmbiz.qpic.cn/mmbiz_png/xBgIbW1vdNMeNJdlBgWnz1CAAFoRxzSiajkzW6GozK9eAXmPsiadHMzkWFSXa9lmjaVB5xKANTMicMxUZbUj8sLTg/640?wx_fmt=png)

这里顺带提一嘴：Drupal 也同样是 PHP 写的以复杂著称的 CMS，如果你需要一个处理大量请求、高度自定义的网站，可以考虑它。

## 2\. 无头 CMS

无头 CMS 就是指：仅包含内容管理的后台，没有现成的前台展示，前台需要自己实现。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/xBgIbW1vdNMeNJdlBgWnz1CAAFoRxzSiaaib9C2bKhw86QtMtrZvNQCrWHSBJsYQnqcXNk5y1pdia1gsAoSticCicng/640?wx_fmt=jpeg)

好处是 **内容和展示完全分离** ，不依赖或不需要特定的前端框架，可以根据自己喜好选择前端框架、接入静态站点生成器或 APP，创建丰富的展示体验。

缺点是 **需要懂技术的开发人员** ，开发周期大概需要一周左右。

### 2.1 wagtail

![图片](https://mmbiz.qpic.cn/mmbiz_png/xBgIbW1vdNMeNJdlBgWnz1CAAFoRxzSiaqhqgZtugSpfY5MytCtI3GfDMILfzpzxMcX0XLAGLL4ozKaouFZ2fKQ/640?wx_fmt=png)

 **Star 数** ：13.4k｜ **编程语言** ：Python（79.3%）

基于 Python 知名 Web 框架 Django 实现的无头内容管理系统，拥有清爽的 UI 和简洁易用的编辑器。 **独特的 StreamField
技术，可以让内容排版灵活又不失结构，再加上强大的多语言系统** ，让它在众多开源 CMS 中脱颖而出。

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg
width='1px' height='1px' viewBox='0 0 1 1' version='1.1'
xmlns='http://www.w3.org/2000/svg'
xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg
stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-
opacity='0'%3E%3Cg transform='translate\(-249.000000, -126.000000\)'
fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1'
height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

 **安装步骤** ，如下：

    
    
    pip install wagtail  
    wagtail start mysite  
    cd mysite  
    pip install -r requirements.txt  
    python manage.py migrate  
    python manage.py createsuperuser  
    python manage.py runserver  
    

> 地址：https://github.com/wagtail/wagtail

### 2.2 ghost

![图片](https://mmbiz.qpic.cn/mmbiz_png/xBgIbW1vdNMeNJdlBgWnz1CAAFoRxzSiaMDtdeia40h2sKI4L3WibWgYM3CIz15eIffYnzLvhDM0omuOfeLgVBthA/640?wx_fmt=png)

 **Star 数** ：41.7k｜ **编程语言** ：JavaScript（79.4%）

一款用 Node.js 编写，功能强大的无头 CMS。它的强大之处在于 **提供了丰富、免费、可自定义的主题** ，用户可以自由搭配轻松建站。
**专业的会员订阅和数据可视化功能** ，让内容创作者可以围绕内容，尝试发展商业化业务。除此之外，它还拥有先进的所见即所得编辑器。

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg
width='1px' height='1px' viewBox='0 0 1 1' version='1.1'
xmlns='http://www.w3.org/2000/svg'
xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg
stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-
opacity='0'%3E%3Cg transform='translate\(-249.000000, -126.000000\)'
fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1'
height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

 **安装步骤** ，如下：

    
    
    npm install ghost-cli -g  
    ghost install local  
    

> 地址：https://github.com/TryGhost/Ghost

### 2.3 strapi

![图片](https://mmbiz.qpic.cn/mmbiz_png/xBgIbW1vdNMeNJdlBgWnz1CAAFoRxzSiaYy9vnrj3hLWf3ccgicqsySzh3dJgVEDFJvSCUq8OSiccUe2nxMIQniaibg/640?wx_fmt=png)

 **Star 数** ：49.5k｜ **编程语言** ：JavaScript（99.6%）

一款完全免费、基于 JavaScript 构建的无头内容管理系统，它拥有 **开箱即用的 API 和友好的管理面板** ，自带权限管理、默认安全、SEO
友好等特点。该项目作为 **GitHub 上 Star 数最多的开源内容管理系统** ，目前已成为多家世界 500 公司的首选 CMS。

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg
width='1px' height='1px' viewBox='0 0 1 1' version='1.1'
xmlns='http://www.w3.org/2000/svg'
xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg
stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-
opacity='0'%3E%3Cg transform='translate\(-249.000000, -126.000000\)'
fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1'
height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

 **安装步骤** ，如下：

    
    
    yarn create strapi-app my-project --quickstart  
    或者  
    npx create-strapi-app my-project --quickstart  
    

> 地址：https://github.com/strapi/strapi

## 3\. 最后

如果，你要挑一个开源 CMS：

  * 不会编程：首选 WordPress 因为它成熟简单，编程相关的东西都被藏在了背后。
  * 会 Python：django-cms 容易接受，wagtail 则更新、势头更猛。
  * 会前端：推荐 strapi 它背后有商业化公司支持，吃透了可以谋个远程全职。
  * 不会前端，但懂后端：推荐 Ghost，它玩法多、社区活跃、有免费主题。

  

## 推荐

用心发掘优质开源项目，欢迎关注，欢迎点赞分享！

历史优质开源项目推荐地址：[Github
掘金计划](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzIwNDgzMzI3Mg==&action=getalbum&album_id=1571213952619954180#wechat_redirect)。

  * [计算机基础](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1635325633234780161&__biz=MzIwNDgzMzI3Mg==#wechat_redirect)：精选计算机基础（操作系统、计算机网络、算法、数据结构）相关的开源项目。

  * [神器工具](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzIwNDgzMzI3Mg==&action=getalbum&album_id=1692140336665378820#wechat_redirect) : 一些好用的插件、软件、网站。

  * [程序人生](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzIwNDgzMzI3Mg==&action=getalbum&album_id=2084343476975878144#wechat_redirect)：编程经历、英语学习、延寿指南。

  * [项目实战](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1632590550748938241&__biz=MzIwNDgzMzI3Mg==#wechat_redirect) ：精选实战类型的开源项目。

 ** ** ** ** ************

预览时标签不可点

