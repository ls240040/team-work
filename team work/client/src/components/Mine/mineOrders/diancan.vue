<!--diancan.vue 点餐设置页面组件-->
<template>
  <div class="diancan"> 
    <mt-header title="点餐">
        <router-link to="/mine" slot="left">
            <mt-button icon="back"></mt-button>
        </router-link>
    </mt-header> 
      <!-- 点餐订单组件 -->
      <diancanOrder></diancanOrder>
      <!-- 暂无点餐订单 -->
      <nodiancanOrder></nodiancanOrder>
  </div>
</template>
<script>
//负责引入diancanOrder.vue 子组件
import diancanOrder from "./diancanOrder";
//负责引入nodiancanOrder.vue 子组件
import nodiancanOrder from "./nodiancanOrder";

export default {
  data() {
    return {};
  },
  methods: {
      
  },
  components: {
    diancanOrder: diancanOrder,
    nodiancanOrder: nodiancanOrder,    
  },
 
};
</script>

<style lang="scss">
     .diancan{
        background:#fff;   
        
        /* 点餐*/
    .mint-header{
              padding-top:0.4rem;
              padding-bottom:0.2rem;
              background:#fff;
              color:#000;
              font-size:0.35rem;      
              border-bottom:1px solid #ddd; 
          }        
    } 
</style>

