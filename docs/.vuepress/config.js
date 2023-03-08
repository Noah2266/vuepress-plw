import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { getDirname, path } from '@vuepress/utils'

const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  lang: 'zh-CN',
  title: '伴我行',
  description: '技术分享博客',
  theme: defaultTheme({
    // Public 文件路径
    logo: '/images/lufei.png',
    navbar: [
      // NavbarItem
      {
        text: '首页',
        link: '/',
      },
      // NavbarGroup
      {
        text: '前端',
        children: ['/group/front-end/html.md', '/group/front-end/css.md', '/group/front-end/h5c3.md', '/group/front-end/javaScript.md', '/group/front-end/es6.md', '/group/front-end/vue.md'],
      },
      // 控制元素何时被激活
      {
        text: '工具',
        children: ['/group/tools/git.md', '/group/tools/axios.md', '/group/tools/webpack.md'],
      },
      {
        text: '移动端',
        children: ['/group/mobile/weChat.md', '/group/mobile/uniapp.md', '/group/mobile/nodeJs.md'],
      },
    ],
    repo: 'https://github.com/Noah2266/vuepress-plw',
  }),
  plugins: [
    searchPlugin({
      // 配置项
    }),
    registerComponentsPlugin({
      components: {
        Footer: path.resolve(__dirname, './components/footer/Footer.vue'),
      },
    }),

  ],
})