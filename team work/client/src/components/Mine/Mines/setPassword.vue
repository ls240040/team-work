<!--setPassword.vue 修改密码设置页面组件-->
<template>
  <div class="setPassword"> 
    <mt-header title="修改密码">
        <router-link to="/set" slot="left">
            <mt-button icon="back"></mt-button>
        </router-link>
    </mt-header>    
    <!-- 手机号 -->
    <input type="text" placeholder="请输入手机号">
    <!-- 验证码 -->
    <div class="input" >
        <input class="input_yz" type="text" placeholder="请输入验证码" maxlength="5">  
        <span class="yanzheng" id="yanzheng">获取验证码</span>        
        <span class="yanzheng yanzheng2" id="yanzheng2" style="display:none"><span id="time" >60</span>S后重发</span>
    </div>
    <input type="text" placeholder="请输入新密码">   
    <input type="text" placeholder="请再次输入新密码">   
    <button class="button_ok">确定</button>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
     /* 倒计时 */    
    times(){
        var int=setInterval(clock,1000);
        var num=60;
        function clock(){
            num>0 ? num-- : clearInterval(int);
            document.getElementById("time").innerHTML=num;
             console.log(num)
        }
    },
    /* 获取验证码 */
    yanzheng(){
        var yanzheng = document.getElementById("yanzheng");
        var yanzheng2 = document.getElementById("yanzheng2");
        
        yanzheng.onclick = function () {
           yanzheng.style.display = "none";
           yanzheng2.style.display = "block";           
        }
    },    
  },
   mounted() {
    this.yanzheng(),
    this.times()
  }
};
</script>

<style lang="scss">
     .setPassword{
        background:#eee;   
        // 修改密码
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
              font-size:0.1rem;
              color:#e00;
              line-height:0.7rem;
              margin-right:0.2rem;  
          }
          .yanzheng2{
              color:#ccc;
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

