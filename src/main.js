import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
/* iconfont */ 
import '@/assets/iconfont/iconfont.js'
import '@/assets/iconfont/iconfont.css';
/* reset.css */ 
import '@/assets/css/reset.css';
/* index.css */ 
import '@/assets/css/index.css';
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
