<!--recommendName.vue 评论页面组件-->
<template>
  <div class="recommendName">
    <!-- 评论框 -->
    <div v-for="(item,index) in list1" :key="index">
      <div class="comment">
        <div class="divs">
          <img class="head" src="http://127.0.0.1:5050/icon/timg.jpg" alt />
          <div class="text">
            <p class="p1">{{item.U_Name}}</p>
          </div>
        </div>
        <div></div>
      </div>
      <p class="ptext">{{item.CO_Content}}</p>
    </div>
    <div style="height:1rem"></div>
  </div>
</template>
<script>
// // 引入公共的bus，来做为中间传达的工具
import Bus from '../../../src/Bus.js'
export default {
  data() {
    return {
      list1: [
        {
          U_Name: "",
          CO_Content: ""
        }
      ],
      list2: [[]],
      idd: "",
      bbber: []
    };
  },
   mounted: function() {
    // 用$on事件来接收参数
    Bus.$on("aa", data => {
      console.log(data);
      this.value = data;
      if(this.value=="修改成功"){
        this.loadMsg();
      }
    });
  },
  methods: {
    // coNice(coid, index) {
    //   this.bbber[index] = !this.bbber[index];
    //   this.idd = this.$route.params.id;
    //   var uid = sessionStorage.getItem("accessToken");
    //   var params = new URLSearchParams();
    //   params.append("id", this.idd);
    //   params.append("coid", coid);
    //   params.append("isClick", isClick);
    //   this.axios
    //     .post("/user/cNice", params) //传参
    //     .then(res => {})
    //     .catch(res => {});
    // },
    loadMsg() {
      var uid = sessionStorage.getItem("accessToken");
      this.idd = this.$route.params.id;
      var params = new URLSearchParams();
      params.append("id", this.idd);
      this.axios
        .post("/user/content", params) //传参
        .then(res => {
          if (res.data.code == 1) {
            this.list1 = res.data.data;
            console.log(this.list1,234)
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    },
  },

  created() {
    this.loadMsg();
  }
};
</script>

<style lang="scss">
.recommendName {
  .photo {
    width: 95%;
    background: #eee;
    text-align: left;
    margin: 0rem 0.2rem 0rem 0.2rem;
    img {
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 50%;
      margin: 0rem 0.05rem 0rem 0.05rem;
    }
  }
  .comment {
    margin-top: 0.2rem;
    font-size: 0.25rem;
    display: flex;
    justify-content: space-between;
    padding: 0.2rem;
    border-top: 1px solid #ddd;
    .divs {
      width: 50%;
      text-align: left;
      .head {
        width: 0.6rem;
        height: 0.6rem;
        border-radius: 50%;
        margin-right: 0.1rem;
        vertical-align: middle;
      }
      .text {
        display: inline-block;
        text-align: left;
        .p1 {
          display: inline-block;
        }
        img {
          width: 0.3rem;
          height: 0.3rem;
          vertical-align: middle;
          margin-left: 0.1rem;
        }
      }
    }
    .heart {
      width: 0.4rem;
      height: 0.4rem;
      vertical-align: middle;
      margin-right: 0.1rem;
    }
  }
  .ptext {
    font-size: 0.25rem;
    text-align: left;
    padding: 0rem 0.3rem 0rem 0.9rem;
    border-bottom: 1px solid #ddd;
    padding-bottom: 0.2rem;
  }
}
</style>

