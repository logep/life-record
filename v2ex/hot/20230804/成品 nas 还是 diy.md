### 成品 nas 还是 diy

前两天在考虑软路由接硬盘盒 考虑了一下直接上个 nas 吧

https://www.v2ex.com/t/960952

现在不知道该上成品 nas 还是自己 diy

成品的 nas 看了绿联的 dx4600 和万由的 hp402p
（看了评测感觉绿联挺方便的 做工也不错 就是不知道能不能刷其他系统）

然后又看了配件自己 diy 不知道该选哪个 请 v 友们给点建议

---------------------------------------------------

谨科 e522

---------------------------------------------------

truenas scale

---------------------------------------------------

@photon006 哥这个有点小贵了 - -

预算大概在 2k 左右

---------------------------------------------------

@ysnow888 这品牌貌似厂家跑路，淘宝店铺 1399 低价卖过一段时间，现在咸鱼价格还行。

所以就不用考虑原厂系统，拿回来刷 pve ，换根内存，nas 虚拟 omv 或 truenas 。

---------------------------------------------------

@photon006 绿联还是万由？

---------------------------------------------------

最近也同样在看 计划 DX4600 Pro  质感看起来不错。有 HDMI 应该也能刷 OMV 或者 PVE 。

---------------------------------------------------

OMV 用了两年了，期间也试过别的 nas 系统，如果换硬件，下一个 nas 我会选 Windows Server

---------------------------------------------------

@kernelt4sk 我也在考虑要不要上 dx4600 pro 但是又怕系统用不惯

---------------------------------------------------

@ysnow888 #8 我也不确定能不能刷其他系统，自带的系统是 openwrt 魔改的。能刷直接到手刷了。还在查找相关资料。

---------------------------------------------------

DIY ，系统装黑群晖，开源 NAS 系统没有套件和 APP 很不方便，易有云和可道云这些私有云软件还是没有品牌 NAS 第一方的套件好用

---------------------------------------------------

@kernelt4sk 我听说要换底层系统了

---------------------------------------------------

@efsg 我现在用的软路由 接的 usb 硬盘 很难受

---------------------------------------------------

@ysnow888 #11 那我再观望下  看看情况 OP 如果先入了可以分享下体验😁

---------------------------------------------------

@ysnow888 

有没有一种可能，谨科是厂商品牌，e522 是型号

b 站测评： https://www.bilibili.com/video/BV1ah411V71Z/?vd_source=655282544166ec5b59911443b817cb30

---------------------------------------------------

@photon006 我看你说跑路了 猛地以为是我说的那两个跑路了 吓一跳

---------------------------------------------------

去华擎的 global 官网，Intel CPU onboard MiniITX 的小主板里挑一个 4 SATA 口的，然后买一个迎广 MS04 机箱，再买两条内存。我三年前买花了 1800 ，不知道现在行情多少。

然后因为是 J 系列处理器，是兼容黑群晖的，有的卖这个板子的店铺还可以帮你装系统。

开销和耗电大头是硬盘，如果你买企业级的硬盘还将是噪音大头。

---------------------------------------------------

我的 NAS 是 DIY 的

单纯是因为不想用基于 Linux 的 NAS 系统

---------------------------------------------------

@libook 好的感谢


@cnbatch Linux 的 nas 有什么问题吗？

---------------------------------------------------

@ysnow888 主要是为了 ZFS （内核驱动），其次是因为 Linux 的网络栈没 BSD 的高效（现实案例：Netflix 自建 CDN 用的就是 FreeBSD ，还有 V 站有人测试过 /t/794443 ），就算内网家用环境不需要太高的效率，我也还是倾向于更好的网络传输性能。尽管我不是直接用 FreeBSD 做 NAS 而是用衍生版系统。

---------------------------------------------------

之前物理群晖，现在搞了台塔式服务器，上 ESXI ，ALL IN BOOM

---------------------------------------------------

当然 diy

---------------------------------------------------

cpu12500 板子随便整个 b660

---------------------------------------------------

我选 diy 的黑裙，之前买过 ds918+感觉和黑的没什么区别

---------------------------------------------------

@oldfriend #22 系统呢？黑群晖吗🤔

---------------------------------------------------

@smallWang 这个配置刷黑裙就是浪费，直接 pve 底层存储我用的 truenascore ，lxc 去跑 docker

---------------------------------------------------

@smallWang 不考虑 esxi 是有原因的，一方面本身 esxi 是商业软件，免费版限制还是有的，最主要的原因很多板子都是带的 8125 网卡，而 esxi 不兼容 8125 网卡，但是恰恰 2.5g 网卡也只有螃蟹卡稳一点，牙膏厂的卡不行

---------------------------------------------------

@oldfriend 功耗太高了 这配置跟我主力电脑差不多了

---------------------------------------------------

DIY 吧，随便搞个设备，起 Docker 版本的群晖，方便的狠。

---------------------------------------------------

我是自己 diy 的，nas 系统用的是 unraid

---------------------------------------------------

成品

---------------------------------------------------

@concernedz https://post.m.smzdm.com/p/a20qdn82/?send_by=1926839469&invite_code=zdm2j8xcm9inv&zdm_ss=iOS_1926839469_&from=other

---------------------------------------------------

哪里难受哦，内网 smb 不就好了

---------------------------------------------------

@Ja22 我只有一个多余的 usb 只能拓展一个 usb 盘

---------------------------------------------------

软路由外接硬盘盒还行，我就是玩了 PT ，弄个 2 个 4T 盘，弄个 emby ，也不错。

---------------------------------------------------

diy 硬盘笼一步到位 12 盘 别慢慢升级了没意义 系统的 pve all in one

---------------------------------------------------

@ysnow888 你需求几盘位的

---------------------------------------------------

成品的用起来方便省事，还有厂商的支持。但是价格高不够灵活。

diy 的灵活，性能高，可玩性强，装黑群晖用起来也很方便。但是对动手能力要求高，需要自己攒硬件装软件，各种排错找问题

既然 OP 由于要不要选择 diy ，那就还是买个成品的吧

---------------------------------------------------

如果不想折腾或者不想面对潜在翻车风险，建议成品，diy 翻车全靠自己和网友，成品还能找厂家，时不时就能看到黑裙翻车的，自己手上的 turenas 也翻过车，加钱保平安

---------------------------------------------------

如果想买成品就别想着刷其他系统，那还不如 diy ，成品看重的不就是系统

---------------------------------------------------

个人觉得如果喜欢折腾可以自己尝试搭建一下, 这样很容易在各种系统中挑选到适合自己的.  再决定选择什么样子的成品 Nas; 

不喜欢折腾就选择口碑计较不错的,  反正大概率最终都会走向成品 Nas

---------------------------------------------------

建议成品

不要听 diy 才有性价比，如果你不"捡垃圾"，不上咸鱼，手上也没有淘汰下来的硬件，购买一套全新的配件和成品差不了太多

---------------------------------------------------

如果都考虑到手开刷，那追求直接 diy 攒一个不是更优选吗。我一直都用自己装的机器配 debian ，不去碰那些厂商定制系统。

---------------------------------------------------

@ysnow888 谁告诉你功耗高的，这机器待机二十多哇瓦

---------------------------------------------------

@honmaple diy 不是便宜，但确实有性价比，12400 机器威联通要两万，而 12500 diy 2k 到 3k 是可以搞定的

---------------------------------------------------

弱弱问下 把备用手机插上电再接上硬盘 当 NAS 使 可行不

---------------------------------------------------

见方机箱，支持 atx 电源和 matx 板和塔式散热。6 盘位

---------------------------------------------------

我买的绿联云 DH2100 ，用了 2 年了，挺好的，能满足我的需求（视频/照片/监控备份、办公室远程摸鱼下片/音乐、家庭影院），比较稳定，功能更新也快。懒得折腾的还是买成品吧，价格也不贵，当时也就比单买 2 块 4T 酷狼贵个两三百。

---------------------------------------------------

不能上 apple store 的全家桶软件，那就自己攒。
如果需要 NAS 全家桶软件，那就成品。

---------------------------------------------------

div
我觉得 div 挺好的
我用的 unraid 系统做 nas
可以搭影音库，我打算以后淘一个 p40 显卡，做一个 ai 绘画的虚拟机

---------------------------------------------------

@Thoughtfully 感觉应该不太行 （没试过）

@gregy 对对对 当初入软路由的时候就是各种试错

@Ja22 4-6 盘

@ltkun  太多了用不了那么多

---------------------------------------------------

@ysnow888 4-6 盘的话买个拓普龙的箱子自己组吧

---------------------------------------------------

@cnbatch 你用的是 FreeBSD 的哪个衍生版啊？我是用的 FreeBSD 原生自己配置的

---------------------------------------------------

成品盘位少啊

---------------------------------------------------

@NealLason 界面简陋的 XigmaNAS ，主要是为了有个网页版管理器，方便连接回家时看状态

不选 TrueNAS 是因为这货会默认在每个盘都创建交换分区，给我一种“不够纯净”的感觉

---------------------------------------------------

有公网 ip 的情况可以选 DIY ，抄别人的配置单就行。
再就是注意功耗，和机箱大小。功耗太大 24 小时开机电费吃不消，机箱太大后续出二手不方便。

成品 NAS 一般带内网穿透，在个性化需求不是很多，无公网 ip 的情况下也是不错的选择

---------------------------------------------------

如果你要选成品 NAS ，请直接选择群晖/威联通。
否则选 DIY NAS

---------------------------------------------------

成品 NAS 最贵的是**盘位费**，所以如果选择成品 NAS ，直接上大容量(16T+)硬盘

---------------------------------------------------

QNAS4 已经准备好开始 DIY 了

---------------------------------------------------

用国产 nas 那就基本和 diy 没啥区别了，很多人买绿联回来是为了刷机……

---------------------------------------------------

看你是纯当 NAS 用 还是要玩些花的
记住最重要的一句  数据是无价的
不过玩这套 刚开始都喜欢 All in one,然后 慢慢就会自我拆分,最终 NAS+软路由+应用服务器~

---------------------------------------------------

@chengxiao 不尽然，只是你会拆分，很多人觉得 aio 也没啥问题，只有网络会拆开，其他的完全不需要，而且虚拟机底层的话更安全，备份也更方便

---------------------------------------------------

@mohumohu 想多了，国产 nas 的优势是 app ，傻瓜式，有的人会刷，因为你在刷机的地方看到的肯定是刷机的多，但实际上多数人不会

---------------------------------------------------

我觉得你问这个问题，就可以选成品了

---------------------------------------------------

@oldfriend 但我觉得既然都选择用 nas 了和尝试 DIY 了，多少是有折腾的能力的，起码知道网络怎么配，共享怎么设置，多数什么都不懂的人你问他 nas 是什么都答不出来。至于 app 和傻瓜式，群晖和威联通的生态肯定更好，不折腾的人还是选生态好的 nas 吧，毕竟就是买系统送硬件。

---------------------------------------------------

@mohumohu 生态好和傻瓜式有关系么

---------------------------------------------------

@mohumohu 从易用角度看国产 nas 做的远比群晖那种老牌 nas 系统好

---------------------------------------------------

喜欢折腾就 DIY ，黑群晖、truenas,openwrt 甚至 windows 都可以当 NAS 系统，想开箱即用就买品牌的

---------------------------------------------------

@oldfriend 生态好，想要的功能就容易实现，遇到问题也容易找到答案，群晖和威联通的 app 也没啥毛病，而且不折腾最重要是 nas 系统稳定，不然买回来就当强制实名的大号网盘用了

---------------------------------------------------

建议先搞个成品，比如群晖 2 盘位的，二手的也行。重要资料一定先备份好，然后别动。
然后，再开始折腾，随便咋折腾都行。
all in one/boom ，黑群晖、pve 、esxi 、win server 、turenas ，随便玩。
硬件的话，自己 diy 、矿渣、盒子、软路由、小主机、nuc 、笔记本，都行。
爱咋折腾咋折腾。
但一定得记得，重要数据得先备份。用啥备份？成品 nas 。
不然，就等着血与泪吧。

---------------------------------------------------

@mohumohu 你就说你都用过吗

---------------------------------------------------

绿联 DX4600 安装 UNRAID 系统

https://umi.im/dx4600-unraid/

---------------------------------------------------

@chengxiao 不尽然，只是你会拆分，很多人觉得 aio 也没啥问题，只有网络会拆开，其他的完全不需要，而且虚拟机底层的话更安全，备份也更方便

---------------------------------------------------

@mohumohu 想多了，国产 nas 的优势是 app ，傻瓜式，有的人会刷，因为你在刷机的地方看到的肯定是刷机的多，但实际上多数人不会

---------------------------------------------------

我觉得你问这个问题，就可以选成品了

---------------------------------------------------

@oldfriend 但我觉得既然都选择用 nas 了和尝试 DIY 了，多少是有折腾的能力的，起码知道网络怎么配，共享怎么设置，多数什么都不懂的人你问他 nas 是什么都答不出来。至于 app 和傻瓜式，群晖和威联通的生态肯定更好，不折腾的人还是选生态好的 nas 吧，毕竟就是买系统送硬件。

---------------------------------------------------

@mohumohu 生态好和傻瓜式有关系么

---------------------------------------------------

@mohumohu 从易用角度看国产 nas 做的远比群晖那种老牌 nas 系统好

---------------------------------------------------

喜欢折腾就 DIY ，黑群晖、truenas,openwrt 甚至 windows 都可以当 NAS 系统，想开箱即用就买品牌的

---------------------------------------------------

@oldfriend 生态好，想要的功能就容易实现，遇到问题也容易找到答案，群晖和威联通的 app 也没啥毛病，而且不折腾最重要是 nas 系统稳定，不然买回来就当强制实名的大号网盘用了

---------------------------------------------------

建议先搞个成品，比如群晖 2 盘位的，二手的也行。重要资料一定先备份好，然后别动。
然后，再开始折腾，随便咋折腾都行。
all in one/boom ，黑群晖、pve 、esxi 、win server 、turenas ，随便玩。
硬件的话，自己 diy 、矿渣、盒子、软路由、小主机、nuc 、笔记本，都行。
爱咋折腾咋折腾。
但一定得记得，重要数据得先备份。用啥备份？成品 nas 。
不然，就等着血与泪吧。

---------------------------------------------------

@mohumohu 你就说你都用过吗

---------------------------------------------------

绿联 DX4600 安装 UNRAID 系统

https://umi.im/dx4600-unraid/

---------------------------------------------------

@chengxiao 不尽然，只是你会拆分，很多人觉得 aio 也没啥问题，只有网络会拆开，其他的完全不需要，而且虚拟机底层的话更安全，备份也更方便

---------------------------------------------------

@mohumohu 想多了，国产 nas 的优势是 app ，傻瓜式，有的人会刷，因为你在刷机的地方看到的肯定是刷机的多，但实际上多数人不会

---------------------------------------------------

我觉得你问这个问题，就可以选成品了

---------------------------------------------------

@oldfriend 但我觉得既然都选择用 nas 了和尝试 DIY 了，多少是有折腾的能力的，起码知道网络怎么配，共享怎么设置，多数什么都不懂的人你问他 nas 是什么都答不出来。至于 app 和傻瓜式，群晖和威联通的生态肯定更好，不折腾的人还是选生态好的 nas 吧，毕竟就是买系统送硬件。

---------------------------------------------------

@mohumohu 生态好和傻瓜式有关系么

---------------------------------------------------

@mohumohu 从易用角度看国产 nas 做的远比群晖那种老牌 nas 系统好

---------------------------------------------------

喜欢折腾就 DIY ，黑群晖、truenas,openwrt 甚至 windows 都可以当 NAS 系统，想开箱即用就买品牌的

---------------------------------------------------

@oldfriend 生态好，想要的功能就容易实现，遇到问题也容易找到答案，群晖和威联通的 app 也没啥毛病，而且不折腾最重要是 nas 系统稳定，不然买回来就当强制实名的大号网盘用了

---------------------------------------------------

建议先搞个成品，比如群晖 2 盘位的，二手的也行。重要资料一定先备份好，然后别动。
然后，再开始折腾，随便咋折腾都行。
all in one/boom ，黑群晖、pve 、esxi 、win server 、turenas ，随便玩。
硬件的话，自己 diy 、矿渣、盒子、软路由、小主机、nuc 、笔记本，都行。
爱咋折腾咋折腾。
但一定得记得，重要数据得先备份。用啥备份？成品 nas 。
不然，就等着血与泪吧。

---------------------------------------------------

@mohumohu 你就说你都用过吗

---------------------------------------------------

绿联 DX4600 安装 UNRAID 系统

https://umi.im/dx4600-unraid/

---------------------------------------------------

@chengxiao 不尽然，只是你会拆分，很多人觉得 aio 也没啥问题，只有网络会拆开，其他的完全不需要，而且虚拟机底层的话更安全，备份也更方便

---------------------------------------------------

@mohumohu 想多了，国产 nas 的优势是 app ，傻瓜式，有的人会刷，因为你在刷机的地方看到的肯定是刷机的多，但实际上多数人不会

---------------------------------------------------

我觉得你问这个问题，就可以选成品了

---------------------------------------------------

@oldfriend 但我觉得既然都选择用 nas 了和尝试 DIY 了，多少是有折腾的能力的，起码知道网络怎么配，共享怎么设置，多数什么都不懂的人你问他 nas 是什么都答不出来。至于 app 和傻瓜式，群晖和威联通的生态肯定更好，不折腾的人还是选生态好的 nas 吧，毕竟就是买系统送硬件。

---------------------------------------------------

@mohumohu 生态好和傻瓜式有关系么

---------------------------------------------------

@mohumohu 从易用角度看国产 nas 做的远比群晖那种老牌 nas 系统好

---------------------------------------------------

喜欢折腾就 DIY ，黑群晖、truenas,openwrt 甚至 windows 都可以当 NAS 系统，想开箱即用就买品牌的

---------------------------------------------------

@oldfriend 生态好，想要的功能就容易实现，遇到问题也容易找到答案，群晖和威联通的 app 也没啥毛病，而且不折腾最重要是 nas 系统稳定，不然买回来就当强制实名的大号网盘用了

---------------------------------------------------

建议先搞个成品，比如群晖 2 盘位的，二手的也行。重要资料一定先备份好，然后别动。
然后，再开始折腾，随便咋折腾都行。
all in one/boom ，黑群晖、pve 、esxi 、win server 、turenas ，随便玩。
硬件的话，自己 diy 、矿渣、盒子、软路由、小主机、nuc 、笔记本，都行。
爱咋折腾咋折腾。
但一定得记得，重要数据得先备份。用啥备份？成品 nas 。
不然，就等着血与泪吧。

---------------------------------------------------

@mohumohu 你就说你都用过吗

---------------------------------------------------

绿联 DX4600 安装 UNRAID 系统

https://umi.im/dx4600-unraid/

---------------------------------------------------

@chengxiao 不尽然，只是你会拆分，很多人觉得 aio 也没啥问题，只有网络会拆开，其他的完全不需要，而且虚拟机底层的话更安全，备份也更方便

---------------------------------------------------

@mohumohu 想多了，国产 nas 的优势是 app ，傻瓜式，有的人会刷，因为你在刷机的地方看到的肯定是刷机的多，但实际上多数人不会

---------------------------------------------------

我觉得你问这个问题，就可以选成品了

---------------------------------------------------

@oldfriend 但我觉得既然都选择用 nas 了和尝试 DIY 了，多少是有折腾的能力的，起码知道网络怎么配，共享怎么设置，多数什么都不懂的人你问他 nas 是什么都答不出来。至于 app 和傻瓜式，群晖和威联通的生态肯定更好，不折腾的人还是选生态好的 nas 吧，毕竟就是买系统送硬件。

---------------------------------------------------

@mohumohu 生态好和傻瓜式有关系么

---------------------------------------------------

@mohumohu 从易用角度看国产 nas 做的远比群晖那种老牌 nas 系统好

---------------------------------------------------

喜欢折腾就 DIY ，黑群晖、truenas,openwrt 甚至 windows 都可以当 NAS 系统，想开箱即用就买品牌的

---------------------------------------------------

@oldfriend 生态好，想要的功能就容易实现，遇到问题也容易找到答案，群晖和威联通的 app 也没啥毛病，而且不折腾最重要是 nas 系统稳定，不然买回来就当强制实名的大号网盘用了

---------------------------------------------------

建议先搞个成品，比如群晖 2 盘位的，二手的也行。重要资料一定先备份好，然后别动。
然后，再开始折腾，随便咋折腾都行。
all in one/boom ，黑群晖、pve 、esxi 、win server 、turenas ，随便玩。
硬件的话，自己 diy 、矿渣、盒子、软路由、小主机、nuc 、笔记本，都行。
爱咋折腾咋折腾。
但一定得记得，重要数据得先备份。用啥备份？成品 nas 。
不然，就等着血与泪吧。

---------------------------------------------------

@mohumohu 你就说你都用过吗

---------------------------------------------------

绿联 DX4600 安装 UNRAID 系统

https://umi.im/dx4600-unraid/

---------------------------------------------------

@chengxiao 不尽然，只是你会拆分，很多人觉得 aio 也没啥问题，只有网络会拆开，其他的完全不需要，而且虚拟机底层的话更安全，备份也更方便

---------------------------------------------------

@mohumohu 想多了，国产 nas 的优势是 app ，傻瓜式，有的人会刷，因为你在刷机的地方看到的肯定是刷机的多，但实际上多数人不会

---------------------------------------------------

我觉得你问这个问题，就可以选成品了

---------------------------------------------------

@oldfriend 但我觉得既然都选择用 nas 了和尝试 DIY 了，多少是有折腾的能力的，起码知道网络怎么配，共享怎么设置，多数什么都不懂的人你问他 nas 是什么都答不出来。至于 app 和傻瓜式，群晖和威联通的生态肯定更好，不折腾的人还是选生态好的 nas 吧，毕竟就是买系统送硬件。

---------------------------------------------------

@mohumohu 生态好和傻瓜式有关系么

---------------------------------------------------

@mohumohu 从易用角度看国产 nas 做的远比群晖那种老牌 nas 系统好

---------------------------------------------------

喜欢折腾就 DIY ，黑群晖、truenas,openwrt 甚至 windows 都可以当 NAS 系统，想开箱即用就买品牌的

---------------------------------------------------

@oldfriend 生态好，想要的功能就容易实现，遇到问题也容易找到答案，群晖和威联通的 app 也没啥毛病，而且不折腾最重要是 nas 系统稳定，不然买回来就当强制实名的大号网盘用了

---------------------------------------------------

建议先搞个成品，比如群晖 2 盘位的，二手的也行。重要资料一定先备份好，然后别动。
然后，再开始折腾，随便咋折腾都行。
all in one/boom ，黑群晖、pve 、esxi 、win server 、turenas ，随便玩。
硬件的话，自己 diy 、矿渣、盒子、软路由、小主机、nuc 、笔记本，都行。
爱咋折腾咋折腾。
但一定得记得，重要数据得先备份。用啥备份？成品 nas 。
不然，就等着血与泪吧。

---------------------------------------------------

@mohumohu 你就说你都用过吗

---------------------------------------------------

绿联 DX4600 安装 UNRAID 系统

https://umi.im/dx4600-unraid/

---------------------------------------------------

@chengxiao 不尽然，只是你会拆分，很多人觉得 aio 也没啥问题，只有网络会拆开，其他的完全不需要，而且虚拟机底层的话更安全，备份也更方便

---------------------------------------------------

@mohumohu 想多了，国产 nas 的优势是 app ，傻瓜式，有的人会刷，因为你在刷机的地方看到的肯定是刷机的多，但实际上多数人不会

---------------------------------------------------

我觉得你问这个问题，就可以选成品了

---------------------------------------------------

@oldfriend 但我觉得既然都选择用 nas 了和尝试 DIY 了，多少是有折腾的能力的，起码知道网络怎么配，共享怎么设置，多数什么都不懂的人你问他 nas 是什么都答不出来。至于 app 和傻瓜式，群晖和威联通的生态肯定更好，不折腾的人还是选生态好的 nas 吧，毕竟就是买系统送硬件。

---------------------------------------------------

@mohumohu 生态好和傻瓜式有关系么

---------------------------------------------------

@mohumohu 从易用角度看国产 nas 做的远比群晖那种老牌 nas 系统好

---------------------------------------------------

喜欢折腾就 DIY ，黑群晖、truenas,openwrt 甚至 windows 都可以当 NAS 系统，想开箱即用就买品牌的

---------------------------------------------------

@oldfriend 生态好，想要的功能就容易实现，遇到问题也容易找到答案，群晖和威联通的 app 也没啥毛病，而且不折腾最重要是 nas 系统稳定，不然买回来就当强制实名的大号网盘用了

---------------------------------------------------

建议先搞个成品，比如群晖 2 盘位的，二手的也行。重要资料一定先备份好，然后别动。
然后，再开始折腾，随便咋折腾都行。
all in one/boom ，黑群晖、pve 、esxi 、win server 、turenas ，随便玩。
硬件的话，自己 diy 、矿渣、盒子、软路由、小主机、nuc 、笔记本，都行。
爱咋折腾咋折腾。
但一定得记得，重要数据得先备份。用啥备份？成品 nas 。
不然，就等着血与泪吧。

---------------------------------------------------

@mohumohu 你就说你都用过吗

---------------------------------------------------

绿联 DX4600 安装 UNRAID 系统

https://umi.im/dx4600-unraid/

