import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import Details from './views/Details.vue'
import Community from './views/Community.vue'
import Mine from './views/Mine.vue'
import Vip from './views/Vip.vue'
import Login from './views/Login.vue'

import reserve from './components/Index/index02/reserve.vue'
import demand from './components/Index/index02/demand.vue'
import shopList from './components/Index/index02/shopList.vue'
/* mines */
import datum from './components/Mine/Mines/datum.vue'
import vipcarousel from './components/VIP/VIPCarouselDDD.vue' //vip轮播
import head from './components/Mine/Mines/head.vue'
import set_user from './components/Mine/Mines/set_user.vue'
import true_name from './components/Mine/Mines/true_name.vue'
import sex from './components/Mine/Mines/sex.vue'
import underwrite from './components/Mine/Mines/underwrite.vue'
import income from './components/Mine/Mines/income.vue'
import phone from './components/Mine/Mines/phone.vue'
import email from './components/Mine/Mines/email.vue'
import Menu from './views/menu.vue'
/* mineOrders */
import paihao from './components/Mine/mineOrders/paihao.vue'
import yuding from './components/Mine/mineOrders/yuding.vue'
import diancan from './components/Mine/mineOrders/diancan.vue'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/menu',
            name: 'menu',
            component: Menu,
            meta: {
                isLogin: true, // 添加该字段，表示进入这个路由是需要登录的
                keepAlive:false
            }
        },
        {
            path: '/vipcarousel',
            name: 'vipcarousel',
            component: vipcarousel,
            meta:{
                keepAlive:false //不需要被缓存的组件
             },
        },
        {
            path: '/',
            name: 'index',
            component: Index,
            meta:{
                keepAlive:false //不需要被缓存的组件
             },
        },
        {
            path: '/Details',
            name: 'details',
            component: Details,
            meta:{
                keepAlive:false //不需要被缓存的组件
             },
        },
        {
            path: '/Community',
            name: 'community',
            component: Community,
            meta:{
                keepAlive:false //不需要被缓存的组件
             },
        },
        {
            path: '/Mine',
            name: 'mine',
            component: Mine,
            meta:{
                keepAlive:false //不需要被缓存的组件
             },
        },
        {
            path: '/Vip',
            name: 'vip',
            component: Vip,
            meta:{
                keepAlive:false //需要被缓存的组件
             },
        },
        {
            path: '/Login',
            name: 'login',
            component: Login,
            meta:{
                keepAlive:false //不需要被缓存的组件
             },
        },
        {
            path: '/shopList',
            name: 'shopList',
            component: shopList,
            meta:{
                keepAlive:false //不需要被缓存的组件
             },
        },
        {
            path: '/reserve',
            name: 'reserve',
            component: reserve,
            meta:{
                keepAlive:true //需要被缓存的组件
             },
        },
        {
            path: '/demand',
            name: 'demand',
            component: demand,
            meta:{
                keepAlive:false //需要被缓存的组件
             },
        },
        /* mines */
        {
            path: '/datum',
            name: 'datum',
            component: datum,
            meta:{
                keepAlive:false //不需要被缓存的组件
             },
        },
        {
            path: '/head',
            name: 'head',
            component: head,
            meta:{
                keepAlive:false //不需要被缓存的组件
             },
        },
        {
            path: '/set_user',
            name: 'set_user',
            component: set_user,
            meta:{
                keepAlive:false //不需要被缓存的组件
             },
        },
        {
            path: '/true_name',
            name: 'true_name',
            component: true_name,
            meta:{
                keepAlive:false //不需要被缓存的组件
             },
        },
        {
            path: '/sex',
            name: 'sex',
            component: sex,
            meta:{
                keepAlive:false //不需要被缓存的组件
             },
        },
        {
            path: '/underwrite',
            name: 'underwrite',
            component: underwrite,
            meta:{
                keepAlive:false //不需要被缓存的组件
             },
        },
        {
            path: '/income',
            name: 'income',
            component: income,
            meta:{
                keepAlive:false //不需要被缓存的组件
             },
        },
        {
            path: '/phone',
            name: 'phone',
            component: phone,
            meta:{
                keepAlive:false //不需要被缓存的组件
             },
        },
        {
            path: '/email',
            name: 'email',
            component: email,
            meta:{
                keepAlive:false //不需要被缓存的组件
             },
        },
        /* mineOrders */
        {
            path: '/paihao',
            name: 'paihao',
            component: paihao,
            meta:{
                keepAlive:false //不需要被缓存的组件
             },
        },
        {
            path: '/yuding',
            name: 'yuding',
            component: yuding
        },
        {
            path: '/diancan',
            name: 'diancan',
            component: diancan
        },
        // {
        //   path: '/about',
        //   name: 'about',
        //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        // }
    ]
})