----------------------------------------
----------------------------------------
#  基于百度AI人脸识别+uniapp+springboot的高校防疫小程序

原创 战羽  [ 程序员战羽 ](javascript:void\(0\);)

**程序员战羽** ![]()

微信号 gh_4220c148bf8a

功能介绍 专注于软考、技术源码、软件工具等分享

____

_2023-07-13 03:47_ _发表于 海南_

收录于合集 ##源码分享 2个

> 作品功能完整，适合学习、毕设、二次开发等，也可以为其他类型项目实现提供一些思路。

 **1、功能介绍**

防疫小程序主要由小程序端和管理端组成，主要功能主要包含电子围栏，健康上报，实时疫情管控地图，每日考勤（M:N人脸识别）、请假申请、公告通知。

电子围栏：管理员提前设置电子围栏区域，当学生离开该区域时，会向辅导员及时发送告警信息。

健康上报：能够满足学生每日防疫信息的填报工作。

管控地图：实时展示城市封控区、管控区、防范区区域。

每日考勤：使用百度人脸搜索M:N实现宿舍集体照考勤。

公告通知：管理员可以发布相关公告信息。

 **2、系统设计**

 **1）小程序端**

采用uniapp跨平台框架、uview UI框架、小程序分包技术、腾讯地图api、高德地图api等技术实现。

 **2）管理端**

采用百度AI开放平台人脸识别技术、SpringBoot、Mybatis-plus、ant design vue等技术实现。

 **3、核心功能**

 **电子围栏：**

采用高德地图开放能力实现。

管理员提前在后端设置电子围栏区域，定时收集学生位置信息，当学生离开该区域时，会向辅导员及时发送告警信息。

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/JGk26pDia9oicyxRozWUDlrU6NickJXWibNxKHRrdBnWPJQPzM7TySBkvuflZnHG2I4kqcfzYribibUvtT8nNUhA9czA/640?wx_fmt=png)

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/JGk26pDia9oicyxRozWUDlrU6NickJXWibNxMVMGBJQ6mjDEjnIRFjI1wjGBcaOGcJwgzxBNxhKVbeZypIsiaDoZ4vg/640?wx_fmt=png)

每日考勤：  
采用百度AI开放平台 人脸识别 能力实现。  
考勤前需要收集学生的人脸信息，通过百度人脸识别服务功能，
创建人脸数据库。当学生通过小程序端上传宿舍合照后，对宿舍合照进行人脸搜索M:N识别，从而判断学生是否存在缺勤情况， 得到查寝情况统计。

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/JGk26pDia9oicyxRozWUDlrU6NickJXWibNxrCSnSczn8icH5oQOcEKV1wjnF7wDXD5nwlCCTaaG5aB0WM2XMGZziaeQ/640?wx_fmt=png)

疫情管控区域查询：  
定时调用腾讯地图某地区疫情管控区域接口数据，实时展示城市区域。（注意：此数据展示仅为历史测试数据，一切数据请以接口为准。）

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/JGk26pDia9oicyxRozWUDlrU6NickJXWibNxoUDqhHWyKHXMk370reBLdkev44p2ibr2cl8C9SkCrCia8GiaaOwIicjvAw/640?wx_fmt=png)

 **4 **、**** **其他功能截图**

##
![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/JGk26pDia9oicyxRozWUDlrU6NickJXWibNxkSaNgvUxzSr3Qnx94YL6SLPfc082ib1ibhyDIKnRheyyRa27KvFpz9HA/640?wx_fmt=png)![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/JGk26pDia9oicyxRozWUDlrU6NickJXWibNxIlr7RPnKmncib7gJnQvFnm3FE1ZjCg5AvkiaQ3ncVWPRUTM02icf9NrMw/640?wx_fmt=png)![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/JGk26pDia9oicyxRozWUDlrU6NickJXWibNx2tnAFTRx94uQsz1C2Pia0EWjXNu2JYKGHbTibbWGTIw3mtJI5PxiaKOpg/640?wx_fmt=png)![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/JGk26pDia9oicyxRozWUDlrU6NickJXWibNx8SWr3hAW2F5zJwhsWRw2cOdEFgdem71FBkGGIEBJfNdtlqTEl0Zpjg/640?wx_fmt=png)![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/JGk26pDia9oicyxRozWUDlrU6NickJXWibNxbGAz4a1q9AK7M7hqZOebrDRmFRUrnHyLeK2iavZ8MPfqY7XyGbELcYA/640?wx_fmt=png)![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/JGk26pDia9oicyxRozWUDlrU6NickJXWibNxDiaPiarA2tXqCf90NhP6p366SU2yL7f3acrwWBxUNw7ibChrNZ3qYC0NA/640?wx_fmt=png)

  

 **5** **、源码获取**

演示视频及源码获取，请+微信heguangqc  

    
    
    END
    
      
    
    
      
    
    
    
    扫描下方公众号【程序员战羽】
    
    
     **👇👇👇**
    
     **![图片](https://mmbiz.qpic.cn/mmbiz_jpg/JGk26pDia9o8cFBCyvhMyEIXlIIHviab5FKEawNS8crHPgUpLO3x8R1Evia8C4l6nLWQ5njE0TWmPcWbORMk0NmibQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)**
    
    
    👆 长按上方二维码 2 秒获取更多技术干货

  

  

    
    
    ❤️给个「在看」，是最大的支持❤️

预览时标签不可点

收录于合集 ##源码分享

2个

下一篇推荐一款非常棒的ChatGPT开源项目

