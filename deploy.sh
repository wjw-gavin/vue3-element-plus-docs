#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'Initial commit'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/wjw-gavin/vue3-element-plus-docs.git main:gh-pages