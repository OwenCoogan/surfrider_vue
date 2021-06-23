import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuex from 'vuex'



import '../src/assets/css/app.css'

Vue.config.productionTip = false
window.Event = new Vue();
new Vue({
  router,
  Vuex,
  store,
  render: h => h(App),
}).$mount('#app')
