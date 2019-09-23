<!--paihao.vue 排号设置页面组件-->
<template>
  <div class="paihao">
    <mt-header title="排号">
      <router-link to="/mine" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
     <!-- 暂无排号订单 -->
    <nopaihaoOrder v-if="!rowList.R_ID"></nopaihaoOrder>
    <!-- 排号订单组件 -->
    <paihaoOrder v-else="" :R_Time="rowList.R_Time" :R_People="rowList.R_People" :R_ID="rowList.R_ID"></paihaoOrder>
   
  </div>
</template>
<script>
//负责引入paihaoOrder.vue 子组件
import paihaoOrder from "./paihaoOrder";
//负责引入nopaihaoOrder.vue 子组件
import nopaihaoOrder from "./nopaihaoOrder";

export default {
  data() {
    return {
      rowList:{
        R_ID:"",
        R_Time:"",
        R_People:""
      },
    };
  },
  methods: {
    getList() {
      var u = sessionStorage.getItem("accessToken"); //拿到用户ID
      var url = "/menu/rowMsg"; 
      this.axios.get(url, { params: { U_ID: u } }).then(res => {
        if (res.data.code == 1) {
          this.rowList = res.data.data[0];
          this.rowList.R_Time=this.rowList.R_Time.slice(11,16)
        }
      });
    }
  },
 
  components: {
    paihaoOrder: paihaoOrder,
    nopaihaoOrder: nopaihaoOrder
  },
  created() {
    this.getList()
  },
};
</script>

<style lang="scss">
.paihao {
  background: #fff;

  /* 排号 */
  .mint-header {
    padding-top: 0.4rem;
    padding-bottom: 0.2rem;
    background: #fff;
    color: #000;
    font-size: 0.35rem;
    border-bottom: 1px solid #ddd;
  }
}
</style>

