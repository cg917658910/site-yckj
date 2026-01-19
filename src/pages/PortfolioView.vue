<script setup>
import { Icon } from '@iconify/vue'
import { computed, ref } from 'vue'

import { caseFilters, caseStudies, ctaBlock } from '../data/site'

const stats = [
  { label: '成功项目', value: '200+', accent: 'text-indigo-600' },
  { label: '合作客户', value: '150+', accent: 'text-cyan-600' },
  { label: '行业经验', value: '8年', accent: 'text-rose-600' },
  { label: '客户满意度', value: '98%', accent: 'text-teal-600' },
]

const activeFilter = ref(caseFilters[0].value)

const filteredCases = computed(() => {
  if (activeFilter.value === 'all') return caseStudies
  return caseStudies.filter((item) => item.category === activeFilter.value)
})
</script>

<template>
  <div>
    <section class="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div class="absolute inset-0 bg-grid pointer-events-none"></div>
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-radial from-indigo-100/50 via-cyan-50/30 to-transparent opacity-100 blur-3xl pointer-events-none"></div>

      <div class="section-container relative text-center">
        <div class="badge border-indigo-100 bg-indigo-50/60 text-indigo-600 mb-8">
          <span class="flex h-2 w-2 relative">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          成功案例
        </div>

        <h1 class="text-5xl md:text-7xl lg:text-8xl font-semibold text-slate-900 tracking-tight leading-[1.1] mb-8">
          精选项目<br /><span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500">案例展示</span>
        </h1>
        <p class="text-lg md:text-xl text-slate-500 font-light max-w-2xl mx-auto mb-12 leading-relaxed">
          每一个项目都是我们技术与创意的结合。从概念到实现，我们为客户创造真正有价值的数字化产品。
        </p>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div v-for="stat in stats" :key="stat.label" class="text-center">
            <div class="text-3xl md:text-4xl font-bold mb-2" :class="stat.accent">{{ stat.value }}</div>
            <div class="text-sm text-slate-500">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-8 border-b border-slate-200/60 bg-white sticky top-16 z-40">
      <div class="section-container flex flex-wrap items-center justify-between gap-4">
        <div class="flex flex-wrap gap-3">
          <button
            v-for="filter in caseFilters"
            :key="filter.value"
            class="filter-btn px-4 py-2 rounded-full text-sm font-medium border border-slate-200 bg-white hover:border-indigo-300 transition-all"
            :class="{
              active: activeFilter === filter.value,
              'bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-lg': activeFilter === filter.value,
            }"
            @click="activeFilter = filter.value"
          >
            {{ filter.label }}
          </button>
        </div>
<!--         <div class="text-sm text-slate-500">共 <span class="font-semibold text-slate-900">{{ filteredCases.length }}</span> 个案例</div>
 -->      </div>
    </section>

    <section class="py-20">
      <div class="section-container">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article
            v-for="item in filteredCases"
            :key="item.slug"
            class="case-card glass glass-hover rounded-2xl overflow-hidden group flex flex-col"
          >
            <div class="relative h-48 overflow-hidden" :class="`bg-gradient-to-br ${item.gradient}`">
              <div class="absolute inset-0 flex items-center justify-center">
                <Icon :icon="item.icon" class="text-white/30" width="84" />
              </div>
              <div class="absolute top-4 right-4">
                <span class="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full">{{ item.badge }}</span>
              </div>
              <RouterLink
                :to="`/portfolio/${item.slug}`"
                class="case-overlay absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <span class="px-4 py-2 bg-white text-slate-900 rounded-lg text-sm font-medium hover:bg-slate-100 transition-colors">
                  查看详情
                </span>
              </RouterLink>
            </div>
            <div class="p-6 flex flex-col h-full">
              <h3 class="text-xl font-semibold text-slate-900 mb-2">{{ item.title }}</h3>
              <p class="text-sm text-slate-500 mb-4">{{ item.description }}</p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span v-for="tag in item.tags" :key="tag" class="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-md">{{ tag }}</span>
              </div>
              <div class="flex items-center justify-between text-xs text-slate-400 mt-auto">
                <span>{{ item.stats.label }}</span>
                <span class="flex items-center gap-1">
                  <Icon icon="lucide:trending-up" width="12" />
                  {{ item.stats.value }}
                </span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="py-20 mx-6">
      <div class="max-w-5xl mx-auto bg-slate-900 rounded-3xl p-12 text-center relative overflow-hidden shadow-2xl shadow-indigo-200/50">
        <div class="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div class="absolute bottom-0 left-0 w-[300px] h-[300px] bg-cyan-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
        <div class="relative z-10">
          <h2 class="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">有项目想法？</h2>
          <p class="text-slate-300 mb-8 max-w-xl mx-auto font-light">让我们一起将您的创意变为现实。立即联系我们，获取免费的项目咨询和报价。</p>
          <div class="flex flex-col sm:flex-row justify-center gap-4">
            <RouterLink to="/contact" class="px-8 py-3 bg-white text-slate-900 text-sm font-medium rounded-lg hover:bg-slate-50 transition-colors">
              {{ ctaBlock.primary }}
            </RouterLink>
            <RouterLink
              to="/portfolio"
              class="px-8 py-3 bg-transparent border border-white/20 text-white text-sm font-medium rounded-lg hover:bg-white/10 transition-colors"
            >
              下载案例册
            </RouterLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
