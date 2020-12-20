import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store/index';
import Login from '../components/auth/TheLogin.vue';
import HelloWorld from '../components/HelloWorld.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      public: true

  }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
        meta: {
            public: true
        }
  },
  {
    path: '/helloworld',
    name: 'helloworld',
    component: HelloWorld,
    meta: {
        public: true
    }
},
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.public)) {
      next();
  } else if (store.state.usuario) {
      if (to.matched.some(record => record.meta.auth)) {
          console.log(store.state.usuario);
          next();
      }
  } else {
      next({ name: 'login' });
  }
})

export default router
