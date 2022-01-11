module.exports = {
  base: '/vue3-element-plus-docs/',
  title: 'vu3+element-plus',
  description: 'vue3-vite-ts-element-plus 使用文档',
  theme: 'reco',
  head: [
    [
      'script',
      {},
      `
        var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?ef7fc6e2868b1916ca0d22e705649778";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();
      `
    ]
  ],
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      {
        text: '了解更多',
        items: [
          { text: 'vue3 中文文档', link: 'https://v3.cn.vuejs.org' },
          { text: 'VuePress 中文文档', link: 'https://www.vuepress.cn/guide/' }
        ]
      },
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
