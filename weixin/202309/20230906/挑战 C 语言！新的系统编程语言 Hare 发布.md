----------------------------------------
----------------------------------------
#  挑战 C 语言！新的系统编程语言 Hare 发布

[ Github掘金计划 ](javascript:void\(0\);)

**Github掘金计划** ![]()

微信号 GithubStar

功能介绍 用心发掘 Github 和 Gitee 上优质的开源项目。

____

_2022-04-28 10:36_ _发表于 湖北_

收录于合集

来源|罗奇奇/OSC开源社区(ID:oschina2013)  

  

* * *

  

最近，开发者 Drew DeVault 公布了一门新的系统编程语言：  

 **Hare**
（野兔）![图片](https://mmbiz.qpic.cn/mmbiz_png/J0g14CUwaZfspoHbiboItNRticyeEDC5CBgAmvFUaySib8ZI25aZichLrTSVPMHWDrCoDCSOtT5arI4cDgOnBOzPkQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/xq9PqibkVAzrOicX4fASQxDbYXISB0NgfWpGj0CFJZYdRS9ickZichELmEzyqE9EHRGcHKAVGNqJaqB9aia07WsqJmA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

Hare 的开发时间接近两年半，它使用静态类型系统、手动内存管理和最小运行时，非常适合编写操作系统、系统工具、编译器以及其他低级高性能任务。

据 Drew DeVault 介绍，Hare 与 C 最相似，几乎所有用 C 语言编写的程序也可以用 Hare 编写，但 **Hare 比 C 简单。**

###  Hare 的 Hello World

    
    
    use fmt;  
      
    export fnmain() void = {  
     const greetings = [  
       "你好，世界",  
      "Hello, world!",  
     ];  
     for (let i = 0z; i < len(greetings); i += 1) {  
      fmt::println(greetings[i])!;  
     };  
    };  
    

Hare 计算自己的 SHA-256 哈希：

    
    
    use crypto::sha256;  
    use encoding::hex;  
    use fmt;  
    use hash;  
    use io;  
    use os;  
      
    export fn main() void = {  
     const hash = sha256::sha256();  
     const file = os::open("main.ha")!;  
     defer io::close(file);  
     io::copy(&hash, file)!;  
      
     let sum: [sha256::SIZE]u8 = [0...];  
     hash::sum(&hash, sum);  
     hex::encode(os::stdout, sum)!;  
     fmt::println()!;  
    };  
    

Hare 基于 qbe 编译器后端，在占用空间小的情况下提供了良好的性能。

### Hare 现状

目前已经有许多基于 Hare 编程语言的程序，比如

  * Himitsu ：密匙管理和密码存储工具。它将密匙存储为键/值对，且允许存储附加信息，例如用户名、主机和协议。
  * Helios ：x86_64 系统的微内核。
  * box ：简单的 CLI 加密工具
  * btqd ：bittorrent 守护进程
  * hare-libui ：简单 GUI 的 libui 绑定

Hare 的 OpenGL 绑定正在进行中，目前可用于几个小游戏，比如俄罗斯方块：

![图片](https://mmbiz.qpic.cn/mmbiz_png/dkwuWwLoRKicN1nfjF6nRA5pfWmzmWngt0OS9PDT3A1OqgVic8icedtQOJXwUFqhN6lXFksJZdicYWuKzpYl3M4qqw/640?wx_fmt=png)

使用 Hare 编写的简单光线追踪器：

![图片](https://mmbiz.qpic.cn/mmbiz_png/dkwuWwLoRKicN1nfjF6nRA5pfWmzmWngtrSfnVrDhRju10RcbusyoE2c4x2IhRo2mkEmKFw5WlFENBZNcBP7uXQ/640?wx_fmt=png)

Hare 标准库包含以下标准组件，该库为许多用例提供支持，而无需任何依赖关系。

  * 密码学套件
  * 网络支持
  * 全面的日期/时间操作
  * I/O 和文件系统抽象
  * Unix 原语，如 poll、fnmatch 和 glob
  * POSIX 扩展正则表达式
  * Hare 解析器和类型检查器

该标准库让 Hare 脱离了 POSIX 和 libc 的遗留问题，Hare 程序默认不与 libc 链接 。

### Hare 未来

目前 Hare 正在保守开发中，标准库最大的任务是完成密码学实现，首要目标是支持 TLS （安全传输层协议）1.2 和 TLS 1.3。一旦达到 1.0
版本，Hare 将完成语言规范，冻结语言设计，且只对标准库进行向后兼容的更改。

此外，目前 Hare **仅支持三种架构** ：x86_64、aarch64 和 riscv64，未来将逐步添加 32
位平台和其他架构的支持。操作系统方面，目前 Hare **只支持 Linux 和 FreeBSD** ，计划在未来做更多的移植。

> 我们无意支持非自由平台，但由于语言是标准化的，如果需要，第三方实现或分支可以轻松开发 Windows 或 macOS 支持。

怎么样，大家对这个编程语言怎么看呢？![图片](https://mmbiz.qpic.cn/mmbiz_png/J0g14CUwaZfspoHbiboItNRticyeEDC5CBI3AO491tHhib3jmA133JNYEua2zoibCmENL9icg3J9WInR2500Wwu9riaQ/640?wx_fmt=png)

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

