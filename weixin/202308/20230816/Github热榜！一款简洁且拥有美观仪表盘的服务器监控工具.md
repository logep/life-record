----------------------------------------
----------------------------------------
#  Github热榜！一款简洁且拥有美观仪表盘的服务器监控工具

原创 小金  [ Github掘金计划 ](javascript:void\(0\);)

**Github掘金计划** ![]()

微信号 GithubStar

功能介绍 用心发掘 Github 和 Gitee 上优质的开源项目。

____

_2021-10-14 13:29_ _发表于_

收录于合集

#程序员 43 个

#开源项目 31 个

#Github 52 个

#神器工具 48 个

#Github掘金计划 81 个

当我们把一个开发好的服务部署到服务器的时候，最常关注就是服务器的性能，一个程序的好坏与运行时的性能息息相关。那么最为直观的就是查看服务器在运行服务的时候各项指标，如处理器利用百分比、内存占用量、磁盘利用率等等。

当然我们最先想到的是用命令行直接查看，确实够快捷，但是如果现在告诉大家有一款简洁美观仪表盘的服务器监控工具，肯定会不约而同的放下手中的键盘，让这美观的画面代替复杂的指令，也是一件非常浪漫的事，今天要给大家介绍服务器监控工具叫做
Ward。

Ward 在 GitHub 上面已经有高达 1.4K+的 Star，热度持续上涨中。

  * •项目地址：⇲https://github.com/B-Software/Ward

  * •项目官网：⇲http://b-server.org/

![图片](https://mmbiz.qpic.cn/mmbiz_png/BcyAypujBVYsnNWIMR0ylKIjZKeQOAIUe9KXsNciaJiaoO02l8iapuqIk9WqGJ8Wsllh0oE43z07Zic2ia8iaeKpB4Sw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

## #简介

Ward 是一个简单而简约的服务器监控工具。Ward
支持自适应设计系统。它还支持深色主题。它只显示主要信息并且可以使用，如果你想看到漂亮的仪表板而不是查看一堆数字和图表。Ward 使用 OSHI，能够在
Windows、Linux 以及其他流行的操作系统上运行良好。

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg
width='1px' height='1px' viewBox='0 0 1 1' version='1.1'
xmlns='http://www.w3.org/2000/svg'
xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg
stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-
opacity='0'%3E%3Cg transform='translate\(-249.000000, -126.000000\)'
fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1'
height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

## #快速安装

Ward 是使用 Java 编写的项目，可以很方便的进行打包和运行，安装步骤如下：

  1. 从 GitHub 上面下载源码包

  2. 进入到项目的根目录，使用如下命令进行打包
    
        mvn clean package  
    

  3. 从项目的 target 目录获取打包好的 jar 包，使用如下命令运行
    
        java -jar ward-1.8.8.jar  
    

该项目还可以打包成 docker 镜像，对 docker 比较熟悉的小伙伴还可以使用如下命令打包运行：

    
    
    docker build --tag ward  
    docker run --rm -it --name ward -p 4000:4000 -p <application port>:<application port> --privileged ward  
    

## #界面展示

### #后台

运行服务后进入到对应 IP，默认端口号为 4000 的地址，首页需要配置仪表盘名称和监听的端口号，另外界面可以选择白色和深色主题。

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg
width='1px' height='1px' viewBox='0 0 1 1' version='1.1'
xmlns='http://www.w3.org/2000/svg'
xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg
stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-
opacity='0'%3E%3Cg transform='translate\(-249.000000, -126.000000\)'
fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1'
height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

进入到后台页面后可以看到简洁美观的页面呈现在眼前，组件非常的丰富实用。

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg
width='1px' height='1px' viewBox='0 0 1 1' version='1.1'
xmlns='http://www.w3.org/2000/svg'
xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg
stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-
opacity='0'%3E%3Cg transform='translate\(-249.000000, -126.000000\)'
fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1'
height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

### #仪表盘

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg
width='1px' height='1px' viewBox='0 0 1 1' version='1.1'
xmlns='http://www.w3.org/2000/svg'
xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg
stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-
opacity='0'%3E%3Cg transform='translate\(-249.000000, -126.000000\)'
fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1'
height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

  * •处理器名称

  * •处理器利用率百分比

  * •处理器内核数（逻辑和物理内核）

  * •处理器的当前频率

  * •处理器是否支持 64 位指令

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg
width='1px' height='1px' viewBox='0 0 1 1' version='1.1'
xmlns='http://www.w3.org/2000/svg'
xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg
stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-
opacity='0'%3E%3Cg transform='translate\(-249.000000, -126.000000\)'
fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1'
height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

  * •操作系统类型及其版本

  * •RAM 利用率百分比

  * •已安装的 RAM 总量

  * •生成已安装的 RAM（如果您有 dmidecode）

  * •当前进程数

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg
width='1px' height='1px' viewBox='0 0 1 1' version='1.1'
xmlns='http://www.w3.org/2000/svg'
xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg
stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-
opacity='0'%3E%3Cg transform='translate\(-249.000000, -126.000000\)'
fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1'
height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

  * •存储名称

  * •存储利用率百分比

  * •当前安装的总存储空间（包括外部驱动器）

  * •安装的磁盘数

  * •虚拟内存总量（Linux 中的交换）

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg
width='1px' height='1px' viewBox='0 0 1 1' version='1.1'
xmlns='http://www.w3.org/2000/svg'
xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg
stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-
opacity='0'%3E%3Cg transform='translate\(-249.000000, -126.000000\)'
fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1'
height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

此块包含正常运行时间和图表部分。正常运行时间表示自上次在 Linux 上启动以来的时间，以及在 Windows
上硬重置之间的时间。它还有分页器，可用于获取作者联系人。图表部分显示最近十五秒的服务器利用率。（处理器、内存、存储）您可以通过单击图表部分右上角的矩形来隐藏分离的数据集。

 **这么小而美的监控工具真是让我解放了双手，还等什么，赶紧用起来！**

##  推荐

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

收录于合集 #程序员

43个

上一篇我在南大的七年下一篇一款开箱即用的国产开源协同办公开发项目！支持钉钉和企业微信集成

