----------------------------------------
----------------------------------------
#  一款国产开源的 Go 微服务框架！

小金  [ Github掘金计划 ](javascript:void\(0\);)

**Github掘金计划** ![]()

微信号 GithubStar

功能介绍 用心发掘 Github 和 Gitee 上优质的开源项目。

____

_2021-08-16 14:04_ _发表于_

收录于合集

学习 Go 语言的朋友看过来！这里有一个非常厉害的 Go 微服务框架推荐给你！

这个框架的名字叫做 Kratos，目前已经在 Github 上收货了 14k+ 的 star，一共有 110+人为其做了贡献。

![图片](https://mmbiz.qpic.cn/mmbiz_png/BcyAypujBVbgXFgJWQvkgib3jh5Uf3IicPVSHicP0ROhu5HTonNmtCC95F6I6QGlU1dJRCkZnmLIczSiaIibVAuAIIQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

这个项目的作者一定是一个游戏爱好者。项目的名字就是起源于一款以希腊神话为背景的游戏—《战神》，Kratos 是其中一位任人物的名字，他从凡人成为了战神!

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg
width='1px' height='1px' viewBox='0 0 1 1' version='1.1'
xmlns='http://www.w3.org/2000/svg'
xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg
stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-
opacity='0'%3E%3Cg transform='translate\(-249.000000, -126.000000\)'
fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1'
height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

## 项目目标

这个项目的目标是提供完整的微服务研发体验，整合相关框架及工具后，微服务治理相关部分可对整体业务开发周期无感，从而更加聚焦于业务交付。对每位开发者而言，整套
Kratos 框架也是不错的学习仓库，可以了解和参考到微服务方面的技术积累和经验。

## 设计原则

整个框架的设计原则如下：

  * 简单：不过度设计，代码平实简单；
  * 通用：通用业务开发所需要的基础库的功能；
  * 高效：提高业务迭代的效率；
  * 稳定：基础库可测试性高，覆盖率高，有线上实践安全可靠；
  * 健壮：通过良好的基础库设计，减少错用；
  * 高性能：性能高，但不特定为了性能做 hack 优化，引入 unsafe ；
  * 扩展性：良好的接口设计，来扩展实现，或者通过新增基础库目录来扩展功能；
  * 容错性：为失败设计，大量引入对 SRE 的理解，鲁棒性高；
  * 工具链：包含大量工具链，比如 cache 代码生成，lint 工具等等；

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg
width='1px' height='1px' viewBox='0 0 1 1' version='1.1'
xmlns='http://www.w3.org/2000/svg'
xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg
stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-
opacity='0'%3E%3Cg transform='translate\(-249.000000, -126.000000\)'
fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1'
height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

## 特性

  * APIs：协议通信以 HTTP/gRPC 为基础，通过 Protobuf 进行定义；
  * Errors：通过 Protobuf 的 Enum 作为错误码定义，以及工具生成判定接口；
  * Metadata：在协议通信 HTTP/gRPC 中，通过 Middleware 规范化服务元信息传递；
  * Config：支持多数据源方式，进行配置合并铺平，通过 Atomic 方式支持动态配置；
  * Logger：标准日志接口，可方便集成三方 log 库，并可通过 fluentd 收集日志；
  * Metrics：统一指标接口，可以实现各种指标系统，默认集成 Prometheus；
  * Tracing：遵循 OpenTelemetry 规范定义，以实现微服务链路追踪；
  * Encoding：支持 Accept 和 Content-Type 进行自动选择内容编码；
  * Transport：通用的 HTTP/gRPC 传输层，实现统一的 Middleware 插件支持；
  * Registry：实现统一注册中心接口，可插件化对接各种注册中心；
  * Validation: 通过Protobuf统一定义校验规则，并同时适用于HTTP/gRPC服务.
  * SwaggerAPI: 通过集成第三方Swagger插件能够自动生成Swagger API json并启动一个内置的Swaager UI服务.

## 架构

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg
width='1px' height='1px' viewBox='0 0 1 1' version='1.1'
xmlns='http://www.w3.org/2000/svg'
xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg
stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-
opacity='0'%3E%3Cg transform='translate\(-249.000000, -126.000000\)'
fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1'
height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

## 使用方法

### 环境要求

  * go
  * protoc
  * protoc-gen-go

### 下载安装

go get 安装：

    
    
    go get github.com/go-kratos/kratos/cmd/kratos/v2@latest  
    kratos upgrade  
    

源码编译安装：

    
    
    git clone https://github.com/go-kratos/kratos  
    cd kratos  
    make install  
    

### 创建一个服务

使用 `kratos new` 新建项目时所使用结构，其中包括了开发过程中所需的配套工具链( Makefile
等)，便于开发者更高效地维护整个项目，本项目亦可作为使用 Kratos 构建微服务的工程化最佳实践的参考。

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg
width='1px' height='1px' viewBox='0 0 1 1' version='1.1'
xmlns='http://www.w3.org/2000/svg'
xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg
stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-
opacity='0'%3E%3Cg transform='translate\(-249.000000, -126.000000\)'
fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1'
height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

    
    
    # 创建项目模板  
    kratos new helloworld  
      
    cd helloworld  
    # 拉取项目依赖  
    go mod download  
      
    # 生成proto模板  
    kratos proto add api/helloworld/helloworld.proto  
    # 生成proto源码  
    kratos proto client api/helloworld/helloworld.proto  
    # 生成server模板  
    kratos proto server api/helloworld/helloworld.proto -t internal/service  
      
    # 生成所有proto源码、wire等等  
    go generate ./...  
      
    # 运行程序  
    kratos run  
    

生成的目录结构如下：

    
    
      .  
    ├── Dockerfile    
    ├── LICENSE  
    ├── Makefile    
    ├── README.md  
    ├── api // 下面维护了微服务使用的proto文件以及根据它们所生成的go文件  
    │   └── helloworld  
    │       └── v1  
    │           ├── error_reason.pb.go  
    │           ├── error_reason.proto  
    │           ├── error_reason.swagger.json  
    │           ├── greeter.pb.go  
    │           ├── greeter.proto  
    │           ├── greeter.swagger.json  
    │           ├── greeter_grpc.pb.go  
    │           └── greeter_http.pb.go  
    ├── cmd  // 整个项目启动的入口文件  
    │   └── server  
    │       ├── main.go  
    │       ├── wire.go  // 我们使用wire来维护依赖注入  
    │       └── wire_gen.go  
    ├── configs  // 这里通常维护一些本地调试用的样例配置文件  
    │   └── config.yaml  
    ├── generate.go  
    ├── go.mod  
    ├── go.sum  
    ├── internal  // 该服务所有不对外暴露的代码，通常的业务逻辑都在这下面，使用internal避免错误引用  
    │   ├── biz   // 业务逻辑的组装层，类似 DDD 的 domain 层，data 类似 DDD 的 repo，repo 接口在这里定义，使用依赖倒置的原则。  
    │   │   ├── README.md  
    │   │   ├── biz.go  
    │   │   └── greeter.go  
    │   ├── conf  // 内部使用的config的结构定义，使用proto格式生成  
    │   │   ├── conf.pb.go  
    │   │   └── conf.proto  
    │   ├── data  // 业务数据访问，包含 cache、db 等封装，实现了 biz 的 repo 接口。我们可能会把 data 与 dao 混淆在一起，data 偏重业务的含义，它所要做的是将领域对象重新拿出来，我们去掉了 DDD 的 infra层。  
    │   │   ├── README.md  
    │   │   ├── data.go  
    │   │   └── greeter.go  
    │   ├── server  // http和grpc实例的创建和配置  
    │   │   ├── grpc.go  
    │   │   ├── http.go  
    │   │   └── server.go  
    │   └── service  // 实现了 api 定义的服务层，类似 DDD 的 application 层，处理 DTO 到 biz 领域实体的转换(DTO -> DO)，同时协同各类 biz 交互，但是不应处理复杂逻辑  
    │       ├── README.md  
    │       ├── greeter.go  
    │       └── service.go  
    └── third_party  // api 依赖的第三方proto  
        ├── README.md  
        ├── google  
        │   └── api  
        │       ├── annotations.proto  
        │       ├── http.proto  
        │       └── httpbody.proto  
        └── validate  
            ├── README.md  
            └── validate.proto  
    

### 编写代码

    
    
    import "github.com/go-kratos/kratos/v2"  
    import "github.com/go-kratos/kratos/v2/transport/grpc"  
    import "github.com/go-kratos/kratos/v2/transport/http"  
      
    httpSrv := http.NewServer(http.Address(":8000"))  
    grpcSrv := grpc.NewServer(grpc.Address(":9000"))  
      
    app := kratos.New(  
        kratos.Name("kratos"),  
        kratos.Version("latest"),  
        kratos.Server(httpSrv, grpcSrv),  
    )  
    app.Run()  
    

更多关于这个项目的使用介绍，推荐朋友们看看这个项目的官方文档：https://go-kratos.dev/docs/getting-
started/start 。

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg
width='1px' height='1px' viewBox='0 0 1 1' version='1.1'
xmlns='http://www.w3.org/2000/svg'
xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg
stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-
opacity='0'%3E%3Cg transform='translate\(-249.000000, -126.000000\)'
fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1'
height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

  

## 推荐

  * [Github掘金计划](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzIwNDgzMzI3Mg==&action=getalbum&album_id=1571213952619954180#wechat_redirect) ：历史优质原创汇总！用心发掘 Github 和 Gitee 上优质的开源项目。
  * [编程基础](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1632585323454971905&__biz=MzIwNDgzMzI3Mg==#wechat_redirect) ：精选编程基础如学习路线、编程语言相关的开源项目。
  * [计算机基础](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1635325633234780161&__biz=MzIwNDgzMzI3Mg==#wechat_redirect)：精选计算机基础（操作系统、计算机网络、算法、数据结构）相关的开源项目。
  * [技术面试](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1632589980491366403&__biz=MzIwNDgzMzI3Mg==#wechat_redirect) ：精选技术面试相关的开源项目。
  * [项目实战](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1632590550748938241&__biz=MzIwNDgzMzI3Mg==#wechat_redirect) ：精选实战类型的开源项目。
  * [神器工具&网站](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzIwNDgzMzI3Mg==&action=getalbum&album_id=1692140336665378820#wechat_redirect) : 一些好用的插件、软件、网站。

用心发掘 Github 和 Gitee 上优质的开源项目。

后台回复 **「PDF」** 获取 计算机必读书籍

欢迎关注 **「Github掘金计划」**

预览时标签不可点

