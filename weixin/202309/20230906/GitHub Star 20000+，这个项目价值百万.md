----------------------------------------
----------------------------------------
#  GitHub Star 20000+，这个项目价值百万

[ Github掘金计划 ](javascript:void\(0\);)

**Github掘金计划** ![]()

微信号 GithubStar

功能介绍 用心发掘 Github 和 Gitee 上优质的开源项目。

____

_2022-05-13 04:30_ _发表于 湖北_

收录于合集

  
**导 读**  

OCR方向的工程师，之前一定听说过PaddleOCR这个项目，

 **累计Star数量已超过20000+** ，

频频登上GitHub Trending和Paperswithcode 日榜月榜第一，

在Medium与Papers with Code 联合评选的《Top Trending Libraries of
2021》，从百万量级项目中脱颖而出，荣登Top10！

在《2021中国开源年度报告》中被评为活跃度 **Top5！**

称它为 **OCR方向目前最火的repo** 绝对不为过。

  
  
  
  

  

![图片](https://mmbiz.qpic.cn/mmbiz_gif/ByEtV06HvDia9P9pCfviaUsic9AsDXrlw5ylu1tAhExcThppkqRvibhGibyXgrFQTvPFRxrdvAm8ibOjlTBLcmPaCyicw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1)

PaddleOCR影响力

  

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg
width='1px' height='1px' viewBox='0 0 1 1' version='1.1'
xmlns='http://www.w3.org/2000/svg'
xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg
stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-
opacity='0'%3E%3Cg transform='translate\(-249.000000, -126.000000\)'
fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1'
height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

PP-OCRv3效果

  

  
  
  
  

 **本次PaddleOCR最新发版，带来四大重磅升级，包括** ：一、发布超轻量OCR系统PP-OCRv3：中英文、纯英文以及多语言场景精度再提升5% -
11%！二、发布半自动标注工具PPOCRLabelv2：新增表格文字图像、图像关键信息抽取任务和不规则文字图像的标注功能。三、发布OCR产业落地工具集：打通22种训练部署软硬件环境与方式，覆盖企业90%的训练部署环境需求。四、发布业界首个交互式OCR开源电子书《动手学OCR》，覆盖OCR全栈技术的前沿理论与代码实践，并配套教学视频。
**传送门： _https://github.com/PaddlePaddle/PaddleOCR_**

  

  
  
  
  

  

下面我们就对上述升级依次进行说明：  

  

 **0** **1** **PP-OCRv3优化策略详细解读** PP-OCR是PaddleOCR团队自研的超轻量OCR系统，面向OCR产业
**应用，权衡精度与速度** **。** 近期，PaddleOCR团队针对PP-
OCRv2的检测模块和识别模块，进行共计9个方面的升级，打造出一款全新的、效果更优的超轻量OCR系统：PP-OCRv3。
**从效果上看，速度可比情况下，多种场景精度均有大幅提升：** 1.中文场景，相比于PP-OCRv2中文模型提升超5%；2.英文数字场景，相比于PP-
OCRv2英文数字模型提升11%；3.多语言场景，优化80+语种识别效果，平均准确率提升超5%。

  

![图片](https://mmbiz.qpic.cn/mmbiz_png/ByEtV06HvDia9P9pCfviaUsic9AsDXrlw5y64AhK55Wz63IUkftrhpy4ODBWAlbbQwzSoBbvZQpvmJKWbUriaHgJrw/640?wx_fmt=png)

  

全新升级的PP-OCRv3的整体框架图（粉色框中为PP-OCRv3新增策略）如下图。检测模块仍基于DB算法优化，而识别模块不再采用CRNN，更新为IJCAI
2022最新收录的文本识别算法SVTR (论文名称：SVTR: Scene Text Recognition with a Single Visual
Model)，并对其进行产业适配。

![图片](https://mmbiz.qpic.cn/mmbiz_png/ByEtV06HvDia9P9pCfviaUsic9AsDXrlw5yiazzpYIXMmht0q5srDibXNPOibMKZ46qmeRohPicFf0MU3qdZT5yrDaTxg/640?wx_fmt=png)

具体的优化策略包括：

  
1.检测模块  
●LK-PAN：大感受野的PAN结构●DML：教师模型互学习策略●RSE-FPN：残差注意力机制的FPN结构  
2.识别模块  
●SVTR_LCNet：轻量级文本识别网络●GTC：Attention指导CTC训练策略●TextConAug：挖掘文字上下文信息的数据增广策略●TextRotNet：自监督的预训练模型●UDML：联合互学习策略●UIM：无标注数据挖掘方案
**优化策略解读详见第六节。**

  

  
  
  
  

  

  

 **0** **2** **PPOCRLabelv2多项重磅更新**

  

PPOCRLabel是 **首款开源的OCR半自动数据标注工具，** 大幅减少开发者标注OCR数据的时间。2021年， **项目获得Wave Summit
2021优秀开源项目奖、启智社区优秀项目奖。**
经过一年的更新迭代，PPOCRLabel结合产业实际落地需求，正式发布PPOCRLabelv2，更新内容如下：● **新增标注类型：**
表格标注、关键信息标注、不规则文字图像的标注（印章、弯曲文本等）● **新增功能** ：锁定框、图像旋转、数据集划分、批量处理等● **易用性提升**
：新增whl包安装、以及优化多处标注体验![图片](data:image/svg+xml,%3C%3Fxml version='1.0'
encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1'
version='1.1' xmlns='http://www.w3.org/2000/svg'
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
height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)![图片](data:image/svg+xml,%3C%3Fxml
version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0
0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg'
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

表格标注动图、KIE标注动图（横向拉动）

  

  
  
  
  

  

 **0** **3** **OCR产业落地工具集**

  

考虑到真实产业应用面对的各种软硬件环境和不同的场景需求，基于飞桨训推一体的功能完备，本次升级发布OCR产业落地工具集，打通22种训练部署软硬件环境与方式，包括3种训练方式、6种训练环境、3种模型压缩策略、和10种推理部署方式，如下表所示：

  

![图片](https://mmbiz.qpic.cn/mmbiz_png/ByEtV06HvDia9P9pCfviaUsic9AsDXrlw5yaYS4VuPl6DNmznN7WVt8zlE87KvoYTOqAbBhicQBsSR7LyakKOSnX0g/640?wx_fmt=png)

  

 **其中特色能力如下：** 1. **分布式训练：** 飞桨分布式训练架构具备4D混合并行、端到端自适应分布式训练等多项特色技术。在PP-
OCRv3识别模型训练中，4机加速比达到3.52倍，精度几乎无损。  
2. **模型压缩：** 飞桨模型压缩工具PaddleSlim功能完备，覆盖模型裁剪、量化、蒸馏和NAS。PP-OCR模型经过裁剪量化后，模型大小从8.1M压缩至3.5M，移动端平均预测耗时减少36%。  
3. **服务化部署：** 飞桨服务化部署引擎Paddle Serving，提供性能优越、功能可靠的模型即服务能力。针对PP-OCR模型的服务化部署，采用全异步的Pipeline Serving，可将吞吐量提升2倍以上。  
4. **移动端/边缘端部署：** 飞桨轻量化推理引擎Paddle Lite适配了20+ AI 加速芯片，可以快速实现OCR模型在移动设备、嵌入式设备和IOT设备等高效设备的部署。  
5. **云上飞桨：** 面向飞桨框架及其模型套件的部署工具箱，支持 Docker 化部署和 Kubernetes 集群部署两种方式，满足不同场景与环境下OCR模型的训练部署需求。

  

  
  
  
  

  

  

 **0** **4** **《动手学OCR》电子书** 《动手学OCR》是PaddleOCR团队 **携手华中科技大学博导/教授，IAPR Fellow
白翔、复旦大学青年研究员陈智能、中国移动研究院视觉领域资深专家黄文辉等产学研同仁，以及OCR开发者** 共同打造的结合OCR前沿理论与代码实践的教材。
**主要特色如下：**
●覆盖从文本检测识别到文档分析的OCR全栈技术●紧密结合理论实践，跨越代码实现鸿沟，并配套教学视频●Notebook交互式学习，灵活修改代码，即刻获得结果

  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/ByEtV06HvDia9P9pCfviaUsic9AsDXrlw5yMoQCw3nKLVfUpMcNJibq0Uibtf5UaFFOQaxWmL24JHj4ETVQltPQUzicg/640?wx_fmt=jpeg)

  

![图片](https://mmbiz.qpic.cn/mmbiz_png/ByEtV06HvDia9P9pCfviaUsic9AsDXrlw5ykGZZlnyknJZz5ILaH4UmyHJSAlKLicWlCLjY2ab4E4u7icIByibXWI7kQ/640?wx_fmt=png)

  

![图片](https://mmbiz.qpic.cn/mmbiz_png/ByEtV06HvDia9P9pCfviaUsic9AsDXrlw5yDIibUptXOdvYFnNSuN2Rn3s6QnyIWTj8OobGqEB9WvnIWf58D0x1iclw/640?wx_fmt=png)

  

![图片](https://mmbiz.qpic.cn/mmbiz_png/ByEtV06HvDia9P9pCfviaUsic9AsDXrlw5yje2EvSibhXSeTYSrNKEBgoiagoe6RpgS52qleGXSRecuYzU8Q6sylVjA/640?wx_fmt=png)

  

  

（可竖向拉动多图）

  

  
  
  
  

  

 **05**

 **加入PaddleOCR技术交流群**

 **获取精品直播课/学习大礼包等福利！**

  

 **入群福利：** **1\. 获取5月11-13日每晚20:30《OCR超强技术详解与产业应用实战》的直播课链接** **2\.
获取10G重磅OCR学习大礼包，**
包括：●《动手学OCR》电子书，配套讲解视频和notebook项目●66篇OCR相关顶会前沿论文打包放送，包括CVPR、AAAI、IJCAI、ICCV等●PaddleOCR历次发版直播课视频●OCR社区优秀开发者项目分享视频
**报名方式：微信扫描二维码并填写问卷之后，加入交流群领取以上福利。**

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/1MtnAxmWSwMLTQVMsicUWfPyECsW5fYmWwPgySM3NPgiciaH4IKZ8D7iaibnNZ5oKd9RIice64Yke5icklwcsq8bpfHTg/640?wx_fmt=jpeg)

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/BcyAypujBVYgJib7DCdJt64XmLW0g8HjSc5xErUc2oiahczk4qMlxNYLaS60SXzTZfu8LItiaibDBAeM91xBCRRyUQ/640?wx_fmt=jpeg)

大家如果觉得不错，建议访问GitHub点个star关注收藏哈。  
 ** _https://github.com/PaddlePaddle/PaddleOCR_**

![图片](https://mmbiz.qpic.cn/mmbiz_png/ByEtV06HvDia9P9pCfviaUsic9AsDXrlw5yRpNJ23MtjWkAHu73vhfzOhqFV9BCdCOmkiaaOKCe0icm51cBM9cQjBQw/640?wx_fmt=png)

官网地址：https://www.paddlepaddle.org.cnPaddleOCR项目地址：GitHub:
https://github.com/PaddlePaddle/PaddleOCRGitee:
https://gitee.com/paddlepaddle/PaddleOCR注：[1] 测试样例图片源于网络

  

  
  
  
  

  

 **0** **6** **PP-OCRv3优化策略详解**  
1.检测模块优化策略  
PP-OCRv3检测模块对PP-OCRv2中的CML（Collaborative Mutual Learning)
协同互学习文本检测蒸馏策略进行了升级。如下图所示，CML的核心思想结合了①传统的Teacher指导Student的标准蒸馏与
②Students网络之间的DML互学习，可以让Students网络互学习的同时，Teacher网络予以指导。PP-
OCRv3分别针对教师模型和学生模型进行进一步效果优化。其中，在对教师模型优化时，提出了大感受野的PAN结构LK-PAN和引入了DML（Deep
Mutual Learning）蒸馏策略；在对学生模型优化时，提出了残差注意力机制的FPN结构RSE-FPN。消融实验如下表所示。

![图片](https://mmbiz.qpic.cn/mmbiz_png/ByEtV06HvDia9P9pCfviaUsic9AsDXrlw5ykVaLZSAUuEEoF6S8Zg8oRXkAJa9PUvYnc8024S73XM7SPardnqx0rw/640?wx_fmt=png)

![图片](https://mmbiz.qpic.cn/mmbiz_png/ByEtV06HvDia9P9pCfviaUsic9AsDXrlw5yCoRKia6WiaUHC2j4E1T63oYfqbFCpuSUZ5L4uSiaI0Bj5jicu9EhyStic4w/640?wx_fmt=png)

测试环境：Intel Gold 6148 CPU，预测时开启MKLDNN加速。

  

 **0** **1**

 **LK-PAN：大感受野的PAN结构**

  

LK-PAN (Large Kernel PAN) 是一个具有更大感受野的轻量级PAN结构，核心是将PAN结构的path
augmentation中卷积核从3*3改为9*9。通过增大卷积核，提升特征图每个位置覆盖的感受野，更容易检测大字体的文字以及极端长宽比的文字。使用LK-
PAN结构，可以将教师模型的hmean从83.2%提升到85.0%。

  

 **0** **2**

 **DML：教师模型互学习策略**

  

DML 互学习蒸馏方法，通过两个结构相同的模型互相学习，可以有效提升文本检测模型的精度。教师模型采用DML策略， hmean从85%提升到86%。将PP-
OCRv2中CML的教师模型更新为上述更高精度的教师模型，学生模型的hmean可以进一步从83.2%提升到84.3%。

  

 **0** **3**

 **RSE-FPN：残差注意力机制的FPN结构**

  

RSE-FPN（Residual Squeeze-and-Excitation
FPN）引入残差结构和通道注意力结构，将FPN中的卷积层更换为带有残差结构的通道注意力结构的RSEConv层，进一步提升特征图的表征能力。进一步将PP-
OCRv2中CML的学生模型的FPN结构更新为RSE-FPN，学生模型的hmean可以进一步从84.3%提升到85.4%。

  

  
2.识别模块优化策略  
PP-
OCRv3的识别模块是基于文本识别算法SVTR优化。SVTR不再采用RNN结构，通过引入Transformers结构更加有效地挖掘文本行图像的上下文信息，从而提升文本识别能力。直接将PP-
OCRv2的识别模型，替换成SVTR_Tiny，识别准确率从74.8%提升到80.1%（+5.3%），但是预测速度慢了将近11倍，CPU上预测一条文本行，将近100ms。因此，如下图所示，PP-
OCRv3采用如下6个优化策略进行识别模型加速，消融实验如下表所示。

![图片](https://mmbiz.qpic.cn/mmbiz_png/ByEtV06HvDia9P9pCfviaUsic9AsDXrlw5yCY5hCJfo5VRgmABVWesSiaCjribDZU4tXbQAuBE4Tgrc5taRIaRAJDiag/640?wx_fmt=png)

注：测试速度时，实验01-03输入图片尺寸均为(3,32,320)，04-08输入图片尺寸均为(3,48,320)。在实际预测时，图像为变长输入，速度会有所变化。测试环境：Intel
Gold 6148 CPU，预测时开启MKLDNN加速。

  

![图片](https://mmbiz.qpic.cn/mmbiz_png/ByEtV06HvDia9P9pCfviaUsic9AsDXrlw5yZMFm3uY7ibGD6A0VIrrCFlOjiaT8MgEcN6awwYZyicRlJOhjG7iaTqDw9Q/640?wx_fmt=png)

  

 **0** **1**

 **SVTR_LCNet：轻量级文本识别网络**

  

SVTR_LCNet是针对文本识别任务，将Transformer网络和轻量级CNN网络PP-LCNet
融合的一种轻量级文本识别网络。使用该网络，并且将输入图片规范化高度从32提升到48，预测速度可比情况下，识别准确率达到73.98%，接近PP-
OCRv2采用蒸馏策略的识别模型效果。

  

 **0** **2**

 **GTC：Attention指导CTC训练策略**

  

GTC（Guided Training of
CTC），利用Attention指导CTC训练，融合多种文本特征的表达，是一种有效的提升文本识别的策略。使用该策略，识别模型的准确率进一步提升到75.8%（+1.82%）。

  

 **0** **3**

 **TextConAug：挖掘文字上下文信息的数据增广策略**

  

TextConAug是一种挖掘文字上下文信息的数据增广策略，可以丰富训练数据上下文信息，提升训练数据多样性。使用该策略，识别模型的准确率进一步提升到76.3%（+0.5%）。

  

 **0** **4**

 **TextRotNet：自监督的预训练模型**

  

TextRotNet是使用大量无标注的文本行数据，通过自监督方式训练的预训练模型。该模型可以初始化SVTR_LCNet的初始权重，从而帮助文本识别模型收敛到更佳位置。使用该策略，识别模型的准确率进一步提升到76.9%（+0.6%）。

  

 **0** **5**

 **联合互学习策略**

  

UDML（Unified-Deep Mutual Learning）联合互学习是PP-OCRv2中就采用的对于文本识别非常有效的提升模型效果的策略。在PP-
OCRv3中，针对两个不同的SVTR_LCNet和Attention结构，对他们之间的PP-
LCNet的特征图、SVTR模块的输出和Attention模块的输出同时进行监督训练。使用该策略，识别模型的准确率进一步提升到78.4%（+1.5%）。

  

 **0** **6**

 **无标注数据挖掘方案**

  

UIM（Unlabeled Images
Mining）是一种非常简单的无标注数据挖掘方案。核心思想是利用高精度的文本识别大模型对无标注数据进行预测，获取伪标签，并且选择预测置信度高的样本作为训练数据，用于训练小模型。使用该策略，识别模型的准确率进一步提升到79.4%（+1%）。  
  
  
  

  

经过上述文本检测和文本识别9个方面的优化，最终PP-OCRv3在速度可比情况下，在中文场景端到端Hmean指标相比于PP-
OCRv2提升5%，效果大幅提升。具体指标如下表所示：

  

![图片](https://mmbiz.qpic.cn/mmbiz_png/ByEtV06HvDia9P9pCfviaUsic9AsDXrlw5yWmRPhzv4ZqciaSSJbudicLIqiavzibxZJ38lZJtGQbZDPamd4vmZaiawovQ/640?wx_fmt=png)

  

在英文数字场景，基于PP-OCRv3单独训练的英文数字模型，相比于PP-OCRv2的英文数字模型提升11%，如下表所示。

![图片](https://mmbiz.qpic.cn/mmbiz_png/ByEtV06HvDia9P9pCfviaUsic9AsDXrlw5yGscbbiauKNBGaCIA03kibAlaaU7yFJqTRPJ7SZGoibTVH8OYNvWDtgvTQ/640?wx_fmt=png)

  

在多语言场景，基于PP-OCRv3训练的模型，在有评估集的四种语系，相比于PP-
OCRv2，识别准确率平均提升5%以上，如下表所示。同时，PaddleOCR团队基于PP-OCRv3更新了已支持的80余种语言识别模型。

![图片](https://mmbiz.qpic.cn/mmbiz_png/ByEtV06HvDia9P9pCfviaUsic9AsDXrlw5yahWc3icMC6ueibTxmZl9CoiadEuFNajiaknXTCzrvmOTuRccoCnvHTjOEQ/640?wx_fmt=png)

  

想了解更多技术详细解读，欢迎扫码加入技术交流群。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/BcyAypujBVYgJib7DCdJt64XmLW0g8HjSiaR7aQ77WCzhibufOvrC9QThBv031j6CVTWdKxiakslSt5KqUDiaUFnLmA/640?wx_fmt=jpeg)

大家如果觉得不错，建议访问GitHub点个star关注收藏哈。  

 ** _https://github.com/PaddlePaddle/PaddleOCR_**

![图片](https://mmbiz.qpic.cn/mmbiz_png/ByEtV06HvDia9P9pCfviaUsic9AsDXrlw5yRpNJ23MtjWkAHu73vhfzOhqFV9BCdCOmkiaaOKCe0icm51cBM9cQjBQw/640?wx_fmt=png)

  

预览时标签不可点

[阅读原文](javascript:;)

