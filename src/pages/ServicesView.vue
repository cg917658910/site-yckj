<script setup>
import { Icon } from '@iconify/vue'
import { computed, ref } from 'vue'

import {
  ctaBlock,
  serviceCategories,
  serviceProcessSteps,
  techStack,
} from '../data/site'

const getCategoryImage = (filename) => new URL(`../assets/img/${filename}`, import.meta.url).href
const activeCategory = ref(serviceCategories[0]?.title ?? '')
const selectedCategory = computed(
  () => serviceCategories.find((category) => category.title === activeCategory.value) ?? serviceCategories[0]
)
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
          专业服务
        </div>

        <h1 class="text-5xl md:text-7xl lg:text-8xl font-semibold text-slate-900 tracking-tight leading-[1.1] mb-8">
          全方位<br /><span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500">技术服务</span>
        </h1>
        <p class="text-lg md:text-xl text-slate-500 font-light max-w-2xl mx-auto mb-12 leading-relaxed">
          从概念到实现，我们提供一站式数字化解决方案。专业团队、前沿技术、贴心服务，助力企业数字化转型。
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <RouterLink
            to="/portfolio"
            class="w-full sm:w-auto px-8 py-3.5 bg-indigo-600 text-white font-medium text-sm rounded-lg hover:bg-indigo-500 hover:-translate-y-0.5 shadow-lg shadow-indigo-200 transition-all duration-200 flex items-center justify-center gap-2 group"
          >
            获取方案
            <Icon icon="lucide:chevron-right" width="16" class="group-hover:translate-x-1 transition-transform" />
          </RouterLink>
          <RouterLink
            to="/contact"
            class="w-full sm:w-auto px-8 py-3.5 bg-white border border-slate-200 text-slate-600 font-medium text-sm rounded-lg hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 transition-all duration-200 shadow-sm"
          >
            服务咨询
          </RouterLink>
        </div>
      </div>
    </section>

    <section class="py-20">
      <div class="section-container">
        <div class="text-center mb-16">
          <h2 class="section-title mb-4">核心服务领域</h2>
          <p class="text-slate-500 font-light">我们专注于为企业提供高质量的数字化服务</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <article
            v-for="category in serviceCategories"
            :key="category.title"
            class="glass glass-hover rounded-2xl p-6 text-center group"
          >
            <div
              class="w-16 h-16 mx-auto mb-4 rounded-2xl text-white flex items-center justify-center"
              :class="`bg-gradient-to-br ${category.accent}`"
            >
              <Icon :icon="category.icon" width="32" />
            </div>
            <h3 class="text-lg font-semibold text-slate-900 mb-2">{{ category.title }}</h3>
            <p class="text-sm text-slate-500 mb-4">{{ category.description }}</p>
            <ul class="text-xs text-slate-400 space-y-1 text-left inline-block">
              <li v-for="item in category.bullets" :key="item">• {{ item }}</li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <section class="py-20 border-y border-slate-200/60 bg-white">
      <div class="section-container space-y-12">
        <div class="text-center max-w-3xl mx-auto">
<!--           <p class="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-500 mb-3">Service Lines</p>
 -->          <h2 class="section-title mb-4">详细服务内容</h2>
          <p class="text-slate-500 font-light">
            深入了解我们的专业服务能力
          </p>
        </div>

        <div class="space-y-8">
          <div class="flex flex-wrap justify-center gap-3">
            <button
              v-for="category in serviceCategories"
              :key="category.title"
              class="px-4 py-2 rounded-full text-sm border transition-all"
              :class="
                activeCategory === category.title
                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-lg'
                  : 'border-slate-200 text-slate-500 hover:border-indigo-200 hover:text-indigo-600'
              "
              @click="activeCategory = category.title"
            >
              {{ category.title }}
            </button>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div class="glass rounded-3xl p-8 border border-slate-200/80 bg-white/70 shadow-xl space-y-4">
              <span class="px-3 py-1 rounded-full text-xs font-semibold tracking-widest bg-indigo-50 text-indigo-600">
                {{ selectedCategory.tagline }}
              </span>
              <h3 class="text-2xl font-semibold text-slate-900">{{ selectedCategory.title }}</h3>
              <p class="text-slate-500 leading-relaxed">{{ selectedCategory.detailDescription }}</p>
              <ul class="space-y-3">
                <li
                  v-for="item in selectedCategory.detailBullets"
                  :key="item"
                  class="flex items-center gap-3 text-sm text-slate-600"
                >
                  <span class="w-2 h-2 rounded-full bg-indigo-500"></span>
                  {{ item }}
                </li>
              </ul>
            </div>

            <div class="relative h-full flex items-center justify-center">
              <div class="absolute inset-0 bg-gradient-to-br from-indigo-500/15 to-cyan-500/10 blur-3xl rounded-3xl"></div>
              <div class="relative rounded-3xl border border-slate-200/80 bg-white shadow-2xl overflow-hidden w-full max-w-[520px] aspect-[4/3]">
                <img
                  :src="getCategoryImage(selectedCategory.image)"
                  :alt="selectedCategory.title"
                  class="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20">
      <div class="section-container">
        <div class="text-center mb-16">
          <h2 class="section-title mb-4">服务流程</h2>
          <p class="text-slate-500 font-light">标准化服务流程，确保项目高质量交付</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div v-for="stage in serviceProcessSteps" :key="stage.step" class="group text-center">
            <div class="w-12 h-12 mx-auto bg-white border-2 border-indigo-500 rounded-full flex items-center justify-center text-indigo-500 font-bold text-lg mb-4 shadow-[0_0_0_8px_rgb(248,250,252)]">
              {{ stage.step }}
            </div>
            <h3 class="text-base font-medium text-slate-900 mb-2">{{ stage.title }}</h3>
            <p class="text-xs text-slate-500">{{ stage.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 border-y border-slate-200/60 bg-white">
      <div class="section-container">
        <div class="text-center mb-16">
          <h2 class="section-title mb-4">技术栈</h2>
          <p class="text-slate-500 font-light">我们掌握前沿技术，为客户提供最佳解决方案</p>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          <div v-for="stack in techStack" :key="stack.label" class="text-center">
            <div class="w-16 h-16 mx-auto mb-3 rounded-xl bg-slate-50 flex items-center justify-center">
              <Icon :icon="stack.icon" width="36" class="text-slate-600" />
            </div>
            <h4 class="text-sm font-medium text-slate-900">{{ stack.label }}</h4>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 mx-6">
      <div class="max-w-5xl mx-auto bg-slate-900 rounded-3xl p-12 text-center relative overflow-hidden shadow-2xl shadow-indigo-200/50">
        <div class="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div class="absolute bottom-0 left-0 w-[300px] h-[300px] bg-cyan-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
        <div class="relative z-10">
          <h2 class="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">需要技术服务？</h2>
          <p class="text-slate-300 mb-8 max-w-xl mx-auto font-light">
            专业团队为您提供最优质的技术服务，立即联系我们获取免费咨询。
          </p>
          <div class="flex flex-col sm:flex-row justify-center gap-4">
            <RouterLink to="/contact" class="px-8 py-3 bg-white text-slate-900 text-sm font-medium rounded-lg hover:bg-slate-50 transition-colors">
              {{ ctaBlock.primary }}
            </RouterLink>
            <RouterLink
              to="/portfolio"
              class="px-8 py-3 bg-transparent border border-white/20 text-white text-sm font-medium rounded-lg hover:bg-white/10 transition-colors"
            >
              {{ ctaBlock.secondary }}
            </RouterLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
