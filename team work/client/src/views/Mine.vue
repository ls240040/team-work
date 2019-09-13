<!--Mine.vue 我的 页面组件-->
<template>
  <div class="mine">
    <minedatum></minedatum>
    <mineorder></mineorder>
    <minestatus></minestatus>
    <mineserve></mineserve>
    <mineabout></mineabout>
    <mineset></mineset>
  </div>
</template>
<script>
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
export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    minedatum: mineDatum,
    mineorder: mineOrder,
    minestatus: mineStatus,
    mineserve: mineServe,
    mineabout: mineAbout,
    mineset: mineSet
  }
};
</script>
<style lang="scss">
@import url("../assets/scss/reset.scss");
  .mine{
    background:#eee;
  }
</style>

