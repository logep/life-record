### 有多少人完全使用命令行管理 git 得

有多少人从来不用 gui 软件管理 git 呢

有什么经验分享下吗

---------------------------------------------------

12 年 git 纯命令行使用经验，有什么问题吗？

尝试过各种 gui （ lazygit 、vscode 插件），用不惯，还是命令行好，指哪打哪儿。

---------------------------------------------------

插件可以接入 merge request/pull request,纯命令好像不行吧

---------------------------------------------------

我也是, 虽然 svn 可以熟练的使用 GUI,  git 那边的 gui 始终用着不顺手, 最终还是留在 cli 了, 仅处理 冲突的时候才要借助 gui

---------------------------------------------------

基本都是 Sourcetree ，VsCode 开发的话偶尔用内置 Git 插件，Git 命令都忘得差不多了，非得用的话还得现查笔记

---------------------------------------------------

oh my zsh + git 插件

---------------------------------------------------

除了 merge, 都是命令行

---------------------------------------------------

我，咋了，gui 不习惯

---------------------------------------------------

常规操作没问题，squash 一直整不明白，的靠 ui 。

---------------------------------------------------

@unco020511 mr/pr 不是 gitlab/github 的功能么, 这还用插件?
---
感觉没必要完全 gui/cli, 这两者对 git 来说又不是互斥的选项, 我都是一起用的，那个顺手用哪个， 比如解决冲突就会选择切换到 gui 来

---------------------------------------------------

不用 GUI 怎么 merge code

---------------------------------------------------

除了 clone ，其他命令都是存在备忘录中

---------------------------------------------------

能 gui 就 gui
懒得敲命令

---------------------------------------------------

复杂的 merge 还是的要 GUI
其他 还是命令行来的直观

很多时候都是因为 gui 点下去不知道干了什么 
有时候还需要返回去 查看 gui 的日志
不专门学这个 GUI 工具甚至效率倒退 得不偿失 

而且怎么说呢 命令行是保底 那都能跑

---------------------------------------------------

不用 GUI ，总感觉不放心。我猜上面很多没用过 difftool, mergetool 和 rerere

---------------------------------------------------

那还得是 JetBrains 家的内置 git 工具好用啊

---------------------------------------------------

开发用 (Neo)Vim ，但敲 Git 命令感觉很麻烦，也不直观。所以一直用的 lazygit 这种 terminal UI ，既能保证无缝的纯键盘操作体验，又有直观的 UI 显示各种 branch 和 commit 信息，一些要 rebase -i 的常用操作也都直接集成了快捷键一键完成

---------------------------------------------------

JB 全家桶，除了 rebase 、merge 其他都是 gui 管理的

---------------------------------------------------

命令行的哥们看 git history 不累吗？

---------------------------------------------------

fork 多好用呀，懒得记命令

---------------------------------------------------

根据统计，git 命令居然排在我命令历史的 top 1 。我每写几行，或者几十行，就会 git diff 自己 review ，确认满意了就 git add ，确认单测通过就 git commit 。

---------------------------------------------------

lazygit 比敲命令舒服

---------------------------------------------------

@Nzelites #18 我猜你说的 git log? 我也不用,我用 tig

---------------------------------------------------

@unco020511 github cli 可以生成 PR 好像

---------------------------------------------------

我 gui 入门但是前几年就全部手敲 bash 了，因为 windows 和 mac 和 ubuntu 的 ui 都不一样，而且要经常解决团队一些复杂问题比如提交错等，就 bash 一把嗦了

---------------------------------------------------

lazygit 很舒服，因为日常开发最常用的还是 add commit discard pull push checkout 这些操作，lazygit 随便按几个键就搞定了，自认为比直接敲命令快。
gui 只用来处理复杂的 conflict 。

---------------------------------------------------

编辑类的操作都是命令行，简单，快速，什么操作都能心里有数。
查看类操作都是 VSCode gitlens 完成，十分方便。

---------------------------------------------------

https://github.com/librz/shell-scripts/blob/main/.zshrc#L102

我是自己写了一些 alias 和 function 来简化操作

---------------------------------------------------

用的 githubdesktop ，很舒服，文件变更很直观，也是通过他上面的功能让我深刻理解了诸如 stash 等很多命令的正确使用场景和作用
但是有某些情况还是得命令行，比如更换远程地址，完全删除历史记录，和一些高级功能

---------------------------------------------------

早期贼喜欢用命令行，后来被领导各种鄙视强烈要用工具，从 git 小乌龟->sourcetree->GitKraken->fork

---------------------------------------------------

好像从来都没用过任何的 gui 来管理 git 。。

---------------------------------------------------

操作只用 git 命令，但我要配合 git 自带的图形工具 gitk

---------------------------------------------------

gitk 查看状态、对比代码，git 命令则执行提交之类的具体操作

---------------------------------------------------

对比代码用 gitk 默认调用的 meld 这个对比工具

---------------------------------------------------

代码对比用工具
其他都用 git 命令行,因为对比看不习惯

---------------------------------------------------

其他都好说  用了 idea 还喜欢自己敲命令行就有点怪了

---------------------------------------------------

命令行 + https://git-fork.com/
命令行用于提交和拉取代码，fork 用于查看记录、对比

---------------------------------------------------

@Nzelites 我喜欢"A Dog" = git log --all --decorate --oneline --graph 或者 oh my zsh gloga

---------------------------------------------------

之前用 GUI
现在用命令行，很多操作显然用命令行效率高的多。 而且可以用 oh my zsh 来简化命令

---------------------------------------------------

都用，fetch, pull, stash, checkout 都在命令行。stage/commit/push 在 gui😄

---------------------------------------------------

我不是怀疑， 提交啥的命令行很正常

一堆文件，diff ，merge 时候用命令行好像效率不行把

---------------------------------------------------

我是混着用, push, pull, fetch,reset, rm, 这些习惯用命令行, 尤其是 reset, 因为用 jb 家的不知道怎么操作🤣

像是 commit, merge,rebase 这些 可能会有解冲突的时候 习惯 gui, 方便解冲突

---------------------------------------------------

额，一直纯用命令行 5 年。感觉够用了。
主要我的编程环境是 emacs ，所以用命令行方便点。
如果用 vscode 的这种界面的其实更方便。

---------------------------------------------------

GUI 有一种命令不是自己掌握的感觉，配一下 alias 用起来毫无问题

---------------------------------------------------

解决冲突会用 GUI 。其他情况看有没打开终端

---------------------------------------------------

人生苦短，我用 GUI

---------------------------------------------------

@thevita 就是你不需要去仓库发起 mr/pr,可以直接在你当前的工作环境去发起和处理(比如 ide)

---------------------------------------------------

啊从有 git 开始就没用过 GUI……
IDE 是 vim……
干活的 Linux 都没装桌面= =||

---------------------------------------------------

一直使用 sourcetree

---------------------------------------------------

混用，不需要拆分提交的时候，就命令行，需要拆分提交的时候，就用 JetBrains 的 Git 来弄，可以按行提交。

Squash 、解决冲突的时候都是用 JetBrains 的 Git 。

其他时候，都是用命令行，不过是 oh-my-posh + git ，oh-my-zsh 那一套 Git 的 alias 很好用。

---------------------------------------------------

只有 merge/rebase resolve confilit 的时候用 GUI
最终 push 前会用 GUI 比如 Fork 之类的 review 最终更改

---------------------------------------------------

confilit -> conflict 打快了，typo

---------------------------------------------------

惭愧，命令行仅 git clone ，其他借助 ide 插件，个人玩乐，一个人的武林

---------------------------------------------------

解决冲突会用 GUI ，其他情况下都是命令行

GUI 能直观的看出冲突，但是其他的 rebase ，stash ，restore 这些还是命令行好用

---------------------------------------------------

linux 服务器上只有命令行，哪来的 gui

---------------------------------------------------

除了 diff ，我基本上全是命令行处理的。

---------------------------------------------------

@m1nm13 对的 git log ，gitextension 里的对应功能叫 git history 叫习惯了，这个东西让我彻底倾向了用工具而不是打命令行，反查 bug 是哪个提交带来的太累了

---------------------------------------------------

我用的 gitui, TUI 类型的，怎么着也比纯命令行强吧。

---------------------------------------------------

完全不用的话就“着相”了，和当初吹捧完全 console 写代码一样。

---------------------------------------------------

一直是命令，difftool 是 nvim ，GUI 用过 Sourcetree 和 JB 某个 IDE 的内置各一个月，看 diff 处理 conflict 挺舒服，其他感觉不如直接写下命令，也不难，也自由

---------------------------------------------------

以前也习惯命令,后面用了几次 idea 的 gui,嗯 真香

---------------------------------------------------

操作，比如 clone/add/commit/revert/checkout/merge 等都是用命令行
查看，比如 log/diff 等用 GUI

---------------------------------------------------

解决冲突用 GUI ，操作都用命令行。

---------------------------------------------------

基本都是命令行，在解决冲突和对比代码更改的时候会用 GUI

---------------------------------------------------

除了太多冲突要解的时候会用 GUI ，其他都直接用命令行，不过有时候确实不如 GUI 看着方便

---------------------------------------------------

用 zsh ，然后上 git 简写命令
比如
GIT Alias
g	git
ga	git add
gaa	git add --all
gapa	git add --patch
gau	git add --update
gav	git add --verbose
gap	git apply
gapt	git apply --3way
gb	git branch
gba	git branch --all

---------------------------------------------------

有谁 git log 也用命令行看 那是真牛逼啊.

---------------------------------------------------

@ea3ba5c0 老哥 git log 怎么看?

---------------------------------------------------

一直命令行，GUI 点着好累

---------------------------------------------------

这玩意不是哪个方便，哪个清楚用哪个？

---------------------------------------------------

@chaleaochexist 
git log --graph --abbrev-commit --decorate --date=relative --format=format:'%C(bold blue)%h%C(reset) - %C(bold green)(%ar)%C(reset) %C(white)%s%C(reset) %C(dim white)- %an%C(reset)%C(bold yellow)%d%C(reset)' --all

---------------------------------------------------

jetbrains 的 three way merge 不要太好用！

---------------------------------------------------

反倒不会用 gui

---------------------------------------------------

@chaleaochexist #66 
git log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cd) %C(bold blue)<%an>%Creset %C(yellow)[%ae]%Creset' --abbrev-commit --date=iso

可以建一个 git alias:
git config --global alias.clog "log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cd) %C(bold blue)<%an>%Creset %C(yellow)[%ae]%Creset' --abbrev-commit --date=iso"
以后就可以直接 git clog

---------------------------------------------------

问，问就是 commit 前从来不检查文件差异，随时 commit 几个 G 文件进去，顺手就是一个 push ，第二天发帖问怎么删提交记录😂

---------------------------------------------------

没必要纠结这个，自己用的那个舒服就哪个啊

---------------------------------------------------

@defunct9 vscode remote

---------------------------------------------------

@chaleaochexist 免配置的可以记我上面那个 a dog🤣

---------------------------------------------------

从来不用 GUI ，不会用，命令行多好用，唯一用到过 GUI 的地方就是看看各个分支的继承关系，那个看图比较方便

---------------------------------------------------

我只用命令，推荐一下我常用的 alias 。


alias grb="git rebase"
alias gaa="git add -A"
alias gap="git add -p"
alias gc="git checkout"
alias gs="git status"
alias gm="git commit"
alias gdc="git diff --cached"
alias grh="git reset HEAD"

gmm() {
    git commit -m  "$1"
}

---------------------------------------------------

alias gl="git log --pretty=format:\"%C(auto)%h %C(magenta)<%ad> %C(green)[%an] %C(blue normal bold)| %Creset%s%C(auto)%d\" --graph --date=short"

上面都在说 git log , 就再推荐一个 alias 。 效果是下面这样的。




* 02bb711 <2023-09-03> [monster] | docs: relase 0.9.1 (HEAD -> main, tag: 0.9.1, origin/main)
* cf663e7 <2023-09-01> [monster] | chore: release 0.9.0
* 1b0aba5 <2023-07-21> [monster] | chore: release 0.8.1 (tag: 0.8.1)
* bdde57c <2023-07-15> [monster] | chore: release 0.8.0 (tag: 0.8.0)
* fbdce73 <2023-07-07> [monster] | feat: release 0.7.3 (tag: 0.7.3)

---------------------------------------------------

@zliea 老哥碉堡了.

---------------------------------------------------

我都不会用 GUI

---------------------------------------------------

@iorilu #40 

diff 和 解决冲突 用 JetBrains 自带界面，其他情况命令行。

merge 应该不需要解决一堆文件的问题吧，你指的是 merge 过程中的冲突？

---------------------------------------------------

这个问法给人一种 GUI 比命令行更好用的假象。GIT 命令行有什么问题吗？

---------------------------------------------------

看不懂为什么有人觉得命令行处理不了一些功能，比如 diff 和处理冲突，pr 等，命令行的优势一个是更清晰的知道处理的流程以及更好的理解一些高级的用法，还有就是可以根据自己或者公司的流程自动化，比如 merge queue 保证合并是线性的，减少冲突。

---------------------------------------------------

为什么需要掌握所有命令，git 只是一个工具

---------------------------------------------------

我不仅用 gui ，还同时用三个 gui ，一个 sourcetree ，一个 ide 自带 git ，一个公司内部的 git gui

---------------------------------------------------

Git 当然用命令行……用起来没什么问题啊，那些工具不是最后也只是调用命令行。
唯一不太好用的是 git log ，也有 tig 这种软件，看日志也没什么问题……

---------------------------------------------------

看了回复，感觉 OP 没什么命令行的经验，对于用命令行的效率有所怀疑。

---------------------------------------------------

完全使用估计谈不上。估计没有人这么极客吧。

大概就是，git ，git.plugin.zsh 里面配置的别名 ，lazygit ，idea

这既是个工具，没有啥意思。又不是自己开发的。

---------------------------------------------------

@troywinter GUI 下层还是会调用命令行，但是 GUI 会把常用的复杂操作自动化。你可以把 GUI 等效看做一个 CLI 的半自动化脚本。

我举个例子，把一个分支下的提交 rebase 到另一个 tag 下并做 3-way 冲突处理。这个过程不管用 GUI 还是用 CLI 都必须手动做，完全不会享受到命令行批量处理的好处，而 GUI 下只要点点鼠标就可以从不同的分支里选出不同的代码行。用 CLI 你最后不还要打开 VIM 这个图形界面工具。

所以光这个操作就省下 GUI 用户大量的时间，而这个操作又正好是大流量开源软件和 modder 必须要用到的。

还有一个操作，是局部 stage ，可以把一个修改过的文件中的少部分行 stage ，剩下的留在 working dir 里，又或者是像做 3-way 合并一样选择性地把一些行或者一些字 revert 。你用命令行当然也可以这么做，先把文件复制出来备份，然后把部分行改回去，然后 add 提交，再把备份文件移动回来。

-----

当人们对这些操作没有需求的时候，总会觉得命令行效率高。等没法满足的时候，再去写一下半自动化脚本，重新实现一些 GUI 已经实现的功能，然后再把 GUI 批判一番。就，很没有意思的争论。类似的争论我好几年前就在隔壁 ruby-china 论坛参与过了，一堆坚持不用 GUI 但照样用着命令行版 GUI 的人在跟我争。真当字符画出来的窗口不算窗口啊。

---------------------------------------------------

只有解决冲突时会用 vscode 来编辑代码，其他全用 cli

---------------------------------------------------

@zliea 老哥碉堡了.

---------------------------------------------------

我都不会用 GUI

---------------------------------------------------

@iorilu #40 

diff 和 解决冲突 用 JetBrains 自带界面，其他情况命令行。

merge 应该不需要解决一堆文件的问题吧，你指的是 merge 过程中的冲突？

---------------------------------------------------

这个问法给人一种 GUI 比命令行更好用的假象。GIT 命令行有什么问题吗？

---------------------------------------------------

看不懂为什么有人觉得命令行处理不了一些功能，比如 diff 和处理冲突，pr 等，命令行的优势一个是更清晰的知道处理的流程以及更好的理解一些高级的用法，还有就是可以根据自己或者公司的流程自动化，比如 merge queue 保证合并是线性的，减少冲突。

---------------------------------------------------

为什么需要掌握所有命令，git 只是一个工具

---------------------------------------------------

我不仅用 gui ，还同时用三个 gui ，一个 sourcetree ，一个 ide 自带 git ，一个公司内部的 git gui

---------------------------------------------------

Git 当然用命令行……用起来没什么问题啊，那些工具不是最后也只是调用命令行。
唯一不太好用的是 git log ，也有 tig 这种软件，看日志也没什么问题……

---------------------------------------------------

看了回复，感觉 OP 没什么命令行的经验，对于用命令行的效率有所怀疑。

---------------------------------------------------

完全使用估计谈不上。估计没有人这么极客吧。

大概就是，git ，git.plugin.zsh 里面配置的别名 ，lazygit ，idea

这既是个工具，没有啥意思。又不是自己开发的。

---------------------------------------------------

@troywinter GUI 下层还是会调用命令行，但是 GUI 会把常用的复杂操作自动化。你可以把 GUI 等效看做一个 CLI 的半自动化脚本。

我举个例子，把一个分支下的提交 rebase 到另一个 tag 下并做 3-way 冲突处理。这个过程不管用 GUI 还是用 CLI 都必须手动做，完全不会享受到命令行批量处理的好处，而 GUI 下只要点点鼠标就可以从不同的分支里选出不同的代码行。用 CLI 你最后不还要打开 VIM 这个图形界面工具。

所以光这个操作就省下 GUI 用户大量的时间，而这个操作又正好是大流量开源软件和 modder 必须要用到的。

还有一个操作，是局部 stage ，可以把一个修改过的文件中的少部分行 stage ，剩下的留在 working dir 里，又或者是像做 3-way 合并一样选择性地把一些行或者一些字 revert 。你用命令行当然也可以这么做，先把文件复制出来备份，然后把部分行改回去，然后 add 提交，再把备份文件移动回来。

-----

当人们对这些操作没有需求的时候，总会觉得命令行效率高。等没法满足的时候，再去写一下半自动化脚本，重新实现一些 GUI 已经实现的功能，然后再把 GUI 批判一番。就，很没有意思的争论。类似的争论我好几年前就在隔壁 ruby-china 论坛参与过了，一堆坚持不用 GUI 但照样用着命令行版 GUI 的人在跟我争。真当字符画出来的窗口不算窗口啊。

---------------------------------------------------

只有解决冲突时会用 vscode 来编辑代码，其他全用 cli

---------------------------------------------------

@zliea 老哥碉堡了.

---------------------------------------------------

我都不会用 GUI

---------------------------------------------------

@iorilu #40 

diff 和 解决冲突 用 JetBrains 自带界面，其他情况命令行。

merge 应该不需要解决一堆文件的问题吧，你指的是 merge 过程中的冲突？

---------------------------------------------------

这个问法给人一种 GUI 比命令行更好用的假象。GIT 命令行有什么问题吗？

---------------------------------------------------

看不懂为什么有人觉得命令行处理不了一些功能，比如 diff 和处理冲突，pr 等，命令行的优势一个是更清晰的知道处理的流程以及更好的理解一些高级的用法，还有就是可以根据自己或者公司的流程自动化，比如 merge queue 保证合并是线性的，减少冲突。

---------------------------------------------------

为什么需要掌握所有命令，git 只是一个工具

---------------------------------------------------

我不仅用 gui ，还同时用三个 gui ，一个 sourcetree ，一个 ide 自带 git ，一个公司内部的 git gui

---------------------------------------------------

Git 当然用命令行……用起来没什么问题啊，那些工具不是最后也只是调用命令行。
唯一不太好用的是 git log ，也有 tig 这种软件，看日志也没什么问题……

---------------------------------------------------

看了回复，感觉 OP 没什么命令行的经验，对于用命令行的效率有所怀疑。

---------------------------------------------------

完全使用估计谈不上。估计没有人这么极客吧。

大概就是，git ，git.plugin.zsh 里面配置的别名 ，lazygit ，idea

这既是个工具，没有啥意思。又不是自己开发的。

---------------------------------------------------

@troywinter GUI 下层还是会调用命令行，但是 GUI 会把常用的复杂操作自动化。你可以把 GUI 等效看做一个 CLI 的半自动化脚本。

我举个例子，把一个分支下的提交 rebase 到另一个 tag 下并做 3-way 冲突处理。这个过程不管用 GUI 还是用 CLI 都必须手动做，完全不会享受到命令行批量处理的好处，而 GUI 下只要点点鼠标就可以从不同的分支里选出不同的代码行。用 CLI 你最后不还要打开 VIM 这个图形界面工具。

所以光这个操作就省下 GUI 用户大量的时间，而这个操作又正好是大流量开源软件和 modder 必须要用到的。

还有一个操作，是局部 stage ，可以把一个修改过的文件中的少部分行 stage ，剩下的留在 working dir 里，又或者是像做 3-way 合并一样选择性地把一些行或者一些字 revert 。你用命令行当然也可以这么做，先把文件复制出来备份，然后把部分行改回去，然后 add 提交，再把备份文件移动回来。

-----

当人们对这些操作没有需求的时候，总会觉得命令行效率高。等没法满足的时候，再去写一下半自动化脚本，重新实现一些 GUI 已经实现的功能，然后再把 GUI 批判一番。就，很没有意思的争论。类似的争论我好几年前就在隔壁 ruby-china 论坛参与过了，一堆坚持不用 GUI 但照样用着命令行版 GUI 的人在跟我争。真当字符画出来的窗口不算窗口啊。

---------------------------------------------------

只有解决冲突时会用 vscode 来编辑代码，其他全用 cli

---------------------------------------------------

@zliea 老哥碉堡了.

---------------------------------------------------

我都不会用 GUI

---------------------------------------------------

@iorilu #40 

diff 和 解决冲突 用 JetBrains 自带界面，其他情况命令行。

merge 应该不需要解决一堆文件的问题吧，你指的是 merge 过程中的冲突？

---------------------------------------------------

这个问法给人一种 GUI 比命令行更好用的假象。GIT 命令行有什么问题吗？

---------------------------------------------------

看不懂为什么有人觉得命令行处理不了一些功能，比如 diff 和处理冲突，pr 等，命令行的优势一个是更清晰的知道处理的流程以及更好的理解一些高级的用法，还有就是可以根据自己或者公司的流程自动化，比如 merge queue 保证合并是线性的，减少冲突。

---------------------------------------------------

为什么需要掌握所有命令，git 只是一个工具

---------------------------------------------------

我不仅用 gui ，还同时用三个 gui ，一个 sourcetree ，一个 ide 自带 git ，一个公司内部的 git gui

---------------------------------------------------

Git 当然用命令行……用起来没什么问题啊，那些工具不是最后也只是调用命令行。
唯一不太好用的是 git log ，也有 tig 这种软件，看日志也没什么问题……

---------------------------------------------------

看了回复，感觉 OP 没什么命令行的经验，对于用命令行的效率有所怀疑。

---------------------------------------------------

完全使用估计谈不上。估计没有人这么极客吧。

大概就是，git ，git.plugin.zsh 里面配置的别名 ，lazygit ，idea

这既是个工具，没有啥意思。又不是自己开发的。

---------------------------------------------------

@troywinter GUI 下层还是会调用命令行，但是 GUI 会把常用的复杂操作自动化。你可以把 GUI 等效看做一个 CLI 的半自动化脚本。

我举个例子，把一个分支下的提交 rebase 到另一个 tag 下并做 3-way 冲突处理。这个过程不管用 GUI 还是用 CLI 都必须手动做，完全不会享受到命令行批量处理的好处，而 GUI 下只要点点鼠标就可以从不同的分支里选出不同的代码行。用 CLI 你最后不还要打开 VIM 这个图形界面工具。

所以光这个操作就省下 GUI 用户大量的时间，而这个操作又正好是大流量开源软件和 modder 必须要用到的。

还有一个操作，是局部 stage ，可以把一个修改过的文件中的少部分行 stage ，剩下的留在 working dir 里，又或者是像做 3-way 合并一样选择性地把一些行或者一些字 revert 。你用命令行当然也可以这么做，先把文件复制出来备份，然后把部分行改回去，然后 add 提交，再把备份文件移动回来。

-----

当人们对这些操作没有需求的时候，总会觉得命令行效率高。等没法满足的时候，再去写一下半自动化脚本，重新实现一些 GUI 已经实现的功能，然后再把 GUI 批判一番。就，很没有意思的争论。类似的争论我好几年前就在隔壁 ruby-china 论坛参与过了，一堆坚持不用 GUI 但照样用着命令行版 GUI 的人在跟我争。真当字符画出来的窗口不算窗口啊。

---------------------------------------------------

只有解决冲突时会用 vscode 来编辑代码，其他全用 cli

---------------------------------------------------

@zliea 老哥碉堡了.

---------------------------------------------------

我都不会用 GUI

---------------------------------------------------

@iorilu #40 

diff 和 解决冲突 用 JetBrains 自带界面，其他情况命令行。

merge 应该不需要解决一堆文件的问题吧，你指的是 merge 过程中的冲突？

---------------------------------------------------

这个问法给人一种 GUI 比命令行更好用的假象。GIT 命令行有什么问题吗？

---------------------------------------------------

看不懂为什么有人觉得命令行处理不了一些功能，比如 diff 和处理冲突，pr 等，命令行的优势一个是更清晰的知道处理的流程以及更好的理解一些高级的用法，还有就是可以根据自己或者公司的流程自动化，比如 merge queue 保证合并是线性的，减少冲突。

---------------------------------------------------

为什么需要掌握所有命令，git 只是一个工具

---------------------------------------------------

我不仅用 gui ，还同时用三个 gui ，一个 sourcetree ，一个 ide 自带 git ，一个公司内部的 git gui

---------------------------------------------------

Git 当然用命令行……用起来没什么问题啊，那些工具不是最后也只是调用命令行。
唯一不太好用的是 git log ，也有 tig 这种软件，看日志也没什么问题……

---------------------------------------------------

看了回复，感觉 OP 没什么命令行的经验，对于用命令行的效率有所怀疑。

---------------------------------------------------

完全使用估计谈不上。估计没有人这么极客吧。

大概就是，git ，git.plugin.zsh 里面配置的别名 ，lazygit ，idea

这既是个工具，没有啥意思。又不是自己开发的。

---------------------------------------------------

@troywinter GUI 下层还是会调用命令行，但是 GUI 会把常用的复杂操作自动化。你可以把 GUI 等效看做一个 CLI 的半自动化脚本。

我举个例子，把一个分支下的提交 rebase 到另一个 tag 下并做 3-way 冲突处理。这个过程不管用 GUI 还是用 CLI 都必须手动做，完全不会享受到命令行批量处理的好处，而 GUI 下只要点点鼠标就可以从不同的分支里选出不同的代码行。用 CLI 你最后不还要打开 VIM 这个图形界面工具。

所以光这个操作就省下 GUI 用户大量的时间，而这个操作又正好是大流量开源软件和 modder 必须要用到的。

还有一个操作，是局部 stage ，可以把一个修改过的文件中的少部分行 stage ，剩下的留在 working dir 里，又或者是像做 3-way 合并一样选择性地把一些行或者一些字 revert 。你用命令行当然也可以这么做，先把文件复制出来备份，然后把部分行改回去，然后 add 提交，再把备份文件移动回来。

-----

当人们对这些操作没有需求的时候，总会觉得命令行效率高。等没法满足的时候，再去写一下半自动化脚本，重新实现一些 GUI 已经实现的功能，然后再把 GUI 批判一番。就，很没有意思的争论。类似的争论我好几年前就在隔壁 ruby-china 论坛参与过了，一堆坚持不用 GUI 但照样用着命令行版 GUI 的人在跟我争。真当字符画出来的窗口不算窗口啊。

---------------------------------------------------

只有解决冲突时会用 vscode 来编辑代码，其他全用 cli

---------------------------------------------------

@zliea 老哥碉堡了.

---------------------------------------------------

我都不会用 GUI

---------------------------------------------------

@iorilu #40 

diff 和 解决冲突 用 JetBrains 自带界面，其他情况命令行。

merge 应该不需要解决一堆文件的问题吧，你指的是 merge 过程中的冲突？

---------------------------------------------------

这个问法给人一种 GUI 比命令行更好用的假象。GIT 命令行有什么问题吗？

---------------------------------------------------

看不懂为什么有人觉得命令行处理不了一些功能，比如 diff 和处理冲突，pr 等，命令行的优势一个是更清晰的知道处理的流程以及更好的理解一些高级的用法，还有就是可以根据自己或者公司的流程自动化，比如 merge queue 保证合并是线性的，减少冲突。

---------------------------------------------------

为什么需要掌握所有命令，git 只是一个工具

---------------------------------------------------

我不仅用 gui ，还同时用三个 gui ，一个 sourcetree ，一个 ide 自带 git ，一个公司内部的 git gui

---------------------------------------------------

Git 当然用命令行……用起来没什么问题啊，那些工具不是最后也只是调用命令行。
唯一不太好用的是 git log ，也有 tig 这种软件，看日志也没什么问题……

---------------------------------------------------

看了回复，感觉 OP 没什么命令行的经验，对于用命令行的效率有所怀疑。

---------------------------------------------------

完全使用估计谈不上。估计没有人这么极客吧。

大概就是，git ，git.plugin.zsh 里面配置的别名 ，lazygit ，idea

这既是个工具，没有啥意思。又不是自己开发的。

---------------------------------------------------

@troywinter GUI 下层还是会调用命令行，但是 GUI 会把常用的复杂操作自动化。你可以把 GUI 等效看做一个 CLI 的半自动化脚本。

我举个例子，把一个分支下的提交 rebase 到另一个 tag 下并做 3-way 冲突处理。这个过程不管用 GUI 还是用 CLI 都必须手动做，完全不会享受到命令行批量处理的好处，而 GUI 下只要点点鼠标就可以从不同的分支里选出不同的代码行。用 CLI 你最后不还要打开 VIM 这个图形界面工具。

所以光这个操作就省下 GUI 用户大量的时间，而这个操作又正好是大流量开源软件和 modder 必须要用到的。

还有一个操作，是局部 stage ，可以把一个修改过的文件中的少部分行 stage ，剩下的留在 working dir 里，又或者是像做 3-way 合并一样选择性地把一些行或者一些字 revert 。你用命令行当然也可以这么做，先把文件复制出来备份，然后把部分行改回去，然后 add 提交，再把备份文件移动回来。

-----

当人们对这些操作没有需求的时候，总会觉得命令行效率高。等没法满足的时候，再去写一下半自动化脚本，重新实现一些 GUI 已经实现的功能，然后再把 GUI 批判一番。就，很没有意思的争论。类似的争论我好几年前就在隔壁 ruby-china 论坛参与过了，一堆坚持不用 GUI 但照样用着命令行版 GUI 的人在跟我争。真当字符画出来的窗口不算窗口啊。

---------------------------------------------------

只有解决冲突时会用 vscode 来编辑代码，其他全用 cli

