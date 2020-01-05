import Vue from 'vue';
import Router from 'vue-router';

import Index from '@/components/index';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
  ],
});

export default router;
