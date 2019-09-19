<!--underwrite.vue 个性签名设置页面组件-->
<template>
  <div class="underwrite"> 
    <mt-header title="个性签名">
        <router-link to="/datum" slot="left">
            <mt-button icon="back"></mt-button>
        </router-link>
    </mt-header>    
    <textarea type="text" placeholder="一句话介绍自己的兴趣爱好" maxlength="30"></textarea>
    <h6>30字</h6>   
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
     .underwrite{
         width:100%;
        background:#eee;   
        .mintui{font-size:0.3rem;}
        // 个性签名
    .mint-header{
              padding-top:0.5rem;
              padding-bottom:0.2rem;
              background:#fff;
              color:#000;
              font-size:0.35rem;       
          } 
          textarea{
              width:95%;
              height:1.3rem;
              border:none;
              font-size:0.25rem;
              padding:0.2rem 0 0 0.3rem;
              overflow-wrap: break-word;
              resize:none;
          }     
         h6{
             display: inline-block;
             font-size:0.2rem;
             position: absolute;
             top:1.7rem;
             right:0.3rem;
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

