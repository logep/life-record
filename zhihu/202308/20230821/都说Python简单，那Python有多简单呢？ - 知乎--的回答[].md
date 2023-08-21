----------------------------------------
## 本答案原始链接: https://www.zhihu.com/question/614920801/answer/
### 大概简介: 
----------------------------------------
整数类型

C：short、int、long、long long、unsigned short、unsigned int、unsigned long、unsigned long long、int8t、int16t、int32t、int64t、size_t

Java：short、Short、int、Integer、long、Long、BigInteger

Python：int




类型转换

Java：Integer.parseInt()

C# ：int.Parse()

JS：parseInt()

Python：int()




数据结构

C++：#include <vector>、#include <map> 、 #include <string>

Java：import java.util.List; 、import java.util.Map;

Python：list、dict、str




访问级别

Java：public 、private、protected、default

Python：_




运算

C： 1/3+2/3=0

Python： 1/3+2/3=1.0




安装

C：先去官网下载…… C 语言竟然没有官网？我要下的明明是 C 为啥却要下载 gcc ？不是去 gcc 官网下而是 MinGW ？MinGW 早就停止维护了，所以应该换成 MinGW-w64 ？MinGW-w64 官网最新的 gcc 版本怎么才 v8.1.0 ？ucrt 和 msvcrt 该选哪个？（晕）

Java：下载 jdk 、jre ，环境变量自己配，开发环境自己整，包管理工具自己装

Python：官网下载安装、自动添加环境变量、自带交互环境、自带包管理工具




Hello, World!

C++：

#include <iostream>：引入输入输出流头文件。

using namespace std; ：使用标准库命名空间。

int main()：入口函数，程序从这里开始执行。

cout：标准输出流对象。

<< "Hello, World!"：输出运算符，将 Hello, World 输出到标准输出流。

<< endl;：插入一个换行符并刷新输出缓冲区。

return 0;：表示程序正常结束。




Java：

public class Main：定义了一个公共类，类名必须与文件名相同。

public static void main(String[] args)：公有的、静态的、无返回值的主函数，参数为字符串数组。

System.out.println("Hello, World!");：标准库中 System 类的静态成员 out 的方法 println 用于输出 Hello, World!




Python：

print("Hello, World!") ：输出 Hello, World!




报错

C：手持两把锟斤拷，口中疾呼烫烫烫

Python：这行代码索引值超出范围了




胶水

C：我运行速度快

Fortran：我科学计算强

Rust：我内存安全性高

Python：你们写的库我直接 import

Python 的代码大多数是写给人看的，很多语言里面有很多代码是写给编译器看的。

比如你写 a=1 ，对于 Python 解释器来说，它知道你想要个数，大概是整数，但是如果后面需要变成浮点数，Python 的运行时会帮你搞。甚至，溢出风险他都帮你搞定了。

但是对于 C++ 的编译器来说 a=1 比较含糊，你需要你写清楚，是整数吗？长整数还是短整数？多少位的？就变成了 `int a = 1;` 其实那个 int 是写给编译器看的，绝大多数场景，用户不在乎是整数还是小数，32位还是64位。你写了就要负责，如果后面溢出了，那么就会 Bug，编译器不负责，运行时更不负责。

所以 Python 的简单就在于此，代码中大部分是给人看的，自然也就显得简单了。很多计算机相关的只是都被隐藏起来了。

另外，Python 有非常原生的 C API，可以跟 C 库互动，而巨大多数编译语言都可以跟 C 互动，那么 Python 几乎可以跟任何语言的二进制互动。这样一来，Python 就享受了很多高性能库：比如 numpy ( openblas etc), tensorfow ..