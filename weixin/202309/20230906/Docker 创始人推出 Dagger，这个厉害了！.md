----------------------------------------
----------------------------------------
#  Docker 创始人推出 Dagger，这个厉害了！

[ Github掘金计划 ](javascript:void\(0\);)

**Github掘金计划** ![]()

微信号 GithubStar

功能介绍 用心发掘 Github 和 Gitee 上优质的开源项目。

____

_2022-04-26 13:42_ _发表于 湖北_

收录于合集

技术编辑：典典丨发自 思否编辑部  

公众号：SegmentFault

  

目前，距 Docker 创始人 Solomon Hykes 离开自己创立的容器技术公司已经有将近四年时间了。  

  

[自 Solomon Hykes 离开以后，Docker 经历了起起落落，包括在 2019 年将其企业业务出售给 Mirantis。但长期以来，作为
Docker 的形象代言人，Hykes
却很少涉足企业内部事务，仅仅是参与了几轮融资。](http://mp.weixin.qq.com/s?__biz=MzI3ODcxMzQzMw==&mid=2247559054&idx=2&sn=152c0620dff753628d01a5d8c0a0e789&chksm=eb5162b8dc26ebae62f67146be741167d28539d1fd822fdbace08a1162971b7931a8c8bd2867&scene=21#wechat_redirect)

  

[据了解，Hykes 其实一直在悄悄地致力于创业公司 Dagger，该公司已于昨日推出公开测试版，并宣布已完成 2000 万美元的 A
轮融资。](http://mp.weixin.qq.com/s?__biz=MzI3ODcxMzQzMw==&mid=2247559054&idx=2&sn=152c0620dff753628d01a5d8c0a0e789&chksm=eb5162b8dc26ebae62f67146be741167d28539d1fd822fdbace08a1162971b7931a8c8bd2867&scene=21#wechat_redirect)

  

[本轮融资由 Redpoint Ventures 领投，Y Combinator、Nat Friedman（GitHub 前 CEO）、Brian
Stevens（Google Cloud 前 CTO、Red Hat 前 CTO）、Idit Levine（solo.io 创始人兼 CEO）、Julius
Volz（Prometheus 的创始人）、Ellen Pao（Reddit 前 CEO）和 Daniel Lopez（Bitnami
联合创始人）参投。](http://mp.weixin.qq.com/s?__biz=MzI3ODcxMzQzMw==&mid=2247559054&idx=2&sn=152c0620dff753628d01a5d8c0a0e789&chksm=eb5162b8dc26ebae62f67146be741167d28539d1fd822fdbace08a1162971b7931a8c8bd2867&scene=21#wechat_redirect)

  

[此前，Dagger 已经完成了由 New Wave 领投的 300 万美元与 700
万美元两轮种子融资。](http://mp.weixin.qq.com/s?__biz=MzI3ODcxMzQzMw==&mid=2247559054&idx=2&sn=152c0620dff753628d01a5d8c0a0e789&chksm=eb5162b8dc26ebae62f67146be741167d28539d1fd822fdbace08a1162971b7931a8c8bd2867&scene=21#wechat_redirect)

  

![图片](https://mmbiz.qpic.cn/mmbiz_png/aVp1YC8UV0cuIgwJdRKLDziaEv2KvKLGxYV7YnIYmXzc2F0daJT0c7CBGb6X5ukJ5rkdNmPBmYiccaHk6SjavdrQ/640?wx_fmt=png)

  

Dagger 由 Hykes 与他在 Docker 的好友 Sam Alba 及 Andrea Luzzardi 共同创立，旨在为
**企业团队构建所谓的“DevOps 操作系统”** 。

  

Hykes 提到，一个企业完全可以像 Dagger 一样，从团队起步，而不一定是产品创意。联合创始人们一直在思考可以为开发者社区解决哪些问题，并很快就意识到
DevOps 流程仍然是目前很多企业团队的瓶颈。

  

[“ **我们决定从零开始** ，不对自己的认知做任何预设，”Hykes 在谈到团队的心路历程时表示，
“我们在探索过程中如同一张白纸，仔细倾听大众的意见。大众的反馈也很快就将我们推向 CI/CD
和自动化管道的方向。](http://mp.weixin.qq.com/s?__biz=MzI3ODcxMzQzMw==&mid=2247559054&idx=2&sn=152c0620dff753628d01a5d8c0a0e789&chksm=eb5162b8dc26ebae62f67146be741167d28539d1fd822fdbace08a1162971b7931a8c8bd2867&scene=21#wechat_redirect)

  

[DevOps
作为开发者和运营团队之间的过渡部分显得太过复杂，开发者们对自己的认知很清晰，工作也富有成效，但运营团队却想依赖云服务之类很酷的技术，将工作变得规模化。DevOps
就像两者中间的粘合剂，虽然有效，但体验感太差，浪费了很多时间和资源。所以我们专注于此。”](http://mp.weixin.qq.com/s?__biz=MzI3ODcxMzQzMw==&mid=2247559054&idx=2&sn=152c0620dff753628d01a5d8c0a0e789&chksm=eb5162b8dc26ebae62f67146be741167d28539d1fd822fdbace08a1162971b7931a8c8bd2867&scene=21#wechat_redirect)

  

Dagger 团队认为，目前市面上有很多强大的 DevOps 工具，但它们的专业性过高。而随着应用程序涉及的范围越大，DevOps
堆栈也会随之膨胀。另外，Docker 系列面试题和答案全部整理好了，微信搜索Java技术栈，在后台发送：面试，可以在线阅读。

  

[Hykes 表示 “市面上从不乏专门的专用工具，但开发者必须将这些工具全部粘合在一起，而粘合剂就是瓶颈。因此，我们专注于用更好的东西来代替这些粘合剂。”
](http://mp.weixin.qq.com/s?__biz=MzI3ODcxMzQzMw==&mid=2247559054&idx=2&sn=152c0620dff753628d01a5d8c0a0e789&chksm=eb5162b8dc26ebae62f67146be741167d28539d1fd822fdbace08a1162971b7931a8c8bd2867&scene=21#wechat_redirect)

  

[具体来说，这意味着 Dagger 要帮助 DevOps 工程师们将他们的管道编写为
CUE（即配置、统一、执行）中的声明性模型。以此为基础，工程师们就能以纯代码形式描述他们的管道，并将各个部分连接起来。](http://mp.weixin.qq.com/s?__biz=MzI3ODcxMzQzMw==&mid=2247559054&idx=2&sn=152c0620dff753628d01a5d8c0a0e789&chksm=eb5162b8dc26ebae62f67146be741167d28539d1fd822fdbace08a1162971b7931a8c8bd2867&scene=21#wechat_redirect)

  

[Hykes 解释道，“新方案的主要区别， **在于它更趋近于真正的软件开发体验**
。如果你喜欢别人编写的行为，就可以直接导入。如果您想查看该操作的源代码也可以随时查看。这种行为本身，也可以是由多个更小、针对性更强的行为组合而成。这就跟常规软件开发思路高度统一了。”
](http://mp.weixin.qq.com/s?__biz=MzI3ODcxMzQzMw==&mid=2247559054&idx=2&sn=152c0620dff753628d01a5d8c0a0e789&chksm=eb5162b8dc26ebae62f67146be741167d28539d1fd822fdbace08a1162971b7931a8c8bd2867&scene=21#wechat_redirect)

  

[为了进一步改善开发人员的体验，Dagger 团队还在构建“Dagger Universe”，这是一个精心策划的工具包库，开发人员可以将其导入到自己的
Dagger
配置中。](http://mp.weixin.qq.com/s?__biz=MzI3ODcxMzQzMw==&mid=2247559054&idx=2&sn=152c0620dff753628d01a5d8c0a0e789&chksm=eb5162b8dc26ebae62f67146be741167d28539d1fd822fdbace08a1162971b7931a8c8bd2867&scene=21#wechat_redirect)

  

[在这样一套整体方案之下，潜在用户也可以保留他们现有的 CI 基础设施。Hykes 表示，Dagger 并不是要替代 Circle CI 或 GitLab
之类的东西，而是在此基础上建立。
](http://mp.weixin.qq.com/s?__biz=MzI3ODcxMzQzMw==&mid=2247559054&idx=2&sn=152c0620dff753628d01a5d8c0a0e789&chksm=eb5162b8dc26ebae62f67146be741167d28539d1fd822fdbace08a1162971b7931a8c8bd2867&scene=21#wechat_redirect)

  

[来自 Redpoint Ventures 的 Erica Brescia 评论说，“对于 DevOps 团队而言，基础设施管理与云端软件部署太过复杂，但
Dagger 却用一种优雅的方式实现了用代码简化软件供应链管理。......通过让定制化应用交付管道具备可移植性，Dagger
团队改变了软件构建和部署意义上的游戏规则。”](http://mp.weixin.qq.com/s?__biz=MzI3ODcxMzQzMw==&mid=2247559054&idx=2&sn=152c0620dff753628d01a5d8c0a0e789&chksm=eb5162b8dc26ebae62f67146be741167d28539d1fd822fdbace08a1162971b7931a8c8bd2867&scene=21#wechat_redirect)

  

[Hykes 指出，他在构建 Dagger 的过程中参考了不少 Docker 的开发经验。与 Docker 一样，Dagger
也包括开源部分。虽然目前团队仍在研究相关细节，但它将成为 Dagger
生态系统的关键部分。](http://mp.weixin.qq.com/s?__biz=MzI3ODcxMzQzMw==&mid=2247559054&idx=2&sn=152c0620dff753628d01a5d8c0a0e789&chksm=eb5162b8dc26ebae62f67146be741167d28539d1fd822fdbace08a1162971b7931a8c8bd2867&scene=21#wechat_redirect)

  

[“Dagger 将成为一套混合平台，所以需要具备开源引擎。我们此次公布的就是这套开源引擎，并且匹配一项能够紧密集成的可选云服务。…...我们从
Docker 得出一个结论，如果想要建立一个庞大且繁荣的开发者社区，就必须 **真正拥抱开源**
。但是，如果想让社区蓬勃发展，并希望用户有良好的体验感，那么就得把社区与一个清晰明确的产品愿景联系起来。”](http://mp.weixin.qq.com/s?__biz=MzI3ODcxMzQzMw==&mid=2247559054&idx=2&sn=152c0620dff753628d01a5d8c0a0e789&chksm=eb5162b8dc26ebae62f67146be741167d28539d1fd822fdbace08a1162971b7931a8c8bd2867&scene=21#wechat_redirect)

  

目前，Dagger
团队将专注于开发开源引擎，同时关注社区的需求及痛点所在。托管服务将在稍后推出。最新面试题整理好了，大家可以在[Java面试库]()小程序在线刷题。

  

Hykes 表示，Docker 的发展过于迅速，这项服务几乎在一夜之间就变成了技术行业的基础容器技术方案，导致公司失去了方向。所以对于 Dagger，他计划
**放慢速度** ，毕竟 Dagger 本身并不直接运行应用程序，团队应该也能对此长期保持专注。

  

"在商业化方面，我们的思路也会是一样慢而稳。在 Docker
的时候，我们也希望能在商业化发展中坚守项目定位，但我们并没能充分倾听社区用户的声音"，Hykes 谈到。

  

Dagger 将利用这次 A 轮融资，扩大其开发团队，同时招聘并建立起营销和开发者关系团队。

  

 _参考链接：_ _https://techcrunch.com/2022/03/30/docker-founder-launches-dagger-a-
new-devops-platform/_

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

