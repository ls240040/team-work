<!--register.vue 用户注册组件-->
<template>
  <div class="register">
      <div class="top">
        <!-- 返回主界面 -->
        <h1>
          <img src="http://127.0.0.1:5050/icon/arrow-left.png" alt="">
        </h1>
        <div class="title">
          <img class="logo" src="http://127.0.0.1:5050/icon/login_logo_img.png" alt>        
          <p>欢迎来到海底捞</p>
          <p class="vip">
            <img src="http://127.0.0.1:5050/icon/hongbao.png" alt>成为会员尊享更多权益
          </p>
        </div>
      </div>
      <div class="bottom">
        <div>
          <span>用户名称：</span>
          <input type="text" placeholder="请输入用户名">
        </div>
        <div>
          <span>手机号码：</span>
          <input type="text" placeholder="请输入用户名">
        </div>
        <div>
          <span>输入密码：</span>
          <input type="text" placeholder="请输入密码">
        </div>
        <div>
          <span>确认密码：</span>
          <input type="text" placeholder="请再次输入密码">
        </div>
      
        <mt-button class="loginBtn" type="danger">注册</mt-button>
        <!-- 其他方式登录 -->
        <div class="other">
          <img src="http://127.0.0.1:5050/icon/qq.png" alt="">
          <img src="http://127.0.0.1:5050/icon/wx.png" alt="">
          <img src="http://127.0.0.1:5050/icon/wb.png" alt="">
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
    
    };
  },
  methods: {
   
  
  }
};
</script>

<style lang="scss">
    .register{
      .top{
        h1{
          padding-left:0.2rem;
          text-align: left;
          img{
            width:0.3rem;height:0.3rem;
          }
        }
      }
      .title{
        width:65%;
        margin:0rem auto;
        font-size:0.5rem;
        font-weight: bold;
        text-align: left;
        .logo{
          width:1.2rem;height:1.2rem;
          margin:0.2rem;
        }
        .vip{
          font-size:0.3rem;
          font-weight: lighter;
          margin:0.2rem 0rem;
          img{
            width:0.3rem;height:0.3rem;
            vertical-align: middle;
          }
        }
      }
      .bottom{
        font-size:0.35rem;
        div{
          width:70%;
          margin:0 auto;
        }
        
        input{
          width:50%;
          margin:0.23rem 0rem;
          padding:0.13rem 0rem 0.1rem 0.2rem;
          border:0.01rem solid #aaa;
        }
      }
      .loginBtn{
        margin:0.3rem;
        width:70%;height:0.7rem;
        font-size:0.4rem;
      }
      .other{
        width:70%;
        display: flex;
        justify-content: space-between;
        img{
          width:0.7rem;height:0.7rem;
        }
      }
      .agree{
        margin:0.5rem;
        font-size:0.3rem;
        span{
          color:#f00;
        }
      }
    }
</style>

