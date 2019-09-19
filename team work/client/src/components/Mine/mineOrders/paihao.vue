<!--paihao.vue 头像设置页面组件-->
<template>
  <div class="paihao"> 
    <mt-header title="排号">
        <router-link id="paihao" to="/" slot="left">
            <mt-button icon="back"></mt-button>
        </router-link>
    </mt-header> 
      <!-- 排号订单组件 -->
      <paihaoOrder></paihaoOrder>
      <!-- 暂无订单 -->
        <div>
            <img src="http://127.0.0.1:5050/icon/no_order.jpg" alt="">  
        <h4>暂无当前排号信息</h4>  
        </div>        
  </div>
</template>
<script>
//负责引入paihaoOrder.vue 子组件
import paihaoOrder from "./paihaoOrder";

export default {
  data() {
    return {};
  },
  methods: {
      paihao(){
      var paihaos=document.getElementById("paihao");
      paihaos.onclick = function () {
           window.location.href="http://127.0.0.1:8080/#/mine";
        }     
    }
  },
  components: {
    paihaoOrder: paihaoOrder,
    
  },
   mounted() {
    this.paihao()
  }
};
</script>

<style lang="scss">
     .paihao{
        background:#fff;   
        
        /* 排号 */
    .mint-header{
              padding-top:0.4rem;
              padding-bottom:0.2rem;
              background:#fff;
              color:#000;
              font-size:0.35rem;      
              border-bottom:1px solid #ddd; 
          } 
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

