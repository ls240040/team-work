<!--index.vue -->
<template>
  <div>
    <indextop></indextop>
    <indexf2></indexf2>
    <indexcarousel></indexcarousel>
    <indexshoplist></indexshoplist>
    <indextitle></indextitle>
  </div>
</template>
<script>
//负责引入indexTop子组件
import indexTop from "../components/Index/indexTop";
import indexF2 from "../components/Index/indexF2";
import indexCarousel from "../components/Index/indexCarousel";
import indexShoplist from "../components/Index/indexShoplist";
import indexTitle from "../components/Index/indexTitle";
export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    indextop: indexTop,
    indexf2: indexF2,
    indexcarousel: indexCarousel,
    indexshoplist:indexShoplist,
    indextitle:indexTitle
  }
};
</script>
<style lang="scss">
@import url("../assets/scss/reset.scss");
</style>

