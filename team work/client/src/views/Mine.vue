<!--Mine.vue 我的 页面组件-->
<template>
  <div class="mine">    
    <minedatumno></minedatumno>
    <!-- <minedatum></minedatum> -->
    <mineorder></mineorder>
    <minestatus></minestatus>
    <mineserve></mineserve>
    <mineabout></mineabout>
    <mineset></mineset>

    <!-- 底部bar -->
    <tab-bar></tab-bar>
  </div>
</template>
<script>
//负责引入mineDatum.vue 子组件
import mineDatumno from "../components/Mine/mineDatumno";
//负责引入mineDatum.vue 子组件
import mineDatum from "../components/Mine/mineDatum";
//负责引入mineOrder.vue 子组件
import mineOrder from "../components/Mine/mineOrder";
//负责引入mineStatus.vue 子组件
import mineStatus from "../components/Mine/mineStatus";
//负责引入mineServe.vue 子组件
import mineServe from "../components/Mine/mineServe";
//负责引入mineAbout.vue 子组件
import mineAbout from "../components/Mine/mineAbout";
//负责引入mineSet.vue 子组件
import mineSet from "../components/Mine/mineSet";

//负责底部bar组件
import TabBar from "../components/tab-bar";

export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    minedatumno: mineDatumno,
    minedatum: mineDatum,
    mineorder: mineOrder,
    minestatus: mineStatus,
    mineserve: mineServe,
    mineabout: mineAbout,
    mineset: mineSet,
    "tab-bar": TabBar,
  },
  mounted() {
    window.scroll(0,0);//让跳转后页面在顶部
  },
};
</script>
<style lang="scss">
@import url("../assets/scss/reset.scss");
  .mine{
    // 页头留空，以便显示 中国移动等信息
    padding-top:0.1rem;
    padding-bottom:1.2rem;
    background:#eee;
  }
</style>

