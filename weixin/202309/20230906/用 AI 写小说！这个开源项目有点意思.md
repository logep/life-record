----------------------------------------
----------------------------------------
#  用 AI 写小说！这个开源项目有点意思

原创 小金  [ Github掘金计划 ](javascript:void\(0\);)

**Github掘金计划** ![]()

微信号 GithubStar

功能介绍 用心发掘 Github 和 Gitee 上优质的开源项目。

____

_2022-06-23 03:59_ _发表于 湖北_

收录于合集

#神器工具 48 个

#Github掘金计划 81 个

大家好，我是小金！

今天给大家分享一个有趣的玩意「AI-writer」，用 AI
来写小说，根据输入文字进行续写可以生成言情玄幻网文等等，想体验的话有基于这个项目开发的网页版，想要深入学习的话还有 Python 版本需要自行安装。

![图片](https://mmbiz.qpic.cn/mmbiz_png/BcyAypujBVY4TAmGT90g4eaaj86zKoI8ia8XgeRABic2aesh4a3nbExBtbyYkx2PTvGc460UobiciaBDdbfPYHia5Zw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

网页体验版： **https://blinkdl.github.io/AI-Writer/** ****

开源链接： **https://github.com/BlinkDL/AI-Writer**

##  效果展示

输入： **他手里紧紧握着金箍棒**

![图片](https://mmbiz.qpic.cn/mmbiz_png/BcyAypujBVY4TAmGT90g4eaaj86zKoI8ic5a8icWDSYHBhqIwWOzPdbcEmwic3DybmS2CjLYG5MG3sX4R1Y4KIBvg/640?wx_fmt=png)
虽然没有我预想的会出现孙悟空，有些地方也读起来不通顺，可能也是因为模型的训练数据全部来自网文，缺乏生活常识所导致，但也还可以接受。

输入： **她是所有人的暗恋对象，不仅成绩优异更是公认的校花，走到那里都是万众瞩目，我生的普普通通从没想过有一天会与她有交集，但命运就是这般奇妙。**

![图片](https://mmbiz.qpic.cn/mmbiz_png/BcyAypujBVY4TAmGT90g4eaaj86zKoI87eWNkHSPH1mvmY2rNldoCCyPicS55sxIolk7erWb4gWFtWST7oyqrJQ/640?wx_fmt=png)
本来我想着会发生点什么美妙爱情故事，但是它揪着普通不放，还开始伤感自己的身世，有点伤感文学的意思。我想想网文里一般都是霸道总裁爱上身世悲惨的女孩的戏码，可能才导致这样的结果吧。

总的来说这个 AI 还是有点笨笨的的，但拿来玩玩还是不错的。

## 简化原理

电脑的原理，是题海战术+笨鸟先飞。它把字变成很多数，然后，找这些数的数学（统计学）规律。

电脑的学习目标：输入一堆字，预测下一个字。训练的小说有几万本，每次随机挑一段 512 个字输进去，让电脑猜下一个字，看是否能猜对。

小模型有 8849 个字，每个字对应两组数，每组有 768 个数。例如："我" = [0.123 -1.534 ...](输入组)，[-0.827
2.343 ...](输出组)。这些数字可能代表一些含义，如"名词、非名词"等维度。

当开头输入 512 个字，这些字的输入组数字个数之和为 512*768=393216，模型会将这 393216 个数进行一番运算，得到 768
个数，再与每个字的输出组匹配，计算相近程度。

其中有很多细节问题，大家感兴趣可以去源项目寻找答案。

## 推荐

  * [Github 掘金计划](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzIwNDgzMzI3Mg==&action=getalbum&album_id=1571213952619954180#wechat_redirect) ：历史优质原创文章汇总！
  * [程序人生](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzIwNDgzMzI3Mg==&action=getalbum&album_id=2084343476975878144#wechat_redirect)：编程经历、英语学习、延寿指南。
  * [神器工具](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzIwNDgzMzI3Mg==&action=getalbum&album_id=1692140336665378820#wechat_redirect) : 一些好用的插件、软件、网站。
  * [编程基础](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1632585323454971905&__biz=MzIwNDgzMzI3Mg==#wechat_redirect) ：精选编程基础如学习路线、编程语言相关的开源项目。
  * [计算机基础](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1635325633234780161&__biz=MzIwNDgzMzI3Mg==#wechat_redirect)：精选计算机基础（操作系统、计算机网络、算法、数据结构）相关的开源项目。
  * [技术面试](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1632589980491366403&__biz=MzIwNDgzMzI3Mg==#wechat_redirect) ：精选技术面试相关的开源项目。
  * [项目实战](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1632590550748938241&__biz=MzIwNDgzMzI3Mg==#wechat_redirect) ：精选实战类型的开源项目。

用心发掘 Github 和 Gitee 上优质的开源项目。

欢迎关注！欢迎点赞分享！

预览时标签不可点

收录于合集 #神器工具

48个

上一篇一款颜值超高开源知识管理工具！下一篇替换百度云！这款开源网盘颜值更高功能更全面！

