<template>
    <div class="res_det">
        <mt-header title="预定详情">
        <router-link to="/" slot="left">
            <mt-button icon="back"></mt-button>
        </router-link>
        </mt-header>  
        <div>
            <img src="http://127.0.0.1:5050/icon/err.png" alt="">
            <span>不能重复下单</span>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            
        }
    },
    methods:{

    }
}
</script>
<style lang="scss" scoped>

</style>