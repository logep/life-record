----------------------------------------
----------------------------------------
#  微软发布 VS Code Server！用平板也能远程开发

洛逸  [ Github掘金计划 ](javascript:void\(0\);)

**Github掘金计划** ![]()

微信号 GithubStar

功能介绍 用心发掘 Github 和 Gitee 上优质的开源项目。

____

_2022-07-15 01:49_ _发表于 湖北_

收录于合集

![图片](https://mmbiz.qpic.cn/mmbiz_png/X1wOHbVRDnxEiaGia8FiaONVaPtRcLibd8ibRFqQ5sVC54thKpfIwhKHzibibEQDBicpZ7dG2rhzVw7ZODvA1t2nICTcKg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  

在2019年，微软曾发布了远程开发扩展，允许用户通过本地VS
Code在Win10及以上系统的Linux子系统、Docker容器、SSH管理的远程物理或虚拟机上远程开发应用。

  

近日，微软在此基础上，推出了一项新的后端服务Visual Studio Code Server，以及一个可以轻松安装、更新、管理和连接到服务的CLI。

  

根据微软介绍，通过Visual Studio Code Server，用户能够将服务器安装在本地或云端的任何位置，并使用VS Code for
Web在浏览器中远程安全访问，且无需设置任何SSH或https。

  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/X1wOHbVRDnxEiaGia8FiaONVaPtRcLibd8ibRKhUjsA1SC1SXfjwHnsbLXTTEibHY2OnSNasVBXwpDtXCWXpr4hX0ULw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)  

对于开发者来说，这意味着在完成最初的配置工作后，理论上就能够在任何位置，任何性能的电脑中，通过浏览器完成对项目的开发与修改，大大提升了工作的便捷性。

  

VS Code Server 的 CLI 在 VS Code 客户端 (vscode.dev)
和远程计算机之间建立隧道（Tunneling），将数据从一个网络安全地传输到另一个网络。

![图片](https://mmbiz.qpic.cn/mmbiz_png/X1wOHbVRDnxEiaGia8FiaONVaPtRcLibd8ibRMnsqdibvozU8EDnGHkgfwBVkaBz1nT2mxOs2Z8hC5UlMEuHTHt6icVcg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)  
  

VS Code Server 体验版包括几个主要组件：

  * VS Code 服务器：运行在远程机器上的后端服务器，以及一个便于安装、更新、管理和连接到服务器的 CLI。

  * Remote-Server 扩展：该扩展会自动加载到本地的 VS Code 客户端，以方便连接到远程机器。

目前，Visual Studio Code
Server处在私人预览阶段，想要尝鲜的用户需要填写一份注册表单来进行申请，如果通过申请，将在数周内收到反馈邮件。

  

 **使用方法如下：**

  

1、将 VS Code Server 安装在远程机器上，在终端中运行以下命令：

  * 

    
    
    wget -O- https://aka.ms/install-vscode-server/setup.sh | sh

2、通过在终端中运行以下命令来启动 VS Code Server：  

  * 

    
    
    code-server

3、用户的远程机器将通过安全隧道与 vscode.dev 通信，无论在哪个网络上，都允许用户从 vscode.dev 连接到计算机。用户将获得一个设备代码和
URL，并验证 GitHub 帐户。  

  * 

    
    
    Please enter the code 7644-1186 on https://github.com/login/device

4、如果是第一次启动 VS Code Server，系统将提示用户输入连接名称。  

  * 

    
    
     What would you like to call this machine? (elegant-pitta)

5、在验证并提供机器名称后，CLI 会启动服务器实例并生成 vscode.dev URL。

  

接着，用户就可以在任意设备上打开此 URL 来写代码了。

 **推荐**

>   * [Github
> 掘金计划](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzIwNDgzMzI3Mg==&action=getalbum&album_id=1571213952619954180#wechat_redirect)
> ：历史优质原创文章汇总！
>
>   *
> [程序人生](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzIwNDgzMzI3Mg==&action=getalbum&album_id=2084343476975878144#wechat_redirect)：编程经历、英语学习、延寿指南。
>
>   *
> [神器工具](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzIwNDgzMzI3Mg==&action=getalbum&album_id=1692140336665378820#wechat_redirect)
> : 一些好用的插件、软件、网站。
>
>   *
> [编程基础](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1632585323454971905&__biz=MzIwNDgzMzI3Mg==#wechat_redirect)
> ：精选编程基础如学习路线、编程语言相关的开源项目。
>
>   *
> [计算机基础](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1635325633234780161&__biz=MzIwNDgzMzI3Mg==#wechat_redirect)：精选计算机基础（操作系统、计算机网络、算法、数据结构）相关的开源项目。
>
>   *
> [技术面试](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1632589980491366403&__biz=MzIwNDgzMzI3Mg==#wechat_redirect)
> ：精选技术面试相关的开源项目。
>
>   *
> [项目实战](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1632590550748938241&__biz=MzIwNDgzMzI3Mg==#wechat_redirect)
> ：精选实战类型的开源项目。
>
>

用心发掘 Github 和 Gitee 上优质的开源项目。

欢迎关注！欢迎点赞分享！

预览时标签不可点

