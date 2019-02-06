import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios);

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router: router, // この行を追加
  components: { App },
  template: '<app/>'
})
