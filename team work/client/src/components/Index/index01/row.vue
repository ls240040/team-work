<template>
  <div class="shoplist">
    <div class="top" @click="linkTo1">
      <img src="http://127.0.0.1:5050/icon/arrow-left.png">
      <p>排号</p>
      <div class="location">
        <img src="http://127.0.0.1:5050/icon/row_num_posi.png">
        <span>杭州</span>
      </div>
    </div>

    <div
      class="container"
      id="1"
      v-for="(item,index) of list"
      :key="index"
      @click="linkTo(item.M_Address,item.M_Name)"
    >
      <img class="logo" src="http://127.0.0.1:5050/icon/su_logo.png">
      <div class="info">
        <div class="infotop">
          <div class="time">
            <p>{{item.M_Name}}</p>
            <p>早晨9:00-次日凌晨7:00</p>
          </div>
          <div class="distance">
            <p>{{item.M_Distance}}km</p>
            <p>正在营业</p>
          </div>
        </div>
        <div class="infobottom">
          <img src="http://127.0.0.1:5050/icon/row_num_posi.png">
          <p>{{item.M_Address}}</p>
        </div>
      </div>
    </div>
    <div>
      <mt-popup position="bottom" v-model="popupVisible" popup-transition="popup-fade">
        <div class="peopleNum" style="width:100%;padding:.1rem;">
          <div>
            <div class="tabnav">
              <span style="font-size:.3rem">请选择就餐人数</span>
              <span class="d1" style @click="linkTo2">取消</span>
            </div>
            <mt-picker :slots="slots" @change="onValuesChange" :visibleItemCount="3"></mt-picker>
            <div class="ETime">
              <mt-button type="danger">{{ETime}}</mt-button>
            </div>
            <div class="discr">
              <p>*12人以上请您联系门店</p>
              <p>
                就餐时段
                <span>{{eTime}}</span>
              </p>
              <p>不可跨市别排号，如果您想在下一个市别就餐，请在下一个市别开始后前去排号。午市(09:00-16:00)，晚市(16:00-23:00)，夜市(23:00-次日07:00)</p>
            </div>
          </div>
        </div>
        <div class="btn">
          <mt-button type="danger" size="large" @click="getNum">确认取号</mt-button>
        </div>
      </mt-popup>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      slots: [
        {
          flex: 1,
          values: [
            "1人",
            "2人",
            "3人",
            "4人",
            "5人",
            "6人",
            "7人",
            "8人",
            "9人",
            "10人",
            "11人",
            "12人"
          ],
          className: "slot1",
          textAlign: "center"
        }
      ],
      num: "1人",
      list: [],
      address: "",
      popupVisible: false,
      ETime: "",
      eTime: "",
      shopName: ""
    };
  },
  methods: {
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
    getNum() {
      var uid = sessionStorage.getItem("accessToken");

    var time =this.getNowFormatDate()
    console.log(time)
      //未登陆跳转至登陆页面
      if (uid == null) {
        this.$router.push("/login");
      } else {
        var params = new URLSearchParams();
        params.append("uid", uid);
        params.append("shopname", this.shopName);
        params.append("addr", this.address);
        params.append("eTime", this.eTime);
        params.append("ETime", this.ETime);
        params.append("num", this.num);
        params.append("time", time);
        this.axios
          .post("/index/rownum", params) //传参
          .then(res => {
            if (res.data.code == 1) {
              // this.$router.push({
              //   path: "/"
              // });
              this.$router.push("/paihao_detailed");
            } else {
              this.$toast({ message: "请勿重复排号" });
              setTimeout(res=>{ this.$router.push("/paihao_detailed")},1000)

            }
          })
          .catch(function(err) {
            console.log(err);
          });
      }
    },
    linkTo(addr, shopname) {
      console.log(addr, shopname);
      this.shopName = shopname;
      this.address = addr;
      this.popupVisible = true;
      var now = new Date();
      now = now.getHours();
      console.log(now, this.shopName);
      if (now >= 9 && now < 16) {
        this.ETime = "午市";
        this.eTime = "午市(09:00-16:00)";
      } else if (now >= 16 && now < 23) {
        this.ETime = "晚市";
        this.eTime = "晚市(16:00-23:00)";
      } else {
        this.ETime = "夜市";
        this.eTime = "夜市(23:00-次日07:00)";
      }
    },
    linkTo1() {
      this.$router.go(-1);
    },
    linkTo2() {
      this.popupVisible = false;
    },
    onValuesChange(picker, values) {
      if (values[0] > values[1]) {
        picker.setSlotValue(1, values[0]);
      }
      console.log(values);
      this.num = values;
    },
    //加载店铺信息
    loadMore() {
      var url = "index/shoplist";
      this.axios.get(url).then(res => {
        if (res.data.code == 1) {
          this.list = res.data.data;
          console.log(this.list);
        }
      });
    }
  },
  created() {
    this.loadMore();
  }
};
</script>
<style lang="scss">
// @import url('../../../assets/scss/reset.scss');
//修改toast样式
.mint-toast {
  z-index: 9999;
}
.mint-toast.is-placemiddle {
  position: fixed;
  top: 35%;
}
//修改button样式
.mint-button--large {
  width: 6.7rem;
  margin: 0 auto 0.5rem;
}

.peopleNum {
  .ETime {
    text-align: left;
    margin-left: 1rem;
  }
  font-size: 0.3rem;
  .d1 {
    font-size: 0.3rem;
    color: #666;
    display: inline-block;
    margin-left: 1rem;
  }
  .tabnav {
    margin-top: 0.3rem;
  }
  div.discr {
    margin-top: 0.5rem;
    display: inline-block;
    width: 7rem;
    text-align: left;
    p {
      margin-bottom: 0.3rem;
    }
  }
}
.shoplist {
  .top {
    padding: 0.2rem 0.3rem;
    font-size: 0.4rem;
    display: flex;
    justify-content: space-between;
    line-height: 0.6rem;
    position: relative;
    border-bottom: 1px solid #e7e7e7;
    p {
      position: absolute;
      left: 50%;
      margin-left: -0.5rem;
    }
    img {
      height: 0.4rem;
      display: block;
      margin-top: 0.1rem;
    }
    .location {
      display: flex;
      img {
        height: 0.6rem;
        margin-top: 0;
      }
    }
  }
  .container {
    padding: 0.3rem;
    display: flex;
    justify-content: space-between;
    font-size: 0.4rem;
    border-bottom: 1px solid #ebebeb;
    .logo {
      height: 1.3rem;
      margin-right: 0.3rem;
    }
    .info {
      line-height: 0.5rem;
      text-align: left;
      font-size: 0.3rem;
      .infotop {
        display: flex;
        justify-content: space-between;
        .time p:last-child {
          font-size: 0.25rem;
          color: #bbb;
        }
        .distance p:last-child {
          font-size: 0.2rem;
          color: #ff2626;
          border: 1px solid #ff2626;
          line-height: 0.3rem;
          text-align: center;
        }
      }
      .infobottom {
        padding-right: 0.2rem;
        position: relative;
        img {
          width: 0.35rem;
          vertical-align: bottom;
          position: absolute;
        }
        p {
          font-size: 0.25rem;
          padding-left: 0.38rem;
          line-height: 1.2;
        }
      }
    }
  }
}
</style>