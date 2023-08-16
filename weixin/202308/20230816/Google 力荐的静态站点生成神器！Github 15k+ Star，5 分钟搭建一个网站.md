----------------------------------------
----------------------------------------
#  Google 力荐的静态站点生成神器！Github 15k+ Star，5 分钟搭建一个网站

[ Github掘金计划 ](javascript:void\(0\);)

**Github掘金计划** ![]()

微信号 GithubStar

功能介绍 用心发掘 Github 和 Gitee 上优质的开源项目。

____

_2022-08-12 11:14_ _发表于 湖北_

收录于合集 #Github掘金计划 81个

Astro 是一款现代化的轻量级静态站点生成器，具有出众的开发者体验 (Developer Experience)。虽然 Astro 从诞生到今天只有 16
个月，但其仓库的 star 数已超过 15000，并且在全球拥有超过 30000 名用户。

![图片](https://mmbiz.qpic.cn/mmbiz_png/BcyAypujBVaMVs0LKcTCE2icfrialzic7RtTia9QpLPnic5koYEjaVGd4zKuAmcic8zPrZEDfhmoiad2XruEukmu5rh3A/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

目前，Astro 文档已被翻译成多种不同的语言 —— 包括中文。

![图片](https://mmbiz.qpic.cn/mmbiz_png/BcyAypujBVaMVs0LKcTCE2icfrialzic7RtVNvkjUGTmibicC1K6icOaibsNQ9lqDuK0WXQ696NMUpTtGKOoHMeZyG1iaQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  
效果预览：

![图片](https://mmbiz.qpic.cn/mmbiz_png/BcyAypujBVaMVs0LKcTCE2icfrialzic7Rt26Rmiaaia63JkjYONdlTJ3BXWHliaXkeicJr0GkgdPPA7MT1lFHziaL1uHg/640?wx_fmt=png)

![图片](https://mmbiz.qpic.cn/mmbiz_png/BcyAypujBVaMVs0LKcTCE2icfrialzic7RtTic24XqF26FDiaPpoUPj3fu1uH6HuicwjFDj1GRMKPeyZribHiarRWvfnxg/640?wx_fmt=png)

  
近日，Astro 发布了 1.0 正式版。团队称 1.0 意味着 API 已达到稳定状态，并可用于生产环境。部分新特性：

  * 图像优化：引入新的 `<Image />` 和 `<Picture />` 组件

  * 支持 MDX：在 Markdown 中混合编写 UI 组件的标准语法

  * 支持 SSR：SSR 现已达到稳定状态，可用于生产环境

  * Vite 3.0：升级 Astro 使用的构建引擎 Vite

![图片](https://mmbiz.qpic.cn/mmbiz_png/dkwuWwLoRKicsK2bdE1zw1E1lb34TzER0v9OWrf1JokT94d4EghokSqLKicQWxPnEzP9ibZYpmm1OQzf38unkmjUA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)Astro
采用了独特的 **Island 组件架构** ，团队称这是一种用于构建更快网站的新型 Web 架构。与单页应用程序不同，Astro 的组件不会被捆绑到一个
JavaScript
包中。相反，每个组件都被视为一个独立的小型应用程序，与所有其他组件隔离存在。![图片](https://mmbiz.qpic.cn/mmbiz_png/dkwuWwLoRKicsK2bdE1zw1E1lb34TzER0etIlX5AhuyBzD6ndPiaa1hgcA6EXicOMNdicibvwVnibe6tI3ia77YbIscdA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)Astro
其他特性：

  * 自带组件框架：Astro 为 React、Vue、Svelte 和 Tailwind CSS 等前端工具提供一级支持。通过 `astro add` 命令即可添加使  

  * 支持静态页面生成 (SSG) 和服务器端渲染 (SSR)，可以按需渲染内容

  * 开发者体验出众：Astro 支持所有喜爱的开发者工具和功能，如 TypeScript、NPM 包、Scoped CSS、CSS Modules、Sass、Tailwind、Markdown、MDX

  * 按需组件：Astro 支持通过水化组件按需加载 JavaScript。因此，如果该特定组件不可见，它不会加载相关的 JavaScript

  * 100% 静态 HTML，无 JavaScript 运行时环境：当构建 Astro 时，它将删除所有 JavaScript，并将整个页面渲染为静态 HTML 页面

  * SEO 友好：使用 Astro，可以启用自动网站地图、RSS 订阅、分页和收藏

  * 基于文件的路由：就像 Next.js 一样，Astro 有一个基于文件的路由机制，所有在 /pages 中的东西 Astro 都会将目录转化为路由

借发布 1.0 的机会，开发团队还对官网 astro.build
进行了重新设计：![图片](https://mmbiz.qpic.cn/mmbiz_png/dkwuWwLoRKicsK2bdE1zw1E1lb34TzER0sicy6TU7GKnMe4jZItwy0Qn4RWWRr0strj8gcOvtiazpcXcxnfOqXNGQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)最后团队表示，Astro
从首次推出到现在发布 1.0 正式版，已经发生了许多变化。它不仅仅只是静态站点生成器，开发者可以在任何流行的托管平台上将 Astro 构建为动态的、支持
SSR 的服务器。项目地址：https://github.com/withastro/astro 。你可以通过官方提供的在线运行环境进行体验：

![图片](https://mmbiz.qpic.cn/mmbiz_png/BcyAypujBVaMVs0LKcTCE2icfrialzic7Rt5Lr3sics2eTLFROhmXXGsKWOSksga17vYvmneNm5EpREucta9bHUjsg/640?wx_fmt=png)

  
地址：https://astro.new/ 。  

## 推荐

  * • [Github 掘金计划](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzIwNDgzMzI3Mg==&action=getalbum&album_id=1571213952619954180#wechat_redirect "Github 掘金计划") ：历史优质原创文章汇总！

  * • [程序人生](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzIwNDgzMzI3Mg==&action=getalbum&album_id=2084343476975878144#wechat_redirect "程序人生")：编程经历、英语学习、延寿指南。

  * • [神器工具](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzIwNDgzMzI3Mg==&action=getalbum&album_id=1692140336665378820#wechat_redirect "神器工具") : 一些好用的插件、软件、网站。

  * • [编程基础](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1632585323454971905&__biz=MzIwNDgzMzI3Mg==#wechat_redirect "编程基础") ：精选编程基础如学习路线、编程语言相关的开源项目。

  * • [计算机基础](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1635325633234780161&__biz=MzIwNDgzMzI3Mg==#wechat_redirect "计算机基础")：精选计算机基础（操作系统、计算机网络、算法、数据结构）相关的开源项目。

  * • [技术面试](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1632589980491366403&__biz=MzIwNDgzMzI3Mg==#wechat_redirect "技术面试") ：精选技术面试相关的开源项目。

  * • [项目实战](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1632590550748938241&__biz=MzIwNDgzMzI3Mg==#wechat_redirect "项目实战") ：精选实战类型的开源项目。

用心发掘 Github 和 Gitee 上优质的开源项目。

欢迎关注！欢迎点赞分享！

预览时标签不可点

收录于合集 #Github掘金计划

81个

上一篇全球最火的程序员学习路线！没有之一！前端、后端、Java、Python ... 都有下一篇换掉 Typora，自己搭建一个 Web 在线笔记库

