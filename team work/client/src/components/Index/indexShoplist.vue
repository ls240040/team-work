<!--index.vue 商品列表组件-->
<template>
  <div class="shopList">
    <div class="shoplistTitle">
      <p>热兑好货</p>
      <p class="more">更多商品</p>
    </div>
    <div class="shopItem">
      <indexshop></indexshop>
    </div>
  </div>
</template>
<script>
import indexShop from "./indexShop";
export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    indexshop: indexShop
  }
};
</script>
<style lang="scss">
.shopList {
  margin-top:.5rem; 
  .shopItem {
    clear: both;
    flex-flow: row wrap;
    margin-top: 0.6rem;
    display: flex;
    justify-content: space-around;
  }
  div.shoplistTitle {
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
}
</style>

