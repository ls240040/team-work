<!--set_user.vue 用户名设置页面组件-->
<template>
  <div class="set_user"> 
    <mt-header title="修改用户名">
        <router-link to="/datum" slot="left">
            <mt-button icon="back"></mt-button>
        </router-link>
    </mt-header>    
    <input type="text" placeholder="请输入用户名" maxlength="8">   
    <h6>2-8个字符，仅支持中英文，数字或“_”，首位须为中英文或数字</h6>
    <button class="button_ok">确定</button>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
  },
};
</script>

<style lang="scss">
     .set_user{
        background:#eee;   
        // 用户名
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
          h6{
              font-size:0.1rem;
              padding:0.2rem;
              text-align: left;
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

