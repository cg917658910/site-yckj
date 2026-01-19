<script setup>
import { Icon } from '@iconify/vue'

import {
  homeHero,
  homeServices,
  capabilityHighlights,
  workflowSteps,
  ctaBlock,
} from '../data/site'
</script>

<template>
  <div>
    <section class="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div class="absolute inset-0 bg-grid pointer-events-none"></div>
      <div
        class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-radial from-indigo-100/50 via-cyan-50/30 to-transparent opacity-100 blur-3xl pointer-events-none"
      ></div>

      <div class="section-container relative text-center">
        <div class="badge border-indigo-100 bg-indigo-50/60 text-indigo-600 mb-8">
          <span class="flex h-2 w-2 relative">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          {{ homeHero.badge }}
        </div>

        <h1 class="text-5xl md:text-7xl lg:text-8xl font-semibold text-slate-900 tracking-tight leading-[1.1] mb-8">
          {{ homeHero.title }}<br />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500">
            {{ homeHero.highlight }}
          </span>
        </h1>

        <p class="text-lg md:text-xl text-slate-500 font-light max-w-2xl mx-auto mb-12 leading-relaxed">
          {{ homeHero.description }}
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <RouterLink
            :to="homeHero.primaryCta.to"
            class="w-full sm:w-auto px-8 py-3.5 bg-indigo-600 text-white font-medium text-sm rounded-lg hover:bg-indigo-500 hover:-translate-y-0.5 shadow-lg shadow-indigo-200 transition-all duration-200 flex items-center justify-center gap-2 group"
          >
            {{ homeHero.primaryCta.label }}
            <Icon icon="lucide:chevron-right" width="16" class="group-hover:translate-x-1 transition-transform" />
          </RouterLink>

          <RouterLink
            :to="homeHero.secondaryCta.to"
            class="w-full sm:w-auto px-8 py-3.5 bg-white border border-slate-200 text-slate-600 font-medium text-sm rounded-lg hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 transition-all duration-200 shadow-sm"
          >
            {{ homeHero.secondaryCta.label }}
          </RouterLink>
        </div>

        <div class="mt-20 pt-10 border-t border-slate-200/60">
          <p class="text-xs text-slate-400 mb-6 uppercase tracking-widest font-medium">Core Technologies</p>
          <div class="flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 hover:opacity-100 transition-all duration-500 text-slate-800">
            <Icon icon="lucide:file-code-2" width="32" />
            <Icon icon="lucide:database" width="32" />
            <Icon icon="lucide:smartphone" width="32" />
            <Icon icon="lucide:server" width="32" />
            <Icon icon="lucide:cloud" width="32" />
            <Icon icon="lucide:layout" width="32" />
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 relative">
      <div class="section-container">
        <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 class="section-title mb-4">核心服务领域</h2>
            <p class="text-slate-500 font-light max-w-xl">
              提供从需求分析到最终交付的全周期软件开发服务，确保每一个像素都精准到位。
            </p>
          </div>
          <RouterLink to="/services" class="text-indigo-600 text-sm hover:text-indigo-500 transition-colors flex items-center gap-1 group font-medium">
            查看所有服务
            <Icon icon="lucide:arrow-right" width="16" class="group-hover:translate-x-0.5 transition-transform" />
          </RouterLink>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          <article
            v-for="service in homeServices.slice(0, 4)"
            :key="service.title"
            class="glass glass-hover rounded-2xl p-8 transition-all duration-300 group flex flex-col"
          >
            <div :class="[`w-12 h-12 rounded-xl border flex items-center justify-center mb-6 shadow-sm`, service.accent]">
              <Icon :icon="service.icon" width="24" />
            </div>
            <h3 class="text-xl font-medium text-slate-900 mb-3">{{ service.title }}</h3>
            <p class="text-sm text-slate-500 font-light leading-relaxed mb-6">{{ service.description }}</p>
            <ul class="space-y-2 mt-auto">
              <li v-for="item in service.bullets" :key="item" class="flex items-center gap-2 text-xs text-slate-500">
                <Icon icon="lucide:check" width="14" class="text-indigo-500" />
                {{ item }}
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <section class="py-24 border-y border-slate-200/60 bg-white">
      <div class="section-container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div class="space-y-8">
          <h2 class="section-title">不仅仅是代码<br /><span class="text-slate-400">更是商业逻辑的完美实现</span></h2>
          <p class="text-slate-500 font-light">
            在编写第一行代码之前，我们会深入理解您的商业模式，确保交付物能够切实解决问题并带来增长。
          </p>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div
              v-for="item in capabilityHighlights"
              :key="item.title"
              class="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100 shadow-sm"
            >
              <Icon :icon="item.icon" width="24" class="text-indigo-500" />
              <div>
                <h4 class="text-sm font-medium text-slate-900">{{ item.title }}</h4>
                <p class="text-xs text-slate-500 mt-1">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="relative">
          <div class="absolute inset-0 bg-indigo-500/10 blur-3xl rounded-full opacity-60"></div>
          <div class="relative bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xl">
            <div class="h-10 border-b border-slate-100 bg-slate-50/50 flex items-center px-4 gap-2">
              <span class="w-3 h-3 rounded-full bg-slate-300"></span>
              <span class="w-3 h-3 rounded-full bg-slate-200"></span>
              <span class="w-3 h-3 rounded-full bg-slate-200"></span>
            </div>
            <div class="p-8 space-y-4">
              <div class="flex gap-4 mb-6">
                <div class="w-1/3 h-24 rounded-lg bg-slate-100 animate-pulse"></div>
                <div class="w-1/3 h-24 rounded-lg bg-slate-100 animate-pulse delay-75"></div>
                <div class="w-1/3 h-24 rounded-lg bg-slate-100 animate-pulse delay-150"></div>
              </div>
              <div class="h-4 w-3/4 rounded bg-slate-100"></div>
              <div class="h-4 w-1/2 rounded bg-slate-100"></div>
              <div class="h-32 w-full rounded-lg bg-gradient-to-tr from-indigo-50 to-cyan-50 border border-slate-100 mt-6 flex items-center justify-center">
                <span class="text-xs font-mono text-indigo-400">System Architecture Visualization</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24">
      <div class="section-container">
        <div class="text-center mb-16">
          <h2 class="section-title mb-4">标准化作业流程</h2>
          <p class="text-slate-500 font-light">严谨的流程控制是项目成功的关键</p>
        </div>

        <div class="relative">
          <div class="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent hidden md:block -translate-y-1/2 z-0"></div>
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            <div v-for="step in workflowSteps" :key="step.title" class="group text-center">
              <div
                class="w-12 h-12 mx-auto bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-400 group-hover:text-white group-hover:bg-indigo-500 group-hover:border-indigo-500 transition-all duration-300 mb-4 shadow-[0_0_0_8px_rgb(248,250,252)]"
              >
                <Icon :icon="step.icon" width="20" />
              </div>
              <h3 class="text-base font-medium text-slate-900 mb-2">{{ step.title }}</h3>
              <p class="text-xs text-slate-500 max-w-[180px] mx-auto">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 mx-6">
      <div class="max-w-5xl mx-auto bg-slate-900 rounded-3xl p-12 text-center relative overflow-hidden shadow-2xl shadow-indigo-200/50">
        <div class="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div class="absolute bottom-0 left-0 w-[300px] h-[300px] bg-cyan-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

        <div class="relative z-10">
          <h2 class="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">{{ ctaBlock.title }}</h2>
          <p class="text-slate-300 mb-8 max-w-xl mx-auto font-light">{{ ctaBlock.description }}</p>

          <div class="flex flex-col sm:flex-row justify-center gap-4">
            <RouterLink to="/contact" class="px-8 py-3 bg-white text-slate-900 text-sm font-medium rounded-lg hover:bg-slate-50 transition-colors">
              {{ ctaBlock.primary }}
            </RouterLink>
            <RouterLink
              to="/contact"
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
