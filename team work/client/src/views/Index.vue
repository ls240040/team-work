<!--index.vue -->
<template>
  <div>
    <indextop></indextop>
    <indexf2></indexf2>
    <indexcarousel></indexcarousel>
  </div>
</template>
<script>
//负责引入indexTop子组件
import indexTop from "../components/Index/indexTop";
import indexF2 from "../components/Index/indexF2";
import indexCarousel from "../components/Index/indexCarousel";
export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    indextop: indexTop,
    indexf2: indexF2,
    indexcarousel: indexCarousel
  }
};
</script>
<style lang="scss">
@import url("../assets/scss/reset.scss");
</style>

