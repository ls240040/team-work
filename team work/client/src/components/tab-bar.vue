<!-- 底部导航栏 组件 -->
<template>
  <div id="tab0">
    <mt-tabbar style="position: fixed">
      <mt-tab-item id="tab1" @click.native="goIndex">
        <img slot="icon" :src="`http://127.0.0.1:5050/icon/${indexurl}`">
        首页
      </mt-tab-item>
      <mt-tab-item id="tab2" @click.native="goCommunity">
        <img slot="icon" :src="`http://127.0.0.1:5050/icon/${communityurl}`">
        社区
      </mt-tab-item>
      <mt-tab-item id="tab3" @click.native="goVIP">
        <img slot="icon" :src="`http://127.0.0.1:5050/icon/${vipurl}`">
        会员
      </mt-tab-item>
      <mt-tab-item id="tab4" @click.native="goMine">
        <img slot="icon" :src="`http://127.0.0.1:5050/icon/${mineurl}`">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      indexurl: "index_icon.png",
      communityurl: "community_icon.png",
      vipurl: "vip_icon.png",
      mineurl: "mine_icon.png"
    };
  },
  methods: {
    goIndex: function() {
      this.$router.push({ path: "/" });
    },
    goCommunity: function() {
      this.$router.push({ path: "/Community" });
    },
    goVIP: function() {
      this.$router.push({ path: "/vip" });
    },
    goMine: function() {
      this.$router.push({ path: "/Mine" });
    }
  }
};
</script>
<style scoped>
</style>
