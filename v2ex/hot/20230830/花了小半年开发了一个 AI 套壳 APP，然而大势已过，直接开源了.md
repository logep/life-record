### 花了小半年开发了一个 AI 套壳 APP，然而大势已过，直接开源了

花了小半年开发了一个 AI 套壳 APP ，这是我本人第一次尝试开发 APP ，现学现做，投入了大量的时间和精力，然而大势已过，加上国家对 AIGC 类 APP 的管控越来越严格，APP 上架后第二版就被禁止在国内销售了，思来想去，再继续搞下去前途也比较迷茫。所以今天直接开源了，需要的自取哈。

APP 使用的是 Flutter 开发的，后端为 Golang 。支持 Web 端，Android 、IOS APP ，桌面端（ Mac 版本已打包，Win 没有环境，所以没有预先打包）。

开源仓库地址： https://github.com/mylxsw/aidea


![images]( https://raw.githubusercontent.com/mylxsw/aidea/main/resources/Xnip2023-08-30_11-32-34.png)  | ![images]( https://raw.githubusercontent.com/mylxsw/aidea/main/resources/Xnip2023-08-30_11-32-42.png)
:-------------------------:|:-------------------------:
![images]( https://raw.githubusercontent.com/mylxsw/aidea/main/resources/Xnip2023-08-30_11-32-53.png)  | ![images]( https://raw.githubusercontent.com/mylxsw/aidea/main/resources/Xnip2023-08-30_11-33-44.png) 
![images]( https://raw.githubusercontent.com/mylxsw/aidea/main/resources/Xnip2023-08-30_11-34-14.png)  | ![images]( https://raw.githubusercontent.com/mylxsw/aidea/main/resources/Xnip2023-08-30_11-34-28.png) 
![images]( https://raw.githubusercontent.com/mylxsw/aidea/main/resources/Xnip2023-08-30_11-34-42.png)  | ![images]( https://raw.githubusercontent.com/mylxsw/aidea/main/resources/Xnip2023-08-30_11-35-01.png) 
![images]( https://raw.githubusercontent.com/mylxsw/aidea/main/resources/Xnip2023-08-30_11-35-33.png)  | ![images]( https://raw.githubusercontent.com/mylxsw/aidea/main/resources/Xnip2023-08-30_11-35-52.png)

---------------------------------------------------

👍

---------------------------------------------------

支持一波

---------------------------------------------------

完成度很高

---------------------------------------------------

牛逼

---------------------------------------------------

赞

---------------------------------------------------

奇怪，这种东西为什么要禁止，触犯了什么天条？

---------------------------------------------------

牛逼的，支持

---------------------------------------------------

支持 azure 的 api key 吗

---------------------------------------------------

@listkun 支持的，不过要自己部署服务端才行，服务端代码我还要再整理下，整理好了也会开源出来

---------------------------------------------------

还需要手机号才能登录吗？

---------------------------------------------------

flutter 劝退次数+1 ，好奇这布局语法写着不恶心吗？

---------------------------------------------------

期待服务端

---------------------------------------------------

@poorcai 是的，当时想着减少用户登录成本，就只保留了短信验证码登录。过几天我找时间把邮箱登录给还原了，最开始做了，只不过屏蔽了

---------------------------------------------------

请问你这语音提问是用什么接口做的呢，是先调第三方转成文字吗

---------------------------------------------------

@ruoxie 恶心也没有更好的选择啊，全端都支持，性能还过得去

---------------------------------------------------

海外市场比大陆广阔，哪怕懂中文的人里，有付费意愿的用户不比大陆少

---------------------------------------------------

历史纪录->历史记录

---------------------------------------------------

@brader 对，服务端做了两种，open ai 的 whisper  模型和腾讯的语音转文字接口，但用下来发现腾讯的体验好一些，速度快，价格低，所以就用腾讯的接口了

---------------------------------------------------

@lzsadam 厉害了，这都发现得了🤦‍♂️

---------------------------------------------------

看着不错 给 op 点个 star

---------------------------------------------------

@ruoxie #11 习惯了其实也还好，刚开始的确劝退

---------------------------------------------------

UI 和北京很好看啊！

---------------------------------------------------

看得出来很用心

---------------------------------------------------

厉害了  先点个⭐了

---------------------------------------------------

@maxxfire #6 它们没有丝毫的安全感，凡是未被它们完全控制的东西，都被视为对它们的威胁

---------------------------------------------------

可以考虑做成某个场景应用，避开政策风险。

---------------------------------------------------

可以可以

---------------------------------------------------

@maxxfire #6 你猜 TikTok 和八杆子打不着的美国国家安全是怎么联系到一起的？

---------------------------------------------------

牛逼  ！！！ 楼主！！！

---------------------------------------------------

一看就是下了心血的

---------------------------------------------------

很好看呀，审美在线

---------------------------------------------------

@maxxfire 涉及跨境数据传输

---------------------------------------------------

试试去 google play 上架呀

---------------------------------------------------

会不会跑路啊以后

---------------------------------------------------

邀请码 IJ1XXw 哈哈😄

---------------------------------------------------

UI 和配色和 Material 不是很吻合，先 star 回头看下什么 sheji 栈

---------------------------------------------------

@mrReturnTrue  后面客户端和服务端都会开源，哪天用不了，可以自己部署一套，没有跑路一说 😂

---------------------------------------------------

@easylee 纯后端程序员的审美设计栈 😅

---------------------------------------------------

刚好在学 flutter 开发，star 了

---------------------------------------------------

《花了小半年开发了一个 AI 套壳 APP ，然而大势已过，直接开源了》

看了这个标题真是感慨万千，曾经我也打算这么干，后来直接放弃了，我是从产品的思维来思考的，这种产品的生命周期极短，太多的东西被别人卡脖子，可能自己做了很长时间的努力别人只需要改个规则这个产品就死了。当然如果把握好热点也能赚个盆满钵满，但是追热点始终不是我想做的。悟透之后觉得做自己的产品才是正确的路，歪门邪道虽也能武功大成，可最终不是正途。

---------------------------------------------------

请问 UI 设计，和美术素材都是自己搞的吗

---------------------------------------------------

@Maboroshii  对啊，全是自己搞的😂

---------------------------------------------------

厉害啊，大牛无处不在

---------------------------------------------------

@pengtdyd 刚开始其实没想做成个产品，只是觉得好玩儿，做着做着就成了现在这样了，中间也是一直在纠结，一方面确实觉得这种产品没有市场竞争力，也无法留存住用户，价值点不大，另一方面又觉得都花了这么多时间在上面了，就想把他做好（有点沉没成本了）。

---------------------------------------------------

@fzls 国内用户访问不了，上了可能没有人用，所以就没有考虑

---------------------------------------------------

不错

---------------------------------------------------

上架非国区 iOS ，还是能有付费/订阅的

---------------------------------------------------

很赞

---------------------------------------------------

看起来做的很好嘛

---------------------------------------------------

大佬牛逼啊 看上去界面挺好看的

---------------------------------------------------

大佬牛逼，已 star ，支持一下

---------------------------------------------------

赞，已 star

---------------------------------------------------

完成度好高啊，感谢 OP 分享，已 star

---------------------------------------------------

界面真漂亮

---------------------------------------------------

UI 真简洁

---------------------------------------------------

支持支持

---------------------------------------------------

哈哈，送了我一百智慧果，智慧树上智慧果，智慧树下你和我。

---------------------------------------------------

请问 UI 设计，和美术素材都是自己搞的吗

---------------------------------------------------

@Maboroshii  对啊，全是自己搞的😂

---------------------------------------------------

厉害啊，大牛无处不在

---------------------------------------------------

@pengtdyd 刚开始其实没想做成个产品，只是觉得好玩儿，做着做着就成了现在这样了，中间也是一直在纠结，一方面确实觉得这种产品没有市场竞争力，也无法留存住用户，价值点不大，另一方面又觉得都花了这么多时间在上面了，就想把他做好（有点沉没成本了）。

---------------------------------------------------

@fzls 国内用户访问不了，上了可能没有人用，所以就没有考虑

---------------------------------------------------

不错

---------------------------------------------------

上架非国区 iOS ，还是能有付费/订阅的

---------------------------------------------------

很赞

---------------------------------------------------

看起来做的很好嘛

---------------------------------------------------

大佬牛逼啊 看上去界面挺好看的

---------------------------------------------------

大佬牛逼，已 star ，支持一下

---------------------------------------------------

赞，已 star

---------------------------------------------------

完成度好高啊，感谢 OP 分享，已 star

---------------------------------------------------

界面真漂亮

---------------------------------------------------

UI 真简洁

---------------------------------------------------

支持支持

---------------------------------------------------

哈哈，送了我一百智慧果，智慧树上智慧果，智慧树下你和我。

---------------------------------------------------

请问 UI 设计，和美术素材都是自己搞的吗

---------------------------------------------------

@Maboroshii  对啊，全是自己搞的😂

---------------------------------------------------

厉害啊，大牛无处不在

---------------------------------------------------

@pengtdyd 刚开始其实没想做成个产品，只是觉得好玩儿，做着做着就成了现在这样了，中间也是一直在纠结，一方面确实觉得这种产品没有市场竞争力，也无法留存住用户，价值点不大，另一方面又觉得都花了这么多时间在上面了，就想把他做好（有点沉没成本了）。

---------------------------------------------------

@fzls 国内用户访问不了，上了可能没有人用，所以就没有考虑

---------------------------------------------------

不错

---------------------------------------------------

上架非国区 iOS ，还是能有付费/订阅的

---------------------------------------------------

很赞

---------------------------------------------------

看起来做的很好嘛

---------------------------------------------------

大佬牛逼啊 看上去界面挺好看的

---------------------------------------------------

大佬牛逼，已 star ，支持一下

---------------------------------------------------

赞，已 star

---------------------------------------------------

完成度好高啊，感谢 OP 分享，已 star

---------------------------------------------------

界面真漂亮

---------------------------------------------------

UI 真简洁

---------------------------------------------------

支持支持

---------------------------------------------------

哈哈，送了我一百智慧果，智慧树上智慧果，智慧树下你和我。

---------------------------------------------------

请问 UI 设计，和美术素材都是自己搞的吗

---------------------------------------------------

@Maboroshii  对啊，全是自己搞的😂

---------------------------------------------------

厉害啊，大牛无处不在

---------------------------------------------------

@pengtdyd 刚开始其实没想做成个产品，只是觉得好玩儿，做着做着就成了现在这样了，中间也是一直在纠结，一方面确实觉得这种产品没有市场竞争力，也无法留存住用户，价值点不大，另一方面又觉得都花了这么多时间在上面了，就想把他做好（有点沉没成本了）。

---------------------------------------------------

@fzls 国内用户访问不了，上了可能没有人用，所以就没有考虑

---------------------------------------------------

不错

---------------------------------------------------

上架非国区 iOS ，还是能有付费/订阅的

---------------------------------------------------

很赞

---------------------------------------------------

看起来做的很好嘛

---------------------------------------------------

大佬牛逼啊 看上去界面挺好看的

---------------------------------------------------

大佬牛逼，已 star ，支持一下

---------------------------------------------------

赞，已 star

---------------------------------------------------

完成度好高啊，感谢 OP 分享，已 star

---------------------------------------------------

界面真漂亮

---------------------------------------------------

UI 真简洁

---------------------------------------------------

支持支持

---------------------------------------------------

哈哈，送了我一百智慧果，智慧树上智慧果，智慧树下你和我。

---------------------------------------------------

请问 UI 设计，和美术素材都是自己搞的吗

---------------------------------------------------

@Maboroshii  对啊，全是自己搞的😂

---------------------------------------------------

厉害啊，大牛无处不在

---------------------------------------------------

@pengtdyd 刚开始其实没想做成个产品，只是觉得好玩儿，做着做着就成了现在这样了，中间也是一直在纠结，一方面确实觉得这种产品没有市场竞争力，也无法留存住用户，价值点不大，另一方面又觉得都花了这么多时间在上面了，就想把他做好（有点沉没成本了）。

---------------------------------------------------

@fzls 国内用户访问不了，上了可能没有人用，所以就没有考虑

---------------------------------------------------

不错

---------------------------------------------------

上架非国区 iOS ，还是能有付费/订阅的

---------------------------------------------------

很赞

---------------------------------------------------

看起来做的很好嘛

---------------------------------------------------

大佬牛逼啊 看上去界面挺好看的

---------------------------------------------------

大佬牛逼，已 star ，支持一下

---------------------------------------------------

赞，已 star

---------------------------------------------------

完成度好高啊，感谢 OP 分享，已 star

---------------------------------------------------

界面真漂亮

---------------------------------------------------

UI 真简洁

---------------------------------------------------

支持支持

---------------------------------------------------

哈哈，送了我一百智慧果，智慧树上智慧果，智慧树下你和我。

---------------------------------------------------

请问 UI 设计，和美术素材都是自己搞的吗

---------------------------------------------------

@Maboroshii  对啊，全是自己搞的😂

---------------------------------------------------

厉害啊，大牛无处不在

---------------------------------------------------

@pengtdyd 刚开始其实没想做成个产品，只是觉得好玩儿，做着做着就成了现在这样了，中间也是一直在纠结，一方面确实觉得这种产品没有市场竞争力，也无法留存住用户，价值点不大，另一方面又觉得都花了这么多时间在上面了，就想把他做好（有点沉没成本了）。

---------------------------------------------------

@fzls 国内用户访问不了，上了可能没有人用，所以就没有考虑

---------------------------------------------------

不错

---------------------------------------------------

上架非国区 iOS ，还是能有付费/订阅的

---------------------------------------------------

很赞

---------------------------------------------------

看起来做的很好嘛

---------------------------------------------------

大佬牛逼啊 看上去界面挺好看的

---------------------------------------------------

大佬牛逼，已 star ，支持一下

---------------------------------------------------

赞，已 star

---------------------------------------------------

完成度好高啊，感谢 OP 分享，已 star

---------------------------------------------------

界面真漂亮

---------------------------------------------------

UI 真简洁

---------------------------------------------------

支持支持

---------------------------------------------------

哈哈，送了我一百智慧果，智慧树上智慧果，智慧树下你和我。

---------------------------------------------------

请问 UI 设计，和美术素材都是自己搞的吗

---------------------------------------------------

@Maboroshii  对啊，全是自己搞的😂

---------------------------------------------------

厉害啊，大牛无处不在

---------------------------------------------------

@pengtdyd 刚开始其实没想做成个产品，只是觉得好玩儿，做着做着就成了现在这样了，中间也是一直在纠结，一方面确实觉得这种产品没有市场竞争力，也无法留存住用户，价值点不大，另一方面又觉得都花了这么多时间在上面了，就想把他做好（有点沉没成本了）。

---------------------------------------------------

@fzls 国内用户访问不了，上了可能没有人用，所以就没有考虑

---------------------------------------------------

不错

---------------------------------------------------

上架非国区 iOS ，还是能有付费/订阅的

---------------------------------------------------

很赞

---------------------------------------------------

看起来做的很好嘛

---------------------------------------------------

大佬牛逼啊 看上去界面挺好看的

---------------------------------------------------

大佬牛逼，已 star ，支持一下

---------------------------------------------------

赞，已 star

---------------------------------------------------

完成度好高啊，感谢 OP 分享，已 star

---------------------------------------------------

界面真漂亮

---------------------------------------------------

UI 真简洁

---------------------------------------------------

支持支持

---------------------------------------------------

哈哈，送了我一百智慧果，智慧树上智慧果，智慧树下你和我。

---------------------------------------------------

请问 UI 设计，和美术素材都是自己搞的吗

---------------------------------------------------

@Maboroshii  对啊，全是自己搞的😂

---------------------------------------------------

厉害啊，大牛无处不在

---------------------------------------------------

@pengtdyd 刚开始其实没想做成个产品，只是觉得好玩儿，做着做着就成了现在这样了，中间也是一直在纠结，一方面确实觉得这种产品没有市场竞争力，也无法留存住用户，价值点不大，另一方面又觉得都花了这么多时间在上面了，就想把他做好（有点沉没成本了）。

---------------------------------------------------

@fzls 国内用户访问不了，上了可能没有人用，所以就没有考虑

---------------------------------------------------

不错

---------------------------------------------------

上架非国区 iOS ，还是能有付费/订阅的

---------------------------------------------------

很赞

---------------------------------------------------

看起来做的很好嘛

---------------------------------------------------

大佬牛逼啊 看上去界面挺好看的

---------------------------------------------------

大佬牛逼，已 star ，支持一下

---------------------------------------------------

赞，已 star

---------------------------------------------------

完成度好高啊，感谢 OP 分享，已 star

---------------------------------------------------

界面真漂亮

---------------------------------------------------

UI 真简洁

---------------------------------------------------

支持支持

---------------------------------------------------

哈哈，送了我一百智慧果，智慧树上智慧果，智慧树下你和我。

