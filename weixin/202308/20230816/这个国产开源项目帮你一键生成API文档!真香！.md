----------------------------------------
----------------------------------------
#  这个国产开源项目帮你一键生成API文档!真香！

小金  [ Github掘金计划 ](javascript:void\(0\);)

**Github掘金计划** ![]()

微信号 GithubStar

功能介绍 用心发掘 Github 和 Gitee 上优质的开源项目。

____

_2021-09-06 13:02_ _发表于_

收录于合集

#开源项目 31 个

#github 12 个

#神器工具 48 个

#Github掘金计划 81 个

大家好，我是小金！今天推荐一个可以让你快速生成API文档的国产开源项目！

开发小伙伴们对 API 文档想必非常的熟悉了，不管是用公司单独维护的文档工具，还是使用比较多的
Swagger，这类文档生成工具对代码的侵入性强，在后期的修改和维护带来不少的烦恼。  

今天就给大家推荐一款对代码零入侵，同时支持 JAVA REST API 和 Apache Dubbo RPC 接口文档生成的工具，在业内率先提出基于
JAVA 泛型定义推导的理念， 完全基于接口源码来分析生成接口文档，不采用任何注解侵入到业务代码中。你只需要按照 java-doc 标准编写注释，
就能帮你生成一个简易明了的 Markdown、HTML5、Postman Collection2.0+、OpenAPI 3.0+的文档。

这个项目的名字叫做 smart-doc，在 gitee 上已有 1.8K+的 start，项目代码仓库地址如下：

    
    
    https://gitee.com/smart-doc-team/smart-doc  
    

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg
width='1px' height='1px' viewBox='0 0 1 1' version='1.1'
xmlns='http://www.w3.org/2000/svg'
xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg
stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-
opacity='0'%3E%3Cg transform='translate\(-249.000000, -126.000000\)'
fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1'
height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

另外 smart-doc 可以和 Torna 搭配使用，使用 smart-doc 无侵入完成 Java 源代码分析和提取注释生成 API
文档，自动将文档推送到 Torna 企业级接口文档管理平台。

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg
width='1px' height='1px' viewBox='0 0 1 1' version='1.1'
xmlns='http://www.w3.org/2000/svg'
xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg
stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-
opacity='0'%3E%3Cg transform='translate\(-249.000000, -126.000000\)'
fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1'
height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

#### 1.smart-doc 特性:

  * 零注解、零学习成本、只需要写标准 JAVA 注释。
  * 基于源代码接口定义自动推导，强大的返回结构推导。
  * 支持 Spring MVC、Spring Boot、Spring Boot Web Flux(controller 书写方式)、Feign。
  * 支持 Callable、Future、CompletableFuture 等异步接口返回的推导。
  * 支持 JavaBean 上的 JSR303 参数校验规范，包括分组验证。
  * 对 JSON 请求参数的接口能够自动生成模拟 JSON 参数。
  * 对一些常用字段定义能够生成有效的模拟值。
  * 支持生成 JSON 返回值示例。
  * 支持从项目外部加载源代码来生成字段注释(包括标准规范发布的 jar 包)。
  * 支持生成多种格式文档：Markdown、HTML5、Asciidoctor、Postman Collection、OpenAPI 3.0。Up- 开放文档数据，可自由实现接入文档管理系统。
  * 支持导出错误码和定义在代码中的各种字典码到接口文档。
  * 支持 Maven、Gradle 插件式轻松集成。
  * 支持 Apache Dubbo RPC 接口文档生成。
  * debug 接口调试 html5 页面完全支持文件上传，下载(@download tag 标记下载方法)测试。

#### 2.使用方法

smart-doc 可以很方便的和 Spring Boot 结合，你只需要在项目中添加如下的 Maven 插件即可：

    
    
    <plugin>  
        <groupId>com.github.shalousun</groupId>  
        <artifactId>smart-doc-maven-plugin</artifactId>  
        <version>[最新版本]</version>  
        <configuration>  
            <!--指定生成文档的使用的配置文件,配置文件放在自己的项目中-->  
            <configFile>./src/main/resources/smart-doc.json</configFile>  
            <!--指定项目名称-->  
            <projectName>测试</projectName>  
            <!--smart-doc实现自动分析依赖树加载第三方依赖的源码，如果一些框架依赖库加载不到导致报错，这时请使用excludes排除掉-->  
            <excludes>  
                <!--格式为：groupId:artifactId;参考如下-->  
                <exclude>com.alibaba:fastjson</exclude>  
            </excludes>  
            <!--自1.0.8版本开始，插件提供includes支持,配置了includes后插件会按照用户配置加载而不是自动加载，因此使用时需要注意-->  
            <!--smart-doc能自动分析依赖树加载所有依赖源码，原则上会影响文档构建效率，因此你可以使用includes来让插件加载你配置的组件-->  
            <includes>  
                <!--格式为：groupId:artifactId;参考如下-->  
                <!--也可以支持正则式如：com.alibaba:.* -->  
                <include>com.alibaba:fastjson</include>  
            </includes>  
        </configuration>  
        <executions>  
            <execution>  
                <!--如果不需要在执行编译时启动smart-doc，则将phase注释掉-->  
                <phase>compile</phase>  
                <goals>  
                    <!--smart-doc提供了html、openapi、markdown等goal，可按需配置-->  
                    <goal>html</goal>  
                </goals>  
            </execution>  
        </executions>  
    </plugin>  
    

#### 3.配置项

在项目中添加创建一个`smart-doc.json`配置文件，插件读取这个配置来生成项目的文档，
这个配置内容实际上就是以前采用单元测试编写的`ApiConfig`转成 json 后的结果，因此关于配置项说明可以参考原来单元测试的配置。

最小配置单元：

    
    
    {  
       "outPath": "D://md2" //指定文档的输出路径,相对路径时请用./开头，eg:./src/main/resources/static/doc  
    }  
    

> 如果你想把 html 文档也打包到应用中一起访问，则建议你配置路径为：src/main/resources/static/doc

仅仅需要上面一行配置就能启动 smart-doc-maven-plugin 插件，详细配置说明可以参考官方文档。

添加好插件和配置文件后可以直接运行 Maven 命令生成文档。

    
    
    //生成html  
    mvn -Dfile.encoding=UTF-8 smart-doc:html  
    //生成markdown  
    mvn -Dfile.encoding=UTF-8 smart-doc:markdown  
    //生成adoc  
    mvn -Dfile.encoding=UTF-8 smart-doc:adoc  
    

当然如果嫌手动输入命令比较麻烦，还可以使用 IDEA 的界面进行操作。

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg
width='1px' height='1px' viewBox='0 0 1 1' version='1.1'
xmlns='http://www.w3.org/2000/svg'
xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg
stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-
opacity='0'%3E%3Cg transform='translate\(-249.000000, -126.000000\)'
fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1'
height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

#### 4.生成文档后的效果图

可以通过上面构建生成的 Html、MarkDown 等格式的文件进行浏览，界面排版清晰，一点都不输 Swagger。

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg
width='1px' height='1px' viewBox='0 0 1 1' version='1.1'
xmlns='http://www.w3.org/2000/svg'
xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg
stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-
opacity='0'%3E%3Cg transform='translate\(-249.000000, -126.000000\)'
fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1'
height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)![图片](data:image/svg+xml,%3C%3Fxml
version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0
0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg'
xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg
stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-
opacity='0'%3E%3Cg transform='translate\(-249.000000, -126.000000\)'
fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1'
height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

这么简单易用的文档生成器，还等什么，赶紧用起来吧！

预览时标签不可点

收录于合集 #开源项目

31个

上一篇这些 C语言开源项目 YYDS！！！下一篇几行代码快速开发可视化大屏！科技感爆棚

