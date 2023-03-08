import{_ as d,M as v,p as a,q as r,R as i,t as e,N as s,a1 as l}from"./framework-6700cb35.js";const c={},u=l('<h1 id="webpack" tabindex="-1"><a class="header-anchor" href="#webpack" aria-hidden="true">#</a> Webpack</h1><blockquote><h2 id="excerpt" tabindex="-1"><a class="header-anchor" href="#excerpt" aria-hidden="true">#</a> Excerpt</h2><p>本篇章适合有一定webpack基础的攻城狮，本人目前是一名学生，处于学习阶段，如果有写的不好的地方欢迎大神指正。 webpack 是一种前端资源构建工具，一个静态模块打包器(module bundler)。 在 webpack 看来, 前端的所有资源文件(js/json/css…</p></blockquote><hr><p>本章主要包含以下几部分内容：</p><ul><li><p>Webpack 简介</p></li><li><p>Webpack 初体验</p></li><li><p>Webpack 开发环境的基本配置</p></li><li><p>Webpack 生产环境的基本配置</p></li><li><p>Webpack 优化配置</p></li><li><p>Webpack 配置详情</p></li><li><p>Webpack5 使用</p></li></ul>',5),m={href:"https://juejin.cn/post/6909719159773331463/",title:"https://juejin.cn/post/6909719159773331463/",target:"_blank",rel:"noopener noreferrer"},b=i("li",null,"React/Vue脚手架的详细配置",-1),t=i("li",null,"基于Webpack5自定义loader/plugin",-1),o={href:"https://link.juejin.cn/?target=https%3A%2F%2Fwebpack.docschina.org%2Fconcepts%2F%23entry",title:"https://webpack.docschina.org/concepts/#entry",target:"_blank",rel:"noopener noreferrer"},p={href:"https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2FFengXiuli%2FWebpack%2Ftree%2Fmaster",title:"https://github.com/FengXiuli/Webpack/tree/master",target:"_blank",rel:"noopener noreferrer"},h=l(`<p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/16e9cd26e6ae456bb58fb6bcad731576~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp" alt=""> 下面进入正题</p><h2 id="一、webpack-简介" tabindex="-1"><a class="header-anchor" href="#一、webpack-简介" aria-hidden="true">#</a> 一、webpack 简介</h2><h3 id="_1-1-webpack-是什么" tabindex="-1"><a class="header-anchor" href="#_1-1-webpack-是什么" aria-hidden="true">#</a> 1.1 webpack 是什么</h3><p>webpack 是一种前端资源构建工具，一个静态模块打包器(module bundler)。 在 webpack 看来, 前端的所有资源文件(js/json/css/img/less/...)都会作为模块处理。 它将根据模块的依赖关系进行静态分析，打包生成对应的静态资源(bundle)。 <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/16227bfb220743cdbaaa915c4f19ca5e~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp" alt=""></p><h3 id="_1-2-webpack-五个核心概念" tabindex="-1"><a class="header-anchor" href="#_1-2-webpack-五个核心概念" aria-hidden="true">#</a> 1.2 webpack 五个核心概念</h3><h4 id="_1-2-1-entry" tabindex="-1"><a class="header-anchor" href="#_1-2-1-entry" aria-hidden="true">#</a> 1.2.1 Entry</h4><p>入口(Entry)指示 webpack 以哪个文件为入口起点开始打包，分析构建内部依赖图。</p><h4 id="_1-2-2-output" tabindex="-1"><a class="header-anchor" href="#_1-2-2-output" aria-hidden="true">#</a> 1.2.2 Output</h4><p>输出(Output)指示 webpack 打包后的资源 bundles 输出到哪里去，以及如何命名。</p><h4 id="_1-2-3-loader" tabindex="-1"><a class="header-anchor" href="#_1-2-3-loader" aria-hidden="true">#</a> 1.2.3 Loader</h4><p>Loader：让 webpack 能够去处理那些非 JS 的文件，比如样式文件、图片文件(webpack 自身只理解JS)</p><h4 id="_1-2-4-plugins" tabindex="-1"><a class="header-anchor" href="#_1-2-4-plugins" aria-hidden="true">#</a> 1.2.4 Plugins</h4><p>插件(Plugins)：可以用于执行范围更广的任务。插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量等。</p><h4 id="_1-2-5-mode" tabindex="-1"><a class="header-anchor" href="#_1-2-5-mode" aria-hidden="true">#</a> 1.2.5 Mode</h4><p>模式(Mode)：指示 webpack 使用相应模式的配置。</p><table><thead><tr><th>选项</th><th>描述</th><th>特点</th></tr></thead><tbody><tr><td>development</td><td>会将 DefinePlugin 中 p<wbr>rocess.env.NODE_ENV 的值设置为 development。启用 NamedChunksPlugin 和 NamedModulesPlugin。</td><td>能让代码本地调试运行的环境</td></tr><tr><td>production</td><td>会将 DefinePlugin 中 p<wbr>rocess.env.NODE_ENV 的值设置为 production。启用 FlagDependencyUsagePlugin, FlagIncludedChunksPlugin, ModuleConcatenationPlugin, NoEmitOnErrorsPlugin, OccurrenceOrderPlugin, SideEffectsFlagPlugin 和 TerserPlugin。</td><td>能让代码优化上线运行的环境</td></tr></tbody></table><h2 id="二、webpack-初体验" tabindex="-1"><a class="header-anchor" href="#二、webpack-初体验" aria-hidden="true">#</a> 二、Webpack 初体验</h2><h3 id="_2-1-初始化配置" tabindex="-1"><a class="header-anchor" href="#_2-1-初始化配置" aria-hidden="true">#</a> 2.1 初始化配置</h3><ol><li>初始化package.json文件 输入指令：npm init</li><li>下载并安装 webpack 输入指令: npm install webpack webpack-cli -g（全局安装）（即使以前安装过，现在也是可以安装的，会对以前的进行更新） npm install webpack webpack-cli -D（本地安装）</li></ol><h3 id="_2-2-编译打包应用" tabindex="-1"><a class="header-anchor" href="#_2-2-编译打包应用" aria-hidden="true">#</a> 2.2 编译打包应用</h3><ol><li>创建文件</li><li>运行指令 <strong>开发环境指令</strong>：webpack src/js/index.js -o build/js/built.js --mode=development <strong>功能</strong>：webpack 能够编译打包 js 和 json 文件，并且能将 es6 的模块化语法转换成 浏览器能识别的语法。 <strong>生产环境指令</strong>：webpack src/js/index.js -o build/js/built.js --mode=production <strong>功能</strong>：在开发配置功能上多一个功能，压缩代码。</li><li>结论 webpack 能够编译打包 js 和 json 文件。 能将 es6 的模块化语法转换成浏览器能识别的语法。 能压缩代码。</li><li>问题 不能编译打包 css、img 等文件。 不能将 js 的 es6 基本语法转化为 es5 以下语法。</li></ol><h2 id="三、webpack-开发环境的基本配置" tabindex="-1"><a class="header-anchor" href="#三、webpack-开发环境的基本配置" aria-hidden="true">#</a> 三、webpack 开发环境的基本配置</h2><h3 id="_3-1-创建配置文件" tabindex="-1"><a class="header-anchor" href="#_3-1-创建配置文件" aria-hidden="true">#</a> 3.1 创建配置文件</h3><ol><li>创建文件 webpack.config.js</li><li>配置内容如下</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const { resolve } = require(&#39;path&#39;); // node 内置核心模块，用来处理路径问题。

module.exports = {
  entry: &#39;./src/js/index.js&#39;,
  // 入口文件
  output: {
    // 输出配置
    filename: &#39;./built.js&#39;,
    // 输出文件名
    path: resolve(__dirname, &#39;build/js&#39;)// 输出文件路径配置
  },
  mode: &#39;development&#39;//开发环境
};
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>运行指令: webpack</li><li>结论: 此时功能与上节一致</li></ol><h3 id="_3-2-打包样式资源" tabindex="-1"><a class="header-anchor" href="#_3-2-打包样式资源" aria-hidden="true">#</a> 3.2 打包样式资源</h3><ol><li><p>创建文件</p></li><li><p>下载安装包 <code>npm i css-loader style-loader less-loader less -D</code></p></li><li><p>修改配置文件webpack.config.js</p></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/*
  webpack.config.js  webpack的配置文件（src里面写项目代码，webpack写配置代码）
    作用: 指示 webpack 干哪些活（当你运行 webpack 指令时，会加载里面的配置）

    所有构建工具都是基于nodejs平台运行的~模块化默认采用commonjs。
*/

// resolve用来拼接绝对路径的方法
const {
  resolve
} = require(&#39;path&#39;);

module.exports = {
  // webpack配置
  // 入口起点
  entry: &#39;./src/index.js&#39;,
  // 输出（输出到build文件夹下面的built.js文件中）
  output: {
    // 输出文件名
    filename: &#39;built.js&#39;,
    // 输出路径
    // __dirname nodejs的变量，代表当前文件的目录绝对路径（表示的是与当前webpack.config.js平级的build文件夹）
    path: resolve(__dirname, &#39;build&#39;)
  },
  // loader的配置
  module: {
    rules: [
      // 详细loader配置
      // 不同文件必须配置不同loader处理
      {
        // 匹配哪些文件
        test: /\\.css$/,
        // 使用哪些loader进行处理
        use: [
          // use数组中loader执行顺序：从右到左，从下到上 依次执行
          // 创建style标签，将js中的样式资源插入进行，添加到head中生效
          &#39;style-loader&#39;,
          // 将css文件变成commonjs模块加载js中，里面内容是样式字符串
          &#39;css-loader&#39;
        ]
      }, {
        test: /\\.less$/,
        use: [
          &#39;style-loader&#39;,
          &#39;css-loader&#39;,
          // 将less文件编译成css文件
          // 需要下载 less-loader和less
          &#39;less-loader&#39;
        ]
      }
    ]
  },
  // plugins的配置
  plugins: [
    // 详细plugins的配置
  ],
  // 模式（表示使用什么模式）
  mode: &#39;development&#39;, // 开发模式
  // mode: &#39;production&#39;
}

/*
  执行的步骤：只分析less（安装loader:style-loader css-loader less-loader less）(css只需要安装前面两个loader)
    1. 根据entry找到入口文件&#39;./src/index.js&#39;
    2. 发现入口文件中引入了.less文件，而.less文件不是js或者json文件，去找module的rules里面寻找less的loader
    3. 找到test: /\\.less$/，执行该对象中的rules数组中的代码（从右到左，从下到上 依次执行）
    4. 通过less-loader将less文件编译成css文件
    5. 通过css-loader将css文件变成commonjs模块加载js中，里面内容是样式字符串
    6. 通过style-loader创建style标签，将js中的样式资源插入进行，添加到head中生效
    7. 将代码添加到出口文件与当前webpack.config.js平级的build文件夹下面的built.js文件中
*/
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>运行指令：webpack</li></ol><h3 id="_3-3-打包html资源" tabindex="-1"><a class="header-anchor" href="#_3-3-打包html资源" aria-hidden="true">#</a> 3.3 打包html资源</h3><ol><li><p>创建文件</p></li><li><p>下载安装包 <code>npm install --save-dev html-webpack-plugin</code></p></li><li><p>修改配置文件webpack.config.js</p></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/*
  loader: 1. 下载   2. 使用（配置loader）
  plugins: 1. 下载  2. 引入  3. 使用
*/
const {
  resolve
} = require(&#39;path&#39;);
const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;);

module.exports = {
  entry: &#39;./src/index.js&#39;,
  output: {
    filename: &#39;built.js&#39;,
    path: resolve(__dirname, &#39;build&#39;)
  },
  module: {
    rules: [
      // loader的配置
    ]
  },
  plugins: [
    // plugins的配置
    // html-webpack-plugin
    // 功能：默认会创建一个空的HTML，自动引入打包输出的所有资源（JS/CSS）
    // 需求：需要有结构的HTML文件,需要添加一个template
    new HtmlWebpackPlugin({
      // 复制 &#39;./src/index.html&#39; 文件，并自动引入打包输出的所有资源（JS/CSS）
      template: &#39;./src/index.html&#39;
    })
  ],
  mode: &#39;development&#39;
};
/*
  执行的步骤：html(安装plugin:html-webpack-plugin)
    1. 根据entry找到入口文件&#39;./src/index.js&#39;
    2. 发现入口文件中引入了html文件，而html文件不是js或者json文件，去plugins数组中找到HtmlWebpackPlugin插件
    3. 复制template选项中的文件，
    4. 通过less-loader将less文件编译成css文件，自动引入打包输出的所有资源（JS/CSS）（JS文件通过script标签引入，CSS文件通过link标签引入）（不需要自己再引用了，否则重复引入会出问题的）
*/
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>运行指令：webpack</li></ol><h3 id="_3-4-打包图片资源" tabindex="-1"><a class="header-anchor" href="#_3-4-打包图片资源" aria-hidden="true">#</a> 3.4 打包图片资源</h3><ol><li><p>创建文件</p></li><li><p>下载安装包 <code>npm install --save-dev html-loader url-loader file-loader</code></p></li><li><p>修改配置文件webpack.config.js</p></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const {
  resolve
} = require(&#39;path&#39;);
const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;);

module.exports = {
  entry: &#39;./src/index.js&#39;,
  output: {
    filename: &#39;built.js&#39;,
    path: resolve(__dirname, &#39;build&#39;)
  },
  module: {
    rules: [{
      test: /\\.less$/,
      // 要使用多个loader处理用use
      use: [&#39;style-loader&#39;, &#39;css-loader&#39;, &#39;less-loader&#39;]
    }, {
      // 问题：默认处理不了html中img图片
      // 处理图片资源
      test: /\\.(jpg|png|gif)$/,
      // 使用一个loader
      // 下载 url-loader file-loader(url-loader依赖于file-loader)
      loader: &#39;url-loader&#39;,
      options: {
        // 图片大小小于8kb，就会被base64处理（通常小图片(8-12kb)使用limit进行这种处理，如果有9kb的图片，我们可以将limit写成10 * 1024）
        // 优点: 减少请求数量（减轻服务器压力）
        // 缺点：图片体积会更大（文件请求速度更慢）
        limit: 8 * 1024,
        // 问题：因为url-loader默认使用es6模块化解析，而html-loader引入图片是commonjs
        // 解析时会出问题：[object Module]
        // 解决：关闭url-loader的es6模块化，使用commonjs解析
        esModule: false,
        // 给图片进行重命名
        // [hash:10]取图片的hash的前10位
        // [ext]取文件原来扩展名
        name: &#39;[hash:10].[ext]&#39;
      }
    }, {
      test: /\\.html$/,
      // 处理html文件的img图片,而不是处理html文件的，html文件是用HtmlWebpackPlugin处理的（负责引入img，从而能被url-loader进行处理）
      loader: &#39;html-loader&#39;
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: &#39;./src/index.html&#39;
    })
  ],
  mode: &#39;development&#39;
};
/*
  执行的步骤：打包图片资源（安装loader:url-loader file-loader html-loader）
    1. 根据entry找到入口文件&#39;./src/index.js&#39;
    2. 发现入口文件中引入了jpg|png|gif文件，而jpg|png|gif文件不是js或者json文件，去找module的rules里面寻找jpg|png|gif的loader
    3. 找到test: /\\jpg|png|gifs$/，执行该对象中的rules数组中的代码
    4. 通过options--&gt;limit对体积进行限制
    5. 这种方式只能处理样式中引入的图片，不能处理html中引入的图片，如果要处理htnl中引入的资源，需要使用html-loader
    6. 处理html中引入的图片需要找到test: /\\jpg|png|gifs$/，执行里面的html-loader
    7. 但是解析时图片的名称会出现[object Module]问题，这是因为url-loader默认使用es6模块化解析，而html-loader引入图片是commonjs，使用esModule: false关闭url-loader的es6模块化，使用commonjs解析即可
    8. 使用name: &#39;[hash:10].[ext]&#39;给图片进行重命名
*/
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>运行指令：webpack</li></ol><h3 id="_3-5-打包其他资源" tabindex="-1"><a class="header-anchor" href="#_3-5-打包其他资源" aria-hidden="true">#</a> 3.5 打包其他资源</h3><ol><li><p>创建文件</p></li><li><p>下载安装包 <code>npm install --save-dev file-loader</code></p></li><li><p>修改配置文件webpack.config.js</p></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const { resolve } = require(&#39;path&#39;);
const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;);

module.exports = {
  entry: &#39;./src/index.js&#39;,
  output: {
    filename: &#39;built.js&#39;,
    path: resolve(__dirname, &#39;build&#39;)
  },
  module: {
    rules: [
      {
        test: /\\.css$/,
        use: [&#39;style-loader&#39;, &#39;css-loader&#39;]
      },
      // 打包其他资源(除了html/js/css资源以外的资源)
      {
        // 排除css/js/html资源
        exclude: /\\.(css|js|html|less)$/,
        loader: &#39;file-loader&#39;,
        options: {
          name: &#39;[hash:10].[ext]&#39;
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: &#39;./src/index.html&#39;
    })
  ],
  mode: &#39;development&#39;
};

复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>运行指令：webpack</li></ol><h3 id="_3-6-devserver" tabindex="-1"><a class="header-anchor" href="#_3-6-devserver" aria-hidden="true">#</a> 3.6 devserver</h3><ol><li>创建文件</li><li>修改配置文件webpack.config.js</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const {
  resolve
} = require(&#39;path&#39;);
const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;);

module.exports = {
  entry: &#39;./src/index.js&#39;,
  output: {
    filename: &#39;built.js&#39;,
    path: resolve(__dirname, &#39;build&#39;)
  },
  module: {
    rules: [{
        test: /\\.css$/,
        use: [&#39;style-loader&#39;, &#39;css-loader&#39;]
      },
      // 打包其他资源(除了html/js/css资源以外的资源)
      {
        // 排除css/js/html资源
        exclude: /\\.(css|js|html|less)$/,
        loader: &#39;file-loader&#39;,
        options: {
          name: &#39;[hash:10].[ext]&#39;
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: &#39;./src/index.html&#39;
    })
  ],
  mode: &#39;development&#39;,

  // 要安装 webpack-dev-server（因为是本地安装，所以需要使用npx webpack-dev-server启动，webpack我们使用的全局安装，所以启动的时候不需要使用npx）
  // 开发服务器 devServer：用来自动化（自动编译，自动打开浏览器，自动刷新浏览器~~）
  // 特点：只会在内存中编译打包，不会有任何输出
  // 启动devServer指令为：npx webpack-dev-server
  devServer: {
    // 项目构建后路径
    contentBase: resolve(__dirname, &#39;build&#39;),
    // 启动gzip压缩(使得打包后的代码体积更小)
    compress: true,
    // 端口号
    port: 3000,
    // 自动打开浏览器
    open: true
  }
};
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>运行指令：webpack</li></ol><h3 id="_3-7-开发环境配置-基本模板" tabindex="-1"><a class="header-anchor" href="#_3-7-开发环境配置-基本模板" aria-hidden="true">#</a> 3.7 开发环境配置（基本模板）</h3><ol><li><p>创建文件</p></li><li><p>下载安装包 <code>上面3.2-3.6下载的loader/plugin文件</code></p></li><li><p>修改配置文件webpack.config.js</p></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/*
  开发环境配置：能让代码运行
    运行项目指令：
      webpack 会将打包结果输出出去
      npx webpack-dev-server 只会在内存中编译打包，没有输出

  所有的代码打包输出到js/built.js文件中
  随着我们的资源越来越多，我们还需要将代码分类打包，便是在每一个loader中使用outputPath: build文件夹下面的需要放置打包文件的文件夹名
  css、less等文件不需要设置专门的outputPath，因为它们是直接打包成字符串放进js文件中的
*/

const {
  resolve
} = require(&#39;path&#39;);
const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;);

module.exports = {
  entry: &#39;./src/js/index.js&#39;,
  output: {
    filename: &#39;js/built.js&#39;,
    path: resolve(__dirname, &#39;build&#39;)
  },
  module: {
    rules: [
      // loader的配置
      {
        // 处理less资源
        test: /\\.less$/,
        use: [&#39;style-loader&#39;, &#39;css-loader&#39;, &#39;less-loader&#39;]
      }, {
        // 处理css资源
        test: /\\.css$/,
        use: [&#39;style-loader&#39;, &#39;css-loader&#39;]
      }, {
        // 处理图片资源
        test: /\\.(jpg|png|gif)$/,
        loader: &#39;url-loader&#39;,
        options: {
          limit: 8 * 1024,
          name: &#39;[hash:10].[ext]&#39;,
          // 关闭es6模块化
          esModule: false,
          outputPath: &#39;imgs&#39;
        }
      }, {
        // 处理html中img资源
        test: /\\.html$/,
        loader: &#39;html-loader&#39;
      }, {
        // 处理其他资源
        exclude: /\\.(html|js|css|less|jpg|png|gif)/,
        loader: &#39;file-loader&#39;,
        options: {
          name: &#39;[hash:10].[ext]&#39;,
          outputPath: &#39;media&#39;
        }
      }
    ]
  },
  plugins: [
    // plugins的配置
    new HtmlWebpackPlugin({
      template: &#39;./src/index.html&#39;
    })
  ],
  mode: &#39;development&#39;,
  devServer: {
    contentBase: resolve(__dirname, &#39;build&#39;),
    compress: true,
    port: 3000,
    open: true
  }
};
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>运行指令：webpack</li></ol><h2 id="四、webpack-生产环境的基本配置" tabindex="-1"><a class="header-anchor" href="#四、webpack-生产环境的基本配置" aria-hidden="true">#</a> 四、webpack 生产环境的基本配置</h2><h3 id="_4-1-提取-css-成单独文件" tabindex="-1"><a class="header-anchor" href="#_4-1-提取-css-成单独文件" aria-hidden="true">#</a> 4.1 提取 css 成单独文件</h3><ol><li><p>创建文件</p></li><li><p>下载插件安装包 <code>npm install --save-dev mini-css-extract-plugin</code></p></li><li><p>修改配置文件webpack.config.js</p></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const {
  resolve
} = require(&#39;path&#39;);
const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;);
//使用这个插件的作用：style样式不是放在style标签中的，而是通过link的方式使用
const MiniCssExtractPlugin = require(&#39;mini-css-extract-plugin&#39;);

module.exports = {
  entry: &#39;./src/js/index.js&#39;,
  output: {
    filename: &#39;js/built.js&#39;,
    path: resolve(__dirname, &#39;build&#39;)
  },
  module: {
    rules: [{
      test: /\\.css$/,
      use: [
        // &#39;style-loader&#39;作用：创建style标签，将样式放入, 
        // 这个loader取代style-loader。作用：提取js中的css成单独文件
        MiniCssExtractPlugin.loader,
        // 将css文件整合到js文件中
        &#39;css-loader&#39;
      ]
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: &#39;./src/index.html&#39;
    }),
    new MiniCssExtractPlugin({
      // 对输出的css文件进行重命名
      filename: &#39;css/built.css&#39;
    })
  ],
  mode: &#39;development&#39;
};
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>运行指令：webpack</li></ol><h3 id="_4-2-css-兼容性处理" tabindex="-1"><a class="header-anchor" href="#_4-2-css-兼容性处理" aria-hidden="true">#</a> 4.2 css 兼容性处理</h3><ol><li><p>创建文件</p></li><li><p>下载loader安装包 <code>npm install --save-dev postcss-loader postcss-preset-env</code></p></li><li><p>修改配置文件webpack.config.js</p></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const {
  resolve
} = require(&#39;path&#39;);
const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;);
const MiniCssExtractPlugin = require(&#39;mini-css-extract-plugin&#39;);

// 设置nodejs环境变量
// p<wbr>rocess.env.NODE_ENV = &#39;development&#39;;

module.exports = {
  entry: &#39;./src/js/index.js&#39;,
  output: {
    filename: &#39;js/built.js&#39;,
    path: resolve(__dirname, &#39;build&#39;)
  },
  module: {
    rules: [{
      test: /\\.css$/,
      use: [
        MiniCssExtractPlugin.loader,
        &#39;css-loader&#39;,
        /*
          css兼容性处理：postcss --&gt; postcss-loader postcss-preset-env（作用：postcss-preset-env帮助postcss识别环境从而加载对应的配置，从而使得代码兼容每一个浏览器的版本）

         postcss-preset-env： 帮postcss找到package.json中browserslist里面的配置，通过配置加载指定的css兼容性样式

          //browserslist要写在package.json中
          &quot;browserslist&quot;: {
            // 开发环境 --&gt; 设置node环境变量：p<wbr>rocess.env.NODE_ENV = development
            &quot;development&quot;: [
              &quot;last 1 chrome version&quot;,//兼容最近的版本
              &quot;last 1 firefox version&quot;,
              &quot;last 1 safari version&quot;
            ],
            // 生产环境：默认是看生产环境
            &quot;production&quot;: [
              &quot;&gt;0.2%&quot;,
              &quot;not dead&quot;,//不用已经死的浏览器
              &quot;not op_mini all&quot;//不用op_mini版本的浏览器
            ]
          }
        */
        // 使用loader的默认配置
        // &#39;postcss-loader&#39;,
        // 修改loader的配置，写成下面的对象的形式
        {
          loader: &#39;postcss-loader&#39;,
          options: {
            ident: &#39;postcss&#39;,
            plugins: () =&gt; [
              // postcss的插件
              require(&#39;postcss-preset-env&#39;)()
            ]
          }
        }
      ]
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: &#39;./src/index.html&#39;
    }),
    new MiniCssExtractPlugin({
      filename: &#39;css/built.css&#39;
    })
  ],
  mode: &#39;development&#39;
};
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>修改package.json</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> &quot;browserslist&quot;: {
            // 开发环境 --&gt; 设置node环境变量：p<wbr>rocess.env.NODE_ENV = development
            &quot;development&quot;: [
              &quot;last 1 chrome version&quot;,//兼容最近的版本
              &quot;last 1 firefox version&quot;,
              &quot;last 1 safari version&quot;
            ],
            // 生产环境：默认是看生产环境
            &quot;production&quot;: [
              &quot;&gt;0.2%&quot;,
              &quot;not dead&quot;,//不用已经死的浏览器
              &quot;not op_mini all&quot;//不用op_mini版本的浏览器
            ]
          }
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>运行指令：webpack</li></ol><h3 id="_4-3-压缩css" tabindex="-1"><a class="header-anchor" href="#_4-3-压缩css" aria-hidden="true">#</a> 4.3 压缩css</h3><ol><li><p>创建文件</p></li><li><p>下载插件安装包 <code>npm install --save-dev optimize-css-assets-webpack-plugin</code></p></li><li><p>修改配置文件webpack.config.js</p></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const { resolve } = require(&#39;path&#39;);
const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;);
const MiniCssExtractPlugin = require(&#39;mini-css-extract-plugin&#39;);
const OptimizeCssAssetsWebpackPlugin = require(&#39;optimize-css-assets-webpack-plugin&#39;)

// 设置nodejs环境变量
// p<wbr>rocess.env.NODE_ENV = &#39;development&#39;;

module.exports = {
  entry: &#39;./src/js/index.js&#39;,
  output: {
    filename: &#39;js/built.js&#39;,
    path: resolve(__dirname, &#39;build&#39;)
  },
  module: {
    rules: [
      {
        test: /\\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          &#39;css-loader&#39;,
          {
            loader: &#39;postcss-loader&#39;,
            options: {
              ident: &#39;postcss&#39;,
              plugins: () =&gt; [
                // postcss的插件
                require(&#39;postcss-preset-env&#39;)()
              ]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: &#39;./src/index.html&#39;
    }),
    new MiniCssExtractPlugin({
      filename: &#39;css/built.css&#39;
    }),
    // 压缩css
    new OptimizeCssAssetsWebpackPlugin()
  ],
  mode: &#39;development&#39;
};
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>运行指令：webpack</li></ol><h3 id="_4-4-js语法检查" tabindex="-1"><a class="header-anchor" href="#_4-4-js语法检查" aria-hidden="true">#</a> 4.4 js语法检查</h3><ol><li><p>创建文件</p></li><li><p>下载插件安装包 <code>npm install --save-dev eslint-loader eslint eslint-config-airbnb-base eslint-plugin-import</code></p></li><li><p>修改配置文件webpack.config.js</p></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const {
  resolve
} = require(&#39;path&#39;);
const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;);

module.exports = {
  entry: &#39;./src/js/index.js&#39;,
  output: {
    filename: &#39;js/built.js&#39;,
    path: resolve(__dirname, &#39;build&#39;)
  },
  module: {
    rules: [
      /*
        语法检查： eslint-loader  eslint
          注意：只检查自己写的源代码，第三方的库是不用检查的
          设置检查规则：
            package.json中eslintConfig中设置~
              &quot;eslintConfig&quot;: {
                &quot;extends&quot;: &quot;airbnb-base&quot;
              }
            airbnb --&gt; eslint-config-airbnb-base  eslint-plugin-import eslint
      */
      {
        test: /\\.js$/,
        exclude: /node_modules/, //排除第三方的代码，只检查自己的代码
        loader: &#39;eslint-loader&#39;,
        options: {
          // 自动修复eslint的错误
          fix: true
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: &#39;./src/index.html&#39;
    })
  ],
  mode: &#39;development&#39;
};
/*
  1. 语法检查我们需要使用eslint-loader  eslint，所以先下载eslint-loader  eslint
  2. 使用exclude: /node_modules/排除第三方的代码，只检查自己的代码
  3. 语法检查通常采用airbnb（可以在网站https://github.com/topics/javascript中找出进行详细的看里面的介绍，我们想要将airbnb库与eslint结合在一起的话，去npmjs网站中搜索elsint找到eslint-config-airbnb-base，点进去根据需求下载安装即可，eslint-config-airbnb是可以检测react代码的，用到react编写代码的时候可以使用这个库），因此需要下载eslint-config-airbnb-base  eslint-plugin-import eslint
  4. 在package.json中配置语法检查采用的标准
  5. 检查出现语法问题的代码使用fix: true实现自动修复eslint出现的语法错误
  6. 如果在代码中使用console.log()等语法，eslint会出现提示警告，此时我们可以在console.log()上一行加上一行注释// eslint-disable-next-line表示下一行eslint所有规则都失效（下一行不进行eslint检查）
*/
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>配置package.json文件</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&quot;eslintConfig&quot;: {
    &quot;extends&quot;: &quot;airbnb-base&quot;,
    &quot;env&quot;: {
      &quot;browser&quot;: true
    }
  }
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>运行指令：webpack</li></ol><h3 id="_4-5-js兼容性处理" tabindex="-1"><a class="header-anchor" href="#_4-5-js兼容性处理" aria-hidden="true">#</a> 4.5 js兼容性处理</h3><ol><li><p>创建文件</p></li><li><p>下载插件安装包 <code>npm install --save-dev babel-loader @babel/core @babel/preset-env @babel/polyfill core-js</code></p></li><li><p>修改配置文件webpack.config.js</p></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const {
  resolve
} = require(&#39;path&#39;);
const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;);

module.exports = {
  entry: &#39;./src/js/index.js&#39;,
  output: {
    filename: &#39;js/built.js&#39;,
    path: resolve(__dirname, &#39;build&#39;)
  },
  module: {
    rules: [
      /*
        js兼容性处理：安装babel-loader @babel/core 两个库
          1. 基本js兼容性处理 --&gt; 安装@babel/preset-env库
            问题：只能转换基本语法，如promise高级语法不能转换
          2. 需要做兼容性处理的就做：按需加载  --&gt; 安装core-js库并在presets里面作如下配置
          
          前两步骤是我们常用的兼容性处理的方式

          3. 全部js兼容性处理 --&gt; 安装babel-loader @babel/core @babel/preset-env @babel/polyfill  
          不需要进行配置，只需要在主入口文件中引入 @babel/polyfill即可（import &#39;@babel/polyfill&#39;）
            问题：我只要解决部分兼容性问题，但是将所有兼容性代码全部引入，体积太大了，所以我们不使用这种方式~
      */
      {
        test: /\\.js$/,
        exclude: /node_modules/,
        loader: &#39;babel-loader&#39;,
        options: {
          // 预设：指示babel做怎么样的兼容性处理
          presets: [
            [
              &#39;@babel/preset-env&#39;, {
                // 按需加载
                useBuiltIns: &#39;usage&#39;,
                // 指定core-js版本
                corejs: {
                  version: 3
                },
                // 指定兼容性做到哪个版本浏览器
                targets: {
                  chrome: &#39;60&#39;,
                  firefox: &#39;60&#39;,
                  ie: &#39;9&#39;,
                  safari: &#39;10&#39;,
                  edge: &#39;17&#39;
                }
              }
            ]
          ]
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: &#39;./src/index.html&#39;
    })
  ],
  mode: &#39;development&#39;
};
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>运行指令：webpack</li></ol><h3 id="_4-6-js压缩" tabindex="-1"><a class="header-anchor" href="#_4-6-js压缩" aria-hidden="true">#</a> 4.6 js压缩</h3><ol><li>创建文件</li><li>修改配置文件webpack.config.js</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const {
  resolve
} = require(&#39;path&#39;);
const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;);

module.exports = {
  entry: &#39;./src/js/index.js&#39;,
  output: {
    filename: &#39;js/built.js&#39;,
    path: resolve(__dirname, &#39;build&#39;)
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: &#39;./src/index.html&#39;
    })
  ],
  // 生产环境下会自动压缩js代码//内部会自动加载一些插件
  mode: &#39;production&#39;
};
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>运行指令：webpack</li></ol><h3 id="_4-7-html压缩" tabindex="-1"><a class="header-anchor" href="#_4-7-html压缩" aria-hidden="true">#</a> 4.7 html压缩</h3><ol><li>创建文件</li><li>修改配置文件webpack.config.js</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const { resolve } = require(&#39;path&#39;);
const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;);

module.exports = {
  entry: &#39;./src/js/index.js&#39;,
  output: {
    filename: &#39;js/built.js&#39;,
    path: resolve(__dirname, &#39;build&#39;)
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: &#39;./src/index.html&#39;,
      // 压缩html代码
      minify: {
        // 移除空格
        collapseWhitespace: true,
        // 移除注释
        removeComments: true
      }
    })
  ],
  mode: &#39;production&#39;
};

复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>运行指令：webpack</li></ol><h3 id="_4-8-生产环境配置" tabindex="-1"><a class="header-anchor" href="#_4-8-生产环境配置" aria-hidden="true">#</a> 4.8 生产环境配置</h3><ol><li><p>创建文件</p></li><li><p>下载插件安装包 下载前面的所有的安装包</p></li><li><p>修改配置文件webpack.config.js</p></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const {
  resolve
} = require(&#39;path&#39;);
const MiniCssExtractPlugin = require(&#39;mini-css-extract-plugin&#39;);
const OptimizeCssAssetsWebpackPlugin = require(&#39;optimize-css-assets-webpack-plugin&#39;);
const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;);

// 定义nodejs环境变量：决定使用browserslist的哪个环境
p<wbr>rocess.env.NODE_ENV = &#39;production&#39;;

// 复用loader
const commonCssLoader = [
  MiniCssExtractPlugin.loader,
  &#39;css-loader&#39;, {
    // 还需要在package.json中定义browserslist
    loader: &#39;postcss-loader&#39;,
    options: {
      ident: &#39;postcss&#39;,
      plugins: () =&gt; [require(&#39;postcss-preset-env&#39;)()]
    }
  }
];

module.exports = {
  entry: &#39;./src/js/index.js&#39;,
  output: {
    filename: &#39;js/built.js&#39;,
    path: resolve(__dirname, &#39;build&#39;)
  },
  module: {
    rules: [{
        test: /\\.css$/,
        use: [...commonCssLoader]
      }, {
        test: /\\.less$/,
        use: [...commonCssLoader, &#39;less-loader&#39;]
      },
      /*
        正常来讲，一个文件只能被一个loader处理。
        当一个文件要被多个loader处理，那么一定要指定loader执行的先后顺序：
          先执行eslint 在执行babel
      */
      {
        // 在package.json中eslintConfig --&gt; airbnb
        test: /\\.js$/,
        exclude: /node_modules/,
        // 优先执行
        enforce: &#39;pre&#39;,
        loader: &#39;eslint-loader&#39;,
        options: {
          fix: true
        }
      }, {
        test: /\\.js$/,
        exclude: /node_modules/,
        loader: &#39;babel-loader&#39;,
        options: {
          presets: [
            [
              &#39;@babel/preset-env&#39;, {
                useBuiltIns: &#39;usage&#39;,
                corejs: {
                  version: 3
                },
                targets: {
                  chrome: &#39;60&#39;,
                  firefox: &#39;60&#39;,
                  ie: &#39;9&#39;,
                  safari: &#39;10&#39;,
                  edge: &#39;17&#39;
                }
              }
            ]
          ]
        }
      }, {
        test: /\\.(jpg|png|gif)/,
        loader: &#39;url-loader&#39;,
        options: {
          limit: 8 * 1024,
          name: &#39;[hash:10].[ext]&#39;,
          outputPath: &#39;imgs&#39;,
          esModule: false
        }
      }, {
        test: /\\.html$/,
        loader: &#39;html-loader&#39;
      }, {
        exclude: /\\.(js|css|less|html|jpg|png|gif)/,
        loader: &#39;file-loader&#39;,
        options: {
          outputPath: &#39;media&#39;
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: &#39;css/built.css&#39;
    }),
    new OptimizeCssAssetsWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: &#39;./src/index.html&#39;,
      minify: {
        collapseWhitespace: true,
        removeComments: true
      }
    })
  ],
  mode: &#39;production&#39;
};
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>运行指令：webpack</li></ol><h2 id="五、webpack-优化配置" tabindex="-1"><a class="header-anchor" href="#五、webpack-优化配置" aria-hidden="true">#</a> 五、webpack 优化配置</h2><h4 id="webpack性能优化" tabindex="-1"><a class="header-anchor" href="#webpack性能优化" aria-hidden="true">#</a> webpack性能优化</h4><ul><li>开发环境性能优化</li><li>生产环境性能优化</li></ul><h5 id="开发环境性能优化" tabindex="-1"><a class="header-anchor" href="#开发环境性能优化" aria-hidden="true">#</a> 开发环境性能优化</h5><ul><li>优化打包构建速度 <ul><li>HMR</li></ul></li><li>优化代码调试 <ul><li>source-map</li></ul></li></ul><h5 id="生产环境性能优化" tabindex="-1"><a class="header-anchor" href="#生产环境性能优化" aria-hidden="true">#</a> 生产环境性能优化</h5><ul><li>优化打包构建速度 <ul><li>oneOf</li><li>babel缓存</li><li>多进程打包</li><li>externals</li><li>dll</li></ul></li><li>优化代码运行的性能 <ul><li>缓存(hash-chunkhash-contenthash)</li><li>tree shaking</li><li>code split</li><li>懒加载/预加载</li><li>pwa</li></ul></li></ul><h3 id="_5-1-hmr" tabindex="-1"><a class="header-anchor" href="#_5-1-hmr" aria-hidden="true">#</a> 5.1 HMR</h3><ol><li>创建文件</li><li>修改配置文件webpack.config.js</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/*
  1.为什么要启用热更新？
  当我们改变页面中的css文件的时候会触发整个文件包括js文件都会重新打包进行更新，这样会造成慢的打包速度，这是我们不想要的结果，所以要进行热更新，只对修改的那个文件进行重新打包，进行更新。

  2.HMR: hot module replacement 热模块替换 / 模块热替换（在devServer中将hot设置为true即为开启）
    作用：一个模块发生变化，只会重新打包这一个模块（而不是打包所有模块） 
      极大提升构建速度
      
      样式文件：可以使用HMR功能：因为style-loader内部实现了~

      js文件：默认不能使用HMR功能 --&gt; 需要修改js代码，添加支持HMR功能的代码
        注意：HMR功能对js的处理，只能处理非入口js文件的其他文件。

      html文件: 默认不能使用HMR功能.同时会导致问题：html文件不能热更新了~ （不用做HMR功能，因为只有一个html文件，只要里面的内容发生变化，文件是一定要更新的）
        解决：修改entry入口，将html文件引入,这样才可以生效
*/

const {
  resolve
} = require(&#39;path&#39;);
const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;);

module.exports = {
  entry: [&#39;./src/js/index.js&#39;, &#39;./src/index.html&#39;],
  output: {
    filename: &#39;js/built.js&#39;,
    path: resolve(__dirname, &#39;build&#39;)
  },
  module: {
    rules: [
      // loader的配置
      {
        // 处理less资源
        test: /\\.less$/,
        use: [&#39;style-loader&#39;, &#39;css-loader&#39;, &#39;less-loader&#39;]
      }, {
        // 处理css资源
        test: /\\.css$/,
        use: [&#39;style-loader&#39;, &#39;css-loader&#39;]
      }, {
        // 处理图片资源
        test: /\\.(jpg|png|gif)$/,
        loader: &#39;url-loader&#39;,
        options: {
          limit: 8 * 1024,
          name: &#39;[hash:10].[ext]&#39;,
          // 关闭es6模块化
          esModule: false,
          outputPath: &#39;imgs&#39;
        }
      }, {
        // 处理html中img资源
        test: /\\.html$/,
        loader: &#39;html-loader&#39;
      }, {
        // 处理其他资源
        exclude: /\\.(html|js|css|less|jpg|png|gif)/,
        loader: &#39;file-loader&#39;,
        options: {
          name: &#39;[hash:10].[ext]&#39;,
          outputPath: &#39;media&#39;
        }
      }
    ]
  },
  plugins: [
    // plugins的配置
    new HtmlWebpackPlugin({
      template: &#39;./src/index.html&#39;
    })
  ],
  mode: &#39;development&#39;,
  devServer: {
    contentBase: resolve(__dirname, &#39;build&#39;),
    compress: true,
    port: 3000,
    open: true,
    // 开启HMR功能
    // 当修改了webpack配置，新配置要想生效，必须重启webpack服务
    hot: true
  }
};
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>js代码需要在代码中添加</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>if (module.hot) {
// 一旦 module.hot 为true，说明开启了HMR功能。 --&gt; 让HMR功能代码生效
module.hot.accept(&#39;./print.js&#39;, function() {
// 方法会监听 print.js 文件的变化，一旦发生变化，其他模块不会重新打包构建。
// 会执行后面的回调函数
//此处相当于是监听到print.js发生了变化，执行print()函数
print();
});
}
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>运行指令：webpack</li></ol><h3 id="_5-2-source-map" tabindex="-1"><a class="header-anchor" href="#_5-2-source-map" aria-hidden="true">#</a> 5.2 source-map</h3><ol><li>创建文件</li><li>修改配置文件webpack.config.js</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const {
  resolve
} = require(&#39;path&#39;);
const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;);

module.exports = {
  entry: [&#39;./src/js/index.js&#39;, &#39;./src/index.html&#39;],
  output: {
    filename: &#39;js/built.js&#39;,
    path: resolve(__dirname, &#39;build&#39;)
  },
  module: {
    rules: [
      // loader的配置
      {
        // 处理less资源
        test: /\\.less$/,
        use: [&#39;style-loader&#39;, &#39;css-loader&#39;, &#39;less-loader&#39;]
      }, {
        // 处理css资源
        test: /\\.css$/,
        use: [&#39;style-loader&#39;, &#39;css-loader&#39;]
      }, {
        // 处理图片资源
        test: /\\.(jpg|png|gif)$/,
        loader: &#39;url-loader&#39;,
        options: {
          limit: 8 * 1024,
          name: &#39;[hash:10].[ext]&#39;,
          // 关闭es6模块化
          esModule: false,
          outputPath: &#39;imgs&#39;
        }
      }, {
        // 处理html中img资源
        test: /\\.html$/,
        loader: &#39;html-loader&#39;
      }, {
        // 处理其他资源
        exclude: /\\.(html|js|css|less|jpg|png|gif)/,
        loader: &#39;file-loader&#39;,
        options: {
          name: &#39;[hash:10].[ext]&#39;,
          outputPath: &#39;media&#39;
        }
      }
    ]
  },
  plugins: [
    // plugins的配置
    new HtmlWebpackPlugin({
      template: &#39;./src/index.html&#39;
    })
  ],
  mode: &#39;development&#39;,
  devServer: {
    contentBase: resolve(__dirname, &#39;build&#39;),
    compress: true,
    port: 3000,
    open: true,
    hot: true
  },
  devtool: &#39;eval-source-map&#39; //使用：直接加上这句话即可
};

/*
  source-map: 一种 提供源代码到构建后代码映射 技术 （如果构建后代码出错了，通过映射可以追踪源代码错误）

    [inline-|hidden-|eval-][nosources-][cheap-[module-]]source-map

    source-map：外部
      错误代码准确信息 和 源代码的错误位置
    inline-source-map：内联
      只生成一个内联source-map
      错误代码准确信息 和 源代码的错误位置
    hidden-source-map：外部
      错误代码错误原因，但是没有错误位置
      不能追踪源代码错误，只能提示到构建后代码的错误位置
    eval-source-map：内联
      每一个文件都生成对应的source-map，都在eval
      错误代码准确信息 和 源代码的错误位置
    nosources-source-map：外部
      错误代码准确信息, 但是没有任何源代码信息
    cheap-source-map：外部
      错误代码准确信息 和 源代码的错误位置 
      只能精确的行
    cheap-module-source-map：外部
      错误代码准确信息 和 源代码的错误位置 
      module会将loader的source map加入

    内联 和 外部的区别：1. 外部生成了文件，内联没有 2. 内联构建速度更快

    开发环境：速度快，调试更友好
      速度快(eval&gt;inline&gt;cheap&gt;...)
        eval-cheap-souce-map（速度最快）
        eval-source-map
      调试更友好  
        souce-map（调试最好）
        cheap-module-souce-map
        cheap-souce-map

      --&gt; eval-source-map  &gt; ：eval-cheap-module-souce-map

    生产环境：源代码要不要隐藏? 调试要不要更友好
      内联会让代码体积变大，所以在生产环境不用内联
      nosources-source-map 全部隐藏
      hidden-source-map 只隐藏源代码，会提示构建后代码错误信息

      --&gt; source-map（） / cheap-module-souce-map
      最终总结：
        开发环境使用：eval-source-map
        生产环境使用：source-map（）
*/
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>运行指令：webpack</li></ol><h3 id="_5-3-oneof" tabindex="-1"><a class="header-anchor" href="#_5-3-oneof" aria-hidden="true">#</a> 5.3 oneOf</h3><ol><li>创建文件</li><li>修改配置文件webpack.config.js</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const {
  resolve
} = require(&#39;path&#39;);
const MiniCssExtractPlugin = require(&#39;mini-css-extract-plugin&#39;);
const OptimizeCssAssetsWebpackPlugin = require(&#39;optimize-css-assets-webpack-plugin&#39;);
const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;);

p<wbr>rocess.env.NODE_ENV = &#39;production&#39;;

// 复用loader
const commonCssLoader = [
  MiniCssExtractPlugin.loader,
  &#39;css-loader&#39;, {
    loader: &#39;postcss-loader&#39;,
    options: {
      ident: &#39;postcss&#39;,
      plugins: () =&gt; [require(&#39;postcss-preset-env&#39;)()]
    }
  }
];

module.exports = {
  entry: &#39;./src/js/index.js&#39;,
  output: {
    filename: &#39;js/built.js&#39;,
    path: resolve(__dirname, &#39;build&#39;)
  },
  module: {
    rules: [{
      test: /\\.js$/,
      exclude: /node_modules/,
      // 优先执行
      enforce: &#39;pre&#39;,
      loader: &#39;eslint-loader&#39;,
      options: {
        fix: true
      }
    }, {
      // 以下loader只会匹配一个（这样子便不会只需要一个loader的时候将所有的loader遍历一遍了，可以提高速度）
      // 注意：不能有两个配置处理同一种类型文件（比如我们的bable-loader和eslint-loader都要使用，那么我们将eslint-loader提取出来放到oneOf前面，这样前面的eslint-loader执行完毕之后再从oneOf里面找到bable-loader执行）
      oneOf: [{
          test: /\\.css$/,
          use: [...commonCssLoader]
        }, {
          test: /\\.less$/,
          use: [...commonCssLoader, &#39;less-loader&#39;]
        },
        /*
          正常来讲，一个文件只能被一个loader处理。
          当一个文件要被多个loader处理，那么一定要指定loader执行的先后顺序：
            先执行eslint 在执行babel
        */
        {
          test: /\\.js$/,
          exclude: /node_modules/,
          loader: &#39;babel-loader&#39;,
          options: {
            presets: [
              [
                &#39;@babel/preset-env&#39;, {
                  useBuiltIns: &#39;usage&#39;,
                  corejs: {
                    version: 3
                  },
                  targets: {
                    chrome: &#39;60&#39;,
                    firefox: &#39;50&#39;
                  }
                }
              ]
            ]
          }
        }, {
          test: /\\.(jpg|png|gif)/,
          loader: &#39;url-loader&#39;,
          options: {
            limit: 8 * 1024,
            name: &#39;[hash:10].[ext]&#39;,
            outputPath: &#39;imgs&#39;,
            esModule: false
          }
        }, {
          test: /\\.html$/,
          loader: &#39;html-loader&#39;
        }, {
          exclude: /\\.(js|css|less|html|jpg|png|gif)/,
          loader: &#39;file-loader&#39;,
          options: {
            outputPath: &#39;media&#39;
          }
        }
      ]
    }]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: &#39;css/built.css&#39;
    }),
    new OptimizeCssAssetsWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: &#39;./src/index.html&#39;,
      minify: {
        collapseWhitespace: true,
        removeComments: true
      }
    })
  ],
  mode: &#39;production&#39;
};
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>运行指令：webpack</li></ol><h3 id="_5-4-缓存" tabindex="-1"><a class="header-anchor" href="#_5-4-缓存" aria-hidden="true">#</a> 5.4 缓存</h3><ol><li>创建文件</li><li>修改配置文件webpack.config.js</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const {
  resolve
} = require(&#39;path&#39;);
const MiniCssExtractPlugin = require(&#39;mini-css-extract-plugin&#39;);
const OptimizeCssAssetsWebpackPlugin = require(&#39;optimize-css-assets-webpack-plugin&#39;);
const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;);

/*
  缓存：
    1. babel缓存
      cacheDirectory: true
      --&gt; 让第二次打包构建速度更快
    2. 文件资源缓存
      hash: 每次wepack构建时会生成一个唯一的hash值。
        问题: 因为js和css同时使用一个hash值。
          如果重新打包，会导致所有缓存失效。（可能我却只改动一个文件）
      chunkhash：根据chunk生成的hash值。如果打包来源于同一个chunk，那么hash值就一样
        问题: js和css的hash值还是一样的
          因为css是在js中被引入的，所以同属于一个chunk
      contenthash: 根据文件的内容生成hash值。不同文件hash值一定不一样    
      --&gt; 让代码上线运行缓存更好使用（上线代码的性能优化的）

    综上所述：开启缓存需要经历两个步骤：
      1. 设置cacheDirectory: true
      2. 在输出的数组中加上contenthash
*/

// 定义nodejs环境变量：决定使用browserslist的哪个环境
p<wbr>rocess.env.NODE_ENV = &#39;production&#39;;

// 复用loader
const commonCssLoader = [
  MiniCssExtractPlugin.loader,
  &#39;css-loader&#39;, {
    // 还需要在package.json中定义browserslist
    loader: &#39;postcss-loader&#39;,
    options: {
      ident: &#39;postcss&#39;,
      plugins: () =&gt; [require(&#39;postcss-preset-env&#39;)()]
    }
  }
];

module.exports = {
  entry: &#39;./src/js/index.js&#39;,
  output: {
    filename: &#39;js/built.[contenthash:10].js&#39;, //本节修改的地方
    path: resolve(__dirname, &#39;build&#39;)
  },
  module: {
    rules: [{
      // 在package.json中eslintConfig --&gt; airbnb
      test: /\\.js$/,
      exclude: /node_modules/,
      // 优先执行
      enforce: &#39;pre&#39;,
      loader: &#39;eslint-loader&#39;,
      options: {
        fix: true
      }
    }, {
      oneOf: [{
          test: /\\.css$/,
          use: [...commonCssLoader]
        }, {
          test: /\\.less$/,
          use: [...commonCssLoader, &#39;less-loader&#39;]
        },

        {
          test: /\\.js$/,
          exclude: /node_modules/,
          loader: &#39;babel-loader&#39;,
          options: {
            presets: [
              [
                &#39;@babel/preset-env&#39;, {
                  useBuiltIns: &#39;usage&#39;,
                  corejs: {
                    version: 3
                  },
                  targets: {
                    chrome: &#39;60&#39;,
                    firefox: &#39;50&#39;
                  }
                }
              ]
            ],
            // 开启babel缓存
            // 第二次构建时，会读取之前的缓存
            cacheDirectory: true // 本节修改的位置
          }
        }, {
          test: /\\.(jpg|png|gif)/,
          loader: &#39;url-loader&#39;,
          options: {
            limit: 8 * 1024,
            name: &#39;[hash:10].[ext]&#39;,
            outputPath: &#39;imgs&#39;,
            esModule: false
          }
        }, {
          test: /\\.html$/,
          loader: &#39;html-loader&#39;
        }, {
          exclude: /\\.(js|css|less|html|jpg|png|gif)/,
          loader: &#39;file-loader&#39;,
          options: {
            outputPath: &#39;media&#39;
          }
        }
      ]
    }]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: &#39;css/built.[contenthash:10].css&#39; //本节修改的地方
    }),
    new OptimizeCssAssetsWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: &#39;./src/index.html&#39;,
      minify: {
        collapseWhitespace: true,
        removeComments: true
      }
    })
  ],
  mode: &#39;production&#39;,
  devtool: &#39;source-map&#39;
};
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/369cffa9fe554ba4b22ac33e4d522491~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp" alt=""> 3. 运行指令：webpack</p><h3 id="_5-5-tree-shaking" tabindex="-1"><a class="header-anchor" href="#_5-5-tree-shaking" aria-hidden="true">#</a> 5.5 tree shaking</h3><ol><li>修改配置文件</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const {
  resolve
} = require(&#39;path&#39;);
const MiniCssExtractPlugin = require(&#39;mini-css-extract-plugin&#39;);
const OptimizeCssAssetsWebpackPlugin = require(&#39;optimize-css-assets-webpack-plugin&#39;);
const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;);

/*
  tree shaking：去除无用代码，使得体积更小
    前提：1. 必须使用ES6模块化  2. 开启production环境
    作用: 减少代码体积

    在package.json中配置 
      &quot;sideEffects&quot;: false 所有代码都没有副作用（都可以进行tree shaking）
        问题：可能会把css / @babel/polyfill （副作用）文件干掉，所以采用下面的一行形式
      &quot;sideEffects&quot;: [&quot;*.css&quot;, &quot;*.less&quot;]（加上这句话表示不移除css和less文件）
*/

p<wbr>rocess.env.NODE_ENV = &#39;production&#39;;

const commonCssLoader = [
  MiniCssExtractPlugin.loader,
  &#39;css-loader&#39;, {
    loader: &#39;postcss-loader&#39;,
    options: {
      ident: &#39;postcss&#39;,
      plugins: () =&gt; [require(&#39;postcss-preset-env&#39;)()]
    }
  }
];

module.exports = {
  entry: &#39;./src/js/index.js&#39;,
  output: {
    filename: &#39;js/built.[contenthash:10].js&#39;,
    path: resolve(__dirname, &#39;build&#39;)
  },
  module: {
    rules: [{
      test: /\\.js$/,
      exclude: /node_modules/,
      enforce: &#39;pre&#39;,
      loader: &#39;eslint-loader&#39;,
      options: {
        fix: true
      }
    }, {
      oneOf: [{
        test: /\\.css$/,
        use: [...commonCssLoader]
      }, {
        test: /\\.less$/,
        use: [...commonCssLoader, &#39;less-loader&#39;]
      }, {
        test: /\\.js$/,
        exclude: /node_modules/,
        loader: &#39;babel-loader&#39;,
        options: {
          presets: [
            [
              &#39;@babel/preset-env&#39;, {
                useBuiltIns: &#39;usage&#39;,
                corejs: {
                  version: 3
                },
                targets: {
                  chrome: &#39;60&#39;,
                  firefox: &#39;50&#39;
                }
              }
            ]
          ],
          cacheDirectory: true
        }
      }, {
        test: /\\.(jpg|png|gif)/,
        loader: &#39;url-loader&#39;,
        options: {
          limit: 8 * 1024,
          name: &#39;[hash:10].[ext]&#39;,
          outputPath: &#39;imgs&#39;,
          esModule: false
        }
      }, {
        test: /\\.html$/,
        loader: &#39;html-loader&#39;
      }, {
        exclude: /\\.(js|css|less|html|jpg|png|gif)/,
        loader: &#39;file-loader&#39;,
        options: {
          outputPath: &#39;media&#39;
        }
      }]
    }]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: &#39;css/built.[contenthash:10].css&#39;
    }),
    new OptimizeCssAssetsWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: &#39;./src/index.html&#39;,
      minify: {
        collapseWhitespace: true,
        removeComments: true
      }
    })
  ],
  mode: &#39;production&#39;,
  devtool: &#39;source-map&#39;
};
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>运行指令：webpack</li></ol><h3 id="_5-5-code-split" tabindex="-1"><a class="header-anchor" href="#_5-5-code-split" aria-hidden="true">#</a> 5.5 code split</h3><h4 id="多入口文件" tabindex="-1"><a class="header-anchor" href="#多入口文件" aria-hidden="true">#</a> 多入口文件</h4><ol><li>修改配置文件</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const {
  resolve
} = require(&#39;path&#39;);
const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;);

module.exports = {
  // 单入口打包输出一个文件，多入口打包输出多个文件，有几个入口便打包输出多少个文件
  // 单入口（单页面应用程序使用单入口）（开发时单入口应用使用的多）
  // entry: &#39;./src/js/index.js&#39;,
  entry: {
    // 多入口：有一个入口，最终输出就有一个bundle（多页面应用程序使用多入口）
    index: &#39;./src/js/index.js&#39;,
    test: &#39;./src/js/test.js&#39;
  },
  output: {
    // [name]：取文件名（比如上面的entry中名称为index,那么输出的文件名首部会有index名称）
    filename: &#39;js/[name].[contenthash:10].js&#39;,
    path: resolve(__dirname, &#39;build&#39;)
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: &#39;./src/index.html&#39;,
      minify: {
        collapseWhitespace: true,
        removeComments: true
      }
    })
  ],
  mode: &#39;production&#39;
};
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>运行指令：webpack</li></ol><h4 id="单入口文件分割多个文件-1" tabindex="-1"><a class="header-anchor" href="#单入口文件分割多个文件-1" aria-hidden="true">#</a> 单入口文件分割多个文件-1</h4><ol><li>修改配置文件</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const {
  resolve
} = require(&#39;path&#39;);
const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;);

module.exports = {
  // 单入口
  // entry: &#39;./src/js/index.js&#39;,
  entry: {
    index: &#39;./src/js/index.js&#39;,
    test: &#39;./src/js/test.js&#39;
  },
  output: {
    // [name]：取文件名
    filename: &#39;js/[name].[contenthash:10].js&#39;,
    path: resolve(__dirname, &#39;build&#39;)
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: &#39;./src/index.html&#39;,
      minify: {
        collapseWhitespace: true,
        removeComments: true
      }
    })
  ],
  /*
    1. 可以将node_modules中代码单独打包一个chunk最终输出（将别人的第三方的东西单独打包，将自己写的东西单独打包）
    2. 自动分析多入口chunk中，有没有公共的文件。如果有会打包成单独一个chunk
    3. 这种单入口的形式不常使用
  */
  optimization: {
    splitChunks: {
      chunks: &#39;all&#39;
    }
  },
  mode: &#39;production&#39;
};
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>运行指令：webpack</li></ol><h4 id="单入口文件输出多个出口文件-2-常用" tabindex="-1"><a class="header-anchor" href="#单入口文件输出多个出口文件-2-常用" aria-hidden="true">#</a> 单入口文件输出多个出口文件-2（常用）</h4><ol><li>修改配置文件</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const {
  resolve
} = require(&#39;path&#39;);
const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;);

module.exports = {
  // 单入口
  entry: &#39;./src/js/index.js&#39;,
  output: {
    // [name]：取文件名
    filename: &#39;js/[name].[contenthash:10].js&#39;,
    path: resolve(__dirname, &#39;build&#39;)
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: &#39;./src/index.html&#39;,
      minify: {
        collapseWhitespace: true,
        removeComments: true
      }
    })
  ],
  /*
    1. 单入口的这种形式经常使用，实现功能：单入口打包输出多个出口文件，从而使得多个文件并行运行，增加运行速度
    2. 这种方式可以将node_modules中代码单独打包一个chunk最终输出，将入口文件打包输出一个出口文件，如果想要将某个单独的文件也打包输出为一个文件，则需要进行以下配置：
      1. optimization配置
      2.在打包的出口文件中对需要单独打包的文件输入相关代码
  */
  optimization: {
    splitChunks: {
      chunks: &#39;all&#39;
    }
  },
  mode: &#39;production&#39;
};
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>入口文件输入代码</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function sum(...args) {
  return args.reduce((p, c) =&gt; p + c, 0);
}

/*
  通过js代码，让某个文件被单独打包成一个chunk
  import动态导入语法：能将某个文件单独打包
  webpackChunkName: &#39;test&#39;的作用是命名输出的打包名称，否则打包名称会根据每次打包输出的id进行命名，每次打包输出的id不一样，名称也不一样
*/
import ( /* webpackChunkName: &#39;test&#39; */ &#39;./test&#39;)
.then(({
    mul,
    count
  }) =&gt; {
    // 文件加载成功~
    // eslint-disable-next-line
    console.log(mul(2, 5));
  })
  .catch(() =&gt; {
    // eslint-disable-next-line
    console.log(&#39;文件加载失败~&#39;);
  });

// eslint-disable-next-line
console.log(sum(1, 2, 3, 4));
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>运行指令：webpack</li></ol><h3 id="_5-6-懒加载" tabindex="-1"><a class="header-anchor" href="#_5-6-懒加载" aria-hidden="true">#</a> 5.6 懒加载</h3><ol><li>修改配置文件</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const {
  resolve
} = require(&#39;path&#39;);
const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;);

module.exports = {
  // 单入口
  entry: &#39;./src/js/index.js&#39;,
  output: {
    // [name]：取文件名
    filename: &#39;js/[name].[contenthash:10].js&#39;,
    path: resolve(__dirname, &#39;build&#39;)
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: &#39;./src/index.html&#39;,
      minify: {
        collapseWhitespace: true,
        removeComments: true
      }
    })
  ],
  /*
    1. 单入口的这种形式经常使用，实现功能：单入口打包输出多个出口文件，从而使得多个文件并行运行，增加运行速度
    2. 这种方式可以将node_modules中代码单独打包一个chunk最终输出，将入口文件打包输出一个出口文件，如果想要将某个单独的文件也打包输出为一个文件，则需要进行以下配置：
      1. optimization配置
      2.在打包的出口文件中对需要单独打包的文件输入相关代码
  */
  optimization: {
    splitChunks: {
      chunks: &#39;all&#39;
    }
  },
  mode: &#39;production&#39;
};
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>入口文件中输入</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>console.log(&#39;index.js文件被加载了~&#39;);

// import { mul } from &#39;./test&#39;;  属于正常加载

document.getElementById(&#39;btn&#39;).onclick = function() {
// 懒加载~：当文件需要使用时才加载~
// 预加载 webpackPrefetch: true：会在使用之前，提前加载js文件 
// 正常加载可以认为是并行加载（同一时间加载多个文件）  
// 预加载 prefetch：等其他资源加载完毕，浏览器空闲了，再偷偷加载资源（兼容性比较差的）（检测是否是预加载了可以通过打开控制台，查看网络看出是否是提前加载了）
/*
1. 通常情况下懒加载的第一次加载如果加载的文件比较大的话会加载的时间比较长，给用户造成阻塞的现象
2. 一般不使用预加载，因为兼容性差了一些，一般使用懒加载
3. 懒加载的实现是基于前面的代码分割的基础上的，要进行了前面的代码分割的配置才可以使用懒加载，这个案例实现的功能是点击按钮之后再加载test文件中的js代码
4. 懒加载第一次可能会慢一点，第二次加载便不会慢了，第一次加载会存入缓存中，第二次加载会直接从缓存中加载
  */
import ( /* webpackChunkName: &#39;test&#39;, webpackPrefetch: true */ &#39;./test&#39;).then(({
mul
}) =&gt; {
console.log(mul(4, 5));
});
};
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>运行指令：webpack</li></ol><h3 id="_5-7-pwa" tabindex="-1"><a class="header-anchor" href="#_5-7-pwa" aria-hidden="true">#</a> 5.7 pwa</h3><ol><li><p>下载安装包 <code>npm install --save-dev workbox-webpack-plugin</code></p></li><li><p>修改配置文件</p></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const {
  resolve
} = require(&#39;path&#39;);
const MiniCssExtractPlugin = require(&#39;mini-css-extract-plugin&#39;);
const OptimizeCssAssetsWebpackPlugin = require(&#39;optimize-css-assets-webpack-plugin&#39;);
const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;);


const WorkboxWebpackPlugin = require(&#39;workbox-webpack-plugin&#39;);

/*
  PWA: 渐进式网络开发应用程序(离线可访问)
    workbox --&gt; workbox-webpack-plugin
*/

p<wbr>rocess.env.NODE_ENV = &#39;production&#39;;


module.exports = {
  entry: &#39;./src/js/index.js&#39;,
  output: {
    filename: &#39;js/built.[contenthash:10].js&#39;,
    path: resolve(__dirname, &#39;build&#39;)
  },
  module: {
    rules: [

    ]
  },
  plugins: [

    new WorkboxWebpackPlugin.GenerateSW({
      /*
        1. 帮助serviceworker快速启动
        2. 删除旧的 serviceworker

        生成一个 serviceworker 配置文件~
      */
      clientsClaim: true,
      skipWaiting: true
    })
  ],
  mode: &#39;production&#39;,
  devtool: &#39;source-map&#39;
};
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>入口文件中输入</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import { mul } from &#39;./test&#39;;
import &#39;../css/index.css&#39;;

function sum(...args) {
  return args.reduce((p, c) =&gt; p + c, 0);
}

// eslint-disable-next-line
console.log(mul(2, 3));
// eslint-disable-next-line
console.log(sum(1, 2, 3, 4));

/*
  1. eslint不认识 window、navigator全局变量
    解决：需要修改package.json中eslintConfig配置
      &quot;env&quot;: {
        &quot;browser&quot;: true // 支持浏览器端全局变量，如果要支持node的全局变量，则写&quot;node&quot;:true
      }
   2. sw代码必须运行在服务器上
      --&gt; nodejs
      --&gt;
        npm i serve -g
        serve -s build 启动服务器，将build目录下所有资源作为静态资源暴露出去
*/
// 注册serviceWorker
// 处理兼容性问题
if (&#39;serviceWorker&#39; in navigator) {
  window.addEventListener(&#39;load&#39;, () =&gt; {
    navigator.serviceWorker
      .register(&#39;/service-worker.js&#39;)
      .then(() =&gt; {
        console.log(&#39;sw注册成功了~&#39;);
      })
      .catch(() =&gt; {
        console.log(&#39;sw注册失败了~&#39;);
      });
  });
}
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看注册的service workers <img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ff9f850c6e18489dbc941d31514f0d85~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp" alt=""> 注册成功缓存的离线数据 <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cf507de6f22d4386bbbfcad68a82dec3~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp" alt=""> 4. 运行指令：webpack</p><h3 id="_5-8-多进程打包" tabindex="-1"><a class="header-anchor" href="#_5-8-多进程打包" aria-hidden="true">#</a> 5.8 多进程打包</h3><ol><li><p>下载安装包 <code>npm install --save-dev thread-loader</code></p></li><li><p>修改配置文件</p></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const { resolve } = require(&#39;path&#39;);
const MiniCssExtractPlugin = require(&#39;mini-css-extract-plugin&#39;);
const OptimizeCssAssetsWebpackPlugin = require(&#39;optimize-css-assets-webpack-plugin&#39;);
const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;);


const WorkboxWebpackPlugin = require(&#39;workbox-webpack-plugin&#39;);//



module.exports = {
  entry: &#39;./src/js/index.js&#39;,
  output: {
    filename: &#39;js/built.[contenthash:10].js&#39;,
    path: resolve(__dirname, &#39;build&#39;)
  },
  module: {
    rules: [
    
      {
        oneOf: [
          {
            test: /\\.css$/,
            use: [...commonCssLoader]
          },
          {
            test: /\\.less$/,
            use: [...commonCssLoader, &#39;less-loader&#39;]
          },
          {
            test: /\\.js$/,
            exclude: /node_modules/,
            use: [
              /* 
                开启多进程打包。 
                进程启动大概为600ms，进程通信也有开销。
                只有工作消耗时间比较长，才需要多进程打包
              */
              {
                loader: &#39;thread-loader&#39;,
                options: {
                  workers: 2 // 进程2个
                }
              },
              {
                loader: &#39;babel-loader&#39;,
                options: {
                  presets: [
                    [
                      &#39;@babel/preset-env&#39;,
                      {
                        useBuiltIns: &#39;usage&#39;,
                        corejs: { version: 3 },
                        targets: {
                          chrome: &#39;60&#39;,
                          firefox: &#39;50&#39;
                        }
                      }
                    ]
                  ],
                  cacheDirectory: true
                }
              }
            ]
          },
          {
            test: /\\.(jpg|png|gif)/,
            loader: &#39;url-loader&#39;,
            options: {
              limit: 8 * 1024,
              name: &#39;[hash:10].[ext]&#39;,
              outputPath: &#39;imgs&#39;,
              esModule: false
            }
          },
          {
            test: /\\.html$/,
            loader: &#39;html-loader&#39;
          },
          {
            exclude: /\\.(js|css|less|html|jpg|png|gif)/,
            loader: &#39;file-loader&#39;,
            options: {
              outputPath: &#39;media&#39;
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: &#39;css/built.[contenthash:10].css&#39;
    }),
    new OptimizeCssAssetsWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: &#39;./src/index.html&#39;,
      minify: {
        collapseWhitespace: true,
        removeComments: true
      }
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true
    })
  ],
  mode: &#39;production&#39;,
  devtool: &#39;source-map&#39;
};
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>运行指令：webpack</li></ol><h3 id="_5-9-externals" tabindex="-1"><a class="header-anchor" href="#_5-9-externals" aria-hidden="true">#</a> 5.9 externals</h3><ol><li>修改配置文件</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const {
  resolve
} = require(&#39;path&#39;);
const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;);

module.exports = {
  entry: &#39;./src/js/index.js&#39;,
  output: {
    filename: &#39;js/built.js&#39;,
    path: resolve(__dirname, &#39;build&#39;)
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: &#39;./src/index.html&#39;
    })
  ],
  mode: &#39;production&#39;,
  externals: {
    // 拒绝jQuery被打包进来，作用： 假如说我们的jequery使用的是CDN链接，那么打包的时候jquery不会被打包进来，直接使用CDN链接
    jquery: &#39;jQuery&#39;
  }
};
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>运行指令：webpack</li></ol><h3 id="_5-10-dll" tabindex="-1"><a class="header-anchor" href="#_5-10-dll" aria-hidden="true">#</a> 5.10 dll</h3><ol><li>创建webpack.dll.js文件并输入</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/*
  使用dll技术，对某些库（第三方库：jquery、react、vue...）进行单独打包
    当你运行 webpack 时，默认查找 webpack.config.js 配置文件
    需求：需要运行 webpack.dll.js 文件
      --&gt; webpack --config webpack.dll.js
*/

const {
  resolve
} = require(&#39;path&#39;);
const webpack = require(&#39;webpack&#39;);

module.exports = {
  entry: {
    // 最终打包生成的[name] --&gt; jquery
    // [&#39;jquery&#39;] --&gt; 要打包的库是jquery
    jquery: [&#39;jquery&#39;],
  },
  output: {
    filename: &#39;[name].js&#39;,
    path: resolve(__dirname, &#39;dll&#39;),
    library: &#39;[name]_[hash]&#39; // 打包的库里面向外暴露出去的内容叫什么名字
  },

  plugins: [
    // 打包生成一个 manifest.json --&gt; 提供和jquery映射
    new webpack.DllPlugin({
      name: &#39;[name]_[hash]&#39;, // 映射库的暴露的内容名称
      path: resolve(__dirname, &#39;dll/manifest.json&#39;) // 输出文件路径
    })
  ],
  mode: &#39;production&#39;
};
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>运行指令：webpack --config webpack.dll.js</li><li>修改配置文件webpack.config.js</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const {
  resolve
} = require(&#39;path&#39;);
const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;);
const webpack = require(&#39;webpack&#39;);
const AddAssetHtmlWebpackPlugin = require(&#39;add-asset-html-webpack-plugin&#39;);

module.exports = {
  entry: &#39;./src/index.js&#39;,
  output: {
    filename: &#39;built.js&#39;,
    path: resolve(__dirname, &#39;build&#39;)
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: &#39;./src/index.html&#39;
    }),
    // 告诉webpack哪些库不参与打包，同时使用时的名称也得变~
    new webpack.DllReferencePlugin({
      manifest: resolve(__dirname, &#39;dll/manifest.json&#39;)
    }),
    // 将某个文件打包输出去，并在html中自动引入该资源
    new AddAssetHtmlWebpackPlugin({
      filepath: resolve(__dirname, &#39;dll/jquery.js&#39;)
    })
  ],
  mode: &#39;production&#39;
};

/*
  首先要在webpack.dll.js与webpack.config.js中引入webpack插件
  1. 在webpack.dll.js文件中的写入我们需要打包的库以及打包的库输出的名字为什么（实现功能：第一次打包之后只要jquery库名称不变，下一次不需要在重新打包了，直接使用，提高构建速度）(不仅仅是jquery库，各种库都要引入)
  2. plugin中生成的manifest.json文件表示了jquery的映射关系
  3. webpack.config.js中使用DllReferencePlugin告诉webpack哪些文件不需要再重新打包
  4. webpack.config.js中使用AddAssetHtmlWebpackPlugin将ebpack.dll.js中打包的资源在html中自动引入
*/
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>运行指令：webpack</li></ol><h2 id="六、webpack配置详情" tabindex="-1"><a class="header-anchor" href="#六、webpack配置详情" aria-hidden="true">#</a> 六、webpack配置详情</h2><h3 id="_6-1-entry" tabindex="-1"><a class="header-anchor" href="#_6-1-entry" aria-hidden="true">#</a> 6.1 entry</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const {
  resolve
} = require(&#39;path&#39;);
const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;);

/*
  entry: 入口起点
    1. string --&gt; &#39;./src/index.js&#39;（用的多）
      单入口
      打包形成一个chunk。 输出一个bundle文件。
      此时chunk的名称默认是 main
    2. array  --&gt; [&#39;./src/index.js&#39;, &#39;./src/add.js&#39;]（一般不用这种形式）
      多入口
      所有入口文件最终只会形成一个chunk, 输出出去只有一个bundle文件。
        --&gt; 只有在HMR功能中让html热更新生效~
    3. object（用的多）
      多入口
      有几个入口文件就形成几个chunk，输出几个bundle文件
      此时chunk的名称是 key

      --&gt; 特殊用法
        {
          // 所有入口文件最终只会形成一个chunk, 输出出去只有一个bundle文件。
          index: [&#39;./src/index.js&#39;, &#39;./src/count.js&#39;], 
          // 形成一个chunk，输出一个bundle文件。
          add: &#39;./src/add.js&#39;
        }
*/

module.exports = {
  entry: {
    index: [&#39;./src/index.js&#39;, &#39;./src/count.js&#39;],
    add: &#39;./src/add.js&#39;
  },
  output: {
    filename: &#39;[name].js&#39;,
    path: resolve(__dirname, &#39;build&#39;)
  },
  plugins: [new HtmlWebpackPlugin()],
  mode: &#39;development&#39;
};
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-2-output" tabindex="-1"><a class="header-anchor" href="#_6-2-output" aria-hidden="true">#</a> 6.2 output</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const { resolve } = require(&#39;path&#39;);
const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;);

module.exports = {
  entry: &#39;./src/index.js&#39;,
  output: {
    // 文件名称（指定名称+目录）
    filename: &#39;js/[name].js&#39;,
    // 输出文件目录（将来所有资源输出的公共目录）
    path: resolve(__dirname, &#39;build&#39;),
    // 所有资源引入公共路径前缀 --&gt; &#39;imgs/a.jpg&#39; --&gt; &#39;/imgs/a.jpg&#39;
    publicPath: &#39;/&#39;,
    chunkFilename: &#39;js/[name]_chunk.js&#39;, // 非入口chunk的名称
    // library: &#39;[name]&#39;, // 整个库向外暴露的变量名
    // libraryTarget: &#39;window&#39; // 变量名添加到哪个上 browser
    // libraryTarget: &#39;global&#39; // 变量名添加到哪个上 node
    // libraryTarget: &#39;commonjs&#39;
  },
  plugins: [new HtmlWebpackPlugin()],
  mode: &#39;development&#39;
};

复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-3-module" tabindex="-1"><a class="header-anchor" href="#_6-3-module" aria-hidden="true">#</a> 6.3 module</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const { resolve } = require(&#39;path&#39;);
const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;);

module.exports = {
  entry: &#39;./src/index.js&#39;,
  output: {
    filename: &#39;js/[name].js&#39;,
    path: resolve(__dirname, &#39;build&#39;)
  },
  module: {
    rules: [
      // loader的配置
      {
        test: /\\.css$/,
        // 多个loader用use
        use: [&#39;style-loader&#39;, &#39;css-loader&#39;]
      },
      {
        test: /\\.js$/,
        // 排除node_modules下的js文件
        exclude: /node_modules/,
        // 只检查 src 下的js文件
        include: resolve(__dirname, &#39;src&#39;),
        // 优先执行
        enforce: &#39;pre&#39;,
        // 延后执行
        // enforce: &#39;post&#39;,
        // 单个loader用loader
        loader: &#39;eslint-loader&#39;,
        options: {}
      },
      {
        // 以下配置只会生效一个
        oneOf: []
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin()],
  mode: &#39;development&#39;
};
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-4-resolve" tabindex="-1"><a class="header-anchor" href="#_6-4-resolve" aria-hidden="true">#</a> 6.4 resolve</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const {
  resolve
} = require(&#39;path&#39;);
const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;);

module.exports = {
  entry: &#39;./src/js/index.js&#39;,
  output: {
    filename: &#39;js/[name].js&#39;,
    path: resolve(__dirname, &#39;build&#39;)
  },
  module: {
    rules: [{
      test: /\\.css$/,
      use: [&#39;style-loader&#39;, &#39;css-loader&#39;]
    }]
  },
  plugins: [new HtmlWebpackPlugin()],
  mode: &#39;development&#39;,
  // 解析模块的规则
  resolve: {
    // 配置解析模块路径别名: 优点简写路径 缺点路径没有提示
    alias: {
      $css: resolve(__dirname, &#39;src/css&#39;)
    },
    // 配置省略文件路径的后缀名
    extensions: [&#39;.js&#39;, &#39;.json&#39;, &#39;.jsx&#39;, &#39;.css&#39;],
    // 告诉 webpack 解析模块是去找哪个目录（不写这个的话，他会一层一层的往上面找，直到找到位置）
    modules: [resolve(__dirname, &#39;../../node_modules&#39;), &#39;node_modules&#39;]
  }
};
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-5-devserver" tabindex="-1"><a class="header-anchor" href="#_6-5-devserver" aria-hidden="true">#</a> 6.5 devserver</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const { resolve } = require(&#39;path&#39;);
const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;);

module.exports = {
  entry: &#39;./src/js/index.js&#39;,
  output: {
    filename: &#39;js/[name].js&#39;,
    path: resolve(__dirname, &#39;build&#39;)
  },
  module: {
    rules: [
      {
        test: /\\.css$/,
        use: [&#39;style-loader&#39;, &#39;css-loader&#39;]
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin()],
  mode: &#39;development&#39;,
  resolve: {
    alias: {
      $css: resolve(__dirname, &#39;src/css&#39;)
    },
    extensions: [&#39;.js&#39;, &#39;.json&#39;, &#39;.jsx&#39;, &#39;.css&#39;],
    modules: [resolve(__dirname, &#39;../../node_modules&#39;), &#39;node_modules&#39;]
  },
  devServer: {
    // 运行代码的目录
    contentBase: resolve(__dirname, &#39;build&#39;),
    // 监视 contentBase 目录下的所有文件，一旦文件变化就会 reload
    watchContentBase: true,
    watchOptions: {
      // 监视的时候忽略文件
      ignored: /node_modules/
    },
    // 启动gzip压缩，体积小
    compress: true,
    // 端口号
    port: 5000,
    // 域名
    host: &#39;localhost&#39;,
    // 自动打开浏览器
    open: true,
    // 开启HMR功能
    hot: true,
    // 不要显示启动服务器日志信息
    clientLogLevel: &#39;none&#39;,
    // 除了一些基本启动信息以外，其他内容都不要显示
    quiet: true,
    // 如果出错了，不要全屏提示~，只需要在日志中打印即可
    overlay: false,
    // 服务器代理 --&gt; 解决开发环境跨域问题
    proxy: {
      // 一旦devServer(5000)服务器接受到 /api/xxx 的请求，就会把请求转发到另外一个服务器(3000)
      &#39;/api&#39;: {
        target: &#39;http://localhost:3000&#39;,
        // 发送请求时，请求路径重写：将 /api/xxx --&gt; /xxx （去掉/api）
        pathRewrite: {
          &#39;^/api&#39;: &#39;&#39;
        }
      }
    }
  }
};
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-6-optimization" tabindex="-1"><a class="header-anchor" href="#_6-6-optimization" aria-hidden="true">#</a> 6.6 optimization</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const {
  resolve
} = require(&#39;path&#39;);
const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;);
const TerserWebpackPlugin = require(&#39;terser-webpack-plugin&#39;)

module.exports = {
  entry: &#39;./src/js/index.js&#39;,
  output: {
    filename: &#39;js/[name].[contenthash:10].js&#39;,
    path: resolve(__dirname, &#39;build&#39;),
    chunkFilename: &#39;js/[name].[contenthash:10]_chunk.js&#39;
  },
  module: {
    rules: [{
      test: /\\.css$/,
      use: [&#39;style-loader&#39;, &#39;css-loader&#39;]
    }]
  },
  plugins: [new HtmlWebpackPlugin()],
  mode: &#39;production&#39;,
  resolve: {
    alias: {
      $css: resolve(__dirname, &#39;src/css&#39;)
    },
    extensions: [&#39;.js&#39;, &#39;.json&#39;, &#39;.jsx&#39;, &#39;.css&#39;],
    modules: [resolve(__dirname, &#39;../../node_modules&#39;), &#39;node_modules&#39;]
  },
  optimization: {
    splitChunks: {
      chunks: &#39;all&#39;
        // 默认值，可以不写，基本上不修改~
        /* minSize: 30 * 1024, // 分割的chunk最小为30kb，小于30kb的不分割，大于30kb才分割
        maxSiza: 0, // 最大没有限制
        minChunks: 1, // 要提取的chunk最少被引用1次
        maxAsyncRequests: 5, // 按需加载时并行加载的文件的最大数量
        maxInitialRequests: 3, // 入口js文件最大并行请求数量
        automaticNameDelimiter: &#39;~&#39;, // 名称连接符
        name: true, // 可以使用命名规则
        cacheGroups: {
          // 分割chunk的组
          // node_modules文件会被打包到 vendors 组的chunk中。--&gt; vendors~xxx.js
          // 满足上面写的公共规则，如：大小超过30kb，至少被引用一次。
          vendors: {
            test: /[\\\\/]node_modules[\\\\/]/,
            // 优先级
            priority: -10
          },
          default: {
            // 要提取的chunk最少被引用2次
            minChunks: 2,
            // 优先级
            priority: -20,
            // 如果当前要打包的模块，和之前已经被提取的模块是同一个，就会复用，而不是重新打包模块
            reuseExistingChunk: true
          } 
        }*/
    },
    // 将当前模块的记录其他模块的hash单独打包为一个文件 runtime
    // 解决：修改a文件导致b文件的contenthash变化
    runtimeChunk: {
      name: entrypoint =&gt; \`runtime-\${entrypoint.name}\`
    },
    minimizer: [
      // 配置生产环境的压缩方案：js和css
      new TerserWebpackPlugin({
        // 开启缓存
        cache: true,
        // 开启多进程打包
        parallel: true,
        // 启动source-map
        sourceMap: true
      })
    ]
  }
};
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="七、webpack5使用" tabindex="-1"><a class="header-anchor" href="#七、webpack5使用" aria-hidden="true">#</a> 七、webpack5使用</h2><h3 id="webpack5" tabindex="-1"><a class="header-anchor" href="#webpack5" aria-hidden="true">#</a> webpack5</h3><p>此版本重点关注以下内容:</p><ul><li>通过持久缓存提高构建性能.</li><li>使用更好的算法和默认值来改善长期缓存.</li><li>通过更好的树摇和代码生成来改善捆绑包大小.</li><li>清除处于怪异状态的内部结构，同时在 v4 中实现功能而不引入任何重大更改.</li><li>通过引入重大更改来为将来的功能做准备，以使我们能够尽可能长时间地使用 v5.</li></ul><h3 id="下载" tabindex="-1"><a class="header-anchor" href="#下载" aria-hidden="true">#</a> 下载</h3><ul><li>npm i webpack@next webpack-cli -D</li></ul><h3 id="自动删除-node-js-polyfills" tabindex="-1"><a class="header-anchor" href="#自动删除-node-js-polyfills" aria-hidden="true">#</a> 自动删除 Node.js Polyfills</h3><p>早期，webpack 的目标是允许在浏览器中运行大多数 node.js 模块，但是模块格局发生了变化，许多模块用途现在主要是为前端目的而编写的。webpack &lt;= 4 附带了许多 node.js 核心模块的 polyfill，一旦模块使用任何核心模块（即 crypto 模块），这些模块就会自动应用。</p><p>尽管这使使用为 node.js 编写的模块变得容易，但它会将这些巨大的 polyfill 添加到包中。在许多情况下，这些 polyfill 是不必要的。</p><p>webpack 5 会自动停止填充这些核心模块，并专注于与前端兼容的模块。</p><p>迁移：</p><ul><li>尽可能尝试使用与前端兼容的模块。</li><li>可以为 node.js 核心模块手动添加一个 polyfill。错误消息将提示如何实现该目标。</li></ul><h3 id="chunk-和模块-id" tabindex="-1"><a class="header-anchor" href="#chunk-和模块-id" aria-hidden="true">#</a> Chunk 和模块 ID</h3><p>添加了用于长期缓存的新算法。在生产模式下默认情况下启用这些功能。</p><p><code>chunkIds: &quot;deterministic&quot;, moduleIds: &quot;deterministic&quot;</code></p><h3 id="chunk-id" tabindex="-1"><a class="header-anchor" href="#chunk-id" aria-hidden="true">#</a> Chunk ID</h3><p>你可以不用使用 <code>import(/* webpackChunkName: &quot;name&quot; */ &quot;module&quot;)</code> 在开发环境来为 chunk 命名，生产环境还是有必要的</p><p>webpack 内部有 chunk 命名规则，不再是以 id(0, 1, 2)命名了</p><h3 id="tree-shaking" tabindex="-1"><a class="header-anchor" href="#tree-shaking" aria-hidden="true">#</a> Tree Shaking</h3><ol><li>webpack 现在能够处理对嵌套模块的 tree shaking</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// inner.js
export const a = 1;
export const b = 2;

// module.js
import * as inner from &#39;./inner&#39;;
export { inner };

// user.js
import * as module from &#39;./module&#39;;
console.log(module.inner.a);
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在生产环境中, inner 模块暴露的 <code>b</code> 会被删除</p><ol start="2"><li>webpack 现在能够多个模块之前的关系</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import { something } from &#39;./something&#39;;

function usingSomething() {
  return something;
}

export function test() {
  return usingSomething();
}
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当设置了<code>&quot;sideEffects&quot;: false</code>时，一旦发现<code>test</code>方法没有使用，不但删除<code>test</code>，还会删除<code>&quot;./something&quot;</code></p><ol start="3"><li>webpack 现在能处理对 Commonjs 的 tree shaking</li></ol><h3 id="output" tabindex="-1"><a class="header-anchor" href="#output" aria-hidden="true">#</a> Output</h3><p>webpack 4 默认只能输出 ES5 代码</p><p>webpack 5 开始新增一个属性 output.ecmaVersion, 可以生成 ES5 和 ES6 / ES2015 代码.</p><p>如：<code>output.ecmaVersion: 2015</code></p><h3 id="splitchunk" tabindex="-1"><a class="header-anchor" href="#splitchunk" aria-hidden="true">#</a> SplitChunk</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// webpack4
minSize: 30000;
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// webpack5
minSize: {
  javascript: 30000,
  style: 50000,
}
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="caching" tabindex="-1"><a class="header-anchor" href="#caching" aria-hidden="true">#</a> Caching</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 配置缓存
cache: {
  // 磁盘存储
  type: &quot;filesystem&quot;,
  buildDependencies: {
    // 当配置修改时，缓存失效
    config: [__filename]
  }
}
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>缓存将存储到 <code>node_modules/.cache/webpack</code></p><h3 id="监视输出文件" tabindex="-1"><a class="header-anchor" href="#监视输出文件" aria-hidden="true">#</a> 监视输出文件</h3><p>之前 webpack 总是在第一次构建时输出全部文件，但是监视重新构建时会只更新修改的文件。</p><p>此次更新在第一次构建时会找到输出文件看是否有变化，从而决定要不要输出全部文件。</p><h3 id="默认值" tabindex="-1"><a class="header-anchor" href="#默认值" aria-hidden="true">#</a> 默认值</h3><ul><li><code>entry: &quot;./src/index.js</code></li><li><code>output.path: path.resolve(__dirname, &quot;dist&quot;)</code></li><li><code>output.filename: &quot;[name].js&quot;</code></li></ul><h3 id="更多内容" tabindex="-1"><a class="header-anchor" href="#更多内容" aria-hidden="true">#</a> 更多内容</h3>`,212),g={href:"https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fwebpack%2Fchangelog-v5",title:"https://github.com/webpack/changelog-v5",target:"_blank",rel:"noopener noreferrer"},x=i("p",null,"参考资料：",-1),k={href:"https://link.juejin.cn/?target=https%3A%2F%2Fwww.bilibili.com%2Fvideo%2FBV1e7411j7T5",title:"https://www.bilibili.com/video/BV1e7411j7T5",target:"_blank",rel:"noopener noreferrer"},j={href:"https://link.juejin.cn/?target=http%3A%2F%2Fwww.woc12138.com%2Farticle%2F45",title:"http://www.woc12138.com/article/45",target:"_blank",rel:"noopener noreferrer"};function f(w,_){const n=v("ExternalLinkIcon");return a(),r("div",null,[u,i("p",null,[e("大家学完之后如果觉着意犹未尽可以继续学习"),i("a",m,[e("Webpack 从入门到精通-进阶篇"),s(n)]),e("，进阶篇主要讲述如下内容：")]),i("ul",null,[b,t,i("li",null,[e("自己实现一个简易的Webpack5 这边主要讲解了常用的Webpack配置，更详细的配置大家可以查看官网"),i("a",o,[e("Webpack官网"),s(n)])])]),i("p",null,[i("a",p,[e("Webpack 从入门到精通-基础篇源码"),s(n)])]),h,i("p",null,[i("a",g,[e("github.com/webpack/cha…"),s(n)])]),x,i("ol",null,[i("li",null,[i("p",null,[i("a",k,[e("尚硅谷视频"),s(n)]),e(" 感谢尚硅谷视频提供的视频")])]),i("li",null,[i("p",null,[i("a",j,[e("大神笔记"),s(n)])])])])])}const P=d(c,[["render",f],["__file","webpack.html.vue"]]);export{P as default};