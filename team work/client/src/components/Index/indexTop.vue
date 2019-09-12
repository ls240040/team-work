<!--index.vue 用户登录组件-->
<template>
  <div class="iTop">
    <div class="navBar">
      <div class="navLeft">
        <img src="http://127.0.0.1:5050/icon/msg.png" alt>
      </div>
      <input type="text">
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss">
.iTop {
  width: 100%;
  height: 3.6rem;
  background: url(http://127.1:5050/icon/header_bg.png) no-repeat;
  background-size: 100%;
}

.iTop .navBar .navLeft {
  float: left;
  margin-left: 0.2rem;
}
</style>

