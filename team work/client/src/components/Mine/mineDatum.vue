<!--mineDatum.vue 用户页面组件-->
<template>
  <div class="datum">
    <!-- 二维码 -->
    <div class="erwei">
      <img src="http://127.0.0.1:5050/icon/erweima.png" alt="">
    </div>   
    
    <div class="datum1">
      <!-- 头像 -->
        <img class="touxiang" src="http://127.0.0.1:5050/icon/touxiang.png" alt=""> 
        <!-- 用户资料编写按钮 -->
        <img class="bianxie" src="http://127.0.0.1:5050/icon/bianxie.png" alt="">
        <h5>
          <!-- 用户名 -->
          <span>用户名</span>
          <!-- 会员等级图标 -->
        <img src="http://127.0.0.1:5050/icon/my_vip_red.png" alt="">
        </h5>
        <!-- 捞币  券 -->
        <h6>
          <span><span class="num">10</span>捞币</span>
          <span><span class="num">10</span>券</span>
        </h6>
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
/* 头部组件 */
.datum{
  width:100%;
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
    background:#fff;
    border-radius: 0.1rem;
    margin:0 auto;
    position:relative;
    /* 头像 */
    .touxiang{
    width:1.3rem;height:1.3rem;
    border-radius:50%;
    position:relative;
    top:-0.6rem;
    }
    /* 用户资料按钮 */
    .bianxie{
      width:0.3rem;height:0.3rem;
      position:absolute;
      right:4%;
      top:5%;
    }
    /* 用户名 */
    h5{
      width:85%;
      margin:0 auto;
      font-size:0.4rem;
      margin-top:-0.6rem;
      padding-bottom:0.3rem;
      border-bottom:0.01rem solid #eee;
      /* 用户名位置调整 */
      span{
        margin-left:1rem;
      }
      /* 会员等级图标 */
       img{
         width:1.1rem;
         vertical-align: middle;
       }   
    }
    /* 捞币  券 */
    h6{
      width:100%;
      display:flex;
      justify-content: space-around;
      font-size:0.2rem;
      margin:0.4rem 0rem;
      padding-bottom:0.3rem;
      /* 捞币  券数量 颜色 字体*/
      .num{
        color:#db4e43;
        font-size:0.5rem;
        margin-right:0.1rem;
      }
    }
  }
}
</style>

