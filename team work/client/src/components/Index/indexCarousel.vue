<!--index.vue 轮播组件-->
<template>
  <div class="indexf3">
    <div class="iconf3">
      <div  @click="storeList">
        <img src="http://127.0.0.1:5050/icon/my_deliver_order.png" alt>
        <p>外卖</p>
      </div>
      <div>
        <img src="http://127.0.0.1:5050/icon/my_exchange_order.png" alt>
        <p>商城</p>
      </div>
      <div>
        <img src="http://127.0.0.1:5050/icon/game_small.png" alt>
        <p>游戏</p>
      </div>
      <div>
        <img src="http://127.0.0.1:5050/icon/collection_small.png" alt>
        <p>征集</p>
      </div>
    </div>
    <hr style="height:1px;opacity:0.7;" >
    <div>
      <div class="indexCar">
        <mt-swipe :auto="4000">
          <mt-swipe-item class="carItem" v-for="(item,index) of indexCarousel" :key="index">
            <img :src="`http://127.0.0.1:5050/${item.C_Href}`">
          </mt-swipe-item>
        </mt-swipe>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      indexCarousel: []
    };
  },
  methods: {
     storeList(){
      this.$router.push("/storeList");
    },
    loadIndex() {
      var url = "index/carousel";
      this.axios.get(url).then(res => {
        if (res.data.code == 1) {
          this.indexCarousel = res.data.data; 
        }
      });
    }
  },
  created() {
    this.loadIndex();
  }
};
</script>
<style lang="scss">
.indexf3 {
  margin-top:.5rem;
  .iconf3 {
    display: flex;
    justify-content: space-around;
    margin-bottom: 0.5rem;
    img {
      width: 0.5rem;
    }
    p {
      font-size: 0.1rem;
      color: #666;
    }
  }
  .indexCar {
    height: 3rem;
    .carItem img {
      width: 100%;
    }
  }
}
</style>

