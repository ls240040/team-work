<template>
  <div class="community" style="overflow:auto">
    <h1>社区</h1>
    <!-- nav -->
    <mt-navbar class="nav" v-model="active">
      <mt-tab-item id="attention">关注</mt-tab-item>
      <mt-tab-item id="recommend">推荐</mt-tab-item>
      <mt-tab-item id="doyen">达人</mt-tab-item>
    </mt-navbar>
    <!--切换面板列表-->
    <mt-tab-container class="container" v-model="active">
      <mt-tab-container-item id="attention">
          <communityfriends></communityfriends>
      </mt-tab-container-item>
      <mt-tab-container-item id="recommend">
          <communityrecommend></communityrecommend>
      </mt-tab-container-item>
      <mt-tab-container-item id="doyen">
        <communitydoyen></communitydoyen>
      </mt-tab-container-item>
    </mt-tab-container>

    <!-- 底部bar -->
    <tab-bar ref="child"></tab-bar>
  </div>
</template>

<script>
import communityFriends from "../components/Community/communityFriends";
import communityRecommend from "../components/Community/communityRecommend";
import communityDoyen from "../components/Community/communityDoyen";
import TabBar from "../components/tab-bar";
export default {
  data() {
    return {
      active: "recommend",
    };
  },
  components: {
    communityfriends: communityFriends,
    communityrecommend: communityRecommend,
    communitydoyen: communityDoyen,
    "tab-bar": TabBar,
  },
   mounted: function() {
    window.scroll(0, 0); //让跳转后页面在顶部
    this.$refs.child.communityurl = "community_iconred.png"; //改变图标颜色
    this.$refs.child.communitycolor = "red"; //改变图标颜色
  },

};
</script>
<style lang="scss">
@import url("../assets/scss/reset.scss");
.community {
  background-color: #fff;
  .mint-navbar .mint-tab-item.is-selected {
    border-bottom: 0.03rem solid #ff2626 !important;
    color: #ff2626 !important;
    margin-bottom: 0;
  }
  .mint-navbar {
    padding: 0 0.3rem;
  }
  .mint-tab-item-label {
    font-size: 0.3rem;
  }
  .mint-navbar .mint-tab-item {
    padding: 0.2rem 0;
  }
  // .head {
  //   display: flex;
  //   justify-content: space-between;
  //   width: 100%;
  //   padding: 0.4rem;
  //   box-sizing: border-box;
  //   h2 {
  //     line-height: 0.6rem;
  //     font-size: 0.4rem;
  //   }
  //   img {
  //     height: 0.6rem;
  //   }
  // }
  h1 {
    text-align: center;
    padding-top: 0;
    font-size: 0.5rem;
    line-height: 3;
    font-weight: 700;
  }
}

// 设置底部bar字体大小
#tab0 > .mint-tabbar .mint-tab-item-label {
  font-size: 0.2rem !important;
}
</style>