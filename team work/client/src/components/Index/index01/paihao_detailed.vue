<template>
  <div class="paihao_detailed">
    <mt-header class="myheader" title="排号详情">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="div1" style="display:none">
      <img src="http://127.0.0.1:5050/icon/err.png" alt />
      <span>本时段排号餐位已满，可选其他时段或排号</span>
    </div>

    <div style="background:#eee margin:0.2rem 0rem;"></div>
    <div class="div2">
      <h5>
        <span>{{message.R_ShopName}}</span>
        <img src="http://127.0.0.1:5050/icon/arrow-right.png" alt />
      </h5>
      <h5>
        <span>取号时间</span>
        <span>{{message.R_Time}}</span>
        <span>{{message.R_ETime.slice(0,2)}}</span>
      </h5>
      <h5>
        <span>就餐人数</span>
        <span>
          <span>{{message.R_People}}</span>人
        </span>
      </h5>
      <h5>
        <span>还需等待</span>
        <span>
          <span>{{message.R_ID}}</span>桌
        </span>
        <span>{{size}}</span>
      </h5>
    </div>
    <div class="beizhu">
      <h6>本店排号仅限当前市别使用，过市别作废。若过号，则在现场叫号基础上顺延5-10桌位您优先安排。具体等位时间以现场实际情况为准。</h6>
      <h6>*最终解释权归海底捞国际控股有限公司所有</h6>
    </div>
    <div class="div3">
      <img src="http://127.0.0.1:5050/icon/row_num_posi.png" alt />
      <span>{{message.R_Address}}</span>
      <img src="http://127.0.0.1:5050/icon/arrow-right.png" alt />
    </div>
    <div class="div4" ref="qnmlgxgp" @click="daxiguapi">
      <span class="myspan" @click="cancelNum">取消排号</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: {
        R_ShopName: "",
        R_Time: "",
        R_Address: "",
        R_ETime: "",
        R_People: "",
        R_ID: ""
      },
      size: ""
    };
  },
  methods: {
    daxiguapi() {},
    cancelNum() {
      var rid = this.message.R_ID;
      var params = new URLSearchParams();
      params.append("rid", rid);
      this.axios
        .post("/index/cancelNum", params) //传参
        .then(res => {
           this.$toast({ message: "取消订单成功" });
        });
      setTimeout(res => this.$router.push("/"), 500);
    },

    lodaRowNum() {
      var uid = sessionStorage.getItem("accessToken");
      var obj = {
        uid: uid
      };
      this.axios
        .get("/user/getNum", { params: obj }) //传参
        .then(res => {
          if (res.data.code == 1) {
            this.message = res.data.data[0];
            if (parseInt(this.message.R_People) < 5) {
              this.size = "小桌";
            } else if (parseInt(this.message.R_People) < 9) {
              this.size = "中桌";
            } else {
              this.size = "大桌";
            }
          }
        });
    }
  },
  created() {
    this.lodaRowNum();
  }
};
</script>
<style lang="scss">
.paihao_detailed {
  .myheader {
    height: 1.2rem;
    font-size: 0.4rem;
    border-bottom: 1px solid #ccc;
    padding: 0.4rem 0 0.2rem 0.2rem;
  }
  div {
    background: #fff;
    font-size: 0.2rem;
    img {
      vertical-align: middle;
      width: 0.4rem;
    }
  }
  .div1 {
    padding: 0.15rem;
    text-align: left;
  }
  .div2 {
    margin: 0.2rem 0rem;
  }
  h5 {
    display: flex;
    justify-content: space-between;
    padding: 0.3rem;
    border-top: 0.01rem solid #eee;
    border-bottom: 0.01rem solid #eee;
  }
  .beizhu {
    text-align: left;
    padding: 0.2rem;
    background: #eee;
  }
  .div3 {
    display: flex;
    justify-content: space-between;
    padding: 0.2rem 0.15rem;
    font-size: 0.1rem;
    margin: 0.5rem 0 1rem 0;
    img {
      width: 0.4rem;
      height: 0.4rem;
      vertical-align: top;
      + span {
        display: inline-block;
        width: 6rem;
        text-align: left;
      }
    }
  }
  .div4 {
    display: flex;
    justify-content: space-around;
    span {
      display: inline-block;
      padding: 0.2rem 0.5rem;
      background: #ccc;
      border-radius: 0.1rem;
      border: 1px solid #ccc;
    }
    .myspan {
      background: #e0272c;
      color: #fff;
    }
  }
}
</style>