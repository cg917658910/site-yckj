<script setup>
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'

import SiteFooter from './components/layout/SiteFooter.vue'
import SiteHeader from './components/layout/SiteHeader.vue'

onMounted(() => {
  if (document.getElementById('tawk-script')) return
  const script = document.createElement('script')
  script.id = 'tawk-script'
  script.async = true
  script.src = 'https://embed.tawk.to/66969b25becc2fed692f8e6c/1i2uemh3d'
  script.charset = 'UTF-8'
  script.setAttribute('crossorigin', '*')
  document.body.appendChild(script)
})
</script>

<template>
  <div class="min-h-screen bg-slate-50 text-slate-600">
    <SiteHeader />
    <main>
      <RouterView />
    </main>
    <SiteFooter />
  </div>
</template>
