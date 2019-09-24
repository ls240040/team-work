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
        <div class="store" v-for="(mer,index) in allCity" :key="index">
          <div class="div1" v-if="mer.mode==selected&&mer.location==city" @click="toMenu">
            <img src="http://127.0.0.1:5050/icon/login_logo_img.png" alt />
            <div class="div2" >
              <h4>海底捞火锅外送({{mer.merName}})</h4>
              <span class="span1">{{mer.status}}</span>
              <span>{{mer.moreLocation}}</span>
            </div>
            <span class="span2">{{mer.farAway}}</span>
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
              <h4>海底捞火锅自取(庆春路店)</h4>
              <span class="span1">营业中</span>
              <span>湖滨</span>
            </div>
            <span class="span2">4.7km</span>
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
      city: "杭州",
      allCity:[
          //杭州的
          {
              mode:"waisong",
              merName:"铂澜城店",
              location:"杭州",
              status:"营业中",
              moreLocation:"西湖区文一路294号",
              farAway:"2.7km",
          },
          {
              mode:"waisong",
              merName:"城西银泰",
              location:"杭州",
              status:"营业中",
              moreLocation:"拱墅区丰潭路380号",
              farAway:"3.7km",
          },
          {
              mode:"waisong",
              merName:"绍兴路店",
              location:"杭州",
              status:"营业中",
              moreLocation:"下城区绍兴路337号",
              farAway:"0.6km",
          },
          {
              mode:"waisong",
              merName:"水晶城店",
              location:"杭州",
              status:"营业中",
              moreLocation:"拱墅区上塘路458号",
              farAway:"4.7km",
          },
          
          //上海的
          {
              mode:"waisong",
              merName:"吴中路店",
              location:"上海",
              status:"营业中",
              moreLocation:"闵行区吴中路1100号",
              farAway:"10.5km",
          },
          {
              mode:"waisong",
              merName:"南京东路",
              location:"上海",
              status:"营业中",
              moreLocation:"黄浦区南京东路830号",
              farAway:"12.4km",
          },
          {
              mode:"waisong",
              merName:"张杨路店",
              location:"上海",
              status:"营业中",
              moreLocation:"浦东新区张杨路620号",
              farAway:"10.7km",
          },
          //北京的
          {
              mode:"waisong",
              merName:"上地华联",
              location:"北京",
              status:"营业中",
              moreLocation:"海淀农大南路1号院",
              farAway:"1272.2km",
          },
          {
              mode:"waisong",
              merName:"天通苑店",
              location:"北京",
              status:"营业中",
              moreLocation:"华联天通苑购物中心",
              farAway:"1274.7km",
          },
          {
              mode:"waisong",
              merName:"西直门店",
              location:"北京",
              status:"营业中",
              moreLocation:"海淀区北大街32号",
              farAway:"1279.1km",
          },
          {
              mode:"waisong",
              merName:"大钟寺店",
              location:"北京",
              status:"营业中",
              moreLocation:"海淀区三环西路18号",
              farAway:"1268.5km",
          },

      ],
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
    },

    //去点菜
    toMenu(){
        this.$router.push("/menu");
    },
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