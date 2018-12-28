import Vue from 'vue';
import Router from 'vue-router';
import Buefy from 'buefy';
import Home from './views/Home.vue';
import SignIn from './views/auth/SignIn.vue';
import SignUp from './views/auth/SignUp.vue';

Vue.use(Buefy);
Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/sign-in',
      name: 'signIn',
      component: SignIn,
    },
    {
      path: '/sign-up',
      name: 'signUp',
      component: SignUp,
    },
  ],
});
