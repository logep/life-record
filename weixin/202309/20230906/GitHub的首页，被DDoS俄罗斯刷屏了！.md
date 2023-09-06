----------------------------------------
----------------------------------------
#  GitHub的首页，被DDoS俄罗斯刷屏了！

[ Github掘金计划 ](javascript:void\(0\);)

**Github掘金计划** ![]()

微信号 GithubStar

功能介绍 用心发掘 Github 和 Gitee 上优质的开源项目。

____

_2022-03-11 11:41_ _发表于_

收录于合集

以下文章来源于编程技术宇宙 ，作者轩辕之风

![](images/0)
**编程技术宇宙** .

用故事说技术，编程从未如此有趣

逛GitHub时发现，排行榜上大量的出现了DDoS相关的项目，其中还不乏直接针对俄罗斯的。  

![图片](https://mmbiz.qpic.cn/mmbiz_png/jXQDbLkGBYVYsYu2kYk7oHUd0LH1sz4hlicS4oDy4fcu68icG8rJy4pLoEFJJCSYzLzej1IRup2xw8iaoNROn5SkA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

我就好奇进去看了一下。

## 第一个

![图片](https://mmbiz.qpic.cn/mmbiz_png/jXQDbLkGBYVYsYu2kYk7oHUd0LH1sz4hqVZMN4sCjOHjesYlOlcRwsXp6uQMKZwDibgtk2wYGRppGeMHdW3UULw/640?wx_fmt=png)

虽然我英语不咋样，但这句话我还是看明白了。

作者是乌克兰一个19岁的学生：

![图片](https://mmbiz.qpic.cn/mmbiz_png/jXQDbLkGBYVYsYu2kYk7oHUd0LH1sz4hjCydf1agR5D32Ts7CjqbJD6WibSdYtHcAnAH9TTKsQDicRn4dnrKerZg/640?wx_fmt=png)

这是一个Python的项目，说是一个项目，实际上就一个py脚本文件，代码不到两百行。核心的功能逻辑就是开启一个500线程的线程池，不断地向俄罗斯的一个网站发起GET请求：

![图片](https://mmbiz.qpic.cn/mmbiz_png/jXQDbLkGBYVYsYu2kYk7oHUd0LH1sz4h5XtdhY01mfyLYr8u169ZVibdRne9ia7HO8BbTP3JBeqJujSjTUU5xfTQ/640?wx_fmt=png)

被攻击的目标是俄罗斯的阿巴坎国际机场，目前这网站已经打不开了，下面的俄文大意是说无法访问的意思：

![图片](https://mmbiz.qpic.cn/mmbiz_png/jXQDbLkGBYVYsYu2kYk7oHUd0LH1sz4hiab2sH6cJJfBV2ibNLicTX03XPwvUyrCeKhWkicWlFjC1o3X8hOzjdiaBXA/640?wx_fmt=png)

在这个项目的issues下，我看到了一些有趣的评论：

![图片](https://mmbiz.qpic.cn/mmbiz_png/jXQDbLkGBYVYsYu2kYk7oHUd0LH1sz4hTdWXNbXsJDAOvke8Bzz3Q4w0WSlZPnBOCAjtcOhsj3X1cTAnwvDxzg/640?wx_fmt=png)

## 第二个

前面的那个，还需要安装Python，对于非技术人员来说，始终有些麻烦。

而这一个项目，使用HTML+Javascript来完成，将攻击代码写入网页之中，只要下载这个HTML文件，用浏览器打开，就能发起攻击。

![图片](https://mmbiz.qpic.cn/mmbiz_png/jXQDbLkGBYVYsYu2kYk7oHUd0LH1sz4hHnb7X8HNW8ctiaMMKmlkR771QBlldHfnmKZ1CrUPjgDsDLcQlkr7YBA/640?wx_fmt=png)

这个项目的攻击目标还不少，.ru结尾的域名，都是俄罗斯的金融、能源类重要网站：

![图片](https://mmbiz.qpic.cn/mmbiz_png/jXQDbLkGBYVYsYu2kYk7oHUd0LH1sz4hHib1wUicKdZGddwMFyENhxg7u4RSPc6udXnfAyIicFKlhb7qWN1K2XVVA/640?wx_fmt=png)

所谓的攻击，也就是写个死循环不断发起HTTP请求：

![图片](https://mmbiz.qpic.cn/mmbiz_png/jXQDbLkGBYVYsYu2kYk7oHUd0LH1sz4hiaSpWL6RAFIysEslMQd9h2icfVic1ppeKx0cuMcDhvXe2X1Q5BFmU2Jsw/640?wx_fmt=png)

别人网站能不能倒下不清楚，攻击者自己的CPU风扇估计是要飞转了。

## 第三个

这也是一个Python项目，但相比起来比前面两个专业得多了，支持七层的业务层面攻击和四层的网络协议层面的攻击，细分了非常多种的攻击手法：

![图片](https://mmbiz.qpic.cn/mmbiz_png/jXQDbLkGBYVYsYu2kYk7oHUd0LH1sz4h8FsgRxsD0mEicm32PZJvRgRIUAELaWT8VDdP6hFAC781gLk5JicCszCQ/640?wx_fmt=png)![图片](https://mmbiz.qpic.cn/mmbiz_png/jXQDbLkGBYVYsYu2kYk7oHUd0LH1sz4hE62PvR9bh4H8XBZiaTu9ILRWUQC515SsibfOjeg7dSQmGMcoqNjm9okg/640?wx_fmt=png)

这个项目并非针对俄罗斯，没有政治色彩，而是一个纯粹的DDoS开源项目，也是一个不错的学习对象。

还有一些类似的，就不一一列举了。

最近的网络上充满了火药味，这股火药味也同样弥漫到了GitHub，不仅仅是Trending排行榜，也在各项目的issues里。

不知道大家看到GitHub排行榜上一水儿的DDoS攻击俄罗斯的项目，是怎样一种感受？

![图片](https://mmbiz.qpic.cn/mmbiz_png/jXQDbLkGBYVYsYu2kYk7oHUd0LH1sz4h3VwVRKicZVU6uiaLVf59JkGOHFpEAORAg09icDo2aykKPVrWW3KHswQmg/640?wx_fmt=png)

最后还是要例行提醒一下： **在我国，DDoS行为是违法的，上面的内容仅供技术学习，别拿去干坏事。**

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

