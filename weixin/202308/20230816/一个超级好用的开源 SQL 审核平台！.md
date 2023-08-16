----------------------------------------
----------------------------------------
#  一个超级好用的开源 SQL 审核平台！

原创 小金  [ Github掘金计划 ](javascript:void\(0\);)

**Github掘金计划** ![]()

微信号 GithubStar

功能介绍 用心发掘 Github 和 Gitee 上优质的开源项目。

____

_2022-01-15 12:22_ _发表于_

收录于合集

#Github 52 个

#sql 2 个

#数据库 2 个

#Github掘金计划 81 个

大家好，我是小金。今天给大家推荐一个超级好用的 SQL 审核平台。

在我们日常开发中，最常用的数据库就是 MySQL，平时如果不严谨直接一个 SQL 命令就可以更改数据，难免会发生错误，因此 SQL
审计就显得尤为重要。那有没有可能我们能像提交 Git 代码一样提交给上级进行审核，只有审核后的 SQL 允许执行呢？答案是：可以的。

Yearning 就是一款面向中小型企业的轻量级 MySQL 的 SQL 语句审核平台。提供查询审计，SQL 审核等多种功能的开源工具 Yearning。

目前该项目已经拥有 6.1K+(截止到 2022-01-15)的 Star，热度持续上升中，还有活跃的 Yearning 社区持续维护和提供帮助。

![图片](https://mmbiz.qpic.cn/mmbiz_png/BcyAypujBVZ29TmAqKrVty5yLdKlOpknDicolMxwKRbLuT3hH4ia6Y4ZSCrgicshqicibXxhLv3FMxYusFmQBFS8QkQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  * •GitHub 地址：⇲https://github.com/cookieY/Yearning

  * •官方文档：⇲https://github.com/cookieY/Yearning

## #主要功能

  * •SQL 查询

    * •查询工单

    * •导出

    * •自动补全，智能提示

    * •查询语句审计

    * •查询结果脱敏

  * •SQL 审核

    * •流程化工单

    * •SQL 语句语法检测

    * •根据规则检测 SQL 语句合规性

    * •自动生成 DDL/DML 回滚语句

    * •历史审核记录

  * •推送

    * •E-mail 工单推送

    * •钉钉 webhook 机器人工单推送

  * •用户权限及管理

    * •角色划分

    * •基于用户的细粒度权限

    * •注册

  * •其他

    * •todoList

    * •LDAP 登录

    * •动态审核规则配置

    * •自定义审核层级

  * •AutoTask 自动执行

## #快速安装

  1. Yearning-go 提供二进制下载包，请选择最新版本 在 Assets 中选择 Yearning-x.x.x.linux-amd64.zip 包进行下载，下载地址：
    
        https://github.com/cookieY/Yearning/releases  
    

  2. 解压文件到目录，修改如下配置文件 conf.toml：

    
    
    [Mysql]  
    Db = "Yearning"  
    Host = "127.0.0.1"  
    Port = "3306"  
    Password = "xxxx"  
    User = "root"  
      
    [General]   #数据库加解密key，只可更改一次。  
    SecretKey = "dbcjqheupqjsuwsm"  
    

说明：SecretKey 是 token/数据库密码加密/解密的 salt。

建议所有用户在初次安装 Yearning 之前将 SecretKey 更改(不更改将存在安全风险)

格式: 大小写字母均可, 长度必须为 16 位 如长度不是 16 位将会导致无法新建数据源

3.初始化及安装

    
    
    ./Yearning install  
    

如要再次安装，请先把 yearning 库下所有表删除，否则重复执行无效

4.启动服务

> 默认启动
    
    
    ./Yearning run  
    

> 参数启动
    
    
    ./Yearning run --push "172.27.80.35" -port "8000"  
    

## #界面展示

打开浏览器 `http://IP地址:8000`，默认账号/密码：admin/Yearning_admin。

![图片](https://mmbiz.qpic.cn/mmbiz_png/BcyAypujBVZ29TmAqKrVty5yLdKlOpknNeib74f5VzCwl1ibNy5StGIiauSUgUKbY916MRtkyu5ZjUfGaicZA9dXoQ/640?wx_fmt=png)

首页会展示相关的用户数，数据源和工单数，以及查询总数的统计信息。

![图片](https://mmbiz.qpic.cn/mmbiz_png/BcyAypujBVZ29TmAqKrVty5yLdKlOpknFRD2AfvRZS5JL99C4tdmX1XkErzlziaS7SbX1zpnQwNoO8ibkTuDcrTg/640?wx_fmt=png)

首先需要设置数据库，添加数据库的连接信息，添加完成后可以在右侧查看。

![图片](https://mmbiz.qpic.cn/mmbiz_png/BcyAypujBVZ29TmAqKrVty5yLdKlOpkn8NelElbR9yDkaghn2avCqU6gmBB7iaoiaqBEffcicmicW0q5kZ9REHkhVw/640?wx_fmt=png)

添加流程模板，设置审核和执行步骤的负责人，这样就完成了设置。

![图片](https://mmbiz.qpic.cn/mmbiz_png/BcyAypujBVZ29TmAqKrVty5yLdKlOpknVv6awruRQyAmC1uaQjakniaNRP7lt2e7ACGTlJLtzhJAlRJhuu4ygkA/640?wx_fmt=png)

提交工单，选择对应的环境和数据库，选择审核人员即可填写执行语句，提交给审核人审核。

![图片](https://mmbiz.qpic.cn/mmbiz_png/BcyAypujBVZ29TmAqKrVty5yLdKlOpkn7ibvZL5FM6CLcCc32sRYDdSYyKD3lrIeicIfuB6dR4SKGF4TkudtiahHg/640?wx_fmt=png)![图片](https://mmbiz.qpic.cn/mmbiz_png/BcyAypujBVZ29TmAqKrVty5yLdKlOpknyb4dmibBsk44LjHtZwRx27aUIicHibuck3vicUg0PYEGhtOn2YjkQjibhNA/640?wx_fmt=png)![图片](https://mmbiz.qpic.cn/mmbiz_png/BcyAypujBVZ29TmAqKrVty5yLdKlOpknEGIAzqs7s4c88icW5oFekrESHG8bwmcAOG031EtoiaMHxTHQWyDp6m8g/640?wx_fmt=png)

审核人员进入后台选择审核工单，然后进行审核，同意前需要检测语句。

![图片](https://mmbiz.qpic.cn/mmbiz_png/BcyAypujBVZ29TmAqKrVty5yLdKlOpkn3TBicicw42aPsYIFCtJ9icsqCcKDRZn11ef9LMEeKQKYjYYDYDFmzIAnQ/640?wx_fmt=png)![图片](https://mmbiz.qpic.cn/mmbiz_png/BcyAypujBVZ29TmAqKrVty5yLdKlOpknvfClv1ctZztMg7ftibPfzGmcfn1dPic18kWqCSicyZRMHv2cnNiaQbQSjg/640?wx_fmt=png)![图片](https://mmbiz.qpic.cn/mmbiz_png/BcyAypujBVZ29TmAqKrVty5yLdKlOpknA2BDdRhF5icq6FOgkZBQlcHjOMPeCiaHDp4MENN9TZLcJFzPibhGnaibiaQ/640?wx_fmt=png)

最后可在我的工单中查看审核情况，已经执行完成的即可查看数据情况。

![图片](https://mmbiz.qpic.cn/mmbiz_png/BcyAypujBVZ29TmAqKrVty5yLdKlOpknThkLdy3u8V7jd1gxQ6UaGicPt9GQzfHwdFQEskUhuVpzTYqvIaKWP8A/640?wx_fmt=png)

 **如此功能齐全 SQL 审计平台，还等什么，赶紧用起来！**

##  #推荐

  * •[⇲编程基础](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1632585323454971905&__biz=MzIwNDgzMzI3Mg==#wechat_redirect) ：精选编程基础如学习路线、编程语言相关的开源项目。

  * •[⇲计算机基础](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1635325633234780161&__biz=MzIwNDgzMzI3Mg==#wechat_redirect)：精选计算机基础（操作系统、计算机网络、算法、数据结构）相关的开源项目。

  * •[⇲技术面试](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1632589980491366403&__biz=MzIwNDgzMzI3Mg==#wechat_redirect) ：精选技术面试相关的开源项目。

  * •[⇲项目实战](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1632590550748938241&__biz=MzIwNDgzMzI3Mg==#wechat_redirect) ：精选实战类型的开源项目。

  * •[⇲神器工具&网站](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzIwNDgzMzI3Mg==&action=getalbum&album_id=1692140336665378820#wechat_redirect) : 一些好用的插件、软件、网站。

  * •[⇲Java](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1345382825083895808&__biz=Mzg2OTA0Njk0OA==#wechat_redirect) ：Java类开源项目汇总

  *   

  * 用心发掘 Github 和 Gitee 上优质的开源项目。

  * 欢迎关注！欢迎点赞分享！

  * ![图片](https://mmbiz.qpic.cn/mmbiz_jpg/BcyAypujBVZqeicvzhcGl7FLyAw3Xsu2POdZOiaPnQXryMp8gyzkcKF4NGgOydQcCWhicNREhf8fQ1euq2lTzhrtA/640?wx_fmt=jpeg)

预览时标签不可点

收录于合集 #Github

52个

上一篇这个代码托管平台真的香！比 Github 速度更快！！！下一篇又一款超高颜值的聊天应用开源了！YYDS！！！

