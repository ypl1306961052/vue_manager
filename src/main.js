// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './plugins/element.js'
import './assets/css/global.css'
import './assets/font/iconfont.css'

import axios from 'axios'

axios.interceptors.request.use(config => {
  console.log(config)
  if (config.url === '/user/login') {
    return config
  }
  config.headers.token = window.sessionStorage.getItem('token')
  console.log(config)
  return config
})
axios.defaults.baseURL = 'http://127.0.0.1:8081/'
Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
