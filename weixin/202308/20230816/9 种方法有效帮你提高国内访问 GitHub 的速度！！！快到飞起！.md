----------------------------------------
----------------------------------------
#  9 种方法有效帮你提高国内访问 GitHub 的速度！！！快到飞起！

小金  [ Github掘金计划 ](javascript:void\(0\);)

**Github掘金计划** ![]()

微信号 GithubStar

功能介绍 用心发掘 Github 和 Gitee 上优质的开源项目。

____

_2022-02-16 00:13_ _发表于_

收录于合集 #Github掘金计划 81个

![图片](https://mmbiz.qpic.cn/mmbiz_png/nDMNE6lrvW4libMefotSbOWecVUbpoT1a5zmwPSc7U9xBfjungT2ZNgK3Zapx4pzQ8MtAYER7DR7aodUjFdWmkA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

有很多读者抱怨访问 Github 速度太慢，这里推荐 9 种提高国内访问 GitHub 速度的方法！

  1. GitHub 镜像访问

  2. GitHub文件加速

  3. Github 加速下载

  4. 加速你的 Github

  5. 谷歌浏览器GitHub加速插件(推荐)

  6. GitHub raw 加速

  7. GitHub + Jsdelivr

  8. 通过Gitee中转fork仓库下载

  9. 通过修改HOSTS文件进行加速

    * 为什么github下载速度这么慢？

    * 如何提高github的下载速度？

## 1\. GitHub 镜像访问

这里提供两个最常用的镜像地址：

  * https://github.com.cnpmjs.org
  * https://hub.fastgit.org

也就是说上面的镜像就是一个克隆版的 GitHub，你可以访问上面的镜像网站，网站的内容跟 GitHub
是完整同步的镜像，然后在这个网站里面进行下载克隆等操作。

## 2\. GitHub 文件加速

利用 Cloudflare Workers 对 github release 、archive 以及项目文件进行加速，部署无需服务器且自带CDN.

  * https://gh.api.99988866.xyz
  * https://g.ioiox.com

以上网站为演示站点，如无法打开可以查看开源项目：gh-proxy-GitHub(https://hunsh.net/archives/23/)
文件加速自行部署。

## 3\. Github 加速下载

只需要复制当前 GitHub 地址粘贴到输入框中就可以代理加速下载！

地址：http://toolwa.com/github/

![图片](https://mmbiz.qpic.cn/mmbiz_png/GvtDGKK4uYmeqBccLr115S050lmxWjKicVWR02BChxpQGk0iba0gaNCicFugwVPkkfpQJ6q8zKXq4zFMZ0QCCjtibg/640?wx_fmt=png)

## 4\. 加速你的 Github

https://github.zhlh6.cn

输入 Github 仓库地址，使用生成的地址进行 git ssh 等操作

## 5\. 谷歌浏览器 GitHub 加速插件(推荐)

![图片](https://mmbiz.qpic.cn/mmbiz_png/GvtDGKK4uYmeqBccLr115S050lmxWjKicPLvib9PT9IBqgibZ7K5NU76sLHawg7icAXG4tL7Y6tnxr0tNDRL3DxNuQ/640?wx_fmt=png)

如果小伙伴在线安装不便，可以在公众号后台回复 `github加速`。

![图片](https://mmbiz.qpic.cn/mmbiz_png/GvtDGKK4uYmeqBccLr115S050lmxWjKicEvDG1OiaicqMWf7zleEye7XhzsLMYhb2gNLqSzxhxfoImOZAdqKWibFbQ/640?wx_fmt=png)

## 6\. GitHub raw 加速

GitHub raw 域名并非 github.com 而是 raw.githubusercontent.com，上方的 GitHub
加速如果不能加速这个域名，那么可以使用 Static CDN 提供的反代服务。

将 raw.githubusercontent.com 替换为 raw.staticdn.net 即可加速。

## 7\. GitHub + Jsdelivr

jsdelivr 唯一美中不足的就是它不能获取 exe 文件以及 Release 处附加的 exe 和 dmg 文件。

也就是说如果 exe 文件是附加在 Release 处但是没有在 code 里面的话是无法获取的。所以只能当作静态文件 cdn 用途，而不能作为
Release 加速下载的用途。

## 8\. 通过 Gitee 中转 fork 仓库下载

网上有很多相关的教程，这里简要的说明下操作。

访问 gitee 网站：https://gitee.com/ 并登录，在顶部选择“从 GitHub/GitLab 导入仓库” 如下：

![图片](https://mmbiz.qpic.cn/mmbiz_png/GvtDGKK4uYmeqBccLr115S050lmxWjKicYOKM3oFIz8jHcLyjrZia6HfCLByttsZoTGXECpnjgPkV59lRja3PG5w/640?wx_fmt=png)

在导入页面中粘贴你的Github仓库地址，点击导入即可：

![图片](https://mmbiz.qpic.cn/mmbiz_png/GvtDGKK4uYmeqBccLr115S050lmxWjKicq0ib67TiaNibyltyACtyDMofPLdbPwJGSncXnAfckhyO53z3LYMSo3vNA/640?wx_fmt=png)

等待导入操作完成，然后在导入的仓库中下载浏览对应的该 GitHub 仓库代码，你也可以点击仓库顶部的“刷新”按钮进行 Github 代码仓库的同步。

![图片](https://mmbiz.qpic.cn/mmbiz_png/GvtDGKK4uYmeqBccLr115S050lmxWjKicKKCk3r8lfCYciaRAcYqLYLBM3akDh3ZeVrBqUib8mlhofgzErY6DWwlQ/640?wx_fmt=png)

## 9\. 通过修改 HOSTS 文件进行加速

手动把cdn和ip地址绑定。

第一步：获取 github 的 global.ssl.fastly 地址
访问：http://github.global.ssl.fastly.net.ipaddress.com/#ipinfo 获取cdn和ip域名：

![图片](https://mmbiz.qpic.cn/mmbiz_png/GvtDGKK4uYmeqBccLr115S050lmxWjKicYdJmlF2SdWae3o9XHa2TX2zAZkicJWaTLWcSwQtj99WrGwOHxNwSibgQ/640?wx_fmt=png)

得到：199.232.69.194 https://github.global.ssl.fastly.net

第二步：获取github.com地址

访问：https://github.com.ipaddress.com/#ipinfo 获取cdn和ip：

![图片](https://mmbiz.qpic.cn/mmbiz_png/GvtDGKK4uYmeqBccLr115S050lmxWjKicnJyVGd3CaPxytiaB5AjvDschf0sJ3KhJibenSTR4cqPMgzicNRFCMJAdw/640?wx_fmt=png)

得到：140.82.114.4 http://github.com

第三步：修改 host 文件映射上面查找到的 IP

windows系统：

1、修改C:\Windows\System32\drivers\etc\hosts文件的权限，指定可写入：右击->hosts->属性->安全->编辑->点击Users->在Users的权限“写入”后面打勾。如下：

![图片](https://mmbiz.qpic.cn/mmbiz_png/GvtDGKK4uYmeqBccLr115S050lmxWjKic9EyIahTVZxQGL4BGYJ0kRibO9HutTAA7DFRmOZI9HINiaZS13SNMPa3Q/640?wx_fmt=png)

然后点击确定。

2、右击->hosts->打开方式->选定记本（或者你喜欢的编辑器）->在末尾处添加以下内容：

    
    
    199.232.69.194 github.global.ssl.fastly.net  
      
    140.82.114.4 github.com

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

收录于合集 #Github掘金计划

81个

上一篇个人开发者的福音！免费 API 资源开源！真滴哇塞！！！下一篇重磅！腾讯又一款神器开源！动画制作的瑞士军刀！！！

