<!--Login.vue 用户登录组件-->
<template>
  <div>
    <div class="bgPic">
      <img src="http://127.0.0.1:5050/su_background.png" alt>
    </div>
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
div.bgPic img {
  width: 100%;
  height: 100%;
  z-index: 0;
}
div.content{
    position: absolute;
    top: 0;
    
}
</style>

