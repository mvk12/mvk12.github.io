import Vue from 'vue'
import App from './App.vue'
import router from './router'

import "./scss/app.scss"

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

if(process.env.NODE_ENV != 'production') {
  console.group("%cENVIRONMENT VARIABLES", 'padding: 3px; border-left: 2px solid #508ef2; color: #508ef2;')
  console.dir(process.env)
  console.groupEnd();
}