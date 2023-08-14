----------------------------------------
----------------------------------------
#  Vue 组件的单元测试

转载-  [ 前端传 ](javascript:void\(0\);)

**前端传** ![]()

微信号 gh_15928b5b199d

功能介绍 前端记事

____

_2022-05-01 04:58_ _发表于 上海_

收录于合集 #单元测试 6个

我们先来简单解释一下单元测试：就是对函数的输入输出进行测试，使用断言的方式，判断我们输入的用例的结果和我们实际输入的结果是否相同

组件的单元测试就是使用单元测试工具，对组件的各种状态和行为进行测试

## 组件单元测试的好处

  * 提供描述组件行为的文档

  * 节省手动测试的时间

  * 减少研发新特性时产生的 bug

  * 改进设计

  * 促进重构

在我们进行单元测试模拟之前，我们需要对环境进行一些配置

## 安装依赖

  * Vue Test Utils

    
    
    npm install --save-dev jsdom jsdom-global  
    复制代码  
    

  * Jest

    
    
    npm install --save-dev jest  
    复制代码  
    

  * vue-jest

    
    
    npm install --save-dev @vue/vue2-jest # (use the appropriate version)  
    复制代码  
    

  * babel-jest

    
    
    yarn add --dev babel-jest @babel/core  
    复制代码  
    

## 安装测试依赖

    
    
    yarn add jest @vue/test-utils vue-jest babel-jest -D -W  
    复制代码  
    

这里有点小问题，如果使用下发的命令进行安装的话会出现一点点的小错误

    
    
    yarn add jest @vue/test-utils vue-jest babel-jest -D  
    复制代码  
    

报错截图：

![图片](https://mmbiz.qpic.cn/mmbiz/5Hv4NiajunszxmN3LR8IyyGm339MkiaVYlrbxuR9pNrXh6DxeyzTUFOx1q1Uib5116pIiaqS5FA7pATPgrzUSRNWibg/640?wx_fmt=other)

  

## Jest 的配置

jest.config.js

    
    
    module.exports = {  
      "testMatch": ["**/__tests__/**/*.[jt]s?(x)"],  
      "moduleFileExtensions": [  
        "js",  
        "json",  
          
        "vue"  
      ],  
      "transform": {  
          
        ".*\\.(vue)$": "vue-jest",  
          
        ".*\\.(js)$": "babel-jest"   
      }  
    }  
    复制代码  
    

基于上面的测试文件的配置，我们会将每个测试文件的配置放置于`__tests__`下

## 创建测试用例：

项目地址：gitee.com/liuyinghao1…

我们使用：`packages\input` 的 `input` 组件进行测试

在`packages\input` 文件夹下 创建 `__tests__` 文件夹 后创建 input.test.js

这里先给大家普及一下几个常用的 API

![图片](https://mmbiz.qpic.cn/mmbiz/5Hv4NiajunszxmN3LR8IyyGm339MkiaVYlURfv4Gficg4SxHtI3NQvJjrBs8FYl4wdCOqRsMPO8FBjIkJzA5KUHkw/640?wx_fmt=other)

  

### 测试用例 1 判断是否是文本框

    
    
    import input from '../src/input.vue'  
    import { mount } from '@vue/test-utils'   
      
    describe('lg-input', () => {  
      test('input-text', () => {  
        const wrapper = mount(input)  
        expect(wrapper.html()).toContain('input type="text"')  
      })  
    })  
    复制代码  
    

这里我们需要 使用`@vue/test-utils`提供的`mount`方法进行挂载，注意，这里只是在内存中进行挂载，并且我们需要保存这个包裹器返回的内容

    
    
    const wrapper = mount(input)  
    复制代码  
    

这个用例很简单，就是想要知道我们生产的是否是一个文本框，这里一个简单的测试用例就写完了，接着我们运行一下：

    
    
    yarn test  
    复制代码  
    

#### 运行结果

  

![图片](https://mmbiz.qpic.cn/mmbiz/5Hv4NiajunszxmN3LR8IyyGm339MkiaVYl0kElsoXyu9pHWvQP3kpDVqzzic6kQ02pbWKPiaMSPAia9r5ibnsib17akgQ/640?wx_fmt=other)

  

### 修改用例

    
    
    expect(wrapper.html()).toContain('input type="tex123123123t"')  
    复制代码  
    

#### 运行结果

  

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg
width='1px' height='1px' viewBox='0 0 1 1' version='1.1'
xmlns='http://www.w3.org/2000/svg'
xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg
stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-
opacity='0'%3E%3Cg transform='translate\(-249.000000, -126.000000\)'
fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1'
height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

  

  

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg
width='1px' height='1px' viewBox='0 0 1 1' version='1.1'
xmlns='http://www.w3.org/2000/svg'
xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg
stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-
opacity='0'%3E%3Cg transform='translate\(-249.000000, -126.000000\)'
fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1'
height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

测试失败，提示没有找到`input type="tex123123123t"`的内容，符合预期，没有问题。

  

### 测试用例 2 判断是否是密码框

    
    
     test('input-password', () => {  
        const wrapper = mount(input, {  
          propsData: {  
            type: 'password'  
          }  
        })  
        expect(wrapper.html()).toContain('input type="password"')  
      })  
    复制代码  
    

我们可以通过`propsData`来进行设置组件的`props`属性

#### 运行结果

  

![图片](https://mmbiz.qpic.cn/mmbiz/5Hv4NiajunszxmN3LR8IyyGm339MkiaVYluROwTdmLANZGgo4NNqnnY2cPx1C8PBVZmPpKjCa7ich1v5NF3Tm5ZZA/640?wx_fmt=other)

  

### 测试用例 3 组件接收值是否正确

    
    
      test('input-password', () => {  
        const wrapper = mount(input, {  
          propsData: {  
            type: 'password',  
            value: 'admin'  
          }  
        })  
        expect(wrapper.props('value')).toBe('admin')  
      })  
    复制代码  
    

这里我们通过`wrapper.props`获取他的`props`属性，拿到这个值之后，进行判断

#### 运行结果

  

![图片](https://mmbiz.qpic.cn/mmbiz/5Hv4NiajunszxmN3LR8IyyGm339MkiaVYlQHfXcwwCrRibK1pmGdaUsOqyKgibCurXJWDac4pHdhQtSibg8eDuepTAg/640?wx_fmt=other)

  

### 测试用例 4 快照的使用

    
    
      test('input-snapshot', () => {  
        const wrapper = mount(input, {  
          propsData: {  
            type: 'text',  
            value: 'admin'  
          }  
        })  
        expect(wrapper.vm.$el).toMatchSnapshot()  
      })  
    复制代码  
    

我们要把挂载的 dom
对象拍一个快照，我们第一次调用这个方法的时候，他会把这个内容挂载到一个特殊的文本文件中，当我们再次生产测试的时候，会将我们刚刚存储的文件进行对比，如果发生了变化就会出现测试失败的情况

#### 文件结构

  

![图片](https://mmbiz.qpic.cn/mmbiz/5Hv4NiajunszxmN3LR8IyyGm339MkiaVYlSLwEIpaJ5CWpbn0aZbdv7xic4E1x2wHrgKs2KVS5sbmWTMazA0qmkiaA/640?wx_fmt=other)

  

### 修改快照的`propsData`

    
    
    propsData: {  
        type: 'password',  
        value: 'admin'  
    }  
    复制代码  
    

#### 测试结果

  

![图片](https://mmbiz.qpic.cn/mmbiz/5Hv4NiajunszxmN3LR8IyyGm339MkiaVYlgib2ftYz9evvrSlVkKVKl8MQEpzxqVQI2EfYfB0hWgYic7AZtGriaXjug/640?wx_fmt=other)

  

  

![图片](https://mmbiz.qpic.cn/mmbiz/5Hv4NiajunszxmN3LR8IyyGm339MkiaVYlZ3Ae10H82aSnNMlWD9lLK9O9DxkAic2G023PrZy4iaFICBo8SN9Ng7ug/640?wx_fmt=other)

  

### 删除快照结果，重新生成

    
    
    yarn test -u  
    复制代码  
    

## 总结

到这里我们的单元测试简单版 Demo 就这样完结了，单元测试对我们进行组件化的开发还是非常重要的，配合 stroyBooks，我们可以做到很多

  

预览时标签不可点

[阅读原文](javascript:;)

