----------------------------------------
----------------------------------------
#  装X神器！NuShell

[ Github掘金计划 ](javascript:void\(0\);)

**Github掘金计划** ![]()

微信号 GithubStar

功能介绍 用心发掘 Github 和 Gitee 上优质的开源项目。

____

_2021-07-14 00:15_ _发表于_

收录于合集 #神器工具 48个

![图片](https://mmbiz.qpic.cn/mmbiz/QFzRdz9libEZpXa1FichsX7F2XqpIa6Er69PA7lb8coNcteem7VDiaOEntO5Kib5hbPXoZB4ZuJh5dnerH20VIWh2w/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)  

  
今天我要给大家介绍一个生产力工具(装逼神器)Shell，它叫Nushell，它是用Rust写的，安全性提高的同时，Bug率也降低了，NuShell
专注于实现以下目标：

  * 创建具有现代感的灵活的跨平台Shell
  * 允许你将命令行应用程序与可理解数据结构的Shell进行混合和匹配
  * 具有现代命令行应用程序提供的用户体验优化

  

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg
width='1px' height='1px' viewBox='0 0 1 1' version='1.1'
xmlns='http://www.w3.org/2000/svg'
xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg
stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-
opacity='0'%3E%3Cg transform='translate\(-249.000000, -126.000000\)'
fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1'
height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

  

目前，NuShell 已经在Github上标星13.9K，累计分支631（详情：https://github.com/nushell/nushell）

  

在 Linux / macOS 系统上运行 NuShell 的最简单快捷的方法是从crates.io安装 ，或从我们的Github
发布页面下载预构建的二进制文件 。

  

对于任何 Linux 发行版来说，最理想的安装方法是二进制方法。我们将使用 curl 工具获取最新版本，下载然后解压缩文件以获得 Nushell
二进制文件。

  

  

 **第 1 步：安装开发人员工具**

  

 **Ubuntu / Debian：**

  

    
    
    sudo apt update  
    sudo apt install pkg-config libssl-dev -y  
    sudo apt install libxcb-composite0-dev libx11-dev -y  
    

  

 **基于 RHEL 的系统：**

  

    
    
     sudo yum install libxcb openssl-devel libX11-devel -y  
    

  

 **苹果系统：**

  

    
    
     brew install openssl cmake  
    

  

  

 **第 2 步：在 Linux 上安装 Nushell**

  

 **下载最新的二进制归档文件：**

  

    
    
    cd /tmp  
    curl -s  https://api.github.com/repos/nushell/nushell/releases/latest | grep browser_download_url |  cut -d '"' -f 4 | grep '\linux.tar.gz' | wget -i -  
    

  

 **解压下载的文件：**

  

    
    
     tar -xvf nu_*_linux.tar.gz  
    

  

 **将二进制文件复制到您的 PATH：**

  

    
    
    sudo mv nu_*_linux/nushell-*/nu /usr/local/bin  
    

  

Nushell将在启动时在您的
PATH中查找插件。虽然Nushell在没有它们的情况下会有一些功能，但要获得完整的功能，你需要将它们复制到您的路径中，以便加载它们。

  

    
    
    sudo mv nu_*_linux/nushell-*/nu_plugin* /usr/local/bin  
    

  

Fedora 用户可以使用COPR repo安装Nushell：

  

    
    
    sudo dnf copr enable atim/nushell -y && sudo dnf install nushell -y  
    

  

  

 **第 3 步：在 macOS 上安装 Nushell**

  

 **对于二进制安装方法，请使用 brew：**

  

    
    
    $ brew install nushell  
    

  

 **从二进制文件手动安装**

  

在 macOS 系统上运行以下命令来下载 Nushell 的最新版本：

  

    
    
    cd /tmp  
    curl -s  https://api.github.com/repos/nushell/nushell/releases/latest | grep browser_download_url |  cut -d '"' -f 4 | grep '\macOS.zip' | wget -i -  
    

  

 **解压下载的文件：**

  

    
    
     unzip nu_*_macOS.zip  
    

  

 **将nu二进制文件复制到你的PATH：**

  

    
    
    sudo mv nu_*_macOS/nushell-*/nu /usr/local/bin  
    

  

 **复制Nu插件：**

  

    
    
    sudo mv nu_*_macOS/nushell-*/nu_plugin* /usr/local/bin  
    

  

  

 **第 4 步：将用户 Shell 设置为 Nushell**

  

 **创建一个名为techviewleo的新用户：**

  

    
    
    $ sudo adduser techviewleo  
    Adding user `techviewleo' ...  
    Adding new group `techviewleo' (1000) ...  
    Adding new user `techviewleo' (1000) with group `techviewleo' ...  
    Creating home directory `/home/techviewleo' ...  
    Copying files from `/etc/skel' ...  
    New password:  
    Retype new password:  
    passwd: password updated successfully  
    Changing the user information for techviewleo  
    Enter the new value, or press ENTER for the default  
        Full Name []:  
        Room Number []:  
        Work Phone []:  
        Home Phone []:  
        Other []:  
    Is the information correct? [Y/n] y  
    

  

 **将用户默认 shell 设置为 Nu：**

  

    
    
    sudo chsh -s /usr/local/bin/nu techviewleo  
    

  

 **切换到创建的用户帐户：**

  

    
    
    $ su - techviewleo  
    Password:  
    Welcome to Nushell 0.28.0 (type 'help' for more info)  
    /home/techviewleo>  
    

  

 **测试 ls 命令在 Nushell 中的工作方式：**

  

    
    
    $ su - techviewleo  
    Password:  
    Welcome to Nushell 0.28.0 (type 'help' for more info)  
    /home/techviewleo>  
    

  

 **运行效果展示：**

  

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg
width='1px' height='1px' viewBox='0 0 1 1' version='1.1'
xmlns='http://www.w3.org/2000/svg'
xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg
stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-
opacity='0'%3E%3Cg transform='translate\(-249.000000, -126.000000\)'
fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1'
height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

  

最后附上nushell地址：https://github.com/nushell/nushell

  

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

收录于合集 #神器工具

48个

上一篇Github热榜！这个项目让搜索小姐姐变得更方便了！下一篇一款开源免费的网站监控系统！

