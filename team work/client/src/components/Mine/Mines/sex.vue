<!--sex.vue 性别设置页面组件-->
<template>
  <div class="sex">      
      <div>
          <span>取消</span>
          <span class="sexs">性别</span>
          <span class="ok">确认</span>
      </div>
     <h3 class="man">男</h3>   
     <h3 class="woman">女</h3>   
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

<style lang="scss">
    .sex{
        width:100%;
        border-top:0.01rem solid #ddd;
        position:absolute;
        bottom:1rem;
        div{
            font-size:0.3rem;
            display: flex;
            justify-content: space-around;
            padding:0.3rem;
            margin-bottom:1rem;
            .sexs{
                font-size:0.4rem;
            }
            .ok{color:#f00;}
          }
          h3{
              font-size:0.5rem;
              padding:0.2rem;              
          }
          
          h3:hover{background:#eae0e3;}
    }
</style>

