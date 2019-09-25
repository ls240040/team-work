<!--index.vue -->
<template>
  <div><span>aaa</span></div>
</template>
<script>
export default {
  data() {
    return {};
  },
  beforeCreate() {
     this.$router.push({path:'/community'})
     
  },
};
</script>
<style lang="scss">
@import url("../assets/scss/reset.scss");
body {
  background: #fff;
}
</style>

