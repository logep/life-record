----------------------------------------
----------------------------------------
#  用了 Git 之后，再也不想用 SVN 了！

[ Github掘金计划 ](javascript:void\(0\);)

**Github掘金计划** ![]()

微信号 GithubStar

功能介绍 用心发掘 Github 和 Gitee 上优质的开源项目。

____

_2021-12-10 10:33_ _发表于_

收录于合集

  

![图片](https://mmbiz.qpic.cn/mmbiz_png/xq9PqibkVAzrMEgAqCZsNxerEvNbMLEbEJ0ZtDktaWQREZRZo5qANqQhric4P8JkbM9QO2ywBL58MunPn3KHgNVg/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

来源丨云加社区

segmentfault.com/a/1190000016865867

  

  

 **Git vs SVN** ****

> Git 和 SVN 孰优孰好，每个人有不同的体验。

 **一、Git是分布式的，SVN是集中式的**

这是 Git 和 SVN 最大的区别。若能掌握这个概念，两者区别基本搞懂大半。因为 Git 是分布式的，所以 Git
支持离线工作，在本地可以进行很多操作，包括接下来将要重磅推出的分支功能。而 SVN 必须联网才能正常工作。

 **二、Git复杂概念多，SVN简单易上手**

所有同时掌握 Git 和 SVN 的开发者都必须承认，Git 的命令实在太多了，日常工作需要掌握 `add`, `commit`, `status`,
`fetch`, `push`, `rebase`等，若要熟练掌握，还必须掌握 `rebase`和 `merge`的区别， `fetch`和
`pull`的区别等，除此之外，还有 `cherry-pick`， `submodule`， `stash`等功能，仅是这些名词听着都很绕。

在易用性这方面，SVN 会好得多，简单易上手，对新手很友好。但是从另外一方面看，Git 命令多意味着功能多，若我们能掌握大部分 Git
的功能，体会到其中的奥妙，会发现再也回不去 SVN 的时代了。

 **三、Git分支廉价，SVN分支昂贵**

在版本管理里，分支是很常使用的功能。在发布版本前，需要发布分支，进行大需求开发，需要 feature
分支，大团队还会有开发分支，稳定分支等。在大团队开发过程中，常常存在创建分支，切换分支的需求。

Git 分支是指针指向某次提交，而 SVN 分支是拷贝的目录。这个特性使 Git 的分支切换非常迅速，且创建成本非常低。

而且 Git 有本地分支，SVN 无本地分支。在实际开发过程中，经常会遇到有些代码没写完，但是需紧急处理其他问题，若我们使用
Git，便可以创建本地分支存储没写完的代码，待问题处理完后，再回到本地分支继续完成代码。

* * *

 **Git核心思想** ****

Git 最核心的一个概念就是 **工作流** 。

  *  **工作区(Workspace)** 是电脑中实际的目录。
  *  **暂存区(Index)** 类似于缓存区域，临时保存你的改动。
  *  **仓库区(Repository)** ，分为本地仓库和远程仓库。

从 SVN 切换到 Git，最难理解并且最不能理解的是暂存区和本地仓库。熟练使用 Git 后，会发现这简直是神设计，由于这两者的存在，使许多工作变得易管理。

通常提交代码分为几步：

  * `git add` 从工作区提交到暂存区
  * `git commit` 从暂存区提交到本地仓库
  * `git push`或 `git svn dcommit` 从本地仓库提交到远程仓库

一般来说，记住以下命令，便可进行日常工作了（图片来源于网络）：

![图片](https://mmbiz.qpic.cn/mmbiz_png/xq9PqibkVAzrMEgAqCZsNxerEvNbMLEbEB3CTTIr0gSnrOZ26Nct3OowI9x3lmPUD4yaYmDh4ejicvC8y4Bmiaia6Q/640?wx_fmt=jpeg)

* * *

 **Git-SVN常用命令** ****

> 看到Git-SVN不要懵！是的，在Git中甚至有命令可以直接和SVN进行桥接，Git 中所有与SVN桥接的基础命令就是 `git svn`

若服务器使用的 SVN，但是本地想要体验 Git 的本地分支，离线操作等功能，可以使用 Git-SVN功能。

常用操作如下（图片来源于网络）：

![图片](https://mmbiz.qpic.cn/mmbiz_png/xq9PqibkVAzrMEgAqCZsNxerEvNbMLEbEBAsOwPAZ6MEok8eGXak2aNjUgqnamnsKKA8IWic9sfJlvrBpmqY1bUg/640?wx_fmt=png)

    
          1. # 下载一个 SVN 项目和它的整个代码历史，并初始化为 Git 代码库
    
      2. $ git svn clone -s [repository]
    
      3.   
    
    
      4. # 查看当前版本库情况
    
      5. $ git svn info
    
      6.   
    
    
      7. # 取回远程仓库所有分支的变化
    
      8. $ git svn fetch
    
      9.   
    
    
      10. # 取回远程仓库当前分支的变化，并与本地分支变基合并
    
      11. $ git svn rebase
    
      12.   
    
    
      13. # 上传当前分支的本地仓库到远程仓库
    
      14. $ git svn dcommit
    
      15.   
    
    
      16. # 拉取新分支，并提交到远程仓库
    
      17. $ svn copy [remote_branch] [new_remote_branch] -m [message]
    
      18.   
    
    
      19. # 创建远程分支对应的本地分支
    
      20. $ git checkout -b [local_branch] [remote_branch]
    
    
    

* * *

 **初 始 化** ****

> 从本节开始，除特殊说明，以下命令均适用于 Git 与 Git-SVN。
    
          1. # 在当前目录新建一个Git代码库
    
      2. $ git init
    
      3.   
    
    
      4. # 下载一个项目和它的整个代码历史 [Git only]
    
      5. $ git clone [url]
    
    
    

* * *

 **配 置** ****

    
          1.  # 列举所有配置
    
      2. $ git config -l
    
      3.   
    
    
      4. # 为命令配置别名
    
      5. $ git config --global alias.co checkout
    
      6. $ git config --global alias.ci commit
    
      7. $ git config --global alias.st status
    
      8. $ git config --global alias.br branch
    
      9.   
    
    
      10. # 设置提交代码时的用户信息
    
      11. $ git config [--global] user.name "[name]"
    
      12. $ git config [--global] user.email "[email address]"
    
    
    

Git 用户的配置文件位于 `~/.gitconfig`

Git 单个仓库的配置文件位于 `~/$PROJECT_PATH/.git/config`

* * *

 **增删文件** ****

    
          1.  # 添加当前目录的所有文件到暂存区
    
      2. $ git add .
    
      3.   
    
    
      4. # 添加指定文件到暂存区
    
      5. $ git add <file1> <file2> ...
    
      6.   
    
    
      7. # 添加指定目录到暂存区，包括其子目录
    
      8. $ git add <dir>
    
      9.   
    
    
      10. # 删除工作区文件，并且将这次删除放入暂存区
    
      11. $ git rm [file1] [file2] ...
    
      12.   
    
    
      13. # 停止追踪指定文件，但该文件会保留在工作区
    
      14. $ git rm --cached [file]
    
      15.   
    
    
      16. # 改名文件，并且将这个改名放入暂存区
    
      17. $ git mv [file-original] [file-renamed]
    
    
    

> 把文件名 file1 添加到 .gitignore 文件里，Git 会停止跟踪 file1 的状态。

* * *

 **分 支** ****

    
          1.  # 列出所有本地分支
    
      2. $ git branch
    
      3.   
    
    
      4. # 列出所有本地分支和远程分支
    
      5. $ git branch -a
    
      6.   
    
    
      7. # 新建一个分支，但依然停留在当前分支
    
      8. $ git branch [branch-name]
    
      9.   
    
    
      10. # 新建一个分支，并切换到该分支
    
      11. $ git checkout -b [new_branch] [remote-branch]
    
      12.   
    
    
      13. # 切换到指定分支，并更新工作区
    
      14. $ git checkout [branch-name]
    
      15.   
    
    
      16. # 合并指定分支到当前分支
    
      17. $ git merge [branch]
    
      18.   
    
    
      19. # 选择一个 commit，合并进当前分支
    
      20. $ git cherry-pick [commit]
    
      21.   
    
    
      22. # 删除本地分支，-D 参数强制删除分支
    
      23. $ git branch -d [branch-name]
    
      24.   
    
    
      25. # 删除远程分支
    
      26. $ git push [remote] :[remote-branch]
    
    
    

* * *

 **提 交** ****

    
          1.  # 提交暂存区到仓库区
    
      2. $ git commit -m [message]
    
      3.   
    
    
      4. # 提交工作区与暂存区的变化直接到仓库区
    
      5. $ git commit -a
    
      6.   
    
    
      7. # 提交时显示所有 diff 信息
    
      8. $ git commit -v
    
      9.   
    
    
      10. # 提交暂存区修改到仓库区，合并到上次修改，并修改上次的提交信息
    
      11. $ git commit --amend -m [message]
    
      12.   
    
    
      13. # 上传本地指定分支到远程仓库
    
      14. $ git push [remote] [remote-branch]
    
    
    

* * *

 **拉 取** ****

    
          1.  # 下载远程仓库的所有变动 (Git only)
    
      2. $ git fetch [remote]
    
      3.   
    
    
      4. # 显示所有远程仓库 (Git only)
    
      5. $ git remote -v
    
      6.   
    
    
      7. # 显示某个远程仓库的信息 (Git only)
    
      8. $ git remote show [remote]
    
      9.   
    
    
      10. # 增加一个新的远程仓库，并命名 (Git only)
    
      11. $ git remote add [remote-name] [url]
    
      12.   
    
    
      13. # 取回远程仓库的变化，并与本地分支合并，(Git only), 若使用 Git-SVN，请查看第三节
    
      14. $ git pull [remote] [branch]
    
      15.   
    
    
      16. # 取回远程仓库的变化，并与本地分支变基合并，(Git only), 若使用 Git-SVN，请查看第三节
    
      17. $ git pull --rebase [remote] [branch]
    
    
    

* * *

 **撤 销** ****

    
          1.  # 恢复暂存区的指定文件到工作区
    
      2. $ git checkout [file]
    
      3.   
    
    
      4. # 恢复暂存区当前目录的所有文件到工作区
    
      5. $ git checkout .
    
      6.   
    
    
      7. # 恢复工作区到指定 commit
    
      8. $ git checkout [commit]
    
      9.   
    
    
      10. # 重置暂存区的指定文件，与上一次 commit 保持一致，但工作区不变
    
      11. $ git reset [file]
    
      12.   
    
    
      13. # 重置暂存区与工作区，与上一次 commit 保持一致
    
      14. $ git reset --hard
    
      15.   
    
    
      16. # 重置当前分支的指针为指定 commit，同时重置暂存区，但工作区不变
    
      17. $ git reset [commit]
    
      18.   
    
    
      19. # 重置当前分支的HEAD为指定 commit，同时重置暂存区和工作区，与指定 commit 一致
    
      20. $ git reset --hard [commit]
    
      21.   
    
    
      22. # 新建一个 commit，用于撤销指定 commit
    
      23. $ git revert [commit]
    
      24.   
    
    
      25. # 将未提交的变化放在储藏区
    
      26. $ git stash
    
      27.   
    
    
      28. # 将储藏区的内容恢复到当前工作区
    
      29. $ git stash pop
    
    
    

* * *

 **查 询** ****

    
          1.  # 查看工作区文件修改状态
    
      2. $ git status
    
      3.   
    
    
      4. # 查看工作区文件修改具体内容
    
      5. $ git diff [file]
    
      6.   
    
    
      7. # 查看暂存区文件修改内容
    
      8. $ git diff --cached [file] 
    
      9.   
    
    
      10. # 查看版本库修改记录
    
      11. $ git log
    
      12.   
    
    
      13. # 查看某人提交记录
    
      14. $ git log --author=someone
    
      15.   
    
    
      16. # 查看某个文件的历史具体修改内容
    
      17. $ git log -p [file]        
    
      18.   
    
    
      19. # 查看某次提交具体修改内容
    
      20. $ git show [commit]
    
    
    

* * *

  

  

## 推荐

  * [Github掘金计划](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzIwNDgzMzI3Mg==&action=getalbum&album_id=1571213952619954180#wechat_redirect) ：历史优质原创汇总！用心发掘 Github 和 Gitee 上优质的开源项目。
  * [编程基础](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1632585323454971905&__biz=MzIwNDgzMzI3Mg==#wechat_redirect) ：精选编程基础如学习路线、编程语言相关的开源项目。
  * [计算机基础](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1635325633234780161&__biz=MzIwNDgzMzI3Mg==#wechat_redirect)：精选计算机基础（操作系统、计算机网络、算法、数据结构）相关的开源项目。
  * [技术面试](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1632589980491366403&__biz=MzIwNDgzMzI3Mg==#wechat_redirect) ：精选技术面试相关的开源项目。
  * [项目实战](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1632590550748938241&__biz=MzIwNDgzMzI3Mg==#wechat_redirect) ：精选实战类型的开源项目。
  * [神器工具&网站](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzIwNDgzMzI3Mg==&action=getalbum&album_id=1692140336665378820#wechat_redirect) : 一些好用的插件、软件、网站。

如果你也有好的开源项目推荐的话，欢迎添加我的微信。备注“加群”我拉你进群。

  

![图片](https://mmbiz.qpic.cn/mmbiz_png/BcyAypujBVZicmqoVNJbBhEKKIGFI8OGS6UoEicMO6j8Vw1v1Ah40Sc1cJgZFAzSMtL1r2iav2eZhNgsGSfJ3NCDg/640?wx_fmt=png)

用心发掘 Github 和 Gitee 上优质的开源项目。

欢迎关注！欢迎点赞分享！

  

  

预览时标签不可点

