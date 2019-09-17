<template>
  <div class="vip">
    <titlebar></titlebar>
    <vipcard></vipcard>
    <viprights></viprights>
    <vipexchange></vipexchange>
    <div class="know">会员须知<img src="http://127.0.0.1:5050/icon/icon_go.webp" alt=""></div>
    <div class="problem">常见问题<img src="http://127.0.0.1:5050/icon/icon_go.webp" alt=""></div>
  </div>
  
</template>

<script>
import TitleBar from "../components/VIP/TitleBar";
import VIPCard from "../components/VIP/VIPCard";
import VIPRights from "../components/VIP/VIPRights";
import VIPExchange from "../components/VIP/VIPExchange";
import VIPCarouselDDD from "../components/VIP/VIPCarouselDDD";

export default {
  
  data(){
      return{};
  },
  methods:{

  },
  components: {
    "titlebar": TitleBar,
    "vipcard": VIPCard,
    "viprights": VIPRights,
    "vipexchange": VIPExchange,
    "vipcarouselddd": VIPCarouselDDD
  }
};
</script>

<style scoped>
  .know,.problem{
    height: 0.8rem;
    line-height: 0.8rem;
    text-align: left;
    padding-left: 0.2rem;
    border:1px solid #999; 
    border-left: 0;
    border-right: 0;
    font-size:0.35rem;

  }
  .problem{border-top: 0;}
  .know>img,.problem>img{
    height: 0.3rem;
    float: right;
    position: relative;
    right: 0.2rem;
    top: 0.2rem;
  }
</style>