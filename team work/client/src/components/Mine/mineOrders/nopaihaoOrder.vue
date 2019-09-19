<!--nopaihaoOrder.vue 排号页面组件-->
<template>
  <div class="nopaihaoOrder">
      <div>
        <img src="http://127.0.0.1:5050/icon/no_order.jpg" alt="">  
        <h4>暂无当前排号信息</h4>  
      </div>   
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
    .nopaihaoOrder{
          /* 无订单 */
      img{
          width:2.5rem;height:2.5rem;
          margin-top:30%;          
      }  
      h4{
          font-size:0.2rem;
      }
    }
    
    
</style>

