<!--Login.vue 用户登录组件-->
<template>
  <div>
    <div class="content">
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
    <div class="middle">
      <div><span>账号:</span><input type="text" placeholder="请输入用户名"></div>
      <div><span>密码:</span><input id="upwd" type="text" placeholder="请输入密码"></div>
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
div.middle{
  text-align: left;
}
div.middle>div>input {
  display: inline-block;
  width: 3rem;
  height: .5rem;
  border: 0;
  background-color:transparent;
  border-bottom:0.01rem solid rgba(85,85,85,0.4);
  padding-left:0.1rem;
  margin-left: 0.2rem;
  margin-top:1rem;
}
#upwd {
  margin-top:.3rem;
}
div.middle>div>input::placeholder{
 color:rgba(85,85,85,0.4);
 font-size:0.15rem;

}
div.middle>div{
  margin-left: 1.2rem;

}
div.middle>div>span{
  display: inline-block;
  font-size:0.25rem;
}
</style>

