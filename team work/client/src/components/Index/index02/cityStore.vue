<template>
  <div class="cityStore" @click="choosenCity($event)">
    <mt-header class="myheader" title="城市列表">
      <router-link to="/storeList" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="location">
      <span>{{chooseCity}}</span>
      <img src="http://127.0.0.1:5050/icon/row_num_posi.png" alt />
      <input type="text" placeholder="请输入外送门店" />
    </div>
    <h5>热门城市</h5>
    <div class="city">
      <span>北京</span>
      <span>上海</span>
      <span>杭州</span>
      <span>广州</span>
      <span>深圳</span>
      <span>天津</span>
      <span>成都</span>
    </div>
    <h5>ABCDEF</h5>
    <div class="city">
      <span>北京</span>
      <span>保定</span>
      <span>鄂尔多斯</span>
      <span>大连</span>
      <span>常州</span>
      <span>蚌埠</span>
      <span>福州</span>
      <span>德州</span>
      <span>长沙</span>
      <span>佛山</span>
      <span>东莞</span>
      <span>成都</span>
    </div>
    <h5>GHIJKL</h5>
    <div class="city">
      <span>邯郸</span>
      <span>廊坊</span>
      <span>临汾</span>
      <span>哈尔滨</span>
      <span>连云港</span>
      <span>淮安</span>
      <span>杭州</span>
      <span>嘉兴</span>
      <span>合肥</span>
      <span>淮北</span>
      <span>九江</span>
      <span>济南</span>
      <span>济宁</span>
    </div>
  </div>
</template>
<script>
//负责引入store.vue 子组件
import store from "./store";


// Vue.prototype.globalClick = function (callback) {
//     document.querySelectorAll('span').onclick = function () {
//         alert("?");
//     };
// };

export default {
  data() {
    return {
      selected: "waisong",
      chooseCity:this.$route.query.city,
    };
  },
  methods: {
      choosenCity(e){
          this.$router.push({ path: "storeList", query: { city: e.target.innerHTML } });
      }
  },
  components: {
    store: store
  }
};
</script>
<style lang="scss">
.cityStore {
  .myheader {
    height: 1.2rem;
    font-size: 0.4rem;
    border-bottom: 1px solid #ccc;
    padding: 0.4rem 0 0.2rem 0.2rem;
  }
  .location {
    font-size: 0.3rem;
    background: #fff;
    margin-top: 0.2rem;
    padding: 0.15rem 0.2rem;
    img {
      width: 0.5rem;
      height: 0.5rem;
      vertical-align: middle;
      margin-right: 0.3rem;
    }
    input {
      width: 70%;
      border: none;
      background: #e9e9e9;
      padding: 0.1rem 0.2rem;
      border-radius: 0.05rem;
    }
  }
  h5 {
    font-size: 0.3rem;
    text-align: left;
    padding: 0.2rem;
    background: #eee;
  }
  .city {
    font-size: 0.3rem;
    text-align: left;
    border: 0.01rem solid #eee;
    span {
      display: inline-block;
      width: 33.06%;
      text-align: center;
      line-height: 330%;
      border: 0.01rem solid #ddd;
    }
    span:hover {
      background: #f2e3e3;
    }
  }
}
</style>