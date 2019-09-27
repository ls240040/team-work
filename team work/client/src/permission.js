import router from './router'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css' // Progress 进度条样式

router.beforeEach((to, from, next) => {
    NProgress.start(); // 开启Progress
    if (sessionStorage.getItem('accessToken')) {
        next() //直接进入对应的路由
    } else {
        if (to.path === '/menu' ||to.path === '/Community' || to.path === '/reserve' || to.path === "/paihao" || to.path === "/yuding" || to.path === "/diancan" || to.path === "/community") {
            next('/login') //当前路由被终止，进入 login 路由导航
        } else {
            next() //直接进入对应的路由
        }
        NProgress.done()
    }
});
router.afterEach(() => {
    NProgress.done() // 结束Progress
});

