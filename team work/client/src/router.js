import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import Community from './views/Community.vue'
import Mine from './views/Mine.vue'
import Vip from './views/Vip.vue'
import Login from './views/Login.vue'
import Details from './views/Details.vue'
import A from './views/A.vue'

/* 社区 详情页面 */
import recommendDetailed from './components/Community/recommendDetailed.vue'

import reserve from './components/Index/index02/reserve.vue'
import demand from './components/Index/index02/demand.vue'
import shopList from './components/Index/index02/shopList.vue'

/* 排号详情 */
import paihao_detailed from './components/Index/index01/paihao_detailed.vue'
/* 主页左上角消息*/
import Messagelist from './components/Index/Messagelist.vue'
/* 预定详情 */
import reserve_detailed from './components/Index/index02/reserve_detailed.vue'
/* 门店列表 */
import storeList from './components/Index/index02/storeList.vue'
import row from './components/Index/index01/row.vue'
/* 城市列表 */
import cityStore from './components/Index/index02/cityStore.vue'

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
import diancanordercontent from './components/Mine/mineOrders/diancanOrderContent.vue'
import waisong from './components/Mine/mineOrders/waisong.vue'

/* set设置 */
import set from './components/Mine/Mines/set.vue'

/* 修改密码 */
import setPassword from './components/Mine/Mines/setPassword.vue'
// 注册
import register from './components/Login/register.vue'
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/menu',
            name: 'menu',
            component: Menu,
            meta: {
                isLogin: true, // 添加该字段，表示进入这个路由是需要登录的
                keepAlive: true
            }
        },
        {
            path: '/details',
            name: 'details',
            component: Details,
            meta: {
                keepAlive: false
            }
        },
        {
            path: '/vipcarousel',
            name: 'vipcarousel',
            component: vipcarousel,
            meta: {
                keepAlive: false //不需要被缓存的组件
            },
        },
        {
            path: '/row',
            name: 'row',
            component: row,
            meta: {
                keepAlive: true //需要被缓存的组件
            },
        },
        /* 排号详情 */
        {
            path: '/paihao_detailed',
            name: 'paihao_detailed',
            component: paihao_detailed,
        },
        {
            path: '/',
            name: 'index',
            component: Index,
            meta: {
                keepAlive: false //不需要被缓存的组件
            },
        },
        {
            path: '/Community',
            name: 'community',
            component: Community,
            meta: {
                keepAlive: false //需要被缓存的组件
            },
        },
        {
            path: '/Mine',
            name: 'mine',
            component: Mine,
            meta: {
                keepAlive: false //不需要被缓存的组件
            },
        },
        {
            path: '/Vip',
            name: 'vip',
            component: Vip,
            meta: {
                keepAlive: false //需要被缓存的组件
            },
        },
        {
            path: '/Login',
            name: 'login',
            component: Login,
            meta: {
                keepAlive: false //不需要被缓存的组件
            },
        },
        {
            path: '/shopList',
            name: 'shopList',
            component: shopList,
            meta: {
                keepAlive: false //不需要被缓存的组件
            },
        },
        /* 社区详情页面 */
        {
            path: '/recommendDetailed',
            name: 'recommendDetailed',
            component: recommendDetailed,
            meta: {
                keepAlive: false //需要被缓存的组件
            },
        },

        {
            path: '/reserve',
            name: 'reserve',
            component: reserve,
            meta: {
                keepAlive: true //需要被缓存的组件
            },
        },
        {
            path: '/demand',
            name: 'demand',
            component: demand,
            meta: {
                keepAlive: true //需要被缓存的组件
            },
        },
        /*主页左上角消息 */
        {
            path: '/Messagelist',
            name: 'Messagelist',
            component: Messagelist,
            meta: {
                keepAlive: true //需要被缓存的组件
            },
        },
        /* 预定详情 */
        {
            path: '/reserve_detailed',
            name: 'reserve_detailed',
            component: reserve_detailed,
            meta: {
                keepAlive: false //不需要被缓存的组件
            },
        },
        /* 门店列表*/
        {
            path: '/storeList',
            name: 'storeList',
            component: storeList
        },
        /* 城市列表*/
        {
            path: '/cityStore',
            name: 'cityStore',
            component: cityStore
        },

        /* mines */
        {
            path: '/datum',
            name: 'datum',
            component: datum,
            meta: {
                keepAlive: false //不需要被缓存的组件
            },
        },
        {
            path: '/head',
            name: 'head',
            component: head,
            meta: {
                keepAlive: false //不需要被缓存的组件
            },
        },
        {
            path: '/set_user',
            name: 'set_user',
            component: set_user,
            meta: {
                keepAlive: false //不需要被缓存的组件
            },
        },
        {
            path: '/true_name',
            name: 'true_name',
            component: true_name,
            meta: {
                keepAlive: false //不需要被缓存的组件
            },
        },
        {
            path: '/sex',
            name: 'sex',
            component: sex,
            meta: {
                keepAlive: false //不需要被缓存的组件
            },
        },
        {
            path: '/underwrite',
            name: 'underwrite',
            component: underwrite,
            meta: {
                keepAlive: false //不需要被缓存的组件
            },
        },
        {
            path: '/income',
            name: 'income',
            component: income,
            meta: {
                keepAlive: false //不需要被缓存的组件
            },
        },
        {
            path: '/phone',
            name: 'phone',
            component: phone,
            meta: {
                keepAlive: false //不需要被缓存的组件
            },
        },
        {
            path: '/email',
            name: 'email',
            component: email,
            meta: {
                keepAlive: false //不需要被缓存的组件
            },
        },
        /* 设置 */
        {
            path: '/set',
            name: 'set',
            component: set,
            meta: {
                keepAlive: false //不需要被缓存的组件
            },
        },
        /* 修改密码 */
        {
            path: '/setPassword',
            name: 'setPassword',
            component: setPassword,
            meta: {
                keepAlive: false //不需要被缓存的组件
            },
        },
        /* mineOrders */
        {
            path: '/paihao',
            name: 'paihao',
            component: paihao,
            meta: {
                keepAlive: false //不需要被缓存的组件
            },
        },
        {
            path: '/yuding',
            name: 'yuding',
            component: yuding,
            meta: {
                keepAlive: false //不需要被缓存的组件
            },
        },
        {
            path: '/diancan',
            name: 'diancan',
            component: diancan,
            meta: {
                keepAlive: false //不需要被缓存的组件
            }
        },
        {
            path: '/waisong',
            name: 'waisong',
            component: waisong,
            meta: {
                keepAlive: false //不需要被缓存的组件
            }
        },
        {
            path: '/diancanordercontent',
            name: 'diancanordercontent',
            component: diancanordercontent,
            meta: {
                keepAlive: false //不需要被缓存的组件
            }
        },
        {
            path: '/register',
            name: 'register',
            component: register,
            meta: {
                keepAlive: false //不需要被缓存的组件
            }
        },
        {
            path: '/A',
            name: 'A',
            component: A,
            meta: {
                keepAlive: false //不需要被缓存的组件
            }
        },

        // {
        //   path: '/about',
        //   name: 'about',
        //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        // }
    ]
})