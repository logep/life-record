----------------------------------------
----------------------------------------
#  腾讯低代码平台正式开源！可拖拽生成手机、PC等项目！接私活福利啊！

小金  [ Github掘金计划 ](javascript:void\(0\);)

**Github掘金计划** ![]()

微信号 GithubStar

功能介绍 用心发掘 Github 和 Gitee 上优质的开源项目。

____

_2022-05-16 12:43_ _发表于 湖北_

收录于合集

腾讯低代码平台正式开源！这不是降低接私活的成本吗？可拖拽生成手机、PC等项目！

  * 基于可视化编辑器的页面生产流程
  * tmagic-editor 提供了什么
  * 使用 tmagic-editor 的业务需要做什么
  * tmagic-editor 能力项

腾讯 tmagic-editor 是一个所见即所得的页面可视化编辑器， **实现零代码/低代码生成页面** ， 可以快速搭建可视化页面生产平台，让
**非技术人员可以通过拖拽和配置，自助生成 H5 页面、PC 页面、TV 页面，大大降低页面生产成本** 。

以下是腾讯视频会员业务基于 tmagic-editor 搭建的可视化页面搭建平台示意图。tmagic-editor
已经用于腾讯视频会员、爱玩游戏、云视听极光、腾讯会议等十几个腾讯业务，每月生产和发布数百个页面。

![图片](https://mmbiz.qpic.cn/mmbiz_png/z40lCFUAHpn98fsicdiaPVsWftmWmicX4ibrhwVgyjzRibMvXz7ib0OQEU6icicK8jVr7Gsmd41CB9EIAbNKVSmcjhKj3g/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

### 基于可视化编辑器的页面生产流程

 **一、物料开发**

主要是指业务组件，比如图片组件、抽奖组件、登录插件等。tmagic-editor 本身并不提供业务组件，业务组件由使用 tmagic-editor
的业务，根据自己的业务需求去自行开发。业务组件一次开发，在多个页面反复使用，业务组件应该提供一些配置选项，保证灵活性，满足不同页面使用该组件时的定制需求。业务组件可以用不同的前端框架实现，如
vue2、vue3、react。

 **二、编排**

这里指通过对组件的拖拽和配置，完成页面编辑，主要由非技术人员完成。

 **三、保存与发布**

这个环节在技术实现上，分为生成 DSL、构建、部署。生成 DSL：编辑器和生成的页面之间，通过 DSL 解耦。编辑器上配置页面，得到的产物是一个序列化 js
对象的页面描述文件，这个对象采用 js schema 描述，描述页面的基本信息、包含的组件信息、以及组件间逻辑。构建：构建模块基于 runtime
代码，对组件进行打包构建，生成 html、js、css 文件。构建环节使用的 runtime 可以根据业务的需要，选择不同的前端框架实现，tmagic-
editor 默认提供了 vue2、vue3、react 三种 runtime。部署：将前面环节生成的 html、js、css、js schema
描述文件，部署到业务自己的服务器上。

### tmagic-editor 提供了什么

 **可视化编辑器**

![图片](https://mmbiz.qpic.cn/mmbiz_png/z40lCFUAHpn98fsicdiaPVsWftmWmicX4ibrviaAQK5yaST16HQ3h6WxGYhyF7zEuWvLctyYv7auURpnj1DJVn1B11g/640?wx_fmt=png)

如上图所示，就是 tmagic-editor 可视化编辑器，tmagic-editor 基于 vue3
实现。包括左侧侧边栏、组件列表展示、已选组件的组件树、中间的页面拖拽的画布区域（也叫模拟器）、右侧表单配置区域、正中间上方的画布控制区域（放大缩小、网格线显隐）、预览、保存、查看源码（js
schema 描述的 js 对象）、底部区域的页面添加与删除。编辑器具有扩展功能，业务可以根据需要在侧边栏和顶部栏增加版本管理、发布等功能。

 **runtime**

runtime 的概念，是理解 tmagic-editor 页面运行的重要概念，runtime 是承载 tmagic-editor
页面的运行环境。可视化页面需要在 tmagic-editor
编辑器中搭建、渲染，通过模拟器所见即所得。搭建完成后，保存配置并发布，然后渲染成用户访问的真实页面。其中涉及到两个不同的
runtime：编辑器中的模拟器，终端打开真实页面。

由于 tmagic-editor 在编辑器中的模拟器是通过 iframe 渲染的，和 tmagic-editor 平台本身可以做到框架解耦，所以
runtime 也可以用不同框架开发。目前 tmagic-editor 提供了 vue2/vue3 和 react 的 runtime 。

各个 runtime 的作用除了作为不同场景下的渲染环境，同时也是不同环境的打包构建载体。tmagic-editor 示例代码中的打包就是基于
runtime 进行的。

 **管理端 demo**

编辑器可以对一个页面进行编辑、配置、发布，我们还需要一个管理端来对页面列表进行管理。我们提供了一个管理端
demo，方便业务快速搭建起一个完整的可视化搭建平台。管理端提供了如下能力：

  * 页面列表展示，查询
  * 页面创建，复制
  * 页面编辑以及 AB TEST 配置能力
  * 页面发布以及发布状态查看和管理
  * 使用 tmagic-editor 的业务需要做什么

 **开发业务组件**

tmagic-editor 并不提供业务组件，业务需要根据自己的业务场景，开发相应的业务组件。比如抽奖组件、视频播放组件等。tmagic-editor
的通用性设计，使得业务方可以使用不同的前端框架去开发组件。tmagic-editor 官方已经提供了 vue2/vue3、react 的
runtime，意味着业务可以直接使用这些框架开发组件，如果业务想用其它框架开发组件，则需要开发相应的 runtime。

 **开发业务插件（可选）**

插件的功能是作为页面逻辑行为的一种补充方式。一般不显式的在模拟器中被渲染出具体内容（除非插件中会生成组件并插入页面），通常我们会用插件实现类似登录，页面环境判断，请求拦截器等功能。跟组件一样，可以用不同前端框架实现。

 **部署可视化搭建服务**

tmagic-editor 提供的是开源代码，并不是一个 saas 服务，因此业务需要自己部署可视化搭建平台的服务。

 **构建和发布页面**

业务需要管理自己的组件库，在发布环节基于拿到的页面 js Schema 描述文件，基于 runtime
进行打包构建，并把打包构建的产物部署到自己的服务器/CDN。

 **其它定制需求**

如果对编辑器有一些扩展需求，编辑器已经预留了相应的扩展能力，业务可以开发相应扩展功能。tmagic-editor 提供了 vue2/vue3、react 的
runtime，业务可以修改 runtime，或者开发其它前端框架的 runtime。

 **tmagic-editor 能力项**

![图片](https://mmbiz.qpic.cn/mmbiz_png/z40lCFUAHpn98fsicdiaPVsWftmWmicX4ibrxuZUFXtwyBNRibRibwMyIlvvIbFIMQOELorX1KYymOGdpgblXdy9nQBg/640?wx_fmt=png)

###  如何了解 tmagic-editor

>   * 开源地址：github.com/Tencent/tmagic-editor
>   * 在线文档：tencent.github.io/tmagic-editor/docs/
>   * 在线体验：tencent.github.io/tmagic-editor/playground/index.html
>

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

