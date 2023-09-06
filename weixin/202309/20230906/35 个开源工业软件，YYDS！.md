----------------------------------------
----------------------------------------
#  35 个开源工业软件，YYDS！

[ Github掘金计划 ](javascript:void\(0\);)

**Github掘金计划** ![]()

微信号 GithubStar

功能介绍 用心发掘 Github 和 Gitee 上优质的开源项目。

____

_2022-09-13 01:33_ _发表于 湖北_

收录于合集

以下文章来源于OSC开源社区 ，作者OSCHINA

![](images/0)
**OSC开源社区** .

开源中国，为开发者服务

工业软件支撑了整个工业体系，但市场份额却小得可怜，因此不受重视，在开源领域也不例外。作为面向工业品研发、设计、加工的基础软件，设计软件算是工业软件中发展较为繁荣的一支。

针对面向设计环节的不同，通常会把工业设计软件分为 CAD、CAE、EDA、CAO、CAM、CFD、TCAD、CAPP
等多个类别。广义上讲，这些利用计算机解决工程问题的软件，都可以纳入 CAE（Computer Aided Engineering，计算机辅助工程）的范畴。

本文介绍了 20 个开源的 CAE 软件，涉及
CAD、几何运算、前处理、网格创建、CFD（计算流体动力学）、FEA（有限元分析）、数学及数据分析、后处理等方面。

#  **一、CAD、几何运算、前处理**

###  （一）SALOME

SALOME 根据 LGPL
许可分发，为数值模拟的前处理和后处理提供了一个通用平台，可对各个领域的物理过程进行建模和仿真，以及处理多物理场和参数研究等大型数值模拟。

它包括参数化 CAD 建模器、网格生成和编辑模块、计算管理器以及数据分析和处理工具，还可以为特定应用（例如土木工程、管道或旋转机器中的快速动力学）创建工具。

官方地址：https://www.oschina.net/p/salome

### （二）FreeCAD

![图片](https://mmbiz.qpic.cn/mmbiz_png/dkwuWwLoRKicmCeb6C0hQ9CgRlTVNePuKxzG9LaR6CY2f4iaib5Uj7cXpufgVsNjkNJrzC6Jic3hd0NKURqVACDQyA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)图片

FreeCAD 是一个通用的参数化 3D CAD 建模器，配备了 FEA 工具、实验 CFD、 CAM/CNC 工作台、机器人模拟模块等，基于 LGPL
许可对外发布。

与大部分 CAD 建模器一样，它具备许多 2D 组件，以便绘制平面形状或创建生产图纸。此外，FreeCAD 大量使用科学计算开源库，其中包括功能强大的
CAD 内核 Open Cascade Technology （OCCT）、兼容 Open Inventor 的 3D 图形开发工具包 Coin3D、知名
UI 框架 Qt，以及脚本语言 Python。此外，FreeCAD 本身也可以被其他程序用作库。

FreeCAD 使用 LGPL 许可，支持在 Linux、Unix、Windows 和 Mac OSX 系统上运行，在所有平台上具有相同的外观和功能。

官方地址：https://www.oschina.net/p/freecad

### （三）Blender

![图片](https://mmbiz.qpic.cn/mmbiz_png/dkwuWwLoRKicmCeb6C0hQ9CgRlTVNePuKLNxMia1g8A0P5db8JIyZMYfZrW9g56HWjFEeFZJ01odiaMfQbrFe0icYQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)图片

Blender 是一款使用 GPL 许可分发的 3D 创作套件。它支持整个 3D 流程 ——
建模、绑定、动画、模拟、渲染、合成和运动跟踪，甚至视频编辑和游戏创建。使用 Blender 的 Python 脚本 API
可以定制应用程序并编写专门的工具。

与其它 3D 建模工具相比，Blender 对内存和驱动的要求更低。它可以在 Linux、macOS 以及 Windows
系统下运行，为给用户提供一致的体验，其界面使用 OpenGL。

官方地址：https://www.oschina.net/p/blender

### （四）MeshLab

MeshLab 基于 C++ 网格处理库 VCG 开发，提供了一套用于编辑、清理、修复、检查、渲染、纹理和转换网格数据的工具，用于处理和编辑非结构化的大型
3D 三角网格。

MeshLab 采用 GPL 发布，是一个可移植和可扩展的系统，支持 Windows、macOS 和 Linux 等主流操作系统。

官方地址：https://www.oschina.net/p/meshlab

#  **二、网格创建**

###  （一）cfMesh

cfmesh 网格功能非常强大，覆盖了生成流体网格所有要求，基于 GPL 许可分发。与传统的非结构化网格生成器不同的是，cfMesh
使用由内而外的方法来生成网格。它的优点在于不需要输入高质量的几何形状，且可以容忍较小的间隙、裂缝和突起。此外，cfMesh
自动化程度很高，可以适应复杂的几何形状，且可以在并行处理器上运行。

需要注意的是，尽管首席开发者都是同一个人，但 cfMesh 与 CF-MESH+ 是两个不同的软件，CF-MESH+ 是 Creative Fields
Holding 提供的商业产品。二者之间的主要区别在于边界层生成的质量、网格优化算法和自动单元大小调整。此外，CF-MESH+ 带有一个
GUI，允许快速设置和操作补丁。

官方地址：https://www.oschina.net/p/cfmesh

### （二）enGrid

![图片](https://mmbiz.qpic.cn/mmbiz_png/dkwuWwLoRKicmCeb6C0hQ9CgRlTVNePuKjneRGocFBv5FaFudJn6RcccXWK3g9SfR88VljcsKcPwRyOGibPOc4Ng/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)图片

enGrid 是一款专门针对 CFD（计算流体动力学） 的网格生成软件，使用 GPL 对外发布。它使用 Netgen
库生成四面体网格以及棱柱体边界网格，并具有基于 Qt 的 GUI，目标是称为开源 CFD 社区的有用补充。

目前，enGrid 具备 Blender、Gmsh 和 STL 文件的接口，并陆续新增了支持 OpenFOAM、SU2 本地导出的功能。

官方地址：https://www.oschina.net/p/engrid

### （三）Gmsh

Gmsh 是一个自动的三维有限元网格生成器，内置 CAD 引擎和后处理器，采用 GPL 对外发布。在网格质量方面，Gmsh 丝毫不亚于商业网格引擎。

Gmsh 围绕四个模块构建：几何、网格、求解器和后处理。模块输入可以使用 UI 界面以交互方式完成，或使用 Gmsh 自己的脚本语言（.geo 文件）在
ASCII 文本文件中完成，或者使用 C++、C、Python 或 Julia API。

官方地址：https://www.oschina.net/p/gmsh

### （四）Triangle

![图片](https://mmbiz.qpic.cn/mmbiz_png/dkwuWwLoRKicmCeb6C0hQ9CgRlTVNePuKPs6AvWRFjB7osraXYzFFVwOJdLHuzv7bxl78PTA3hqq7dpmSWUJhOg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)图片

Triangle 是使用点集 Delaunay 三角剖分技术（Delaunay triangulation
technique）构建艺术图像的工具，输入图像可将其转换为由三角形块组成的抽象图像。

尽管 Triangle 是免费提供的，但它的版权归作者所有，未经许可不得出售或包含在商业产品中。

官方地址：https://www.oschina.net/p/triangle

### （五）TetGen

TetGen 是一个 Delaunay（三角剖分）
四面体网格生成工具，提供各种功能来生成适用于数值方法（例如有限元或有限体积方法）的高质量和自适应四面体网格。它为三维点集生成 Delaunay
四面体、Voronoi 图和凸包（convex hull），为具有分段线性边界的三维域生成约束 Delaunay 四面体和高质量四面体网格。

TetGen 用 C++ 编写，它本质上是固定精度浮点数的任意精度浮点运算的快速实现，因此可以编译成从命令行调用的独立程序或与其他程序链接的库，支持
Unix、Linux、macOS、Windows 等主流操作系统。

下图分别展示了 TetGen 生成的三维多面体（左）、边界一致的 Delaunay 四面体网格（中）及其对偶 - Voronoi 分区图（右）。

![图片](https://mmbiz.qpic.cn/mmbiz_png/dkwuWwLoRKicmCeb6C0hQ9CgRlTVNePuKH8vsCZ4HoESP5w4tXcj8zUAupCibk3EFB1TE3UGLCgJQvEfz6ibD4nRg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)图片

对于一组 3D 点，TetGen 可计算其精确的 Delaunay 四面体化及其对偶 Voronoi 图。下图显示了在立方体中采样的一组 164
个点（左），Delaunay 四面体及其对偶 Voronoi 图（中），Voronoi 面被随机着色以进行可视化，有界 Voronoi 细胞（右），内部
Voronoi 单元格被突出显示。

![图片](https://mmbiz.qpic.cn/mmbiz_png/dkwuWwLoRKicmCeb6C0hQ9CgRlTVNePuKLBB2wjibwbSZOxXYvpiawsF05t2l3wfnErCQWV5YLjMibbG7gFvawj3SQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)图片

官方地址：https://www.oschina.net/p/tetgen

### （六）NETGEN

![图片](https://mmbiz.qpic.cn/mmbiz_png/dkwuWwLoRKicmCeb6C0hQ9CgRlTVNePuK9ekS10ibwG3uWJNibaAibEichMfK13Br04jPSMNSjWr1xzmVJgV4N3UsVg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)图片

NETGEN 是一个三维四面体网格生成器，接受基于构造实体几何法 (CSG) 或边界表示法 (BRep) 的 STL
文件格式的实体模型输入。它与几何内核连接，能够处理 IGES 和 STEP 文件。

NETGEN 一般搭配 NGSolve 库组合使用（相关教程一般会写成 NETGEN/NGSolve），NGSolve
是一个有限元库，包含所有标准元素几何图形的任意阶有限元，可以链接到 Netgen 使用。

NETGEN/NGSolve
包含用于网格优化和分层网格细化的模块，可完成有限元模拟的完整工作流程，包括从几何建模、网格生成、数值模拟到可视化的无缝集成，NETGEN/NGSolve
都基于 LGPL 分发。

Netgen 6.x 支持通过 Python 接口编写脚本，适用于 Unix、Linux、Windows 和 macOS。

官方地址：https://www.oschina.net/p/netgen

#  **三、CFD**

###  （一）OpenFOAM

OpenFOAM 是一个计算流体动力学 (CFD) 软件包。它支持多面体网格，如 CD-adapco 公司推出的 CCM+
生成的多面体网格，因而可以处理复杂的几何外形，支持大规模并行计算。

OpenFOAM
功能多样，可以模拟汽车空气动力学中的湍流、建筑物中的火灾和灭火（包括燃烧、化学反应、热传递、液体喷雾和薄膜），以及固体动力学和电磁学的任何场景。它包含了各种工具，可用于在复杂几何形状（例如车辆）内和周围进行网格划分，以及数据处理和可视化等。

OpenFOAM 基于 GPL 分发，有多个版本。org 版本是由非盈利组织 The OpenFOAM Foundation 维护的，com 版本由 ESI
公司维护。

官方地址：https://www.oschina.net/p/OpenFOAM

### （二）SU2

![图片](https://mmbiz.qpic.cn/mmbiz_png/dkwuWwLoRKicmCeb6C0hQ9CgRlTVNePuKGuTQzAIWaNXQDqG1zzLib4ykJm9lWSyNYiaXJiaXknkUGQxlXF1GrdHVA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)图片

SU2 是一套用 C++ / Python 编写、用于偏微分方程 (PDE) 的数值求解和 PDE 约束优化的工具集。它的设计考虑了计算流体动力学
(CFD) 和空气动力学形状优化，并且可扩展，因此可以处理其它控制方程组，如流体动力学、弹性动力学、电动力学、化学反应流等。

SU2 由斯坦福大学航空航天系航空航天设计实验室（ADL）和社区成员开发，采用 LGPL 许可发布。

官方地址：https://www.oschina.net/p/su2

#  **四、FEA**

###  （一）Calculix

![图片](https://mmbiz.qpic.cn/mmbiz_png/dkwuWwLoRKicmCeb6C0hQ9CgRlTVNePuKwHnIuib7icFanTHuNk4X3EdfCG99ibhbKib1ib2ODOcHTxqHCCJcUkQfkYA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)图片

CalculiX 是一个使用有限元法的分析软件，可以构建、计算和后处理有限元模型。前处理器和后处理器是使用 openGL API 的交互式 3D 工具，支持
Nastran、Abaqus、Ansys、ISAAC 和 OpenFOAM 等软件的求解器。

求解器能够进行线性和非线性计算，可提供静态、动态和热解决方案。因为求解器使用 Abaqus 输入格式，所以也可以使用商业的前处理器。（Abaqus 是由
HKS 开发的商业软件， CalculiX 已经获得 HKS 许可。）

CalculiX 基于 GPL 分发，其处理器和求解器可单独使用，并提供外部 CAD 接口，可在 Linux 、IRIX、Unix、Windows 上运行。

官方地址：https://www.oschina.net/p/calculi

### （二）Code_Aster

Code_Aster 是基于有限元理论的结构力学和热力耦合计算软件，用于机器、压力容器和土木工程结构的 3D 热分析和机械分析。

除了具备固体力学 FEM 软件的标准功能之外，Code_Aster 还覆盖了多个具体领域：疲劳、损伤、断裂、接触、地质材料、多孔介质、多物理场耦合等。

Code_Aster 由法国电力集团（EDF）历时 30 余年开发，经过海量工业应用验证，对标 Abaqus、Ansys 等主流力学商业软件。

官方地址：https://www.oschina.net/p/code_aster

#  **五、数学及数据分析**

###  （一）Scilab

Scilab 基于 GPL 发布，以矩阵作为主要的数据类型，同时拥有丰富的绘图功能，包含大约 1700
个用于科学和工程计算的数学函数，可用于信号处理、统计分析、图像增强、流体动力学模拟、数值优化和建模、显式和隐式动力系统的模拟以及（如果安装了相应的工具箱）符号操作。

Scilab 还包括一个名为 Xcos 的免费软件包，用于对显式和隐式动态系统进行建模和仿真，包括连续和离散子系统。Xcos 是与 MathWorks 中的
Simulink 等效的开源软件。

Scilab 包含一个源代码转换器，用于协助将代码从 MATLAB 转换为 Scilab。

官方地址：https://www.oschina.net/p/scilab

### （二）GNU Octave

![图片](https://mmbiz.qpic.cn/mmbiz_png/dkwuWwLoRKicmCeb6C0hQ9CgRlTVNePuKtdXtl57lEA0Sza0mZbJYV8uYZugkSgGwyWV0B8L1cYon5VBibahLL6A/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)图片

GNU Octave 基于 GPL 分发，内置 2D/3D 绘图和可视化工具，与许多 Matlab 脚本兼容，Octave 解释器可以在 GUI
模式下运行，作为控制台，或作为 shell 脚本的一部分调用。

官方地址：https://www.oschina.net/p/octave

### （三）OpenTURNS

![图片](https://mmbiz.qpic.cn/mmbiz_png/dkwuWwLoRKicmCeb6C0hQ9CgRlTVNePuKmKn21uIQLU9RNicIax8VxYrjpiaK3g4hgZExO5qXibt0qOOickcGTUfAYw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)图片

OpenTURNS 是一个 C++ 和 Python
库，内置专用于处理不确定性数据的模型和算法。该库的主要目标是提供处理工业应用研究中的不确定性所需的所有功能。官方表示，该软件的目标用户是所有希望在迄今为止的确定性研究中引入概率维度的工程师。

官方地址：https://www.oschina.net/p/openturns

#  **六、后处理**

###  （一）ParaView

ParaView 是一个多平台的数据分析和可视化软件。用户可以使用定性和定量技术快速构建可视化来分析数据，支持 3D 交互、编程批处理。

ParaView 最初是为了使用分布式内存计算资源分析超大型数据集而开发的，可部署在 Windows、macOS、Linux、SGI、IBM Blue
Gene、Cray 以及各种 Unix 工作站、集群和超级计算机上。在后台，ParaView 使用 Visualization Toolkit（VTK）
作为数据处理和渲染引擎，并拥有 Qt 编写的 UI。

官方地址：https://www.oschina.net/p/paraview

### （二）Gnuplot

![图片](https://mmbiz.qpic.cn/mmbiz_png/dkwuWwLoRKicmCeb6C0hQ9CgRlTVNePuKm8Opyznyn8TNts0bTDPBp59G9tHR9OOUJjMrNvaUgu99m1DoY2KHSA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)图片

Gnuplot 是一个命令行驱动的绘图程序，适用于 Linux、macOS、Windows、VMS
等多个系统。源代码受版权保护，但可免费分发（即不必为此付费）。它最初是为了让科学家和学生能够交互式地可视化数学函数和数据而创建的，现在已经发展到支持许多非交互式的用途，如
Web 脚本。它还被 Octave 等第三方应用程序用作绘图引擎。

Gnuplot 大部分采用 GPL 分发，且有字母 “Gnu”，但官方表示它与 GNU 项目或 FSF 没有什么关系。

官方地址：https://www.oschina.net/p/gnuplot

### （三）VisIt

VisIt 采用 BSD 许可分发，是用于对极其庞大的数据集进行并行、通用后处理的基础架构。目标用例包括数据探索、比较分析、可视化调试、定量分析和图形演示。

它的基本设计是客户端 - 服务器模型，其中服务器是并行化的。该工具已经实现了许多大型数据集的可视化，包括 2160 亿个数据点的结构化网格、10
亿个粒子模拟，以及具有数亿到数十亿元素的曲线、非结构化和 AMR 网格。

除了能够处理万亿级的数据集，VisIt 也能很好地处理千字节范围内的小型数据集，可运行在 Windows、macOS、Linux 以及 Unix 系统中。

官方地址：https://www.oschina.net/p/visit

实际上，开源的工业设计软件远不止以上这些，留到下次再讲。

参考链接：https://mp.weixin.qq.com/s/BL8RE2xaF9Hv5aAlbLnOJQ

#  **七、PLC 及 DCS**

###  （一）openPLC

OpenPLC 是一个功能齐全的标准化开源
PLC，无论是软件还是硬件，其诞生之初的重点是为自动化和研究提供低成本的工业解决方案，现广泛用于工业网络安全研究的框架。

openPLC 由三部分组成：运行时、编辑器和 HMI 构建器 。运行时负责执行 PLC 程序，编辑器用于创建 PLC 程序。使用 HMI 构建器 ——
ScadaBR，可以创建漂亮的基于 Web 的动画，以呈现运行后的流程状态。ScadaBR 通过 Modbus/TCP 与 OpenPLC Runtime
通信。

OpenPLC 项目根据 IEC 61131-3 标准创建，该标准定义了 PLC 的基本软件架构和编程语言，主要用于工业和家庭自动化、物联网和
SCADA（监控和数据采集）研究。

链接：https://www.oschina.net/p/openplc

![图片](https://mmbiz.qpic.cn/mmbiz_png/dkwuWwLoRK8PSIxLrcicDbdia1MxVVVaJ4VufA4nXmulh0kE2F2tw1ItonRx624tXcAWiaQ5kpL75pibWBYKOc38Gg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)图片

### （二）Beremiz

Beremiz 是一个用于机械自动化的 PLC 集成开发环境（IDE），符合 IEC61131-3 编程语言标准，可将任何处理器变成 PLC。Beremiz
还包含用于创建 HMI 并将 PLC 程序连接到现有的监控、数据库或现场总线的工具。

Beremiz 由两部分组成：

集成开发环境（IDE），Beremiz.py。它运行在用户的计算机上，使用 C 代码作为中间语言，用于编写、编译、调试 PLC 程序和控制 PLC 运行时。

引用 python 运行时实现，Beremiz_service.py，它在目标平台上运行，与 I/O 通信并执行 PLC 程序。

运行时的实现在不同平台上可能不同。例如使用 Cortex-M 的 PLC 很可能具有基于 C 的运行时。而 Beremiz 项目默认包含 Python
运行时的参考实现，可以在 GNU/Linux、Windows 和 Mac OS X 上轻松运行。

链接：https://www.oschina.net/p/beremiz

### （三）ProviewR

ProviewR 是一个过程控制系统，采用 GPL 许可，包含顺序控制、调整、数据采集、通信、监控等常用功能，支持图形 PLC 编辑器和高级编程语言（如
C、C++、Java 或 Fortran）。

ProviewR 是一个软 PLC。使用标准硬件和软 PLC 的最大优势在于，系统规模、属性和性能主要受主机操作系统及其硬件的限制，对 I/O、PID
回路、PLC 程序、计数器的数量没有限制。PLC 回路的最小循环时间小于 1 毫秒。

ProviewR 是一个分布式系统，可以由多台计算机通过网络连接组成，一个典型的 ProviewR
系统由一个过程控制系统和一个或多个操作站组成，每个操作站可配置成多个控制系统的 HMI 系统。ProviewR
可以通过以太网（ip）和串行机制与其他计算机进行通信，支持多种不同的协议，例如通过以太网的 UDP 或 TCP 套接字和串行链路上的 Siemens
3964R。

Proview 中最常用的 I/O 系统是 Profibus/DP，还支持 Profinet、Ethernet Powerlink、Modbus TCP 和
RTU、PSS9000、1-wire、一些 USB I/O 卡等 I/O 系统。

ProviewR
能够以面向对象的方式工作，可以使用简单的功能块和简单的信号以传统方式进行编程，它支持创建复杂对象和相关函数对象，同时支持面向对象的概念，例如继承、方法和聚合。

链接：https://www.oschina.net/p/proviewr

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/dkwuWwLoRK8PSIxLrcicDbdia1MxVVVaJ4GYytcW6KJu2uHvu6s6VLldJ9iaMej7Ppp3G5f0MBaSWBmoRPzyibp5GA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)图片

### （四）Tango Controls

Tango Controls 是一个用于构建高性能分布式控制系统的软件工具包，包含用于监控和数据采集 (SCADA ) 和 DCS 的开源解决方案。

Tango Controls 是一个面向对象的分布式控制系统，它的设计基于称为设备的分布式对象的概念，在 Tango
中，所有对象都代表着设备，对象（设备）可以在同一台计算机上，也可以分布在网络上。

TANGO 对象（设备）之间的通信可以是同步的、异步的或事件驱动，对象模型支持方法和属性。TANGO 提供了一个
API，它隐藏了网络访问的所有细节，并提供了对对象的浏览、发现和安全处理等功能。

Tango Controls 系统库在 LGPL 许可下发布，图形工具和部分设备服务器在 GPL 许可下发布。

链接：https://www.oschina.net/p/tango-controls

### （五）Apache PLC4X

Apache PLC4X 是一个工业物联网通用协议适配器，一个用于集成 PLC 的库。

PLC 大多采用大量不兼容的协议进行通信，因此和外界（IT / 互联网）的交互变得很困难，PLC4X 项目致力于提供一组统一的 API，通过这些 API
实现能与大多数 PLC 进行通信的驱动程序（通过各种 PLC 的原生通信协议）。

链接：https://www.oschina.net/p/apache-plc4x

# **八、****MES**

### （一）章鱼师兄

章鱼师兄（原名黑科）是一个国产的生产制造执行系统，基于 springBoot 开发，使用 AGPL-3.0 许可发布。

链接：https://www.oschina.net/p/mes-springboot

### （二）qcadoo MES

qcadoo MES 是一款针对中小企业的基于 Web 的生产管理应用，结合了大型 ERP 系统的功能，适应中小企业的特点，其开源版本基于 AGPL
许可发布。

链接：https://www.oschina.net/p/qcadoo-mes

![图片](https://mmbiz.qpic.cn/mmbiz_png/dkwuWwLoRK8PSIxLrcicDbdia1MxVVVaJ4gwfj4SicQlyrsp7wS7NfXNbVFkvDlP9Sibb5NbKG11f9zS1YqYwrxXQA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)图片

### （一）IMES

IMES 是一个为中小型 JobShop 制造商设计的软件，基于 Apache-2.0 许可发布。不过有些可惜的是，自 2019
年起该项目就没有更新记录了，作者表示受新冠疫情影响，暂停了开发计划。

链接：https://www.oschina.net/p/imes

#  **九、WMS**

###  （一）GreaterWMS

GreaterWMS 是一个国产软件，遵循 Apache License 2.0 协议，前后端分离，且完全开源，API 使用 restful
协议，方便二次开发，前端代码使用 quasar 进行构建，后端使用 Python Django3.1，利用
API，可以支持多仓、波次发货、合并拣货，Milk-Run 等业务模型。

链接：https://www.oschina.net/p/greaterwms

### （二）KopSoftWms

KopSoftWms 是一个国产软件，基于 .Net Core 2.2 开发，支持 MySQL 和 SQL Server 数据库，功能模块丰富，使用 MIT
许可发布。该作者还发布了标签 (条码) 打印软件、制造执行系统、数据采集与监控及电子看板等项目，在 README.md 文件中均有介绍。

链接：https://www.oschina.net/p/kopsoftwms

### （三）SmoWMS

SmoWMS 是一个国产软件。已开源的代码为 C# ，是通过 Smobiler 平台开发的基于 .NET
的开源移动应用，包含了仓库、订单、主数据维护、图表分析、个人信息几大菜单功能。

链接：https://www.oschina.net/p/smowms

### （四）deer-wms

deer-wms 是一个国产的立体仓库管理系统，使用 GPL-3.0
许可发布，基于自动化输送线、机械臂、点数机、提升机、堆垛机等自动化设备和现代化仓储精益管理思想开发而来。通过对接工厂的 EBS（ERP
中一种）、MES、deer-wcs（设备调度系统）等系统接口，实现仓储上下游的数据打通，也是实现完全自动化的基础。

链接：https://www.oschina.net/p/deer-wms

### （五）openboxes

openboxes 是一个库存和供应链管理系统，旨在管理医疗机构的库存和跟踪库存变动。该系统通过采用 FEFO（先过期先出）策略来减少浪费，采用
Eclipse 公共许可证发布。现有功能包括库存跟踪、批次和到期跟踪、库存移动和装运跟踪、采购订单、库存申请和履行，以及内置和可定制的报告。

链接：https://www.oschina.net/p/openboxes

### （六）myWMS LOS

myWMS LOS 是用于人工操作仓库的软件，用户界面简单。通过定义外部系统通信接口和可互换模块的内部接口，即所谓的插件，myWMS LOS
可以创建模块化和开放式仓库管理系统，独立于硬件和操作系统，与不同制造商的产品和模块兼容，比如叉车和条形码扫描仪等。

myWMS LOS 基于开源框架 myWMS 发展而来，使用 GPL 许可发布，支持 JEE 规范，并以面向服务的架构 (SOA)
的形式提供基本的物流服务。

链接：https://www.oschina.net/p/mywms-los

### （七）OpenWMS.org

OpenWMS.org 是一个用于构建现代仓库管理系统的软件项目，使用 Apache-2.0 许可证分发，由仓库管理部分 (WMS)、传输管理 (TMS)
和其他系统的连接器组成，带有用于自动和手动仓库的物料流控制 (MFC) 系统。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/dkwuWwLoRK8PSIxLrcicDbdia1MxVVVaJ4F3GU9MdBuBXYACOks08tLkwWPRD2wNzbM6HIyu8cXeQiciaA6ic2k71hQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)图片

WMS 部分连接到 ERP 系统，而运输管理系统控制现场控制器，如 Raspberry Pi 或 PLC。还考虑了系统可用性、性能和可靠性等非功能性要求。

链接：https://www.oschina.net/p/openwms-org

 **·········· END ··············**

用心发掘优质开源项目，欢迎关注，欢迎点赞分享！

历史优质开源项目推荐地址：[Github
掘金计划](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzIwNDgzMzI3Mg==&action=getalbum&album_id=1571213952619954180#wechat_redirect)。

  * [计算机基础](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1635325633234780161&__biz=MzIwNDgzMzI3Mg==#wechat_redirect)：精选计算机基础（操作系统、计算机网络、算法、数据结构）相关的开源项目。

  * [神器工具](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzIwNDgzMzI3Mg==&action=getalbum&album_id=1692140336665378820#wechat_redirect) : 一些好用的插件、软件、网站。

  * [程序人生](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzIwNDgzMzI3Mg==&action=getalbum&album_id=2084343476975878144#wechat_redirect)：编程经历、英语学习、延寿指南。

  * [项目实战](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1632590550748938241&__biz=MzIwNDgzMzI3Mg==#wechat_redirect) ：精选实战类型的开源项目。

  

  

预览时标签不可点

