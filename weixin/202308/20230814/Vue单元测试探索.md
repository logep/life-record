----------------------------------------
----------------------------------------
#  Vue单元测试探索

转载-  [ 前端传 ](javascript:void\(0\);)

**前端传** ![]()

微信号 gh_15928b5b199d

功能介绍 前端记事

____

_2022-05-01 04:58_ _发表于 上海_

收录于合集 #单元测试 6个

## 为什么要单元测试？

#### 项目的现状

当前我在公司里负责的项目，可以分为两类：

  * 一类是相似度很高的项目，比如管理后台，这类项目的页面通过各种 **公共组件** 搭建而成。公共组件的复用性很高，所以质量尤为重要。如果开发人员在修改了公共组件之后留下了 bug，那么将会直接降低了整个项目的质量。我希望让程序去测试这些公共组件，保证每一个公共组件是可用的。

  * 另一类是公司的核心项目，这些项目特点是 **维护周期长** ，并且会不断加入新的功能。在项目版本迭代的过程中，当一些原来通过了测试的旧功能发生了 bug，一般只能到了测试阶段才能被测试人员发现。我希望由程序去保证部分核心功能的正常运作，当核心功能发生了 bug 能快速的察觉到，而不是到了测试阶段才发现。

为了解决上面的问题，我尝试引入 **单元测试** 。

#### 单元测试的作用

  * 降低 bug 发生几率，快速定位 bug，减少重复的手工测试。

  * 提高代码质量，为项目带来更高的代码可维护性。

  * 方便项目的交接工作，测试脚本就是最好的需求描述。

接下来谈谈如何进行单元测试。

## 搭建测试框架

### 测试工具一览

#### Mocha

![图片](https://mmbiz.qpic.cn/mmbiz/5Hv4NiajunszxmN3LR8IyyGm339MkiaVYlSzJXSlMJz0MjaLZsGPSTCmwOIzz96wxiaAZoT4oiaYbSxaWMPb5SqN3A/640?wx_fmt=other)

Mocha（发音 "摩卡"）诞生于 2011 年，是现在最流行的 JavaScript 测试框架之一，在浏览器和 Node 环境都可以使用。

#### Karma

![图片](https://mmbiz.qpic.cn/mmbiz/5Hv4NiajunszxmN3LR8IyyGm339MkiaVYlvVPI2WSlb52XeDMTYCMeiaAibDrEHiaN0gspNFcWjJThiaMH4eDKoVqhAA/640?wx_fmt=other)

Karma 是由 Google 团队开发的一个测试工具, 它不是一个测试框架, 只是一个跑测试的驱动. 你可以通过 karma 的配置文件集成你喜欢的框架,
断言库和浏览器.

#### Vue Test Utils

Vue 的官方的单元测试框架，它提供了一系列非常方便的工具，使我们可以更轻松地为 Vue 应用编写单元测试。主流的 JavaScript
测试运行器有很多，但 Vue Test Utils 都能够支持。它是测试运行器无关的。

#### Chai 断言库

![图片](https://mmbiz.qpic.cn/mmbiz/5Hv4NiajunszxmN3LR8IyyGm339MkiaVYlEqQUX6icXOTxQdgaScbxSfKHMVeJfD1oLmNic75gLkhPUhAuJ3PJo6HQ/640?wx_fmt=other)

Chai 是一个断言库，用于 Node 和浏览器，它可以与任何 JavaScript 测试框架相结合

### 搭建方法：

本文选择的测试框架由 Karma + Mocha + Chai + Vue Test Utils 搭配，自己手动配置过程比较繁琐，在这里强烈推荐大家使用
vue-cli，vue-cli 有现成的模板可以生成项目，执行 vue init webpack [项目名]，'Pick a test
runner'时选择'Karma + Mocha' 。vue-cli 会自动生成 Karma + Mocha + Chai 的配置，我们只需要额外安装
Vue Test Utils，执行 npm install @vue/test-utils。

![图片](https://mmbiz.qpic.cn/mmbiz/5Hv4NiajunszxmN3LR8IyyGm339MkiaVYlicia6JTh8WRATpvialicicdansG2mzV2oTII8BfoQZQ6jFvrM1832yzceCg/640?wx_fmt=other)

如果想自己动手配置的同学，可以参考这篇文章。

配置完成以后，下图是项目目录结构：

![图片](https://mmbiz.qpic.cn/mmbiz/5Hv4NiajunszxmN3LR8IyyGm339MkiaVYlzibjhu5qUCOVmWUchzXHMT4qy7sQA5oZKaDEaRmlqc4wmkYwsAZlUibQ/640?wx_fmt=other)

test 文件夹下是 unit 文件夹，里面放的是单元测试相关的文件。

![图片](https://mmbiz.qpic.cn/mmbiz/5Hv4NiajunszxmN3LR8IyyGm339MkiaVYlMzF5dicYTGoiaiaLWgZ6qKbEc2PEkwU9excqKHp7MUejR13oJd9PND02w/640?wx_fmt=other)

 **specs** 里存放的是测试脚本，这部分是由开发人员编写的。  
 **coverage** 文件夹里存放的是测试报告，打开里面的 index.html 可以直观地看到测试的代码覆盖率。  
 **Karma.conf.js** 是 karma 的配置文件。

## 怎样写单元测试

### 举个例子

被测试的组件 **HelloWorld.vue** （path：E:\study\demo\src\components）

代码如下：

    
    
     <template>  
      <div>  
        <h1>Welcome to Your Vue.js App</h1>  
      </div>  
    </template>  
    复制代码  
    

测试脚本 **HelloWorld.spec.js** （path：E:\study\demo\test\unit\specs）

代码如下：

    
    
    import HelloWorld from '@/components/HelloWorld';  
    import { mount, createLocalVue, shallowMount } from '@vue/test-utils'  
      
    describe('HelloWorld.vue', () => {  
      it('should render correct contents', () => {  
        const wrapper = shallowMount(HelloWorld);  
        let content = wrapper.vm.$el.querySelector('.hello h1').textContent;  
        expect(content).to.equal('Welcome to Your Vue.js App');  
      });  
    });  
    复制代码  
    

#### 1\. 测试脚本的写法

 **describe** 是 "测试套件"（test
suite），表示一组相关的测试。它是一个函数，第一个参数是测试套件的名称（"加法函数的测试"），第二个参数是一个实际执行的函数。

 **it** 是 "测试用例"（test
case），表示一个单独的测试，是测试的最小单位。它也是一个函数，第一个参数是测试用例的名称，第二个参数是一个实际执行的函数。

#### 2\. 断言库的用法

上面的测试脚本里面，有一句断言：

    
    
    expect(content).to.equal('Welcome to Your Vue.js App');  
    复制代码  
    

所谓 "断言"，就是判断源码的实际执行结果与预期结果是否一致，如果不一致就抛出一个错误。上面这句断言的意思是，变量 content 应等于'Welcome
to Your Vue.js App'。

所有的测试用例（it 块）都应该含有一句或多句的断言。它是编写测试用例的关键。

#### 3\. 查看测试结果

最后运行一下 npm run unit，来看结果：

![图片](https://mmbiz.qpic.cn/mmbiz/5Hv4NiajunszxmN3LR8IyyGm339MkiaVYlib6mslb5OGVvqYT0jsgJD6F65g2fWXP9E4DZx1ic9ArceulaWbdwcNJA/640?wx_fmt=other)

结果显示测试通过。

打开 coverage 下的 index.vue 查看代码覆盖率：

![图片](https://mmbiz.qpic.cn/mmbiz/5Hv4NiajunszxmN3LR8IyyGm339MkiaVYltmFdrDR7Qiaic6GREy5Ddp0W5FfB72WJFcxqT1wZNwgnkt5UQBS3ibtRg/640?wx_fmt=other)

因为这是一个刚新建的项目，代码非常简单，所以覆盖率是
100%。代码覆盖率是一个客观的数据，不能完全真实表示项目的测试情况，但是具有不错的参考价值。在多人开发的团队中，覆盖率可以作为一个硬性的标准。

这就是一个简单的单元测试编写过程，是不是很简单呢？大家都动手自己试试吧。

### 友情提示

##### 1\. 用 createLocalVue 安装插件

我们在给实际项目写单元测试的时候，项目代码会比上面的 demo 组件复杂很多。如果你要测试的单个组件里使用了 vue-router 或者 Vuex
的话，就要使用 createLocalVue。比如，有这样一段代码：

    
    
    data() {  
     return {  
         brandId: this.$route.query.id,  
     }  
    }  
    复制代码  
    

$route 对象需要用 createLocalVue 注入 router 才能使用，否则执行测试脚本会出错。使用 createLocalVue
解决这个问题，具体代码：

    
    
    import { shallowMount, createLocalVue } from '@vue/test-utils'  
    import VueRouter from 'vue-router'  
      
    const localVue = createLocalVue()  
    localVue.use(VueRouter)  
    const router = new VueRouter()  
      
    shallowMount(Component, {  
      localVue,  
      router  
    })  
    复制代码  
    

Vuex 也是同理，关于 createLocalVue 详细用法就不做赘述了，大家可以去翻阅官方文档。

##### 2.nextTick 怎么办

如果你需要在自己的测试文件中使用 nextTick，注意任何在其内部被抛出的错误可能都不会被测试运行器捕获，因为其内部使用了
Promise。关于这个问题有两个建议：要么你可以在测试的一开始将 Vue 的全局错误处理器设置为 done 回调，要么你可以在调用 nextTick
时不带参数让其作为一个 Promise 返回：

    
    
    // 这不会被捕获  
    it('will time out', (done) => {  
      Vue.nextTick(() => {  
        expect(true).toBe(false)  
        done()  
      })  
    })  
      
    // 接下来的两项测试都会如预期工作  
    it('will catch the error using done', (done) => {  
      Vue.config.errorHandler = done  
      Vue.nextTick(() => {  
        expect(true).toBe(false)  
        done()  
      })  
    })  
      
    it('will catch the error using a promise', () => {  
      return Vue.nextTick()  
        .then(function () {  
          expect(true).toBe(false)  
        })  
    })  
    复制代码  
    

在下面的项目实战中，有使用到 nextTick 的例子，大家可以当做参考。

##### 3\. 修改默认测试浏览器

测试在配置文件 karma.conf 里，browsers 默认是'PhantomJS'.

    
    
     module.exports = function karmaConfig (config) {  
      config.set({  
        // browsers: ['PhantomJS'],  
        browsers: ['Chrome'],  
    复制代码  
    

但我在使用过程中发现 PhantomJS 环境的 warning 和 error 提示和平时在浏览器 chrome 看到的提示不太一样，有点难懂，如图：

Chrome：

![图片](https://mmbiz.qpic.cn/mmbiz/5Hv4NiajunszxmN3LR8IyyGm339MkiaVYlRYkarLe8D7Qa3vj21NsAqeQ4eG5xJfpiavQs14RFBJJ0sNIyNUxoDqA/640?wx_fmt=other)

PhantomJS：

![图片](https://mmbiz.qpic.cn/mmbiz/5Hv4NiajunszxmN3LR8IyyGm339MkiaVYlFPBic8kViaT3ODaHfI9ic3YQeOaqQfTmnV5PQ4NTibNyO4vNqjzhmibTibIA/640?wx_fmt=other)

browsers 设置为'Chrome'，得到的报错提示和真实 Chrome 浏览器上一致，并且可以使用
console.log()，调试起来和真实开发的体验一样。唯一缺点是每次执行 npm run unit 都会弹出一个 Chrome
浏览器，PhantomJS 则不会，推荐大家调试测试脚本时候使用 Chrome，等脚本都跑通了不需要调试的时候可以换回 PhantomJS。

##### 4\. 加上 --auto-watch

默认下 auto-watch 是关闭的，每次修改了测试脚本，或者修改了项目代码之后都需要手动执行一次命令才能启动测试，非常麻烦。我们可以加上 --auto-
watch，这样在开发的过程中，如果某个功能没有通过测试用例，开发人员可以立刻发现并修复。

    
    
     "unit": "cross-env BABEL_ENV=test karma start test/unit/karma.conf.js --auto-watch",  
    复制代码  
    

## 项目实战

##### 实例 1

场景：页面上有一个 textarea 输入框和提交按钮，点击按钮发送请求。要求点击提交后前端先校验一下内容是否符合 json
格式，如果不符合则提示不能提交。

测试的目标：校验程序

测试用例：通过条件覆盖，输入数字，字符串，错误的 json 字符串，'null'，正确的 json
字符串去验证所有的情况是否正常执行，期望只有最后一种情况才是返回结果才是通过的，其他都是不通过。

    
    
    // form-setting.vue测试校验功能  
    describe('form-setting.vue测试校验功能', () => {  
    	const wrapper = shallowMount(formSetting, {  
    		localVue  
    	});  
      
    	let vm = wrapper.vm;  
      
    	it('test form填入数字是否会不通过', () => {  
    		vm.appType = 'ios'; // 选择系统ios  
    		vm.ios.schemeInfo = 1; // 输入数字  
    		expect(vm.isValid()).to.equal(false);  
    	});  
      
    	it('test form填入字符串格式是否会不通过', () => {  
    		vm.appType = 'ios';  
    		vm.ios.schemeInfo = '1'; // 输入字符串  
    		expect(vm.isValid()).to.equal(false);  
    	});  
      
    	it('test form填入错误json格式是否会不通过', () => {  
    		vm.appType = 'ios';  
    		vm.ios.schemeInfo = '{a:{a:}}'; // 输入非法的类似json格式的字符串  
    		expect(vm.isValid()).to.equal(false);  
    	});  
      
    	it('test form填入空对象是否会不通过', () => {  
    		vm.appType = 'ios';  
    		vm.ios.schemeInfo = 'null'; // 输入null对象字符串  
    		expect(vm.isValid()).to.equal(false);  
    	});  
      
    	it('test form填入正确JSON格式是否会通过', () => {  
    		vm.appType = 'ios';  
    		vm.ios.schemeInfo = '{"a": 111}'; // 输入正确的json字符串  
    		expect(vm.isValid()).to.equal(true);  
    	});  
    });  
    复制代码  
    

##### 实例 2

场景：团队开发了一个校验插件，其作用是校验输入框是否满足相应规则，若不满足在输入框下会出现一个提示错误的 dom 节点。

测试用例：通过列举所有的输入操作，然后判断是否存在类名为. error 的错误提示节点。

在完成输入操作后，如果内容不通过校验，页面会生成错误提示的 dom 节点。这个过程是异步的，所以用到了 **nextTick** 。具体的用法是

    
    
    return Vue.nextTick().then(() => {  
        ...断言  
    }  
    复制代码  
    

关于这块详细的解释，Vue Test Utils 有相关篇幅

    
    
    import { mount, createLocalVue } from '@vue/test-utils'  
    import ValidateDemo from '@/components/validate-demo'  
    import validate from '@/directive/validate/1.0/validate'  
    import Vue from 'Vue'  
    const localVue = createLocalVue() // 创建一个Vue实例  
    localVue.use(validate) // 挂载校验插件  
    describe('测试validate-demo.vue', () => {  
      it('没发生输入操作，[不显示error]', () => {  
        const wrapper = mount(ValidateDemo, {  
          localVue  
        })  
        return Vue.nextTick().then(() => {  
          expect(wrapper.find('.error').exists()).to.equal(false)  
        })  
      })  
      it('聚焦输入框然后失去焦点，[显示error]', () => {  
        const wrapper = mount(ValidateDemo, {  
          localVue  
        })  
        let input = wrapper.find('input')  
        input.trigger('focus') // 聚焦  
        input.trigger('blur') // 失去焦点  
      
        return Vue.nextTick().then(() => {  
          expect(wrapper.find('.error').exists()).to.equal(true)  
        })  
      })  
      
      it('发生输入操作，然后清空，[显示error]', () => {  
        const wrapper = mount(ValidateDemo, {  
          localVue  
        })  
        let vm = wrapper.vm  
        let input = wrapper.find('input')  
        input.trigger('focus')  
        vm.name = '不为空'  
        vm.name = '' // 清空  
        input.trigger('blur')  
        return Vue.nextTick().then(() => {  
          expect(wrapper.find('.error').exists()).to.equal(true)  
        })  
      })  
      
      it('输入内容后，[不显示error]', () => {  
        const wrapper = mount(ValidateDemo, {  
          localVue  
        })  
        let vm = wrapper.vm  
        vm.name = '不为空' // 输入内容  
        return Vue.nextTick().then(() => {  
          expect(wrapper.find('.error').exists()).to.equal(false)  
        })  
      })  
    })  
      
    复制代码  
    

## 单元测试的局限性

单元测试有许多优点，但不代表它就一定适合每个项目，在我看来它会有以下局限性：

##### 1\. 额外的时间花费

即使你愿意花费开发的几分之一的时间去写单元测试，但是一旦功能有变更，就意味着测试逻辑也需要调整。对于一些经常变更的功能来说，这会导致很大的单元测试维护量。所以我们要权衡好当中的利弊，可以考虑只针对稳定的功能（比如一些公用组件）和核心流程编写单元测试。

##### 2\. 并非全部代码都能单元测试

如果项目里充斥着颗粒度低，方法间互相耦合的代码，你会发现无法进行单元测试。因为单元测试旨在从代码粒度上实现对应用质量的把握。面对这样的情况，要么重构已有代码，要么放弃单元测试寻求其他测试方法，比如人工测试，e2e
测试。

虽然这算是单元测试的一个缺点，但我认为同时也是 **优点** ，习惯编写单元测试可以促使工程师提高代码的颗粒度，思维更加缜密。

##### 3\. 无法保证一整个流程的运作

前端是一个非常复杂的测试环境，因为每个浏览器都有差异，需要的数据又依赖于后端。单元测试只能对功能每一个单元进行测试，对于一些依赖 api 的数据一般只能
mock，无法真正的模拟用户实际的使用场景。对于这种情况，建议采用其他测试方法，比如人工测试、e2e 测试。

## 总结

通过这次对单元测试的探索，我觉得做单元测试最大的阻力是—— **时间** 。

手工测试最大的优势在于：当一个功能代码写好以后，只需要手动刷新浏览器去实际操作一下，便能判断程序是否正确。如果为此去编写单元测试则会花费额外的开发时间。

但人不是机器，无论多么简单的事都有可能出错。我们为系统加入了新功能的之后，一般不会去手动测试以前的旧功能。因为这耗费时间而又无趣，并且我们总会认为自己写的代码是不会影响旧功能的。

然而我们可以换个角度去想，如果在开发旧功能的时候写好了相应的单元测试，那么每次进入测试阶段之前，就可以用测试脚本把旧功能都跑一遍。这样既节省了测试旧功能的时间，自己也可以心安理得：无论怎么样，我都能确保我写的代码是通过测试的。

  

预览时标签不可点

收录于合集 #单元测试

6个

下一篇Flutter 单元测试

[阅读原文](javascript:;)

