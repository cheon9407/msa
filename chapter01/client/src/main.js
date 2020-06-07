import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';

import dotenv from 'dotenv'
dotenv.config()

Vue.config.productionTip = false
Vue.use(ElementUI);

Vue.prototype.$axios = axios.create({
  baseUrl : `${process.env.VUE_APP_API}`,
  withCredentials: true,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
