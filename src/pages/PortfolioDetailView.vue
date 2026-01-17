<script setup>
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { Icon } from '@iconify/vue'

import { caseStudies } from '../data/site'

const route = useRoute()

const currentCase = computed(() => {
  const match = caseStudies.find((item) => item.slug === route.params.slug)
  return match ?? caseStudies[0]
})

const moreCases = computed(() => caseStudies.filter((item) => item.slug !== currentCase.value.slug).slice(0, 3))
</script>

<template>
  <div>
    <section class="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      <div class="absolute inset-0 bg-grid pointer-events-none"></div>
      <div class="absolute top-0 left-0 w-full h-[700px] bg-gradient-radial from-indigo-100/40 via-white to-white pointer-events-none"></div>

      <div class="section-container relative">
        <nav class="text-sm mb-8 text-slate-500 flex items-center gap-2">
          <RouterLink to="/portfolio" class="hover:text-indigo-600">案例</RouterLink>
          <span>/</span>
          <span class="text-slate-800 font-medium">{{ currentCase.value.title }}</span>
        </nav>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div class="lg:col-span-2">
            <div class="mb-8">
              <h1 class="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight leading-tight mb-4">
                {{ currentCase.value.title }}
              </h1>
              <p class="text-lg text-slate-500 font-light">{{ currentCase.value.description }}</p>
            </div>

            <div class="relative aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-slate-200 mb-12" :class="`bg-gradient-to-br ${currentCase.value.gradient}`">
              <div class="absolute inset-0 flex items-center justify-center">
                <Icon :icon="currentCase.value.icon" width="120" class="text-white/20" />
              </div>
            </div>

            <div class="space-y-6 text-slate-600 leading-relaxed">
              <div>
                <h2 class="text-2xl font-semibold text-slate-900 mb-3">项目背景</h2>
                <p>{{ currentCase.value.detail.background }}</p>
              </div>

              <div>
                <h2 class="text-2xl font-semibold text-slate-900 mb-3">核心挑战</h2>
                <p>{{ currentCase.value.detail.challenge }}</p>
              </div>

              <div>
                <h2 class="text-2xl font-semibold text-slate-900 mb-3">解决方案</h2>
                <ul class="list-disc pl-5 space-y-2">
                  <li v-for="item in currentCase.value.detail.solution" :key="item">{{ item }}</li>
                </ul>
              </div>

              <div>
                <h2 class="text-2xl font-semibold text-slate-900 mb-3">成果展示</h2>
                <ul class="list-disc pl-5 space-y-2">
                  <li v-for="result in currentCase.value.detail.results" :key="result">{{ result }}</li>
                </ul>
              </div>
            </div>
          </div>

          <aside class="lg:col-span-1">
            <div class="sticky top-28">
              <div class="bg-white/80 backdrop-blur-lg border border-slate-200/60 rounded-2xl p-8 space-y-6">
                <h3 class="text-xl font-semibold text-slate-900">项目信息</h3>
                <ul class="space-y-4 text-sm">
                  <li class="flex justify-between"><span class="text-slate-500">客户</span><span class="font-medium text-slate-800">{{ currentCase.value.detail.client }}</span></li>
                  <li class="flex justify-between"><span class="text-slate-500">行业</span><span class="font-medium text-slate-800">{{ currentCase.value.detail.industry }}</span></li>
                  <li class="flex justify-between"><span class="text-slate-500">服务</span><span class="font-medium text-slate-800">{{ currentCase.value.detail.services }}</span></li>
                  <li class="flex justify-between"><span class="text-slate-500">完成时间</span><span class="font-medium text-slate-800">{{ currentCase.value.detail.year }}</span></li>
                </ul>

                <div class="h-px bg-slate-200"></div>

                <h4 class="text-lg font-semibold text-slate-900">技术栈</h4>
                <div class="flex flex-wrap gap-2">
                  <span v-for="tag in currentCase.value.tags" :key="tag" class="px-3 py-1 bg-indigo-50 text-indigo-600 text-xs rounded-full">{{ tag }}</span>
                </div>

                <RouterLink
                  to="/contact"
                  class="block w-full text-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-200"
                >
                  获取方案
                </RouterLink>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>

    <section class="py-20 bg-white border-t border-slate-200/60">
      <div class="section-container">
        <h2 class="section-title text-center mb-12">其他案例</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <article
            v-for="item in moreCases"
            :key="item.slug"
            class="glass rounded-2xl overflow-hidden border border-slate-200/60"
          >
            <div class="relative h-40" :class="`bg-gradient-to-br ${item.gradient}`">
              <div class="absolute inset-0 flex items-center justify-center">
                <Icon :icon="item.icon" width="72" class="text-white/20" />
              </div>
            </div>
            <div class="p-6 space-y-3">
              <h3 class="text-xl font-semibold text-slate-900">{{ item.title }}</h3>
              <p class="text-sm text-slate-500">{{ item.description }}</p>
              <RouterLink :to="`/portfolio/${item.slug}`" class="text-sm font-medium text-indigo-600 hover:text-indigo-500">查看详情 →</RouterLink>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>
