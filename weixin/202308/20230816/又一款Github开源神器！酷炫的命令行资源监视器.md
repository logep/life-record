----------------------------------------
----------------------------------------
#  又一款Github开源神器！酷炫的命令行资源监视器

原创 小金  [ Github掘金计划 ](javascript:void\(0\);)

**Github掘金计划** ![]()

微信号 GithubStar

功能介绍 用心发掘 Github 和 Gitee 上优质的开源项目。

____

_2021-10-21 14:05_ _发表于_

收录于合集

#程序员 43 个

#Github 52 个

#开源项目 31 个

#Github掘金计划 81 个

#监控系统 2 个

大家好，我是小金！

实在太菜，加班到9点才把今天的工作任务给干完~

如果问到要怎么查看当前 Linux 服务器的资源占用情况？可能首先想到的就是 top
命令，简单快速的敲出这行命令确实能解决这个问题，但是作为一个酷炫的程序员可不止步于此。单纯的只是看数字简直枯燥乏味，那有没有什么黑科技可以让人眼前一亮，一下就觉得你很酷呢？当然有，下面要给大家介绍的就是这样一款酷炫的资源监视器工具
btop。

btop 厉不厉害看看 Star 数量就知道，已经累计 3.5K+的 star，而且该项目在持续更新中，已经开始了 OSX
的开发，可谓是非常有前景的项目了。

GitHub 地址：https://github.com/aristocratos/btop 。

![图片](https://mmbiz.qpic.cn/mmbiz_png/BcyAypujBVbKqMxqdndxzSvdd4OnkWQVXUgicibfkNJ7rY1NwOoQKIzeeAOYwOYevm99DkmWQGicxfA1fkFicP5WyA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

## 简介

btop主要使用 C++语言编写，能方便的对服务器资源进行监视，显示处理器、内存、磁盘、网络和进程的使用情况和统计信息。

## 特征

  * 易于使用，具有游戏灵感的菜单系统。
  * 完全支持鼠标，所有带有突出显示键的按钮都是可点击的，鼠标滚动在进程列表和菜单框中工作。
  * 带有 UP、DOWN 键处理选择的快速响应式 UI。
  * 用于显示所选进程的详细统计信息的功能。
  * 过滤过程的能力。
  * 在排序选项之间轻松切换。
  * 进程的树视图。
  * 向选定的进程发送任何信号。
  * 用于更改所有配置文件选项的 UI 菜单。
  * 网络使用情况的自动缩放图。
  * 显示磁盘的 IO 活动和速度
  * 电池表
  * 图表的可选符号
  * 自定义预设

## 快速安装

1、从最新版本下载 btop-(VERSION)-(PLATFORM)-(ARCH).tbz 并解压到一个新文件夹，下载地址如下：

    
    
    https://github.com/aristocratos/btop/releases/latest  
    

注意预先查看服务器位数和情况，选择合适的版本进行下载。

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg
width='1px' height='1px' viewBox='0 0 1 1' version='1.1'
xmlns='http://www.w3.org/2000/svg'
xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg
stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-
opacity='0'%3E%3Cg transform='translate\(-249.000000, -126.000000\)'
fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1'
height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

2、进入到从创建的文件夹，运行 setuid.sh 进行安装，或运行如下命令：

    
    
    # 注意先解压下载的文件，命令如下  
    tar -xvf 对应版本tbz文件  -C 目标文件夹  
    

进入到目标文件夹，运行如下命令进行安装

    
    
     sudo make install  
    

3、（可选）设置 suid 位以使 btop 始终 root（或其他用户）身份运行，运行 setuid.sh 或者使用如下命令

    
    
      
    # 在 make install 之后运行并使用相同的 PREFIX 如果安装时使用了任何前缀  
    # 设置 SU_USER 和 SU_GROUP 以选择用户和组，默认为 root:root  
    sudo make setuid  
    

如果需要卸载可运行 uninstall.sh 或者使用如下命令：

    
    
    # 注意该命令式卸载命令  
    sudo make uninstall  
    

## 可配置性

所有选项均可从 UI 中更改。存储在`$XDG_CONFIG_HOME/btop`或`$HOME/.config/btop`文件夹中的配置和日志文件

`btop.cfg` ：（如果未找到则自动生成）

    
    
    #? Config file for btop v. 0.1.0  
      
    # * btop++/bpytop/bashtop 格式的“.theme”文件的名称，内置主题的“默认”和“TTY”。  
    # * 主题应该放在相对于二进制的“../share/btop/themes”或“$HOME/.config/btop/themes”  
    color_theme = "Default"  
      
    # * 如果应该显示主题设置背景，如果你想要终端背景透明度，设置为 False。  
    theme_background = False  
      
    # * 设置是否应使用 24 位真彩色，如果为 false，则将 24 位颜色转换为 256 色（6x6x6 颜色立方体）。  
    truecolor = True  
      
    # * 设置为 true 以强制 tty 模式，无论是否检测到真正的 tty。  
    # * 将强制使用 16 色模式和 TTY 主题，将所有图形符号设置为“tty”并替换其他非 tty 友好符号。  
    force_tty = False  
      
    # * 定义框布局的预设。预设 0 始终是使用默认设置显示的所有框。最多 9 个预设。  
    # * 格式："box_name:P:G,box_name:P:G" P=(0 或 1) 用于替代位置，G= 用于框的图形符号。  
    # * 使用空格“”作为不同预设之间的分隔符。  
    # * 示例："cpu:0:default,mem:0:tty,proc:1:default cpu:0:braille,proc:0:tty"  
    presets = "cpu:1:default,proc:0:default cpu:0:default,mem:0:default,net:0:default cpu:0:block,net:0:tty"  
      
    # * 盒子上的圆角，如果 TTY 模式打开，则忽略。  
    rounded_corners = True  
      
    # * 用于图形创建的默认符号，“盲文”、“块”或“tty”。  
    # * "braille" 提供最高分辨率，但可能不包含在所有字体中。  
    # * "block" 的分辨率是盲文的一半，但使用更常见的字符。  
    # * "tty" 仅使用 3 种不同的符号，但适用于大多数字体，并且应该可以在真正的 TTY 中使用。  
    # * 注意“tty”的水平分辨率只有其他两个的一半，所以会显示更短的历史视图。  
    graph_symbol = "braille"  
      
    #图形符号用于 cpu 框中的图形，“默认”、“盲文”、“块”或“tty”。  
    graph_symbol_cpu = "default"  
      
    #图形符号用于 cpu 框中的图形，“默认”、“盲文”、“块”或“tty”。  
    graph_symbol_mem = "default"  
      
    #图形符号用于 cpu 框中的图形，“默认”、“盲文”、“块”或“tty”。  
    graph_symbol_net = "default"  
      
    #图形符号用于 cpu 框中的图形，“默认”、“盲文”、“块”或“tty”。  
    graph_symbol_proc = "default"  
      
    # * 手动设置要显示的框。可用值是“cpu mem net proc”，用空格分隔值。  
    shown_boxes = "cpu mem net proc"  
      
    # * 以毫秒为单位的更新时间，建议使用 2000 毫秒或以上以获得更好的图形采样时间。  
    update_ms = 2000  
      
    # * 进程排序, "pid" "program" "arguments" "threads" "user" "memory" "cpu lazy" "cpu Respondes",  
    # * "cpu lazy"随着时间的推移对顶级进程进行排序（更容易理解），" cpu 响应”直接更新顶级进程。  
    proc_sorting = "cpu lazy"  
      
    # * 反向排序，真或假。  
    proc_reversed = False  
      
    # * 将进程显示为树。  
    proc_tree = False  
      
    # * 使用进程列表中的 CPU 图颜色。  
    proc_colors = True  
      
    # * 在进程列表中使用变暗渐变。  
    proc_gradient = True  
      
    # * 如果进程 cpu 使用率应该是它运行的核心或总可用 cpu 功率的使用率。  
    proc_per_core = True  
      
    # * 将进程内存显示为字节而不是百分比。  
    proc_mem_bytes = True  
      
    # * 在进程信息框中使用 /proc/[pid]/smaps 获取内存信息（非常慢但更准确）  
    proc_info_smaps = False  
      
    # * 在屏幕左侧而不是右侧显示 proc 框。  
    proc_left = False  
      
    # * 设置显示在 CPU 图表上半部分的 CPU 统计信息，"total" 始终可用。  
    # * 从选项菜单中检测到的属性列表中选择。  
    cpu_graph_upper = "total"  
      
    # * 设置显示在 CPU 图表下半部分的 CPU 统计信息，"total" 始终可用。  
    # * 从选项菜单中检测到的属性列表中选择。  
    cpu_graph_lower = "total"  
      
    # * 切换较低的 CPU 图是否应该反转。  
    cpu_invert_lower = True  
      
    # * 设置为 True 以完全禁用较低的 CPU 图。  
    cpu_single_graph = False  
      
    # * 在屏幕底部而不是顶部显示 cpu 框。  
    cpu_bottom = False  
      
    # * 在 CPU 框中显示系统正常运行时间。  
    show_uptime = True  
      
    # * 显示 CPU 温度。  
    check_temp = True  
      
    # * 用于 CPU 温度的传感器，使用选项菜单从可用传感器列表中进行选择。  
    cpu_sensor = "Auto"  
      
    # * 如果 check_temp 为 True 并且已找到传感器，也显示 CPU 内核的温度。  
    show_coretemp = True  
      
    # * 在核心和核心温度之间设置自定义映射，可以在某些 CPU 上需要以获得正确核心的正确温度。  
    # * 使用 lm-sensors 或类似工具查看哪些内核报告了您机器上的温度。  
    # * 格式 "x:y" x=core 温度错误，y=core 温度正确，使用空格作为多个条目之间的分隔符。  
    # * 示例："4:0 5:1 6:3"  
    cpu_core_map = ""  
      
    # * 要使用的温标，可用值：“摄氏度”、“华氏度”、“开尔文”和“兰氏度”。  
    temp_scale = "celsius"  
      
    # * 显示 CPU 频率。  
    show_cpu_freq = True  
      
    # * 在屏幕顶部绘制一个时钟，根据 strftime 格式化，空字符串禁用。  
    # * 特殊格式：/host = 主机名 | /user = 用户名 | /uptime = 系统正常运行时间  
    clock_format = "%H:%M"  
      
    # * 在显示菜单时在后台更新主 ui，如果菜单闪烁太多以确保舒适，请将其设置为 false。  
    background_update = True  
      
    # * 自定义 cpu 型号名称，空字符串禁用。  
    custom_cpu_name = ""  
      
    # * 显示磁盘的可选过滤器，应该是挂载点的完整路径，用空格“”分隔多个值。  
    # * 以“exclude=”开头的行更改为排除过滤器，否则默认为“最包含”过滤器。示例：disks_filter="exclude=/boot /home/user"。  
    disks_filter = "exclude=/boot"  
      
    # * 为内存值显示图表而不是仪表。  
    mem_graphs = True  
      
    # * 如果交换内存应该显示在内存框中。  
    mem_below_net = False  
      
    # * 如果交换内存应该显示在内存框中。  
    show_swap = True  
      
    # * 将交换区显示为磁盘，忽略上面的 show_swap 值，在第一个磁盘之后插入自己。  
    swap_disk = True  
      
    # * 如果内存框应该被拆分以显示磁盘信息。  
    show_disks = True  
      
    # * 过滤掉非物理磁盘。将此设置为 False 以包括网络磁盘、RAM 磁盘等。  
    only_physical = True  
      
    # * 从 /etc/fstab 读取磁盘列表。这也会禁用 only_physical。  
    use_fstab = False  
      
    # * 切换是否 io 活动 %（磁盘繁忙时间）应显示在常规磁盘使用视图中。  
    show_io_stat = True  
      
    # * 切换磁盘的 io 模式，显示磁盘读/写速度的大图。  
    io_mode = False  
      
    # * 设置为 True 以在 io 模式下显示组合的读/写 io 图。  
    io_graph_combined = False  
      
    # * 以 MiB/s 为单位设置 io 图的最高速度（默认为 100），使用格式 "mountpoint:speed" 用空格 "" 分隔磁盘。  
    # * 示例：“/mnt/media:100 /:20 /boot:1”。  
    io_graph_speeds = ""  
      
    # * 为 Mebibits 中的网络图设置固定值。仅当 net_auto 也设置为 False 时才使用。  
    net_download = 100  
      
    net_upload = 100  
      
    # * 使用网络图自动重新缩放模式，忽略上面设置的任何值并重新缩放到最低 10 KB。  
    net_auto = True  
      
    # * 将下载和上传的自动缩放同步到当前具有最高缩放比例的任何一个。  
    net_sync = False  
      
    # * 以此处指定的网络接口开始。  
    net_iface = "br0"  
      
    # * 如果有电池，则在右上角显示电池统计信息。  
    show_battery = True  
      
    # * 为“~/.config/btop/btop.log”设置日志级别是：“错误”“警告”“信息”“调试”。  
    # * 级别集包括所有较低级别，即“DEBUG”将显示所有日志信息。  
    log_level = "DEBUG"  
    

命令行选项

    
    
    usage: btop [-h] [-v] [-/+t] [-p <id>] [--utf-force] [--debug]  
      
    optional arguments:  
      -h, --help            show this help message and exit  
      -v, --version         show version info and exit  
      -lc, --low-color      disable truecolor, converts 24-bit colors to 256-color  
      -t, --tty_on          force (ON) tty mode, max 16 colors and tty friendly graph symbols  
      +t, --tty_off         force (OFF) tty mode  
      -p, --preset <id>     start with preset, integer value between 0-9  
      --utf-force           force start even if no UTF-8 locale was detected  
      --debug               start in DEBUG mode: shows microsecond timer for information collect  
                            and screen draw functions and sets loglevel to DEBUG  
    

## 界面展示

使用命令`btop -p 1`即可进入主界面，界面比较鲜亮，所有资源信息都显示的非常详细。

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg
width='1px' height='1px' viewBox='0 0 1 1' version='1.1'
xmlns='http://www.w3.org/2000/svg'
xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg
stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-
opacity='0'%3E%3Cg transform='translate\(-249.000000, -126.000000\)'
fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1'
height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

使用 Esc 按键显示设置界面，有相关选项和帮助说明以及退出操作。

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg
width='1px' height='1px' viewBox='0 0 1 1' version='1.1'
xmlns='http://www.w3.org/2000/svg'
xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg
stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-
opacity='0'%3E%3Cg transform='translate\(-249.000000, -126.000000\)'
fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1'
height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

设置选项界面可以设置主题，开启 tty 模式以及显示电池信息等。

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg
width='1px' height='1px' viewBox='0 0 1 1' version='1.1'
xmlns='http://www.w3.org/2000/svg'
xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg
stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-
opacity='0'%3E%3Cg transform='translate\(-249.000000, -126.000000\)'
fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1'
height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

帮助说明有相关操作快捷键的介绍，可以根据相关按键调出对应的选项框。

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg
width='1px' height='1px' viewBox='0 0 1 1' version='1.1'
xmlns='http://www.w3.org/2000/svg'
xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg
stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-
opacity='0'%3E%3Cg transform='translate\(-249.000000, -126.000000\)'
fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1'
height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

开启 tty 模式后的界面如下，风格也会发生相应的变化。

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg
width='1px' height='1px' viewBox='0 0 1 1' version='1.1'
xmlns='http://www.w3.org/2000/svg'
xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg
stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-
opacity='0'%3E%3Cg transform='translate\(-249.000000, -126.000000\)'
fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1'
height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

怎么样，看这黑科技界面是不是高端了许多，还等什么，赶紧用起来！

## 推荐

  * [Github掘金计划](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzIwNDgzMzI3Mg==&action=getalbum&album_id=1571213952619954180#wechat_redirect) ：历史优质原创汇总！用心发掘 Github 和 Gitee 上优质的开源项目。
  * [编程基础](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1632585323454971905&__biz=MzIwNDgzMzI3Mg==#wechat_redirect) ：精选编程基础如学习路线、编程语言相关的开源项目。
  * [计算机基础](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1635325633234780161&__biz=MzIwNDgzMzI3Mg==#wechat_redirect)：精选计算机基础（操作系统、计算机网络、算法、数据结构）相关的开源项目。
  * [技术面试](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1632589980491366403&__biz=MzIwNDgzMzI3Mg==#wechat_redirect) ：精选技术面试相关的开源项目。
  * [项目实战](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1632590550748938241&__biz=MzIwNDgzMzI3Mg==#wechat_redirect) ：精选实战类型的开源项目。
  * [神器工具&网站](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzIwNDgzMzI3Mg==&action=getalbum&album_id=1692140336665378820#wechat_redirect) : 一些好用的插件、软件、网站。

Github掘金计划由3位Github爱好者维护  

用心发掘 Github 和 Gitee 上优质的开源项目。

后台回复 **「PDF」** 获取 计算机必读书籍

欢迎关注 **「Github掘金计划」**

  

预览时标签不可点

收录于合集 #程序员

43个

上一篇一款开箱即用的国产开源协同办公开发项目！支持钉钉和企业微信集成下一篇重磅！微软将把VSCode带入浏览器！

