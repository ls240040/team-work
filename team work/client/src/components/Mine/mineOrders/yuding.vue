<!--yuding.vue 预定设置页面组件-->
<template>
  <div class="yuding"> 
    <mt-header title="预订">
        <router-link to="/mine" slot="left">
            <mt-button icon="back"></mt-button>
        </router-link>
    </mt-header> 
      <!-- 预定订单组件 -->
      <yudingOrder :list="list" v-show="show2"></yudingOrder>
      <!-- 暂无预定订单 -->
      <noyudingOrder v-show="show"></noyudingOrder>
  </div>
</template>
<script>
//负责引入yudingOrder.vue 子组件
import yudingOrder from "./yudingOrder";
//负责引入noyudingOrder.vue 子组件
import noyudingOrder from "./noyudingOrder";

export default {
  data() {
    return {
      list:[],
      show:true,
      show2:true
    };
  },
  methods: {
    loadMore() {
      var uid = sessionStorage.getItem("accessToken");
      var obj = { uid: uid };
      var url = "index/reserve2";
      this.axios.get(url, { params: obj }).then(res => {
        if (res.data.code == 1) {
          this.list = res.data.data[0];
          // this.list.R_Time = this.list.R_Time.slice(11, 16);
          console.log(this.list);
          this.show=false;
          this.show2=true
        }else{
          this.loadMore();
          this.show=true;
          this.show2=false
        }
      });
    }
  },
  created() {
    this.loadMore();
  },
  components: {
    yudingOrder: yudingOrder,
    noyudingOrder: noyudingOrder,    
  },
 
};
</script>

<style lang="scss">
     .yuding{
        background:#fff;   
        
        /* 预定*/
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

