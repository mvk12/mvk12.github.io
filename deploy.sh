#!/bin/bash
git checkout --orphan master
mv .vue.config.js vue.config.js
yarn build
mv vue.config.js .vue.config.js
git --work-tree dist add --all
git --work-tree dist commit -m "Deploy Vue app"
git push --set-upstream origin master
git push origin HEAD:master --force
rm -rf dist
git checkout -f vue-code
git branch -D master