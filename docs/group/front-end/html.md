---
created: 20230306-093938-9380 (UTC +08:00)
tags: [html笔记]
---

# HTML

---
## 认识WEB

\*\*「网页」\*\*主要是由文字、图像和超链接等元素构成，当然除了这些元素，网页中还可以包括音频、视频以及Flash等。

\*\*「浏览器」\*\*是网页显示、运行的平台。

**「浏览器内核」**(排版引擎、解释引擎、渲染引擎)

> 负责读取网页内容，整理讯息，计算网页的显示方式并显示页面。

| 浏览器 | 内核 | 备注 |
| --- | --- | --- |
| IE | Trident | IE、猎豹安全、360极速浏览器、百度浏览器 |
| firefox | Gecko | 可惜这几年已经没落了，打开速度慢、升级频繁、猪一样的队友flash、神一样的对手chrome。 |
| Safari | webkit | 现在很多人错误地把 webkit 叫做 chrome内核（即使 chrome内核已经是 blink 了）。苹果感觉像被别人抢了媳妇，都哭晕在厕所里面了。 |
| chrome | Chromium/Blink | 在 Chromium 项目中研发 Blink 渲染引擎（即浏览器核心），内置于 Chrome 浏览器之中。Blink 其实是 WebKit 的分支。大部分国产浏览器最新版都采用Blink内核。二次开发 |
| Opera | blink | 现在跟随chrome用blink内核。 |

### Web标准

\*\*「构成」\*\*👉 **结构标准，表现标准和行为标准**

-   结构标准用于对网页元素进行整理和分类(HTML)
-   表现标准用于设置网页元素的版式、颜色、大小等外观属性(CSS)
-   行为标准用于对网页模型的定义及交互的编写(JavaScript)

\*\*「Web标准的优点」\*\*👇

-   易于维护：只需更改CSS文件，就可以改变整站的样式
-   页面响应快：HTML文档体积变小，响应时间短
-   可访问性：语义化的HTML（结构和表现相分离的HTML）编写的网页文件，更容易被屏幕阅读器识别
-   设备兼容性：不同的样式表可以让网页在不同的设备上呈现不同的样式
-   搜索引擎：语义化的HTML能更容易被搜索引擎解析，提升排名

## HTML初识

### HTML初识

**「HTML」**(Hyper Text Markup Language): 超文本标记语言

**「所谓超文本，有2层含义：」**

-   因为它可以加入图片、声音、动画、多媒体等内容（超越文本限制 ）
-   不仅如此，它还可以从一个文件跳转到另一个文件，与世界各地主机的文件连接（超级链接文本）。

**「HTML骨架格式」**

```
<!-- 页面中最大的标签 根标签 -->
<html>
    <!-- 头部标签 -->
    <head>     
        <!-- 标题标签 -->
        <title></title> 
    </head>
    <!-- 文档的主体 -->
    <body>
    </body>
</html>
```

**「团队约定大小写」**

-   HTML标签名、类名、标签属性和大部分属性值统一用小写

**「HTML元素标签分类」**

-   常规元素(双标签)
-   空元素(单标签)

```
  常规元素(双标签)
  <标签名> 内容 </标签名>   比如<body>我是文字</body>

  空元素(单标签)
  <标签名 />  比如 <br />或<br>
```

**「HTML标签关系」**

-   嵌套关系父子级包含关系
    
-   并列关系兄弟级并列关系
    
-   -   如果两个标签之间的关系是嵌套关系，子元素最好缩进一个tab键的身位（一个tab是4个空格）。如果是并列关系，最好上下对齐。

### 文档类型< !DOCTYPE >

\*\*「文档类型」\*\*用来说明你用的XHTML或者HTML是什么版本。< !DOCTYPE html>告诉浏览器按照HTML5标准解析页面。

### 页面语言lang

lang指定该html标签内容所用的语言

```
  <html lang="en">  
  en 定义语言为英语 zh-CN定义语言为中文
```

**「lang的作用」**

-   根据根据lang属性来设定不同语言的css样式，或者字体
-   告诉搜索引擎做精确的识别
-   让语法检查程序做语言识别
-   帮助翻译工具做识别
-   帮助网页阅读程序做识别

### 字符集

**「字符集」**(Character set)是多个字符的集合,计算机要准确的处理各种字符集文字，需要进行字符编码，以便计算机能够识别和存储各种文字。

-   UTF-8是目前最常用的字符集编码方式
-   让 html 文件是以 UTF-8 编码保存的， 浏览器根据编码去解码对应的html内容。

```
 <meta charset="UTF-8" />
```

**「meta viewport的用法」**  
通常viewport是指视窗、视口。浏览器上(也可能是一个app中的webview)用来显示网页的那部分区域。在移动端和pc端视口是不同的，pc端的视口是浏览器窗口区域，而在移动端有三个不同的视口概念：布局视口、视觉视口、理想视口

meta有两个属性name 和 http-equiv

**name属性的取值**

-   keywords(关键字) 告诉搜索引擎，该网页的关键字
-   description(网站内容描述) 用于告诉搜索引擎，你网站的主要内容。
-   viewport(移动端的窗口)
-   robots(定义搜索引擎爬虫的索引方式) robots用来告诉爬虫哪些页面需要索引，哪些页面不需要索引
-   author(作者)
-   generator(网页制作软件）
-   copyright(版权)

**http-equiv有以下参数**

http-equiv相当于http的文件头作用，它可以向浏览器传回一些有用的信息，以帮助正确和精确地显示网页内容

-   content-Type 设定网页字符集(Html4用法，不推荐)
-   Expires(期限) ,可以用于设定网页的到期时间。一旦网页过期，必须到服务器上重新传输。
-   Pragma(cache模式),是用于设定禁止浏览器从本地机的缓存中调阅页面内容，设定后一旦离开网页就无法从Cache中再调出
-   Refresh(刷新),自动刷新并指向新页面。
-   cache-control（请求和响应遵循的缓存机制）

```
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### HTML标签的语义化

-   方便代码的阅读和维护，样式丢失的时候能让页面呈现清晰的结构。
-   有利于SEO，搜索引擎根据标签来确定上下文和各个关键字的权重。
-   方便其他设备解析，如盲人阅读器根据语义渲染网页

**「拓展」** 标签：规定页面上所有链接的默认 URL 和设置整体链接的打开状态

```
<head>
    <base href="http://www.baidu.com" target="_blank">
    <base target="_self">
</head>
<body>
    <a href="">测试</a> 跳转到 百度
</body>
```

## HTML常用标签

### **排版标签**

主要和css搭配使用，显示网页结构的标签，是网页布局最常用的标签。

-   标题标签h(h1~h6)
    
-   段落标签`<p> </p>`,可以把 HTML 文档分割为若干段落
    
    ```
    <p>paragraph段落标签</p>
    ```
    
    -   文本在一个段落中会根据浏览器窗口大小自动换行
    -   段落和段落之间有空格
-   换行标签`<br />`
    
    -   break
    -   `<br />`是个单标签
    -   `<br />`标签只是简单地开始新的一行，跟段落不一样，段落之间会插入一些垂直的间距。
-   div和span标签:是没有语义的,是我们网页布局最主要的2个盒子。
    
    -   div是division缩写，表示分割，分区。span意为跨度、跨距。
        
    -   `<div>`标签用来布局，但是一行只能放一个`<div>`。（会自动换行）。大盒子
        
    -   `<span>`标签用来布局，一行可以多个`<span>`。小盒子
        

**「 排版标签」**

-   b和strong 文字以粗体显示
    
-   i和em 文字以斜体显示
    
-   s和del 文字以加删除线显示
    
-   u和ins 文字以加下划线显示
    

### **标签属性(行内式)**

使用HTML制作网页时，如果想让HTML标签提供更多的信息，可以使用HTML标签的属性加以设置。

```
<标签名 属性1="属性值1" 属性2="属性值2" …> 内容 </标签名>
<手机 颜色="红色" 大小="5寸">  </手机>
```

### **图像标签**

```
<img src = "图像URL" />
```

image的缩写。单标签。

-   src是`<img>`标签的必须属性，他用于指定图像文件的路径和文件名
    -   属性：简单理解是属于这个图像标签的特性

| 属性 | 属性值 | 描述 |
| --- | --- | --- |
| `src` | URL | 图像的路径 |
| alt | 文本 | 图像不能显示时的替换文本 |
| title | 文本 | 鼠标悬停时显示的内容 |
| width | 像素 | 设置图像的宽度 |
| height | 像素 | 设置图像的高度 |
| border | 数字 | 设置图像边框的宽度 |

宽度和高度一般只修改一个，另外一个自动。

**注意：**

-   标签可以拥有多个属性，必须写在开始标签中，位于标签名后面。
-   属性之间不分先后顺序，标签名与属性、属性与属性之间均以空格分开。
-   采取 键值对 的格式 key=“value” 的格式

```
<img src="cz.jpg" width="300" height="300" border="3" title="这是个小蒲公英" />
```

### **路径**

-   **相对路径**：图片相对于HTML页面的位置

| 相对路径分类 | 符号 | 说明 |
| --- | --- | --- |
| 同一级路径 |  | 图像文件位于HTML文件同一级 如`<img src="baidu.gif" />` |
| 下一级路径 | `/` | 图像文件位于HTML文件下一级 如`<img src="images/img.jpg" />` |
| 上一级路径 | `../` | 图像文件位于HTML文件上一级 如`<img src="../2.png" />` |

-   **绝对路径**：是指目录下的绝对位置，直接到达目标位置，通常是从盘符开始的路径。`\`

### 超链接标签

-   **超链接语法格式**

```
<a href="跳转目标" target="目标窗口的弹出方式">文本或图像</a>
target="_self"  默认窗口弹出方式
target="_blank" 新窗口弹出
```

**a**nchor 锚

| 属性 | 作用 |
| --- | --- |
| `href` | 用于指定链接目标的url地址，（`必须属性`）当为标签应用href属性时，它就具有了超链接的功能 |
| target | 用于指定链接页面的打开方式，其取值有\_ self和 \_ blan两种，其中\_ self为默认值，\_blank为在新窗口中打开方式。 |

-   **链接分类**

1.  **外部链接**

例如`<a href="http://www.qq.com" target="_blank">腾讯</a>`

2.  **内部链接**

网站内部之间的相互链接，直接链接内部页面名称即可。

例如`<a href="index.html">`首页`</a>`

```
<h4>内部链接：网站内部页面之间的相互链接</h4>
<a href="inner.html" target="_blank">内部链接</a>
```

3.  **空链接**

如果当时没有确定链接目标时， `<a herf="#">首页</a>`

4.  **下载链接**

如果href里面地址是一个文件或者压缩包，会下载这个文件。

5.  **网页元素链接**

在网页中的各种网页元素，如文本、图像、表格、音频、视频等都可以添加超链接

例如：给图片添加超链接

```
<h4>网页元素链接</h4><a href="http://www.baidu.com"><img src="img.jpg" /></a>
```

6.  **锚点链接**

点击链接可以快速定位到页面中的某个位置

(1). 在链接文本的href属性中，设置属性值为`#名字`的形式，如`<a href="#two">第2集</a>`

(2). 找到目标位置标签，里面添加一个id属性=刚才的名字，如`<h3 id="two">第2集介绍</h3>`

```
1. 使用<a href="#id名">链接文本</a>创建链接文本（被点击的）   <a href="#two">  2. 使用相应的id名标注跳转目标的位置。 (目标位置)  <h3 id="two">第2集</h3> 
```

_返回顶部_

### 注释标签

```
<!-- 内容 -->
```

快捷键：Ctrl+/

### 特殊字符

![图片](https://img-blog.csdnimg.cn/img_convert/e96ae1d1cef3da5e7b19d9c0c2aaec0d.png)

空格：`&nbsp;` 牛逼space

小于号：`&lt;` less than

大于号：`&gt;` more than

## 表格

现在还是较为常用的一种标签，但不是用来布局，常见**显示、展示表格式数据**。因为它可以让数据显示的非常的规整，可读性非常好。特别是后台展示数据的时候表格运用是否熟练就显得很重要，一个清爽简约的表格能够把繁杂的数据表现得很有条理。

### **表格基本语法**

```
<table>  <tr>    <td>单元格内的文字</td>    ...  </tr>  ...</table>
```

table、tr、td，他们是创建表格的基本标签，缺一不可

-   table用于定义一个表格标签。
-   tr标签 用于定义表格中的行，必须嵌套在 table标签中。
-   td 用于定义表格中的单元格，必须嵌套在< tr>< /tr>标签中。
-   字母 td 指表格数据（table data），即数据单元格的内容，现在我们明白，表格最合适的地方就是用来存储数据的。td像一个容器，可以容纳所有的元素。

![图片](https://img-blog.csdnimg.cn/img_convert/dab62fd390cad1964ad314402ef38754.png)

### **表头单元格标签**

table head ——> `<th>`。表头单元格里面的文本**加粗并且居中显示**。

![图片](https://img-blog.csdnimg.cn/img_convert/071fc981593feb393c186f7cd8841414.png)

### **表格属性**

这些属性要写到标签table里面去

三参为0，平时开发的我们这三个参数 border cellpadding cellspacing 为 0

| 属性名 | 属性值 | 描述 |
| --- | --- | --- |
| align | left、center、right | 规定表格相对周围元素的对齐方式 |
| border | “1"或”" | 规定表格单元是否拥有边框，默认为""，表示没有边框 |
| cellpadding | 像素值 | 规定单元边沿与其内容之间的空白，默认1像素 |
| cellspacing | 像素值 | 规定单元格之间的空白，默认2像素 |
| width | 像素值或百分比 | 规定表格的宽度 |
| height | 像素值或百分比 | 规定表格的高度 |

```
<table align="center" border="1" cellpadding="0" cellspacing="0" width="500" height="249">
```

### **表格结构标签**

`<thead>`标签：表格的头部区域。`<thead>`内部必须拥有`<tr>`标签，一般是位于第一行。

`<tbody>`标签：表格的主体区域，主要用于放数据本体。

对于比较复杂的表格，表格的结构也就相对的复杂了，所以又将表格分割成三个部分：题头、正文和脚注。而这三部分分别用:thead,tbody,tfoot来标注， 这样更好的分清表格结构。

**注意：**  
1、< thead>< /thead>：用于定义表格的头部。用来放标题之类的东西。< thead> 内部必须拥有< tr> 标签！

2、< tbody>< /tbody>：用于定义表格的主体。放数据本体 。

3、< tfoot>< /tfoot>放表格的脚注之类。  
4、 以上标签都是放到table标签中。

### **合并单元格**

合并的顺序我们按照 先上 后下 先左 后右 的顺序 ,合并完之后需要删除多余的单元格。

-   跨行合并：`rowspan="合并单元格的个数"`
-   跨列合并：`colspan="合并单元格的个数"`  
    ![在这里插入图片描述](https://img-blog.csdnimg.cn/c5267e0ba67d4324b3ebc46f6f06b490.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQml0ZGFuY2luZw==,size_20,color_FFFFFF,t_70,g_se,x_16)

**目标单元格：(写合并代码)**

-   跨行：最上侧单元格为目标单元格，写合并代码
-   跨列：最左侧单元格为目标单元格，写合并代码

**合并单元格三部曲：**

-   先确定跨行还是跨列合并
-   找到目标单元格，写上合并方式=合并的单元格数量。比如：`<td colspan="2"></td>`
-   删除多余的单元格

### **表格总结**

| 标签名 | 定义 | 说明 |
| --- | --- | --- |
| < table>< /table> | 表格标签 | 就是一个四方的盒子 |
| < tr>< /tr> | 表格行标签 | 行标签要再table标签内部才有意义 |
| < td>< /td> | 单元格标签 | 单元格标签是个容器级元素，可以放任何东西 |
| < th>< /th> | 表头单元格标签 | 它还是一个单元格，但是里面的文字会居中且加粗 |
| < caption>< /caption> | 表格标题标签 | 表格的标题，跟着表格一起走，和表格居中对齐 |
| clospan 和 rowspan | 合并属性 | 用来合并单元格的 |

## **列表**

布局。

\*\*「列表ul」\*\*容器里面装载着结构，样式一致的文字或图表的一种形式，叫列表。

列表最大的特点就是整齐 、整洁、 有序，跟表格类似，但是它可组合自由度会更高。

### **无序列表ul (重点)**

-   < ul>< /ul>中只能嵌套< li>< /li>，直接在< ul>< /ul>标签中输入其他标签或者文字的做法是不被允许的。
-   < li>与< /li>之间相当于一个容器，可以容纳所有元素。

```
<ul>  <li>列表项1</li>  <li>列表项2</li>  <li>列表项3</li>  ......</ul>
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/19bce5c86c3c434f908b12e4fe2500d9.png)

### **有序列表ol**

-   < ol>标签中的type属性值为排序的序列号，不添加type属性时，有序列表默认从数字1开始排序。
-   常用的type属性值分别为是1，a，A，i，I
-   < ol reversed=“reversed”>中的reversed属性能够让有序列表中的序列倒序排列。
-   < ol start=“3”>中的start属性值为3，有序列表中的第一个序列号将从3开始排列。

```
<ol type="A">   <li>列表项1</li>  <li>列表二</li>  <li>列表三</li></ol>
```

### **自定义列表dl**

-   定义列表常用于对术语或名词进行解释和描述，定义列表的列表项前没有任何项目符号。

```
<dl>  <dt>名词1</dt>  <dd>名词1解释1</dd>  <dd>名词1解释2</dd>  ...  <dt>名词2</dt>  <dd>名词2解释1</dd>  <dd>名词2解释2</dd>  ...</dl>
```

父亲 - 大哥 - 弟弟

![在这里插入图片描述](https://img-blog.csdnimg.cn/cc668cd5bc6c4528a2869fa80d860e6e.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQml0ZGFuY2luZw==,size_8,color_FFFFFF,t_70,g_se,x_16)

![图片](https://img-blog.csdnimg.cn/img_convert/1e9d6fe83af6802dca31a8de646365f8.png)

## **表单**

在HTML中，一个完整的表单通常由**表单控件（也称为表单元素）、提示信息和表单域**3个部分构成。

表单目的是为了收集用户信息。

![图片](https://img-blog.csdnimg.cn/img_convert/d6524c02fc4130138ea7eabba779a717.png)

**表单控件：**  
包含了具体的表单功能项，如单行文本输入框、密码输入框、复选框、提交按钮、重置按钮等。

**提示信息：**  
一个表单中通常还需要包含一些说明性的文字，提示用户进行填写和操作。

**表单域：**  
它相当于一个容器，用来容纳所有的表单控件和提示信息，可以通过他定义处理表单数据所用程序的url地址，以及数据提交到服务器的方法。如果不定义表单域，表单中的数据就无法传送到后台服务器。

### **表单域**

-   收集的用户信息怎么传递给服务器？
    
-   -   通过form表单域
-   目的：
    
-   -   在HTML中，form标签被用于定义表单域，以实现用户信息的收集和传递，form中的所有内容都会被提交给服务器。

```
<form action="url地址" method="提交方式" name="表单域名称">  各种表单元素控件</form>
```

**常用属性：**

-   每个表单都应该有自己表单域。后面学 ajax 后台交互的时候，必须需要form表单域。

| 属性 | 属性值 | 作用 |
| --- | --- | --- |
| action | url地址 | 用于指定接收并处理表单数据的服务器程序的url地址。 |
| method | get/post | 用于设置表单数据的提交方式，其取值为get或post。 |
| name | 名称 | 用于指定表单的名称，以区分同一个页面中的多个表单。 |

### **表单控件（表单元素）**

#### **input 控件**

```
<input type="属性值" value="你好">
```

-   input 输入的意思
-   < input />标签为单标签
-   type属性设置不同的属性值用来指定不同的控件类型
-   除了type属性还有别的属性

![图片](https://img-blog.csdnimg.cn/img_convert/0764a4df07620b91a6c3fe971d0bee9e.png)

radio、checkbox按钮name值要一样！！！

```
性别：男 <input type="radio" name="radio"> 女 <input type="radio" name="radio"> <br>        爱好：吃饭<input type="checkbox" name="hobby">  睡觉<input type="checkbox" name="hobby"> 打豆豆<input type="checkbox" name="hobby"><br>
```

**submit属性**

```
<!-- <input type="submit"> <br> --><input type="submit" value="免费注册">
```

点击了提交按钮，可以把 表单域form 里面的表单元素 里面的值 提交到后台服务器

**reset属性**

重置按钮还原表单初始默认状态

```
<input type="reset" value="重新填写">
```

**button属性**

普通按钮

```
<input type="button" value="获取短信验证码"> 
```

**file属性**

```
上传头像：<input type="file">
```

**value属性**

-   value 默认的文本值。有些表单想刚打开页面就默认显示几个文字，就可以通过这个value 来设置。
-   name和value是每个元素都有的属性值，主要给后台人员使用

```
用户名:<input type="text"  name="username" value="请输入用户名"> 
```

**name属性**

-   name表单的名字， 这样，后台可以通过这个name属性找到这个表单。 页面中的表单很多，name主要作用就是用于区别不同的表单。
    
-   -   name属性后面的值，是我们自己定义的。
    -   radio 如果是一组，我们必须给他们命名相同的名字 name 这样就可以多个选其中的一个啦
    -   name属性，我们现在用的较少，但是，当我们学ajax 和后台的时候，是必须的。

**checked属性**

-   表示默认选中状态。 较常见于 单选按钮和复选按钮。

**input 属性小结**

| 属性 | 说明 | 作用 |
| --- | --- | --- |
| type | 表单类型 | 用来指定不同的控件类型 |
| value | 表单值 | 表单里面默认显示的文本 |
| name | 表单名字 | 页面中的表单很多，name主要作用就是用于区别不同的表单。 |
| checked | 默认选中 | 表示那个单选或者复选按钮一开始就被选中了 |

#### **label标签**

-   label 标签为 input 元素定义标注（标签）。
-   label标签主要目的是为了提高用户体验。为用户提高最优秀的服务。

\*\*作用：\*\*用于绑定一个表单元素, 当点击label标签的时候, 被绑定的表单元素就会获得输入焦点。

**如何绑定元素呢**

-   第一种用法就是用label标签直接包含input表单， 适合单个表单选择
-   第二种用法 for 属性规定 label 与哪个表单元素绑定(通过id)。

```
  第一种  <label> 用户名：     <input type="radio" name="usename" value="请输入用户名">     </label>    第二种  <label for="sex">男</label>  <input type="radio" name="sex"  id="sex">
```

栗子

```
<label for="username">用户名:</label> <input type="text" id="username"> <br><input type="radio" name="sex" id="nan"> <label for="nan">男</label><input type="radio" name="sex" id="nv"> <label for="nv">女</label>
```

#### **select下拉列表**

![图片](https://img-blog.csdnimg.cn/img_convert/4bfc7caf2c045d130ec3d64c642a4b49.png)

-   如果有多个选项让用户选择，为了节约空间，我们可以使用select控件定义下拉列表。
-   在option 中定义selected =" selected "时，当前项即为默认选中项。
-   我们实际开发会用的比较少

```
<select>    <option>选项1</option>  <option>选项2</option>  <option>选项3</option>  ...</select>
```

栗子

```
    籍贯:    <select>        <option>山东</option>        <option>北京</option>        <option selected="selected">外星球</option>     </select>
```

#### **textarea控件(文本域)**

-   通过textarea控件可以轻松地创建多行文本输入框.
-   cols=“每行中的字符数” rows=“显示的行数” 我们实际开发不用

![图片](https://img-blog.csdnimg.cn/img_convert/aaa7af45fe3c453caec4897dec269bab.png)

栗子

```
    今日反馈:    <textarea cols="50" rows="5">我知道这个反馈留言是textarea写的.    </textarea>
```
