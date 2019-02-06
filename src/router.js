import Vue from 'vue';
import VueRouter from 'vue-router';

import Top from './components/Top.vue'
import About from './components/About.vue'

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
  ]
});

export default router;
