<script setup>
import { ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { Icon } from '@iconify/vue'

import { navigationLinks, contactInfo } from '../../data/site'

const isMenuOpen = ref(false)
const route = useRoute()

watch(
  () => route.fullPath,
  () => {
    isMenuOpen.value = false
  }
)
</script>

<template>
  <header class="fixed top-0 inset-x-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-xl">
    <div class="section-container h-16 flex items-center justify-between">
      <RouterLink to="/" class="flex items-center gap-2">
        <Icon icon="lucide:cpu" class="text-indigo-500" width="24" />
        <span class="text-slate-800 font-semibold tracking-tight">易诚科技</span>
      </RouterLink>

      <nav class="hidden md:flex items-center gap-8 text-sm text-slate-500">
        <RouterLink
          v-for="link in navigationLinks"
          :key="link.to"
          :to="link.to"
          class="transition-colors duration-200"
          active-class="text-indigo-600 font-medium"
        >
          {{ link.label }}
        </RouterLink>
      </nav>

      <a
        class="hidden md:flex items-center gap-2 px-4 py-2 bg-slate-900 text-white text-xs font-medium rounded-full hover:bg-slate-700 transition-colors shadow-md shadow-slate-200"
        :href="`tel:${contactInfo.phone}`"
      >
        <span>立即咨询</span>
        <Icon icon="lucide:arrow-right" width="14" />
      </a>

      <button class="md:hidden text-slate-500 hover:text-slate-800" @click="isMenuOpen = !isMenuOpen">
        <Icon :icon="isMenuOpen ? 'lucide:x' : 'lucide:menu'" width="24" />
      </button>
    </div>

    <transition name="fade">
      <div v-if="isMenuOpen" class="md:hidden border-t border-slate-200/60 bg-white/95">
        <div class="section-container py-4 flex flex-col gap-4 text-sm text-slate-600">
          <RouterLink
            v-for="link in navigationLinks"
            :key="link.to"
            :to="link.to"
            class="py-2 border-b border-slate-100 last:border-none"
            active-class="text-indigo-600 font-semibold"
          >
            {{ link.label }}
          </RouterLink>
          <a
            :href="`tel:${contactInfo.phone}`"
            class="flex items-center justify-center gap-2 px-4 py-3 bg-slate-900 text-white rounded-lg text-sm"
          >
            <Icon icon="lucide:phone" width="16" />
            立即咨询
          </a>
        </div>
      </div>
    </transition>
  </header>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
