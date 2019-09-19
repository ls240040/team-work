<!--index.vue 商品列表组件-->
<template>
  <div class="picList">
    <div class="titleList">
      <p>热门话题</p>
      <p class="more">更多话题</p>
    </div>
    <div class="titleItem">
    <img src="http://127.1:5050/index/lbB1.png" alt=""><img src="http://127.1:5050/index/lbB2.png" alt=""><img src="http://127.1:5050/index/lbB3.png" alt=""><img src="http://127.1:5050/index/lbB4.png" alt="">
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="scss">
.picList {
  margin-top:.5rem; 
      div.titleItem{
          padding-top:.3rem;
          clear: both;
          display: flex;
          justify-content: left;
          flex-flow: row nowrap;
          overflow-x:scroll;
          img{
              width: 5rem;
              border-radius:.1rem; 
              margin-left:.3rem ;
          }
      }
    p {
      float: left;
      font-size: 0.4rem;
      margin-left:.35rem; 
      font-weight: 700;
    }
    p.more {
      float: right;
      font-size: 0.2rem;
      margin-right: .35rem ;
      font-weight: 400;
    }
  }

</style>

