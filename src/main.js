import Vue from 'vue'
import App from './App.vue'
import router from './router.js'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router: router, // この行を追加
  components: { App },
  template: '<app/>'
})
