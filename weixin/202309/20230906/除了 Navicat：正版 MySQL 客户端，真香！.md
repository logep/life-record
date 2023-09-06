----------------------------------------
----------------------------------------
#  除了 Navicat：正版 MySQL 客户端，真香！

[ Github掘金计划 ](javascript:void\(0\);)

**Github掘金计划** ![]()

微信号 GithubStar

功能介绍 用心发掘 Github 和 Gitee 上优质的开源项目。

____

_2022-06-25 02:50_ _发表于 湖北_

收录于合集

关注 “GitHub掘金计划”  

设为 “星标”，每天带你逛 GitHub！

  

![图片](https://mmbiz.qpic.cn/mmbiz_png/uDRkMWLia28hLFWZKjKbEbxsDudFrCMr1I8HJ3aOOebFKPHjYRYnELUgtOH69oaPkplmjCD10EeicONO9Rh30j6w/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)来源：cnblogs.com/zuge/p/7397255.html

大家好，我是小金。

最近看到一款数据库客户端工具，DataGrip，是大名鼎鼎的 JetBrains 公司出品的，就是那个出品 Intellij IDEA 的公司。

DataGrip 是一款数据库管理客户端工具，方便连接到数据库服务器，执行 sql、创建表、创建索引以及导出数据等。

之前试用的客户端工具是 dbvisualizer，但是在试用了 DataGrip 以后，我就决定抛弃 dbvisualizer。我相信，当你第一眼看到
DataGrip 以后，会有一种惊艳的感觉，就好比你第一眼看到一个姑娘，就是那么一瞥，你对自己说，就是她了！

废话不多说，来看看 DataGrip 的常用功能。DataGrip 下载链接如下：

 _https://www.jetbrains.com/datagrip/download_

安装过程也很简单，双击安装，下一步，中间会让你选择主题，本人选择的是经典的 Darcula，安装完成后，启动，界面如下

![图片](https://mmbiz.qpic.cn/mmbiz_png/uDRkMWLia28hLFWZKjKbEbxsDudFrCMr1WicsibQRnm9zWdp2amjPt2zV7kzI6WpOyFAlzNwsj4M2FHLsos76ia22Q/640?wx_fmt=png)

相信使用过 IDEA 的同学会感到很亲切。接下来管理数据库驱动。DataGrip 支持主流的数据库，File->DataSource

![图片](https://mmbiz.qpic.cn/mmbiz_png/uDRkMWLia28hLFWZKjKbEbxsDudFrCMr1DD1HruoRvTTFNXsDMco7tDPudtCSFo4z8URjRtr9rOURowicoBvme5w/640?wx_fmt=png)

也可以在 Database 视图中展开绿色的 + 号，添加数据库连接

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/uDRkMWLia28hLFWZKjKbEbxsDudFrCMr1VAr8SMQmDaxrTxmicaHRmLQ1ia7xKM2mqxThvYEpdicHskFhpiae8UTvOw/640?wx_fmt=jpeg)

选择需要连接的数据库类型

![图片](https://mmbiz.qpic.cn/mmbiz_png/uDRkMWLia28hLFWZKjKbEbxsDudFrCMr13zHdHhJpfraD9VA5ZrLoFso31keAPXND3w2reMibeeick1X6hOjsLZmg/640?wx_fmt=png)

在面板中，左上部分列出了已经建立的数据库连接，点击各项，右侧会展示当前连接的配置信息，General
面板中，可以配置数据库连接的信息，如主机、用户名、密码等，不同数据库配置信息不完全相同，填入数据库 URL，注意，URL 后有个选项，可以选择直接填入
url，那么就不需要单独填主机名、端口等信息了。

Driver 部分显示数据库驱动信息，如果还没有下载过驱动，底部会有个警告，提示缺少驱动

![图片](https://mmbiz.qpic.cn/mmbiz_png/uDRkMWLia28hLFWZKjKbEbxsDudFrCMr1C5cB9UWgd94pzRyg0icd4oegDBTicLWN1moficNkeH3f4PWxiap1xmibSjQ/640?wx_fmt=png)

点击 Driver 后的数据库类型，会跳转到驱动下载页面，点击 download，下载完会显示驱动包

![图片](https://mmbiz.qpic.cn/mmbiz_png/uDRkMWLia28hLFWZKjKbEbxsDudFrCMr1L6NsTqTv5VribppsKrDA4lrNe1PXvSK5kxLLRgwR66z37kkcfIew4fQ/640?wx_fmt=png)

![图片](https://mmbiz.qpic.cn/mmbiz_png/uDRkMWLia28hLFWZKjKbEbxsDudFrCMr1zktUlt08m3JP2XEt8qicIMSFBZ2uuGKWDgB8oBkY6Nx4VQo9Sn5BKZw/640?wx_fmt=png)

如果下载的驱动有问题，可以手动添加本地驱动包，在试用过程中，创建 Oracle 连接时，下载的驱动包就有问题，提示缺少 class，点击右侧绿色的 +
号，选择本地下载好的 jar 包，通过右侧上下箭头，将导入的 jar 包移到最上位置就 OK 了

![图片](https://mmbiz.qpic.cn/mmbiz_png/uDRkMWLia28hLFWZKjKbEbxsDudFrCMr1dDseg0WwgicSsJsYRSt0zOpsjFoQf67Ru2K5B1k7KhSs2X1op2xErdw/640?wx_fmt=png)

点击 Test Connection，查看配置是否正确，接下来就可以使用了。

打开 DataGrip，选择 File->Settings，当前面板显示了常用设置项

![图片](https://mmbiz.qpic.cn/mmbiz_png/uDRkMWLia28hLFWZKjKbEbxsDudFrCMr1yQeeauo4NdZqOw7ugWvg9h71WJWe3HzUBWKNRx96YibR2hxuoPbTyaw/640?wx_fmt=png)

基本上默认设置就足够了，要更改设置也很简单，左侧菜单已经分类好了，第一项是数据库相关的配置，第二项是配置外观的，在这里可以修改主题，key map
修改快捷键，editor 配置编辑器相关设置，在这里可以修改编辑器字体，展开 edit 项，Editor->Color & Fonts->Font

![图片](https://mmbiz.qpic.cn/mmbiz_png/uDRkMWLia28hLFWZKjKbEbxsDudFrCMr1Z0IoZQVaPmNE4C8FY9fO4rAlb8XBORyxajd4UjoINjAC1NAbu8ibiaFg/640?wx_fmt=png)

需要将当前主题保存一下，点击 save as，起个名，选择重命名后的主题就能修改了，这里我选择习惯的 Conurier New 字体，大小为 14
号，点击右下角的 apply，点击 OK

![图片](https://mmbiz.qpic.cn/mmbiz_png/uDRkMWLia28hLFWZKjKbEbxsDudFrCMr1UTnqic6lMvkOxynZ9jYE8k4eUHpBECvbhbR9BoM3IWicLwdA23STgoFw/640?wx_fmt=png)

其他的没啥好设置的了。

接下来，我们来使用 DataGrip 完成数据库的常用操作，包括查询数据、修改数据，创建数据库、表等。

![图片](https://mmbiz.qpic.cn/mmbiz_png/uDRkMWLia28hLFWZKjKbEbxsDudFrCMr1ZQKHgV5x3crQLQHCjPjMH9PfZLmZhRsmQ52RRiaygAL2RpIINibK7w2w/640?wx_fmt=png)

左上区域显示了当前数据库连接，展开后会显示数据库表等信息，如果展开后没有任何信息，需要选中数据库连接，点击上面的旋转图标同步一下，下方有个 More
Schema 选项，点击可以切换不同的 schema。

右键选中的数据库连接，选择 open console，就可以在右侧的控制台中书写 sql 语句了。

![图片](https://mmbiz.qpic.cn/mmbiz_png/uDRkMWLia28hLFWZKjKbEbxsDudFrCMr169iagBae1RHic1iayibGMX1d2L3TrdbApicHaaQ6GIh2cLTM7Em3ibs0jXaw/640?wx_fmt=png)

DataGrip 的智能提示非常爽，无论是标准的 sql
关键字，还是表名、字段名，甚至数据库特定的字段，都能提示，不得不感叹这智能提示太强大了，Intellij IDEA 的智能提示也是秒杀 eclipse。

写完 sql 语句后，可以选中，电子左上侧绿色箭头执行

![图片](https://mmbiz.qpic.cn/mmbiz_png/uDRkMWLia28hLFWZKjKbEbxsDudFrCMr1iaVxL0j5pLLK13w8lm9UMyapqzEAOdq6hW2dWd2OVNibeGv4V1B6DO8Q/640?wx_fmt=png)

也可以使用快捷键 Ctrl+Enter，选中情况下，会直接执行该 sql，未选中情况下，如果控制台中有多条 sql，会提示你要执行哪条 sql。之前习惯了
dbvisualizer 中的操作，dbvisualizer 中光标停留在当前 sql 上 (sql 以分号结尾)，按下 Ctrl+. 快捷键会自动执行当前
sql，其实 DataGrip 也能设置，在 setting->Database-General 中

![图片](https://mmbiz.qpic.cn/mmbiz_png/uDRkMWLia28hLFWZKjKbEbxsDudFrCMr1O2R3l1Hl0xvETITmTUz943OKpHybjfeoTBiaFadK3B5mAYSaUzMAL1w/640?wx_fmt=png)语句执行时默认是提示，改成
smallest statement 后，光标停留在当前语句时，按下 Ctrl+Enter 就会直接执行当前语句。

语句的执行结果在底部显示

![图片](https://mmbiz.qpic.cn/mmbiz_png/uDRkMWLia28hLFWZKjKbEbxsDudFrCMr1g7hJK6ibvSRzGhS0Y82IF3ic3x159DT8SriaD9eVhWTMqOibT2UgF4hXtA/640?wx_fmt=png)

如果某列的宽度太窄，可以鼠标点击该列的任意一个，使用快捷键 Ctrl+Shift +
左右箭头可以调整宽度，如果要调整所有列的宽度，可以点击左上角红框部分，选择所有行，使用快捷键 Ctrl+Shift + 左右箭头调整

添加行、删除行也很方便，上部的 +、- 按钮能直接添加行或删除选中的行，编辑列同样也很方便，双击要修改的列，输入修改后的值，鼠标在其他部分点击就完成修改了

![图片](https://mmbiz.qpic.cn/mmbiz_png/uDRkMWLia28hLFWZKjKbEbxsDudFrCMr1301HuMbuhF3iaoN4Gib4BVSHrpQicefgQtwvTOPWbH74QlXn2EZiaBIicPQ/640?wx_fmt=png)

有的时候我们要把某个字段置为 null，不是空字符串 ""，DataGrip 也提供了渐变的操作，直接在列上右键，选择 set null

![图片](https://mmbiz.qpic.cn/mmbiz_png/uDRkMWLia28hLFWZKjKbEbxsDudFrCMr1tciaibkF8YzlnWYz7hjSA0ld4YWozsDwnOGqubzRlJkhYjDWicnYAg5Ig/640?wx_fmt=png)

对于需要多窗口查看结果的，即希望查询结果在新的 tab 中展示，可以点击 pin tab 按钮，那新查询将不会再当前 tab 中展示，而是新打开一个 tab

![图片](https://mmbiz.qpic.cn/mmbiz_png/uDRkMWLia28hLFWZKjKbEbxsDudFrCMr1x9ER8fbmE05UzX6AlXpXX46WqzvJXUYln0VtOvr82nsRxwic2sA77Kg/640?wx_fmt=png)

旁边的 output 控制台显示了执行 sql 的日志信息，能看到 sql 执行的时间等信息

![图片](https://mmbiz.qpic.cn/mmbiz_png/uDRkMWLia28hLFWZKjKbEbxsDudFrCMr1UDLqELrA3VwQ09pb4EiaHEyoPyu4fuficTQJS3ewIz7d5icXyUmdjkUTQ/640?wx_fmt=png)

我就问这么吊的工具，还有谁！！！

要新建表也是相当简单、智能，选中数据库连接，点击绿色 + 号下选择 table

![图片](https://mmbiz.qpic.cn/mmbiz_png/uDRkMWLia28hLFWZKjKbEbxsDudFrCMr1M5QhPf33siaRvTovWanQWbe12EPIRvsia6iakjYVZtgEdjicxszicjP4uTQ/640?wx_fmt=png)

在新打开的窗口中，可以填写表信息

![图片](https://mmbiz.qpic.cn/mmbiz_png/uDRkMWLia28hLFWZKjKbEbxsDudFrCMr1Regt7iafa2mWrFKl0YlVn0Fh6OwW6E7cD1ml7U3x3p2iar3ChssGao3w/640?wx_fmt=png)

我就问你看到这个窗口兴奋不兴奋！！！

顶部可以填写表名、表注释，中间可以点击右侧绿色 + 号添加列，列类型 type 也是能自动补全，default
右侧的消息框图标点击后能对列添加注释，旁边的几个 tab 可以设置索引及外键

所有这些操作的 DDL 都会直接在底部显示

![图片](https://mmbiz.qpic.cn/mmbiz_png/uDRkMWLia28hLFWZKjKbEbxsDudFrCMr1hoThicfeYXtib7JEPL1HuD4fL7BomnahicS0H6nEpopSPsPeOK5iaVs1tQ/640?wx_fmt=png)

我就问你怕不怕

表建完后，可以点击下图中的 table 图标，打开表查看视图

![图片](https://mmbiz.qpic.cn/mmbiz_png/uDRkMWLia28hLFWZKjKbEbxsDudFrCMr1P35dqgicvTHPUFTvU3YFqnKbj4fnvTrjK3n0J7wavDI3EQs1yibDjibAg/640?wx_fmt=png)

可以查看表的数据，也能查看 DDL 语句

这些基本功能的设计、体验，已经惊艳到我了，接下来就是数据的导出。

DataGrip 的导出功能也是相当强大

选择需要导出数据的表，右键，Dump Data To File

![图片](https://mmbiz.qpic.cn/mmbiz_png/uDRkMWLia28hLFWZKjKbEbxsDudFrCMr1a98A2kz6qKl9KDAHic7cEqeUSJY2VD5icZHTk13jtYV93cuf3ickPF73w/640?wx_fmt=png)

即可以导出 insert、update 形式的 sql 语句，也能导出为 html、csv、json 格式的数据

也可以在查询结果视图中导出

![图片](https://mmbiz.qpic.cn/mmbiz_png/uDRkMWLia28hLFWZKjKbEbxsDudFrCMr1Q1dZC95zyc0fA4gkSgJzvUib79KwROYZxtS3QCx5DNicaxyUAYXW8VPw/640?wx_fmt=png)

点击右上角下载图标，在弹出窗口中可以选择不同的导出方式，如 sql insert、sql update、csv 格式等

![图片](https://mmbiz.qpic.cn/mmbiz_png/uDRkMWLia28hLFWZKjKbEbxsDudFrCMr1AzzZX19nsDf3bENJ4q2jn2RG2n5hFY3pDt8mfzTeYuQ2M0QuFhePtA/640?wx_fmt=png)

如果是导出到 csv 格式，还能控制导出的格式

![图片](https://mmbiz.qpic.cn/mmbiz_png/uDRkMWLia28hLFWZKjKbEbxsDudFrCMr1VqRDLnJoibyhwka2H0efsvWFSIlKmhCTNGCMCKTJtYhZ6ibZBn8cFDMQ/640?wx_fmt=png)

导出后用 excel 打开是这种结果

![图片](https://mmbiz.qpic.cn/mmbiz_png/uDRkMWLia28hLFWZKjKbEbxsDudFrCMr1ibeccdGysI4X1XVgJl9k8D1omnK0PqOEuPWO54vh1ibdgQfWwibQl6thQ/640?wx_fmt=png)

除了能导出数据外，还能导入数据

选择表，右键 ->Import from File，选择要导入的文件

![图片](https://mmbiz.qpic.cn/mmbiz_png/uDRkMWLia28hLFWZKjKbEbxsDudFrCMr1Zw200UB0aNXGXUYsJwLHc9Cr1wp4nrDQ61DrdY9aCkWAbKwU70MZAA/640?wx_fmt=png)

注意，导出的时候如果勾选了左侧的两个 header 选项，导入的时候如果有 header，也要勾选，不然会提示列个数不匹配

 **1、关键字导航：**

当在 datagrip 的文本编辑区域编写 sql 时，按住键盘 Ctrl 键不放，同时鼠标移动到 sql
关键字上，比如表名、字段名称、或者是函数名上，鼠标会变成手型，关键字会变蓝，并加了下划线，点击，会自动定位到左侧对象树，并选中点击的对象

![图片](https://mmbiz.qpic.cn/mmbiz_png/uDRkMWLia28hLFWZKjKbEbxsDudFrCMr10oP8dhyREb1iaD5KBETqOaPU70pUicZu2TT4or962HJXmG3EgDUjg0ug/640?wx_fmt=png)

 **2、快速导航到指定的表、视图、函数等：**

在 datagrip 中，使用 Ctrl+N 快捷键，弹出一个搜索框，输入需要导航的名称，回车即可

![图片](https://mmbiz.qpic.cn/mmbiz_png/uDRkMWLia28hLFWZKjKbEbxsDudFrCMr1P8l6t6sYoaSSSe9V5gzwQas5hXxtGAhcjQiablAA3qzf0w2R3icoWRkg/640?wx_fmt=png)

 **3、全局搜索**

连续两次按下 shift 键，或者鼠标点击右上角的搜索图标，弹出搜索框，搜索任何你想搜索的东西

![图片](https://mmbiz.qpic.cn/mmbiz_png/uDRkMWLia28hLFWZKjKbEbxsDudFrCMr1sxJww0aPic9MzLsSejzczbMAsb0KfME8uGaTz9M0TyDvvic4XKvnUHhQ/640?wx_fmt=png)

 **4、结果集搜索**

在查询结果集视图区域点击鼠标，按下 Ctrl+F 快捷键，弹出搜索框，输入搜索内容，支持正则表达式、过滤结果

![图片](https://mmbiz.qpic.cn/mmbiz_png/uDRkMWLia28hLFWZKjKbEbxsDudFrCMr14EcHIz9cG7D7cHobc2ib83EerNRFAjD5VuPXWodV1V4AGl35SPfM2ZA/640?wx_fmt=png)

 **5、导航到关联数据**

表之间会有外检关联，查询的时候，能直接定位到关联数据，或者被关联数据，例如 user1 表有个外检字段 classroom 指向 classroom
表的主键 id，在查询 classroom 表数据的时候，可以在 id 字段上右键，go to，referencing data

![图片](https://mmbiz.qpic.cn/mmbiz_png/uDRkMWLia28hLFWZKjKbEbxsDudFrCMr1I8ib2xa7NLAX6RelzHZqgib213BAdP1afJRFBHYegib0vKTVJlvA7JicQA/640?wx_fmt=png)

选择要显示第一条数据还是显示所有数据

![图片](https://mmbiz.qpic.cn/mmbiz_png/uDRkMWLia28hLFWZKjKbEbxsDudFrCMr1BS0kanyw1F7mVg7nCCM80ASB8db68boib3ZiacNpTwelnC2AQpDDNvIQ/640?wx_fmt=png)

会自动打开关联表的数据

![图片](https://mmbiz.qpic.cn/mmbiz_png/uDRkMWLia28hLFWZKjKbEbxsDudFrCMr1TluH2YDSRhPxDQ1ZJm0NfqhqGeDHLKLdEfeBAsDDVSWrS5vEjZEv7Q/640?wx_fmt=png)

相反，查询字表的数据时，也能自动定位到父表

 **6、结果集数据过滤**

对于使用 table edit（对象树中选中表，右键 ->table
editor）打开的结果集，可以使用条件继续过滤结果集，如下图所示，可以在结果集左上角输入款中输入 where 条件过滤

![图片](https://mmbiz.qpic.cn/mmbiz_png/uDRkMWLia28hLFWZKjKbEbxsDudFrCMr1VbIU91RyplcUqvmcWMxfQCd9FLFYpqRbKeZuLSHpA8ujIIaBDibYHXA/640?wx_fmt=png)

也可以对着需要过滤数据的列右键，filter by 过滤

![图片](https://mmbiz.qpic.cn/mmbiz_png/uDRkMWLia28hLFWZKjKbEbxsDudFrCMr1KicsPdRQS0gwg5d5HsI6ufxJr2GuMvD5d8JiaHp1l8G4bMeCs89iaw83w/640?wx_fmt=png)

 **7、行转列**

对于字段比较多的表，查看数据要左右推动，可以切换成列显示，在结果集视图区域使用 Ctrl+Q 快捷键

![图片](https://mmbiz.qpic.cn/mmbiz_png/uDRkMWLia28hLFWZKjKbEbxsDudFrCMr13V6qXMjd3oPT0ZlF2eLbalLM0ojwfompg7qYK4iaWBt5Zs1PC1tW9UQ/640?wx_fmt=png)

 **1、变量重命名**

鼠标点击需要重命名的变量，按下 Shift+F6 快捷键，弹出重命名对话框，输入新的名称

![图片](https://mmbiz.qpic.cn/mmbiz_png/uDRkMWLia28hLFWZKjKbEbxsDudFrCMr1b6ZXnibqHSagfWUskjmKGqzvoR1OT54oqymPkjI6ggsZrfAfW4qt9xA/640?wx_fmt=png)

 **2、自动检测无法解析的对象**

如果表名、字段名不存在，datagrip 会自动提示，此时对着有问题的表名或字段名，按下 Alt+Enter，会自动提示是否创建表或添加字段

![图片](https://mmbiz.qpic.cn/mmbiz_png/uDRkMWLia28hLFWZKjKbEbxsDudFrCMr1qDF0gW1SGInLK3LQlcyXKhNiasd7yTW1u1dibx4B9gpAXMLniboXylFDA/640?wx_fmt=png)

 **3、权限定字段名**

对于查询使用表别名的，而字段中没有使用别名前缀的，datagrip 能自动添加前缀，鼠标停留在需要添加别名前缀的字段上，使用 Alt+Enter 快捷键

![图片](https://mmbiz.qpic.cn/mmbiz_png/uDRkMWLia28hLFWZKjKbEbxsDudFrCMr166x5cBJTBFaH8MI3wcT01C1PelOowL0YX4TnqY9zLbI3akb6rKfdTg/640?wx_fmt=png)

 **4、通配符自动展开**

查询的时候我们会使用 select 查询所有列，这是不好的习惯，datagrip 能快速展开列，光标定位到后面，按下 Alt+Enter 快捷键

![图片](https://mmbiz.qpic.cn/mmbiz_png/uDRkMWLia28hLFWZKjKbEbxsDudFrCMr1HBcibufZfsY8q1OaAv6OICnK06uCIHXBJciaC4JPrziaNSB8SpJbF4CQQ/640?wx_fmt=png)

 **5、大写自动转换**

sql 使用大写形式是个好的习惯，如果使用了小写，可以将光标停留在需要转换的字段或表名上，使用 Ctrl+shift+U 快捷键自动转换

 **6、sql 格式化**

选中需要格式化的 sql 代码，使用 Ctrl+Alt+L 快捷键

datagrip 提供了一个功能强大的编辑器，实现了 notpad++ 的列编辑模式

 **1、多光标模式**

在编辑 sql 的时候，可能需要同时输入或同时删除一些字符，按下 alt+shift，同时鼠标在不同的位置点击，会出现多个光标

![图片](https://mmbiz.qpic.cn/mmbiz_png/uDRkMWLia28hLFWZKjKbEbxsDudFrCMr1hHYUa9lhyP9mdnWEg9HU2VPEoPkJea7DSoO8pcicQUSquwUK8GpOhFQ/640?wx_fmt=png)

 **2、代码注释**

选中要注释的代码，按下 Ctrl+/ 或 Ctrl+shift+/ 快捷键，能注释代码，或取消注释

![图片](https://mmbiz.qpic.cn/mmbiz_png/uDRkMWLia28hLFWZKjKbEbxsDudFrCMr1KSnA5VicHTics1GcFbJOaS8d0S347b7ZxCNeM0w2MGyUo3sVQArXwvQw/640?wx_fmt=png)

 **3、列编辑**

按住键盘 Alt 键，同时按下鼠标左键拖动，能选择多列，拷贝黏贴等操作

![图片](https://mmbiz.qpic.cn/mmbiz_png/uDRkMWLia28hLFWZKjKbEbxsDudFrCMr1TLh5JV7jh2rQ3roqT0ZsQFcKib6RPkE46UHPEq1ibZ7NPiatGbiarDy5Eg/640?wx_fmt=png)

 **4、代码历史**

在文本编辑器中，邮件，local history，show history，可以查看使用过的 sql 历史

![图片](https://mmbiz.qpic.cn/mmbiz_png/uDRkMWLia28hLFWZKjKbEbxsDudFrCMr1zq7oS67ClHET4XcxiccKzMX0p5RWbZj10TP3NUPf3Paia2wJyrcf00XA/640?wx_fmt=png)

命令历史

![图片](https://mmbiz.qpic.cn/mmbiz_png/uDRkMWLia28hLFWZKjKbEbxsDudFrCMr1tVbJJzYgBEq3B0MA2MUbjAgLMLcQjWBaIDluiaynbhnhiaVlCPbQVNlA/640?wx_fmt=png)

最后，如果你想了解更多 GitHub 优质开源项目和开发者工具，可以关注下这个 GitHub Repo。里面收录了 3000 多个高质量、有趣实用的
GitHub 开源技术教程、开发者工具、编程项目等内容。GitHub：
_https://github.com/GitHubDaily/GitHubDaily_

![图片](https://mmbiz.qpic.cn/mmbiz_png/uDRkMWLia28ia1W6JDd2aJ7YuzR2FbiaXOLQBibPPOc65M3Lapv4ly5gTuIMcpNshribHuNHibOQnwSYUgSv2XNkKXIw/640?wx_fmt=png)

  

##  推荐

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

