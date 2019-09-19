import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vue_router from 'vue-router'
import store from './store'
import rem from './assets/js/rem'
import './permission'
//引入第三方的组件库 mint ui
// 第1步 ：完整引入mint-ui组件库中的所有组件
import MintUI from 'mint-ui'
// 第2步 ： 单独引入mint-ui组件库中的样式
import 'mint-ui/lib/style.css'
// 第3步 ： 将mint-ui注册到vue实例中
Vue.use(MintUI);
Vue.use(vue_router)
Vue.use(rem);
Vue.configproductionTip = false
    // 5：引入axios,第三方模块
import axios from "axios";
// 6：配置axios 基础路径
axios.defaults.baseURL = "http://127.0.0.1:5050/";
// 7：配置axios 保存session信息
axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// 8：注册vue 实例中
//由于axios不支持use 将实例添加vue原型
Vue.prototype.axios = axios;

new Vue({
    store,
    render: h => h(App),
    router
}).$mount('#app')