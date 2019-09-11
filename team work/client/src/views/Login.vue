<!--Login.vue 用户登录组件-->
<template>
  <div>
    <div class="content">
      <logintop></logintop>
    </div>
  </div>
</template>
<script>
//负责引入Logintop 子组件
import Logintop from "../components/Login/logintop";
export default {
  data() {
    return {};
  },
  methods: {},

  components: {
    logintop: Logintop
  }
};
</script>
<style lang="scss">

body {
  background-color: rgba($color: #fe6539, $alpha: 0.1);
  padding: 0;
}
</style>

