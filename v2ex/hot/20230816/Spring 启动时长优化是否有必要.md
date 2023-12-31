### Spring 启动时长优化是否有必要

最近在 reddit 上推广自己的关于 Spring 启动优化小项目，之前也在 v 站推广过：

- [分享一种 Spring 应用启动过程采样的方法]( https://www.v2ex.com/t/963251)
- [Spring 启动分析优化——自荐个项目]( https://www.v2ex.com/t/960514)

评论区有个评论者 ta 的意见是没有意义，理由如下：

 ![]( https://i.imgur.com/vjx7RPU.png) 
 
 ![]( https://i.imgur.com/4tDdTKR.png) 
  
  
 一开始看到这个评论还挺难过的，毕竟辛苦做的东西，被别人说的一文不值。后面去了解了一下这个开发者说的 GraalVM ，发现确实很强大，编译出的 native 启动速度确实非常的快。
 
 所以我也开始认真的思考这个项目是否真的有意义，这个项目的背景是公司为了降低线上故障时回滚止血时间，要求应用启动时长必须要小于指定的时间，结合[一些可以显著提高 Java 启动速度方法]( https://heapdump.cn/article/4136322)**无观测不优化**的观点实现的，最大的一个优化应用是：将启动时间由原来的将近 6 分钟优化至 3 分钟。
 
 如果没有公司的强推，那还有没有必要这样做 spring 应用启动的优化，就像评论说的直接使用 GraalVM 。个人觉得还是有必要的：
 - 目前公司的应用不是基于 GraalVM 的，如果要享受 GraalVM 带来的启动极速，还是需要进行大量的应用改造
 - GraalVM 对反射、动态代理有很多的限制，升级应用很容易踩坑，还需要大量的回归测试
 - 日常的项目启动慢本身其实不在 spring 本身，而是项目中依赖的各种中间件的初始化、富客户端的初始化等导致的，升级完 GraalVM 后这些耗时应该还是存在的
 
 以上就是我能想到的观点，感觉这个评论者是 GraalVM 的忠实粉丝，而且认为这是在发布垃圾消息，所以选择在 v 站想和大家再讨论一下，spring 启动时长的优化是否有必要

---------------------------------------------------

生产环境有谁真正大规模用上了 GraalVM 嘛？

---------------------------------------------------

将启动时间由原来的将近 6 分钟优化至 3 分钟。

---------------------------------------------------

说没有必要的 都是伸手躺平党，当你真正的面世一款不需要改任何东西，只需引入一个依赖，不会带来任何副作用的时候，那帮叼毛恨不得立马上生产。
只有生产可控了，那些声音才会消息。
现在 GraalVM 已经在快速发展了，spring native 也实现基本可用了，还是算比较成熟了。
这些技术出现了很多年了，还有什么 loom 类的。

---------------------------------------------------

@aper 不知道国外用的多不多，感觉周围人都是线下体验一下，但线下体验感觉 GraalVM 确实很厉害

---------------------------------------------------

个人觉得，项目还是有意义的，没有任何一件事能得到所有人的赞同与认可

---------------------------------------------------

启动 3 分钟还是太慢了吧，感觉不太合理

---------------------------------------------------

大项目, 不得滚动发布吗? 那启动时间不就没啥影响了吗?

小项目, 慢点就慢点吧.

不知我这么理解是否有误

---------------------------------------------------

使用蓝绿发布或者灰度发布不能解决线上问题么

---------------------------------------------------

spring 就算做了再逆天的优化也没法和 graal 的 aot 比啊..........

quarkus 即使使用了一堆插件, aot 启动时间也基本不超过 50 毫秒, 比 spring 的 jit 应用启动快太多了

```

2023-08-16 09:32:00,080 INFO  [io.quarkus] (main) vrp-client 1.0.0 native (powered by Quarkus 3.2.2.Final) started in 0.018s.

```

---------------------------------------------------

国内很多企业都是用 jdk8 的，优化一下还是有用的。
国外也不是都用 Graalvm,那个老外明显是口嗨。

快速启动在容器自动扩容的时候很有用，毕竟高峰期来了，你先启动了就能先把压力降下来。

---------------------------------------------------

@yazinnnn #9 quarkus 用起来怎么样？最近打算搞个新项目，一直对 quarkus 很有兴趣

---------------------------------------------------

有意义，我很烦 Spring 启动慢。另一个项目用 Python 开发了，人生苦短

---------------------------------------------------

😔我们发布在 k8s ，很多时候都是项目都起好了，但是健康检查还没有 ready 导致不能使用，或者就是容器启动很慢。六分钟确实有点长了，但我还见过把各种加载全都加在启动过程中耗时几小时的神仙项目

---------------------------------------------------

@lifespy 快跑, 都是坑, quarkus 群里天天骂街😂

---------------------------------------------------

有意义，但是没必要
小项目优化空间小，大项目确认了瓶颈也不敢动
spring 现在的启动速度已经挺好了，但是架不住依赖一堆烂七八糟的东西

---------------------------------------------------

@cbdyzj 依赖了一些富客户端，在启动时会拉数据到本地，这个耗时就出来了

---------------------------------------------------

如果项目或者库反射用的多那用 GraalVM 坑还是蛮多的

---------------------------------------------------

@yazinnnn #9 很好奇，应用如果引入了一些初始化耗时比较长的依赖，启动的速度还是这么快嘛？如果还是这么快，那么对应新项目使用 quarkus 或者 graal 很有必要呀

---------------------------------------------------

@aper 坐标苏州某和政府合作公司，服务于全国各个领域现场，我们的服务都是 quarkus graalvm 的

---------------------------------------------------

@chendy 是的，而且只要一引入，自己无法控制，只能看着应用启动时长慢慢一点点变长

---------------------------------------------------

当然有必要了，类似前端的 vite ，把 webpack 的冷启速度从一分钟干到秒级，对开发效率是多大的提升

---------------------------------------------------

@kaedeair 日常开发部署时等待的时间也很难受😂

---------------------------------------------------

@superchijinpeng 使用 quarkus graalvm 的限制多吗？对开发人员的要求是不是要更高一点呀？

---------------------------------------------------

大項目會上 HA 叢集(clusters)，可以依次或隨用停用伺服器進行版更.

小項目，停機一個上午/下午/晚上進行更新也沒事. (很多網遊/手遊、ERP 都是這個模式，也沒見玩家、員工跑光了)

綜上，不論大項目、小項目版更重啟時間都沒有追分奪秒的急迫性.

---------------------------------------------------

我只想说 大部分公司 java 开发根本不看这些

---------------------------------------------------

GraalVM 这东西还不到能大规模使用的地步，很多使用了反射的库和框架根本没法在这个 jvm 下使用。

而且还有一个问题，这东西启动是快啊，编译的贼慢怎么没人提，编译时间快赶上 C++了

---------------------------------------------------

@linyimin520812 #23 要求不高，社区活跃，文档全，加上 kotlin 效率高的不是一点半点，要说问题就是编译时间长，不过有 ci

---------------------------------------------------

@miaotaizi 线上出现故障回滚的时候，启动速度越快，回滚越快，损失就越小，而且故障级别是按照止血时间定级的，启动越快，故障级别可能就越低

---------------------------------------------------

@shyangs 线上出现故障回滚的时候，启动速度越快，回滚越快，损失就越小，而且故障级别是按照止血时间定级的，启动越快，故障级别可能就越低。启动速度快，日常开发效率、体感也相对会好很多

---------------------------------------------------

@abcbuzhiming 编译都在服务器上，也只有需要上生产才编译二进制，正常开发不需要编译二进制，其实没啥影响。

---------------------------------------------------

老外说了一大堆，其实重点只是最后一句：stop spamming

---------------------------------------------------

就一个问题：
假设部署的节点都不可用了，需要迁移到其他节点，多久启动意味着多久服务不可用。

---------------------------------------------------

@linyimin520812 如果写了对应依赖的 aot 扩展, 那么这些依赖初始化工作会在 build 期进行, 应用的启动时间和内存占用就会降低

---------------------------------------------------

还是挺支持这种优化的，但是就我自己而言，还是老咸鱼，觉得没必要。

既然我都用 Spring 全家桶了，就是来享受它的便利了，也就没那么在乎资源占用和启动速度了。

要是我一开始就很在意的话，就直接用 Golang 了。

---------------------------------------------------

@yazinnnn #33 这个有相关的介绍文档吗？没接触过这块

---------------------------------------------------

1 分钟内都可以接受，目前除了遇到政府项目需要启动 10 分钟左右，各种链接什么的初始化。一般项目不到 20 秒就起来了。再优化没有意义。

---------------------------------------------------

@xgfan 我感觉这不是 spamming ，因为并没有被版主移除😂

---------------------------------------------------

OP 你的优化是帮助一些现有的框架进行提升，这是没问题的，也是能解决当下问题的，只不过 GraalVM 是未来的趋势，可能像你说的一样，不适用现有的老项目，但是未来的新项目可以围绕 GraalVM 去设计，那么启动速度这块自然就快了，所以你跟评论者站的不是一个角度看待问题。没有关系，你继续优化也没有什么问题的

---------------------------------------------------

老外明显是口嗨+1 。
厂里之前用 springcloud 1.x 的时候启动速度感人。后来新开的项目换了 2.x 提升了不少。
但是随着业务发展引入的库越来越多，速度也开始慢起来了。
最终为了做 apm 引入了 java agent ，启动时间直接爆炸。

---------------------------------------------------

我认为启动时长、吃内存是 spring 或者 Java 的最大的痛点

---------------------------------------------------

@kaedeair 滚动发布这类对用户无感，但是对开发还是有感，你还是得等着确认每一个节点都 up 了，当然还是越快越好，我的理解是这样

---------------------------------------------------

当然有意义，很多人忽视这点。

比如你开发，启动一次节省 5 分钟，一天可以省很多时间，这不是价值是什么。

更不用说线上了，滚动升级一次，每个实例要 5 分钟才起来，大规模集群几千实例你算算又浪费多少时间。

MTTR 更是能直接看到收益的。

---------------------------------------------------

换 graalvm 也是优化方法的一种啊，并不冲突。

---------------------------------------------------

@Uyuhz #13

啥类型项目加载启动能花几小时？

太吓人了。

---------------------------------------------------

@linyimin520812 1. 肯定是有意义的 2. spring native image 文档 https://docs.spring.io/spring-boot/docs/current/reference/html/native-image.html#native-image.introducing-graalvm-native-images

---------------------------------------------------

我觉得很牛逼

---------------------------------------------------

不能秒开的都是糟糕的东西 实现的并不精美

---------------------------------------------------

借楼问一下，quarkus 的内存使用情况如何

---------------------------------------------------

优化个啥啊，用 .NET CORE.

---------------------------------------------------

个人认为没有必要, spring boot 启动如果很慢, 多半是引入了了一大堆无用的依赖, 把这些去掉就好了, 另外一个就是 jpa, 也是影响 spring boot 启动速度的一大因素.

---------------------------------------------------

@yazinnnn #14 朋友，请问群链接有吗？我想进去瞅瞅

---------------------------------------------------

公司曾经尝试使用 graalVM 。
在关于反射的各种逆天坑之后放弃了。。。

---------------------------------------------------

@lifespy 群超过 200 人了, 你可以先加我, 我拉你

echo YWFkcmVhbQo= |base64 -d

---------------------------------------------------

@linyimin520812 
https://quarkus.io/guides/writing-extensions
https://quarkus.io/guides/building-my-first-extension
https://quarkus.io/blog/solving-problems-with-extensions/
https://quarkus.io/blog/solving-problems-with-extensions-2/
https://quarkus.io/blog/solving-problems-with-custom-extensions/

---------------------------------------------------

@linyimin520812 我同时开俩机器, 直接通过负载均衡来做是不是就不用关心 启动速度了?

---------------------------------------------------

优化启动时间是没有意义的，觉得启动时间太长，那就不要用 spring 写了，框架就是这么工作的，再怎么优化也没有意义，项目本身需要保持正常的依赖，如果某些库在启动时做太多事情，那就考虑去掉或者拆分服务，如果部署服务花费太多时间，那应该把精力放在优化部署 pipeline ，通过蓝绿发布等手段自动化部署，k8s 本身就可以通过 Readiness Probe 在健康时再切换，那么优化启动时间就变得没有意义，省下来的时间干点别的不好嘛

---------------------------------------------------

@miaotaizi #55 感觉还是需要关注的，负载均衡下的机器提供的服务是一致的，如果线上出现故障要回滚，这时需要重新发布所有的机器才能保证服务回退到没有问题的版本，假设有两台机器，每台机器的启动时间是 5 分钟，那么故障会持续 10 分钟，而如果启动时间只有 1 分钟，那么故障只持续 2 分钟

---------------------------------------------------

@xiaocaiji111 对于没有重依赖的应用来说确实优化的意义不大

---------------------------------------------------

@abcbuzhiming #26 是的之前用过这玩意编译一个 springboot crud 项目编译那么长时间让我傻眼了

---------------------------------------------------

@runliuv 切换一门语言的成本太大了，而且作为普通开发决定不了使用什么语言和框架

---------------------------------------------------

@weijancc 很多时候依赖了其他团队的二方包，里面的一些初始化操作会比较耗时，应用启动时长会慢慢被拉长

---------------------------------------------------

非要我喷的话，我觉得“线上出现故障回滚的时候，启动速度越快，回滚越快，损失就越小”这个问题就不应该存在，一个正规的发版流程应该对这种事情做一些灰度或者直接从网关层面切换新/旧集群之类的策略来保证不会出现这种问题，如果有这种问题了，解决的应该是整个流程上的问题，而不是 spring 启动速度的问题。

当然了，这个想法我还是很喜欢的，不过 java+spring 这种技术组合感觉就不是那种有启动速度优化空间的组合...

---------------------------------------------------

GraalVM 编译出来启动非常快，但编译速度呢？

---------------------------------------------------

@Masoud2023 工作的这段时间也看过一些复盘，线上故障回滚的场景确实存在，还不少

---------------------------------------------------

@Masoud2023 我也非常同意正规发版流程的重要性

---------------------------------------------------

很有意义，更快的启动速度可以帮助服务更好地伸缩，从而节约成本。现在很多 Java 项目启动速度太慢，动辄几分钟，很难像 Node.js 、Golang 等项目那样使用弹性伸缩，高峰期根本来不及扩容。
GraalVM 确实很快，但它对反射、动态代理有太多限制，特别是老项目很难迁移到 GraalVM 。而且 GraalVM 的编译成本非常高，速度慢还吃资源。

---------------------------------------------------

请教一个问题，如果依赖的中间件使用了动态加载类，只能期望中间件主动适配 GraalVM 吗

---------------------------------------------------

启动速度挺重要的，会影响 CICD 的速度，从而降低研发效率。

---------------------------------------------------

@aper 我司的一个银行周边项目上了 GraalVM ，而且还上了 serverless ，就那边项目组的说法也没什么大问题

---------------------------------------------------

@BeautifulSoap 这个是新起的项目还是老项目升级的呀？

---------------------------------------------------

对了，lz 可以了解一下 aws lambda 提供的 SnapStart 这个功能。
因为 lambda 是 serverless 框架，从冷启动状态开启容器运行服务是常态，所以 lambda 上跑的 java 也会面临严重的启动缓慢的问题。aws 是从另一个完全不同的角度解决了 java 启动慢的问题（官方说快了 10 倍），可以参考。

---------------------------------------------------

因为 spring 本身就是一坨，在一坨上面雕花本身就很难受。但是应该很多场景和公式不得不再一坨屎上雕花

---------------------------------------------------

我们现在为了启动速度，把 cpu 和 memory limit 都拉高了 实际上启动完之后运行又压根用不到那么多 cpu 和 memory 不知道有什么优化的办法

---------------------------------------------------

非常有意义，超长的项目启动简直是浪费生命，你这么做就是 save life 了

---------------------------------------------------

3-6 秒应该还可以吧，懒得优化了

---------------------------------------------------

@xuanbg 这个控制的太好了，基本上和空项目启动的时间差不多了

---------------------------------------------------

@yazinnnn #9 spring 6 不是支持 aot 吗

---------------------------------------------------

以前看过 spring boot 的源代码：是扫描所有 class 文件，反射查看是否有指定的注解然后注册 bean 配置，jar 包越多扫描的文件就越多，启动就越慢，可以通过限定扫描 class path 范围来缩短扫描范围从而加快启动时间，但 spring boot 自身需要扫描的包本来就多；优化不是很明显，以前项目启动都快 2 分钟；彻底决定要放弃 java 代码配置 bean 的方式，或者禁止扫描和反射 class 方式。

以前使用 java spring 那套比较慢，开发也能忍受了。其实启动快有非常大的优势，后面切到 golang 技术栈上就体会到了。
比如在上云后的以下场景中
场景 1:  快速扩容场，程序启动快可以快速提供服务，减轻总体服务压力从而快速过度到平稳时期；比如在依赖 CPU 自动扩容的情况下，如果在计算周期（一般可能 30 秒或者 1 分钟）下能扩容的实例未及时提供服务，未有效减轻现有服务的压力（ CPU ），会继续超量扩容；如果扩容多了后续还会因为平摊到单个的 CPU 下降厉害，继续缩容实例下降，导致波动较长。
场景 2: crash 场景下能快速的恢复服务，特别是集群宕机迁移恢复，一般容易导致全部实例不可用，服务启动越快越好，可以有效减少停止服务时间。
场景 3: 实例较少的情况下优势越明显，停止服务的时间就会越短。很多时候服务因为成本原因，压力不大服务都是 2 台实例，如果 2 台实力同时 crash ，需要恢复的时间越短越好；如果只有一台 crash 。另外一台就处于危险期内（这个实力挂了就真停止服务了），这个时间也是越短越好的。

---------------------------------------------------

java 技术栈上 GraalVM 的 aot 解决启动时间慢有很大的优势，但是国内没有见过大厂分享成熟且大规模的应用的经验。另外 spring 体系下切到 graalvm aot 貌似还有很长的路要走。对于 native 优先的 quarks 框架国内用的就更少了。这块上跟 golang 这个 native 语言还有很大的差距。

---------------------------------------------------

如果用在 serverless 中还是有必要的

---------------------------------------------------

非常有意义。
我们有一个场景，点击按钮后，要立即编译并部署运行，返回可访问地址。这个时间越短越好，曾经花了很多资源在这里优化上。AOT 也是一个优化方向，事实上并不理想。除了代码上的适配调整外，AOT 更多的是把启动时间转移到了编译时间上，在我们这个场景上基本无效。

---------------------------------------------------

竟然这么多人讨论，v 站不是很多都看不起写 java 的吗 😂

---------------------------------------------------

spring 启动这么久? 没用过

---------------------------------------------------

很有意义，启动要几分钟，不少

---------------------------------------------------

意义不大。。除非是数量级的变化 才有辣么一点点用处。。

谁家服务器端天天闲着没事重启啊。。

---------------------------------------------------

非常有意义。
我们有一个场景，点击按钮后，要立即编译并部署运行，返回可访问地址。这个时间越短越好，曾经花了很多资源在这里优化上。AOT 也是一个优化方向，事实上并不理想。除了代码上的适配调整外，AOT 更多的是把启动时间转移到了编译时间上，在我们这个场景上基本无效。

---------------------------------------------------

竟然这么多人讨论，v 站不是很多都看不起写 java 的吗 😂

---------------------------------------------------

spring 启动这么久? 没用过

---------------------------------------------------

很有意义，启动要几分钟，不少

---------------------------------------------------

意义不大。。除非是数量级的变化 才有辣么一点点用处。。

谁家服务器端天天闲着没事重启啊。。

---------------------------------------------------

非常有意义。
我们有一个场景，点击按钮后，要立即编译并部署运行，返回可访问地址。这个时间越短越好，曾经花了很多资源在这里优化上。AOT 也是一个优化方向，事实上并不理想。除了代码上的适配调整外，AOT 更多的是把启动时间转移到了编译时间上，在我们这个场景上基本无效。

---------------------------------------------------

竟然这么多人讨论，v 站不是很多都看不起写 java 的吗 😂

---------------------------------------------------

spring 启动这么久? 没用过

---------------------------------------------------

很有意义，启动要几分钟，不少

---------------------------------------------------

意义不大。。除非是数量级的变化 才有辣么一点点用处。。

谁家服务器端天天闲着没事重启啊。。

---------------------------------------------------

非常有意义。
我们有一个场景，点击按钮后，要立即编译并部署运行，返回可访问地址。这个时间越短越好，曾经花了很多资源在这里优化上。AOT 也是一个优化方向，事实上并不理想。除了代码上的适配调整外，AOT 更多的是把启动时间转移到了编译时间上，在我们这个场景上基本无效。

---------------------------------------------------

竟然这么多人讨论，v 站不是很多都看不起写 java 的吗 😂

---------------------------------------------------

spring 启动这么久? 没用过

---------------------------------------------------

很有意义，启动要几分钟，不少

---------------------------------------------------

意义不大。。除非是数量级的变化 才有辣么一点点用处。。

谁家服务器端天天闲着没事重启啊。。

---------------------------------------------------

非常有意义。
我们有一个场景，点击按钮后，要立即编译并部署运行，返回可访问地址。这个时间越短越好，曾经花了很多资源在这里优化上。AOT 也是一个优化方向，事实上并不理想。除了代码上的适配调整外，AOT 更多的是把启动时间转移到了编译时间上，在我们这个场景上基本无效。

---------------------------------------------------

竟然这么多人讨论，v 站不是很多都看不起写 java 的吗 😂

---------------------------------------------------

spring 启动这么久? 没用过

---------------------------------------------------

很有意义，启动要几分钟，不少

---------------------------------------------------

意义不大。。除非是数量级的变化 才有辣么一点点用处。。

谁家服务器端天天闲着没事重启啊。。

---------------------------------------------------

非常有意义。
我们有一个场景，点击按钮后，要立即编译并部署运行，返回可访问地址。这个时间越短越好，曾经花了很多资源在这里优化上。AOT 也是一个优化方向，事实上并不理想。除了代码上的适配调整外，AOT 更多的是把启动时间转移到了编译时间上，在我们这个场景上基本无效。

---------------------------------------------------

竟然这么多人讨论，v 站不是很多都看不起写 java 的吗 😂

---------------------------------------------------

spring 启动这么久? 没用过

---------------------------------------------------

很有意义，启动要几分钟，不少

---------------------------------------------------

意义不大。。除非是数量级的变化 才有辣么一点点用处。。

谁家服务器端天天闲着没事重启啊。。

