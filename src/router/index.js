import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home'
import money from '../views/money'
import time from '../views/time'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: home
  },
  {
    path: '/money',
    name: 'Money',
    component: money
  },
  {
    path: '/time',
    name: 'Time',
    component: time
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
