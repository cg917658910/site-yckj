<script setup>
import { Icon } from '@iconify/vue';

import { aboutStats, companyStory, companyValues, ctaBlock, teamMembers, timeline } from '../data/site';
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
          关于我们
        </div>

        <h1 class="text-5xl md:text-7xl lg:text-8xl font-semibold text-slate-900 tracking-tight leading-[1.1] mb-8">
          诚信铸就<br /><span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500">品质未来</span>
        </h1>
        <p class="text-lg md:text-xl text-slate-500 font-light max-w-2xl mx-auto mb-12 leading-relaxed">
          易诚无忧成立于 2015 年，是一家专注于高端网站建设、移动应用开发和企业系统定制的科技公司。我们用诚信和专业，为客户创造价值。
        </p>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div v-for="stat in aboutStats" :key="stat.label" class="text-center">
            <div class="text-3xl md:text-4xl font-bold mb-2" :class="stat.accent">{{ stat.value }}</div>
            <div class="text-sm text-slate-500">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20">
      <div class="section-container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div class="space-y-6">
          <h2 class="section-title">我们的故事</h2>
          <p v-for="paragraph in companyStory" :key="paragraph" class="text-slate-500 font-light leading-relaxed">
            {{ paragraph }}
          </p>
        </div>
        <div class="relative">
          <div class="absolute inset-0 bg-indigo-500/10 blur-3xl rounded-full opacity-60"></div>
          <div class="relative bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xl shadow-slate-200/50">
            <div class="h-64 bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center">
              <Icon icon="lucide:building-2" width="90" class="text-white/20" />
            </div>
            <div class="p-8 space-y-4">
              <div class="h-4 w-3/4 rounded bg-slate-100"></div>
              <div class="h-4 w-1/2 rounded bg-slate-100"></div>
              <div class="h-20 w-full rounded-lg bg-gradient-to-tr from-indigo-50 to-cyan-50 border border-slate-100 flex items-center justify-center">
                <span class="text-xs font-mono text-indigo-400">Company Journey</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 border-y border-slate-200/60 bg-white">
      <div class="section-container">
        <div class="text-center mb-16">
          <h2 class="section-title mb-4">核心价值观</h2>
          <p class="text-slate-500 font-light">指导我们前进的信念和原则</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <article
            v-for="value in companyValues"
            :key="value.title"
            class="value-card glass glass-hover rounded-2xl p-6 text-center group"
          >
            <div class="value-icon w-16 h-16 mx-auto mb-4 rounded-2xl text-white flex items-center justify-center" :class="`bg-gradient-to-br ${value.gradient}`">
              <Icon :icon="value.icon" width="32" />
            </div>
            <h3 class="text-lg font-semibold text-slate-900 mb-2">{{ value.title }}</h3>
            <p class="text-sm text-slate-500">{{ value.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="py-20">
      <div class="section-container">
        <div class="text-center mb-16">
          <h2 class="section-title mb-4">核心团队</h2>
          <p class="text-slate-500 font-light">经验丰富的专业团队，为您提供最优质的服务</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <article
            v-for="member in teamMembers"
            :key="member.name"
            class="team-card glass glass-hover rounded-2xl overflow-hidden group"
          >
            <div class="relative h-48 overflow-hidden" :class="`bg-gradient-to-br ${member.gradient}`">
              <div class="absolute inset-0 flex items-center justify-center">
                <Icon icon="lucide:user" width="80" class="text-white/30" />
              </div>
              <div class="absolute top-4 right-4">
                <span class="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full">{{ member.badge }}</span>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-lg font-semibold text-slate-900 mb-1">{{ member.name }}</h3>
              <p class="text-sm text-indigo-600 mb-3">{{ member.role }}</p>
              <p class="text-xs text-slate-500">{{ member.bio }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="py-20 border-y border-slate-200/60 bg-white">
      <div class="section-container">
        <div class="text-center mb-16">
          <h2 class="section-title mb-4">发展历程</h2>
          <p class="text-slate-500 font-light">见证我们的成长足迹</p>
        </div>

        <div class="relative">
          <div class="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 via-purple-500 to-indigo-500 hidden md:block -translate-x-1/2"></div>
          <div class="space-y-12">
            <div v-for="item in timeline" :key="item.year" class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div class="text-right md:pr-8 order-1 md:order-none" :class="{ 'md:text-left md:pl-8 md:pr-0': timeline.indexOf(item) % 2 === 1 }">
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-sm font-medium mb-2">
                  <Icon icon="lucide:calendar" width="16" />
                  {{ item.year }}
                </div>
                <h3 class="text-xl font-semibold text-slate-900 mb-2">{{ item.title }}</h3>
                <p class="text-sm text-slate-500">{{ item.description }}</p>
              </div>
              <div class="hidden md:flex items-center justify-center">
                <div class="w-4 h-4 rounded-full bg-indigo-500 shadow-lg"></div>
              </div>
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
          <h2 class="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">加入我们</h2>
          <p class="text-slate-300 mb-8 max-w-xl mx-auto font-light">
            我们正在寻找有激情、有才华的你，一起创造更美好的未来。
          </p>
          <div class="flex flex-col sm:flex-row justify-center gap-4">
            <RouterLink to="/contact" class="px-8 py-3 bg-white text-slate-900 text-sm font-medium rounded-lg hover:bg-slate-50 transition-colors">
              查看职位
            </RouterLink>
            <RouterLink
              to="/about"
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
