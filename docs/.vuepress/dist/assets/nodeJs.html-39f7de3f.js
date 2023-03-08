import{_ as d,M as l,p as a,q as r,R as i,t as e,N as v,a1 as n}from"./framework-6700cb35.js";const c={},u=n('<h1 id="nodejs" tabindex="-1"><a class="header-anchor" href="#nodejs" aria-hidden="true">#</a> NodeJs</h1><hr><h2 id="_1-开始" tabindex="-1"><a class="header-anchor" href="#_1-开始" aria-hidden="true">#</a> 1.开始</h2><ul><li>开始菜单 --&gt; 运行 --&gt; CMD --&gt; 回车</li><li>Win + R --&gt; CMD --&gt; 回车</li><li>常用的指令 dir 列出当前目录下的所有文件 cd 目录名 进入到指定的目录 md 目录名创建一个文件夹 rd 目录名删除一个文件夹 -目录 . 表示当前目录 .. 表示上一级目录 -环境变量（window系统中的变量 ） PATH 一个个的路径 C:\\Program Files\\Microsoft SQL Server\\130\\Tools\\Binn\\</li><li>当我们在命令行窗口打开一个文件，或调用一个程序时， 系统会首先在当前目录下寻找文件程序，如果找到了则直接打开 如果没有找到则会依次到环境变量path的路径中寻找，直到找到为止 如果没找到则报错 类似于作用域链 -所以我们可以将一些经常需要访问的程序和文件的路径添加到path中， 这样我们就可以在任意位置来访问这些文件和程序了</li></ul><h2 id="_2-进程和线程" tabindex="-1"><a class="header-anchor" href="#_2-进程和线程" aria-hidden="true">#</a> 2.进程和线程</h2><p>进程</p><ul><li>进程负责为程序的运行提供必备的环境</li><li>进程就相当于工厂中的车间</li></ul><p>线程</p><ul><li>线程是计算机中最小的计算单位，线程负责执行进程中的程序</li><li>线程就相当于工厂中的工人 单线程 JS是单线程，在执行JS代码的时候网页是停止渲染的。 多线程 主流的语言，如Java</li></ul>',9),o={id:"node-js简介",tabindex:"-1"},t=i("a",{class:"header-anchor",href:"#node-js简介","aria-hidden":"true"},"#",-1),b={href:"https://so.csdn.net/so/search?q=Node&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"},m=n(`<p>• Node.js是一个能够在服务器端运行JavaScript的开放源代码、跨平台<strong>JavaScript运行环境</strong>。</p><p>• Node采用Google开发的V8引擎运行js代码，使用<strong>事件驱动</strong>、<strong>非阻塞</strong>和<strong>异步I/O模型</strong>等技术来提高性能，可优化应用程序的传输量和规模。<br><img src="https://img-blog.csdnimg.cn/20190305141058444.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2Nhbnh1ZXpoYW5n,size_16,color_FFFFFF,t_70" alt="在这里插入图片描述"><br> • Node大部分基本模块都用JavaScript编写。在Node出现之前，JS通常作为客户端程序设计语言使用，以JS写出的程序常在用户的浏览器上运行。</p><p>• 目前，Node已被IBM、Microsoft、Yahoo!、Walmart、Groupon、SAP、 LinkedIn、Rakuten、PayPal、Voxer和GoDaddy等企业采用。</p><p>• Node主要用于编写像Web服务器一样的网络应用，这和PHP和Python是类似的。</p><p>• 但是Node与其他语言最大的不同之处在于，PHP等语言是阻塞的而Node是非阻塞的。</p><p>• Node是事件驱动的。开发者可以在不使用线程的情况下开发出一个能够承载高并发的服务器。其他服务器端语言难以开发高并发应用，而且即使开发出来，性能也不尽人意。</p><p>• Node正是在这个前提下被创造出来。</p><p>• Node把JS的易学易用和Unix网络编程的强大结合到了一起。</p><p>• Node.js允许通过JS和一系列模块来编写服务器端应用和网络相关的应用。</p><p>• 核心模块包括文件系统I/O、网络（HTTP、TCP、UDP、DNS、TLS/SSL等）、二进制数据流、加密算法、数据流等等。Node模块的API形式简单，降低了编程的复杂度。</p><p>• 使用框架可以加速开发。常用的框架有Express.js、Socket.IO和Connect等。Node.js的程序可以在Microsoft Windows、Linux、Unix、Mac OS X等服务器上运行。</p><p>• Node.js也可以使用CoffeeScript、TypeScript、Dart语言，以及其他能够编译成JavaScript的语言编程。</p><h2 id="node的用途" tabindex="-1"><a class="header-anchor" href="#node的用途" aria-hidden="true">#</a> Node的用途</h2><p>• Web服务API，比如REST<br> • 实时多人游戏<br> • 后端的Web服务，例如跨域、服务器端的请求<br> • 基于Web的应用<br> • 多客户端的通信，如即时通信</p><h2 id="简介总结" tabindex="-1"><a class="header-anchor" href="#简介总结" aria-hidden="true">#</a> 简介总结</h2><p>I/O (Input/Output)</p><ul><li>I/O操作指的是对磁盘的读写操作</li></ul><p>Node</p><ul><li><p>Node是对ES标准一个实现，Node也是一个JS引擎</p></li><li><p>通过Node可以使js代码在服务器端执行</p></li><li><p>Node仅仅对ES标准进行了实现，所以在Node中不包含DOM 和 BOM</p></li><li><p>Node中可以使用所有的内建对象 String Number Boolean Math Date RegExp Function Object Array 而BOM和DOM都不能使用 但是可以使用 console 也可以使用定时器（setTimeout() setInterval()）</p></li><li><p>Node可以在后台来编写服务器 Node编写服务器都是单线程的服务器</p></li><li><p>进程</p></li><li><p>进程就是一个一个的工作计划（工厂中的车间）</p></li><li><p>线程</p></li><li><p>线程是计算机最小的运算单位（工厂中的工人） 线程是干活的</p></li><li><p>传统的服务器都是多线程的</p></li><li><p>每进来一个请求，就创建一个线程去处理请求</p></li><li><p>Node的服务器单线程的</p></li><li><p>Node处理请求时是单线程，但是在后台拥有一个I/O线程池</p></li></ul><h2 id="在vscode中调出终端查看node-js代码执行" tabindex="-1"><a class="header-anchor" href="#在vscode中调出终端查看node-js代码执行" aria-hidden="true">#</a> 在VScode中调出终端查看node.js代码执行</h2><p>使用快捷键： <code>ctrl + ·</code></p><h2 id="commonjs规范" tabindex="-1"><a class="header-anchor" href="#commonjs规范" aria-hidden="true">#</a> COMMONJS规范</h2><h3 id="ecmascript标准的缺陷" tabindex="-1"><a class="header-anchor" href="#ecmascript标准的缺陷" aria-hidden="true">#</a> ECMAScript标准的缺陷</h3><p>• 没有模块系统<br> • 标准库较少<br> • 没有标准接口<br> • 缺乏管理系统</p><h3 id="模块化" tabindex="-1"><a class="header-anchor" href="#模块化" aria-hidden="true">#</a> 模块化</h3><p>• 如果程序设计的规模达到了一定程度，则必须对其进行模块化。</p><p>• 模块化可以有多种形式，但至少应该提供能够将代码分割为多个源文件的机制。</p><p>• CommonJS 的模块功能可以帮我们解决该问题。</p><h2 id="commonjs规范-1" tabindex="-1"><a class="header-anchor" href="#commonjs规范-1" aria-hidden="true">#</a> CommonJS规范</h2><p>• CommonJS规范的提出，主要是为了弥补当前JavaScript没有模块化标准的缺陷。</p><p>• CommonJS规范为JS指定了一个美好的愿景，希望JS能够在任何地方运行。</p><p>• CommonJS对模块的定义十分简单：</p><p>– 模块引用<br> – 模块定义<br> – 模块标识</p><h2 id="模块引用" tabindex="-1"><a class="header-anchor" href="#模块引用" aria-hidden="true">#</a> 模块引用</h2><p>• 在规范中，定义了require()方法，这个方法接手模块标识，以此将一个模块引入到当前运行环境中。</p><p>• 模块引用的示例代码：<br> – var math = require(‘math’);</p><h2 id="模块定义" tabindex="-1"><a class="header-anchor" href="#模块定义" aria-hidden="true">#</a> 模块定义</h2><p>• 在运行环境中，提供了exports对象用于导出当前模块的方法或者变量，并且它是唯一的导出的出口。</p><p>• 在模块中还存在一个module对象，它代表模块自身，而exports是module的属性。</p><p>• 在Node中一个文件就是一个模块。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>exports.xxx = function() {};
module.exports = {};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="模块标识" tabindex="-1"><a class="header-anchor" href="#模块标识" aria-hidden="true">#</a> 模块标识</h2><p>• 模块标识其实就是模块的名字，也就是传递给require()方法的参数，它必须是符合驼峰命名法的字符串，或者是以.、…开头的相对路径、或者绝对路径。</p><p>• 模块的定义十分简单，接口也十分简洁。每个模块具有独立的空间，它们互不干扰，在引用时也显得干净利落。</p><h2 id="模块化总结" tabindex="-1"><a class="header-anchor" href="#模块化总结" aria-hidden="true">#</a> 模块化总结</h2><p>模块化</p><ul><li>在Node中，一个js文件就是一个模块</li><li>在Node中，每一个js文件中的js代码都是独立运行在一个函数中 而不是全局作用域，所以一个模块的中的变量和函数在其他模块中无法访问</li></ul><p>03module.js</p><p>//引入其他的模块 /* 在node中，通过require()函数来引入外部的模块 require()可以传递一个文件的路径作为参数，node将会自动根据该路径来引入外部模块 这里路径，如果使用相对路径，必须以.或..开头</p><p>使用require()引入模块以后，该函数会返回一个对象，这个对象代表的是引入的模块</p><p>我们使用require()引入外部模块时，使用的就是模块标识，我们可以通过模块标识来找到指定的模块</p><ul><li>模块分成两大类 核心模块</li><li>由node引擎提供的模块</li><li>核心模块的标识就是，模块的名字</li><li>示例：var fs = require(&quot;fs&quot;); 文件模块</li><li>由用户自己创建的模块</li><li>文件模块的标识就是文件的路径（绝对路径，相对路径） 相对路径使用.或..开头</li></ul><p>*/ //var md = require(&quot;./02.module&quot;); var math = require(&quot;./math&quot;); var fs = require(&quot;fs&quot;);</p><p>//console.log(md); console.log(math.add(123,456)); //console.log(fs);</p><p>02module.js /* 我们可以通过 exports 来向外部暴露变量和方法 只需要将需要暴露给外部的变量或方法设置为exports的属性即可 */ //向外部暴露属性或方法 exports.x = &quot;我是02.module.js中的x&quot;; exports.y = &quot;我是y&quot;; exports.fn = function () {</p><p>};</p><p>04module.js /* 在node中有一个全局对象 global，它的作用和网页中window类似 在全局中创建的变量都会作为global的属性保存 在全局中创建的函数都会作为global的方法保存</p><p>当node在执行模块中的代码时，它会首先在代码的最顶部，添加如下代码 function (exports, require, module, __filename, __dirname) {</p><p>在代码的最底部，添加如下代码 }</p><p>实际上模块中的代码都是包装在一个函数中执行的，并且在函数执行时，同时传递进了5个实参 exports</p><ul><li>该对象用来将变量或函数暴露到外部</li></ul><p>require</p><ul><li>函数，用来引入外部的模块</li></ul><p>module</p><ul><li>module代表的是当前模块本身</li><li>exports就是module的属性</li><li>既可以使用 exports 导出，也可以使用module.exports导出</li></ul><p>__filename C:\\Users\\lilichao\\WebstormProjects\\class0705\\01.node\\04.module.js</p><ul><li><p>当前模块的完整路径</p><p>__dirname C:\\Users\\lilichao\\WebstormProjects\\class0705\\01.node</p></li><li><p>当前模块所在文件夹的完整路径</p></li></ul><p><em>/ //console.log(global.a); /</em> arguments.callee</p><ul><li>这个属性保存的是当前执行的函数对象 */ //console.log(arguments.callee + &quot;&quot;); //console.log(arguments.length);</li></ul><p>//console.log(exports); //console.log(module.exports == exports);</p><p>console.log(__dirname);</p><p>05module.js /* exports 和 module.exports</p><ul><li><p>通过exports只能使用.的方式来向外暴露内部变量 exports.xxx = xxx</p></li><li><p>而module.exports既可以通过.的形式，也可以直接赋值 module.exports.xxx = xxxx module.exports = {} */</p></li></ul><h2 id="node的模块实现" tabindex="-1"><a class="header-anchor" href="#node的模块实现" aria-hidden="true">#</a> Node的模块实现</h2><p>• Node中虽然使用的是CommonJS规范，但是其自身也对规范做了一些取舍。</p><p>• 在Node中引入模块，需要经历如下3个步骤：<br> – 路径分析<br> – 文件定位<br> – 编译执行</p><p>• 在Node中，模块分为三类：一类是底层由C++编写的内建模块，一类是Node提供的核心模块；还有一类是用户编写的模块，称为文件模块。</p><h2 id="包-package" tabindex="-1"><a class="header-anchor" href="#包-package" aria-hidden="true">#</a> 包 package</h2><p>• CommonJS的包规范允许我们将一组相关的模块组合到一起，形成一组完整的工具。</p><p>• CommonJS的包规范由包结构和包描述文件两个部分组成。</p><p>• 包结构<br> – 用于组织包中的各种文件</p><p>• 包描述文件<br> – 描述包的相关信息，以供外部读取分析</p><h2 id="包结构" tabindex="-1"><a class="header-anchor" href="#包结构" aria-hidden="true">#</a> 包结构</h2><p>• 包实际上就是一个压缩文件，解压以后还原为目录。符合规范的目录，应该包含如下文件：</p><p>– package.json 描述文件<br> – bin 可执行二进制文件<br> – lib js代码<br> – doc 文档<br> – test 单元测试</p><h2 id="包描述文件" tabindex="-1"><a class="header-anchor" href="#包描述文件" aria-hidden="true">#</a> 包描述文件</h2><p>• 包描述文件用于表达非代码相关的信息，它是一个JSON格式的文件 – package.json，位于包的根目录下，是包的重要组成部分。</p><p>• package.json中的字段</p><p>– name、description、version、keywords、maintainers、contributors、bugs、licenses、repositories、dependencies、homepage、os、cpu、engine、builtin、directories、implements、scripts、author、bin、main、devDependencies。</p><p><strong>在JSON文件不能写注释</strong></p><h2 id="npm-node-package-manager" tabindex="-1"><a class="header-anchor" href="#npm-node-package-manager" aria-hidden="true">#</a> NPM(Node Package Manager)</h2><p>• CommonJS包规范是理论，NPM是其中一种实践。</p><p>• 对于Node而言，NPM帮助其完成了第三方模块的发布、安装和依赖等。借助NPM，Node与第三方模块之间形成了很好的一个生态系统。</p><h2 id="npm命令" tabindex="-1"><a class="header-anchor" href="#npm命令" aria-hidden="true">#</a> NPM命令</h2><p>• npm –v<br> – 查看版本<br> • npm<br> – 帮助说明<br> • npm search 包名<br> – 搜索模块包<br> • npm install<br> –下载当前项目所依赖的包<br> • npm install 包名<br> – 在当前目录安装包<br> • npm install 包名 –g<br> – 全局模式安装包（全局安装的包一般都是一些工具）<br> • npm remove 包名<br> – 删除一个模块<br> • npm install 包名 --save<br> – 安装包并添加到依赖中<br> • npm install 文件路径<br> – 从本地安装<br> • npm install 包名 –registry=地址<br> – 从镜像源安装<br> • npm config set registry 地址<br> – 设置镜像源</p><h2 id="npm总结笔记" tabindex="-1"><a class="header-anchor" href="#npm总结笔记" aria-hidden="true">#</a> NPM总结笔记</h2><p>/* 通过npm下载的包都放到node_modules文件夹中 我们通过npm下载的包，直接通过包名引入即可</p><p>node在使用模块名字来引入模块时，它会首先在当前目录的node_modules中寻找是否含有该模块 如果有则直接使用，如果没有则去上一级目录的node_modules中寻找 如果有则直接使用，如果没有则再去上一级目录寻找，直到找到为止 直到找到磁盘的根目录，如果依然没有，则报错</p><p>*/</p><h2 id="buffer-缓冲区" tabindex="-1"><a class="header-anchor" href="#buffer-缓冲区" aria-hidden="true">#</a> Buffer(缓冲区)</h2><p>• 从结构上看Buffer非常像一个数组，它的元素为16进制的两位数。<br><strong>JS数组性能比其他语言的数组差</strong></p><p>• 实际上一个元素就表示内存中的一个字节。</p><p>• 实际上Buffer中的内存不是通过JavaScript分配的，而是在底层通过C++申请的。</p><p>• 也就是我们可以直接通过Buffer来创建内存中的空间。</p><h2 id="buffer的操作" tabindex="-1"><a class="header-anchor" href="#buffer的操作" aria-hidden="true">#</a> Buffer的操作</h2><p>• 使用Buffer保存字符串</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let str = &quot;你好 atguigu&quot;;
let buf = Buffer.from(str , &quot;utf-8&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>• 创建指定大小的Buffer对象</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let buf3 = Buffer.alloc(1024*8)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="buffer的转换" tabindex="-1"><a class="header-anchor" href="#buffer的转换" aria-hidden="true">#</a> Buffer的转换</h2><h3 id="buffer与字符串间的转换" tabindex="-1"><a class="header-anchor" href="#buffer与字符串间的转换" aria-hidden="true">#</a> Buffer与字符串间的转换</h3><p>– 支持的编码:<br> • ASCII、UTF-8、UTF-16LE/UCS-2、Base64、Binary、Hex</p><p>– 字符串转Buffer<br> • Buffer.from(str , [encoding]);</p><p>– Buffer转字符串<br> • buf.toString([encoding] , [start] , [end]);</p><h2 id="写入操作" tabindex="-1"><a class="header-anchor" href="#写入操作" aria-hidden="true">#</a> 写入操作</h2><p>• 向缓冲区中写入字符串<br> – <code>buf.write(string[, offset[, length]][, encoding])</code></p><p>• 替换指定索引位置的数据<br> – <code>buf[index]</code></p><p>• 将指定值填入到缓冲区的指定位置<br> – <code>buf.fill(value[, offset[, end]][, encoding])</code></p><h2 id="读取操作" tabindex="-1"><a class="header-anchor" href="#读取操作" aria-hidden="true">#</a> 读取操作</h2><p>• 将缓冲区中的内容，转换为一个字符串返回<br> – <code>buf.toString([encoding[, start[, end]]])</code></p><p>• 读取缓冲区指定索引的内容<br> – <code>buf[index]</code></p><h2 id="其他操作" tabindex="-1"><a class="header-anchor" href="#其他操作" aria-hidden="true">#</a> 其他操作</h2><p>• 复制缓冲区<br> – <code>buf.copy(target[, targetStart[, sourceStart[, sourceEnd]]])</code></p><p>• 对缓冲区切片<br> – <code>buf.slice([start[, end]])</code></p><p>• 拼接缓冲区<br> – <code>Buffer.concat(list[, totalLength])</code></p><h2 id="buffer总结笔记" tabindex="-1"><a class="header-anchor" href="#buffer总结笔记" aria-hidden="true">#</a> Buffer总结笔记</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/*
Buffer(缓冲区)
- Buffer的结构和数组很像，操作的方法也和数组类似
- 数组中不能存储二进制的文件，而buffer就是专门用来存储二进制数据
- 使用buffer不需要引入模块，直接使用即可
- 在buffer中存储的都是二进制数据，但是在显示时都是以16进制的形式显示
buffer中每一个元素的范围是从00 - ff   0 - 255
00000000 - 11111111

计算机 一个0 或一个1 我们称为1位（bit）

8bit = 1byte（字节）
1024byte = 1kb
1024kb = 1mb
1024mb = 1gb
1024gb = 1tb

buffer中的一个元素，占用内存的一个字节

- Buffer的大小一旦确定，则不能修改，Buffer实际上是对底层内存的直接操作

 */
 var str = &quot;Hello 尚硅谷&quot;;

//将一个字符串保存到buffer中
var buf = Buffer.from(str);
//创建一个指定大小的buffer
//buffer构造函数都是不推荐使用的
//var buf2 = new Buffer(10);//10个字节的buffer
//console.log(buf2.length);

//创建一个10个字节的buffer
var buf2 = Buffer.alloc(10);
//通过索引，来操作buf中的元素
buf2[0] = 88;
buf2[1] = 255;
buf2[2] = 0xaa;
buf2[3] = 255;

//只要数字在控制台或页面中输出一定是10进制
//console.log(buf2[2].toString(16));

/*for(var i=0 ; i&lt;buf2.length ; i++){
console.log(buf2[i]);
}*/

//Buffer.allocUnsafe(size) 创建一个指定大小的buffer，但是buffer中可能含有敏感数据
/*var buf3 = Buffer.allocUnsafe(10);
console.log(buf3);*/

/*
Buffer.from(str) 将一个字符串转换为buffer
Buffer.alloc(size) 创建一个指定大小的Buffer
Buffer.alloUnsafe(size) 创建一个指定大小的Buffer，但是可能包含敏感数据
 buf.toString() 将缓冲区中的数据转换为字符串
 */

var buf4 = Buffer.from(&quot;我是一段文本数据&quot;);

console.log(buf4.toString());

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="fs-文件系统" tabindex="-1"><a class="header-anchor" href="#fs-文件系统" aria-hidden="true">#</a> fs（文件系统）</h2><p>• 在Node中，与文件系统的交互是非常重要的，服务器的本质就将本地的文件发送给远程的客户端</p><p>• Node通过fs模块来和文件系统进行交互</p><p>• 该模块提供了一些标准文件访问API来打开、读取、写入文件，以及与其交互。</p><p>• 要使用fs模块，首先需要对其进行加载<br> – <code>const fs = require(&quot;fs&quot;);</code></p><h2 id="同步和异步调用" tabindex="-1"><a class="header-anchor" href="#同步和异步调用" aria-hidden="true">#</a> 同步和异步调用</h2><p>• fs模块中所有的操作都有两种形式可供选择同步和异步。</p><p>• 同步文件系统会阻塞程序的执行，也就是除非操作完毕，否则不会向下执行代码。</p><p>• 异步文件系统不会阻塞程序的执行，而是在操作完成时，通过回调函数将结果返回。</p><h2 id="打开和关闭文件" tabindex="-1"><a class="header-anchor" href="#打开和关闭文件" aria-hidden="true">#</a> 打开和关闭文件</h2><p>• 打开文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>– fs.open(path, flags[, mode], callback)
– fs.openSync(path, flags[, mode])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>• 关闭文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>– fs.close(fd, callback)
– fs.closeSync(fd)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="打开状态" tabindex="-1"><a class="header-anchor" href="#打开状态" aria-hidden="true">#</a> 打开状态</h2><p><img src="https://img-blog.csdnimg.cn/20190305185923280.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2Nhbnh1ZXpoYW5n,size_16,color_FFFFFF,t_70" alt="在这里插入图片描述"></p><h2 id="写入文件" tabindex="-1"><a class="header-anchor" href="#写入文件" aria-hidden="true">#</a> 写入文件</h2><p>• fs中提供了四种不同的方式将数据写入文件<br> – 简单文件写入<br> – 同步文件写入<br> – 异步文件写入<br> – 流式文件写入</p><h2 id="简单文件写入" tabindex="-1"><a class="header-anchor" href="#简单文件写入" aria-hidden="true">#</a> 简单文件写入</h2><p>• fs.writeFile(file, data[, options], callback)<br> • fs.writeFileSync(file, data[, options])<br> • 参数：<br> – file 文件路径<br> – data 被写入的内容，可以是String或Buffer<br> – options 对象，包含属性（encoding、mode、flag）<br> – callback 回调函数</p><h2 id="同步文件写入" tabindex="-1"><a class="header-anchor" href="#同步文件写入" aria-hidden="true">#</a> 同步文件写入</h2><p>• fs.writeSync(fd, buffer, offset, length[, position])<br> • fs.writeSync(fd, data[, position[, encoding]])<br> • 要完成同步写入文件，先需要通过openSync()打开文件来获取一个文件描述符，然后在通过writeSync()写入文件。<br> • 参数<br> – fd 文件描述符，通过openSync()获取<br> – data 要写入的数据（String 或 Buffer）<br> – offset buffer写入的偏移量<br> – length 写入的长度<br> – position 写入的起始位置<br> – encoding 写入编码</p><h2 id="异步文件写入" tabindex="-1"><a class="header-anchor" href="#异步文件写入" aria-hidden="true">#</a> 异步文件写入</h2><p>• fs.write(fd, buffer, offset, length[, position], callback)<br> • fs.write(fd, data[, position[, encoding]], callback)<br> • 要使用异步写入文件，先需要通过open()打开文件，然后在回调函数中通过write()写入。<br> • 参数：<br> – fd 文件描述符<br> – data 要写入的数据（String 或 Buffer）<br> – offset buffer写入的偏移量<br> – length 写入的长度<br> – position 写入的起始位置<br> – encoding 写入编码</p><h2 id="流式文件写入" tabindex="-1"><a class="header-anchor" href="#流式文件写入" aria-hidden="true">#</a> 流式文件写入</h2><p>• 往一个文件中写入大量数据时，最好的方法之一是使用流。<br> • 若要将数据异步传送到文件，首需要使用以下语法创建一个Writable对象：<br> – fs.createWriteStream(path[, options])<br> • path 文件路径<br> • options {encoding:&quot;&quot;,mode:&quot;&quot;,flag:&quot;&quot;}<br> • 一旦你打开了Writable文件流，就可以使用write()方法来写入它，写入完成后，在调用end()方法来关闭流。</p><h2 id="读取文件" tabindex="-1"><a class="header-anchor" href="#读取文件" aria-hidden="true">#</a> 读取文件</h2><p>• fs中提供了四种读取文件的方式<br> – 简单文件读取<br> – 同步文件读取<br> – 异步文件读取<br> – 流式文件读取</p><h2 id="简单文件读取" tabindex="-1"><a class="header-anchor" href="#简单文件读取" aria-hidden="true">#</a> 简单文件读取</h2><p>• fs.readFile(file[, options], callback)<br> • fs.readFileSync(file[, options])<br> – 参数：<br> • file 文件路径或文件描述符</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>• options &lt;Object\\&gt; | &lt;String\\&gt;
– encoding &lt;String\\&gt; | &lt;Null\\&gt; 默认 = null
– flag &lt;String\\&gt; 默认 = &#39;r&#39;
• callback 回调函数，有两个参数err 、data
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="同步文件读取" tabindex="-1"><a class="header-anchor" href="#同步文件读取" aria-hidden="true">#</a> 同步文件读取</h2><p>• fs.readSync(fd, buffer, offset, length, position)<br> – 参数：<br> • fd 文件描述符<br> • buffer 读取文件的缓冲区<br> • offset buffer的开始写入的位置<br> • length 要读取的字节数<br> • position 开始读取文件的位置</p><h2 id="异步文件读取" tabindex="-1"><a class="header-anchor" href="#异步文件读取" aria-hidden="true">#</a> 异步文件读取</h2><p>• fs.read(fd, buffer, offset, length, position, callback)<br> – 参数：<br> • fd 文件描述符<br> • buffer 读取文件的缓冲区<br> • offset buffer的开始写入的位置<br> • length 要读取的字节数<br> • position 开始读取文件的位置<br> • callback 回调函数 参数err , bytesRead , buffer</p><h2 id="流式文件读取" tabindex="-1"><a class="header-anchor" href="#流式文件读取" aria-hidden="true">#</a> 流式文件读取</h2><p>• 从一个文件中读取大量的数据时，最好的方法之一就是流式读取，这样将把一个文件作为Readable流的形式打开。<br> • 要从异步从文件传输数据，首先需要通过以下语法创建一个Readable流对象：<br> – fs.createReadStream(path[, options])<br> • path 文件路径<br> • options {encoding:&quot;&quot;,mode:&quot;&quot;,flag:&quot;&quot;}<br> • 当你打开Readable文件流以后，可以通过readable事件和read()请求，或通过data事件处理程序轻松地从它读出。</p><h2 id="其他操作-1" tabindex="-1"><a class="header-anchor" href="#其他操作-1" aria-hidden="true">#</a> 其他操作</h2><p>• 验证路径是否存在<br> – fs.exists(path，callback)<br> – fs.existsSync(path)<br> • 获取文件信息<br> – fs.stat(path, callback)<br> – fs.statSync(path)<br> • 删除文件<br> – fs.unlink(path, callback)<br> – fs.unlinkSync(path)<br> • 列出文件<br> – fs.readdir(path[, options], callback)<br> – fs.readdirSync(path[, options])<br> • 截断文件<br> – fs.truncate(path, len, callback)<br> – fs.truncateSync(path, len)<br> • 建立目录<br> – fs.mkdir(path[, mode], callback)<br> – fs.mkdirSync(path[, mode])<br> • 删除目录<br> – fs.rmdir(path, callback)<br> – fs.rmdirSync(path)<br> • 重命名文件和目录<br> – fs.rename(oldPath, newPath, callback)<br> – fs.renameSync(oldPath, newPath)<br> • 监视文件更改写入<br> – fs.watchFile(filename[, options], listener)</p><h2 id="fs总结笔记" tabindex="-1"><a class="header-anchor" href="#fs总结笔记" aria-hidden="true">#</a> fs总结笔记</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/*
文件系统（File System）
- 文件系统简单来说就是通过Node来操作系统中的文件
- 使用文件系统，需要先引入fs模块，fs是核心模块，直接引入不需要下载

同步文件的写入
- 手动操作的步骤
1.打开文件
 fs.openSync(path, flags[, mode])
 - path 要打开文件的路径
 - flags 打开文件要做的操作的类型
 r 只读的
 w 可写的
 - mode 设置文件的操作权限，一般不传
 返回值：
 - 该方法会返回一个文件的描述符作为结果，我们可以通过该描述符来对文件进行各种操作

2.向文件中写入内容
 fs.writeSync(fd, string[, position[, encoding]])
 - fd 文件的描述符，需要传递要写入的文件的描述符
 - string 要写入的内容
 - position 写入的起始位置
 - encoding 写入的编码，默认utf-8

3.保存并关闭文件
 fs.closeSync(fd)
 - fd 要关闭的文件的描述符



 */
var fs = require(&quot;fs&quot;);

//打开文件
var fd = fs.openSync(&quot;hello.txt&quot; , &quot;w&quot;);

//向文件中写入内容
fs.writeSync(fd , &quot;今天天气真不错~~~&quot;, 2);

//关闭文件
fs.closeSync(fd);

console.log(&quot;程序向下执行~~~&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/**
异步文件写入
 fs.open(path, flags[, mode], callback)
 - 用来打开一个文件
    - 异步调用的方法，结果都是通过回调函数的参数返回的
 - 回调函数两个参数：
 err 错误对象，如果没有错误则为null
 fd  文件的描述符
 fs.write(fd, string[, position[, encoding]], callback)
 - 用来异步写入一个文件

 fs.close(fd, callback)
 - 用来关闭文件

 */

//引入fs模块
var fs = require(&quot;fs&quot;);


//打开文件
fs.open(&quot;hello2.txt&quot;,&quot;w&quot;,function (err , fd) {
//判断是否出错
if(!err){
//如果没有出错，则对文件进行写入操作
fs.write(fd,&quot;这是异步写入的内容&quot;,function (err) {
if(!err){
console.log(&quot;写入成功~~&quot;);
}
//关闭文件
fs.close(fd , function (err) {
if(!err){
console.log(&quot;文件已关闭~~~&quot;);
}
});
});
}else{
console.log(err);
}
});

console.log(&quot;程序向下执行~~~&quot;);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/*
简单文件写入
 fs.writeFile(file, data[, options], callback)
 fs.writeFileSync(file, data[, options])
- file 要操作的文件的路径
- data 要写入的数据
- options 选项，可以对写入进行一些设置
- callback 当写入完成以后执行的函数

- flag
r 只读
w 可写
a 追加
 */
//引入fs模块
var fs = require(&quot;fs&quot;);

/*fs.writeFile(&quot;hello3.txt&quot;,&quot;这是通过writeFile写入的内容&quot;,{flag:&quot;r+&quot;} , function (err) {
if(!err){
console.log(&quot;写入成功~~~&quot;);
}else{
console.log(err);
}
});*/


//C:\\Users\\lilichao\\Desktop\\hello.txt
//C:\\\\Users\\\\lilichao\\\\Desktop\\\\hello.txt

fs.writeFile(&quot;C:/Users/lilichao/Desktop/hello.txt&quot;,&quot;这是通过writeFile写入的内容&quot;,{flag:&quot;w&quot;} , function (err) {
if(!err){
console.log(&quot;写入成功~~~&quot;);
}else{
console.log(err);
}
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/*
同步、异步、简单文件的写入都不适合大文件的写入，性能较差，容易导致内存溢出
 */
var fs = require(&quot;fs&quot;);

//流式文件写入
//创建一个可写流
/*
fs.createWriteStream(path[, options])
- 可以用来创建一个可写流
- path，文件路径
- options 配置的参数
 */
var ws = fs.createWriteStream(&quot;hello3.txt&quot;);

//可以通过监听流的open和close事件来监听流的打开和关闭
/*
on(事件字符串,回调函数)
- 可以为对象绑定一个事件

once(事件字符串,回调函数)
- 可以为对象绑定一个一次性的事件，该事件将会在触发一次以后自动失效

* */
ws.once(&quot;open&quot;,function () {
console.log(&quot;流打开了~~~&quot;);
});

ws.once(&quot;close&quot;,function () {
console.log(&quot;流关闭了~~~&quot;);
});

//通过ws向文件中输出内容
ws.write(&quot;通过可写流写入文件的内容&quot;);
ws.write(&quot;今天天气真不错&quot;);
ws.write(&quot;锄禾日当午&quot;);
ws.write(&quot;红掌拨清清&quot;);
ws.write(&quot;清清真漂亮&quot;);

//关闭流，关闭写的那个文件的管口
ws.end();
//关闭流，关闭读的那个文件的管口
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/*
1.同步文件读取
2.异步文件读取
3.简单文件读取
 fs.readFile(path[, options], callback)
 fs.readFileSync(path[, options])
 - path 要读取的文件的路径
 - options 读取的选项
 - callback回调函数，通过回调函数将读取到内容返回(err , data)
 err 错误对象
 data 读取到的数据，会返回一个Buffer

4.流式文件读取
 */

var fs = require(&quot;fs&quot;);

var path = &quot;C:/Users/lilichao/Desktop/笔记.mp3&quot;;

fs.readFile(&quot;an.jpg&quot; , function (err , data) {
if(!err){
//console.log(data);
//将data写入到文件中
fs.writeFile(&quot;C:/Users/lilichao/Desktop/hello.jpg&quot;,data,function(err){
if(!err){
console.log(&quot;文件写入成功&quot;);
}
} );
}
});


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/*
流式文件读取也适用于一些比较大的文件，可以分多次将文件读取到内存中
 */

var fs = require(&quot;fs&quot;);

//创建一个可读流
var rs = fs.createReadStream(&quot;C:/Users/lilichao/Desktop/笔记.mp3&quot;);
//创建一个可写流
var ws = fs.createWriteStream(&quot;a.mp3&quot;);

//监听流的开启和关闭
rs.once(&quot;open&quot;,function () {
console.log(&quot;可读流打开了~~&quot;);
});

rs.once(&quot;close&quot;,function () {
console.log(&quot;可读流关闭了~~&quot;);
//数据读取完毕，关闭可写流

ws.end();
});

ws.once(&quot;open&quot;,function () {
console.log(&quot;可写流打开了~~&quot;);
});

ws.once(&quot;close&quot;,function () {
console.log(&quot;可写流关闭了~~&quot;);
});

//如果要读取一个可读流中的数据，必须要为可读流绑定一个data事件，data事件绑定完毕，它会自动开始读取数据
rs.on(&quot;data&quot;, function (data) {
//console.log(data);
//将读取到的数据写入到可写流中
ws.write(data);
});

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/*
流式文件读取也适用于一些比较大的文件，可以分多次将文件读取到内存中
 */

var fs = require(&quot;fs&quot;);

//创建一个可读流
var rs = fs.createReadStream(&quot;C:/Users/lilichao/Desktop/笔记.mp3&quot;);
//创建一个可写流
var ws = fs.createWriteStream(&quot;b.mp3&quot;);

//pipe()可以将可读流中的内容，直接输出到可写流中
rs.pipe(ws);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>node
- 包（package）
- 将多个模块组合为一个完整的功能，就是一个包
- 包结构
bin
- 二进制的可执行文件，一般都是一些工具包中才有
lib
- js文件
doc
- 文档
test
- 测试代码
package.json
- 包的描述文件

- package.json
- 它是一个json格式的文件，在它里面保存了包各种相关的信息
name 包名
version 版本
dependencies 依赖
main 包的主要的文件
bin 可执行文件

- npm（Node Package Manager node的包管理器）
- 通过npm可以对node中的包进行上传、下载、搜索等操作
- npm会在安装完node以后，自动安装
- npm的常用指令
npm -v 查看npm的版本
npm version 查看所有模块的版本
npm init 初始化项目（创建package.json）
npm i/install 包名 安装指定的包
npm i/install 包名 --save 安装指定的包并添加依赖
npm i/install 包名 -g 全局安装（一般都是一些工具）
npm i/install 安装当前项目所依赖的包
npm s/search 包名 搜索包
npm r/remove 包名 删除一个包

文件系统（File System）
- Buffer（缓冲区）
- Buffer和数组的结构的非常类似，Buffer是用来存储二进制数据的
- Buffer的方法
- Buffer.from(字符串)
- 将一个字符串中内容保存到一个buffer中
- buf.toString()
- 将buffer转换为一个字符串
- Buffer.alloc(size)
- 创建一个指定大小的buffer对象
- Buffer.allocUnsafe(size)
- 创建一个指定大小的buffer对象，可以包含敏感数据


- fs模块
- 在Node通过fs模块来对系统中的文件进行操作，fs模块是node中已经继承好了，不需要在使用npm下载，直接引入即可
- 引入fs
var fs = require(&quot;fs&quot;);
- fs模块中的大部分操作都提供了两种方法，同步方法和异步方法
同步方法带sync
异步方法没有sync，都需要回调函数

- 写入文件
1.同步写入
2.异步写入
3.简单写入
4.流式写入

- 读取文件
1.同步读取
2.异步读取
3.简单读取
4.流式读取

- 方法
- 打开文件
fs.open(path, flags[, mode], callback)
fs.openSync(path, flags[, mode])

- 读写文件
fs.write(fd, string[, position[, encoding]], callback)
fs.writeSync(fd, string[, position[, encoding]])

fs.read(fd, buffer, offset, length, position, callback)
fs.readSync(fd, buffer, offset, length, position)

- 关闭文件
fs.close(fd,callback)
fs.closeSync(fd);

- 简单文件读取和写入
fs.writeFile(file, data[, options], callback)
fs.writeFileSync(file, data[, options])

fs.readFile(path[, options], callback)
fs.readFileSync(path[, options])


- 流式文件读取和写入
- 流式读取和写入适用于一些比较大的文件
fs.createWriteStream(path[, options])
fs.createReadStream(path[, options])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,175);function p(f,h){const s=l("ExternalLinkIcon");return a(),r("div",null,[u,i("h2",o,[t,e(),i("a",b,[e("Node"),v(s)]),e(".js简介")]),m])}const x=d(c,[["render",p],["__file","nodeJs.html.vue"]]);export{x as default};
