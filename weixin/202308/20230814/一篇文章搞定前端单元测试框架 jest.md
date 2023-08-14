----------------------------------------
----------------------------------------
#  一篇文章搞定前端单元测试框架 jest

转载  [ 前端传 ](javascript:void\(0\);)

**前端传** ![]()

微信号 gh_15928b5b199d

功能介绍 前端记事

____

_2022-05-01 04:58_ _发表于 上海_

收录于合集 #单元测试 6个

前言

虽然有很多前端团队压根现在甚至未来都不太可能使用单元测试，包括我自己的团队，原因无非是耽误时间，开发任务本身就比较重等等理由。

但是我觉得一味的图快，永远是饮鸩止渴，陷入恶性循环，`项目快 --> 代码烂 --> 修改和加功能花费更多的时间和精力 --> 来不及做优化必须更快 -->
项目快 --> 代码烂 -->` ... 无限循环。

这就是做单元测试我认为最重要的原因就是，重构代码时，确认功能没有问题，不怕人员流动，功能迁移，最主要的是跟`产品撕b`，测试用例就是最好的证据😁。

业务项目用不到的话，如果你写库，不写单测，可能用的同学都会有所顾忌，所以会写单测是对高级以上前端必备的技能。

## 单元测试框架基本原理

例如如下的一个测试用例，感受一下基本的样子长啥，我们后面会把其中用到的方法自己实现一个简单版本

    
    
    test('测试字符串中是否包含 ll'), () => {  
        expect(findStr('hello')).toMatch('ll')  
    })  
      
    function findStr(str){  
        return `${str} world`  
    }  
    复制代码  
    

我们可以简单的实现一下上面测试用例用到的方法，`test、expect、toMatch`，这样就算掌握了基本的测试框架原理

### test

    
    
    function test(desc, fn){  
        try{  
            fn();  
            console.log(`✅  通过测试用例`)  
        }catch{  
            console.log(`❌ 没有通过测试用例`)  
        }  
    }  
    复制代码  
    

### expect、toMatch

    
    
    function expect(ret){  
        return {  
            toMatch(expRet){  
                if(typeof ret === 'string'){ throw Error('') }  
                if(!ret.includes(expRet)){ throw Error('') }  
            }  
        }  
    }  
    复制代码  
    

## jest 基本配置

必备工具：

    
    
    $ npm i -D jest babel-jest ts-jest @types/jest  
    复制代码  
    

参考配置 jest.config.js，测试文件均放在 tests 目录中：下面的 testRegex 表示匹配的 tests 文件夹下的以 test 或者
spec 结尾的 jsx 或者 tsx 文件

    
    
    module.exports = {  
      transform: {  
        '^.+\\.tsx?$': 'ts-jest',  
      },  
      testRegex: '(/tests/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',  
      moduleFileExtensions: ['tsx', 'ts', 'js', 'jsx', 'json', 'node'],  
    };  
    复制代码  
    

最后在 package.json 的 scripts 中加入

    
    
    {  
        test: "jest"  
          
          
    }  
    复制代码  
    

## 匹配器

匹配器（Matchers）是 Jest 中非常重要的一个概念，它可以提供很多种方式来让你去验证你所测试的返回值。举个例子就明白什么是匹配器了。

这里的匹配器扫一眼即可，大概知道有那么回事，用的时候查你想要的匹配器就行，不用刻意去记忆。

相等匹配，这是我们最常用的匹配规则

    
    
    test('two plus two is four', () => {  
      expect(2 + 2).toBe(4);  
    });  
    复制代码  
    

在这段代码中 `expact(2 + 2)`
将返回我们期望的结果，通常情况下我们只需要调用`expect`就可以，括号中的可以是一个具有返回值的函数，也可以是表达式。后面的`toBe` 就是一匹配器。

下面列举一些常用的匹配器：

### 普通匹配器

  * toBe：object.is 相当于 ===

    
    
    test('测试加法 3 + 7', () => {  
        
      expect(10).toBe(10)  
    })  
    复制代码  
    

  * toEqual：内容相等，匹配内容，不匹配引用

    
    
    test('toEqual 匹配器', () => {  
        
      const a = { one: 1 }  
      expect(a).toEqual({ one: 1 })  
    })  
    复制代码  
    

### 与真假有关的匹配器

  * 真假

  * toBeNull：只匹配 Null

    
    
    test('toBeNull 匹配器', () => {  
        
      const a = null  
      expect(a).toBeNull()  
    })  
    复制代码  
    

toBeUndefined：只匹配 undefined

    
    
    test('toBeUndefined 匹配器', () => {  
      const a = undefined  
      expect(a).toBeUndefined()  
    })  
    复制代码  
    

toBeDefined：与 toBeUndefined 相反，这里匹配 null 是通过的

    
    
    test('toBeDefined 匹配器', () => {  
      const a = null  
      expect(a).toBeDefined()  
    })  
    复制代码  
    

toBeTruthy：匹配任何 if 语句为 true

    
    
    test('toBeTruthy 匹配器', () => {  
      const a = 1  
      expect(a).toBeTruthy()  
    })  
    复制代码  
    

toBeFalsy：匹配任何 if 语句为 false

    
    
    test('toBeFalsy 匹配器', () => {  
      const a = 0  
      expect(a).toBeFalsy()  
    })  
    复制代码  
    

not：取反

    
    
    test('not 匹配器', () => {  
      const a = 1  
        
      expect(a).not.toBeFalsy()  
      expect(a).toBeTruthy()  
    })  
    复制代码  
    

### 数字

toBeGreaterThan：大于

    
    
    test('toBeGreaterThan', () => {  
      const count = 10  
      expect(count).toBeGreaterThan(9)  
    })  
    复制代码  
    

toBeLessThan：小于

    
    
    test('toBeLessThan', () => {  
      const count = 10  
      expect(count).toBeLessThan(12)  
    })  
    复制代码  
    

toBeGreaterThanOrEqual：大于等于

    
    
    test('toBeGreaterThanOrEqual', () => {  
      const count = 10  
      expect(count).toBeGreaterThanOrEqual(10)   
    })  
    复制代码  
    

toBeLessThanOrEqual：小于等于

    
    
    test('toBeLessThanOrEqual', () => {  
      const count = 10  
      expect(count).toBeLessThanOrEqual(10)   
    })  
    复制代码  
    

toBeCloseTo：计算浮点数

    
    
    test('toBeCloseTo', () => {  
      const firstNumber = 0.1  
      const secondNumber = 0.2  
      expect(firstNumber + secondNumber).toBeCloseTo(0.3)   
    })  
    复制代码  
    

### 字符串

toMatch：匹配某个特定项字符串，支持正则

    
    
    test('toMatch', () => {  
      const str = 'http://www.zsh.com'  
      expect(str).toMatch('zsh')  
      expect(str).toMatch(/zsh/)  
    })  
    复制代码  
    

### 数组

toContain：匹配是否包含某个特定项

    
    
    test('toContain', () => {  
      const arr = ['z', 's', 'h']  
      const data = new Set(arr)  
      expect(data).toContain('z')  
    })  
    复制代码  
    

### 异常

toThrow

    
    
    const throwNewErrorFunc = () => {  
      throw new Error('this is a new error')  
    }  
    test('toThrow', () => {  
        
      expect(throwNewErrorFunc).toThrow('this is a new error')  
    })  
    复制代码  
    

## 测试异步代码

假设请求函数如下

    
    
    const fethUserInfo = fetch('http://xxxx')  
    复制代码  
    

测试异步代码有好几种方式，我就推荐一种我认为比较常用的方式

    
    
    test('the data is peanut butter', async () => {  
        await expect(fethUserInfo()).resolves.toBe('peanut butter');  
    });  
      
      
    test('the fetch fails with an error', async () => {  
        await expect(fethUserInfo()).rejects.toMatch('error');  
    });  
    复制代码  
    

## 作用域

jest 提供一个 describle 函数来分离各个 test 测试用例，就是把相关的代码放到一类分组中，这么简单，看个例子就懂了。

    
    
    describe('Test xxFunction', () => {  
      test('Test default return zero', () => {  
          expect(xxFunction()).toBe(0)  
      })  
      
        
    })  
      
      
    describe('Test xxFunction2', () => {  
      test('Pass 3 can return 9', () => {  
          expect(xxFunction2(3)).toBe(9)  
      })  
      
        
    })  
    复制代码  
    

## 钩子函数

jest 中有 4 个钩子函数

  * beforeAll：所有测试之前执行

  * afterAll：所有测试执行完之后

  * beforeEach：每个测试实例之前执行

  * afterEach：每个测试实例完成之后执行

我们举例来说明为什么需要他们。

在 `index.js` 中写入一些待测试方法

    
    
    export default class compute {  
      constructor() {  
        this.number = 0  
      }  
      addOne() {  
        this.number += 1  
      }  
      addTwo() {  
        this.number += 2  
      }  
      minusOne() {  
        this.number -= 1  
      }  
      minusTwo() {  
        this.number -= 2  
      }  
    }  
    复制代码  
    

假如我们要 在 `index.test.js` 中写测试实例

    
    
    import compute from './index'  
      
    const Compute = new compute()  
      
    test('测试 addOne', () => {  
      Compute.addOne()  
      expect(Compute.number).toBe(1)  
    })  
      
    test('测试 minusOne', () => {  
      Compute.minusOne()  
      expect(Compute.number).toBe(0)  
    })  
    复制代码  
    

  * 这里两个测试实例相互之间影响了，共用了一个 computet 实例，我们可以将`const Compute = new compute()`放在 beforEach 里面就可以解决了，每次测试实例之前先重新 new compute

  * 同理，你想在每个 test 测试完毕后单独运行什么可以放入到`afterEach`中

我们接着看一下什么情况下使用`beforeAll`，假如我们测试数据库数据是否保存正确

  * 我们在测试最开始, 也就是 `beforeAll`生命周期里， 新增 1 条数据到数据库里

  * 测试完后，也就是 `afterAll`周期里， 删除之前添加的数据

  * 最后利用全局作用域 `afterAll` 确认数据库是否还原成初始状态

这里说到

    
    
    const userDB = [  
      { id: 1, name: '小明' },  
      { id: 2, name: '小花' },  
    ]  
      
      
    const insertTestData = data => {  
        
    }  
      
      
    const deleteTestData = id => {  
        
    }  
      
      
    afterAll(() => {  
      console.log(userDB)  
    })  
      
    describe('Test about user data', () => {  
      
      beforeAll(() => {  
          insertTestData({ id: 99, name: 'CS' })  
      })  
      afterAll(() => {  
          deleteTestData(99)  
      })  
      
    })  
    复制代码  
    

## jest 里的 Mock

###  **为什么要使用 Mock 函数？**

在项目中，经常会碰见 A 模块掉 B
模块的方法。并且，在单元测试中，我们可能并不需要关心内部调用的方法的执行过程和结果，只想知道它是否被正确调用即可，甚至会指定该函数的返回值。此时，就需要
mock 函数了。

Mock 函数提供的以下三种特性，在我们写测试代码时十分有用：

  * 捕获函数调用情况

  * 设置函数返回值

  * 改变函数的内部实现

### jest.fn()

`jest.fn()`是创建 Mock 函数最常用的方式。

    
    
    test('测试jest.fn()', () => {  
      let mockFn = jest.fn();  
      let result = mockFn(1);  
      
        
      expect(mockFn).toBeCalled();  
        
      expect(mockFn).toBeCalledTimes(1);  
        
      expect(mockFn).toHaveBeenCalledWith(1);  
    })  
    复制代码  
    

`jest.fn()`所创建的 Mock 函数还可以 **设置返回值** ， **定义内部实现** 或 **返回`Promise`对象**。

    
    
    test('测试jest.fn()返回固定值', () => {  
      let mockFn = jest.fn().mockReturnValue('default');  
        
      expect(mockFn()).toBe('default');  
    })  
      
    test('测试jest.fn()内部实现', () => {  
      let mockFn = jest.fn((num1, num2) => {  
        return num1 * num2;  
      })  
        
      expect(mockFn(10, 10)).toBe(100);  
    })  
      
    test('测试jest.fn()返回Promise', async () => {  
      let mockFn = jest.fn().mockResolvedValue('default');  
      let result = await mockFn();  
        
      expect(result).toBe('default');  
        
      expect(Object.prototype.toString.call(mockFn())).toBe("[object Promise]");  
    })  
    复制代码  
    

### 2\. jest.mock()

`fetch.js`文件夹中封装的请求方法可能我们在其他模块被调用的时候，并不需要进行实际的请求（请求方法已经通过单测或需要该方法返回非真实数据）。此时，使用`jest.mock(）`去
mock 整个模块是十分有必要的。

下面我们在`src/fetch.js`的同级目录下创建一个`src/events.js`。

    
    
    import fetch from './fetch';  
      
    export default {  
      async getPostList() {  
        return fetch.fetchPostsList(data => {  
          console.log('fetchPostsList be called!');  
            
        });  
      }  
    }  
    复制代码  
    
    
    
    import events from '../src/events';  
    import fetch from '../src/fetch';  
      
    jest.mock('../src/fetch.js');  
      
    test('mock 整个 fetch.js模块', async () => {  
      expect.assertions(2);  
      await events.getPostList();  
      expect(fetch.fetchPostsList).toHaveBeenCalled();  
      expect(fetch.fetchPostsList).toHaveBeenCalledTimes(1);  
    });  
    复制代码  
    

在测试代码中我们使用了`jest.mock('../src/fetch.js')`去 mock
整个`fetch.js`模块。如果注释掉这行代码，执行测试脚本时会出现以下报错信息

  

  

  

从这个报错中，我们可以总结出一个重要的结论：

在 jest 中如果想捕获函数的调用情况，则该函数必须被 mock 或者 spy！

  

###  **3\. jest.spyOn()**

`jest.spyOn()`方法同样创建一个 mock 函数，但是该 mock 函数不仅能够捕获函数的调用情况，还可以正常的执行被 spy
的函数。实际上，`jest.spyOn()`是`jest.fn()`的语法糖，它创建了一个和被 spy 的函数具有相同内部代码的 mock 函数

  

上图是之前`jest.mock()`的示例代码中的正确执行结果的截图，从 shell 脚本中可以看到`console.log('fetchPostsList
be called!');`这行代码并没有在 shell 中被打印，这是因为通过`jest.mock()`后，模块内的方法是不会被 jest
所实际执行的。这时我们就需要使用`jest.spyOn()`。

    
    
    // functions.test.js  
      
    import events from '../src/events';  
    import fetch from '../src/fetch';  
      
    test('使用jest.spyOn()监控fetch.fetchPostsList被正常调用', async() => {  
      expect.assertions(2);  
      const spyFn = jest.spyOn(fetch, 'fetchPostsList');  
      await events.getPostList();  
      expect(spyFn).toHaveBeenCalled();  
      expect(spyFn).toHaveBeenCalledTimes(1);  
    })  
    复制代码  
    

执行`npm run test`后，可以看到 shell
中的打印信息，说明通过`jest.spyOn()`，`fetchPostsList`被正常的执行了。

## 快照

快照就是对你对比的数据会存一份副本，啥意思呢，我们举个例子：

这是`index.js`

    
    
    export const data2 = () => {  
      return {  
        name: 'zhangsan',  
        age: 26,  
        time: new Date()  
      }  
    }  
    复制代码  
    

在 `index.test.js` 中写入一些测试实例

    
    
    import { data2 } from "./index"  
      
    it('测试快照 data2', () => {  
      expect(data2()).toMatchSnapshot({  
        name: 'zhangsan',  
        age: 26,  
        time: expect.any(Date)   
      })  
    })  
    复制代码  
    

  * `toMatchSnapshot`会将参数将快照进行匹配

  * `expect.any(Date)` 用于匹配一个时间类型

执行`npm run
test`会生成一个`__snapshots__`文件夹，里面是生成的快照，当你修改一下测试代码时，会提示你，快照不匹配。如果你确定你需要修改，按 u
键，即可更新快照。这用于 UI 组件的测试非常有用。

## React 的 BDD 单测

接下来我们看下 react 代码如何进行测试，用一个很小的例子来说明。

案例中引入了 enzyme。 _Enzyme_ 来自 airbnb 公司，是一个用于 React 的 JavaScript 测试工具，方便你判断、操纵和历遍
React Components 输出。

我们达成的目的是检测：

  * 用户进入首页，看到两个按钮，分别是 counter1 和 counter2

  * 点击 counter1，就能看到两个按钮的文字部分分别是 "counter1" 和 "counter2"

react 代码如下

    
    
    import React from 'react';  
    function Counter(){  
        return (  
            <ul>  
                <li>  
                    <button id='counter1' className='button1'>counter1</button>  
                </li>  
                <li>  
                    <button id='counter2' className='button2'>counter2</button>  
                </li>  
            </ul>  
        )  
    }  
    复制代码  
    

单测的文件：

    
    
    import Counter from xx;  
    import { mount } from 'enzyme';  
      
    describle('测试APP',() => {  
        test('用户进入首页，看到两个按钮，分别是counter1和counter2,并且按钮文字也是counter1和counter2',()=>{  
            const wrapper = mount(<Counter />);  
            const button = wrapper.find('button');  
            except(button).toHaveLength(2);  
            except(button.at(0).text()).toBe('counter1');  
            except(button.at(1).text()).toBe('counter2');  
        })  
    })  
    复制代码

  

预览时标签不可点

收录于合集 #单元测试

6个

上一篇小程序单元测试下一篇JavaScript 单元测试框架

[阅读原文](javascript:;)

