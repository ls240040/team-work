<template>
  <div class="rights">
    <div class="clear">
      <ul>
        <li><a @click="goCarousel0" ><img src="http://127.0.0.1:5050/present.png"><span>捞币换礼</span></a></li>
        <li><a @click="goCarousel1" ><img src="http://127.0.0.1:5050/birthdaycake.png"><span>生日赠礼</span></a></li>
        <li><a @click="goCarousel2" ><img src="http://127.0.0.1:5050/reddiamond.png"><span>升级礼遇</span></a></li>
        <li><a @click="goCarousel3" ><img src="http://127.0.0.1:5050/market.png"><span>线下活动</span></a></li>
        <li><a @click="goCarousel4" ><img src="http://127.0.0.1:5050/crown.png"><span>VIP 专享</span></a></li>
        <li><a @click="goCarousel5" ><img src="http://127.0.0.1:5050/workbag.png"><span>包间会议</span></a></li>
        <li><a><img src="http://127.0.0.1:5050/more.png"><span>期待更多</span></a></li>
      </ul>
    </div>
    <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in items" :key="item.id">
        <a rel="external nofollow">
          <img :src="`http://127.0.0.1:5050${item.C_Href}`" class="img" />
        </a>
      </mt-swipe-item>
    </mt-swipe>
  </div>
  </div>
</template>

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
      items: []
    };
  },
  methods:{
    // 拿轮播图地址
    loadIndex() {
      var url = "vip/carousel";
      this.axios.get(url).then(res => {
        if (res.data.code == 1) {
          this.items = res.data.data;
        }
      });
    },

    //绑函数传值（？？？）
    goCarousel0:function(){this.$router.push({ path: '/vipcarousel' ,query: {id: 0}});},
    goCarousel1:function(){this.$router.push({ path: '/vipcarousel' ,query: {id: 1}});},
    goCarousel2:function(){this.$router.push({ path: '/vipcarousel' ,query: {id: 2}});},
    goCarousel3:function(){this.$router.push({ path: '/vipcarousel' ,query: {id: 3}});},
    goCarousel4:function(){this.$router.push({ path: '/vipcarousel' ,query: {id: 4}});},
    goCarousel5:function(){this.$router.push({ path: '/vipcarousel' ,query: {id: 5}});}
  },
  //创建时载入
  created() {
    this.loadIndex();
  }

};
</script>
<style scoped>
.clear:after{
  content:"";
  display:block;
  clear:both;
}
.rights ul{
    list-style: none;
    padding: 0;
    margin: 0;
}
.rights ul li{
    position: relative;
    float: left;
    margin-left: 0.5rem;
    margin-right: 0.35rem;    
}
.rights ul li img{
  position: absolute;
  width: 0.5rem;
  top: 0.1rem;
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
  border-radius: 0.2rem;
}
.mint-swipe {
  height: 2.1rem;
}
</style>