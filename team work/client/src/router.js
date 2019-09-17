import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import Details from './views/Details.vue'
import Community from './views/Community.vue'
import Mine from './views/Mine.vue'
import Vip from './views/Vip.vue'
import Login from './views/Login.vue'
import reserve from './components/Index/index02/reserve.vue'
import shopList from './components/Index/index02/shopList.vue'
/* mines */
import datum from './components/Mine/Mines/datum.vue'
import head from './components/Mine/Mines/head.vue'
import set_user from './components/Mine/Mines/set_user.vue'
import true_name from './components/Mine/Mines/true_name.vue'
import sex from './components/Mine/Mines/sex.vue'
import underwrite from './components/Mine/Mines/underwrite.vue'
import income from './components/Mine/Mines/income.vue'
import phone from './components/Mine/Mines/phone.vue'
import email from './components/Mine/Mines/email.vue'
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'index',
            component: Index
        },
        {
            path: '/Details',
            name: 'details',
            component: Details
        },
        {
            path: '/Community',
            name: 'community',
            component: Community
        },
        {
            path: '/Mine',
            name: 'mine',
            component: Mine
        },
        {
            path: '/Vip',
            name: 'vip',
            component: Vip
        },
        {
            path: '/Login',
            name: 'login',
            component: Login
        },
        {
            path: '/shopList',
            name: 'shopList',
            component: shopList
        },
        {
            path: '/reserve',
            name: 'reserve',
            component: reserve
        },
        /* mines */
        {
            path: '/datum',
            name: 'datum',
            component: datum
        },
        {
            path: '/head',
            name: 'head',
            component: head
        },
        {
            path: '/set_user',
            name: 'set_user',
            component: set_user
        },
        {
            path: '/true_name',
            name: 'true_name',
            component: true_name
        },
        {
            path: '/sex',
            name: 'sex',
            component: sex
        },
        {
            path: '/underwrite',
            name: 'underwrite',
            component: underwrite
        },
        {
            path: '/income',
            name: 'income',
            component: income
        },
        {
            path: '/phone',
            name: 'phone',
            component: phone
        },
        {
            path: '/email',
            name: 'email',
            component: email
        },
        // {
        //   path: '/about',
        //   name: 'about',
        //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        // }
    ]
})