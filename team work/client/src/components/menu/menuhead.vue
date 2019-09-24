<!--menu.vue 头部组件-->
<template>
  <div>
    <mt-header fixed title="预订点餐">
      <router-link to="/storeList" slot="left">
        <mt-button icon="back">关闭</mt-button>
      </router-link>
    </mt-header>
    <div class="jiadetou"></div>
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
.mint-header{
  background-color: #fff;
  color:#000
}
.jiadetou{
  width: 100%;
  height: 40px;
}
</style>

