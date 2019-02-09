import Vue from 'vue';
import Vuex from 'vuex';
import Router from 'vue-router';
import Home from '@/pages/Home';
import Cart from '@/pages/Cart';
import Index from '@/pages/admin/index';
import Products from '@/pages/admin/products';
import New from '@/pages/admin/new';
import Edit from '@/pages/admin/edit';
import Details from '@/pages/details';

Vue.use(Vuex);
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart,
    },
    {
      path: '/details/:id',
      name: 'Details',
      component: Details,
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Index,
      children: [
        {
          path: 'new',
          name: 'New',
          component: New,
        },
        {
          path: '',
          name: 'Products',
          component: Products,
        },
        {
          path: 'edit/:id',
          name: 'Edit',
          component: Edit,
        },
      ],
    },
  ],
});
