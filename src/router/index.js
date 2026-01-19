import { createRouter, createWebHashHistory } from 'vue-router'

const HomeView = () => import('../pages/HomeView.vue')
const ServicesView = () => import('../pages/ServicesView.vue')
const PortfolioView = () => import('../pages/PortfolioView.vue')
const PortfolioDetailView = () => import('../pages/PortfolioDetailView.vue')
const AboutView = () => import('../pages/AboutView.vue')
const ContactView = () => import('../pages/ContactView.vue')

const TITLE_SUFFIX = '易诚无忧 · 数字化解决方案伙伴'

const routes = [
  { path: '/', component: HomeView, meta: { title: `首页 | ${TITLE_SUFFIX}` } },
  { path: '/services', component: ServicesView, meta: { title: `服务 | ${TITLE_SUFFIX}` } },
  { path: '/portfolio', component: PortfolioView, meta: { title: `案例 | ${TITLE_SUFFIX}` } },
  {
    path: '/portfolio/:slug',
    component: PortfolioDetailView,
    props: true,
    meta: { title: `案例详情 | ${TITLE_SUFFIX}` },
  },
  { path: '/about', component: AboutView, meta: { title: `关于我们 | ${TITLE_SUFFIX}` } },
  { path: '/contact', component: ContactView, meta: { title: `联系我们 | ${TITLE_SUFFIX}` } },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // 返回上次位置（浏览器回退）
    if (savedPosition) return savedPosition

    // 如果有 hash，比如 /contact#contact-methods
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth', // 平滑滚动，可选
      }
    }

    // 默认滚到顶部
    return { left: 0, top: 0 }
  },
})

router.afterEach((to) => {
  document.title = to.meta?.title ?? TITLE_SUFFIX
})

export default router
