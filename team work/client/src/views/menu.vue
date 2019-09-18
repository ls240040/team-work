<template>
  <div>
    <menuhead></menuhead>
    <menus></menus>
  </div>
</template>
<script>
import Menuhead from "../components/menu/menuhead.vue";
import Menus from "../components/menu/menu.vue";
export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    menuhead: Menuhead,
    menus: Menus,

  }
};
</script>

<style lang="scss" scoped>
</style>

