import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Content from '../views/Content.vue'
import ProductDetail from '../views/ProductDetail.vue'
import Cart from '../views/Cart.vue'
import OrderBerhasil from '../views/OrderBerhasil.vue'

import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

Vue.use(VueRouter)
Vue.use(VueToast);
//Vue.$toast.open({/* options */});

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Content',
    name: 'Content',
    component: Content
  },
  {
    path: '/Content/:id',
    name: 'ProductDetail',
    component: ProductDetail
  },
  {
    path: '/Cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/order-berhasil',
    name: 'OrderBerhasil',
    component: OrderBerhasil
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
