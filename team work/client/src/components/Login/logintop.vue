<!--Login.vue 用户登录组件-->
<template>
  <div>
    <div class="content">
      <span @click="fanhui" style="position:fixed;top:0.5rem;left:0.5rem;font-size:.5rem;color:#888888;">&lt;</span>
      <div class="top">
        <img class="logo" src="http://127.0.0.1:5050/icon/login_logo_img.png" alt>
        <div class="words">
          <p class="title">欢迎登录海底捞</p>
          <p class="beVip">
            <img src="http://127.0.0.1:5050/icon/hongbao.png" alt>成为会员尊享更多权益
          </p>
        </div>
      </div>
    </div>
  
  </div>
</template>
<script>
export default {
  data() {
    return {
     
    };
  },
  methods: {
    fanhui(){
      this.$router.go(-1)
    }
  }
};
</script>

<style lang="scss" scoped>

.clearfix::after {
  display: block;
  content: "";
  clear: both;
}
div > div.content {
  height: 3.2rem;
  position: relative;
  top: .5rem;
}
div.content > div.top {
  position: absolute;
  top: 1rem;
  left: 1.3rem;
  text-align: left;
}
div.top > img.logo {
  display: block;
  width: 1rem;
}

div.top > div.words > p.title {
  margin: 0.3rem 0 0 0;
  font-weight: 600;
  font-size: 0.3rem;
}
div.top > div.words > p.beVip {
  margin: 0.1rem 0 0 0;
font-size: 0.2rem;

}

</style>

