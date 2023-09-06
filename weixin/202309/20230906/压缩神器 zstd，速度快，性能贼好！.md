----------------------------------------
----------------------------------------
#  压缩神器 zstd，速度快，性能贼好！

[ Github掘金计划 ](javascript:void\(0\);)

**Github掘金计划** ![]()

微信号 GithubStar

功能介绍 用心发掘 Github 和 Gitee 上优质的开源项目。

____

_2022-08-24 10:24_ _发表于 湖北_

收录于合集

亚马逊前副总裁 Adrian cockcroft 在推特上爆料，称 AWS 的压缩算法从 gzip 切换到 zstd 后，节省了海量内存，压缩后的 S3
存储减少了大约 30% ，节省的空间可达 EB 规模（1 EB = 1024 PB = 1024 * 1024 TB）。

![图片](https://mmbiz.qpic.cn/mmbiz_png/BcyAypujBVYx8fTMWrraWYiawDYicz5f8ictZh6noEBic1hByabVxCJ5jHzhH46kicQKzibRibEDk50jHp5ZOj72BKmgQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

有亚马逊员工对该发言进行了补充，称亚马逊改变的不是客户存储的数据的压缩方式，而是 S3 自身存储服务数据（主要是日志）的方式 —— S3 自身从 gzip
日志切换到 ztsd 日志，使得存储成本降低 30% 。

但亚马逊并没有发布变更压缩技术相关的公告，有细心的福尔摩斯网友发现了亚马逊 S3 在 2021 年 11 月末曾有过一次降价 31% 的操作，与降低的
30% 存储成本刚好可以对应上。

![图片](https://mmbiz.qpic.cn/mmbiz_png/BcyAypujBVYx8fTMWrraWYiawDYicz5f8iclWfI9QfRjd0c6l3Z3r1abAib68pibJecMhWO4d8EejfbbOzcWu4l1QEw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

我们称 Zstandard 或 Zstd 是一种快速的无损压缩算法，是针对 zlib 级别的实时压缩方案，以及更好的压缩比。它由一个非常快的熵阶段，由
Huff0 和 FSE 库提供。这个项目是作为开源的 BSD 许可收费的库，以及一个生成和解码 .zst 格式。

  

###

****性能测试对比****

Compressor name| Ratio| Compression| Decompress.  
---|---|---|---  
 **zstd 1.4.4 -1**|  2.884| 520 MB/s| 1600 MB/s  
zlib 1.2.11 -1| 2.743| 110 MB/s| 440 MB/s  
brotli 1.0.7 -0| 2.701| 430 MB/s| 470 MB/s  
quicklz 1.5.0 -1| 2.238| 600 MB/s| 800 MB/s  
lzo1x 2.09 -1| 2.106| 680 MB/s| 950 MB/s  
lz4 1.8.3| 2.101| 800 MB/s| 4220 MB/s  
snappy 1.1.4| 2.073| 580 MB/s| 2020 MB/s  
lzf 3.6 -1| 2.077| 440 MB/s| 930 MB/s  
  
Zstd 还可以压缩速度为代价提供更强的压缩比，Speed vs Rtrade 可以通过小增量进行配置。在所有设置中，解压速度保持不变，并在所有
LZ压缩算法( 比如 zlib 或者lzma) 共享的属性中保持不变。

![图片](https://mmbiz.qpic.cn/mmbiz_png/8Jeic82Or04mvmVCGcicOL08P7CjCdgUhKdpSNMJ1u0ocZS5mbf157oom0iaVGPf8AEurS2pSD39icBXJFrpicXRMJQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

以前的压缩方式，都是适用于典型文件和二进制的压缩方案(
MB/GB)的情况。然而，要压缩的数据量越小，压缩就越困难。这是所有压缩算法都存在的问题，原因是压缩算法从过去的数据中学习如何压缩未来的数据。但是在一个新的数据集的开始，没有“过去”可以参考。

为了解决这种情况，Zstd 提供了一种新的训练模式，可以使用这种模式对所选数据类型的算法进行调优。训练 Zstandard
是通过提供一些样本(每个样本一个文件)来实现的，训练的结果存储在称为 **“字典”**
的文件中，该文件必须在压缩和解压缩之前加载。使用此字典，可以在小数据上实现的压缩率大大提高。

以下示例，使用由 github 公共 API 创建的 github 用户示例集。它由大约 10K 条记录组成，每条记录 1KB 左右。

  

###

****小数据压缩的案例****

![图片](https://mmbiz.qpic.cn/mmbiz_png/8Jeic82Or04mvmVCGcicOL08P7CjCdgUhK4pPA3sdItpRrabOUHKJwxm4cibnCo3kF9SG5QvACOky9BnH280ZBic9w/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

如果在一组小的数据样本中存在某种相关性，那么训练就是有效的。一个字典的数据越具体，它的效率就越高(没有通用字典)。因此，为每种类型的数据部署一个字典将带来最大的好处。字典增益在前几个
KB 中最有效。然后，压缩算法将逐步使用先前解码的内容，以更好地压缩文件的其余部分。

  

###

****字典压缩使用示例****

  *   *   *   *   *   * 

    
    
     # 训练字典$ zstd --train FullPathToTrainingSet/* -o dictionaryName# 用字典压缩$ zstd -D dictionaryName FILE# 用字典解压缩$ zstd -D dictionaryName --decompress FILE.zst

![图片](https://mmbiz.qpic.cn/mmbiz_png/8Jeic82Or04mvmVCGcicOL08P7CjCdgUhKfjbqRG8Q1xNE1cEiaNY201HfUJ2fZlbmqibBz1V9iaH4pQESPvVhPy6eg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

![图片](https://mmbiz.qpic.cn/mmbiz_png/8Jeic82Or04mvmVCGcicOL08P7CjCdgUhKKcJEkMJmNWWNS8LLvYIc8tN1r2zzpkpYlicfOOzJqx9I1S7nMg1j0Ug/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

用心发掘优质开源项目，欢迎关注，欢迎点赞分享！

历史优质开源项目推荐地址：[Github
掘金计划](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzIwNDgzMzI3Mg==&action=getalbum&album_id=1571213952619954180#wechat_redirect)。

>   *
> [计算机基础](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1635325633234780161&__biz=MzIwNDgzMzI3Mg==#wechat_redirect)：精选计算机基础（操作系统、计算机网络、算法、数据结构）相关的开源项目。
>
>   *
> [神器工具](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzIwNDgzMzI3Mg==&action=getalbum&album_id=1692140336665378820#wechat_redirect)
> : 一些好用的插件、软件、网站。
>
>   *
> [程序人生](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzIwNDgzMzI3Mg==&action=getalbum&album_id=2084343476975878144#wechat_redirect)：编程经历、英语学习、延寿指南。
>
>   *
> [项目实战](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1632590550748938241&__biz=MzIwNDgzMzI3Mg==#wechat_redirect)
> ：精选实战类型的开源项目。
>
>

预览时标签不可点

