----------------------------------------
----------------------------------------
#  Github 又火了一个教你做菜的项目！居家必备

原创 小金  [ Github掘金计划 ](javascript:void\(0\);)

**Github掘金计划** ![]()

微信号 GithubStar

功能介绍 用心发掘 Github 和 Gitee 上优质的开源项目。

____

_2022-05-05 12:42_ _发表于 湖北_

收录于合集 #Github掘金计划 81个

大家好，我是小金！

今天给大家分享一个项目「 **🍜 好的，今天我们来做菜！** 」，主要是一个 **做菜小工具** ，可以根据选择的食材、工具快速跳转 B 站做菜视频链接。

目前，这个项目已经在 Github 收获了 1.8k + Star。  

![图片](https://mmbiz.qpic.cn/mmbiz_png/BcyAypujBVakG73HEthibXiaGj0JSrm5XiaNfZ46IkVdbh2fMRvWAoxfoen4G8hKAPNHaDbvnKBxiaxLPzIGAcJDXw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

其初衷是 **方便现在特殊时期隔离在家而材料有限的小伙伴** ，所以严格来讲它的目的也并不是成为一个大而全的菜谱检索应用。

在线效果图如下所示：

![图片](https://mmbiz.qpic.cn/mmbiz_png/BcyAypujBVakG73HEthibXiaGj0JSrm5XiaR6RltPzgFibZmEm3z1D1IIbLhZZSx3bHoX0Mb5ZciblumLRe0uWfDfTg/640?wx_fmt=png)

  

支持夜间模式：  

![图片](https://mmbiz.qpic.cn/mmbiz_png/BcyAypujBVakG73HEthibXiaGj0JSrm5XiaMeHkE5YqlTTPmNzZ7dibyxHh1nicY79kjghlkVCsD2blmyD00USkbIWQ/640?wx_fmt=png)

项目本身也是受一个在线文档的启发，这文档同时还包含一些水培、居家囤货指等。你也可以反馈新的菜谱和相关链接，丰富菜单内容，亦或分享分享自己做的菜。

![图片](https://mmbiz.qpic.cn/mmbiz_png/BcyAypujBVakG73HEthibXiaGj0JSrm5XiavmNia4doVmZ0k09Epfib8Aibib4nvRMd6RBJfwYD0llaE78vKnPx3txOGQ/640?wx_fmt=png)能用自己的知识去帮助他人，我想项目作者应该也是很快乐的吧。

![图片](https://mmbiz.qpic.cn/mmbiz_png/BcyAypujBVakG73HEthibXiaGj0JSrm5XiacnIPsHjmEnqfvGGC0VkPeRpiaqaianPcbgTicndiaHCrE2EQzzQDRyAAhQ/640?wx_fmt=png)

如果你想更加深入了解项目，或贡献自己的一份力量，可以进行开发来学习。

 **开发**

    
    
     # install dependencies  
    pnpm install  
      
    # convert csv to json  
    # automatically executed when postinstall  
    pnpm convert  
      
    # start  
    pnpm dev  
    # http://localhost:3333  
    

你可以选择从 Docker Hub 拉取最新的镜像，或本地自行构建。

 **从 Docker Hub 拉取最新的镜像**

    
    
     # 从 Docker Hub 拉取最新的镜像  
    docker pull yunyoujun/cook:latest  
    # 启动容器，然后打开 http://localhost:3333  
    docker run -it -d --name cook_dev -p 3333:3333 yunyoujun/cook:latest  
      
    

 **自己本地构建**

    
    
     # 本地构建  
    docker build . -t yourname/cook:localdev  
    # 启动容器，然后打开 http://localhost:3333  
    docker run -it -d --name cook_dev -p 3333:3333 yourname/cook:localdev  
    

更多详细信息：

  * 开源链接：https://github.com/YunYouJun/cook

  * 网站链接：https://cook.yunyoujun.cn/

  * 备用：https://cook.yyj.moe/

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

上一篇一个误操作，GitHub上十年攒的54k+Star全没了！下一篇哔哩哔哩开源增强脚本！有点厉害！

