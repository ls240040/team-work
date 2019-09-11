import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import Details from './views/Details.vue'
import Community from './views/Community.vue'
import Mine from './views/Mine.vue'
import Vip from './views/Vip.vue'
import Login from './views/Login.vue'
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
        // {
        //   path: '/about',
        //   name: 'about',
        //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        // }
    ]
})