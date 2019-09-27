<template>
  <div class="reBottom">
    <div class="box1">
      <div v-if="bbber" @click="cNice1">
        <img src="http://127.0.0.1:5050/icon/collect-fill.png" alt />点赞
      </div>
      <div @click="pinglun">
        <img src="http://127.0.0.1:5050/icon/comment.png" alt />评论
      </div>
    </div>
  </div>
</template>
<script>
// // 引入公共的bus，来做为中间传达的工具
import Bus from '../../../src/Bus.js'
export default {
  data() {
    return {
      list: [],
      list1: [],
      bbber: false,
      idd: "",
      value:""
    };
  },
  methods: {
    cNice1() {
      this.bbber = !this.bbber;
    },
    pinglun() {
      this.$messagebox
        .prompt("我想说。。。", "")
        .then(({ value, action }) => {
          this.idd = this.$route.params.id;
          var uid = sessionStorage.getItem("accessToken");
          var params = new URLSearchParams();
          params.append("idd", this.idd);
          params.append("val", value);
          params.append("uid", uid);
          params.append("U_Name", this.list.U_Name);
          this.axios
            .post("/user/addComment", params) //传参
            .then(res => {
              if (res.data.code == 1) { 
                Bus.$emit('aa',res.data.msg);
              }
            });
        })
        .catch();
    },
    loadMsg() {
      this.idd = this.$route.params.id;
      var params = new URLSearchParams();
      params.append("id", this.idd);
      this.axios
        .post("/user/content", params) //传参
        .then(res => {
          if (res.data.code == 1) {
            this.list1 = res.data.data;
            var beClick1 = this.list1[0].beClick;
            this.list2 = beClick1.split(",");
            for (var i = 0; i <= this.list2.length; i++) {
              if (this.idd == this.list2[i]) {
                this.bbber = true;
                break;
              }
            }
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  }
};
</script>
<style lang="scss">
@import url("../../assets/scss/reset.scss");
div.mint-msgbox {
  width: 80% !important;
}
.reBottom {
  width: 100%;
  position: fixed;
  bottom: 0;
  .box1 {
    display: flex;
    justify-content: space-around;
    div {
      font-size: 0.5rem;
      img {
        width: 0.5rem;
      }
    }
  }
}
</style>