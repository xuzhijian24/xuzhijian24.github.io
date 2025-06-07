import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "徐志建的博客",
  base: '/',
  description: "记录生活的点点滴滴，我思故我在",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '导航', link: '/' },
      { text: '博客', link: '/blog' },
      { text: '关于我', link: '/about' },
      // { text: '示例页面', link: '/markdown-examples' }
    ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/xuzhijian24' },
      { icon: 'gitee', link: 'https://gitee.com/xuxiaoxie' }
    ]
  }
})
