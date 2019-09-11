<!--Login.vue 用户登录组件-->
<template>
  <div>
    <logintop></logintop>
    <loginbottom></loginbottom>
  </div>
</template>
<script>
//负责引入Logintop 子组件
import Logintop from "../components/Login/logintop";
import Loginbottom from "../components/Login/loginbottom";
export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    logintop: Logintop,
    loginbottom: Loginbottom
  }
};
</script>
<style lang="scss">
@import url("../assets/scss/reset.scss");
body {
  background-color: rgba($color: #fe6539, $alpha: 0.1);
}
</style>

