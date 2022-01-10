module.exports = {
  base: '/',
  title: 'vu3+element-plus',
  description: 'vue3-vite-ts-element-plus 使用文档',
  theme: 'reco',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      {
        text: 'Github',
        link: 'https://github.com/wjw-gavin/vue3-vite-ts-element-plus'
      }
    ],
    subSidebar: 'auto',
    smoothScroll: true,
    noFoundPageByTencent: false,
    sidebar: {
      '/pages': [
        {
          title: '指南',
          collapsable: false,
          children: [
            { title: '项目介绍', path: '/pages/directory-structure' },
            { title: '快速上手', path: '/pages/start' }
          ]
        }
      ]
    }
  },
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  }
}
