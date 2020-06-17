#!/bin/bash
git checkout --orphan gh-pages
mv .vue.config.js vue.config.js
yarn build
mv vue.config.js .vue.config.js
git --work-tree dist add --all
git --work-tree dist commit -m "Deploy Vue app"
git push --set-upstream origin gh-pages
git push origin HEAD:gh-pages --force
rm -rf dist
git checkout -f master
git branch -D gh-pages