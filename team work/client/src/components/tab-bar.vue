<!-- 底部导航栏 组件 -->
<template>
  <div id="tab0">
    <div class="faker"></div>
    <mt-tabbar style="position: fixed">
      <mt-tab-item id="tab1" @click.native="goIndex">
        <img slot="icon" :src="`http://127.0.0.1:5050/icon/${indexurl}`">
        <span :style="`color:${indexcolor}`">首页</span>
      </mt-tab-item>
      <mt-tab-item id="tab2" @click.native="goCommunity">
        <img slot="icon" :src="`http://127.0.0.1:5050/icon/${communityurl}`">
        <span :style="`color:${communitycolor}`">社区</span>
      </mt-tab-item>
      <mt-tab-item id="tab3" @click.native="goVIP">
        <img slot="icon" :src="`http://127.0.0.1:5050/icon/${vipurl}`">
        <span :style="`color:${vipcolor}`">会员</span>
      </mt-tab-item>
      <mt-tab-item id="tab4" @click.native="goMine">
        <img slot="icon" :src="`http://127.0.0.1:5050/icon/${mineurl}`">
        <span :style="`color:${minecolor}`">我的</span>
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
      mineurl: "mine_icon.png",

      indexcolor: "",
      communitycolor:"",
      vipcolor:"",
      minecolor:"",
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
    .faker{
        height: 1rem;
    }
</style>
