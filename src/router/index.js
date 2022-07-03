import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home'
import money from '../views/money'
import time from '../views/time'
import router_page from '../views/router'

Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}


const routes = [
    {
        path: '/home',
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
    {
        path: '/router',
        name: 'Router',
        component: router_page
    },
    {
        path: '/*',
        redirect: {name: 'Home'},
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
