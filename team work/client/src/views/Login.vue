<!--Login.vue 用户登录组件-->
<template>
  <div>
    <div class="content">
      <logintop></logintop>
      <logininput></logininput>
    </div>
  </div>
</template>
<script>
//负责引入Logintop 子组件
import Logintop from "../components/Login/logintop";
import Logininput from "../components/Login/loginInput";
export default {
  data() {
    return {};
  },
  methods: {},

  components: {
    logintop: Logintop,
    logininput: Logininput,
  }
};
</script>
<style lang="scss">

body {
  background-color: rgba($color: #fe6539, $alpha: 0.1);
  padding: 0;
}
</style>

