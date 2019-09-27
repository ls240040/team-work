<template>
  <div class="vip">
    <titlebar></titlebar>
      <vipcardlogined  v-if="islog"></vipcardlogined>
    <vipcard v-else></vipcard>
  
    <viprights></viprights>
    <vipexchange></vipexchange>
    <div class="know">
      会员须知
      <img src="http://127.0.0.1:5050/icon/icon_go.webp" alt />
    </div>
    <div class="problem">
      常见问题
      <img src="http://127.0.0.1:5050/icon/icon_go.webp" alt />
    </div>

    <!-- 底部bar -->
    <tab-bar ref="child"></tab-bar>
  </div>
</template>

<script>
import TitleBar from "../components/VIP/TitleBar";
import VIPCard from "../components/VIP/VIPCard";
import VIPCardLogined from "../components/VIP/VIPCardLogined";
import VIPRights from "../components/VIP/VIPRights";
import VIPExchange from "../components/VIP/VIPExchange";
import TabBar from "../components/tab-bar";

export default {
  data() {
    return {
      islog: ""
    };
  },
  methods: {},
  components: {
    titlebar: TitleBar,
    vipcard: VIPCard,
    vipcardlogined: VIPCardLogined,
    viprights: VIPRights,
    vipexchange: VIPExchange,
    "tab-bar": TabBar
  },
  mounted() {
    window.scroll(0, 0); //让跳转后页面在顶部
    this.$refs.child.vipurl = "vip_iconred.png"; //改变图标颜色
    this.$refs.child.vipcolor = "red"; //改变图标颜色
    if (sessionStorage.getItem("accessToken")) {
      this.islog = true;
    } else {
      this.islog = false;
    }
  },
  created() {}
};
</script>

<style scoped>
.know,
.problem {
  height: 0.8rem;
  line-height: 0.8rem;
  text-align: left;
  padding-left: 0.2rem;
  border: 1px solid #999;
  border-left: 0;
  border-right: 0;
  font-size: 0.35rem;
}
.problem {
  border-top: 0;
}
.know > img,
.problem > img {
  height: 0.3rem;
  float: right;
  position: relative;
  right: 0.2rem;
  top: 0.2rem;
}
</style>