<!--yudingOrder.vue 预定页面组件-->
<template>
  <div class="yudingOrder">
    <div class="div1">
      <h3>
        <span v-show="show">
          <span>{{list.M_Name}}</span>
          <span>{{list.M_Distance}}km</span>
        </span>
        <span>待叫号</span>
      </h3>
      <div class="div2">
        <ul>
          <li>名称</li>
          <li v-show="show">{{list.R_Name}}</li>
        </ul>
        <ul>
          <li>就餐时间</li>
          <li v-show="show">{{list.R_Time}}</li>
        </ul>
        <ul>
          <li>就餐人数</li>
          <li>
            <span v-show="show">{{list.R_Num}}</span>
          </li>
        </ul>
      </div>
      <div class="div3">
        <span @click="cancel">取消预定</span>
        <span class="zxdc" @click="order">在线点餐</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show:true
    };
  },
  methods: {
    cancel(){
      var uid = sessionStorage.getItem("accessToken");
      var obj = { uid: uid };
      var url='index/cancelOrder';
      this.axios.get(url,{ params: obj }).then(res=>{
        console.log(res.data.code)
        if(res.data.code==1){
          this.$messagebox("取消成功").then(res=>{
            this.$router.go(0);
          });
          this.show=false;
        }
      })
    },
    order(){
      this.$router.push('/menu')
    }
  },
  props:{
    list:{default:Array},
  }
};
</script>

<style lang="scss" scoped>
.yudingOrder {
  font-size: 0.2rem;
  padding: 0.2rem;
  background: #f1f1f1;
  .div1 {
    background: #fff;
    padding-bottom: 0.1rem;
  }
  h3 {
    display: flex;
    justify-content: space-between;
    padding: 0.2rem;
  }
  .div2 {
    display: flex;
    justify-content: space-around;
    color: #666;
    font-weight: lighter;
    margin: 0.1rem 0.3rem;
    padding-bottom: 0rem;
    background: #eee;
    li {
      margin: 0.2rem;
    }
  }
  .div3 {
    text-align: right;
    padding: 0.25rem;
    span {
      border: 1px solid #ccc;
      padding: 0.1rem 0.2rem;
      border-radius: 0.5rem;
      margin-right: 0.2rem;
    }
    .zxdc {
      background: #f00;
      color: #fff;
      border: none;
    }
  }
}
</style>

