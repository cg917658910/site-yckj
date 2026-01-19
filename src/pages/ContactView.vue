<script setup>
import { Icon } from '@iconify/vue'
import { reactive, ref } from 'vue'

import { contactInfo, contactMethods, faqList, officeDirections } from '../data/site'
import wechatQr from '../assets/img/wx.jpg'

const form = reactive({
  name: '',
  company: '',
  email: '',
  phone: '',
  service: '',
  message: '',
  agree: false,
})

const submitting = ref(false)
const activeFaq = ref(null)
const showWechatModal = ref(false)

const handleSubmit = () => {
  submitting.value = true
  setTimeout(() => {
    submitting.value = false
    window.alert('感谢您的信任，我们会尽快联系您。')
    Object.assign(form, { name: '', company: '', email: '', phone: '', service: '', message: '', agree: false })
  }, 500)
}
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
          联系我们
        </div>

        <h1 class="text-5xl md:text-7xl lg:text-8xl font-semibold text-slate-900 tracking-tight leading-[1.1] mb-8">
          随时为您<br /><span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500">提供服务</span>
        </h1>
        <p class="text-lg md:text-xl text-slate-500 font-light max-w-2xl mx-auto mb-12 leading-relaxed">
          无论您有任何技术需求或问题，我们的专业团队都随时准备为您提供帮助和支持。
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a :href="`tel:${contactInfo.phone}`" class="flex items-center gap-3 hover:text-indigo-600 transition-colors">
            <Icon icon="lucide:phone" width="20" class="text-indigo-500" />
            <span class="text-slate-700 font-medium">{{ contactInfo.phone }}</span>
          </a>
          <div class="flex items-center gap-3">
            <Icon icon="lucide:mail" width="20" class="text-cyan-500" />
            <span class="text-slate-700 font-medium">{{ contactInfo.email }}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20">
      <div class="section-container">
        <div class="text-center mb-16">
          <h2 class="section-title mb-4">多种联系方式</h2>
          <p class="text-slate-500 font-light">选择最适合您的方式与我们取得联系</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <article v-for="method in contactMethods" :key="method.title" class="contact-card glass glass-hover rounded-2xl p-8 text-center group">
            <div class="contact-icon w-16 h-16 mx-auto mb-4 rounded-2xl text-white flex items-center justify-center" :class="`bg-gradient-to-br ${method.gradient}`">
              <Icon :icon="method.icon" width="32" />
            </div>
            <h3 class="text-xl font-semibold text-slate-900 mb-2">{{ method.title }}</h3>
            <p class="text-sm text-slate-500 mb-4">{{ method.description }}</p>
            <button
              v-if="method.title === '微信客服'"
              class="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white text-sm font-medium hover:bg-slate-700 transition-colors"
              @click="showWechatModal = true"
            >
              查看二维码
              <Icon icon="lucide:qr-code" width="16" class="text-white/80" />
            </button>
            <a
              v-else
              :href="method.link"
              class="text-indigo-600 font-medium hover:text-indigo-500 transition-colors"
            >
              {{ method.value }}
            </a>
          </article>
        </div>
      </div>
    </section>

    <section class="py-20 border-y border-slate-200/60 bg-white">
      <div class="section-container grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 class="section-title mb-8">发送消息</h2>
          <form class="space-y-6" @submit.prevent="handleSubmit">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-medium text-slate-700 mb-2">姓名 *</label>
                <input v-model="form.name" required class="form-input w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:border-indigo-500 bg-white" placeholder="请输入您的姓名" />
              </div>
              <div>
                <label class="block text-sm font-medium text-slate-700 mb-2">公司</label>
                <input v-model="form.company" class="form-input w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:border-indigo-500 bg-white" placeholder="请输入公司名称" />
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-medium text-slate-700 mb-2">邮箱 *</label>
                <input v-model="form.email" type="email" required class="form-input w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:border-indigo-500 bg-white" placeholder="请输入邮箱地址" />
              </div>
              <div>
                <label class="block text-sm font-medium text-slate-700 mb-2">电话 *</label>
                <input v-model="form.phone" required class="form-input w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:border-indigo-500 bg-white" placeholder="请输入联系电话" />
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-slate-700 mb-2">服务类型</label>
              <select v-model="form.service" class="form-input w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:border-indigo-500 bg-white">
                <option value="">请选择服务类型</option>
                <option>网站建设</option>
                <option>小程序开发</option>
                <option>系统开发</option>
                <option>UI/UX设计</option>
                <option>技术咨询</option>
                <option>其他</option>
              </select>
            </div>

            <div>
              <label class="block text-sm font-medium text-slate-700 mb-2">项目描述 *</label>
              <textarea v-model="form.message" rows="5" required class="form-input w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:border-indigo-500 bg-white resize-none" placeholder="请详细描述您的项目需求..."></textarea>
            </div>

            <label class="flex items-center gap-3 text-sm text-slate-500">
              <input v-model="form.agree" type="checkbox" class="w-4 h-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" />
               我同意易诚科技的隐私政策和服务条款
            </label>

            <button
              type="submit"
              class="w-full px-8 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-500 hover:-translate-y-0.5 shadow-lg shadow-indigo-200 transition-all duration-200"
              :disabled="submitting"
            >
              {{ submitting ? '发送中...' : '发送消息' }}
            </button>
          </form>
        </div>

        <div class="space-y-8">
          <h2 class="section-title mb-8">公司地址</h2>
          <div class="map-container h-80 rounded-2xl relative flex items-center justify-center">
            <div class="relative z-10 text-center text-white">
              <Icon icon="lucide:map-pin" width="48" class="mx-auto mb-4" />
              <p class="text-lg font-medium">{{ contactInfo.address }}</p>
              <p class="text-sm opacity-80 mt-2">{{ contactInfo.workday }} · {{ contactInfo.weekend }}</p>
            </div>
          </div>

          <div class="glass rounded-2xl p-6 space-y-4">
            <div v-for="item in officeDirections" :key="item.title" class="flex items-start gap-3">
              <Icon :icon="item.icon" width="20" class="text-indigo-500 mt-1" />
              <div>
                <h4 class="font-medium text-slate-900">{{ item.title }}</h4>
                <p class="text-sm text-slate-500 mt-1">{{ item.detail }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20">
      <div class="section-container">
        <div class="text-center mb-16">
          <h2 class="section-title mb-4">常见问题</h2>
          <p class="text-slate-500 font-light">我们整理了一些客户经常咨询的问题</p>
        </div>

        <div class="max-w-3xl mx-auto space-y-4">
          <div v-for="(faq, index) in faqList" :key="faq.question" class="glass rounded-xl overflow-hidden">
            <button class="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-50 transition-colors" @click="activeFaq = activeFaq === index ? null : index">
              <span class="font-medium text-slate-900">{{ faq.question }}</span>
              <Icon icon="lucide:chevron-down" width="20" class="text-slate-400 transition-transform" :class="{ 'rotate-180': activeFaq === index }" />
            </button>
            <div v-if="activeFaq === index" class="px-6 pb-4 text-sm text-slate-500">
              {{ faq.answer }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <transition name="fade">
      <div v-if="showWechatModal" class="fixed inset-0 z-50 flex items-center justify-center px-4">
        <div class="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" @click="showWechatModal = false"></div>
        <div class="relative bg-white rounded-2xl p-6 shadow-2xl w-full max-w-sm text-center space-y-5">
          <div>
            <h3 class="text-xl font-semibold text-slate-900 mb-1">微信客服</h3>
            <p class="text-sm text-slate-500">长按识别或保存二维码添加客服</p>
          </div>
          <img :src="wechatQr" alt="微信客服二维码" class="w-full rounded-xl border border-slate-200 object-cover" />
          <div class="flex flex-col sm:flex-row gap-3">
            <button
              class="flex-1 px-4 py-2 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors"
              @click="showWechatModal = false"
            >
              关闭
            </button>
            <a
              :href="wechatQr"
              download="wechat-qr.jpg"
              class="flex-1 px-4 py-2 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-500 transition-colors flex items-center justify-center gap-2"
            >
              <Icon icon="lucide:download" width="16" />
              保存二维码
            </a>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
