### 怎么设置 ipv6 mtu

tplink 、h3c 和（我用的） openwrt 都没有 ipv6 MTU 的选项，只有一个 WAN 口的 MTU ，那是 v4 和 v6 公用一个 MTU 值吗？

---------------------------------------------------

是

---------------------------------------------------

ipv6 的 mtu 设置为 1280 最好，ipv4 的 mtu 一般设置为 1492 或者 1480

---------------------------------------------------

@erfesq 但是没有“ipv6 MTU”这个东西🤔

---------------------------------------------------

@yyzh 师傅能不能展开回答一下

---------------------------------------------------

openwrt 原版是肯定有 ipv6 mtu 选项的，就在 ipv6 RA 设置 ，RA mtu 那里。

---------------------------------------------------

其实不用设置，IPv6 会通过 ICMP 自动协商 MTU ，好像叫 Path MTU

---------------------------------------------------

/ipv6 firewall mangle  
add action=change-mss chain=forward new-mss=clamp-to-pmtu passthrough=yes protocol=tcp tcp-flags=syn

---------------------------------------------------

@v2tudnew 当初 我和你的想法一样 直到我遇到了 https：//res.wx.qq.com 没有处理 PMTU 导致黑洞

---------------------------------------------------

看这个帖子：/t/800024

---------------------------------------------------

PPPoE 1492
IPoE/固定 IP 1500

---------------------------------------------------

@yin1999 没发成功 /t/800024

---------------------------------------------------

@erfesq #2

OpenWrt 设置 MTU 貌似要在基础上加 8 才与直接连接光猫 ping 出来的 MTU 值相同.

---------------------------------------------------

ipv6 协议自动探测链路最小 mtu

---------------------------------------------------

流量过滤链 "mangle_forward"
钩子：forward(捕获发送到其他主机的传入数据包)，优先级：-150
策略：accept (继续处理不匹配的数据包)
规则匹配	规则操作
#规则评论：Zone wan IPv4/IPv6 ingress MTU fixing 入口设备名 于集合 { eth1, pppoe-wan }eth1
pppoe-wan 中 TCP 标记 是 syn	将标头字段 TCP 最大报文段长度设为有效的路由 MTU
#规则评论：Zone wan IPv4/IPv6 egress MTU fixing 出口设备的名称 于集合 { eth1, pppoe-wan }eth1
pppoe-wan 中 TCP 标记 是 syn	将标头字段 TCP 最大报文段长度设为有效的路由 MTU

openwrt 23.05 有 mss 钳制啊

---------------------------------------------------

完全看不懂😅

---------------------------------------------------

MTU 和 IPv4 还是 IPv6 没有关系，要按 IP 协议分别设置的那个叫 MSS 。建议重新阅读 MTU 的定义。

> 最大传输单元（缩写 MTU ）是指 **数据链路层** 上面所能通过的最大数据包大小，这个参数通常与通信接口有关。

---------------------------------------------------

@RecursiveG 那为什么这么多人说 ipv4 mtu ，ipv6 mtu ，都是错的吗

---------------------------------------------------

@znsb IPv6 有 MTU 自动探测，严格意义上和 IPV4 还真不一样

---------------------------------------------------

@znsb 都是错的，网上教程良莠不齐。

@Aoang IPv4 也有 PMTUD 。

---------------------------------------------------

看着一堆 mss 和 mtu 都分不出的指点江山……

---------------------------------------------------

@xqzr 你说的是现在还是以前？因为我这确实能用 IPv6 打开。

---------------------------------------------------

ipv6 用最小的 1280 进行传输这个是最优解，因为 ipv6 会自动协商，比如设置成 1492 如果中间有 1280 的会丢弃然后再次用 1280 的发包

---------------------------------------------------

@v2tudnew 以前遇到，后来我把 RA 宣告的 MTU 从 1500 改到 1492 就好了

---------------------------------------------------

@xqzr 补充：我的 路由器 IPv6 TCP MSS 没有 钳制

---------------------------------------------------

@erfesq 不会先丢一遍，TCP 会通过 MSS Clamping 来确定链路中最小 MTU ，确定后就不会改了，丢了就丢了。一般来说运营商的设备要不然 MTU 是 1500 或更大，如果 MTU 较小的话，是会支持 MSS Clamping 的，因为如果不支持的话会对经过的流量造成影响。个人认为如果没实际遇到问题，没必要调低 MTU 。

---------------------------------------------------

@v2tudnew 现在也能复现

---------------------------------------------------

@xqzr 你说的是现在还是以前？因为我这确实能用 IPv6 打开。

---------------------------------------------------

ipv6 用最小的 1280 进行传输这个是最优解，因为 ipv6 会自动协商，比如设置成 1492 如果中间有 1280 的会丢弃然后再次用 1280 的发包

---------------------------------------------------

@v2tudnew 以前遇到，后来我把 RA 宣告的 MTU 从 1500 改到 1492 就好了

---------------------------------------------------

@xqzr 补充：我的 路由器 IPv6 TCP MSS 没有 钳制

---------------------------------------------------

@erfesq 不会先丢一遍，TCP 会通过 MSS Clamping 来确定链路中最小 MTU ，确定后就不会改了，丢了就丢了。一般来说运营商的设备要不然 MTU 是 1500 或更大，如果 MTU 较小的话，是会支持 MSS Clamping 的，因为如果不支持的话会对经过的流量造成影响。个人认为如果没实际遇到问题，没必要调低 MTU 。

---------------------------------------------------

@v2tudnew 现在也能复现

---------------------------------------------------

@xqzr 你说的是现在还是以前？因为我这确实能用 IPv6 打开。

---------------------------------------------------

ipv6 用最小的 1280 进行传输这个是最优解，因为 ipv6 会自动协商，比如设置成 1492 如果中间有 1280 的会丢弃然后再次用 1280 的发包

---------------------------------------------------

@v2tudnew 以前遇到，后来我把 RA 宣告的 MTU 从 1500 改到 1492 就好了

---------------------------------------------------

@xqzr 补充：我的 路由器 IPv6 TCP MSS 没有 钳制

---------------------------------------------------

@erfesq 不会先丢一遍，TCP 会通过 MSS Clamping 来确定链路中最小 MTU ，确定后就不会改了，丢了就丢了。一般来说运营商的设备要不然 MTU 是 1500 或更大，如果 MTU 较小的话，是会支持 MSS Clamping 的，因为如果不支持的话会对经过的流量造成影响。个人认为如果没实际遇到问题，没必要调低 MTU 。

---------------------------------------------------

@v2tudnew 现在也能复现

---------------------------------------------------

@xqzr 你说的是现在还是以前？因为我这确实能用 IPv6 打开。

---------------------------------------------------

ipv6 用最小的 1280 进行传输这个是最优解，因为 ipv6 会自动协商，比如设置成 1492 如果中间有 1280 的会丢弃然后再次用 1280 的发包

---------------------------------------------------

@v2tudnew 以前遇到，后来我把 RA 宣告的 MTU 从 1500 改到 1492 就好了

---------------------------------------------------

@xqzr 补充：我的 路由器 IPv6 TCP MSS 没有 钳制

---------------------------------------------------

@erfesq 不会先丢一遍，TCP 会通过 MSS Clamping 来确定链路中最小 MTU ，确定后就不会改了，丢了就丢了。一般来说运营商的设备要不然 MTU 是 1500 或更大，如果 MTU 较小的话，是会支持 MSS Clamping 的，因为如果不支持的话会对经过的流量造成影响。个人认为如果没实际遇到问题，没必要调低 MTU 。

---------------------------------------------------

@v2tudnew 现在也能复现

---------------------------------------------------

@xqzr 你说的是现在还是以前？因为我这确实能用 IPv6 打开。

---------------------------------------------------

ipv6 用最小的 1280 进行传输这个是最优解，因为 ipv6 会自动协商，比如设置成 1492 如果中间有 1280 的会丢弃然后再次用 1280 的发包

---------------------------------------------------

@v2tudnew 以前遇到，后来我把 RA 宣告的 MTU 从 1500 改到 1492 就好了

---------------------------------------------------

@xqzr 补充：我的 路由器 IPv6 TCP MSS 没有 钳制

---------------------------------------------------

@erfesq 不会先丢一遍，TCP 会通过 MSS Clamping 来确定链路中最小 MTU ，确定后就不会改了，丢了就丢了。一般来说运营商的设备要不然 MTU 是 1500 或更大，如果 MTU 较小的话，是会支持 MSS Clamping 的，因为如果不支持的话会对经过的流量造成影响。个人认为如果没实际遇到问题，没必要调低 MTU 。

---------------------------------------------------

@v2tudnew 现在也能复现

---------------------------------------------------

@xqzr 你说的是现在还是以前？因为我这确实能用 IPv6 打开。

---------------------------------------------------

ipv6 用最小的 1280 进行传输这个是最优解，因为 ipv6 会自动协商，比如设置成 1492 如果中间有 1280 的会丢弃然后再次用 1280 的发包

---------------------------------------------------

@v2tudnew 以前遇到，后来我把 RA 宣告的 MTU 从 1500 改到 1492 就好了

---------------------------------------------------

@xqzr 补充：我的 路由器 IPv6 TCP MSS 没有 钳制

---------------------------------------------------

@erfesq 不会先丢一遍，TCP 会通过 MSS Clamping 来确定链路中最小 MTU ，确定后就不会改了，丢了就丢了。一般来说运营商的设备要不然 MTU 是 1500 或更大，如果 MTU 较小的话，是会支持 MSS Clamping 的，因为如果不支持的话会对经过的流量造成影响。个人认为如果没实际遇到问题，没必要调低 MTU 。

---------------------------------------------------

@v2tudnew 现在也能复现

---------------------------------------------------

@xqzr 你说的是现在还是以前？因为我这确实能用 IPv6 打开。

---------------------------------------------------

ipv6 用最小的 1280 进行传输这个是最优解，因为 ipv6 会自动协商，比如设置成 1492 如果中间有 1280 的会丢弃然后再次用 1280 的发包

---------------------------------------------------

@v2tudnew 以前遇到，后来我把 RA 宣告的 MTU 从 1500 改到 1492 就好了

---------------------------------------------------

@xqzr 补充：我的 路由器 IPv6 TCP MSS 没有 钳制

---------------------------------------------------

@erfesq 不会先丢一遍，TCP 会通过 MSS Clamping 来确定链路中最小 MTU ，确定后就不会改了，丢了就丢了。一般来说运营商的设备要不然 MTU 是 1500 或更大，如果 MTU 较小的话，是会支持 MSS Clamping 的，因为如果不支持的话会对经过的流量造成影响。个人认为如果没实际遇到问题，没必要调低 MTU 。

---------------------------------------------------

@v2tudnew 现在也能复现

---------------------------------------------------

@xqzr 你说的是现在还是以前？因为我这确实能用 IPv6 打开。

---------------------------------------------------

ipv6 用最小的 1280 进行传输这个是最优解，因为 ipv6 会自动协商，比如设置成 1492 如果中间有 1280 的会丢弃然后再次用 1280 的发包

---------------------------------------------------

@v2tudnew 以前遇到，后来我把 RA 宣告的 MTU 从 1500 改到 1492 就好了

---------------------------------------------------

@xqzr 补充：我的 路由器 IPv6 TCP MSS 没有 钳制

---------------------------------------------------

@erfesq 不会先丢一遍，TCP 会通过 MSS Clamping 来确定链路中最小 MTU ，确定后就不会改了，丢了就丢了。一般来说运营商的设备要不然 MTU 是 1500 或更大，如果 MTU 较小的话，是会支持 MSS Clamping 的，因为如果不支持的话会对经过的流量造成影响。个人认为如果没实际遇到问题，没必要调低 MTU 。

---------------------------------------------------

@v2tudnew 现在也能复现

---------------------------------------------------

@xqzr 你说的是现在还是以前？因为我这确实能用 IPv6 打开。

---------------------------------------------------

ipv6 用最小的 1280 进行传输这个是最优解，因为 ipv6 会自动协商，比如设置成 1492 如果中间有 1280 的会丢弃然后再次用 1280 的发包

---------------------------------------------------

@v2tudnew 以前遇到，后来我把 RA 宣告的 MTU 从 1500 改到 1492 就好了

---------------------------------------------------

@xqzr 补充：我的 路由器 IPv6 TCP MSS 没有 钳制

---------------------------------------------------

@erfesq 不会先丢一遍，TCP 会通过 MSS Clamping 来确定链路中最小 MTU ，确定后就不会改了，丢了就丢了。一般来说运营商的设备要不然 MTU 是 1500 或更大，如果 MTU 较小的话，是会支持 MSS Clamping 的，因为如果不支持的话会对经过的流量造成影响。个人认为如果没实际遇到问题，没必要调低 MTU 。

---------------------------------------------------

@v2tudnew 现在也能复现

