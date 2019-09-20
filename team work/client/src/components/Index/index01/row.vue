<template>
  <div class="shoplist">
    <div class="top"  @click="linkTo1">
      <img src="http://127.0.0.1:5050/icon/arrow-left.png">
      <p>排号</p>
      <div class="location">
        <img src="http://127.0.0.1:5050/icon/row_num_posi.png">
        <span>杭州</span>
      </div>
    </div>

    <div class="container" id="1" v-for="(item,index) of list" :key="index" @click="linkTo(index)">
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
        <div class="peopleNum" style="width:8rem;">
          <div>
              <div class="tabnav">
                <span style="font-size:.3rem">请选择就餐人数</span> <span style="font-size:.3rem;color:#666;display:inline-block;margin-left:1rem;" @click="linkTo2">取消</span> 
              </div>
            <mt-picker :slots="slots" @change="onValuesChange" :visibleItemCount="3"></mt-picker>
            <div class="discr"> 
                <p>*12人以上请您联系门店</p>
                <p>就餐时段 <span>午市(09:00-16:00)</span></p>
                <p>不可跨市别排号，如果您想在下一个市别就餐，请在下一个市别开始后前去排号。午市(09:00-16:00)，晚市(16:00-23:00)，夜市(23:00-次日07:00)</p>
            </div>
          </div>
        </div>
        <div class="btn">
       <mt-button type="danger" size="large">确认取号</mt-button>
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

      list: [],

      popupVisible: false
    };
  },
  methods: {
    linkTo(S_ID) {
      S_ID = S_ID + 1;
      this.popupVisible = true;
    },
      linkTo1() {
      this.$router.go(-1)
    },
     linkTo2() {
     this.popupVisible = false;
    },
    onValuesChange(picker, values) {
      if (values[0] > values[1]) {
        picker.setSlotValue(1, values[0]);
      }
      console.log(values);
    },
    loadMore() {
      var url = "index/rowNum";
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
<style lang="scss" scoped>
// @import url('../../../assets/scss/reset.scss');
.peopleNum{
    font-size:.3rem ;
    .btn{
        width: 7rem;
    }
    .tabnav{
        margin-top:.3rem; 
    }
    div.discr{
        margin-top:.5rem; 
        display: inline-block;
        width: 7rem;
        text-align: left;
        p{
            margin-bottom:.3rem 
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