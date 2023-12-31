----------------------------------------
----------------------------------------
#  发现竞争对手代码中的 Bug 后，国外某程序员被公司解雇并送上了法庭

[ Github掘金计划 ](javascript:void\(0\);)

**Github掘金计划** ![]()

微信号 GithubStar

功能介绍 用心发掘 Github 和 Gitee 上优质的开源项目。

____

_2022-03-18 10:52_ _发表于_

收录于合集

转自：InfoQ  
这仅仅是“平凡人生中的一场大风波”吗?

昨天，一位开发人员在 Hacker News
上分享了他最近的经历：因为好奇，他查看了朋友公司的网页源码，发现了对方公司的代码中有一个非常低级的失误。事关安全，于是他马上报告给了他的主管和自己公司。但不幸的是，不久后他就被公司以此安全事件为由解雇了。被解雇之后，还收到了法院的传票，需要自己再去打一场官司。他对此表示不理解，认为自己“没有做违法的事情”，但作为一个教训，还是以匿名的方式把这个故事分享给了大家......

然而实际上事情并没有他想象中的那么简单。

事情经过：来自当事人的自述查看源码，报告漏洞

前段时间，我在一家银行从事软件工程方面的工作。虽然跟信息安全无关，但我了解一些业务内情，而且自己也一直对这方面很有兴趣。在工作中，我发现某家公司打算发行信用卡，而这项业务的上线会让对方成为我们银行的直接竞争对手。我当然对他们的业务计划抱有好奇，而且我正好有几位相熟的朋友在那边工作。

在看到他们在生产应用上发布的一些发卡内容后，我把这些内容下载下来，并打算解析一下功能背后的相关资产（其实非常简单，解压.ipa 文件再查找图像 /
文本就行）。出乎意料，我发现其中包含大量 server mocks，可能是某个调试 build 的遗留产物。为了弄清应用是如何使用这些资源的，我设置了
Charles Proxy 并尝试用手机访问。老实讲，我也就是随手一试，毕竟现在还有人不用 SSL Pinning
吗？（毕竟对方已经发行并接受信用卡支付了，或多或少得有一点安全意识才对）但事实证明，他们没用任何 SSL Pinning，我可以用自己找到的这些 mocks
进一步解析这款应用。

我用个人账户登录了这款应用，查看请求以了解需要将哪些端点映射到哪些本地 mocks——照理说，我应该会遇到未授权端点和 HTTP 403
报错，对吧？其中有一个端点会为信用卡模块返回 true/false 信息，我把它映射到了某个始终返回 true 的本地文件。

于是乎，我很快就找到了对方信用卡的开卡指引部分，并好奇能不能进一步找出信用卡功能主页。之后，我注意到.ipd 上很多 mocks
使用的端点都跟我之前映射的端点完全相同，所以我很快就找到了信用卡功能主页。在这里，我又发现了更不同寻常的东西……这是个我在任何 mocks
中都没见过的名称。通过 Charles 检查一番后，我意识到它来自某个我没有映射过的 API……

我使用 mock 指定了一条卡 ID……而应用随后会要求获取这条数字 ID。因为我是以无卡用户的身份登录的，所以应该被拒绝访问才对。但是……卡 ID
就在这里，明文显示。

凭借自己从事信用卡项目的经验，我初步判断对方是在运行某种生产环境下的测试流程，因为我拿到的是个只有员工（对方公司有个小小的专项团队）才能访问的试水程序。“没准顺着这条线摸下去，还能找到静态文件。”在好奇心的驱使下，我决定请求变更
ID，这次又获得了另一个卡号和名称。随着摸索，我逐渐意识到这些都是真实存在的卡号，会以明文形式提供给登录用户。这也太离谱了……错误太多，我根本无法想象自己公司会出现这样的低级失误。但对方还真的就拿出了这样一份开发成果。

到这里，我认定肯定得把安全问题上报给对方。他们可能没意识到把这些有问题的东西部署到生产环境中会有怎样的风险。但经过一番思考，我决定先跟当时的雇主打个招呼。这绝对不是想炫耀，我是担心如果这家竞争对手碰巧设有
bug 赏金计划，那以我的身份从那边领奖金好像有点奇怪。

另外，我们公司也许能跟对方的负责部门直接沟通，毕竟我不知道具体该跟对方的哪位负责人联系。所以第二天，我就把这事告诉了我的经理，她又把情况上报给
CISO。之后的几天，她一直在跟进，并表示肯定会披露这个发现。期间也有部分信息安全部门的同事参与进来，警告说公开披露也有风险，毕竟很多公司对这种事其实不大能接受……

麻烦来了：不仅被解雇还要打官司

之后这件事就没什么动静了……我开始怀疑这项发现到底重不重要——问题本身确实严重，但对方公司可能已经知晓问题的存在、并决定冒险先把其他功能做完。

几个月后，我的经理在一天下班时打电话给我，让我临时参加个会。走进会议室，我发现人力专员、公司高管还有我的经理都在。会议结果就是我被解雇了，因为对方宣称我访问了他们的某些内部
API。没错，我是访问过一个，而且就是我披露的这个。这事我的经理知道，我们银行的另外三位高管也都清楚。听过我的争辩，现场领导们传达了对方公司的意见，宣称我在上报情况后又多次访问了这些内部
API（可我没有）。

老实说，对方这么干似乎是想把我的行为描述成某种商业间谍活动。我们银行把我开除掉，则是为了证明并不存在什么商业间谍活动。但我纯粹是出于个人好奇心，哪有那么复杂……

几周之后，一位警官登门、送来了法院的传票。他们没说是因为什么事，但结合前段时间的状况，这肯定跟我发现的安全问题有关。在跟一位熟悉技术的独立律师交流之后，我意识到院方是把这次事件认定成了疑似信用卡欺诈：原告方宣称我用几十张信用卡进行了多次交易。这让我瞬间理解了自己为什么会被解雇。这项指控非常严厉，没有哪家银行愿意雇用被指控欺诈的员工。

我绝对没用这些卡号进行过任何交易，没有向外公开过获取卡号的具体方法，也从用这些数据牟取任何利益。而对方的指控明显站不住脚，所谓“曾在几十张卡上进行过交易”在他们的日志系统中根本查询不到。所以刚拿到传票时，我还担心了一阵，怕的是对方告我未经授权访问……虽然不是故意的，但这事我确实干了。

好在对方选择的罪名是信用卡欺诈，虽然听起来更恐怖，但我有信心驳回这种莫须有的指控。

事情基本就是这样。我的生活还在继续、也找到了另外一份工作，目前这场闹剧已经有专门的律师帮助我处理。尘埃落定，我觉得不妨以匿名的方式把这个故事分享给大家。老实说，从局外人的视角来看，这还真是平凡人生中的一场大风波。

安全专家评论：请收好自己的好奇心

这个匿名帖子发出后，网友们进行了激烈的探讨，短时间内在 Hacker News 上盖了几百层楼。

![图片](https://mmbiz.qpic.cn/mmbiz_png/YriaiaJPb26VOibV200baFduIIeajrljXDBujElmyrNvPWNOh5rnKk9NrQNTJwHYmTlzTK8I9r4pibZr3Z9FacibicUw/640?wx_fmt=png)

博主的帖子表明他自己并没有意识到这其中有犯罪的行为，只是觉得对方弄错了，自己虽然探查过对方的 API，但绝没有用这些卡号进行过交易，不存在欺诈的行为。

有网友认为，解雇是不合理的，是博主公司在推卸责任。也有网友认为，现代软件非常糟糕，特别是自从向现代技术进行转变之后，这些企业中有越来越多的 API 是用
js 编写的（不是歧视这种语言），无论这些 API 是否是对外的。因此，在探索合作伙伴 / 客户的（internal）API
时，意外发现非常具有损坏性的错误和漏洞是正常的。公司和公司、公司和雇员之间，缺乏诚实的沟通、缺乏信任、缺乏合作以使事情变得更好。

![图片](https://mmbiz.qpic.cn/mmbiz_png/YriaiaJPb26VOibV200baFduIIeajrljXDBAQZhyP2hiadp6ibEveicsTrCCZMZFibCicBVYc8uZXffuboom1Vzib3Y3TZQ/640?wx_fmt=png)

这时候，有一位网名为“tptacek”的安全专家跳了出来。

tptacek 是一位安全研究员和软件开发人员，在安全领域有近三十年的从业经验，是多个安全会议的审稿人，也是安全公司 Matasano Security （
曾是美国最大的软件安全公司）三位创始人之一。

他指正道：“作者干的事情绝对不是完全合法。有些人可能觉得我这是在搞‘受害者有罪论’，我只想从自己的立场做个简单判断。无罪的观点会误导他人。除了
CFAA（Computer Fraud and Abuse Act）以外， **任何外部测试都不属于‘合理测试’。**
作者的问题在于，他未经许可就在别人的网站上寻找漏洞。你没有权利这么干。虽然有些企业会觉得无所谓，但大多数企业肯定无法容忍这种行为。而法律其实是支持无法容忍这一边的。虽然作者大概率会被宣判无罪，但律师费恐怕也足够喝一壶的了。”

这种情况时有发生，即使是拥有明确的 Bug
赏金计划，有时候还是会让技术人员身陷风险。这类计划一般都设有边界，即只允许一定范围内的测试，而很多人就犯在对边界没有产生足够的警觉性。在没有事先得到授权的情况下违反这些潜规则很容易让人陷入法律纠纷，这也就是作者遇到的情况。

“所以希望你能学个乖，下次再遇到弹出明文信用卡号的时候记得停下，别再继续深入。 **收起你那该死的好奇心，用脑子想一想别人的底线在哪里。** ”

事情越讨论就越明朗，博主的行为不仅仅是“查看源码”，还拆开了竞争对手的应用程序并围绕私有 API
进行逆向工程。这就埋下了一个责任上的“地雷”，这种情况他需要立即请教相关律师。另外博主在向公司反馈时，也不曾留下任何书面记录......

并不是说对法律的无知是一个借口，但是不在信息安全领域的软件开发人员也需要知道一些限制。公共信息安全研究是必要的，但漏洞本身也是“烫手的山芋”。一方面，漏洞处理机制离不开漏洞发现者的配合，但另一方面，安全漏洞的发掘与报送都存在较高的法律风险，要注意不能触及法律的“红线”。国内常常也有开发者因为法律意识淡薄而做出不当行为：

2019 年 7 月，某政府网站管理员报警称信箱模块有网民多次发送非正常留言，疑遭黑客攻击。警方调查后发现，犯罪嫌疑人利用休息时间，
**在未授权的情况下** ，对网站进行渗透测试，他的目的为了找出网站漏洞并生成漏洞报告，“为家乡做点贡献”。

2019 年 5 月，揭阳网警工作发现违法嫌疑人苏某有涉嫌非法侵入计算机系统的行为。经深入调查发现，违法嫌疑人苏某利用“御
X”软件等对南方网等网站进行漏洞扫描，后用弱口令测试北京中医院网站的后台并成功登录， **在未经授权的情况下**
擅自修改管理员账号密码，同时将该网站的漏洞提交给“漏洞盒子”网站。据其本人交代，其违法行为只是为了获取相应积分，“有利于其以后找工作”。

此类事件层出不穷，也说明了就算不在安全信息领域工作，大家也有必要去了解一些基本法律，包括《网络安全法》、《网络产品安全漏洞管理规定》，等等，知道“界限”在哪里，从而避免因为不知法守法让自己陷入违法甚至犯罪的窘境。

 **参考链接：**

https://news.ycombinator.com/item?id=30706014&p=1

https://www.secrss.com/articles/13122

http://gd.sina.cn/news/2019-11-12/detail-iihnzhfy8578952.d.html

《计算机信息系统安全保护条例》：http://www.gov.cn/flfg/2005-08/06/content_20928.htm

《网络安全法》：http://www.cac.gov.cn/2016-11/07/c_1119867116.htm

《网络产品安全漏洞管理规定》：http://www.gov.cn/zhengce/zhengceku/2021-07/14/content_5624965.htm

《研究人员指南：安全研究的一些法律风险》：https://clinic.cyber.harvard.edu/files/2020/10/Security_Researchers_Guide-2.pdf

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

