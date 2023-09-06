----------------------------------------
----------------------------------------
#  超越 Photoshop，AI一键去纹身！

原创 小金  [ Github掘金计划 ](javascript:void\(0\);)

**Github掘金计划** ![]()

微信号 GithubStar

功能介绍 用心发掘 Github 和 Gitee 上优质的开源项目。

____

_2022-05-17 10:46_ _发表于 湖北_

收录于合集

#Github掘金计划 81 个

#神器工具 48 个

大家好，我是小金！

今天给大家带来的是项目叫做「Skin-Deep」，能够一键去除人物图片身上的纹身。

![图片](https://mmbiz.qpic.cn/mmbiz_png/BcyAypujBVY22bP76N6m6ZiaKTe3uXrGfnE4Ja0DyGxEgWJjeks9TytibT6HVGCqFpY0Uv5UhchNpALJ1SpPibyHA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)SkinDeep
是印度的机器学习研究者 Vijish Madhavan 开源的一个机器学习工具，目前在 Github 上已经收获了 0.8k star。

![图片](https://mmbiz.qpic.cn/mmbiz_png/BcyAypujBVY22bP76N6m6ZiaKTe3uXrGfib5tgAD6tqnl0TQDduO18RkWr6XZA3UqibkEQLuRibicgGIahxjVbtfQicw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

该项目的作者 Vijish Madhavan 在看完加拿大歌手贾斯汀 · 比伯的 MV《Anyone》后，萌生了做这个项目的计划。贾斯汀 ·
比伯在化妆师的帮助下花了好几个小时的时间才把他的一身纹身覆盖掉。

相比于 Photoshop ，SkinDeep 的优势在于 **不需要专业的知识，也不需要花费大量的时间** 。这个项目本身也是希望在去除纹身这方面能够与
Photoshop 相匹敌甚至超越它。

  * 项目地址：https://github.com/vijishmadhavan/SkinDeep#Getting-Started-Yourself
  * 试用链接：https://colab.research.google.com/github/vijishmadhavan/SkinDeep/blob/master/SkinDeep_good.ipynb

## 效果展示

 **身体上的纹身去除**

![图片](https://mmbiz.qpic.cn/mmbiz_png/BcyAypujBVY22bP76N6m6ZiaKTe3uXrGf809n6ZKU3tEvLgt65xxrbTfGOBxP3GrP1Btq0ibPm0DlG8g49DYtHjw/640?wx_fmt=png)![图片](https://mmbiz.qpic.cn/mmbiz_png/BcyAypujBVY22bP76N6m6ZiaKTe3uXrGfMia3CHXh7ibTwfbJEz7Q0hSUP51hvTwiaGrPjetnxP9ZAlTKdrFZUHqKQ/640?wx_fmt=png)

 **面部的纹身去除**

![图片](https://mmbiz.qpic.cn/mmbiz_png/BcyAypujBVY22bP76N6m6ZiaKTe3uXrGfy7wiarzfj3ePvSnPZeJSJ7QeeMa407gkaCPY4pX3A8ugVcMxrL0UMkA/640?wx_fmt=png)![图片](https://mmbiz.qpic.cn/mmbiz_png/BcyAypujBVY22bP76N6m6ZiaKTe3uXrGfDic55MicBJC86e5ibsnVzYNwM6hOu0gBggEXUZEJicpg4KNxjkNibtBpEOg/640?wx_fmt=png)

 **与 photoshop 的效果对比**

![图片](https://mmbiz.qpic.cn/mmbiz_png/BcyAypujBVY22bP76N6m6ZiaKTe3uXrGfvIMSn03Uh0u8ouGCsmvDhccrSgicQC1zfibEyytNM9TjoWX8g16F7qvA/640?wx_fmt=png)

##  项目简介

### 项目亮点

项目最大的亮点就在数据合成，运用了很多理论和技术 Self-Attention（自我注意）、Progressive Resizing（渐进式调整大小）
、Generator Loss（生成器损失）等等。项目作者找不到合适的数据集，选择合成数据来进行训练。使用到的工具有：

  * Python OPeCV(叠加图像、去除纹身)，

  * Apdrawing(将图片变成带有线条的艺术肖像画，有利于模型学习和删除线条)

  * ArtLine(一个项目将输出与输入图像叠加)

  * Photoshop (放置纹身)

  * 等等

![图片](https://mmbiz.qpic.cn/mmbiz_png/BcyAypujBVY22bP76N6m6ZiaKTe3uXrGfwvk0DksgVibPtwSR6eYaYmx2eiaCrrXKXWQ1qq3T29laYtKGtzIYajAg/640?wx_fmt=png)![图片](https://mmbiz.qpic.cn/mmbiz_png/BcyAypujBVY22bP76N6m6ZiaKTe3uXrGfexUexicFZibaszyLs6YzJ7bpV2LiaeTbZQPibwib4Bxf29ibbLMNl1hbJpKQ/640?wx_fmt=png)

当然因为是合成数据也给项目带来一些缺陷：

  * 合成数据不能代替真实图片，同时纹身因人而异，因此模型在处理某些图片会有困难
  * 数据集容量有限
  * 彩色纹身不起作用，数据集没有。

### 项目所需库

项目是围 Fast.AI 库构建的。

  *  **fastai==1.0.61** （及其依赖项）。请不要安装更高版本

  *  **PyTorch 1.6.0** 请不要安装更高版本

## 项目使用

项目适用于在 Linux 上使用 NVDIA GPU 运行

### 准备工作

  * 安装 NVIDA 驱动程序。运行 nvidia-smi 确认您的驱动程序版本和内存使用情况

  * 大约 3.7GB 的可用 GPU 内存

  * 已安装 nvidia-docker2 软件包。这将允许 Docker 容器访问 GPU

  * 安装了 Docker 并为您的系统设置了正确的权限

### 运行容器

将签出项目位置挂载为容器主目录

    
    
    $> docker run --gpus all \  
                  --mount type=bind,source=`pwd`,target=/home/jovyan \  
                  -d \  
                  -p 8888:8888 -p 4040:4040 -p 4041:4041 \  
                  jupyter/tensorflow-notebook:python-3.8.8  
    

### 启动网站

使用 `ps` 获取新容器的 id，然后打印出日志以获取启动 URL。

    
    
    $> docker ps  
    $> docker logs <container_id>  
    

## 总结

尽管项目在起步阶段，仍需要许多改进，但在我看来项目还是非常有意思的有前景的，大家快用起来吧！

  

## 推荐

  * [Github掘金计划](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzIwNDgzMzI3Mg==&action=getalbum&album_id=1571213952619954180#wechat_redirect) ：历史优质原创汇总！用心发掘 Github 和 Gitee 上优质的开源项目。
  * [编程基础](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1632585323454971905&__biz=MzIwNDgzMzI3Mg==#wechat_redirect) ：精选编程基础如学习路线、编程语言相关的开源项目。
  * [计算机基础](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1635325633234780161&__biz=MzIwNDgzMzI3Mg==#wechat_redirect)：精选计算机基础（操作系统、计算机网络、算法、数据结构）相关的开源项目。
  * [技术面试](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1632589980491366403&__biz=MzIwNDgzMzI3Mg==#wechat_redirect) ：精选技术面试相关的开源项目。
  * [项目实战](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1632590550748938241&__biz=MzIwNDgzMzI3Mg==#wechat_redirect) ：精选实战类型的开源项目。
  * [神器工具&网站](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzIwNDgzMzI3Mg==&action=getalbum&album_id=1692140336665378820#wechat_redirect) : 一些好用的插件、软件、网站。

  

  

用心发掘 Github 和 Gitee 上优质的开源项目。

欢迎关注！欢迎点赞分享！

  

预览时标签不可点

收录于合集 #Github掘金计划

81个

上一篇微软开源的十大最受欢迎的开源项目！下一篇Github 最强程序员英语学习神器！巨好用！！！

[阅读原文](javascript:;)

