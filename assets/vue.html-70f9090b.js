import{_ as s,M as t,p as v,q as a,R as i,t as e,N as l,a1 as d}from"./framework-6700cb35.js";const r={},u=d('<h1 id="vue" tabindex="-1"><a class="header-anchor" href="#vue" aria-hidden="true">#</a> VUE</h1><hr><blockquote><h2 id="excerpt" tabindex="-1"><a class="header-anchor" href="#excerpt" aria-hidden="true">#</a> Excerpt</h2><p>Vue学习笔记（尚硅谷天禹老师讲解）1. Vue核心1.1. Vue简介1.1.1. 官网英文官网中文官网1.1.2. 介绍与描述动态构建用户界面的渐进式JavaScript框架作者：尤雨溪1.1.3. Vue的特点遵循MVVM模式编码简洁，体积小，运行效率高，适合移动/PC端开发它本身只关注UI，可以引入其它第三方库开发项目1.1.4.与其他JS框架的关联借鉴 Angular 的模板和数据绑定技术借鉴 React 的组件化和虚拟DOM</p></blockquote><hr><h2 id="_1-vue核心" tabindex="-1"><a class="header-anchor" href="#_1-vue核心" aria-hidden="true">#</a> 1. Vue核心</h2><h3 id="_1-1-vue简介" tabindex="-1"><a class="header-anchor" href="#_1-1-vue简介" aria-hidden="true">#</a> 1.1. Vue简介</h3><h4 id="_1-1-1-官网" tabindex="-1"><a class="header-anchor" href="#_1-1-1-官网" aria-hidden="true">#</a> 1.1.1. 官网</h4>',7),c={href:"https://vuejs.org/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://cn.vuejs.org/",target:"_blank",rel:"noopener noreferrer"},o=i("h4",{id:"_1-1-2-介绍与描述",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#_1-1-2-介绍与描述","aria-hidden":"true"},"#"),e(" 1.1.2. 介绍与描述")],-1),b=i("ul",null,[i("li",null,[i("p",null,"动态构建用户界面的渐进式JavaScript框架")]),i("li",null,[i("p",null,"作者：尤雨溪")])],-1),g=i("h4",{id:"_1-1-3-vue的特点",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#_1-1-3-vue的特点","aria-hidden":"true"},"#"),e(" 1.1.3. Vue的特点")],-1),p=i("li",null,[i("p",null,"遵循MVVM模式")],-1),h=i("li",null,[i("p",null,"编码简洁，体积小，运行效率高，适合移动/PC端开发")],-1),x={href:"https://so.csdn.net/so/search?q=%E7%AC%AC%E4%B8%89%E6%96%B9%E5%BA%93&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"},q=d(`<h4 id="_1-1-4-与其他js框架的关联" tabindex="-1"><a class="header-anchor" href="#_1-1-4-与其他js框架的关联" aria-hidden="true">#</a> 1.1.4.与其他JS框架的关联</h4><ol><li>借鉴 Angular 的模板和数据绑定技术</li><li>借鉴 React 的组件化和虚拟DOM技术</li></ol><h4 id="_1-1-5-vue周边库" tabindex="-1"><a class="header-anchor" href="#_1-1-5-vue周边库" aria-hidden="true">#</a> 1.1.5. Vue周边库</h4><ul><li>vue-cli：vue脚手架</li><li>vue-resource</li><li>axios</li><li>vue-router：路由</li><li>vuex：状态管理</li><li>element-ui：基于vue的UI组件库（PC端）</li></ul><h3 id="_1-2-初识vue" tabindex="-1"><a class="header-anchor" href="#_1-2-初识vue" aria-hidden="true">#</a> 1.2. 初识Vue</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
    &lt;title&gt;初识vue&lt;/title&gt;
    &lt;!-- 引入Vue --&gt;
    &lt;script src=&quot;../js/vue.js&quot;&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;!-- 准备好一个容器 --&gt;
    &lt;div id=&quot;root&quot;&gt;
        &lt;h1&gt;Hello！{{name}}!&lt;/h1&gt;
    &lt;/div&gt;

    &lt;script&gt;
        Vue.config.productionTip = false // 阻止vue在启动时生成生产提示
        new Vue({
            el:&#39;#root&#39;, //el用于指定当前Vue实例为哪个容器服务，值通常为css选择器字符串
            data:{ //data用于存储数据，数据共el所指定的容器去使用
                name:&#39;JOJO&#39;
            }
        })
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>效果：</strong></p><p><img src="https://img-blog.csdnimg.cn/img_convert/9ab2f21a5134c5d3c8bbf86495d3d031.png" alt=""></p><p><strong>注意：</strong></p><ol><li>想让Vue工作，就必须创建一个Vue实例，且要传入一个配置对象</li><li>root容器里的代码依然符合html规范，只不过混入了一些特殊的Vue语法</li><li>root容器里的代码被称为Vue模板</li><li>Vue实例与容器是一一对应的</li><li>真实开发中只有一个Vue实例，并且会配合着组件一起使用</li><li><code>{{xxx}}</code>中的xxx要写js表达式，且xxx可以自动读取到data中的所有属性</li><li>一旦data中的数据发生变化，那么模板中用到该数据的地方也会自动更新</li></ol><h3 id="_1-3-模板语法" tabindex="-1"><a class="header-anchor" href="#_1-3-模板语法" aria-hidden="true">#</a> 1.3. 模板语法</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
    &lt;title&gt;vue模板语法&lt;/title&gt;
    &lt;script src=&quot;../js/vue.js&quot;&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;div id=&quot;root&quot;&gt;
        &lt;h1&gt;插值语法&lt;/h1&gt;
        &lt;h3&gt;你好，{{name}}!&lt;/h3&gt;
        &lt;hr&gt;
        &lt;h1&gt;指令语法&lt;/h1&gt;
        &lt;a v-bind:href=&quot;url&quot;&gt;快去看新番！&lt;/a&gt;&lt;br&gt;
        &lt;a :href=&quot;url&quot;&gt;快去看新番！&lt;/a&gt;
    &lt;/div&gt;

    &lt;script&gt;
        Vue.config.productionTip = false 
        new Vue({
            el:&#39;#root&#39;, 
            data:{ 
                name:&#39;JOJO&#39;,
                url:&#39;https://www.bilibili.com/&#39;
            }
        })
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>效果：</strong></p><p><img src="https://img-blog.csdnimg.cn/img_convert/5064db5c00a8878b26bcd486fa51a853.png" alt=""></p><p><strong>总结：</strong></p><p>Vue模板语法包括两大类：</p><ol><li><p>插值语法：</p><ul><li>功能：用于解析标签体内容</li><li>写法：<code>{{xxx}}</code>，xxx是js表达式，且可以直接读取到data中的所有区域</li></ul></li><li><p>指令语法：</p><ul><li>功能：用于解析标签（包括：标签属性、标签体内容、绑定事件…）</li><li>举例：<code>&lt;a v-bind:href=&quot;xxx&quot;&gt;</code>或简写为<code>&lt;a :href=&quot;xxx&quot;&gt;</code>，xxx同样要写js表达式，且可以直接读取到data中的所有属性</li><li>备注：Vue中有很多的指令，且形式都是<code>v-???</code>，此处我们只是拿<code>v-bind</code>举个例子</li></ul></li></ol><h3 id="_1-4-数据绑定" tabindex="-1"><a class="header-anchor" href="#_1-4-数据绑定" aria-hidden="true">#</a> 1.4. 数据绑定</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
    &lt;title&gt;数据绑定&lt;/title&gt;
    &lt;script src=&quot;../js/vue.js&quot;&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;div id=&quot;root&quot;&gt;
        单向数据绑定：&lt;input type=&quot;text&quot; v-bind:value=&quot;name&quot;&gt;&lt;br&gt;
        双向数据绑定：&lt;input type=&quot;text&quot; v-model:value=&quot;name&quot;&gt;
    &lt;/div&gt;

    &lt;script&gt;
        Vue.config.productionTip = false 
        new Vue({
            el:&#39;#root&#39;, 
            data:{
                name:&#39;JOJO&#39;
            }
        })
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>效果：</strong></p><p><img src="https://img-blog.csdnimg.cn/img_convert/094b060391528a0185e12f1287645cbe.png" alt=""></p><p><strong>总结：</strong></p><ul><li><p>Vue中有2种数据绑定的方式：</p><ol><li>单向绑定（<code>v-bind</code>）：数据只能从data流向页面</li><li>双向绑定（<code>v-model</code>）：数据不仅能从data流向页面，还可以从页面流向data</li></ol></li><li><p>备注：</p><ol><li>双向绑定一般都应用在表单类元素上（如：<code>&lt;input&gt;</code>、<code>&lt;select&gt;</code>、<code>&lt;textarea&gt;</code>等）</li><li><code>v-model:value</code>可以简写为<code>v-model</code>，因为<code>v-model</code>默认收集的就是value值</li></ol></li></ul><h3 id="_1-5-el与data的两种写法" tabindex="-1"><a class="header-anchor" href="#_1-5-el与data的两种写法" aria-hidden="true">#</a> 1.5. el与data的两种写法</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
    &lt;title&gt;el与data的两种写法&lt;/title&gt;
    &lt;script src=&quot;../js/vue.js&quot;&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;div id=&quot;root&quot;&gt;
        &lt;h1&gt;Hello,{{name}}!&lt;/h1&gt;
    &lt;/div&gt;

    &lt;script&gt;
        Vue.config.productionTip = false 
        //el的两种写法：
        // const vm = new Vue({
        //     // el:&#39;#root&#39;, //第一种写法
        //     data:{
        //         name:&#39;JOJO&#39;
        //     }
        // })
        // vm.$mount(&#39;#root&#39;)//第二种写法

        //data的两种写法：
        new Vue({
            el:&#39;#root&#39;, 
            //data的第一种写法：对象式
            // data:{
            //     name:&#39;JOJO&#39;
            // }
            //data的第二种写法：函数式
            data(){
                return{
                    name:&#39;JOJO&#39;
                }
            }
        })
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>总结：</strong></p><p>el有2种写法：</p><ol><li>创建Vue实例对象的时候配置el属性</li><li>先创建Vue实例，随后再通过<code>vm.$mount(&#39;#root&#39;)</code>指定el的值</li></ol><p>data有2种写法：</p><ol><li>对象式</li><li>函数式</li></ol><ul><li>如何选择：目前哪种写法都可以，以后学到组件时，data必须使用函数，否则会报错</li></ul><blockquote><p>由Vue管理的函数，一定不要写箭头函数，否则this就不再是Vue实例了</p></blockquote>`,32),f={id:"_1-6-mvvm模型",tabindex:"-1"},y=i("a",{class:"header-anchor",href:"#_1-6-mvvm模型","aria-hidden":"true"},"#",-1),k={href:"https://so.csdn.net/so/search?q=MVVM&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"},w=d(`<p><img src="https://img-blog.csdnimg.cn/img_convert/ac43527b06defd324a702aea4f7940a0.png" alt=""></p><ul><li>MVVM模型： <ul><li>M：模型（Model），data中的数据</li><li>V：视图（View），模板代码</li><li>VM：视图模型（ViewModel），Vue实例</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
    &lt;title&gt;mvvm&lt;/title&gt;
    &lt;script src=&quot;../js/vue.js&quot;&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;div id=&quot;root&quot;&gt;
        &lt;h2&gt;名称：{{name}}&lt;/h2&gt;
        &lt;h2&gt;战队：{{rank}}&lt;/h2&gt;
        &lt;h2&gt;测试：{{$options}}&lt;/h2&gt;
    &lt;/div&gt;

    &lt;script&gt;
        Vue.config.productionTip = false
        new Vue({
            el:&#39;#root&#39;,
            data:{ 
                name:&#39;uzi&#39;,
                rank:&#39;RNG&#39;
            }
        })
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>效果：</strong></p><p><img src="https://img-blog.csdnimg.cn/img_convert/94ba0684daa6f21dbb14873a29d9c67a.png" alt=""></p><p><strong>总结：</strong></p><ul><li>data中所有的属性，最后都出现在了vm身上</li><li>vm身上所有的属性 及 Vue原型身上所有的属性，在Vue模板中都可以直接使用</li></ul><h3 id="_1-7-vue中的数据代理" tabindex="-1"><a class="header-anchor" href="#_1-7-vue中的数据代理" aria-hidden="true">#</a> 1.7. Vue中的数据代理</h3><p><img src="https://img-blog.csdnimg.cn/img_convert/1fbebd52e39fa5a97210ee65d0a58069.png" alt=""></p><p><strong>总结：</strong></p><ol><li>Vue中的数据代理通过vm对象来代理data对象中属性的操作（读/写）</li><li>Vue中数据代理的好处：更加方便的操作data中的数据</li><li>基本原理： <ul><li>通过<code>object.defineProperty()</code>把data对象中所有属性添加到vm上。</li><li>为每一个添加到vm上的属性，都指定一个getter/setter。</li><li>在getter/setter内部去操作（读/写）data中对应的属性。</li></ul></li></ol><h3 id="_1-8-事件处理" tabindex="-1"><a class="header-anchor" href="#_1-8-事件处理" aria-hidden="true">#</a> 1.8. 事件处理</h3><h4 id="_1-8-1-事件的基本用法" tabindex="-1"><a class="header-anchor" href="#_1-8-1-事件的基本用法" aria-hidden="true">#</a> 1.8.1. 事件的基本用法</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
    &lt;title&gt;事件的基本用法&lt;/title&gt;
    &lt;script src=&quot;../js/vue.js&quot;&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;div id=&quot;root&quot;&gt;
        &lt;h2&gt;hello,{{name}}&lt;/h2&gt;
        &lt;button v-on:click=&quot;showInfo1&quot;&gt;点我提示信息1&lt;/button&gt;
        &lt;button @click=&quot;showInfo2($event,66)&quot;&gt;点我提示信息2&lt;/button&gt;
    &lt;/div&gt;

    &lt;script&gt;
        Vue.config.productionTip = false 
        new Vue({
            el:&#39;#root&#39;, 
            data:{
                name:&#39;JOJO&#39;
            },
            methods:{
                showInfo1(event){
                    console.log(event)
                },
                showInfo2(evnet,num){
                    console.log(event,num)
                }
            }
        })
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>效果：</strong></p><p><img src="https://img-blog.csdnimg.cn/img_convert/a3463fb07e6ae6d6acc288aaf19b0f8b.png" alt=""></p><p><strong>总结：</strong></p><ol><li>使用<code>v-on:xxx</code>或<code>@xxx</code>绑定事件，其中xxx是事件名</li><li>事件的回调需要配置在methods对象中，最终会在vm上</li><li>methods中配置的函数，==不要用箭头函数！==否则this就不是vm了</li><li>methods中配置的函数，都是被Vue所管理的函数，this的指向是vm或组件实例对象</li><li><code>@click=&quot;demo</code>和<code>@click=&quot;demo($event)&quot;</code>效果一致，但后者可以传参</li></ol><h4 id="_1-8-2-事件修饰符" tabindex="-1"><a class="header-anchor" href="#_1-8-2-事件修饰符" aria-hidden="true">#</a> 1.8.2. 事件修饰符</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;meta charset=&quot;UTF-8&quot; /&gt;
&lt;title&gt;事件修饰符&lt;/title&gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;../js/vue.js&quot;&gt;&lt;/script&gt;
&lt;style&gt;
*{
margin-top: 20px;
}
.demo1{
height: 50px;
background-color: skyblue;
}
.box1{
padding: 5px;
background-color: skyblue;
}
.box2{
padding: 5px;
background-color: orange;
}
.list{
width: 200px;
height: 200px;
background-color: peru;
overflow: auto;
}
li{
height: 100px;
}
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div id=&quot;root&quot;&gt;
&lt;h2&gt;欢迎来到{{name}}学习&lt;/h2&gt;
&lt;!-- 阻止默认事件 --&gt;
&lt;a href=&quot;http://www.atguigu.com&quot; @click.prevent=&quot;showInfo&quot;&gt;点我提示信息&lt;/a&gt;

&lt;!-- 阻止事件冒泡 --&gt;
&lt;div class=&quot;demo1&quot; @click=&quot;showInfo&quot;&gt;
&lt;button @click.stop=&quot;showInfo&quot;&gt;点我提示信息&lt;/button&gt;
&lt;/div&gt;

&lt;!-- 事件只触发一次 --&gt;
&lt;button @click.once=&quot;showInfo&quot;&gt;点我提示信息&lt;/button&gt;

&lt;!-- 使用事件的捕获模式 --&gt;
&lt;div class=&quot;box1&quot; @click.capture=&quot;showMsg(1)&quot;&gt;
div1
&lt;div class=&quot;box2&quot; @click=&quot;showMsg(2)&quot;&gt;
div2
&lt;/div&gt;
&lt;/div&gt;

&lt;!-- 只有event.target是当前操作的元素时才触发事件 --&gt;
&lt;div class=&quot;demo1&quot; @click.self=&quot;showInfo&quot;&gt;
&lt;button @click=&quot;showInfo&quot;&gt;点我提示信息&lt;/button&gt;
&lt;/div&gt;

&lt;!-- 事件的默认行为立即执行，无需等待事件回调执行完毕 --&gt;
&lt;ul @wheel.passive=&quot;demo&quot; class=&quot;list&quot;&gt;
&lt;li&gt;1&lt;/li&gt;
&lt;li&gt;2&lt;/li&gt;
&lt;li&gt;3&lt;/li&gt;
&lt;li&gt;4&lt;/li&gt;
&lt;/ul&gt;

&lt;/div&gt;
&lt;/body&gt;

&lt;script type=&quot;text/javascript&quot;&gt;
Vue.config.productionTip = false

new Vue({
el:&#39;#root&#39;,
data:{
name:&#39;尚硅谷&#39;
},
methods:{
showInfo(e){
alert(&#39;同学你好！&#39;)
},
showMsg(msg){
console.log(msg)
},
demo(){
for (let i = 0; i &lt; 100000; i++) {
console.log(&#39;#&#39;)
}
console.log(&#39;累坏了&#39;)
}
}
})
&lt;/script&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>效果：</strong></p><p><img src="https://img-blog.csdnimg.cn/img_convert/4212bcfb0827d78c0097e94617db44c6.png" alt=""></p><p><strong>总结：</strong></p><p>Vue中的事件修饰符：</p><ol><li>prevent：阻止默认事件（常用）</li><li>stop：阻止事件冒泡（常用）</li><li>once：事件只触发一次（常用）</li><li>capture：使用事件的捕获模式</li><li>self：只有<code>event.target</code>是当前操作的元素时才触发事件</li><li>passive：事件的默认行为立即执行，无需等待事件回调执行完毕</li></ol><blockquote><p>修饰符可以连续写，比如可以这么用：<code>@click.prevent.stop=&quot;showInfo&quot;</code></p></blockquote><h4 id="_1-8-3-键盘事件" tabindex="-1"><a class="header-anchor" href="#_1-8-3-键盘事件" aria-hidden="true">#</a> 1.8.3. 键盘事件</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;meta charset=&quot;UTF-8&quot; /&gt;
&lt;title&gt;键盘事件&lt;/title&gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;../js/vue.js&quot;&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div id=&quot;root&quot;&gt;
&lt;h2&gt;欢迎来到{{name}}学习&lt;/h2&gt;
&lt;input type=&quot;text&quot; placeholder=&quot;按下回车提示输入&quot; @keydown.enter=&quot;showInfo&quot;&gt;
&lt;/div&gt;
&lt;/body&gt;

&lt;script type=&quot;text/javascript&quot;&gt;
Vue.config.productionTip = false

new Vue({
el:&#39;#root&#39;,
data:{
name:&#39;尚硅谷&#39;
},
methods: {
showInfo(e){
console.log(e.target.value)
}
},
})
&lt;/script&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>效果：</strong></p><p><img src="https://img-blog.csdnimg.cn/img_convert/660331c75f34f37ced877c3f3e685ea5.png" alt=""></p><p><strong>总结：</strong></p><blockquote><p>键盘上的每个按键都有自己的名称和编码，例如：Enter（13）。而Vue还对一些常用按键起了别名方便使用</p></blockquote><p>Vue中常用的按键别名：</p><ul><li>回车：enter</li><li>删除：delete (捕获“删除”和“退格”键)</li><li>退出：esc</li><li>空格：space</li><li>换行：tab (特殊，必须配合keydown去使用)</li><li>上：up</li><li>下：down</li><li>左：left</li><li>右：right</li></ul><p><strong>注意：</strong></p><ol><li><p>系统修饰键（用法特殊）：ctrl、alt、shift、meta</p><ul><li>配合keyup使用：按下修饰键的同时，再按下其他键，随后释放其他键，事件才被触发</li><li>配合keydown使用：正常触发事件</li></ul></li><li><p>可以使用keyCode去指定具体的按键，比如：<code>@keydown.13=&quot;showInfo&quot;</code>，但不推荐这样使用</p></li><li><p><code>Vue.config.keyCodes.自定义键名 = 键码</code>，可以自定义按键别名</p></li></ol><h3 id="_1-9-计算属性" tabindex="-1"><a class="header-anchor" href="#_1-9-计算属性" aria-hidden="true">#</a> 1.9. 计算属性</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
    &lt;title&gt;计算属性&lt;/title&gt;
    &lt;script src=&quot;../js/vue.js&quot;&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;div id=&quot;root&quot;&gt;
        姓：&lt;input type=&quot;text&quot; v-model=&quot;firstName&quot;&gt;&lt;br&gt;&lt;br&gt;
        名：&lt;input type=&quot;text&quot; v-model=&quot;lastName&quot;&gt;&lt;br&gt;&lt;br&gt;
        姓名：&lt;span&gt;{{fullName}}&lt;/span&gt;
    &lt;/div&gt;

    &lt;script&gt;
        Vue.config.productionTip = false 

        new Vue({
            el:&#39;#root&#39;, 
            data:{ 
                firstName:&#39;张&#39;,
                lastName:&#39;三&#39;
            },
            computed:{
                fullName:{
                    get(){
                        return this.firstName + &#39;-&#39; + this.lastName
                    },
                    set(value){
const arr = value.split(&#39;-&#39;)
this.firstName = arr[0]
this.lastName = arr[1]
                    }
                }
            }
        })
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>效果：</strong></p><p><img src="https://img-blog.csdnimg.cn/img_convert/0d61256ff91e403d19b514ff58b0f761.png" alt=""></p><p><strong>总结：</strong></p><ul><li><p>计算属性：</p><ul><li><p>定义：要用的属性不存在，需要通过已有属性计算得来。</p></li><li><p>原理：底层借助了<code>Objcet.defineproperty()</code>方法提供的getter和setter。</p></li><li><p>get函数什么时候执行？</p><ol><li>初次读取时会执行一次</li><li>当依赖的数据发生改变时会被再次调用</li></ol></li><li><p>优势：与methods实现相比，内部有缓存机制（复用），效率更高，调试方便</p></li></ul></li><li><p>备注：</p><ul><li>计算属性最终会出现在vm上，直接读取使用即可</li><li>如果计算属性要被修改，那必须写set函数去响应修改，且set中要引起计算时依赖的数据发生改变</li><li>如果计算属性确定不考虑修改，可以使用计算属性的简写形式</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>new Vue({
    el:&#39;#root&#39;, 
    data:{ 
        firstName:&#39;张&#39;,
        lastName:&#39;三&#39;
    },
    computed:{
    fullName(){
    return this.firstName + &#39;-&#39; + this.lastName
    }
    }
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-10-监视属性" tabindex="-1"><a class="header-anchor" href="#_1-10-监视属性" aria-hidden="true">#</a> 1.10. 监视属性</h3><h4 id="_1-10-1-监视属性基本用法" tabindex="-1"><a class="header-anchor" href="#_1-10-1-监视属性基本用法" aria-hidden="true">#</a> 1.10.1. 监视属性基本用法</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
    &lt;title&gt;监视属性&lt;/title&gt;
    &lt;script src=&quot;../js/vue.js&quot;&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;div id=&quot;root&quot;&gt;
        &lt;h2&gt;今天天气好{{info}}!&lt;/h2&gt;
        &lt;button @click=&quot;changeWeather&quot;&gt;点击切换天气&lt;/button&gt;
    &lt;/div&gt;

    &lt;script&gt;
        Vue.config.productionTip = false 

        new Vue({
            el:&#39;#root&#39;, 
            data:{ 
                isHot:true,
            },
            computed:{
                info(){
                    return this.isHot ? &#39;炎热&#39; : &#39;凉爽&#39; 
                }
            },
            methods:{
changeWeather(){
this.isHot = !this.isHot
}
},
            watch:{
                isHot:{
                    immediate:true, //初始化时让handler调用一下
                    //handler什么时候调用？当isHot发生改变时
                    handler(newValue,oldValue){
console.log(&#39;isHot被修改了&#39;,newValue,oldValue)
}
                }
            }
        })
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>效果：</strong></p><p><img src="https://img-blog.csdnimg.cn/img_convert/902464cdb090d4574250d009f6312bb9.png" alt=""></p><p><strong>总结：</strong></p><p>监视属性watch：</p><ol><li>当被监视的属性变化时，回调函数自动调用，进行相关操作</li><li>监视的属性必须存在，才能进行监视</li><li>监视有两种写法： <ol><li>创建Vue时传入watch配置</li><li>通过<code>vm.$watch</code>监视</li></ol></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vm.$watch(&#39;isHot&#39;,{
immediate:true,
handler(newValue,oldValue){
console.log(&#39;isHot被修改了&#39;,newValue,oldValue)
}
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-10-2-深度监视" tabindex="-1"><a class="header-anchor" href="#_1-10-2-深度监视" aria-hidden="true">#</a> 1.10.2. 深度监视</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
    &lt;title&gt;深度监视&lt;/title&gt;
    &lt;script src=&quot;../js/vue.js&quot;&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;div id=&quot;root&quot;&gt;
        &lt;h3&gt;a的值是:{{numbers.a}}&lt;/h3&gt;
&lt;button @click=&quot;numbers.a++&quot;&gt;点我让a+1&lt;/button&gt;
&lt;h3&gt;b的值是:{{numbers.b}}&lt;/h3&gt;
&lt;button @click=&quot;numbers.b++&quot;&gt;点我让b+1&lt;/button&gt;
    &lt;/div&gt;

    &lt;script&gt;
        Vue.config.productionTip = false 

        new Vue({
            el:&#39;#root&#39;, 
            data:{ 
                isHot:true,
                numbers:{
                    a:1,
                    b:1,
                }
            },
            watch:{
                //监视多级结构中所有属性的变化
                numbers:{
                    deep:true,
handler(){
console.log(&#39;numbers改变了&#39;)
}
                }
                //监视多级结构中某个属性的变化
/* &#39;numbers.a&#39;:{
handler(){
console.log(&#39;a被改变了&#39;)
}
} */
            }
        })
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>效果：</strong></p><p><img src="https://img-blog.csdnimg.cn/img_convert/568743d7f0f6fc4b2274ec1a8aca3e99.png" alt=""></p><p><strong>总结：</strong></p><ul><li><p>深度监视：</p><ol><li>Vue中的watch默认不监测对象内部值的改变（一层）</li><li>在watch中配置<code>deep:true</code>可以监测对象内部值的改变（多层）</li></ol></li><li><p>备注：</p><ol><li>Vue自身可以监测对象内部值的改变，但Vue提供的watch默认不可以</li><li>使用watch时根据监视数据的具体结构，决定是否采用深度监视</li></ol></li></ul><h4 id="_1-10-3-监视属性简写" tabindex="-1"><a class="header-anchor" href="#_1-10-3-监视属性简写" aria-hidden="true">#</a> 1.10.3. 监视属性简写</h4><p>如果监视属性除了handler没有其他配置项的话，可以进行简写。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script type=&quot;text/javascript&quot;&gt;
Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

    const vm = new Vue({
        el:&#39;#root&#39;,
        data:{
            isHot:true,
        },
        computed:{
            info(){
                return this.isHot ? &#39;炎热&#39; : &#39;凉爽&#39;
            }
        },
        methods: {
            changeWeather(){
                this.isHot = !this.isHot
            }
        },
        watch:{
            //正常写法
            isHot:{
handler(newValue,oldValue){
console.log(&#39;isHot被修改了&#39;,newValue,oldValue)
}
}, 
            //简写
            isHot(newValue,oldValue){
console.log(&#39;isHot被修改了&#39;,newValue,oldValue,this)
}
        }
    })

    //正常写法
    vm.$watch(&#39;isHot&#39;,{
        handler(newValue,oldValue){
            console.log(&#39;isHot被修改了&#39;,newValue,oldValue)
        }
    })
    //简写
    vm.$watch(&#39;isHot&#39;,function(newValue,oldValue){
        console.log(&#39;isHot被修改了&#39;,newValue,oldValue,this)
    })
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-10-4-监听属性-vs-计算属性" tabindex="-1"><a class="header-anchor" href="#_1-10-4-监听属性-vs-计算属性" aria-hidden="true">#</a> 1.10.4. 监听属性 VS 计算属性</h4><p><img src="https://img-blog.csdnimg.cn/img_convert/cb8992e936f77cb46d6c9fbdbde13dfe.png" alt=""></p><p><strong>使用计算属性：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>new Vue({
    el:&#39;#root&#39;, 
    data:{ 
        firstName:&#39;张&#39;,
        lastName:&#39;三&#39;
    },
    computed:{
    fullName(){
    return this.firstName + &#39;-&#39; + this.lastName
    }
    }
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>使用监听属性：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>new Vue({
el:&#39;#root&#39;,
data:{
firstName:&#39;张&#39;,
lastName:&#39;三&#39;,
fullName:&#39;张-三&#39;
},
watch:{
firstName(val){
setTimeout(()=&gt;{
this.fullName = val + &#39;-&#39; + this.lastName
},1000);
},
lastName(val){
this.fullName = this.firstName + &#39;-&#39; + val
}
}
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>总结：</strong></p><ul><li><p>computed和watch之间的区别：</p><ul><li>computed能完成的功能，watch都可以完成</li><li>watch能完成的功能，computed不一定能完成，例如：watch可以进行异步操作</li></ul></li><li><p>两个重要的小原则：</p><ol><li>所有被Vue管理的函数，最好写成普通函数，这样this的指向才是vm 或 组件实例对象</li><li>所有不被Vue所管理的函数（定时器的回调函数、ajax的回调函数等、Promise的回调函数），最好写成箭头函数，这样this的指向才是vm 或 组件实例对象。</li></ol></li></ul><h3 id="_1-11-绑定样式" tabindex="-1"><a class="header-anchor" href="#_1-11-绑定样式" aria-hidden="true">#</a> 1.11. 绑定样式</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;style&gt;
    .basic{
        width: 400px;
        height: 100px;
        border: 1px solid black;
    }
    .happy{
        border: 4px solid red;;
        background-color: rgba(255, 255, 0, 0.644);
        background: linear-gradient(30deg,yellow,pink,orange,yellow);
    }
    .sad{
        border: 4px dashed rgb(2, 197, 2);
        background-color: gray;
    }
    .normal{
        background-color: skyblue;
    }

    .atguigu1{
        background-color: yellowgreen;
    }
    .atguigu2{
        font-size: 30px;
        text-shadow:2px 2px 10px red;
    }
    .atguigu3{
        border-radius: 20px;
    }
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div id=&quot;root&quot;&gt;
    &lt;!-- 绑定class样式--字符串写法，适用于：样式的类名不确定，需要动态指定 --&gt;
    &lt;div class=&quot;basic&quot; :class=&quot;mood&quot; @click=&quot;changeMood&quot;&gt;{{name}}&lt;/div&gt; &lt;br/&gt;&lt;br/&gt;

    &lt;!-- 绑定class样式--数组写法，适用于：要绑定的样式个数不确定、名字也不确定 --&gt;
    &lt;div class=&quot;basic&quot; :class=&quot;classArr&quot;&gt;{{name}}&lt;/div&gt; &lt;br/&gt;&lt;br/&gt;

    &lt;!-- 绑定class样式--对象写法，适用于：要绑定的样式个数确定、名字也确定，但要动态决定用不用 --&gt;
    &lt;div class=&quot;basic&quot; :class=&quot;classObj&quot;&gt;{{name}}&lt;/div&gt; &lt;br/&gt;&lt;br/&gt;

    &lt;!-- 绑定style样式--对象写法 --&gt;
    &lt;div class=&quot;basic&quot; :style=&quot;styleObj&quot;&gt;{{name}}&lt;/div&gt; &lt;br/&gt;&lt;br/&gt;

    &lt;!-- 绑定style样式--数组写法 --&gt;
    &lt;div class=&quot;basic&quot; :style=&quot;styleArr&quot;&gt;{{name}}&lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script type=&quot;text/javascript&quot;&gt;
Vue.config.productionTip = false

    const vm = new Vue({
        el:&#39;#root&#39;,
        data:{
            name:&#39;尚硅谷&#39;,
            mood:&#39;normal&#39;,
            classArr:[&#39;atguigu1&#39;,&#39;atguigu2&#39;,&#39;atguigu3&#39;],
            classObj:{
                atguigu1:false,
                atguigu2:false,
            },
            styleObj:{
                fontSize: &#39;40px&#39;,
                color:&#39;red&#39;,
            },
            styleObj2:{
                backgroundColor:&#39;orange&#39;
            },
            styleArr:[
                {
                    fontSize: &#39;40px&#39;,
                    color:&#39;blue&#39;,
                },
                {
                    backgroundColor:&#39;gray&#39;
                }
            ]
        },
        methods: {
            changeMood(){
                const arr = [&#39;happy&#39;,&#39;sad&#39;,&#39;normal&#39;]
                const index = Math.floor(Math.random()*3)
                this.mood = arr[index]
            }
        },
    })
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>效果：</strong></p><p><img src="https://img-blog.csdnimg.cn/img_convert/19057cf9ae46eb5288d91a3063bfeaba.png" alt="image-20210717181454771"></p><p><strong>总结：</strong></p><ol><li><p>class样式：</p><ul><li><p>写法：<code>class=&quot;xxx&quot;</code>，xxx可以是字符串、对象、数组</p></li><li><p>字符串写法适用于：类名不确定，要动态获取</p></li><li><p>对象写法适用于：要绑定多个样式，个数不确定，名字也不确定</p></li><li><p>数组写法适用于：要绑定多个样式，个数确定，名字也确定，但不确定用不用</p></li></ul></li><li><p>style样式：</p><ul><li><code>:style=&quot;{fontSize: xxx}&quot;</code>其中xxx是动态值</li><li><code>:style=&quot;[a,b]&quot;</code>其中a、b是样式对象</li></ul></li></ol><h3 id="_1-12-条件渲染" tabindex="-1"><a class="header-anchor" href="#_1-12-条件渲染" aria-hidden="true">#</a> 1.12. 条件渲染</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;meta charset=&quot;UTF-8&quot; /&gt;
&lt;title&gt;条件渲染&lt;/title&gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;../js/vue.js&quot;&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div id=&quot;root&quot;&gt;
&lt;h2&gt;当前的n值是:{{n}}&lt;/h2&gt;
&lt;button @click=&quot;n++&quot;&gt;点我n+1&lt;/button&gt;

&lt;h2 v-show=&quot;true&quot;&gt;Hello,{{name}}!&lt;/h2&gt;

&lt;div v-if=&quot;n === 1&quot;&gt;Angular&lt;/div&gt;
&lt;div v-else-if=&quot;n === 2&quot;&gt;React&lt;/div&gt;
&lt;div v-else&gt;Vue&lt;/div&gt;
&lt;/div&gt;
&lt;/body&gt;

&lt;script type=&quot;text/javascript&quot;&gt;
Vue.config.productionTip = false

const vm = new Vue({
el:&#39;#root&#39;,
data:{
name:&#39;jojo&#39;,
n:0
}
})
&lt;/script&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>效果：</strong></p><p><img src="https://img-blog.csdnimg.cn/img_convert/d9c1bdba83491bd2043a48d1aa9c53aa.png" alt=""></p><p><strong>总结：</strong></p><ol><li><p>v-if：</p><ul><li><p>写法：</p><ol><li><code>v-if=&quot;表达式&quot;</code></li><li><code>v-else-if=&quot;表达式&quot;</code></li><li><code>v-else</code></li></ol></li><li><p>适用于：切换频率较低的场景</p></li><li><p>特点：不展示的DOM元素直接被移除</p></li><li><p>注意：<code>v-if</code>可以和<code>v-else-if</code>、<code>v-else</code>一起使用，但要求结构不能被打断</p></li></ul></li><li><p>v-show：</p><ul><li>写法：<code>v-show=&quot;表达式&quot;</code></li><li>适用于：切换频率较高的场景</li><li>特点：不展示的DOM元素未被移除，仅仅是使用样式隐藏掉</li></ul></li></ol><blockquote><p>使用<code>v-if</code>的时，元素可能无法获取到，而使用<code>v-show</code>一定可以获取到</p></blockquote><h3 id="_1-13-列表渲染" tabindex="-1"><a class="header-anchor" href="#_1-13-列表渲染" aria-hidden="true">#</a> 1.13. 列表渲染</h3><h4 id="_1-13-1-基本列表" tabindex="-1"><a class="header-anchor" href="#_1-13-1-基本列表" aria-hidden="true">#</a> 1.13.1. 基本列表</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;meta charset=&quot;UTF-8&quot; /&gt;
&lt;title&gt;基本列表&lt;/title&gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;../js/vue.js&quot;&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div id=&quot;root&quot;&gt;
&lt;h2&gt;人员列表（遍历数组）&lt;/h2&gt;
&lt;ul&gt;
&lt;li v-for=&quot;(p,index) in persons&quot; :key=&quot;index&quot;&gt;
{{p.name}}-{{p.age}}
&lt;/li&gt;
&lt;/ul&gt;

&lt;h2&gt;汽车信息（遍历对象）&lt;/h2&gt;
&lt;ul&gt;
&lt;li v-for=&quot;(value,k) in car&quot; :key=&quot;k&quot;&gt;
{{k}}-{{value}}
&lt;/li&gt;
&lt;/ul&gt;

&lt;h2&gt;遍历字符串&lt;/h2&gt;
&lt;ul&gt;
&lt;li v-for=&quot;(char,index) in str&quot; :key=&quot;index&quot;&gt;
{{char}}-{{index}}
&lt;/li&gt;
&lt;/ul&gt;

&lt;h2&gt;遍历指定次数&lt;/h2&gt;
&lt;ul&gt;
&lt;li v-for=&quot;(number,index) in 5&quot; :key=&quot;index&quot;&gt;
{{index}}-{{number}}
&lt;/li&gt;
&lt;/ul&gt;
&lt;/div&gt;

&lt;script type=&quot;text/javascript&quot;&gt;
Vue.config.productionTip = false

new Vue({
el:&#39;#root&#39;,
data:{
persons:[
{id:&#39;001&#39;,name:&#39;张三&#39;,age:18},
{id:&#39;002&#39;,name:&#39;李四&#39;,age:19},
{id:&#39;003&#39;,name:&#39;王五&#39;,age:20}
],
car:{
name:&#39;奥迪A8&#39;,
price:&#39;70万&#39;,
color:&#39;黑色&#39;
},
str:&#39;hello&#39;
}
})
&lt;/script&gt;
    &lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>效果：</strong></p><p><img src="https://img-blog.csdnimg.cn/img_convert/87057f77ecd91e9510c9795754156f95.png" alt=""></p><p><strong>总结：</strong></p><p><code>v-for</code>指令：</p><ol><li>用于展示列表数据</li><li>语法：<code>&lt;li v-for=&quot;(item, index) in xxx&quot; :key=&quot;yyy&quot;&gt;</code>，其中key可以是index，也可以是遍历对象的唯一标识</li><li>可遍历：数组、对象、字符串（用的少）、指定次数（用的少）</li></ol><h4 id="_1-13-2-key的作用与原理" tabindex="-1"><a class="header-anchor" href="#_1-13-2-key的作用与原理" aria-hidden="true">#</a> 1.13.2. key的作用与原理</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;meta charset=&quot;UTF-8&quot; /&gt;
&lt;title&gt;key的原理&lt;/title&gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;../js/vue.js&quot;&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div id=&quot;root&quot;&gt;
&lt;h2&gt;人员列表&lt;/h2&gt;
&lt;button @click.once=&quot;add&quot;&gt;添加老刘&lt;/button&gt;
&lt;ul&gt;
&lt;li v-for=&quot;(p,index) in persons&quot; :key=&quot;index&quot;&gt;
{{p.name}} - {{p.age}}
&lt;input type=&quot;text&quot;&gt;
&lt;/li&gt;
&lt;/ul&gt;
&lt;/div&gt;

&lt;script type=&quot;text/javascript&quot;&gt;
Vue.config.productionTip = false

new Vue({
el:&#39;#root&#39;,
data:{
persons:[
{id:&#39;001&#39;,name:&#39;张三&#39;,age:18},
{id:&#39;002&#39;,name:&#39;李四&#39;,age:19},
{id:&#39;003&#39;,name:&#39;王五&#39;,age:20}
]
},
methods: {
add(){
const p = {id:&#39;004&#39;,name:&#39;老刘&#39;,age:40}
this.persons.unshift(p)
}
},
})
&lt;/script&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>效果：</strong></p><p><img src="https://img-blog.csdnimg.cn/img_convert/3302f1999ed286c9efabf51649224dff.png" alt=""></p><p><strong>原理：</strong></p><p><img src="https://img-blog.csdnimg.cn/img_convert/7bae1eba02ae664c552deac6ab0a71f7.png" alt="image-20210718113900024"></p><p><img src="https://img-blog.csdnimg.cn/img_convert/c81ae98624c2e1a32b7ced171d9089de.png" alt="image-20210718114304512"></p>`,99),_=i("strong",null,"面试题",-1),V={href:"https://so.csdn.net/so/search?q=react&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"},A=d(`<ol><li><p>虚拟DOM中key的作用：key是虚拟DOM中对象的标识，当数据发生变化时，Vue会根据【新数据】生成【新的虚拟DOM】，随后Vue进行【新虚拟DOM】与【旧虚拟DOM】的差异比较，比较规则如下：</p></li><li><p>对比规则：</p><ol><li><p>旧虚拟DOM中找到了与新虚拟DOM相同的key：</p><ol><li>若虚拟DOM中内容没变, 直接使用之前的真实DOM</li><li>若虚拟DOM中内容变了, 则生成新的真实DOM，随后替换掉页面中之前的真实DOM</li></ol></li><li><p>旧虚拟DOM中未找到与新虚拟DOM相同的key：创建新的真实DOM，随后渲染到到页面</p></li></ol></li><li><p>用index作为key可能会引发的问题：</p><ol><li>若对数据进行逆序添加、逆序删除等破坏顺序操作：会产生没有必要的真实DOM更新 ==&gt; 界面效果没问题, 但效率低</li><li>若结构中还包含输入类的DOM：会产生错误DOM更新 ==&gt; 界面有问题</li></ol></li><li><p>开发中如何选择key?</p><ol><li>最好使用每条数据的唯一标识作为key，比如id、手机号、身份证号、学号等唯一值</li><li>如果不存在对数据的逆序添加、逆序删除等破坏顺序的操作，仅用于渲染列表，使用index作为key是没有问题的</li></ol></li></ol><h4 id="_1-13-3-列表过滤" tabindex="-1"><a class="header-anchor" href="#_1-13-3-列表过滤" aria-hidden="true">#</a> 1.13.3. 列表过滤</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;meta charset=&quot;UTF-8&quot; /&gt;
&lt;title&gt;列表过滤&lt;/title&gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;../js/vue.js&quot;&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div id=&quot;root&quot;&gt;
&lt;h2&gt;人员列表&lt;/h2&gt;
&lt;input type=&quot;text&quot; placeholder=&quot;请输入名字&quot; v-model=&quot;keyWord&quot;&gt;
&lt;ul&gt;
&lt;li v-for=&quot;(p,index) of filPersons&quot; :key=&quot;index&quot;&gt;
{{p.name}}-{{p.age}}-{{p.sex}}
&lt;/li&gt;
&lt;/ul&gt;
&lt;/div&gt;

&lt;script type=&quot;text/javascript&quot;&gt;
Vue.config.productionTip = false

new Vue({
el:&#39;#root&#39;,
data:{
keyWord:&#39;&#39;,
persons:[
{id:&#39;001&#39;,name:&#39;马冬梅&#39;,age:19,sex:&#39;女&#39;},
{id:&#39;002&#39;,name:&#39;周冬雨&#39;,age:20,sex:&#39;女&#39;},
{id:&#39;003&#39;,name:&#39;周杰伦&#39;,age:21,sex:&#39;男&#39;},
{id:&#39;004&#39;,name:&#39;温兆伦&#39;,age:22,sex:&#39;男&#39;}
]
},
computed:{
filPersons(){
return this.persons.filter((p)=&gt;{
return p.name.indexOf(this.keyWord) !== -1
})
}
}
})
&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>效果：</strong></p><p><img src="https://img-blog.csdnimg.cn/img_convert/28e8aa660a14deba8039eab6ce9c60fa.png" alt=""></p><h4 id="_1-13-4-列表排序" tabindex="-1"><a class="header-anchor" href="#_1-13-4-列表排序" aria-hidden="true">#</a> 1.13.4. 列表排序</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;body&gt;
    &lt;div id=&quot;root&quot;&gt;
        &lt;h2&gt;人员列表&lt;/h2&gt;
        &lt;input type=&quot;text&quot; placeholder=&quot;请输入名字&quot; v-model=&quot;keyWord&quot;&gt;
        &lt;button @click=&quot;sortType = 2&quot;&gt;年龄升序&lt;/button&gt;
&lt;button @click=&quot;sortType = 1&quot;&gt;年龄降序&lt;/button&gt;
&lt;button @click=&quot;sortType = 0&quot;&gt;原顺序&lt;/button&gt;
        &lt;ul&gt;
            &lt;li v-for=&quot;(p,index) of filPersons&quot; :key=&quot;p.id&quot;&gt;
                {{p.name}}-{{p.age}}-{{p.sex}}
            &lt;/li&gt;
        &lt;/ul&gt;
    &lt;/div&gt;
    
    &lt;script&gt;
        new Vue({
            el:&#39;#root&#39;,
            data:{
                persons:[
                    {id:&#39;001&#39;,name:&#39;马冬梅&#39;,age:30,sex:&#39;女&#39;},
    {id:&#39;002&#39;,name:&#39;周冬雨&#39;,age:45,sex:&#39;女&#39;},
    {id:&#39;003&#39;,name:&#39;周杰伦&#39;,age:21,sex:&#39;男&#39;},
    {id:&#39;004&#39;,name:&#39;温兆伦&#39;,age:22,sex:&#39;男&#39;}
                ],
                keyWord:&#39;&#39;,
                sortType:0,//0代表原顺序，1代表升序，3代表降序
            },
            computed:{
                filPersons(){
                    const arr = this.persons.filter((p)=&gt;{
                        return p.name.indexOf(this.keyWord) !== -1
                    })
                    if(this.sortType){
                        arr.sort((p1, p2)=&gt;{
                            return this.sortType ===1 ? p2.age-p1.age : p1.age-p2.age
                        })
                    }
                    return arr
                }
            }
        })
    &lt;/script&gt;
&lt;/body&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>效果：</strong></p><p><img src="https://img-blog.csdnimg.cn/img_convert/17cc072066526339e6c64df0fa2e3bb8.png" alt=""></p><h4 id="_1-13-5-vue数据监视" tabindex="-1"><a class="header-anchor" href="#_1-13-5-vue数据监视" aria-hidden="true">#</a> 1.13.5. Vue数据监视</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;meta charset=&quot;UTF-8&quot; /&gt;
&lt;title&gt;Vue数据监视&lt;/title&gt;
&lt;style&gt;
button{
margin-top: 10px;
}
&lt;/style&gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;../js/vue.js&quot;&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div id=&quot;root&quot;&gt;
&lt;h1&gt;学生信息&lt;/h1&gt;
&lt;button @click=&quot;student.age++&quot;&gt;年龄+1岁&lt;/button&gt;&lt;br/&gt;
&lt;button @click=&quot;addSex&quot;&gt;添加性别属性，默认值：男&lt;/button&gt; &lt;br/&gt;
&lt;button @click=&quot;addFriend&quot;&gt;在列表首位添加一个朋友&lt;/button&gt; &lt;br/&gt;
&lt;button @click=&quot;updateFirstFriendName&quot;&gt;修改第一个朋友的名字为：张三&lt;/button&gt;&lt;br/&gt;
&lt;button @click=&quot;addHobby&quot;&gt;添加一个爱好&lt;/button&gt; &lt;br/&gt;
&lt;button @click=&quot;updateHobby&quot;&gt;修改第一个爱好为：开车&lt;/button&gt;&lt;br/&gt;
&lt;button @click=&quot;removeSmoke&quot;&gt;过滤掉爱好中的抽烟&lt;/button&gt; &lt;br/&gt;
&lt;h3&gt;姓名：{{student.name}}&lt;/h3&gt;
&lt;h3&gt;年龄：{{student.age}}&lt;/h3&gt;
&lt;h3 v-if=&quot;student.sex&quot;&gt;性别：{{student.sex}}&lt;/h3&gt;
&lt;h3&gt;爱好：&lt;/h3&gt;
&lt;ul&gt;
&lt;li v-for=&quot;(h,index) in student.hobby&quot; :key=&quot;index&quot;&gt;
{{h}}
&lt;/li&gt;
&lt;/ul&gt;
&lt;h3&gt;朋友们：&lt;/h3&gt;
&lt;ul&gt;
&lt;li v-for=&quot;(f,index) in student.friends&quot; :key=&quot;index&quot;&gt;
{{f.name}}--{{f.age}}
&lt;/li&gt;
&lt;/ul&gt;
&lt;/div&gt;
&lt;/body&gt;

&lt;script type=&quot;text/javascript&quot;&gt;
Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

const vm = new Vue({
el:&#39;#root&#39;,
data:{
student:{
name:&#39;tom&#39;,
age:18,
hobby:[&#39;抽烟&#39;,&#39;喝酒&#39;,&#39;烫头&#39;],
friends:[
{name:&#39;jerry&#39;,age:35},
{name:&#39;tony&#39;,age:36}
]
}
},
methods: {
addSex(){
//Vue.set(this.student,&#39;sex&#39;,&#39;男&#39;)
this.$set(this.student,&#39;sex&#39;,&#39;男&#39;)
},
addFriend(){
this.student.friends.unshift({name:&#39;jack&#39;,age:70})
},
updateFirstFriendName(){
this.student.friends[0].name = &#39;张三&#39;
},
addHobby(){
this.student.hobby.push(&#39;学习&#39;)
},
updateHobby(){
this.student.hobby.splice(0,1,&#39;开车&#39;)
},
removeSmoke(){
this.student.hobby = this.student.hobby.filter((h)=&gt;{
return h !== &#39;抽烟&#39;
})
}
}
})
&lt;/script&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>效果：</strong></p><p><img src="https://img-blog.csdnimg.cn/img_convert/4a4decbdef33b0997493615401a5f4fc.png" alt=""></p><p><strong>总结：</strong></p><p>Vue监视数据的原理：</p><ol><li><p>vue会监视data中所有层次的数据</p></li><li><p>如何监测对象中的数据？</p><p>通过setter实现监视，且要在<code>new Vue</code>时就传入要监测的数据</p><ol><li>对象中后追加的属性，Vue默认不做响应式处理</li><li>如需给后添加的属性做响应式，请使用如下API： <ul><li><code>Vue.set(target,propertyName/index,value)</code></li><li><code>vm.$set(target,propertyName/index,value)</code></li></ul></li></ol></li><li><p>如何监测数组中的数据？</p><p>通过包裹数组更新元素的方法实现，本质就是做了两件事：</p><ol><li>调用原生对应的方法对数组进行更新</li><li>重新解析模板，进而更新页面</li></ol></li><li><p>在Vue修改数组中的某个元素一定要用如下方法：</p><ol><li>使用这些API：<code>push()</code>、<code>pop()</code>、<code>shift()</code>、<code>unshift()</code>、<code>splice()</code>、<code>sort()</code>、<code>reverse()</code></li><li><code>Vue.set()</code> 或 <code>vm.$set()</code></li></ol></li></ol><p><strong>特别注意</strong>：<code>Vue.set()</code> 和 <code>vm.$set()</code> 不能给vm 或 vm的根数据对象（data等） 添加属性</p><h3 id="_1-14-收集表单数据" tabindex="-1"><a class="header-anchor" href="#_1-14-收集表单数据" aria-hidden="true">#</a> 1.14. 收集表单数据</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;meta charset=&quot;UTF-8&quot; /&gt;
&lt;title&gt;收集表单数据&lt;/title&gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;../js/vue.js&quot;&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div id=&quot;root&quot;&gt;
&lt;form @submit.prevent=&quot;demo&quot;&gt;
账号：&lt;input type=&quot;text&quot; v-model.trim=&quot;userInfo.account&quot;&gt; &lt;br/&gt;&lt;br/&gt;
密码：&lt;input type=&quot;password&quot; v-model=&quot;userInfo.password&quot;&gt; &lt;br/&gt;&lt;br/&gt;
年龄：&lt;input type=&quot;number&quot; v-model.number=&quot;userInfo.age&quot;&gt; &lt;br/&gt;&lt;br/&gt;
性别：
男&lt;input type=&quot;radio&quot; name=&quot;sex&quot; v-model=&quot;userInfo.sex&quot; value=&quot;male&quot;&gt;
女&lt;input type=&quot;radio&quot; name=&quot;sex&quot; v-model=&quot;userInfo.sex&quot; value=&quot;female&quot;&gt; &lt;br/&gt;&lt;br/&gt;
爱好：
学习&lt;input type=&quot;checkbox&quot; v-model=&quot;userInfo.hobby&quot; value=&quot;study&quot;&gt;
打游戏&lt;input type=&quot;checkbox&quot; v-model=&quot;userInfo.hobby&quot; value=&quot;game&quot;&gt;
吃饭&lt;input type=&quot;checkbox&quot; v-model=&quot;userInfo.hobby&quot; value=&quot;eat&quot;&gt;
&lt;br/&gt;&lt;br/&gt;
所属校区：
&lt;select v-model=&quot;userInfo.city&quot;&gt;
&lt;option value=&quot;&quot;&gt;请选择校区&lt;/option&gt;
&lt;option value=&quot;beijing&quot;&gt;北京&lt;/option&gt;
&lt;option value=&quot;shanghai&quot;&gt;上海&lt;/option&gt;
&lt;option value=&quot;shenzhen&quot;&gt;深圳&lt;/option&gt;
&lt;option value=&quot;wuhan&quot;&gt;武汉&lt;/option&gt;
&lt;/select&gt;
&lt;br/&gt;&lt;br/&gt;
其他信息：
&lt;textarea v-model.lazy=&quot;userInfo.other&quot;&gt;&lt;/textarea&gt; &lt;br/&gt;&lt;br/&gt;
&lt;input type=&quot;checkbox&quot; v-model=&quot;userInfo.agree&quot;&gt;阅读并接受&lt;a href=&quot;http://www.atguigu.com&quot;&gt;《用户协议》&lt;/a&gt;
&lt;button&gt;提交&lt;/button&gt;
&lt;/form&gt;
&lt;/div&gt;
&lt;/body&gt;

&lt;script type=&quot;text/javascript&quot;&gt;
Vue.config.productionTip = false

new Vue({
el:&#39;#root&#39;,
data:{
userInfo:{
account:&#39;&#39;,
password:&#39;&#39;,
age:0,
sex:&#39;female&#39;,
hobby:[],
city:&#39;beijing&#39;,
other:&#39;&#39;,
agree:&#39;&#39;
}
},
methods: {
demo(){
console.log(JSON.stringify(this.userInfo))
}
}
})
&lt;/script&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>效果：</strong></p><p><img src="https://img-blog.csdnimg.cn/img_convert/c45a6e19e8ce98a58c15ba1562f71de4.png" alt=""></p><p><strong>总结：</strong></p><p>收集表单数据：</p><ul><li>若：<code>&lt;input type=&quot;text&quot;/&gt;</code>，则<code>v-model</code>收集的是value值，用户输入的内容就是value值</li><li>若：<code>&lt;input type=&quot;radio&quot;/&gt;</code>，则<code>v-model</code>收集的是value值，且要给标签配置value属性</li><li>若：<code>&lt;input type=&quot;checkbox&quot;/&gt;</code><ul><li>没有配置value属性，那么收集的是checked属性（勾选 or 未勾选，是布尔值）</li><li>配置了value属性： <ul><li><code>v-model</code>的初始值是非数组，那么收集的就是checked（勾选 or 未勾选，是布尔值）</li><li><code>v-model</code>的初始值是数组，那么收集的就是value组成的数组</li></ul></li></ul></li></ul><p><code>v-model</code>的三个修饰符：</p><ol><li>lazy：失去焦点后再收集数据</li><li>number：输入字符串转为有效的数字</li><li>trim：输入首尾空格过滤</li></ol><h3 id="_1-15-过滤器" tabindex="-1"><a class="header-anchor" href="#_1-15-过滤器" aria-hidden="true">#</a> 1.15. 过滤器</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;meta charset=&quot;UTF-8&quot; /&gt;
&lt;title&gt;过滤器&lt;/title&gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;../js/vue.js&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;https://cdn.bootcdn.net/ajax/libs/dayjs/1.10.6/dayjs.min.js&quot;&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div id=&quot;root&quot;&gt;
&lt;h2&gt;时间&lt;/h2&gt;
            &lt;h3&gt;当前时间戳：{{time}}&lt;/h3&gt;
            &lt;h3&gt;转换后时间：{{time | timeFormater()}}&lt;/h3&gt;
&lt;h3&gt;转换后时间：{{time | timeFormater(&#39;YYYY-MM-DD HH:mm:ss&#39;)}}&lt;/h3&gt;
&lt;h3&gt;截取年月日：{{time | timeFormater() | mySlice}}&lt;/h3&gt;
&lt;/div&gt;
&lt;/body&gt;

&lt;script type=&quot;text/javascript&quot;&gt;
Vue.config.productionTip = false
//全局过滤器
Vue.filter(&#39;mySlice&#39;,function(value){
return value.slice(0,11)
})
new Vue({
            el:&#39;#root&#39;,
            data:{
                time:1626750147900,
            },
//局部过滤器
            filters:{
                timeFormater(value, str=&quot;YYYY年MM月DD日 HH:mm:ss&quot;){
                    return dayjs(value).format(str)
                }
            }
        })
&lt;/script&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>效果：</strong></p><p><img src="https://img-blog.csdnimg.cn/img_convert/ae26b7438a92ea522859afff5ad96cba.png" alt=""></p><p><strong>总结：</strong></p><p>过滤器：</p><ul><li><p>定义：对要显示的数据进行特定格式化后再显示（适用于一些简单逻辑的处理）。</p></li><li><p>语法：</p><ol><li><p>注册过滤器：<code>Vue.filter(name,callback)</code> 或 <code>new Vue{filters:{}}</code></p></li><li><p>使用过滤器：<code>{{ xxx | 过滤器名}}</code> 或 <code>v-bind:属性 = &quot;xxx | 过滤器名&quot;</code></p></li></ol></li><li><p>备注：</p><ol><li>过滤器可以接收额外参数，多个过滤器也可以串联</li><li>并没有改变原本的数据，而是产生新的对应的数据</li></ol></li></ul><h3 id="_1-16-内置指令" tabindex="-1"><a class="header-anchor" href="#_1-16-内置指令" aria-hidden="true">#</a> 1.16. 内置指令</h3><h4 id="_1-16-1-v-text指令" tabindex="-1"><a class="header-anchor" href="#_1-16-1-v-text指令" aria-hidden="true">#</a> 1.16.1. v-text指令</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;meta charset=&quot;UTF-8&quot; /&gt;
&lt;title&gt;v-text指令&lt;/title&gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;../js/vue.js&quot;&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div id=&quot;root&quot;&gt;
&lt;div&gt;你好，{{name}}&lt;/div&gt;
&lt;div v-text=&quot;name&quot;&gt;&lt;/div&gt;
&lt;div v-text=&quot;str&quot;&gt;&lt;/div&gt;
&lt;/div&gt;
&lt;/body&gt;

&lt;script type=&quot;text/javascript&quot;&gt;
Vue.config.productionTip = false 

new Vue({
el:&#39;#root&#39;,
data:{
name:&#39;JOJO&#39;,
str:&#39;&lt;h3&gt;你好啊！&lt;/h3&gt;&#39;
}
})
&lt;/script&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>效果：</strong></p><p><img src="https://img-blog.csdnimg.cn/img_convert/739ed5a4c0c853f138776edb8273dcb1.png" alt=""></p><p><strong>总结：</strong></p><ul><li><p>之前学过的指令：</p><ul><li><code>v-bind</code>：单向绑定解析表达式，可简写为<code>:</code></li><li><code>v-model</code>：双向数据绑定</li><li><code>v-for</code>：遍历数组 / 对象 / 字符串</li><li><code>v-on</code>：绑定事件监听，可简写为<code>@</code></li><li><code>v-if</code>：条件渲染（动态控制节点是否存存在）</li><li><code>v-else</code>：条件渲染（动态控制节点是否存存在）</li><li><code>v-show</code>：条件渲染 (动态控制节点是否展示)</li></ul></li><li><p><code>v-text</code>指令：</p><ol><li><p>作用：向其所在的节点中渲染文本内容</p></li><li><p>与插值语法的区别：<code>v-text</code>会替换掉节点中的内容，<code>{{xx}}</code>则不会。</p></li></ol></li></ul><h4 id="_1-16-2-v-html指令" tabindex="-1"><a class="header-anchor" href="#_1-16-2-v-html指令" aria-hidden="true">#</a> 1.16.2. v-html指令</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;meta charset=&quot;UTF-8&quot; /&gt;
&lt;title&gt;v-html指令&lt;/title&gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;../js/vue.js&quot;&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div id=&quot;root&quot;&gt;
&lt;div&gt;Hello，{{name}}&lt;/div&gt;
&lt;div v-html=&quot;str&quot;&gt;&lt;/div&gt;
&lt;div v-html=&quot;str2&quot;&gt;&lt;/div&gt;
&lt;/div&gt;
&lt;/body&gt;

&lt;script type=&quot;text/javascript&quot;&gt;
Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

new Vue({
el:&#39;#root&#39;,
data:{
name:&#39;JOJO&#39;,
str:&#39;&lt;h3&gt;你好啊！&lt;/h3&gt;&#39;,
str2:&#39;&lt;a href=javascript:location.href=&quot;http://www.baidu.com?&quot;+document.cookie&gt;兄弟我找到你想要的资源了，快来！&lt;/a&gt;&#39;,
}
})
&lt;/script&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>效果：</strong></p><p><img src="https://img-blog.csdnimg.cn/img_convert/859ea473b87fee35d99cec94ce018f13.png" alt=""></p><p><strong>总结：</strong></p><p><code>v-html</code>指令：</p><ol><li><p>作用：向指定节点中渲染包含html结构的内容</p></li><li><p>与插值语法的区别：</p><ol><li><code>v-html</code>会替换掉节点中所有的内容，<code>{{xx}}</code>则不会</li><li><code>v-html</code>可以识别html结构</li></ol></li><li><p>严重注意：<code>v-html</code>有安全性问题！！！</p><ol><li>在网站上动态渲染任意HTML是非常危险的，容易导致XSS攻击</li><li>一定要在可信的内容上使用<code>v-html</code>，永远不要用在用户提交的内容上！！！</li></ol></li></ol><h4 id="_1-16-3-v-cloak指令" tabindex="-1"><a class="header-anchor" href="#_1-16-3-v-cloak指令" aria-hidden="true">#</a> 1.16.3. v-cloak指令</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;meta charset=&quot;UTF-8&quot; /&gt;
&lt;title&gt;v-cloak指令&lt;/title&gt;
&lt;style&gt;
[v-cloak]{
display:none;
}
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div id=&quot;root&quot;&gt;
&lt;h2 v-cloak&gt;{{name}}&lt;/h2&gt;
&lt;/div&gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;../js/vue.js&quot;&gt;&lt;/script&gt;
&lt;/body&gt;

&lt;script type=&quot;text/javascript&quot;&gt;
Vue.config.productionTip = false

new Vue({
el:&#39;#root&#39;,
data:{
name:&#39;尚硅谷&#39;
}
})
&lt;/script&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>效果：</strong></p><p><img src="https://img-blog.csdnimg.cn/img_convert/4ce48f4bc0f7926c189444a23357d11a.png" alt=""></p><p><strong>总结：</strong></p><p><code>v-cloak</code>指令（没有值）：</p><ol><li>本质是一个特殊属性，Vue实例创建完毕并接管容器后，会删掉<code>v-cloak</code>属性</li><li>使用css配合<code>v-cloak</code>可以解决网速慢时页面展示出<code>{{xxx}}</code>的问题</li></ol><h4 id="_1-16-4-v-once指令" tabindex="-1"><a class="header-anchor" href="#_1-16-4-v-once指令" aria-hidden="true">#</a> 1.16.4. v-once指令</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;meta charset=&quot;UTF-8&quot; /&gt;
&lt;title&gt;v-once指令&lt;/title&gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;../js/vue.js&quot;&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div id=&quot;root&quot;&gt;
&lt;h2 v-once&gt;n初始化的值是：{{n}}&lt;/h2&gt;
            &lt;h2&gt;n现在的值是：{{n}}&lt;/h2&gt;
            &lt;button @click=&quot;n++&quot;&gt;点我n+1&lt;/button&gt;
&lt;/div&gt;
&lt;/body&gt;

&lt;script type=&quot;text/javascript&quot;&gt;
Vue.config.productionTip = false 

new Vue({
el:&#39;#root&#39;,
data:{
n:1
}
})
&lt;/script&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>效果：</strong></p><p><img src="https://img-blog.csdnimg.cn/img_convert/308d043c59cdce3c158edbd947dc003d.png" alt=""></p><p><strong>总结：</strong></p><p><code>v-once</code>指令：</p><ol><li><p><code>v-once</code>所在节点在初次动态渲染后，就视为静态内容了</p></li><li><p>以后数据的改变不会引起<code>v-once</code>所在结构的更新，可以用于优化性能</p></li></ol><h4 id="_1-16-5-v-pre指令" tabindex="-1"><a class="header-anchor" href="#_1-16-5-v-pre指令" aria-hidden="true">#</a> 1.16.5. v-pre指令</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;meta charset=&quot;UTF-8&quot; /&gt;
&lt;title&gt;v-pre指令&lt;/title&gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;../js/vue.js&quot;&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div id=&quot;root&quot;&gt;
&lt;h2 v-pre&gt;Vue其实很简单&lt;/h2&gt;
&lt;h2&gt;当前的n值是:{{n}}&lt;/h2&gt;
&lt;button @click=&quot;n++&quot;&gt;点我n+1&lt;/button&gt;
&lt;/div&gt;
&lt;/body&gt;

&lt;script type=&quot;text/javascript&quot;&gt;
Vue.config.productionTip = false

new Vue({
el:&#39;#root&#39;,
data:{
n:1
}
})
&lt;/script&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>效果：</strong></p><p><img src="https://img-blog.csdnimg.cn/img_convert/b0a48cd713d23b55930ef324988a0eb2.png" alt=""></p><p><strong>总结：</strong></p><p><code>v-pre</code>指令：</p><ol><li>跳过其所在节点的编译过程。</li><li>可利用它跳过：没有使用指令语法、没有使用插值语法的节点，会加快编译</li></ol><h3 id="_1-17-自定义指令" tabindex="-1"><a class="header-anchor" href="#_1-17-自定义指令" aria-hidden="true">#</a> 1.17. 自定义指令</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;meta charset=&quot;UTF-8&quot; /&gt;
&lt;title&gt;自定义指令&lt;/title&gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;../js/vue.js&quot;&gt;&lt;/script&gt;
&lt;/head&gt;
    &lt;!-- 
需求1：定义一个v-big指令，和v-text功能类似，但会把绑定的数值放大10倍。
需求2：定义一个v-fbind指令，和v-bind功能类似，但可以让其所绑定的input元素默认获取焦点。
--&gt;
&lt;body&gt;
&lt;div id=&quot;root&quot;&gt;
&lt;h2&gt;当前的n值是：&lt;span v-text=&quot;n&quot;&gt;&lt;/span&gt; &lt;/h2&gt;
&lt;h2&gt;放大10倍后的n值是：&lt;span v-big=&quot;n&quot;&gt;&lt;/span&gt; &lt;/h2&gt;
&lt;button @click=&quot;n++&quot;&gt;点我n+1&lt;/button&gt;
&lt;hr/&gt;
&lt;input type=&quot;text&quot; v-fbind:value=&quot;n&quot;&gt;
&lt;/div&gt;
&lt;/body&gt;

&lt;script type=&quot;text/javascript&quot;&gt;
Vue.config.productionTip = false

new Vue({
el:&#39;#root&#39;,
data:{
n:1
},
directives:{
                //big函数何时会被调用？1.指令与元素成功绑定时（一上来） 2.指令所在的模板被重新解析时
big(element,binding){
console.log(&#39;big&#39;,this) //注意此处的this是window
element.innerText = binding.value * 10
},
fbind:{
//指令与元素成功绑定时（一上来）
bind(element,binding){
element.value = binding.value
},
//指令所在元素被插入页面时
inserted(element,binding){
element.focus()
},
//指令所在的模板被重新解析时
update(element,binding){
element.value = binding.value
}
}
}
})
&lt;/script&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>效果：</strong></p><p><img src="https://img-blog.csdnimg.cn/img_convert/fda9f3c9ff423f76f7803d8c3255a8bd.png" alt=""></p><p><strong>总结：</strong></p><ol><li><p>自定义指令定义语法：</p><ol><li><p>局部指令：</p><ol><li><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> new Vue({
 directives:{指令名:配置对象}   
 }) 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> new Vue({
 directives:{指令名:回调函数}   
 }) 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol></li><li><p>全局指令：</p><ol><li><code>Vue.directive(指令名,配置对象)</code></li><li><code>Vue.directive(指令名,回调函数)</code></li></ol><p>例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Vue.directive(&#39;fbind&#39;,{
//指令与元素成功绑定时（一上来）
bind(element,binding){
element.value = binding.value
},
    //指令所在元素被插入页面时
    inserted(element,binding){
    element.focus()
    },
    //指令所在的模板被重新解析时
    update(element,binding){
    element.value = binding.value
    }
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol></li><li><p>配置对象中常用的3个回调函数：</p><ol><li><code>bind(element,binding)</code>：指令与元素成功绑定时调用</li><li><code>inserted(element,binding)</code>：指令所在元素被插入页面时调用</li><li><code>update(element,binding)</code>：指令所在模板结构被重新解析时调用</li></ol></li><li><p>备注：</p><ol><li><p>指令定义时不加“v-”，但使用时要加“v-”</p></li><li><p>指令名如果是多个单词，要使用kebab-case命名方式，不要用camelCase命名</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>new Vue({
el:&#39;#root&#39;,
data:{
n:1
},
directives:{
&#39;big-number&#39;(element,binding){
element.innerText = binding.value * 10
}
}
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol></li></ol><h3 id="_1-18-vue生命周期" tabindex="-1"><a class="header-anchor" href="#_1-18-vue生命周期" aria-hidden="true">#</a> 1.18. Vue生命周期</h3><h4 id="_1-18-1-引出生命周期" tabindex="-1"><a class="header-anchor" href="#_1-18-1-引出生命周期" aria-hidden="true">#</a> 1.18.1. 引出生命周期</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;meta charset=&quot;UTF-8&quot; /&gt;
&lt;title&gt;引出生命周期&lt;/title&gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;../js/vue.js&quot;&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div id=&quot;root&quot;&gt;
&lt;h2 v-if=&quot;a&quot;&gt;你好啊&lt;/h2&gt;
&lt;h2 :style=&quot;{opacity}&quot;&gt;欢迎学习Vue&lt;/h2&gt;
&lt;/div&gt;
&lt;/body&gt;

&lt;script type=&quot;text/javascript&quot;&gt;
Vue.config.productionTip = false 

 new Vue({
el:&#39;#root&#39;,
data:{
a:false,
opacity:1
},
mounted(){
console.log(&#39;mounted&#39;,this)
setInterval(() =&gt; {
this.opacity -= 0.01
if(this.opacity &lt;= 0) this.opacity = 1
},16)
},
})
&lt;/script&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>效果：</strong></p><p><img src="https://img-blog.csdnimg.cn/img_convert/0b14317b2381599b5638c398ab97a240.png" alt=""></p><p><strong>总结：</strong></p><p>生命周期：</p><ol><li>又名：生命周期回调函数、生命周期函数、生命周期钩子</li><li>是什么：Vue在关键时刻帮我们调用的一些特殊名称的函数</li><li>生命周期函数的名字不可更改，但函数的具体内容是程序员根据需求编写的</li><li>生命周期函数中的this指向是vm 或 组件实例对象</li></ol><h4 id="_1-18-2-分析生命周期" tabindex="-1"><a class="header-anchor" href="#_1-18-2-分析生命周期" aria-hidden="true">#</a> 1.18.2. 分析生命周期</h4><p><img src="https://img-blog.csdnimg.cn/img_convert/934db3f17c6daded6578bdf1a769d9dc.png" alt=""></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;meta charset=&quot;UTF-8&quot; /&gt;
&lt;title&gt;分析生命周期&lt;/title&gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;../js/vue.js&quot;&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div id=&quot;root&quot;&gt;
&lt;h2 v-text=&quot;n&quot;&gt;&lt;/h2&gt;
&lt;h2&gt;当前的n值是：{{n}}&lt;/h2&gt;
&lt;button @click=&quot;add&quot;&gt;点我n+1&lt;/button&gt;
&lt;button @click=&quot;bye&quot;&gt;点我销毁vm&lt;/button&gt;
&lt;/div&gt;
&lt;/body&gt;

&lt;script type=&quot;text/javascript&quot;&gt;
Vue.config.productionTip = false

new Vue({
el:&#39;#root&#39;,
// template:\`
// &lt;div&gt;
// &lt;h2&gt;当前的n值是：{{n}}&lt;/h2&gt;
// &lt;button @click=&quot;add&quot;&gt;点我n+1&lt;/button&gt;
// &lt;/div&gt;
// \`,
data:{
n:1
},
methods: {
add(){
console.log(&#39;add&#39;)
this.n++
},
bye(){
console.log(&#39;bye&#39;)
this.$destroy()
}
},
watch:{
n(){
console.log(&#39;n变了&#39;)
}
},
beforeCreate() {
console.log(&#39;beforeCreate&#39;)
},
created() {
console.log(&#39;created&#39;)
},
beforeMount() {
console.log(&#39;beforeMount&#39;)
},
mounted() {
console.log(&#39;mounted&#39;)
},
beforeUpdate() {
console.log(&#39;beforeUpdate&#39;)
},
updated() {
console.log(&#39;updated&#39;)
},
beforeDestroy() {
console.log(&#39;beforeDestroy&#39;)
},
destroyed() {
console.log(&#39;destroyed&#39;)
},
})
&lt;/script&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>效果：</strong></p><p><img src="https://img-blog.csdnimg.cn/img_convert/59b107aecb070224bf8fc2c7a1253256.png" alt=""></p><h4 id="_1-18-3-总结生命周期" tabindex="-1"><a class="header-anchor" href="#_1-18-3-总结生命周期" aria-hidden="true">#</a> 1.18.3. 总结生命周期</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;meta charset=&quot;UTF-8&quot; /&gt;
&lt;title&gt;引出生命周期&lt;/title&gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;../js/vue.js&quot;&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div id=&quot;root&quot;&gt;
&lt;h2 :style=&quot;{opacity}&quot;&gt;欢迎学习Vue&lt;/h2&gt;
&lt;button @click=&quot;opacity = 1&quot;&gt;透明度设置为1&lt;/button&gt;
&lt;button @click=&quot;stop&quot;&gt;点我停止变换&lt;/button&gt;
&lt;/div&gt;
&lt;/body&gt;

&lt;script type=&quot;text/javascript&quot;&gt;
Vue.config.productionTip = false 

 new Vue({
el:&#39;#root&#39;,
data:{
opacity:1
},
methods: {
stop(){
this.$destroy()
}
},
mounted(){
console.log(&#39;mounted&#39;,this)
this.timer = setInterval(() =&gt; {
console.log(&#39;setInterval&#39;)
this.opacity -= 0.01
if(this.opacity &lt;= 0) this.opacity = 1
},16)
},
beforeDestroy() {
clearInterval(this.timer)
console.log(&#39;vm即将驾鹤西游了&#39;)
},
})
&lt;/script&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>效果：</strong></p><p><img src="https://img-blog.csdnimg.cn/img_convert/548892ea5ed03fca07697704e9a076ac.png" alt=""></p><p><strong>总结：</strong></p><p>常用的生命周期钩子：</p><ol><li><p><code>mounted</code>：发送ajax请求、启动定时器、绑定自定义事件、订阅消息等初始化操作</p></li><li><p><code>beforeDestroy</code>：清除定时器、解绑自定义事件、取消订阅消息等收尾工作</p></li></ol><p>关于销毁Vue实例：</p><ol><li><p>销毁后借助Vue开发者工具看不到任何信息</p></li><li><p>销毁后自定义事件会失效，但原生DOM事件依然有效</p></li><li><p>一般不会在<code>beforeDestroy</code>操作数据，因为即便操作数据，也不会再触发更新流程了</p></li></ol><h2 id="_2-vue组件化编程" tabindex="-1"><a class="header-anchor" href="#_2-vue组件化编程" aria-hidden="true">#</a> 2. Vue组件化编程</h2><h3 id="_2-1-模块与组件、模块化与组件化" tabindex="-1"><a class="header-anchor" href="#_2-1-模块与组件、模块化与组件化" aria-hidden="true">#</a> 2.1. 模块与组件、模块化与组件化</h3><p><img src="https://img-blog.csdnimg.cn/img_convert/e660ab7de59f8164756f3495362857ff.png" alt="image-20210723115936262"></p><p><img src="https://img-blog.csdnimg.cn/img_convert/0e586dc1d0b8c9c693cc59ad0bacf014.png" alt="image-20210723120028543"></p><h4 id="_2-1-1-模块" tabindex="-1"><a class="header-anchor" href="#_2-1-1-模块" aria-hidden="true">#</a> 2.1.1. 模块</h4><ol><li>理解：向外提供特定功能的 js 程序，一般就是一个 js 文件</li><li>为什么：js 文件很多很复杂</li><li>作用：复用 js，简化 js 的编写，提高 js 运行效率</li></ol><h4 id="_2-1-2-组件" tabindex="-1"><a class="header-anchor" href="#_2-1-2-组件" aria-hidden="true">#</a> 2.1.2. 组件</h4><ol><li>定义：用来实现局部功能的代码和资源的集合（html/css/js/image…）</li><li>为什么：一个界面的功能很复杂</li><li>作用：复用编码，简化项目编码，提高运行效率</li></ol><h4 id="_2-1-3-模块化" tabindex="-1"><a class="header-anchor" href="#_2-1-3-模块化" aria-hidden="true">#</a> 2.1.3. 模块化</h4><p>当应用中的 js 都以模块来编写的，那这个应用就是一个模块化的应用</p><h4 id="_2-1-4-组件化" tabindex="-1"><a class="header-anchor" href="#_2-1-4-组件化" aria-hidden="true">#</a> 2.1.4. 组件化</h4><p>当应用中的功能都是多组件的方式来编写的，那这个应用就是一个组件化的应用</p><h3 id="_2-2-非单文件组件" tabindex="-1"><a class="header-anchor" href="#_2-2-非单文件组件" aria-hidden="true">#</a> 2.2. 非单文件组件</h3><h4 id="_2-2-1-基本使用" tabindex="-1"><a class="header-anchor" href="#_2-2-1-基本使用" aria-hidden="true">#</a> 2.2.1. 基本使用</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;meta charset=&quot;UTF-8&quot; /&gt;
&lt;title&gt;基本使用&lt;/title&gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;../js/vue.js&quot;&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div id=&quot;root&quot;&gt;
&lt;h1&gt;{{msg}}&lt;/h1&gt;
&lt;hr&gt;
&lt;!-- 第三步：编写组件标签 --&gt;
&lt;school&gt;&lt;/school&gt;
&lt;hr&gt;
&lt;!-- 第三步：编写组件标签 --&gt;
&lt;student&gt;&lt;/student&gt;
&lt;/div&gt;
&lt;/body&gt;

&lt;script type=&quot;text/javascript&quot;&gt;
Vue.config.productionTip = false

//第一步：创建school组件
const school = Vue.extend({
            //组件定义时，一定不要写el配置项，因为最终所有的组件都要被一个vm管理，由vm决定服务于哪个容器。
template:\`
&lt;div class=&quot;demo&quot;&gt;
&lt;h2&gt;学校名称：{{schoolName}}&lt;/h2&gt;
&lt;h2&gt;学校地址：{{address}}&lt;/h2&gt;
&lt;/div&gt;
\`,
data(){
return {
schoolName:&#39;尚硅谷&#39;,
address:&#39;北京昌平&#39;
}
}
})

//第一步：创建student组件
const student = Vue.extend({
template:\`
&lt;div&gt;
&lt;h2&gt;学生姓名：{{studentName}}&lt;/h2&gt;
&lt;h2&gt;学生年龄：{{age}}&lt;/h2&gt;
&lt;/div&gt;
\`,
data(){
return {
studentName:&#39;JOJO&#39;,
age:20
}
}
})

//创建vm
new Vue({
el:&#39;#root&#39;,
data:{
msg:&#39;你好，JOJO！&#39;
},
//第二步：注册组件（局部注册）
components:{
school,
student
}
})
&lt;/script&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>效果：</strong></p><p><img src="https://img-blog.csdnimg.cn/img_convert/30c2f15c6590ddc5907e179d84b97848.png" alt=""></p><p><strong>总结：</strong></p><ul><li><p>Vue中使用组件的三大步骤：</p><ol><li>定义组件(创建组件)</li><li>注册组件</li><li>使用组件(写组件标签)</li></ol></li><li><p>如何定义一个组件？</p><p>使用<code>Vue.extend(options)</code>创建，其中<code>options</code>和<code>new Vue(options)</code>时传入的<code>options</code>几乎一样，但也有点区别：</p><ol><li><p>el不要写，为什么？</p><p>最终所有的组件都要经过一个vm的管理，由vm中的el决定服务哪个容器</p></li><li><p>data必须写成函数，为什么？</p><p>避免组件被复用时，数据存在引用关系</p></li></ol></li><li><p>如何注册组件？</p><ol><li>局部注册：<code>new Vue</code>的时候传入<code>components</code>选项</li><li>全局注册：<code>Vue.component(&#39;组件名&#39;,组件)</code></li></ol></li><li><p>编写组件标签：<code>&lt;school&gt;&lt;/school&gt;</code></p></li></ul><h4 id="_2-2-2-组件注意事项" tabindex="-1"><a class="header-anchor" href="#_2-2-2-组件注意事项" aria-hidden="true">#</a> 2.2.2. 组件注意事项</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;meta charset=&quot;UTF-8&quot; /&gt;
&lt;title&gt;组件注意事项&lt;/title&gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;../js/vue.js&quot;&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div id=&quot;root&quot;&gt;
&lt;h1&gt;{{msg}}&lt;/h1&gt;
&lt;school&gt;&lt;/school&gt;
&lt;/div&gt;
&lt;/body&gt;

&lt;script type=&quot;text/javascript&quot;&gt;
Vue.config.productionTip = false

const school = Vue.extend({
name:&#39;atguigu&#39;,
template:\`
&lt;div&gt;
&lt;h2&gt;学校名称：{{name}}&lt;/h2&gt;
&lt;h2&gt;学校地址：{{address}}&lt;/h2&gt;
&lt;/div&gt;
\`,
data(){
return {
name:&#39;尚硅谷&#39;,
address:&#39;北京&#39;
}
}
})

new Vue({
el:&#39;#root&#39;,
data:{
msg:&#39;欢迎学习Vue!&#39;
},
components:{
school
}
})
&lt;/script&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>效果：</strong></p><p><img src="https://img-blog.csdnimg.cn/img_convert/158a2f14811236167c85a4a6e11d4338.png" alt=""></p><p><strong>总结：</strong></p><ul><li><p>关于组件名：</p><ul><li><p>一个单词组成：</p><ul><li>第一种写法（首字母小写）：school</li><li>第二种写法（首字母大写）：School</li></ul></li><li><p>多个单词组成：</p><ul><li>第一种写法（kebab-case命名）：my-school</li><li>第二种写法（CamelCase命名）：MySchool （需要Vue脚手架支持）</li></ul></li><li><p>备注：</p><ul><li>组件名尽可能回避HTML中已有的元素名称，例如：h2、H2都不行</li><li>可以使用name配置项指定组件在开发者工具中呈现的名字</li></ul></li></ul></li><li><p>关于组件标签：</p><ul><li>第一种写法：<code>&lt;school&gt;&lt;/school&gt;</code></li><li>第二种写法：<code>&lt;school/&gt;</code></li><li>备注：不使用脚手架时，<code>&lt;school/&gt;</code>会导致后续组件不能渲染</li></ul></li><li><p>一个简写方式：<code>const school = Vue.extend(options)</code>可简写为：<code>const school = options</code></p></li></ul><h4 id="_2-2-3-组件的嵌套" tabindex="-1"><a class="header-anchor" href="#_2-2-3-组件的嵌套" aria-hidden="true">#</a> 2.2.3. 组件的嵌套</h4><p><img src="http://r9gm6xy0b.hb-bkt.clouddn.com/vue/20210811215301.png" alt="组件的嵌套"></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;meta charset=&quot;UTF-8&quot; /&gt;
&lt;title&gt;组件的嵌套&lt;/title&gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;../js/vue.js&quot;&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div id=&quot;root&quot;&gt;
&lt;/div&gt;
&lt;/body&gt;

&lt;script type=&quot;text/javascript&quot;&gt;
Vue.config.productionTip = false

//定义student组件
const student = Vue.extend({
template:\`
&lt;div&gt;
&lt;h2&gt;学生名称：{{name}}&lt;/h2&gt;
&lt;h2&gt;学生年龄：{{age}}&lt;/h2&gt;
&lt;/div&gt;
\`,
data(){
return {
name:&#39;JOJO&#39;,
age:20
}
}
})

//定义school组件
const school = Vue.extend({
template:\`
&lt;div&gt;
&lt;h2&gt;学校名称：{{name}}&lt;/h2&gt;
&lt;h2&gt;学校地址：{{address}}&lt;/h2&gt;
&lt;student&gt;&lt;/student&gt;
&lt;/div&gt;
\`,
components:{
student
},
data(){
return {
name:&#39;尚硅谷&#39;,
address:&#39;北京&#39;
}
}
})

//定义hello组件
const hello = Vue.extend({
template:\`
&lt;h1&gt;{{msg}}&lt;/h1&gt;
\`,
data(){
return {
msg:&quot;欢迎学习尚硅谷Vue教程！&quot;
}
}
})

//定义app组件
const app = Vue.extend({
template:\`
&lt;div&gt;
&lt;hello&gt;&lt;/hello&gt;
&lt;school&gt;&lt;/school&gt;
&lt;/div&gt;
\`,
components:{
school,
hello
}
})

//创建vm
new Vue({
template:\`
&lt;app&gt;&lt;/app&gt;
\`,
el:&#39;#root&#39;,
components:{
app
}
})
&lt;/script&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>效果：</strong></p><p><img src="https://img-blog.csdnimg.cn/img_convert/3afaa72855321b4966a65c7fce438656.png" alt=""></p><h4 id="_2-2-4-vuecomponent" tabindex="-1"><a class="header-anchor" href="#_2-2-4-vuecomponent" aria-hidden="true">#</a> 2.2.4. VueComponent</h4><p>关于VueComponent：</p><ol><li><p>school组件本质是一个名为<code>VueComponent</code>的构造函数，且不是程序员定义的，是<code>Vue.extend</code>生成的</p></li><li><p>我们只需要写<code>&lt;school/&gt;</code>或<code>&lt;school&gt;&lt;/school&gt;</code>，Vue解析时会帮我们创建school组件的实例对象，即Vue帮我们执行的：<code>new VueComponent(options)</code></p></li><li><p>特别注意：每次调用<code>Vue.extend</code>，返回的都是一个全新的VueComponent！</p></li><li><p>关于this指向：</p><ol><li>组件配置中：<code>data</code>函数、<code>methods</code>中的函数、<code>watch</code>中的函数、<code>computed</code>中的函数 它们的this均是VueComponent实例对象</li><li><code>new Vue(options)</code>配置中：<code>data</code>函数、<code>methods</code>中的函数、<code>watch</code>中的函数、<code>computed</code>中的函数 它们的this均是Vue实例对象</li></ol></li><li><p><code>VueComponent</code>的实例对象，以后简称vc（也可称之为：组件实例对象）</p><p><code>Vue</code>的实例对象，以后简称vm</p><blockquote><p>只有在本笔记中<code>VueComponent</code>的实例对象才简称为vc</p></blockquote></li></ol><h4 id="_2-2-5-一个重要的内置关系" tabindex="-1"><a class="header-anchor" href="#_2-2-5-一个重要的内置关系" aria-hidden="true">#</a> 2.2.5. 一个重要的内置关系</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;meta charset=&quot;UTF-8&quot; /&gt;
&lt;title&gt;一个重要的内置关系&lt;/title&gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;../js/vue.js&quot;&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div id=&quot;root&quot;&gt;
&lt;school&gt;&lt;/school&gt;
&lt;/div&gt;
&lt;/body&gt;

&lt;script type=&quot;text/javascript&quot;&gt;
Vue.config.productionTip = false
Vue.prototype.x = 99

const school = Vue.extend({
name:&#39;school&#39;,
template:\`
&lt;div&gt;
&lt;h2&gt;学校名称：{{name}}&lt;/h2&gt;
&lt;h2&gt;学校地址：{{address}}&lt;/h2&gt;
&lt;button @click=&quot;showX&quot;&gt;点我输出x&lt;/button&gt;
&lt;/div&gt;
\`,
data(){
return {
name:&#39;尚硅谷&#39;,
address:&#39;北京&#39;
}
},
methods: {
showX(){
console.log(this.x)
}
},
})

const vm = new Vue({
el:&#39;#root&#39;,
data:{
msg:&#39;你好&#39;
},
components:{school}
})
&lt;/script&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>效果：</strong></p><p><img src="https://img-blog.csdnimg.cn/img_convert/7aaaf0bb73cc55c71e5ae10903a29e4d.png" alt=""></p><p><strong>总结：</strong></p><p><img src="https://img-blog.csdnimg.cn/img_convert/8d8b0e2d24b9fd26ff33a600fe0afd7d.png" alt="image-20210730113353890"></p><ol><li>一个重要的内置关系：<code>VueComponent.prototype.__proto__ === Vue.prototype</code></li><li>为什么要有这个关系：让组件实例对象（vc）可以访问到 Vue 原型上的属性、方法</li></ol><h3 id="_2-3-单文件组件" tabindex="-1"><a class="header-anchor" href="#_2-3-单文件组件" aria-hidden="true">#</a> 2.3. 单文件组件</h3><ul><li><p>School.vue:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
    &lt;div id=&#39;Demo&#39;&gt;
        &lt;h2&gt;学校名称：{{name}}&lt;/h2&gt;
        &lt;h2&gt;学校地址：{{address}}&lt;/h2&gt;
        &lt;button @click=&quot;showName&quot;&gt;点我提示学校名&lt;/button&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
    export default {
        name:&#39;School&#39;,
        data() {
            return {
                name:&#39;尚硅谷&#39;,
                address:&#39;北京&#39;
            }
        },
        methods: {
            showName(){
                alert(this.name)
            }
        },
    }
&lt;/script&gt;

&lt;style&gt;
    #Demo{
        background: orange;
    }
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Student.vue:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
    &lt;div&gt;
        &lt;h2&gt;学生姓名：{{name}}&lt;/h2&gt;
        &lt;h2&gt;学生年龄：{{age}}&lt;/h2&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
    export default {
        name:&#39;Student&#39;,
        data() {
            return {
                name:&#39;JOJO&#39;,
                age:20
            }
        },
    }
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>App.vue:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
    &lt;div&gt;
        &lt;School&gt;&lt;/School&gt;
        &lt;Student&gt;&lt;/Student&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
    import School from &#39;./School.vue&#39;
    import Student from &#39;./Student.vue&#39;

    export default {
        name:&#39;App&#39;,
        components:{
            School,
            Student
        }
    }
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>main.js:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import App from &#39;./App.vue&#39;

new Vue({
    template:\`&lt;App&gt;&lt;/App&gt;\`,
    el:&#39;#root&#39;,
    components:{App}
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>index.html</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
    &lt;title&gt;单文件组件练习&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;div id=&quot;root&quot;&gt;&lt;/div&gt;
    &lt;script src=&quot;../../js/vue.js&quot;&gt;&lt;/script&gt;
    &lt;script src=&quot;./main.js&quot;&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="_3-使用vue-cli脚手架" tabindex="-1"><a class="header-anchor" href="#_3-使用vue-cli脚手架" aria-hidden="true">#</a> 3. 使用Vue CLI脚手架</h2><h3 id="_3-1-初始化脚手架" tabindex="-1"><a class="header-anchor" href="#_3-1-初始化脚手架" aria-hidden="true">#</a> 3.1. 初始化脚手架</h3><h4 id="_3-1-1-说明" tabindex="-1"><a class="header-anchor" href="#_3-1-1-说明" aria-hidden="true">#</a> 3.1.1. 说明</h4>`,141),j=i("li",null,"Vue 脚手架是 Vue 官方提供的标准化开发工具（开发平台）",-1),S=i("li",null,"最新的版本是 4.x",-1),T={href:"https://cli.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"},M=d(`<h4 id="_3-1-2-具体步骤" tabindex="-1"><a class="header-anchor" href="#_3-1-2-具体步骤" aria-hidden="true">#</a> 3.1.2. 具体步骤</h4><ol><li>如果下载缓慢请配置 npm 淘宝镜像：<code>npm config set registry http://registry.npm.taobao.org</code></li><li>全局安装@vue/cli：<code>npm install -g @vue/cli</code></li><li>切换到你要创建项目的目录，然后使用命令创建项目：<code>vue create xxxx</code></li><li>选择使用vue的版本</li><li>启动项目：<code>npm run serve</code></li><li>暂停项目：Ctrl+C</li></ol><blockquote><p>Vue 脚手架隐藏了所有 webpack 相关的配置，若想查看具体的 webpakc 配置，请执行：</p><p><code>vue inspect &gt; output.js</code></p></blockquote><h4 id="_3-1-3-分析脚手架结构" tabindex="-1"><a class="header-anchor" href="#_3-1-3-分析脚手架结构" aria-hidden="true">#</a> 3.1.3. 分析脚手架结构</h4><p>脚手架文件结构：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.文件目录
├── node_modules 
├── public
│   ├── favicon.ico: 页签图标
│   └── index.html: 主页面
├── src
│   ├── assets: 存放静态资源
│   │   └── logo.png
│   │── component: 存放组件
│   │   └── HelloWorld.vue
│   │── App.vue: 汇总所有组件
│   └── main.js: 入口文件
├── .gitignore: git版本管制忽略的配置
├── babel.config.js: babel的配置文件
├── package.json: 应用包配置文件 
├── README.md: 应用描述文件
└── package-lock.json: 包版本控制文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p><code>src/components/School.vue</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
    &lt;div id=&#39;Demo&#39;&gt;
        &lt;h2&gt;学校名称：{{name}}&lt;/h2&gt;
        &lt;h2&gt;学校地址：{{address}}&lt;/h2&gt;
        &lt;button @click=&quot;showName&quot;&gt;点我提示学校名&lt;/button&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
    export default {
        name:&#39;School&#39;,
        data() {
            return {
                name:&#39;尚硅谷&#39;,
                address:&#39;北京&#39;
            }
        },
        methods: {
            showName() {
                alert(this.name)
            }
        },
    }
&lt;/script&gt;

&lt;style&gt;
    #Demo{
        background: orange;
    }
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>src/components/Student.vue</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
    &lt;div&gt;
        &lt;h2&gt;学生姓名：{{name}}&lt;/h2&gt;
        &lt;h2&gt;学生年龄：{{age}}&lt;/h2&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
    export default {
        name:&#39;Student&#39;,
        data() {
            return {
                name:&#39;JOJO&#39;,
                age:20
            }
        },
    }
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>src/App.vue</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
    &lt;div&gt;
        &lt;School&gt;&lt;/School&gt;
        &lt;Student&gt;&lt;/Student&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
    import School from &#39;./components/School.vue&#39;
    import Student from &#39;./components/Student.vue&#39;

    export default {
        name:&#39;App&#39;,
        components:{
            School,
            Student
        }
    }
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>src/main.js</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import Vue from &#39;vue&#39;
import App from &#39;./App.vue&#39;

Vue.config.productionTip = false

new Vue({
    el:&#39;#app&#39;,
    render: h =&gt; h(App),
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>public/index.html</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;&quot;&gt;
    &lt;head&gt;
        &lt;meta charset=&quot;UTF-8&quot;&gt;
        &lt;!-- 针对IE浏览器的特殊配置，含义是让IE浏览器以最高渲染级别渲染页面 --&gt;
        &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;
        &lt;!-- 开启移动端的理想端口 --&gt;
        &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
        &lt;!-- 配置页签图标 --&gt;
        &lt;link rel=&quot;icon&quot; href=&quot;&lt;%= BASE_URL %&gt;favicon.ico&quot;&gt;
        &lt;!-- 配置网页标题 --&gt;
        &lt;title&gt;&lt;%= htmlWebpackPlugin.options.title %&gt;&lt;/title&gt;
    &lt;/head&gt;
    &lt;body&gt;
        &lt;!-- 容器 --&gt;
        &lt;div id=&quot;app&quot;&gt;&lt;/div&gt;
    &lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>效果：</strong></p><p><img src="https://img-blog.csdnimg.cn/img_convert/9c189fcbb81857769e86dff2b22d8860.png" alt=""></p><h4 id="_3-1-4-render函数" tabindex="-1"><a class="header-anchor" href="#_3-1-4-render函数" aria-hidden="true">#</a> 3.1.4. render函数</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import Vue from &#39;vue&#39;
import App from &#39;./App.vue&#39;

Vue.config.productionTip = false

new Vue({
    el:&#39;#app&#39;,
    // 简写形式
render: h =&gt; h(App),
    // 完整形式
// render(createElement){
//     return createElement(App)
// }
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>总结：</strong></p><p>关于不同版本的函数：</p><ol><li><p><code>vue.js</code> 与 <code>vue.runtime.xxx.js</code>的区别：</p><ol><li><code>vue.js</code> 是完整版的 Vue，包含：核心功能+模板解析器</li><li><code>vue.runtime.xxx.js</code> 是运行版的 Vue，只包含核心功能，没有模板解析器</li></ol></li><li><p>因为 <code>vue.runtime.xxx.js</code> 没有模板解析器，所以不能使用 <code>template</code> 配置项，需要使用 <code>render</code>函数接收到的<code>createElement</code> 函数去指定具体内容</p></li></ol><h4 id="_3-1-5-修改默认配置" tabindex="-1"><a class="header-anchor" href="#_3-1-5-修改默认配置" aria-hidden="true">#</a> 3.1.5. 修改默认配置</h4>`,25),O=i("li",null,[i("code",null,"vue.config.js"),e(" 是一个可选的配置文件，如果项目的（和 "),i("code",null,"package.json"),e(" 同级的）根目录中存在这个文件，那么它会被 "),i("code",null,"@vue/cli-service"),e(" 自动加载")],-1),D=i("code",null,"vue.config.js",-1),$={href:"https://cli.vuejs.org/zh/config/#vue-config-js",target:"_blank",rel:"noopener noreferrer"},C=d(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>module.exports = {
    pages: {
        index: {
            // 入口
            entry: &#39;src/index/main.js&#39;
        }
    },
  // 关闭语法检查
  lineOnSave:false
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-ref属性" tabindex="-1"><a class="header-anchor" href="#_3-2-ref属性" aria-hidden="true">#</a> 3.2. ref属性</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
    &lt;div&gt;
        &lt;h1 ref=&quot;title&quot;&gt;{{msg}}&lt;/h1&gt;
        &lt;School ref=&quot;sch&quot;/&gt;
        &lt;button @click=&quot;show&quot; ref=&quot;btn&quot;&gt;点我输出ref&lt;/button&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
    import School from &#39;./components/School.vue&#39;
    export default {
        name:&#39;App&#39;,
        components: { School },
        data() {
            return {
                msg:&#39;欢迎学习Vue！&#39;
            }
        },
        methods:{
            show(){
                console.log(this.$refs.title)
                console.log(this.$refs.sch)
                console.log(this.$refs.btn)
            }
        }
    }
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>效果：</strong></p><p><img src="https://img-blog.csdnimg.cn/img_convert/77c9ba157d4df06e760cb27a693e8684.png" alt=""></p><p><strong>总结：</strong></p><p><code>ref</code>属性：</p><ol><li>被用来给元素或子组件注册引用信息（id的替代者）</li><li>应用在<code>html</code>标签上获取的是真实DOM元素，应用在组件标签上获取的是组件实例对象（vc）</li><li>使用方式： <ol><li>打标识：<code>&lt;h1 ref=&quot;xxx&quot;&gt;&lt;/h1&gt;</code> 或 <code>&lt;School ref=&quot;xxx&quot;&gt;&lt;/School&gt;</code></li><li>获取：<code>this.$refs.xxx</code></li></ol></li></ol><h3 id="_3-3-props配置项" tabindex="-1"><a class="header-anchor" href="#_3-3-props配置项" aria-hidden="true">#</a> 3.3. props配置项</h3><p><code>src/App.vue</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
    &lt;div&gt;
        &lt;Student name=&quot;JOJO&quot; sex=&quot;男酮&quot; :age=&quot;20&quot; /&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
    import Student from &#39;./components/Student.vue&#39;
    export default {
        name:&#39;App&#39;,
        components: { Student },
    }
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>src/components/Student.vue</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
    &lt;div&gt;
        &lt;h1&gt;{{msg}}&lt;/h1&gt;
        &lt;h2&gt;学生姓名：{{name}}&lt;/h2&gt;
        &lt;h2&gt;学生性别：{{sex}}&lt;/h2&gt;
        &lt;h2&gt;学生年龄：{{age}}&lt;/h2&gt;     
    &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
    export default {
        name:&#39;Student&#39;,
        data() {
            return {
                msg:&quot;我是一名来自枝江大学的男酮，嘿嘿，我的金轮~~&quot;,
            }
        },
        // 简单声明接收
// props:[&#39;name&#39;,&#39;age&#39;,&#39;sex&#39;]

        // 接收的同时对数据进行类型限制
/* props:{
name:String,
age:Number,
sex:String
} */

        // 接收的同时对数据进行类型限制 + 指定默认值 + 限制必要性
props:{
name:{
type:String,
required:true,
},
age:{
type:Number,
default:99
},
sex:{
type:String,
required:true
}
}
    }
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>效果：</strong></p><p><img src="https://img-blog.csdnimg.cn/img_convert/632798d37c26a81e134bddf2c2df436a.png" alt=""></p><p><strong>总结：</strong></p><p><code>props</code>配置项：</p><ol><li><p>功能：让组件接收外部传过来的数据</p></li><li><p>传递数据：<code>&lt;Demo name=&quot;xxx&quot;/&gt;</code></p></li><li><p>接收数据：</p><ol><li><p>第一种方式（只接收）：<code>props:[&#39;name&#39;]</code></p></li><li><p>第二种方式（限制数据类型）：<code>props:{name:String}</code></p></li><li><p>第三种方式（限制类型、限制必要性、指定默认值）：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>props:{
    name:{
    type:String, //类型
        required:true, //必要性
        default:&#39;JOJO&#39; //默认值
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol></li></ol><blockquote><p>props是只读的，Vue底层会监测你对props的修改，如果进行了修改，就会发出警告，若业务需求确实需要修改，那么请复制props的内容到data中一份，然后去修改data中的数据</p></blockquote><h3 id="_3-4-mixin混入" tabindex="-1"><a class="header-anchor" href="#_3-4-mixin混入" aria-hidden="true">#</a> 3.4. mixin混入</h3><p><strong>局部混入：</strong></p><p><code>src/mixin.js</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>export const mixin = {
    methods: {
        showName() {
            alert(this.name)
        }
    },
    mounted() {
        console.log(&quot;你好呀~&quot;)
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>src/components/School.vue</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
    &lt;div&gt;
        &lt;h2 @click=&quot;showName&quot;&gt;学校姓名：{{name}}&lt;/h2&gt;
        &lt;h2&gt;学校地址：{{address}}&lt;/h2&gt;   
    &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
    //引入混入
    import {mixin} from &#39;../mixin&#39;
    
    export default {
        name:&#39;School&#39;,
        data() {
            return {
                name:&#39;尚硅谷&#39;,
address:&#39;北京&#39;
            }
        },
        mixins:[mixin]
    }
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>src/components/Student.vue</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
    &lt;div&gt;
        &lt;h2 @click=&quot;showName&quot;&gt;学生姓名：{{name}}&lt;/h2&gt;
        &lt;h2&gt;学生性别：{{sex}}&lt;/h2&gt;   
    &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
    //引入混入
    import {mixin} from &#39;../mixin&#39;
    
    export default {
        name:&#39;Student&#39;,
        data() {
            return {
                name:&#39;JOJO&#39;,
sex:&#39;男&#39;
            }
        },
mixins:[mixin]
    }
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>src/App.vue</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
    &lt;div&gt;
        &lt;School/&gt;
        &lt;hr/&gt;
        &lt;Student/&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
    import Student from &#39;./components/Student.vue&#39;
    import School from &#39;./components/School.vue&#39;

    export default {
        name:&#39;App&#39;,
        components: { Student,School },
    }
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>效果：</strong></p><p><img src="https://img-blog.csdnimg.cn/img_convert/a948a67cd2f64b123ea0caa0586b7570.png" alt=""></p><hr><p><strong>全局混入：</strong></p><p><code>src/main.js</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import Vue from &#39;vue&#39;
import App from &#39;./App.vue&#39;
import {mixin} from &#39;./mixin&#39;

Vue.config.productionTip = false
Vue.mixin(mixin)

new Vue({
    el:&quot;#app&quot;,
    render: h =&gt; h(App)
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>效果：</strong></p><p><img src="https://img-blog.csdnimg.cn/img_convert/1bc7ee57aafe016af0bcf8e117d09c84.png" alt=""></p><hr><p><strong>总结：</strong></p><p><code>mixin</code>（混入）：</p><ol><li><p>功能：可以把多个组件共用的配置提取成一个混入对象</p></li><li><p>使用方式：</p><ol><li><p>定义混入：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const mixin = {
    data(){....},
    methods:{....}
    ....
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>使用混入：</p><ol><li>全局混入：<code>Vue.mixin(xxx)</code></li><li>局部混入：<code>mixins:[&#39;xxx&#39;]</code></li></ol></li></ol></li><li><p>备注：</p><ol><li><p>组件和混入对象含有同名选项时，这些选项将以恰当的方式进行“合并”，在发生冲突时以组件优先。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var mixin = {
data: function () {
return {
    message: &#39;hello&#39;,
            foo: &#39;abc&#39;
    }
  }
}

new Vue({
  mixins: [mixin],
  data () {
    return {
      message: &#39;goodbye&#39;,
            bar: &#39;def&#39;
    }
    },
  created () {
    console.log(this.$data)
    // =&gt; { message: &quot;goodbye&quot;, foo: &quot;abc&quot;, bar: &quot;def&quot; }
  }
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>同名生命周期钩子将合并为一个数组，因此都将被调用。另外，混入对象的钩子将在组件自身钩子之前调用。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var mixin = {
  created () {
    console.log(&#39;混入对象的钩子被调用&#39;)
  }
}

new Vue({
  mixins: [mixin],
  created () {
    console.log(&#39;组件钩子被调用&#39;)
  }
})

// =&gt; &quot;混入对象的钩子被调用&quot;
// =&gt; &quot;组件钩子被调用&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol></li></ol><h3 id="_3-5-plugin插件" tabindex="-1"><a class="header-anchor" href="#_3-5-plugin插件" aria-hidden="true">#</a> 3.5. plugin插件</h3><p><code>src/plugin.js</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>export default {
install(Vue,x,y,z){
console.log(x,y,z)
//全局过滤器
Vue.filter(&#39;mySlice&#39;,function(value){
return value.slice(0,4)
})

//定义混入
Vue.mixin({
data() {
return {
x:100,
y:200
}
},
})

//给Vue原型上添加一个方法（vm和vc就都能用了）
Vue.prototype.hello = ()=&gt;{alert(&#39;你好啊&#39;)}
}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>src/main.js</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import Vue from &#39;vue&#39;
import App from &#39;./App.vue&#39;
import plugin from &#39;./plugin&#39;

Vue.config.productionTip = false
Vue.use(plugin,1,2,3)

new Vue({
    el:&quot;#app&quot;,
    render: h =&gt; h(App)
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>src/components/School.vue</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
    &lt;div&gt;
        &lt;h2&gt;学校姓名：{{name | mySlice}}&lt;/h2&gt;
        &lt;h2&gt;学校地址：{{address}}&lt;/h2&gt;   
    &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
    export default {
        name:&#39;School&#39;,
        data() {
            return {
                name:&#39;尚硅谷atguigu&#39;,
address:&#39;北京&#39;
            }
        }
    }
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>src/components/Student.vue</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
    &lt;div&gt;
        &lt;h2&gt;学生姓名：{{name}}&lt;/h2&gt;
        &lt;h2&gt;学生性别：{{sex}}&lt;/h2&gt; 
        &lt;button @click=&quot;test&quot;&gt;点我测试hello方法&lt;/button&gt;  
    &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
    export default {
        name:&#39;Student&#39;,
        data() {
            return {
                name:&#39;JOJO&#39;,
sex:&#39;男&#39;
            }
        },
        methods:{
            test() {
                this.hello()
            }
        }
    }
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>效果：</strong></p><p><img src="https://img-blog.csdnimg.cn/img_convert/474743fd027e8014242033814b84123d.png" alt=""></p><p><strong>总结：</strong></p><p>插件：</p><ol><li><p>功能：用于增强Vue</p></li><li><p>本质：包含install方法的一个对象，install的第一个参数是Vue，第二个以后的参数是插件使用者传递的数据</p></li><li><p>定义插件：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>plugin.install = function (Vue, options) {
        // 1. 添加全局过滤器
        Vue.filter(....)
    
        // 2. 添加全局指令
        Vue.directive(....)
    
        // 3. 配置全局混入
        Vue.mixin(....)
    
        // 4. 添加实例方法
        Vue.prototype.$myMethod = function () {...}
        Vue.prototype.$myProperty = xxxx
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>使用插件：<code>Vue.use(plugin)</code></p></li></ol><h3 id="_3-6-scoped样式" tabindex="-1"><a class="header-anchor" href="#_3-6-scoped样式" aria-hidden="true">#</a> 3.6. scoped样式</h3><p><code>src/components/School.vue</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
    &lt;div class=&quot;demo&quot;&gt;
        &lt;h2&gt;学校姓名：{{name}}&lt;/h2&gt;
        &lt;h2&gt;学校地址：{{address}}&lt;/h2&gt;   
    &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
    export default {
        name:&#39;School&#39;,
        data() {
            return {
                name:&#39;尚硅谷&#39;,
address:&#39;北京&#39;
            }
        }
    }
&lt;/script&gt;

&lt;style scoped&gt;
    .demo{
        background-color: blueviolet;
    }
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>src/components/Student.vue</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
    &lt;div class=&quot;demo&quot;&gt;
        &lt;h2&gt;学生姓名：{{name}}&lt;/h2&gt;
        &lt;h2&gt;学生性别：{{sex}}&lt;/h2&gt; 
    &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
    export default {
        name:&#39;Student&#39;,
        data() {
            return {
                name:&#39;JOJO&#39;,
sex:&#39;男&#39;
            }
        }
    }
&lt;/script&gt;

&lt;style scoped&gt;
    .demo{
        background-color: chartreuse;
    }
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>src/App.vue</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
    &lt;div&gt;
        &lt;School/&gt;
        &lt;Student/&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
    import Student from &#39;./components/Student.vue&#39;
    import School from &#39;./components/School.vue&#39;

    export default {
        name:&#39;App&#39;,
        components: { Student,School },
    }
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>效果：</strong></p><p><img src="https://img-blog.csdnimg.cn/img_convert/712b98a38f073955809afafe1133f5da.png" alt=""></p><p><strong>总结：</strong></p><p><code>scoped</code>样式：</p><ol><li>作用：让样式在局部生效，防止冲突</li><li>写法：<code>&lt;style scoped&gt;</code></li></ol><blockquote><p><code>scoped</code>样式一般不会在<code>App.vue</code>中使用</p></blockquote><h3 id="_3-7-todo-list案例" tabindex="-1"><a class="header-anchor" href="#_3-7-todo-list案例" aria-hidden="true">#</a> 3.7. Todo-List案例</h3><p><code>src/components/MyHeader.vue</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
    &lt;div class=&quot;todo-header&quot;&gt;
        &lt;input type=&quot;text&quot; placeholder=&quot;请输入你的任务名称，按回车键确认&quot; @keydown.enter=&quot;add&quot; v-model=&quot;title&quot;/&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
    import {nanoid} from &#39;nanoid&#39;
    export default {
        name:&#39;MyHeader&#39;,
        data() {
            return {
                title:&#39;&#39;
            }
        },
        methods:{
            add(){
                if(!this.title.trim()) return
                const todoObj = {id:nanoid(),title:this.title,done:false}
                this.addTodo(todoObj)
                this.title = &#39;&#39;
            }
        },
        props:[&#39;addTodo&#39;]
    }
&lt;/script&gt;

&lt;style scoped&gt;
    .todo-header input {
        width: 560px;
        height: 28px;
        font-size: 14px;
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 4px 7px;
    }

    .todo-header input:focus {
        outline: none;
        border-color: rgba(82, 168, 236, 0.8);
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
    }
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>src/components/MyItem.vue</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
    &lt;li&gt;
        &lt;label&gt;
            &lt;input type=&quot;checkbox&quot; :checked=&quot;todo.done&quot; @click=&quot;handleCheck(todo.id)&quot;/&gt;
            &lt;span&gt;{{todo.title}}&lt;/span&gt;
        &lt;/label&gt;
        &lt;button class=&quot;btn btn-danger&quot; @click=&quot;handleDelete(todo.id,todo.title)&quot;&gt;删除&lt;/button&gt;
    &lt;/li&gt;
&lt;/template&gt;

&lt;script&gt;
    export default {
        name:&#39;MyItem&#39;,
        props:[&#39;todo&#39;,&#39;checkTodo&#39;,&#39;deleteTodo&#39;],
        methods:{
            handleCheck(id){
                this.checkTodo(id)
            },
            handleDelete(id,title){
                if(confirm(&quot;确定删除任务：&quot;+title+&quot;吗？&quot;)){
                    this.deleteTodo(id)
                }
            }
        }
    }
&lt;/script&gt;

&lt;style scoped&gt;
    li {
        list-style: none;
        height: 36px;
        line-height: 36px;
        padding: 0 5px;
        border-bottom: 1px solid #ddd;
    }

    li label {
        float: left;
        cursor: pointer;
    }

    li label li input {
        vertical-align: middle;
        margin-right: 6px;
        position: relative;
        top: -1px;
    }

    li button {
        float: right;
        display: none;
        margin-top: 3px;
    }

    li:before {
        content: initial;
    }

    li:last-child {
        border-bottom: none;
    }

    li:hover {
        background-color: #eee;
    }

    li:hover button{
        display: block;
    }
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>src/components/MyList.vue</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
    &lt;ul class=&quot;todo-main&quot;&gt;
        &lt;MyItem 
            v-for=&quot;todo in todos&quot; 
            :key=&quot;todo.id&quot; 
            :todo=&quot;todo&quot; 
            :checkTodo=&quot;checkTodo&quot;
            :deleteTodo=&quot;deleteTodo&quot;
        /&gt;
    &lt;/ul&gt;
&lt;/template&gt;

&lt;script&gt;
    import MyItem from &#39;./MyItem.vue&#39;

    export default {
        name:&#39;MyList&#39;,
        components:{MyItem},
        props:[&#39;todos&#39;,&#39;checkTodo&#39;,&#39;deleteTodo&#39;]
    }
&lt;/script&gt;

&lt;style scoped&gt;
    .todo-main {
        margin-left: 0px;
        border: 1px solid #ddd;
        border-radius: 2px;
        padding: 0px;
    }

    .todo-empty {
        height: 40px;
        line-height: 40px;
        border: 1px solid #ddd;
        border-radius: 2px;
        padding-left: 5px;
        margin-top: 10px;
    }
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>src/components/MyFooter.vue</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
    &lt;div class=&quot;todo-footer&quot; v-show=&quot;total&quot;&gt;
        &lt;label&gt;
            &lt;input type=&quot;checkbox&quot; v-model=&quot;isAll&quot;/&gt;
        &lt;/label&gt;
        &lt;span&gt;
            &lt;span&gt;已完成{{doneTotal}}&lt;/span&gt; / 全部{{total}}
        &lt;/span&gt;
        &lt;button class=&quot;btn btn-danger&quot; @click=&quot;clearAll&quot;&gt;清除已完成任务&lt;/button&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
    export default {
        name:&#39;MyFooter&#39;,
        props:[&#39;todos&#39;,&#39;checkAllTodo&#39;,&#39;clearAllTodo&#39;],
        computed:{
            doneTotal(){
                return this.todos.reduce((pre,todo)=&gt; pre + (todo.done ? 1 : 0) ,0)
            },
            total(){
                return this.todos.length
            },
            isAll:{
                get(){
                    return this.total === this.doneTotal &amp;&amp; this.total &gt; 0
                },
                set(value){
                    this.checkAllTodo(value)
                }
            }
        },
        methods:{
            clearAll(){
                this.clearAllTodo()
            }
        }
    }
&lt;/script&gt;

&lt;style scoped&gt;
    .todo-footer {
        height: 40px;
        line-height: 40px;
        padding-left: 6px;
        margin-top: 5px;
        }

    .todo-footer label {
        display: inline-block;
        margin-right: 20px;
        cursor: pointer;
    }

    .todo-footer label input {
        position: relative;
        top: -1px;
        vertical-align: middle;
        margin-right: 5px;
    }

    .todo-footer button {
        float: right;
        margin-top: 5px;
    }
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>src/App.vue</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
    &lt;div id=&quot;root&quot;&gt;
        &lt;div class=&quot;todo-container&quot;&gt;
            &lt;div class=&quot;todo-wrap&quot;&gt;
            &lt;MyHeader :addTodo=&quot;addTodo&quot;/&gt;
            &lt;MyList :todos=&quot;todos&quot; :checkTodo=&quot;checkTodo&quot; :deleteTodo=&quot;deleteTodo&quot;/&gt;
            &lt;MyFooter :todos=&quot;todos&quot; :checkAllTodo=&quot;checkAllTodo&quot; :clearAllTodo=&quot;clearAllTodo&quot;/&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
    import MyHeader from &#39;./components/MyHeader.vue&#39;
    import MyList from &#39;./components/MyList.vue&#39;
    import MyFooter from &#39;./components/MyFooter.vue&#39;

    export default {
        name:&#39;App&#39;,
        components: { MyHeader,MyList,MyFooter },
        data() {
            return {
                todos:[
                    {id:&#39;001&#39;,title:&#39;抽烟&#39;,done:false},
                    {id:&#39;002&#39;,title:&#39;喝酒&#39;,done:false},
                    {id:&#39;003&#39;,title:&#39;烫头&#39;,done:false},
                ]
            }
        },
        methods:{
            //添加一个todo
            addTodo(todoObj){
                this.todos.unshift(todoObj)
            },
            //勾选or取消勾选一个todo
            checkTodo(id){
                this.todos.forEach((todo)=&gt;{
                    if(todo.id === id) todo.done = !todo.done
                })
            },
            //删除一个todo
            deleteTodo(id){
                this.todos = this.todos.filter(todo =&gt; todo.id !== id)
            },
            //全选or取消勾选
            checkAllTodo(done){
                this.todos.forEach(todo =&gt; todo.done = done)
            },
            //删除已完成的todo
            clearAllTodo(){
                this.todos = this.todos.filter(todo =&gt; !todo.done)
            }
        }
    }
&lt;/script&gt;

&lt;style&gt;
    body {
    background: #fff;
    }

    .btn {
        display: inline-block;
        padding: 4px 12px;
        margin-bottom: 0;
        font-size: 14px;
        line-height: 20px;
        text-align: center;
        vertical-align: middle;
        cursor: pointer;
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
        border-radius: 4px;
    }

    .btn-danger {
        color: #fff;
        background-color: #da4f49;
        border: 1px solid #bd362f;
    }

    .btn-danger:hover {
        color: #fff;
        background-color: #bd362f;
    }

    .btn:focus {
    outline: none;
    }

    .todo-container {
        width: 600px;
        margin: 0 auto;
    }
    .todo-container .todo-wrap {
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
    }
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>效果：</strong></p><p><img src="http://r9gm6xy0b.hb-bkt.clouddn.com/vue/20210811215426.png" alt=""></p><p><strong>总结：</strong></p><ul><li><p>组件化编码流程：</p><ol><li>拆分静态组件：组件要按照功能点拆分，命名不要与html元素冲突</li><li>实现动态组件：考虑好数据的存放位置，数据是一个组件在用，还是一些组件在用： <ol><li>一个组件在用：放在组件自身即可</li><li>一些组件在用：放在他们共同的父组件上（状态提升）</li></ol></li><li>实现交互：从绑定事件开始</li></ol></li><li><p><code>props</code>适用于：</p><ol><li>父组件 ==&gt; 子组件 通信</li><li>子组件 ==&gt; 父组件 通信（要求父组件先给子组件一个函数）</li></ol></li><li><p>使用<code>v-model</code>时要切记：<code>v-model</code>绑定的值不能是<code>props</code>传过来的值，因为<code>props</code>是不可以修改的</p></li><li><p><code>props</code>传过来的若是对象类型的值，修改对象中的属性时Vue不会报错，但不推荐这样做</p></li></ul><h3 id="_3-8-webstorage" tabindex="-1"><a class="header-anchor" href="#_3-8-webstorage" aria-hidden="true">#</a> 3.8. WebStorage</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
    &lt;title&gt;localStorage&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h2&gt;localStorage&lt;/h2&gt;
    &lt;button onclick=&quot;saveDate()&quot;&gt;点我保存数据&lt;/button&gt;&lt;br/&gt;
    &lt;button onclick=&quot;readDate()&quot;&gt;点我读数据&lt;/button&gt;&lt;br/&gt;
    &lt;button onclick=&quot;deleteDate()&quot;&gt;点我删除数据&lt;/button&gt;&lt;br/&gt;
    &lt;button onclick=&quot;deleteAllDate()&quot;&gt;点我清空数据&lt;/button&gt;&lt;br/&gt;

    &lt;script&gt;
        let person = {name:&quot;JOJO&quot;,age:20}

        function saveDate(){
            localStorage.setItem(&#39;msg&#39;,&#39;localStorage&#39;)
            localStorage.setItem(&#39;person&#39;,JSON.stringify(person))
        }
        function readDate(){
            console.log(localStorage.getItem(&#39;msg&#39;))
            const person = localStorage.getItem(&#39;person&#39;)
            console.log(JSON.parse(person))
        }
        function deleteDate(){
            localStorage.removeItem(&#39;msg&#39;)
            localStorage.removeItem(&#39;person&#39;)
        }
        function deleteAllDate(){
            localStorage.clear()
        }
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
    &lt;title&gt;sessionStorage&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h2&gt;sessionStorage&lt;/h2&gt;
    &lt;button onclick=&quot;saveDate()&quot;&gt;点我保存数据&lt;/button&gt;&lt;br/&gt;
    &lt;button onclick=&quot;readDate()&quot;&gt;点我读数据&lt;/button&gt;&lt;br/&gt;
    &lt;button onclick=&quot;deleteDate()&quot;&gt;点我删除数据&lt;/button&gt;&lt;br/&gt;
    &lt;button onclick=&quot;deleteAllDate()&quot;&gt;点我清空数据&lt;/button&gt;&lt;br/&gt;

    &lt;script&gt;
        let person = {name:&quot;JOJO&quot;,age:20}

        function saveDate(){
            sessionStorage.setItem(&#39;msg&#39;,&#39;sessionStorage&#39;)
            sessionStorage.setItem(&#39;person&#39;,JSON.stringify(person))
        }
        function readDate(){
            console.log(sessionStorage.getItem(&#39;msg&#39;))
            const person = sessionStorage.getItem(&#39;person&#39;)
            console.log(JSON.parse(person))
        }
        function deleteDate(){
            sessionStorage.removeItem(&#39;msg&#39;)
            sessionStorage.removeItem(&#39;person&#39;)
        }
        function deleteAllDate(){
            sessionStorage.clear()
        }
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>总结：</strong></p><ol><li><p>存储内容大小一般支持5MB左右（不同浏览器可能还不一样）</p></li><li><p>浏览器端通过<code>Window.sessionStorage</code>和<code>Window.localStorage</code>属性来实现本地存储机制</p></li><li><p>相关API：</p><ol><li><code>xxxStorage.setItem(&#39;key&#39;, &#39;value&#39;)</code>：该方法接受一个键和值作为参数，会把键值对添加到存储中，如果键名存在，则更新其对应的值</li><li><code>xxxStorage.getItem(&#39;key&#39;)</code>：该方法接受一个键名作为参数，返回键名对应的值</li><li><code>xxxStorage.removeItem(&#39;key&#39;)</code>：该方法接受一个键名作为参数，并把该键名从存储中删除</li><li><code>xxxStorage.clear()</code>：该方法会清空存储中的所有数据</li></ol></li><li><p>备注：</p><ol><li><code>SessionStorage</code>存储的内容会随着浏览器窗口关闭而消失</li><li><code>LocalStorage</code>存储的内容，需要手动清除才会消失</li><li><code>xxxStorage.getItem(xxx)</code>如果 xxx 对应的 value 获取不到，那么<code>getItem()</code>的返回值是null</li><li><code>JSON.parse(null)</code>的结果依然是null</li></ol></li></ol><p><strong>使用本地存储优化Todo-List：</strong></p><p><code>src/App.vue</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
    &lt;div id=&quot;root&quot;&gt;
        &lt;div class=&quot;todo-container&quot;&gt;
            &lt;div class=&quot;todo-wrap&quot;&gt;
            &lt;MyHeader :addTodo=&quot;addTodo&quot;/&gt;
            &lt;MyList :todos=&quot;todos&quot; :checkTodo=&quot;checkTodo&quot; :deleteTodo=&quot;deleteTodo&quot;/&gt;
            &lt;MyFooter :todos=&quot;todos&quot; :checkAllTodo=&quot;checkAllTodo&quot; :clearAllTodo=&quot;clearAllTodo&quot;/&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
    import MyHeader from &#39;./components/MyHeader.vue&#39;
    import MyList from &#39;./components/MyList.vue&#39;
    import MyFooter from &#39;./components/MyFooter.vue&#39;

    export default {
        name:&#39;App&#39;,
        components: { MyHeader,MyList,MyFooter },
        data() {
            return {
                //若localStorage中存有&#39;todos&#39;则从localStorage中取出，否则初始为空数组
                todos:JSON.parse(localStorage.getItem(&#39;todos&#39;)) || []
            }
        },
        methods:{
            //添加一个todo
            addTodo(todoObj){
                this.todos.unshift(todoObj)
            },
            //勾选or取消勾选一个todo
            checkTodo(id){
                this.todos.forEach((todo)=&gt;{
                    if(todo.id === id) todo.done = !todo.done
                })
            },
            //删除一个todo
            deleteTodo(id){
                this.todos = this.todos.filter(todo =&gt; todo.id !== id)
            },
            //全选or取消勾选
            checkAllTodo(done){
                this.todos.forEach(todo =&gt; todo.done = done)
            },
            //删除已完成的todo
            clearAllTodo(){
                this.todos = this.todos.filter(todo =&gt; !todo.done)
            }
        },
        watch:{
            todos:{
                //由于todos是对象数组，所以必须开启深度监视才能发现数组中对象的变化
                deep:true,
                handler(value){
                    localStorage.setItem(&#39;todos&#39;,JSON.stringify(value))
                }
            }
        }
    }
&lt;/script&gt;

&lt;style&gt;
    body {
    background: #fff;
    }

    .btn {
        display: inline-block;
        padding: 4px 12px;
        margin-bottom: 0;
        font-size: 14px;
        line-height: 20px;
        text-align: center;
        vertical-align: middle;
        cursor: pointer;
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
        border-radius: 4px;
    }

    .btn-danger {
        color: #fff;
        background-color: #da4f49;
        border: 1px solid #bd362f;
    }

    .btn-danger:hover {
        color: #fff;
        background-color: #bd362f;
    }

    .btn:focus {
    outline: none;
    }

    .todo-container {
        width: 600px;
        margin: 0 auto;
    }
    .todo-container .todo-wrap {
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
    }
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-9-自定义事件" tabindex="-1"><a class="header-anchor" href="#_3-9-自定义事件" aria-hidden="true">#</a> 3.9. 自定义事件</h3><h4 id="_3-9-1-绑定" tabindex="-1"><a class="header-anchor" href="#_3-9-1-绑定" aria-hidden="true">#</a> 3.9.1. 绑定</h4><p><code>src/App.vue</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
    &lt;div class=&quot;app&quot;&gt;
        &lt;!-- 通过父组件给子组件传递函数类型的props实现子给父传递数据 --&gt;
        &lt;School :getSchoolName=&quot;getSchoolName&quot;/&gt;

        &lt;!-- 通过父组件给子组件绑定一个自定义事件实现子给父传递数据（第一种写法，使用@或v-on） --&gt;
        &lt;!-- &lt;Student @jojo=&quot;getStudentName&quot;/&gt; --&gt;

        &lt;!-- 通过父组件给子组件绑定一个自定义事件实现子给父传递数据（第二种写法，使用ref） --&gt;
&lt;Student ref=&quot;student&quot;/&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
    import Student from &#39;./components/Student.vue&#39;
    import School from &#39;./components/School.vue&#39;

    export default {
        name:&#39;App&#39;,
        components: { Student,School },
        methods:{
            getSchoolName(name){
                console.log(&quot;已收到学校的名称：&quot;+name)
            },
            getStudentName(name){
                console.log(&quot;已收到学生的姓名：&quot;+name)      
            }
        },
        mounted(){
            this.$refs.student.$on(&#39;jojo&#39;,this.getStudentName)
        }
    }
&lt;/script&gt;


&lt;style scoped&gt;
.app{
background-color: gray;
padding: 5px;
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>src/components/Student.vue</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
    &lt;div class=&quot;student&quot;&gt;
        &lt;h2&gt;学生姓名：{{name}}&lt;/h2&gt;
        &lt;h2&gt;学生性别：{{sex}}&lt;/h2&gt;
        &lt;button @click=&quot;sendStudentName&quot;&gt;点我传递学生姓名&lt;/button&gt; 
    &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
    export default {
        name:&#39;Student&#39;,
        data() {
            return {
                name:&#39;JOJO&#39;,
sex:&#39;男&#39;
            }
        },
        methods:{
            sendStudentName(){
                this.$emit(&#39;jojo&#39;,this.name)
            }
        }
    }
&lt;/script&gt;

&lt;style scoped&gt;
    .student{
        background-color: chartreuse;
        padding: 5px;
margin-top: 30px;
    }
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>效果：</strong></p><p><img src="https://img-blog.csdnimg.cn/img_convert/abb3d8f16d82121ae6c43893fdddfe78.png" alt=""></p><h4 id="_3-9-2-解绑" tabindex="-1"><a class="header-anchor" href="#_3-9-2-解绑" aria-hidden="true">#</a> 3.9.2. 解绑</h4><p><code>src/App.vue</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
    &lt;div class=&quot;app&quot;&gt;
        &lt;Student @jojo=&quot;getStudentName&quot;/&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
    import Student from &#39;./components/Student.vue&#39;

    export default {
        name:&#39;App&#39;,
        components: { Student },
        methods:{
            getStudentName(name){
                console.log(&quot;已收到学生的姓名：&quot;+name)      
            }
        }
    }
&lt;/script&gt;

&lt;style scoped&gt;
.app{
background-color: gray;
padding: 5px;
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>src/components/Student.vue</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
    &lt;div class=&quot;student&quot;&gt;
        &lt;h2&gt;学生姓名：{{name}}&lt;/h2&gt;
        &lt;h2&gt;学生性别：{{sex}}&lt;/h2&gt;
        &lt;button @click=&quot;sendStudentName&quot;&gt;点我传递学生姓名&lt;/button&gt; 
        &lt;button @click=&quot;unbind&quot;&gt;解绑自定义事件&lt;/button&gt; 
    &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
    export default {
        name:&#39;Student&#39;,
        data() {
            return {
                name:&#39;JOJO&#39;,
sex:&#39;男&#39;
            }
        },
        methods:{
            sendStudentName(){
                this.$emit(&#39;jojo&#39;,this.name)
            },
            unbind(){
                // 解绑一个自定义事件
                // this.$off(&#39;jojo&#39;)
                // 解绑多个自定义事件
                // this.$off([&#39;jojo&#39;])
                // 解绑所有自定义事件
                this.$off()
            }
        }
    }
&lt;/script&gt;

&lt;style scoped&gt;
    .student{
        background-color: chartreuse;
        padding: 5px;
margin-top: 30px;
    }
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>效果：</strong></p><p><img src="https://img-blog.csdnimg.cn/img_convert/a91744eceac076df5ecee13812d9b530.png" alt=""></p><hr><p><strong>总结：</strong></p><p>组件的自定义事件：</p><ol><li><p>一种组件间通信的方式，适用于：==子组件 &gt; 父组件</p></li><li><p>使用场景：A是父组件，B是子组件，B想给A传数据，那么就要在A中给B绑定自定义事件（事件的回调在A中）</p></li><li><p>绑定自定义事件：</p><ol><li><p>第一种方式，在父组件中：<code>&lt;Demo @atguigu=&quot;test&quot;/&gt;</code> 或 <code>&lt;Demo v-on:atguigu=&quot;test&quot;/&gt;</code></p></li><li><p>第二种方式，在父组件中：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;Demo ref=&quot;demo&quot;/&gt;
...
mounted(){
    this.$refs.demo.$on(&#39;atguigu&#39;,data)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>若想让自定义事件只能触发一次，可以使用<code>once</code>修饰符，或<code>$once</code>方法</p></li></ol></li><li><p>触发自定义事件：<code>this.$emit(&#39;atguigu&#39;,数据)</code></p></li><li><p>解绑自定义事件：<code>this.$off(&#39;atguigu&#39;)</code></p></li><li><p>组件上也可以绑定原生DOM事件，需要使用<code>native</code>修饰符</p></li><li><p>注意：通过<code>this.$refs.xxx.$on(&#39;atguigu&#39;,回调)</code>绑定自定义事件时，回调要么配置在methods中，要么用箭头函数，否则this指向会出问题！</p></li></ol><p><strong>使用自定义事件优化Todo-List：</strong></p><p><code>src/App.vue</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
    &lt;div id=&quot;root&quot;&gt;
        &lt;div class=&quot;todo-container&quot;&gt;
            &lt;div class=&quot;todo-wrap&quot;&gt;
            &lt;MyHeader @addTodo=&quot;addTodo&quot;/&gt;
            &lt;MyList :todos=&quot;todos&quot; :checkTodo=&quot;checkTodo&quot; :deleteTodo=&quot;deleteTodo&quot;/&gt;
            &lt;MyFooter :todos=&quot;todos&quot; @checkAllTodo=&quot;checkAllTodo&quot; @clearAllTodo=&quot;clearAllTodo&quot;/&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
    import MyHeader from &#39;./components/MyHeader.vue&#39;
    import MyList from &#39;./components/MyList.vue&#39;
    import MyFooter from &#39;./components/MyFooter.vue&#39;

    export default {
        name:&#39;App&#39;,
        components: { MyHeader,MyList,MyFooter },
        data() {
            return {
                todos:JSON.parse(localStorage.getItem(&#39;todos&#39;)) || []
            }
        },
        methods:{
            //添加一个todo
            addTodo(todoObj){
                this.todos.unshift(todoObj)
            },
            //勾选or取消勾选一个todo
            checkTodo(id){
                this.todos.forEach((todo)=&gt;{
                    if(todo.id === id) todo.done = !todo.done
                })
            },
            //删除一个todo
            deleteTodo(id){
                this.todos = this.todos.filter(todo =&gt; todo.id !== id)
            },
            //全选or取消勾选
            checkAllTodo(done){
                this.todos.forEach(todo =&gt; todo.done = done)
            },
            //删除已完成的todo
            clearAllTodo(){
                this.todos = this.todos.filter(todo =&gt; !todo.done)
            }
        },
        watch:{
            todos:{
                deep:true,
                handler(value){
                    localStorage.setItem(&#39;todos&#39;,JSON.stringify(value))
                }
            }
        }
    }
&lt;/script&gt;

&lt;style&gt;
    body {
    background: #fff;
    }

    .btn {
        display: inline-block;
        padding: 4px 12px;
        margin-bottom: 0;
        font-size: 14px;
        line-height: 20px;
        text-align: center;
        vertical-align: middle;
        cursor: pointer;
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
        border-radius: 4px;
    }

    .btn-danger {
        color: #fff;
        background-color: #da4f49;
        border: 1px solid #bd362f;
    }

    .btn-danger:hover {
        color: #fff;
        background-color: #bd362f;
    }

    .btn:focus {
   outline: none;
    }

    .todo-container {
    width: 600px;
    margin: 0 auto;
    }
    .todo-container .todo-wrap {
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
    }
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>src/components/MyHeader.vue</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
    &lt;div class=&quot;todo-header&quot;&gt;
        &lt;input type=&quot;text&quot; placeholder=&quot;请输入你的任务名称，按回车键确认&quot; @keydown.enter=&quot;add&quot; v-model=&quot;title&quot;/&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
    import {nanoid} from &#39;nanoid&#39;
    export default {
        name:&#39;MyHeader&#39;,
        data() {
            return {
                title:&#39;&#39;
            }
        },
        methods:{
            add(){
                if(!this.title.trim()) return
                const todoObj = {id:nanoid(),title:this.title,done:false}
                this.$emit(&#39;addTodo&#39;,todoObj)
                this.title = &#39;&#39;
            }
        }
    }
&lt;/script&gt;

&lt;style scoped&gt;
    /*header*/
    .todo-header input {
        width: 560px;
        height: 28px;
        font-size: 14px;
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 4px 7px;
    }

    .todo-header input:focus {
        outline: none;
        border-color: rgba(82, 168, 236, 0.8);
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
    }
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>src/components/MyFooter</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
    &lt;div class=&quot;todo-footer&quot; v-show=&quot;total&quot;&gt;
        &lt;label&gt;
            &lt;input type=&quot;checkbox&quot; v-model=&quot;isAll&quot;/&gt;
        &lt;/label&gt;
        &lt;span&gt;
            &lt;span&gt;已完成{{doneTotal}}&lt;/span&gt; / 全部{{total}}
        &lt;/span&gt;
        &lt;button class=&quot;btn btn-danger&quot; @click=&quot;clearAll&quot;&gt;清除已完成任务&lt;/button&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
    export default {
        name:&#39;MyFooter&#39;,
        props:[&#39;todos&#39;],
        computed:{
            doneTotal(){
                return this.todos.reduce((pre,todo)=&gt; pre + (todo.done ? 1 : 0) ,0)
            },
            total(){
                return this.todos.length
            },
            isAll:{
                get(){
                    return this.total === this.doneTotal &amp;&amp; this.total &gt; 0
                },
                set(value){
                    this.$emit(&#39;checkAllTodo&#39;,value)
                }
            }
        },
        methods:{
            clearAll(){
                this.$emit(&#39;clearAllTodo&#39;)
            }
        }
    }
&lt;/script&gt;

&lt;style scoped&gt;
    .todo-footer {
        height: 40px;
        line-height: 40px;
        padding-left: 6px;
        margin-top: 5px;
        }

    .todo-footer label {
        display: inline-block;
        margin-right: 20px;
        cursor: pointer;
    }

    .todo-footer label input {
        position: relative;
        top: -1px;
        vertical-align: middle;
        margin-right: 5px;
    }

    .todo-footer button {
        float: right;
        margin-top: 5px;
    }
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-10-全局事件总线" tabindex="-1"><a class="header-anchor" href="#_3-10-全局事件总线" aria-hidden="true">#</a> 3.10. 全局事件总线</h3><blockquote><p>全局事件总线是一种可以在任意组件间通信的方式，本质上就是一个对象。它必须满足以下条件：1. 所有的组件对象都必须能看见他 2. 这个对象必须能够使用<code>$on</code>、<code>$emit</code>和<code>$off</code>方法去绑定、触发和解绑事件</p></blockquote><p><code>src/main.js</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import Vue from &#39;vue&#39;
import App from &#39;./App.vue&#39;

Vue.config.productionTip = false

new Vue({
el:&#39;#app&#39;,
render: h =&gt; h(App),
beforeCreate() {
Vue.prototype.$bus = this //安装全局事件总线
}
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>src/App.vue</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
&lt;div class=&quot;app&quot;&gt;
&lt;School/&gt;
&lt;Student/&gt;
&lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import Student from &#39;./components/Student&#39;
import School from &#39;./components/School&#39;

export default {
name:&#39;App&#39;,
components:{School,Student}
}
&lt;/script&gt;

&lt;style scoped&gt;
.app{
background-color: gray;
padding: 5px;
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>src/components/School.vue</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
&lt;div class=&quot;school&quot;&gt;
&lt;h2&gt;学校名称：{{name}}&lt;/h2&gt;
&lt;h2&gt;学校地址：{{address}}&lt;/h2&gt;
&lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
name:&#39;School&#39;,
data() {
return {
name:&#39;尚硅谷&#39;,
address:&#39;北京&#39;,
}
},
methods:{
demo(data) {
console.log(&#39;我是School组件，收到了数据：&#39;,data)
}
},
mounted() {
this.$bus.$on(&#39;demo&#39;,this.demo)
},
beforeDestroy() {
this.$bus.$off(&#39;demo&#39;)
},
}
&lt;/script&gt;

&lt;style scoped&gt;
.school{
background-color: skyblue;
padding: 5px;
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>src/components/Student.vue</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
&lt;div class=&quot;student&quot;&gt;
&lt;h2&gt;学生姓名：{{name}}&lt;/h2&gt;
&lt;h2&gt;学生性别：{{sex}}&lt;/h2&gt;
&lt;button @click=&quot;sendStudentName&quot;&gt;把学生名给School组件&lt;/button&gt;
&lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
name:&#39;Student&#39;,
data() {
return {
name:&#39;张三&#39;,
sex:&#39;男&#39;
}
},
methods: {
sendStudentName(){
this.$bus.$emit(&#39;demo&#39;,this.name)
}
}
}
&lt;/script&gt;

&lt;style scoped&gt;
.student{
background-color: pink;
padding: 5px;
margin-top: 30px;
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>效果：</strong></p><p><img src="https://img-blog.csdnimg.cn/img_convert/1a79afa6a0cae91dd1680719823ead5d.png" alt=""></p><p><strong>总结：</strong></p><p>全局事件总线（GlobalEventBus）：</p><ol><li><p>一种组件间通信的方式，适用于任意组件间通信</p></li><li><p>安装全局事件总线：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>new Vue({
   ...
   beforeCreate() {
   Vue.prototype.$bus = this //安装全局事件总线，$bus就是当前应用的vm
   },
    ...
}) 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>使用事件总线：</p><ol><li><p>接收数据：A组件想接收数据，则在A组件中给<code>$bus</code>绑定自定义事件，事件的回调留在A组件自身</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>export default {
    methods(){
        demo(data){...}
    }
    ...
    mounted() {
        this.$bus.$on(&#39;xxx&#39;,this.demo)
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>提供数据：<code>this.$bus.$emit(&#39;xxx&#39;,data)</code></p></li></ol></li><li><p>最好在<code>beforeDestroy</code>钩子中，用<code>$off</code>去解绑当前组件所用到的事件</p></li></ol><p><strong>使用自定义事件优化Todo-List：</strong></p><p><code>src/mian.js</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import Vue from &#39;vue&#39;
import App from &#39;./App.vue&#39;

Vue.config.productionTip = false

new Vue({
    el:&quot;#app&quot;,
    render: h =&gt; h(App),
    beforeCreate() {
        Vue.prototype.$bus = this
    }
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>src/components/App.vue</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
    &lt;div id=&quot;root&quot;&gt;
        &lt;div class=&quot;todo-container&quot;&gt;
            &lt;div class=&quot;todo-wrap&quot;&gt;
            &lt;MyHeader @addTodo=&quot;addTodo&quot;/&gt;
            &lt;MyList :todos=&quot;todos&quot;/&gt;
            &lt;MyFooter :todos=&quot;todos&quot; @checkAllTodo=&quot;checkAllTodo&quot; @clearAllTodo=&quot;clearAllTodo&quot;/&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
    import MyHeader from &#39;./components/MyHeader.vue&#39;
    import MyList from &#39;./components/MyList.vue&#39;
    import MyFooter from &#39;./components/MyFooter.vue&#39;

    export default {
        name:&#39;App&#39;,
        components: { MyHeader,MyList,MyFooter },
        data() {
            return {
                todos:JSON.parse(localStorage.getItem(&#39;todos&#39;)) || []
            }
        },
        methods:{
            //添加一个todo
            addTodo(todoObj){
                this.todos.unshift(todoObj)
            },
            //勾选or取消勾选一个todo
            checkTodo(id){
                this.todos.forEach((todo)=&gt;{
                    if(todo.id === id) todo.done = !todo.done
                })
            },
            //删除一个todo
            deleteTodo(id){
                this.todos = this.todos.filter(todo =&gt; todo.id !== id)
            },
            //全选or取消勾选
            checkAllTodo(done){
                this.todos.forEach(todo =&gt; todo.done = done)
            },
            //删除已完成的todo
            clearAllTodo(){
                this.todos = this.todos.filter(todo =&gt; !todo.done)
            }
        },
        watch:{
            todos:{
                deep:true,
                handler(value){
                    localStorage.setItem(&#39;todos&#39;,JSON.stringify(value))
                }
            }
        },
        mounted(){
            this.$bus.$on(&#39;checkTodo&#39;,this.checkTodo)
            this.$bus.$on(&#39;deleteTodo&#39;,this.deleteTodo)
        },
        beforeDestroy(){
            this.$bus.$off([&#39;checkTodo&#39;,&#39;deleteTodo&#39;])
        }
    }
&lt;/script&gt;

&lt;style&gt;
    body {
        background: #fff;
    }

    .btn {
        display: inline-block;
        padding: 4px 12px;
        margin-bottom: 0;
        font-size: 14px;
        line-height: 20px;
        text-align: center;
        vertical-align: middle;
        cursor: pointer;
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
        border-radius: 4px;
    }

    .btn-danger {
        color: #fff;
        background-color: #da4f49;
        border: 1px solid #bd362f;
    }

    .btn-danger:hover {
        color: #fff;
        background-color: #bd362f;
    }

    .btn:focus {
        outline: none;
    }

    .todo-container {
        width: 600px;
        margin: 0 auto;
    }
    .todo-container .todo-wrap {
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
    }
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>src/components/MyItem.vue</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
    &lt;li&gt;
        &lt;label&gt;
            &lt;input type=&quot;checkbox&quot; :checked=&quot;todo.done&quot; @click=&quot;handleCheck(todo.id)&quot;/&gt;
            &lt;span&gt;{{todo.title}}&lt;/span&gt;
        &lt;/label&gt;
        &lt;button class=&quot;btn btn-danger&quot; @click=&quot;handleDelete(todo.id,todo.title)&quot;&gt;删除&lt;/button&gt;
    &lt;/li&gt;
&lt;/template&gt;

&lt;script&gt;
    export default {
        name:&#39;MyItem&#39;,
        props:[&#39;todo&#39;],
        methods:{
            handleCheck(id){
                this.$bus.$emit(&#39;checkTodo&#39;,id)
            },
            handleDelete(id,title){
                if(confirm(&quot;确定删除任务：&quot;+title+&quot;吗？&quot;)){
                    this.$bus.$emit(&#39;deleteTodo&#39;,id)
                }
            }
        }
    }
&lt;/script&gt;

&lt;style scoped&gt;
    li {
        list-style: none;
        height: 36px;
        line-height: 36px;
        padding: 0 5px;
        border-bottom: 1px solid #ddd;
    }

    li label {
        float: left;
        cursor: pointer;
    }

    li label li input {
        vertical-align: middle;
        margin-right: 6px;
        position: relative;
        top: -1px;
    }

    li button {
        float: right;
        display: none;
        margin-top: 3px;
    }

    li:before {
        content: initial;
    }

    li:last-child {
        border-bottom: none;
    }

    li:hover {
        background-color: #eee;
    }

    li:hover button{
        display: block;
    }
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-11-消息的订阅与发布" tabindex="-1"><a class="header-anchor" href="#_3-11-消息的订阅与发布" aria-hidden="true">#</a> 3.11. 消息的订阅与发布</h3><p><code>src/components/School.vue</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
&lt;div class=&quot;school&quot;&gt;
&lt;h2&gt;学校名称：{{name}}&lt;/h2&gt;
&lt;h2&gt;学校地址：{{address}}&lt;/h2&gt;
&lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import pubsub from &#39;pubsub-js&#39;

export default {
name:&#39;School&#39;,
data() {
return {
name:&#39;尚硅谷&#39;,
address:&#39;北京&#39;,
}
},
methods:{
demo(msgName,data) {
console.log(&#39;我是School组件，收到了数据：&#39;,data)
}
},
mounted() {
this.pubId = pubsub.subscribe(&#39;demo&#39;,this.demo) //订阅消息
},
beforeDestroy() {
pubsub.unsubscribe(this.pubId) //取消订阅
}
}
&lt;/script&gt;

&lt;style scoped&gt;
.school{
background-color: skyblue;
padding: 5px;
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>src/components/Student.vue</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
&lt;div class=&quot;student&quot;&gt;
&lt;h2&gt;学生姓名：{{name}}&lt;/h2&gt;
&lt;h2&gt;学生性别：{{sex}}&lt;/h2&gt;
&lt;button @click=&quot;sendStudentName&quot;&gt;把学生名给School组件&lt;/button&gt;
&lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import pubsub from &#39;pubsub-js&#39;

export default {
name:&#39;Student&#39;,
data() {
return {
name:&#39;JOJO&#39;,
sex:&#39;男&#39;,
}
},
methods: {
sendStudentName(){
pubsub.publish(&#39;demo&#39;,this.name) //发布消息
}
}
}
&lt;/script&gt;

&lt;style scoped&gt;
.student{
background-color: pink;
padding: 5px;
margin-top: 30px;
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>效果：</strong></p><p><img src="https://img-blog.csdnimg.cn/img_convert/feb80e588d521a07edc72d9245190baf.png" alt=""></p><p><strong>总结：</strong></p><p>消息订阅与发布（pubsub）：</p><ol><li><p>消息订阅与发布是一种组件间通信的方式，适用于任意组件间通信</p></li><li><p>使用步骤：</p><ol><li><p>安装pubsub：<code>npm i pubsub-js</code></p></li><li><p>引入：<code>import pubsub from &#39;pubsub-js&#39;</code></p></li><li><p>接收数据：A组件想接收数据，则在A组件中订阅消息，订阅的回调留在A组件自身</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>export default {
    methods(){
        demo(data){...}
    }
    ...
    mounted() {
this.pid = pubsub.subscribe(&#39;xxx&#39;,this.demo)
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>提供数据：<code>pubsub.publish(&#39;xxx&#39;,data)</code></p></li><li><p>最好在<code>beforeDestroy</code>钩子中，使用<code>pubsub.unsubscribe(pid)</code>取消订阅</p></li></ol></li></ol><p><strong>使用消息的订阅与发布优化Todo-List：</strong></p><p><code>src/App.vue</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
    &lt;div id=&quot;root&quot;&gt;
        &lt;div class=&quot;todo-container&quot;&gt;
            &lt;div class=&quot;todo-wrap&quot;&gt;
            &lt;MyHeader @addTodo=&quot;addTodo&quot;/&gt;
            &lt;MyList :todos=&quot;todos&quot;/&gt;
            &lt;MyFooter :todos=&quot;todos&quot; @checkAllTodo=&quot;checkAllTodo&quot; @clearAllTodo=&quot;clearAllTodo&quot;/&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
    import pubsub from &#39;pubsub-js&#39;
    import MyHeader from &#39;./components/MyHeader.vue&#39;
    import MyList from &#39;./components/MyList.vue&#39;
    import MyFooter from &#39;./components/MyFooter.vue&#39;


    export default {
        name:&#39;App&#39;,
        components: { MyHeader,MyList,MyFooter },
        data() {
            return {
                todos:JSON.parse(localStorage.getItem(&#39;todos&#39;)) || []
            }
        },
        methods:{
            //添加一个todo
            addTodo(todoObj){
                this.todos.unshift(todoObj)
            },
            //勾选or取消勾选一个todo
            checkTodo(_,id){
                this.todos.forEach((todo)=&gt;{
                    if(todo.id === id) todo.done = !todo.done
                })
            },
            //删除一个todo
            deleteTodo(id){
                this.todos = this.todos.filter(todo =&gt; todo.id !== id)
            },
            //全选or取消勾选
            checkAllTodo(done){
                this.todos.forEach(todo =&gt; todo.done = done)
            },
            //删除已完成的todo
            clearAllTodo(){
                this.todos = this.todos.filter(todo =&gt; !todo.done)
            }
        },
        watch:{
            todos:{
                deep:true,
                handler(value){
                    localStorage.setItem(&#39;todos&#39;,JSON.stringify(value))
                }
            }
        },
        mounted(){
            this.pubId = pubsub.subscribe(&#39;checkTodo&#39;,this.checkTodo)
            this.$bus.$on(&#39;deleteTodo&#39;,this.deleteTodo)
        },
        beforeDestroy(){
            pubsub.unsubscribe(this.pubId)
            this.$bus.$off(&#39;deleteTodo&#39;)
        }
    }
&lt;/script&gt;

&lt;style&gt;
    body {
        background: #fff;
    }

    .btn {
        display: inline-block;
        padding: 4px 12px;
        margin-bottom: 0;
        font-size: 14px;
        line-height: 20px;
        text-align: center;
        vertical-align: middle;
        cursor: pointer;
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
        border-radius: 4px;
    }

    .btn-danger {
        color: #fff;
        background-color: #da4f49;
        border: 1px solid #bd362f;
    }

    .btn-danger:hover {
        color: #fff;
        background-color: #bd362f;
    }

    .btn:focus {
        outline: none;
    }

    .todo-container {
        width: 600px;
        margin: 0 auto;
    }
    .todo-container .todo-wrap {
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
    }
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>src/components/myItem.vue</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
    &lt;li&gt;
        &lt;label&gt;
            &lt;input type=&quot;checkbox&quot; :checked=&quot;todo.done&quot; @click=&quot;handleCheck(todo.id)&quot;/&gt;
            &lt;span&gt;{{todo.title}}&lt;/span&gt;
        &lt;/label&gt;
        &lt;button class=&quot;btn btn-danger&quot; @click=&quot;handleDelete(todo.id,todo.title)&quot;&gt;删除&lt;/button&gt;
    &lt;/li&gt;
&lt;/template&gt;

&lt;script&gt;
    import pubsub from &#39;pubsub-js&#39;
    export default {
        name:&#39;MyItem&#39;,
        props:[&#39;todo&#39;],
        methods:{
            handleCheck(id){                    
                pubsub.publish(&#39;checkTodo&#39;,id)
            },
            handleDelete(id,title){
                if(confirm(&quot;确定删除任务：&quot;+title+&quot;吗？&quot;)){
                    this.$bus.$emit(&#39;deleteTodo&#39;,id)
                }
            }
        }
    }
&lt;/script&gt;

&lt;style scoped&gt;
    li {
        list-style: none;
        height: 36px;
        line-height: 36px;
        padding: 0 5px;
        border-bottom: 1px solid #ddd;
    }

    li label {
        float: left;
        cursor: pointer;
    }

    li label li input {
        vertical-align: middle;
        margin-right: 6px;
        position: relative;
        top: -1px;
    }

    li button {
        float: right;
        display: none;
        margin-top: 3px;
    }

    li:before {
        content: initial;
    }

    li:last-child {
        border-bottom: none;
    }

    li:hover {
        background-color: #eee;
    }

    li:hover button{
        display: block;
    }
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-12-nexttick" tabindex="-1"><a class="header-anchor" href="#_3-12-nexttick" aria-hidden="true">#</a> 3.12. $nextTick</h3><blockquote><p><code>$nextTick(回调函数)</code>可以将回调延迟到下次 DOM 更新循环之后执行</p></blockquote><p><strong>使用$nextTick优化Todo-List：</strong></p><p><code>src/App.vue</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
    &lt;div id=&quot;root&quot;&gt;
        &lt;div class=&quot;todo-container&quot;&gt;
            &lt;div class=&quot;todo-wrap&quot;&gt;
            &lt;MyHeader @addTodo=&quot;addTodo&quot;/&gt;
            &lt;MyList :todos=&quot;todos&quot;/&gt;
            &lt;MyFooter :todos=&quot;todos&quot; @checkAllTodo=&quot;checkAllTodo&quot; @clearAllTodo=&quot;clearAllTodo&quot;/&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
    import pubsub from &#39;pubsub-js&#39;
    import MyHeader from &#39;./components/MyHeader.vue&#39;
    import MyList from &#39;./components/MyList.vue&#39;
    import MyFooter from &#39;./components/MyFooter.vue&#39;


    export default {
        name:&#39;App&#39;,
        components: { MyHeader,MyList,MyFooter },
        data() {
            return {
                todos:JSON.parse(localStorage.getItem(&#39;todos&#39;)) || []
            }
        },
        methods:{
            //添加一个todo
            addTodo(todoObj){
                this.todos.unshift(todoObj)
            },
            //勾选or取消勾选一个todo
            checkTodo(_,id){
                this.todos.forEach((todo)=&gt;{
                    if(todo.id === id) todo.done = !todo.done
                })
            },
            //删除一个todo
            deleteTodo(id){
                this.todos = this.todos.filter(todo =&gt; todo.id !== id)
            },
            //更新一个todo
updateTodo(id,title){
this.todos.forEach((todo)=&gt;{
if(todo.id === id) todo.title = title
})
},
            //全选or取消勾选
            checkAllTodo(done){
                this.todos.forEach(todo =&gt; todo.done = done)
            },
            //删除已完成的todo
            clearAllTodo(){
                this.todos = this.todos.filter(todo =&gt; !todo.done)
            }
        },
        watch:{
            todos:{
                deep:true,
                handler(value){
                    localStorage.setItem(&#39;todos&#39;,JSON.stringify(value))
                }
            }
        },
        mounted(){
            this.pubId = pubsub.subscribe(&#39;checkTodo&#39;,this.checkTodo)
            this.$bus.$on(&#39;deleteTodo&#39;,this.deleteTodo)
            this.$bus.$on(&#39;updateTodo&#39;,this.updateTodo)
        },
        beforeDestroy(){
            pubsub.unsubscribe(this.pubId)
            this.$bus.$off(&#39;deleteTodo&#39;)
            this.$bus.$off(&#39;updateTodo&#39;)
        }
    }
&lt;/script&gt;

&lt;style&gt;
    body {
        background: #fff;
    }

    .btn {
        display: inline-block;
        padding: 4px 12px;
        margin-bottom: 0;
        font-size: 14px;
        line-height: 20px;
        text-align: center;
        vertical-align: middle;
        cursor: pointer;
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
        border-radius: 4px;
    }

    .btn-danger {
        color: #fff;
        background-color: #e04e49;
        border: 1px solid #bd362f;
    }

    .btn-danger:hover {
        color: #fff;
        background-color: #bd362f;
    }

    .btn-info {
        color: #fff;
        background-color: rgb(50, 129, 233);
        border: 1px solid rgb(1, 47, 212);
        margin-right: 5px;
    }

    .btn-info:hover {
        color: #fff;
        background-color: rgb(1, 47, 212);
    }

    .btn:focus {
        outline: none;
    }

    .todo-container {
        width: 600px;
        margin: 0 auto;
    }
    .todo-container .todo-wrap {
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
    }
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>src/components/MyItem.vue</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
    &lt;li&gt;
        &lt;label&gt;
            &lt;input type=&quot;checkbox&quot; :checked=&quot;todo.done&quot; @click=&quot;handleCheck(todo.id)&quot;/&gt;
            &lt;span v-show=&quot;!todo.isEdit&quot;&gt;{{todo.title}}&lt;/span&gt;
            &lt;input type=&quot;text&quot; v-show=&quot;todo.isEdit&quot; :value=&quot;todo.title&quot; @blur=&quot;handleBlur(todo,$event)&quot; ref=&quot;inputTitle&quot;&gt;
        &lt;/label&gt;
        &lt;button class=&quot;btn btn-danger&quot; @click=&quot;handleDelete(todo.id,todo.title)&quot;&gt;删除&lt;/button&gt;
        &lt;button class=&quot;btn btn-info&quot; v-show=&quot;!todo.isEdit&quot; @click=&quot;handleEdit(todo)&quot;&gt;编辑&lt;/button&gt;
    &lt;/li&gt;
&lt;/template&gt;

&lt;script&gt;
    import pubsub from &#39;pubsub-js&#39;
    export default {
        name:&#39;MyItem&#39;,
        props:[&#39;todo&#39;],
        methods:{
            handleCheck(id){                    
                pubsub.publish(&#39;checkTodo&#39;,id)
            },
            handleDelete(id,title){
                if(confirm(&quot;确定删除任务：&quot;+title+&quot;吗？&quot;)){
                    this.$bus.$emit(&#39;deleteTodo&#39;,id)
                }
            },
            handleEdit(todo){
                // 如果todo自身有isEdit属性就将isEdit改成true
if(Object.prototype.hasOwnProperty.call(todo,&#39;isEdit&#39;)){
todo.isEdit = true
}else{
                    // 如果没有就向todo中添加一个响应式的isEdit属性并设为true
this.$set(todo,&#39;isEdit&#39;,true)
}
                // 当Vue重新编译模板之后执行$nextTick()中的回调函数
                this.$nextTick(function(){
                    // 使input框获取焦点
                    this.$refs.inputTitle.focus()
                })
},
            // 当input框失去焦点时更新
            handleBlur(todo,event){
                todo.isEdit = false
if(!event.target.value.trim()) return alert(&#39;输入不能为空！&#39;)
this.$bus.$emit(&#39;updateTodo&#39;,todo.id,event.target.value)
            }
        }
    }
&lt;/script&gt;

&lt;style scoped&gt;
    li {
        list-style: none;
        height: 36px;
        line-height: 36px;
        padding: 0 5px;
        border-bottom: 1px solid #ddd;
    }

    li label {
        float: left;
        cursor: pointer;
    }

    li label li input {
        vertical-align: middle;
        margin-right: 6px;
        position: relative;
        top: -1px;
    }

    li button {
        float: right;
        display: none;
        margin-top: 3px;
    }

    li:before {
        content: initial;
    }

    li:last-child {
        border-bottom: none;
    }

    li:hover {
        background-color: #eee;
    }

    li:hover button{
        display: block;
    }
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Todo-List最终效果：</strong></p><p><img src="https://img-blog.csdnimg.cn/img_convert/2555f0c7214034cfe08704e184b6c96d.png" alt=""></p><p><strong>总结：</strong></p><p>$nextTick：</p><ol><li>语法：<code>this.$nextTick(回调函数)</code></li><li>作用：在下一次 DOM 更新结束后执行其指定的回调</li><li>什么时候用：当改变数据后，要基于更新后的新DOM进行某些操作时，要在nextTick所指定的回调函数中执行</li></ol><h3 id="_3-13-过渡与动画" tabindex="-1"><a class="header-anchor" href="#_3-13-过渡与动画" aria-hidden="true">#</a> 3.13. 过渡与动画</h3><p><code>src/App.vue</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
    &lt;div id=&quot;root&quot;&gt;
        &lt;MyAnimation/&gt;
        &lt;MyTransition/&gt;
        &lt;MyTransitionGroup/&gt;
        &lt;ThirdPartAnimation/&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
    import MyAnimation from &#39;./components/MyAnimation.vue&#39;
    import MyTransition from &#39;./components/MyTransition.vue&#39;
    import MyTransitionGroup from &#39;./components/MyTransitionGroup.vue&#39;
    import ThirdPartAnimation from &#39;./components/ThirdPartAnimation.vue&#39;

    export default {
        name:&#39;App&#39;,
        components: { MyAnimation,MyTransition,MyTransitionGroup,ThirdPartAnimation },
    }
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>src/components/MyAnimation</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
    &lt;div&gt;
&lt;button @click=&quot;isShow = !isShow&quot;&gt;显示/隐藏&lt;/button&gt;
&lt;transition name=&quot;jojo&quot; appear&gt;
&lt;h1 v-show=&quot;isShow&quot;&gt;你好啊！&lt;/h1&gt;
&lt;/transition&gt;
&lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
    name:&#39;MyTitle&#39;,
data() {
return {
isShow:true
}
}
}
&lt;/script&gt;

&lt;style scoped&gt;
h1{
background-color: orange;
}

.jojo-enter-active{
animation: jojo 0.5s linear;
}

.jojo-leave-active{
animation: jojo 0.5s linear reverse;
}

@keyframes jojo {
from{
transform: translateX(-100%);
}
to{
transform: translateX(0px);
}
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>src/components/MyTransition.vue</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
    &lt;div&gt;
&lt;button @click=&quot;isShow = !isShow&quot;&gt;显示/隐藏&lt;/button&gt;
&lt;transition name=&quot;jojo&quot; appear&gt;
&lt;h1 v-show=&quot;isShow&quot;&gt;你好啊！&lt;/h1&gt;
&lt;/transition&gt;
&lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
    name:&#39;MyTitle&#39;,
data() {
return {
isShow:true
}
}
}
&lt;/script&gt;

&lt;style scoped&gt;
h1{
background-color: orange;
}

.jojo-enter,.jojo-leave-to{
transform: translateX(-100%);
}

.jojo-enter-to,.jojo-leave{
transform: translateX(0);
}

.jojo-enter-active,.jojo-leave-active{
transition: 0.5s linear;
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>src/components/MyTransitionGroup.vue</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
    &lt;div&gt;
&lt;button @click=&quot;isShow = !isShow&quot;&gt;显示/隐藏&lt;/button&gt;
&lt;transition-group name=&quot;jojo&quot; appear&gt;
&lt;h1 v-show=&quot;isShow&quot; key=&quot;1&quot;&gt;你好啊！&lt;/h1&gt;
&lt;h1 v-show=&quot;!isShow&quot; key=&quot;2&quot;&gt;大笨蛋&lt;/h1&gt;
&lt;/transition-group&gt;
&lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
    name:&#39;MyTitle&#39;,
data() {
return {
isShow:true
}
}
}
&lt;/script&gt;
·
&lt;style scoped&gt;
h1{
background-color: orange;
}

.jojo-enter,.jojo-leave-to{
transform: translateX(-100%);
}

.jojo-enter-to,.jojo-leave{
transform: translateX(0);
}

.jojo-enter-active,.jojo-leave-active{
transition: 0.5s linear;
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>src/components/ThirdPartAnimation</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
    &lt;div&gt;
&lt;button @click=&quot;isShow = !isShow&quot;&gt;显示/隐藏&lt;/button&gt;
&lt;transition-group 
appear
name=&quot;animate__animated animate__bounce&quot;
enter-active-class=&quot;animate__backInUp&quot; 
leave-active-class=&quot;animate__backOutUp&quot;
&gt;
&lt;h1 v-show=&quot;isShow&quot; key=&quot;1&quot;&gt;你好啊！&lt;/h1&gt;
&lt;h1 v-show=&quot;!isShow&quot; key=&quot;2&quot;&gt;大笨蛋&lt;/h1&gt;
&lt;/transition-group&gt;
&lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import &#39;animate.css&#39;
export default {
name:&#39;MyTitle&#39;,
data() {
return {
isShow:true
}
}
}
&lt;/script&gt;

&lt;style scoped&gt;
h1{
background-color: orange;
}

&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>效果：</strong></p><p><img src="https://img-blog.csdnimg.cn/img_convert/1bdc182ef40271cb057c258f5b74cbee.png" alt=""></p><p><strong>总结：</strong></p><p>Vue封装的过度与动画：</p><ol><li>作用：在插入、更新或移除 DOM元素时，在合适的时候给元素添加样式类名</li><li>图示：</li></ol><p>[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-F7tX8Utw-1648820283412)(https://cn.vuejs.org/images/transition.png)]</p><ol start="3"><li><p>写法：</p><ol><li><p>准备好样式：</p><ul><li><p>元素进入的样式：</p><ol><li><code>v-enter</code>：进入的起点</li><li><code>v-enter-active</code>：进入过程中</li><li><code>v-enter-to</code>：进入的终点</li></ol></li><li><p>元素离开的样式：</p><ol><li><code>v-leave</code>：离开的起点</li><li><code>v-leave-active</code>：离开过程中</li><li><code>v-leave-to</code>：离开的终点</li></ol></li></ul></li><li><p>使用<code>&lt;transition&gt;</code>包裹要过度的元素，并配置name属性：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;transition name=&quot;hello&quot;&gt;
&lt;h1 v-show=&quot;isShow&quot;&gt;你好啊！&lt;/h1&gt;
&lt;/transition&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>备注：若有多个元素需要过度，则需要使用：<code>&lt;transition-group&gt;</code>，且每个元素都要指定<code>key</code>值</p></li></ol></li></ol><p><strong>使用动画优化Todo-List：</strong></p><p><code>src/components/MyList.vue</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
    &lt;ul class=&quot;todo-main&quot;&gt;
        &lt;transition-group name=&quot;todo&quot; appear&gt;
            &lt;MyItem v-for=&quot;todo in todos&quot; :key=&quot;todo.id&quot; :todo=&quot;todo&quot;/&gt;
        &lt;/transition-group&gt;
    &lt;/ul&gt;
&lt;/template&gt;

&lt;script&gt;
    import MyItem from &#39;./MyItem.vue&#39;

    export default {
        name:&#39;MyList&#39;,
        components:{MyItem},
        props:[&#39;todos&#39;]
    }
&lt;/script&gt;

&lt;style scoped&gt;
    .todo-main {
        margin-left: 0px;
        border: 1px solid #ddd;
        border-radius: 2px;
        padding: 0px;
    }

    .todo-empty {
        height: 40px;
        line-height: 40px;
        border: 1px solid #ddd;
        border-radius: 2px;
        padding-left: 5px;
        margin-top: 10px;
    }

    .todo-enter-active{
animation: todo 0.5s linear;
}

.todo-leave-active{
animation: todo 0.5s linear reverse;
}

@keyframes todo {
from{
transform: translateX(-100%);
}
to{
transform: translateX(0px);
}
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-vue中的ajax" tabindex="-1"><a class="header-anchor" href="#_4-vue中的ajax" aria-hidden="true">#</a> 4. Vue中的Ajax</h2><h3 id="_4-1-vue脚手架配置代理" tabindex="-1"><a class="header-anchor" href="#_4-1-vue脚手架配置代理" aria-hidden="true">#</a> 4.1. Vue脚手架配置代理</h3><blockquote><p>本案例需要下载axios库：<code>npm install axios</code></p></blockquote><p><code>vue.config.js</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>module.exports = {
    pages: {
        index: {
            entry: &#39;src/main.js&#39;,
        },
    },
    lintOnSave:false,
    // 开启代理服务器（方式一）
    // devServer: {
    //     proxy:&#39;http://localhost:5000&#39;
    // }

    //开启代理服务器（方式二）
devServer: {
        proxy: {
            &#39;/jojo&#39;: {
                target: &#39;http://localhost:5000&#39;,
                pathRewrite:{&#39;^/jojo&#39;:&#39;&#39;},
                // ws: true, //用于支持websocket,默认值为true
                // changeOrigin: true //用于控制请求头中的host值,默认值为true
            },
            &#39;/atguigu&#39;: {
                target: &#39;http://localhost:5001&#39;,
                pathRewrite:{&#39;^/atguigu&#39;:&#39;&#39;},
                // ws: true, //用于支持websocket,默认值为true
                // changeOrigin: true //用于控制请求头中的host值,默认值为true
            }
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>src/App.vue</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
    &lt;div id=&quot;root&quot;&gt;
        &lt;button @click=&quot;getStudents&quot;&gt;获取学生信息&lt;/button&gt;&lt;br/&gt;
        &lt;button @click=&quot;getCars&quot;&gt;获取汽车信息&lt;/button&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
    import axios from &#39;axios&#39;
    
    export default {
        name:&#39;App&#39;,
        methods: {
getStudents(){
axios.get(&#39;http://localhost:8080/jojo/students&#39;).then(
response =&gt; {
console.log(&#39;请求成功了&#39;,response.data)
},
error =&gt; {
console.log(&#39;请求失败了&#39;,error.message)
}
)
},
            getCars(){
axios.get(&#39;http://localhost:8080/atguigu/cars&#39;).then(
response =&gt; {
console.log(&#39;请求成功了&#39;,response.data)
},
error =&gt; {
console.log(&#39;请求失败了&#39;,error.message)
}
)
}
        }
    }
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>效果：</strong></p><p><img src="https://img-blog.csdnimg.cn/img_convert/ab2e9d856f5a03b94882290c292ca53c.png" alt=""></p><p><strong>总结：</strong></p><p>vue脚手架配置代理服务器：</p><ul><li><p>方法一：在<code>vue.config.js</code>中添加如下配置：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>devServer:{
    proxy:&quot;http://localhost:5000&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>说明：</p><ol><li>优点：配置简单，请求资源时直接发给前端即可</li><li>缺点：不能配置多个代理，不能灵活的控制请求是否走代理</li><li>工作方式：若按照上述配置代理，当请求了前端不存在的资源时，那么该请求会转发给服务器 （优先匹配前端资源）</li></ol></li><li><p>方法二：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>devServer: {
    proxy: {
      &#39;/api1&#39;: { // 匹配所有以 &#39;/api1&#39;开头的请求路径
        target: &#39;http://localhost:5000&#39;,// 代理目标的基础路径
        changeOrigin: true,
        pathRewrite: {&#39;^/api1&#39;: &#39;&#39;}
      },
      &#39;/api2&#39;: { // 匹配所有以 &#39;/api2&#39;开头的请求路径
        target: &#39;http://localhost:5001&#39;,// 代理目标的基础路径
        changeOrigin: true,
        pathRewrite: {&#39;^/api2&#39;: &#39;&#39;}
      }
    }
}

// changeOrigin设置为true时，服务器收到的请求头中的host为：localhost:5000
// changeOrigin设置为false时，服务器收到的请求头中的host为：localhost:8080
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>说明：</p><ol><li>优点：可以配置多个代理，且可以灵活的控制请求是否走代理</li><li>缺点：配置略微繁琐，请求资源时必须加前缀</li></ol></li></ul><h3 id="_4-2-github用户搜索案例" tabindex="-1"><a class="header-anchor" href="#_4-2-github用户搜索案例" aria-hidden="true">#</a> 4.2. GitHub用户搜索案例</h3><p><code>public/index.html</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;&quot;&gt;
    &lt;head&gt;
        &lt;meta charset=&quot;UTF-8&quot;&gt;
        &lt;!-- 针对IE浏览器的特殊配置，含义是让IE浏览器以最高渲染级别渲染页面 --&gt;
        &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;
        &lt;!-- 开启移动端的理想端口 --&gt;
        &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
        &lt;!-- 配置页签图标 --&gt;
        &lt;link rel=&quot;icon&quot; href=&quot;&lt;%= BASE_URL %&gt;favicon.ico&quot;&gt;
        &lt;!-- 引入bootstrap样式 --&gt;
        &lt;link rel=&quot;stylesheet&quot; href=&quot;&lt;%= BASE_URL %&gt;css/bootstrap.css&quot;&gt;
        &lt;!-- 配置网页标题 --&gt;
        &lt;title&gt;&lt;%= htmlWebpackPlugin.options.title %&gt;&lt;/title&gt;
    &lt;/head&gt;
    &lt;body&gt;
        &lt;!-- 容器 --&gt;
        &lt;div id=&quot;app&quot;&gt;&lt;/div&gt;
    &lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>src/main.js</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import Vue from &#39;vue&#39;
import App from &#39;./App.vue&#39;

Vue.config.productionTip = false

new Vue({
    el:&quot;#app&quot;,
    render: h =&gt; h(App),
    beforeCreate(){
        Vue.prototype.$bus = this
    }
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>src/App.vue</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
&lt;div class=&quot;container&quot;&gt;
&lt;Search/&gt;
&lt;List/&gt;
&lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import Search from &#39;./components/Search.vue&#39;
import List from &#39;./components/List.vue&#39;

    export default {
        name:&#39;App&#39;,
components:{Search,List},
}
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>src/components/Search.vue</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
    &lt;section class=&quot;jumbotron&quot;&gt;
&lt;h3 class=&quot;jumbotron-heading&quot;&gt;Search Github Users&lt;/h3&gt;
&lt;div&gt;
            &lt;input type=&quot;text&quot; placeholder=&quot;enter the name you search&quot; v-model=&quot;keyWord&quot;/&gt;&amp;nbsp;
            &lt;button @click=&quot;getUsers&quot;&gt;Search&lt;/button&gt;
&lt;/div&gt;
    &lt;/section&gt;
&lt;/template&gt;

&lt;script&gt;
    import axios from &#39;axios&#39;
    export default {
        name:&#39;Search&#39;,
        data() {
            return {
                keyWord:&#39;&#39;
            }
        },
        methods: {
            getUsers(){
                //请求前更新List的数据
this.$bus.$emit(&#39;updateListData&#39;,{isLoading:true,errMsg:&#39;&#39;,users:[],isFirst:false})
axios.get(\`https://api.github.com/search/users?q=\${this.keyWord}\`).then(
response =&gt; {
console.log(&#39;请求成功了&#39;)
//请求成功后更新List的数据
this.$bus.$emit(&#39;updateListData&#39;,{isLoading:false,errMsg:&#39;&#39;,users:response.data.items})
},
error =&gt; {
//请求后更新List的数据
this.$bus.$emit(&#39;updateListData&#39;,{isLoading:false,errMsg:error.message,users:[]})
}
)
            }
        }
    }
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>src/components/List.vue</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
    &lt;div class=&quot;row&quot;&gt;
        &lt;!-- 展示用户列表 --&gt;
        &lt;div class=&quot;card&quot; v-show=&quot;info.users.length&quot; v-for=&quot;user in info.users&quot; :key=&quot;user.id&quot;&gt;
            &lt;a :href=&quot;user.html_url&quot; target=&quot;_blank&quot;&gt;
                &lt;img :src=&quot;user.avatar_url&quot; style=&#39;width: 100px&#39;/&gt;
            &lt;/a&gt;
            &lt;h4 class=&quot;card-title&quot;&gt;{{user.login}}&lt;/h4&gt;
        &lt;/div&gt;
        &lt;!-- 展示欢迎词 --&gt;
        &lt;h1 v-show=&quot;info.isFirst&quot;&gt;欢迎使用！&lt;/h1&gt;
        &lt;!-- 展示加载中 --&gt;
        &lt;h1 v-show=&quot;info.isLoading&quot;&gt;加载中...&lt;/h1&gt;
        &lt;!-- 展示错误信息 --&gt;
        &lt;h1 v-show=&quot;info.errMsg&quot;&gt;{{errMsg}}&lt;/h1&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
    export default {
        name:&#39;List&#39;,
        data() {
            return {
                info:{
                    isFirst:true,
                    isLoading:false,
                    errMsg:&#39;&#39;,
                    users:[]
                }
            }
        },
        mounted(){
            this.$bus.$on(&#39;updateListData&#39;,(dataObj)=&gt;{
                //动态合并两个对象的属性
                this.info = {...this.info,...dataObj}
            })
        },
        beforeDestroy(){
            this.$bus.$off(&#39;updateListData&#39;)
        }
    }
&lt;/script&gt;

&lt;style scoped&gt;
    .album {
min-height: 50rem; /* Can be removed; just added for demo purposes */
padding-top: 3rem;
padding-bottom: 3rem;
background-color: #f7f7f7;
}

.card {
float: left;
width: 33.333%;
padding: .75rem;
margin-bottom: 2rem;
border: 1px solid #efefef;
text-align: center;
}

.card &gt; img {
margin-bottom: .75rem;
border-radius: 100px;
}

.card-text {
font-size: 85%;
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>效果：</strong></p><p><img src="https://img-blog.csdnimg.cn/img_convert/4d2be27716ca16913a3b144b86d75e01.png" alt=""></p><h3 id="_4-3-vue-resource" tabindex="-1"><a class="header-anchor" href="#_4-3-vue-resource" aria-hidden="true">#</a> 4.3. vue-resource</h3><blockquote><p>下载 vue-resource库：<code>npm i vue-resource</code></p></blockquote><p><code>src/main.js</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import Vue from &#39;vue&#39;
import App from &#39;./App.vue&#39;
import vueResource from &#39;vue-resource&#39;

Vue.config.productionTip = false
Vue.use(vueResource)

new Vue({
    el:&quot;#app&quot;,
    render: h =&gt; h(App),
    beforeCreate(){
        Vue.prototype.$bus = this
    }
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>src/App.vue</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
&lt;div class=&quot;container&quot;&gt;
&lt;Search/&gt;
&lt;List/&gt;
&lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import Search from &#39;./components/Search.vue&#39;
import List from &#39;./components/List.vue&#39;

    export default {
        name:&#39;App&#39;,
components:{Search,List},
}
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>src/components/Search.vue</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
    &lt;section class=&quot;jumbotron&quot;&gt;
&lt;h3 class=&quot;jumbotron-heading&quot;&gt;Search Github Users&lt;/h3&gt;
&lt;div&gt;
            &lt;input type=&quot;text&quot; placeholder=&quot;enter the name you search&quot; v-model=&quot;keyWord&quot;/&gt;&amp;nbsp;
            &lt;button @click=&quot;getUsers&quot;&gt;Search&lt;/button&gt;
&lt;/div&gt;
    &lt;/section&gt;
&lt;/template&gt;

&lt;script&gt;
    export default {
        name:&#39;Search&#39;,
        data() {
            return {
                keyWord:&#39;&#39;
            }
        },
        methods: {
            getUsers(){
                //请求前更新List的数据
this.$bus.$emit(&#39;updateListData&#39;,{isLoading:true,errMsg:&#39;&#39;,users:[],isFirst:false})
this.$http.get(\`https://api.github.com/search/users?q=\${this.keyWord}\`).then(
response =&gt; {
console.log(&#39;请求成功了&#39;)
//请求成功后更新List的数据
this.$bus.$emit(&#39;updateListData&#39;,{isLoading:false,errMsg:&#39;&#39;,users:response.data.items})
},
error =&gt; {
//请求后更新List的数据
this.$bus.$emit(&#39;updateListData&#39;,{isLoading:false,errMsg:error.message,users:[]})
}
)
            }
        }
    }
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>src/components/List.vue</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
    &lt;div class=&quot;row&quot;&gt;
        &lt;!-- 展示用户列表 --&gt;
        &lt;div class=&quot;card&quot; v-show=&quot;info.users.length&quot; v-for=&quot;user in info.users&quot; :key=&quot;user.id&quot;&gt;
            &lt;a :href=&quot;user.html_url&quot; target=&quot;_blank&quot;&gt;
                &lt;img :src=&quot;user.avatar_url&quot; style=&#39;width: 100px&#39;/&gt;
            &lt;/a&gt;
            &lt;h4 class=&quot;card-title&quot;&gt;{{user.login}}&lt;/h4&gt;
        &lt;/div&gt;
        &lt;!-- 展示欢迎词 --&gt;
        &lt;h1 v-show=&quot;info.isFirst&quot;&gt;欢迎使用！&lt;/h1&gt;
        &lt;!-- 展示加载中 --&gt;
        &lt;h1 v-show=&quot;info.isLoading&quot;&gt;加载中...&lt;/h1&gt;
        &lt;!-- 展示错误信息 --&gt;
        &lt;h1 v-show=&quot;info.errMsg&quot;&gt;{{errMsg}}&lt;/h1&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
    export default {
        name:&#39;List&#39;,
        data() {
            return {
                info:{
                    isFirst:true,
                    isLoading:false,
                    errMsg:&#39;&#39;,
                    users:[]
                }
            }
        },
        mounted(){
            this.$bus.$on(&#39;updateListData&#39;,(dataObj)=&gt;{
                this.info = {...this.info,...dataObj}
            })
        },
        beforeDestroy(){
            this.$bus.$off(&#39;updateListData&#39;)
        }
    }
&lt;/script&gt;

&lt;style scoped&gt;
    .album {
min-height: 50rem; /* Can be removed; just added for demo purposes */
padding-top: 3rem;
padding-bottom: 3rem;
background-color: #f7f7f7;
}

.card {
float: left;
width: 33.333%;
padding: .75rem;
margin-bottom: 2rem;
border: 1px solid #efefef;
text-align: center;
}

.card &gt; img {
margin-bottom: .75rem;
border-radius: 100px;
}

.card-text {
font-size: 85%;
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>总结：</strong></p><p>vue项目常用的两个Ajax库：</p><ol><li>axios：通用的Ajax请求库，官方推荐，效率高</li><li>vue-resource：vue插件库，vue 1.x使用广泛，官方已不维护</li></ol><h3 id="_4-4-slot插槽" tabindex="-1"><a class="header-anchor" href="#_4-4-slot插槽" aria-hidden="true">#</a> 4.4. slot插槽</h3><h4 id="_4-4-1-默认插槽" tabindex="-1"><a class="header-anchor" href="#_4-4-1-默认插槽" aria-hidden="true">#</a> 4.4.1. 默认插槽</h4><p><code>src/App.vue</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
&lt;div class=&quot;container&quot;&gt;
&lt;Category title=&quot;美食&quot; &gt;
&lt;img src=&quot;https://s3.ax1x.com/2021/01/16/srJlq0.jpg&quot; alt=&quot;&quot;&gt;
&lt;/Category&gt;

&lt;Category title=&quot;游戏&quot; &gt;
&lt;ul&gt;
&lt;li v-for=&quot;(g,index) in games&quot; :key=&quot;index&quot;&gt;{{g}}&lt;/li&gt;
&lt;/ul&gt;
&lt;/Category&gt;

&lt;Category title=&quot;电影&quot;&gt;
&lt;video controls src=&quot;http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4&quot;&gt;&lt;/video&gt;
&lt;/Category&gt;
&lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import Category from &#39;./components/Category&#39;
export default {
name:&#39;App&#39;,
components:{Category},
data() {
return {
games:[&#39;植物大战僵尸&#39;,&#39;红色警戒&#39;,&#39;空洞骑士&#39;,&#39;王国&#39;]
}
},
}
&lt;/script&gt;

&lt;style scoped&gt;
.container{
display: flex;
justify-content: space-around;
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>src/components/Category.vue</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
&lt;div class=&quot;category&quot;&gt;
&lt;h3&gt;{{title}}分类&lt;/h3&gt;
&lt;!-- 定义一个插槽（挖个坑，等着组件的使用者进行填充） --&gt;
&lt;slot&gt;我是一些默认值，当使用者没有传递具体结构时，我会出现&lt;/slot&gt;
&lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
name:&#39;Category&#39;,
props:[&#39;title&#39;]
}
&lt;/script&gt;

&lt;style scoped&gt;
.category{
background-color: skyblue;
width: 200px;
height: 300px;
}
h3{
text-align: center;
background-color: orange;
}
video{
width: 100%;
}
img{
width: 100%;
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>效果：</strong></p><p><img src="https://img-blog.csdnimg.cn/img_convert/90906f4a9a5ebe8b6ef1f851ffbd5015.png" alt=""></p><h4 id="_4-4-2-具名插槽" tabindex="-1"><a class="header-anchor" href="#_4-4-2-具名插槽" aria-hidden="true">#</a> 4.4.2. 具名插槽</h4><p><code>src/App.vue</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
&lt;div class=&quot;container&quot;&gt;
&lt;Category title=&quot;美食&quot; &gt;
&lt;img slot=&quot;center&quot; src=&quot;https://s3.ax1x.com/2021/01/16/srJlq0.jpg&quot; alt=&quot;&quot;&gt;
&lt;a slot=&quot;footer&quot; href=&quot;http://www.atguigu.com&quot;&gt;更多美食&lt;/a&gt;
&lt;/Category&gt;

&lt;Category title=&quot;游戏&quot; &gt;
&lt;ul slot=&quot;center&quot;&gt;
&lt;li v-for=&quot;(g,index) in games&quot; :key=&quot;index&quot;&gt;{{g}}&lt;/li&gt;
&lt;/ul&gt;
&lt;div class=&quot;foot&quot; slot=&quot;footer&quot;&gt;
&lt;a href=&quot;http://www.atguigu.com&quot;&gt;单机游戏&lt;/a&gt;
&lt;a href=&quot;http://www.atguigu.com&quot;&gt;网络游戏&lt;/a&gt;
&lt;/div&gt;
&lt;/Category&gt;

&lt;Category title=&quot;电影&quot;&gt;
&lt;video slot=&quot;center&quot; controls src=&quot;http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4&quot;&gt;&lt;/video&gt;
&lt;template v-slot:footer&gt;
&lt;div class=&quot;foot&quot;&gt;
&lt;a href=&quot;http://www.atguigu.com&quot;&gt;经典&lt;/a&gt;
&lt;a href=&quot;http://www.atguigu.com&quot;&gt;热门&lt;/a&gt;
&lt;a href=&quot;http://www.atguigu.com&quot;&gt;推荐&lt;/a&gt;
&lt;/div&gt;
&lt;h4&gt;欢迎前来观影&lt;/h4&gt;
&lt;/template&gt;
&lt;/Category&gt;
&lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import Category from &#39;./components/Category&#39;
export default {
name:&#39;App&#39;,
components:{Category},
data() {
return {
games:[&#39;植物大战僵尸&#39;,&#39;红色警戒&#39;,&#39;空洞骑士&#39;,&#39;王国&#39;]
}
},
}
&lt;/script&gt;

&lt;style&gt;
.container,.foot{
display: flex;
justify-content: space-around;
}
h4{
text-align: center;
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>src/components/Category.vue</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
&lt;div class=&quot;category&quot;&gt;
&lt;h3&gt;{{title}}分类&lt;/h3&gt;
&lt;!-- 定义一个插槽（挖个坑，等着组件的使用者进行填充） --&gt;
&lt;slot name=&quot;center&quot;&gt;我是一些默认值，当使用者没有传递具体结构时，我会出现1&lt;/slot&gt;
        &lt;slot name=&quot;footer&quot;&gt;我是一些默认值，当使用者没有传递具体结构时，我会出现2&lt;/slot&gt;
&lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
name:&#39;Category&#39;,
props:[&#39;title&#39;]
}
&lt;/script&gt;

&lt;style scoped&gt;
.category{
background-color: skyblue;
width: 200px;
height: 300px;
}
h3{
text-align: center;
background-color: orange;
}
video{
width: 100%;
}
img{
width: 100%;
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>效果：</strong></p><p><img src="https://img-blog.csdnimg.cn/img_convert/b7f50cd90a997eb720e2286ecb4e074b.png" alt=""></p><h4 id="_4-4-3-作用域插槽" tabindex="-1"><a class="header-anchor" href="#_4-4-3-作用域插槽" aria-hidden="true">#</a> 4.4.3. 作用域插槽</h4><p><code>src/App.vue</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
&lt;div class=&quot;container&quot;&gt;
&lt;Category title=&quot;游戏&quot; &gt;
&lt;template scope=&quot;jojo&quot;&gt;
&lt;ul&gt;
&lt;li v-for=&quot;(g,index) in jojo.games&quot; :key=&quot;index&quot;&gt;{{g}}&lt;/li&gt;
&lt;/ul&gt;
&lt;/template&gt;
&lt;/Category&gt;

&lt;Category title=&quot;游戏&quot; &gt;
&lt;template scope=&quot;jojo&quot;&gt;
&lt;ol&gt;
&lt;li v-for=&quot;(g,index) in jojo.games&quot; :key=&quot;index&quot;&gt;{{g}}&lt;/li&gt;
&lt;/ol&gt;
&lt;/template&gt;
&lt;/Category&gt;

&lt;Category title=&quot;游戏&quot; &gt;
&lt;template scope=&quot;jojo&quot;&gt;
&lt;h4 v-for=&quot;(g,index) in jojo.games&quot; :key=&quot;index&quot;&gt;{{g}}&lt;/h4&gt;
&lt;/template&gt;
&lt;/Category&gt;
&lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import Category from &#39;./components/Category&#39;
export default {
name:&#39;App&#39;,
components:{Category}
}
&lt;/script&gt;

&lt;style&gt;
.container,.foot{
display: flex;
justify-content: space-around;
}
h4{
text-align: center;
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>src/components/Category.vue</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
&lt;div class=&quot;category&quot;&gt;
&lt;h3&gt;{{title}}分类&lt;/h3&gt;
&lt;!-- 定义一个插槽（挖个坑，等着组件的使用者进行填充） --&gt;
&lt;slot :games=&quot;games&quot;&gt;我是一些默认值，当使用者没有传递具体结构时，我会出现1&lt;/slot&gt;
&lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
name:&#39;Category&#39;,
props:[&#39;title&#39;],
        data() {
return {
games:[&#39;植物大战僵尸&#39;,&#39;红色警戒&#39;,&#39;空洞骑士&#39;,&#39;王国&#39;]
}
},
}
&lt;/script&gt;

&lt;style scoped&gt;
.category{
background-color: skyblue;
width: 200px;
height: 300px;
}
h3{
text-align: center;
background-color: orange;
}
video{
width: 100%;
}
img{
width: 100%;
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>效果：</strong></p><p><img src="https://img-blog.csdnimg.cn/img_convert/4e238a3ae6aed01760ea436f606a02c2.png" alt=""></p><p><strong>总结：</strong></p><p>插槽：</p><ol><li><p>作用：让父组件可以向子组件指定位置插入html结构，也是一种组件间通信的方式，适用于==父组件 &gt; 子组件</p></li><li><p>分类：默认插槽、具名插槽、作用域插槽</p></li><li><p>使用方式：</p><ol><li><p>默认插槽：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>父组件中：
        &lt;Category&gt;
           &lt;div&gt;html结构1&lt;/div&gt;
        &lt;/Category&gt;
子组件中：
        &lt;template&gt;
            &lt;div&gt;
               &lt;slot&gt;插槽默认内容...&lt;/slot&gt;
            &lt;/div&gt;
        &lt;/template&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>具名插槽：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>父组件中：
        &lt;Category&gt;
            &lt;template slot=&quot;center&quot;&gt;
              &lt;div&gt;html结构1&lt;/div&gt;
            &lt;/template&gt;

            &lt;template v-slot:footer&gt;
               &lt;div&gt;html结构2&lt;/div&gt;
            &lt;/template&gt;
        &lt;/Category&gt;
子组件中：
        &lt;template&gt;
            &lt;div&gt;
               &lt;slot name=&quot;center&quot;&gt;插槽默认内容...&lt;/slot&gt;
                &lt;slot name=&quot;footer&quot;&gt;插槽默认内容...&lt;/slot&gt;
            &lt;/div&gt;
        &lt;/template&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>作用域插槽：</p><ol><li><p>理解：数据在组件的自身，但根据数据生成的结构需要组件的使用者来决定。（games数据在Category组件中，但使用数据所遍历出来的结构由App组件决定）</p></li><li><p>具体编码：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>父组件中：
&lt;Category&gt;
&lt;template scope=&quot;scopeData&quot;&gt;
&lt;!-- 生成的是ul列表 --&gt;
&lt;ul&gt;
&lt;li v-for=&quot;g in scopeData.games&quot; :key=&quot;g&quot;&gt;{{g}}&lt;/li&gt;
&lt;/ul&gt;
&lt;/template&gt;
&lt;/Category&gt;

&lt;Category&gt;
&lt;template slot-scope=&quot;scopeData&quot;&gt;
&lt;!-- 生成的是h4标题 --&gt;
&lt;h4 v-for=&quot;g in scopeData.games&quot; :key=&quot;g&quot;&gt;{{g}}&lt;/h4&gt;
&lt;/template&gt;
&lt;/Category&gt;
子组件中：
        &lt;template&gt;
            &lt;div&gt;
                &lt;slot :games=&quot;games&quot;&gt;&lt;/slot&gt;
            &lt;/div&gt;
        &lt;/template&gt;

        &lt;script&gt;
            export default {
                name:&#39;Category&#39;,
                props:[&#39;title&#39;],
                //数据在子组件自身
                data() {
                    return {
                        games:[&#39;红色警戒&#39;,&#39;穿越火线&#39;,&#39;劲舞团&#39;,&#39;超级玛丽&#39;]
                    }
                },
            }
        &lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol></li></ol></li></ol><h2 id="_5-vuex" tabindex="-1"><a class="header-anchor" href="#_5-vuex" aria-hidden="true">#</a> 5. Vuex</h2><h3 id="_5-1-理解vuex" tabindex="-1"><a class="header-anchor" href="#_5-1-理解vuex" aria-hidden="true">#</a> 5.1. 理解Vuex</h3><h4 id="_5-1-1-vuex是什么" tabindex="-1"><a class="header-anchor" href="#_5-1-1-vuex是什么" aria-hidden="true">#</a> 5.1.1. Vuex是什么</h4>`,253),N=i("li",null,"概念：专门在 Vue 中实现集中式状态（数据）管理的一个 Vue 插件，对 vue 应用中多个组件的共享状态进行集中式的管理（读/写），也是一种组件间通信的方式，且适用于任意组件间通信",-1),I={href:"https://github.com/vuejs/vuex",target:"_blank",rel:"noopener noreferrer"},E=d(`<p><img src="https://img-blog.csdnimg.cn/img_convert/d05c9692a5a926cd56d7f1039e8c7df9.png" alt=""></p><p><img src="https://img-blog.csdnimg.cn/img_convert/9926b14c9364517375b0e96780245dc6.png" alt=""></p><h4 id="_5-1-2-什么时候使用vuex" tabindex="-1"><a class="header-anchor" href="#_5-1-2-什么时候使用vuex" aria-hidden="true">#</a> 5.1.2. 什么时候使用Vuex</h4><ol><li>多个组件依赖于同一状态</li><li>来自不同组件的行为需要变更同一状态</li></ol><h4 id="_5-1-3-vuex工作原理图" tabindex="-1"><a class="header-anchor" href="#_5-1-3-vuex工作原理图" aria-hidden="true">#</a> 5.1.3. Vuex工作原理图</h4><p><img src="https://img-blog.csdnimg.cn/img_convert/11a966479bad6de2bc521d30b90d391f.png" alt="vuex"></p><h3 id="_5-2-求和案例" tabindex="-1"><a class="header-anchor" href="#_5-2-求和案例" aria-hidden="true">#</a> 5.2. 求和案例</h3><blockquote><p>下载<code>vuex</code>：<code>npm i vuex</code></p></blockquote><h4 id="_5-2-1-使用纯vue编写" tabindex="-1"><a class="header-anchor" href="#_5-2-1-使用纯vue编写" aria-hidden="true">#</a> 5.2.1. 使用纯vue编写</h4><p><code>src/App.vue</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
&lt;div class=&quot;container&quot;&gt;
&lt;Count/&gt;
&lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import Count from &#39;./components/Count&#39;
export default {
name:&#39;App&#39;,
components:{Count}
}
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>src/components/Count.vue</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
&lt;div&gt;
&lt;h1&gt;当前求和为：{{sum}}&lt;/h1&gt;
&lt;select v-model.number=&quot;n&quot;&gt;
&lt;option value=&quot;1&quot;&gt;1&lt;/option&gt;
&lt;option value=&quot;2&quot;&gt;2&lt;/option&gt;
&lt;option value=&quot;3&quot;&gt;3&lt;/option&gt;
&lt;/select&gt;
&lt;button @click=&quot;increment&quot;&gt;+&lt;/button&gt;
&lt;button @click=&quot;decrement&quot;&gt;-&lt;/button&gt;
&lt;button @click=&quot;incrementOdd&quot;&gt;当前求和为奇数再加&lt;/button&gt;
&lt;button @click=&quot;incrementWait&quot;&gt;等一等再加&lt;/button&gt;
&lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
name:&#39;Count&#39;,
data() {
return {
n:1, //用户选择的数字
sum:0 //当前的和
}
},
methods: {
increment(){
this.sum += this.n
},
decrement(){
this.sum -= this.n
},
incrementOdd(){
if(this.sum % 2){
this.sum += this.n
}
},
incrementWait(){
setTimeout(()=&gt;{
this.sum += this.n
},500)
},
},
}
&lt;/script&gt;

&lt;style&gt;
button{
margin-left: 5px;
}
&lt;/style&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>效果：</strong></p><p><img src="https://img-blog.csdnimg.cn/img_convert/974a3a88b7578230251f7e2cb9a3973b.png" alt=""></p><h4 id="_5-2-2-搭建vuex环境" tabindex="-1"><a class="header-anchor" href="#_5-2-2-搭建vuex环境" aria-hidden="true">#</a> 5.2.2. 搭建Vuex环境</h4><ol><li><p>下载 Vuex：<code>npm i vuex</code></p></li><li><p>创建<code>src/store/index.js</code>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//引入Vue核心库
import Vue from &#39;vue&#39;
//引入Vuex
import Vuex from &#39;vuex&#39;
//应用Vuex插件
Vue.use(Vuex)
   
//准备actions对象——响应组件中用户的动作、处理业务逻辑
const actions = {}
//准备mutations对象——修改state中的数据
const mutations = {}
//准备state对象——保存具体的数据
const state = {}
   
//创建并暴露store
export default new Vuex.Store({
   actions,
   mutations,
   state
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>在<code>src/main.js</code>中创建 vm 时传入<code>store</code>配置项：</p></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import Vue from &#39;vue&#39;
import App from &#39;./App.vue&#39;
import Vuex from &#39;vuex&#39;
import store from &#39;./store&#39;

Vue.config.productionTip = false

Vue.use(Vuex)

new Vue({
    el:&quot;#app&quot;,
    render: h =&gt; h(App),
    store
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-2-3-使用vuex编写" tabindex="-1"><a class="header-anchor" href="#_5-2-3-使用vuex编写" aria-hidden="true">#</a> 5.2.3. 使用Vuex编写</h4><p><code>src/components/Count.vue</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
&lt;div&gt;
&lt;h1&gt;当前求和为：{{$store.state.sum}}&lt;/h1&gt;
&lt;select v-model.number=&quot;n&quot;&gt;
&lt;option value=&quot;1&quot;&gt;1&lt;/option&gt;
&lt;option value=&quot;2&quot;&gt;2&lt;/option&gt;
&lt;option value=&quot;3&quot;&gt;3&lt;/option&gt;
&lt;/select&gt;
&lt;button @click=&quot;increment&quot;&gt;+&lt;/button&gt;
&lt;button @click=&quot;decrement&quot;&gt;-&lt;/button&gt;
&lt;button @click=&quot;incrementOdd&quot;&gt;当前求和为奇数再加&lt;/button&gt;
&lt;button @click=&quot;incrementWait&quot;&gt;等一等再加&lt;/button&gt;
&lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
name:&#39;Count&#39;,
data() {
return {
n:1, //用户选择的数字
}
},
methods: {
increment(){
this.$store.commit(&#39;ADD&#39;,this.n)
},
decrement(){
this.$store.commit(&#39;SUBTRACT&#39;,this.n)
},
incrementOdd(){
this.$store.dispatch(&#39;addOdd&#39;,this.n)
},
incrementWait(){
this.$store.dispatch(&#39;addWait&#39;,this.n)
},
},
}
&lt;/script&gt;

&lt;style&gt;
button{
margin-left: 5px;
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>src/store/index.js</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//引入Vue核心库
import Vue from &#39;vue&#39;
//引入Vuex
import Vuex from &#39;vuex&#39;
//应用Vuex插件
Vue.use(Vuex)
   
//准备actions对象——响应组件中用户的动作
const actions = {
    addOdd(context,value){
        console.log(&quot;actions中的addOdd被调用了&quot;)
        if(context.state.sum % 2){
            context.commit(&#39;ADD&#39;,value)
        }
    },
    addWait(context,value){
        console.log(&quot;actions中的addWait被调用了&quot;)
        setTimeout(()=&gt;{
context.commit(&#39;ADD&#39;,value)
},500)
    },
}
//准备mutations对象——修改state中的数据
const mutations = {
    ADD(state,value){
        state.sum += value
    },
    SUBTRACT(state,value){
        state.sum -= value
    }
}
//准备state对象——保存具体的数据
const state = {
    sum:0 //当前的和
}
   
//创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>总结：</strong></p><p>Vuex的基本使用：</p><ol><li><p>初始化数据<code>state</code>，配置<code>actions</code>、<code>mutations</code>，操作文件<code>store.js</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//引入Vue核心库
import Vue from &#39;vue&#39;
//引入Vuex
import Vuex from &#39;vuex&#39;
//引用Vuex
Vue.use(Vuex)

const actions = {
    //响应组件中加的动作
jia(context,value){
// console.log(&#39;actions中的jia被调用了&#39;,miniStore,value)
context.commit(&#39;JIA&#39;,value)
},
}

const mutations = {
    //执行加
JIA(state,value){
// console.log(&#39;mutations中的JIA被调用了&#39;,state,value)
state.sum += value
}
}

//初始化数据
const state = {
   sum:0
}

//创建并暴露store
export default new Vuex.Store({
actions,
mutations,
state,
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>组件中读取vuex中的数据：<code>$store.state.sum</code></p></li><li><p>组件中修改vuex中的数据：<code>$store.dispatch(&#39;action中的方法名&#39;,数据)</code> 或 <code>$store.commit(&#39;mutations中的方法名&#39;,数据)</code></p></li></ol><blockquote><p>备注：若没有网络请求或其他业务逻辑，组件中也可以越过<code>actions</code>，即不写<code>dispatch</code>，直接编写<code>commit</code></p></blockquote><h3 id="_5-3-getters配置项" tabindex="-1"><a class="header-anchor" href="#_5-3-getters配置项" aria-hidden="true">#</a> 5.3. getters配置项</h3><p><code>src/Count.vue</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
&lt;div&gt;
&lt;h1&gt;当前求和为：{{$store.state.sum}}&lt;/h1&gt;
&lt;h3&gt;当前求和的10倍为：{{$store.getters.bigSum}}&lt;/h3&gt;
&lt;select v-model.number=&quot;n&quot;&gt;
&lt;option value=&quot;1&quot;&gt;1&lt;/option&gt;
&lt;option value=&quot;2&quot;&gt;2&lt;/option&gt;
&lt;option value=&quot;3&quot;&gt;3&lt;/option&gt;
&lt;/select&gt;
&lt;button @click=&quot;increment&quot;&gt;+&lt;/button&gt;
&lt;button @click=&quot;decrement&quot;&gt;-&lt;/button&gt;
&lt;button @click=&quot;incrementOdd&quot;&gt;当前求和为奇数再加&lt;/button&gt;
&lt;button @click=&quot;incrementWait&quot;&gt;等一等再加&lt;/button&gt;
&lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
name:&#39;Count&#39;,
data() {
return {
n:1, //用户选择的数字
}
},
methods: {
increment(){
this.$store.commit(&#39;ADD&#39;,this.n)
},
decrement(){
this.$store.commit(&#39;SUBTRACT&#39;,this.n)
},
incrementOdd(){
this.$store.dispatch(&#39;addOdd&#39;,this.n)
},
incrementWait(){
this.$store.dispatch(&#39;addWait&#39;,this.n)
},
},
}
&lt;/script&gt;

&lt;style&gt;
button{
margin-left: 5px;
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>src/store/index.js</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//引入Vue核心库
import Vue from &#39;vue&#39;
//引入Vuex
import Vuex from &#39;vuex&#39;
//应用Vuex插件
Vue.use(Vuex)
   
//准备actions对象——响应组件中用户的动作
const actions = {
    addOdd(context,value){
        console.log(&quot;actions中的addOdd被调用了&quot;)
        if(context.state.sum % 2){
            context.commit(&#39;ADD&#39;,value)
        }
    },
    addWait(context,value){
        console.log(&quot;actions中的addWait被调用了&quot;)
        setTimeout(()=&gt;{
context.commit(&#39;ADD&#39;,value)
},500)
    },
}
//准备mutations对象——修改state中的数据
const mutations = {
    ADD(state,value){
        state.sum += value
    },
    SUBTRACT(state,value){
        state.sum -= value
    }
}
//准备state对象——保存具体的数据
const state = {
    sum:0 //当前的和
}
//准备getters对象——用于将state中的数据进行加工
const getters = {
    bigSum(){
        return state.sum * 10
    }
}
   
//创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>效果：</strong></p><p><img src="https://img-blog.csdnimg.cn/img_convert/e704817e83c7cb3b707da4be85cf5407.png" alt=""></p><p><strong>总结：</strong></p><p><code>getters</code>配置项的使用：</p><ol><li><p>概念：当<code>state</code>中的数据需要经过加工后再使用时，可以使用<code>getters</code>加工</p></li><li><p>在<code>store.js</code>中追加<code>getters</code>配置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>...
const getters = {
bigSum(state){
return state.sum * 10
}
}

//创建并暴露store
export default new Vuex.Store({
...
getters
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>组件中读取数据：<code>$store.getters.bigSum</code></p></li></ol><h3 id="_5-4-四个map方法的使用" tabindex="-1"><a class="header-anchor" href="#_5-4-四个map方法的使用" aria-hidden="true">#</a> 5.4. 四个map方法的使用</h3><h4 id="_5-4-1-mapstate与mapgetters" tabindex="-1"><a class="header-anchor" href="#_5-4-1-mapstate与mapgetters" aria-hidden="true">#</a> 5.4.1. mapState与mapGetters</h4><p><code>src/store/index.js</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//引入Vue核心库
import Vue from &#39;vue&#39;
//引入Vuex
import Vuex from &#39;vuex&#39;
//应用Vuex插件
Vue.use(Vuex)
   
//准备actions对象——响应组件中用户的动作
const actions = {
    addOdd(context,value){
        console.log(&quot;actions中的addOdd被调用了&quot;)
        if(context.state.sum % 2){
            context.commit(&#39;ADD&#39;,value)
        }
    },
    addWait(context,value){
        console.log(&quot;actions中的addWait被调用了&quot;)
        setTimeout(()=&gt;{
context.commit(&#39;ADD&#39;,value)
},500)
    },
}
//准备mutations对象——修改state中的数据
const mutations = {
    ADD(state,value){
        state.sum += value
    },
    SUBTRACT(state,value){
        state.sum -= value
    }
}
//准备state对象——保存具体的数据
const state = {
    sum:0, //当前的和
    name:&#39;JOJO&#39;,
    school:&#39;尚硅谷&#39;,
}
//准备getters对象——用于将state中的数据进行加工
const getters = {
    bigSum(){
        return state.sum * 10
    }
}
   
//创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>src/components/Count.vue</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
&lt;div&gt;
&lt;h1&gt;当前求和为：{{sum}}&lt;/h1&gt;
&lt;h3&gt;当前求和的10倍为：{{bigSum}}&lt;/h3&gt;
&lt;h3&gt;我是{{name}}，我在{{school}}学习&lt;/h3&gt;
&lt;select v-model.number=&quot;n&quot;&gt;
&lt;option value=&quot;1&quot;&gt;1&lt;/option&gt;
&lt;option value=&quot;2&quot;&gt;2&lt;/option&gt;
&lt;option value=&quot;3&quot;&gt;3&lt;/option&gt;
&lt;/select&gt;
&lt;button @click=&quot;increment&quot;&gt;+&lt;/button&gt;
&lt;button @click=&quot;decrement&quot;&gt;-&lt;/button&gt;
&lt;button @click=&quot;incrementOdd&quot;&gt;当前求和为奇数再加&lt;/button&gt;
&lt;button @click=&quot;incrementWait&quot;&gt;等一等再加&lt;/button&gt;
&lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import {mapState,mapGetters} from &#39;vuex&#39;

export default {
name:&#39;Count&#39;,
data() {
return {
n:1, //用户选择的数字
}
},
methods: {
increment(){
this.$store.commit(&#39;ADD&#39;,this.n)
},
decrement(){
this.$store.commit(&#39;SUBTRACT&#39;,this.n)
},
incrementOdd(){
this.$store.dispatch(&#39;addOdd&#39;,this.n)
},
incrementWait(){
this.$store.dispatch(&#39;addWait&#39;,this.n)
},
},
computed:{
// 借助mapState生成计算属性（数组写法）
// ...mapState([&#39;sum&#39;,&#39;school&#39;,&#39;name&#39;]),
// 借助mapState生成计算属性（对象写法）
...mapState({sum:&#39;sum&#39;,school:&#39;school&#39;,name:&#39;name&#39;}),

...mapGetters([&#39;bigSum&#39;])
}
}
&lt;/script&gt;

&lt;style&gt;
button{
margin-left: 5px;
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>效果：</strong></p><p><img src="https://img-blog.csdnimg.cn/img_convert/c0b1b7d7193190991f3bd6e9fb540719.png" alt=""></p><p><strong>总结：</strong></p><ol><li><p>mapState方法：用于帮助我们映射<code>state</code>中的数据</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>computed: {
    //借助mapState生成计算属性：sum、school、subject（对象写法）
     ...mapState({sum:&#39;sum&#39;,school:&#39;school&#39;,subject:&#39;subject&#39;}),
         
    //借助mapState生成计算属性：sum、school、subject（数组写法）
    ...mapState([&#39;sum&#39;,&#39;school&#39;,&#39;subject&#39;]),
},
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>mapGetters方法：用于帮助我们映射<code>getters</code>中的数据</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>computed: {
    //借助mapGetters生成计算属性：bigSum（对象写法）
    ...mapGetters({bigSum:&#39;bigSum&#39;}),

    //借助mapGetters生成计算属性：bigSum（数组写法）
    ...mapGetters([&#39;bigSum&#39;])
},
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h4 id="_5-4-2-mapactions与mapmutations" tabindex="-1"><a class="header-anchor" href="#_5-4-2-mapactions与mapmutations" aria-hidden="true">#</a> 5.4.2. mapActions与mapMutations</h4><p><code>src/components/Count.vue</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
&lt;div&gt;
&lt;h1&gt;当前求和为：{{sum}}&lt;/h1&gt;
&lt;h3&gt;当前求和的10倍为：{{bigSum}}&lt;/h3&gt;
&lt;h3&gt;我是{{name}}，我在{{school}}学习&lt;/h3&gt;
&lt;select v-model.number=&quot;n&quot;&gt;
&lt;option value=&quot;1&quot;&gt;1&lt;/option&gt;
&lt;option value=&quot;2&quot;&gt;2&lt;/option&gt;
&lt;option value=&quot;3&quot;&gt;3&lt;/option&gt;
&lt;/select&gt;
&lt;button @click=&quot;increment(n)&quot;&gt;+&lt;/button&gt;
&lt;button @click=&quot;decrement(n)&quot;&gt;-&lt;/button&gt;
&lt;button @click=&quot;incrementOdd(n)&quot;&gt;当前求和为奇数再加&lt;/button&gt;
&lt;button @click=&quot;incrementWait(n)&quot;&gt;等一等再加&lt;/button&gt;
&lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import {mapState,mapGetters,mapMutations,mapActions} from &#39;vuex&#39;

export default {
name:&#39;Count&#39;,
data() {
return {
n:1, //用户选择的数字
}
},
methods: {
// 借助mapActions生成：increment、decrement（对象形式）
...mapMutations({increment:&#39;ADD&#39;,decrement:&#39;SUBTRACT&#39;}),

// 借助mapActions生成：incrementOdd、incrementWait（对象形式）
...mapActions({incrementOdd:&#39;addOdd&#39;,incrementWait:&#39;addWait&#39;})
},
computed:{
// 借助mapState生成计算属性（数组写法）
// ...mapState([&#39;sum&#39;,&#39;school&#39;,&#39;name&#39;]),
// 借助mapState生成计算属性（对象写法）
...mapState({sum:&#39;sum&#39;,school:&#39;school&#39;,name:&#39;name&#39;}),

...mapGetters([&#39;bigSum&#39;])
}
}
&lt;/script&gt;

&lt;style&gt;
button{
margin-left: 5px;
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>总结：</strong></p><ol><li><p>mapActions方法：用于帮助我们生成与<code>actions</code>对话的方法，即：包含<code>$store.dispatch(xxx)</code>的函数</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>methods:{
    //靠mapActions生成：incrementOdd、incrementWait（对象形式）
    ...mapActions({incrementOdd:&#39;jiaOdd&#39;,incrementWait:&#39;jiaWait&#39;})

    //靠mapActions生成：incrementOdd、incrementWait（数组形式）
    ...mapActions([&#39;jiaOdd&#39;,&#39;jiaWait&#39;])
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>mapMutations方法：用于帮助我们生成与<code>mutations</code>对话的方法，即：包含<code>$store.commit(xxx)</code>的函数</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>methods:{
    //靠mapActions生成：increment、decrement（对象形式）
    ...mapMutations({increment:&#39;JIA&#39;,decrement:&#39;JIAN&#39;}),
    
    //靠mapMutations生成：JIA、JIAN（对象形式）
    ...mapMutations([&#39;JIA&#39;,&#39;JIAN&#39;]),
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><blockquote><p>备注：<code>mapActions</code>与<code>mapMutations</code>使用时，若需要传递参数，则需要在模板中绑定事件时传递好参数，否则参数是事件对象</p></blockquote><h3 id="_5-5-多组件共享数据" tabindex="-1"><a class="header-anchor" href="#_5-5-多组件共享数据" aria-hidden="true">#</a> 5.5. 多组件共享数据</h3><p><code>src/App.vue</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
&lt;div class=&quot;container&quot;&gt;
&lt;Count/&gt;
&lt;hr/&gt;
&lt;Person/&gt;
&lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import Count from &#39;./components/Count&#39;
import Person from &#39;./components/Person&#39;

export default {
name:&#39;App&#39;,
components:{Count,Person}
}
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>src/store/index.js</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//引入Vue核心库
import Vue from &#39;vue&#39;
//引入Vuex
import Vuex from &#39;vuex&#39;
//应用Vuex插件
Vue.use(Vuex)
   
//准备actions对象——响应组件中用户的动作
const actions = {
    addOdd(context,value){
        console.log(&quot;actions中的addOdd被调用了&quot;)
        if(context.state.sum % 2){
            context.commit(&#39;ADD&#39;,value)
        }
    },
    addWait(context,value){
        console.log(&quot;actions中的addWait被调用了&quot;)
        setTimeout(()=&gt;{
context.commit(&#39;ADD&#39;,value)
},500)
    },
}
//准备mutations对象——修改state中的数据
const mutations = {
    ADD(state,value){
        state.sum += value
    },
    SUBTRACT(state,value){
        state.sum -= value
    },
ADD_PERSON(state,value){
console.log(&#39;mutations中的ADD_PERSON被调用了&#39;)
state.personList.unshift(value)
}
}
//准备state对象——保存具体的数据
const state = {
    sum:0, //当前的和
    name:&#39;JOJO&#39;,
    school:&#39;尚硅谷&#39;,
    personList:[
{id:&#39;001&#39;,name:&#39;JOJO&#39;}
]
}
//准备getters对象——用于将state中的数据进行加工
const getters = {
    bigSum(){
        return state.sum * 10
    }
}
   
//创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>src/components/Count.vue</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
&lt;div&gt;
&lt;h1&gt;当前求和为：{{sum}}&lt;/h1&gt;
&lt;h3&gt;当前求和的10倍为：{{bigSum}}&lt;/h3&gt;
&lt;h3&gt;我是{{name}}，我在{{school}}学习&lt;/h3&gt;
&lt;h3 style=&quot;color:red&quot;&gt;Person组件的总人数是：{{personList.length}}&lt;/h3&gt;
&lt;select v-model.number=&quot;n&quot;&gt;
&lt;option value=&quot;1&quot;&gt;1&lt;/option&gt;
&lt;option value=&quot;2&quot;&gt;2&lt;/option&gt;
&lt;option value=&quot;3&quot;&gt;3&lt;/option&gt;
&lt;/select&gt;
&lt;button @click=&quot;increment(n)&quot;&gt;+&lt;/button&gt;
&lt;button @click=&quot;decrement(n)&quot;&gt;-&lt;/button&gt;
&lt;button @click=&quot;incrementOdd(n)&quot;&gt;当前求和为奇数再加&lt;/button&gt;
&lt;button @click=&quot;incrementWait(n)&quot;&gt;等一等再加&lt;/button&gt;
&lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import {mapState,mapGetters,mapMutations,mapActions} from &#39;vuex&#39;

export default {
name:&#39;Count&#39;,
data() {
return {
n:1, //用户选择的数字
}
},
methods: {
...mapMutations({increment:&#39;ADD&#39;,decrement:&#39;SUBTRACT&#39;}),
...mapActions({incrementOdd:&#39;addOdd&#39;,incrementWait:&#39;addWait&#39;})
},
computed:{
...mapState([&#39;sum&#39;,&#39;school&#39;,&#39;name&#39;,&#39;personList&#39;]),,
...mapGetters([&#39;bigSum&#39;])
}
}
&lt;/script&gt;

&lt;style&gt;
button{
margin-left: 5px;
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>src/components/Person.vue</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
&lt;div&gt;
&lt;h1&gt;人员列表&lt;/h1&gt;
&lt;h3 style=&quot;color:red&quot;&gt;Count组件求和为：{{sum}}&lt;/h3&gt;
&lt;input type=&quot;text&quot; placeholder=&quot;请输入名字&quot; v-model=&quot;name&quot;&gt;
&lt;button @click=&quot;add&quot;&gt;添加&lt;/button&gt;
&lt;ul&gt;
&lt;li v-for=&quot;p in personList&quot; :key=&quot;p.id&quot;&gt;{{p.name}}&lt;/li&gt;
&lt;/ul&gt;
&lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import {nanoid} from &#39;nanoid&#39;
export default {
name:&#39;Person&#39;,
data() {
return {
name:&#39;&#39;
}
},
computed:{
personList(){
return this.$store.state.personList
},
sum(){
return this.$store.state.sum
}
},
methods: {
add(){
const personObj = {id:nanoid(),name:this.name}
this.$store.commit(&#39;ADD_PERSON&#39;,personObj)
this.name = &#39;&#39;
}
}
}
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>效果：</strong></p><p><img src="https://img-blog.csdnimg.cn/img_convert/747e675d967f885eac8349ff3a458113.png" alt=""></p><h3 id="_5-6-模块化-命名空间" tabindex="-1"><a class="header-anchor" href="#_5-6-模块化-命名空间" aria-hidden="true">#</a> 5.6. 模块化+命名空间</h3><p><code>src/store/index.js</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//引入Vue核心库
import Vue from &#39;vue&#39;
//引入Vuex
import Vuex from &#39;vuex&#39;
//引入count
import countOptions from &#39;./count&#39;
//引入person
import personOptions from &#39;./person&#39;
//应用Vuex插件
Vue.use(Vuex)
   
//创建并暴露store
export default new Vuex.Store({
    modules:{
        countAbout:countOptions,
        personAbout:personOptions,
    }
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>src/store/count.js</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>export default{
    namespaced:true,
    actions:{
        addOdd(context,value){
            console.log(&quot;actions中的addOdd被调用了&quot;)
            if(context.state.sum % 2){
                context.commit(&#39;ADD&#39;,value)
            }
        },
        addWait(context,value){
            console.log(&quot;actions中的addWait被调用了&quot;)
            setTimeout(()=&gt;{
                context.commit(&#39;ADD&#39;,value)
            },500)
        }
    },
    mutations:{
        ADD(state,value){
            state.sum += value
        },
        SUBTRACT(state,value){
            state.sum -= value
        }
    },
    state:{
        sum:0, //当前的和
        name:&#39;JOJO&#39;,
        school:&#39;尚硅谷&#39;,
    },
    getters:{
        bigSum(state){
            return state.sum * 10
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>src/store/person.js</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import axios from &quot;axios&quot;
import { nanoid } from &quot;nanoid&quot;

export default{
    namespaced:true,
    actions:{
        addPersonWang(context,value){
            if(value.name.indexOf(&#39;王&#39;) === 0){
                context.commit(&#39;ADD_PERSON&#39;,value)
            }else{
                alert(&#39;添加的人必须姓王！&#39;)
            }
        },
        addPersonServer(context){
            axios.get(&#39;http://api.uixsj.cn/hitokoto/get?type=social&#39;).then(
                response =&gt; {
                    context.commit(&#39;ADD_PERSON&#39;,{id:nanoid(),name:response.data})
                },
                error =&gt; {
                    alert(error.message)
                }
            )
        }
    },
    mutations:{
        ADD_PERSON(state,value){
            console.log(&#39;mutations中的ADD_PERSON被调用了&#39;)
            state.personList.unshift(value)
        }
    },
    state:{
        personList:[
            {id:&#39;001&#39;,name:&#39;JOJO&#39;}
        ]
    },
    getters:{
        firstPersonName(state){
            return state.personList[0].name
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>src/components/Count.vue</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
&lt;div&gt;
&lt;h1&gt;当前求和为：{{sum}}&lt;/h1&gt;
&lt;h3&gt;当前求和的10倍为：{{bigSum}}&lt;/h3&gt;
&lt;h3&gt;我是{{name}}，我在{{school}}学习&lt;/h3&gt;
&lt;h3 style=&quot;color:red&quot;&gt;Person组件的总人数是：{{personList.length}}&lt;/h3&gt;
&lt;select v-model.number=&quot;n&quot;&gt;
&lt;option value=&quot;1&quot;&gt;1&lt;/option&gt;
&lt;option value=&quot;2&quot;&gt;2&lt;/option&gt;
&lt;option value=&quot;3&quot;&gt;3&lt;/option&gt;
&lt;/select&gt;
&lt;button @click=&quot;increment(n)&quot;&gt;+&lt;/button&gt;
&lt;button @click=&quot;decrement(n)&quot;&gt;-&lt;/button&gt;
&lt;button @click=&quot;incrementOdd(n)&quot;&gt;当前求和为奇数再加&lt;/button&gt;
&lt;button @click=&quot;incrementWait(n)&quot;&gt;等一等再加&lt;/button&gt;
&lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import {mapState,mapGetters,mapMutations,mapActions} from &#39;vuex&#39;

export default {
name:&#39;Count&#39;,
data() {
return {
n:1, //用户选择的数字
}
},
methods: {
...mapMutations(&#39;countAbout&#39;,{increment:&#39;ADD&#39;,decrement:&#39;SUBTRACT&#39;}),
...mapActions(&#39;countAbout&#39;,{incrementOdd:&#39;addOdd&#39;,incrementWait:&#39;addWait&#39;})
},
computed:{
...mapState(&#39;countAbout&#39;,[&#39;sum&#39;,&#39;school&#39;,&#39;name&#39;]),
...mapGetters(&#39;countAbout&#39;,[&#39;bigSum&#39;]),
...mapState(&#39;personAbout&#39;,[&#39;personList&#39;])
}
}
&lt;/script&gt;

&lt;style&gt;
button{
margin-left: 5px;
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>src/components/Person.vue</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
&lt;div&gt;
&lt;h1&gt;人员列表&lt;/h1&gt;
&lt;h3 style=&quot;color:red&quot;&gt;Count组件求和为：{{sum}}&lt;/h3&gt;
        &lt;h3&gt;列表中第一个人的名字是：{{firstPersonName}}&lt;/h3&gt;
&lt;input type=&quot;text&quot; placeholder=&quot;请输入名字&quot; v-model=&quot;name&quot;&gt;
&lt;button @click=&quot;add&quot;&gt;添加&lt;/button&gt;
        &lt;button @click=&quot;addWang&quot;&gt;添加一个姓王的人&lt;/button&gt;
        &lt;button @click=&quot;addPerson&quot;&gt;随机添加一个人&lt;/button&gt;
&lt;ul&gt;
&lt;li v-for=&quot;p in personList&quot; :key=&quot;p.id&quot;&gt;{{p.name}}&lt;/li&gt;
&lt;/ul&gt;
&lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import {nanoid} from &#39;nanoid&#39;
export default {
name:&#39;Person&#39;,
data() {
return {
name:&#39;&#39;
}
},
computed:{
personList(){
return this.$store.state.personAbout.personList
},
sum(){
return this.$store.state.countAbout.sum
},
            firstPersonName(){
                return this.$store.getters[&#39;personAbout/firstPersonName&#39;]
            }
},
methods: {
add(){
const personObj = {id:nanoid(),name:this.name}
this.$store.commit(&#39;personAbout/ADD_PERSON&#39;,personObj)
this.name = &#39;&#39;
},
            addWang(){
                const personObj = {id:nanoid(),name:this.name}
this.$store.dispatch(&#39;personAbout/addPersonWang&#39;,personObj)
this.name = &#39;&#39;   
            },
            addPerson(){
                this.$store.dispatch(&#39;personAbout/addPersonServer&#39;)
            }
},
}
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>效果：</strong></p><p><img src="https://img-blog.csdnimg.cn/img_convert/d1c3df952d1a4cd91eab9e4b54b95f9c.png" alt=""></p><p><strong>总结：</strong></p><p>模块化+命名空间：</p><ol><li><p>目的：让代码更好维护，让多种数据分类更加明确</p></li><li><p>修改<code>store.js</code>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const countAbout = {
namespaced:true,//开启命名空间
state:{x:1},
    mutations: { ... },
    actions: { ... },
  getters: {
    bigSum(state){
       return state.sum * 10
    }
  }
}

const personAbout = {
  namespaced:true,//开启命名空间
  state:{ ... },
  mutations: { ... },
  actions: { ... }
}

const store = new Vuex.Store({
  modules: {
    countAbout,
    personAbout
  }
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>开启命名空间后，组件中读取<code>state</code>数据：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//方式一：自己直接读取
this.$store.state.personAbout.list
//方式二：借助mapState读取：
...mapState(&#39;countAbout&#39;,[&#39;sum&#39;,&#39;school&#39;,&#39;subject&#39;]),
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>开启命名空间后，组件中读取<code>getters</code>数据：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//方式一：自己直接读取
this.$store.getters[&#39;personAbout/firstPersonName&#39;]
//方式二：借助mapGetters读取：
...mapGetters(&#39;countAbout&#39;,[&#39;bigSum&#39;])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>开启命名空间后，组件中调用<code>dispatch</code>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//方式一：自己直接dispatch
this.$store.dispatch(&#39;personAbout/addPersonWang&#39;,person)
//方式二：借助mapActions：
...mapActions(&#39;countAbout&#39;,{incrementOdd:&#39;jiaOdd&#39;,incrementWait:&#39;jiaWait&#39;})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>开启命名空间后，组件中调用<code>commit</code>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//方式一：自己直接commit
this.$store.commit(&#39;personAbout/ADD_PERSON&#39;,person)
//方式二：借助mapMutations：
...mapMutations(&#39;countAbout&#39;,{increment:&#39;JIA&#39;,decrement:&#39;JIAN&#39;}),
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="_6-vue-router路由管理器" tabindex="-1"><a class="header-anchor" href="#_6-vue-router路由管理器" aria-hidden="true">#</a> 6. Vue Router路由管理器</h2><h3 id="_6-1-相关理解" tabindex="-1"><a class="header-anchor" href="#_6-1-相关理解" aria-hidden="true">#</a> 6.1 相关理解</h3><h4 id="_6-1-1-vue-router的理解" tabindex="-1"><a class="header-anchor" href="#_6-1-1-vue-router的理解" aria-hidden="true">#</a> 6.1.1 vue-router的理解</h4><ul><li>vue 的一个插件库，专门用来实现SPA 应用</li></ul><h4 id="_6-1-2-对spa应用的理解" tabindex="-1"><a class="header-anchor" href="#_6-1-2-对spa应用的理解" aria-hidden="true">#</a> 6.1.2 对SPA应用的理解</h4><ol><li>单页 Web 应用（single page web application，SPA）</li><li>整个应用只有一个完整的页面</li><li>点击页面中的导航链接不会刷新页面，只会做页面的局部更新</li><li>数据需要通过ajax请求获取</li></ol><p><img src="https://img-blog.csdnimg.cn/img_convert/689a07d50841e647cfdc079ae7bf6523.png" alt=""></p><h4 id="_6-1-3-路由的理解" tabindex="-1"><a class="header-anchor" href="#_6-1-3-路由的理解" aria-hidden="true">#</a> 6.1.3 路由的理解</h4><ol><li><p>什么是路由?</p><ol><li>一个路由就是一组映射关系（key - value）</li><li>key 为路径，value 可能是 function 或 componen</li></ol></li><li><p>路由分类</p><ol><li><p>后端路由：</p><ol><li>理解：value 是 function，用于处理客户端提交的请求</li><li>工作过程：服务器接收到一个请求时，根据请求路径找到匹配的函数来处理请求，返回响应数据</li></ol></li><li><p>前端路由：</p><ol><li>理解：value 是 component，用于展示页面内容</li><li>工作过程：当浏览器的路径改变时，对应的组件就会显示</li></ol></li></ol></li></ol><h3 id="_6-2-基本路由" tabindex="-1"><a class="header-anchor" href="#_6-2-基本路由" aria-hidden="true">#</a> 6.2 基本路由</h3><blockquote><p>下载<code>vue-router</code>：<code>npm i vue-router</code></p></blockquote><p><code>src/router/index.js</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//该文件专门用于创建整个应用的路由器
import VueRouter from &quot;vue-router&quot;;
//引入组件
import Home from &#39;../components/Home&#39;
import About from &#39;../components/About&#39;

//创建并暴露一个路由器
export default new VueRouter({
    routes:[
        {
            path:&#39;/about&#39;,
            component:About
        },
        {
            path:&#39;/home&#39;,
            component:Home
        }
    ]
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>src/main.js</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import Vue from &#39;vue&#39;
import App from &#39;./App.vue&#39;
import VueRouter from &#39;vue-router&#39;
import router from &#39;./router&#39;

Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
    el:&quot;#app&quot;,
    render: h =&gt; h(App),
    router
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>src/App.vue</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
&lt;div&gt;
&lt;div class=&quot;row&quot;&gt;
&lt;div class=&quot;col-xs-offset-2 col-xs-8&quot;&gt;
&lt;div class=&quot;page-header&quot;&gt;&lt;h2&gt;Vue Router Demo&lt;/h2&gt;&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;row&quot;&gt;
&lt;div class=&quot;col-xs-2 col-xs-offset-2&quot;&gt;
&lt;div class=&quot;list-group&quot;&gt;
&lt;!-- 原始html中我们使用a标签实现页面跳转 --&gt;
&lt;!-- &lt;a class=&quot;list-group-item active&quot; href=&quot;./about.html&quot;&gt;About&lt;/a&gt;
&lt;a class=&quot;list-group-item&quot; href=&quot;./home.html&quot;&gt;Home&lt;/a&gt; --&gt;

&lt;!-- Vue中借助router-link标签实现路由的切换 --&gt;
&lt;router-link class=&quot;list-group-item&quot; active-class=&quot;active&quot; to=&quot;/about&quot;&gt; About
    &lt;/router-link&gt;
&lt;router-link class=&quot;list-group-item&quot; active-class=&quot;active&quot; to=&quot;/home&quot;&gt;
                        Home
    &lt;/router-link&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;col-xs-6&quot;&gt;
&lt;div class=&quot;panel&quot;&gt;
&lt;div class=&quot;panel-body&quot;&gt;
&lt;!-- 指定组件的呈现位置 --&gt;
&lt;router-view&gt;&lt;/router-view&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
name:&#39;App&#39;,
}
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>src/components/Home.vue</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
  &lt;h2&gt;我是Home组件的内容&lt;/h2&gt;
&lt;/template&gt;

&lt;script&gt;
    export default {
        name:&#39;Home&#39;
    }
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>src/components/About.vue</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
  &lt;h2&gt;我是About组件的内容&lt;/h2&gt;
&lt;/template&gt;

&lt;script&gt;
    export default {
        name:&#39;About&#39;
    }
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>总结：</strong></p><ol><li><p>安装<code>vue-router</code>，命令：<code>npm i vue-router</code></p></li><li><p>应用插件：<code>Vue.use(VueRouter)</code></p></li><li><p>编写router配置项：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//引入VueRouter
import VueRouter from &#39;vue-router&#39;
//引入Luyou 组件
import About from &#39;../components/About&#39;
import Home from &#39;../components/Home&#39;

//创建router实例对象，去管理一组一组的路由规则
const router = new VueRouter({
routes:[
{
path:&#39;/about&#39;,
component:About
},
{
path:&#39;/home&#39;,
component:Home
}
]
})

//暴露router
export default router
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>实现切换（<code>active-class</code>可配置高亮样式）：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;router-link active-class=&quot;active&quot; to=&quot;/about&quot;&gt;About&lt;/router-link&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>指定展示位：<code>&lt;router-view&gt;&lt;/router-view&gt;</code></p></li></ol><h3 id="_6-3-几个注意事项" tabindex="-1"><a class="header-anchor" href="#_6-3-几个注意事项" aria-hidden="true">#</a> 6.3. 几个注意事项</h3><ol><li><p>路由组件通常存放在<code>pages</code>文件夹，一般组件通常存放在<code>components</code>文件夹</p><p>比如上一节的案例就可以修改为：</p><p><code>src/pages/Home.vue</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
  &lt;h2&gt;我是Home组件的内容&lt;/h2&gt;
&lt;/template&gt;

&lt;script&gt;
    export default {
        name:&#39;Home&#39;
    }
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>src/pages/About.vue</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
  &lt;h2&gt;我是About组件的内容&lt;/h2&gt;
&lt;/template&gt;

&lt;script&gt;
    export default {
        name:&#39;About&#39;
    }
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>src/router/index.js</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//该文件专门用于创建整个应用的路由器
import VueRouter from &quot;vue-router&quot;;
//引入组件
import Home from &#39;../pages/Home&#39;
import About from &#39;../pages/About&#39;

//创建并暴露一个路由器
export default new VueRouter({
    routes:[
        {
            path:&#39;/about&#39;,
            component:About
        },
        {
            path:&#39;/home&#39;,
            component:Home
        }
    ]
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>src/components/Banner.vue</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
    &lt;div class=&quot;col-xs-offset-2 col-xs-8&quot;&gt;
        &lt;div class=&quot;page-header&quot;&gt;&lt;h2&gt;Vue Router Demo&lt;/h2&gt;&lt;/div&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
    export default {
        name:&#39;Banner&#39;
    }
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>src/App.vue</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
    &lt;div&gt;
    &lt;div class=&quot;row&quot;&gt;
    &lt;Banner/&gt;
    &lt;/div&gt;
    &lt;div class=&quot;row&quot;&gt;
    &lt;div class=&quot;col-xs-2 col-xs-offset-2&quot;&gt;
    &lt;div class=&quot;list-group&quot;&gt;
    &lt;!-- 原始html中我们使用a标签实现页面跳转 --&gt;
    &lt;!-- &lt;a class=&quot;list-group-item active&quot; href=&quot;./about.html&quot;&gt;About&lt;/a&gt;
    &lt;a class=&quot;list-group-item&quot; href=&quot;./home.html&quot;&gt;Home&lt;/a&gt; --&gt;
&lt;!-- Vue中借助router-link标签实现路由的切换 --&gt;
&lt;router-link class=&quot;list-group-item&quot; active-class=&quot;active&quot; to=&quot;/about&quot;&gt;
                        About
    &lt;/router-link&gt;
&lt;router-link class=&quot;list-group-item&quot; active-class=&quot;active&quot; to=&quot;/home&quot;&gt;
                        Home
    &lt;/router-link&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;col-xs-6&quot;&gt;
&lt;div class=&quot;panel&quot;&gt;
&lt;div class=&quot;panel-body&quot;&gt;
&lt;!-- 指定组件的呈现位置 --&gt;
&lt;router-view&gt;&lt;/router-view&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import Banner from &#39;./components/Banner.vue&#39;
export default {
name:&#39;App&#39;,
components:{Banner}
}
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>通过切换，“隐藏”了的路由组件，默认是被销毁掉的，需要的时候再去挂载</p></li><li><p>每个组件都有自己的<code>$route</code>属性，里面存储着自己的路由信息</p></li><li><p>整个应用只有一个router，可以通过组件的<code>$router</code>属性获取到</p></li></ol><h3 id="_6-4-多级路由" tabindex="-1"><a class="header-anchor" href="#_6-4-多级路由" aria-hidden="true">#</a> 6.4. 多级路由</h3><p><code>src/pages/Home.vue</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
    &lt;div&gt;
        &lt;h2&gt;Home组件内容&lt;/h2&gt;
&lt;div&gt;
&lt;ul class=&quot;nav nav-tabs&quot;&gt;
&lt;li&gt;
&lt;router-link class=&quot;list-group-item&quot; active-class=&quot;active&quot; to=&quot;/home/news&quot;&gt; 
                        News
    &lt;/router-link&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;router-link class=&quot;list-group-item&quot; active-class=&quot;active&quot; to=&quot;/home/message&quot;&gt;
                        Message
    &lt;/router-link&gt;
&lt;/li&gt;
&lt;/ul&gt;
&lt;router-view&gt;&lt;/router-view&gt;
&lt;/div&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
    export default {
        name:&#39;Home&#39;
    }
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>src/pages/News.vue</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
    &lt;ul&gt;
        &lt;li&gt;news001&lt;/li&gt;
        &lt;li&gt;news002&lt;/li&gt;
        &lt;li&gt;news003&lt;/li&gt;
    &lt;/ul&gt;
&lt;/template&gt;

&lt;script&gt;
    export default {
        name:&#39;News&#39;
    }
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>src/pages/Message.vue</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
    &lt;ul&gt;
        &lt;li&gt;
            &lt;a href=&quot;/message1&quot;&gt;message001&lt;/a&gt;&amp;nbsp;&amp;nbsp;
        &lt;/li&gt;
        &lt;li&gt;
            &lt;a href=&quot;/message2&quot;&gt;message002&lt;/a&gt;&amp;nbsp;&amp;nbsp;
        &lt;/li&gt;
        &lt;li&gt;
            &lt;a href=&quot;/message/3&quot;&gt;message003&lt;/a&gt;&amp;nbsp;&amp;nbsp;
        &lt;/li&gt;
    &lt;/ul&gt;
&lt;/template&gt;

&lt;script&gt;
    export default {
        name:&#39;News&#39;
    }
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>src/router/index.js</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//该文件专门用于创建整个应用的路由器
import VueRouter from &quot;vue-router&quot;;
//引入组件
import Home from &#39;../pages/Home&#39;
import About from &#39;../pages/About&#39;
import News from &#39;../pages/News&#39;
import Message from &#39;../pages/Message&#39;

//创建并暴露一个路由器
export default new VueRouter({
    routes:[
        {
            path:&#39;/about&#39;,
            component:About
        },
        {
            path:&#39;/home&#39;,
            component:Home,
            children:[
                {
                    path:&#39;news&#39;,
                    component:News
                },
                {
                    path:&#39;message&#39;,
                    component:Message
                }
            ]
        }
    ]
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>效果：</strong></p><p><img src="https://img-blog.csdnimg.cn/img_convert/6525f906821b89cdfd6003c325a856bd.png" alt=""></p><p><strong>总结：</strong></p><ol><li><p>配置路由规则，使用children配置项：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>routes:[
{
path:&#39;/about&#39;,
component:About,
},
{
path:&#39;/home&#39;,
component:Home,
children:[ //通过children配置子级路由
{
path:&#39;news&#39;, //此处一定不要写：/news
component:News
},
{
path:&#39;message&#39;, //此处一定不要写：/message
component:Message
}
]
}
]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>跳转（要写完整路径）：<code>&lt;router-link to=&quot;/home/news&quot;&gt;News&lt;/router-link&gt;</code></p></li></ol><h3 id="_6-5-路由的query参数" tabindex="-1"><a class="header-anchor" href="#_6-5-路由的query参数" aria-hidden="true">#</a> 6.5. 路由的query参数</h3><p><code>src/router.index.js</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//该文件专门用于创建整个应用的路由器
import VueRouter from &quot;vue-router&quot;;
//引入组件
import Home from &#39;../pages/Home&#39;
import About from &#39;../pages/About&#39;
import News from &#39;../pages/News&#39;
import Message from &#39;../pages/Message&#39;
import Detail from &#39;../pages/Detail&#39;


//创建并暴露一个路由器
export default new VueRouter({
    routes:[
        {
            path:&#39;/about&#39;,
            component:About
        },
        {
            path:&#39;/home&#39;,
            component:Home,
            children:[
                {
                    path:&#39;news&#39;,
                    component:News
                },
                {
                    path:&#39;message&#39;,
                    component:Message,
                    children:[
                        {
                            path:&#39;detail&#39;,
                            component:Detail
                        }
                    ]
                }
            ]
        }
    ]
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>src/pages/Detail.vue</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
    &lt;ul&gt;
        &lt;li&gt;消息编号：{{$route.query.id}}&lt;/li&gt;
        &lt;li&gt;消息标题：{{$route.query.title}}&lt;/li&gt;
    &lt;/ul&gt;
&lt;/template&gt;

&lt;script&gt;
    export default {
        name:&#39;Detail&#39;
    }
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>src/pages/Message.vue</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
    &lt;div&gt;
        &lt;ul&gt;
            &lt;li v-for=&quot;m in messageList&quot; :key=&quot;m.id&quot;&gt;
                &lt;!-- 跳转路由并携带query参数，to的字符串写法 --&gt;
                &lt;!-- &lt;router-link :to=&quot;\`/home/message/detail?id=\${m.id}&amp;title=\${m.title}\`&quot;&gt;
                    {{m.title}}
                &lt;/router-link&gt;&amp;nbsp;&amp;nbsp; --&gt;

                &lt;!-- 跳转路由并携带query参数，to的对象写法 --&gt;
                &lt;router-link :to=&quot;{
                    path:&#39;/home/message/detail&#39;,
                    query:{
                        id:m.id,
                        title:m.title
                    }
                }&quot;&gt;
                    {{m.title}}
                &lt;/router-link&gt;&amp;nbsp;&amp;nbsp;
            &lt;/li&gt;
        &lt;/ul&gt;
        &lt;hr/&gt;
        &lt;router-view&gt;&lt;/router-view&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
    export default {
        name:&#39;News&#39;,
        data(){
            return{
                messageList:[
                    {id:&#39;001&#39;,title:&#39;消息001&#39;},
                    {id:&#39;002&#39;,title:&#39;消息002&#39;},
                    {id:&#39;003&#39;,title:&#39;消息003&#39;}
                ]
            }
        }
    }
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>效果：</strong></p><p><img src="https://img-blog.csdnimg.cn/img_convert/c3c83d86aba27d9edff022ac1bf99eca.png" alt=""></p><p><strong>总结：</strong></p><ol><li><p>传递参数：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!-- 跳转并携带query参数，to的字符串写法 --&gt;
&lt;router-link :to=&quot;/home/message/detail?id=666&amp;title=你好&quot;&gt;跳转&lt;/router-link&gt;

&lt;!-- 跳转并携带query参数，to的对象写法 --&gt;
&lt;router-link :to=&quot;{
path:&#39;/home/message/detail&#39;,
query:{
id:666,
        title:&#39;你好&#39;
}
}&quot;&gt;跳转&lt;/router-link&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>接收参数：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$route.query.id
$route.query.title
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="_6-6-命名路由" tabindex="-1"><a class="header-anchor" href="#_6-6-命名路由" aria-hidden="true">#</a> 6.6. 命名路由</h3><p><code>src/router/index.js</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//该文件专门用于创建整个应用的路由器
import VueRouter from &quot;vue-router&quot;;
//引入组件
import Home from &#39;../pages/Home&#39;
import About from &#39;../pages/About&#39;
import News from &#39;../pages/News&#39;
import Message from &#39;../pages/Message&#39;
import Detail from &#39;../pages/Detail&#39;


//创建并暴露一个路由器
export default new VueRouter({
    routes:[
        {
            path:&#39;/about&#39;,
            component:About
        },
        {
            path:&#39;/home&#39;,
            component:Home,
            children:[
                {
                    path:&#39;news&#39;,
                    component:News
                },
                {
                    path:&#39;message&#39;,
                    component:Message,
                    children:[
                        {
                            //name配置项为路由命名
                            name:&#39;xiangqing&#39;,
                            path:&#39;detail&#39;,
                            component:Detail
                        }
                    ]
                }
            ]
        }
    ]
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>src/pages/Message.vue</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
    &lt;div&gt;
        &lt;ul&gt;
            &lt;li v-for=&quot;m in messageList&quot; :key=&quot;m.id&quot;&gt;
                &lt;!-- 跳转路由并携带query参数，to的字符串写法 --&gt;
                &lt;!-- &lt;router-link :to=&quot;\`/home/message/detail?id=\${m.id}&amp;title=\${m.title}\`&quot;&gt;
                    {{m.title}}
                &lt;/router-link&gt;&amp;nbsp;&amp;nbsp; --&gt;

                &lt;!-- 跳转路由并携带query参数，to的对象写法 --&gt;
                &lt;router-link :to=&quot;{
                    //使用name进行跳转
                    name:&#39;xiangqing&#39;,
                    query:{
                        id:m.id,
                        title:m.title
                    }
                }&quot;&gt;
                    {{m.title}}
                &lt;/router-link&gt;&amp;nbsp;&amp;nbsp;
            &lt;/li&gt;
        &lt;/ul&gt;
        &lt;hr/&gt;
        &lt;router-view&gt;&lt;/router-view&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
    export default {
        name:&#39;News&#39;,
        data(){
            return{
                messageList:[
                    {id:&#39;001&#39;,title:&#39;消息001&#39;},
                    {id:&#39;002&#39;,title:&#39;消息002&#39;},
                    {id:&#39;003&#39;,title:&#39;消息003&#39;}
                ]
            }
        }
    }
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>总结：</strong></p><p>命名路由：</p><ol><li><p>作用：可以简化路由的跳转</p></li><li><p>如何使用：</p><ol><li><p>给路由命名：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
path:&#39;/demo&#39;,
component:Demo,
children:[
{
path:&#39;test&#39;,
component:Test,
children:[
{
                    name:&#39;hello&#39; //给路由命名
path:&#39;welcome&#39;,
component:Hello,
}
]
}
]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>简化跳转：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!--简化前，需要写完整的路径 --&gt;
&lt;router-link to=&quot;/demo/test/welcome&quot;&gt;跳转&lt;/router-link&gt;

&lt;!--简化后，直接通过名字跳转 --&gt;
&lt;router-link :to=&quot;{name:&#39;hello&#39;}&quot;&gt;跳转&lt;/router-link&gt;

&lt;!--简化写法配合传递参数 --&gt;
&lt;router-link 
:to=&quot;{
name:&#39;hello&#39;,
query:{
    id:666,
            title:&#39;你好&#39;
}
}&quot;
&gt;跳转&lt;/router-link&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol></li></ol><h3 id="_6-7-路由的params参数" tabindex="-1"><a class="header-anchor" href="#_6-7-路由的params参数" aria-hidden="true">#</a> 6.7. 路由的params参数</h3><p><code>src/router/index.js</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//该文件专门用于创建整个应用的路由器
import VueRouter from &quot;vue-router&quot;;
//引入组件
import Home from &#39;../pages/Home&#39;
import About from &#39;../pages/About&#39;
import News from &#39;../pages/News&#39;
import Message from &#39;../pages/Message&#39;
import Detail from &#39;../pages/Detail&#39;


//创建并暴露一个路由器
export default new VueRouter({
    routes:[
        {
            path:&#39;/about&#39;,
            component:About
        },
        {
            path:&#39;/home&#39;,
            component:Home,
            children:[
                {
                    path:&#39;news&#39;,
                    component:News
                },
                {
                    path:&#39;message&#39;,
                    component:Message,
                    children:[
                        {
                            name:&#39;xiangqing&#39;,
                            path:&#39;detail/:id/:title&#39;,//使用占位符声明接收params参数
                            component:Detail
                        }
                    ]
                }
            ]
        }
    ]
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>src/pages/Message.vue</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
    &lt;div&gt;
        &lt;ul&gt;
            &lt;li v-for=&quot;m in messageList&quot; :key=&quot;m.id&quot;&gt;
                &lt;!-- 跳转路由并携带params参数，to的字符串写法 --&gt;
                &lt;!-- &lt;router-link :to=&quot;\`/home/message/detail/\${m.id}/\${m.title}\`&quot;&gt;
                    {{m.title}}
                &lt;/router-link&gt;&amp;nbsp;&amp;nbsp; --&gt;

                &lt;!-- 跳转路由并携带params参数，to的对象写法 --&gt;
                &lt;router-link :to=&quot;{
                    name:&#39;xiangqing&#39;,
                    params:{
                        id:m.id,
                        title:m.title
                    }
                }&quot;&gt;
                    {{m.title}}
                &lt;/router-link&gt;&amp;nbsp;&amp;nbsp;
            &lt;/li&gt;
        &lt;/ul&gt;
        &lt;hr/&gt;
        &lt;router-view&gt;&lt;/router-view&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
    export default {
        name:&#39;News&#39;,
        data(){
            return{
                messageList:[
                    {id:&#39;001&#39;,title:&#39;消息001&#39;},
                    {id:&#39;002&#39;,title:&#39;消息002&#39;},
                    {id:&#39;003&#39;,title:&#39;消息003&#39;}
                ]
            }
        }
    }
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>src/pages/Detail.vue</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
    &lt;ul&gt;
        &lt;li&gt;消息编号：{{$route.params.id}}&lt;/li&gt;
        &lt;li&gt;消息标题：{{$route.params.title}}&lt;/li&gt;
    &lt;/ul&gt;
&lt;/template&gt;

&lt;script&gt;
    export default {
        name:&#39;Detail&#39;
    }
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>总结：</strong></p><ol><li><p>配置路由，声明接收<code>params</code>参数：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
path:&#39;/home&#39;,
component:Home,
children:[
{
path:&#39;news&#39;,
component:News
},
{
component:Message,
children:[
{
name:&#39;xiangqing&#39;,
path:&#39;detail/:id/:title&#39;, //使用占位符声明接收params参数
component:Detail
}
]
}
]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>传递参数：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!-- 跳转并携带params参数，to的字符串写法 --&gt;
&lt;router-link :to=&quot;/home/message/detail/666/你好&quot;&gt;跳转&lt;/router-link&gt;

&lt;!-- 跳转并携带params参数，to的对象写法 --&gt;
&lt;router-link 
:to=&quot;{
name:&#39;xiangqing&#39;,
params:{
   id:666,
            title:&#39;你好&#39;
}
}&quot;
&gt;跳转&lt;/router-link&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>特别注意：路由携带params参数时，若使用to的对象写法，则不能使用path配置项，必须使用name配置！</p></blockquote></li><li><p>接收参数：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$route.params.id
$route.params.title
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="_6-8-路由的props配置" tabindex="-1"><a class="header-anchor" href="#_6-8-路由的props配置" aria-hidden="true">#</a> 6.8. 路由的props配置</h3><p><code>src/pages/Message.vue</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
    &lt;div&gt;
        &lt;ul&gt;
            &lt;li v-for=&quot;m in messageList&quot; :key=&quot;m.id&quot;&gt;
                &lt;router-link :to=&quot;{
                    name:&#39;xiangqing&#39;,
                    params:{
                        id:m.id,
                        title:m.title
                    }
                }&quot;&gt;
                    {{m.title}}
                &lt;/router-link&gt;&amp;nbsp;&amp;nbsp;
            &lt;/li&gt;
        &lt;/ul&gt;
        &lt;hr/&gt;
        &lt;router-view&gt;&lt;/router-view&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
    export default {
        name:&#39;News&#39;,
        data(){
            return{
                messageList:[
                    {id:&#39;001&#39;,title:&#39;消息001&#39;},
                    {id:&#39;002&#39;,title:&#39;消息002&#39;},
                    {id:&#39;003&#39;,title:&#39;消息003&#39;}
                ]
            }
        }
    }
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>src/router/index.js</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//该文件专门用于创建整个应用的路由器
import VueRouter from &quot;vue-router&quot;;
//引入组件
import Home from &#39;../pages/Home&#39;
import About from &#39;../pages/About&#39;
import News from &#39;../pages/News&#39;
import Message from &#39;../pages/Message&#39;
import Detail from &#39;../pages/Detail&#39;


//创建并暴露一个路由器
export default new VueRouter({
    routes:[
        {
            path:&#39;/about&#39;,
            component:About
        },
        {
            path:&#39;/home&#39;,
            component:Home,
            children:[
                {
                    path:&#39;news&#39;,
                    component:News
                },
                {
                    path:&#39;message&#39;,
                    component:Message,
                    children:[
                        {
                            name:&#39;xiangqing&#39;,
                            path:&#39;detail/:id/:title&#39;,
                            component:Detail,
                            //props的第一种写法，值为对象，该对象中的所有key-value都会以props的形式传给Detail组件。
// props:{a:1,b:&#39;hello&#39;}

//props的第二种写法，值为布尔值，若布尔值为真，就会把该路由组件收到的所有params参数，以props的形式传给Detail组件。
// props:true

//props的第三种写法，值为函数
props($route){
return {
id:$route.params.id,
title:$route.params.title,
}
}
                        }
                    ]
                }
            ]
        }
    ]
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>src/pages/Detail.vue</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
    &lt;ul&gt;
        &lt;li&gt;消息编号：{{id}}&lt;/li&gt;
        &lt;li&gt;消息标题：{{title}}&lt;/li&gt;
    &lt;/ul&gt;
&lt;/template&gt;

&lt;script&gt;
    export default {
        name:&#39;Detail&#39;,
        props:[&#39;id&#39;,&#39;title&#39;]
    }
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>总结：</strong></p><ul><li><p>作用：让路由组件更方便的收到参数</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
name:&#39;xiangqing&#39;,
path:&#39;detail/:id&#39;,
component:Detail,

//第一种写法：props值为对象，该对象中所有的key-value的组合最终都会通过props传给Detail组件
// props:{a:900}

//第二种写法：props值为布尔值，布尔值为true，则把路由收到的所有params参数通过props传给Detail组件
// props:true

//第三种写法：props值为函数，该函数返回的对象中每一组key-value都会通过props传给Detail组件
props(route){
return {
id:route.query.id,
title:route.query.title
}
}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="_6-9-路由跳转的replace方法" tabindex="-1"><a class="header-anchor" href="#_6-9-路由跳转的replace方法" aria-hidden="true">#</a> 6.9. 路由跳转的replace方法</h3><p><code>src/pages/Home.vue</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
    &lt;div&gt;
        &lt;h2&gt;Home组件内容&lt;/h2&gt;
&lt;div&gt;
&lt;ul class=&quot;nav nav-tabs&quot;&gt;
&lt;li&gt;
&lt;router-link replace class=&quot;list-group-item&quot; active-class=&quot;active&quot; to=&quot;/home/news&quot;&gt;News&lt;/router-link&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;router-link replace class=&quot;list-group-item&quot; active-class=&quot;active&quot; to=&quot;/home/message&quot;&gt;Message&lt;/router-link&gt;
&lt;/li&gt;
&lt;/ul&gt;
&lt;router-view&gt;&lt;/router-view&gt;
&lt;/div&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
    export default {
        name:&#39;Home&#39;
    }
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>总结：</strong></p><ol><li>作用：控制路由跳转时操作浏览器历史记录的模式</li><li>浏览器的历史记录有两种写入方式：<code>push</code>和<code>replace</code>，其中<code>push</code>是追加历史记录，<code>replace</code>是替换当前记录。路由跳转时候默认为<code>push</code>方式</li><li>开启<code>replace</code>模式：<code>&lt;router-link replace ...&gt;News&lt;/router-link&gt;</code></li></ol><h3 id="_6-10-编程式路由导航" tabindex="-1"><a class="header-anchor" href="#_6-10-编程式路由导航" aria-hidden="true">#</a> 6.10. 编程式路由导航</h3><p><code>src/components/Banner.vue</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
&lt;div class=&quot;col-xs-offset-2 col-xs-8&quot;&gt;
&lt;div class=&quot;page-header&quot;&gt;
&lt;h2&gt;Vue Router Demo&lt;/h2&gt;
&lt;button @click=&quot;back&quot;&gt;后退&lt;/button&gt;
&lt;button @click=&quot;forward&quot;&gt;前进&lt;/button&gt;
&lt;button @click=&quot;test&quot;&gt;测试一下go&lt;/button&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
name:&#39;Banner&#39;,
methods:{
back(){
this.$router.back()
},
forward(){
this.$router.forward()
},
test(){
this.$router.go(3)
}
},
}
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>src/pages/Message.vue</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
    &lt;div&gt;
        &lt;ul&gt;
            &lt;li v-for=&quot;m in messageList&quot; :key=&quot;m.id&quot;&gt;
                &lt;router-link :to=&quot;{
                    name:&#39;xiangqing&#39;,
                    params:{
                        id:m.id,
                        title:m.title
                    }
                }&quot;&gt;
                    {{m.title}}
                &lt;/router-link&gt;
                &lt;button @click=&quot;showPush(m)&quot;&gt;push查看&lt;/button&gt;
                &lt;button @click=&quot;showReplace(m)&quot;&gt;replace查看&lt;/button&gt;
            &lt;/li&gt;
        &lt;/ul&gt;
        &lt;hr/&gt;
        &lt;router-view&gt;&lt;/router-view&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
    export default {
        name:&#39;News&#39;,
        data(){
            return{
                messageList:[
                    {id:&#39;001&#39;,title:&#39;消息001&#39;},
                    {id:&#39;002&#39;,title:&#39;消息002&#39;},
                    {id:&#39;003&#39;,title:&#39;消息003&#39;}
                ]
            }
        },
        methods:{
            showPush(m){
                this.$router.push({
                    name:&#39;xiangqing&#39;,
                    query:{
                        id:m.id,
                        title:m.title
                    }
                })
            },
            showReplace(m){
                this.$router.replace({
                    name:&#39;xiangqing&#39;,
                    query:{
                        id:m.id,
                        title:m.title
                    }
                })
            }
        }
    }
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>src/router/index.js</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//该文件专门用于创建整个应用的路由器
import VueRouter from &quot;vue-router&quot;;
//引入组件
import Home from &#39;../pages/Home&#39;
import About from &#39;../pages/About&#39;
import News from &#39;../pages/News&#39;
import Message from &#39;../pages/Message&#39;
import Detail from &#39;../pages/Detail&#39;


//创建并暴露一个路由器
export default new VueRouter({
    routes:[
        {
            path:&#39;/about&#39;,
            component:About
        },
        {
            path:&#39;/home&#39;,
            component:Home,
            children:[
                {
                    path:&#39;news&#39;,
                    component:News
                },
                {
                    path:&#39;message&#39;,
                    component:Message,
                    children:[
                        {
                            name:&#39;xiangqing&#39;,
                            path:&#39;detail&#39;,
                            component:Detail,
props($route){
return {
id:$route.query.id,
title:$route.query.title,
}
}
                        }
                    ]
                }
            ]
        }
    ]
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>src/pages/Detail.vue</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
    &lt;ul&gt;
        &lt;li&gt;消息编号：{{id}}&lt;/li&gt;
        &lt;li&gt;消息标题：{{title}}&lt;/li&gt;
    &lt;/ul&gt;
&lt;/template&gt;

&lt;script&gt;
    export default {
        name:&#39;Detail&#39;,
        props:[&#39;id&#39;,&#39;title&#39;]
    }
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>效果：</strong></p><p><img src="https://img-blog.csdnimg.cn/img_convert/3547660b4d36e3221290391205735bb4.png" alt=""></p><p><strong>总结：</strong></p><ol><li><p>作用：不借助<code>&lt;router-link&gt;</code>实现路由跳转，让路由跳转更加灵活</p></li><li><p>具体编码：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>this.$router.push({
name:&#39;xiangqing&#39;,
    params:{
        id:xxx,
        title:xxx
    }
})

this.$router.replace({
name:&#39;xiangqing&#39;,
    params:{
        id:xxx,
        title:xxx
    }
})
this.$router.forward() //前进
this.$router.back() //后退
this.$router.go() //可前进也可后退
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="_6-11-缓存路由组件" tabindex="-1"><a class="header-anchor" href="#_6-11-缓存路由组件" aria-hidden="true">#</a> 6.11. 缓存路由组件</h3><p><code>src/pages/News.vue</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
    &lt;ul&gt;
        &lt;li&gt;news001 &lt;input type=&quot;text&quot;&gt;&lt;/li&gt;
        &lt;li&gt;news002 &lt;input type=&quot;text&quot;&gt;&lt;/li&gt;
        &lt;li&gt;news003 &lt;input type=&quot;text&quot;&gt;&lt;/li&gt;
    &lt;/ul&gt;
&lt;/template&gt;

&lt;script&gt;
    export default {
        name:&#39;News&#39;
    }
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>src/pages/Home.vue</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
    &lt;div&gt;
        &lt;h2&gt;Home组件内容&lt;/h2&gt;
&lt;div&gt;
&lt;ul class=&quot;nav nav-tabs&quot;&gt;
&lt;li&gt;
&lt;router-link replace class=&quot;list-group-item&quot; active-class=&quot;active&quot; to=&quot;/home/news&quot;&gt;News&lt;/router-link&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;router-link replace class=&quot;list-group-item&quot; active-class=&quot;active&quot; to=&quot;/home/message&quot;&gt;Message&lt;/router-link&gt;
&lt;/li&gt;
&lt;/ul&gt;
&lt;keep-alive include=&quot;News&quot;&gt;
&lt;router-view&gt;&lt;/router-view&gt;
&lt;/keep-alive&gt;
&lt;/div&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
    export default {
        name:&#39;Home&#39;
    }
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>效果：</strong></p><p><img src="https://img-blog.csdnimg.cn/img_convert/46589e8669e3c7cfdc9a355b9c2aa7b6.png" alt=""></p><p><strong>总结：</strong></p><ol><li><p>作用：让不展示的路由组件保持挂载，不被销毁</p></li><li><p>具体编码：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//缓存一个路由组件
&lt;keep-alive include=&quot;News&quot;&gt; //include中写想要缓存的组件名，不写表示全部缓存
    &lt;router-view&gt;&lt;/router-view&gt;
&lt;/keep-alive&gt;

//缓存多个路由组件
&lt;keep-alive :include=&quot;[&#39;News&#39;,&#39;Message&#39;]&quot;&gt; 
    &lt;router-view&gt;&lt;/router-view&gt;
&lt;/keep-alive&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="_6-12-activated和deactivated" tabindex="-1"><a class="header-anchor" href="#_6-12-activated和deactivated" aria-hidden="true">#</a> 6.12. activated和deactivated</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`src/pages/News.vue\`:
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
    &lt;ul&gt;
        &lt;li :style=&quot;{opacity}&quot;&gt;欢迎学习vue&lt;/li&gt;
        &lt;li&gt;news001 &lt;input type=&quot;text&quot;&gt;&lt;/li&gt;
        &lt;li&gt;news002 &lt;input type=&quot;text&quot;&gt;&lt;/li&gt;
        &lt;li&gt;news003 &lt;input type=&quot;text&quot;&gt;&lt;/li&gt;
    &lt;/ul&gt;
&lt;/template&gt;

&lt;script&gt;
    export default {
        name:&#39;News&#39;,
        data(){
            return{
                opacity:1
            }
        },
        activated(){
            console.log(&#39;News组件被激活了&#39;)
            this.timer = setInterval(() =&gt; {
                this.opacity -= 0.01
                if(this.opacity &lt;= 0) this.opacity = 1
            },16)
        },
        deactivated(){
            console.log(&#39;News组件失活了&#39;)
            clearInterval(this.timer)
        }
    }
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>效果：</strong></p><p><img src="https://img-blog.csdnimg.cn/img_convert/dddc021c71af4979b5261dcc91010f01.png" alt=""></p><p><strong>总结：</strong></p><ol><li><code>activated</code>和<code>deactivated</code>是路由组件所独有的两个钩子，用于捕获路由组件的激活状态</li><li>具体使用： <ol><li><code>activated</code>路由组件被激活时触发</li><li><code>deactivated</code>路由组件失活时触发</li></ol></li></ol><h3 id="_6-13-路由守卫" tabindex="-1"><a class="header-anchor" href="#_6-13-路由守卫" aria-hidden="true">#</a> 6.13. 路由守卫</h3><h4 id="_6-13-1-全局路由守卫" tabindex="-1"><a class="header-anchor" href="#_6-13-1-全局路由守卫" aria-hidden="true">#</a> 6.13.1. 全局路由守卫</h4><p><code>src/router/index.js</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//该文件专门用于创建整个应用的路由器
import VueRouter from &quot;vue-router&quot;;
//引入组件
import Home from &#39;../pages/Home&#39;
import About from &#39;../pages/About&#39;
import News from &#39;../pages/News&#39;
import Message from &#39;../pages/Message&#39;
import Detail from &#39;../pages/Detail&#39;

//创建一个路由器
const router = new VueRouter({
    routes:[
        {
            name:&#39;guanyv&#39;,
            path:&#39;/about&#39;,
            component:About,
            meta:{title:&#39;关于&#39;}
        },
        {
            name:&#39;zhuye&#39;,
            path:&#39;/home&#39;,
            component:Home,
            meta:{title:&#39;主页&#39;},
            children:[
                {
                    name:&#39;xinwen&#39;,
                    path:&#39;news&#39;,
                    component:News,
                    meta:{isAuth:true,title:&#39;新闻&#39;}
                },
                {
                    name:&#39;xiaoxi&#39;,
                    path:&#39;message&#39;,
                    component:Message,
                    meta:{isAuth:true,title:&#39;消息&#39;},
                    children:[
                        {
                            name:&#39;xiangqing&#39;,
                            path:&#39;detail&#39;,
                            component:Detail,
                            meta:{isAuth:true,title:&#39;详情&#39;},
props($route){
return {
id:$route.query.id,
title:$route.query.title,
}
}
                        }
                    ]
                }
            ]
        }
    ]
})

//全局前置路由守卫————初始化的时候、每次路由切换之前被调用
router.beforeEach((to,from,next) =&gt; {
    console.log(&#39;前置路由守卫&#39;,to,from)
    if(to.meta.isAuth){
        if(localStorage.getItem(&#39;school&#39;)===&#39;atguigu&#39;){
            next()
        }else{
            alert(&#39;学校名不对，无权限查看！&#39;)
        }
    }else{
        next()
    }
})

//全局后置路由守卫————初始化的时候被调用、每次路由切换之后被调用
router.afterEach((to,from)=&gt;{
console.log(&#39;后置路由守卫&#39;,to,from)
document.title = to.meta.title || &#39;硅谷系统&#39;
})

//导出路由器
export default router
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-13-2-独享路由守卫" tabindex="-1"><a class="header-anchor" href="#_6-13-2-独享路由守卫" aria-hidden="true">#</a> 6.13.2. 独享路由守卫</h4><p><code>src/router/index.js</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//该文件专门用于创建整个应用的路由器
import VueRouter from &quot;vue-router&quot;;
//引入组件
import Home from &#39;../pages/Home&#39;
import About from &#39;../pages/About&#39;
import News from &#39;../pages/News&#39;
import Message from &#39;../pages/Message&#39;
import Detail from &#39;../pages/Detail&#39;


//创建一个路由器
const router = new VueRouter({
    routes:[
        {
            name:&#39;guanyv&#39;,
            path:&#39;/about&#39;,
            component:About,
            meta:{title:&#39;关于&#39;}
        },
        {
            name:&#39;zhuye&#39;,
            path:&#39;/home&#39;,
            component:Home,
            meta:{title:&#39;主页&#39;},
            children:[
                {
                    name:&#39;xinwen&#39;,
                    path:&#39;news&#39;,
                    component:News,
                    meta:{title:&#39;新闻&#39;},
                    //独享守卫，特定路由切换之后被调用
                    beforeEnter(to,from,next){
                        console.log(&#39;独享路由守卫&#39;,to,from)
                        if(localStorage.getItem(&#39;school&#39;) === &#39;atguigu&#39;){
                            next()
                        }else{
                            alert(&#39;暂无权限查看&#39;)
                        }
                    }
                },
                {
                    name:&#39;xiaoxi&#39;,
                    path:&#39;message&#39;,
                    component:Message,
                    meta:{title:&#39;消息&#39;},
                    children:[
                        {
                            name:&#39;xiangqing&#39;,
                            path:&#39;detail&#39;,
                            component:Detail,
                            meta:{title:&#39;详情&#39;},
props($route){
return {
id:$route.query.id,
title:$route.query.title,
}
}
                        }
                    ]
                }
            ]
        }
    ]
})

//全局后置路由守卫————初始化的时候被调用、每次路由切换之后被调用
router.afterEach((to,from)=&gt;{
console.log(&#39;后置路由守卫&#39;,to,from)
document.title = to.meta.title || &#39;硅谷系统&#39;
})

//导出路由器
export default router
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-13-3-组件内路由守卫" tabindex="-1"><a class="header-anchor" href="#_6-13-3-组件内路由守卫" aria-hidden="true">#</a> 6.13.3. 组件内路由守卫</h4><p><code>src/pages/About.vue</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
    &lt;h2&gt;我是About组件的内容&lt;/h2&gt;
&lt;/template&gt;

&lt;script&gt;
    export default {
        name:&#39;About&#39;,
        //通过路由规则，离开该组件时被调用
        beforeRouteEnter (to, from, next) {
            console.log(&#39;About--beforeRouteEnter&#39;,to,from)
            if(localStorage.getItem(&#39;school&#39;)===&#39;atguigu&#39;){
                next()
            }else{
                alert(&#39;学校名不对，无权限查看！&#39;)
            }
        },
        //通过路由规则，离开该组件时被调用
        beforeRouteLeave (to, from, next) {
            console.log(&#39;About--beforeRouteLeave&#39;,to,from)
            next()
        }
    }
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p><strong>总结：</strong></p><ol><li><p>作用：对路由进行权限控制</p></li><li><p>分类：全局守卫、独享守卫、组件内守卫</p></li><li><p>全局守卫：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//全局前置守卫：初始化时执行、每次路由切换前执行
router.beforeEach((to,from,next)=&gt;{
console.log(&#39;beforeEach&#39;,to,from)
if(to.meta.isAuth){ //判断当前路由是否需要进行权限控制
if(localStorage.getItem(&#39;school&#39;) === &#39;atguigu&#39;){ //权限控制的具体规则
next() //放行
}else{
alert(&#39;暂无权限查看&#39;)
}
}else{
next() //放行
}
})

//全局后置守卫：初始化时执行、每次路由切换后执行
router.afterEach((to,from) =&gt; {
console.log(&#39;afterEach&#39;,to,from)
if(to.meta.title){ 
document.title = to.meta.title //修改网页的title
}else{
document.title = &#39;vue_test&#39;
}
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>独享守卫：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>beforeEnter(to,from,next){
console.log(&#39;beforeEnter&#39;,to,from)
    if(localStorage.getItem(&#39;school&#39;) === &#39;atguigu&#39;){
        next()
    }else{
        alert(&#39;暂无权限查看&#39;)
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>组件内守卫：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//进入守卫：通过路由规则，进入该组件时被调用
beforeRouteEnter (to, from, next) {...},
//离开守卫：通过路由规则，离开该组件时被调用
beforeRouteLeave (to, from, next) {...},
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="_6-14-路由器的两种工作模式" tabindex="-1"><a class="header-anchor" href="#_6-14-路由器的两种工作模式" aria-hidden="true">#</a> 6.14. 路由器的两种工作模式</h3><ol><li><p>对于一个url来说，什么是hash值？—— #及其后面的内容就是hash值</p></li><li><p>hash值不会包含在 HTTP 请求中，即：hash值不会带给服务器</p></li><li><p>hash模式：</p><ol><li>地址中永远带着#号，不美观</li><li>若以后将地址通过第三方手机app分享，若app校验严格，则地址会被标记为不合法</li><li>兼容性较好</li></ol></li><li><p>history模式：</p><ol><li>地址干净，美观</li><li>兼容性和hash模式相比略差</li><li>应用部署上线时需要后端人员支持，解决刷新页面服务端404的问题</li></ol></li></ol><h2 id="_7-vue-ui组件库" tabindex="-1"><a class="header-anchor" href="#_7-vue-ui组件库" aria-hidden="true">#</a> 7. Vue UI组件库</h2><h3 id="_7-1-常用ui组件库" tabindex="-1"><a class="header-anchor" href="#_7-1-常用ui组件库" aria-hidden="true">#</a> 7.1 常用UI组件库</h3><h4 id="_7-1-1-移动端常用ui组件库" tabindex="-1"><a class="header-anchor" href="#_7-1-1-移动端常用ui组件库" aria-hidden="true">#</a> 7.1.1 移动端常用UI组件库</h4>`,207),H={href:"https://youzan.github.io/vant",target:"_blank",rel:"noopener noreferrer"},L={href:"https://didi.github.io/cube-ui",target:"_blank",rel:"noopener noreferrer"},P={href:"http://mint-ui.github.io/",target:"_blank",rel:"noopener noreferrer"},U=i("h4",{id:"_7-1-2-pc端常用ui组件库",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#_7-1-2-pc端常用ui组件库","aria-hidden":"true"},"#"),e(" 7.1.2. PC端常用UI组件库")],-1),J={href:"https://element.eleme.cn/",target:"_blank",rel:"noopener noreferrer"},F={href:"https://www.iviewui.com/",target:"_blank",rel:"noopener noreferrer"},R=d(`<h3 id="_7-2-element-ui基本使用" tabindex="-1"><a class="header-anchor" href="#_7-2-element-ui基本使用" aria-hidden="true">#</a> 7.2. element-ui基本使用</h3><ol><li><p>安装 element-ui：<code>npm i element-ui -S</code></p></li><li><p><code>src/main.js</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import Vue from &#39;vue&#39;
import App from &#39;./App.vue&#39;
//引入ElementUI组件库
import ElementUI from &#39;element-ui&#39;;
//引入ElementUI全部样式
import &#39;element-ui/lib/theme-chalk/index.css&#39;;

Vue.config.productionTip = false
//使用ElementUI
Vue.use(ElementUI)

new Vue({
    el:&quot;#app&quot;,
    render: h =&gt; h(App),
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>src/App.vue</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
&lt;div&gt;
&lt;br&gt;
&lt;el-row&gt;
&lt;el-button icon=&quot;el-icon-search&quot; circle&gt;&lt;/el-button&gt;
&lt;el-button type=&quot;primary&quot; icon=&quot;el-icon-edit&quot; circle&gt;&lt;/el-button&gt;
&lt;el-button type=&quot;success&quot; icon=&quot;el-icon-check&quot; circle&gt;&lt;/el-button&gt;
&lt;el-button type=&quot;info&quot; icon=&quot;el-icon-message&quot; circle&gt;&lt;/el-button&gt;
&lt;el-button type=&quot;warning&quot; icon=&quot;el-icon-star-off&quot; circle&gt;&lt;/el-button&gt;
&lt;el-button type=&quot;danger&quot; icon=&quot;el-icon-delete&quot; circle&gt;&lt;/el-button&gt;
&lt;/el-row&gt;
&lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
name:&#39;App&#39;,
}
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><p><strong>效果：</strong></p><p><img src="https://img-blog.csdnimg.cn/img_convert/bd3ac9185da943f9847fbf76710a1d63.png" alt=""></p><h3 id="_7-3-element-ui按需引入" tabindex="-1"><a class="header-anchor" href="#_7-3-element-ui按需引入" aria-hidden="true">#</a> 7.3. element-ui按需引入</h3><ol><li><p>安装 babel-plugin-component：<code>npm install babel-plugin-component -D</code></p></li><li><p>修改 <code>babel-config-js</code>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>module.exports = {
  presets: [
    &#39;@vue/cli-plugin-babel/preset&#39;,
    [&quot;@babel/preset-env&quot;, { &quot;modules&quot;: false }]
  ],
  plugins: [
    [
      &quot;component&quot;,
      {
        &quot;libraryName&quot;: &quot;element-ui&quot;,
        &quot;styleLibraryName&quot;: &quot;theme-chalk&quot;
      }
    ]
  ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>src/main.js</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import Vue from &#39;vue&#39;
import App from &#39;./App.vue&#39;
//按需引入
import { Button,Row } from &#39;element-ui&#39;


Vue.config.productionTip = false

Vue.component(Button.name, Button);
Vue.component(Row.name, Row);
/* 或写为
 * Vue.use(Button)
 * Vue.use(Row)
 */

new Vue({
    el:&quot;#app&quot;,
    render: h =&gt; h(App),
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="_8-vue-3" tabindex="-1"><a class="header-anchor" href="#_8-vue-3" aria-hidden="true">#</a> 8. Vue 3</h2><p>咕咕咕~</p>`,8);function W(Y,B){const n=t("ExternalLinkIcon");return v(),a("div",null,[u,i("ul",null,[i("li",null,[i("p",null,[i("a",c,[e("英文官网"),l(n)])])]),i("li",null,[i("p",null,[i("a",m,[e("中文官网"),l(n)])])])]),o,b,g,i("ol",null,[p,h,i("li",null,[i("p",null,[e("它本身只关注UI，可以引入其它"),i("a",x,[e("第三方库"),l(n)]),e("开发项目")])])]),q,i("h3",f,[y,e(" 1.6. "),i("a",k,[e("MVVM"),l(n)]),e("模型")]),w,i("p",null,[_,e("："),i("a",V,[e("react"),l(n)]),e("、vue中的key有什么作用？（key的内部原理）")]),A,i("ol",null,[j,S,i("li",null,[e("文档："),i("a",T,[e("Vue CLI"),l(n)])])]),M,i("ul",null,[O,i("li",null,[e("使用 "),D,e(" 可以对脚手架进行个性化定制，详见"),i("a",$,[e("配置参考 | Vue CLI"),l(n)])])]),C,i("ol",null,[N,i("li",null,[i("a",I,[e("Vuex Github地址"),l(n)])])]),E,i("ol",null,[i("li",null,[i("a",H,[e("Vant"),l(n)])]),i("li",null,[i("a",L,[e("Cube UI"),l(n)])]),i("li",null,[i("a",P,[e("Mint UI"),l(n)])])]),U,i("ol",null,[i("li",null,[i("a",J,[e("Element UI"),l(n)])]),i("li",null,[i("a",F,[e("IView UI"),l(n)])])]),R])}const X=s(r,[["render",W],["__file","vue.html.vue"]]);export{X as default};
