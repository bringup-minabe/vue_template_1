import Vue from 'vue';
import VueRouter from 'vue-router';

import Top from './components/Top.vue'
import About from './components/About.vue'
import Api from './components/Api.vue'

Vue.use(VueRouter);

var router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Top
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/api',
      component: Api
    },
  ]
});

export default router;
