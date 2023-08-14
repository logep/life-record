----------------------------------------
----------------------------------------
#  Flutter 单元测试

转载-  [ 前端传 ](javascript:void\(0\);)

**前端传** ![]()

微信号 gh_15928b5b199d

功能介绍 前端记事

____

_2022-05-01 04:58_ _发表于 上海_

收录于合集 #单元测试 6个

当 App 中的功能越来越多的时候，我们想要去手动测试一个功能的时候，会变的非常麻烦，这个时候就需要单元测试来帮助我们测试想要测的功能。

Flutter 中提供了三种测试：

  * unit test ：单元测试

  * widget test ：Widget 测试

  * integration test ：集成测试

这里记录下前两种。

当创建一个新的 Flutter 工程之后，工程目录下就会有一个 test 目录，该目录用来存放测试文件：

![图片](https://mmbiz.qpic.cn/mmbiz/5Hv4NiajunszxmN3LR8IyyGm339MkiaVYl574AN2s513UlU5BxZ1pJCgprZcjfhcdswdsic5Y6GiaLcSSYzV2pBHGA/640?wx_fmt=other&wxfrom=5&wx_lazy=1&wx_co=1)

## 单元测试

单元测试用来验证代码中的某一个方法或者某一块逻辑是否正确。写单元测试的步骤如下：

  1. 添加 test 或者 flutter_test 依赖到工程中

  2. 在 **test** 目录下创建一个测试文件，如： `counter_test.dart`

  3. 创建一个待测试的文件，如： `counter.dart`

  4. 在 `counter_test.dart` 文件中编写 `test`

  5. 如果有多个测试的需要在一起测试的情况下，可以使用 `group`

  6. 运行测试类

#### 1\. 添加依赖

在工程的 `pubspec.yaml` 中添加 `flutter_test` 的依赖：

    
    
    dev_dependencies:  
      flutter_test:  
        sdk: flutter  
    复制代码  
    

#### 2\. 创建测试文件

这里，需要创建两个文件，一个是测试类文件 `counter_test.dart`
还有一个是被测试文件`counter.dart`。当这两个文件创建完之后，目录结构如下：

    
    
    .  
    ├── lib  
    │   ├── counter.dart  
    ├── test  
    │   ├── counter_test.dart  
    复制代码  
    

#### 3\. 编写被测试类

`Counter` 类中的方法如下：

    
    
    class Counter {  
      int value = 0;  
      
      void increment() => value++;  
      
      void decrement() => value--;  
    }  
    复制代码  
    

#### 4\. 编写测试类

在 `counter_test.dart` 文件中编写单元测试，里面会使用到一些 `flutter_test` 包提供的顶层方法，如 `test(...)`
方法是用来定义一个单元测试的，还有就是 `expect(...)` 方法用来验证结果的。

`test(...)` 方法里面有两个必需的参数，第一个参数表示这个单元测试的描述信息，第二个是一个 Function，用来编写测试内容的。

`expect(...)` 方法中也有两个必需的参数，第一个是需要验证的变量，第二个是与该变量匹配的值。

`counter_test.dart` 中的代码如下：

    
    
    import 'package:flutter_test/flutter_test.dart';  
    import 'package:flutter_testing/counter.dart';  
      
    /// 也可以使用命令来运行 flutter test test/counter_test.dart  
      
    void main() {  
      // 单一的测试  
      test("测试 value 递增", () {  
        final counter = Counter();  
        counter.increment();  
          
        // 验证 counter.value 的是是否为 1  
        expect(counter.value, 1);  
      });  
    复制代码  
    

#### 5\. 使用 group 来执行多个测试

    
    
    import 'package:flutter_test/flutter_test.dart';  
    import 'package:flutter_testing/counter.dart';  
      
    void main() {  
      // 使用 group 合并多个测试。用来测试多个有关联的测试  
      group("Counter", () {  
        test("value should start at 0", () {  
          expect(Counter().value, 0);  
        });  
      
        test("value should be increment", () {  
          final counter = Counter();  
      
          counter.increment();  
      
          expect(counter.value, 1);  
        });  
      
        test("value should be decremented", () {  
          final counter = Counter();  
      
          counter.decrement();  
      
          expect(counter.value, -1);  
        });  
      });  
    }  
    复制代码  
    

#### 6\. 执行单元测试

如果使用的是 Android Studio 或者 Idea 开发的话，那么直接点击侧边的运行按钮来执行或者调试：

![图片](https://mmbiz.qpic.cn/mmbiz/5Hv4NiajunszxmN3LR8IyyGm339MkiaVYlJILviahm8yIAQGib2zCKDzt2pAdesnlXvAUqqDcQm9LAJae6tgOQGFKw/640?wx_fmt=other)

如果使用的是 VSCode ，则可以使用命令来执行测试：

    
    
    flutter test test/counter_test.dart  
    复制代码  
    

### 网络接口测试

同样的，在 **test** 目录下新建一个文件，如：`http_test.dart`，在这个文件中去请求一个接口，然后验证返回的结果：

    
    
    import 'package:flutter_test/flutter_test.dart';  
    import 'package:http/http.dart' as http;  
      
    void main() {  
      test("测试网络请求", () async {  
        // 假如这个请求需要一个 token  
        final token = "54321";  
        final response = await http.get(  
          "https://api.myjson.com/bins/18mjgh",  
          headers: {"token": token},  
        );  
        if (response.statusCode == 200) {  
          // 验证请求 header 中的 token  
          expect(response.request.headers['token'], token);  
          print(response.request.headers['token']);  
          print(response.body);  
          // 解析返回的 json  
          Person person = parsePersonJson(response.body);  
          // 验证 person 对象不为空  
          expect(person, isNotNull);  
          // 检测 person 对象中的属性值是否都正确  
          expect(person.name, "Lili");  
          expect(person.age, 20);  
          expect(person.country, 'China');  
        }  
      });  
    }  
    复制代码  
    

### 使用 Mockito 来模拟对象依赖

首先，添加 mockito 的依赖到 pubspec.yaml 中：

    
    
    dev_dependencies:  
      mockito: 4.1.1  
    复制代码  
    

然后新建一个被测试的类：

    
    
    class A {  
      int calculate(B b) {  
        int randomNum = b.getRandomNum();  
        return randomNum * 2;  
      }  
    }  
      
    class B {  
      int getRandomNum() {  
        return Random().nextInt(100);  
      }  
    }  
    复制代码  
    

上述代码中，类 A 的 calculate 方法是依赖类 B 的。这时测试 `calculate` 方法的时候可以使用 mockito 来模拟一个类 B

  

接着新建一个测试类：

    
    
    import 'package:flutter_test/flutter_test.dart';  
    import 'package:flutter_testing/mock_d.dart';  
    import 'package:mockito/mockito.dart';  
      
    /// 使用 mockito 模拟一个类 B  
    class MockB extends Mock implements B {}  
      
    void main() {  
      test("测试使用 mockito 来 mock 依赖", () {  
        var b = MockB();  
        var a = A();  
        // 当调用 b.getRandomNum() 方法的时候返回 10  
        when(b.getRandomNum()).thenReturn(10);  
        expect(a.calculate(b), 20);  
      
        // 检查 b.getRandomNum(); 是否调用过  
        verify(b.getRandomNum());  
      });  
    }  
    复制代码  
    

官方文档上还有一个这样的例子，是使用 mockito 来模拟接口返回的数据，要测试的方法如下：

    
    
    Future<Post> fetchPost(http.Client client) async {  
      final response =  
          await client.get("https://jsonplaceholder.typicode.com/posts/1");  
      if (response.statusCode == 200) {  
        return Post.fromJson(json.decode(response.body));  
      } else {  
        throw Exception('Failed to load post');  
      }  
    }  
    复制代码  
    

上述方法中就是请求一个接口，请求成功则解析返回，否则抛出异常。测试该方法的代码如下：

    
    
    import 'package:flutter_test/flutter_test.dart';  
    import 'package:flutter_testing/post_service.dart';  
    import 'package:http/http.dart' as http;  
    import 'package:mockito/mockito.dart';  
      
    /// 使用 mock 模拟一个 http.Client 对象  
    class MockClient extends Mock implements http.Client {}  
      
    void main() {  
      group("fetchPost", () {  
        test("接口返回数据正确", () async {  
          final client = MockClient();  
      
          // 当调用指定的接口的时候返回指定的数据  
          when(client.get("https://jsonplaceholder.typicode.com/posts/1"))  
              .thenAnswer((_) async {  
            return http.Response(  
                '{"title": "test title", "body": "test body"}', 200);  
          });  
          var post = await fetchPost(client);  
          expect(post.title, "test title");  
        });  
      
        test("接口返回数据错误，抛出异常", () {  
          final client = MockClient();  
      
          // 当调用这个接口的时候返回 Not Found  
          when(client.get("https://jsonplaceholder.typicode.com/posts/1"))  
              .thenAnswer((_) async {  
            return http.Response('Not Found', 404);  
          });  
          expect(fetchPost(client), throwsException);  
        });  
      });  
    }  
    复制代码  
    

## Widget 测试

Widget 测试和单元测试一个很明显的区别就是 Widget 测试使用的顶层函数是 `testWidgets`，该函数的写法如下：

    
    
    testWidgets('这是一个 Widget 测试', (WidgetTester tester){  
      
    });  
    复制代码  
    

我们可以使用 `WidgetTester` 来 build 需要测试的 widget，或者执行重绘 (相当于调用了 `setState(...)` 方法。

还有就是可以使用另外一个顶层函数 `find` 来定位到需要操作的 widget，如：

    
    
    find.text('title'); // 通过 text 来定位 widget  
    find.byIcon(Icons.add); // 通过 Icon 来定位 widget  
    find.byWidget(myWidget); // 通过 widget 的引用来定位 widget  
    find.byKey(Key('value')); // 通过 key 来定位 widget  
    复制代码  
    

### 测试页面中是否包含某一个 widget

待测试的页面 MyWidget

    
    
    class MyWidget extends StatelessWidget {  
      final String title;  
      final String message;  
      
      const MyWidget({Key key, @required this.title, @required this.message})  
          : super(key: key);  
      
      @override  
      Widget build(BuildContext context) {  
        return MaterialApp(  
          title: 'Flutter Demo',  
          home: Scaffold(  
            appBar: AppBar(  
              title: Text(title),  
            ),  
            body: Center(  
              child: Text(message),  
            ),  
          ),  
        );  
      }  
    }  
    复制代码  
    

上述页面中，有两个 Text 分别为 text(title) 和 text(message)，下面编写测试类来验证页面中是否包含着两个 Text：

    
    
      testWidgets("MyWidget has a title and message", (WidgetTester tester) async {  
        // 加载 MyWidget  
        await tester.pumpWidget(MyWidget(  
          title: "T",  
          message: "M",  
        ));  
      
        final titleFinder = find.text('T');  
        final messageFinder = find.text('M');  
          
        // 验证页面中是否含有上述的两个 Text  
        expect(titleFinder, findsOneWidget);  
        expect(messageFinder, findsOneWidget);  
      });  
    复制代码  
    

注意：待测试的 widget 需要用 MaterialApp() 包裹；

  

上述代码中的 findsOneWidget 表示在页面中发现了一个与 titleFinder 对应的 Widget，与之对应的还有 findsNothing
表示页面中没有要寻找的 Widget

### 测试页面中和用户交互的部分

上一个实例中，我们使用 WidgetTester 来找页面中的 widget，WidgetTester
还能帮助我们模拟输入，点击，滑动操作，下面，还是官方的例子：

待测试的页面如下：

    
    
    import 'package:flutter/material.dart';  
      
    /// Date: 2019-09-29 14:44  
    /// Author: Liusilong  
    /// Description:  
    //  
      
    class TodoList extends StatefulWidget {  
      @override  
      _TodoListState createState() => _TodoListState();  
    }  
      
    class _TodoListState extends State<TodoList> {  
      static const _appTitle = 'Todo List';  
      final todos = <String>[];  
      final controller = TextEditingController();  
      @override  
      Widget build(BuildContext context) {  
        return MaterialApp(  
          title: _appTitle,  
          home: Scaffold(  
            appBar: AppBar(  
              title: Text(_appTitle),  
            ),  
            body: Column(  
              children: <Widget>[  
                TextField(  
                  controller: controller,  
                ),  
                Expanded(  
                  child: ListView.builder(  
                      itemCount: todos.length,  
                      itemBuilder: (BuildContext context, int index) {  
                        final todo = todos[index];  
                        return Dismissible(  
                          key: Key('$todo$index'),  
                          onDismissed: (direction) => todos.removeAt(index),  
                          child: ListTile(title: Text(todo)),  
                          background: Container(color: Colors.red),  
                        );  
                      }),  
                ),  
              ],  
            ),  
            floatingActionButton: FloatingActionButton(  
              onPressed: () {  
                setState(() {  
                  if (controller.text.isNotEmpty) {  
                    todos.add(controller.text);  
                    controller.clear();  
                  }  
                });  
              },  
              child: Icon(Icons.add),  
            ),  
          ),  
        );  
      }  
    }  
      
    复制代码  
    

该页面的运行效果如下：

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg
width='1px' height='1px' viewBox='0 0 1 1' version='1.1'
xmlns='http://www.w3.org/2000/svg'
xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg
stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-
opacity='0'%3E%3Cg transform='translate\(-249.000000, -126.000000\)'
fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1'
height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

测试类如下：

    
    
      testWidgets('Add and remove a todo', (WidgetTester tester) async {  
        // Build the widget  
        await tester.pumpWidget(TodoList());  
        // 往输入框中输入 hi  
        await tester.enterText(find.byType(TextField), 'hi');  
        // 点击 button 来触发事件  
        await tester.tap(find.byType(FloatingActionButton));  
        // 让 widget 重绘  
        await tester.pump();  
        // 检测 text 是否添加到 List 中  
        expect(find.text('hi'), findsOneWidget);  
      
        // 测试滑动  
        await tester.drag(find.byType(Dismissible), Offset(500.0, 0.0));  
      
        // 页面会一直刷新，直到最后一帧绘制完成  
        await tester.pumpAndSettle();  
      
        // 验证页面中是否还有 hi 这个 item  
        expect(find.text('hi'), findsNothing);  
      
      });  
    复制代码  
    

其实我感觉只要业务逻辑和 UI 分离开来，单元测试写起来还是比较方便的。

最近项目开始逐步转向使用 Provider 来进行状态的管理。建议看看 Flutter Architecture - My Provider
Implementation Guide 这个系列的文章，讲的很好。

大致结构如下：

![图片](https://mmbiz.qpic.cn/mmbiz/5Hv4NiajunszxmN3LR8IyyGm339MkiaVYl7ObtiaNR280K34fUdKiblCxKxIxn2nquSPGDhXyyIicDdp78EQGGQfhHQ/640?wx_fmt=other)

  

预览时标签不可点

收录于合集 #单元测试

6个

上一篇Vue单元测试探索下一篇Vue 组件的单元测试

[阅读原文](javascript:;)

