----------------------------------------
----------------------------------------
#  再见ElasticSearch，这个功能强大的轻量级搜索引擎真香！

原创 小金  [ Github掘金计划 ](javascript:void\(0\);)

**Github掘金计划** ![]()

微信号 GithubStar

功能介绍 用心发掘 Github 和 Gitee 上优质的开源项目。

____

_2021-09-23 15:19_ _发表于_

收录于合集

#开源 18 个

#搜索引擎 2 个

#Github掘金计划 81 个

#神器工具 48 个

![图片](https://mmbiz.qpic.cn/mmbiz_png/BcyAypujBVbCAx0k7SQWARdNbsNPhgQA6tJpv7MPL57EMzcayu36VekrIj0FYWnHVaEDEM0FyW2NyjCoNgFcWg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

晚上好呀，我是小金。刚刚肝完了这篇文章，求个在看和点赞鼓励一下呀！

这篇文章建议大家一定要收藏！接下来要给大家推荐一个基于 Rust 写搜索引擎，非常实用，搭建搜索服务的时候可以用上。

这个开源搜索引擎的名字叫做 MeiliSearch。根据官网介绍：

> MeiliSearch 是一个强大、快速、开源、易于使用和部署的搜索引擎。搜索和索引都是高度可定制的。提供开箱即用的功能，如错字容忍、过滤器和同义词。

MeiliSearch 支持汉字（汉字）搜索、RESTful API 以及高度可定制。

相比于 ElasticSearch 来说，MeiliSearch 在小数据规模下更加方便易用。

了解过 Rust 这门编程语言的小伙伴应该知道 Rust 的性能非常好，和 C++ 想必几乎没有太大差别，仅仅是在需要额外安全保证的代码会比
C++慢一些。并且，Rust 相比于 C 和 C ++在内存管理方面更加聪明，没有内存泄露的风险。

MeiliSearch 的搜索速度非常快，通常只需要 50 毫秒以内，搜索即输入的快感体验！

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg
width='1px' height='1px' viewBox='0 0 1 1' version='1.1'
xmlns='http://www.w3.org/2000/svg'
xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg
stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-
opacity='0'%3E%3Cg transform='translate\(-249.000000, -126.000000\)'
fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1'
height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

  * 项目地址：https://github.com/meilisearch/MeiliSearch
  * 项目文档：https://docs.meilisearch.com/

## 快速体验

### 安装

你可以使用 Docker 很方便的安装 MeiliSearch。

    
    
    docker run -p 7700:7700 -v "$(pwd)/data.ms:/data.ms" getmeili/meilisearch  
    

Linux & Mac OS 的一键安装和启动的命令：

    
    
    curl -L https://install.meilisearch.com | sh  
    ./meilisearch  
    

如果你本地有 Rust 环境的话，也可以直接克隆项目源码运行。

    
    
    git clone https://github.com/meilisearch/MeiliSearch.git  
    cd MeiliSearch  
    cargo run --release  
    

运行成功的示意图如下：

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg
width='1px' height='1px' viewBox='0 0 1 1' version='1.1'
xmlns='http://www.w3.org/2000/svg'
xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg
stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-
opacity='0'%3E%3Cg transform='translate\(-249.000000, -126.000000\)'
fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1'
height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

用浏览器访问 http://127.0.0.1:7700/ 就可以看到 MeiliSearch 提供的 Web 搜索页面。

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg
width='1px' height='1px' viewBox='0 0 1 1' version='1.1'
xmlns='http://www.w3.org/2000/svg'
xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg
stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-
opacity='0'%3E%3Cg transform='translate\(-249.000000, -126.000000\)'
fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1'
height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

### 添加文档

可以使用 curl 命令添加文档到指定的索引，索引是存储文档的地方，文档代表的是真正的数据。

    
    
    # 添加文档到 movies 索引  
    curl \  
      -X POST 'http://127.0.0.1:7700/indexes/movies/documents' \  
      --data @movies.json  
    

`movies.json` （`movies.json`
的完整数据下载链接：https://docs.meilisearch.com/movies.json）

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg
width='1px' height='1px' viewBox='0 0 1 1' version='1.1'
xmlns='http://www.w3.org/2000/svg'
xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg
stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-
opacity='0'%3E%3Cg transform='translate\(-249.000000, -126.000000\)'
fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1'
height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

如上所示，要将文档添加到 MeiliSearch，您必须提供：

  * 数组形式的文档 JSON objects。
  * 一个索引名（UID）。

## 搜索

哦了！文档已经有了。咱们现在能搜索。

    
    
    curl 'http://127.0.0.1:7700/indexes/movies/search' \  
    --data '{ "q": "botman" }'  
    

回复结果：

    
    
    {  
      "hits": [  
        {  
          "id": "29751",  
          "title": "Batman Unmasked: The Psychology of the Dark Knight",  
          "poster": "https://image.tmdb.org/t/p/w1280/jjHu128XLARc2k4cJrblAvZe0HE.jpg",  
          "overview": "Delve into the world of Batman and the vigilante justice tha",  
          "release_date": "2008-07-15"  
        },  
        {  
          "id": "471474",  
          "title": "Batman: Gotham by Gaslight",  
          "poster": "https://image.tmdb.org/t/p/w1280/7souLi5zqQCnpZVghaXv0Wowi0y.jpg",  
          "overview": "ve Victorian Age Gotham City, Batman begins his war on crime",  
          "release_date": "2018-01-12"  
        }  
        ...  
      ],  
      "offset": 0,  
      "limit": 20,  
      "processingTimeMs": 2,  
      "query": "botman"  
    }  
    

### 常用编程语言集成

MeiliSearch 提供了 JS、Python、PHP、Ruby、Go、Rust 的开箱即用的客户端。

比如说，对于 Python 项目来说，我们通过下面几行代码就可以添加文档。

    
    
    import meilisearch  
    import json  
      
    client = meilisearch.Client('http://127.0.0.1:7700')  
      
    json_file = open('movies.json')  
    movies = json.load(json_file)  
    client.index('movies').add_documents(movies)  
    

通过下面一行代码即可实现搜索：

    
    
    client.index('movies').search('botman')  
    

记得提前下载 meilisearch 的依赖。

    
    
    pip3 install meilisearch

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

收录于合集 #开源

18个

上一篇违反开源协议？知名网红前往深圳公司上门索取源码！下一篇又一款超高颜值的聊天应用开源了！YYDS！！！

