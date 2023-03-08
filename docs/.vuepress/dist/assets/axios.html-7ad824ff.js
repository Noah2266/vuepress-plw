import{_ as d,M as r,p as a,q as v,R as e,t as n,N as l,a1 as i}from"./framework-6700cb35.js";const c={},t=i('<h1 id="axios" tabindex="-1"><a class="header-anchor" href="#axios" aria-hidden="true">#</a> Axios</h1><hr><h2 id="_1-自己创建一个api" tabindex="-1"><a class="header-anchor" href="#_1-自己创建一个api" aria-hidden="true">#</a> 1. 自己创建一个API</h2><h2 id="_1-1-api-的分类" tabindex="-1"><a class="header-anchor" href="#_1-1-api-的分类" aria-hidden="true">#</a> 1.1 API 的分类</h2><ol><li>REST API: restful （Representational State Transfer (资源)表现层状态转化）<br> (1) 发送请求进行CRUD 哪个操作由请求方式来决定<br> (2) 同一个请求路径可以进行多个操作<br> (3) 请求方式会用到GET/POST/PUT/DELETE</li><li>非REST API: restless<br> (1) 请求方式不决定请求的CRUD 操作<br> (2) 一个请求路径只对应一个操作<br> (3) 一般只有GET/POST</li></ol><h2 id="_1-2-使用json-server-搭建rest-api" tabindex="-1"><a class="header-anchor" href="#_1-2-使用json-server-搭建rest-api" aria-hidden="true">#</a> 1.2 使用json-server 搭建REST API</h2><h3 id="_1-2-1-json-server-是什么" tabindex="-1"><a class="header-anchor" href="#_1-2-1-json-server-是什么" aria-hidden="true">#</a> 1.2.1 json-server 是什么?</h3><p>用来快速搭建REST API 的工具包</p><h3 id="_1-2-2-使用json-server" tabindex="-1"><a class="header-anchor" href="#_1-2-2-使用json-server" aria-hidden="true">#</a> 1.2.2 使用json-server</h3>',9),o={href:"https://github.com/typicode/json-server",target:"_blank",rel:"noopener noreferrer"},u=e("li",null,[n("下载: "),e("code",null,"npm install -g json-server")],-1),m=e("li",null,[n("目标根目录下创建数据库 json 文件: "),e("code",null,"db.json")],-1),b=i(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
&quot;posts&quot;: [
{ &quot;id&quot;: 1, &quot;title&quot;: &quot;json-server&quot;, &quot;author&quot;: &quot;typicode&quot; },
{ &quot;id&quot;: 2, &quot;title&quot;: &quot;json-server2&quot;, &quot;author&quot;: &quot;typicode&quot; }
],
&quot;comments&quot;: [
{ &quot;id&quot;: 1, &quot;body&quot;: &quot;some comment&quot;, &quot;postId&quot;: 1 }
],
&quot;profile&quot;: { &quot;name&quot;: &quot;typicode&quot; }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>启动服务器执行命令: <code>json-server --watch db.json</code></li></ol><h3 id="_1-2-3-使用浏览器访问测试" tabindex="-1"><a class="header-anchor" href="#_1-2-3-使用浏览器访问测试" aria-hidden="true">#</a> 1.2.3 使用浏览器访问测试</h3><p>http://localhost:3000/posts<br> http://localhost:3000/posts/1</p>`,4),h={id:"_1-2-4-使用axios-访问测试",tabindex:"-1"},p=e("a",{class:"header-anchor",href:"#_1-2-4-使用axios-访问测试","aria-hidden":"true"},"#",-1),g={href:"https://so.csdn.net/so/search?q=axios&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"},x=i(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
  &lt;meta charset=&quot;UTF-8&quot;&gt;
  &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
  &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;ie=edge&quot;&gt;
  &lt;title&gt;Document&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;div&gt;
    &lt;button onclick=&quot;testGet()&quot;&gt;GET请求&lt;/button&gt;
    &lt;button onclick=&quot;testPost()&quot;&gt;POST请求&lt;/button&gt;
    &lt;button onclick=&quot;testPut()&quot;&gt;PUT请求&lt;/button&gt;
    &lt;button onclick=&quot;testDelete()&quot;&gt;DELETE请求&lt;/button&gt;
  &lt;/div&gt;

  &lt;script src=&quot;https://cdn.bootcdn.net/ajax/libs/axios/0.21.1/axios.js&quot;&gt;&lt;/script&gt;
  &lt;script&gt;
    function testGet() {
      axios.get(&#39;http://localhost:3000/posts&#39;) // 返回一个数组，数组里有两个对象
      // axios.get(&#39;http://localhost:3000/posts/1&#39;) // 返回一个对象
      // axios.get(&#39;http://localhost:3000/posts?id=1&#39;) // 返回一个数组，数组里有一个对象
      .then(response =&gt; {
        console.log(&#39;/posts get&#39;, response.data)
      })
    }

    function testPost() { // 添加数据
      axios.post(&#39;http://localhost:3000/posts&#39;, {&quot;title&quot;: &quot;json-server3&quot;, &quot;author&quot;: &quot;typicode&quot; })
      .then(response =&gt; {
        console.log(&#39;/posts put&#39;, response.data)
      })
    }

    function testPut() { // 更新数据
      axios.put(&#39;http://localhost:3000/posts/3&#39;, {&quot;title&quot;: &quot;json-server_put&quot;, &quot;author&quot;: &quot;typicode&quot; })
      .then(response =&gt; {
        console.log(&#39;/posts post&#39;, response.data)
      })
    }

    function testDelete() { // 删除数据
      axios.delete(&#39;http://localhost:3000/posts/3&#39;)
      .then(response =&gt; {
        console.log(&#39;/posts delete&#39;, response.data)
      })
    }
  &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),q={id:"_2-xhr-的-ajax-封装-简单版axios",tabindex:"-1"},_=e("a",{class:"header-anchor",href:"#_2-xhr-的-ajax-封装-简单版axios","aria-hidden":"true"},"#",-1),f={href:"https://so.csdn.net/so/search?q=ajax&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"},j=i(`<h2 id="_2-1-特点" tabindex="-1"><a class="header-anchor" href="#_2-1-特点" aria-hidden="true">#</a> 2.1 特点</h2><ol><li>函数的返回值为<code>promise</code>, 成功的结果为<code>response</code>, 失败的结果为<code>error</code></li><li>能处理多种类型的请求: GET/POST/PUT/DELETE</li><li>函数的参数为一个配置对象</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
url: &#39;&#39;, // 请求地址
method: &#39;&#39;, // 请求方式GET/POST/PUT/DELETE
params: {}, // GET/DELETE 请求的 query 参数
data: {}, // POST/PUT 请求的请求体参数
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>响应 json数据 自动解析为 js的对象/数组</li></ol><h2 id="_2-2-编码实现" tabindex="-1"><a class="header-anchor" href="#_2-2-编码实现" aria-hidden="true">#</a> 2.2 编码实现</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function axios({
  url,
  method=&#39;GET&#39;,
  params={},
  data={}
}){
  // 返回一个promise对象
  return new Promise((resolve, reject) =&gt; {

    // 处理method 转大写
    method = method.toUpperCase();

    // 处理 query参数（拼接到url上）id=1&amp;xxx=abc
    let queryString = &#39;&#39;;
    Object.keys(params).forEach(key =&gt; {
      queryString += \`\${key}=\${params[key]}&amp;\`
    });
    if(queryString){
      // 去除最后的&#39;&amp;&#39;
      queryString = queryString.substring(0, queryString.length-1)
      // 接到url
      url += &#39;?&#39; + queryString
    }

    // 1. 执行异步Ajax请求
    // 创建xhr对象
    const request = new XMLHttpRequest();
    // 打开连接（初始化请求，没有请求）
    request.open(method, url, true);
    // 发送请求
    if(method === &#39;GET&#39; || method === &#39;DELETE&#39;){
      request.send()// undefined
    } else if (method === &#39;POST&#39; || method === &#39;PUT&#39;){
      // 设置请求头，告诉服务器请求体的格式是json
      request.setRequestHeader(&#39;Content-Type&#39;, &#39;appliaction/json;charset=utf-8&#39;); 
      // 发送json格式请求参数
      request.send(JSON.stringify(data)); // 异步执行
    }
    
    // 绑定状态改变的监听
    request.onreadystatechange = function() { // 同步执行
      // 如果请求没有完成，直接结束
      if (request.readyState !== 4) {
        return;
      }
      // 如果响应状态码在[200, 300)之间代表成功，否则失败
      const {status, statusText} = request
      if( status&gt;= 200 &amp;&amp; status&lt;=299) {// 2.1 如果请求成功，调用resolve()
        // 准备结果数据对象response
        const response = {
          data: JSON.parse(request.response),
          status,
          statusText
        };
        resolve(response);
      } else {// 2.2 如果请求失败，调用reject()
        reject(new Error(&#39;request error status is &#39; + status));
      }
    }
  })
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-3-使用测试" tabindex="-1"><a class="header-anchor" href="#_2-3-使用测试" aria-hidden="true">#</a> 2.3 使用测试</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 1. GET请求：从服务器端获取数据
function testGet() {
  axios({
    url: &#39;http://localhost:3000/posts&#39;,
    method: &#39;GET&#39;,
    params:{
      id: 1,
      xxx: &#39;abc&#39;
    }
  }).then(
    response =&gt; {
      console.log(response)
    },
    error =&gt; {
      alert(error.message)
    }
  )
}

// 2. POST请求：向服务器端添加数据
function testPost() {
  axios({
    url: &#39;http://localhost:3000/posts&#39;,
    method: &#39;POST&#39;,
    data: {
      &quot;title&quot;: &quot;json-server_post&quot;,
      &quot;author&quot;: &quot;typicode_post&quot;
    }
  }).then(
    response =&gt; {
      console.log(response)
    },
    error =&gt; {
      alert(error.message)
    }
  )
}
// 3. PUT请求：服务器更新数据
function testPut() {
  axios({
    url: &#39;http://localhost:3000/posts/1&#39;,
    method: &#39;PUT&#39;,
    data: {
      &quot;title&quot;: &quot;json-server_put&quot;,
      &quot;author&quot;: &quot;typicode_put&quot;
    }
  }).then(
    response =&gt; {
      console.log(response)
    },
    error =&gt; {
      alert(error.message)
    }
  )
}

// 3. DELETE请求：服务器删除数据
function testDelete() {
  axios({
    url: &#39;http://localhost:3000/posts/2&#39;,
    method: &#39;delete&#39;
  }).then(
    response =&gt; {
      console.log(response)
    },
    error =&gt; {
      alert(error.message)
    }
  )
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-axios-的理解和使用" tabindex="-1"><a class="header-anchor" href="#_3-axios-的理解和使用" aria-hidden="true">#</a> 3 axios 的理解和使用</h2><h2 id="_3-1-axios-是什么" tabindex="-1"><a class="header-anchor" href="#_3-1-axios-是什么" aria-hidden="true">#</a> 3.1 axios 是什么?</h2>`,10),T=e("li",null,"前端最流行的 ajax请求库",-1),E=e("li",null,"react/vue 官方都推荐使用 axios 发ajax 请求",-1),P={href:"https://github.com/axios/axios",target:"_blank",rel:"noopener noreferrer"},y=i('<h2 id="_3-2-axios-特点" tabindex="-1"><a class="header-anchor" href="#_3-2-axios-特点" aria-hidden="true">#</a> 3.2 axios 特点</h2><ol><li>基于 xhr + promise 的异步 ajax请求库</li><li>浏览器端/node 端都可以使用</li><li>支持请求／响应拦截器</li><li>支持请求取消</li><li>请求/响应数据转换</li><li>批量发送多个请求</li></ol><h2 id="_3-3-axios-常用语法" tabindex="-1"><a class="header-anchor" href="#_3-3-axios-常用语法" aria-hidden="true">#</a> 3.3 axios 常用语法</h2><p><code>axios(config)</code>: 通用/最本质的发任意类型请求的方式<br><code>axios(url[, config])</code>: 可以只指定url 发get 请求<br><code>axios.request(config)</code>: 等同于axios(config)<br><code>axios.get(url[, config])</code>: 发get 请求<br><code>axios.delete(url[, config])</code>: 发delete 请求<br><code>axios.post(url[, data, config])</code>: 发post 请求<br><code>axios.put(url[, data, config])</code>: 发put 请求</p>',4),k=e("code",null,"axios.defaults.xxx",-1),R=e("br",null,null,-1),S=e("code",null,"axios.interceptors.request.use()",-1),C={href:"https://so.csdn.net/so/search?q=%E6%8B%A6%E6%88%AA%E5%99%A8&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"},A=e("br",null,null,-1),G=e("code",null,"axios.interceptors.response.use()",-1),w=i(`<p><code>axios.create([config])</code>: 创建一个新的axios(它没有下面的功能)</p><p><code>axios.Cancel()</code>: 用于创建取消请求的错误对象<br><code>axios.CancelToken()</code>: 用于创建取消请求的 token 对象<br><code>axios.isCancel()</code>: 是否是一个取消请求的错误<br><code>axios.all(promises)</code>: 用于批量执行多个异步请求<br><code>axios.spread()</code>: 用来指定接收所有成功数据的回调函数的方法</p><p><img src="https://img-blog.csdnimg.cn/20210304172721643.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDk3MjAwOA==,size_16,color_FFFFFF,t_70#pic_center" alt="在这里插入图片描述"></p><h2 id="_3-4-难点语法的理解和使用" tabindex="-1"><a class="header-anchor" href="#_3-4-难点语法的理解和使用" aria-hidden="true">#</a> 3.4 难点语法的理解和使用</h2><h3 id="_3-4-1-axios-create-config" tabindex="-1"><a class="header-anchor" href="#_3-4-1-axios-create-config" aria-hidden="true">#</a> 3.4.1 <code>axios.create(config)</code></h3><ol><li>根据指定配置创建一个新的 axios, 也就是每个新 axios 都有自己的配置</li><li>新 axios 只是没有<strong>取消请求</strong>和<strong>批量发请求</strong>的方法, 其它所有语法都是一致的</li><li>为什么要设计这个语法?<br> (1) 需求: 项目中有部分接口需要的配置与另一部分接口需要的配置不太一样, 如何处理（比如有多个baseURL需要指定）<br> (2) 解决: 创建2 个新axios, 每个都有自己特有的配置, 分别应用到不同要求的接口请求中</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const instance = axios.create({ // instance是函数类型
baseURL: &#39;http://localhost:3000&#39;
})
// 使用instance发Ajax请求
instance({
url: &#39;/posts&#39;
})
instance.get(&#39;/posts&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4-2-拦截器函数-ajax-请求-请求的回调函数的调用顺序" tabindex="-1"><a class="header-anchor" href="#_3-4-2-拦截器函数-ajax-请求-请求的回调函数的调用顺序" aria-hidden="true">#</a> 3.4.2 拦截器函数/ajax 请求/请求的回调函数的调用顺序</h3><ol><li>说明: 调用<code>axios()</code>并不是立即发送ajax 请求, 而是需要经历一个较长的流程</li><li>流程: 请求拦截器2 =&gt; 请求拦截器1 =&gt; 发ajax 请求 =&gt; 响应拦截器1 =&gt; 响应拦截器2 =&gt; 请求的回调</li><li>注意: 此流程是通过 promise 串连起来的, 请求拦截器传递的是<code>config</code>, 响应拦截器传递的是<code>response</code></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 添加两个请求拦截器(回调函数)
axios.interceptors.request.use(
  config =&gt; {
    console.log(&#39;request interceptor1 onResolved()&#39;) // -----------2
    return config
  },
  error =&gt; {
    console.log(&#39;request interceptor1 onRejected()&#39;)
    return Promise.reject(error)
  }
)

axios.interceptors.request.use(
  config =&gt; {
    console.log(&#39;request interceptor2 onResolved()&#39;) // -----------1
    return config
  },
  error =&gt; {
    console.log(&#39;request interceptor2 onRejected()&#39;)
    return Promise.reject(error)
  }
)

// 添加两个响应拦截器
axios.interceptors.response.use(
  resopnse =&gt; {
    console.log(&#39;response interceptor1 onResolved()&#39;) // -----------3
    return resopnse
  },
  error =&gt; {
    console.log(&#39;response interceptor1 onRejected()&#39;)
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  resopnse =&gt; {
    console.log(&#39;response interceptor2 onResolved()&#39;) // -----------4
    return resopnse
  },
  error =&gt; {
    console.log(&#39;response interceptor2 onRejected()&#39;)
    return Promise.reject(error)
  }
)

axios.get(&#39;http://localhost:3000/posts&#39;)
  .then(response =&gt; {
    console.log(&#39;data&#39;, response.data) //data Array(4) -------------5
  })
  .catch(error =&gt; {
    cosole.log(&#39;error&#39;, error.message)
  })

// request interceptor2 onResolved()
// request interceptor1 onResolved()
// response interceptor1 onResolved()
// response interceptor2 onResolved()
// data Array(4)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4-3-取消请求" tabindex="-1"><a class="header-anchor" href="#_3-4-3-取消请求" aria-hidden="true">#</a> 3.4.3 取消请求</h3><h4 id="_1-基本流程" tabindex="-1"><a class="header-anchor" href="#_1-基本流程" aria-hidden="true">#</a> 1. 基本流程</h4><ol><li>配置 <code>cancelToken</code> 对象</li><li>缓存用于取消请求的 <code>cancel</code> 函数</li><li>在后面特定时机调用 <code>cancel</code> 函数取消请求</li><li>在错误回调中判断如果 <code>error</code> 是 <code>cancel</code>, 做相应处理</li></ol><h4 id="_2-实现功能" tabindex="-1"><a class="header-anchor" href="#_2-实现功能" aria-hidden="true">#</a> 2. 实现功能</h4><p>用express先搭建一个有延迟的服务器</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const express = require(&#39;express&#39;)
const cors = require(&#39;cors&#39;)

const app = express()

// 使用cors, 允许跨域
app.use(cors())
// 能解析urlencode格式的post请求体参数
app.use(express.urlencoded())
// 能解析json格式的请求体参数
app.use(express.json())

app.get(&#39;/products1&#39;, (req, res) =&gt; {
  
  setTimeout(() =&gt; {
    res.send([
      {id: 1, name: &#39;product1.1&#39;},
      {id: 2, name: &#39;product1.2&#39;},
      {id: 3, name: &#39;product1.3&#39;}
    ])
  }, 1000 + Math.random()*2000);
  
})

app.get(&#39;/products2&#39;, (req, res) =&gt; {

  setTimeout(() =&gt; {
    res.send([{
        id: 1,
        name: &#39;product2.1&#39;
      },
      {
        id: 2,
        name: &#39;product2.2&#39;
      },
      {
        id: 3,
        name: &#39;product2.3&#39;
      }
    ])
  }, 1000 + Math.random() * 2000);

})

app.listen(4000, () =&gt; {
  console.log(&#39;server app start on port 4000&#39;)
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>点击按钮, 取消某个正在请求中的请求</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let cancel // 用于保存取消请求的函数
function getProducts1() {
  axios({
    url: &#39;http://localhost:4000/products1&#39;,
    cancelToken: new axios.CancelToken(function executor(c){ // c是用于取消当前请求的函数
      // 保存取消函数，用于之后可能需要取消当前请求
      cancel = c;
    })
  }).then(
    response =&gt; {
      cancel = null
      console.log(&#39;请求1成功了&#39;, response.data)
    },
    error =&gt; {
      cancel = null
      console.log(&#39;请求1失败了&#39;, error.message, error) // 请求1失败了 强制取消请求 Cancel {message: &quot;强制取消请求&quot;}
    }
  )

}

function getProducts2() {
  axios({
      url: &#39;http://localhost:4000/products2&#39;
  }).then(
    response =&gt; {
      console.log(&#39;请求2成功了&#39;, response.data)
    }
  )
}

function cancelReq() {
  // alert(&#39;取消请求&#39;)
  // 执行取消请求的函数
  if (typeof cancel === &#39;function&#39;){
    cancel(&#39;强制取消请求&#39;)
  } else {
    console.log(&#39;没有可取消的请求&#39;)
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://img-blog.csdnimg.cn/20210305230614497.gif#pic_center" alt="在这里插入图片描述"></p><ol start="2"><li>在请求一个接口前, 取消前面一个未完成的请求</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let cancel // 用于保存取消请求的函数
function getProducts1() {
  // 在准备发请求前，取消未完成的请求
  if (typeof cancel === &#39;function&#39;){
    cancel(&#39;取消请求&#39;)
  }
  axios({
    url: &#39;http://localhost:4000/products1&#39;,
    cancelToken: new axios.CancelToken(function executor(c){ // c是用于取消当前请求的函数
      // 保存取消函数，用于之后可能需要取消当前请求
      cancel = c;
    })
  }).then(
    response =&gt; {

      cancel = null
      console.log(&#39;请求1成功了&#39;, response.data)
    },
    error =&gt; {
      if (axios.isCancel(error)){
        console.log(&#39;请求1取消的错误&#39;, error.message)
      }else{ // 请求出错了
        cancel = null
        console.log(&#39;请求1失败了&#39;, error.message, error) // 请求1失败了 强制取消请求 Cancel {message: &quot;强制取消请求&quot;}
      }
    }
  )

}

function getProducts2() {
// 在准备发请求前，取消未完成的请求
  if (typeof cancel === &#39;function&#39;){
    cancel(&#39;取消请求&#39;)
  }
  axios({
      url: &#39;http://localhost:4000/products2&#39;,
      cancelToken: new axios.CancelToken(function executor(c){ 
      cancel = c;
    })
  }).then(
    response =&gt; {
      cancel = null
      console.log(&#39;请求2成功了&#39;, response.data)
    },
    error =&gt; {
      if (axios.isCancel(error)){
        console.log(&#39;请求2取消的错误&#39;, error.message)
      }else{ 
        cancel = null
        console.log(&#39;请求2失败了&#39;, error.message, error) 
      }
    }
  )
}
function cancelReq() {
  // alert(&#39;取消请求&#39;)
  // 执行取消请求的函数
  if (typeof cancel === &#39;function&#39;){
    cancel(&#39;强制取消请求&#39;)
  } else {
    console.log(&#39;没有可取消的请求&#39;)
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://img-blog.csdnimg.cn/20210305231032109.gif#pic_center" alt="在这里插入图片描述"></p><h4 id="使用拦截器改进代码-减少重复代码" tabindex="-1"><a class="header-anchor" href="#使用拦截器改进代码-减少重复代码" aria-hidden="true">#</a> 使用拦截器改进代码，减少重复代码</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 添加请求拦截器
axios.interceptors.request.use((config) =&gt; { // 只写一个成功的回调
  // 在准备发请求前，取消未完成的请求
  if (typeof cancel === &#39;function&#39;){
    cancel(&#39;取消请求&#39;)
  }
  // 添加一个cancelToken的配置
  config.cancelToken = new axios.CancelToken(function executor(c){ // c是用于取消当前请求的函数
      // 保存取消函数，用于之后可能需要取消当前请求
      cancel = c;
    })
    return config
})

// 添加响应拦截器
axios.interceptors.response.use(
  response =&gt; { // 成功的回调
    cancel = null 
    return response
  },
  error =&gt; { // 失败的回调
    if (axios.isCancel(error)){ // 请求取消的错误
        console.log(&#39;请求取消的错误&#39;, error.message)
        // 中断promise链
        return new Promise(() =&gt; {})
    }else{ // 请求出错了
      cancel = null 
      // 将错误向下传递 
      // throw error
      return Promise.reject(error)
    }
  }
)

let cancel // 用于保存取消请求的函数
function getProducts1() {
  axios({
    url: &#39;http://localhost:4000/products1&#39;
  }).then(
    response =&gt; {
      console.log(&#39;请求1成功了&#39;, response.data)
    },
    error =&gt; { // 只用处理请求失败的情况，取消请求的错误不用处理
      console.log(&#39;请求1失败了&#39;, error.message, error) 
    }
  )
}

function getProducts2() {
  axios({
      url: &#39;http://localhost:4000/products2&#39;
  }).then(
    response =&gt; {
      console.log(&#39;请求2成功了&#39;, response.data)
    },
    error =&gt; {
      console.log(&#39;请求2失败了&#39;, error.message, error) 
    }
  )
}
function cancelReq() {
  if (typeof cancel === &#39;function&#39;){
    cancel(&#39;强制取消请求&#39;)
  } else {
    console.log(&#39;没有可取消的请求&#39;)
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24);function L(U,D){const s=r("ExternalLinkIcon");return a(),v("div",null,[t,e("ol",null,[e("li",null,[e("a",o,[n("在线文档: https://github.com/typicode/json-server"),l(s)])]),u,m]),b,e("h3",h,[p,n(" 1.2.4 使用"),e("a",g,[n("axios"),l(s)]),n(" 访问测试")]),x,e("h2",q,[_,n(" 2. XHR 的 "),e("a",f,[n("ajax"),l(s)]),n(" 封装 (简单版axios)")]),j,e("ol",null,[T,E,e("li",null,[e("a",P,[n("文档: https://github.com/axios/axios"),l(s)])])]),y,e("p",null,[k,n(": 请求的默认全局配置（method\\baseURL\\params\\timeout…）"),R,S,n(": 添加请求"),e("a",C,[n("拦截器"),l(s)]),A,G,n(": 添加响应拦截器")]),w])}const I=d(c,[["render",L],["__file","axios.html.vue"]]);export{I as default};
