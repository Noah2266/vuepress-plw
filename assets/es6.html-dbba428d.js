import{_ as d,M as a,p as r,q as t,R as i,t as e,N as l,a1 as n}from"./framework-6700cb35.js";const v={},c=n(`<h1 id="es6" tabindex="-1"><a class="header-anchor" href="#es6" aria-hidden="true">#</a> ES6</h1><hr><h2 id="let变量声明和声明特性" tabindex="-1"><a class="header-anchor" href="#let变量声明和声明特性" aria-hidden="true">#</a> let变量声明和声明特性</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//声明变量
let a;
let b,c,d;
let e=100;
let f=521,g=&#39;iloveyou&#39;,h=[];

//1.变量不能重复声明
let star=&#39;罗志祥&#39;
let star=&#39;小猪&#39;//var可以重复声明

//2.块级作用域 全局 函数 eval

//3.不存在变量提升

//4.不影响作用域链
{
  let school=&#39;尚硅谷&#39;
  function fn(){
    console.log(school)
  }
  fn();//会沿着作用域链向上寻找（块级作用域不影响作用域链）
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="const声明变量和特点" tabindex="-1"><a class="header-anchor" href="#const声明变量和特点" aria-hidden="true">#</a> const声明变量和特点</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//声明常量
const SCHOOL=&#39;尚硅谷&#39;

//1.一定要赋初始值
const A;
//2.一般常量使用大写
//3.常量的值不能修改
//4.块级作用域
//5.对数组和对象的元素修改，不算做对常量的修改，不会报错
const TEAM=[&#39;a&#39;,&#39;b&#39;]
TEAM.push(&#39;Meiko&#39;)//以为这个变量指向的对象没有发生改变


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="变量的解构赋值" tabindex="-1"><a class="header-anchor" href="#变量的解构赋值" aria-hidden="true">#</a> 变量的解构赋值</h2>`,7),u={href:"https://so.csdn.net/so/search?q=ES6&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"},o=n(`<p>这被称为解构赋值</p><h2 id="_1-数组的解构" tabindex="-1"><a class="header-anchor" href="#_1-数组的解构" aria-hidden="true">#</a> 1.数组的解构</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const HH=[&#39;a&#39;,&#39;b&#39;]
let [A,B]=HH
//此时的A就是a B就是b；

-------------------------------------

// , = 占位符
let arr = [&quot;小明&quot;, &quot;小花&quot;, &quot;小鱼&quot;, &quot;小猪&quot;];
let [,,one] = arr; // 这里会取到小鱼

---------------------------------------

// 解构整个数组
let strArr = [...arr];
// 得到整个数组
console.log(strArr);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-对象的解构" tabindex="-1"><a class="header-anchor" href="#_2-对象的解构" aria-hidden="true">#</a> 2.对象的解构</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const ZHAO={
 name:&#39;解决&#39;
 age:&#39;60&#39;
 haha:function(){
  console.log(&quot;hhh&quot;)
 }
}
let {name,age,haha}=ZHAO;
haha();
//解构的名字一定要相同

------------------------------------------------------

// 剩余运算符
let {a, b, ...demo} = {a: 1, b: 2, c: 3, d: 4};
// a = 1
// b = 2
// demo = {c: 3, d: 4}

------------------------------------------------------

let obj = {
   className : &quot;卡西诺&quot;,
   age: 18
}
let {className} = obj; // 得到卡西诺
let {age} = obj;// 得到18
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="模板字符串" tabindex="-1"><a class="header-anchor" href="#模板字符串" aria-hidden="true">#</a> 模板字符串</h2><p>ES6引入新的声明字符串的方式\`\`</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//1.声明
let str=\`我也是一个字符串\`

//2.内容中可以直接出现换行符

//3.变量拼接
let bala=\`balabala\`;
let hh=\`\${bala}sss\`;
console.log(hh)//输出balabalasss

// 字符串中调用方法
function fn3(){
  return &quot;帅的不行！&quot;;
}
let string2= \`我真是\${fn3 ()}\`;
console.log(string2);  // 我真是帅的不行！

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="对象的简化写法" tabindex="-1"><a class="header-anchor" href="#对象的简化写法" aria-hidden="true">#</a> 对象的简化写法</h2><p>ES6允许在大括号里面，直接写入变量和函数，作为对象的属性和方法</p><p>这样的书写更加简洁</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let name=&#39;尚硅谷&#39;;
let change=function(){
 console.log(&#39;hhhh&#39;);
}

//简洁写法
const SCHOOL={
 name,
 change,//这两个全局有相同的就可以简写
 improve(){
  console.log(&#39;lllll&#39;)
 }
}//常规写法应该是
const SCHOOL={
 name:name,
 change:change,
 improve:function(){
   console.log(&#39;lllll&#39;)
 }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="箭头函数以及声明特点" tabindex="-1"><a class="header-anchor" href="#箭头函数以及声明特点" aria-hidden="true">#</a> 箭头函数以及声明特点</h2><p>ES6允许使用【箭头】定义函数</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//声明一个函数
let fn=function(){
 
}

let fn=(a,b)=&gt;{
  return a+b;
}
//调用函数
let result=fn(1,2);
console.log(result);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>特点：</p><ol><li>this 是静态的，this始终指向函数声明时所在作用域下的this的值（用call和apply他的this还是不会变的）</li><li>不能作为构造化实例对象</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let Person=(name,age)=&gt;{
 this.name=name;
 this.age=age;
}
let me=new Person(&#39;xiao&#39;,30)
是不被允许的
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.不能使用arguments 变量</p><p>4.箭头函数的简写</p><ul><li>省略小括号，当形参有且只有一个的时候</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let add=n=&gt;{
 return n+n;
}
console.log(add(9));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>省略花括号，当代码体只有一条语句的时候，**此时return必须省略，**而且 <strong>语句的执行结果就是函数的返回值</strong></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let pow=n=&gt; n*n;
console.log(pow(9));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="箭头函数的适用场景" tabindex="-1"><a class="header-anchor" href="#箭头函数的适用场景" aria-hidden="true">#</a> 箭头函数的适用场景</h2><p>当我们代码里存在这样的代码：let self = this;<br> 需要新建变量去保存this的时候<br> 案例如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let Person1 = {
    &#39;age&#39;: 18,
    &#39;sayHello&#39;: function () {
      setTimeout(()=&gt;{
        console.log(this.age);
      });
    }
};
var age = 20;
Person1.sayHello();  // 18
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="箭头函数使用案例" tabindex="-1"><a class="header-anchor" href="#箭头函数使用案例" aria-hidden="true">#</a> 箭头函数使用案例</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let ad = document.getElementById(&#39;ad&#39;)
ad.addEventListener(&quot;click&quot;,function(){
 setTimeout(()=&gt;{
  this.style.background=&#39;pink&#39;
 },2000)
});//这个this是这个function被声明的时候的this，所以是ad；如果不用箭头函数，这个this指向的是window
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//筛选出数组中的偶数元素
const arr=[1,6,9,10,100,25];
const result = arr.filter(item =&gt; item%2===0);
console.log(result);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>箭头函数适合与this无关的回调，定时器，数组的方法回调</p><p>箭头函数不适合与this有关的回调，事件回调，对象的方法</p><h2 id="函数参数的扩展" tabindex="-1"><a class="header-anchor" href="#函数参数的扩展" aria-hidden="true">#</a> 函数参数的扩展</h2><ol><li>默认参数</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// num为默认参数，如果不传，则默认为10
function fn(type, num=10){
 console.log(type, num);
}
fn(1);// 打印 1，10
fn(1,2); // 打印 1，2 （此值会覆盖默认参数10）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要注意的是：只有在未传递参数，或者参数为 undefined 时，才会使用默认参数，null 值被认为是有效的值传递。<br> 2. 不定参数</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 此处的values是不定的，且无论你传多少个
function f(...values){
    console.log(values.length);
}
f(1,2);      // 2
f(1,2,3,4);  // 4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="rest参数" tabindex="-1"><a class="header-anchor" href="#rest参数" aria-hidden="true">#</a> rest参数</h2><p>ES6引入rest参数，用于获取函数的实参，用来代替 argument</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function fn(...args){
 console.log(args)
}
fn(&#39;s&#39;&#39;a&#39;&#39;v&#39;);
//返回的是个数组
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>rest参数必须要放到最后</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function fn(a,b,...args){
 
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="扩展运算符" tabindex="-1"><a class="header-anchor" href="#扩展运算符" aria-hidden="true">#</a> 扩展运算符</h2><p>【…】扩展运算符能将【数组】转换为逗号分隔的【参数序列】</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const abc=[&#39;a&#39;,&#39;b&#39;,&#39;c&#39;]
function change(){
 console.log(arguments);
}
change(...abc)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="扩展运算符的运用" tabindex="-1"><a class="header-anchor" href="#扩展运算符的运用" aria-hidden="true">#</a> 扩展运算符的运用</h2><p>1.数组的合并</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const ab=[&#39;a&#39;,&#39;b&#39;]
const cd=[&#39;c&#39;,&#39;d&#39;]
const abcd=[..ab,..cd];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.数组的克隆</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const ab=[&#39;a&#39;,&#39;b&#39;]
const hh=[...ab]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>3.将伪数组转化为真正的数组</p><h2 id="symbol" tabindex="-1"><a class="header-anchor" href="#symbol" aria-hidden="true">#</a> Symbol</h2><h2 id="symbol基本使用" tabindex="-1"><a class="header-anchor" href="#symbol基本使用" aria-hidden="true">#</a> symbol基本使用</h2><p>Symbol是js语言的第七种数据类型，是一种类似于字符串的数据类型</p><p>1.其值是唯一的，用于解决命名冲突问题</p><p>2.不能与其他数据进行运算</p><p>3.不能使用for…in 循环遍历，但是可以使用Reflect.ownKeys来获取对象的所有键名</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let s= Symbol();
let s2=Symbol(&#39;hhh&#39;)
let s3=Symbol(&#39;hhh&#39;)

console.log(s2===s3)//返回false

//Symbol.for建立
let s2=Symbol.for(&#39;hhh&#39;)
let s3=Symbol.for(&#39;hhh&#39;)

console.log(s2===s3)//返回true

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="迭代器" tabindex="-1"><a class="header-anchor" href="#迭代器" aria-hidden="true">#</a> 迭代器</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//声明一个数组
const abcd=[&#39;a&#39;,&#39;b&#39;,&#39;c&#39;,&#39;d&#39;]

//使用for..in遍历数组
for(let v in abcd){
 console.log(v)//输出键名0 1 2 3
}

//使用for..of遍历数组//有Symbol的iteration属性才能使用
for(let v of abcd){
 console.log(v)//输出键值a,b,c,d
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="生成器" tabindex="-1"><a class="header-anchor" href="#生成器" aria-hidden="true">#</a> 生成器</h2><p>特殊的一种函数</p><p>实现异步编程</p><p>yield 函数代码的分隔符</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function * gen(){
 console.log(111);
 yield &#39;111&#39;;
 console.log(222);
 yield &#39;222&#39;;
 console.log(333)
}//当分隔符内没有语句时console.log会输出 yield的内容
//获得迭代器对象
let iterator=gen()
iterator.next();//输出111
iterator.next();//输出222
iterator.next();//输出333
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="生成器函数参数的传递" tabindex="-1"><a class="header-anchor" href="#生成器函数参数的传递" aria-hidden="true">#</a> 生成器函数参数的传递</h2><p><strong>第二个next传入的参数将作为第一个yield的返回结果；以此类推</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="promise" tabindex="-1"><a class="header-anchor" href="#promise" aria-hidden="true">#</a> Promise</h2><p>Promise是ES6引入的异步编程的新解决方案。语法上Promise是个构造函数，用来封装异步操作并可以获取其成功或失败的结果。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//实例化Promise对象
const p=new Promise(function(resolve,reject){
    setTimeout(function(){
    {
     let data=&#39;数据库中的数据&#39;
     
     //resolve 成功返回
     resolve(data);
     
     //reject 失败返回
     let err=&#39;数据读取失败&#39;;
     reject(err);
    }
    },1000)
})

//调用promise对象的then方法
p.then(function(value){
     console.log(value)//成功时
}),function(reason){
     console.log(reason)//失败时
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="promise-prototype-then方法" tabindex="-1"><a class="header-anchor" href="#promise-prototype-then方法" aria-hidden="true">#</a> promise.prototype.then方法</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const p=new Promise((resolve,reject)=&gt;{
 setTimeout(()=&gt;{
   resolve(&#39;用户数据&#39;) //成功
 },1000)
})

//调用then方法 then方法的返回结果是Promise对象，对象状态由回调函数的执行结果决定

const result = p.then(value =&gt;{
  console.log(value);
  //1.如果回调函数中返回的结果是 非promise类型的属性,状态为成功，返回值为对象的成功的值
  return 123;
  
  //2.是promise对象,那么上一级promise的值是这一级的返回值
  return new Promise((resolve,reject)=&gt;{
    reject(&#39;errr&#39;)
  })
  
  //3.抛出错误
  throw new Error(&#39;出错啦
  
})，reason=&gt;{
  console.warn(reason)
}

console.log(result)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>根据上述我们发现，<strong>promise的链式调用</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>p.then(value=&gt;{

}).then(value=&gt;{

})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="链式调用的实例" tabindex="-1"><a class="header-anchor" href="#链式调用的实例" aria-hidden="true">#</a> 链式调用的实例</h2><p>用普通嵌套的方式，读取多个文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const fs = require(&quot;fs&quot;);

fs.readFile(&#39;./resources/a.md&#39;,(err,data1)=&gt;{
  fs.readFile(&#39;./resources/b.md&#39;,(err,data2)=&gt;{
    fs.readFile(&#39;./resources/c.md&#39;,(err,data3)=&gt;{
      let result = data1 + data2 + data3;
      console.log(result);
    })
  })
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那么我们根据promise的链式调用实现</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const p = new Promise((resolve,reject)=&gt;{
  fs.readFile(&#39;./resources/a.md&#39;,(err,data)=&gt;{
    resolve(data)
  })
})

p.then(value=&gt;{
  //此时返回一个promise进行promise的嵌套
  return new Promise((resolve,reject)=&gt;{
    fs.readFile(&#39;./resources/b.md&#39;,(err,data)=&gt;{
      resolve([value,data])
      //这里是将上一级的成功返回对象value和当前要返回的对象data封装到数组内，作为成功值输出
    })
  })
}).then(value=&gt;{//这里的value是上一个then的成功值
  return new Promise((resolve,reject)=&gt;{
    fs.readFile(&#39;./resources/c.md&#39;,(err,data)=&gt;{
      //此时将这个的data压入value中
      value.push(data);
      resolve(value)//再将这个value作为成功值返回
    })
  })
}).then(value=&gt;{//这是上个then的成功值
  console.log(value.toString())
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="promise的catch方法" tabindex="-1"><a class="header-anchor" href="#promise的catch方法" aria-hidden="true">#</a> promise的catch方法</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const p = new Promise((resolve,reject)=&gt;{
  setTimeout (()=&gt;{
    reject(&quot;出错了&quot;)
  },1000)
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>常规方法</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>p.then(function(value){},function(reason){
  console.error(reason)
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>catch的方法</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>p.catch(function(reason){
  console.warn(reason)
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="set" tabindex="-1"><a class="header-anchor" href="#set" aria-hidden="true">#</a> Set</h2><p>es6提供了新的数据结构Set(集合)。<strong>它类似于数组，但成员的值都是唯一的</strong>，集合实现了iterator接口，所以可以使用【扩展运算符】和【for…of…】进行遍历</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let s=new Set()
let s2=new Set([&#39;a&#39;,&#39;b&#39;])//可传入可迭代数据

console.log(s,typeof s)//输出 Set{} Object

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="集合的属性和方法" tabindex="-1"><a class="header-anchor" href="#集合的属性和方法" aria-hidden="true">#</a> 集合的属性和方法</h2><ul><li>size 返回集合的元素个数</li><li>add 增加一个新元素，返回当前集合</li><li>delet 删除元素，返回boolean值</li><li>has 检测集合中是否包含某个元素，返回boolean</li><li>clear 清空集合</li></ul><h2 id="集合的实例" tabindex="-1"><a class="header-anchor" href="#集合的实例" aria-hidden="true">#</a> 集合的实例</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let arr = [1,2,3,4,5,4,3,2,1];
//1.数组去重
  //先转换为集合，集合顾名思义嘛会去重，再通过解构变回数组
  let result = [...new Set(arr)];
  
  
//2.交集
  let arr2=[4,5,6,5,6]
  //先去重，然后调用过滤器filter
  let result = [...new Set(arr)].filter(item=&gt;{
    let s2=new Set(arr2);//把arr2去重
    if(s2.has(item)){//如果s2中有当前循环的item
      return ture;
     }else{
      return false;
     }
  }) 


//3.并集
  let union = [...new Set([...arr,...arr2])];
 
  
//4.差集
  let arr2=[4,5,6,5,6]
  //先去重，然后调用过滤器filter
  let result = [...new Set(arr)].filter(item=&gt;{
    let s2=new Set(arr2);//把arr2去重
    if(s2.has(item)){//如果s2中有当前循环的item
      return false;
     }else{
      return true;
     }
  }) 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="map" tabindex="-1"><a class="header-anchor" href="#map" aria-hidden="true">#</a> Map</h2><p>ES6提供Map数据结构。他类似于对象，也是键值对的集合。但是“键”的范围不限于字符串，各类型的值（<strong>包括对象</strong>）都可以当做键值和键名。Map也实现了iterator接口，所以可以使用【扩展 运算符】和【for…of…】进行遍历。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let m = new Map();
创建一个空map
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Map的属性和方法：</p><ul><li>size 返回Map的元素个数</li><li>set 增加一个新元素，返回当前Map</li><li>get 返回键名对象的键值</li><li>delet 删除</li><li>has 检测Map中是否包含某个元素，返回boolean值</li><li>clear 清空集合，返回undefined</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//添加元素（键和值为参数）
m.set(&#39;name&#39;,&#39;哈哈哈&#39;)
m.set(&#39;change&#39;,function(){
  console.log(&quot;哈哈哈&quot;)
})
let key = {
  school:
}

//删除 (键名为参数)
m.delet(&#39;name&#39;)

//获取
m.get(&#39;name&#39;)   //返回键值  

//清空
m.clear();

//遍历
for(let v of m){
  console.log(v) //返回数组[键名，键值]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="class-类" tabindex="-1"><a class="header-anchor" href="#class-类" aria-hidden="true">#</a> Class 类</h2><p>ES6提供了更接近传统语言的写法，引入Class这个概念，作为对象的模板。通过class关键字，可以定义类。基本上，ES6的class可以看作只是一个语法糖，他的绝大部分功能ES5都可以做到，新的class写法只是让对象原型的写法更加清晰，更加牛</p><p>ES5方法</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//创建函数
function Phone(brand,price){
  this.brand=brand;
  this.price=price
}
//添加方法
Phone.prototype.call=function(){
  console.log(&quot;打电话&quot;)
}
//实例化对象
let Huawei=new Phone(&#39;华为&#39;,5999)
Huawei.call()//输出我可以打电话
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ES6方法</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Phone{
  //构造方法,名字不能修改
  constructor(){//这个方法会在new 实例化对象时会自动使用
       this.brand=brand;
       this.price=price;
  }
  //方法必须使用下面这种形式的语法 不能使用call:function(){}
  call(){
       console.log(&quot;好好&quot;)
  }
}

let Huawei = new Phone(&quot;hh&quot;,5555)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="class-静态成员" tabindex="-1"><a class="header-anchor" href="#class-静态成员" aria-hidden="true">#</a> Class 静态成员</h2><p><strong>函数对象与实例对象的属性是不通的，但prototype是相通的</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function Phone(){
  //这是一个函数对象
}
Phone.name=&#39;111&#39;
Phone.change = function(){
  
}//为函数对象添加属性，此时这两个相当于静态对象
Phone.prototype.call=&#39;1&#39;

let n = new Phone() //创建一个实例对象

console.log(n.name)//这里会报错
console.log(n.call)//这里会输出1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用class展示静态对象</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Phone{
  static name=&#39;11&#39;
}

let n = new Phone()
console.log(n.name)//undefined
console.log(Phone.name)//11
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="class类的继承-es5的继承查看js高级文档" tabindex="-1"><a class="header-anchor" href="#class类的继承-es5的继承查看js高级文档" aria-hidden="true">#</a> Class类的继承（es5的继承查看JS高级文档）</h2><p>extends</p><p>super</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Phone{
  //构造方法
  constructor(brand,price){
    this.brand=brand;
    this.price=price;
  }
  
  //父元素的成员属性
  call(){
    console.log(&quot;我可以打电话&quot;)
  }
}


class SmartPhone extends Phone{
  //构造方法
  constructor(brand,price,color,size){
    super(brand,price)//相当于Phone.call(this,brand,price)
    this.color=color
    this.size=size
  }
  
  photo(){
  
  }
  
  play(){
  
  }
}

const xiaomi = new SmartPhone(&#39;hhh&#39;,799,a,4)
xiaomi.call()//可以调用父类的方法
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="子类对父类方法的重写" tabindex="-1"><a class="header-anchor" href="#子类对父类方法的重写" aria-hidden="true">#</a> 子类对父类方法的重写</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Phone{
  //构造方法
  constructor(brand,price){
    this.brand=brand;
    this.price=price;
  }
  
  //父元素的成员属性
  call(){
    console.log(&quot;我可以打电话&quot;)
  }
}


class SmartPhone extends Phone{
  //构造方法
  constructor(brand,price,color,size){
    super(brand,price)//相当于Phone.call(this,brand,price)
    this.color=color
    this.size=size
  }
  //这些成员方法不能出现super
  call(){
    console.log(&quot;我可以&quot;)
  }
  
  photo(){
    
  }
  
  play(){
  
  }
}

const xiaomi = new SmartPhone(&#39;hhh&#39;,799,a,4)
xiaomi.call()//输出 我可以
//因为子类中覆盖了父类的call方法
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="get和set" tabindex="-1"><a class="header-anchor" href="#get和set" aria-hidden="true">#</a> Get和Set</h2><p>对对象的属性进行方法的绑定</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Phone{
  get price(){
    console.log(&quot;1&quot;)      //&lt;1&gt;
    return &quot;sss&quot;
  }
  
  set price(newVal){//一定要有个参数
    console.log(&quot;hhh&quot;)
  }
}

//实例化对象
let s = new Phone()

console.log(s.price)    //&lt;2&gt;
//会输出 1（这个是console&lt;1&gt;输出的） 和 sss  （这个是console&lt;2&gt;输出的） 

s.price = &#39;free&#39;;    //会输出hhh  （因为修改的触发了set方法）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>get通常对动态的属性进行封装，如平均值啊什么的</p><p>set进行判断等</p><h2 id="数值扩展" tabindex="-1"><a class="header-anchor" href="#数值扩展" aria-hidden="true">#</a> 数值扩展</h2><ol><li>Number.EPSILON是JavaScript表示的最小精度值</li><li>二进制八进制</li><li>Number.isFinite 检测一个值是否为有限数 返回布尔值</li><li>Number.isNaN 检测一个数值是否为NaN 返回布尔值</li><li>Number.parseInt Number.parseFloat字符串转整数</li><li>Number.isInteger 判断一个数是否为整数</li><li>Math.trunc 将数字的小数部分抹掉</li><li>Math.sign 判断正负数 正数返回1 0返回0 复数返回-1</li></ol><h2 id="对象方法扩展" tabindex="-1"><a class="header-anchor" href="#对象方法扩展" aria-hidden="true">#</a> 对象方法扩展</h2><ol><li>Object.is 判断两个值是否完全相等返回布尔值 类似于===，但当NaN===NaN时返回结果为false，Object.is返回的是true</li><li>Object.assign 对象的合并 返回新的对象 <strong>同名属性是过后面覆盖前面的</strong></li><li>Object.setPrototypeOf 设置原型对象 Object.getPrototypeOf 修改原型对象</li></ol><h2 id="模块化" tabindex="-1"><a class="header-anchor" href="#模块化" aria-hidden="true">#</a> 模块化</h2><p>模板功能主要由两个命令构成：export 和 import</p><ul><li>export 命令用于规定模板的对外接口</li><li>import 命令用于输入其他模板提供的功能</li></ul><h2 id="基本引入模块的方法" tabindex="-1"><a class="header-anchor" href="#基本引入模块的方法" aria-hidden="true">#</a> 基本引入模块的方法</h2><p>在html的script标签引入</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script type=&quot;module&quot;&gt;
  import * as 变量名 from &quot;文件地址&quot;
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>js文件中暴露</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>export let school=&#39;sss&#39;
export function hh(){
  console.log(&#39;11&#39;)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="暴露方法" tabindex="-1"><a class="header-anchor" href="#暴露方法" aria-hidden="true">#</a> 暴露方法</h2><p><strong>分别暴露</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>export let school=&#39;sss&#39;
export function hh(){
  console.log(&#39;11&#39;)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>统一暴露</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let school=&#39;sss&#39;
function hh(){
  console.log(&#39;11&#39;)
}
export {
    school,hh
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>**默认暴露(**对象属性的形式)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>export default {
  school : &#39;hhh&#39;
  change : function(){
    console.log(&quot;jhhh&quot;)
  }
} //返回的是dafault这个对象
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="引入方法" tabindex="-1"><a class="header-anchor" href="#引入方法" aria-hidden="true">#</a> 引入方法</h2><p><strong>通用的导入方式</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import * as 变量名 from &quot;文件地址&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>解构赋值的形式</strong>（应对分别暴露）</p><p>在html的script标签引入</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script type=&quot;module&quot;&gt;
  import {school,hh} from &quot;对应文件地址&quot;  
  //当解构的名称重名时，可在名称后面加个as 赋给新的变量 如 school as s
  //当暴露的是个对象时，一定要将这个对象赋给新的变量
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>js文件中暴露</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>export let school=&#39;sss&#39;
export function hh(){
  console.log(&#39;11&#39;)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>简便形式</strong>（针对默认暴露）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import m3 from &quot;地址&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="babel转化与npm包" tabindex="-1"><a class="header-anchor" href="#babel转化与npm包" aria-hidden="true">#</a> babel转化与NPM包</h2><h2 id="es7新特性" tabindex="-1"><a class="header-anchor" href="#es7新特性" aria-hidden="true">#</a> ES7新特性</h2><h2 id="array-prototype-includes" tabindex="-1"><a class="header-anchor" href="#array-prototype-includes" aria-hidden="true">#</a> Array.prototype.includes</h2><p>includes 方法用来检测数组中是否包含某个元素，返回布尔类型值</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const arr = [1, 3, 5, 2, &#39;8&#39;, NaN, -0]
arr.includes(1) // true
arr.includes(1, 2) // false 该方法的第二个参数表示搜索的起始位置，默认为0
arr.includes(&#39;1&#39;) // false
arr.includes(NaN) // true
arr.includes(+0) // true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="指数操作符" tabindex="-1"><a class="header-anchor" href="#指数操作符" aria-hidden="true">#</a> 指数操作符</h2><p>在ES7中引入了指数运算符，具有与Math.pow()等效的计算结果</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>console.log(2**10);// 输出1024zhicc
console.log(Math.pow(2, 10)) // 输出1024
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="async和await" tabindex="-1"><a class="header-anchor" href="#async和await" aria-hidden="true">#</a> Async和Await</h2><p>async和await两种语法结合可以让异步代码一样</p><h2 id="async" tabindex="-1"><a class="header-anchor" href="#async" aria-hidden="true">#</a> Async</h2><ol><li><p>async函数的<strong>返回值为promise对象</strong>，<strong>可以使用then方法添加回调函数</strong></p></li><li><p>promise对象的结果由async函数执行的返回值决定</p></li><li><p>当函数执行的时候，一旦遇到await就会先返回，等到触发的异步操作完成，再接着执行函数体后面的语句。</p></li></ol><p>对应代码状态：</p><p><img src="https://img-blog.csdnimg.cn/20210228200741517.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2N6ajEwNDk1NjE2MDE=,size_16,color_FFFFFF,t_70" alt=""></p><p><img src="https://img-blog.csdnimg.cn/2021022820085780.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2N6ajEwNDk1NjE2MDE=,size_16,color_FFFFFF,t_70" alt=""></p><p><img src="https://img-blog.csdnimg.cn/20210228200939150.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2N6ajEwNDk1NjE2MDE=,size_16,color_FFFFFF,t_70" alt=""></p><h2 id="await" tabindex="-1"><a class="header-anchor" href="#await" aria-hidden="true">#</a> Await</h2><p>说白了，await就是对promise成功的对象做一个获取，失败就try…catch</p><p>1：await右侧的表达式一般为promise对象，但也可以是其他的值<br> 2：如果表达式是promise对象，await返回的是promise成功的值<br> 3：如果表达式是其他值，直接将此值作为await的返回值。</p><p><strong>注意</strong>：<br> 1：await必须写在async函数中，但是async函数中可以没有await<br> 2：如果await的promise失败了，就会抛出异常，需要通过try…catch捕获</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  &lt;script&gt;
    async function main() {
      let p = new Promise((resolve, reject) =&gt; {
        resolve(&#39;OK&#39;);
      })
      //  await右侧为promise的情况，所以会返回上述resolve（&#39;ok&#39;）的值
      let result = await p;
      console.log(result);
    }
    // 执行函数
    main();
  &lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>情况2：这种情况很少见，一般右侧都是promise对象</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  &lt;script&gt;
    async function main() {
      let p = new Promise((resolve, reject) =&gt; {
        resolve(&#39;OK&#39;);
      })
      //  1.await右侧为promise的情况，所以会返回上述resolve（&#39;ok&#39;）的值
      let result = await p;
      // 2.await右侧为其他类型的数据, 是啥就返回啥 
      let result1=await 521;
      console.log(result1);
    }
    // 执行函数
    main();
  &lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>情况3：await右侧是失败的promise</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  &lt;script&gt;
    async function main() {
      let p = new Promise((resolve, reject) =&gt; {
        // resolve(&#39;OK&#39;);
        reject(&#39;Error&#39;);
      })

      try {
        let result3 = await p;
      }catch(error){
        console.log(error);
      }
    }
    // 执行函数
    main();
  &lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="详细看async和await文档" tabindex="-1"><a class="header-anchor" href="#详细看async和await文档" aria-hidden="true">#</a> 详细看Async和Await文档</h2><h2 id="对象方法扩展-1" tabindex="-1"><a class="header-anchor" href="#对象方法扩展-1" aria-hidden="true">#</a> 对象方法扩展</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//声明对象
const school={
  name:&quot;hh&quot;,
  cities:[&quot;佛山&quot;,&quot;广州”],
  subject:[&quot;前端&quot;,&quot;java&quot;,&quot;大数据&quot;]
}

//我们可以通过Object.keys()方法获得键值
console.log(Object.keys(school));//输出 [&quot;name&quot;,&quot;cities&quot;,&quot;subject&quot;]

//可以通过Object.values()方法获得键名
console.log(Object.values(school));//[&quot;hh&quot;,Array(2),Array(3)]

//可以通过entries获得名和值
console.log(Object.entries(school))
//返回[[&quot;name&quot;,&quot;hh&quot;][&quot;cities&quot;,Array(2)][&quot;subject&quot;,Array(3)]]

//可以通过Object.getOwnPropertyDescriptors()获得对象属性的描述对象（返回的是对象）
console.log(Object.getOwnPropertyDescriptors(school));
//返回{name:{...},cities:{...},subject:{...}}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>entries方法方便于创建一个map</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const m = new Map(Object.entries(school));
console.log(m.get(&#39;cities&#39;));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="rest参数和扩展运算符" tabindex="-1"><a class="header-anchor" href="#rest参数和扩展运算符" aria-hidden="true">#</a> Rest参数和扩展运算符</h2><p>rest参数：…参数名</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function connect({host,port,...user}){
  console.log(host)
  console.log(port)
  console.log(user)
}
connect({
  host:&#39;111&#39;,
  port:3306,
  username:&#39;hh&#39;,
  password:&#39;123456&#39;
  type:&#39;boy&#39;
})
//返回 111 3306 {username:&quot;hh&quot;,password:&#39;123456&#39;,type:&#39;boy&#39;}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过…将对象进行展开</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const one={
  q:&#39;a&#39;
}
const two={
  w:&#39;b&#39;
}
const three={
  e:&#39;c&#39; 
}
const mengseng={...one,...two,...three}
console.log(mengseng)
//输出{
  q:&#39;a&#39;,
  w:&#39;b&#39;,
  e:&#39;c&#39;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="正则扩展" tabindex="-1"><a class="header-anchor" href="#正则扩展" aria-hidden="true">#</a> 正则扩展</h2><h2 id="命名捕捉分组" tabindex="-1"><a class="header-anchor" href="#命名捕捉分组" aria-hidden="true">#</a> 命名捕捉分组</h2><p>ES9以前，获取字符串中的某些值，需要这样做</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let str = &#39;&lt;a href=&quot;http://www.baidu.com&quot;&gt;百度&lt;/a&gt;&#39;
const reg = /&lt;a href=&quot;(.*)&quot;&gt;(.*)&lt;\\/a&gt;/
let result = reg.exec(str)
console.log(result)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://img-blog.csdnimg.cn/20200806145849725.PNG?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzQ3MzU0NTc4,size_16,color_FFFFFF,t_70" alt=""></p><p>ES9允许命名捕获组使用符号<code>?&lt;name&gt;</code>，这样获取捕获结果可读性更强</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let str = &#39;&lt;a href=&quot;http://www.baidu.com&quot;&gt;百度&lt;/a&gt;&#39;

let reg = /&lt;a href=&quot;(?&lt;url&gt;.*)&quot;&gt;(?&lt;text&gt;.*)&lt;\\/a&gt;/

let result = reg.exec(str)
console.log(result)
console.log(result.groups.url)
console.log(result.groups.text)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://img-blog.csdnimg.cn/20200806145913762.PNG?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzQ3MzU0NTc4,size_16,color_FFFFFF,t_70" alt=""></p><h2 id="反向断言" tabindex="-1"><a class="header-anchor" href="#反向断言" aria-hidden="true">#</a> 反向断言</h2><p>ES9支持反向断言，使用<code>?&lt;=</code>对目标内容前面的内容进行判断，对匹配进行筛选</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let str = &#39;JS1231234你好啊555哈哈哈&#39;

// 取出555
// 正向断言，对目标内容后面的内容进行判断
// const reg = /\\d+(?=哈)/
// const result = reg.exec(str)

// 反向断言
const reg = /(?&lt;=啊)\\d+/
const result = reg.exec(str)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://img-blog.csdnimg.cn/20200806145932683.PNG" alt=""></p><h2 id="dotall-模式" tabindex="-1"><a class="header-anchor" href="#dotall-模式" aria-hidden="true">#</a> dotAll 模式</h2><p>正则表达式中<code>.</code>匹配除回车外的任何单字符，标记<code>s</code>会改变这种行为，允许行终止符出现</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let str = \`&lt;ul&gt;
                &lt;li&gt;
                    &lt;a&gt;肖生克的救赎&lt;/a&gt;
                    &lt;p&gt;上映日期：1994-09-10&lt;/p&gt;
                &lt;/li&gt; 
                &lt;li&gt;
                    &lt;a&gt;阿甘正传&lt;/a&gt;
                    &lt;p&gt;上映日期：1994-07-06&lt;/p&gt;
                &lt;/li&gt; 
           &lt;/ul&gt;\`

// const reg = /&lt;li&gt;\\s+&lt;a&gt;(.*?)&lt;\\/a&gt;\\s+&lt;p&gt;(.*?)&lt;\\/p&gt;\\s+&lt;\\/li&gt;/g
const reg = /&lt;li&gt;.*?&lt;a&gt;(.*?)&lt;\\/a&gt;.*?&lt;p&gt;(.*?)&lt;\\/p&gt;/gs;
let result;
let data = []
while (result = reg.exec(str)) {
    data.push({ title: result[1], time: result[2] })
}
console.log(data)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://img-blog.csdnimg.cn/20200806145948741.PNG" alt=""></p><h2 id="es10对象新特性" tabindex="-1"><a class="header-anchor" href="#es10对象新特性" aria-hidden="true">#</a> ES10对象新特性</h2><h2 id="object-fromentries" tabindex="-1"><a class="header-anchor" href="#object-fromentries" aria-hidden="true">#</a> object.fromEntries</h2><p>这个方法是用于创建对象的，但比较特殊，传入的参数为一个二维数组或者是一个Map对象</p><p><strong>下面演示一下二维数组的情况</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const result = Object.fromEntries([
 [&quot;name&quot;,&quot;rht&quot;],
 [&quot;object&quot;,&quot;Math&quot;,&quot;English&quot;]
])
console.log(result)
//返回对象
{
  name:&quot;rht&quot;,
  object:&quot;Math,English&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>下面演示Map的情况</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const m = new Map()
m.set(&#39;name&#39;,&#39;HHHH&#39;)

const result = Object.fromEntries(m)

console.log(result)
//返回对象
{
  name:&quot;HHHH&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="object-entries-fromentries的逆运算" tabindex="-1"><a class="header-anchor" href="#object-entries-fromentries的逆运算" aria-hidden="true">#</a> Object.entries(fromEntries的逆运算)</h2><p>entries是fromEntries的逆运算，将一个对象转换成二维数组</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const arr = Object.entries({
  name:&quot;hhhh&quot;,
  b:&quot;a&quot;
})

console.log(arr)
//返回一个二维数组
[[&quot;name&quot;,&quot;hhhh&quot;],[&quot;b&quot;,&quot;a&quot;]]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="es10字符串新方法" tabindex="-1"><a class="header-anchor" href="#es10字符串新方法" aria-hidden="true">#</a> ES10字符串新方法</h2><h2 id="trim" tabindex="-1"><a class="header-anchor" href="#trim" aria-hidden="true">#</a> trim</h2><p>用于清除字符串两边空白的字符</p><h2 id="trimstart" tabindex="-1"><a class="header-anchor" href="#trimstart" aria-hidden="true">#</a> trimStart</h2><p>用于清除字符串开头的空白</p><h2 id="trimend" tabindex="-1"><a class="header-anchor" href="#trimend" aria-hidden="true">#</a> trimEnd</h2><p>用于清除字符串结尾的空白</p><h2 id="es10数组方法" tabindex="-1"><a class="header-anchor" href="#es10数组方法" aria-hidden="true">#</a> ES10数组方法</h2><h2 id="flat降低数组维度" tabindex="-1"><a class="header-anchor" href="#flat降低数组维度" aria-hidden="true">#</a> flat降低数组维度</h2><p>flat可以将数组的维度降低一个，二转一，三转二</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const arr=[1,2,3,[4,5]]

console.log(arr.flat)
//返回
[1,2,3,4,5]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>**flat(参数)**可以传递一个参数num，这个参数作为深度，当三维数组想直接变成一维数组时，降低两个维度，那么深度为2，即此时的参数应该为2</p><h2 id="flatmap降低map的维度" tabindex="-1"><a class="header-anchor" href="#flatmap降低map的维度" aria-hidden="true">#</a> flatMap降低map的维度</h2><h2 id="es11新特性" tabindex="-1"><a class="header-anchor" href="#es11新特性" aria-hidden="true">#</a> ES11新特性</h2><h2 id="bigint" tabindex="-1"><a class="header-anchor" href="#bigint" aria-hidden="true">#</a> BigInt</h2><p>我们知道，js 能表示的安全整数范围是-(2^53-1)至 2^53-1，这是由 js 存储数字的方式决定的，我们可以用Number.isSafeInteger()来判断某个数是否在这个范围内，上下边界可以用Number.MIN_SAFE_INTEGER 和 Number.MAX_SAFE_INTEGER得到。</p><p>es11为了解决大数问题，推出了新的数据类型BigInt。这种数据类型可以进行大整数运算，但是注意，BigInt和普通的Number类型不能进行运算。</p><p>可以用BigInt的构造函数或者在数字后面加一个后缀n来得到BigInt。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let a = BigInt(123);
let b = 1212n;
let a = Number.MAX_SAFE_INTEGER;
console.log(a + 1 === a + 2); //true
let b = 9007199254740992n;
let c = b + 1n;
b === c; //false
typeof b; //bigint
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果BigInt和普通的Number数据进行运算会报错</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let d = 1n;
d + 1;//Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="string-prototype-matchall" tabindex="-1"><a class="header-anchor" href="#string-prototype-matchall" aria-hidden="true">#</a> String.prototype.matchAll</h2><p>字符串实例的matchAll方法接收正则或者字符串，会返回一个迭代器，迭代器的每次执行，都会返回一匹配项以及相应的匹配信息。我们可以遍历迭代器，去拿到所有的结果</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var str = &#39;&lt;div&gt;JS&lt;/div&gt;&lt;div&gt;正则&lt;/div&gt;&#39;;
var allMatchs = str.matchAll(/&lt;\\w+&gt;(.*?)&lt;\\/\\w+&gt;/g);

for (const match of allMatchs) {
  console.log(match);
}

/*
第一次迭代返回：
[
    &quot;&lt;div&gt;JS&lt;/div&gt;&quot;,
    &quot;JS&quot;,
    index: 0,
    input: &quot;&lt;div&gt;JS&lt;/div&gt;&lt;div&gt;正则&lt;/div&gt;&quot;,
    groups: undefined
]
第二次迭代返回：
[
    &quot;&lt;div&gt;正则&lt;/div&gt;&quot;,
    &quot;正则&quot;,
    index: 15,
    input: &quot;&lt;div&gt;JS&lt;/div&gt;&lt;div&gt;正则&lt;/div&gt;&quot;,
    groups: undefined
]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="globalthis" tabindex="-1"><a class="header-anchor" href="#globalthis" aria-hidden="true">#</a> globalThis</h2><p>因为js有不同的运行环境，不同的运行环境有不同的全局对象，比如在node里面是global，在浏览器是window或者self，为了统一获取全局对象的方式，就有了globalThis。globalThis指向的对象和各环境的全局对象是一样的，只是规范获取方式。</p><p>globalThis//window(浏览器环境)</p><h2 id="dynamic-import" tabindex="-1"><a class="header-anchor" href="#dynamic-import" aria-hidden="true">#</a> dynamic-import</h2><p>这个特性在webpack和ts中都支持了，即动态加载，或者说按需加载。</p><p>Import（src）返回的是一个promise对象，所以可以用await或者注册回调来处理</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>async function fn() {
  const a = await import(&quot;./7-1.js&quot;);
  import(&quot;./7-1.js&quot;).then((module) =&gt; {
    //
  });
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,242),m={href:"https://so.csdn.net/so/search?q=%E4%BD%9C%E7%94%A8%E5%9F%9F&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"},b=n(`<h2 id="空值合并运算符" tabindex="-1"><a class="header-anchor" href="#空值合并运算符" aria-hidden="true">#</a> 空值合并运算符</h2><p>这个特性在ts的 3.7版本已经推出半年了，用过ts的应该不陌生，空值合并运算符(??)和之前的或(||)操作符有点像。不同的是，或是在左边的表达式为假值(false,0,&quot;&quot;,NaN,null,undefined)时，取右边的值，而空值合并运算符，是在左边的表达式为空值（null,undifined）时取右边的值。</p><p>看个例子：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const a = 0;
const b = false;
const c = null;
const d = undefined;
console.log(a || b); //false
console.log(a ?? c); //0
console.log(c ?? d); //undefined
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="可选链" tabindex="-1"><a class="header-anchor" href="#可选链" aria-hidden="true">#</a> 可选链</h2><p>这个特性也是早在ts 的3.7版本就已经推出的，和空值合并运算符经常一起使用。</p><p>我们在用对象点出属性或者方法的时候，如果嵌套的话，可能会出现中间某个对象是undifined，导致代码报错。为了代码的健壮性，我们经常用&amp;&amp;来规避，比如这样：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>a &amp;&amp; a.b &amp;&amp; a.b();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>有了空值合并运算符，就不需要冗余的&amp;&amp;了。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>a?.b?.()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>数组可以看成特殊的对象，取数组成员时也用?.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>b?.[1]?.ccc//b数组的可能的第2个成员的可能的ccc属性
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>空值合并运算符结合可选链，我们可以很方便的给一个变量赋值，以及如果赋值失败赋值上默认值</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const a = b?.c?.d ?? &quot;&quot;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="promise-allsettled" tabindex="-1"><a class="header-anchor" href="#promise-allsettled" aria-hidden="true">#</a> Promise.allSettled</h2><p>我们知道，Promise.all的作用是等全部的promise示例都resolve之后，触发对应的回调，。这就有个问题，如果有个promise失败，即reject了，那么Promise.all的状态是失败的，即不会触发作为回调函数的第一个参数。为了补充这个场景，Promise.allSettled就来了。</p><p>Promise.allSettled也是接收一个Promise数组作为参数，等所有的参数状态都完成的时候（不管是成功还是失败），回调就会触发。回调函数的参数是一个数组，数组的每个元素有两个属性，一个是status，值为’rejected’或者’fullfilled’，对应表示这个promise是成功还是失败，另一个属性是reason，表示promise的回调参数。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const a1 = Promise.resolve(1);
const a2 = Promise.resolve(2);
const a3 = Promise.reject(3);
const a4 = Promise.reject();
Promise.allSettled([a1, a2, a3, a4]).then((a) =&gt; {
  console.log(a);
});
// [
//   { &quot;status&quot;: &quot;fulfilled&quot;, &quot;value&quot;: 1 },
//   { &quot;status&quot;: &quot;fulfilled&quot;, &quot;value&quot;: 2 },
//   { &quot;status&quot;: &quot;rejected&quot;, &quot;reason&quot;: 3 },
//   { &quot;status&quot;: &quot;rejected&quot;, &quot;reason&quot;: undefined}
// ]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="聚合导出" tabindex="-1"><a class="header-anchor" href="#聚合导出" aria-hidden="true">#</a> 聚合导出</h2><p>关于import，我们可以这样导入所有成员：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import * as MyModule from &#39;...&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这次加了个配套的</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>export * as MyModule from &#39;...&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这个导出语句和下面的语句的作用是一样的</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import * as MyModule from &#39;...&#39;
export {MyModule}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>以上就是ES11的新特性，可以看得出来，比之前的ES10这些斑斑改动量还是更大的，也方便了一些js代码的书写。</p>`,26);function h(g,p){const s=a("ExternalLinkIcon");return r(),t("div",null,[c,i("p",null,[i("a",u,[e("ES6"),l(s)]),e(" 允许按照一定的模式从数组和对象中提取值，对变量进行赋值")]),o,i("p",null,[e("另一个需要注意的点是，之前的import只能写在顶层"),i("a",m,[e("作用域"),l(s)]),e("，不能写在函数内部，现在的动态import可以写在非顶层作用域内。")]),b])}const f=d(v,[["render",h],["__file","es6.html.vue"]]);export{f as default};
