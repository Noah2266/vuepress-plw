---
created: 20230306-174415-7690 (UTC +08:00)
tags: [es6-11学习笔记]
---

# ES6

---
## let变量声明和声明特性

```
//声明变量
let a;
let b,c,d;
let e=100;
let f=521,g='iloveyou',h=[];

//1.变量不能重复声明
let star='罗志祥'
let star='小猪'//var可以重复声明

//2.块级作用域 全局 函数 eval

//3.不存在变量提升

//4.不影响作用域链
{
  let school='尚硅谷'
  function fn(){
    console.log(school)
  }
  fn();//会沿着作用域链向上寻找（块级作用域不影响作用域链）
}
```

## const声明变量和特点

```
//声明常量
const SCHOOL='尚硅谷'

//1.一定要赋初始值
const A;
//2.一般常量使用大写
//3.常量的值不能修改
//4.块级作用域
//5.对数组和对象的元素修改，不算做对常量的修改，不会报错
const TEAM=['a','b']
TEAM.push('Meiko')//以为这个变量指向的对象没有发生改变


```

## 变量的解构赋值

[ES6](https://so.csdn.net/so/search?q=ES6&spm=1001.2101.3001.7020) 允许按照一定的模式从数组和对象中提取值，对变量进行赋值

这被称为解构赋值

## 1.数组的解构

```
const HH=['a','b']
let [A,B]=HH
//此时的A就是a B就是b；

-------------------------------------

// , = 占位符
let arr = ["小明", "小花", "小鱼", "小猪"];
let [,,one] = arr; // 这里会取到小鱼

---------------------------------------

// 解构整个数组
let strArr = [...arr];
// 得到整个数组
console.log(strArr);

```

## 2.对象的解构

```
const ZHAO={
 name:'解决'
 age:'60'
 haha:function(){
  console.log("hhh")
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
   className : "卡西诺",
   age: 18
}
let {className} = obj; // 得到卡西诺
let {age} = obj;// 得到18
```

## 模板字符串

ES6引入新的声明字符串的方式\`\`

```
//1.声明
let str=`我也是一个字符串`

//2.内容中可以直接出现换行符

//3.变量拼接
let bala=`balabala`;
let hh=`${bala}sss`;
console.log(hh)//输出balabalasss

// 字符串中调用方法
function fn3(){
  return "帅的不行！";
}
let string2= `我真是${fn3 ()}`;
console.log(string2);  // 我真是帅的不行！

```

## 对象的简化写法

ES6允许在大括号里面，直接写入变量和函数，作为对象的属性和方法

这样的书写更加简洁

```
let name='尚硅谷';
let change=function(){
 console.log('hhhh');
}

//简洁写法
const SCHOOL={
 name,
 change,//这两个全局有相同的就可以简写
 improve(){
  console.log('lllll')
 }
}//常规写法应该是
const SCHOOL={
 name:name,
 change:change,
 improve:function(){
   console.log('lllll')
 }
}
```

## 箭头函数以及声明特点

ES6允许使用【箭头】定义函数

```
//声明一个函数
let fn=function(){
 
}

let fn=(a,b)=>{
  return a+b;
}
//调用函数
let result=fn(1,2);
console.log(result);
```

特点：

1.  this 是静态的，this始终指向函数声明时所在作用域下的this的值（用call和apply他的this还是不会变的）
2.  不能作为构造化实例对象

```
let Person=(name,age)=>{
 this.name=name;
 this.age=age;
}
let me=new Person('xiao',30)
是不被允许的
```

3.不能使用arguments 变量

4.箭头函数的简写

-   省略小括号，当形参有且只有一个的时候

```
let add=n=>{
 return n+n;
}
console.log(add(9));
```

-   省略花括号，当代码体只有一条语句的时候，\*\*此时return必须省略，\*\*而且 **语句的执行结果就是函数的返回值**

```
let pow=n=> n*n;
console.log(pow(9));
```

## 箭头函数的适用场景

当我们代码里存在这样的代码：let self = this;  
需要新建变量去保存this的时候  
案例如下：

```
let Person1 = {
    'age': 18,
    'sayHello': function () {
      setTimeout(()=>{
        console.log(this.age);
      });
    }
};
var age = 20;
Person1.sayHello();  // 18
```

## 箭头函数使用案例

```
let ad = document.getElementById('ad')
ad.addEventListener("click",function(){
 setTimeout(()=>{
  this.style.background='pink'
 },2000)
});//这个this是这个function被声明的时候的this，所以是ad；如果不用箭头函数，这个this指向的是window
```

```
//筛选出数组中的偶数元素
const arr=[1,6,9,10,100,25];
const result = arr.filter(item => item%2===0);
console.log(result);
```

箭头函数适合与this无关的回调，定时器，数组的方法回调

箭头函数不适合与this有关的回调，事件回调，对象的方法

## 函数参数的扩展

1.  默认参数

```
// num为默认参数，如果不传，则默认为10
function fn(type, num=10){
 console.log(type, num);
}
fn(1);// 打印 1，10
fn(1,2); // 打印 1，2 （此值会覆盖默认参数10）
```

需要注意的是：只有在未传递参数，或者参数为 undefined 时，才会使用默认参数，null 值被认为是有效的值传递。  
2\. 不定参数

```
// 此处的values是不定的，且无论你传多少个
function f(...values){
    console.log(values.length);
}
f(1,2);      // 2
f(1,2,3,4);  // 4
```

## rest参数

ES6引入rest参数，用于获取函数的实参，用来代替 argument

```
function fn(...args){
 console.log(args)
}
fn('s''a''v');
//返回的是个数组
```

rest参数必须要放到最后

```
function fn(a,b,...args){
 
}
```

## 扩展运算符

【…】扩展运算符能将【数组】转换为逗号分隔的【参数序列】

```
const abc=['a','b','c']
function change(){
 console.log(arguments);
}
change(...abc)
```

## 扩展运算符的运用

1.数组的合并

```
const ab=['a','b']
const cd=['c','d']
const abcd=[..ab,..cd];
```

2.数组的克隆

```
const ab=['a','b']
const hh=[...ab]
```

3.将伪数组转化为真正的数组

## Symbol

## symbol基本使用

Symbol是js语言的第七种数据类型，是一种类似于字符串的数据类型

1.其值是唯一的，用于解决命名冲突问题

2.不能与其他数据进行运算

3.不能使用for…in 循环遍历，但是可以使用Reflect.ownKeys来获取对象的所有键名

```
let s= Symbol();
let s2=Symbol('hhh')
let s3=Symbol('hhh')

console.log(s2===s3)//返回false

//Symbol.for建立
let s2=Symbol.for('hhh')
let s3=Symbol.for('hhh')

console.log(s2===s3)//返回true

```

## 迭代器

```
//声明一个数组
const abcd=['a','b','c','d']

//使用for..in遍历数组
for(let v in abcd){
 console.log(v)//输出键名0 1 2 3
}

//使用for..of遍历数组//有Symbol的iteration属性才能使用
for(let v of abcd){
 console.log(v)//输出键值a,b,c,d
}
```

## 生成器

特殊的一种函数

实现异步编程

yield 函数代码的分隔符

```
function * gen(){
 console.log(111);
 yield '111';
 console.log(222);
 yield '222';
 console.log(333)
}//当分隔符内没有语句时console.log会输出 yield的内容
//获得迭代器对象
let iterator=gen()
iterator.next();//输出111
iterator.next();//输出222
iterator.next();//输出333
```

## 生成器函数参数的传递

**第二个next传入的参数将作为第一个yield的返回结果；以此类推**

```

```

## Promise

Promise是ES6引入的异步编程的新解决方案。语法上Promise是个构造函数，用来封装异步操作并可以获取其成功或失败的结果。

```
//实例化Promise对象
const p=new Promise(function(resolve,reject){
    setTimeout(function(){
    {
     let data='数据库中的数据'
     
     //resolve 成功返回
     resolve(data);
     
     //reject 失败返回
     let err='数据读取失败';
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
```

## promise.prototype.then方法

```
const p=new Promise((resolve,reject)=>{
 setTimeout(()=>{
   resolve('用户数据') //成功
 },1000)
})

//调用then方法 then方法的返回结果是Promise对象，对象状态由回调函数的执行结果决定

const result = p.then(value =>{
  console.log(value);
  //1.如果回调函数中返回的结果是 非promise类型的属性,状态为成功，返回值为对象的成功的值
  return 123;
  
  //2.是promise对象,那么上一级promise的值是这一级的返回值
  return new Promise((resolve,reject)=>{
    reject('errr')
  })
  
  //3.抛出错误
  throw new Error('出错啦
  
})，reason=>{
  console.warn(reason)
}

console.log(result)
```

根据上述我们发现，**promise的链式调用**

```
p.then(value=>{

}).then(value=>{

})
```

## 链式调用的实例

用普通嵌套的方式，读取多个文件

```
const fs = require("fs");

fs.readFile('./resources/a.md',(err,data1)=>{
  fs.readFile('./resources/b.md',(err,data2)=>{
    fs.readFile('./resources/c.md',(err,data3)=>{
      let result = data1 + data2 + data3;
      console.log(result);
    })
  })
})
```

那么我们根据promise的链式调用实现

```
const p = new Promise((resolve,reject)=>{
  fs.readFile('./resources/a.md',(err,data)=>{
    resolve(data)
  })
})

p.then(value=>{
  //此时返回一个promise进行promise的嵌套
  return new Promise((resolve,reject)=>{
    fs.readFile('./resources/b.md',(err,data)=>{
      resolve([value,data])
      //这里是将上一级的成功返回对象value和当前要返回的对象data封装到数组内，作为成功值输出
    })
  })
}).then(value=>{//这里的value是上一个then的成功值
  return new Promise((resolve,reject)=>{
    fs.readFile('./resources/c.md',(err,data)=>{
      //此时将这个的data压入value中
      value.push(data);
      resolve(value)//再将这个value作为成功值返回
    })
  })
}).then(value=>{//这是上个then的成功值
  console.log(value.toString())
})
```

## promise的catch方法

```
const p = new Promise((resolve,reject)=>{
  setTimeout (()=>{
    reject("出错了")
  },1000)
})
```

常规方法

```
p.then(function(value){},function(reason){
  console.error(reason)
})
```

catch的方法

```
p.catch(function(reason){
  console.warn(reason)
})
```

## Set

es6提供了新的数据结构Set(集合)。**它类似于数组，但成员的值都是唯一的**，集合实现了iterator接口，所以可以使用【扩展运算符】和【for…of…】进行遍历

```
let s=new Set()
let s2=new Set(['a','b'])//可传入可迭代数据

console.log(s,typeof s)//输出 Set{} Object

```

## 集合的属性和方法

-   size 返回集合的元素个数
-   add 增加一个新元素，返回当前集合
-   delet 删除元素，返回boolean值
-   has 检测集合中是否包含某个元素，返回boolean
-   clear 清空集合

## 集合的实例

```
let arr = [1,2,3,4,5,4,3,2,1];
//1.数组去重
  //先转换为集合，集合顾名思义嘛会去重，再通过解构变回数组
  let result = [...new Set(arr)];
  
  
//2.交集
  let arr2=[4,5,6,5,6]
  //先去重，然后调用过滤器filter
  let result = [...new Set(arr)].filter(item=>{
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
  let result = [...new Set(arr)].filter(item=>{
    let s2=new Set(arr2);//把arr2去重
    if(s2.has(item)){//如果s2中有当前循环的item
      return false;
     }else{
      return true;
     }
  }) 
```

## Map

ES6提供Map数据结构。他类似于对象，也是键值对的集合。但是“键”的范围不限于字符串，各类型的值（**包括对象**）都可以当做键值和键名。Map也实现了iterator接口，所以可以使用【扩展 运算符】和【for…of…】进行遍历。

```
let m = new Map();
创建一个空map
```

Map的属性和方法：

-   size 返回Map的元素个数
-   set 增加一个新元素，返回当前Map
-   get 返回键名对象的键值
-   delet 删除
-   has 检测Map中是否包含某个元素，返回boolean值
-   clear 清空集合，返回undefined

```
//添加元素（键和值为参数）
m.set('name','哈哈哈')
m.set('change',function(){
  console.log("哈哈哈")
})
let key = {
  school:
}

//删除 (键名为参数)
m.delet('name')

//获取
m.get('name')   //返回键值  

//清空
m.clear();

//遍历
for(let v of m){
  console.log(v) //返回数组[键名，键值]
}
```

## Class 类

ES6提供了更接近传统语言的写法，引入Class这个概念，作为对象的模板。通过class关键字，可以定义类。基本上，ES6的class可以看作只是一个语法糖，他的绝大部分功能ES5都可以做到，新的class写法只是让对象原型的写法更加清晰，更加牛

ES5方法

```
//创建函数
function Phone(brand,price){
  this.brand=brand;
  this.price=price
}
//添加方法
Phone.prototype.call=function(){
  console.log("打电话")
}
//实例化对象
let Huawei=new Phone('华为',5999)
Huawei.call()//输出我可以打电话
```

ES6方法

```
class Phone{
  //构造方法,名字不能修改
  constructor(){//这个方法会在new 实例化对象时会自动使用
       this.brand=brand;
       this.price=price;
  }
  //方法必须使用下面这种形式的语法 不能使用call:function(){}
  call(){
       console.log("好好")
  }
}

let Huawei = new Phone("hh",5555)
```

## Class 静态成员

**函数对象与实例对象的属性是不通的，但prototype是相通的**

```
function Phone(){
  //这是一个函数对象
}
Phone.name='111'
Phone.change = function(){
  
}//为函数对象添加属性，此时这两个相当于静态对象
Phone.prototype.call='1'

let n = new Phone() //创建一个实例对象

console.log(n.name)//这里会报错
console.log(n.call)//这里会输出1
```

用class展示静态对象

```
class Phone{
  static name='11'
}

let n = new Phone()
console.log(n.name)//undefined
console.log(Phone.name)//11
```

## Class类的继承（es5的继承查看JS高级文档）

extends

super

```
class Phone{
  //构造方法
  constructor(brand,price){
    this.brand=brand;
    this.price=price;
  }
  
  //父元素的成员属性
  call(){
    console.log("我可以打电话")
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

const xiaomi = new SmartPhone('hhh',799,a,4)
xiaomi.call()//可以调用父类的方法
```

## 子类对父类方法的重写

```
class Phone{
  //构造方法
  constructor(brand,price){
    this.brand=brand;
    this.price=price;
  }
  
  //父元素的成员属性
  call(){
    console.log("我可以打电话")
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
    console.log("我可以")
  }
  
  photo(){
    
  }
  
  play(){
  
  }
}

const xiaomi = new SmartPhone('hhh',799,a,4)
xiaomi.call()//输出 我可以
//因为子类中覆盖了父类的call方法
```

## Get和Set

对对象的属性进行方法的绑定

```
class Phone{
  get price(){
    console.log("1")      //<1>
    return "sss"
  }
  
  set price(newVal){//一定要有个参数
    console.log("hhh")
  }
}

//实例化对象
let s = new Phone()

console.log(s.price)    //<2>
//会输出 1（这个是console<1>输出的） 和 sss  （这个是console<2>输出的） 

s.price = 'free';    //会输出hhh  （因为修改的触发了set方法）
```

get通常对动态的属性进行封装，如平均值啊什么的

set进行判断等

## 数值扩展

1.  Number.EPSILON是JavaScript表示的最小精度值
2.  二进制八进制
3.  Number.isFinite 检测一个值是否为有限数 返回布尔值
4.  Number.isNaN 检测一个数值是否为NaN 返回布尔值
5.  Number.parseInt Number.parseFloat字符串转整数
6.  Number.isInteger 判断一个数是否为整数
7.  Math.trunc 将数字的小数部分抹掉
8.  Math.sign 判断正负数 正数返回1 0返回0 复数返回-1

## 对象方法扩展

1.  Object.is 判断两个值是否完全相等返回布尔值 类似于===，但当NaN===NaN时返回结果为false，Object.is返回的是true
2.  Object.assign 对象的合并 返回新的对象 **同名属性是过后面覆盖前面的**
3.  Object.setPrototypeOf 设置原型对象 Object.getPrototypeOf 修改原型对象

## 模块化

模板功能主要由两个命令构成：export 和 import

-   export 命令用于规定模板的对外接口
-   import 命令用于输入其他模板提供的功能

## 基本引入模块的方法

在html的script标签引入

```
<script type="module">
  import * as 变量名 from "文件地址"
</script>
```

js文件中暴露

```
export let school='sss'
export function hh(){
  console.log('11')
}
```

## 暴露方法

**分别暴露**

```
export let school='sss'
export function hh(){
  console.log('11')
}
```

**统一暴露**

```
let school='sss'
function hh(){
  console.log('11')
}
export {
    school,hh
}
```

\*\*默认暴露(\*\*对象属性的形式)

```
export default {
  school : 'hhh'
  change : function(){
    console.log("jhhh")
  }
} //返回的是dafault这个对象
```

## 引入方法

**通用的导入方式**

```
import * as 变量名 from "文件地址"
```

**解构赋值的形式**（应对分别暴露）

在html的script标签引入

```
<script type="module">
  import {school,hh} from "对应文件地址"  
  //当解构的名称重名时，可在名称后面加个as 赋给新的变量 如 school as s
  //当暴露的是个对象时，一定要将这个对象赋给新的变量
</script>
```

js文件中暴露

```
export let school='sss'
export function hh(){
  console.log('11')
}
```

**简便形式**（针对默认暴露）

```
import m3 from "地址"
```

## babel转化与NPM包

## ES7新特性

## Array.prototype.includes

includes 方法用来检测数组中是否包含某个元素，返回布尔类型值

```
const arr = [1, 3, 5, 2, '8', NaN, -0]
arr.includes(1) // true
arr.includes(1, 2) // false 该方法的第二个参数表示搜索的起始位置，默认为0
arr.includes('1') // false
arr.includes(NaN) // true
arr.includes(+0) // true
```

## 指数操作符

在ES7中引入了指数运算符，具有与Math.pow()等效的计算结果

```
console.log(2**10);// 输出1024zhicc
console.log(Math.pow(2, 10)) // 输出1024
```

## Async和Await

async和await两种语法结合可以让异步代码一样

## Async

1.  async函数的**返回值为promise对象**，**可以使用then方法添加回调函数**
    
2.  promise对象的结果由async函数执行的返回值决定
    
3.  当函数执行的时候，一旦遇到await就会先返回，等到触发的异步操作完成，再接着执行函数体后面的语句。
    

对应代码状态：

![](https://img-blog.csdnimg.cn/20210228200741517.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2N6ajEwNDk1NjE2MDE=,size_16,color_FFFFFF,t_70)

![](https://img-blog.csdnimg.cn/2021022820085780.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2N6ajEwNDk1NjE2MDE=,size_16,color_FFFFFF,t_70)

![](https://img-blog.csdnimg.cn/20210228200939150.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2N6ajEwNDk1NjE2MDE=,size_16,color_FFFFFF,t_70)

## Await

说白了，await就是对promise成功的对象做一个获取，失败就try…catch

1：await右侧的表达式一般为promise对象，但也可以是其他的值  
2：如果表达式是promise对象，await返回的是promise成功的值  
3：如果表达式是其他值，直接将此值作为await的返回值。

**注意**：  
1：await必须写在async函数中，但是async函数中可以没有await  
2：如果await的promise失败了，就会抛出异常，需要通过try…catch捕获

```
  <script>
    async function main() {
      let p = new Promise((resolve, reject) => {
        resolve('OK');
      })
      //  await右侧为promise的情况，所以会返回上述resolve（'ok'）的值
      let result = await p;
      console.log(result);
    }
    // 执行函数
    main();
  </script>
```

情况2：这种情况很少见，一般右侧都是promise对象

```
  <script>
    async function main() {
      let p = new Promise((resolve, reject) => {
        resolve('OK');
      })
      //  1.await右侧为promise的情况，所以会返回上述resolve（'ok'）的值
      let result = await p;
      // 2.await右侧为其他类型的数据, 是啥就返回啥 
      let result1=await 521;
      console.log(result1);
    }
    // 执行函数
    main();
  </script>
```

情况3：await右侧是失败的promise

```
  <script>
    async function main() {
      let p = new Promise((resolve, reject) => {
        // resolve('OK');
        reject('Error');
      })

      try {
        let result3 = await p;
      }catch(error){
        console.log(error);
      }
    }
    // 执行函数
    main();
  </script>
```

## 详细看Async和Await文档

## 对象方法扩展

```
//声明对象
const school={
  name:"hh",
  cities:["佛山","广州”],
  subject:["前端","java","大数据"]
}

//我们可以通过Object.keys()方法获得键值
console.log(Object.keys(school));//输出 ["name","cities","subject"]

//可以通过Object.values()方法获得键名
console.log(Object.values(school));//["hh",Array(2),Array(3)]

//可以通过entries获得名和值
console.log(Object.entries(school))
//返回[["name","hh"]["cities",Array(2)]["subject",Array(3)]]

//可以通过Object.getOwnPropertyDescriptors()获得对象属性的描述对象（返回的是对象）
console.log(Object.getOwnPropertyDescriptors(school));
//返回{name:{...},cities:{...},subject:{...}}

```

entries方法方便于创建一个map

```
const m = new Map(Object.entries(school));
console.log(m.get('cities'));
```

## Rest参数和扩展运算符

rest参数：…参数名

```
function connect({host,port,...user}){
  console.log(host)
  console.log(port)
  console.log(user)
}
connect({
  host:'111',
  port:3306,
  username:'hh',
  password:'123456'
  type:'boy'
})
//返回 111 3306 {username:"hh",password:'123456',type:'boy'}
```

通过…将对象进行展开

```
const one={
  q:'a'
}
const two={
  w:'b'
}
const three={
  e:'c' 
}
const mengseng={...one,...two,...three}
console.log(mengseng)
//输出{
  q:'a',
  w:'b',
  e:'c'
}
```

## 正则扩展

## 命名捕捉分组

ES9以前，获取字符串中的某些值，需要这样做

```
let str = '<a href="http://www.baidu.com">百度</a>'
const reg = /<a href="(.*)">(.*)<\/a>/
let result = reg.exec(str)
console.log(result)
```

![](https://img-blog.csdnimg.cn/20200806145849725.PNG?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzQ3MzU0NTc4,size_16,color_FFFFFF,t_70)

ES9允许命名捕获组使用符号`?<name>`，这样获取捕获结果可读性更强

```
let str = '<a href="http://www.baidu.com">百度</a>'

let reg = /<a href="(?<url>.*)">(?<text>.*)<\/a>/

let result = reg.exec(str)
console.log(result)
console.log(result.groups.url)
console.log(result.groups.text)
```

![](https://img-blog.csdnimg.cn/20200806145913762.PNG?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzQ3MzU0NTc4,size_16,color_FFFFFF,t_70)

## 反向断言

ES9支持反向断言，使用`?<=`对目标内容前面的内容进行判断，对匹配进行筛选

```
let str = 'JS1231234你好啊555哈哈哈'

// 取出555
// 正向断言，对目标内容后面的内容进行判断
// const reg = /\d+(?=哈)/
// const result = reg.exec(str)

// 反向断言
const reg = /(?<=啊)\d+/
const result = reg.exec(str)
```

![](https://img-blog.csdnimg.cn/20200806145932683.PNG)

## dotAll 模式

正则表达式中`.`匹配除回车外的任何单字符，标记`s`会改变这种行为，允许行终止符出现

```
let str = `<ul>
                <li>
                    <a>肖生克的救赎</a>
                    <p>上映日期：1994-09-10</p>
                </li> 
                <li>
                    <a>阿甘正传</a>
                    <p>上映日期：1994-07-06</p>
                </li> 
           </ul>`

// const reg = /<li>\s+<a>(.*?)<\/a>\s+<p>(.*?)<\/p>\s+<\/li>/g
const reg = /<li>.*?<a>(.*?)<\/a>.*?<p>(.*?)<\/p>/gs;
let result;
let data = []
while (result = reg.exec(str)) {
    data.push({ title: result[1], time: result[2] })
}
console.log(data)

```

![](https://img-blog.csdnimg.cn/20200806145948741.PNG)

## ES10对象新特性

## object.fromEntries

这个方法是用于创建对象的，但比较特殊，传入的参数为一个二维数组或者是一个Map对象

**下面演示一下二维数组的情况**

```
const result = Object.fromEntries([
 ["name","rht"],
 ["object","Math","English"]
])
console.log(result)
//返回对象
{
  name:"rht",
  object:"Math,English"
}
```

**下面演示Map的情况**

```
const m = new Map()
m.set('name','HHHH')

const result = Object.fromEntries(m)

console.log(result)
//返回对象
{
  name:"HHHH"
}
```

## Object.entries(fromEntries的逆运算)

entries是fromEntries的逆运算，将一个对象转换成二维数组

```
const arr = Object.entries({
  name:"hhhh",
  b:"a"
})

console.log(arr)
//返回一个二维数组
[["name","hhhh"],["b","a"]]
```

## ES10字符串新方法

## trim

用于清除字符串两边空白的字符

## trimStart

用于清除字符串开头的空白

## trimEnd

用于清除字符串结尾的空白

## ES10数组方法

## flat降低数组维度

flat可以将数组的维度降低一个，二转一，三转二

```
const arr=[1,2,3,[4,5]]

console.log(arr.flat)
//返回
[1,2,3,4,5]
```

**flat(参数)**可以传递一个参数num，这个参数作为深度，当三维数组想直接变成一维数组时，降低两个维度，那么深度为2，即此时的参数应该为2

## flatMap降低map的维度

## ES11新特性

## BigInt

我们知道，js 能表示的安全整数范围是-(2^53-1)至 2^53-1，这是由 js 存储数字的方式决定的，我们可以用Number.isSafeInteger()来判断某个数是否在这个范围内，上下边界可以用Number.MIN\_SAFE\_INTEGER 和 Number.MAX\_SAFE\_INTEGER得到。

es11为了解决大数问题，推出了新的数据类型BigInt。这种数据类型可以进行大整数运算，但是注意，BigInt和普通的Number类型不能进行运算。

可以用BigInt的构造函数或者在数字后面加一个后缀n来得到BigInt。

```
let a = BigInt(123);
let b = 1212n;
let a = Number.MAX_SAFE_INTEGER;
console.log(a + 1 === a + 2); //true
let b = 9007199254740992n;
let c = b + 1n;
b === c; //false
typeof b; //bigint
```

如果BigInt和普通的Number数据进行运算会报错

```
let d = 1n;
d + 1;//Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions
```

## String.prototype.matchAll

字符串实例的matchAll方法接收正则或者字符串，会返回一个迭代器，迭代器的每次执行，都会返回一匹配项以及相应的匹配信息。我们可以遍历迭代器，去拿到所有的结果

```
var str = '<div>JS</div><div>正则</div>';
var allMatchs = str.matchAll(/<\w+>(.*?)<\/\w+>/g);

for (const match of allMatchs) {
  console.log(match);
}

/*
第一次迭代返回：
[
    "<div>JS</div>",
    "JS",
    index: 0,
    input: "<div>JS</div><div>正则</div>",
    groups: undefined
]
第二次迭代返回：
[
    "<div>正则</div>",
    "正则",
    index: 15,
    input: "<div>JS</div><div>正则</div>",
    groups: undefined
]
```

## globalThis

因为js有不同的运行环境，不同的运行环境有不同的全局对象，比如在node里面是global，在浏览器是window或者self，为了统一获取全局对象的方式，就有了globalThis。globalThis指向的对象和各环境的全局对象是一样的，只是规范获取方式。

globalThis//window(浏览器环境)

## dynamic-import

这个特性在webpack和ts中都支持了，即动态加载，或者说按需加载。

Import（src）返回的是一个promise对象，所以可以用await或者注册回调来处理

```
async function fn() {
  const a = await import("./7-1.js");
  import("./7-1.js").then((module) => {
    //
  });
}
```

另一个需要注意的点是，之前的import只能写在顶层[作用域](https://so.csdn.net/so/search?q=%E4%BD%9C%E7%94%A8%E5%9F%9F&spm=1001.2101.3001.7020)，不能写在函数内部，现在的动态import可以写在非顶层作用域内。

## 空值合并运算符

这个特性在ts的 3.7版本已经推出半年了，用过ts的应该不陌生，空值合并运算符(??)和之前的或(||)操作符有点像。不同的是，或是在左边的表达式为假值(false,0,"",NaN,null,undefined)时，取右边的值，而空值合并运算符，是在左边的表达式为空值（null,undifined）时取右边的值。

看个例子：

```
const a = 0;
const b = false;
const c = null;
const d = undefined;
console.log(a || b); //false
console.log(a ?? c); //0
console.log(c ?? d); //undefined
```

## 可选链

这个特性也是早在ts 的3.7版本就已经推出的，和空值合并运算符经常一起使用。

我们在用对象点出属性或者方法的时候，如果嵌套的话，可能会出现中间某个对象是undifined，导致代码报错。为了代码的健壮性，我们经常用&&来规避，比如这样：

```
a && a.b && a.b();
```

有了空值合并运算符，就不需要冗余的&&了。

```
a?.b?.()
```

数组可以看成特殊的对象，取数组成员时也用?.

```
b?.[1]?.ccc//b数组的可能的第2个成员的可能的ccc属性
```

空值合并运算符结合可选链，我们可以很方便的给一个变量赋值，以及如果赋值失败赋值上默认值

```
const a = b?.c?.d ?? "";
```

## Promise.allSettled

我们知道，Promise.all的作用是等全部的promise示例都resolve之后，触发对应的回调，。这就有个问题，如果有个promise失败，即reject了，那么Promise.all的状态是失败的，即不会触发作为回调函数的第一个参数。为了补充这个场景，Promise.allSettled就来了。

Promise.allSettled也是接收一个Promise数组作为参数，等所有的参数状态都完成的时候（不管是成功还是失败），回调就会触发。回调函数的参数是一个数组，数组的每个元素有两个属性，一个是status，值为’rejected’或者’fullfilled’，对应表示这个promise是成功还是失败，另一个属性是reason，表示promise的回调参数。

```
const a1 = Promise.resolve(1);
const a2 = Promise.resolve(2);
const a3 = Promise.reject(3);
const a4 = Promise.reject();
Promise.allSettled([a1, a2, a3, a4]).then((a) => {
  console.log(a);
});
// [
//   { "status": "fulfilled", "value": 1 },
//   { "status": "fulfilled", "value": 2 },
//   { "status": "rejected", "reason": 3 },
//   { "status": "rejected", "reason": undefined}
// ]
```

## 聚合导出

关于import，我们可以这样导入所有成员：

```
import * as MyModule from '...'
```

这次加了个配套的

```
export * as MyModule from '...'
```

这个导出语句和下面的语句的作用是一样的

```
import * as MyModule from '...'
export {MyModule}
```

以上就是ES11的新特性，可以看得出来，比之前的ES10这些斑斑改动量还是更大的，也方便了一些js代码的书写。
