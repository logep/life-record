### B 站那种 @一下 就给你总结视频内容的账号是咋做的？

就是你只需要在 b 站评论区下面 @xxx

就会有个机器人，在这个视频下面总结这个视频的内容

看起来是 ai 生成的，但是很好奇后面的技术流转，想做一个玩玩

所以整个流程是在服务器后台挂一个程序，然后注册一个 b 站账号

1 、实时监控 b 站账号的艾特提醒
2 、如果有艾特，就提取艾特我的那个视频
3 、ai 生成视频总结，发送到评论区

看起来好像也不难？主要是第 3 步，如何用 ai 生成视频总结？ chatgpt 好像没有这个功能啊，而且一个账号一直在 b 站发评论，不会被限制吗？

---------------------------------------------------

没了解过。
我的理解是提取并总结字幕吧。现在 AI 主要还是文本这块。

---------------------------------------------------

@amon 不一定，目前 B 站自己都已经用上 AI 语音转字幕了，所以那个估计可能也是自己处理语音再总结。

---------------------------------------------------

其实半年前还是多久不记得了，B 站几乎所有的新上传视频都附带 AI 自动生成字幕，默认是关闭的，所以只要抓取字幕进行总结即可；
后来 B 站屏蔽了未登录用户抓取 AI 字幕的功能，不过这并不能难倒爬虫。
现在新上传视频都不会附带 AI 字幕了，大概这时开始走语音识别的路线了。

---------------------------------------------------

“ chatgpt 好像没有这个功能啊”
GPT 本身只是个语言模型，你给它视频内容文本、要求它总结，那它自然就能总结。

---------------------------------------------------

正常流程应该是类似 whisper 提取语音识别信息然后再让 gpt 总结，但是 whisper 使用需要 gpu 训练，可能是直接拿的 B 站字幕

---------------------------------------------------

at 一个 bot 让他总结白噪音视频看看？

---------------------------------------------------

bilibiliapi+ai 字幕+gpt3.5 ，成本几乎为零

---------------------------------------------------

就是总结文本，B 站有字幕接口

---------------------------------------------------

简单
抓取字幕，然后调用 ChatGPT 总结文字内容

---------------------------------------------------

@shalingye 那么你可以 0 成本的把开源地址发出来吗

---------------------------------------------------

@good1uck https://github.com/JimmyLv/BibiGPT

---------------------------------------------------

就是拿字幕。写个提示词总结的。刚出 3.5 的时候就玩过了，现在这个算是搞了个账号总结，也没啥大用处。 还有账号识别视频音乐的。

---------------------------------------------------

@wyd011011daniel 这个我知道，但是光凭这个还不够。

---------------------------------------------------

@good1uck 我只是觉得流程应该是这样子的，算力的话搞一个 az100 不就是 0 成本么

---------------------------------------------------

就是抓取字幕然后 gpt 生成总结  一般的 b 站视频发布选择可以自动生成字幕

---------------------------------------------------

@shalingye 有道理

---------------------------------------------------

分享一个机器人看看，没见过

---------------------------------------------------

@wayne3602 AI 视频小助理，总结的很烂，没必要看。总有人乐此不疲的艾特

---------------------------------------------------

先把视频内容语音识别成文字再 gpt 总结

---------------------------------------------------

ytb 不也有吗，chrome 插件，通过 chatgpt

---------------------------------------------------

请将三引号内的字幕内容生成 200 字左右的摘要
'''
B 站视频字幕文本
'''

---------------------------------------------------

语音识别成文字+chatgpt 做的, 没语音的就不行

---------------------------------------------------

造垃圾的工具

---------------------------------------------------

迟早要被封，大大降低完播率

---------------------------------------------------

这有一个手动的轮子
1.下载 b 站视频
2.塞进这个里面,转成文字 https://github.com/Const-me/Whisper
3.塞给 gpt

---------------------------------------------------

最快的轮子实现方式应该是用 langchain 

https://python.langchain.com/docs/integrations/document_loaders/bilibili

---------------------------------------------------

一直发评论不会被限制 1: 他有一个账号池 有一个不行了就切换到别的帐号上了  2:同 url 视频内容会有缓存 

另外说一点，它这个还是基于在视频有字幕的情况下会很快，如果没有字幕的话
你得自己生成字幕 而且如果视频很长的话 会很费时间 虽然有一些开源模型比如 whisper 可以 stt ，
但是也是吃 gpu/cpu 资源的，成本会收不回来哈哈
 所以 b 站我也没看到有人在几个小时的视频下总结哈哈

---------------------------------------------------

@Alias4ck 难怪，🌚，老半天没看到 ai 小助手回复

---------------------------------------------------

能不能直接把链接发给 gpt4 让它看让它总结，（我没试过 gpt4 啊，但不是说他能看网页么

---------------------------------------------------

就调用 bili 的 api ，然后有字幕的话就获取字幕，没的话，就识别视频的声音转为文本再交给 gpt ，没啥难度。  虽然我也用过一次，也挺好用，但迟早会出事的吧。 那些 up 主应该不喜欢这个东西

---------------------------------------------------

请将三引号内的字幕内容生成 200 字左右的摘要
'''
B 站视频字幕文本
'''

---------------------------------------------------

语音识别成文字+chatgpt 做的, 没语音的就不行

---------------------------------------------------

造垃圾的工具

---------------------------------------------------

迟早要被封，大大降低完播率

---------------------------------------------------

这有一个手动的轮子
1.下载 b 站视频
2.塞进这个里面,转成文字 https://github.com/Const-me/Whisper
3.塞给 gpt

---------------------------------------------------

最快的轮子实现方式应该是用 langchain 

https://python.langchain.com/docs/integrations/document_loaders/bilibili

---------------------------------------------------

一直发评论不会被限制 1: 他有一个账号池 有一个不行了就切换到别的帐号上了  2:同 url 视频内容会有缓存 

另外说一点，它这个还是基于在视频有字幕的情况下会很快，如果没有字幕的话
你得自己生成字幕 而且如果视频很长的话 会很费时间 虽然有一些开源模型比如 whisper 可以 stt ，
但是也是吃 gpu/cpu 资源的，成本会收不回来哈哈
 所以 b 站我也没看到有人在几个小时的视频下总结哈哈

---------------------------------------------------

@Alias4ck 难怪，🌚，老半天没看到 ai 小助手回复

---------------------------------------------------

能不能直接把链接发给 gpt4 让它看让它总结，（我没试过 gpt4 啊，但不是说他能看网页么

---------------------------------------------------

就调用 bili 的 api ，然后有字幕的话就获取字幕，没的话，就识别视频的声音转为文本再交给 gpt ，没啥难度。  虽然我也用过一次，也挺好用，但迟早会出事的吧。 那些 up 主应该不喜欢这个东西

---------------------------------------------------

请将三引号内的字幕内容生成 200 字左右的摘要
'''
B 站视频字幕文本
'''

---------------------------------------------------

语音识别成文字+chatgpt 做的, 没语音的就不行

---------------------------------------------------

造垃圾的工具

---------------------------------------------------

迟早要被封，大大降低完播率

---------------------------------------------------

这有一个手动的轮子
1.下载 b 站视频
2.塞进这个里面,转成文字 https://github.com/Const-me/Whisper
3.塞给 gpt

---------------------------------------------------

最快的轮子实现方式应该是用 langchain 

https://python.langchain.com/docs/integrations/document_loaders/bilibili

---------------------------------------------------

一直发评论不会被限制 1: 他有一个账号池 有一个不行了就切换到别的帐号上了  2:同 url 视频内容会有缓存 

另外说一点，它这个还是基于在视频有字幕的情况下会很快，如果没有字幕的话
你得自己生成字幕 而且如果视频很长的话 会很费时间 虽然有一些开源模型比如 whisper 可以 stt ，
但是也是吃 gpu/cpu 资源的，成本会收不回来哈哈
 所以 b 站我也没看到有人在几个小时的视频下总结哈哈

---------------------------------------------------

@Alias4ck 难怪，🌚，老半天没看到 ai 小助手回复

---------------------------------------------------

能不能直接把链接发给 gpt4 让它看让它总结，（我没试过 gpt4 啊，但不是说他能看网页么

---------------------------------------------------

就调用 bili 的 api ，然后有字幕的话就获取字幕，没的话，就识别视频的声音转为文本再交给 gpt ，没啥难度。  虽然我也用过一次，也挺好用，但迟早会出事的吧。 那些 up 主应该不喜欢这个东西

---------------------------------------------------

请将三引号内的字幕内容生成 200 字左右的摘要
'''
B 站视频字幕文本
'''

---------------------------------------------------

语音识别成文字+chatgpt 做的, 没语音的就不行

---------------------------------------------------

造垃圾的工具

---------------------------------------------------

迟早要被封，大大降低完播率

---------------------------------------------------

这有一个手动的轮子
1.下载 b 站视频
2.塞进这个里面,转成文字 https://github.com/Const-me/Whisper
3.塞给 gpt

---------------------------------------------------

最快的轮子实现方式应该是用 langchain 

https://python.langchain.com/docs/integrations/document_loaders/bilibili

---------------------------------------------------

一直发评论不会被限制 1: 他有一个账号池 有一个不行了就切换到别的帐号上了  2:同 url 视频内容会有缓存 

另外说一点，它这个还是基于在视频有字幕的情况下会很快，如果没有字幕的话
你得自己生成字幕 而且如果视频很长的话 会很费时间 虽然有一些开源模型比如 whisper 可以 stt ，
但是也是吃 gpu/cpu 资源的，成本会收不回来哈哈
 所以 b 站我也没看到有人在几个小时的视频下总结哈哈

---------------------------------------------------

@Alias4ck 难怪，🌚，老半天没看到 ai 小助手回复

---------------------------------------------------

能不能直接把链接发给 gpt4 让它看让它总结，（我没试过 gpt4 啊，但不是说他能看网页么

---------------------------------------------------

就调用 bili 的 api ，然后有字幕的话就获取字幕，没的话，就识别视频的声音转为文本再交给 gpt ，没啥难度。  虽然我也用过一次，也挺好用，但迟早会出事的吧。 那些 up 主应该不喜欢这个东西

---------------------------------------------------

请将三引号内的字幕内容生成 200 字左右的摘要
'''
B 站视频字幕文本
'''

---------------------------------------------------

语音识别成文字+chatgpt 做的, 没语音的就不行

---------------------------------------------------

造垃圾的工具

---------------------------------------------------

迟早要被封，大大降低完播率

---------------------------------------------------

这有一个手动的轮子
1.下载 b 站视频
2.塞进这个里面,转成文字 https://github.com/Const-me/Whisper
3.塞给 gpt

---------------------------------------------------

最快的轮子实现方式应该是用 langchain 

https://python.langchain.com/docs/integrations/document_loaders/bilibili

---------------------------------------------------

一直发评论不会被限制 1: 他有一个账号池 有一个不行了就切换到别的帐号上了  2:同 url 视频内容会有缓存 

另外说一点，它这个还是基于在视频有字幕的情况下会很快，如果没有字幕的话
你得自己生成字幕 而且如果视频很长的话 会很费时间 虽然有一些开源模型比如 whisper 可以 stt ，
但是也是吃 gpu/cpu 资源的，成本会收不回来哈哈
 所以 b 站我也没看到有人在几个小时的视频下总结哈哈

---------------------------------------------------

@Alias4ck 难怪，🌚，老半天没看到 ai 小助手回复

---------------------------------------------------

能不能直接把链接发给 gpt4 让它看让它总结，（我没试过 gpt4 啊，但不是说他能看网页么

---------------------------------------------------

就调用 bili 的 api ，然后有字幕的话就获取字幕，没的话，就识别视频的声音转为文本再交给 gpt ，没啥难度。  虽然我也用过一次，也挺好用，但迟早会出事的吧。 那些 up 主应该不喜欢这个东西

---------------------------------------------------

请将三引号内的字幕内容生成 200 字左右的摘要
'''
B 站视频字幕文本
'''

---------------------------------------------------

语音识别成文字+chatgpt 做的, 没语音的就不行

---------------------------------------------------

造垃圾的工具

---------------------------------------------------

迟早要被封，大大降低完播率

---------------------------------------------------

这有一个手动的轮子
1.下载 b 站视频
2.塞进这个里面,转成文字 https://github.com/Const-me/Whisper
3.塞给 gpt

---------------------------------------------------

最快的轮子实现方式应该是用 langchain 

https://python.langchain.com/docs/integrations/document_loaders/bilibili

---------------------------------------------------

一直发评论不会被限制 1: 他有一个账号池 有一个不行了就切换到别的帐号上了  2:同 url 视频内容会有缓存 

另外说一点，它这个还是基于在视频有字幕的情况下会很快，如果没有字幕的话
你得自己生成字幕 而且如果视频很长的话 会很费时间 虽然有一些开源模型比如 whisper 可以 stt ，
但是也是吃 gpu/cpu 资源的，成本会收不回来哈哈
 所以 b 站我也没看到有人在几个小时的视频下总结哈哈

---------------------------------------------------

@Alias4ck 难怪，🌚，老半天没看到 ai 小助手回复

---------------------------------------------------

能不能直接把链接发给 gpt4 让它看让它总结，（我没试过 gpt4 啊，但不是说他能看网页么

---------------------------------------------------

就调用 bili 的 api ，然后有字幕的话就获取字幕，没的话，就识别视频的声音转为文本再交给 gpt ，没啥难度。  虽然我也用过一次，也挺好用，但迟早会出事的吧。 那些 up 主应该不喜欢这个东西

---------------------------------------------------

请将三引号内的字幕内容生成 200 字左右的摘要
'''
B 站视频字幕文本
'''

---------------------------------------------------

语音识别成文字+chatgpt 做的, 没语音的就不行

---------------------------------------------------

造垃圾的工具

---------------------------------------------------

迟早要被封，大大降低完播率

---------------------------------------------------

这有一个手动的轮子
1.下载 b 站视频
2.塞进这个里面,转成文字 https://github.com/Const-me/Whisper
3.塞给 gpt

---------------------------------------------------

最快的轮子实现方式应该是用 langchain 

https://python.langchain.com/docs/integrations/document_loaders/bilibili

---------------------------------------------------

一直发评论不会被限制 1: 他有一个账号池 有一个不行了就切换到别的帐号上了  2:同 url 视频内容会有缓存 

另外说一点，它这个还是基于在视频有字幕的情况下会很快，如果没有字幕的话
你得自己生成字幕 而且如果视频很长的话 会很费时间 虽然有一些开源模型比如 whisper 可以 stt ，
但是也是吃 gpu/cpu 资源的，成本会收不回来哈哈
 所以 b 站我也没看到有人在几个小时的视频下总结哈哈

---------------------------------------------------

@Alias4ck 难怪，🌚，老半天没看到 ai 小助手回复

---------------------------------------------------

能不能直接把链接发给 gpt4 让它看让它总结，（我没试过 gpt4 啊，但不是说他能看网页么

---------------------------------------------------

就调用 bili 的 api ，然后有字幕的话就获取字幕，没的话，就识别视频的声音转为文本再交给 gpt ，没啥难度。  虽然我也用过一次，也挺好用，但迟早会出事的吧。 那些 up 主应该不喜欢这个东西

---------------------------------------------------

请将三引号内的字幕内容生成 200 字左右的摘要
'''
B 站视频字幕文本
'''

---------------------------------------------------

语音识别成文字+chatgpt 做的, 没语音的就不行

---------------------------------------------------

造垃圾的工具

---------------------------------------------------

迟早要被封，大大降低完播率

---------------------------------------------------

这有一个手动的轮子
1.下载 b 站视频
2.塞进这个里面,转成文字 https://github.com/Const-me/Whisper
3.塞给 gpt

---------------------------------------------------

最快的轮子实现方式应该是用 langchain 

https://python.langchain.com/docs/integrations/document_loaders/bilibili

---------------------------------------------------

一直发评论不会被限制 1: 他有一个账号池 有一个不行了就切换到别的帐号上了  2:同 url 视频内容会有缓存 

另外说一点，它这个还是基于在视频有字幕的情况下会很快，如果没有字幕的话
你得自己生成字幕 而且如果视频很长的话 会很费时间 虽然有一些开源模型比如 whisper 可以 stt ，
但是也是吃 gpu/cpu 资源的，成本会收不回来哈哈
 所以 b 站我也没看到有人在几个小时的视频下总结哈哈

---------------------------------------------------

@Alias4ck 难怪，🌚，老半天没看到 ai 小助手回复

---------------------------------------------------

能不能直接把链接发给 gpt4 让它看让它总结，（我没试过 gpt4 啊，但不是说他能看网页么

---------------------------------------------------

就调用 bili 的 api ，然后有字幕的话就获取字幕，没的话，就识别视频的声音转为文本再交给 gpt ，没啥难度。  虽然我也用过一次，也挺好用，但迟早会出事的吧。 那些 up 主应该不喜欢这个东西

---------------------------------------------------

请将三引号内的字幕内容生成 200 字左右的摘要
'''
B 站视频字幕文本
'''

---------------------------------------------------

语音识别成文字+chatgpt 做的, 没语音的就不行

---------------------------------------------------

造垃圾的工具

---------------------------------------------------

迟早要被封，大大降低完播率

---------------------------------------------------

这有一个手动的轮子
1.下载 b 站视频
2.塞进这个里面,转成文字 https://github.com/Const-me/Whisper
3.塞给 gpt

---------------------------------------------------

最快的轮子实现方式应该是用 langchain 

https://python.langchain.com/docs/integrations/document_loaders/bilibili

---------------------------------------------------

一直发评论不会被限制 1: 他有一个账号池 有一个不行了就切换到别的帐号上了  2:同 url 视频内容会有缓存 

另外说一点，它这个还是基于在视频有字幕的情况下会很快，如果没有字幕的话
你得自己生成字幕 而且如果视频很长的话 会很费时间 虽然有一些开源模型比如 whisper 可以 stt ，
但是也是吃 gpu/cpu 资源的，成本会收不回来哈哈
 所以 b 站我也没看到有人在几个小时的视频下总结哈哈

---------------------------------------------------

@Alias4ck 难怪，🌚，老半天没看到 ai 小助手回复

---------------------------------------------------

能不能直接把链接发给 gpt4 让它看让它总结，（我没试过 gpt4 啊，但不是说他能看网页么

---------------------------------------------------

就调用 bili 的 api ，然后有字幕的话就获取字幕，没的话，就识别视频的声音转为文本再交给 gpt ，没啥难度。  虽然我也用过一次，也挺好用，但迟早会出事的吧。 那些 up 主应该不喜欢这个东西

