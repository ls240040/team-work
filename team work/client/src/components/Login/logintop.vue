<!--Login.vue 用户登录组件-->
<template>
  <div>
    <div class="top">
      <img class="logo" src="http://127.0.0.1:5050/icon/login_logo_img.png" alt>
      <div class="words">
        <p class="title">欢迎登录海底捞</p>
        <p>
          <img src="http://127.0.0.1:5050/icon/hongbao.png" alt>成为会员尊享更多权益
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    

  }
};
</script>
<script src="./rem.js"></script>
<style lang="scss" scope>
.clearfix::after {
  display: block;
  content: "";
  clear: both;
}
div > div.top {
  width: 80%;
  height: 90%;
  position: absolute;
  top: 10%;
  left: 20%;
  text-align: left;
}
div.top > img.logo {
  display: block;
  width: 15%;
}

div.top > div.words > p.title {
  margin: 1.5rem 0 0 0;
  font-weight: 600;
}
</style>

