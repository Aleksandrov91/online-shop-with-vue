import Vue from 'vue';
import VeeValidate from 'vee-validate';

import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import App from './App';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(VeeValidate);
Vue.use(BootstrapVue);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
});
