<!--yuding.vue 预定设置页面组件-->
<template>
  <div class="yuding"> 
    <mt-header title="预定">
        <router-link to="/mine" slot="left">
            <mt-button icon="back"></mt-button>
        </router-link>
    </mt-header> 
      <!-- 预定订单组件 -->
      <yudingOrder :list="list" :address="address"></yudingOrder>
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
      address:[],
      show:true
    };
  },
  methods: {
    loadMore() {
      var uid = sessionStorage.getItem("accessToken");
      var obj = { uid: uid };
      var url = "index/rowNum2";
      this.axios.get(url, { params: obj }).then(res => {
        if (res.data.code == 1) {
          this.list = res.data.data[0];
          this.list.R_Time = this.list.R_Time.slice(11, 16);
          console.log(this.list);
          this.show=false;
        }else{
          this.show=true;
        }
      });
        var url='index/shoplist';
         this.axios.get(url).then(res=>{
            if(res.data.code==1){
                this.address=res.data.data[0];
                console.log(this.address)
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

