----------------------------------------
----------------------------------------
#  免登录免注册！ChatGPT中文版VS Code插件来啦！！

[ Github掘金计划 ](javascript:void\(0\);)

**Github掘金计划** ![]()

微信号 GithubStar

功能介绍 用心发掘 Github 和 Gitee 上优质的开源项目。

____

_2022-12-14 11:26_ _发表于 湖北_

收录于合集

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/BcyAypujBVaJOjZopWC7VWgibu3sz7e4CveIYLBZDX3YzwUkR4uEFvcnZRrJHtX6Nly58562iaDFvPyO4fNzE9gw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)********来源：机器之心、****
** **编辑：蛋酱、小舟********

 ** ******ChatGPT 的 Debug 功能，有人应用化了。 ChatGPT
这几天可谓是风头无两。作为一个问答语言模型，它最大的优点就是可以回答与编程相关的问题，甚至回复一段代码。

![图片](https://mmbiz.qpic.cn/mmbiz_png/KmXPKA19gW9hRWGiayBcduGMUmW14mpJhticrGfkXTtwNugUfs8oFnr0TBQqau2p9dCjiaJuWM46N8p5wkXSn1JDQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

尽管有人指出 ChatGPT 生成的代码有错误，但程序员们还是对它写代码、找 bug 的功能很感兴趣，有人还给 VScode 构建了一个 ChatGPT
插件。一直以来，VS Code 都是开发者心目中的生产力神器，它免费、开源且跨平台，被称为最好用的 IDE。  

![图片](https://mmbiz.qpic.cn/mmbiz_png/KmXPKA19gW9hRWGiayBcduGMUmW14mpJhAf54hXYE1LhibXUv9Gd92fbZOTomOMSI91FfIE8maE1qicqnPQA3RwkA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

把 VS Code 和 ChatGPT 结合使用，用户将获得来自 AI 的编程指导，包括代码解释、找 bug 等功能。  
ChatGPT 中文版 VSCode 插件上线仅几天，已有 4 万多次下载，收到广泛好评。  

![图片](https://mmbiz.qpic.cn/mmbiz_png/KmXPKA19gW9hRWGiayBcduGMUmW14mpJhB01nP8EmYONKgpKaGWluo6Fbj4oeUUbia0sD3R5X6RNpUrz8nbXfZ3g/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  

 **如何使用**  
鉴于 ChatGPT 未面向中国大陆开放服务，因此很多大陆网友无法使用自己的手机号码注册 OpenAI 账号。但作者表示，目前 VSCode ChatGPT
的免登录、免注册、免代理版本已经上线，并在 VSCode 的插件商店提供了更新。  
开发者只需简单安装即可使用插件，然后可以通过「ChatGPT: 切换国内 / 国外模式命令」将当前模式切换到国内，实现免登录、免注册、免代理。  

![图片](https://mmbiz.qpic.cn/mmbiz_png/KmXPKA19gW9hRWGiayBcduGMUmW14mpJhcJrxQaTGMjMiagDQVD6cdqDhS9pgZYATiaibSkwPIJB1ibibNIBhE5WZNQw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

作者也提到， JetBrains 家族的 IDE 的插件正在开发中，而其他 IDE 的插件恐怕短时间内还不能面世。  
具体的使用方法，作者在下载界面给出了操作指南：  
首先，在编辑器中右键触发菜单。  

![图片](https://mmbiz.qpic.cn/mmbiz_png/KmXPKA19gW9hRWGiayBcduGMUmW14mpJhefelib6e60tibQOLXBzqTKDiaVoR3XwXNIyPA7icxnbl6gnI5T4KiayegEw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

或者快捷键打开命令面板(ctrl+shift+p 或者 command+shift+p)，输入 "ChatGPT"。

![图片](https://mmbiz.qpic.cn/mmbiz_png/KmXPKA19gW9hRWGiayBcduGMUmW14mpJhhaUQ6LCiaBiadSPFSRtXjG5wibUhE0tM4B68x0CVJGn9bK5yohFdB0Jgg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

目前支持的代码功能包括：  

  * ChatGPT: 请输入问题：直接对 ChatGPT 提问
  * ChatGPT: 添加测试代码：为当前选中的代码，或者当前文件添加测试代码
  * ChatGPT: 代码为什么有问题(需要同时选中报错)：询问代码出现的问题，需要将报错也一起选中
  * ChatGPT: 优化这部分代码：对当前选中的代码，或者当前文件，进行优化或者重构
  * ChatGPT: 解释这部分代码：对当前选中的代码，或者当前文件，进行解释
  * ChatGPT: 执行自定义命令 1：添加一个对选中代码，或者当前文件执行的自定义命令 1，添加后可以直接执行
  * ChatGPT: 执行自定义命令 2：添加一个对选中代码，或者当前文件执行的自定义命令 2，添加后可以直接执行

  
执行了一个命令之后，侧边栏会弹出一个交互窗口：  

  * 后续所有的问题、回答、异常。都会在这个窗口中显示。
  * 可以在交互窗口的底部输入框中，直接输入问题，询问 ChatGPT
  * 也可以执行前面的命令，对代码进行询问。

  

![图片](https://mmbiz.qpic.cn/mmbiz_png/KmXPKA19gW9hRWGiayBcduGMUmW14mpJh5vegjxl3wVnqEHCnR145f9PqicUAOVnMiaF0YzfgtBiaf38oPOwficCgZg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

询问过后，请等待一会儿，交互窗口中会自动出现结果。  
查询成功时，如果结果中包含代码。那么，我们可以通过: "复制代码"、”插入 “、” 新建“ 这三个按钮来获取代码。  

  * "复制代码"：顾名思义，将代码复制到剪切板中
  * "插入"：将当前代码，插入到当前的文件中。
  * "新建"：将当前代码，插入到一个新的文件中。

  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/KmXPKA19gW9hRWGiayBcduGMUmW14mpJh63hSa46iaYWeN2yh4V3FwRUZWJKlB2bXnY6AvicPIAia61S58uXTNQfyg/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

查询失败时：会出现自助解决方案，请按照方案进行操作。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/KmXPKA19gW9hRWGiayBcduGMUmW14mpJhQx58QyoBicJCxOPhUFrg9M5iaiaDHQ0DrYYhlObadR8NribPxptDCuvWPw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

 **用户评价**  
如果说此前 Copilot 是让开发者面向 GitHub 编程，那开发者现在可以开始习惯面向 ChatGPT 编程了。  
于是有人说了：「从面向 github 编程又进一步，这下复制粘贴都不用搜索了，我也更废物了。」  

![图片](https://mmbiz.qpic.cn/mmbiz_png/KmXPKA19gW9hRWGiayBcduGMUmW14mpJhoTgRicU4Gz5EzcSuFxFwgQ59zribNibIj9ZFynKCVhEdwN44TjJtdia7Zw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

从今以后，Copilot 和 ChatGPT 要算作程序员的「左膀右臂」了。

![图片](https://mmbiz.qpic.cn/mmbiz_png/KmXPKA19gW9hRWGiayBcduGMUmW14mpJhcMcAnPMk9EIiaxlszZjhqehXtkbfymicdiaFhGVSicQLK9x8eW802zwRXQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

有趣的是，这个 ChatGPT 中文版 VSCode 插件就是作者在 ChatGPT 的帮助下写出来的。  

![图片](https://mmbiz.qpic.cn/mmbiz_png/KmXPKA19gW9hRWGiayBcduGMUmW14mpJhbnUcDFpRdT5IFkoMmKcdHkzt16cqEveCdT2lceQEEJShSnDicH0o5mw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

另有开发者发现，虽然 ChatGPT 中文版还不算完美，但它有一大妙用是——自动添加注释：

![图片](https://mmbiz.qpic.cn/mmbiz_png/KmXPKA19gW9hRWGiayBcduGMUmW14mpJh7AL1Hfueve0dsku0BzLUPXWh9erIUMYSM5qO89tsibXPVeicWVFNeeXw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

就算写代码的人已经忘了注释想表达什么，至少 ChatGPT 还能记得：  

![图片](https://mmbiz.qpic.cn/mmbiz_png/KmXPKA19gW9hRWGiayBcduGMUmW14mpJh2CS4w1iatiaIRGia7LjialXNeT9SOwshgG8397eUp54JC6dwKD846gnp9g/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  
甚至，已经有人开始用它来写作业了？

![图片](https://mmbiz.qpic.cn/mmbiz_png/KmXPKA19gW9hRWGiayBcduGMUmW14mpJhPJOksZsU2rPa4DGicA58PYxzvBMiaKsyUHwBkxk3ic9JibK1nUALiaf7lIg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  
你要试试吗？

  

## 推荐

用心发掘优质开源项目，欢迎关注，欢迎点赞分享！

历史优质开源项目推荐地址：[Github
掘金计划](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzIwNDgzMzI3Mg==&action=getalbum&album_id=1571213952619954180#wechat_redirect)。

  * [计算机基础](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1635325633234780161&__biz=MzIwNDgzMzI3Mg==#wechat_redirect)：精选计算机基础（操作系统、计算机网络、算法、数据结构）相关的开源项目。

  * [神器工具](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzIwNDgzMzI3Mg==&action=getalbum&album_id=1692140336665378820#wechat_redirect) : 一些好用的插件、软件、网站。

  * [程序人生](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzIwNDgzMzI3Mg==&action=getalbum&album_id=2084343476975878144#wechat_redirect)：编程经历、英语学习、延寿指南。

  * [项目实战](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1632590550748938241&__biz=MzIwNDgzMzI3Mg==#wechat_redirect) ：精选实战类型的开源项目。

预览时标签不可点

