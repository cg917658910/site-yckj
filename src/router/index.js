import { createRouter, createWebHistory } from 'vue-router'

const HomeView = () => import('../pages/HomeView.vue')
const ServicesView = () => import('../pages/ServicesView.vue')
const PortfolioView = () => import('../pages/PortfolioView.vue')
const PortfolioDetailView = () => import('../pages/PortfolioDetailView.vue')
const AboutView = () => import('../pages/AboutView.vue')
const ContactView = () => import('../pages/ContactView.vue')

const TITLE_SUFFIX = '易诚科技 · 数字化解决方案伙伴'

const routes = [
  { path: '/', component: HomeView, meta: { title: `首页 | ${TITLE_SUFFIX}` } },
  { path: '/services', component: ServicesView, meta: { title: `服务 | ${TITLE_SUFFIX}` } },
  { path: '/portfolio', component: PortfolioView, meta: { title: `案例 | ${TITLE_SUFFIX}` } },
  {
    path: '/portfolio/:slug',
    component: PortfolioDetailView,
    meta: { title: `案例详情 | ${TITLE_SUFFIX}` },
  },
  { path: '/about', component: AboutView, meta: { title: `关于我们 | ${TITLE_SUFFIX}` } },
  { path: '/contact', component: ContactView, meta: { title: `联系我们 | ${TITLE_SUFFIX}` } },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

router.afterEach((to) => {
  document.title = to.meta?.title ?? TITLE_SUFFIX
})

export default router
