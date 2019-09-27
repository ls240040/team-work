<template>
  <div class="Wai" style="background-color:rgb(252, 252, 252);">
    <div class="back">
      <a @click="goback">返回</a>
    </div>
    <!-- <div class="backfaker"></div>
    <div class="y1">
      <mt-navbar v-model="selected">
        <mt-tab-item id="waisong">外送</mt-tab-item>
        <mt-tab-item id="myself">自提</mt-tab-item>
      </mt-navbar>
      //tab-container 
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
    </div> -->

    <div class="y1">
      <div style="border-bottom:0.01rem solid #e2e2e2">
        <span class="c1">———— 海底捞火锅({{MerName}}) ————</span>
        <div class="d1">
          <span class="z1">已选商品</span>
          <span class="z1">共{{count}}份</span>
        </div>
      </div>
      <!-- 内部生成food列表 -->
      <div>
        <div class="cs" style="border-bottom:0.01rem solid #e2e2e2;">
          <div
            class="d1"
            style="margin-bottom: 0.1rem;position:relative;"
            v-for="(food,index) in foodList"
            :key="index"
          >
            <span class="a1" v-if="food">{{food.F_Name}}</span>
            <span class="z1" v-if="food">x{{food.num}}</span>
            <span style="color:#f00;font-size:0.3rem"  v-if="food">￥{{food.F_Price*food.num}}</span>
          </div>
        </div>
      </div>
    </div>

    <div style="background-color:#fff">
      <div style="border-top:0.01rem solid #e2e2e2;margin:0;padding:0;">
        <div class="d1 toPay" style>
          <div class="t1">
            <p class="z1">总价</p>
            <p class="z1">￥{{totalPrice}}</p>
          </div>
          <mt-button type="primary" @click="deleteOrder">删除订单</mt-button>
        </div>
      </div>
    </div>
    <div class="faker"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selected: "waisong",
      temp: ["选择地址： 铂澜大象城店", "送达时间： 一小时内", "支付方式： 支付宝"],
      tem: ["自取地址", "联系方式", "到店时间", "支付方式"],
      MerName: this.$route.query.M_Name, //店铺名称
      count: 0, //一共多少食物
      foodList: [], //已点食物
      totalPrice: this.$route.query.totalPrice //总价
    };
  },
  methods: {
    //加载传过来的订单ID
    loadList() {
      let O_ID = this.$route.query.O_ID;//订单ID

      let url = "/menu/getOrder"; //获取店铺名称
      this.axios.get(url, { params: { O_ID: O_ID } }).then(res => {
        if (res.data.code == 1) {
          let F_IDnum = res.data.data[0].O_FID.split(",");//第一轮根据“,”拆分，1*1
          console.log(F_IDnum);
          for(let i=0;i<F_IDnum.length;i++){
            let F_IDnumpart=F_IDnum[i].split("*");//第二轮根据*拆分成1 1

            let url2 = "/menu/getFoodName";
            this.axios.get(url2, { params: { F_ID: F_IDnumpart[0] } }).then(res => {
              if (res.data.code == 1) {
                let example=res.data.data;
                this.foodList[i]=example[0];//把数据放入foodlist
                this.foodList[i].num=F_IDnumpart[1];//添加num数量
                this.count+=parseInt(F_IDnumpart[1]);//统计一共有多少个
              }
            });

          }
        }
        console.log(this.foodList);
      });
    },

    //删除订单
    deleteOrder(index) {
      var O_ID = this.$route.query.O_ID;
      this.$messagebox.confirm("确定要删除订单" + O_ID + "吗?").then(action => {
        var url = "/menu/deleteOrder";
        this.axios.get(url, { params: { O_ID: O_ID } }).then(res => {
          if (res.data.code == 1) {
            this.$router.go(-1);
          }
        });
      });
    },

    //返回
    goback(){
        this.$router.go(-1);
    },

  },
  created() {
    this.loadList();
  }
};
</script>
<style lang="scss">
.Wai {
  position: relative;
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
    font-size: 0.3rem;
    color: #333;
    font-weight: bold;
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
    // height: 3rem;
    // overflow-y: auto;
    .d1 {
      display: flex;
      justify-content: space-between;
      margin: 0.3rem;
    }
    .a1 {
      font-size: 0.25rem;
      color: #000;
    }
    .z1 {
      font-size: 0.25rem;
      color: #666;
      font-family: "Times New Roman", Georgia, Serif;
      position: absolute;
      right: 2rem;
    }
  }
}
.toPay {
  width: 100%;
  margin: 0 !important;
  padding: 0;
  position: fixed;
  right: 0rem;
  bottom: 0rem;
  background-color: #fff;
}
.faker {
  height: 1rem;
  width: 100%;
}
.back {
  text-align: left;
  position: fixed;
  top: 0.3rem;
  left: 0.3rem;
  font-size: 0.3rem;
  background-color: #fff;
}
.backfaker{
  width: 100%;
  height: 0.5rem;
  font-size: 0.3rem;
  background-color: #fff;
}
</style>