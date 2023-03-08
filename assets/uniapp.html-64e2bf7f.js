import{_ as l,M as a,p as s,q as r,R as e,t,N as i,a1 as d}from"./framework-6700cb35.js";const o={},u=e("h1",{id:"uni-app",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#uni-app","aria-hidden":"true"},"#"),t(" Uni-app")],-1),c=e("hr",null,null,-1),v={id:"一、uni-app介绍-官方网页",tabindex:"-1"},h=e("a",{class:"header-anchor",href:"#一、uni-app介绍-官方网页","aria-hidden":"true"},"#",-1),p={href:"https://uniapp.dcloud.io/resource",target:"_blank",rel:"noopener noreferrer"},b=e("code",null,"uni-app",-1),m={href:"https://vuejs.org/",target:"_blank",rel:"noopener noreferrer"},g=e("p",null,[t("即使不跨端，"),e("code",null,"uni-app"),t("同时也是更好的小程序开发框架。")],-1),x=e("p",null,"具有vue和微信小程序的开发经验，可快速上手uni-app",-1),_=e("p",null,"为什么要去学习uni-app？",-1),q=e("p",null,"相对开发者来说，减少了学习成本，因为只学会uni-app之后，即可开发出iOS、Android、H5、以及各种小程序的应用，不需要再去学习开发其他应用的框架，相对公司而言，也大大减少了开发成本。",-1),f=e("hr",null,null,-1),w=e("h2",{id:"二、环境搭建",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#二、环境搭建","aria-hidden":"true"},"#"),t(" 二、环境搭建")],-1),y={href:"https://www.dcloud.io/hbuilderx.html",target:"_blank",rel:"noopener noreferrer"},k=e("p",null,[t("HBuilderX是通用的前端开发工具，但为"),e("code",null,"uni-app"),t("做了特别强化。")],-1),P=e("p",null,"下载App开发版，可开箱即用",-1),S={href:"https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html",target:"_blank",rel:"noopener noreferrer"},F=d('<hr><h2 id="三、利用hbuilderx初始化项目" tabindex="-1"><a class="header-anchor" href="#三、利用hbuilderx初始化项目" aria-hidden="true">#</a> 三、利用HbuilderX初始化项目</h2><ul><li><p>点击HbuilderX菜单栏文件&gt;项目&gt;新建</p></li><li><p>选择uni-app,填写项目名称，项目创建的目录<br><img src="https://img-blog.csdnimg.cn/6e3ae68fa83042eba197b42df8e5736e.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAaW50X1E3,size_20,color_FFFFFF,t_70,g_se,x_16" alt="请添加图片描述"></p></li></ul><hr><h2 id="四、运行项目" tabindex="-1"><a class="header-anchor" href="#四、运行项目" aria-hidden="true">#</a> 四、运行项目</h2><p>在菜单栏中点击运行，运行到浏览器，选择浏览器即可运行</p>',6),B={href:"https://so.csdn.net/so/search?q=uniapp&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"},R=d('<p>在微信开发者工具里运行：进入hello-uniapp项目，点击工具栏的运行 -&gt; 运行到手机或模拟器 -&gt; 选择调式的手机</p><p><strong>注意：</strong></p><ul><li>如果是第一次使用，需要先配置小程序ide的相关路径，才能运行成功</li><li>微信开发者工具在设置-安全设置，服务端口开启<br><img src="https://img-blog.csdnimg.cn/aa16e0446d474c30aa007d0a81e2a903.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAaW50X1E3,size_20,color_FFFFFF,t_70,g_se,x_16" alt="请添加图片描述"></li></ul><hr><h2 id="五、介绍项目目录和文件作用" tabindex="-1"><a class="header-anchor" href="#五、介绍项目目录和文件作用" aria-hidden="true">#</a> 五、介绍项目目录和文件作用</h2><p><code>pages.json</code> 文件用来对 uni-app 进行全局配置，决定页面文件的路径、窗口样式、原生的导航栏、底部的原生tabbar 等</p><p><code>manifest.json</code> 文件是应用的配置文件，用于指定应用的名称、图标、权限等。</p><p><code>App.vue</code>是我们的跟组件，所有页面都是在<code>App.vue</code>下进行切换的，是页面入口文件，可以调用应用的生命周期函数。</p><p><code>main.js</code>是我们的项目入口文件，主要作用是初始化<code>vue</code>实例并使用需要的插件。</p><p><code>uni.scss</code>文件的用途是为了方便整体控制应用的风格。比如按钮颜色、边框风格，<code>uni.scss</code>文件里预置了一批scss变量预置。</p><p><code>unpackage</code>就是打包目录，在这里有各个平台的打包文件</p><p><code>pages</code>所有的页面存放目录</p><p><code>static</code>静态资源目录，例如图片等</p><p><code>components</code>组件存放目录</p><p>为了实现多端兼容，综合考虑编译速度、运行性能等因素，<code>uni-app</code> 约定了如下开发规范：</p>',15),H={href:"https://vue-loader.vuejs.org/zh/spec.html",target:"_blank",rel:"noopener noreferrer"},A={href:"https://uniapp.dcloud.io/component/README",target:"_blank",rel:"noopener noreferrer"},j=e("code",null,"wx",-1),D=e("code",null,"uni",-1),T={href:"https://uniapp.dcloud.io/api/README",target:"_blank",rel:"noopener noreferrer"},E=e("li",null,[t("数据绑定及事件处理同 "),e("code",null,"Vue.js"),t(" 规范，同时补充了App及页面的生命周期")],-1),C=e("li",null,"为兼容多端运行，建议使用flex布局进行开发",-1),L=e("hr",null,null,-1),N=e("h2",{id:"六、全局配置和页面配置",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#六、全局配置和页面配置","aria-hidden":"true"},"#"),t(" 六、全局配置和页面配置")],-1),X=e("h3",{id:"通过globalstyle进行全局配置",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#通过globalstyle进行全局配置","aria-hidden":"true"},"#"),t(" 通过globalStyle进行全局配置")],-1),z={href:"https://uniapp.dcloud.io/collocation/pages?id=globalstyle",target:"_blank",rel:"noopener noreferrer"},I=e("thead",null,[e("tr",null,[e("th",null,"属性"),e("th",null,"类型"),e("th",null,"默认值"),e("th",null,"描述")])],-1),Q=e("tr",null,[e("td",null,"navigationBarBackgroundColor"),e("td",null,"HexColor"),e("td",null,"#F7F7F7"),e("td",null,"导航栏背景颜色（同状态栏背景色）")],-1),V=e("tr",null,[e("td",null,"navigationBarTextStyle"),e("td",null,"String"),e("td",null,"white"),e("td",null,"导航栏标题颜色及状态栏前景颜色，仅支持 black/white")],-1),M=e("tr",null,[e("td",null,"navigationBarTitleText"),e("td",null,"String"),e("td"),e("td",null,"导航栏标题文字内容")],-1),O=e("tr",null,[e("td",null,"backgroundColor"),e("td",null,"HexColor"),e("td",null,"#ffffff"),e("td",null,"窗口的背景色")],-1),W=e("tr",null,[e("td",null,"backgroundTextStyle"),e("td",null,"String"),e("td",null,"dark"),e("td",null,"下拉 loading 的样式，仅支持 dark / light")],-1),U=e("td",null,"enablePullDownRefresh",-1),J=e("td",null,"Boolean",-1),$=e("td",null,"false",-1),G={href:"https://uniapp.dcloud.io/use?id=%e9%a1%b5%e9%9d%a2%e7%94%9f%e5%91%bd%e5%91%a8%e6%9c%9f",target:"_blank",rel:"noopener noreferrer"},K=e("td",null,"onReachBottomDistance",-1),Y=e("td",null,"Number",-1),Z=e("td",null,"50",-1),ee={href:"https://uniapp.dcloud.io/use?id=%e9%a1%b5%e9%9d%a2%e7%94%9f%e5%91%bd%e5%91%a8%e6%9c%9f",target:"_blank",rel:"noopener noreferrer"},te=d(`<h3 id="创建新的message页面" tabindex="-1"><a class="header-anchor" href="#创建新的message页面" aria-hidden="true">#</a> 创建新的message页面</h3><p>右键pages新建message目录，在message目录下右键新建.vue文件,并选择基本模板</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
&lt;view&gt;
这是信息页面
&lt;/view&gt;
&lt;/template&gt;

&lt;script&gt;
&lt;/script&gt;

&lt;style&gt;
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="通过pages来配置页面" tabindex="-1"><a class="header-anchor" href="#通过pages来配置页面" aria-hidden="true">#</a> 通过pages来配置页面</h3>`,4),ne=e("thead",null,[e("tr",null,[e("th",null,"属性"),e("th",null,"类型"),e("th",null,"默认值"),e("th",null,"描述")])],-1),ie=e("tr",null,[e("td",null,"path"),e("td",null,"String"),e("td"),e("td",null,"配置页面路径")],-1),de=e("td",null,"style",-1),le=e("td",null,"Object",-1),ae=e("td",null,null,-1),se={href:"https://uniapp.dcloud.io/collocation/pages?id=style",target:"_blank",rel:"noopener noreferrer"},re=d(`<p>pages数组数组中第一项表示应用启动页</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&quot;pages&quot;: [ 、
{
&quot;path&quot;:&quot;pages/message/message&quot;
},
{
&quot;path&quot;: &quot;pages/index/index&quot;,
&quot;style&quot;: {
&quot;navigationBarTitleText&quot;: &quot;uni-app&quot;
}
}
]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过style修改页面的标题和导航栏背景色，并且设置h5下拉刷新的特有样式</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&quot;pages&quot;: [ //pages数组中第一项表示应用启动页，参考：https://uniapp.dcloud.io/collocation/pages
{
&quot;path&quot;:&quot;pages/message/message&quot;,
&quot;style&quot;: {
&quot;navigationBarBackgroundColor&quot;: &quot;#007AFF&quot;,
&quot;navigationBarTextStyle&quot;: &quot;white&quot;,
&quot;enablePullDownRefresh&quot;: true,
&quot;disableScroll&quot;: true,
&quot;h5&quot;: {
&quot;pullToRefresh&quot;: {
&quot;color&quot;: &quot;#007AFF&quot;
}
}
}
}
]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置tabbar" tabindex="-1"><a class="header-anchor" href="#配置tabbar" aria-hidden="true">#</a> 配置tabbar</h3><p>如果应用是一个多 tab 应用，可以通过 tabBar 配置项指定 tab 栏的表现，以及 tab 切换时显示的对应页。</p><p><strong>Tips</strong></p><ul><li>当设置 position 为 top 时，将不会显示 icon</li><li>tabBar 中的 list 是一个数组，只能配置最少2个、最多5个 tab，tab 按数组的顺序排序。</li></ul><p><strong>属性说明：</strong></p><table><thead><tr><th>属性</th><th>类型</th><th>必填</th><th>默认值</th><th>描述</th><th>平台差异说明</th></tr></thead><tbody><tr><td>color</td><td>HexColor</td><td>是</td><td></td><td>tab 上的文字默认颜色</td><td></td></tr><tr><td>selectedColor</td><td>HexColor</td><td>是</td><td></td><td>tab 上的文字选中时的颜色</td><td></td></tr><tr><td>backgroundColor</td><td>HexColor</td><td>是</td><td></td><td>tab 的背景色</td><td></td></tr><tr><td>borderStyle</td><td>String</td><td>否</td><td>black</td><td>tabbar 上边框的颜色，仅支持 black/white</td><td>App 2.3.4+ 支持其他颜色值</td></tr><tr><td>list</td><td>Array</td><td>是</td><td></td><td>tab 的列表，详见 list 属性说明，最少2个、最多5个 tab</td><td></td></tr><tr><td>position</td><td>String</td><td>否</td><td>bottom</td><td>可选值 bottom、top</td><td>top 值仅微信小程序支持</td></tr></tbody></table><p>其中 list 接收一个数组，数组中的每个项都是一个对象，其属性值如下：</p><table><thead><tr><th>属性</th><th>类型</th><th>必填</th><th>说明</th></tr></thead><tbody><tr><td>pagePath</td><td>String</td><td>是</td><td>页面路径，必须在 pages 中先定义</td></tr><tr><td>text</td><td>String</td><td>是</td><td>tab 上按钮文字，在 5+APP 和 H5 平台为非必填。例如中间可放一个没有文字的+号图标</td></tr><tr><td>iconPath</td><td>String</td><td>否</td><td>图片路径，icon 大小限制为40kb，建议尺寸为 81px * 81px，当 postion 为 top 时，此参数无效，不支持网络图片，不支持字体图标</td></tr><tr><td>selectedIconPath</td><td>String</td><td>否</td><td>选中时的图片路径，icon 大小限制为40kb，建议尺寸为 81px * 81px ，当 postion 为 top 时，此参数无效</td></tr></tbody></table><p>案例代码：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&quot;tabBar&quot;: {
&quot;list&quot;: [
{
&quot;text&quot;: &quot;首页&quot;,
&quot;pagePath&quot;:&quot;pages/index/index&quot;,
&quot;iconPath&quot;:&quot;static/tabs/home.png&quot;,
&quot;selectedIconPath&quot;:&quot;static/tabs/home-active.png&quot;
},
{
&quot;text&quot;: &quot;信息&quot;,
&quot;pagePath&quot;:&quot;pages/message/message&quot;,
&quot;iconPath&quot;:&quot;static/tabs/message.png&quot;,
&quot;selectedIconPath&quot;:&quot;static/tabs/message-active.png&quot;
},
{
&quot;text&quot;: &quot;我们&quot;,
&quot;pagePath&quot;:&quot;pages/contact/contact&quot;,
&quot;iconPath&quot;:&quot;static/tabs/contact.png&quot;,
&quot;selectedIconPath&quot;:&quot;static/tabs/contact-active.png&quot;
}
]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="condition启动模式配置" tabindex="-1"><a class="header-anchor" href="#condition启动模式配置" aria-hidden="true">#</a> condition启动模式配置</h3><p>启动模式配置，仅开发期间生效，用于模拟直达页面的场景，如：小程序转发后，用户点击所打开的页面。</p><p><strong>属性说明：</strong></p><table><thead><tr><th>属性</th><th>类型</th><th>是否必填</th><th>描述</th></tr></thead><tbody><tr><td>current</td><td>Number</td><td>是</td><td>当前激活的模式，list节点的索引值</td></tr><tr><td>list</td><td>Array</td><td>是</td><td>启动模式列表</td></tr></tbody></table><p><strong>list说明：</strong></p>`,19),oe=e("thead",null,[e("tr",null,[e("th",null,"属性"),e("th",null,"类型"),e("th",null,"是否必填"),e("th",null,"描述")])],-1),ue=e("tr",null,[e("td",null,"name"),e("td",null,"String"),e("td",null,"是"),e("td",null,"启动模式名称")],-1),ce=e("tr",null,[e("td",null,"path"),e("td",null,"String"),e("td",null,"是"),e("td",null,"启动页面路径")],-1),ve=e("td",null,"query",-1),he=e("td",null,"String",-1),pe=e("td",null,"否",-1),be={href:"https://uniapp.dcloud.io/use?id=%e9%a1%b5%e9%9d%a2%e7%94%9f%e5%91%bd%e5%91%a8%e6%9c%9f",target:"_blank",rel:"noopener noreferrer"},me=d(`<hr><h2 id="七、组件的基本使用" tabindex="-1"><a class="header-anchor" href="#七、组件的基本使用" aria-hidden="true">#</a> 七、组件的基本使用</h2><p>uni-app提供了丰富的基础组件给开发者，开发者可以像搭积木一样，组合各种组件拼接称自己的应用</p><p>uni-app中的组件，就像 <code>HTML</code> 中的 <code>div</code> 、<code>p</code>、<code>span</code> 等标签的作用一样，用于搭建页面的基础结构</p><h3 id="text文本组件的用法" tabindex="-1"><a class="header-anchor" href="#text文本组件的用法" aria-hidden="true">#</a> text文本组件的用法</h3><h4 id="_001-text-组件的属性" tabindex="-1"><a class="header-anchor" href="#_001-text-组件的属性" aria-hidden="true">#</a> 001 - text 组件的属性</h4><table><thead><tr><th>属性</th><th>类型</th><th>默认值</th><th>必填</th><th>说明</th></tr></thead><tbody><tr><td>selectable</td><td>boolean</td><td>false</td><td>否</td><td>文本是否可选</td></tr><tr><td>space</td><td>string</td><td>.</td><td>否</td><td>显示连续空格，可选参数：<code>ensp</code>、<code>emsp</code>、<code>nbsp</code></td></tr><tr><td>decode</td><td>boolean</td><td>false</td><td>否</td><td>是否解码</td></tr></tbody></table><ul><li><code>text</code> 组件相当于行内标签、在同一行显示</li><li>除了文本节点以外的其他节点都无法长按选中</li></ul><h4 id="_002-代码案例" tabindex="-1"><a class="header-anchor" href="#_002-代码案例" aria-hidden="true">#</a> 002 - 代码案例</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;view&gt;
  &lt;!-- 长按文本是否可选 --&gt;
  &lt;text selectable=&#39;true&#39;&gt;来了老弟&lt;/text&gt;
&lt;/view&gt;

&lt;view&gt;
  &lt;!-- 显示连续空格的方式 --&gt;
  &lt;view&gt;
    &lt;text space=&#39;ensp&#39;&gt;来了  老弟&lt;/text&gt;
  &lt;/view&gt;
  &lt;view&gt;
    &lt;text space=&#39;emsp&#39;&gt;来了  老弟&lt;/text&gt;
  &lt;/view&gt;
  &lt;view&gt;
    &lt;text space=&#39;nbsp&#39;&gt;来了  老弟&lt;/text&gt;
  &lt;/view&gt;
&lt;/view&gt;

&lt;view&gt;
  &lt;text&gt;skyblue&lt;/text&gt;
&lt;/view&gt;

&lt;view&gt;
  &lt;!-- 是否解码 --&gt;
  &lt;text decode=&#39;true&#39;&gt;&amp;nbsp; &amp;lt; &amp;gt; &amp;amp; &amp;apos; &amp;ensp; &amp;emsp;&lt;/text&gt;
&lt;/view&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="view视图容器组件的用法" tabindex="-1"><a class="header-anchor" href="#view视图容器组件的用法" aria-hidden="true">#</a> view视图容器组件的用法</h3><blockquote><p>View 视图容器， 类似于 HTML 中的 div</p></blockquote><h4 id="_001-组件的属性" tabindex="-1"><a class="header-anchor" href="#_001-组件的属性" aria-hidden="true">#</a> 001 - 组件的属性</h4><p><img src="https://img-blog.csdnimg.cn/115a505a309b4bc5945e0f4c7877db70.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAaW50X1E3,size_20,color_FFFFFF,t_70,g_se,x_16" alt="在这里插入图片描述"></p><h4 id="_002-代码案例-1" tabindex="-1"><a class="header-anchor" href="#_002-代码案例-1" aria-hidden="true">#</a> 002 - 代码案例</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;view class=&quot;box2&quot; hover-class=&quot;box2_active&quot;&gt;
  &lt;view class=&#39;box1&#39; hover-class=&#39;active&#39; hover-stop-propagation :hover-start-time=&quot;2000&quot; :hover-stay-time=&#39;2000&#39;&gt;

  &lt;/view&gt;
&lt;/view&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="button按钮组件的用法" tabindex="-1"><a class="header-anchor" href="#button按钮组件的用法" aria-hidden="true">#</a> button按钮组件的用法</h3><h4 id="_001-组件的属性-1" tabindex="-1"><a class="header-anchor" href="#_001-组件的属性-1" aria-hidden="true">#</a> 001 - 组件的属性</h4><table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>size</td><td>String</td><td>default</td><td>按钮的大小</td></tr><tr><td>type</td><td>String</td><td>default</td><td>按钮的样式类型</td></tr><tr><td>plain</td><td>Boolean</td><td>false</td><td>按钮是否镂空，背景色透明</td></tr><tr><td>disabled</td><td>Boolean</td><td>false</td><td>是否按钮</td></tr><tr><td>loading</td><td>Boolean</td><td>false</td><td>名称是否带 loading t图标</td></tr></tbody></table><ul><li><code>button</code> 组件默认独占一行，设置 <code>size</code> 为 <code>mini</code> 时可以在一行显示多个</li></ul><h4 id="_002-案例代码" tabindex="-1"><a class="header-anchor" href="#_002-案例代码" aria-hidden="true">#</a> 002 - 案例代码</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;button size=&#39;mini&#39; type=&#39;primary&#39;&gt;前端&lt;/button&gt;

&lt;button size=&#39;mini&#39; type=&#39;default&#39; disabled=&#39;true&#39;&gt;前端&lt;/button&gt;

&lt;button size=&#39;mini&#39; type=&#39;warn&#39; loading=&#39;true&#39;&gt;前端&lt;/button&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="image组件的使用" tabindex="-1"><a class="header-anchor" href="#image组件的使用" aria-hidden="true">#</a> image组件的使用</h3>`,23),ge={id:"image",tabindex:"-1"},xe=e("a",{class:"header-anchor",href:"#image","aria-hidden":"true"},"#",-1),_e={href:"https://uniapp.dcloud.io/component/image?id=image",target:"_blank",rel:"noopener noreferrer"},qe=d(`<p>图片。</p><table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>说明</th><th>平台差异说明</th></tr></thead><tbody><tr><td>src</td><td>String</td><td></td><td>图片资源地址</td><td></td></tr><tr><td>mode</td><td>String</td><td>‘scaleToFill’</td><td>图片裁剪、缩放的模式</td><td></td></tr></tbody></table><p><strong>Tips</strong></p><ul><li><code>&lt;image&gt;</code> 组件默认宽度 300px、高度 225px；</li><li><code>src</code> 仅支持相对路径、绝对路径，支持 base64 码；</li><li>页面结构复杂，css样式太多的情况，使用 image 可能导致样式生效较慢，出现 “闪一下” 的情况，此时设置 <code>image{will-change: transform}</code> ,可优化此问题。</li></ul><hr><h2 id="八、uni-app中的样式" tabindex="-1"><a class="header-anchor" href="#八、uni-app中的样式" aria-hidden="true">#</a> 八、uni-app中的样式</h2><ul><li><p>rpx 即响应式px，一种根据屏幕宽度自适应的动态单位。以750宽的屏幕为基准，750rpx恰好为屏幕宽度。屏幕变宽，rpx 实际显示效果会等比放大。</p></li><li><p>使用<code>@import</code>语句可以导入外联样式表，<code>@import</code>后跟需要导入的外联样式表的相对路径，用<code>;</code>表示语句结束</p></li><li><p>支持基本常用的选择器class、id、element等</p></li><li><p>在 <code>uni-app</code> 中不能使用 <code>*</code> 选择器。</p></li><li><p><code>page</code> 相当于 <code>body</code> 节点</p></li><li><p>定义在 App.vue 中的样式为全局样式，作用于每一个页面。在 pages 目录下 的 vue 文件中定义的样式为局部样式，只作用在对应的页面，并会覆盖 App.vue 中相同的选择器。</p></li><li><p><code>uni-app</code> 支持使用字体图标，使用方式与普通 <code>web</code> 项目相同，需要注意以下几点：</p><ul><li><p>字体文件小于 40kb，<code>uni-app</code> 会自动将其转化为 base64 格式；</p></li><li><p>字体文件大于等于 40kb， 需开发者自己转换，否则使用将不生效；</p></li><li><p>字体文件的引用路径推荐使用以 ~@ 开头的绝对路径。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> @font-face {
     font-family: test1-icon;
     src: url(&#39;~@/static/iconfont.ttf&#39;);
 }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>如何使用scss或者less</p></li></ul><hr><h2 id="九、uni-app中的数据绑定" tabindex="-1"><a class="header-anchor" href="#九、uni-app中的数据绑定" aria-hidden="true">#</a> 九、uni-app中的数据绑定</h2><p>在页面中需要定义数据，和我们之前的vue一摸一样，直接在data中定义数据即可</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>export default {
  data () {
    return {
      msg: &#39;hello-uni&#39;
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="插值表达式的使用" tabindex="-1"><a class="header-anchor" href="#插值表达式的使用" aria-hidden="true">#</a> 插值表达式的使用</h3><ul><li><p>利用插值表达式渲染基本数据</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;view&gt;{{msg}}&lt;/view&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>在插值表达式中使用三元运算</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;view&gt;{{ flag ? &#39;我是真的&#39;:&#39;我是假的&#39; }}&lt;/view&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>基本运算</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;view&gt;{{1+1}}&lt;/view&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul>`,13),fe={id:"v-bind动态绑定属性",tabindex:"-1"},we=e("a",{class:"header-anchor",href:"#v-bind动态绑定属性","aria-hidden":"true"},"#",-1),ye={href:"https://so.csdn.net/so/search?q=v-bind&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"},ke=d(`<p>在data中定义了一张图片，我们希望把这张图片渲染到页面上</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>export default {
  data () {
    return {
      img: &#39;http://destiny001.gitee.io/image/monkey_02.jpg&#39;
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>利用v-bind进行渲染</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;image v-bind:src=&quot;img&quot;&gt;&lt;/image&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>还可以缩写成:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;image :src=&quot;img&quot;&gt;&lt;/image&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="v-for的使用" tabindex="-1"><a class="header-anchor" href="#v-for的使用" aria-hidden="true">#</a> v-for的使用</h3><p>data中定以一个数组，最终将数组渲染到页面上</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>data () {
  return {
    arr: [
      { name: &#39;刘能&#39;, age: 29 },
      { name: &#39;赵四&#39;, age: 39 },
      { name: &#39;宋小宝&#39;, age: 49 },
      { name: &#39;小沈阳&#39;, age: 59 }
    ]
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>利用v-for进行循环</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;view v-for=&quot;(item,i) in arr&quot; :key=&quot;i&quot;&gt;名字：{{item.name}}---年龄：{{item.age}}&lt;/view&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr><h2 id="十、uni中的事件" tabindex="-1"><a class="header-anchor" href="#十、uni中的事件" aria-hidden="true">#</a> 十、uni中的事件</h2><h3 id="事件绑定" tabindex="-1"><a class="header-anchor" href="#事件绑定" aria-hidden="true">#</a> 事件绑定</h3><p>在uni中事件绑定和vue中是一样的，通过v-on进行事件的绑定，也可以简写为@</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;button @click=&quot;tapHandle&quot;&gt;点我啊&lt;/button&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>事件函数定义在methods中</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>methods: {
  tapHandle () {
    console.log(&#39;真的点我了&#39;)
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="事件传参" tabindex="-1"><a class="header-anchor" href="#事件传参" aria-hidden="true">#</a> 事件传参</h3><ul><li><p>默认如果没有传递参数，事件函数第一个形参为事件对象</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// template
&lt;button @click=&quot;tapHandle&quot;&gt;点我啊&lt;/button&gt;
// script
methods: {
  tapHandle (e) {
    console.log(e)
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>如果给事件函数传递参数了，则对应的事件函数形参接收的则是传递过来的数据</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// template
&lt;button @click=&quot;tapHandle(1)&quot;&gt;点我啊&lt;/button&gt;
// script
methods: {
  tapHandle (num) {
    console.log(num)
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>如果获取事件对象也想传递参数</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// template
&lt;button @click=&quot;tapHandle(1,$event)&quot;&gt;点我啊&lt;/button&gt;
// script
methods: {
  tapHandle (num,e) {
    console.log(num,e)
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><hr><h2 id="十一、uni的生命周期" tabindex="-1"><a class="header-anchor" href="#十一、uni的生命周期" aria-hidden="true">#</a> 十一、uni的生命周期</h2><h3 id="应用的生命周期" tabindex="-1"><a class="header-anchor" href="#应用的生命周期" aria-hidden="true">#</a> 应用的生命周期</h3><p>生命周期的概念：一个对象从创建、运行、销毁的整个过程被成为生命周期。</p><p>生命周期函数：在生命周期中每个阶段会伴随着每一个函数的触发，这些函数被称为生命周期函数</p><p><code>uni-app</code> 支持如下应用生命周期函数：</p><table><thead><tr><th>函数名</th><th>说明</th></tr></thead><tbody><tr><td>onLaunch</td><td>当<code>uni-app</code> 初始化完成时触发（全局只触发一次）</td></tr><tr><td>onShow</td><td>当 <code>uni-app</code> 启动，或从后台进入前台显示</td></tr><tr><td>onHide</td><td>当 <code>uni-app</code> 从前台进入后台</td></tr><tr><td>onError</td><td>当 <code>uni-app</code> 报错时触发</td></tr></tbody></table><h3 id="页面的生命周期" tabindex="-1"><a class="header-anchor" href="#页面的生命周期" aria-hidden="true">#</a> 页面的生命周期</h3><p><code>uni-app</code> 支持如下页面生命周期函数：</p>`,29),Pe=e("thead",null,[e("tr",null,[e("th",null,"函数名"),e("th",null,"说明"),e("th",null,"平台差异说明"),e("th",null,"最低版本")])],-1),Se=e("td",null,"onLoad",-1),Fe={href:"https://uniapp.dcloud.io/api/router?id=navigateto",target:"_blank",rel:"noopener noreferrer"},Be=e("td",null,null,-1),Re=e("td",null,null,-1),He=e("tr",null,[e("td",null,"onShow"),e("td",null,"监听页面显示。页面每次出现在屏幕上都触发，包括从下级页面点返回露出当前页面"),e("td"),e("td")],-1),Ae=e("tr",null,[e("td",null,"onReady"),e("td",null,"监听页面初次渲染完成。"),e("td"),e("td")],-1),je=e("tr",null,[e("td",null,"onHide"),e("td",null,"监听页面隐藏"),e("td"),e("td")],-1),De=e("tr",null,[e("td",null,"onUnload"),e("td",null,"监听页面卸载"),e("td"),e("td")],-1),Te=e("td",null,"onPullDownRefresh",-1),Ee={href:"https://uniapp.dcloud.io/api/ui/pulldown",target:"_blank",rel:"noopener noreferrer"},Ce=e("td",null,null,-1),Le=e("td",null,null,-1),Ne=e("tr",null,[e("td",null,"onReachBottom"),e("td",null,"页面滚动到底部的事件（不是scroll-view滚到底），常用于下拉下一页数据（上拉加载）。"),e("td"),e("td")],-1),Xe=d(`<h3 id="组件生命周期" tabindex="-1"><a class="header-anchor" href="#组件生命周期" aria-hidden="true">#</a> 组件生命周期</h3><p>uni-app 组件支持的生命周期，与vue标准组件的生命周期相同。这里没有页面级的onLoad等生命周期：</p><hr><h2 id="十二、下拉刷新" tabindex="-1"><a class="header-anchor" href="#十二、下拉刷新" aria-hidden="true">#</a> 十二、下拉刷新</h2><h3 id="开启下拉刷新" tabindex="-1"><a class="header-anchor" href="#开启下拉刷新" aria-hidden="true">#</a> 开启下拉刷新</h3><p>在uni-app中有两种方式开启下拉刷新</p><ul><li>需要在 <code>pages.json</code> 里，找到的当前页面的pages节点，并在 <code>style</code> 选项中开启 <code>enablePullDownRefresh</code></li><li>通过调用uni.startPullDownRefresh方法来开启下拉刷新</li></ul><h4 id="通过配置文件开启" tabindex="-1"><a class="header-anchor" href="#通过配置文件开启" aria-hidden="true">#</a> 通过配置文件开启</h4><p>创建list页面进行演示</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
&lt;view&gt;
杭州学科
&lt;view v-for=&quot;(item,index) in arr&quot; :key=&quot;index&quot;&gt;
{{item}}
&lt;/view&gt;
&lt;/view&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
data () {
return {
arr: [&#39;前端&#39;,&#39;java&#39;,&#39;ui&#39;,&#39;大数据&#39;]
}
}
}
&lt;/script&gt;

&lt;style&gt;
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过pages.json文件中找到当前页面的pages节点，并在 <code>style</code> 选项中开启 <code>enablePullDownRefresh</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;path&quot;:&quot;pages/list/list&quot;,
    &quot;style&quot;:{
      &quot;enablePullDownRefresh&quot;: true
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="通过api开启" tabindex="-1"><a class="header-anchor" href="#通过api开启" aria-hidden="true">#</a> 通过API开启</h4>`,13),ze={href:"https://uniapp.dcloud.io/api/ui/pulldown",target:"_blank",rel:"noopener noreferrer"},Ie=d(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>uni.startPullDownRefresh()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="监听下拉刷新" tabindex="-1"><a class="header-anchor" href="#监听下拉刷新" aria-hidden="true">#</a> 监听下拉刷新</h3><p>通过onPullDownRefresh可以监听到下拉刷新的动作</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>export default {
  data () {
    return {
      arr: [&#39;前端&#39;,&#39;java&#39;,&#39;ui&#39;,&#39;大数据&#39;]
    }
  },
  methods: {
    startPull () {
      uni.startPullDownRefresh()
    }
  },
  onPullDownRefresh () {
    console.log(&#39;触发下拉刷新了&#39;)
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="关闭下拉刷新" tabindex="-1"><a class="header-anchor" href="#关闭下拉刷新" aria-hidden="true">#</a> 关闭下拉刷新</h3><p>uni.stopPullDownRefresh()</p><p>停止当前页面下拉刷新。</p><p>案例演示</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
&lt;view&gt;
&lt;button type=&quot;primary&quot; @click=&quot;startPull&quot;&gt;开启下拉刷新&lt;/button&gt;
杭州学科
&lt;view v-for=&quot;(item,index) in arr&quot; :key=&quot;index&quot;&gt;
{{item}}
&lt;/view&gt;
&lt;/view&gt;
&lt;/template&gt;
&lt;script&gt;
export default {
data () {
return {
arr: [&#39;前端&#39;,&#39;java&#39;,&#39;ui&#39;,&#39;大数据&#39;]
}
},
methods: {
startPull () {
uni.startPullDownRefresh()
}
},

onPullDownRefresh () {
this.arr = []
setTimeout(()=&gt; {
this.arr = [&#39;前端&#39;,&#39;java&#39;,&#39;ui&#39;,&#39;大数据&#39;]
uni.stopPullDownRefresh()
}, 1000);
}
}
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="十三、上拉加载" tabindex="-1"><a class="header-anchor" href="#十三、上拉加载" aria-hidden="true">#</a> 十三、上拉加载</h2><p>通过在pages.json文件中找到当前页面的pages节点下style中配置onReachBottomDistance可以设置距离底部开启加载的距离，默认为50px</p><p>通过onReachBottom监听到触底的行为</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
&lt;view&gt;
&lt;button type=&quot;primary&quot; @click=&quot;startPull&quot;&gt;开启下拉刷新&lt;/button&gt;
杭州学科
&lt;view v-for=&quot;(item,index) in arr&quot; :key=&quot;index&quot;&gt;
{{item}}
&lt;/view&gt;
&lt;/view&gt;
&lt;/template&gt;
&lt;script&gt;
export default {
data () {
return {
arr: [&#39;前端&#39;,&#39;java&#39;,&#39;ui&#39;,&#39;大数据&#39;,&#39;前端&#39;,&#39;java&#39;,&#39;ui&#39;,&#39;大数据&#39;]
}
},
onReachBottom () {
console.log(&#39;触底了&#39;)
}
}
&lt;/script&gt;

&lt;style&gt;
view{
height: 100px;
line-height: 100px;
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>`,15);function Qe(Ve,Me){const n=a("ExternalLinkIcon");return s(),r("div",null,[u,c,e("h2",v,[h,t(" 一、uni-app介绍 "),e("a",p,[t("官方网页"),i(n)])]),e("p",null,[b,t(" 是一个使用 "),e("a",m,[t("Vue.js"),i(n)]),t(" 开发所有前端应用的框架，开发者编写一套代码，可发布到iOS、Android、H5、以及各种小程序（微信/支付宝/百度/头条/QQ/钉钉）等多个平台。")]),g,x,_,q,f,w,e("p",null,[t("安装编辑器HbuilderX "),e("a",y,[t("下载地址"),i(n)])]),k,P,e("p",null,[t("安装微信开发者工具 "),e("a",S,[t("下载地址"),i(n)])]),F,e("p",null,[t("在微信开发者工具里运行：进入hello-"),e("a",B,[t("uniapp"),i(n)]),t("项目，点击工具栏的运行 -> 运行到小程序模拟器 -> 微信开发者工具，即可在微信开发者工具里面体验uni-app")]),R,e("ul",null,[e("li",null,[t("页面文件遵循 "),e("a",H,[t("Vue 单文件组件 (SFC) 规范"),i(n)])]),e("li",null,[t("组件标签靠近小程序规范，详见"),e("a",A,[t("uni-app 组件规范"),i(n)])]),e("li",null,[t("接口能力（JS API）靠近微信小程序规范，但需将前缀 "),j,t(" 替换为 "),D,t("，详见"),e("a",T,[t("uni-app接口规范"),i(n)])]),E,C]),L,N,X,e("p",null,[t("用于设置应用的状态栏、导航条、标题、窗口背景色等。"),e("a",z,[t("详细文档"),i(n)])]),e("table",null,[I,e("tbody",null,[Q,V,M,O,W,e("tr",null,[U,J,$,e("td",null,[t("是否开启下拉刷新，详见"),e("a",G,[t("页面生命周期"),i(n)]),t("。")])]),e("tr",null,[K,Y,Z,e("td",null,[t("页面上拉触底事件触发时距页面底部距离，单位只支持px，详见"),e("a",ee,[t("页面生命周期"),i(n)])])])])]),te,e("table",null,[ne,e("tbody",null,[ie,e("tr",null,[de,le,ae,e("td",null,[t("配置页面窗口表现，配置项参考 "),e("a",se,[t("pageStyle"),i(n)])])])])]),re,e("table",null,[oe,e("tbody",null,[ue,ce,e("tr",null,[ve,he,pe,e("td",null,[t("启动参数，可在页面的 "),e("a",be,[t("onLoad"),i(n)]),t(" 函数里获得")])])])]),me,e("h4",ge,[xe,t(),e("a",_e,[t("image"),i(n)])]),qe,e("h3",fe,[we,t(),e("a",ye,[t("v-bind"),i(n)]),t("动态绑定属性")]),ke,e("table",null,[Pe,e("tbody",null,[e("tr",null,[Se,e("td",null,[t("监听页面加载，其参数为上个页面传递的数据，参数类型为Object（用于页面传参），参考"),e("a",Fe,[t("示例"),i(n)])]),Be,Re]),He,Ae,je,De,e("tr",null,[Te,e("td",null,[t("监听用户下拉动作，一般用于下拉刷新，"),e("a",Ee,[t("示例"),i(n)])]),Ce,Le]),Ne])]),Xe,e("p",null,[e("a",ze,[t("api文档"),i(n)])]),Ie])}const We=l(o,[["render",Qe],["__file","uniapp.html.vue"]]);export{We as default};
