import DefaultTheme from 'vitepress/theme'
import BusuanziCounter from './BusuanziCounter.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 注册全局组件
    app.component('BusuanziCounter', BusuanziCounter)
    // 动态加载不蒜子脚本
    if (typeof window !== 'undefined') {
      const script = document.createElement('script')
      script.async = true
      script.src = '//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js'
      document.head.appendChild(script)
    }
  }
}