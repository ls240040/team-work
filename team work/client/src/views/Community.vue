<template>
    <div>
        <div class="head">
            <img src="">
            <img src="">
        </div>
        <h1>社区</h1>
        <!-- nav 切换面板列表-->
        <mt-tab-container class="nav" v-model="active">
            <mt-tab-container-item id="attention">
                <messagelist></messagelist>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>
<script>
export default {
    data () {
        return {
            
        }
    }
}
</script>
<style lang="scss" scoped>
    
</style>