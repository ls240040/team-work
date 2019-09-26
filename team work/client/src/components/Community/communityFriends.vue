<template>
  <div>
    <div class="comfriend" v-for="(item,index) of list" :key="index">
      <div class="info">
        <div class="left">
          <div class="avatar">
            <img :src="`http://127.0.0.1:5050${item.R_Avatar}`" />
          </div>
          <div class="name">
            <span>{{item.R_Name}}</span>
            <img :src="`http://127.0.0.1:5050${item.R_Vip}`" />
            <p>{{item.R_Title}}</p>
          </div>
        </div>
        <div class="logo">
          <img src="http://127.0.0.1:5050/icon/elipsis.png" />
        </div>
      </div>
      <div class="centerinfo">
        <p class="p1">{{item.R_Comment}}</p>
        <div class="pictures">
          <div class="im">
            <img :src="`http://127.0.0.1:5050${item.R_img1}`" />
          </div>
          <div class="im">
            <img :src="`http://127.0.0.1:5050${item.R_img2}`" />
          </div>
          <div class="im">
            <img :src="`http://127.0.0.1:5050${item.R_img3}`" />
          </div>
        </div>
      </div>
      <div class="bottominfo">
        <div class="left">
          <p>{{item.R_Time}}</p>
        </div>
        <div class="right">
          <div>
            <img src="http://127.0.0.1:5050/icon/message.png" />
            <span>{{item.R_Comnum}}</span>
          </div>
          <div>
            <img src="http://127.0.0.1:5050/icon/collect.png" />
            <span>{{item.R_Collect}}</span>
          </div>
        </div>
      </div>
      <hr />
    </div>
  </div>
</template>
<script>
// 引入公共的bus，来做为中间传达的工具
import Bus from '../../../src/Bus.js'
export default {
  inject:['reload'],
  data() {
    return {
      list: [],
      value:""
    };
  },
  methods: {
    loadMore() {
      var url = "community/friends2";
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
  },
  mounted: function() {
    // 用$on事件来接收参数
    Bus.$on("val", data => {
      console.log(data);
      this.value = data;
      if(this.value=="更新成功"){
        this.loadMore();
      }
    });
  },
};
</script>
<style lang="scss" scoped>
@import url("../../assets/scss/reset.scss");
.comfriend {
  padding: 0 0.2rem 0;
}
hr {
  opacity: 0.5;
}
.info {
  display: flex;
  justify-content: space-between;
  margin-top: 0.6rem;
  .left {
    display: flex;
    justify-content: space-between;
    line-height: 0.35rem;
    .avatar {
      width: 12vw;
      height: 12vw;
      border-radius: 50%;
      background: #999;
      overflow: hidden;
      bottom: 0;
      align-self: flex-end;
      margin-right: 0.2rem;
      img {
        width: 12vw;
      }
    }
    .name {
      line-height: 0.4rem;
      align-self: top;
      text-align: left;
      span {
        font-size: 0.3rem;
        margin-right: 0.2rem;
      }
      img {
        height: 0.3rem;
        margin-bottom: -0.05rem;
      }
      p {
        font-size: 0.2rem;
        color: #999;
      }
    }
  }
  .logo {
    width: 50vw;
    display: flex;
    justify-content: flex-end;
    img {
      height: 0.6rem;
      align-self: center;
      margin-left: 0.1rem;
    }
  }
}
.centerinfo {
  text-align: left;
  font-size: 0.25rem;
  box-sizing: border-box;
  .pictures {
    display: flex;
    margin: 0.2rem 0;
    height: 2.5rem;
    .im {
      width: 33%;
      overflow: hidden;
      margin-right: 0.2rem;
      background: #999;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  p {
    margin-top: 0.3rem;
    line-height: 0.4rem;
  }
}
.bottominfo {
  display: flex;
  justify-content: space-between;
  font-size: 0.25rem;
  color: #999;
  line-height: 0.35rem;
  .left {
    display: flex;
    p {
      margin-right: 0.2rem;
    }
    i {
      font-style: normal;
      color: #ff8315;
      margin-left: 0.1rem;
    }
  }
  .right {
    display: flex;
    div {
      display: flex;
      margin-right: 0.1rem;
      img {
        height: 0.35rem;
        display: block;
        margin: 0 0.06rem;
      }
    }
  }
}
</style>