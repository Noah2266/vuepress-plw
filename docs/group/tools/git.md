---
created: 20230306-183904-7270 (UTC +08:00)
tags: [git常见]
source: https://blog.csdn.net/u012932876/article/details/117716334
author: 成就一亿技术人!
---

# Git

---

## Git版本控制

### 开发难题

在实际开发中我们会遇到一些问题，电脑蓝屏，代码丢了，懊悔不？磁盘坏了，文件没了，懊悔不？时间长了，文件找不到了，懊悔不？手欠，之前代码运行好好的，非要去优化下，结果还不如以前，信心满满，之前代码没保存，懊悔不？怎么解决呢？版本控制就可以解决这些难题了。

版本控制（Version Control System），它功能强大，不仅能备份你的文件，还可以实现很多：

-   记录文件的所有历史变化
-   错误恢复到某个历史版本
-   多人协作开发编辑同一个文件
-   实现功能差异版本（分支），如：mysql、mariadb、percona三个分支

### 主流的版本控制产品

| **名称** | **模型** | **并发**\*\* 模式 \*\* | \*\* 历史 \*\***模式** | **变更**\*\* 范围 \*\* | \*\* 网络协议 \*\* | \*\* 原子 \*\***提交性** |
| --- | --- | --- | --- | --- | --- | --- |
| **CVS** | Client-server | Merge | Changeset | File | Pserver,ssh | No |
| **SVN** | Client-server | 3-way merge, recursive merge, octopus merge | Changeset and Snapshot | Tree | custom (svn), custom (svn) over ssh, HTTP and SSL (usingWebDAV) | Yes |
| **Git** | Distributed | Merge or lock | Snapshot | Tree | custom, custom over ssh, rsync, HTTP/HTTPS, email, bundles | Yes |

简而言之，各有优缺点，git要配合github远程仓库，可以避免分布式损坏。显然最大的不同在于git是分布式的。svn有权限控制，避免全被clone克隆走。git适合纯代码，svn适合综合性文档管理，git+svn结合起来，完美。

### 介绍

![[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-CZ6OzODv-1623157728769)(RackMultipart20210608-4-134iydv_html_e33976d05a3cbd51.png)]](https://img-blog.csdnimg.cn/20210608210928168.png)

Linus在1991年创建了开源的Linux，从此，Linux系统不断发展，已经成为最大的服务器系统软件了。Linus虽然创建了Linux的核心，但Linux的壮大是靠全世界热心的志愿者参与的，这么多人在世界各地为Linux编写代码，那Linux的代码是如何管理的呢？

事实是，在2002年以前，世界各地的志愿者把源代码文件通过diff的方式发给Linus，然后由Linus本人通过手工方式合并代码！你也许会想，为什么Linus不把Linux代码放到版本控制系统里呢？不是有CVS、SVN这些免费的版本控制系统吗？因为Linus坚定地反对CVS和SVN，这些集中式的版本控制系统不但速度慢，而且必须联网才能使用。有一些商用的版本控制系统，虽然比CVS、SVN好用，但那是付费的，和Linux的开源精神不符。不过，到了2002年，Linux系统已经发展了十年了，代码库之大让Linus很难继续通过手工方式管理了，社区的弟兄们也对这种方式表达了强烈不满，于是Linus选择了一个商业的版本控制系统BitKeeper，BitKeeper的东家BitMover公司出于人道主义精神，授权Linux社区免费使用这个版本控制系统。

安定团结的大好局面在2005年就被打破了，原因是Linux社区牛人聚集，不免沾染了一些梁山好汉的江湖习气。开发Samba的Andrew试图破解BitKeeper的协议（这么干的其实也不只他一个），被BitMover公司发现了（监控工作做得不错！），于是BitMover公司怒了，要收回Linux社区的免费使用权。Linus可以向BitMover公司道个歉，保证以后严格管教弟兄们，嗯，这是不可能的。实际情况是这样的：Linus花了两周时间自己用C写了一个分布式版本控制系统，这就是Git！一个月之内，Linux系统的源码已经由Git管理了！牛是怎么定义的呢？吃瓜群众可以体会一下。

Git迅速成为最流行的分布式版本控制系统，尤其是2008年，GitHub网站上线了，它为开源项目免费提供Git存储，无数开源项目开始迁移至GitHub，包括jQuery，PHP，Ruby等等。历史就是这么偶然，如果不是当年BitMover公司威胁Linux社区，可能现在我们就没有免费而超级好用的Git了。

### 组成结构图

![[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-MehgNqgG-1623157728773)(RackMultipart20210608-4-134iydv_html_718425c3858133d0.png)]](https://img-blog.csdnimg.cn/20210608210937756.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3UwMTI5MzI4NzY=,size_16,color_FFFFFF,t_70)

-   工作空间：用来保存项目的元数据和对象数据库的地方。 这是 Git 中最重要的部分，从其它计算机克隆仓库时，拷贝的就是这里的数据。
-   本地索引：保存了下次将提交的文件列表信息，一般在 Git 仓库目录中。有时候也被称作"索引"，不过一般说法还是叫暂存区域。
-   本地仓库，之所以说git 快，大部分提交都是对本地仓库而言的，不依赖网络，最后一次会推送的到远程仓库。
-   远程仓库：可以看做是github，它是一个远程仓库，它提供web服务供大家方便下载、查看、提交、存储。

### 命令速查

![[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-aGMsEjFt-1623157728776)(RackMultipart20210608-4-134iydv_html_7a185039891c1e34.jpg)]](https://img-blog.csdnimg.cn/20210608210946918.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3UwMTI5MzI4NzY=,size_16,color_FFFFFF,t_70)

### 常用命令

![[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-BBgJ5B2v-1623157728787)(RackMultipart20210608-4-134iydv_html_c278aa3145c1d16.png)]](https://img-blog.csdnimg.cn/20210608210955288.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3UwMTI5MzI4NzY=,size_16,color_FFFFFF,t_70)

-   克隆仓库（第一次时） clone 克隆
-   对工作目录中文件新增、修改、删除操作
-   暂存文件，将文件的快照放入暂存区 add 新增
-   把暂存区的内容提交到本地仓库 commit 提交
-   把本地仓库的内容提交到远程仓库 push 推送
-   从远程仓库下载最新内容 pull 拉取

## 码云配置环境

### 注册账号

![[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-wOYTp28P-1623157728790)(RackMultipart20210608-4-134iydv_html_ee3df225ecfa14a5.png)]](https://img-blog.csdnimg.cn/20210608211002431.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3UwMTI5MzI4NzY=,size_16,color_FFFFFF,t_70)

每个人必须有自己的账号，先官网注册账号：

[https://gitee.com/](https://gitee.com/)

### 登录

![[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-VnYsOJoz-1623157728792)(RackMultipart20210608-4-134iydv_html_5630bfa6cae09d3a.png)]](https://img-blog.csdnimg.cn/20210608211012842.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3UwMTI5MzI4NzY=,size_16,color_FFFFFF,t_70)

### 安装GIT

Git-2.27.0-64-bit，一路next，安装完桌面右键菜单有下面两项，安装完成。选择Git Bash，进入git客户端。

Windows开始菜单：

![[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-SBXGzXKy-1623157728793)(RackMultipart20210608-4-134iydv_html_4ae4484baff4f1b.png)]](https://img-blog.csdnimg.cn/20210608211020204.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3UwMTI5MzI4NzY=,size_16,color_FFFFFF,t_70)

![[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-HKqLskdq-1623157728794)(RackMultipart20210608-4-134iydv_html_4d801917077277a1.png)]](https://img-blog.csdnimg.cn/20210608211025566.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3UwMTI5MzI4NzY=,size_16,color_FFFFFF,t_70)

### 设置字体

![[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-92XnFcD5-1623157728796)(RackMultipart20210608-4-134iydv_html_1ef4a9ee74a861f2.png)]](https://img-blog.csdnimg.cn/20210608211032900.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3UwMTI5MzI4NzY=,size_16,color_FFFFFF,t_70)

![[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-5moFLTTd-1623157728797)(RackMultipart20210608-4-134iydv_html_8ed65822656131e5.png)]](https://img-blog.csdnimg.cn/20210608211037654.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3UwMTI5MzI4NzY=,size_16,color_FFFFFF,t_70)

### 查询git

![[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-tjnE2P7R-1623157728799)(RackMultipart20210608-4-134iydv_html_48b3579aef88fd4d.png)]](https://img-blog.csdnimg.cn/2021060821104430.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3UwMTI5MzI4NzY=,size_16,color_FFFFFF,t_70)

## 码云创建仓库

### 创建远程仓库(在码云官网上)

![[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-0SRL9yPY-1623157728803)(RackMultipart20210608-4-134iydv_html_f2a881bc170fa9e4.png)]](https://img-blog.csdnimg.cn/20210608211102694.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3UwMTI5MzI4NzY=,size_16,color_FFFFFF,t_70)

![[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-1gg9jRd2-1623157728805)(RackMultipart20210608-4-134iydv_html_b0844519a8530850.png)] [外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-rWgE9Vyn-1623157728806)(RackMultipart20210608-4-134iydv_html_48bbed748fd9ffd2.png)]](https://img-blog.csdnimg.cn/20210608211110558.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3UwMTI5MzI4NzY=,size_16,color_FFFFFF,t_70)  
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210608211117300.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3UwMTI5MzI4NzY=,size_16,color_FFFFFF,t_70)

### 创建本地仓库(在你的磁盘中)

创建测试文件, 并在本地仓库执行以下命令:

```
git config --global user.name "cgblpx" #配置注册时的用户名
git config --global user.email "2250432165@qq.com"  #配置注册时的邮箱
git config --list #检查配置信息
mkdir j2ee
cd j2ee
git init#初始化
在本地仓库中,创建文件1.txt
git add 1.txt#新增文件到git中处理
git commit -m "first commit"#提交，设置说明信息
git remote add origin https://gitee.com/nutony/j2ee.git#远程仓库
git push -u origin master #把本地仓库的资源 提交给Git服务器
```

第一次执行会弹出下面的用户名、密码框，填写码云的账号信息就可以

![[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-Wnj6aRSh-1623157728807)(RackMultipart20210608-4-134iydv_html_9b9a09017f20e7d9.png)]](https://img-blog.csdnimg.cn/20210608211135225.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3UwMTI5MzI4NzY=,size_16,color_FFFFFF,t_70)

刷新页面，如果创建成功，Git上界面发生变化如下样子，这样环境就完成了

![[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-vpiuq4ZW-1623157728808)(RackMultipart20210608-4-134iydv_html_1f03d41be6f2bf39.png)]](https://img-blog.csdnimg.cn/20210608211145686.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3UwMTI5MzI4NzY=,size_16,color_FFFFFF,t_70)

## 每日任务

每日早上开始工作前拉取最新团队其他人提交的内容，每日下班前提交可用的内容

### 新文件

创建项目目录，创建新文件，或者复制已有文件或者复制已有目录：

![[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-IShAhPCv-1623157728810)(RackMultipart20210608-4-134iydv_html_62064adbf9328ec1.png)]](https://img-blog.csdnimg.cn/20210608211159996.png)

### 推送

把本地文件上传到远程仓库中：

```
$ git add .#添加当前目录下文件
$ git commit -m "j2ee part"#提交，设置备注
$ git push -u origin master#推送到远程仓库

```

![[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-Elz0HOoG-1623157728811)(RackMultipart20210608-4-134iydv_html_b701325b7a63de7d.png)]](https://img-blog.csdnimg.cn/20210608211216778.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3UwMTI5MzI4NzY=,size_16,color_FFFFFF,t_70)

### 拉取/下载

把远程仓库中的内容下载到本地：

```

$ git pull#从服务器拉取最新内容

```

![[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-4QBma7Ls-1623157728813)(RackMultipart20210608-4-134iydv_html_3843aa39ae42cc03.png)]](https://img-blog.csdnimg.cn/20210608211232631.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3UwMTI5MzI4NzY=,size_16,color_FFFFFF,t_70)

## 常见错误

### Authentication failed for

![[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-ELddDPlA-1623157728816)(RackMultipart20210608-4-134iydv_html_feb27f7e4a2510ae.png)]](https://img-blog.csdnimg.cn/20210608211240464.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3UwMTI5MzI4NzY=,size_16,color_FFFFFF,t_70)

任何路径下输入都可以：

git config --system --unset credential.helper

然后提交操作时，会出现询问框，重新输入用户名提示

### failed to push some refs to…

![[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-JJuJ09xK-1623157728817)(RackMultipart20210608-4-134iydv_html_ff46da16045ae4c6.png)]](https://img-blog.csdnimg.cn/20210608211250769.png)

这是是因为readme.md 没有存在在本地git中

git pull --rebase origin master #

$ git push -u origin master #推送到远程仓库

–rebase用在合并代码的时候其作用就是在一个随机创建的分支上处理冲突，避免了直接污染原来的分区。

### fatal: remote origin already exists

1、先输入$ git remote rm origin(删除关联的origin的远程库)

2、再输入重新执行 git push -u origin master

3、如果输入第1步 还是报错的话，error: Could not remove config section 'remote.origin'. 我们需要修改gitconfig文件的内容

4、找到你的github的安装路径，我的是C:\\Users\\ASUS\\AppData\\Local\\GitHub\\PortableGit\_ca477551eeb4aea0e4ae9fcd3358bd96720bb5c8\\etc

5、找到一个名为gitconfig的文件，打开它把里面的\[remote "origin"\]那一行删掉就好了！

### SSL certificate problem: unable to get local issuer certificate

```
--执行命令解决: git config --global http.sslVerify false
--重新push: git push -u origin master
```

### 邮箱是私有的报错

![在这里插入图片描述](https://img-blog.csdnimg.cn/ab83147e504e4ec3b5bbf5ef8838ece3.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAY2dibHB4,size_20,color_FFFFFF,t_70,g_se,x_16)  
需要在码云上,把邮箱改成公开的才行  
![在这里插入图片描述](https://img-blog.csdnimg.cn/813e242c6ce44316a5c0258fdba49b4a.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAY2dibHB4,size_20,color_FFFFFF,t_70,g_se,x_16)

## IDEA整合Git

### 在Gitee创建新的仓库

在网页中创建仓库名称:cgb2109-3

### 进入workspace

进入workspace,再进入你的项目目录,直接执行clone命令:

```
git clone https://gitee.com/cgblpx/cgb2109-3.git
也许:
需用执行其他的账号密码等命令
```

### 打开IDEA的工程中,你会发现直接就能提交或者拉取代码了

![在这里插入图片描述](https://img-blog.csdnimg.cn/a6f8cab151f8498a911f0c4fc2f9ab8a.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAY2dibHB455qu55qu6Zye,size_20,color_FFFFFF,t_70,g_se,x_16)
