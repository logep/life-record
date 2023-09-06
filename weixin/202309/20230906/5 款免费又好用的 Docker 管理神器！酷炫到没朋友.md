----------------------------------------
----------------------------------------
#  5 款免费又好用的 Docker 管理神器！酷炫到没朋友

[ Github掘金计划 ](javascript:void\(0\);)

**Github掘金计划** ![]()

微信号 GithubStar

功能介绍 用心发掘 Github 和 Gitee 上优质的开源项目。

____

_2021-12-29 11:51_ _发表于_

收录于合集

#docker 1 个

#Github 52 个

#神器工具 48 个

#开源项目 31 个

大家好，我是小金。今天小金来推荐 5 款酷炫到没朋友的 Docker 管理神器，每一款都值得一试！！！  
你是否还在大量控制台窗口中监控容器，还是对使用终端命令充满热情？而使用Docker的图形用户界面（GUI）工具，则可以更简单的对容器进行管理，并提高效率。而且它们都是免费的。  
 **Portainer**  
Portainer是一款Web应用程序基于开源Zlib许可证。支持Linux，Mac OS
X，Windows操作系统。Portainer完全支持以下Docker版本：  
Docker 1.10到最新版本；  
独立的Docker Swarm1.2.3以上版本。需要提醒大家的是，由于Docker引入了内置的Swarm模式，所以不鼓励使用独立的Docker
Swarm。旧版本的Portainer支持独立Docker Swarm，而Portainer
1.17.0和更新版本不支持它。但是完全支持Docker内置的Swarm模式。  
对以下Docker版本的部分支持（某些功能可能不可用）：Docker 1.9。  

![图片](https://mmbiz.qpic.cn/mmbiz_png/A1HKVXsfHNmGOxNaJCziaXgIKicFEicoqBOU5IYm6j6QJiaxbWmqxHwjwSNRjzics9Z9qjfUibuWE9X1w9gPMxJQRnTw/640?wx_fmt=png)

  
你可以测试一个现场演示（admin/tryportainer）。Portainer可以与Docker轻松安装在独立的Linux/Windows服务器/集群上。功能齐全的平台使你可以使用不同的端点。  
可以管理注册表，网络、卷、镜像和容器。还可以保存配置（可以在实时演示中找到alertmanager和Prometheus的示例），并配置Docker
Swarm和堆栈。Portainer可以检查容器是否健康。  
除了需要使用容器的基本操作，例如运行，停止，恢复，终止，删除等之外，还可以检查容器，查看日志，可视化基本统计信息，附加并打开某些容器的控制台。  
另外，你还可以获得基于角色的访问系统，并且可以安装扩展。  
结论：Portainer是强大的GUI工具，可用于具有本地或远程容器，Docker堆栈或Docker
Swarm的团队项目。但是，对于一般需求，Portainer可能并不适合。界面也可能不方便，特别是如果你同时使用多个项目。  
 **DockStation**  
DockStation是一款桌面应用程序；支持Linux、Mac、Windows操作系统。  

![图片](https://mmbiz.qpic.cn/mmbiz_png/A1HKVXsfHNmGOxNaJCziaXgIKicFEicoqBOYD0N6NFGoBaTTRRSBv1DaQnrRbvlpaTmu9HMYtCvqH4gXa25KSO8FA/640?wx_fmt=png)

  
DockStation免费的全功能桌面应用程序，可满足你使用docker和docker-compose。可以通过docker-
compose.yml使用本机Docker Compose
CLI命令帮助生成一个干净的本机文件，甚至在应用程序外部也可以使用。它还可以帮助管理容器和服务，包括远程和本地的容器，并对其进行监控，比如日志监控，搜索日志，分组，运行工具以及获取容器信息。还有其他工具可用于对容器资源进行通用，多个和单个的监控。  
使用DockStation，可以轻松跟踪CPU，内存，网络I/O的使用情况和开放端口。所有工作都可以组织成项目，可以在其中检查每个容器的状态，构建图形化的方案，能够可视化项目中的每个镜像以及它们之间的关系。此外，DockStation在Docker
Hub上十分的受欢迎。  
 **Docker Desktop**  
Docker Desktop是一款桌面应用程序，由于Docker-toolbox（带有Kitematic）已被弃用，建议所有用户在Mac上使用Docker
Desktop，在Windows上使用Docker Desktop。  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/A1HKVXsfHNmGOxNaJCziaXgIKicFEicoqBOSOMEft5TaD46p2ypBrRLj2Ls1W5030Yh90akibP45at8Y7rLECPm0Ew/640?wx_fmt=jpeg)

  
该工具能够为Docker设置资源限制，比如内存，CPU，磁盘镜像大小，文件共享，代理和网络等，配置Docker引擎，命令行和Kubernetes。  
使用仪表板，不仅可以使用基本的容器操作，还可以查看日志，基本统计信息并检查容器。所有这些都可以通过上下文菜单或状态栏中的指示器来调用。  
 **Lazydocker（UI终端）**  
Lazydocker是一款开源的UI终端，支持Linux、OSX、Windows操作系统。要求GO 1.8版本以上，Docker1.13（API
1.25以上）版本，Docker-Compose1.23.2以上版本。  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/A1HKVXsfHNmGOxNaJCziaXgIKicFEicoqBOjFTYLFASj1V4AxL6mBicFQ1pGhEvZznwxE0M8PxDndvnW1sJKPx2xSA/640?wx_fmt=jpeg)

  
Lazydocker可以满足鼠标和键盘的接入。对于某些元素，上下文菜单可用，可以在其中找到所有带有快捷键的常用命令。而且不仅拥有基本的命令来操作容器，基本的统计信息，日志和检查，而且还具有基本功能。还可以使用图形显示主要指标，默认情况下有CPU和内存使用情况和进程。此外，还可以为几乎所有所需的指标进行配置。  
对于选定的镜像，可以查看Dockerfile中运行时执行的命令以及继承的层。除了修改可用命令和添加新命令之外，还提供了对未使用的容器，镜像，卷的清理。  
Lazydocker提供极简的终端界面，对一些不太复杂的项目确实很有帮助。  
 **Docui**  
Docui也是一款UI终端，支持Mac、Linux操作系统。要求GO 1.11.4以上版本，Docker引擎在18.06.1以上，以及Git。  

![图片](https://mmbiz.qpic.cn/mmbiz_png/A1HKVXsfHNmGOxNaJCziaXgIKicFEicoqBOs25Y9CINwqYjKtHJbkC2M7zF55DZh4N2Z08xyuPXSPlVJERVSnrbUw/640?wx_fmt=png)

  
Docui是为了方便创建和配置新的容器/服务，可以在其中找到许多所有必要操作的键绑定。  
可以使用镜像的搜索、保存导入、检查过滤等；容器的创建删除、启动停止、检查和重命名等；卷的创建和删除、检查和过滤，以及网络的删除等功能。  
原文链接：https://www.toutiao.com/i6883341782835266055/  

## 推荐

  * [Github掘金计划](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzIwNDgzMzI3Mg==&action=getalbum&album_id=1571213952619954180#wechat_redirect) ：历史优质原创汇总！用心发掘 Github 和 Gitee 上优质的开源项目。
  * [编程基础](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1632585323454971905&__biz=MzIwNDgzMzI3Mg==#wechat_redirect) ：精选编程基础如学习路线、编程语言相关的开源项目。
  * [计算机基础](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1635325633234780161&__biz=MzIwNDgzMzI3Mg==#wechat_redirect)：精选计算机基础（操作系统、计算机网络、算法、数据结构）相关的开源项目。
  * [技术面试](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1632589980491366403&__biz=MzIwNDgzMzI3Mg==#wechat_redirect) ：精选技术面试相关的开源项目。
  * [项目实战](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1632590550748938241&__biz=MzIwNDgzMzI3Mg==#wechat_redirect) ：精选实战类型的开源项目。
  * [神器工具&网站](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzIwNDgzMzI3Mg==&action=getalbum&album_id=1692140336665378820#wechat_redirect) : 一些好用的插件、软件、网站。

如果你也有好的开源项目推荐的话，欢迎添加我的微信。备注“加群”我拉你进群。

![图片](https://mmbiz.qpic.cn/mmbiz_png/BcyAypujBVZicmqoVNJbBhEKKIGFI8OGS6UoEicMO6j8Vw1v1Ah40Sc1cJgZFAzSMtL1r2iav2eZhNgsGSfJ3NCDg/640?wx_fmt=png)

用心发掘 Github 和 Gitee 上优质的开源项目。

欢迎关注！欢迎点赞分享！

  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/BcyAypujBVZqeicvzhcGl7FLyAw3Xsu2POdZOiaPnQXryMp8gyzkcKF4NGgOydQcCWhicNREhf8fQ1euq2lTzhrtA/640?wx_fmt=jpeg)

预览时标签不可点

