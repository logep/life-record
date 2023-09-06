----------------------------------------
----------------------------------------
#  ChatGPT 杀疯了！！

小金  [ Github掘金计划 ](javascript:void\(0\);)

**Github掘金计划** ![]()

微信号 GithubStar

功能介绍 用心发掘 Github 和 Gitee 上优质的开源项目。

____

_2022-12-06 02:33_ _发表于 湖北_

收录于合集

出品 | OSC开源社区（ID：oschina2013)  
人工智能研究公司 OpenAI 上周正式推出
ChatGPT，这是一种基于对话的人工智能聊天机器人模型，它能够理解自然语言并以自然语言的方式做出回应。ChatGPT 基于 GPT-3.5
模型微调而成，以语言服务模型 InstructGPT 为基础，通过人类回馈增强学习训练模型
RLHF，不过数据设置略有不同。它以对话方式进行交互，既能够做到回答问题，也能承认错误、质疑不正确的前提以及拒绝不恰当的请求，能以更贴近一般人的对话方式与使用者互动。![图片](https://mmbiz.qpic.cn/mmbiz_png/dkwuWwLoRKicHZMrrmPjysb58MBkUWVGepOkzZ4BKfG8oaaibiaUD9kz29ZzkF9YDuK1MKdznicFPIeliaDCAJCZm3g/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)这几天许多用户都展示了与
ChatGPT 对话的有趣内容，它宛如化身为地球
“最强懂哥”，各种问题轻松应答，让它帮忙写程序，不仅提供了可用的代码，更是把实现思路也一并写了出来。![图片](https://mmbiz.qpic.cn/mmbiz_png/dkwuWwLoRKicHZMrrmPjysb58MBkUWVGeZab63w43jmn5MwW3YjkYiaZ5Ra0aeR2bicVzdnOC1JicwetCpvG1nfIwQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)更别说开发者如何应付老板这种小儿科的问题了：![图片](https://mmbiz.qpic.cn/mmbiz_png/dkwuWwLoRKicHZMrrmPjysb58MBkUWVGeMmwuzUASl7b74heO9Rzc6qw6kJniaFq9ZpnVNXX1B9D3wpVd7hf8ofw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

* * *

下面介绍一些 ChatGPT 的 “极客” 玩法。

  * 在 ChatGPT 中构建虚拟机

这名玩家把 ChatGPT 训练成了一台 Virtual Machine，可以运行各种 Linux 指令，甚至可以使用 curl 来让 ChatGPT
和自己做交互。首先是让 ChatGPT “扮演” Linux
终端：![图片](https://mmbiz.qpic.cn/mmbiz_png/dkwuWwLoRKicHZMrrmPjysb58MBkUWVGe4HiaGXiao4HIXJ20ECWIR9WSe3V70wSza8LPn5mWyXgcgzHHmd8Y7JGg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)执行
ls
命令，以及新建文件和读取文件：![图片](https://mmbiz.qpic.cn/mmbiz_png/dkwuWwLoRKicHZMrrmPjysb58MBkUWVGeic5x0ILHVIx4HNnmJvH0Zibnh32UDyNEVMx6FJwd2gUGva0tI5VqcVFg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)![图片](https://mmbiz.qpic.cn/mmbiz_png/dkwuWwLoRKicHZMrrmPjysb58MBkUWVGe18S303DmSMdgDlKicNsgvpnJHDbcVjX7loQFbXIV0WaCwpGLc8p5cLg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)在这之后，这名用户推测
ChatGPT 似乎懂文件系统的工作原理、文件存储及检索方式。下面直接快进到用这个虚拟机运行 docker 文件 —— 首先制作一个 docker
文件，然后运行它：![图片](https://mmbiz.qpic.cn/mmbiz_png/dkwuWwLoRKicHZMrrmPjysb58MBkUWVGeZdWsv3HyLvWXRtsEObaiaticoYXVq27oJ4yicd5QIR2r3cibhRbrrVgTxg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)可以看到，ChatGPT
成功扮演了一个 “虚拟机” 的角色。

  * 在 ChatGPT 中构建编程语言解释器

这名开发者使用 ChatGPT
为自己开发的编程语言构建了一个语言解释器：![图片](https://mmbiz.qpic.cn/mmbiz_png/dkwuWwLoRKicHZMrrmPjysb58MBkUWVGewXGRjqlVCm5AzAaGYPBcHqq7uK52IREPzZ7QNrjO8I7iaMKcr57JicaA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)并成功编写了解决作者问题的应用程序：![图片](https://mmbiz.qpic.cn/mmbiz_png/dkwuWwLoRKicHZMrrmPjysb58MBkUWVGefkNyXlgojP0QYsFUrWVIc31LB7tQhibFv7ewRuBEn71DzIaZYXdCBGQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)接着这名作者通过提供参数，让
ChatGPT
对自己编写的这段程序进行了验证，同样没问题：![图片](https://mmbiz.qpic.cn/mmbiz_png/dkwuWwLoRKicHZMrrmPjysb58MBkUWVGeNEAOg1LJeTTzgibicvbekb9KVNp34tib89p71ok83iae67HiciaEUnQVYMiaQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  * 在 ChatGPT 中实现新的编程语言

这名玩家在 ChatGPT 中实现了一门新的编程语言：GPTLang，并用这个语言写了一个排序算法。首先告诉 ChatGPT
正在实现一门新的编程语言，能不能给一些 idea 或者建议，ChatGPT 给出了 GPTLang
的一些基本特性。![图片](https://mmbiz.qpic.cn/mmbiz_png/dkwuWwLoRKicHZMrrmPjysb58MBkUWVGe6GOuVPqPaHxoEdbEsLRjNZ2BsiaYPHGKnq30HTo4qVNZ5X7TvEffZWw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)定义编译器命令为
`gptlc`，并且可以使用 `gptlc file.gpt` 来进行编译。然后让 ChatGPT
给出一些常用的编译选项：![图片](https://mmbiz.qpic.cn/mmbiz_png/dkwuWwLoRKicHZMrrmPjysb58MBkUWVGef2Z1ArPibeLMeQVqru6Q4uDaibrwp2IlMR49HJPBKAsOHno952sUme9Q/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)下图是最终的效果：让
ChatGPT 用 GPTLang
写了一个选择排序算法，并在命令行编译运行。![图片](https://mmbiz.qpic.cn/mmbiz_png/dkwuWwLoRKicHZMrrmPjysb58MBkUWVGeSqhicDiaHiacnuvIRdmsIXia7kTorvA0sJf15mkRTRJk024wTLrxYI8oJA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)对于
ChatGPT 的这些 “整活” 案例，欢迎大家在评论区发表自己的看法。相关链接：https://openai.com/blog/chatgpt/

  

## 推荐

用心发掘优质开源项目，欢迎关注，欢迎点赞分享！

历史优质开源项目推荐地址：[Github
掘金计划](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzIwNDgzMzI3Mg==&action=getalbum&album_id=1571213952619954180#wechat_redirect)。

  * [计算机基础](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1635325633234780161&__biz=MzIwNDgzMzI3Mg==#wechat_redirect)：精选计算机基础（操作系统、计算机网络、算法、数据结构）相关的开源项目。

  * [神器工具](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzIwNDgzMzI3Mg==&action=getalbum&album_id=1692140336665378820#wechat_redirect) : 一些好用的插件、软件、网站。

  * [程序人生](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzIwNDgzMzI3Mg==&action=getalbum&album_id=2084343476975878144#wechat_redirect)：编程经历、英语学习、延寿指南。

  * [项目实战](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1632590550748938241&__biz=MzIwNDgzMzI3Mg==#wechat_redirect) ：精选实战类型的开源项目。

预览时标签不可点

