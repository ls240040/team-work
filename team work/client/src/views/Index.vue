<!--index.vue -->
<template>
  <div>
    <indextop></indextop>
  </div>
</template>
<script>
//负责引入indexTop子组件
import indexTop from "../components/Index/indexTop";

export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    "indextop": indexTop,

  }
};
</script>
<style lang="scss">
@import url("../assets/scss/reset.scss");

</style>

