---
created: 20230306-124000-6080 (UTC +08:00)
tags: [pink老师css笔记]
---

# CSS

---

## _一、CSS字体样式属性_

## **font-size：字号**

<table><tbody><tr><td>相对长度单位</td><td>说明</td></tr><tr><td>em</td><td>相当于当前对象内文本的字体尺寸</td></tr><tr><td>px</td><td>像素【最常用，推荐使用】</td></tr><tr><td>绝对长度单位</td><td>说明</td></tr><tr><td>in</td><td>英寸</td></tr><tr><td>cm</td><td>厘米</td></tr><tr><td>mm</td><td>毫米</td></tr><tr><td>pt</td><td>点</td></tr></tbody></table>

## **font-family：字体样式** 

```
p {font-family: "宋体"；／＊可以写多个字体，用英文逗号隔开，表示找不到１字体去找２字体，等等＊／　　font-size: 14px;／＊ctrl＋／是注释快捷键＊／color: pink;}
```

![](https://img-blog.csdnimg.cn/img_convert/7d25f2608b527444bd294d1d7c304627.png)

##  CSS　Unicode字体

在CSS中设置字体名称可以直接写中文，但是在文字编码（GB2312   UTF-8等）不匹配时会产生乱码的错误，ｘｐ系统不支持类似微软雅黑的中文。

解决方案一：使用英文代替。font-family：“Microsoft　Yahei”；

解决方案二：在CSS中直接使用Unicode编码字体

【建议:Unicode字体只用“宋体”和“微软雅黑”】

![](https://img-blog.csdnimg.cn/img_convert/8cb23268f2642cf7f2b920eb56cbe9db.png)

## **font-weight：字体粗细**

除了HTML中的的＜ｂ＞和＜strong＞标签外，还可以使用CSS完成字体加粗效果，但是CSS是没有语义的。

font-wieght属性定义字体的粗细，属性值有normal，bold，bolder，lighter，数字１００～９００

【一般更喜欢用数字表示，数字４００＝normal，数字７００＝bold】

```
strong{
        font-weight: normal;/* 让标签包裹的粗体不加粗 */
}
```

## **font-style：字体风格**

除了HTML中的的＜i＞和＜em＞标签外，还可以使用CSS完成字体倾斜效果，但是CSS是没有语义的。

normal：指定文本字体样式为正常的字体

italic：指定文本字体样式为斜体。对于没有设计斜体的特殊字体，如果要使用斜体外观将应用oblique

oblique：指定文本字体样式为倾斜的字体。人为的使文字倾斜，而不是去选取字体中的斜体字【不常用】

> em {  
> 　　font-style：normal；／＊让标签包裹的斜体变得不倾斜，　＊／  
> }

font：综合式样式【重点】

![](https://img-blog.csdnimg.cn/img_convert/d99013ee52a662915b4de837ce5ced72.png)

> ```
> h1 {
>     font: italic bold 14px "microsoft yahei";/*前两项可以省略，后两项必须保留，顺序不能改变*/
> }
> ```

使用Chrome调试

![](https://img-blog.csdnimg.cn/img_convert/cd6bcbc20815e8b8dcbec78f3f245866.png)

##  _二、选择器【重点】_

想要CSS样式应用于特定的HTML元素，首先要拿到这项元素，在CSS中，执行这一任务的样式规则的部分被称为选择器

## **标签选择器（元素选择器）**

[标签选择器](https://so.csdn.net/so/search?q=%E6%A0%87%E7%AD%BE%E9%80%89%E6%8B%A9%E5%99%A8&spm=1001.2101.3001.7020)是指以HTML标签为选择器，按标签分类，为页面中同类型的标签快速统一样式，缺点是不能设计差异化样式

> ```
> 标签{
> 　　　　属性1:属性值1;
> 　　　　属性2:属性值2;
> }
> 元素{
> 　　　　属性1:属性值1;
> 　　　　属性2:属性值2;
> }
> ```

## **类选择器**

 以元素为对象定义单独或相同样式

```
<head><style>h1 {color:palevioletred;    }.yinshi {      color: blue;    }.shenle {color: orangered;    }.xinba {color: gray;    }</style></head><body><div class="yinshi">银时</div><div class="shenle">神乐</div><div class="xinba">新八</div>    
```

## **CSS命名规范**

类选择器命名规范

![](https://img-blog.csdnimg.cn/img_convert/3fba5dafdbe0c8cda384819937c16845.png)

![](https://img-blog.csdnimg.cn/img_convert/da91d4b2f9e4fb805db61577e18d5de4.png)

 [web前端开发规范手册pdf下载](https://pan.baidu.com/s/16AaCkQr2gmP4GwV93eUb4Q?pwd=xaud " web前端开发规范手册pdf下载")

## **多类名选择器**

给标签添加多个类名，实现多种目的选择

```
<head><style>.c-blue {      color: blue;    }.c-orange {color: orangered;    }.c-gray {color: gray;    }.font20 {font-size: 20px;    }</style></head><body><div class="c-blue font20">银时</div><div class="c-orange">神乐</div><div class="c-gray font20">新八</div></body>
```

![](https://img-blog.csdnimg.cn/img_convert/70360a515fe2a97f0c12fb3fd9174131.png)

##  **id选择器**

和类选择器结合记忆

```
#black {        color: black;}<div id="black">土方十四郎</div>
```

类选择器和id选择器的区别

类选择器可以重复多次使用，被多个标签引用，相当于人名

id选择器是唯一的，相当于身份证号，只允许使用一次

## **通配符选择器【一般用不到，仅作了解】**

通配符选择器用“\*”表示，是所有选择器中适用范围最广的，能匹配页面中所有元素，基本语法格式如下

> ```
> * {
>     属性1:属性值1;
>     属性2:属性值2;
> }
> ```

```
<head><style>       * {   color: #0000FF;font-size: 20px;    　　}    </style></head><body><p>银魂</p><div>银魂</div><strong>银魂</strong><i>银魂</i><span>银魂</span></body>
```

## **伪类选择器**

倾向于给某些选择器添加效果，如给链接添加效果

### （1）链接伪类选择器

![](https://img-blog.csdnimg.cn/img_convert/b1a56590481b02848abb2d9ff4e1b3df.png)

 改变顺序可能造成效果全部无法实现的后果。

```
<head><style>a:link {color: cornflowerblue;font-size: 20px;font-weight: 700;            }a:visited {color: darkorchid;font-size: 20px;font-weight: 700;            }a:hover {color: tomato;font-size: 20px;font-weight: 700;            }a:active {color: green;font-size: 20px;font-weight: 700;            }</style></head><body><div><a href="#">零元购</a></div></body>
```

 以下是链接伪类选择器的简写方式【最常用写法】

```
<head><style>a {color: cornflowerblue;font-size: 20px;font-weight: 700;            }a:hover {color: tomato;                }</style></head><body><div><a href="#">零元购</a></div></body>
```

### （2）结构伪类选择器

![](https://img-blog.csdnimg.cn/img_convert/f19c75e1a43865c7e15a4c97925d7d8a.png)

```
<head><style>li:first-child {   color: orangered;            }li:last-child {    color: green;            }li:nth-child(3) {  color: mediumpurple;            }</style></head><body><ul type="square"><li>长虹剑</li><li>冰魄剑</li><li>紫云剑</li><li>奔雷剑</li><li>青光剑</li><li>雨花剑</li><li>旋风剑</li></ul></body>
```

其他用法

```
li:nth-child(even) {color: orange;            }li:nth-child(odd) {color: skyblue;            }li:nth-child(n) {color: aqua;            }
```

### (3)目标伪类选择器

target目标伪类选择器：选择器可用于选取当前活动的目标元素

```
:target {color: red;}
```

## 三、CSS外观属性

## 颜色属性

![](https://img-blog.csdnimg.cn/img_convert/730c3b1588a97f74d9932e2203a83ea7.png)

## **line-height:行间距**

用于设置行间距，也称行高。一般比字号大7，8个像素，即px。

```
p {line-height: 40px;}
```

## **text-align: 水平对齐方式**

center：居中

left：左对齐

righ：右对齐

## **text-indent：首行缩进**

所有段落都会缩进，建议使用em，作为单位，1em=一个字的宽度

```
p {text-indent: 2em;  }
```

## **letter-spacing：字间距**

字符之间的空白，允许使用负数，默认为normal

```
div {letter-spacing: 2px;}
```

## **word-spacing：单词间距**

对中文无效

## **颜色半透明（CSS3新增）**

color:rgba(r,g,b,a)，a指alpha，即透明度，取值在\[0,1\]之间，参数不能省略

```
div {color: rgb(0,200,173,0.5);}
```

## **文字阴影（CSS3）**

text-shadow：水平位置，垂直位置，模糊距离，阴影颜色；【共计四个参数】前两个参数必写，最后两个可以省略

```
{xt-shadow: 1px 2px 4px rgba(183,23,48,0.5);/* 参数之间用“空格”隔开，而不是逗号前两个参数必须有，后两个可以省略 */}
```

##  **Hbuilder快捷方式**

<table><tbody><tr><td>div*10快速生成10个标签</td></tr><tr><td>ul&gt;li快速生成父子类标签</td></tr><tr><td>div+p快速生成兄弟标签，同一级的标签</td></tr><tr><td>.red+tab键快速生成带类名的div</td></tr><tr><td>#red+tab快速生成带id名的div</td></tr></tbody></table>

例：.nav+.header+.main>.left+.right

## 四、引入CSS样式表

## **内部样式表**

内部样式是集中将代码卸载HTML文档的head头部，用style标签定义。也可也将style标签放在文档任何地方。

type=“text/CSS”在HTML5中可以省略，但写上也比较规范。

## **行内样式（内联样式）**

内联样式，又称行内样式，内嵌样式，通过标签的style属性来设置元素的样式。只适合样式比较少的情况

> <标签名 style=“属性1：属性值1；属性2：属性值2”>    内容   </标签名>

## **外部样式表**

外部样式奥是将所有样式放在一个或多个以.CSS为扩展名的外部样式表文件中，通过link标签连接到HTML文档中。【link是单标签】

完全实现了结构与样式分离。

```
<head><link rel="stylesheet" href="style.css"/></head>
```

## ![](https://img-blog.csdnimg.cn/0361853cb3734f9fa624371f545ae14c.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5Y2K6YeMX-i-sOaYjw==,size_20,color_FFFFFF,t_70,g_se,x_16) **三种样式对比**

![](https://img-blog.csdnimg.cn/75fd77b53c3a48e09bfad4ddfc1e4036.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5Y2K6YeMX-i-sOaYjw==,size_20,color_FFFFFF,t_70,g_se,x_16)

## 块级元素（block-level）

每个元素通常会独自占据一整行或者多行，可以对其设置高度，宽度，对齐属性

> 常见块级元素：<h1\>~<h6\>、<p\>、<div\>、<ul\>、<ol\>、<li\>等

⭐关于块级元素的特点，要能口述 

![](https://img-blog.csdnimg.cn/8dea496759404a068f39c85cd119339c.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5Y2K6YeMX-i-sOaYjw==,size_17,color_FFFFFF,t_70,g_se,x_16)

## 行内元素（inline-level）

 不占独立区域，仅靠自身大小和图像尺寸来支撑结构。一般不可设置宽度、高度、对齐属性。

> 常见行内元素：<a\>、<strong\>、<b\>、<em\>、<i\>、<del\>、<s\>、<ins\>、<u\>、<span\>

⭐关于行内元素的特点，要能口述  

![](https://img-blog.csdnimg.cn/8136868546fd4457863b55b7d2794ae4.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5Y2K6YeMX-i-sOaYjw==,size_20,color_FFFFFF,t_70,g_se,x_16)![](https://img-blog.csdnimg.cn/971833adc529439cbd97ae639f0f5ec9.png)**注意：**

        1.只有文字才成段落，因此p标签里<strong\>不能放块级元素<\/strong\>，同理<h1\>~<h6\><dt\>内都不能放其他块级元素。

        2.链接<a\>里边不能再放链接。

## 行内块元素（inline-block）

![](https://img-blog.csdnimg.cn/2ae859e4b7ca4b9297402aa662430997.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5Y2K6YeMX-i-sOaYjw==,size_20,color_FFFFFF,t_70,g_se,x_16)

## 标签模式转换display

![](https://img-blog.csdnimg.cn/2fb14e278d914fd49c67b5a65e2a6dc4.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5Y2K6YeMX-i-sOaYjw==,size_19,color_FFFFFF,t_70,g_se,x_16)

## 五、CSS复合选择器 

## **交集选择器**

交集选择器由两个选择器构成，其中第一个为标签选择器。第二个为class选择器，**两个选择器之间不能有空格。**

交集选择器表示既...又...，使用相对较少

> 例如：p.one 表示的是类名为one的段落标签

![](https://img-blog.csdnimg.cn/592b2f587f4e41628b75fbfe4ee0a31d.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5Y2K6YeMX-i-sOaYjw==,size_19,color_FFFFFF,t_70,g_se,x_16)

## **并集选择器**

如果某些选择器定义的样式完全相同，或者部分相同，就用并集选择器为它们定义相同的CSS样式 。

只要逗号隔开，所有选择器都会执行后面的样式。

![](https://img-blog.csdnimg.cn/413f4801f791468bb5600f08bb4626d8.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5Y2K6YeMX-i-sOaYjw==,size_20,color_FFFFFF,t_70,g_se,x_16)

```
<head><style>p,h1,.toshi {color: aliceblue;}</style></head><body><p>春江花月夜</p><h1>春江潮水</h1><div class="toshi">海上明月</div></body>
```

## **后代选择器**

又称包含选择器，用来选择元素或者元素组的后代。

写法是把外层标签写在前面，内层标签写在后边，**中间用空格分隔**

![](https://img-blog.csdnimg.cn/84da82bb0e3049e49024edd2f40d172d.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5Y2K6YeMX-i-sOaYjw==,size_19,color_FFFFFF,t_70,g_se,x_16)

```
<head><style>.songyang div {color: darkcyan;font-size: 16px;}</style></head><body><div class="songyang"><div>坂田</div><div>桂</div><div>高杉</div></div><div>近藤</div></body>
```

## **子元素选择器**

只能选择某元素的子元素，再下一级孙子，重孙子不能选。写法是：**父级标签 > 子级标签**，符号左右一般各留一个空格

![](https://img-blog.csdnimg.cn/1345cd4b1228457ca32d3b102b40a070.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5Y2K6YeMX-i-sOaYjw==,size_19,color_FFFFFF,t_70,g_se,x_16)

```
<head><style>.nav>li{color: pink;} .nav > li > .two > li{color: black;}</style></head><body><ul class="nav"><li>一级菜单<ul class="two"><li>二级菜单</li><li>二级菜单</li><li>二级菜单</li></ul></li><li>一级菜单<ul class="two"><li>二级菜单</li><li>二级菜单</li><li>二级菜单</li></ul></li></ul></body>
```

##  **属性选择器**

![](https://img-blog.csdnimg.cn/029d8d0291144b5b9dd7b06e6c62835b.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5Y2K6YeMX-i-sOaYjw==,size_20,color_FFFFFF,t_70,g_se,x_16)

```
<head><meta charset="utf-8"><title></title><style>a[title] {color: #008000;}input[type=text]{color: red;}</style></head><body><a href="#" title="浏览器">Chrome</a><a href="#" title="浏览器">edge</a><a href="#">firefox</a><a href="#">Safari</a><a href="#">QQ</a><input type="text"value="这是一个文本框"><input type="submit"><input type="reset"></body>
```

```
<head><meta charset="utf-8"><title></title><style>div[class^=font]{ color: deeppink;}div[class$=nav]{ color: aquamarine;}div[class*=TB]{ color: orange;}</style></head><body><div class="font12">属性选择器</div><div class="font12">属性选择器</div><div class="font24">属性选择器</div><div class="font24">属性选择器</div><div class="pdd-nav">属性选择器</div><div class="jd-nav">属性选择器</div><div class="news-TB-heater">属性选择器</div><div class="news-TB-footer">属性选择器</div></body>
```

## **伪元素选择器（CSS3）**

::first-letter，选择文本第一行的单词或字（如中文日文韩文）

::first-line，选择文本第一行，不固定，根据浏览器窗口大小而变动

::selection，可以改变选中文本样式，比如蓝底白字变颜色变成粉色之类的

```
<style>p{line-height: 35px;}::first-letter{color: aquamarine;}</style></head><body><p>なまりの空(そら)【阴霾的天空】重(おも)く垂(た)れ込(こ)み【垂下凝重的幕帘】真白(ましろ)に淀(よど)んだ【沉入苍白之中】太阳(たいよう)が砕(くだ)けて【将太阳斩碎】耳鸣(みみな)りを尖(とが)らせる【让我大声尖叫】</p></body>
```

> .dome：类选择器
> 
> first-child：伪类选择器
> 
> first-letter：伪元素选择器

::before 和 ::after 

![](https://img-blog.csdnimg.cn/b12a64f601de4b7287a6bbe0e38581f9.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5Y2K6YeMX-i-sOaYjw==,size_20,color_FFFFFF,t_70,g_se,x_16)

```
<head><style>div::before{content: "门前";color: #FF0000;}div::after{content: "游过一群鸭";color: skyblue;}</style></head><body><div>大桥下</div></body>
```

## 六、CSS书写规范

## **空格规范**

选择器与“ { ”之间必须有空格 。

属性名与之后的 ：之间不允许有空格，：与属性值之间必须有空格。

> 举例：
> 
> .nav a {  
>                 color: red;  
>             }

## **选择器规范**

当一个rule里边包含多个选择器时，每个选择器声明比需独占一行。 

> 举例：
> 
>     p,  
>     h1,  
>     .toshi {  
>                 color: aliceblue;  
>             } 

## **属性规范** 

属性定义必须另起一行。

> 举例：
> 
> div::after{  
>             content: "游过一群鸭";  
>             color: skyblue;  
>         } 

## 七、CSS背景（background）

![](https://img-blog.csdnimg.cn/8178128a85ce41ca8a745af9fc015086.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5Y2K6YeMX-i-sOaYjw==,size_20,color_FFFFFF,t_70,g_se,x_16)

## **背景图片（image）**

 必须引用在同一个项目下的图片，可以不在同一个文件夹中，引用不同项目下的图片会失败

背景图片更改大小只能用background-size

```
div {height: 800px;width: 600px;background-color: pink;background-image: url("图片/1.png");}
```

## **背景平铺（repeat）**

默认平铺，取消平铺要no-reprat。

![](https://img-blog.csdnimg.cn/6545fad61ec74d39b9a485f84031a82f.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5Y2K6YeMX-i-sOaYjw==,size_20,color_FFFFFF,t_70,g_se,x_16)

## **背景位置（position）**

> 语法：
> 
> background-position：length || length
> 
> background-position：position || position 
> 
> 参数：
> 
> length：百分数、浮点数和单位标识组成的长度值。参阅长度单位
> 
> position：top、center、bottom、left、center、right

设置检索对象的背景图像位置必须先指定background-image属性。默认为（0% 0%）。如果只指定了一个值，该值应用于横坐标，纵坐标默认50%，如果有两个值，第二个值应用于纵坐标。

 利用方位名词更改图片位置，位置默认左上角

方位名词没有顺序，谁在前都行，如果只有一个方位词另一个默认是center

```
div {height: 800px;width: 700px;background-color: pink;background-image: url("女儿.png");background-repeat: no-repeat;background-position: right top;}
```

 利用精确单位更改图片位置

第一个值一定是x坐标，第二个值一定是y坐标。

```
div {height: 800px;width: 700px;background-color: pink;background-image: url("女儿.png");background-repeat: no-repeat;background-position: 15px 30px;}
```

 混合使用

```
div {height: 800px;width: 700px;background-color: pink;background-image: url("女儿.png");background-repeat: no-repeat;background-position: center 30px;}
```

## **背景附着**

默认是scroll

> 语法：
> 
> background-attachment：scroll | fixed 
> 
> 参数：
> 
> scroll：背景图像是随对象内容滚动的
> 
> fixed：背景图像固定

## **背景简写**

和字体简写类似，但是顺序没有强制标准，一般建议如下

background：背景颜色 、背景图片地址，背景平铺，北京滚动，背景位置

```
background: pink url("女儿.png") no-repeat fixed center 30px;
```

## **背景透明（CSS3）**

> 语法：
> 
> background：rgba(0，0，0，0.3);

背景半透明是指盒子背景半透明，对于盒子里边的内容不受影响。

给文字和边框（border） 设置半透明都可以用rgba。

## **背景缩放（CSS3）**

> 语法：
> 
> background-size：\*\*\*px | \*\*\*% | contain | cover
> 
> 一般使用px时，只更改一个值，防止缩放实真。使用%时，表示图片整体缩小为原图的百分之多少。

 ![](https://img-blog.csdnimg.cn/f5baa95ba2ee45beab1c63d66561d735.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5Y2K6YeMX-i-sOaYjw==,size_20,color_FFFFFF,t_70,g_se,x_16)

 cover：自动调整缩放比例，保证图片始终填充满背景区域，如果有溢出会被隐藏，图片等比缩放并保证宽高同时满足盒子大小。

contain：自动调整缩放比例，但保证图片始终完整显示在背景区域。只要宽度和高度有一样曼珠盒子大小，就不再缩放。保证了图片的完整性，不会有缺失，但是盒子会有一部分裸露，没有背景图片覆盖。

## **多背景（CSS3）**

-    一个元素可以设置多重背景图像
-   每组属性之间使用逗号分隔
-   如果设置的背景图片之间存在重叠关系，前面的背景图片会覆盖在后面的背景图片之上
-   为了避免背景色将图片给盖住，背景色通常定义在最后一组

```
div {height: 800px;width: 700px;background: url("女儿.png") no-repeat 10px 20px/300px,url(001.jpg) no-repeat right 20px/300px,url(troye.jpg) no-repeat 10px bottom/300px pink;}
```

## **凹凸文字**

```
<head><style>body {background-color: #ccc;}div {color: #CCCCCC;font: 700 80px "微软雅黑";}div:first-child {text-shadow: 1px 1px 1px #000, -1px -1px 1px #fff;}div:last-child {text-shadow: -1px -1px 1px #000, 1px 1px 1px #fff;}</style></head><body><div ><div>我是凸起的文字</div><div class="second">我是凹下的文字</div></div></body>
```

> 此处产生了 :last-child 未成功调用问题
> 
> 解决方法：两个div必须在父类div下才能成使用 :last-child ，否则只能使用 :first-child 。
> 
>                   使用时必须选择父类下的最后一个元素。
> 
> 另外：可以成功使用nth-child(n)，不必在父类标签下

 text-decoration:通常用于给链接修改装饰效果。

![](https://img-blog.csdnimg.cn/676dedb19b104c79b759ba373f89e171.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5Y2K6YeMX-i-sOaYjw==,size_20,color_FFFFFF,t_70,g_se,x_16)

 **使用技巧：**在一行内，设定行高等于盒子高度，可以使文字垂直居中。

## 八、CSS三大特性

## CSS层叠性

所谓层叠性是指多种CSS样式的叠加。

是浏览器处理冲突的一种能力，如果一个属性通过两个相同的选择器设置到了同一个元素上，那么此时一个属性就会将另一个属性层叠掉，此为样式冲突。如果出现样式冲突，以最后的样式为准。

> 1、样式冲突，遵循就近原则。哪个样式离着结构近，就执行哪个样式。
> 
> 2、样式不冲突，不会层叠。

## CSS继承性

所谓继承性就是指，书写CSS样式表时，子标签会继承父标签的某些样式，比如文本颜色和字号。

> 恰当地使用继承可以简化代码，降低CSS样式的复杂性，子元素可以继承的父元素样式：以text-，font-，line-这些元素开头的，以及color属性。

## CSS优先级 

在定义CSS样式时，经常出现两个或更多规则应用在一个元素上，这时会出现优先级的问题。

关于CSS权重，用一套公式来计算，是衡量CSS优先级的一个标准，具体规范如下：

四个级别从左到右，一级大于一级，数位之间没有进制，级别之间不可超越。

继承样式权重为0，不管父类元素权重多大，它被子类继承时权重都为0，子元素定义的元素会覆盖继承样式。

![](https://img-blog.csdnimg.cn/b039586269ca40caa5376ae8d596fe4e.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5Y2K6YeMX-i-sOaYjw==,size_20,color_FFFFFF,t_70,g_se,x_16)

 ![](https://img-blog.csdnimg.cn/c44626f42ea9456f86d865a711356d31.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5Y2K6YeMX-i-sOaYjw==,size_20,color_FFFFFF,t_70,g_se,x_16)

![](https://img-blog.csdnimg.cn/baddf891199c46b7aef067fe4a3880d6.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5Y2K6YeMX-i-sOaYjw==,size_20,color_FFFFFF,t_70,g_se,x_16)

## 九、CSS盒子模型（重点）

所谓盒子模型，就是把html页面中的元素看作是一个矩形的盒子，每个矩形都有元素的内容、内边距（padding）、边框（border）和外边距（margin）组成。

所有文档元素（标签）都会生成一个矩形框，我们称之为元素框（element box)，它描述了一个文档元素在网页布局汇总所占的位置大小。因此，每个盒子除了有自己的大小和为之外，还影响着其他盒子的大小和位置。

![](https://img-blog.csdnimg.cn/5bb452f4e5734ebda3ac9cb3c2427851.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5Y2K6YeMX-i-sOaYjw==,size_12,color_FFFFFF,t_70,g_se,x_16)

## 盒子边框（border）

语法：

> border：border-width || border-style || border-color

边框属性一：设置边框样式（border-style）

边框样式用于定义页面中的边框风格，常用如下：

> none：没有边框，忽略所有边框的宽度（默认值） 
> 
> solid：边框为单实线（最常用）
> 
> dashed：边框为虚线
> 
> dotted：边框为点线
> 
> double：边框为双实线（用得少）

border-style，border-width，border-color，设置四边属性时是按照上右下左的顺时针顺序。

```
div {border-color: red blue springgreen black;border-style: dashed double solid dotted;border-width: 1px 5px 10px 30px;}
```

一起写的时候中间用空格隔开。

```
div:nth-child(4) {border-top: 3px solid orangered;border-bottom: blueviolet 3px solid;}
```

 border属性不继承，可以继承的属性回看关于继承的部分。

cellspacing和cellpadding的区别：

前者为两个单元格之间的距离，后者为单元格内文字与边框的距离。

cellspacing表示表格各单元格之间的空隙，参数值是数字

cellpadding表示表格内文字和表格边框的距离

两个属性都应用在<table\>标签内部

![](https://img-blog.csdnimg.cn/529000a1fbce44a1abcb11a60339a61c.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5Y2K6YeMX-i-sOaYjw==,size_20,color_FFFFFF,t_70,g_se,x_16)

### 表格的细线边框

>  table {
> 
>            border-collapse: collapse;
> 
> }
> 
>  border-collapse: collapse表示边框合并到一起。

### 圆角边框（CSS3）

语法：

> border-radius：左上角  右上角  右下角  左下角；
> 
> 顺时针顺序

```
<style>div {height: 400px;width: 400px;border: 1px solid red;}div:first-child {border-radius: 10px;}div:nth-child(2) {border-radius: 50%;}div:nth-child(3) {border-radius: 10px 40px;}div:nth-child(4) {border-radius: 10px 40px 80px;}</style>
```

## 内边距（padding）

padding属性用于设置内边距，是指内容与边框之间的距离。

padding后跟的数值个数不同表达意思也不同，padding两个值代表的方向要和radius分开

<table><tbody><tr><td><strong>数值个数</strong></td><td><strong>表达意思（边距都指内边距）</strong></td></tr><tr><td>1个值</td><td>上下左右边距</td></tr><tr><td>2个值</td><td>前一个代表上下边距，后一个代表左右边距</td></tr><tr><td>3个值</td><td>上边距，左右边距，下边距</td></tr><tr><td>4个值</td><td>上边距，右边距，下边距，左边距</td></tr></tbody></table>

## 外边距（margin）

margin属性用于设置外边距。设置外边距会在元素之间创建“空白”，这段空白通常不能用来放置其他内容。

margin：上外边距  右外边距  下外边距  左外边距 

取值顺序和内边距（padding）一样。

### 外边距实现盒子居中

让一个盒子实现水平居中需要满足两个条件 ：

1、必须是块级元素

2、盒子必须指定了宽度（width）

然后就给左右的外边距都设置为auto，就可使块级元素水平居中。

```
header {width: 900px;height: 120px;background-color: black;margin: 0 auto;}
```

实际案例中，制作导航栏高度应选择奇数高度，行高用偶数就会出现边框像素留白的问题，使用a:hover时行内块不能全部变色，上下边缘会有1px的空白区域

**注意：**

> “margin:0 auto;” 对于inline-block不起作用。  
> 即使可以首先使用数值指定“inline-block”，使用“margin：0 auto;”居中也不起作用。  
> “text-align：center;”不会使父元素成为选择器  
> “text-align：center;”的基本规则是“selector是父元素”。  
> 如果要将其居中，则必须创建父元素。 
> 
>   
> 在行内块元素中使用margin：0 auto时，应同时对其父元素使用text-aline：center才能实现居中 

插入图片<img>也可也看作一个盒子，可以用margin和padding更改位置，但是背景图片更改位置只能用background-position。

一般情况下背景图片适合做一些小图标使用，产品展示类用的就是插入图片

### 清除元素默认外边距

> \* {
> 
>       padding: 0;         /\*清除内边距\*/
> 
>       margin: 0;          /\*清除外边距\*/
> 
> }

行内元素只有左右外边距，没有上下外边距。我们尽量不要给行内元素指定上下外边距。

## 外边距合并 

使用margin定义块级元素的垂直外边距时没可能会出现外边距的合并（也称外边距的塌陷）。 

### 相邻块元素垂直外边距合并

 ![](https://img-blog.csdnimg.cn/d8ee63ed739943aaafd43bd55111af76.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5Y2K6YeMX-i-sOaYjw==,size_20,color_FFFFFF,t_70,g_se,x_16)

> 解决方法：
> 
> 只设定一个margin值 

### 嵌套元素垂直外边距合并

![](https://img-blog.csdnimg.cn/5f3afe5a889f4fd8bb48cf08bb5e110e.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5Y2K6YeMX-i-sOaYjw==,size_20,color_FFFFFF,t_70,g_se,x_16)

>  解决方案：
> 
> ①为父元素定义1像素上边框（可以用透明边框，transparent）
> 
> ②为父元素定义1像素上内边距（padding）
> 
> ③为父元素添加overflow：hidden

## content宽度和高度

 使用宽度属性width和高度属性height可以对盒子大小进行控制。

width和height属性值可以为不同单位的数值或相对于父元素的百分比，但最常用的还是像素px

> /\*外和尺寸计算（元素空间尺寸）\*/
> 
> 元素空间高度=  height  +  padding  ＋  border  +  margin
> 
> 元素空间宽度=  width  +  padding  +  border  +  margin
> 
> /\*内盒尺寸计算（元素大小）\*/
> 
> 元素内容高度=  height  +  padding  +  border
> 
> 元素内容宽度=  width  +  padding  +  border

**注意：**

1、宽度属性width和高度属性height仅适用于块级元素，对于行内元素无效（img和input标签除外）

2、计算盒子模型总高度时，应该考虑上下两个盒子垂直外边距合并的情况。

## 盒子模型布局稳定性

根据稳定性区分使用优先级

> width   >   padding   >   margin

 原因：

1、margin会有外边距合并问题，所以最后使用

2、padding会影响盒子大小，需要进行加减计算后使用，比较麻烦

3、width没有问题，经常使用宽度 / 高度剩余法来做。

## CSS3盒模型（CSS3新增属性）

CSS3中可以用box-sizing 来指定和模型，可指定为content-box，border-box，这样计算盒子大小的方式会分为两种情况

> 1、**content-box**：传统盒子模型，盒子大小为：**width + padding + border**。content-box为默认值，维持W3C的标准Box Mode
> 
> 2、**border-box**：CSS3新增盒子模型，盒子大小为：**width**，就是说padding和border是包含在width里边的，不会撑大盒子。

## 十、浮动（float）

## 普通流

 简单理解就是传统div盒子，行内元素啊，块级元素啊，行内块元素的，就是普通流，也叫标准流

## 浮动

元素浮动是指设置了浮动属性的元素会脱离标准流控制，也就是飘起来

语法

> 选择器 { float：属性值；}

<table><tbody><tr><td>属性值</td><td>描述</td></tr><tr><td>left</td><td>元素向左浮动</td></tr><tr><td>right</td><td>元素向右浮动</td></tr><tr><td>none</td><td>元素不浮动（默认）</td></tr></tbody></table>

浮动元素首先找离自己最近的父元素对齐（左上角，或右上角对齐，取决于left和right），但是不会超过padding和border，只靠近内测对齐 

## **浮动特性（重难点）** 

1、浮动脱标（脱离标准流），不占位置，会影响标准流。浮动只会左右浮动

2、浮动的盒子不再保留原先的位置

3、 如果多个盒子都设置了浮动，则它们会按照属性值一行内显示并且顶端对齐排列。

![](https://img-blog.csdnimg.cn/89493a9c8f7c4ae4af25ba38f348badb.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5Y2K6YeMX-i-sOaYjw==,size_20,color_FFFFFF,t_70,g_se,x_16)

 注意： 浮动的元素是互相贴靠在一起的（不会有缝隙），如果父级宽度装不下这些浮动的盒子， 多出的盒子会另起一行对齐。

4、浮动元素会具有行内块元素特性 

-   如果块级盒子没有设置宽度，默认宽度和父级一样宽，但是添加浮动后，它的大小根据内容来决定
-   浮动的盒子中间是没有缝隙的，是紧挨着一起的
-   行内元素同理

浮动常常和父级标准流一起使用，即标准流父盒子内是浮动的子盒子 

 一个元素浮动了，理论上其余的兄弟元素也要浮动。  
如果不浮动会出问题  
浮动的盒子只会**影响**浮动盒子**后面的标准流**，**不会**影响前面的标准流.

## 清除浮动

清除浮动本质：解决父级元素因为子元素浮动引起的内部高度为0的问题。【本来子盒子是可以把父亲撑开的，但是浮动相当于飘起来，没法撑开了，父亲如果不设置高度，高度就会变成0】

清除浮动之后，父级就会根据浮动的子盒子自动检测高度。

> 清除浮动语法
> 
> 选择器{clear:属性值;}

<table><tbody><tr><td>属性值</td><td>描述</td></tr><tr><td>left&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td><td>清除左侧浮动的影响</td></tr><tr><td>right</td><td>清除右侧浮动的影响</td></tr><tr><td>both</td><td>同时清除</td></tr></tbody></table>

 我们实际工作中， 几乎只用 clear: both;

### 额外标签法 

额外标签法也称为隔墙法，是 W3C 推荐的做法。 

> 额外标签法会在浮动元素末尾添加一个空的标签，例如 <div style=”clear:both”></div> 

注意： 要求这个新的空标签必须是块级元素。 

### 其他方法 

1、父级添加 overflow 属性

        给父级添加 overflow 属性，将其属性值设置为 hidden、 auto 或 scroll 。

2、父级添加after伪元素

         :after 方式是额外标签法的升级版。也是给父元素添加

```
.clearfix:after {content: "";display: block;height: 0;clear: both;visibility: hidden;}.clearfix { *zoom: 1;}
```

3、 父级添加双伪元素

         也是给给父元素添加

```
.clearfix:before,.clearfix:after {content:"";display:table;}.clearfix:after {clear:both;}.clearfix {*zoom:1;}
```
