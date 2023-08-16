----------------------------------------
----------------------------------------
#  微信为什么使用 SQLite 保存聊天记录？

Markus Winan  [ Github掘金计划 ](javascript:void\(0\);)

**Github掘金计划** ![]()

微信号 GithubStar

功能介绍 用心发掘 Github 和 Gitee 上优质的开源项目。

____

_2022-06-30 04:13_ _发表于 湖北_

收录于合集

#c语言 4 个

#sql 2 个

#数据库 2 个

> SQLite 是一个被大家低估的数据库，但有些人认为它是一个不适合生产环境使用的玩具数据库。事实上，SQLite 是一个非常可靠的数据库，它可以处理
> TB 级的数据，但它没有网络层。接下来，本文将与大家共同探讨 SQLite 在过去一年中最新的 SQL 功能。

#

SQLite “只是”一个库，它不是传统意义上的服务器。因此，在某些场合下，它确实不合适。但是，在相当多的其他场合，它却是最合适的选择。SQLite
号称是部署和使用最广泛的数据库引擎。我认为这很有可能，因为 SQLite 没有版权的限制。无论何时，只要开发者想使用 SQL
在文件中存储结构化的数据，SQLite 应是首选方案。

SQLite 的 SQL 方言也非常强大。它比 MySQL 早四年就开始支持 with 语句。最近，它还实现了对于窗口函数的支持，这仅仅比 MySQL
晚五个月。

接下来，本文将介绍 SQLite 在 2018 年新增加的 SQL 功能，也就是 SQLite 从版本 3.22.0 到 3.26.0 所新增加的 SQL
功能。

具体内容包括：

  1. 布尔字面量和判断

  2. 窗口函数

  3. Filter子句

  4. Insert … on conflict (“Upsert”)

  5. 重命名列

  6. 在Modern-SQL.com上接下来 ****

 **布尔变量和判断**

SQLite支持“假”布尔值：它接受Boolean作为类型的名称，但它将其当作整数看待（这一点非常类似于MySQL）。真值true和false分别由数值1和0表示（这一点和C语言一样）。

从版本3.23.0开始，SQLite将关键字true和false分别用数字1和0表示，并支持is [not] true |
false的判断语句。现在，它不再支持关键字unknown。开发者可以使用空值null来代替，因为unknown和null的布尔值是一样的。

在INSERT和UPDATE语句中，字面量true和false可以大大提高values和set子句的可读性。

is [not] true | false这个判断语句很有用，它与比较操作的含义不一样：

我们来比较一下

    
    
    WHERE c <> FALSE 

和

    
    
    WHERE c IS NOT FALSE

在上面的例子中，如果c是null, 那么c <> false的结果是unknown.

这是因为WHERE子句只接受结果为true的值，它会过滤掉结果为false或unknown的值。这样，它就会把对应的行从结果中去掉。

与此相对应，如果c是null，那么，c is not false的判断结果是true。因此，第二个WHERE子句也将包含c是null的行。

要达到同样的效果，您可以采用的另外一种方法是增加单独处理null值的子句。也就是使用语句:

    
    
    WHERE c <> FALSE  
       OR c IS NULL

这种形式的语句更长并且有一些冗余语句（c被使用了两次）。长话短说，可以使用is not false判断来替代这个or…is-
null的语句。更详细的内容，请参考“Binary Decisions Based on Three-Valued Results”。

SQLite中对布尔字面量和布尔判断的支持现在和其他开源数据库接近，唯一的差距是SQLite不支持is[not] unknown（你可以使用is [not]
null来代替）。有趣的是，这些功能在下面提到的商用产品中还不可用。

![图片](https://mmbiz.qpic.cn/mmbiz_png/Pn4Sm0RsAujUeJDbTicgRxOGguDbruC2ibMs6MWoD1icBiasMibyS37OUe0cB7jh4AQkG6vPJMYyq2YKzM71licdqIyg/640?wx_fmt=jpeg)

> 0：只支持true,false.不支持notknown，如果需要，用null代替
>
> 1：不支持is [not] unknown,如果需要，用is [not] null代替

 **窗口函数**

SQLite
3.25.0引入了窗口函数。如果你知道窗口函数，那么也知道这是一件大事。如果你不了解窗口功能，请你自己学习如何使用。这篇文章不会具体解释窗口函数，但请相信：它是最重要的“现代”SQL特性。

SQLite对over子句的支持与其他数据库非常接近。唯一值得注意的限制是range语句不支持数字或间隔距离（仅支持current
row和unbounded preceding|following）。在发布sqlite 3.25.0时,SQL
Server和PostgreSQL具有同样的限制。PostgreSQL 11消除了这一限制。

![图片](https://mmbiz.qpic.cn/mmbiz_png/Pn4Sm0RsAujUeJDbTicgRxOGguDbruC2ibqicRRI6siaa9ianGwDI1X5RFxfkWbRgjIY5ib3A3lPUzDUuvQ9wJaLz1mw/640?wx_fmt=jpeg)

> 0：没有变化
>
> 1：Range范围定义不支持datetime类型
>
> 2：Range范围不接受<distance>关键字 (只支持unbounded和current row)

SQLite对于窗口函数的支持在业界是领先的。它不支持的功能在其他一些主要产品中也同样不支持（在聚合中语句中的distinct，width_bucket，
respect|ignore nulls和from first|last等语句）。

![图片](https://mmbiz.qpic.cn/mmbiz_png/Pn4Sm0RsAujUeJDbTicgRxOGguDbruC2ibibibWbUbibv4xKDaksIZHGdllze6TLEXVJSh2VU2HYZX2mm2J6s2PDMaA/640?wx_fmt=jpeg)

> 0：同样没有ORDER BY 语句
>
> 1：不允许负偏移量，nulls的特定处理：lead(<expr>, 'IGNORE NULLS')，这里是字符串参数
>
> 2：没有缺省值(第三个参数)，不支持respect|ignore nulls语句
>
> 3：不允许负偏移量，不支持ignore nulls语句
>
> 4：不允许负偏移量
>
> 5：不支持respect|ignore nulls语句
>
> 6：不允许负偏移量，不支持respect|ignore nulls语句
>
> 7：nulls的特定处理：first_value(<expr>, 1, null, 'IGNORE NULLS') ，这里是字符串参数。
>
> 8：不支持ignore nulls语句
>
> 9：不支持ignore nulls语句和from last语句

 **过滤语句**

虽然filter语句只是语法糖——你也可以很容易地使用表达式来获得相同的结果——我认为它也是必不可少的语法糖，因为它能使人们更加容易地学习和理解SQL语句。

看看下面的select子句，您觉得哪一个更容易理解？

    
    
    SELECT SUM(revenue) total_revenue  
         , SUM(CASE WHEN product = 1   
                    THEN revenue  
                END  
              ) prod1_revenue  
       ...

和

    
    
    SELECT SUM(revenue) total_revenue  
         , SUM(revenue) FILTER(WHERE product = 1) prod1_revenue  
       ...

此示例很好地总结了filter子句的作用：它是聚合函数的后缀，可以在进行聚合之前根据特定条件，过滤掉相应的行。pivot技术是filter子句最常见的用例。这包括将实体属性值（EAV）模型中的属性转换为表格的列，如果想了解更多的内容，可以参考链接“filter-
Selective Aggregates”（https://modern-sql.com/feature/filter）。

SQLite 从版本3.25.0开始，在使用over子句的聚合函数中支持了filter子句，但是在使用group
by子句的聚合函数中还不支持。不幸的是，这意味着您仍然无法在SQLite中使用filter语句来处理上述情况。你必须像以前一样使用case表达式。我真的希望SQLite在这一点上能尽快做到。

![图片](https://mmbiz.qpic.cn/mmbiz_png/Pn4Sm0RsAujUeJDbTicgRxOGguDbruC2ib8gbT5HL8YSGepE3Bz6GjrITiagUn303JKmaqEDkkUaspRhzccMmNm0A/640?wx_fmt=jpeg)

 **Insert … on conflict (“Upsert”)**

SQLite
从版本3.24.0开始，引入了“upsert”概念：它是一个insert语句，可以优雅地处理主键和唯一约束的冲突。您可以选择忽略这些冲突（在on
conflict语句中什么都不做）或者更新当前行（在on conflict语句中执行更新操作）。

这是一个特有的SQL扩展，即它不是标准SQL的一部分，因此在下面的矩阵中是灰色的。但是，SQLite遵守与PostgreSQL相同的语法来实现此功能0。该标准提供了对merge语句的支持。

与PostgreSQL不同，SQLite在以下语句中存在问题。

    
    
    INSERT INTO target  
    SELECT *  
      FROM source  
        ON CONFLICT (id)  
        DO UPDATE SET val = excluded.val

根据说明文档，这是因为解析器无法判断关键字ON是SELECT语句的连接约束还是upsert子句的开头。你可以通过向查询中添加子句来解决，例如where
true。

    
    
    INSERT INTO target  
    SELECT *  
      FROM source  
     WHERE true  
        ON CONFLICT (id)  
        DO UPDATE SET val = excluded.val

![图片](https://mmbiz.qpic.cn/mmbiz_png/Pn4Sm0RsAujUeJDbTicgRxOGguDbruC2ibJpmXTr7NzQd9uDkeYjjvDSqicsLRVa6iblGCiasZRkey65aCdn2qfbnMQ/640?wx_fmt=jpeg)

> 0：同样记录insert、update、delete和merge操作的错误信息 (“DML error logging”)
>
> 1：On conflict语句不能紧挨查询的from语句，如果需要，可以添加 where true语句来分隔。

 **重命名列**

SQLite引入的另一个特有功能是重命名基准数据库表中的列1。标准的SQL不支持此类功能2。  

SQLite遵循其他产品常用的语法来重命名列：

> ALTER TABLE … RENAME COLUMN … TO

![图片](https://mmbiz.qpic.cn/mmbiz_png/Pn4Sm0RsAujUeJDbTicgRxOGguDbruC2ibDLCicve39GiapANosmgbibDf0ya1ic1rBvcdkNkkGaeUkT1ErlJBzw4CeA/640?wx_fmt=png)

> 0：请查阅 sp_rename.

 **其他消息**

在2018年，SQLite除了在SQL语法上的变化，还有一些应用程序接口（API）的变化。你可以查阅sqlite.com（https://www.sqlite.org/news.html）上的新闻部分来了解更详细的消息。

 **脚标:**

  * 0：SQLite通常遵循PostgreSQL语法，Richard Hipp将此称为PostgreSQL会怎么做（WWPD）。

  * 1：基准数据库表是指用Create table语句创建的数据库表。派生的数据库表（如Select语句返回的查询结果集）中的列名可以通过SELECT语句、FROM语句或WITH语句来进行改变

  * 2：据我所知，也许可以通过可更新视图或派生的列来模拟该功能。

> 原文：https://modern-sql.com/blog/2019-01/sqlite-in-2018
>
> 作者简介：Markus Winand 提供高效的 SQL 培训。他出版的著作《SQL Performance
> Explained》已经成为开发人员的标准读物。

  

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

收录于合集 #c语言

4个

上一篇替换百度云！这款开源网盘颜值更高功能更全面！下一篇Github 优质 C 开源项目汇总！2022 最新版

