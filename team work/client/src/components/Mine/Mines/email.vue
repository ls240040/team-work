<!--email.vue 头像设置页面组件-->
<template>
  <div class="email"> 
    <mt-header title="邮箱">
        <router-link id="email" to="/" slot="left">
            <mt-button icon="back"></mt-button>
        </router-link>
    </mt-header>    
    <input type="text" placeholder="请输入邮箱地址" maxlength="8">   
    <button class="button_ok">确定</button>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
      email(){
      var emails=document.getElementById("email");
      emails.onclick = function () {
           window.location.href="http://127.0.0.1:8080/#/datum";
        }     
    }
  },
   mounted() {
    this.email()
  }
};
</script>

<style lang="scss">
     .email{
        background:#eee;   
        // 邮箱
    .mint-header{
              padding-top:0.4rem;
              padding-bottom:0.2rem;
              background:#fff;
              color:#000;
              font-size:0.35rem;       
          } 
          input{
              width:94%;
              padding:0.2rem;
              border:none;
              font-size:0.1rem;
          }     
         
          .button_ok{
              width:97%;
              padding:0.15rem;
              border:none;
              border-radius:0.1rem;
              background:#ccc;
              color:#fff;
              font-size:0.3rem;
          }
      } 
</style>

