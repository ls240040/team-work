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
      // tab-container 
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
            <span class="a1">{{food.F_Name}}</span>
            <span class="z1">x{{food.num}}</span>
            <span style="color:#f00;font-size:0.3rem">￥{{food.F_Price*food.num}}</span>
          </div>
        </div>
      </div>

      <!-- 共计 -->
      <!-- <div class="d1" style="margin-bottom:0.1rem">
        <span class="a1">配送费</span>
        <span class="a1" style="font-size:0.3rem">￥38</span>
      </div>-->
    </div>
    <div class="y1">
      <!-- <div style="border-bottom:0.01rem solid #e2e2e2">
        <div class="d1" style="height:0.6rem;line-height:0.6rem;overflow:hidden">
          <span class="b1">整单商品优惠</span>
          <span class="z1">所有商品立减20.0元</span>
        </div>
      </div>-->
    </div>
    <div style="background-color:#fff">
      <div style="border-top:0.01rem solid #e2e2e2;margin:0;padding:0;">
        <div class="d1 toPay" style>
          <!-- <span style="margin-top:.3rem;margin-left:0.2rem" class="z1">已优惠 -￥45</span>
          <span style="margin-top:.3rem;" class="z1">还需付 ￥309</span>-->
          <div class="t1">
            <p class="z1">总价</p>
            <p class="z1">￥{{totalPrice}}</p>
          </div>
          <mt-button type="primary" :style="`display:${OrderSuccess};background-color:#555;`">下单成功</mt-button>
          <mt-button type="primary" @click="addOrder" :style="`display:${OrderStatue}`">确认下单</mt-button>
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
      temp: [
        "选择地址： 铂澜大象城店",
        "送达时间： 一小时内",
        "支付方式： 支付宝"
      ],
      tem: ["自取地址", "联系方式", "到店时间", "支付方式"],
      MerName: "", //店铺名称
      count: this.$route.query.count, //一共多少食物
      foodList: [], //已点食物
      totalPrice: this.$route.query.totalPrice, //总价
      OrderSuccess: "none",
      OrderStatue: ""
    };
  },
  methods: {
    //加载传过来的已点的food
    loadList() {
      var M_ID = this.$route.query.M_ID; //拿到店家ID
      var D_ID = this.$route.query.D_ID; //拿到桌子ID
      var foodData = this.$route.query.foodData; //拿到已点的food

      var url = "/menu/getMerName"; //获取店铺名称
      this.axios.get(url, { params: { M_ID: M_ID } }).then(res => {
        if (res.data.code == 1) {
          this.MerName = res.data.data[0].M_Name;
        }
      });

      var url1 = "/menu/getFoodName";
      for (let i = 0; i < foodData.length; i++) {
        this.axios
          .get(url1, { params: { F_ID: foodData[i].F_ID } })
          .then(res => {
            if (res.data.code == 1) {
              let FName = res.data.data[0].F_Name;
              let FPrice = res.data.data[0].F_Price;
              let example = {
                F_Name: FName,
                F_Price: this.$route.query.foodData[i].num,
                num: this.$route.query.foodData[i].num,
                F_Price: FPrice
              };
              this.foodList.push(example);
            }
          });
        // console.log(this.foodList);
      }
    },
    //点击按钮后添加订单到数据库
    addOrder() {
      //O_MID店家ID，O_DID桌子ID，O_UID用户ID，O_Time下单时间，O_Statue订单状态，O_Phone下单电话，O_FID下单的食物，O_Totle实际消费
      //O_Dis优惠0，O_PayStatue支付状态是/否，O_Note说明

      var M_ID = this.$route.query.M_ID, //拿到店家ID
        D_ID = this.$route.query.D_ID, //拿到桌子ID
        U_ID = sessionStorage.getItem("accessToken"), //拿到用户ID
        Time = this.getNowFormatDate(),
        Statue = 1,
        Phone = 15312345678,
        Dis = 0,
        Totle = this.totalPrice - Dis,
        PayStatue = 1,
        Note = "koi";

      var foodData = this.$route.query.foodData;
      var FID = "";
      for (var i = 0; i < foodData.length; i++) {
        FID = FID + foodData[i].F_ID + "*" + foodData[i].num; //1*1,2*3,...,7*6
        if (i < foodData.length - 1) {
          FID = FID + ",";
        } //最后一个不加","
      }
      console.log(FID);
      var url = "/menu/addOrder"; //获取店铺名称
      this.axios
        .get(url, {
          params: {
            O_MID: M_ID,
            O_DID: D_ID,
            O_UID: U_ID,
            O_Time: Time,
            O_Statue: Statue,
            O_Phone: Phone,
            O_FID: FID,
            O_Totle: Totle,
            O_Dis: Dis,
            O_PayStatue: PayStatue,
            O_Note: Note
          }
        })
        .then(res => {
          if (res.data.code == 1) {
            console.log("success");
            this.$router.push({ path: "/diancan" });
            this.$router.go(0);
          } else {
            console.log("fail");
          }
        });
    },
    //获取现在的时间
    getNowFormatDate() {
      var date = new Date();
      var seperator1 = "-";
      var seperator2 = ":";
      var month = date.getMonth() + 1;
      var strDate = date.getDate();
      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
      }
      var currentdate =
        date.getFullYear() +
        seperator1 +
        month +
        seperator1 +
        strDate +
        " " +
        date.getHours() +
        seperator2 +
        date.getMinutes() +
        seperator2 +
        date.getSeconds();
      return currentdate;
    },
    //返回
    goback() {
      this.$router.go(-1);
    }
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
.backfaker {
  width: 100%;
  height: 0.5rem;
  font-size: 0.3rem;
  background-color: #fff;
}
</style>