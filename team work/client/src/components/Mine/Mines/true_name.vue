<!--true_name.vue 真实姓名设置页面组件-->
<template>
  <div class="true_name"> 
    <mt-header title="修改真实姓名">
        <router-link to="/datum" slot="left">
            <mt-button icon="back"></mt-button>
        </router-link>
    </mt-header>    
    <input type="text" placeholder="请输入真实姓名" maxlength="8">   
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
     .true_name{
        background:#eee;   
        // 修改真实姓名
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

