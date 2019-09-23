<!--diancan.vue 点餐设置页面组件-->
<template>
  <div class="diancan">
    <mt-header title="点餐">
      <router-link to="/mine" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <!-- 点餐订单组件 -->
    <div class="yudingOrder" v-for="(item,index) in orderList" :key="index">
      <div class="div1">
        <h3>
          <span>
            <span>下沙银泰店</span>
            <span>5.5km</span>
          </span>
          <span>
            <span class="myspan">到店</span>
            <span>外卖</span>
            <span class="myspan">已取消</span>
          </span>
        </h3>
        <div class="div2">
          <ul>
            <li>下单用户</li>
            <li>1</li>
          </ul>
          <ul>
            <li>下单时间</li>
            <li>{{item.O_Time}}</li>
          </ul>
          <ul>
            <li>总价</li>
            <li>
              <span>￥{{item.O_Totle}}</span>
            </li>
          </ul>
        </div>
        <div></div>
        <div class="div4">
          <span>取消订单</span>
          <span class="zxdc">查看详情</span>
        </div>
      </div>
    </div>
    <!-- 暂无点餐订单 -->
    <nodiancanOrder></nodiancanOrder>
  </div>
</template>
<script>
//负责引入nodiancanOrder.vue 子组件
import nodiancanOrder from "./nodiancanOrder";

export default {
  data() {
    return {
      orderList: [], //用于存储这个用户所有的订单内容
      nameInOrder: []
    };
  },
  components: {
    nodiancanOrder: nodiancanOrder
  },
  methods: {
    getList() {
      var U_ID = sessionStorage.getItem("accessToken"); //拿到用户ID

      var url = "/menu/getUserOrder"; //获取左边所有菜品类名
      this.axios.get(url, { params: { U_ID: U_ID } }).then(res => {
        if (res.data.code == 1) {
          this.orderList = res.data.data;
        }
      });

      //根据里面的ID获取对应的名称
      for (let i = 0; i < this.orderList.length; i++) {
        let userID = this.orderList[i].O_UID; //用户ID
        let merID = this.orderList[i].O_MID; //店家ID
        let userName, merName; //存储两个的名字

        let url1 = "/user/getUser";
        let url2 = "/user/getMerName";
        this.axios.get(url1, { params: { U_ID: userID } }).then(res => {
          if (res.data.code == 1) {
            userName = res.data.data[0].U_NickName;
          }
        });
        this.axios.get(url2, { params: { M_ID: merID } }).then(res => {
          if (res.data.code == 1) {
            userName = res.data.data[0].M_Name;
          }
        });
        this.nameInOrder.push({ U_Name: userName, M_Name: merName });
      }
      console.log(this.nameInOrder);
    }
  },
  created() {
    this.getList();
  }
};
</script>












<style lang="scss">
.diancan {
  background: #fff;

  /* 点餐*/
  .mint-header {
    padding-top: 0.4rem;
    padding-bottom: 0.2rem;
    background: #fff;
    color: #000;
    font-size: 0.35rem;
    border-bottom: 1px solid #ddd;
  }
}
.yudingOrder {
  font-size: 0.2rem;
  padding: 0.2rem;
  background: #f1f1f1;
  .div1 {
    background: #fff;
    padding-bottom: 0.1rem;
  }
  h3 {
    display: flex;
    justify-content: space-between;
    padding: 0.2rem;
    .myspan {
      color: #f00;
    }
  }
  .div2 {
    display: flex;
    justify-content: space-around;
    color: #666;
    font-weight: lighter;
    margin: 0.1rem 0.3rem;
    padding-bottom: 0rem;
    background: #eee;
    li {
      margin: 0.2rem;
    }
  }
  .div4 {
    text-align: right;
    padding: 0.25rem;
    span {
      border: 1px solid #ccc;
      padding: 0.1rem 0.2rem;
      border-radius: 0.5rem;
      margin-right: 0.2rem;
    }
    .zxdc {
      background: #f00;
      color: #fff;
      border: none;
    }
  }
}
</style>

