<!--income.vue 收入设置页面组件-->
<template>
  <div class="income">      
      <div>
          <span>取消</span>
          <span class="incomes">收入范围</span>
          <span class="ok">确认</span>
      </div>
     <h3>0-5k</h3>   
     <h3>5-8k</h3>   
     <h3>8-10k</h3>   
     <h3>10-15k</h3>   
     <h3>15-30k</h3>   
     <h3>30-50k</h3>   
     <h3>>50k</h3>   
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
    .income{
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
            .incomes{
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

