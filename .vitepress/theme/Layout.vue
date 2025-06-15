<script setup>
import DefaultTheme from 'vitepress/theme'
import { onMounted, watch } from 'vue'
import { useRoute } from 'vitepress'

const { Layout } = DefaultTheme
const route = useRoute()

function loadBusuanzi() {
  // 移除旧的 busuanzi 脚本，避免重复加载
  const existingScript = document.getElementById('busuanzi-script')
  if (existingScript) existingScript.remove()

  // 强制刷新数据
  window.BUSUANZI_FORCE_RELOAD = true

  const script = document.createElement('script')
  script.id = 'busuanzi-script'
  script.src = 'https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js'
  script.defer = true
  document.body.appendChild(script)
}

onMounted(() => {
  loadBusuanzi()
})

// 监听页面路由变化，重新加载统计
watch(() => route.path, () => {
  loadBusuanzi()
})
</script>

<template>
  <Layout>
    <template #aside-bottom>
      <div style="margin-top: 2rem; font-size: 14px; color: #888;">
        <div>
          👀 本页访问次数：
          <span id="busuanzi_container_page_pv">
            <span id="busuanzi_value_page_pv">-</span>
          </span>
        </div>
        <div>
          🌍 总访问次数：
          <span id="busuanzi_container_site_pv">
            <span id="busuanzi_value_site_pv">-</span>
          </span>
        </div>
      </div>
    </template>
  </Layout>
</template>
