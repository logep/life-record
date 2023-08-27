----------------------------------------
## 本答案原始链接: https://www.zhihu.com/question/615046284/answer/
### 大概简介: 
----------------------------------------
巧了，最近我们在做的AI Agent（尤其是LLM-based AI Agent，即基于大型语言模型的人工智能代理）可能是题目中提到的“AI最新趋势”和“可能的创业方向”的共同答案（之一），而具体应用场景就有很多了，比如复杂任务自动化，情感陪伴机器人等。下面详细说一下。





什么是AI AGENT：

其实到目前为止也没有明确的定义。我们在之前的论文中定义为（一个基于人工智能的程序，它能够完成需要人类智能的复杂任务）：Artificial Intelligence Agent (AI Agent) is defined as a program that employs artificial intelligence techniques to perform tasks that typically require human-like intelligence. AI Agents can take many forms, from simple chatbots to complex autonomous systems that interact with their environment and make decisions in real time. They can be trained using a variety of machine learning techniques, including supervised, unsupervised, and reinforcement learning, and can be programmed to perform specific tasks or learn from their experiences in order to improve their performance over time.





“AI最新趋势”

ChatGPT（一种特定的LLM）是最火、最新的方向之一，这个大家肯定不质疑。基于ChatGPT的技术自然是更新的技术，虽然很难判断是不是最新趋势，但现在来看AI Agent肯定是最新技术之一。





“可能的创业方向”

LLM-based AI Agent是在类ChatGPT的LLM基础上，进行planning、reasoning、decision、tool usage（规划、推理、决策、工具使用）等技术加成，让LLM不仅能够进行通用问答，还能真正和现实世界中的实体进行交互，达到改变世界的目的。这种技术极大的拓展了LLM的应用范围，自然能够找到更多的创业方向。例如：

1、复杂任务自动化：帮助用户处理繁琐、重复性且需要大量文本处理的工作。例如，自动化文档摘要生成、智能客服和自动回复系统等。其实也有大量的非文本处理任务，这个很关键，具体就不说了。

2、情感陪伴机器人：LLM嵌入机器人，它能够与用户进行自然语言交互并提供情感支持和陪伴。这种机器人可以在孤独、焦虑或需要情感支持的人群中发挥作用。

3、LLM本身就可以完成的文本类任务：例如智能内容生成和编辑（生成文章、博客、新闻稿等，并提供语法纠正、风格建议和内容优化等功能）、教育和培训领域的智能助手（为学生、教师和培训师提供个性化的学习支持、知识问答和辅助教学）。





关键技术

大家如果感兴趣可以看我们的论文《TPTU: Task Planning and Tool Usage of Large Language Model-based AI Agents [https://link.zhihu.com/?target=https%3A//arxiv.org/pdf/2308.03427.pdf]》，里面有一些关键技术的讨论。另外可以看下最新综述《A Survey on Large Language Model based Autonomous Agents [https://link.zhihu.com/?target=https%3A//arxiv.org/pdf/2308.11432.pdf]》。这两个论文都是近一个月之内的。

[https://picx.zhimg.com/50/v2-be476552e41f683354153178a508f44c720w.jpg?source=1940ef5c][https://pic1.zhimg.com/50/v2-e5a9825bfa06354aa623056448c5d7f8720w.jpg?source=1940ef5c]



其实你要判断趋势很简单，如果连一个毫不相关的人都能知道，且能侃几句的，那就是趋势。

借用饭圈的一个词来讲，那就是“出圈”。

那你再联想一下最近关于 AI 你经常听到的，那 AI 技术最新的趋势应该就在你嘴边了：大模型（Large Language Model LLM）。

大家更熟悉的应该是它的基础模型 ChatGPT。

它可以模仿人类，可以和我们正常的沟通交流，偶尔犯错，但是大多数情况下都是正常的。

从去年底到现在，ChatGPT 越来越火，借着它的东风，也让大模型变的瞩目，各路资本闻着味儿的进场，疯狂开砸大模型。

AI 也再一次成为了大众关注的焦点，有一个有意思的小数据，在夸克发布的《2023高考志愿》报告中，人工智能相关专业的关注度上升最快。

有钱有关注度，这就是掌握了发展密码，这势必会让 AI 技术的发展持续高速。

基于大模型的特点，它衍生出来的应用场景也特别多。

比如智能问答系统，像智能客服。虽然一直都有智能问答，接入了 ChatGPT 的智能问答和之前的智能问答肯定没有可比性，必将有极大的提升。

比如视频制作。RunWay 公司在今年2月推出了一款文本生成视频的 AI 大模型 Gen-1，6 月迭代版本 Gen-2 也发布了，可一句话生成视频，真正的从零开始生产视频。

视频版 Midjourney 又进化了，可一句话生成视频，谷歌注资，将带来哪些影响？ [https://www.zhihu.com/question/607145317/answer/3079466073]

[https://picx.zhimg.com/50/v2-521308fc80f9099b47cde55e799c709c_720w.gif?source=1940ef5c] Gen-2 生成的视频

比如 AI 律师。北京大学团队在今年 7 月份发布法律大模型 ChatLaw，用语言模型建立面向未来的普惠法律服务，用技术降低普通人获取法律知识的成本，仅是“降低普通民众获得法律知识的成本”这一条，就价值不可估量。

北大团队发布法律大模型 ChatLaw，为大众提供普惠法律服务，将带来哪些影响？ [https://www.zhihu.com/question/610072848/answer/3101827444]

[https://picx.zhimg.com/50/v2-21fc8bc0b93a0e4d9763e3f7694cce4e_720w.jpg?source=1940ef5c]

比如内容审核。8 月 OpenAI（ChatGPT 就是他们研发的）称，他们开发了一种使用 GPT-4 进行内容审核的解决方案，一天可以完成六个月内容审核的工作，有望减轻人工审核元的负担。

北大团队发布法律大模型 ChatLaw，为大众提供普惠法律服务，将带来哪些影响？ [https://www.zhihu.com/question/610072848/answer/3101827444]

[https://pic1.zhimg.com/50/v2-d5c56e884ccc347e2306d288e3edcf79_720w.jpg?source=1940ef5c]

当然上面只是一小小小小小小部分，还有更多像 AI 作图、AI 健康这种都是很好的应用场景。

原先的 AI 大众都知道，但也只是知道而已，到底 AI 是什么也没概念，也体会不到，大模型的出现以及和各行各业的结合，会让大众也有了参与感，以及确实从 AI 身上得到实惠。

要说在未来成为热门的创业方向，我之前回答了一个问题：

https://www.zhihu.com/question/615024883/answer/3173278551

我感觉在里面说过一句话：

> 一个人的工作机会取决于个人有没有跟着时代的步伐进行自身技能升级，是不是敢于拥抱时代的变化，而不是祈求于现在找到关于未来的正确答案。

我感觉换个主语拿在这里依然适用。

如果非得问在未来有潜力成为热门创业方向？

我能看到的热门，是要将 AI 技术与普罗大众日常生活息息相关的结合。

https://www.zhihu.com/question/307162104/answer/3171801327

