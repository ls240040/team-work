<!--index.vue -->
<template>
  <div>
    <indextop></indextop>
    <indexf2></indexf2>
    <indexcarousel></indexcarousel>
    <indexshoplist></indexshoplist>
    <indextitle></indextitle>
    <!-- 底部bar -->
    <tab-bar ref="child"></tab-bar>
  </div>
</template>
<script>
//负责引入indexTop子组件
import indexTop from "../components/Index/indexTop";
import indexF2 from "../components/Index/indexF2";
import indexCarousel from "../components/Index/indexCarousel";
import indexShoplist from "../components/Index/indexShoplist";
import indexTitle from "../components/Index/indexTitle";
import TabBar from "../components/tab-bar";
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
    indextitle:indexTitle,
    "tab-bar": TabBar,
  },
  mounted() {
    window.scroll(0,0);//让跳转后页面在顶部
    this.$refs.child.indexurl="index_iconred.png";//改变图标颜色
    this.$refs.child.indexcolor="red";//改变图标颜色
  },
};
</script>
<style lang="scss">
@import url("../assets/scss/reset.scss");
body{
  background: #fff;
}
</style>

