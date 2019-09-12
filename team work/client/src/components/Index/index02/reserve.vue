<template>
    <div>
        
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        loadMore(){
            this.$messagebox("温馨提示","各位捞粉大家好，每日早上7:00-9:00是我们闭店打扫时间，擦亮桌椅迎接您的到来，期间无法为您提供用餐服务，感谢您的谅解与支持。")
        }
    },
    created(){
        this.loadMore();
    }
}
</script>
<style lang="scss">
    .mint-msgbox-message{
        font-size: .22rem;
        color:rgb(41, 41, 41)!important;
        line-height: .32rem!important;
        text-align: left!important;
    }
    .mint-msgbox-confirm{
        color:#222!important;
        font-size: .3rem;
    }
    .mint-msgbox{
        width: 70%!important;
        border-radius: .3rem!important;
    }
</style>