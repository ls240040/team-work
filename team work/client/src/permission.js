import router from './router'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css' // Progress 进度条样式

router.beforeEach((to, from, next) => {
    NProgress.start(); // 开启Progress
    if (to.path === '/details') {
        next('/')
        next('/community')
    }
    if (sessionStorage.getItem('accessToken')) {
        next()
    } else {
        if (to.path === '/menu' || to.path === "/paihao" || to.path === "/yuding") {
            next('/login')
        } else {
            next()
        }
        NProgress.done()
    }
});
router.afterEach(() => {
    NProgress.done() // 结束Progress
});