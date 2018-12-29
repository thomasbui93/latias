import Vue from 'vue';
import Router from 'vue-router';
import Buefy from 'buefy';
import Home from './views/Home.vue';
import SignIn from './views/auth/SignIn.vue';
import SignUp from './views/auth/SignUp.vue';
import NotFound from './views/NotFound.vue';
import { isAuthenticated, unAuthorizedPaths } from './helpers/auth/route';

Vue.use(Buefy);
Vue.use(Router);

const router = new Router({
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
    {
      path: '/404',
      name: 'notFound',
      component: NotFound,
    },
    {
      path: '*',
      redirect: '/404',
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (unAuthorizedPaths.indexOf(to.name) > -1) {
    if (isAuthenticated()) {
      next('/');
    } else {
      next();
    }
  } else if (isAuthenticated()) {
    next();
  } else {
    next('/sign-in');
  }
});

export default router;
