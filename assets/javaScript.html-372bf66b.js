import{_ as a,M as s,p as l,q as t,R as e,t as n,N as r,a1 as d}from"./framework-6700cb35.js";const v={},b=d(`<h1 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> JavaScript</h1><hr><h2 id="javascript简介" tabindex="-1"><a class="header-anchor" href="#javascript简介" aria-hidden="true">#</a> JavaScript简介</h2><p>JavaScript负责页面中的的行为。</p><p>它是一门运行在浏览器端的脚本语言。</p><h2 id="js的编写的位置" tabindex="-1"><a class="header-anchor" href="#js的编写的位置" aria-hidden="true">#</a> JS的编写的位置</h2><p>1.可以编写到标签的指定属性中</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;button onclick=&quot;alert(&#39;hello&#39;);&quot;&gt;我是按钮&lt;/button&gt;  
&lt;a href=&quot;javascript:alert(&#39;aaa&#39;);&quot;&gt;超链接&lt;/a&gt;  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>2.可以编写到script标签中</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script type=&quot;text/javascript&quot;&gt;  
//编写js代码  
&lt;/script&gt;  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.可以将代码编写到外部的js文件中，然后通过标签将其引入</p><p>script标签一旦用于引入外部文件了，就不能在编写代码了，即使编写了浏览器也会忽略 ,如果需要则可以在创建一个新的script标签用于编写内部代码</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script type=&quot;text/javascript&quot; src=&quot;文件路径&quot;&gt;&lt;/script&gt;  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="输出语句" tabindex="-1"><a class="header-anchor" href="#输出语句" aria-hidden="true">#</a> 输出语句</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>alert(&quot;要输出的内容&quot;);  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>该语句会在浏览器窗口中弹出一个警告框</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>document.write(&quot;要输出的内容&quot;);  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>该内容将会被写到body标签中，并在页面中显示</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>console.log(&quot;要输出的内容&quot;);  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>该内容会被写到开发者工具的控制台中</p><h2 id="基本的语法" tabindex="-1"><a class="header-anchor" href="#基本的语法" aria-hidden="true">#</a> 基本的语法</h2><p>js函数声明不需要；分号，但是赋值语句要加；分号</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function functionName(arg0,arg1,arg2){  
//函数声明  
}  
var functionName=function(arg0,arg1,arg2){  
//函数表达式  
};(注意分号)  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注释</p><p>单行注释</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//注释内容  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>多行注释</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/*  
注释内容  
*/  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>JS严格区分大小写</p><p>JS中每条语句以分号(;)结尾如果不写分号，浏览器会自动添加，但是会消耗一些系统资源， 而且有些时候，浏览器会加错分号，所以在开发中分号必须写</p><p>JS中会自动忽略多个空格和换行，所以我们可以利用空格和换行对代码进行格式化。</p><h2 id="字面量和变量" tabindex="-1"><a class="header-anchor" href="#字面量和变量" aria-hidden="true">#</a> 字面量和变量</h2><h3 id="字面量" tabindex="-1"><a class="header-anchor" href="#字面量" aria-hidden="true">#</a> 字面量</h3><p>字面量实际上就是一些固定的值，比如 1 2 3 4 true false null NaN “hello”<br><strong>字面量都是不可以改变的。</strong></p><p>由于字面量不是很方便使用，所以在JS中很少直接使用字面量</p><h3 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h3><p>变量可以用来保存字面量，并且可以保存任意的字面量</p><p>一般都是通过变量来使用字面量，而不直接使用字面量，而且也可以通过变量来对字面量进行一个描述</p><p>声明变量</p><p>使用var关键字来声明一个变量</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var a;  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>为变量赋值</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>a = 1; 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>声明和赋值同时进行</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var a = 456;   

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="标识符" tabindex="-1"><a class="header-anchor" href="#标识符" aria-hidden="true">#</a> 标识符</h3><p>在JS中所有的可以自主命名的内容，都可以认为是一个标识符，<br> 是标识符就应该遵守标识符的规范。</p><p>比如：变量名、函数名、属性名</p><p>规范：<br> 1.标识符中可以含有字母、数字、_、$<br> 2.标识符不能以数字开头<br> 3.标识符不能是JS中的关键字和保留字<br> 4.标识符一般采用驼峰命名法<br> xxxYyyZzz</p><h2 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型" aria-hidden="true">#</a> 数据类型</h2><h2 id="六种数据类型" tabindex="-1"><a class="header-anchor" href="#六种数据类型" aria-hidden="true">#</a> 六种数据类型</h2>`,51),u=e("strong",null,"JS中一共分成六种数据类型 5个基本数据类型+object",-1),c=e("br",null,null,-1),o=e("br",null,null,-1),m=e("br",null,null,-1),p={href:"https://so.csdn.net/so/search?q=Boolean&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"},h=e("br",null,null,-1),g=e("br",null,null,-1),x=e("br",null,null,-1),f=d(`<p>其中基本数据类型有 5个</p><p><strong>typeof运算符检查数据类型</strong></p><h3 id="_1-string-字符串" tabindex="-1"><a class="header-anchor" href="#_1-string-字符串" aria-hidden="true">#</a> 1.String 字符串</h3><p>JS中的字符串需要使用引号引起来双引号或单引号都行<br> 在字符串中使用\\作为转义字符</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\\&#39;  ==&gt; &#39;  
\\&quot;  ==&gt; &quot;  
\\n  ==&gt; 换行  
\\t  ==&gt; 制表符  
\\\\  ==&gt; \\  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用typeof运算符检查字符串时，会返回&quot;string&quot;</p><h3 id="_2-number-数值" tabindex="-1"><a class="header-anchor" href="#_2-number-数值" aria-hidden="true">#</a> 2.Number 数值</h3><p><strong>JS中所有的整数和浮点数都是Number类型</strong></p><p>最大能表示的值：Number.MAX_VALUE= 1.7976931348623157e+308</p><p>特殊的数字：能赋值给变量<br> Infinity 正无穷 a = Infinity ,能赋值<br> -Infinity 负无穷<br> NaN 非法数字（Not A Number）<br> 其他进制的数字的表示：<br> 0b 开头表示二进制，但是不是所有的浏览器都支持<br> 0 开头表示八进制<br> 0x 开头表示十六进制</p><p>使用typeof检查一个Number类型的数据时，会返回&quot;number&quot;<br> （包括NaN 和 Infinity）</p><h3 id="_3-boolean-布尔值" tabindex="-1"><a class="header-anchor" href="#_3-boolean-布尔值" aria-hidden="true">#</a> 3.Boolean 布尔值</h3><p>布尔值主要用来进行逻辑判断，布尔值只有两个<br> true 逻辑的真<br> false 逻辑的假<br> 使用typeof检查一个布尔值时，会返回&quot;boolean&quot;</p><h3 id="_4-null-空值" tabindex="-1"><a class="header-anchor" href="#_4-null-空值" aria-hidden="true">#</a> 4.Null 空值</h3><p>空值专门用来表示为空的对象，Null类型的值只有一个<br> null<br> 使用typeof检查一个Null类型的值时会返回&quot;object&quot;</p><h3 id="_5-undefined-未定义" tabindex="-1"><a class="header-anchor" href="#_5-undefined-未定义" aria-hidden="true">#</a> 5.Undefined 未定义</h3><p><strong>如果声明一个变量但是没有为变量赋值此时变量的值就是undefined</strong><br> 该类型的值只有一个 undefined<br> 使用typeof检查一个Undefined类型的值时，会返回&quot;undefined&quot;</p><h3 id="引用数据类型" tabindex="-1"><a class="header-anchor" href="#引用数据类型" aria-hidden="true">#</a> 引用数据类型</h3><p>Object 对象</p><h2 id="类型转换" tabindex="-1"><a class="header-anchor" href="#类型转换" aria-hidden="true">#</a> 类型转换</h2><p>类型转换就是指将其他的数据类型，转换为String Number 或 Boolean</p><h3 id="转换为string" tabindex="-1"><a class="header-anchor" href="#转换为string" aria-hidden="true">#</a> 转换为String</h3>`,22),q={id:"方式一-强制类型转换",tabindex:"-1"},y=e("a",{class:"header-anchor",href:"#方式一-强制类型转换","aria-hidden":"true"},"#",-1),S={href:"https://so.csdn.net/so/search?q=%E5%BC%BA%E5%88%B6%E7%B1%BB%E5%9E%8B%E8%BD%AC%E6%8D%A2&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"},N=d(`<p><strong>调用被转换数据的toString()方法</strong><br> 例子：<br> var a = 123;<br> a = a.toString();<br> 注意：<strong>这个方法不适用于null和undefined</strong><br> 由于这两个类型的数据中没有方法，所以调用toString()时会报错</p><h4 id="方式二-强制类型转换" tabindex="-1"><a class="header-anchor" href="#方式二-强制类型转换" aria-hidden="true">#</a> 方式二（强制类型转换）：</h4><p><strong>调用String()函数</strong><br> 例子：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var a = 123;  
a = String(a);  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>原理：<strong>对于Number Boolean String都会调用他们的toString()方法来将其转换为字符串，对于null值，直接转换为字符串&quot;null&quot;。对于undefined直接转换为字符串&quot;undefined&quot;</strong></p><h4 id="方式三-隐式的类型转换" tabindex="-1"><a class="header-anchor" href="#方式三-隐式的类型转换" aria-hidden="true">#</a> 方式三（隐式的类型转换）:</h4><p><strong>为任意的数据类型 +“”</strong><br> 例子：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var a = true;  
a = a + &quot;&quot;; 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>原理：和String()函数一样</p><h3 id="转换为number" tabindex="-1"><a class="header-anchor" href="#转换为number" aria-hidden="true">#</a> 转换为Number</h3><h4 id="方式一-强制类型转换-1" tabindex="-1"><a class="header-anchor" href="#方式一-强制类型转换-1" aria-hidden="true">#</a> 方式一（强制类型转换）：</h4><p><strong>调用Number()函数</strong><br> 例子：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var s = &quot;123&quot;;  
s = Number(s); 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>转换的情况：</p><ol><li>字符串 &gt; 数字<br> 如果字符串是一个合法的数字，则直接转换为对应的数字<br> 如果字符串是一个非法的数字，则转换为NaN<br> 如果是一个空串或纯空格的字符串，则转换为0</li><li>布尔值 &gt; 数字<br> true转换为1<br> false转换为0</li><li>空值 &gt; 数字<br> null转换为0</li><li>未定义 &gt; 数字<br> undefined 转换为NaN</li></ol><h4 id="方式二-强制类型转换-1" tabindex="-1"><a class="header-anchor" href="#方式二-强制类型转换-1" aria-hidden="true">#</a> 方式二（强制类型转换）：</h4><p>调用parseInt()或parseFloat()<br> 这两个函数专门用来将一个字符串转换为数字的</p><p>如果对非String使用parseInt()或parseFloat()，它会<strong>先将其转换为String</strong>然后在操作 parseInt()<br> 可以将<strong>一个字符串中的有效的整数位</strong>提取出来，并转换为Number<br> 例子：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var a = &quot;123.456px&quot;;  
a = parseInt(a); //123  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果需要可以在parseInt()中指定一个第二个参数，来指定进制parseFloat()可以将一个<strong>字符串中的有效的小数位</strong>提取出来，并转换为Number<br> 例子：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var a = &quot;123.456px&quot;;  
a = parseFloat(a); //123.456  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="方式三-隐式的类型转换-1" tabindex="-1"><a class="header-anchor" href="#方式三-隐式的类型转换-1" aria-hidden="true">#</a> 方式三（隐式的类型转换）：</h4><p>使用一元的+来进行隐式的类型转换<br> 例子：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var a = &quot;123&quot;;  
a = +a;  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>原理：和Number()函数一样</strong></p><h3 id="转换为布尔值" tabindex="-1"><a class="header-anchor" href="#转换为布尔值" aria-hidden="true">#</a> 转换为布尔值</h3><h4 id="方式一-强制类型转换-2" tabindex="-1"><a class="header-anchor" href="#方式一-强制类型转换-2" aria-hidden="true">#</a> 方式一（强制类型转换）：</h4><p>使用Boolean()函数<br> 例子：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var s = &quot;false&quot;;  
s = Boolean(s); //true 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>转换的情况<br> 字符串 &gt; 布尔<br> 除了空串其余全是true</p><p>数值 &gt; 布尔<br> 除了0和NaN其余的全是true</p><p>null、undefined &gt; 布尔<br> 都是false</p><p>对象 &gt; 布尔<br> 都是true</p><h4 id="方式二-隐式类型转换" tabindex="-1"><a class="header-anchor" href="#方式二-隐式类型转换" aria-hidden="true">#</a> 方式二（隐式类型转换）：</h4><p><strong>为任意的数据类型做两次非运算，即可将其转换为布尔值</strong><br> 例子：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var a = &quot;hello&quot;;  
a = !!a; //true  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="基础语法" tabindex="-1"><a class="header-anchor" href="#基础语法" aria-hidden="true">#</a> 基础语法</h2><h2 id="运算符" tabindex="-1"><a class="header-anchor" href="#运算符" aria-hidden="true">#</a> 运算符</h2><p>运算符也称为操作符<br> 通过运算符可以对一个或多个值进行运算或操作</p><h3 id="typeof运算符" tabindex="-1"><a class="header-anchor" href="#typeof运算符" aria-hidden="true">#</a> typeof运算符</h3><p>用来检查一个变量的数据类型<br> 语法：typeof 变量<br> 它会返回一个用于描述类型的字符串作为结果</p><h3 id="算数运算符" tabindex="-1"><a class="header-anchor" href="#算数运算符" aria-hidden="true">#</a> 算数运算符</h3><p>+ 对两个值进行加法运算并返回结果<br> - 对两个值进行减法运算并返回结果<br> * 对两个值进行乘法运算并返回结果<br> / 对两个值进行除法运算并返回结果<br> % 对两个值进行取余运算并返回结果</p><p><strong>除了加法以外，对非Number类型的值进行运算时，都会先转换为Number然后在做运算。</strong><br> 而做加法运算时，如果是两个字符串进行相加，则会做拼串操作，将两个字符连接为一个字符串。<br> 任何值和字符串做加法，都会先转换为字符串，然后再拼串</p><h3 id="一元运算符" tabindex="-1"><a class="header-anchor" href="#一元运算符" aria-hidden="true">#</a> 一元运算符</h3><p>一元运算符只需要一个操作数</p><h4 id="一元的" tabindex="-1"><a class="header-anchor" href="#一元的" aria-hidden="true">#</a> 一元的+</h4><p>就是正号，不会对值产生任何影响，但是可以将一个非数字转换为数字<br> 例子：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var a = true;  
a = +a;  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="一元的-1" tabindex="-1"><a class="header-anchor" href="#一元的-1" aria-hidden="true">#</a> 一元的-</h4><p>就是负号，可以对一个数字进行符号位取反<br> 例子：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var a = 10;  
a = a;  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="自增" tabindex="-1"><a class="header-anchor" href="#自增" aria-hidden="true">#</a> 自增</h4><p>自增可以使变量在原值的基础上自增1<br> 自增使用 ++<br> 自增可以使用 前++（++a）后++(a++)<br> 无论是++a 还是 a++都会立即使原变量自增1<br> 不同的是++a和a++的值是不同的，<br> ++a的值是变量的新值（自增后的值）<br> a++的值是变量的原值（自增前的值）</p><h4 id="自减" tabindex="-1"><a class="header-anchor" href="#自减" aria-hidden="true">#</a> 自减</h4><p>自减可以使变量在原值的基础上自减1<br> 自减使用<br> 自减可以使用 前（a）后(a)<br> 无论是a 还是 a都会立即使原变量自减1<br> 不同的是a和a的值是不同的，<br> a的值是变量的新值（自减后的值）<br> a的值是变量的原值（自减前的值）</p><h3 id="逻辑运算符" tabindex="-1"><a class="header-anchor" href="#逻辑运算符" aria-hidden="true">#</a> 逻辑运算符</h3><p>!<br> 非运算可以对一个布尔值进行取反，true变false false边true<br> 当对非布尔值使用!时，会先将其转换为布尔值然后再取反<br> 我们可以利用!来将其他的数据类型转换为布尔值</p><p>&amp;&amp;<br> &amp;&amp;可以对符号两侧的值进行与运算<br> 只有两端的值都为true时，才会返回true。只要有一个false就会返回false。<br> 与是一个短路的与，如果第一个值是false，则不再检查第二个值<br> 对于非布尔值，它会将其转换为布尔值然后做运算，并返回原值<br> 规则：<br> 1.如果第一个值为false，则返回第一个值<br> 2.如果第一个值为true，则返回第二个值</p><p>||<br> ||可以对符号两侧的值进行或运算<br> 只有两端都是false时，才会返回false。只要有一个true，就会返回true。<br> 或是一个短路的或，如果第一个值是true，则不再检查第二个值<br> 对于非布尔值，它会将其转换为布尔值然后做运算，并返回原值<br> 规则：<br> 1.如果第一个值为true，则返回第一个值<br> 2.如果第一个值为false，则返回第二个值</p><h3 id="赋值运算符" tabindex="-1"><a class="header-anchor" href="#赋值运算符" aria-hidden="true">#</a> 赋值运算符</h3><p>=<br> 可以将符号右侧的值赋值给左侧变量<br> +=</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>a += 5 相当于 a = a+5    
var str = &quot;hello&quot;;  str += &quot;world&quot;;  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>-=</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>a -= 5  相当于 a = a-5  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>*=</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>a *= 5 相当于 a = a*5  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>/=</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>a /= 5 相当于 a = a/5  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>%=</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>a %= 5 相当于 a = a%5 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="关系运算符" tabindex="-1"><a class="header-anchor" href="#关系运算符" aria-hidden="true">#</a> 关系运算符</h3><p>关系运算符用来比较两个值之间的大小关系的<br> &gt;<br> &gt;=<br> &lt;<br> &lt;=<br> 关系运算符的规则和数学中一致，用来比较两个值之间的关系，<br> 如果关系成立则返回true，关系不成立则返回false。<br> 如果比较的两个值是非数值，会将其转换为Number然后再比较。<br> 如果比较的两个值都是字符串，此时会比较字符串的Unicode编码，而不会转换为Number。</p><h3 id="相等运算符" tabindex="-1"><a class="header-anchor" href="#相等运算符" aria-hidden="true">#</a> 相等运算符</h3><p>相等，判断左右两个值是否相等，如果相等返回true，如果不等返回false<br> 相等会自动对两个值进行类型转换，如果<strong>对不同的类型进行比较，会将其转换为相同的类型然后再比较</strong>，转换后相等它也会返回true，null == undifined</p><p>!=<br> 不等，判断左右两个值是否不等，如果不等则返回true，如果相等则返回false<br> 不等也会做自动的类型转换。</p><p><strong>===</strong><br><strong>全等</strong>，判断左右两个值是否全等，它和相等类似，只不过它不会进行自动的类型转换，<br> 如果两个值的类型不同，则直接返回false</p><p>!==<br><strong>不全等</strong>，和不等类似，但是它不会进行自动的类型转换，如果两个值的类型不同，它会直接返回true</p><p>特殊的值：<br> null和undefined<br> 由于undefined衍生自null，所以<strong>null == undefined</strong> 会返回true。<br> 但是 null === undefined 会返回false。<br><strong>NaN</strong><br> NaN不与任何值相等，报告它自身 NaN == NaN //false</p><p>判断一个值是否是NaN<br> 使用isNaN()函数</p><h3 id="三元运算符" tabindex="-1"><a class="header-anchor" href="#三元运算符" aria-hidden="true">#</a> 三元运算符：</h3><p>?:<br> 语法：条件表达式?语句1:语句2;<br> 执行流程：<br> 先对条件表达式求值判断，<br> 如果判断结果为true，则执行语句1，并返回执行结果<br> 如果判断结果为false，则执行语句2，并返回执行结果</p><p>优先级：<br> 和数学中一样，JS中的运算符也是具有优先级的，<br> 比如 先乘除 后加减 先与 后或<br> 具体的优先级可以参考优先级的表格，在表格中越靠上的优先级越高，<br> 优先级越高的越优先计算，优先级相同的，从左往右计算。<br> 优先级不需要记忆，如果越到拿不准的，使用()来改变优先级。</p><h2 id="流程控制语句" tabindex="-1"><a class="header-anchor" href="#流程控制语句" aria-hidden="true">#</a> 流程控制语句</h2><p>程序都是自上向下的顺序执行的，<br> 通过流程控制语句可以改变程序执行的顺序，或者反复的执行某一段的程序。</p><h3 id="条件分支语句" tabindex="-1"><a class="header-anchor" href="#条件分支语句" aria-hidden="true">#</a> 条件分支语句</h3><p>条件判断语句也称为if语句<br> 语法一：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> if(条件表达式){  
 语句...  
 }  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> 执行流程：  
 if语句执行时，会先对条件表达式进行求值判断，  
 如果值为true，则执行if后的语句  
 如果值为false，则不执行  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>语法二：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>if(条件表达式){  
语句...  
}else{  
语句...  
} 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> 执行流程：  
if...else语句执行时，会对条件表达式进行求值判断，  
如果值为true，则执行if后的语句  
如果值为false，则执行else后的语句  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>语法三：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>if(条件表达式){  
语句...  
}else if(条件表达式){  
语句...  
}else if(条件表达式){  
语句...  
}else if(条件表达式){  
语句...  
}else{  
语句...  
}  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> 执行流程  
 if...else if...else语句执行时，会自上至下依次对条件表达式进行求值判断，  
如果判断结果为true，则执行当前if后的语句，执行完成后语句结束。  
如果判断结果为false，则继续向下判断，直到找到为true的为止。  
如果所有的条件表达式都是false，则执行else后的语句  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1.条件分支语句<br> switch语句<br> 语法:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>switch(条件表达式){  
case 表达式:  
语句...  
break;  
case 表达式:  
语句...  
break;  
case 表达式:  
语句...  
break;  
default:  
语句...  
break;  
}  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行流程：<br> switch…case…语句在执行时，会依次将case后的表达式的值和switch后的表达式的值进行全等比较，<br> 如果比较结果为false，则继续向下比较。如果比较结果为true，则从当前case处开始向下执行代码。<br> 如果所有的case判断结果都为false，则从default处开始执行代码。</p><h3 id="循环语句" tabindex="-1"><a class="header-anchor" href="#循环语句" aria-hidden="true">#</a> 循环语句</h3><p>通过循环语句可以反复执行某些语句多次<br> while循环<br> 语法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>while(条件表达式){  
    语句...  
}  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行流程：<br> while语句在执行时，会先对条件表达式进行求值判断，<br> 如果判断结果为false，则终止循环<br> 如果判断结果为true，则执行循环体<br> 循环体执行完毕，继续对条件表达式进行求值判断，依此类推</p><p>do…while循环<br> 语法:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>do{  
语句...  
}while(条件表达式)  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行流程<br> do…while在执行时，会先执行do后的循环体，然后在对条件表达式进行判断，<br> 如果判断判断结果为false，则终止循环。<br> 如果判断结果为true，则继续执行循环体，依此类推</p><p>和while的区别：<br> while：先判断后执行<br> do…while: 先执行后判断<br> do…while可以确保循环体至少执行一次。</p><p>for循环<br> 语法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>for(①初始化表达式 ; ②条件表达式 ; ④更新表达式){  
    ③语句...  
}  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行流程：<br> 首先执行①初始化表达式，初始化一个变量，<br> 然后对②条件表达式进行求值判断，如果为false则终止循环<br> 如果判断结果为true，则执行③循环体<br> 循环体执行完毕，执行④更新表达式，对变量进行更新。<br> 更新表达式执行完毕重复②</p><p>死循环</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>while(true){  

}  

for(;;){  

}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="对象-object" tabindex="-1"><a class="header-anchor" href="#对象-object" aria-hidden="true">#</a> 对象（Object）</h2><p>对象是JS中的引用数据类型<br><strong>对象是一种复合数据类型，在对象中可以保存多个不同数据类型的属性</strong><br> 使用typeof检查一个对象时，会返回object</p><h2 id="对象的分类" tabindex="-1"><a class="header-anchor" href="#对象的分类" aria-hidden="true">#</a> 对象的分类：</h2><p>1.内建对象<br> - 由ES标准中定义的对象，在任何的ES的实现中都可以使用<br> - 比如：Math String Number Boolean Function Object…</p><p>2.宿主对象<br> - 由JS的运行环境提供的对象，目前来讲主要指由浏览器提供的对象<br> - 比如 BOM DOM</p><p>3.自定义对象</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- 由开发人员自己创建的对象  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>创建对象<br> 方式一：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> var obj = new Object();  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>方式二：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> var obj = {}; 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>向对象中添加属性</strong><br> 语法：<br> 对象.属性名 = 属性值;<br><strong>对象[“属性名”] = 属性值;</strong> //这种方式能够使用特殊的属性名</p><p><strong>对象的属性名没有任何要求，不需要遵守标识符的规范，但是在开发中，尽量按照标识符的要求去写。</strong><br> 属性值也可以任意的数据类型。</p><p>读取对象中的属性<br> 语法：<br> 对象.属性名<br> 对象[“属性名”] //&quot;属性名&quot;可以使字符串常量，也可以是字符串变量<br> 如果读取一个对象中没有的属性，它不会报错，而是返回一个undefined</p><p><strong>删除对象中的属性</strong><br> 语法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>delete 对象.属性名  
delete 对象[&quot;属性名&quot;]  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="遍历" tabindex="-1"><a class="header-anchor" href="#遍历" aria-hidden="true">#</a> 遍历</h2><p><strong>使用in检查对象中是否含有指定属性</strong><br> 语法：“属性名” in 对象<br> 如果在对象中含有该属性，则返回true<br> 如果没有则返回false</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  循环遍历对象自身的和继承的可枚举属性(不含Symbol属性).  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var obj = {&#39;0&#39;:&#39;a&#39;,&#39;1&#39;:&#39;b&#39;,&#39;2&#39;:&#39;c&#39;};  
  
for(var i in obj) {  
     console.log(i,&quot;:&quot;,obj[i]);  
}  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>使用对象字面量，在创建对象时直接向对象中添加属性</strong><br> 语法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var obj = {  
    属性名:属性值,  
    属性名:属性值,  
    属性名:属性值,  
    属性名:属性值  
} 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>基本数据类型和引用数据类型<br> 基本数据类型<br> String Number Boolean Null Undefined<br> 引用数据类型<br> Object<br><strong>基本数据类型的数据，变量是直接保存的它的值。</strong><br> 变量与变量之间是互相独立的，修改一个变量不会影响其他的变量。<br><strong>引用数据类型的数据，变量是保存的对象的引用（内存地址）。</strong><br> 如果多个变量指向的是同一个对象，此时修改一个变量的属性，会影响其他的变量。<br> 比较两个变量时，对于基本数据类型，比较的就是值，<br> 对于引用数据类型比较的是地址，地址相同才相同</p><h2 id="函数-function" tabindex="-1"><a class="header-anchor" href="#函数-function" aria-hidden="true">#</a> 函数（Function）</h2><p><strong>函数也是一个对象，也具有普通对象的功能（能有属性）</strong><br> 函数中可以封装一些代码，在需要的时候可以去调用函数来执行这些代码<br> 使用typeof检查一个函数时会返回function<br> 创建函数<br> 函数声明</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function 函数名([形参1,形参2...形参N]){  
语句...  
}  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>函数表达式</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var 函数名 = function([形参1,形参2...形参N]){  
语句...  
};  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>调用函数<br> 语法：函数对象([实参1,实参2…实参N]);<br> fun() sum() alert() Number() parseInt()<br> 当我们调用函数时，函数中封装的代码会按照编写的顺序执行</p><p><strong>立即执行函数</strong><br> 函数定义完，立即被调用，这种函数叫做立即执行函数<br> 立即执行函数往往只会执行一次</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>(function(a,b){  
    console.log(&quot;a = &quot;+a);  
    console.log(&quot;b = &quot;+b);  
})(123,456); 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>遍历对象</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>for(var v in obj){  
    document.write(&quot;property：name =&quot;+v+&quot;value=&quot;+obj[v]+&quot;&lt;br/&gt;&quot; );  
}  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>形参和实参<br> 形参：形式参数<br> 定义函数时，可以在()中定义一个或多个形参，形参之间使用,隔开<br> 定义形参就相当于在函数内声明了对应的变量但是并不赋值，<br> 形参会在调用时才赋值。</p><p>实参：实际参数<br> 调用函数时，可以在()传递实参，传递的实参会赋值给对应的形参,<br> 调用函数时JS解析器不会检查实参的类型和个数，可以传递任意数据类型的值。<br><strong>如果实参的数量大于形参，多余实参将不会赋值，</strong><br><strong>如果实参的数量小于形参，则没有对应实参的形参将会赋值undefined</strong></p><p><strong>返回值，就是函数执行的结果。</strong><br> 使用return 来设置函数的返回值。<br> 语法：return 值;<br> 该值就会成为函数的返回值，可以通过一个变量来接收返回值<br> return后边的代码都不会执行，一旦执行到return语句时，函数将会立刻退出。<br> return后可以跟任意类型的值，可以是基本数据类型，也可以是一个对象。<br><strong>如果return后不跟值，或者是不写return则函数默认返回undefined。</strong><br> break、continue和return<br> break<br> 退出循环<br> continue<br> 跳过当次循环<br> return<br> 退出函数</p><p><strong>参数，函数的实参也可以是任意的数据类型。</strong></p><p><strong>方法（method）</strong><br> 可以将一个函数设置为一个对象的属性，<br> 当一个对象的属性是一个函数时，<br> 我们称这个函数是该对象的方法。<br> 对象.方法名();<br> 函数名()</p><h3 id="函数的属性和方法" tabindex="-1"><a class="header-anchor" href="#函数的属性和方法" aria-hidden="true">#</a> 函数的属性和方法</h3><p>call()<br> apply()<br><strong>这两个方法都是函数对象的方法需要通过函数对象来调用</strong><br> 通过两个方法可以直接调用函数，并且<strong>可以通过第一个实参来指定函数中this</strong><br> 不同的是call是直接传递函数的实参而apply需要将实参封装到一个数组中传递<br><strong>arguments</strong><br> arguments和this类似，都是函数中的隐含的参数<br> arguments是一个类数组元素，它用来封装函数执行过程中的实参<br> 所以即使不定义形参，也可以通过arguments来使用实参<br><strong>arguments中有一个属性callee表示当前执行的函数对象</strong></p><p>this（调用函数的那个对象）<br> this是函数的上下文对象，根据函数的调用方式不同会执向不同的对象<br> 1.以函数的形式调用时，this是window<br> 2.以方法的形式调用时，this是调用方法的对象<br> 3.以构造函数的形式调用时，this是新建的那个对象<br> 4.使用call和apply调用时，this是指定的那个对象<br> 5.在全局作用域中this代表window</p><h2 id="作用域" tabindex="-1"><a class="header-anchor" href="#作用域" aria-hidden="true">#</a> 作用域</h2><p>作用域简单来说就是一个变量的作用范围。<br> 在JS中作用域分成两种：</p><p>1.全局作用域</p><p>直接在script标签中编写的代码都运行在全局作用域中<br><strong>全局作用域在打开页面时创建，在页面关闭时销毁。</strong><br> 全局作用域中有一个全局对象window，window对象由浏览器提供，<br> 可以在页面中直接使用，它代表的是整个的浏览器的窗口。<br><strong>在全局作用域中创建的变量都会作为window对象的属性保存</strong><br> 在全局作用域中创建的函数都会作为window对象的方法保存<br> 在全局作用域中创建的变量和函数可以在页面的任意位置访问。<br> 在函数作用域中也可以访问到全局作用域的变量。<br> 尽量不要在全局中创建变量</p><p>2.函数作用域</p><p>函数作用域是函数执行时创建的作用域，每次调用函数都会创建一个新的函数作用域。<br> 函数作用域在函数执行时创建，在函数执行结束时销毁。<br> 在函数作用域中创建的变量，不能在全局中访问。<br> 当在函数作用域中使用一个变量时，它会先在自身作用域中寻找，<br> 如果找到了则直接使用，如果没有找到则到上一级作用域中寻找，<br> 如果找到了则使用，找不到则继续向上找，一直会</p><p><strong>变量的声明提前</strong><br> 在全局作用域中，使用<strong>var关键字声明的变量会在所有的代码执行之前被声明，但是不会赋值。</strong><br> 所以我们可以在变量声明前使用变量。但是不使用var关键字声明的变量不会被声明提前。<br> 在函数作用域中，也具有该特性，使用var关键字声明的变量会在函数所有的代码执行前被声明，<br> 如果没有使用var关键字声明变量，则变量会变成全局变量</p><p><strong>函数的声明提前</strong><br> 在全局作用域中，使用<strong>函数声明创建的函数（function fun(){}）,会在所有的代码执行之前被创建</strong>，<br> 也就是我们可以在函数声明前去调用函数，但是使用函数表达式(var fun = function(){})创建的函数没有该特性<br> 在函数作用域中，使用函数声明创建的函数，会在所有的函数中的代码执行之前就被创建好了。</p><h2 id="this-上下文对象" tabindex="-1"><a class="header-anchor" href="#this-上下文对象" aria-hidden="true">#</a> this（上下文对象）</h2><p>我们每次调用函数时，解析器都会将一个上下文对象作为隐含的参数传递进函数。<br> 使用this来引用上下文对象，根据函数的调用形式不同，this的值也不同。</p><p>指向当前对象</p><p>this的不同的情况：<br> 1.以函数的形式调用时，this是window<br> 2.以方法的形式调用时，this就是调用方法的对象<br> 3.以构造函数的形式调用时，this就是新创建的对象</p><h2 id="_4-构造函数" tabindex="-1"><a class="header-anchor" href="#_4-构造函数" aria-hidden="true">#</a> 4.构造函数</h2><p>构造函数是专门用来创建对象的函数<br><strong>一个构造函数我们也可以称为一个类</strong><br> 通过一个构造函数创建的对象，我们称该对象时这个构造函数的实例<br> 通过同一个构造函数创建的对象，我们称为一类对象<br> 构造函数就是一个普通的函数，只是他的调用方式不同，<br> 如果直接调用，它就是一个普通函数<br> 如果使用new来调用，则它就是一个构造函数</p><p>例子：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function Person(name , age , gender){  
    this.name = name;  
    this.age = age;  
    this.gender = gender;  
    this.sayName = function(){  
        alert(this.name);  
    };  
}  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>构造函数的执行流程：<br> 1.创建一个新的对象<br> 2.将新的对象作为函数的上下文对象（this）<br> 3.执行函数中的代码<br> 4.将新建的对象返回</p><p><strong>instanceof 用来检查一个对象是否是一个类的实例</strong><br> 语法：对象 instanceof 构造函数<br> 如果该对象时构造函数的实例，则返回true，否则返回false<br><strong>Object是所有对象的祖先，所以任何对象和Object做instanceof都会返回true</strong></p><p>枚举对象中的属性<br> for…in<br> 语法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>for(var 属性名 in 对象){  
  
}  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>for…in语句的循环体会执行多次，对象中有几个属性就会执行几次，<br> 每次讲一个属性名赋值给我们定义的变量，我们可以通过它来获取对象中的属性</p><h2 id="原型-prototype" tabindex="-1"><a class="header-anchor" href="#原型-prototype" aria-hidden="true">#</a> 原型（prototype）</h2><p>创建一个函数以后，<strong>解析器都会默认在函数中添加一个数prototype</strong><br> prototype属性指向的是一个对象，这个对象我们称为原型对象。<br> 当函数作为构造函数使用，<strong>它所创建的对象中都会有一个隐含的属性执行该原型对象。</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>这个隐含的属性可以通过对象.__proto__来访问。  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>原型对象就相当于一个公共的区域，凡是通过同一个构造函数创建的对象他们通常都可以访问到相同的原型对象。</strong><br> 我们可以将对象中共有的属性和方法统一添加到原型对象中，<br> 这样我们只需要添加一次，就可以使所有的对象都可以使用。<br> 当我们去访问对象的一个属性或调用对象的一个方法时，它会先自身中寻找，<br> 如果在自身中找到了，则直接使用。<br> 如果没有找到，则去原型对象中寻找，如果找到了则使用，<br><strong>如果没有找到，则去原型的原型中寻找，<strong>依此类推。直到找到Object的原型为止，Object的原型的原型为null，<br> 如果依然没有找到则返回undefined<br><strong>hasOwnProperty()</strong><br> 这个方法可以用来检查</strong>对象自身中</strong>是否含有某个属性<br> 语法：对象.hasOwnProperty(“属性名”)</p><h2 id="tostring方法" tabindex="-1"><a class="header-anchor" href="#tostring方法" aria-hidden="true">#</a> toString方法</h2><p>当我们直接在页面中打印一个对象时，事件上是输出的对象的toString()方法的返回值</p><p>如果我们希望在输出对象时不输出[object Object]，可以为对象添加一个toString()方法</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//修改Person原型的toString  
Person.prototype.toString = function(){  
return &quot;Person[name=&quot;+this.name+&quot;,age=&quot;+this.age+&quot;,gender=&quot;+this.gender+&quot;]&quot;;  
};  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="垃圾回收-gc" tabindex="-1"><a class="header-anchor" href="#垃圾回收-gc" aria-hidden="true">#</a> 垃圾回收（GC）</h2><p>就像人生活的时间长了会产生垃圾一样，程序运行过程中也会产生垃圾<br> 这些垃圾积攒过多以后，会导致程序运行的速度过慢，<br> 所以我们需要一个垃圾回收的机制，来处理程序运行过程中产生垃圾<br> 当一个对象没有任何的变量或属性对它进行引用，此时我们将永远无法操作该对象，<br> 此时这种对象就是一个垃圾，这种对象过多会占用大量的内存空间，导致程序运行变慢，<br> 所以这种垃圾必须进行清理。<br> 在JS中拥有自动的垃圾回收机制，会自动将这些垃圾对象从内存中销毁，<br> 我们不需要也不能进行垃圾回收的操作<br> 我们需要做的只是要将不再使用的对象设置null即可</p><h2 id="数组-array" tabindex="-1"><a class="header-anchor" href="#数组-array" aria-hidden="true">#</a> 数组（Array）</h2><p>数组也是一个对象，是一个用来存储数据的对象和Object类似，但是它的存储效率比普通对象要高<br> 数组中保存的内容我们称为元素<br> 数组使用索引（index）来操作元素<br> 索引指由0开始的整数</p><h2 id="数组的操作" tabindex="-1"><a class="header-anchor" href="#数组的操作" aria-hidden="true">#</a> 数组的操作：</h2><p>创建数组</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var arr = new Array();  
var arr = [];  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>向数组中添加元素<br> 语法；<br> 数组对象[索引] = 值;</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>arr[0] = 123;  
arr[1] = &quot;hello&quot;;  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建数组时直接添加元素<br> 语法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> var arr = [元素1,元素2....元素N]; 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>例子：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> var arr = [123,&quot;hello&quot;,true,null];  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>获取和修改数组的长度<br> 使用length属性来操作数组的长度<br> 获取长度：<br> 数组.length<br> length获取到的是数组的最大索引+1<br> 对于连续的数组，length获取到的就是数组中元素的个数<br> 修改数组的长度<br> 数组.length = 新长度<br> 如果修改后的length大于原长度，则多出的部分会空出来<br> 如果修改后的length小于原长度，则原数组中多出的元素会被删除<br> 向数组的最后添加元素<br> 数组[数组.length] = 值;</p><h2 id="数组的方法" tabindex="-1"><a class="header-anchor" href="#数组的方法" aria-hidden="true">#</a> 数组的方法</h2><table><thead><tr><th>functionName</th><th>function</th><th>usage</th></tr></thead><tbody><tr><td>push()</td><td>用来向数组的末尾添加一个或多个元素，并返回数组新的长度</td><td>语法：数组.push(元素1,元素2,元素N)pop()</td></tr><tr><td>pop()</td><td>用来删除数组的最后一个元素，并返回被删除的元素</td><td></td></tr><tr><td>unshift()</td><td>向数组的开头添加一个或多个元素，并返回数组的新的长度</td><td></td></tr><tr><td>shift()</td><td>删除数组的开头的一个元素，并返回被删除的元素</td><td></td></tr><tr><td>reverse()</td><td>可以用来反转一个数组，它会对原数组产生影响</td><td></td></tr><tr><td>concat()</td><td>可以连接两个或多个数组，它不会影响原数组，而是新数组作为返回值返回</td><td></td></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr></tbody></table><h3 id="slice-sart-end" tabindex="-1"><a class="header-anchor" href="#slice-sart-end" aria-hidden="true">#</a> slice(sart,[end])</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> 可以从一个数组中截取指定的元素  
 该方法不会影响原数组，而是将截取到的内容封装为一个新的数组并返回  
 参数：  
1.截取开始位置的索引（包括开始位置）  
2.截取结束位置的索引（不包括结束位置）  
 第二个参数可以省略不写，如果不写则一直截取到最后  
 参数可以传递一个负值，如果是负值，则从后往前数  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="splice" tabindex="-1"><a class="header-anchor" href="#splice" aria-hidden="true">#</a> splice()</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> 可以用来删除数组中指定元素，并使用新的元素替换  
该方法会将删除的元素封装到新数组中返回  
 参数：  
1.删除开始位置的索引  
2.删除的个数  
3.三个以后，都是替换的元素，这些元素将会插入到开始位置索引的前边  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="join-splitor" tabindex="-1"><a class="header-anchor" href="#join-splitor" aria-hidden="true">#</a> join([splitor])</h3><p>可以将一个数组转换为一个字符串<br> 参数：<br> 需要一个字符串作为参数，这个字符串将会作为连接符来连接数组中的元素<br> 如果不指定连接符则默认使用,</p><h3 id="sort" tabindex="-1"><a class="header-anchor" href="#sort" aria-hidden="true">#</a> sort()</h3><p>可以对一个数组中的内容进行排序，默认是按照Unicode编码进行排序<br> 调用以后，会直接修改原数组。<br> 可以自己指定排序的规则，需要一个回调函数作为参数：</p><p>我们可以自己来指定排序的规则<br> 我们可以在sort()添加一个回调函数，来指定排序规则，<br> 回调函数中需要定义两个形参,<br> 浏览器将会分别使用数组中的元素作为实参去调用回调函数<br> 使用哪个元素调用不确定，但是肯定的是在数组中a一定在b前边</p><ul><li>浏览器会根据回调函数的返回值来决定元素的顺序，<br> 如果返回一个大于0的值，则元素会交换位置<br> 如果返回一个小于0的值，则元素位置不变<br> 如果返回一个0，则认为两个元素相等，也不交换位置</li><li>如果需要升序排列，则返回 a-b<br> 如果需要降序排列，则返回b-a</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function(a,b){  
//升序排列  
//return a-b;  
  
//降序排列  
return b-a;  
}  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="遍历数组" tabindex="-1"><a class="header-anchor" href="#遍历数组" aria-hidden="true">#</a> 遍历数组</h2><p>遍历数组就是将数组中元素都获取到<br> 一般情况我们都是使用for循环来遍历数组</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>for(var i=0 ; i&lt;数组.length ; i++){  
    //数组[i]  
}  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用forEach()方法来遍历数组（不兼容IE8）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>数组.forEach(function(value , index , obj){  
  
});  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>forEach()方法需要一个回调函数作为参数，<br> 数组中有几个元素，回调函数就会被调用几次，<br> 每次调用时，都会将遍历到的信息以实参的形式传递进来，<br> 我们可以定义形参来获取这些信息。<br> value:正在遍历的元素<br> index:正在遍历元素的索引<br> obj:被遍历对象</p><h2 id="常用类和方法" tabindex="-1"><a class="header-anchor" href="#常用类和方法" aria-hidden="true">#</a> 常用类和方法</h2><h2 id="包装类" tabindex="-1"><a class="header-anchor" href="#包装类" aria-hidden="true">#</a> 包装类</h2><p>在JS中为我们提供了<strong>三个包装类：</strong><br> String() Boolean() Number()<br> 通过这三个包装类可以创建基本数据类型的对象<br> 例子：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var num = new Number(2);  
var str = new String(&quot;hello&quot;);  
var bool = new Boolean(true); 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是在实际应用中千万不要这么干。</p><p>当我们去操作一个基本数据类型的属性和方法时，<br><strong>解析器会临时将其转换为对应的包装类，然后再去操作属性和方法，</strong><br> 操作完成以后再将这个临时对象进行销毁。</p><h2 id="date" tabindex="-1"><a class="header-anchor" href="#date" aria-hidden="true">#</a> Date</h2><p>日期的对象，在JS中通过Date对象来表示一个时间<br> 创建对象<br> 创建一个当前的时间对象</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> var d = new Date();  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>创建一个指定的时间对象</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var d = new Date(&quot;月/日/年 时:分:秒&quot;);  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法：</h3><table><thead><tr><th>name</th><th></th></tr></thead><tbody><tr><td>getDate()</td><td>当前日期对象是几日（1-31）</td></tr><tr><td>getDay()</td><td>返回当前日期对象时周几（0-6）</td></tr><tr><td>0 周日</td><td></td></tr><tr><td>1 周一 。。。</td><td></td></tr><tr><td>getMonth()</td><td>返回当前日期对象的月份（0-11）</td></tr><tr><td>0 一月 1 二月 。。。</td><td></td></tr><tr><td>getFullYear()</td><td>从 Date 对象以四位数字返回年份。</td></tr><tr><td>getHours()</td><td>返回 Date 对象的小时 (0 ~ 23)。</td></tr><tr><td>getMinutes()</td><td>返回 Date 对象的分钟 (0 ~ 59)。</td></tr><tr><td>getSeconds()</td><td>返回 Date 对象的秒数 (0 ~ 59)。</td></tr><tr><td>getMilliseconds()</td><td>返回 Date 对象的毫秒(0 ~ 999)。</td></tr><tr><td>getTime()</td><td>返回当前日期对象的时间戳</td></tr><tr><td>时间戳，指的是从1970年月1日 0时0分0秒，<strong>到现在时间的毫秒数</strong></td><td></td></tr><tr><td>计算机底层保存时间都是以时间戳的形式保存的。</td><td></td></tr><tr><td>Date.now()</td><td>可以获取当前代码执行时的时间戳</td></tr></tbody></table><h2 id="math" tabindex="-1"><a class="header-anchor" href="#math" aria-hidden="true">#</a> Math</h2><p>Math属于一个工具类，它不需要我们创建对象，它里边封装了属性运算相关的常量和方法<br> 我们可以直接使用它来进行数学运算相关的操作<br> 方法：<br> Math.PI<br> 常量，圆周率<br> Math.abs()<br> 绝对值运算<br> Math.ceil()<br> 向上取整<br> Math.floor()<br> 向下取整<br> Math.round()<br> 四舍五入取整<br> Math.random()<br> 生成一个01之间的随机数<br> 生成一个xy之间的随机数<br> Math.round(Math.random()*(y-x)+x);<br> Math.pow(x,y)<br> 求x的y次幂<br> Math.sqrt()<br> 对一个数进行开方<br> Math.max()<br> 求多个数中最大值<br> Math.min()<br> 求多个数中的最小值</p><h2 id="字符串的相关的方法" tabindex="-1"><a class="header-anchor" href="#字符串的相关的方法" aria-hidden="true">#</a> 字符串的相关的方法</h2><p>使用ES6中的字符串新方法</p><p><strong>String.prototype.padStart(maxLength, fillString=‘’)</strong> 或 **String.prototype.padEnd(maxLength, fillString=‘’)**来填充字符串；</p><p>length<br> 获取字符串的长度<br> charAt()<br> 根据索引获取指定的字符<br> charCodeAt()<br> 根据索引获取指定的字符编码<br><strong>String.fromCharCode()</strong><br><strong>根据字符编码获取字符</strong><br> indexOf()<br> lastIndexOf()<br> 从一个字符串中检索指定内容<br> 需要一个字符串作为参数，这个字符串就是要检索的内容，<br> 如果找到该内容，则会返回其第一次出现的索引，如果没有找到则返回-1。<br> 可以指定一个第二个参数，来表示开始查找的位置<br> indexOf()是从前向后找<br> lastIndexOf()是从后向前找<br> slice(start,[end])<br> 可以从一个字符串中截取指定的内容，并将截取到内容返回，不会影响原变量<br> 参数：<br> 第一个：截取开始的位置（包括开始）<br> 第二个：截取结束的位置**（不包括结束）**<br> 可以省略第二个参数，如果省略则一直截取到最后<br> 可以传负数，如果是负数则从后往前数<br> substr()<br> 和slice()基本一致，不同的是它第二个参数不是索引，而是截取的数量</p><p>substring()<br> 和slice()基本一致，不同的是它不能接受负值作为参数，如果设置一个负值，则会自动修正为0，<br><strong>substring()中如果第二个参数小于第一个，自动调整位置</strong><br> toLowerCase()<br> 将字符串转换为小写并返回<br> toUpperCase()<br> 将字符串转换为大写并返回</p><h3 id="正则表达相关方法" tabindex="-1"><a class="header-anchor" href="#正则表达相关方法" aria-hidden="true">#</a> 正则表达相关方法</h3><p><strong>split()</strong><br> 可以根据指定内容将一个字符串拆分为一个数组<br> 参数：<br> 需要一个字符串作为参数，将会根据字符串去拆分数组<br> 可以接收一个正则表达式，此时会根据正则表达式去拆分数组</p><p><strong>match()</strong><br> 可以根据正则表达式，从一个字符串中将符合条件的内容提取出来<br> 默认情况下我们的match只会找到第一个符合要求的内容，找到以后就停止检索<br> 我们可以设置正则表达式为全局匹配模式，这样就会匹配到所有的内容<br> 可以为一个正则表达式设置多个匹配模式，且顺序无所谓<br> match()会将匹配到的内容封装到一个数组中返回，即使只查询到一个结果</p><p><strong>replace()</strong><br> 可以将字符串中指定内容替换为新的内容<br> 参数：<br> 1.被替换的内容，可以接受一个正则表达式作为参数<br><strong>2.新的内容</strong> 空串则为删除&quot;&quot;<br> 默认只会替换第一个</p><p>search()<br> 可以搜索字符串中是否含有指定内容<br> 如果搜索到指定内容，则会返回第一次出现的索引，如果没有搜索到返回1<br> 它可以接受一个正则表达式作为参数，然后会根据正则表达式去检索字符串<br> serach()只会查找第一个，即使设置全局匹配也没用</p><h2 id="正则表达式" tabindex="-1"><a class="header-anchor" href="#正则表达式" aria-hidden="true">#</a> 正则表达式</h2><p>正则用来定义一些字符串的规则，程序可以根据这些规则来判断一个字符串是否符合规则，<br> 也可以将一个字符串中符合规则的内容提取出来。<br><strong>创建正则表达式</strong><br> var reg = new RegExp(“正则”,“匹配模式”); 注意：使用构造函数时，由于它的参数是一个字符串，而\\是字符串中转义字符，如果要使用\\则需要使用\\来代替</p><p>var reg = /正则表达式/匹配模式 （匹配模式可以多个一起写：/gi）</p><h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法：</h2><p>匹配模式：<br> i:忽略大小写（ignore）<br> g:全局匹配模式（默认为1次）<br> 设置匹配模式时，可以都不设置，也可以设置1个，也可以全设置，设置时没有顺序要求</p><p>正则语法<br> | 或<br> [] 或<br> [^ ] 除了</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>**[x-y] x的ascii到y的ascii码之间的值**  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>[a-z] 小写字母 <strong>（也可以[e-i])</strong><br> [A-Z] 大写字母<br> [A-z] 任意字母,<strong>但是还包括了其他ASCII在此之中的</strong><br> [0-9] 任意数字</p><p>元符号</p><p>检查一个字符串中是否含有 .<br> . 表示任意字符<br> 在正则表达式中使用\\作为转义字符<br> . 来表示.<br> \\ 表示\\</p><p>\\w<br> 任意字母、数字、_ [A-z0-9_]<br> \\W<br> 除了字母、数字、_ [ ^A-z0-9_]<br> \\d<br> 任意的数字 [0-9]<br> \\D<br> 除了数字 [ ^0-9]<br> \\s<br> 空格<br> \\S<br> 除了空格<br> \\b<br> 单词边界<br> \\B<br> 除了单词边界</p><p><strong>量词</strong><br> 通过量词可以设置一个内容出现的次数<br> 量词只对它前边的一个内容起作用<br> {n} 正好出现n次<br> {m,n} 出现mn次<br> {m,} m次以上</p><p>+至少一个，相当于{1,}<br> *个或多个，相当于{0,}<br> ? 0个或1个，相当于{0,1}</p><p><strong>边界表达式</strong>（不要在java中用，javaScript中用）<br> ^:正则开始<br> $:正则结束 ：<strong>注意结束前一个才是结束匹配</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>reg = /^a/;  
reg = /b$/;  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="方法-1" tabindex="-1"><a class="header-anchor" href="#方法-1" aria-hidden="true">#</a> 方法：</h2><p>test()<br> 可以用来检查一个字符串是否符合正则表达式<br> 如果符合返回true，否则返回false<br> 例子</p><p>去掉两端的空格:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var s = &quot;        f    afa    &quot;;   
s = s.replace(/^\\s*|\\s*$/g,&quot;&quot;);  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dom" tabindex="-1"><a class="header-anchor" href="#dom" aria-hidden="true">#</a> DOM</h2><p>Document Object Model<br> 文档对象模型，通过DOM可以来任意来修改网页中各个内容<br> 文档<br> 文档指的是网页，一个网页就是一个文档<br> 对象<br> 对象指将网页中的每一个节点都转换为对象<br> 转换完对象以后，就可以以一种纯面向对象的形式来操作网页了<br> 模型<br> 模型用来表示节点和节点之间的关系，方便操作页面<br> 节点（Node）<br> 节点是构成网页的最基本的单元，网页中的每一个部分都可以称为是一个节点<br> 虽然都是节点，但是节点的类型却是不同的<br> 常用的节点<br> 文档节点 （Document），代表整个网页<br> 元素节点（Element），代表网页中的标签<br> 属性节点（Attribute），代表标签中的属性<br> 文本节点（Text），代表网页中的文本内容</p><h2 id="dom操作" tabindex="-1"><a class="header-anchor" href="#dom操作" aria-hidden="true">#</a> DOM操作</h2><p>DOM查询<br> 在网页中浏览器已经为我们提供了<strong>document对象</strong>，<br><strong>它代表的是整个网页，它是window对象的属性，可以在页面中直接使用。</strong><br> document查询方法：<br> 根据元素的id属性查询一个元素节点对象：<br> document.getElementById(“id属性值”);<br> 根据元素的name属性值查询一组元素节点对象:<br> document.getElementsByName(“name属性值”);<br> 根据标签名来查询一组元素节点对象：<br> document.getElementsByTagName(“标签名”);</p><p>元素的属性：<br><strong>读取元素的属性：</strong><br> 语法：元素.属性名<br> 例子：ele.name<br> ele.id<br> ele.value<br> ele.className<br> 注意：class属性不能采用这种方式，<br><strong>读取class属性时需要使用 元素.classNam</strong>e</p><p>修改元素的属性：<br> 语法：元素.属性名 = 属性值</p><p>innerHTML<br> 使用该属性可以获取或设置元素内部的HTML代码</p><h2 id="事件-event" tabindex="-1"><a class="header-anchor" href="#事件-event" aria-hidden="true">#</a> 事件（Event）</h2><p>事件指的是用户和浏览器之间的交互行为。比如：点击按钮、关闭窗口、鼠标移动。。。<br> 我们可以为事件来绑定回调函数来响应事件。<br> 绑定事件的方式：<br> 1.可以在标签的事件属性中设置相应的JS代码<br> 例子：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;button onclick=&quot;js代码。。。&quot;&gt;按钮&lt;/button&gt;  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>2.可以通过为对象的指定事件属性设置回调函数的形式来处理事件<br> 例子：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;button id=&quot;btn&quot;&gt;按钮&lt;/button&gt;  
&lt;script&gt;  
    var btn = document.getElementById(&quot;btn&quot;);  
    btn.onclick = function(){  
  
    };  
&lt;/script&gt;  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>文档的加载<br> 浏览器在加载一个页面时，是按照自上向下的顺序加载的，加载一行执行一行。<br> 如果将js代码编写到页面的上边，当代码执行时，页面中的DOM对象还没有加载，<br> 此时将会无法正常获取到DOM对象，导致DOM操作失败。<br> 解决方式一：<br> 可以将js代码编写到body的下边</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;body&gt;  
&lt;button id=&quot;btn&quot;&gt;按钮&lt;/button&gt;  
  
&lt;script&gt;  
var btn = document.getElementById(&quot;btn&quot;);  
btn.onclick = function(){  
  
};  
&lt;/script&gt;  
&lt;/body&gt;  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解决方式二：<br> 将js代码编写到window.onload = function(){}中<br> window.onload 对应的回调函数会在整个页面加载完毕以后才执行，<br> 所以可以确保代码执行时，DOM对象已经加载完毕了</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script&gt;  
    window.onload = function(){  
        var btn = document.getElementById(&quot;btn&quot;);  
        btn.onclick = function(){  
        };  
    };  
&lt;/script&gt;    

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dom查询" tabindex="-1"><a class="header-anchor" href="#dom查询" aria-hidden="true">#</a> DOM查询</h2><p>通过具体的元素节点来查询<br> 元素.getElementsByTagName()<br> 通过标签名查询当前元素的指定后代元素</p><p><strong>子节点包括便签元素中的文本，子元素自包含标签元素</strong></p><p>元素.childNodes<br> 获取当前元素的<strong>所有子节点</strong><br><strong>会获取到空白的文本子节点</strong></p><p>childNodes属性会获取包括文本节点在呢的所有节点<br> 根据DOM标签标签间空白也会当成文本节点<br> 注意：在IE8及以下的浏览器中，不会将空白文本当成子节点，<br> 所以该属性在IE8中会返回4个子元素而其他浏览器是9个</p><p>元素.children<br> 获取当前元素的<strong>所有子元素</strong></p><p>元素.firstChild<br> 获取当前元素的<strong>第一个子节点</strong>，会获取到空白的文本子节点</p><p>元素.lastChild<br> 获取当前元素的<strong>最后一个子节点</strong></p><p>元素.parentNode<br> 获取当前元素的父元素</p><p>元素.previousSibling<br> 获取当前元素的前一个兄弟节点</p><p>previousElementSibling获取前一个兄弟元素，IE8及以下不支持</p><p>元素.nextSibling<br> 获取当前元素的后一个兄弟节点</p><p>firstElementChild获取当前元素的第一个子元素<br> firstElementChild不支持IE8及以下的浏览器，<br> 如果需要兼容他们尽量不要使用</p><p>innerHTML和innerText<br> 这两个属性并没有在DOM标准定义，但是大部分浏览器都支持这两个属性<br> 两个属性作用类似，都可以获取到标签内部的内容，<br><strong>不同是innerHTML会获取到html标签，而innerText会自动去除标签</strong><br> 如果使用这两个属性来设置标签内部的内容时，没有任何区别的</p><p><strong>读取标签内部的文本内容</strong></p><p>h1中的文本内容</p><p>元素.firstChild.nodeValue</p><h2 id="document对象的其他的属性和方法" tabindex="-1"><a class="header-anchor" href="#document对象的其他的属性和方法" aria-hidden="true">#</a> document对象的其他的属性和方法</h2><p>document.all<br><strong>获取页面中的所有元素</strong>，相当于document.getElementsByTagName(“*”);</p><p>document.documentElement<br><strong>获取页面中html根元素</strong></p><p>document.body<br> 获取页面中的body元素</p><p>document.getElementsByClassName()<br><strong>根据元素的class属性值查询一组元素节点对象</strong><br> 这个方法不支持IE8及以下的浏览器</p><p>document.querySelector()<br><strong>根据CSS选择器去页面中查询一个元素</strong><br> 如果匹配到的元素有多个，则它会返回查询到的第一个元素</p><p>document.querySelectorAll()<br> 根据CSS选择器去页面中查询一组元素<br> 会将匹配到所有元素封装到一个数组中返回，即使只匹配到一个</p><h2 id="dom修改" tabindex="-1"><a class="header-anchor" href="#dom修改" aria-hidden="true">#</a> DOM修改</h2><p>document.createElement(“TagName”)<br> 可以用于创建一个元素节点对象，<br> 它需要一个标签名作为参数，将会根据该标签名创建元素节点对象，<br> 并将创建好的对象作为返回值返回<br> document.createTextNode(“textContent”)<br> 可以根据文本内容创建一个文本节点对象</p><p><strong>父节点.appendChild(子节点)</strong><br> 向父节点中添加指定的子节点<br><strong>父节点.insertBefore(新节点,旧节点)</strong><br> 将一个新的节点插入到旧节点的前边<br> 父节点.replaceChild(新节点,旧节点)<br> 使用一个新的节点去替换旧节点</p><p><strong>父节点.removeChild(子节点)</strong><br> 删除指定的子节点<br> 推荐方式：<strong>子节点.parentNode.removeChild(子节点)</strong></p><p><strong>以上方法，实际就是改变了相应元素（标签）的innerHTML的值。</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>myClick(&quot;btn07&quot;,function(){  
    //向city中添加广州  
    var city = document.getElementById(&quot;city&quot;);  
  
    /*  
* 使用innerHTML也可以完成DOM的增删改的相关操作  
* 一般我们会两种方式结合使用  
*/  
    //city.innerHTML += &quot;&lt;li&gt;广州&lt;/li&gt;&quot;;  
  
    //创建一个li  
    var li = document.createElement(&quot;li&quot;);  
    //向li中设置文本  
    li.innerHTML = &quot;广州&quot;;  
    //将li添加到city中  
    city.appendChild(li);  
  
});  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dom对css的操作" tabindex="-1"><a class="header-anchor" href="#dom对css的操作" aria-hidden="true">#</a> DOM对CSS的操作</h2><h3 id="读取和修改内联样式" tabindex="-1"><a class="header-anchor" href="#读取和修改内联样式" aria-hidden="true">#</a> 读取和修改内联样式</h3><p>使用style属性来操作元素的内联样式<br> 读取内联样式：<br> 语法：元素.style.样式名<br> 例子：<br> 元素.style.width<br> 元素.style.height<br> 注意：<strong>如果样式名中带有-，则需要将样式名修改为驼峰命名法将-去掉，然后后的字母改大写</strong><br> 比如：backgroundcolor &gt; backgroundColor<br> borderwidth &gt; borderWidth<br> 修改内联样式：<br> 语法：元素.style.样式名 = 样式值<br><strong>通过style修改和读取的样式都是内联样式</strong>，由于内联样式的优先级比较高，<br> 所以我们通过JS来修改的样式，往往会立即生效，<br><strong>但是如果样式中设置了!important，则内联样式将不会生效。</strong></p><h3 id="读取元素的当前样式" tabindex="-1"><a class="header-anchor" href="#读取元素的当前样式" aria-hidden="true">#</a> 读取元素的当前样式</h3><p>正常浏览器<br><strong>使用getComputedStyle()</strong><br> 这个方法是window对象的方法，可以返回一个对象，这个对象中保存着当前元素生效样式<br> 参数：<br> 1.要获取样式的元素<br> 2.可以传递一个伪元素，一般传null<br> 例子：<br> 获取元素的宽度<br> getComputedStyle(box , null)[“width”];<br> 通过该方法读取到样式都是只读的不能修改</p><p>IE8<br><strong>使用currentStyle</strong><br> 语法：<br> 元素.currentStyle.样式名<br> 例子：<br> box.currentStyle[“width”]<br> 通过这个属性读取到的样式是只读的不能修改</p><p><strong>实现兼容性</strong></p><p>//对象.属性不存在，不会报错，如果直接寻找对象，（当前作用域到全局作用域）找不到会报错</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/*  
* 定义一个函数，用来获取指定元素的当前的样式  
* 参数：  
* obj 要获取样式的元素  
* name 要获取的样式名  
*/  
function getStyle(obj , name){  
//对象.属性不存在，不会报错，如果直接寻找对象，（当前作用域到全局作用域）找不到会报错  
    if(window.getComputedStyle){  
        //正常浏览器的方式，具有getComputedStyle()方法  
        return getComputedStyle(obj , null)[name];  
    }else{  
        //IE8的方式，没有getComputedStyle()方法  
        return obj.currentStyle[name];  
    }  
    //return window.getComputedStyle?getComputedStyle(obj , null)[name]:obj.currentStyle[name];  
}  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="其他的样式相关的属性" tabindex="-1"><a class="header-anchor" href="#其他的样式相关的属性" aria-hidden="true">#</a> 其他的样式相关的属性</h3><p>注意：以下样式都是只读的,未指明偏移量都是相对于当前窗口左上角</p><p>clientHeight<br> 元素的可见高度，包括元素的内容区和内边距的高度<br> clientWidth<br> 元素的可见宽度，包括元素的内容区和内边距的宽度<br> offsetHeight<br> 整个元素的高度，包括内容区、内边距、边框<br> offfsetWidth<br> 整个元素的宽度，包括内容区、内边距、边框<br> offsetParent<br> 当前元素的定位父元素<br> 离他最近的开启了定位的祖先元素，如果所有的元素都没有开启定位，则返回body<br> offsetLeft<br> offsetTop<br> 当前元素和定位父元素之间的偏移量<br> offsetLeft水平偏移量 offsetTop垂直偏移量</p><p>scrollHeight<br> scrollWidth<br> 获取元素滚动区域的高度和宽度</p><p>scrollTop<br> scrollLeft<br> 获取元素垂直和水平滚动条滚动的距离</p><p>判断滚动条是否滚动到底<br> 垂直滚动条<br> scrollHeight -scrollTop = clientHeight</p><p>水平滚动<br> scrollWidth -scrollLeft = clientWidth</p><h2 id="事件-event-1" tabindex="-1"><a class="header-anchor" href="#事件-event-1" aria-hidden="true">#</a> 事件（Event）</h2><h2 id="事件对象" tabindex="-1"><a class="header-anchor" href="#事件对象" aria-hidden="true">#</a> 事件对象</h2><p>当响应函数被调用时，浏览器每次都会将一个事件对象作为实参传递进响应函数中，这个事件对象中封装了当前事件的相关信息，比如：鼠标的坐标，键盘的按键，鼠标的按键，滚轮的方向。。</p><p>可以在响应函数中定义一个形参，来使用事件对象，但是在IE8以下浏览器中事件对象没有做完实参传递，而是作为window对象的属性保存</p><p>例子：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>元素.事件 = function(event){  
    event = event || window.event;  
};  
  
元素.事件 = function(e){  
e = e || event;  
  
};  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>获取到鼠标的坐标</strong><br> clientX和clientY<br> 用于获取鼠标在当前的可见窗口的坐标<br> div的偏移量，是相对于整个页面的</p><p>pageX和pageY 可以获取鼠标相对于当前页面的坐标<br> 但是这个两个属性在IE8中不支持，所以如果需要兼容IE8，则不要使用<br> var left = event.clientX;<br> var　top = event.clientY;</p><h2 id="事件的冒泡-bubble" tabindex="-1"><a class="header-anchor" href="#事件的冒泡-bubble" aria-hidden="true">#</a> 事件的冒泡（Bubble）</h2><p>事件的冒泡指的是事件向上传导，当后代元素上的事件被触发时，将会导致其祖先元素上的同类事件也会触发。<br> 事件的冒泡大部分情况下都是有益的，如果需要取消冒泡，则需要使用事件对象来取消<br><strong>可以将事件对象的cancelBubble设置为true，即可取消冒泡</strong><br> 例子：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>元素.事件 = function(event){  
    event = event || window.event;  
    event.cancelBubble = true;  
};  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="事件的委派" tabindex="-1"><a class="header-anchor" href="#事件的委派" aria-hidden="true">#</a> 事件的委派</h2><p>指将事件统一绑定给元素的共同的祖先元素，这样当后代元素上的事件触发时，会一直冒泡到祖先元素，从而通过祖先元素的响应函数来处理事件。</p><p>事件委派是利用了冒泡，通过委派可以减少事件绑定的次数，提高程序的性能</p><p>我们希望，只绑定一次事件，即可应用到多个的元素上，即使元素是后添加的<br> 我们可以尝试将其绑定给元素的共同的祖先元素</p><p><strong>target</strong> : event中的target表示的触发事件的对象</p><h2 id="事件的绑定" tabindex="-1"><a class="header-anchor" href="#事件的绑定" aria-hidden="true">#</a> 事件的绑定</h2><p>addEventListener()<br> 通过这个方法也可以为元素绑定响应函数<br> 参数：<br> 1.事件的字符串，不要on<br> 2.回调函数，当事件触发时该函数会被调用<br> 3.是否在捕获阶段触发事件，需要一个布尔值，一般都传false</p><p>使用addEventListener()可以同时为一个元素的相同事件同时绑定多个响应函数，<br> 这样当事件被触发时，响应函数将会按照函数的绑定顺序执行</p><p>这个方法不支持IE8及以下的浏览器</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>btn01.addEventListener(&quot;click&quot;,function(){  
alert(1);  
},false);  
  
btn01.addEventListener(&quot;click&quot;,function(){  
alert(2);  
},false);  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>attachEvent()</p><p>在IE8中可以使用attachEvent()来绑定事件<br> 参数：<br> 1.事件的字符串，要on<br> 2.回调函数</p><p>这个方法也可以同时为一个事件绑定多个处理函数，<br> 不同的是它是后绑定先执行，执行顺序和addEventListener()相反</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>btn01.attachEvent(&quot;onclick&quot;,function(){  
alert(1);  
});  
  
btn01.attachEvent(&quot;onclick&quot;,function(){  
alert(2);  
});  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//定义一个函数，用来为指定元素绑定响应函数  
/*  
 * addEventListener()中的this，是绑定事件的对象  
 * attachEvent()中的this，是window  
 *  需要统一两个方法this  
 */  
/*  
 * 参数：  
 * obj 要绑定事件的对象  
 * eventStr 事件的字符串(不要on)  
 *  callback 回调函数  
 */  
function bind(obj , eventStr , callback){  
    if(obj.addEventListener){  
        //大部分浏览器兼容的方式  
        obj.addEventListener(eventStr , callback , false);  
    }else{  
        /*  
 * this是谁由调用方式决定  
 * callback.call(obj)  
 */  
        //IE8及以下  
        obj.attachEvent(&quot;on&quot;+eventStr , function(){  
            //在匿名函数中调用回调函数  
            callback.call(obj);  
        });  
    }  
}  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="事件的传播" tabindex="-1"><a class="header-anchor" href="#事件的传播" aria-hidden="true">#</a> 事件的传播</h2><p>关于事件的传播网景公司和微软公司有不同的理解<br> 微软公司认为事件应该是由内向外传播，也就是当事件触发时，应该先触发当前元素上的事件，<br> 然后再向当前元素的祖先元素上传播，也就说事件应该在冒泡阶段执行。<br> 网景公司认为事件应该是由外向内传播的，也就是当前事件触发时，应该先触发当前元素的最外层的祖先元素的事件，<br> 然后在向内传播给后代元素<br> W3C综合了两个公司的方案，将事件传播分成了三个阶段<br> 1.捕获阶段<br> 在捕获阶段时从最外层的祖先元素，向目标元素进行事件的捕获，但是默认此时不会触发事件<br> 2.目标阶段<br> 事件捕获到目标元素，捕获结束开始在目标元素上触发事件<br> 3.冒泡阶段<br> 事件从目标元素向他的祖先元素传递，依次触发祖先元素上的事件</p><p>如果希望在捕获阶段就触发事件，可以将addEventListener()的第三个参数设置为true<br> 一般情况下我们不会希望在捕获阶段触发事件，所以这个参数一般都是false</p><p>IE8及以下的浏览器中没有捕获阶段</p><h2 id="常用事件" tabindex="-1"><a class="header-anchor" href="#常用事件" aria-hidden="true">#</a> 常用事件</h2><h3 id="鼠标事件" tabindex="-1"><a class="header-anchor" href="#鼠标事件" aria-hidden="true">#</a> 鼠标事件</h3><p>拖拽事件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!DOCTYPE html&gt;  
    &lt;html&gt;  
    &lt;head&gt;  
    &lt;meta charset=&quot;UTF-8&quot;&gt;  
        &lt;title&gt;&lt;/title&gt;  
&lt;style type=&quot;text/css&quot;&gt;  
  
    #box1{  
width: 100px;  
height: 100px;  
background-color: red;  
position: absolute;  
}  
  
#box2{  
width: 100px;  
height: 100px;  
background-color: yellow;  
position: absolute;  
  
left: 200px;  
top: 200px;  
}  
  
    &lt;/style&gt;  
  
&lt;script type=&quot;text/javascript&quot;&gt;  
  
    window.onload = function(){  
    /*  
 * 拖拽box1元素  
 *  - 拖拽的流程  
 * 1.当鼠标在被拖拽元素上按下时，开始拖拽  onmousedown  
 * 2.当鼠标移动时被拖拽元素跟随鼠标移动 onmousemove  
 * 3.当鼠标松开时，被拖拽元素固定在当前位置onmouseup  
 */  
  
    //获取box1  
    var box1 = document.getElementById(&quot;box1&quot;);  
    var box2 = document.getElementById(&quot;box2&quot;);  
    var img1 = document.getElementById(&quot;img1&quot;);  
  
    //开启box1的拖拽  
    drag(box1);  
    //开启box2的  
    drag(box2);  
  
    drag(img1);  
  
};  
  
/*  
 * 提取一个专门用来设置拖拽的函数  
 * 参数：开启拖拽的元素  
 */  
function drag(obj){  
    //当鼠标在被拖拽元素上按下时，开始拖拽  onmousedown  
    obj.onmousedown = function(event){  
  
        //设置box1捕获所有鼠标按下的事件  
        /*  
 * setCapture()  
 * - 只有IE支持，但是在火狐中调用时不会报错，  
 * 而如果使用chrome调用，会报错  
 */  
        /*if(box1.setCapture){  
box1.setCapture();  
}*/  
        obj.setCapture &amp;&amp; obj.setCapture();  
  
  
        event = event || window.event;  
        //div的偏移量 鼠标.clentX - 元素.offsetLeft  
        //div的偏移量 鼠标.clentY - 元素.offsetTop  
        var ol = event.clientX - obj.offsetLeft;  
        var ot = event.clientY - obj.offsetTop;  
  
  
        //为document绑定一个onmousemove事件  
        document.onmousemove = function(event){  
            event = event || window.event;  
            //当鼠标移动时被拖拽元素跟随鼠标移动 onmousemove  
            //获取鼠标的坐标  
            var left = event.clientX - ol;  
            var top = event.clientY - ot;  
  
            //修改box1的位置  
            obj.style.left = left+&quot;px&quot;;  
            obj.style.top = top+&quot;px&quot;;  
  
        };  
  
        //为document绑定一个鼠标松开事件  
        document.onmouseup = function(){  
            //当鼠标松开时，被拖拽元素固定在当前位置onmouseup  
            //取消document的onmousemove事件  
            document.onmousemove = null;  
            //取消document的onmouseup事件  
            document.onmouseup = null;  
            //当鼠标松开时，取消对事件的捕获  
            obj.releaseCapture &amp;&amp; obj.releaseCapture();  
        };  
  
 /*  
* 当我们拖拽一个网页中的内容时，浏览器会默认去搜索引擎中搜索内容，  
* 此时会导致拖拽功能的异常，这个是浏览器提供的默认行为，  
* 如果不希望发生这个行为，则可以通过return false来取消默认行为  
*   
* 但是这招对IE8不起作用  
*/  
        return false;  
    };  
}  
  
  
&lt;/script&gt;  
&lt;/head&gt;  
&lt;body&gt;  
  
    我是一段文字  
  
&lt;div id=&quot;box1&quot;&gt;&lt;/div&gt;  
  
&lt;div id=&quot;box2&quot;&gt;&lt;/div&gt;  
  
&lt;img src=&quot;img/an.jpg&quot; id=&quot;img1&quot; style=&quot;position: absolute;&quot;/&gt;  
    &lt;/body&gt;  
&lt;/html&gt;  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>滚轮事件：</p><p>onwheel都支持</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!DOCTYPE html&gt;  
    &lt;html&gt;  
    &lt;head&gt;  
    &lt;meta charset=&quot;UTF-8&quot;&gt;  
        &lt;title&gt;&lt;/title&gt;  
&lt;style type=&quot;text/css&quot;&gt;  
  
    #box1{  
width: 100px;  
height: 100px;  
background-color: red;  
}  
  
    &lt;/style&gt;  
&lt;script type=&quot;text/javascript&quot;&gt;  
  
    window.onload = function(){  
  
  
    //获取id为box1的div  
    var box1 = document.getElementById(&quot;box1&quot;);  
  
    //为box1绑定一个鼠标滚轮滚动的事件  
    /*  
 * onmousewheel鼠标滚轮滚动的事件，会在滚轮滚动时触发，  
 * 但是火狐不支持该属性  
 *   
 * 在火狐中需要使用 DOMMouseScroll 来绑定滚动事件  
 * 注意该事件需要通过addEventListener()函数来绑定  
 */  
  
  
    box1.onmousewheel = function(event){  
  
        event = event || window.event;  
  
  
        //event.wheelDelta 可以获取鼠标滚轮滚动的方向  
        //向上滚 120   向下滚 -120  
        //wheelDelta这个值我们不看大小，只看正负  
  
        //alert(event.wheelDelta);  
  
        //wheelDelta这个属性火狐中不支持  
        //在火狐中使用event.detail来获取滚动的方向  
        //向上滚 -3  向下滚 3  
        //alert(event.detail);  
  
  
        /*  
 * 当鼠标滚轮向下滚动时，box1变长  
 * 当滚轮向上滚动时，box1变短  
 */  
        //判断鼠标滚轮滚动的方向  
        if(event.wheelDelta &gt; 0 || event.detail &lt; 0){  
            //向上滚，box1变短  
            box1.style.height = box1.clientHeight - 10 + &quot;px&quot;;  
  
        }else{  
            //向下滚，box1变长  
            box1.style.height = box1.clientHeight + 10 + &quot;px&quot;;  
        }  
  
        /*  
 * 使用addEventListener()方法绑定响应函数，取消默认行为时不能使用return false  
 * 需要使用event来取消默认行为event.preventDefault();  
 * 但是IE8不支持event.preventDefault();这个玩意，如果直接调用会报错  
 */  
        event.preventDefault &amp;&amp; event.preventDefault();  
  
  
        /*  
 * 当滚轮滚动时，如果浏览器有滚动条，滚动条会随之滚动，  
 * 这是浏览器的默认行为，如果不希望发生，则可以取消默认行为  
 */  
        return false;  
  
  
  
  
    };  
  
    //为火狐绑定滚轮事件  
    bind(box1,&quot;DOMMouseScroll&quot;,box1.onmousewheel);  
  
  
};  
  
  
function bind(obj , eventStr , callback){  
    if(obj.addEventListener){  
        //大部分浏览器兼容的方式  
        obj.addEventListener(eventStr , callback , false);  
    }else{  
        /*  
 * this是谁由调用方式决定  
 * callback.call(obj)  
 */  
        //IE8及以下  
        obj.attachEvent(&quot;on&quot;+eventStr , function(){  
            //在匿名函数中调用回调函数  
            callback.call(obj);  
        });  
    }  
}  
  
&lt;/script&gt;  
&lt;/head&gt;  
&lt;body style=&quot;height: 2000px;&quot;&gt;  
  
    &lt;div id=&quot;box1&quot;&gt;&lt;/div&gt;  
  
&lt;/body&gt;  
&lt;/html&gt;  
  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="键盘事件" tabindex="-1"><a class="header-anchor" href="#键盘事件" aria-hidden="true">#</a> 键盘事件</h3><p>键盘事件：<br> onkeydown<br> 按键被按下<br> 对于onkeydown来说如果一直按着某个按键不松手，则事件会一直触发<br> 当onkeydown连续触发时，第一次和第二次之间会间隔稍微长一点，其他的会非常的快，这种设计是为了防止误操作的发生。<br> onkeyup<br> 按键被松开</p><p>键盘事件一般都会绑定给一些可以获取到焦点的对象或者是document</p><p>keyCode</p><p>可以通过keyCode来获取按键的编码<br> 通过它可以判断哪个按键被按下<br> 除了keyCode，事件对象中还提供了几个属性<br> altKey<br> ctrlKey<br> shiftKey<br> 这个三个用来判断alt ctrl 和 shift是否被按下<br> 如果按下则返回true，否则返回false</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//console.log(event.keyCode);  
  
//判断一个y是否被按下  
//判断y和ctrl是否同时被按下  
if(event.keyCode === 89 &amp;&amp; event.ctrlKey){  
console.log(&quot;ctrl和y都被按下了&quot;);  
}  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>input.onkeydown = function(event) {  
    event = event || window.event;  
    //数字 48 - 57  
    //使文本框中不能输入数字  
    if(event.keyCode &gt;= 48 &amp;&amp; event.keyCode &lt;= 57) {  
        //在文本框中输入内容，属于onkeydown的默认行为  
        //如果在onkeydown中取消了默认行为，则输入的内容，不会出现在文本框中  
        return false;  
    }  
};  
  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="bom" tabindex="-1"><a class="header-anchor" href="#bom" aria-hidden="true">#</a> BOM</h2><p>浏览器对象模型(browser object model)<br> BOM可以使我们通过JS来操作浏览器<br> 在BOM中为我们提供了一组对象，用来完成对浏览器的操作<br> BOM对象<br> Window<br> 代表的是整个浏览器的窗口，同时window也是网页中的全局对象<br> Navigator<br> 代表的当前浏览器的信息，通过该对象可以来识别不同的浏览器<br> Location<br> 代表当前浏览器的地址栏信息，通过Location可以获取地址栏信息，或者操作浏览器跳转页面<br> History<br> 代表浏览器的历史记录，可以通过该对象来操作浏览器的历史记录<br> 由于隐私原因，该对象不能获取到具体的历史记录，只能操作浏览器向前或向后翻页<br> 而且该操作只在当次访问时有效<br> Screen<br> 代表用户的屏幕的信息，通过该对象可以获取到用户的显示器的相关的信息</p><p>这些BOM对象在浏览器中都是作为window对象的属性保存的，<br> 可以通过window对象来使用，也可以直接使用</p><h2 id="navigator" tabindex="-1"><a class="header-anchor" href="#navigator" aria-hidden="true">#</a> Navigator</h2><p>代表的当前浏览器的信息，通过该对象可以来识别不同的浏览器<br> 由于历史原因，Navigator对象中的大部分属性都已经不能帮助我们识别浏览器了<br> 一般我们只会使用userAgent来判断浏览器的信息，<br> userAgent是一个字符串，这个字符串中包含有用来描述浏览器信息的内容，<br> 不同的浏览器会有不同的userAgent</p><p>火狐的userAgent<br> Mozilla5.0 (Windows NT 6.1; WOW64; rv:50.0) Gecko20100101 Firefox50.0</p><p>Chrome的userAgent<br> Mozilla5.0 (Windows NT 6.1; Win64; x64) AppleWebKit537.36 (KHTML, like Gecko) Chrome52.0.2743.82 Safari537.36</p><p>IE8<br> Mozilla4.0 (compatible; MSIE 8.0; Windows NT 6.1; WOW64; Trident7.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; .NET4.0E)</p><p>IE9<br> Mozilla5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident7.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; .NET4.0E)</p><p>IE10<br> Mozilla5.0 (compatible; MSIE 10.0; Windows NT 6.1; WOW64; Trident7.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; .NET4.0E)</p><p>IE11<br> Mozilla5.0 (Windows NT 6.1; WOW64; Trident7.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; .NET4.0E; rv:11.0) like Gecko<br> 在IE11中已经将微软和IE相关的标识都已经去除了，所以我们基本已经不能通过UserAgent来识别一个浏览器是否是IE了</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>alert(navigator.appName);  
  
var ua = navigator.userAgent;  
  
console.log(ua);  
  
if(firefoxi.test(ua)){  
alert(&quot;你是火狐！！！&quot;);  
}else if(chromei.test(ua)){  
alert(&quot;你是Chrome&quot;);  
}else if(msiei.test(ua)){  
alert(&quot;你是IE浏览器~~~&quot;);  
}else if(&quot;ActiveXObject&quot; in window){  
alert(&quot;你是IE11，枪毙了你~~~&quot;);  
}  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="history" tabindex="-1"><a class="header-anchor" href="#history" aria-hidden="true">#</a> History</h2><p>对象可以用来操作浏览器向前或向后翻页<br> length<br> 属性，可以获取到当成访问的链接数量<br> back()<br> 可以用来回退到上一个页面，作用和浏览器的回退按钮一样<br> forward()<br> 可以跳转下一个页面，作用和浏览器的前进按钮一样<br> go()<br> 可以用来跳转到指定的页面<br> 它需要一个整数作为参数<br> 1:表示向前跳转一个页面 相当于forward()<br> 2:表示向前跳转两个页面<br> -1:表示向后跳转一个页面<br> -2:表示向后跳转两个页面</p><h2 id="location" tabindex="-1"><a class="header-anchor" href="#location" aria-hidden="true">#</a> Location</h2><p>该对象中封装了浏览器的地址栏的信息<br> 如果直接打印location，则可以获取到地址栏的信息（当前页面的完整路径）<br> alert(location);<br> 如果直接将location属性修改为一个完整的路径，或相对路径<br> 则我们页面会自动跳转到该路径，并且会生成相应的历史记录<br> location = “http:www.baidu.com”;<br> location = “01.BOM.html”;<br> assign()<br> 用来跳转到其他的页面，作用和直接修改location一样<br> reload()<br> 用于重新加载当前页面，作用和刷新按钮一样<br> 如果在方法中传递一个true，作为参数，则会强制清空缓存刷新页面<br> location.reload(true);<br> replace()<br> 可以使用一个新的页面替换当前页面，调用完毕也会跳转页面<br> 不会生成历史记录，不能使用回退按钮回退</p><h2 id="window" tabindex="-1"><a class="header-anchor" href="#window" aria-hidden="true">#</a> window</h2><h3 id="定时器" tabindex="-1"><a class="header-anchor" href="#定时器" aria-hidden="true">#</a> 定时器</h3><p><strong>setInterval()</strong><br> 定时调用<br> 可以将一个函数，每隔一段时间执行一次<br> 参数：<br> 1.回调函数，该函数会每隔一段时间被调用一次<br> 2.每次调用间隔的时间，单位是毫秒</p><p>返回值：<br> 返回一个Number类型的数据<br> 这个数字用来作为定时器的唯一标识<br><strong>clearInterval()可以用来关闭一个定时器</strong><br> 方法中需要一个定时器的标识作为参数，这样将关闭标识对应的定时器</p><p>clearInterval()可以接收任意参数，<br> 如果参数是一个有效的定时器的标识，则停止对应的定时器<br> 如果参数不是一个有效的标识，则什么也不做</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var num = 1;  
var timer = setInterval(function() {  
count.innerHTML = num++;  
if(num == 11) {  
//关闭定时器  
clearInterval(timer);  
}  
}, 1000);  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="延时调用" tabindex="-1"><a class="header-anchor" href="#延时调用" aria-hidden="true">#</a> 延时调用</h3><p><strong>setTimeout</strong></p><p>延时调用一个函数不马上执行，而是隔一段时间以后在执行，而且只会执行一次<br> 延时调用和定时调用的区别，定时调用会执行多次，而延时调用只会执行一次<br> 延时调用和定时调用实际上是可以互相代替的，在开发中可以根据自己需要去选择</p><p>var timer = setTimeout(function(){<br> console.log(num++);<br> },3000);</p><p>使用clearTimeout()来关闭一个延时调用<br> clearTimeout(timer);</p><p>#类的操作</p><p><strong>直接修改元素的类css：</strong></p><p>通过style属性来修改元素的样式，每修改一个样式，浏览器就需要重新渲染一次页面。 这样的执行的性能是比较差的，而且这种形式当我们要修改多个样式时，也不太方便 我希望一行代码，可以同时修改多个样式</p><p>我们可以通过修改元素的class属性来间接的修改样式.这样一来，我们只需要修改一次，即可同时修改多个样式，浏览器只需要重新渲染页面一次，性能比较好，<br> 并且这种方式，可以使表现和行为进一步的分离</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>box.className += &quot; b2&quot;;//注意有空格，添加class属性  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//定义一个函数，用来向一个元素中添加指定的class属性值  
/*  
 * 参数:  
 * obj 要添加class属性的元素  
 *  cn 要添加的class值  
 *   
 */  
function addClass(obj, cn) {  
if (!hasClass(obj, cn)) {  
obj.className += &quot; &quot; + cn;  
}  
}  
/*  
 * 判断一个元素中是否含有指定的class属性值  
 * 如果有该class，则返回true，没有则返回false  
 *   
 */  
function hasClass(obj, cn) {  
var reg = new RegExp(&quot;\\\\b&quot; + cn + &quot;\\\\b&quot;);  
return reg.test(obj.className);  
}  
/*  
 * 删除一个元素中的指定的class属性  
 */  
function removeClass(obj, cn) {  
//创建一个正则表达式  
var reg = new RegExp(&quot;\\\\b&quot; + cn + &quot;\\\\b&quot;);  
//删除class  
obj.className = obj.className.replace(reg, &quot;&quot;);  
}  
/*  
 * toggleClass可以用来切换一个类  
 * 如果元素中具有该类，则删除  
 * 如果元素中没有该类，则添加  
 */  
function toggleClass(obj , cn){  
//判断obj中是否含有cn  
if(hasClass(obj , cn)){  
//有，则删除  
removeClass(obj , cn);  
}else{  
//没有，则添加  
addClass(obj , cn);  
}  
}  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="json" tabindex="-1"><a class="header-anchor" href="#json" aria-hidden="true">#</a> JSON</h2><p><strong>JavaScript Object Notation</strong> JS对象表示法</p><p>JS中的对象只有JS自己认识，其他的语言都不认识<br><strong>JSON就是一个特殊格式的字符串</strong>，这个字符串可以被任意的语言所识别，<br> 并且可以转换为任意语言中的对象，JSON在开发中主要用来数据的交互<br> JSON和JS对象的格式一样，只不过JSON字符串中的属性名必须加双引号<br> 其他的和JS语法一致<br> JSON分类：<br> 1.对象 {}<br> 2.数组 []</p><p>JSON中允许的值：<br> 1.字符串<br> 2.数值<br> 3.布尔值<br> 4.null<br> 5.对象<br> 6.数组</p><p>举例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var arr = &#39;[1,2,3,&quot;hello&quot;,true]&#39;;  
  
var obj2 = &#39;{&quot;arr&quot;:[1,2,3]}&#39;;  
  
var arr2 =&#39;[{&quot;name&quot;:&quot;孙悟空&quot;,&quot;age&quot;:18,&quot;gender&quot;:&quot;男&quot;},{&quot;name&quot;:&quot;孙悟空&quot;,&quot;age&quot;:18,&quot;gender&quot;:&quot;男&quot;}]&#39;;  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>JSON工具类</p><p>json &gt; js对象<br> JSON.parse()<br> 可以将以JSON字符串转换为js对象<br> 它需要一个JSON字符串作为参数，会将该字符串转换为JS对象并返回</p><p>var o = JSON.parse(json);<br> var o2 = JSON.parse(arr);</p><p>var obj3 = {name:“猪八戒” , age:28 , gender:“男”};</p><p>JS对象 &gt; JSON<br> JSON.stringify() -ify/fy，表示&quot;使……化。<br> 可以将一个JS对象转换为JSON字符串<br> 需要一个js对象作为参数，会返回一个JSON字符串</p><p>var str = JSON.stringify(obj3);<br> console.log(str);</p><p>JSON这个对象在IE7及以下的浏览器中不支持，所以在这些浏览器中调用时会报错</p><h2 id="原生js" tabindex="-1"><a class="header-anchor" href="#原生js" aria-hidden="true">#</a> # 原生js</h2><h2 id="原生js实现复制内容到剪切板" tabindex="-1"><a class="header-anchor" href="#原生js实现复制内容到剪切板" aria-hidden="true">#</a> 原生js实现复制内容到剪切板</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>copy() {  
    const input = document.createElement(&quot;input&quot;);  
    document.body.appendChild(input);  
    input.setAttribute(&quot;value&quot;,this.solution.code);  
    input.select();  
    if (document.execCommand(&quot;copy&quot;)) {  
        document.execCommand(&quot;copy&quot;);  
        // console.log(&quot;复制成功&quot;);  
    }  
    document.body.removeChild(input);  
}  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="other" tabindex="-1"><a class="header-anchor" href="#other" aria-hidden="true">#</a> other</h2><h2 id="localstorage" tabindex="-1"><a class="header-anchor" href="#localstorage" aria-hidden="true">#</a> localStorage</h2>`,415),w=e("code",null,"localStorage",-1),E={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Document",target:"_blank",rel:"noopener noreferrer"},j=e("code",null,"Document",-1),C={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Storage",target:"_blank",rel:"noopener noreferrer"},_=e("code",null,"Storage",-1),O=e("code",null,"localStorage",-1),M={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Window/sessionStorage",target:"_blank",rel:"noopener noreferrer"},I=e("code",null,"sessionStorage",-1),T=e("code",null,"localStorage",-1),k=e("code",null,"sessionStorage",-1),J=d(`<h2 id="eval" tabindex="-1"><a class="header-anchor" href="#eval" aria-hidden="true">#</a> eval()</h2><p>eval()<br> 这个函数可以用来执行一段字符串形式的JS代码，并将执行结果返回<br> 如果使用eval()执行的字符串中含有{},它会将{}当成是代码块<br> 如果不希望将其当成代码块解析，则需要在字符串前后各加一个()</p><p>eval()这个函数的功能很强大，可以直接执行一个字符串中的js代码，<br> 但是在开发中尽量不要使用，首先它的执行性能比较差，然后它还具有安全隐患</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var str = &#39;{&quot;name&quot;:&quot;孙悟空&quot;,&quot;age&quot;:18,&quot;gender&quot;:&quot;男&quot;}&#39;;  
var obj = eval(&quot;(&quot;+str+&quot;)&quot;);  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>编码</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!DOCTYPE html&gt;  
&lt;html&gt;  
&lt;head&gt;  
&lt;meta charset=&quot;UTF-8&quot;&gt;  
&lt;title&gt;&lt;/title&gt;  
&lt;script type=&quot;text/javascript&quot;&gt;  
  
/*  
 * 在字符串中使用转义字符输入Unicode编码  
 * \\u四位编码  
 */  
console.log(&quot;\\u2620&quot;);  
&lt;/script&gt;  
&lt;/head&gt;  
&lt;body&gt;  
&lt;!--在网页中使用Unicode编码  
&amp;#编码; 这里的编码需要的是10进制  
--&gt;  
&lt;h1 style=&quot;font-size: 200px;&quot;&gt;&amp;#9760;&lt;/h1&gt;  
&lt;h1 style=&quot;font-size: 200px;&quot;&gt;&amp;#9856;&lt;/h1&gt;  
&lt;/body&gt;  
&lt;/html&gt;  
  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),L=e("br",null,null,-1),B=e("br",null,null,-1),D=e("br",null,null,-1),W=e("br",null,null,-1),A={href:"https://github.com/codeOflI/LearningNotes/blob/master/JSNote/JavaScript/JavaScript.md",target:"_blank",rel:"noopener noreferrer"};function z(H,P){const i=s("ExternalLinkIcon");return l(),t("div",null,[b,e("p",null,[u,c,n(" String 字符串"),o,n(" Number 数值"),m,e("a",p,[n("Boolean"),r(i)]),n(" 布尔值"),h,n(" Null 空值"),g,n(" Undefined 未定义"),x,n(" Object 对象")]),f,e("h4",q,[y,n(" 方式一（"),e("a",S,[n("强制类型转换"),r(i)]),n("）：")]),N,e("p",null,[n("只读的"),w,n(" 属性允许你访问一个"),e("a",E,[j,r(i)]),n(" 源（origin）的对象 "),e("a",C,[_,r(i)]),n("；其存储的数据能在跨浏览器会话保留。"),O,n(" 类似 "),e("a",M,[I,r(i)]),n("，但其区别在于：存储在 "),T,n(" 的数据可以长期保留；而当页面会话结束——也就是说，当页面被关闭时，存储在 "),k,n(" 的数据会被清除 。")]),J,e("p",null,[n("confirm()用于弹出一个带有确认和取消按钮的提示框"),L,n(" 需要一个字符串作为参数，该字符串将会作为提示文字显示出来"),B,n(" 如果用户点击确认则会返回true，如果点击取消则返回false"),D,n(" var flag = confirm(“确认删除”+name+“吗?”);"),W,e("strong",null,[e("a",A,[n("github笔记下载地址"),r(i)])])])])}const U=a(v,[["render",z],["__file","javaScript.html.vue"]]);export{U as default};
