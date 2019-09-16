<template>
  <div class="rights">
    <ul>
      <li><a href=""><img src="http://127.0.0.1:5050/present.png"><span>捞币换礼</span></a></li>
      <li><a href=""><img src="http://127.0.0.1:5050/birthdaycake.png"><span>生日赠礼</span></a></li>
      <li><a href=""><img src="http://127.0.0.1:5050/reddiamond.png"><span>升级礼遇</span></a></li>
      <li><a href=""><img src="http://127.0.0.1:5050/market.png"><span>线下活动</span></a></li>
      <li><a href=""><img src="http://127.0.0.1:5050/crown.png"><span>VIP专享</span></a></li>
      <li><a href=""><img src="http://127.0.0.1:5050/workbag.png"><span>包间会议</span></a></li>
      <li><a href=""><img src="http://127.0.0.1:5050/more.png"><span>期待更多</span></a></li>
    </ul>
    <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in items" :key="item.id">
        <a :href="item.href" rel="external nofollow">
          <img :src="item.url" class="img" />
        </a>
      </mt-swipe-item>
    </mt-swipe>
  </div>
  </div>
</template>
<style scoped>
.rights ul{
    list-style: none;
    padding: 0;
    margin: 0;
}
.rights ul li{
    position: relative;
    display: inline-block;
    margin-left: 0.3rem;
    margin-right: 0.3rem;
}
.rights ul li img{
  position: absolute;
  width: 0.5rem;
  top: 0.15rem;
  left: 0.18rem;
}
.rights ul li a{
    text-decoration: none;
    color: black;
}
.rights ul li span{
    font-size: 0.2rem;
}

.mint-swipe img {
  width: 100%;
}
.mint-swipe {
  height: 2.2rem;
}
</style>
<script>
import { Swipe, SwipeItem } from "mint-ui";
import "mint-ui/lib/style.css";

export default {
  components: {
    "mt-swipe": Swipe,
    "mt-swipe-item": SwipeItem
  },
  data() {
    return {
      items: [
        {
          href: "",
          url: "http://127.0.0.1:5050/vip/lb1.png"
        },
        {
          href: "",
          url: "http://127.0.0.1:5050/vip/lb2.png"
        },
        {
          href: "",
          url: "http://127.0.0.1:5050/vip/lb3.png"
        },
        {
          href: "",
          url: "http://127.0.0.1:5050/vip/lb4.png"
        }
      ]
    };
  }
};
</script>