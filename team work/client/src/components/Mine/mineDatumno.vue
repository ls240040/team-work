<!--mineDatumno.vue 用户页面组件-->
<template>
  <div class="datum">
    <!-- 二维码 -->
    <div class="erwei">
      <img src="http://127.0.0.1:5050/icon/erweima.png" alt="">
    </div>       
    <div class="datum1">
      <!-- 头像 -->
        <img class="touxiang" src="http://127.0.0.1:5050/icon/touxiang_no.png" alt="">  
        <h4><span @click="login">点击登录/注册</span></h4>       
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
      login(){
      this.$router.push("/login");
    },
  },
  
};
</script>

<style lang="scss" scoped>
/* 头部组件 */
.datum{
  width:100%;
  // height:3rem;;
  /* 二维码 */
  .erwei{
    width:97%;
    text-align: right;
    margin-right:0.4rem;
    img{width:0.6rem;height:0.6rem;}
  }
  /* 用户资料框 */
  .datum1{
    width:100%;
    height:2.5rem;
    background:#fff;
    border-radius: 0.1rem;
    margin:0 auto;
    margin-bottom:0.2rem;
    position:relative;
    /* 头像 */
    .touxiang{
    width:1.3rem;height:1.3rem;
    border-radius:50%;
    position:relative;
    top:-0.6rem;
    }
    h4{      
      font-size:0.25rem;
      color:#f00;
      padding:0.15rem 0.3rem;
      
      position: relative;
      top:-0.2rem;
      span{
      border:1px solid #f00;
      border-radius:0.5rem;
      padding:0.15rem 0.25rem;
      }
    }
  }
}
</style>

