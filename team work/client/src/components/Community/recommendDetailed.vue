<template>
  <div class="recdet">
    <mt-header title="详情">
      <router-link to="/Community" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="name">
      <img src="http://127.0.0.1:5050/icon/touxiang.png" alt />
      <div>
        <p>嘻嘻哈哈</p>
        <img class="medal" src="http://127.0.0.1:5050/icon/warmth_v_4.png" alt />
        <img class="medal" src="http://127.0.0.1:5050/icon/su_vipgold.png" alt />
        <img class="medal" src="http://127.0.0.1:5050/icon/su_vipred.png" alt />
        <img class="medal" src="http://127.0.0.1:5050/icon/su_vipsilver.png" alt />
        <p class="sign">求点赞关注，求一起嘻嘻哈哈哈哈啊哈哈哈啊哈哈</p>
      </div>
      <span>+关注</span>
    </div>
    <div class="text">
      <span class="redspan">
        #
        <span>火锅中必点的素菜</span>#
      </span>
      <span>标题，再给大家讲一段长不胖的素菜</span>
      <p>1.嘻嘻哈哈嘻嘻哈哈嘻嘻哈哈嘻嘻哈哈嘻嘻哈哈嘻嘻哈哈嘻嘻哈哈嘻嘻哈2.嘻嘻哈哈嘻嘻哈哈嘻嘻哈哈嘻嘻哈哈嘻嘻哈哈嘻嘻哈哈嘻嘻哈哈嘻嘻哈3.嘻嘻哈哈嘻嘻哈哈嘻嘻哈哈嘻嘻哈哈嘻嘻哈哈嘻嘻哈哈嘻嘻哈哈嘻嘻哈</p>
      <img src="http://127.0.0.1:5050/icon/timg.jpg" alt />
      <p>
        发布于
        <span>2019-6-3</span>
      </p>
    </div>
    <!-- 引入评论人员组件 -->
    <recommendName></recommendName>
    <recommendbottom></recommendbottom>
  </div>
</template>
<script>
//负责引入recommendName.vue 子组件
import recommendName from "./recommendName";
import recommendbottom from "./recommendbottom";
export default {
  data() {
    return {
      list: []
    };
  },
  methods: {
    loadmsg() {
      var params = new URLSearchParams();
      params.append("id", 1);
      this.axios
        .post("/user/comment", params) //传参
        .then(res => {
          if (res.data.code == 1) {
              this.list=res.data.data
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  },
  components: {
    recommendName: recommendName,
    recommendbottom: recommendbottom
  }
};
</script>
<style lang="scss" scoped>
@import url("../../assets/scss/reset.scss");
.recdet {
  .mint-header {
    padding-top: 0.4rem;
    padding-bottom: 0.2rem;
    font-size: 0.35rem;
    border-bottom: 1px solid #ddd;
    margin-bottom: 0.3rem;
  }
  .name {
    width: 100%;
    display: flex;
    justify-content: space-around;
    font-size: 0.3rem;
    img {
      width: 0.7rem;
      height: 0.7rem;
    }
    div {
      width: 60%;
      display: inline-block;
      text-align: left;
      margin-right: 5%;
      p {
        display: inline-block;
        margin-right: 0.1rem;
        margin-bottom: 0.15rem;
      }
      .medal {
        width: 0.3rem;
        height: 0.3rem;
        vertical-align: middle;
      }
      .sign {
        font-size: 0.15rem;
        color: #aaa;
        display: -webkit-box;
        display: -moz-box;
        text-overflow: ellipsis;
        -o-text-overflow: ellipsis;
        overflow: hidden;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
      }
    }
    span {
      height: 0.25rem;
      line-height: 0.25rem;
      font-size: 0.1rem;
      color: #f00;
      border: 1px solid #f00;
      border-radius: 0.5rem;
      padding: 0.1rem 0.2rem;
    }
  }
  .text {
    padding: 0.2rem;
    font-size: 0.2rem;
    text-align: left;
    line-height: 0.3rem;
    .redspan {
      color: #f00;
    }
    img {
      width: 1.5rem;
      height: 1.6rem;
      margin-top: 0.1rem;
    }
  }
}
</style>