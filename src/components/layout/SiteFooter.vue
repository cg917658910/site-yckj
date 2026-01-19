<script setup>
import { Icon } from '@iconify/vue';
import { contactInfo, footerLinks } from '../../data/site';
</script>

<template>
  <footer class="border-t border-slate-200/60 bg-white pt-16 pb-8 mt-20">
    <div class="section-container">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        <div class="col-span-2 md:col-span-1">
          <div class="flex items-center gap-2 mb-4">
            <Icon icon="lucide:cpu" class="text-indigo-500" width="20" />
            <span class="text-slate-900 font-semibold tracking-tight">易诚无忧</span>
          </div>
          <p class="text-xs text-slate-500 leading-relaxed">
            致力于为企业提供高品质的软件开发服务，用技术创造商业价值。
          </p>
        </div>

        <div v-for="section in footerLinks" :key="section.title">
          <h4 class="text-slate-900 font-medium text-sm mb-4">{{ section.title }}</h4>
          <ul class="space-y-2 text-xs text-slate-500">
            <li v-for="item in section.links" :key="item.label">
              <a
                :href="item.to"
                :target="item.isExternal ? '_blank' : undefined"
                class="hover:text-indigo-600 transition-colors"
              >
                {{ item.label }}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-slate-900 font-medium text-sm mb-4">联系我们</h4>
          <ul class="space-y-2 text-xs text-slate-500">
            <li class="flex items-center gap-2">
              <Icon icon="lucide:mail" width="14" />
              {{ contactInfo.email }}
            </li>
            <li class="flex items-center gap-2">
              <Icon icon="lucide:phone" width="14" />
              {{ contactInfo.phone }}
            </li>
            <li class="flex items-center gap-2">
              <Icon icon="lucide:map-pin" width="14" />
              成都市龙泉驿区西河大道
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-xs text-slate-400">© 2023 易诚无忧. All rights reserved.</p>
        <div class="flex gap-4 text-slate-400">
          <a href="#" class="hover:text-slate-800 transition-colors">
            <Icon icon="lucide:github" width="16" />
          </a>
          <a href="#" class="hover:text-slate-800 transition-colors">
            <Icon icon="lucide:twitter" width="16" />
          </a>
          <a href="#" class="hover:text-slate-800 transition-colors">
            <Icon icon="lucide:linkedin" width="16" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
