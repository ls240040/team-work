<template>
    <div>
        <div style="border-bottom: 0.01rem solid #e2e2e2">
            <img @click="jian" class="img1" src="http://127.0.0.1:5050/icon/arrow-left.png" alt="">
            <span class="b1">消息</span>
        </div>
        <div class="bor" v-for="(item,i) of temp" :key="i">
            <img style="margin:0.1rem" :src="`http://127.0.0.1:5050/icon/a${i}.png`" alt="">
            <span class="ziti">{{item}}</span>
            <img class="img" @click="btn" src="http://127.0.0.1:5050/icon/arrow-right.png" alt="">
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            temp:["系统通知","赞","评论","关注","私信","客服助手"]
        }
    },
    methods: {
        btn(){
            this.$router.push('/Mone0')
        },
        jian(){
            this.$router.push('/')
        }
    },
}
</script>
<style lang="scss" scoped>
    .img1{
        position: absolute;top:0.55rem;left:0.15rem;
        width:0.3rem;
        height:0.3rem;
    }
    .b1{
        font-size: 0.38rem;
        top:0.28rem;
        color:#000;
        font-family:"Times New Roman",Georgia,Serif;
    }
    .bor{
        border-bottom: 0.01rem solid rgb(226, 226, 226);
        align-items: center;
        display: flex;
        height: 1rem;
        position: relative;
    }
    .ziti{
        font-size: 0.3rem;
        margin: 0.1rem;
    }
    .img{
        position: absolute;
        right:0.1rem;
        width:0.3rem;
        height: 0.3rem;
    }
</style>