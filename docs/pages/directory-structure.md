---
title: 目录结构
author: Gavin
date: '2022-01-10'
---

```code
├── mock                              // mock 数据
├── src
│   ├── api                           // 请求后台 api
│   ├── assets                        // 放置一些静态资源
│   │     │── styles                  // 样式资源
│   │     │    └── element-plus.scss  // 覆盖 element-plus 原有样式
│   │     │    └── element-theme.scss // 主题颜色
│   │     │    └── index.scss         // 全局样式
│   │     │    └── var.scss           // css 变量，在 vite.config 导入
│   │     │── imgs                    // 图片资源
│   │     │── typings                 // 一些 ts 文件
│   │
│   ├── components                    // 全局的公共组件，main.ts 注入
│   ├── directives                    // 指令
│   ├── http                          // axios 封装请求，统一处理接口请求
│   ├── layout                        // 主题布局
│   ├── router                        // 路由
│   │     │── modules                 // 路由模块 （store 接口相同）
│   │     │── index.ts                // 路由守卫
│   │     │── routes.ts               // 自动导入所有路由
│   ├── store                         // 状态管理 vuex 相关配置
│   ├── utils                         // 工具方法目录
│   │     └── pageType                // 导入、导出、权限、搜索的关键词(type)
│   │     └── validation.ts           // 正则校验
│   │     └── elValidation.ts         // element from 表单校验方法封装
│   │     └── menus.ts                // 菜单路由
│   │     └── utils.ts                // 工具方法
│   ├── views                         // 存在vue页面组件的文件夹
│   │     │── base                    // 功能模块
│   │     │    │── role    	        	// 页面模块
│   │     │    │     └── role.vue
│   │     │    │     └── roleModule.ts
│   │     │    │     └── add.vue
```