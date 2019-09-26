<!--register.vue 用户注册组件-->
<template>
  <div class="register">
    <div class="top">
      <!-- 返回主界面 -->
      <h1>
        <img src="http://127.0.0.1:5050/icon/arrow-left.png" alt @click="goLogin" />
      </h1>
      <div class="title">
        <img class="logo" src="http://127.0.0.1:5050/icon/login_logo_img.png" alt />
        <p>欢迎来到海底捞</p>
        <p class="vip">
          <img src="http://127.0.0.1:5050/icon/hongbao.png" alt />成为会员尊享更多权益
        </p>
      </div>
    </div>
    <div class="bottom">
      <div class="TF">
        <span>手机号码：</span>
        <input type="text" placeholder="请输入手机号" v-model="U_LoginID" @blur="checkID" />
        <img src="http://127.0.0.1:5050/icon/true.png" v-if="U_LoginIDcheck==1" />
        <img src="http://127.0.0.1:5050/icon/false.png" v-if="U_LoginIDcheck==0" />
      </div>
      <div class="TF">
        <span>真实姓名：</span>
        <input type="text" placeholder="请输入姓名" v-model="U_Name" @blur="checkName" />
        <img src="http://127.0.0.1:5050/icon/true.png" v-if="U_Namecheck==1" />
        <img src="http://127.0.0.1:5050/icon/false.png" v-if="U_Namecheck==0" />
      </div>
      <div class="TF">
        <span>输入密码：</span>
        <input type="text" placeholder="请输入密码" v-model="U_PassWord" @blur="checkPassWord" />
        <img src="http://127.0.0.1:5050/icon/true.png" v-if="U_PassWordcheck==1" />
        <img src="http://127.0.0.1:5050/icon/false.png" v-if="U_PassWordcheck==0" />
      </div>
      <div class="TF">
        <span>确认密码：</span>
        <input
          type="text"
          placeholder="请再次输入密码"
          v-model="U_PassWordAgain"
          @blur="checkPassWordAgain"
        />
        <img src="http://127.0.0.1:5050/icon/true.png" v-if="U_PassWordAgaincheck==1" />
        <img src="http://127.0.0.1:5050/icon/false.png" v-if="U_PassWordAgaincheck==0" />
      </div>

      <mt-button class="loginBtn" type="danger" @click="userRegister">注册</mt-button>
      <!-- 其他方式登录 -->
      <div class="other">
        <img src="http://127.0.0.1:5050/icon/qq.png" alt />
        <img src="http://127.0.0.1:5050/icon/wx.png" alt />
        <img src="http://127.0.0.1:5050/icon/wb.png" alt />
      </div>
      <p class="agree">
        注册表示同意
        <span>用户许可使用协议、隐私政策</span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      U_LoginID: "",
      U_LoginIDcheck: -1,
      U_Name: "",
      U_Namecheck: -1,
      U_PassWord: "",
      U_PassWordcheck: -1,
      U_PassWordAgain: "",
      U_PassWordAgaincheck: -1
    };
  },
  methods: {
    //返回登录页面
    goLogin() {
      this.$router.push("/Login");
    },

    //失去焦点时候检查ID是否被注册
    checkID() {
      let U_LoginID = this.U_LoginID;
      let check1 = -1,
        check2 = -1;
      let url = "/user/checkLoginID";
      this.axios.get(url, { params: { U_LoginID: U_LoginID } }).then(res => {
        if (res.data.code == 1) {
          check1 = 0;
        } else {
          check1 = 1;
        }
        if (U_LoginID.length != 11) {
          check2 = 0;
        } else {
          check2 = 1;
        }
        if (check1 == 1 && check2 == 1) {
          this.U_LoginIDcheck = 1;
        } else {
          this.U_LoginIDcheck = 0;
        }
      });
    },
    //chenkName,不为空就行
    checkName() {
      if (this.U_Name == "") {
        this.U_Namecheck = 0;
      } else {
        this.U_Namecheck = 1;
      }
    },
    //chenkPassWord,不为空就行
    checkPassWord() {
      if (this.U_PassWord == "") {
        this.U_PassWordcheck = 0;
      } else {
        this.U_PassWordcheck = 1;
      }
    },
    //chenkPassWordAgain,两个要一样
    checkPassWordAgain() {
      if (this.U_PassWord == this.U_PassWordAgain) {
        this.U_PassWordAgaincheck = 1;
      } else {
        this.U_PassWordAgaincheck = 0;
      }
    },

    //四个都是1之后,注册用户
    userRegister() {
      if (
        this.U_LoginIDcheck == 1 &&
        this.U_Namecheck == 1 &&
        this.U_PassWordcheck == 1 &&
        this.U_PassWordAgaincheck == 1
      ) {
        let U_LoginID = this.U_LoginID,
          U_Name = this.U_Name,
          U_PassWord = this.U_PassWord;

        var url = "/user/userRegister";
        this.axios
          .get(url, {
            params: {
              U_LoginID: U_LoginID,
              U_Name: U_Name,
              U_PassWord: U_PassWord
            }
          })
          .then(res => {
            if (res.data.code == 1) {
              var url = "/user/getUserID";
              this.axios.get(url, { params: { U_LoginID: U_LoginID } }).then(res => {
                  if (res.data.code == 1) {
                    console.log(res.data.data[0].U_ID);
                    sessionStorage.setItem("accessToken", res.data.data[0].U_ID);
                    this.$router.push({path: "/"});
                  }
              });
            }
          });
      } else {
        alert("输入信息有误，请修改。");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.register {
  .top {
    h1 {
      padding-left: 0.2rem;
      text-align: left;
      img {
        width: 0.3rem;
        height: 0.3rem;
      }
    }
  }
  .title {
    width: 65%;
    margin: 0rem auto;
    font-size: 0.5rem;
    font-weight: bold;
    text-align: left;
    .logo {
      width: 1.2rem;
      height: 1.2rem;
      margin: 0.2rem;
    }
    .vip {
      font-size: 0.3rem;
      font-weight: lighter;
      margin: 0.2rem 0rem;
      img {
        width: 0.3rem;
        height: 0.3rem;
        vertical-align: middle;
      }
    }
  }
  .bottom {
    font-size: 0.35rem;
    div {
      width: 70%;
      margin: 0 auto;
      position: relative;
    }
    .TF > img {
      position: absolute;
      right: -0.5rem;
      top: 0.2rem;
    }
    input {
      width: 50%;
      margin: 0.23rem 0rem;
      padding: 0.13rem 0rem 0.1rem 0.2rem;
      border: 0.01rem solid #aaa;
    }
  }
  .loginBtn {
    margin: 0.3rem;
    width: 70%;
    height: 0.7rem;
    font-size: 0.4rem;
  }
  .other {
    width: 70%;
    display: flex;
    justify-content: space-between;
    img {
      width: 0.7rem;
      height: 0.7rem;
    }
  }
  .agree {
    margin: 0.5rem;
    font-size: 0.3rem;
    span {
      color: #f00;
    }
  }
}
</style>

