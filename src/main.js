import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import loadBaseComponents from './base';
import './filters';
import './registerServiceWorker';

loadBaseComponents();
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
