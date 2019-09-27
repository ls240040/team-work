<!--Login.vue 用户登录组件-->
<template>
  <div class="buttom">
    <div class="middle">
      <div>
        <span>账号:</span>
        <input v-model="uname" type="text" placeholder="请输入用户名">
      </div>
      <div>
        <span>密码:</span>
        <input v-model="upwd" type="text" placeholder="请输入密码">
      </div>
    </div>
    <div>
      <mt-button class="loginBtn" type="danger" @click="login">登录</mt-button>
      <p class="forget">
        <span @click="regsiter">立即注册</span>&nbsp;&nbsp;&nbsp;<span>忘记密码</span>
      </p>
    </div>
    <div class="loginWay">
      <div class="qq"></div>
      <div class="wb"></div>
    </div>
    <div class="footer">
      <p>
        登录注册表示同意
        <span>用户许可使用协议、隐私政策</span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      upwd: "",
      uname: ""
    };
  },
  methods: {
    regsiter(){
      this.$router.push("/register")
    },
    login() {
      //功能一：完成用户登录操作
      //1：获取用户名和密码
      var u = this.uname;
      var p = this.upwd;
      console.log(u, p);
      //2: 创建正则表达式  3~12位置 字母数字
      var reg = /^[a-z0-9]{3,12}$/i;
      //3: 判断如何错误 用户名提示
      if (!reg.test(u)) {
        this.$toast("用户名格式不正确");
        return;
      }
      //4: 判断如何错误 密码提示
      if (!reg.test(p)) {
        this.$toast("密码格式不正确");
        return;
      }
      //5: 发送ajax
      // var obj = { 'uname': u, 'upwd': p };
      // var formdata=JSON.stringify(obj);
      // console.log(formdata);
      var params = new URLSearchParams();
      params.append("uname", u);
      params.append("upwd", p);
      this.axios
        .post("/user/login", params) //传参
        .then(res=>{
          if (res.data.code == 1) {
            {sessionStorage.setItem('accessToken' , res.data.id) }
            // this.$router.push({
            //   path: "/"
            // });
            this.$router.go(-1)
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
div.middle {
  text-align: left;
}
div.middle > div > input {
  display: inline-block;
  width: 3rem;
  height: 0.5rem;
  border: 0;
  background-color: transparent;
  border-bottom: 0.01rem solid rgba(85, 85, 85, 0.4);
  padding-left: 0.1rem;
  margin-left: 0.2rem;
  margin-top: 1rem;
}
#upwd {
  margin-top: 0.3rem;
}
div.middle > div > input::placeholder {
  color: rgba(85, 85, 85, 0.4);
  font-size: 0.15rem;
}
div.middle > div {
  margin-left: 1.2rem;
}
div.middle > div > span {
  display: inline-block;
  font-size: 0.25rem;
}
div.middle > div > input::placeholder {
  color: rgba(85, 85, 85, 0.4);
  font-size: 0.15rem;
}
div.middle > div {
  margin-left: 1.2rem;
}
div.middle > div > span {
  display: inline-block;
  font-size: 0.25rem;
}
.qq {
  width: 0.5rem;
  height: 0.5rem;
  background: url(http://127.1:5050/icon/qq.png) no-repeat center;
  border-radius: 50%;
  background-size: contain;
}
.wb {
  background: url(http://127.1:5050/icon/wb.png) no-repeat center;
  border-radius: 50%;
  background-size: contain;
}
.buttom > div {
  .loginBtn {
    width: 4rem;
    height: 0.7rem;
    margin-top: 1.2rem;
    border-radius: 0.35rem;
    font-weight: 100;
    font-size: 0.28rem;
  }
  .forget {
    font-size: 0.2rem;
    margin-top: 0.2rem;
  }
}

.buttom > div.loginWay {
  margin: 0.8rem 1.1rem 1rem;
  display: flex;
  justify-content: space-around;
  div img {
    width: 1rem;
  }
}

.buttom > div.loginWay div {
  width: 1rem;
  border-radius: 50%;
}

.buttom > div.footer p {
  margin-top: 3rem;
  font-size: 0.21rem;
  span {
    font-size: 0.21rem;
    color: #ef4f4f;
  }
}
</style>

