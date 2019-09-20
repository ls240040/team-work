<!--index.vue 用户登录组件-->
<template>
  <div class="f2">
    <div class="left"  @click="linkTo1">
      <p>排号</p>
      <span>取号快人一步</span>
    </div>
    <div class="middle" @click="linkTo">
      <p>预订</p>
      <span>早预定不等位</span>
    </div>
    <div class="right">
      <p>评价</p>
      <span>投诉表扬反馈</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    linkTo(){
      this.$router.push("/shopList");
    },
     linkTo1(){
      this.$router.push("/row");
    },
  }
};
</script>
<style lang="scss">
.f2 {
  
  display: flex;
  justify-content: space-around;
  div{
    margin-top:.6rem; 
    width:2.3rem ;
    height: 3.5rem;
    border-radius: .2rem;
    position: relative;
    p{
     padding-top:.2rem ;
     font: 700;
     color: #000;
    }
     span{
       position: absolute;
       top:.8rem;
       left: .1rem;
     }
  }
  .left {
    background: url(http://127.1:5050/icon/row_num_big.png) no-repeat;
     background-size: 100%;
     background-position: 0 .5rem;
    p {
      position: relative;
      top: .5rem;
      font-size: 0.5rem;
    }
    span {
      font-size: 0.3rem;
      position: relative;
      top: .1rem;
      left: 0;
    }
  }
  .middle {
    background: url(http://127.1:5050/icon/reserve_big.png) no-repeat;
    background-size: 100%;
    background-position: 0 .5rem;
    p {
      font-size: 0.5rem;
       position: relative;
      top: .5rem;
    }
    span {
      font-size: 0.3rem;
       position: relative;
      top: .1rem;
      left: 0;
    }
  }
  .right {
    background: url(http://127.1:5050/icon/evaluate_big.png) no-repeat;
    background-size: 100%;
    background-position: 0 .5rem;
    p {
      font-size: 0.5rem;
       position: relative;
      top: .5rem;
    }
    span {
      font-size: 0.3rem;
      font-size: 0.3rem;
      position: relative;
      top: .1rem;
      left: 0;
    }
  }
}
</style>

