<template>
  <div class="Wai" style="background-color:rgb(252, 252, 252);">
    <div class="y1">
      <mt-navbar v-model="selected">
        <mt-tab-item id="waisong">外送</mt-tab-item>
        <mt-tab-item id="myself">自提</mt-tab-item>
      </mt-navbar>
      <!-- tab-container -->
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="waisong">
          <div style class="bor" v-for="(item,i) of temp" :key="i">
            <img style="margin:0.15rem" :src="`http://127.0.0.1:5050/icon/image${i}.png`" alt />
            <span class="c1" style="text-align:left">{{item}}</span>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="myself">
          <div class="bor" v-for="(item,i) of tem" :key="i">
            <span class="c1">{{item}}</span>
          </div>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>

    <div class="y1">
      <div style="border-bottom:0.01rem solid #e2e2e2">
        <span class="c1">———— 海底捞火锅外送(庆春路店) ————</span>
        <div class="d1">
          <span class="z1">已选商品</span>
          <span class="z1">共5份</span>
        </div>
      </div>
      <!-- 内部生成food列表 -->
      <div>
        <div class="cs" style="border-bottom:0.01rem solid #e2e2e2;">
          <div class="d1" style="margin-bottom: 0.1rem;">
            <span class="a1">2-5人餐np1x</span>
            <span style="margin-left:2rem" class="z1">x1</span>
            <span style="color:#f00;font-size:0.3rem">￥309</span>
          </div>
        </div>
      </div>

      <!-- 共计 -->
      <div class="d1" style="margin-bottom:0.1rem">
        <span class="a1">配送费</span>
        <span class="a1" style="font-size:0.3rem">￥38</span>
      </div>
    </div>
    <div class="y1">
      <div style="border-bottom:0.01rem solid #e2e2e2">
        <div class="d1" style="height:0.6rem;line-height:0.6rem;overflow:hidden">
          <span class="b1">整单商品优惠</span>
          <span class="z1">所有商品立减20.0元</span>
        </div>
      </div>
      <div class="t1">
        <p class="z1">原价</p>
        <p class="z1">￥309</p>
      </div>
    </div>
    <div style="background-color:#fff">
      <div style="border-top:0.01rem solid #e2e2e2;margin:0;padding:0;">
        <div class="d1" style="margin:0;padding:0;">
          <span style="margin-top:.3rem;margin-left:0.2rem" class="z1">已优惠 -￥45</span>
          <span style="margin-top:.3rem;" class="z1">还需付 ￥309</span>
          <mt-button type="primary">确认下单</mt-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selected: "waisong",
      temp: ["选择收获时间", "送达时间", "支付方式"],
      tem: ["自取地址", "联系方式", "到店时间", "支付方式"]
    };
  },
  methods: {
    //加载传过来的已点的food
    loadList() {
      var M_ID=this.$route.query.M_ID;//拿到店家ID
      var D_ID=this.$route.query.D_ID;//拿到桌子ID
      var foodData = this.$route.query.foodData;//拿到已点的food
      

    }
  },
  created() {
    this.loadList();
  }
};
</script>
<style lang="scss">
.Wai {
  .bor {
    text-align: left;
    align-items: center;
    display: flex;
    height: 1rem;
    position: relative;
  }
  .nav {
    height: 3rem;
    background: #000;
  }
  .img {
    position: absolute;
    right: 0.1rem;
    top: 1rem;
    width: 0.3rem;
    height: 0.3rem;
  }
  .w1 {
    display: flex;
    justify-content: space-around;
    font-size: 0.3rem;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 500;
  }
  .t1 {
    font-size: 0.2rem;
    color: #666;
    font-family: "Times New Roman", Georgia, Serif;
    display: flex;
    justify-content: space-between;
    margin: 0.3rem;
    background: rgb(252, 252, 252);
  }
  .y1 {
    margin: 0.1rem;
    background-color: #fff;
    border-radius: 3%;
  }
  .b1 {
    font-size: 0.4rem;
    color: #000;
  }
  .c1 {
    font-size: 0.3rem;
    color: #000;
    // font-family:"Times New Roman",Georgia,Serif;
  }
  .z1 {
    font-size: 0.2rem;
    color: #666;
    font-family: "Times New Roman", Georgia, Serif;
  }
  .d1 {
    display: flex;
    justify-content: space-between;
    margin: 0.3rem;
  }
  .a1 {
    font-size: 0.2rem;
    color: #000;
    // font-family:"Times New Roman",Georgia,Serif;
  }
  .cs {
    .d1 {
      display: flex;
      justify-content: space-between;
      margin: 0.3rem;
    }
    .a1 {
      font-size: 0.2rem;
      color: #000;
    }
    .z1 {
      font-size: 0.2rem;
      color: #666;
      font-family: "Times New Roman", Georgia, Serif;
    }
  }
}
</style>