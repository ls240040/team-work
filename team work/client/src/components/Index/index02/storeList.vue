<template>
  <div class="storeList">
    <mt-header class="myheader" title="门店列表">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <mt-navbar v-model="selected">
      <mt-tab-item id="waisong">外送</mt-tab-item>
      <mt-tab-item id="myself">自提</mt-tab-item>
    </mt-navbar>
    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="waisong">
        <div class="location">
          <span @click="cityStore">
            <span>{{city}}</span>
            <img src="http://127.0.0.1:5050/icon/xiala.png" alt />
          </span>
          <input type="text" placeholder="请输入外送门店" />
        </div>
        <!-- 引入门店列表组件 -->
        <!-- 生成店面 -->
        <div class="store">
          <div class="div1">
            <img src="http://127.0.0.1:5050/icon/login_logo_img.png" alt />
            <div class="div2">
              <h4>海底捞火锅外送(庆春路店)</h4>
              <span class="span1">营业中</span>
              <span>湖滨</span>
            </div>
            <span class="span2">≤4.7km</span>
          </div>
        </div>
        
      </mt-tab-container-item>
      <mt-tab-container-item id="myself">
        <div class="location">
          <span @click="cityStore">
            <span>{{city}}</span>
            <img src="http://127.0.0.1:5050/icon/xiala.png" alt />
          </span>
          <input type="text" placeholder="请输入自提门店" />
        </div>
        <!-- 引入门店列表组件 -->

        <!-- 生成店面 -->
        <div class="store">
          <div class="div1">
            <img src="http://127.0.0.1:5050/icon/login_logo_img.png" alt />
            <div class="div2">
              <h4>海底捞火锅外送(庆春路店)</h4>
              <span class="span1">营业中</span>
              <span>湖滨</span>
            </div>
            <span class="span2">≤4.7km</span>
          </div>
        </div>

      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>

export default {
  data() {
    return {
      selected: "waisong",
      city: "杭州"
    };
  },
  methods: {
    //加载city
    loadCity() {
      let c = this.$route.query.city;
      if (c != null) {
        this.city = c;
      }
    },

    //切换城市
    cityStore() {
      this.$router.push({ path: "/cityStore", query: { city: this.city } });
    }
  },
  created() {
    this.loadCity();
  },
};
</script>
<style lang="scss">
.location {
  font-size: 0.3rem;
  background: #fff;
  margin-top: 0.2rem;
  padding: 0.15rem 0.2rem;
  img {
    vertical-align: middle;
    margin-right: 0.3rem;
  }
  input {
    border: none;
    background: #e9e9e9;
    padding: 0.1rem 0.2rem;
    border-radius: 0.05rem;
  }
}
.storeList {
  .myheader {
    height: 1.2rem;
    font-size: 0.4rem;
    border-bottom: 1px solid #ccc;
    padding: 0.4rem 0 0.2rem 0.2rem;
  }
}

.store {
  .div1 {
    display: flex;
    justify-content: space-around;
    padding: 0.3rem;
    background: #fff;
    font-size: 0.3rem;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    img {
      width: 0.7rem;
      height: 0.7rem;
    }
    .div2 {
      text-align: left;
      h4 {
        margin-bottom: 0.2rem;
      }
      .span1 {
        color: #fff;
        font-size: 0.1rem;
        background: #23a6ff;
        border-radius: 0.5rem;
        padding: 0.03rem 0.08rem;
        margin-right: 0.2rem;
      }
      .span1 + span {
        color: #aaa;
      }
    }
    .span2 {
      color: #aaa;
      position: relative;
      top: 50%;
      transform: translateY(50%);
    }
  }
}
</style>