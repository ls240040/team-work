<template>
    <div class="storeList">
        <mt-header class="myheader" title="门店列表">
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>  
        <mt-navbar v-model="selected">
        <mt-tab-item id="waisong">外送</mt-tab-item>
        <mt-tab-item id="ziti">自提</mt-tab-item>
        </mt-navbar>
        <!-- tab-container -->
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="waisong">
                <div class="location">
                    <span>杭州</span>
                    <img src="http://127.0.0.1:5050/icon/xiala.png" alt="">
                    <input type="text" placeholder="请输入外送门店">
                </div>
                <!-- 门店列表组件 -->
               <store></store>
            </mt-tab-container-item>
            <mt-tab-container-item id="ziti">
                <div class="location">
                    <span>杭州</span>
                    <img src="http://127.0.0.1:5050/icon/xiala.png" alt="">
                    <input type="text" placeholder="请输入自提门店">
                </div>
                <!-- 门店列表组件 -->
                <store></store>
            </mt-tab-container-item>            
        </mt-tab-container>

        
    </div>
</template>
<script>
//负责引入store.vue 子组件
import store from "./store";

export default {
    data () {
        return {
            selected: 'waisong'
        }
    },
    methods:{ },
    components: {
    store: store,
  },
}
</script>
<style lang="scss">
    .location{
        font-size:0.3rem;
        background:#fff;
        margin-top:0.2rem;
        padding:0.15rem 0.2rem;
        img{
            vertical-align:middle;
            margin-right:0.3rem;
        }
        input{
            border:none;
            background:#e9e9e9;
            padding:0.1rem 0.2rem;
            border-radius:0.05rem;
        }
    }
    .storeList{
        .myheader{
            height:1.2rem;
            font-size:0.4rem;
            border-bottom:1px solid #ccc;
            padding:0.4rem 0 0.2rem 0.2rem;
        }
    }
</style>