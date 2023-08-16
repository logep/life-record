----------------------------------------
----------------------------------------
#  千万级 CPS 的开源网络压测软件 dperf 开源了！！！

[ Github掘金计划 ](javascript:void\(0\);)

**Github掘金计划** ![]()

微信号 GithubStar

功能介绍 用心发掘 Github 和 Gitee 上优质的开源项目。

____

_2022-07-02 00:59_ _发表于 湖北_

收录于合集

你好，我是小金。今天向大家介绍一款 **开源的高性能网络压测软件** dperf，可用于测试四层负载均衡等网关设备。

  

dperf由百度的智能负载均衡团队研发，使用Apache License Version 2.0许可证开源发布，项目地址
**https://github.com/baidu/dperf** 。

  

![图片](https://mmbiz.qpic.cn/mmbiz_png/BcyAypujBVataMlFSicFViaLOyic58dnso7BNQIf8DcHibDS2oiccB7ZHs2XiaQAG0hT3OembqXsIH7ibp2wBI4V6h0qA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

dperf一经开源，立即在圈内引发了关注，因为它能用来进行高达 **千万CPS** (Connections Per Second, 每秒新建连接数)
级别的压力测试，在部分场景下可代替售价数百万元的商用性能测试仪，为用户节省昂贵的测试仪购买成本；而且由于采用软件的方式，也极大提高了性能测试的便利性。

  

  

#  **1\. 缘起**

  

四层负载均衡器(如LVS，DPVS)等网络程序或设备，本身往往具有极高的性能。无论是厂商研发网络设备，还是用户使用网络设备，若想要对其进行性能测试，则需要有相应的设备或程序，来提供足够的网络压力。

  

在dperf出现之前，可以用两种方式来进行压力测试：使用商用的网络压力测试仪，或使用大量客户端部署开源测试软件。  

  

 **(1) 商用硬件测试仪：**
目前主要被少数几家国外厂商垄断，价格昂贵，其售价往往高达每台数百万元，且性能一般仅为百万CPS的级别。若要达到千万级别CPS的测试，则需要多台测试仪同时工作，成本可能达到上千万元，即使租用，每天的成本也很高。

  

 **(2) 开源软件：** 使用开源软件（如nginx +
ab或wrk）进行测试，适合一些较小压力的场景。在测试高性能的网络设备时，开源软件的方案往往会有明显的不足：

  *  **单台性能低、资源消耗大** ：两台物理服务器配合，可以压测约50至100万CPS；要达到千万级CPS，则需要几十台物理服务器；

  *  **连接失败高** ：压力较大时，Linux或FreeBSD的网络协议栈可能因为资源不足导致出现连接失败，这些连接失败会干扰测试数据，影响测试结果；

  *  **无法发现丢包** ：整个测试过程中，不能发现被测设备的丢包等报文级错误。

  

正是由于当前压测工具的这些不足，百度的智能负载均衡团队在对其高性能的四层负载均衡产品进行压测时，急需一款高性能、低成本、简单易用的网络压力测试仪。这也是促成我们研发dperf的主要原因。  

  

  

 **2\. 优势**

  

dperf主要具有如下优势：

  

 **(1) 高性能：** dperf基于DPDK，使用普通x86服务器，即可实现千万级CPS。详细的性能指标如下：

  * HTTP新建(CPS)：单核超过2百万，性能随使用的核数基本呈线性扩展；

  * HTTP并发：单核支持1亿TCP并发连接数，性能随使用的核数基本呈线性扩展；

  * HTTP吞吐：单核可以达到RX/TX各18Gbps的吞吐，性能随使用的核数基本呈线性扩展(注：带宽受制于网卡规格)。

 **(2) 使用场景丰富：** 支持在如下场景使用

  * 对四层负载均衡等四层网关进行性能测试、长稳测试

  * 对云上虚拟机的网络性能进行测试

  * 对网卡性能、CPU的网络报文处理能力进行测试

  * 压测场景下，可作为高性能的HTTP Server或HTTP Client单独使用

  

 **(3) 可以发现被测设备的丢包等报文级错误**

  

  

 **3\. 功能**  

  

dperf可用于进行HTTP新建连接数测试、HTTP并发连接数测试、HTTP吞吐测试、TCP/UDP的包转发性能（PPS）测试。

  

dperf还提供数据统计功能，支持实时数据查看，包括：

  * 每秒收包数，每秒发包数，每秒接收比特，每秒发送比特

  * 2-3层协议的收发报文数：ARP、ICMP

  * TCP各种状态的收发报文数：SYN、FIN、PUSH、RST

  * HTTP请求、响应数统计：GET、2XX

  * 失败数：连接失败数、网卡丢包数等

  * TCP报文重传数：SYN、FIN、ACK、PUSH重传

  

统计数据每秒刷新，示例如下：

![图片](https://mmbiz.qpic.cn/mmbiz_png/s4QUf8PUAOCF2Lx2icOyicr5GxEnib4tKIdWN2LrmgVPd1ESrW8D3zhC4nvjLDCjMv72CbMOqnicXuYdT2Dl4VK1Fw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  

#

#  **4\. 设计原理**

  

想知道dperf为什么可以实现如此高的性能？请阅读dperf设计原理的文档：

 **https://github.com/baidu/dperf/blob/main/docs/design-CN.md**

#  

#  

#  **5\. 限制**

  

  * dperf的HTTP消息长度不超过一个网络报文，适合测试基于报文转发的网络设备， **不适合用于七层负载均衡器的测试** ；

  * dperf在运行期间 **需要独占网卡** ，不支持网口Bonding；

  

# **6\. 使用**

#  dperf的安装和使用方式见文档：

#  **https://github.com/baidu/dperf** 中的/docs

#  **https://gitee.com/baidu/dperf** 中的/docs

#

#  

#  **7\. 例子：使用dperf测试LVS性能**

  

与商业测试仪相比，dperf的TCP协议栈针对LVS等四层负载均衡器的压测场景进行了优化，以获得更高的发送测试流量的能力。本节我们展示如何用dperf对LVS进行性能测试。

  

##  **(1) 测试环境**

  

配置：

  

 **组件**

|

 **环境**

|

 **参数**  
  
---|---|---  
  
LVS

（NAT模式）

|

CPU

|

Intel(R) Xeon(R) Silver 4214 CPU @ 2.20GHz，LVS只用12核  
  
内存

|

376GB  
  
网卡

|

Mellanox CX4 (25Gbps) * 1  
  
OS

|

CentOS 7.9  
  
dperf(client)

dperf(server)

|

CPU

|

HUAWEI,Kunpeng 920，dperf使用其中1-2个核  
  
内存

|

509GB  
  
网卡

|

Mellanox CX4 (25Gbps) * 1  
  
OS

|

麒麟V10  
  
网络拓扑：

  

![图片](https://mmbiz.qpic.cn/mmbiz_png/s4QUf8PUAOCF2Lx2icOyicr5GxEnib4tKIdnrthfgvLkziaibicBzFBmk6ibQ52aOzKOpk4H7MVQ7BNL594T4Ufq2T9Xg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

##  

##  **(2) 测试结果**

  

通过测试结果我们发现，LVS作为一款开源免费的四层负载均衡软件，性能也是非常不错的。具体结果如下：

**测试项目**

|

 **测试结果**

|

 **备注**  
  
---|---|---  
  
TCP新建连接数

|

50万

|

CPU使用率80%  
  
TCP并发连接数

|

1千万

|

CPU使用率70%，客户端60秒发1个请求  
  
TCP吞吐

|

19.7Gbps

|

CPU使用率50%，受制于网卡带宽  
  
  

新建测试结果（客户端）：

![图片](https://mmbiz.qpic.cn/mmbiz_png/s4QUf8PUAOCF2Lx2icOyicr5GxEnib4tKId0IrV8ibdiavyzWHBibbly5thvWujHqb4vGWPicUYMYiaOPq7mWF344gCF9g/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  

并发测试结果（客户端）

![图片](https://mmbiz.qpic.cn/mmbiz_png/s4QUf8PUAOCF2Lx2icOyicr5GxEnib4tKIdlYBicncQ2KyhZVllU6eib9za2d4Z31SpY2SCHIdMTibPJzibY4I3BwRKYw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  

带宽测试结果（客户端）

![图片](https://mmbiz.qpic.cn/mmbiz_png/s4QUf8PUAOCF2Lx2icOyicr5GxEnib4tKIdJ8ptLfAWmyzMo6Q1OfFjC0ibJBPJrxufCANZiaCedAY30ZIoMHibgmlcQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

## 推荐

  * [Github 掘金计划](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzIwNDgzMzI3Mg==&action=getalbum&album_id=1571213952619954180#wechat_redirect) ：历史优质原创文章汇总！
  * [程序人生](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzIwNDgzMzI3Mg==&action=getalbum&album_id=2084343476975878144#wechat_redirect)：编程经历、英语学习、延寿指南。
  * [神器工具](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzIwNDgzMzI3Mg==&action=getalbum&album_id=1692140336665378820#wechat_redirect) : 一些好用的插件、软件、网站。
  * [编程基础](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1632585323454971905&__biz=MzIwNDgzMzI3Mg==#wechat_redirect) ：精选编程基础如学习路线、编程语言相关的开源项目。
  * [计算机基础](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1635325633234780161&__biz=MzIwNDgzMzI3Mg==#wechat_redirect)：精选计算机基础（操作系统、计算机网络、算法、数据结构）相关的开源项目。
  * [技术面试](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1632589980491366403&__biz=MzIwNDgzMzI3Mg==#wechat_redirect) ：精选技术面试相关的开源项目。
  * [项目实战](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1632590550748938241&__biz=MzIwNDgzMzI3Mg==#wechat_redirect) ：精选实战类型的开源项目。

用心发掘 Github 和 Gitee 上优质的开源项目。

欢迎关注！欢迎点赞分享！

预览时标签不可点

