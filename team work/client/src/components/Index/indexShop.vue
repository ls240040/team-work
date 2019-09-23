<!--index.vue 商品组件-->
<template>
  <div class="shop">
    <div v-for="(item,index) in list1" :key="index">
      <img :src="`http://127.1:5050${item.S_Href}`" alt>
      <p class="shopTitle">{{item.S_Title}}</p>
      <p>
        <span>{{item.S_price}}捞币</span>&nbsp;兑换{{item.S_Count}}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list1: []
    };
  },
  methods: {
    loadimg() {
      var url = "index/indexShop";
      this.axios.get(url).then(res => {
        if (res.data.code == 1) {
          this.list1 = res.data.data;
          console.log(this.list1);
        }
      });
    }
  },
  created() {
    this.loadimg();
  }
};
</script>

<style lang="scss">
.shop {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  text-align: left;
  margin-top: 0.3rem;
  img {
    width: 3rem;
    border-radius: 0.1rem;
  }
  p {
    margin-top: 0.2rem;
    font-size: 0.3rem;
    color: #999;
    span {
      color: #cfb53b;
      font-weight: 600;
    }
  }
  p.shopTitle {
    font-size: 0.4rem;
    color: #000;
    width: 2.5rem;
    display: block;
    overflow: hidden;
    word-break: keep-all;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
</style>

