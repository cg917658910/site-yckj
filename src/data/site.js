export const navigationLinks = [
  { label: '首页', to: '/' },
  { label: '服务', to: '/services' },
  { label: '案例', to: '/portfolio' },
  { label: '关于', to: '/about' },
  { label: '联系', to: '/contact' },
]

export const contactInfo = {
  phone: '17628058338',
  email: 'contact@yicheng-tech.com',
  kefu1:  'yx17628058338',
  address: '成都市龙泉驿区西河大道香槟城8栋一单元1703',
  workday: '周一至周五 9:00-18:00',
  weekend: '周六 10:00-16:00',
}

export const footerLinks = [
  {
    title: '服务项目',
    links: [
      { label: '微信小程序开发', to: '/services' },
      { label: '品牌官网建设', to: '/services' },
      { label: '电商系统开发', to: '/services' },
      { label: 'UI/UX 设计', to: '/services' },
    ],
  },
  {
    title: '关于我们',
    links: [
      { label: '公司简介', to: '/about' },
      { label: '成功案例', to: '/portfolio' },
      { label: '加入我们', to: '/about' },
      { label: '合作伙伴', to: '/about' },
    ],
  },
 /*  {
    title: '联系方式',
    links: [
      { label: 'contact@yicheng-tech.com', to: 'mailto:contact@yicheng-tech.com', isExternal: true },
      { label: '17628058338', to: 'tel:4001234567', isExternal: true },
      { label: '成都市龙泉驿区西河大道', to: '/contact' },
    ],
  }, */
]

export const homeHero = {
  badge: '诚信铸就品质',
  title: '构建卓越的',
  highlight: '数字化解决方案',
  description:
    '专注于高端网站建设、微信小程序开发与复杂电商系统架构。我们用代码诠释创意，为企业打造具竞争力的数字化产品。',
  primaryCta: { label: '启动项目', to: '/contact' },
  secondaryCta: { label: '查看案例', to: '/portfolio' },
}

export const homeServices = [
  {
    title: '官网设计与开发',
    description: '提供定制官网设计 ，响应式布局 ，高效CMS管理 ，助力在线表现。',
    icon: 'lucide:globe',
    accent: 'text-indigo-500 bg-indigo-50 border-indigo-100',
    bullets: ['品牌 CMS 管理', '多端适配'],
  },
  {
    title: '创意 H5 页面',
    description: '活动页、互动小游戏与营销闯关，驱动曝光与线索收集。',
    icon: 'lucide:sparkles',
    accent: 'text-rose-500 bg-rose-50 border-rose-100',
    bullets: ['社交裂变', '数据追踪'],
  },
  {
    title: '小程序开发',
    description: '覆盖微信、支付宝、抖音等生态，沉淀会员资产与交易能力。',
    icon: 'lucide:smartphone',
    accent: 'text-cyan-500 bg-cyan-50 border-cyan-100',
    bullets: ['支付集成', '云开发'],
  },
  {
    title: '公众号与 SVG 定制',
    description: '定制官方账号、自动化消息与高质量 SVG 视觉组件。',
    icon: 'lucide:message-circle',
    accent: 'text-amber-500 bg-amber-50 border-amber-100',
    bullets: ['智能回复', '品牌视觉'],
  },
  {
    title: 'APP 定制开发',
    description: '原生与跨平台 APP，覆盖服务预约、内容互动等场景。',
    icon: 'lucide:tablet-smartphone',
    accent: 'text-purple-500 bg-purple-50 border-purple-100',
    bullets: ['多端统一', '原生体验'],
  },
  {
    title: '手游开发',
    description: '打造沉浸式 2D/3D 手游，支持多人在线与游戏化玩法。',
    icon: 'lucide:gamepad-2',
    accent: 'text-orange-500 bg-orange-50 border-orange-100',
    bullets: ['跨平台引擎', '物理交互'],
  },
  {
    title: '大屏数据设计',
    description: '构建可视化驾驶舱与实时监控大屏，呈现关键业务指标。',
    icon: 'lucide:panel-right',
    accent: 'text-teal-500 bg-teal-50 border-teal-100',
    bullets: ['定制图表', '多源数据联动'],
  },
  {
    title: '管理系统（CMS/ERP/CRM）',
    description: '定制企业级管理系统，覆盖内容、供应链与客户关系。',
    icon: 'lucide:server',
    accent: 'text-slate-500 bg-slate-50 border-slate-100',
    bullets: ['流程自动化', '权限体系'],
  },
]

export const capabilityHighlights = [
  {
    title: '敏捷开发',
    description: '快速迭代、实时反馈，缩短上市周期。',
    icon: 'lucide:activity',
  },
  {
    title: '源码交付',
    description: '提供完整交付包，确保客户拥有完全控制权。',
    icon: 'lucide:terminal',
  },
]

export const workflowSteps = [
  { title: '需求分析', description: '深度沟通业务目标', icon: 'lucide:messages-square' },
  { title: '交互设计', description: '输出高保真原型', icon: 'lucide:pencil-ruler' },
  { title: '程序开发', description: '前后端并行开发', icon: 'lucide:code-2' },
  { title: '测试上线', description: '多轮测试与部署', icon: 'lucide:rocket' },
]

export const ctaBlock = {
  title: '准备好开始了吗？',
  description: '无论您需要小程序还是复杂的企业管理系统，我们都随时待命。',
  primary: '立即咨询报价',
  secondary: '联系客户经理',
}

export const serviceCategories = [
  {
    key: 'website',
    title: '官网设计与开发',
    description: '提供定制官网设计 ，响应式布局 ，高效CMS管理 ，助力在线表现。',
    icon: 'lucide:globe',
    accent: 'from-indigo-500 to-purple-600',
    bullets: ['响应式布局', '多语言支持', '智能 CMS'],
    tagline: '品牌资产沉淀',
    detailDescription: '重塑品牌官网、跨境门户与内容运营平台，兼顾视觉表现与 SEO 转化。',
    detailBullets: ['多语言 CMS 与权限管理', '3D / 动态交互体验', '全链路数据采集与分析'],
    image: 'service-website.png',
  },
  {
    key: 'creative',
    title: '创意 H5 页面',
    description: '互动营销页、活动小游戏与社交裂变方案。',
    icon: 'lucide:sparkles',
    accent: 'from-rose-500 to-pink-600',
    bullets: ['互动策划', '数据追踪', '社交玩法'],
    tagline: '互动营销引擎',
    detailDescription: '打造奖池、闯关、裂变等玩法，为品牌活动提供创意内容与数据闭环。',
    detailBullets: ['活动玩法模块化拼装', '实时互动监控与调优', '社交分享素材自动生成'],
    image: 'service-h5.png',
  },
  {
    key: 'miniprogram',
    title: '小程序开发',
    description: '覆盖微信/抖音/支付宝的服务、商城与会员体系。',
    icon: 'lucide:smartphone',
    accent: 'from-cyan-500 to-teal-600',
    bullets: ['支付集成', '云开发', '运营组件'],
    tagline: '私域交易增长',
    detailDescription: '为零售、教育、政务等场景搭建小程序矩阵与公众号智能运营方案。',
    detailBullets: ['会员成长 + 积分商城', '直播/预约/支付一体化', '智能推送与营销自动化'],
    image: 'service-miniprogram.png',
  },
  {
    key: 'wechat',
    title: '公众号SVG开发',
    description: '公众号智能运营、SVG 视觉与品牌资产管理。',
    icon: 'lucide:message-circle',
    accent: 'from-amber-500 to-orange-600',
    bullets: ['自动回复', '模板推送', '品牌视觉'],
    tagline: '内容分发阵地',
    detailDescription: '构建官方账号阵地、自动化消息与高级 SVG 可视化，提升品牌传播效率。',
    detailBullets: ['消息自动化与客服联动', 'SVG 地图/动效组件', '文章排版与素材库'],
    image: 'service-wechat.png',
  },
  {
    key: 'app',
    title: 'APP开发',
    description: '创造令人沉浸的2D和3D游戏 ，跨平台支持 ，提供多人在线游戏体验 ，吸引   广泛受众',
    icon: 'lucide:tablet-smartphone',
    accent: 'from-purple-500 to-violet-600',
    bullets: ['多端统一', '离线能力', '原生交互'],
    tagline: '移动体验驱动',
    detailDescription: '基于 Flutter/React Native/原生技术打造移动应用，保障体验与性能。',
    detailBullets: ['多端 UI 统一规范', '离线缓存与推送', '应用内埋点与灰度方案'],
    image: 'service-app.png',
  },
  {
    key: 'game',
    title: '手游开发',
    description: '2D/3D 手游、互动体验与游戏化解决方案。',
    icon: 'lucide:gamepad-2',
    accent: 'from-orange-500 to-red-500',
    bullets: ['多人联机', '物理引擎', '跨平台发布'],
    tagline: '娱乐互动塑造',
    detailDescription: '围绕 IP 和营销节点打造小游戏、互动内容和 gamification 体验。',
    detailBullets: ['多玩法模块搭建', '实时排行榜与社交互动', '跨平台适配与审核支持'],
    image: 'service-game.png',
  },
  {
    key: 'bigscreen',
    title: '大屏数据设计与开发',
    description: '运营驾驶舱、展厅大屏与实时数据监控。',
    icon: 'lucide:panel-right',
    accent: 'from-teal-500 to-emerald-600',
    bullets: ['定制图表', '三维场景', '多源联动'],
    tagline: '实时态势掌控',
    detailDescription: '连接 IoT/ERP/SCADA 数据，打造能源、制造等行业驾驶舱与遥控系统。',
    detailBullets: ['三维地理与场景建模', '多源数据融合与告警', '可视化组件库与模板'],
    image: 'service-bigscreen.png',
  },
  {
    key: 'system',
    title: '管理系统 (CMS/ERP/CRM)',
    description: '企业级业务系统，支撑内容、供应链与客户运营。',
    icon: 'lucide:server',
    accent: 'from-slate-500 to-slate-700',
    bullets: ['流程自动化', '权限体系', '数据合规'],
    tagline: '业务中台搭建',
    detailDescription: '从流程梳理到系统交付，搭建 CRM / ERP / OA / 业务运营中台。',
    detailBullets: ['低代码模块复用', '多角色流程与权限', '数据层与 API 统一治理'],
    image: 'service-system.png',
  },
]

const categoryMap = serviceCategories.reduce((acc, category) => {
  acc[category.key] = category
  return acc
}, {})

const caseImage = (filename) => new URL(`../assets/img/${filename}`, import.meta.url).href

export const serviceProcessSteps = [
  { step: '1', title: '业务梳理', description: '理解行业场景与增长目标。' },
  { step: '2', title: '方案共创', description: '输出原型、技术架构与排期。' },
  { step: '3', title: '迭代开发', description: '前后端并行，阶段性交付。' },
  { step: '4', title: '数据验收', description: '联调、压测与可视化复盘。' },
  { step: '5', title: '运营陪伴', description: '上线支持、监控预警与持续优化。' },
]

export const techStack = [
  { icon: 'logos:vue', label: 'Vue 3 + Vite' },
  { icon: 'logos:nuxt-icon', label: 'Nuxt / SSR' },
  { icon: 'logos:react', label: 'React / Next.js' },
  { icon: 'logos:nodejs-icon', label: 'Node.js / NestJS' },
  { icon: 'logos:python', label: 'Python / FastAPI' },
  { icon: 'logos:java', label: 'Java / Spring Boot' },
  { icon: 'logos:mysql', label: 'MySQL / TiDB' },
  { icon: 'logos:postgresql', label: 'PostgreSQL' },
  { icon: 'logos:mongodb-icon', label: 'MongoDB' },
  { icon: 'logos:tencent-wechat', label: '微信 & 抖音小程序' },
  { icon: 'logos:flutter', label: 'Flutter / React Native' },
  { icon: 'logos:echarts', label: 'ECharts / Three.js' },
]

export const caseFilters = [
  { label: '全部案例', value: 'all' },
  ...serviceCategories.map((category) => ({
    label: category.title,
    value: category.key,
  })),
]

const composeCase = (item) => {
  const category = categoryMap[item.category] ?? {}
  return {
    badge: category.title ?? item.badge ?? '',
    gradient: category.accent ?? item.gradient ?? 'from-slate-500 to-slate-700',
    icon: category.icon ?? item.icon ?? 'lucide:briefcase',
    ...item,
  }
}

export const caseStudies = [
  composeCase({
    slug: 'huatai-group',
    title: '华泰集团官网',
    description: '焕新集团品牌站，融合 3D 动效与多语言内容，实现全球化传播。',
    cover: caseImage('gw1.png'),
    category: 'website',
    tags: ['Vue3', 'Three.js', 'Headless CMS'],
    stats: { label: '2024年交付', value: '48% 询盘增长' },
    detail: {
      client: '华泰集团',
      industry: '综合集团',
      services: '官网定制',
      year: '2024年',
      background: '原有官网缺乏科技感，海外访问体验较差，需要重塑品牌形象。',
      challenge: '需兼顾视觉表现与全球性能，支持多语种内容运营。',
      solution: [
        '打造沉浸式 3D 视觉与交互动效，突出品牌科技力。',
        '基于 Vue3 + Vite + Tailwind 构建高性能站点。',
        '接入 Headless CMS 与全球节点加速，简化内容分发。',
      ],
      results: ['平均停留时长提升 62%', '国际访问速度提升 35%', '询盘转化率提升 48%'],
    },
  }),
  composeCase({
    slug: 'quantum-finance-portal',
    title: '乾元资本门户站',
    description: '以 3D 叙事与 ESG 数据墙，塑造国际投行的数字名片。',
    cover: caseImage('gw2.png'),
    category: 'website',
    tags: ['Nuxt3', 'SSR', '多语言'],
    stats: { label: '2024年交付', value: 'SEO 评分 95' },
    detail: {
      client: '乾元资本',
      industry: '金融投资',
      services: '官网设计与开发',
      year: '2024年',
      background: '品牌需要统一境内外站点体验并突出 ESG 成绩。',
      challenge: '需兼顾合规校审、极致性能与投资者关系专区搭建。',
      solution: [
        '基于 Nuxt3 + SSR 构建站点并接入全球 CDN 加速。',
        '打造 ESG 数据可视化墙，实时拉取披露指标与碳排放数据。',
        '搭建 IR、新闻、资料下载等模块的权限工作流。',
      ],
      results: ['SEO 综合评分 95', '海外访问速度提升 42%', '投资者留资率提升 55%'],
    },
  }),
  composeCase({
    slug: 'smart-screen-h5',
    title: '科技品牌创意 H5',
    description: '围绕新品发布打造沉浸式 H5，结合互动闯关与社交裂变玩法。',
    cover: caseImage('h5-1-1.png'),
    category: 'creative',
    tags: ['WebGL', '数据埋点', '社交裂变'],
    stats: { label: '2024年上线', value: '120万+ 互动' },
    detail: {
      client: 'ZMAX 科技',
      industry: '消费电子',
      services: '创意 H5',
      year: '2024年',
      background: '新品发布需要与年轻用户建立情感连接并形成社交流量。',
      challenge: '需在短周期内完成创意策划、视觉动效与数据监控。',
      solution: [
        '设计多场景闯关玩法 + 个性化海报生成，提升参与感。',
        '引入排行榜、拼团分享等裂变组件，放大社交传播。',
        '通过埋点与实时看板，辅助市场团队调优运营策略。',
      ],
      results: ['累计互动 120 万+', '社交分享率 68%', '活动期间线索增长 3.2 倍'],
    },
  }),
  composeCase({
    slug: 'immersive-brand-h5',
    title: '星曜品牌沉浸式 H5',
    description: '双场景剧情式交互，结合语音导航与实时打榜机制。',
    cover: caseImage('h5-1-2.png'),
    category: 'creative',
    tags: ['语音识别', 'WebGPU', '活动裂变'],
    stats: { label: '2023年上线', value: '4.6万+ 分享' },
    detail: {
      client: '星曜家居',
      industry: '家居新零售',
      services: '创意 H5',
      year: '2023年',
      background: '新品希望形成高端科技感记忆点并驱动种草转化。',
      challenge: '需要兼顾沉浸体验、音视频互动与营销数据收集。',
      solution: [
        '构建 2 条剧情线路与语音导航，增强沉浸感。',
        '接入实景 3D 模型 + WebGPU 光影渲染打造质感。',
        '配置实时排行榜、抽奖与优惠券自动发放。',
      ],
      results: ['活动 PV 560 万', '页面分享 4.6 万+', '高意向线索增长 2.8 倍'],
    },
  }),
  composeCase({
    slug: 'beauty-mini-program',
    title: '臻色美妆私域小程序',
    description: '集合直播、分销、会员体系的电商小程序，实现全链路私域运营。',
    cover: caseImage('xcx-1.png'),
    category: 'miniprogram',
    tags: ['微信小程序', '云开发', '私域电商'],
    stats: { label: '2023年交付', value: '10W+ 日活' },
    detail: {
      client: '臻色美妆',
      industry: '新零售',
      services: '小程序开发',
      year: '2023年',
      background: '品牌希望搭建私域阵地，沉淀会员与导购资产。',
      challenge: '直播、社群、分销等场景复杂，对运营效率要求高。',
      solution: [
        '搭建直播带货、实时互动及导购分佣模块。',
        '构建会员成长、积分商城与智能推荐体系。',
        '提供数据中台看板，实现精细化运营与复购提醒。',
      ],
      results: ['日活突破 10 万', '复购率提升 36%', '会员贡献 GMV 68%'],
    },
  }),
  composeCase({
    slug: 'wechat-automation-suite',
    title: '城市服务号自动化运营',
    description: '打造多账号矩阵，联动客服、消息推送与数据分析，沉淀用户资产。',
    cover: caseImage('gwrjsj.png'),
    category: 'wechat',
    tags: ['公众号', '自动化流程', '客服联动'],
    stats: { label: '2024年交付', value: '粉丝增长 65%' },
    detail: {
      client: '蓉城生活圈',
      industry: '智慧城市',
      services: '公众号运营系统',
      year: '2024年',
      background: '多个服务号同时运营，缺乏统一的内容管理与自动化触达能力。',
      challenge: '需要保障消息发送效率并确保客服知识库一致。',
      solution: [
        '搭建统一内容/素材中心与自动化推送策略。',
        '接入客服机器人，联动工单系统，实现秒级响应。',
        '构建图文编辑与 SVG 可视化组件库，提升视觉一致性。',
      ],
      results: ['粉丝增长 65%', '客服均速响应 30s', '运营人员效率提升 45%'],
    },
  }),
  composeCase({
    slug: 'city-service-app',
    title: '城市生活服务 APP',
    description: '以 Flutter 打造统一界面规范，覆盖生活缴费、预约、活动报名等场景。',
    cover: caseImage('app-1.png'),
    category: 'app',
    tags: ['Flutter', '多端适配', '推送'],
    stats: { label: '2023年交付', value: '月活 80 万' },
    detail: {
      client: '城服通',
      industry: '公共服务',
      services: 'APP 定制开发',
      year: '2023年',
      background: '原有 APP 体验割裂，无法快速响应新业务需求。',
      challenge: '需要统一多端 UI 规范，并保证离线、消息推送等体验。',
      solution: [
        '基于 Flutter 构建组件库，统一交互与视觉体验。',
        '实现离线缓存、消息推送与埋点体系，保障稳定性。',
        '引入灰度发布与 A/B 测试，快速验证新功能。',
      ],
      results: ['月活跃用户 80 万', '服务满意度 4.8/5', '需求响应速度提升 40%'],
    },
  }),
  composeCase({
    slug: 'smart-retail-app',
    title: '永辉智购零售 APP',
    description: '串联门店、仓配与会员体系的全渠道零售应用。',
    cover: caseImage('app-2.png'),
    category: 'app',
    tags: ['React Native', '离线缓存', '实时库存'],
    stats: { label: '2024年交付', value: '客单价 +32%' },
    detail: {
      client: '永辉智购',
      industry: '新零售',
      services: 'APP 定制开发',
      year: '2024年',
      background: '线下门店与线上运营割裂，缺少统一会员体验。',
      challenge: '需支撑即时零售、库存同步与高峰期性能。',
      solution: [
        '基于 React Native 构建跨端应用与可配置 UI 体系。',
        '接入仓配、ERP 与门店 POS，保证库存与价格实时一致。',
        '实现离线下单、到店自提与会员权益联动。',
      ],
      results: ['客单价提升 32%', '门店转化率提升 27%', '会员回购率 68%'],
    },
  }),
  composeCase({
    slug: 'brand-mini-game',
    title: '品牌互动小游戏矩阵',
    description: '打造轻量小游戏与 IP 活动，支持多人联机与排行榜玩法。',
    cover: caseImage('game-1.png'),
    category: 'game',
    tags: ['小游戏', '多人联机', '品牌营销'],
    stats: { label: '2024年交付', value: '互动转化 3.5 倍' },
    detail: {
      client: 'HYPE STUDIO',
      industry: '体育潮玩',
      services: '小游戏开发',
      year: '2024年',
      background: '品牌需要在大型赛事期间提升年轻用户互动率。',
      challenge: '需在短时间内交付多款玩法，并保障活动期间的并发与监控。',
      solution: [
        '构建可复用的小游戏引擎，支持关卡、排行榜、社交分享组件。',
        '部署多节点服务，保障峰值期间的并发体验。',
        '沉淀用户成长与积分兑换体系，延长玩法生命周期。',
      ],
      results: ['单场次互动 180 万+', '新增注册 42%', '线索转化效率提升 3.5 倍'],
    },
  }),
  composeCase({
    slug: 'sports-event-game',
    title: '国际赛事互动小游戏',
    description: '围绕赛事主视觉打造 3D 赛道，结合竞猜与积分商城。',
    cover: caseImage('game-2.png'),
    category: 'game',
    tags: ['3D 游戏', '实时榜单', '赛事营销'],
    stats: { label: '2023年交付', value: '用户留存 61%' },
    detail: {
      client: '亚洲运动会组委会',
      industry: '大型赛事',
      services: '小游戏开发',
      year: '2023年',
      background: '赛事希望在年轻群体中扩大曝光并沉淀会员。',
      challenge: '需保证赛事期间超高并发与题库实时更新。',
      solution: [
        '基于 Unity Tiny + WebGL 构建 3D 赛道互动体验。',
        '部署实时竞猜榜单与积分商城兑换机制。',
        '搭建监控告警与热更新体系，保障赛事期间稳定。',
      ],
      results: ['活动期间留存 61%', '累计互动 320 万+', '品牌好感度提升 38%'],
    },
  }),
  composeCase({
    slug: 'energy-visual-cockpit',
    title: '能源集团可视化驾驶舱',
    description: '搭建能源运营中心，实时呈现产线、能耗与安全指标。',
    cover: caseImage('dsj-1.png'),
    category: 'bigscreen',
    tags: ['ECharts', 'Three.js', 'Kubernetes'],
    stats: { label: '2024年交付', value: '90% 指标秒级更新' },
    detail: {
      client: '宏源能源',
      industry: '能源化工',
      services: '大屏可视化',
      year: '2024年',
      background: '需要实时掌握油气产线数据，支持指挥调度与安全预警。',
      challenge: '多地数据中心接入，需保证高并发与高可用。',
      solution: [
        '构建数据中台，统一采集 SCADA/IoT/ERP 指标。',
        '基于 ECharts + Three.js 呈现动态地理态势与指标联动。',
        '部署 Kubernetes + 灰度发布，保障 7x24 稳定性。',
      ],
      results: ['指标刷新延迟降至 5 秒', '安全预警提前量 +30%', '调度效率提升 40%'],
    },
  }),
  composeCase({
    slug: 'smart-manufacture-cockpit',
    title: '智造园区运行驾驶舱',
    description: '整合设备、安防与能耗数据，构建生产态势中心。',
    cover: caseImage('dsj-2.png'),
    category: 'bigscreen',
    tags: ['IoT', '时序数据库', '可视化'],
    stats: { label: '2023年交付', value: '预警提前 20min' },
    detail: {
      client: '协同智造园区',
      industry: '智能制造',
      services: '大屏可视化',
      year: '2023年',
      background: '现场系统分散，管理层缺少统一的态势感知工具。',
      challenge: '需将数十种协议设备汇聚，并实现毫秒级告警。',
      solution: [
        '构建 IoT 网关 + 时序数据库，统一汇聚多源数据。',
        '打造可拖拽的大屏组件库，支持生产、环保、安防多视角。',
        '引入 AI 预测模型，提前给出设备维护提醒。',
      ],
      results: ['预警提前量 20 分钟', '异常定位效率 +70%', '能源成本下降 15%'],
    },
  }),
  composeCase({
    slug: 'smart-property',
    title: '智慧物业中枢系统',
    description: '统一 IoT 设备、工单、能耗与客服流程，打造一体化物业驾驶舱。',
    cover: caseImage('kyds-1.png'),
    category: 'system',
    tags: ['Vue3', 'Django', 'IoT'],
    stats: { label: '2023年交付', value: '50+ 项目落地' },
    detail: {
      client: '锦城物业',
      industry: '物业管理',
      services: '系统开发',
      year: '2023年',
      background: '需要集中管理全国楼盘，实现远程运维与安全预警。',
      challenge: '多协议设备接入、权限复杂、数据安全要求高。',
      solution: [
        '搭建 IoT 网关与实时监控大屏，统一多源数据。',
        '构建多级权限、审批与工单自动分派流程。',
        '接入机器人通知与短信/邮件预警，缩短响应时间。',
      ],
      results: ['物业效率提升 55%', '故障响应缩短 40%', '业主满意度提升 22%'],
    },
  }),
  composeCase({
    slug: 'supply-chain-system',
    title: '新锐供应链协同平台',
    description: '串联采购、仓配、结算的定制化供应链管理系统。',
    cover: caseImage('kyds-2.png'),
    category: 'system',
    tags: ['NestJS', 'GraphQL', '多组织'],
    stats: { label: '2024年交付', value: '履约效率 +48%' },
    detail: {
      client: '云链科技',
      industry: '供应链协同',
      services: '系统开发',
      year: '2024年',
      background: '多品牌、多供应商协作复杂，信息同步滞后。',
      challenge: '需实现多组织权限、流程可配置与实时对账。',
      solution: [
        '构建基于 NestJS + GraphQL 的统一服务编排层。',
        '建立流程引擎，支持采购、质检、结算自由编排。',
        '接入 IoT 仓储设备，实时监控库存与运输状态。',
      ],
      results: ['履约效率提升 48%', '库存周转天数下降 3.2 天', '财务对账效率提升 60%'],
    },
  }),
]

export const aboutStats = [
  { label: '行业经验', value: '8年', accent: 'text-indigo-600' },
  { label: '专业团队', value: '50+', accent: 'text-cyan-600' },
  { label: '成功项目', value: '200+', accent: 'text-rose-600' },
  { label: '客户满意度', value: '98%', accent: 'text-teal-600' },
]

export const companyStory = [
  '易诚无忧成立于 2015 年，由几位志同道合的技术专家共同创立。',
  '从最初的小团队发展到如今 50 多人的专业公司，我们始终坚持以客户为中心，以技术为驱动。',
  '每一个项目都是对品质的承诺，每一次合作都是对信任的珍惜。',
]

export const companyValues = [
  { title: '诚信为本', description: '以诚待人，以信立业。', icon: 'lucide:hand-heart', gradient: 'from-indigo-500 to-purple-600' },
  { title: '追求卓越', description: '精益求精，持续创新。', icon: 'lucide:sparkles', gradient: 'from-cyan-500 to-teal-600' },
  { title: '团队协作', description: '同心协力，互相成就。', icon: 'lucide:users', gradient: 'from-emerald-500 to-green-600' },
  { title: '创新思维', description: '拥抱变化，勇于探索。', icon: 'lucide:lightbulb', gradient: 'from-rose-500 to-pink-600' },
]

export const teamMembers = [
  { name: '杨鑫', role: '创始人 & CEO', bio: '10 年互联网行业经验，曾任多家科技公司技术总监。', badge: 'CEO', gradient: 'from-indigo-500 to-purple-600' },
  { name: '蔡佳君', role: '技术总监 & CTO', bio: '全栈技术专家，精通前后端开发与架构设计。', badge: 'CTO', gradient: 'from-cyan-500 to-teal-600' },
  { name: '王芳', role: '设计总监', bio: '资深 UI/UX 设计师，作品多次获得国际设计大奖。', badge: '设计总监', gradient: 'from-emerald-500 to-green-600' },
  { name: '刘强', role: '运营总监', bio: '8 年项目管理经验，擅长团队协作与客户沟通。', badge: '运营总监', gradient: 'from-rose-500 to-pink-600' },
]

export const timeline = [
  { year: '2015年', title: '公司成立', description: '在北京成立，开始专注网站建设服务。' },
  { year: '2017年', title: '业务扩展', description: '团队扩展至 20 人，提供移动应用开发服务。' },
  { year: '2019年', title: '技术升级', description: '引入前沿技术栈，完成 100+ 项目交付。' },
  { year: '2021年', title: '规模扩大', description: '团队达到 50 人，成为行业知名技术服务商。' },
  { year: '2023年', title: '创新发展', description: '推出 AI+ 解决方案，服务客户超过 150 家。' },
]

export const contactMethods = [
  {
    title: '电话咨询',
    description: '工作日 9:00-18:00',
    value: '17628058338',
    icon: 'lucide:phone-call',
    gradient: 'from-indigo-500 to-purple-600',
    link: 'tel:4001234567',
  },
  {
    title: '微信客服1',
    description: '扫码添加客服',
    value: '微信二维码',
    icon: 'lucide:message-circle',
    gradient: 'from-emerald-500 to-green-600',
    link: '/contact',
    qr: 'wx.jpg',
  },
  {
    title: '微信客服2',
    description: '扫码添加客服',
    value: '微信二维码',
    icon: 'lucide:message-circle',
    gradient: 'from-emerald-500 to-green-600',
    link: '/contact',
    qr: 'wx2.jpg',
  },
]

export const officeDirections = [
  { icon: 'lucide:map-pin', title: '公司地址', detail: contactInfo.address },
  { icon: 'lucide:clock', title: '工作时间', detail: `${contactInfo.workday} · ${contactInfo.weekend}` },
  { icon: 'lucide:navigation', title: '交通路线', detail: '地铁 2 号线龙泉驿站 B 口；公交 858/868 西河大道站。' },
]

export const faqList = [
  {
    question: '项目开发周期一般需要多长时间？',
    answer: '项目周期依据复杂度而定：简单网站 2-4 周，中型项目 1-2 个月，复杂系统 2-6 个月。',
  },
  {
    question: '如何保证项目质量？',
    answer: '我们采用严格的质量控制流程：代码审查、多轮测试、性能优化、安全检测。',
  },
  {
    question: '项目费用如何计算？',
    answer: '费用根据功能复杂度、设计要求、开发周期等因素综合评估，报价透明。',
  },
  {
    question: '项目完成后提供哪些服务？',
    answer: '提供源码交付、技术文档、部署指导、1 年免费维护以及长期升级。',
  },
  {
    question: '是否支持项目定制开发？',
    answer: '我们专注定制开发，根据客户具体需求量身打造解决方案。',
  },
]
