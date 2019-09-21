<template>
  <div class="card">
    <div @click="goLogin">登录/注册</div>
  </div>
</template>

<script>
export default {
  methods:{
    goLogin:function(){
      this.$router.push({ path: '/login'});
    }
  }
}
</script>

<style scoped>
    .card{
        background-image: url("http://127.0.0.1:5050/icon/member_red_card.png");
        background-repeat:no-repeat;
        background-size:100% 100%;
        height: 3.5rem;
    }
    .card>div{
      height: 0.8rem;
      width: 1.8rem;
      font-size: 0.3rem;
      color: red;
      background-color: white;
      line-height: 0.85rem;
      border-radius: 0.4rem;
      position: relative;
      left: 4.4rem;
      top: 0.8rem;
    }
</style>