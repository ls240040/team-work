<!--phone.vue 头像设置页面组件-->
<template>
  <div class="phone"> 
    <mt-header title="绑定手机号">
        <router-link to="/" slot="left">
            <mt-button icon="back"></mt-button>
        </router-link>
    </mt-header>    
    <input type="text" placeholder="请输入手机号" maxlength="11">
    <div class="input" >
        <input class="input_yz" type="text" placeholder="请输入验证码" maxlength="5">  
        <span class="yanzheng">12345
            <img src="http://127.0.0.1:5050/icon/shuaxin.png" alt="">
        </span>
        
    </div>
    <button class="button_ok">确定</button>
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

<style lang="scss">
     .phone{
        background:#eee;   
        // 绑定手机号
        .mintui{font-size:0.3rem;}
    .mint-header{
              padding-top:0.5rem;
              padding-bottom:0.3rem;
              background:#fff;
              color:#000;
              font-size:0.35rem;       
          } 
          input{
              width:100%;
              padding:0.2rem;
              border:none;
              font-size:0.3rem;
          }     
          .input{
              width:100%;height:0.7rem;
              background:#fff;
              display: flex;
              justify-content: space-between;
              margin-top:0.2rem;
          }
          .input_yz{
              width:4rem;
          }
          .yanzheng{
              width:1.5rem;height:100%;
              font-size:0.35rem;
              color:#a00;
              line-height:0.7rem;
              margin-right:0.2rem;  
          }
          img{
              vertical-align: middle;
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

