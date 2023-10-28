### 从最近发的一个工单来吐槽一下群晖的技术支持和 DSM Raid

以下内容纯主观吐槽，各位看个乐即可，也给双 11 准备买群晖的朋友提供一点 FS 方面的参考。

事情起因是，我把自用的存储从 zfs/ext4 迁移到了 btrfs: Gen10 从 zfs 迁到了 btrfs raid10 ，白群晖从 ext4 切到了 btrfs 。

然后我就开始读 btrfs 的文档。(btrfs 和 zfs 的区别还挺大，这点等我下次摸鱼的时候再开帖子唠

我要吐槽的是:

a. 群晖在销售页面关于 btrfs 如何保护用户数据吹得有点过。zfs/btrfs 实现 self-healing 功能的前提是，数据有热冗余，单凭 checksum 只能检测出 data corruption 但无法修复。而群晖的销售给用户的印象是，他们有黑科技能恢复损坏的数据，但实际上他们只是尽量让 mdadm 和 btrfs 不出问题，至于用户的数据，坏了就坏了，修不了

b. 群晖的技术支持的客服，不知道是水平不行，还是警惕心太强，回复不但笼统，而且敷衍，甚至有时是错的。这个工单中，可能认为我是他们竞争对手的人，来套他们的方案...... 但我只是想知道他们如何保护我的数据。以上情况也不是第一次出现在我提的工单里了

下面贴一下工单对话，主题是 "关于存储池'数据清理'功能可以修复 checksum 异常的数据的疑惑":

```
看了一下我的设备所使用的存储空间的结构，先用 mdadm 创建 raid1 ，再将映射为 md2 的设备作为 pv 交由 lvm 管理，lvm 在 pv 上创建 vg ，进而创建 lv ，最后把 btrfs 放在 lv 上。

据我所知，btrfs 会记录每个 extent 的 checksum 值用于验证这个 extent 中的数据是否完整。而修复 checksum 有异常的数据需要额外的，具有正常的 checksum 的另一份数据。

比如在 Linux 上 btrfs 默认存储两份 metadata 用于在 metadata 损坏时修复这些损坏的 metadata ，而 data 则只存了一份，所以在这种情况下，如果 data 的 checksum 出现异常则无法修复。

而群晖 btrfs 文件系统中也使用了一样的配置，即，2 份 metadata 和 1 份 data 。所以我的理解是数据清理这个功能只能修复 btrfs 中的 metadata ，而不能修复 data 。是这样的吗？

如果不是的话，数据清理的行为和结果是什么样的？
```

```
您对于数据清理中 FS scrubbing 这个部分理解没有问题，但是执行数据清理这个操作会包含两个操作，FS scrubbing 和 RAID scrubbing 。

理论上如果 Btrfs 不开 COW 的话其实并不会知道某个 data 有损坏，只有读到这个文件才会知道文件损坏了。

而当文件系统在进行 FS scrubbing 的时候如果查到某个文档 data 真的坏了，那就会去做 RAID scrubbing 然后用 RAID parity 来修修看（不管有没有开 COW ）。
```

```
数据清理如果包含 btrfs scrub & mdadm scrub 两个操作的话，它们的执行逻辑是怎样的？
先 btrfs scrub ，再 mdadm scrub ，这两个步骤一定会按这样的顺序发生？
或者像你说的那样，btrfs scrub 遇到 data checksum 不一致时才发生 mdadm scrub ？

我注意到，对于 mdadm scrub 来说:
1. mdadm raid5/6 在遇到数据不一致时会假定 checksum 错误，然后根据(尽管可能已经损坏的)已有数据重新计算 checksum
2. mdadm raid1 遇到数据不一致时会假定第一个硬盘的数据是正确的，然后覆写到其他的硬盘中
如果发生 data checksum 不一致的情况，那么 mdadm scrub 为什么可以修复 btrfs 中的数据？

按照我的理解来看，mdadm scrub 所更新的数据只是用于构成 mdadm 的数据。mdadm 暴露给 btrfs 的，btrfs 可以看到的数据并没有变化，所以我认为 mdadm scrub 无法修复 btrfs 中 data checksum 不一致的问题。这个推断的过程哪里有问题？
```

```
抱歉让您久等了，目前这边有与相关工程师讨论，回复如下：

目前 DSM 在执行数据清理的时候是会先执行 FS scrubbing 再执行 RAID scrubbing ，但由于您当前的许多问题涉及到 Btrfs 的底层原理及行为，由于 Btrfs 是 Oracle 所研发，因此对于此文件系统的具体原理与技术规范的准确解释，我们建议您可以直接查阅或咨询 oracle 官方。

参考： https://docs.oracle.com/en/operating-systems/oracle-linux/8/fsadmin/fsadmin-ManagingtheBtrfsFileSystem.html#btrfs-setup
```

```
我不关心 btrfs 的技术细节，我想问的是 DSM 如何保证数据被修复，或者向用户报告数据无法被修复。

btrfs 存储 2 份 metadata 和 1 份 data ，那么 data 损坏时，DSM 所用的 raid(mdadm)又不能保证 data 可以被修复。那么，在这种情况下，一旦数据无法被修复，DSM 会向用户报告拥有这部分 data 的文件损坏，需要用户手动介入？
```

```
首先，DSM 本身、Btrfs 文件系统又或是带有冗余功能的 RAID ，都不能完全保证在原始数据错误的情况下数据的完整性。

一般情况下如果数据在文件系统中出现错误，则大概率就已经发生文件系统错误，而文件系统检查都是以修好文件系统本身的结构为主，损坏的文件本身很有可能还是坏的。

因此若您的数据十分重要，Synology 始终建议您备份多个数据副本到不同的地方，以保证数据安全。

参考：如何备份 Synology NAS
```

关于这句 "首先，DSM 本身、Btrfs 文件系统又或是带有冗余功能的 RAID ，都不能完全保证在原始数据错误的情况下数据的完整性。" 本身就不对。

对于 Btrfs raid1/10 以及不稳定的 btrfs raid5/6 ，又或者是 zfs mirror/raidz 这种有 self-healing 的 fs 来说，在一份 data 损坏的情况下都可以根据 fs 内部的热冗余或 raid 中的奇偶校验码来修复损坏的那份数据。只有当 data 损坏且没有热冗余的情况下 fs 才会报告 data corruption 需要用户介入。

(注意，目前只有 btrfs/zfs 有 self-healing 。mdadm 没有，硬件 raid 也没有。

威联通用的是纯 zfs ，使用 mirror/raidz 的情况下可以触发 self-healing 修复 corrupted data ；或者像我一样自建存储，使用 btrfs raid10 也能让 self-healing 生效。

总之，准备购买群晖的朋友要注意，就我目前阅读的结论来看，群晖，不论采用什么方案都无法保证数据完整性，他们只能尽量保证 DSM 的运行不出问题；就我发了六七个工单的体验来看，对于知识不够丰富的个人用户来说，群晖的技术支持约等于 0 ，对于有服务器运维经验的用户来说，客服的回复多数时候有误导性。

---------------------------------------------------

看你这些问题，基本上不应该问客服，客服大概率是不知道的。不知道他们有没有高级问题专家，就是所谓的升级处理，可能得由那些人来恢复。

---------------------------------------------------

@PrinceofInj #1 个人客户应该没有这样的工单升级机制，如果有的话，客服看到问题无法回答之后就直接升级到他们的研发那边了，而不是找他们的工程师要一个结论然后发给我。

倒是企业客户的话，应该可以有这样的技术支持，毕竟，大客户充够钱了。

---------------------------------------------------

不知道你哪里不满意？

数据要恢复，必须要有冗余，这是客观规律。

DSM 可以实现，如果开启了数据检验功能，如果 data 有错误，那么在读取文件时，或者 data scrub 时，会利用 RAID 5/6 的冗余来恢复。

如果是你设计，你能设计出更好的方案么？

---------------------------------------------------

数据还是得靠冷备，群辉我只做集合

---------------------------------------------------

@geniussoft #3 群晖无法保证数据可以被修复。群晖的 btrfs 跑在 mdadm+lvm 上，fs 内只有 metadata 带热冗余，data 不带。

你所谓的利用 raid 5/6 来恢复用的是 mdadm 的软 raid ，mdadm raid5/6 在发生数据不一致时它不管到底是数据有问题还是 checksum 有问题，统一认为 checksum 有问题，这就有可能利用错误的数据计算出错误的 checksum 。即，mdadm 只会改 btrfs 看不见的 checksum ，btrfs 原来看见的是啥，现在看见的还是啥，数据该坏还是坏的。

这套逻辑的核心不是数据完整性，而是保证 mdadm+lvm+btrfs 这个组合正常运行。

建议仔细阅读工单内容。

---------------------------------------------------

聊的过于高深了 有些看不懂了
但是省流就是用 btrfs 的话存在数据自己损毁(非硬件故障)的可能 且这种损毁不会自动修复 只能依靠备份/raid 数据来修复对吧?

---------------------------------------------------

@GooMS #4 是的，我原先准备今年双十一买个新群晖来替换我 2 盘位的群晖。现在没这个欲望了。

现在我保留群晖的原因只有方便的外网访问，以及 DSM Photos 了。

---------------------------------------------------

在我理解看来，技术支持是帮助用户实现功能的，不是探讨方案先进性的。
所以其实群晖技术支持能阐述其技术的基本流程与关键词，并给与第三方的技术参考页面，在我看来已经算是合格了。

然后奇怪的是，楼主讨论到一半，说：“我不关心 btrfs 的技术细节……”从而转进到了群晖的业务方案，在我看来技术支持没有权限来回答这个问题。

这就像是你去饭馆，问老板，你这个面条用的什么面啊？老板说，我们用的中筋面粉，这样软硬适中。
然后你又说，我不关心面粉细节，我关心的是你家面条是怎么做的？都添加了什么？顺序怎样的？ 25 个香料分别是什么？配比如何？怎么保证我的口感和味道的同时还能保证我的食品安全？

这老板不给你打出去算是脾气好的。

---------------------------------------------------

NAS 真的用的我心累, 太难折腾了, 我搞个 jellyfin 也一堆问题, 心累

---------------------------------------------------

@Ericality #6 省流版

群晖的 btrfs 在无硬件故障的情况下，可能出现数据损坏，并且在群晖发现数据损坏之前，不会向用户报告。而且一旦碰到无法修复的情况，要恢复数据就只能靠用户自己的冷备。群晖自带的 mdadm raid 也救不回来。

( 软件和硬件 raid 的核心是高可用，只有 btrfs/zfs 才在 raid 的基础上加了 self-healing 的功能

---------------------------------------------------

至于说“...都不能完全保证在原始数据错误的情况下数据的完整性。”

这是完全正确的，他的用词是“完全保证”。即任何的文件系统方案都是保证高可用，并不保证数据 100%安全。
在这个语境下，其实就是在给楼主下逐客令，不想跟你聊了。

---------------------------------------------------

@gridsah 
看来是你没有认真理解。

首先发生的是 FS 检查，所以不会落入你说的问题中。
（实际上你说的问题，是常见的误区，即 RAID1/5 的问题，当冗余不一致时，根本无从判断哪个正确。）

但是当 DSM 开启数据检验时，它可以根据 CRC 确定哪个副本是正确的。

CRC32-C Checksums - Checksums will be generated for user data and metadata to avoid silent corruption. If a checksum mismatch is detected during a reading process, it will first try to recover automatically, by obtaining a good copy of this block for metadata. If no good copy is available, an error will be reported to the user.
• Silent data corruption detection and recovery (file self-healing) - In DSM 6.1 and above, Btrfs file system has the ability to not only detect the silent corruption on the user data but also to recover it. If checksum mismatch is detected, the file system layer instructs MD layer to read redundant copy (parity or mirror) of the damaged block. It will then automatically recover the damaged block with the good redundant copy. This file self-healing feature requires the RAID volumes to run RAID 1, 5, 6, 10, F1, or SHR.

---------------------------------------------------

@sentinelK #8 emmmmm 你说的好像也没啥毛病，这个角度是回应 toC 业务的情况。我印象里群晖有好多 toB 的业务，所以我试图以一个 toB 业务客户的身份和客户聊，从 toB 的角度看，我问实现细节其实是没啥问题的。

额，应该是我把工作习惯带到这里了吧，我接触的比较多的都是 toB 业务。

至于你提到我说 "我不关心 btrfs 的技术细节" 是因为，我看出客服好像不想回答实现细节，所以我试图变成一个小白用户，让客服直接给我一个结论，能或者不能。

最后客服给了我一个误导性很强的不能.......

---------------------------------------------------

那你为啥不觉得 zfs 会有问题。  数据在内存中处理都可能有错，有相应的规则 算法去处理的，别老想的这么极端，真想研究 读读底层实现，去问一个客服是徒劳

---------------------------------------------------

@geniussoft #12 我根据你这段找到了一个 Synology_Data_Protection_White_Paper.pdf 让我先读一读。

---------------------------------------------------

@devopsdogdog #14 因为群晖的 btrfs 是跑在一层层 device mapper 映射出的设备上的。而 zfs 我见到的，多是直接用硬盘，或者硬盘分区。所以我才去研究群晖对于 btrfs 的用法以及他们的 hack 。

---------------------------------------------------

@geniussoft #12 过了一下 Synology_Data_Protection_White_Paper.pdf 

我的理解是，群晖对于 btrfs 做了一些 hack ，让 btrfs 在发现 data extent 的 checksum 不一致时，就从 mdadm 读这个数据的 redundant copy ，然后据此恢复这个 data extent 的数据？

我查了好久群晖如何处理 bit rot 的文档，没想到从这找见了 hhhhh

---------------------------------------------------

群晖的这个 mdadm+lvm+btrfs 的方案确实不如 zfs 的实现优雅。我猜群晖应该也没有加 dm-integrity ，https://unixsheikh.com/articles/battle-testing-zfs-btrfs-and-mdadm-dm.html 从这篇文章的测试结果看，加了 dm-intergrity 后非常慢。

---------------------------------------------------

@gridsah 我觉得普通客服是肯定不懂这些的。而且家用级的 Plus 这种都是走代理商走量的，你的工单肯定到不了研发，因为所有成本肯定最后都要算到产品里的。如果是 RS3622xs 这类的你应该能通过销售去找到研发的。

---------------------------------------------------

现在对客服的要求都这么高了么。。。

---------------------------------------------------

@xianghou #19 
@akira #20 

我原本的打算就是，客服肯定回答不了，直接转研发，我和他们聊。

@sentinelK #11 

我知道，所以，工单到那也就停了。

---------------------------------------------------

@gridsah 巧好我遇到了一个关于 photos 的问题，不知道你方便想咨询一下你，
我和家人每个人都有自己的帐号，然后我创建的相册（共享空间）则其他人看不见，只能通过手动分享，但给每个相册都分享有点繁琐了，并且分享链接是必然生成的，相当于在公网上。因为这个问题迟迟我一直没有真正的用起来。

---------------------------------------------------

@geniussoft #12 补 #15 的内容

#12 只是我阅读群晖这篇文档后的推测。目前我依旧坚持我写在 #10 的判断。

即，群晖先做 fs scrub 再做 raid (mdadm) scrub 的成果是，修复影响 btrfs over lvm over mdadm 这套组合正常运行的问题，而由于 mdadm 暴露给 btrfs 的，btrfs 能看到的数据没有变化，所以 btrfs 不能修复已损坏的数据，最终，用户已损坏的数据保持在已损坏状态。

原因如下。

我试图从 raid.wiki.kernel.org 中验证 mdadm 是否有直接的可供 DSM 使用的，用以获取数据 redundant copy 的方法，以佐证我 #12 的猜测，但是没找到。我只找到了:

https://raid.wiki.kernel.org/index.php/Detecting,_querying_and_testing#Simulating_data_corruption mdadm 并不保证数据完整性
https://raid.wiki.kernel.org/index.php/Scrubbing_the_drives mdadm 检测到 block error 时，对于 raid1 就从第一个盘取数据然后搬到其他盘，对于 raid5/6 就根据现有数据重新计算校验和

-----

如果让我来实现这个获取数据的 redundant copy 的功能的话，我先给一个 raid1 的思路，先从 btrfs 中拿到到已损坏的数据所处的，相对于文件系统起始的位置偏移；再计算 btrfs 所在的 lv 的对于硬盘的物理位置，结合二者可以计算出硬盘什么位置有 block error ，然后去 mdadm raid1 的从盘上对应的位置找到对应位置，利用从盘上的数据计算 checksum 并和 btrfs 中的 checksum 比对，以确定到底是主盘上的数据有问题，还是从盘上的数据有问题，然后修复。

这还是建立在存储池空间连续的情况下。群晖给存储池提供了足够的的灵活性，如果用户先建立数个小存储池 (对应数个 lv)，然后给存储池扩容，这就导致属于每个存储池 (lv) 的空间并不连续，会增加计算难度。

这还没算 SHR+raid1 等其他组合的计算难度和工作量。除了 raid1 还有 raid5/6......

总之，实际操作复杂得多。计算这些数据需要群晖的开发人员对于 mdadm, lvm, btrfs 中数据在硬盘上的的物理分布有深入的理解。而兼容群晖所提供的灵活性也需要大量的开发和测试工作。

**而就我对群晖的主观认知，他们不会投入精力在定制这些基础组件上，所以我判断他们用的是原版的 mdadm 。**

而原版 mdadm 的行为，如文档所说，并不保证数据完整性。

-----

所以 bro 你还有其他可以佐证的文档没有。

( 我最近在读关于群晖如何保证数据完整性的文档，目前我的主观判断是，群晖无法真正保证用户数据的完整性，所以我原定的双十一购买新的群晖的计划也就无了

---------------------------------------------------

@GooMS #22 我没太看懂你在说啥，给一个具体的案例？

---------------------------------------------------

@gridsah #23 

这还是建立在存储池空间连续的情况下。群晖给存储池提供了足够的的灵活性，如果用户先建立数个小存储池 (对应数个 lv)，然后给存储池扩容，这就导致属于每个存储池 (lv) 的空间并不连续，会增加计算难度。

这段的 '存储池' 改成 '存储空间'。

---------------------------------------------------

@gridsah 
对于 raid 5/6 ，读取的时候不读检验部分。

对于你担心的，
如果数据是正确的（符合 crc ），而 RAID 校验又不一致，
唯一的可能就是 raid 校验部分有问题。
（因为文件系统不读校验）

所以此时的处理方法 — 假设数据正确，重算校验 — 是完全正确的。

---------------------------------------------------

@geniussoft #26 我没太看懂你这段再说啥，能不能说具体一点？

---------------------------------------------------

@gridsah raid5/6 默认是不读校验条带的，除非降级或者 scrub 。

如果像你说的，FS 读到的数据是正确的，但是 RAID 又出现了不一致，那肯定是校验条带出的问题……

---------------------------------------------------

@geniussoft #28 我的假设是 btrfs 已经检测到了 data extent (不是 metadata) 的 checksum 异常，这才表示 data corruption 。

在 raid1 中，这表示 (a) mdadm raid1 主盘 (第一块盘) 中的数据有了问题，但由于 btrfs 只存了一份 data extent 所以 btrfs 修不了。mdadm 再做 scrub 的话，会把主盘上的有了问题的数据覆写到从盘上。此时数据就彻底坏了。

(b) mdadm raid1 的从盘 (第二块硬盘) 中的数据有了问题，但主盘上的数据可能是好的，mdadm 再做 scrub ，会把主盘上的可能 OK 的数据覆写到从盘上。此时数据可能就正常了。

你说的 'raid5/6 默认是不读校验条带的' 是指什么时候不读，不读条带数据，还是不读校验数据？

---------------------------------------------------

@geniussoft #28 bro 你如果想要提出你的不同意见的话，最好完整地加上前音后果，准确地使用术语，这可以提升我们的沟通效率。

or, bro, we can use English to talk about that, if you do not know how to say those concepts in Mandarin clearly.

That's OK for me.

---------------------------------------------------

读到这的朋友请宽容一下我上面的那些错别字，我自己定制了 rime 的输入方案，还没磨合好.... thanks

---------------------------------------------------

@GooMS 你说的 photos 的问题。你需要共享空间的那个目录给对应用户可读权限，对方就能在共享空间看到了。不需要手动分享。（但是非管理员无法以时间线形式看共享空间，只能以文件夹的形式）

---------------------------------------------------

@beijiaoff 共享空间中上传的图片都可以看到，但是把图片创建相册就不行了

---------------------------------------------------

@GooMS 相册就无法看见

---------------------------------------------------

群晖最近十来年 Ticket 的回复质量直线下降，楼主这个 Ticket 回复我觉得已经好得超出预期了，至少是在一定程度上有在想办法认真回复，而不是乱丢一个文档把人打发走。

---------------------------------------------------

@gridsah #30 Welcome to send your questions to linux-btrfs@vger.kernel.org

---------------------------------------------------

qnap 的客户支持其实挺不错的,我之前开工单以后他们的工程师会打电话过来一起处理

---------------------------------------------------

@gridsah #10  不是最底层做了一次 raid 1 了么？ 为什么数据还只是存储一份？  raid 是高可用，没说一点可靠性没有呀

---------------------------------------------------

感觉有点强人所难，就好比你买了个微软 win11 系统然后去问微软客服 refs 怎么保护我的数据一样。
再说 btrfs 又不是群晖开发的，你这么问人家难免会有些来找茬的感觉。
对于楼主问题：
在 Linux 上 btrfs 默认存储两份 metadata 用于在 metadata 损坏时修复这些损坏的 metadata ，而 data 则只存了一份，所以在这种情况下，如果 data 的 checksum 出现异常则无法修复。

有查到官方文件中大致解决流程是在启用一致性校验的共享文件夹中写入数据时会生成文件的 btrfs 文件系统 checksum ，在你读文件时会重新计算文件的 checksum 查看是否和之前记录的 checksum 一致，如果不一致则可能是 data 区域坏了，那这个时候就会调用 mdadm 的修复功能，以 3 块盘 raid5 为例，在正常读文件的时候是不会去读校验块的，所以可能是数据盘 2 块的其中一块发生问题导致 data 出错，那这个时候就会尝试使用 mdadm 的校验块和两块盘分别尝试进行数据恢复，如果重计算出来的 data 和 btrfs 里之前记录的 checksum 一致则就恢复成功，那如果都失败那就完蛋了。而又由于 btrfs 文件系统的 checksum 是在 metadata 里的会存两份，所以文件的 checksum 出错概率会相对比较低。

---------------------------------------------------

@Damenly1 #36 That's not a btrfs problem. That's a problem about how Synology uses btrfs and mdadm or even how Synology customs btrfs and mdadm. So sending an email to btrfs team will have no help with the problem.

@Rorysky #38 不是数据只存储了一份，是 btrfs 只看见了一份。mdadm+lvm 屏蔽了 btrfs 对于底层存储结构的感知。

@zhughs #39 emmmmm 你举的微软的例子，我这么干过，只不过我问的不是 refs ，是 DFS ，微软的客服教我怎么提 ticket 怎样升级到对应工程师那里，最后，怎么付钱。群晖既然敢把这个东西商用，那就要接受客户的相关提问，或者，回答不了的时候，教客户怎么升级 ticket ，并且收费，而不是强行回答。我都愿意买没什么性价比的白群晖了，愿意付钱。

直白点说，你对于 btrfs 和 mdadm 的存储结构和行为的理解不对。从 '那这个时候就会调用 mdadm 的修复功能' 这里开始错。mdadm 自己的修复功能就像我之前说的那样，mdadm 自己也不知道自己的 raid5 中哪里的数据对，哪里的数据不对，mdadm 所做的只是让 mdadm 可以正常运行下去，而不是修好用户的数据。

至于你后面所描述的修复行为，mdadm 没有这样的功能，btrfs 也没有。要有那就只能是群晖自己做的，而就我对于这个功能的工作量的估计与对群晖的了解来看，群晖没有能力对底层做这样的改动。 *注意，这句是我的主观判断。*

'而又由于 btrfs 文件系统的 checksum 是在 metadata 里的会存两份，所以文件的 checksum 出错概率会相对比较低。'

并不是 checksum 在 metadata 里存两份，而是每一个 data extent 有存有自己的校验和，metadata 也有自己的校验和，然后默认情况下硬盘中有两份一模一样的 metadata ，所以可以做到 metadata 的 self-healing ，而 data extent 只有一份，所以无法触发 self-healing 。

---------------------------------------------------

后面来的朋友们，这是个吐槽帖啊，不是个技术辩论帖啊，这帖的画风咋歪成这样了 /?

---------------------------------------------------

@GooMS #34 这听起来像是权限问题

但最简单的方法是，让我学一下 @liuxu 老哥，开个 ssh 让我登上去看看。

---------------------------------------------------

@gridsah 
1.好像目前群晖还没有收费的技术支持，可能你买一台 DS3622xs 再提工单会好一些？（充值方式不同）
这边有用公司的 SA3200D 提交问题，回复速度和回复问题的精细程度完全碾压我自己 916 提的。
2.有关于 mdadm 自己也不知道自己的 raid5 中哪里的数据对，哪里的数据不对，mdadm 所做的只是让 mdadm 可以正常运行下去
btrfs 可以通过出错逻辑位置转换为物理位置然后让对应的 mdadm 重算，这个在技术层面可以实现。而且新版本也有提供 mdadm 的 fast repair 功能，这个需要文件系统的配合，说明是有魔改过的。

3.data checksum 是存储在 btrfs 的 checksum tree ，而 checksum tree 是在 metadata extent 里的，所以必定是两份。

---------------------------------------------------

@zhughs #43 关于第二点 '提供 mdadm 的 fast repair 功能' 这个有链接或者出处吗，我想看看

第三点，我看 btrfs 文档说的是 The whole metadata block has a checksum stored inline in the b-tree node header, each data block has a detached checksum stored in the checksum tree.

按照你的理解方式: 文档逗号以前的意思是，metadata extent 有一个和 metadata 数据存储在一起的 checksum 。data block has a detached checksum stored in the checksum tree 的意思是所有的数据的 checksum ，不论是 metadata 还是 data ，都存储在一个共用的 checksum tree 里面，所以 metadata 的 checksum 有两份。

但是，文档里说，metadata 也有两份，如果按照你这个思路继续推，两份 metadata 有两份跟随 metadata extent 的 checksum ，然后 checksum tree 里还有一份 metadata 的 checksum ，那这不就有三份 metadata 的 checksum 了吗。

所以我认为，文档中逗号以前的意思是，metadata extent 有一个和 metadata 数据存储在一起的 checksum ，不变。但是 metadata 有两份，因此 metadata 的 checksum 有两份。data block has a detached checksum stored in the checksum tree 的意思是所有的 data extent (不包括 metadata extent) 的 checksum 存储在一个独立的 checksum tree 中。所以 data extent 有一份数据 (一个 data extent tree) 和一份 checksum (一个 checksum tree)。

emmmmm 我觉得我的理解比较合理。

---------------------------------------------------

@zhughs #43 说白了，我就是想知道群晖如何处理 silent data corruption...... 

关于第二点，文件的逻辑位置转硬盘物理位置，组合数据之后重新计算 checksum 的这个功能，在 #23 我估了一下这个功能的工作量，很大，不论是对 madm, btrfs 还是对 DSM 底层的魔改，工作量都很大。我觉得群晖不大可能费力气做这个功能。

我在 存储池 -> 全局设置 里面找到了这个功能。关于这个功能，我只在 https://www.reddit.com/r/synology/comments/qy51ba/what_the_heck_is_fast_repair/?rdt=53246 看到了关于这个功能的猜测，还未被证实。如果帖子里的描述是真的的话，那说不准群晖还真的做了这个功能。

但从回帖的内容来看，我和这帮老外的想法一样，群晖不会花大功夫来研究和定制底层。

而且我认为我的看法是对的，因为，从我这个角度来看，至少他们在升级组件的时候不会有额外的，因兼容群晖自己的魔改而产生的额外的工作量；而且不魔改组件也意味着，不会受人事的限制，不用担心会魔改的员工走了以后没人接活儿的问题。

---------------------------------------------------

找客服讨论技术支持？不应该找售后工程师吗？

还有最后强调这是吐槽贴。

怕是国内的托吧。

最后给小伙伴建议，重要数据安全还是要靠多备份，冷备份，异地备份。

---------------------------------------------------

@sorsens #46 你连基本的判断能力都没有吗，上来就喷，已拉黑

---------------------------------------------------

你怎么理解，技术支持说的 [当文件系统在进行 FS scrubbing 的时候如果查到某个文档 data 真的坏了，那就会去做 RAID scrubbing 然后用 RAID parity 来修修看（不管有没有开 COW ）] 

这不明显意思，有额外的机制会由文件系统的校验值异常而去处罚软 raid 层的动作么？

感觉你问问题都是预设的立场。

---------------------------------------------------

看了楼主，觉得群晖技术支持真好

万亿市值的 BAT 都没活人客服，我要问阿里你们淘宝技术细节估计我号立刻就炸了

---------------------------------------------------

@Rorysky 我对那句话的认识是，群晖的这个人不理解 mdadm scrub 的行为，导致他认为 mdadm scrub 可以修复 btrfs 中的 data corruption 。

因为，我对所有组件的预期行为是它们在未被群晖定制的情况下的行为，对于未定制过的 mdadm 来说，mdadm scrub 修复的是 mdadm 自身的问题，无法修复 mdadm 之上的 btrfs 中的问题。而我问他 mdadm scrub 凭什么可以修复 btrfs 中的问题，群晖的人又不告诉我原因。所以我有理由怀疑群晖的这个人并不理解这些组件的协同工作方式；或者从恶意的角度出发，他理解，但是他以为我是竞争对手的人而不想告诉我。

另外，你想要讨论，我欢迎，请发表你的观点与逻辑链，不要针对我如何来输出。你可以说我的观点是错的、浅显、片面，然后开始反驳，而不能说感觉我如何如何，你要再这么说的话我就要开喷了。

---------------------------------------------------

@Admstor 淦，群晖的看到了请联系我付宣传费。

群晖和 bat 不一样的吧，bat 是使用开源工具来自己写服务，然后用自己写的服务挣钱；群晖是把开源服务组合起来卖钱。我问 bat 他们的服务咋写的他们肯定不会告诉我，但是如果我问他们的东西怎么用的话，就很合理；迁移到群晖这边就是，我问群晖的客服你们这个保证客户数据完整性的功能是用什么组合出来的，我觉得没啥不合理的。hhhhhh

倒是，群晖的客服和 bat 的客服一比，确实算很不错了。

---------------------------------------------------

后面来的朋友们，这是个吐槽帖啊，不是个技术辩论帖啊，这帖的画风咋歪成这样了 /?

---------------------------------------------------

@GooMS #34 这听起来像是权限问题

但最简单的方法是，让我学一下 @liuxu 老哥，开个 ssh 让我登上去看看。

---------------------------------------------------

@gridsah 
1.好像目前群晖还没有收费的技术支持，可能你买一台 DS3622xs 再提工单会好一些？（充值方式不同）
这边有用公司的 SA3200D 提交问题，回复速度和回复问题的精细程度完全碾压我自己 916 提的。
2.有关于 mdadm 自己也不知道自己的 raid5 中哪里的数据对，哪里的数据不对，mdadm 所做的只是让 mdadm 可以正常运行下去
btrfs 可以通过出错逻辑位置转换为物理位置然后让对应的 mdadm 重算，这个在技术层面可以实现。而且新版本也有提供 mdadm 的 fast repair 功能，这个需要文件系统的配合，说明是有魔改过的。

3.data checksum 是存储在 btrfs 的 checksum tree ，而 checksum tree 是在 metadata extent 里的，所以必定是两份。

---------------------------------------------------

@zhughs #43 关于第二点 '提供 mdadm 的 fast repair 功能' 这个有链接或者出处吗，我想看看

第三点，我看 btrfs 文档说的是 The whole metadata block has a checksum stored inline in the b-tree node header, each data block has a detached checksum stored in the checksum tree.

按照你的理解方式: 文档逗号以前的意思是，metadata extent 有一个和 metadata 数据存储在一起的 checksum 。data block has a detached checksum stored in the checksum tree 的意思是所有的数据的 checksum ，不论是 metadata 还是 data ，都存储在一个共用的 checksum tree 里面，所以 metadata 的 checksum 有两份。

但是，文档里说，metadata 也有两份，如果按照你这个思路继续推，两份 metadata 有两份跟随 metadata extent 的 checksum ，然后 checksum tree 里还有一份 metadata 的 checksum ，那这不就有三份 metadata 的 checksum 了吗。

所以我认为，文档中逗号以前的意思是，metadata extent 有一个和 metadata 数据存储在一起的 checksum ，不变。但是 metadata 有两份，因此 metadata 的 checksum 有两份。data block has a detached checksum stored in the checksum tree 的意思是所有的 data extent (不包括 metadata extent) 的 checksum 存储在一个独立的 checksum tree 中。所以 data extent 有一份数据 (一个 data extent tree) 和一份 checksum (一个 checksum tree)。

emmmmm 我觉得我的理解比较合理。

---------------------------------------------------

@zhughs #43 说白了，我就是想知道群晖如何处理 silent data corruption...... 

关于第二点，文件的逻辑位置转硬盘物理位置，组合数据之后重新计算 checksum 的这个功能，在 #23 我估了一下这个功能的工作量，很大，不论是对 madm, btrfs 还是对 DSM 底层的魔改，工作量都很大。我觉得群晖不大可能费力气做这个功能。

我在 存储池 -> 全局设置 里面找到了这个功能。关于这个功能，我只在 https://www.reddit.com/r/synology/comments/qy51ba/what_the_heck_is_fast_repair/?rdt=53246 看到了关于这个功能的猜测，还未被证实。如果帖子里的描述是真的的话，那说不准群晖还真的做了这个功能。

但从回帖的内容来看，我和这帮老外的想法一样，群晖不会花大功夫来研究和定制底层。

而且我认为我的看法是对的，因为，从我这个角度来看，至少他们在升级组件的时候不会有额外的，因兼容群晖自己的魔改而产生的额外的工作量；而且不魔改组件也意味着，不会受人事的限制，不用担心会魔改的员工走了以后没人接活儿的问题。

---------------------------------------------------

找客服讨论技术支持？不应该找售后工程师吗？

还有最后强调这是吐槽贴。

怕是国内的托吧。

最后给小伙伴建议，重要数据安全还是要靠多备份，冷备份，异地备份。

---------------------------------------------------

@sorsens #46 你连基本的判断能力都没有吗，上来就喷，已拉黑

---------------------------------------------------

你怎么理解，技术支持说的 [当文件系统在进行 FS scrubbing 的时候如果查到某个文档 data 真的坏了，那就会去做 RAID scrubbing 然后用 RAID parity 来修修看（不管有没有开 COW ）] 

这不明显意思，有额外的机制会由文件系统的校验值异常而去处罚软 raid 层的动作么？

感觉你问问题都是预设的立场。

---------------------------------------------------

看了楼主，觉得群晖技术支持真好

万亿市值的 BAT 都没活人客服，我要问阿里你们淘宝技术细节估计我号立刻就炸了

---------------------------------------------------

@Rorysky 我对那句话的认识是，群晖的这个人不理解 mdadm scrub 的行为，导致他认为 mdadm scrub 可以修复 btrfs 中的 data corruption 。

因为，我对所有组件的预期行为是它们在未被群晖定制的情况下的行为，对于未定制过的 mdadm 来说，mdadm scrub 修复的是 mdadm 自身的问题，无法修复 mdadm 之上的 btrfs 中的问题。而我问他 mdadm scrub 凭什么可以修复 btrfs 中的问题，群晖的人又不告诉我原因。所以我有理由怀疑群晖的这个人并不理解这些组件的协同工作方式；或者从恶意的角度出发，他理解，但是他以为我是竞争对手的人而不想告诉我。

另外，你想要讨论，我欢迎，请发表你的观点与逻辑链，不要针对我如何来输出。你可以说我的观点是错的、浅显、片面，然后开始反驳，而不能说感觉我如何如何，你要再这么说的话我就要开喷了。

---------------------------------------------------

@Admstor 淦，群晖的看到了请联系我付宣传费。

群晖和 bat 不一样的吧，bat 是使用开源工具来自己写服务，然后用自己写的服务挣钱；群晖是把开源服务组合起来卖钱。我问 bat 他们的服务咋写的他们肯定不会告诉我，但是如果我问他们的东西怎么用的话，就很合理；迁移到群晖这边就是，我问群晖的客服你们这个保证客户数据完整性的功能是用什么组合出来的，我觉得没啥不合理的。hhhhhh

倒是，群晖的客服和 bat 的客服一比，确实算很不错了。

---------------------------------------------------

后面来的朋友们，这是个吐槽帖啊，不是个技术辩论帖啊，这帖的画风咋歪成这样了 /?

---------------------------------------------------

@GooMS #34 这听起来像是权限问题

但最简单的方法是，让我学一下 @liuxu 老哥，开个 ssh 让我登上去看看。

---------------------------------------------------

@gridsah 
1.好像目前群晖还没有收费的技术支持，可能你买一台 DS3622xs 再提工单会好一些？（充值方式不同）
这边有用公司的 SA3200D 提交问题，回复速度和回复问题的精细程度完全碾压我自己 916 提的。
2.有关于 mdadm 自己也不知道自己的 raid5 中哪里的数据对，哪里的数据不对，mdadm 所做的只是让 mdadm 可以正常运行下去
btrfs 可以通过出错逻辑位置转换为物理位置然后让对应的 mdadm 重算，这个在技术层面可以实现。而且新版本也有提供 mdadm 的 fast repair 功能，这个需要文件系统的配合，说明是有魔改过的。

3.data checksum 是存储在 btrfs 的 checksum tree ，而 checksum tree 是在 metadata extent 里的，所以必定是两份。

---------------------------------------------------

@zhughs #43 关于第二点 '提供 mdadm 的 fast repair 功能' 这个有链接或者出处吗，我想看看

第三点，我看 btrfs 文档说的是 The whole metadata block has a checksum stored inline in the b-tree node header, each data block has a detached checksum stored in the checksum tree.

按照你的理解方式: 文档逗号以前的意思是，metadata extent 有一个和 metadata 数据存储在一起的 checksum 。data block has a detached checksum stored in the checksum tree 的意思是所有的数据的 checksum ，不论是 metadata 还是 data ，都存储在一个共用的 checksum tree 里面，所以 metadata 的 checksum 有两份。

但是，文档里说，metadata 也有两份，如果按照你这个思路继续推，两份 metadata 有两份跟随 metadata extent 的 checksum ，然后 checksum tree 里还有一份 metadata 的 checksum ，那这不就有三份 metadata 的 checksum 了吗。

所以我认为，文档中逗号以前的意思是，metadata extent 有一个和 metadata 数据存储在一起的 checksum ，不变。但是 metadata 有两份，因此 metadata 的 checksum 有两份。data block has a detached checksum stored in the checksum tree 的意思是所有的 data extent (不包括 metadata extent) 的 checksum 存储在一个独立的 checksum tree 中。所以 data extent 有一份数据 (一个 data extent tree) 和一份 checksum (一个 checksum tree)。

emmmmm 我觉得我的理解比较合理。

---------------------------------------------------

@zhughs #43 说白了，我就是想知道群晖如何处理 silent data corruption...... 

关于第二点，文件的逻辑位置转硬盘物理位置，组合数据之后重新计算 checksum 的这个功能，在 #23 我估了一下这个功能的工作量，很大，不论是对 madm, btrfs 还是对 DSM 底层的魔改，工作量都很大。我觉得群晖不大可能费力气做这个功能。

我在 存储池 -> 全局设置 里面找到了这个功能。关于这个功能，我只在 https://www.reddit.com/r/synology/comments/qy51ba/what_the_heck_is_fast_repair/?rdt=53246 看到了关于这个功能的猜测，还未被证实。如果帖子里的描述是真的的话，那说不准群晖还真的做了这个功能。

但从回帖的内容来看，我和这帮老外的想法一样，群晖不会花大功夫来研究和定制底层。

而且我认为我的看法是对的，因为，从我这个角度来看，至少他们在升级组件的时候不会有额外的，因兼容群晖自己的魔改而产生的额外的工作量；而且不魔改组件也意味着，不会受人事的限制，不用担心会魔改的员工走了以后没人接活儿的问题。

---------------------------------------------------

找客服讨论技术支持？不应该找售后工程师吗？

还有最后强调这是吐槽贴。

怕是国内的托吧。

最后给小伙伴建议，重要数据安全还是要靠多备份，冷备份，异地备份。

---------------------------------------------------

@sorsens #46 你连基本的判断能力都没有吗，上来就喷，已拉黑

---------------------------------------------------

你怎么理解，技术支持说的 [当文件系统在进行 FS scrubbing 的时候如果查到某个文档 data 真的坏了，那就会去做 RAID scrubbing 然后用 RAID parity 来修修看（不管有没有开 COW ）] 

这不明显意思，有额外的机制会由文件系统的校验值异常而去处罚软 raid 层的动作么？

感觉你问问题都是预设的立场。

---------------------------------------------------

看了楼主，觉得群晖技术支持真好

万亿市值的 BAT 都没活人客服，我要问阿里你们淘宝技术细节估计我号立刻就炸了

---------------------------------------------------

@Rorysky 我对那句话的认识是，群晖的这个人不理解 mdadm scrub 的行为，导致他认为 mdadm scrub 可以修复 btrfs 中的 data corruption 。

因为，我对所有组件的预期行为是它们在未被群晖定制的情况下的行为，对于未定制过的 mdadm 来说，mdadm scrub 修复的是 mdadm 自身的问题，无法修复 mdadm 之上的 btrfs 中的问题。而我问他 mdadm scrub 凭什么可以修复 btrfs 中的问题，群晖的人又不告诉我原因。所以我有理由怀疑群晖的这个人并不理解这些组件的协同工作方式；或者从恶意的角度出发，他理解，但是他以为我是竞争对手的人而不想告诉我。

另外，你想要讨论，我欢迎，请发表你的观点与逻辑链，不要针对我如何来输出。你可以说我的观点是错的、浅显、片面，然后开始反驳，而不能说感觉我如何如何，你要再这么说的话我就要开喷了。

---------------------------------------------------

@Admstor 淦，群晖的看到了请联系我付宣传费。

群晖和 bat 不一样的吧，bat 是使用开源工具来自己写服务，然后用自己写的服务挣钱；群晖是把开源服务组合起来卖钱。我问 bat 他们的服务咋写的他们肯定不会告诉我，但是如果我问他们的东西怎么用的话，就很合理；迁移到群晖这边就是，我问群晖的客服你们这个保证客户数据完整性的功能是用什么组合出来的，我觉得没啥不合理的。hhhhhh

倒是，群晖的客服和 bat 的客服一比，确实算很不错了。

---------------------------------------------------

后面来的朋友们，这是个吐槽帖啊，不是个技术辩论帖啊，这帖的画风咋歪成这样了 /?

---------------------------------------------------

@GooMS #34 这听起来像是权限问题

但最简单的方法是，让我学一下 @liuxu 老哥，开个 ssh 让我登上去看看。

---------------------------------------------------

@gridsah 
1.好像目前群晖还没有收费的技术支持，可能你买一台 DS3622xs 再提工单会好一些？（充值方式不同）
这边有用公司的 SA3200D 提交问题，回复速度和回复问题的精细程度完全碾压我自己 916 提的。
2.有关于 mdadm 自己也不知道自己的 raid5 中哪里的数据对，哪里的数据不对，mdadm 所做的只是让 mdadm 可以正常运行下去
btrfs 可以通过出错逻辑位置转换为物理位置然后让对应的 mdadm 重算，这个在技术层面可以实现。而且新版本也有提供 mdadm 的 fast repair 功能，这个需要文件系统的配合，说明是有魔改过的。

3.data checksum 是存储在 btrfs 的 checksum tree ，而 checksum tree 是在 metadata extent 里的，所以必定是两份。

---------------------------------------------------

@zhughs #43 关于第二点 '提供 mdadm 的 fast repair 功能' 这个有链接或者出处吗，我想看看

第三点，我看 btrfs 文档说的是 The whole metadata block has a checksum stored inline in the b-tree node header, each data block has a detached checksum stored in the checksum tree.

按照你的理解方式: 文档逗号以前的意思是，metadata extent 有一个和 metadata 数据存储在一起的 checksum 。data block has a detached checksum stored in the checksum tree 的意思是所有的数据的 checksum ，不论是 metadata 还是 data ，都存储在一个共用的 checksum tree 里面，所以 metadata 的 checksum 有两份。

但是，文档里说，metadata 也有两份，如果按照你这个思路继续推，两份 metadata 有两份跟随 metadata extent 的 checksum ，然后 checksum tree 里还有一份 metadata 的 checksum ，那这不就有三份 metadata 的 checksum 了吗。

所以我认为，文档中逗号以前的意思是，metadata extent 有一个和 metadata 数据存储在一起的 checksum ，不变。但是 metadata 有两份，因此 metadata 的 checksum 有两份。data block has a detached checksum stored in the checksum tree 的意思是所有的 data extent (不包括 metadata extent) 的 checksum 存储在一个独立的 checksum tree 中。所以 data extent 有一份数据 (一个 data extent tree) 和一份 checksum (一个 checksum tree)。

emmmmm 我觉得我的理解比较合理。

---------------------------------------------------

@zhughs #43 说白了，我就是想知道群晖如何处理 silent data corruption...... 

关于第二点，文件的逻辑位置转硬盘物理位置，组合数据之后重新计算 checksum 的这个功能，在 #23 我估了一下这个功能的工作量，很大，不论是对 madm, btrfs 还是对 DSM 底层的魔改，工作量都很大。我觉得群晖不大可能费力气做这个功能。

我在 存储池 -> 全局设置 里面找到了这个功能。关于这个功能，我只在 https://www.reddit.com/r/synology/comments/qy51ba/what_the_heck_is_fast_repair/?rdt=53246 看到了关于这个功能的猜测，还未被证实。如果帖子里的描述是真的的话，那说不准群晖还真的做了这个功能。

但从回帖的内容来看，我和这帮老外的想法一样，群晖不会花大功夫来研究和定制底层。

而且我认为我的看法是对的，因为，从我这个角度来看，至少他们在升级组件的时候不会有额外的，因兼容群晖自己的魔改而产生的额外的工作量；而且不魔改组件也意味着，不会受人事的限制，不用担心会魔改的员工走了以后没人接活儿的问题。

---------------------------------------------------

找客服讨论技术支持？不应该找售后工程师吗？

还有最后强调这是吐槽贴。

怕是国内的托吧。

最后给小伙伴建议，重要数据安全还是要靠多备份，冷备份，异地备份。

---------------------------------------------------

@sorsens #46 你连基本的判断能力都没有吗，上来就喷，已拉黑

---------------------------------------------------

你怎么理解，技术支持说的 [当文件系统在进行 FS scrubbing 的时候如果查到某个文档 data 真的坏了，那就会去做 RAID scrubbing 然后用 RAID parity 来修修看（不管有没有开 COW ）] 

这不明显意思，有额外的机制会由文件系统的校验值异常而去处罚软 raid 层的动作么？

感觉你问问题都是预设的立场。

---------------------------------------------------

看了楼主，觉得群晖技术支持真好

万亿市值的 BAT 都没活人客服，我要问阿里你们淘宝技术细节估计我号立刻就炸了

---------------------------------------------------

@Rorysky 我对那句话的认识是，群晖的这个人不理解 mdadm scrub 的行为，导致他认为 mdadm scrub 可以修复 btrfs 中的 data corruption 。

因为，我对所有组件的预期行为是它们在未被群晖定制的情况下的行为，对于未定制过的 mdadm 来说，mdadm scrub 修复的是 mdadm 自身的问题，无法修复 mdadm 之上的 btrfs 中的问题。而我问他 mdadm scrub 凭什么可以修复 btrfs 中的问题，群晖的人又不告诉我原因。所以我有理由怀疑群晖的这个人并不理解这些组件的协同工作方式；或者从恶意的角度出发，他理解，但是他以为我是竞争对手的人而不想告诉我。

另外，你想要讨论，我欢迎，请发表你的观点与逻辑链，不要针对我如何来输出。你可以说我的观点是错的、浅显、片面，然后开始反驳，而不能说感觉我如何如何，你要再这么说的话我就要开喷了。

---------------------------------------------------

@Admstor 淦，群晖的看到了请联系我付宣传费。

群晖和 bat 不一样的吧，bat 是使用开源工具来自己写服务，然后用自己写的服务挣钱；群晖是把开源服务组合起来卖钱。我问 bat 他们的服务咋写的他们肯定不会告诉我，但是如果我问他们的东西怎么用的话，就很合理；迁移到群晖这边就是，我问群晖的客服你们这个保证客户数据完整性的功能是用什么组合出来的，我觉得没啥不合理的。hhhhhh

倒是，群晖的客服和 bat 的客服一比，确实算很不错了。

---------------------------------------------------

后面来的朋友们，这是个吐槽帖啊，不是个技术辩论帖啊，这帖的画风咋歪成这样了 /?

---------------------------------------------------

@GooMS #34 这听起来像是权限问题

但最简单的方法是，让我学一下 @liuxu 老哥，开个 ssh 让我登上去看看。

---------------------------------------------------

@gridsah 
1.好像目前群晖还没有收费的技术支持，可能你买一台 DS3622xs 再提工单会好一些？（充值方式不同）
这边有用公司的 SA3200D 提交问题，回复速度和回复问题的精细程度完全碾压我自己 916 提的。
2.有关于 mdadm 自己也不知道自己的 raid5 中哪里的数据对，哪里的数据不对，mdadm 所做的只是让 mdadm 可以正常运行下去
btrfs 可以通过出错逻辑位置转换为物理位置然后让对应的 mdadm 重算，这个在技术层面可以实现。而且新版本也有提供 mdadm 的 fast repair 功能，这个需要文件系统的配合，说明是有魔改过的。

3.data checksum 是存储在 btrfs 的 checksum tree ，而 checksum tree 是在 metadata extent 里的，所以必定是两份。

---------------------------------------------------

@zhughs #43 关于第二点 '提供 mdadm 的 fast repair 功能' 这个有链接或者出处吗，我想看看

第三点，我看 btrfs 文档说的是 The whole metadata block has a checksum stored inline in the b-tree node header, each data block has a detached checksum stored in the checksum tree.

按照你的理解方式: 文档逗号以前的意思是，metadata extent 有一个和 metadata 数据存储在一起的 checksum 。data block has a detached checksum stored in the checksum tree 的意思是所有的数据的 checksum ，不论是 metadata 还是 data ，都存储在一个共用的 checksum tree 里面，所以 metadata 的 checksum 有两份。

但是，文档里说，metadata 也有两份，如果按照你这个思路继续推，两份 metadata 有两份跟随 metadata extent 的 checksum ，然后 checksum tree 里还有一份 metadata 的 checksum ，那这不就有三份 metadata 的 checksum 了吗。

所以我认为，文档中逗号以前的意思是，metadata extent 有一个和 metadata 数据存储在一起的 checksum ，不变。但是 metadata 有两份，因此 metadata 的 checksum 有两份。data block has a detached checksum stored in the checksum tree 的意思是所有的 data extent (不包括 metadata extent) 的 checksum 存储在一个独立的 checksum tree 中。所以 data extent 有一份数据 (一个 data extent tree) 和一份 checksum (一个 checksum tree)。

emmmmm 我觉得我的理解比较合理。

---------------------------------------------------

@zhughs #43 说白了，我就是想知道群晖如何处理 silent data corruption...... 

关于第二点，文件的逻辑位置转硬盘物理位置，组合数据之后重新计算 checksum 的这个功能，在 #23 我估了一下这个功能的工作量，很大，不论是对 madm, btrfs 还是对 DSM 底层的魔改，工作量都很大。我觉得群晖不大可能费力气做这个功能。

我在 存储池 -> 全局设置 里面找到了这个功能。关于这个功能，我只在 https://www.reddit.com/r/synology/comments/qy51ba/what_the_heck_is_fast_repair/?rdt=53246 看到了关于这个功能的猜测，还未被证实。如果帖子里的描述是真的的话，那说不准群晖还真的做了这个功能。

但从回帖的内容来看，我和这帮老外的想法一样，群晖不会花大功夫来研究和定制底层。

而且我认为我的看法是对的，因为，从我这个角度来看，至少他们在升级组件的时候不会有额外的，因兼容群晖自己的魔改而产生的额外的工作量；而且不魔改组件也意味着，不会受人事的限制，不用担心会魔改的员工走了以后没人接活儿的问题。

---------------------------------------------------

找客服讨论技术支持？不应该找售后工程师吗？

还有最后强调这是吐槽贴。

怕是国内的托吧。

最后给小伙伴建议，重要数据安全还是要靠多备份，冷备份，异地备份。

---------------------------------------------------

@sorsens #46 你连基本的判断能力都没有吗，上来就喷，已拉黑

---------------------------------------------------

你怎么理解，技术支持说的 [当文件系统在进行 FS scrubbing 的时候如果查到某个文档 data 真的坏了，那就会去做 RAID scrubbing 然后用 RAID parity 来修修看（不管有没有开 COW ）] 

这不明显意思，有额外的机制会由文件系统的校验值异常而去处罚软 raid 层的动作么？

感觉你问问题都是预设的立场。

---------------------------------------------------

看了楼主，觉得群晖技术支持真好

万亿市值的 BAT 都没活人客服，我要问阿里你们淘宝技术细节估计我号立刻就炸了

---------------------------------------------------

@Rorysky 我对那句话的认识是，群晖的这个人不理解 mdadm scrub 的行为，导致他认为 mdadm scrub 可以修复 btrfs 中的 data corruption 。

因为，我对所有组件的预期行为是它们在未被群晖定制的情况下的行为，对于未定制过的 mdadm 来说，mdadm scrub 修复的是 mdadm 自身的问题，无法修复 mdadm 之上的 btrfs 中的问题。而我问他 mdadm scrub 凭什么可以修复 btrfs 中的问题，群晖的人又不告诉我原因。所以我有理由怀疑群晖的这个人并不理解这些组件的协同工作方式；或者从恶意的角度出发，他理解，但是他以为我是竞争对手的人而不想告诉我。

另外，你想要讨论，我欢迎，请发表你的观点与逻辑链，不要针对我如何来输出。你可以说我的观点是错的、浅显、片面，然后开始反驳，而不能说感觉我如何如何，你要再这么说的话我就要开喷了。

---------------------------------------------------

@Admstor 淦，群晖的看到了请联系我付宣传费。

群晖和 bat 不一样的吧，bat 是使用开源工具来自己写服务，然后用自己写的服务挣钱；群晖是把开源服务组合起来卖钱。我问 bat 他们的服务咋写的他们肯定不会告诉我，但是如果我问他们的东西怎么用的话，就很合理；迁移到群晖这边就是，我问群晖的客服你们这个保证客户数据完整性的功能是用什么组合出来的，我觉得没啥不合理的。hhhhhh

倒是，群晖的客服和 bat 的客服一比，确实算很不错了。

---------------------------------------------------

后面来的朋友们，这是个吐槽帖啊，不是个技术辩论帖啊，这帖的画风咋歪成这样了 /?

---------------------------------------------------

@GooMS #34 这听起来像是权限问题

但最简单的方法是，让我学一下 @liuxu 老哥，开个 ssh 让我登上去看看。

---------------------------------------------------

@gridsah 
1.好像目前群晖还没有收费的技术支持，可能你买一台 DS3622xs 再提工单会好一些？（充值方式不同）
这边有用公司的 SA3200D 提交问题，回复速度和回复问题的精细程度完全碾压我自己 916 提的。
2.有关于 mdadm 自己也不知道自己的 raid5 中哪里的数据对，哪里的数据不对，mdadm 所做的只是让 mdadm 可以正常运行下去
btrfs 可以通过出错逻辑位置转换为物理位置然后让对应的 mdadm 重算，这个在技术层面可以实现。而且新版本也有提供 mdadm 的 fast repair 功能，这个需要文件系统的配合，说明是有魔改过的。

3.data checksum 是存储在 btrfs 的 checksum tree ，而 checksum tree 是在 metadata extent 里的，所以必定是两份。

---------------------------------------------------

@zhughs #43 关于第二点 '提供 mdadm 的 fast repair 功能' 这个有链接或者出处吗，我想看看

第三点，我看 btrfs 文档说的是 The whole metadata block has a checksum stored inline in the b-tree node header, each data block has a detached checksum stored in the checksum tree.

按照你的理解方式: 文档逗号以前的意思是，metadata extent 有一个和 metadata 数据存储在一起的 checksum 。data block has a detached checksum stored in the checksum tree 的意思是所有的数据的 checksum ，不论是 metadata 还是 data ，都存储在一个共用的 checksum tree 里面，所以 metadata 的 checksum 有两份。

但是，文档里说，metadata 也有两份，如果按照你这个思路继续推，两份 metadata 有两份跟随 metadata extent 的 checksum ，然后 checksum tree 里还有一份 metadata 的 checksum ，那这不就有三份 metadata 的 checksum 了吗。

所以我认为，文档中逗号以前的意思是，metadata extent 有一个和 metadata 数据存储在一起的 checksum ，不变。但是 metadata 有两份，因此 metadata 的 checksum 有两份。data block has a detached checksum stored in the checksum tree 的意思是所有的 data extent (不包括 metadata extent) 的 checksum 存储在一个独立的 checksum tree 中。所以 data extent 有一份数据 (一个 data extent tree) 和一份 checksum (一个 checksum tree)。

emmmmm 我觉得我的理解比较合理。

---------------------------------------------------

@zhughs #43 说白了，我就是想知道群晖如何处理 silent data corruption...... 

关于第二点，文件的逻辑位置转硬盘物理位置，组合数据之后重新计算 checksum 的这个功能，在 #23 我估了一下这个功能的工作量，很大，不论是对 madm, btrfs 还是对 DSM 底层的魔改，工作量都很大。我觉得群晖不大可能费力气做这个功能。

我在 存储池 -> 全局设置 里面找到了这个功能。关于这个功能，我只在 https://www.reddit.com/r/synology/comments/qy51ba/what_the_heck_is_fast_repair/?rdt=53246 看到了关于这个功能的猜测，还未被证实。如果帖子里的描述是真的的话，那说不准群晖还真的做了这个功能。

但从回帖的内容来看，我和这帮老外的想法一样，群晖不会花大功夫来研究和定制底层。

而且我认为我的看法是对的，因为，从我这个角度来看，至少他们在升级组件的时候不会有额外的，因兼容群晖自己的魔改而产生的额外的工作量；而且不魔改组件也意味着，不会受人事的限制，不用担心会魔改的员工走了以后没人接活儿的问题。

---------------------------------------------------

找客服讨论技术支持？不应该找售后工程师吗？

还有最后强调这是吐槽贴。

怕是国内的托吧。

最后给小伙伴建议，重要数据安全还是要靠多备份，冷备份，异地备份。

---------------------------------------------------

@sorsens #46 你连基本的判断能力都没有吗，上来就喷，已拉黑

---------------------------------------------------

你怎么理解，技术支持说的 [当文件系统在进行 FS scrubbing 的时候如果查到某个文档 data 真的坏了，那就会去做 RAID scrubbing 然后用 RAID parity 来修修看（不管有没有开 COW ）] 

这不明显意思，有额外的机制会由文件系统的校验值异常而去处罚软 raid 层的动作么？

感觉你问问题都是预设的立场。

---------------------------------------------------

看了楼主，觉得群晖技术支持真好

万亿市值的 BAT 都没活人客服，我要问阿里你们淘宝技术细节估计我号立刻就炸了

---------------------------------------------------

@Rorysky 我对那句话的认识是，群晖的这个人不理解 mdadm scrub 的行为，导致他认为 mdadm scrub 可以修复 btrfs 中的 data corruption 。

因为，我对所有组件的预期行为是它们在未被群晖定制的情况下的行为，对于未定制过的 mdadm 来说，mdadm scrub 修复的是 mdadm 自身的问题，无法修复 mdadm 之上的 btrfs 中的问题。而我问他 mdadm scrub 凭什么可以修复 btrfs 中的问题，群晖的人又不告诉我原因。所以我有理由怀疑群晖的这个人并不理解这些组件的协同工作方式；或者从恶意的角度出发，他理解，但是他以为我是竞争对手的人而不想告诉我。

另外，你想要讨论，我欢迎，请发表你的观点与逻辑链，不要针对我如何来输出。你可以说我的观点是错的、浅显、片面，然后开始反驳，而不能说感觉我如何如何，你要再这么说的话我就要开喷了。

---------------------------------------------------

@Admstor 淦，群晖的看到了请联系我付宣传费。

群晖和 bat 不一样的吧，bat 是使用开源工具来自己写服务，然后用自己写的服务挣钱；群晖是把开源服务组合起来卖钱。我问 bat 他们的服务咋写的他们肯定不会告诉我，但是如果我问他们的东西怎么用的话，就很合理；迁移到群晖这边就是，我问群晖的客服你们这个保证客户数据完整性的功能是用什么组合出来的，我觉得没啥不合理的。hhhhhh

倒是，群晖的客服和 bat 的客服一比，确实算很不错了。

---------------------------------------------------

后面来的朋友们，这是个吐槽帖啊，不是个技术辩论帖啊，这帖的画风咋歪成这样了 /?

---------------------------------------------------

@GooMS #34 这听起来像是权限问题

但最简单的方法是，让我学一下 @liuxu 老哥，开个 ssh 让我登上去看看。

---------------------------------------------------

@gridsah 
1.好像目前群晖还没有收费的技术支持，可能你买一台 DS3622xs 再提工单会好一些？（充值方式不同）
这边有用公司的 SA3200D 提交问题，回复速度和回复问题的精细程度完全碾压我自己 916 提的。
2.有关于 mdadm 自己也不知道自己的 raid5 中哪里的数据对，哪里的数据不对，mdadm 所做的只是让 mdadm 可以正常运行下去
btrfs 可以通过出错逻辑位置转换为物理位置然后让对应的 mdadm 重算，这个在技术层面可以实现。而且新版本也有提供 mdadm 的 fast repair 功能，这个需要文件系统的配合，说明是有魔改过的。

3.data checksum 是存储在 btrfs 的 checksum tree ，而 checksum tree 是在 metadata extent 里的，所以必定是两份。

---------------------------------------------------

@zhughs #43 关于第二点 '提供 mdadm 的 fast repair 功能' 这个有链接或者出处吗，我想看看

第三点，我看 btrfs 文档说的是 The whole metadata block has a checksum stored inline in the b-tree node header, each data block has a detached checksum stored in the checksum tree.

按照你的理解方式: 文档逗号以前的意思是，metadata extent 有一个和 metadata 数据存储在一起的 checksum 。data block has a detached checksum stored in the checksum tree 的意思是所有的数据的 checksum ，不论是 metadata 还是 data ，都存储在一个共用的 checksum tree 里面，所以 metadata 的 checksum 有两份。

但是，文档里说，metadata 也有两份，如果按照你这个思路继续推，两份 metadata 有两份跟随 metadata extent 的 checksum ，然后 checksum tree 里还有一份 metadata 的 checksum ，那这不就有三份 metadata 的 checksum 了吗。

所以我认为，文档中逗号以前的意思是，metadata extent 有一个和 metadata 数据存储在一起的 checksum ，不变。但是 metadata 有两份，因此 metadata 的 checksum 有两份。data block has a detached checksum stored in the checksum tree 的意思是所有的 data extent (不包括 metadata extent) 的 checksum 存储在一个独立的 checksum tree 中。所以 data extent 有一份数据 (一个 data extent tree) 和一份 checksum (一个 checksum tree)。

emmmmm 我觉得我的理解比较合理。

---------------------------------------------------

@zhughs #43 说白了，我就是想知道群晖如何处理 silent data corruption...... 

关于第二点，文件的逻辑位置转硬盘物理位置，组合数据之后重新计算 checksum 的这个功能，在 #23 我估了一下这个功能的工作量，很大，不论是对 madm, btrfs 还是对 DSM 底层的魔改，工作量都很大。我觉得群晖不大可能费力气做这个功能。

我在 存储池 -> 全局设置 里面找到了这个功能。关于这个功能，我只在 https://www.reddit.com/r/synology/comments/qy51ba/what_the_heck_is_fast_repair/?rdt=53246 看到了关于这个功能的猜测，还未被证实。如果帖子里的描述是真的的话，那说不准群晖还真的做了这个功能。

但从回帖的内容来看，我和这帮老外的想法一样，群晖不会花大功夫来研究和定制底层。

而且我认为我的看法是对的，因为，从我这个角度来看，至少他们在升级组件的时候不会有额外的，因兼容群晖自己的魔改而产生的额外的工作量；而且不魔改组件也意味着，不会受人事的限制，不用担心会魔改的员工走了以后没人接活儿的问题。

---------------------------------------------------

找客服讨论技术支持？不应该找售后工程师吗？

还有最后强调这是吐槽贴。

怕是国内的托吧。

最后给小伙伴建议，重要数据安全还是要靠多备份，冷备份，异地备份。

---------------------------------------------------

@sorsens #46 你连基本的判断能力都没有吗，上来就喷，已拉黑

---------------------------------------------------

你怎么理解，技术支持说的 [当文件系统在进行 FS scrubbing 的时候如果查到某个文档 data 真的坏了，那就会去做 RAID scrubbing 然后用 RAID parity 来修修看（不管有没有开 COW ）] 

这不明显意思，有额外的机制会由文件系统的校验值异常而去处罚软 raid 层的动作么？

感觉你问问题都是预设的立场。

---------------------------------------------------

看了楼主，觉得群晖技术支持真好

万亿市值的 BAT 都没活人客服，我要问阿里你们淘宝技术细节估计我号立刻就炸了

---------------------------------------------------

@Rorysky 我对那句话的认识是，群晖的这个人不理解 mdadm scrub 的行为，导致他认为 mdadm scrub 可以修复 btrfs 中的 data corruption 。

因为，我对所有组件的预期行为是它们在未被群晖定制的情况下的行为，对于未定制过的 mdadm 来说，mdadm scrub 修复的是 mdadm 自身的问题，无法修复 mdadm 之上的 btrfs 中的问题。而我问他 mdadm scrub 凭什么可以修复 btrfs 中的问题，群晖的人又不告诉我原因。所以我有理由怀疑群晖的这个人并不理解这些组件的协同工作方式；或者从恶意的角度出发，他理解，但是他以为我是竞争对手的人而不想告诉我。

另外，你想要讨论，我欢迎，请发表你的观点与逻辑链，不要针对我如何来输出。你可以说我的观点是错的、浅显、片面，然后开始反驳，而不能说感觉我如何如何，你要再这么说的话我就要开喷了。

---------------------------------------------------

@Admstor 淦，群晖的看到了请联系我付宣传费。

群晖和 bat 不一样的吧，bat 是使用开源工具来自己写服务，然后用自己写的服务挣钱；群晖是把开源服务组合起来卖钱。我问 bat 他们的服务咋写的他们肯定不会告诉我，但是如果我问他们的东西怎么用的话，就很合理；迁移到群晖这边就是，我问群晖的客服你们这个保证客户数据完整性的功能是用什么组合出来的，我觉得没啥不合理的。hhhhhh

倒是，群晖的客服和 bat 的客服一比，确实算很不错了。

---------------------------------------------------

后面来的朋友们，这是个吐槽帖啊，不是个技术辩论帖啊，这帖的画风咋歪成这样了 /?

---------------------------------------------------

@GooMS #34 这听起来像是权限问题

但最简单的方法是，让我学一下 @liuxu 老哥，开个 ssh 让我登上去看看。

---------------------------------------------------

@gridsah 
1.好像目前群晖还没有收费的技术支持，可能你买一台 DS3622xs 再提工单会好一些？（充值方式不同）
这边有用公司的 SA3200D 提交问题，回复速度和回复问题的精细程度完全碾压我自己 916 提的。
2.有关于 mdadm 自己也不知道自己的 raid5 中哪里的数据对，哪里的数据不对，mdadm 所做的只是让 mdadm 可以正常运行下去
btrfs 可以通过出错逻辑位置转换为物理位置然后让对应的 mdadm 重算，这个在技术层面可以实现。而且新版本也有提供 mdadm 的 fast repair 功能，这个需要文件系统的配合，说明是有魔改过的。

3.data checksum 是存储在 btrfs 的 checksum tree ，而 checksum tree 是在 metadata extent 里的，所以必定是两份。

---------------------------------------------------

@zhughs #43 关于第二点 '提供 mdadm 的 fast repair 功能' 这个有链接或者出处吗，我想看看

第三点，我看 btrfs 文档说的是 The whole metadata block has a checksum stored inline in the b-tree node header, each data block has a detached checksum stored in the checksum tree.

按照你的理解方式: 文档逗号以前的意思是，metadata extent 有一个和 metadata 数据存储在一起的 checksum 。data block has a detached checksum stored in the checksum tree 的意思是所有的数据的 checksum ，不论是 metadata 还是 data ，都存储在一个共用的 checksum tree 里面，所以 metadata 的 checksum 有两份。

但是，文档里说，metadata 也有两份，如果按照你这个思路继续推，两份 metadata 有两份跟随 metadata extent 的 checksum ，然后 checksum tree 里还有一份 metadata 的 checksum ，那这不就有三份 metadata 的 checksum 了吗。

所以我认为，文档中逗号以前的意思是，metadata extent 有一个和 metadata 数据存储在一起的 checksum ，不变。但是 metadata 有两份，因此 metadata 的 checksum 有两份。data block has a detached checksum stored in the checksum tree 的意思是所有的 data extent (不包括 metadata extent) 的 checksum 存储在一个独立的 checksum tree 中。所以 data extent 有一份数据 (一个 data extent tree) 和一份 checksum (一个 checksum tree)。

emmmmm 我觉得我的理解比较合理。

---------------------------------------------------

@zhughs #43 说白了，我就是想知道群晖如何处理 silent data corruption...... 

关于第二点，文件的逻辑位置转硬盘物理位置，组合数据之后重新计算 checksum 的这个功能，在 #23 我估了一下这个功能的工作量，很大，不论是对 madm, btrfs 还是对 DSM 底层的魔改，工作量都很大。我觉得群晖不大可能费力气做这个功能。

我在 存储池 -> 全局设置 里面找到了这个功能。关于这个功能，我只在 https://www.reddit.com/r/synology/comments/qy51ba/what_the_heck_is_fast_repair/?rdt=53246 看到了关于这个功能的猜测，还未被证实。如果帖子里的描述是真的的话，那说不准群晖还真的做了这个功能。

但从回帖的内容来看，我和这帮老外的想法一样，群晖不会花大功夫来研究和定制底层。

而且我认为我的看法是对的，因为，从我这个角度来看，至少他们在升级组件的时候不会有额外的，因兼容群晖自己的魔改而产生的额外的工作量；而且不魔改组件也意味着，不会受人事的限制，不用担心会魔改的员工走了以后没人接活儿的问题。

---------------------------------------------------

找客服讨论技术支持？不应该找售后工程师吗？

还有最后强调这是吐槽贴。

怕是国内的托吧。

最后给小伙伴建议，重要数据安全还是要靠多备份，冷备份，异地备份。

---------------------------------------------------

@sorsens #46 你连基本的判断能力都没有吗，上来就喷，已拉黑

---------------------------------------------------

你怎么理解，技术支持说的 [当文件系统在进行 FS scrubbing 的时候如果查到某个文档 data 真的坏了，那就会去做 RAID scrubbing 然后用 RAID parity 来修修看（不管有没有开 COW ）] 

这不明显意思，有额外的机制会由文件系统的校验值异常而去处罚软 raid 层的动作么？

感觉你问问题都是预设的立场。

---------------------------------------------------

看了楼主，觉得群晖技术支持真好

万亿市值的 BAT 都没活人客服，我要问阿里你们淘宝技术细节估计我号立刻就炸了

---------------------------------------------------

@Rorysky 我对那句话的认识是，群晖的这个人不理解 mdadm scrub 的行为，导致他认为 mdadm scrub 可以修复 btrfs 中的 data corruption 。

因为，我对所有组件的预期行为是它们在未被群晖定制的情况下的行为，对于未定制过的 mdadm 来说，mdadm scrub 修复的是 mdadm 自身的问题，无法修复 mdadm 之上的 btrfs 中的问题。而我问他 mdadm scrub 凭什么可以修复 btrfs 中的问题，群晖的人又不告诉我原因。所以我有理由怀疑群晖的这个人并不理解这些组件的协同工作方式；或者从恶意的角度出发，他理解，但是他以为我是竞争对手的人而不想告诉我。

另外，你想要讨论，我欢迎，请发表你的观点与逻辑链，不要针对我如何来输出。你可以说我的观点是错的、浅显、片面，然后开始反驳，而不能说感觉我如何如何，你要再这么说的话我就要开喷了。

---------------------------------------------------

@Admstor 淦，群晖的看到了请联系我付宣传费。

群晖和 bat 不一样的吧，bat 是使用开源工具来自己写服务，然后用自己写的服务挣钱；群晖是把开源服务组合起来卖钱。我问 bat 他们的服务咋写的他们肯定不会告诉我，但是如果我问他们的东西怎么用的话，就很合理；迁移到群晖这边就是，我问群晖的客服你们这个保证客户数据完整性的功能是用什么组合出来的，我觉得没啥不合理的。hhhhhh

倒是，群晖的客服和 bat 的客服一比，确实算很不错了。

