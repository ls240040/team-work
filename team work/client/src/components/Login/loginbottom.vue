<!--Login.vue 用户登录组件-->
<template>
  <div class="buttom">
    <div>
      <mt-button class="loginBtn" type="danger">登录</mt-button>
      <p class="forget">
        <span>忘记密码</span>
      </p>
    </div>
    <div class="loginWay">
      <div class="qq"></div>
      <div class="wb"></div>
    </div>
    <div class="footer">
      <p>登录注册表示同意<span>用户许可使用协议、隐私政策</span></p>
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
.qq{
  width: .5rem;
  height: .5rem;
  background: url(http://127.0.0.1:5050/icon/qq.png) no-repeat center;
  border-radius:50% ;
  background-size: contain;
}
.wb{
  background: url(http://127.0.0.1:5050/icon/wb.png) no-repeat center;
   border-radius:50% ;
  background-size: contain;
}
.buttom > div > .loginBtn {
  width: 4rem;
  height: 0.7rem;
  margin-top:1.2rem; 
  border-radius: 0.35rem;
  font-weight: 100;
  font-size: 0.28rem;
}
.buttom > div > .forget {
  font-size: 0.2rem;
  margin-top: 0.2rem;
}
.buttom > div.loginWay{
  margin:.8rem 1.1rem 1rem ;
  display: flex;
  justify-content: space-around;
}
.buttom > div.loginWay div img{
  width: 1rem;
  
}
.buttom > div.loginWay div{
  width: 1rem;
  border-radius: 50%;
}


.buttom > div.footer p{
 margin-top:3rem ;
  font-size:0.21rem;
}
.buttom > div.footer p span{

  font-size:0.21rem;
  color:#ef4f4f;
}
</style>

