export const navigationLinks = [
  { label: '首页', to: '/' },
  { label: '服务', to: '/services' },
  { label: '案例', to: '/portfolio' },
  { label: '关于', to: '/about' },
  { label: '联系', to: '/contact' },
]

export const contactInfo = {
  phone: '400-123-4567',
  email: 'contact@yicheng-tech.com',
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
      { label: '400-123-4567', to: 'tel:4001234567', isExternal: true },
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
    title: '小程序开发',
    description: '深度适配微信、抖音及支付宝生态，打造原生级体验。',
    icon: 'lucide:app-window',
    accent: 'text-indigo-500 bg-indigo-50 border-indigo-100',
    bullets: ['跨平台兼容', '高性能渲染'],
  },
  {
    title: '高端网站定制',
    description: '从品牌视觉出发，运用WebGL等前沿技术打造视觉冲击力。',
    icon: 'lucide:monitor-smartphone',
    accent: 'text-teal-500 bg-teal-50 border-teal-100',
    bullets: ['响应式设计', 'SEO 优化架构'],
  },
  {
    title: '商城与系统开发',
    description: '覆盖订单、支付、会员、后台等全链路业务场景。',
    icon: 'lucide:shopping-bag',
    accent: 'text-rose-500 bg-rose-50 border-rose-100',
    bullets: ['高并发支持', '银行级安全'],
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
    title: '网站建设',
    description: '响应式设计、SEO 优化、高性能架构',
    icon: 'lucide:globe',
    accent: 'from-indigo-500 to-purple-600',
    bullets: ['企业官网', '电商平台', '营销网站'],
  },
  {
    title: '小程序开发',
    description: '微信、支付宝、抖音多平台覆盖',
    icon: 'lucide:smartphone',
    accent: 'from-cyan-500 to-teal-600',
    bullets: ['商城小程序', '工具类应用', '营销活动页'],
  },
  {
    title: '系统开发',
    description: '定制化管理系统与业务流程优化',
    icon: 'lucide:server',
    accent: 'from-emerald-500 to-green-600',
    bullets: ['ERP 系统', 'CRM 系统', '数据平台'],
  },
  {
    title: 'UI/UX 设计',
    description: '以用户为中心的体验与视觉方案',
    icon: 'lucide:palette',
    accent: 'from-rose-500 to-pink-600',
    bullets: ['原型设计', '视觉设计', '交互设计'],
  },
]

export const serviceTabs = {
  web: {
    title: '专业网站开发服务',
    description: '提供从需求分析到上线部署的全流程服务，确保满足业务目标。',
    points: [
      { title: '前端开发', detail: 'Vue、React 等现代框架，响应式设计。' },
      { title: '后端开发', detail: 'Node.js、Python、Java，RESTful API 设计。' },
      { title: '数据库设计', detail: 'MySQL、PostgreSQL、MongoDB 优化方案。' },
    ],
  },
  app: {
    title: '移动应用开发',
    description: '涵盖小程序、APP 与 H5，多端统一体验。',
    points: [
      { title: '微信小程序', detail: '原生与云开发，兼容多端生态。' },
      { title: '移动 APP', detail: 'React Native、Flutter 跨平台开发。' },
    ],
  },
  design: {
    title: 'UI/UX 设计服务',
    description: '以用户为中心的设计体系，兼顾品牌与体验。',
    points: [
      { title: '界面设计', detail: '视觉系统、图标、品牌资产。' },
      { title: '交互设计', detail: '原型、用户流程、动效设计。' },
    ],
  },
  consulting: {
    title: '技术咨询',
    description: '为企业提供完整的技术咨询和培训服务。',
    points: [
      { title: '架构设计', detail: '技术选型、性能优化与安全方案。' },
      { title: '技术培训', detail: '团队培训、最佳实践分享。' },
    ],
  },
}

export const serviceProcessSteps = [
  { step: '1', title: '需求沟通', description: '深入理解业务需求。' },
  { step: '2', title: '方案设计', description: '制定技术与交互方案。' },
  { step: '3', title: '开发实施', description: '敏捷开发快速迭代。' },
  { step: '4', title: '测试验收', description: '多轮测试确保质量。' },
  { step: '5', title: '上线维护', description: '部署上线并持续优化。' },
]

export const techStack = [
  { icon: 'logos:react', label: 'React' },
  { icon: 'logos:vue', label: 'Vue.js' },
  { icon: 'logos:angular-icon', label: 'Angular' },
  { icon: 'logos:nodejs-icon', label: 'Node.js' },
  { icon: 'logos:python', label: 'Python' },
  { icon: 'logos:java', label: 'Java' },
  { icon: 'logos:mysql', label: 'MySQL' },
  { icon: 'logos:postgresql', label: 'PostgreSQL' },
  { icon: 'logos:mongodb-icon', label: 'MongoDB' },
  { icon: 'logos:wechat', label: '微信小程序' },
  { icon: 'logos:flutter', label: 'Flutter' },
  { icon: 'logos:react', label: 'React Native' },
]

export const caseFilters = [
  { label: '全部案例', value: 'all' },
  { label: '网站建设', value: 'website' },
  { label: '小程序开发', value: 'miniprogram' },
  { label: '电商系统', value: 'ecommerce' },
  { label: '管理系统', value: 'system' },
]

export const caseStudies = [
  {
    slug: 'huatai-group',
    title: '华泰集团官网',
    description: '采用现代化设计语言，融合 3D 视觉效果，打造具有国际影响力的企业官网。',
    category: 'website',
    badge: '网站建设',
    gradient: 'from-indigo-500 to-purple-600',
    icon: 'lucide:monitor',
    tags: ['React', 'Three.js', 'Node.js'],
    stats: { label: '2023年完成', value: '12.5K 访问' },
    detail: {
      client: '华泰集团',
      industry: '综合集团',
      services: '网站建设',
      year: '2023年',
      background:
        '原有官网已无法满足品牌展示与国际化业务需求，需要一次全面升级以凸显创新实力。',
      challenge:
        '在展现企业底蕴的同时强化科技感，并确保全球访问性能稳定。',
      solution: [
        '采用极简主义视觉语言，引入 Three.js 驱动的 3D 场景。',
        '基于 Vue3 + Vite + Tailwind 构建前端体系，保障高性能。',
        '配备国际化内容管理与多节点加速，确保全球可用性。',
      ],
      results: [
        '平均停留时长提升 62%',
        '海外访问速度提升 35%',
        '品牌询盘转化率提升 48%'
      ],
    },
  },
  {
    slug: 'beauty-mini-program',
    title: '美妆商城小程序',
    description: '集成直播带货、社交分享、会员积分等功能，日活用户突破 10 万。',
    category: 'miniprogram',
    badge: '小程序',
    gradient: 'from-cyan-500 to-teal-600',
    icon: 'lucide:smartphone',
    tags: ['微信小程序', '云开发', '直播'],
    stats: { label: '2023年完成', value: '10W+ 用户' },
    detail: {
      client: '臻色美妆',
      industry: '新零售',
      services: '小程序开发',
      year: '2023年',
      background: '品牌希望通过小程序打通私域，实现多渠道转化。',
      challenge: '需要兼顾直播、分销、会员、库存等复杂场景。',
      solution: [
        '搭建直播带货与实时互动模块。',
        '整合分销佣金、会员成长体系。',
        '引入数据看板帮助运营决策。',
      ],
      results: ['日活破 10 万', '复购率提升 36%', '会员贡献 GMV 68%'],
    },
  },
  {
    slug: 'b2b-platform',
    title: 'B2B 批发采购平台',
    description: '支持多级分销、供应链管理、金融支付等复杂业务场景。',
    category: 'ecommerce',
    badge: '电商系统',
    gradient: 'from-rose-500 to-pink-600',
    icon: 'lucide:shopping-cart',
    tags: ['Java', 'Spring Boot', 'MySQL'],
    stats: { label: '2022年完成', value: '5000W+ 交易额' },
    detail: {
      client: '汇联供应链',
      industry: '制造业',
      services: '电商系统',
      year: '2022年',
      background: '传统采购流程繁琐，需要数字化提效。',
      challenge: '多角色、多层级、多币种结算需求复杂。',
      solution: [
        '搭建多租户 B2B 平台，支持个性化价格体系。',
        '打通仓储、物流、金融等第三方服务。',
        '引入风控模块保障大额交易安全。',
      ],
      results: ['上线半年交易额突破 5000 万', '供应链周转效率提升 41%'],
    },
  },
  {
    slug: 'smart-property',
    title: '智慧物业管理系统',
    description: '集成 IoT 设备监控、智能门禁、报事报修等功能，提升物业管理效率。',
    category: 'system',
    badge: '管理系统',
    gradient: 'from-emerald-500 to-green-600',
    icon: 'lucide:server',
    tags: ['Vue.js', 'Django', 'PostgreSQL'],
    stats: { label: '2023年完成', value: '50+ 小区' },
    detail: {
      client: '锦城物业',
      industry: '物业管理',
      services: '系统开发',
      year: '2023年',
      background: '需要统一管理全国小区，实现远程监控。',
      challenge: '多硬件协议接入、权限复杂、数据安全要求高。',
      solution: [
        '建设 IoT 网关与实时监控大屏。',
        '搭建多级权限与审批流程。',
        '引入报修派单、能耗分析等模块。',
      ],
      results: ['物业效率提升 55%', '设备故障响应时间缩短 40%'],
    },
  },
  {
    slug: 'edu-platform',
    title: '在线教育平台',
    description: '支持直播授课、录播回放、作业批改等完整教学流程。',
    category: 'website',
    badge: '网站建设',
    gradient: 'from-amber-500 to-orange-600',
    icon: 'lucide:globe',
    tags: ['Next.js', 'WebRTC', 'MongoDB'],
    stats: { label: '2023年完成', value: '5000+ 学员' },
    detail: {
      client: '未来课堂',
      industry: '教育',
      services: '网站建设',
      year: '2023年',
      background: '希望构建自有品牌课堂，支持大班与小班教学。',
      challenge: '直播稳定性与互动体验需兼顾。',
      solution: [
        '使用 WebRTC 构建低延迟直播。',
        '提供题库、作业、考试等教学功能。',
        '对接支付与优惠体系，支持营销裂变。',
      ],
      results: ['上线三个月注册学员 5000+', '续班率达到 72%'],
    },
  },
  {
    slug: 'restaurant-ordering',
    title: '餐饮点餐系统',
    description: '支持扫码点餐、桌边支付、厨房打印等全流程数字化管理。',
    category: 'miniprogram',
    badge: '小程序',
    gradient: 'from-violet-500 to-purple-600',
    icon: 'lucide:qr-code',
    tags: ['支付宝小程序', 'Flutter', 'Redis'],
    stats: { label: '2022年完成', value: '200+ 门店' },
    detail: {
      client: '味道联盟',
      industry: '餐饮连锁',
      services: '小程序开发',
      year: '2022年',
      background: '门店多、客流大，需要高效点餐系统。',
      challenge: '复杂的桌台管理与高峰期并发。',
      solution: [
        '构建桌边扫码点餐 + 厨房打印联动。',
        '对接第三方外卖与会员系统。',
        '提供实时数据看板辅助运营。',
      ],
      results: ['翻台率提升 28%', '人力成本下降 18%'],
    },
  },
]

export const aboutStats = [
  { label: '行业经验', value: '8年', accent: 'text-indigo-600' },
  { label: '专业团队', value: '50+', accent: 'text-cyan-600' },
  { label: '成功项目', value: '200+', accent: 'text-rose-600' },
  { label: '客户满意度', value: '98%', accent: 'text-teal-600' },
]

export const companyStory = [
  '易诚科技成立于 2015 年，由几位志同道合的技术专家共同创立。',
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
  { name: '张明', role: '创始人 & CEO', bio: '10 年互联网行业经验，曾任多家科技公司技术总监。', badge: 'CEO', gradient: 'from-indigo-500 to-purple-600' },
  { name: '李华', role: '技术总监 & CTO', bio: '全栈技术专家，精通前后端开发与架构设计。', badge: 'CTO', gradient: 'from-cyan-500 to-teal-600' },
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
    value: '400-123-4567',
    icon: 'lucide:phone-call',
    gradient: 'from-indigo-500 to-purple-600',
    link: 'tel:4001234567',
  },
  {
    title: '邮件联系',
    description: '24 小时内回复',
    value: 'contact@yicheng-tech.com',
    icon: 'lucide:mail',
    gradient: 'from-cyan-500 to-teal-600',
    link: 'mailto:contact@yicheng-tech.com',
  },
  {
    title: '微信客服',
    description: '扫码添加客服',
    value: '微信二维码',
    icon: 'lucide:message-circle',
    gradient: 'from-emerald-500 to-green-600',
    link: '/contact',
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
