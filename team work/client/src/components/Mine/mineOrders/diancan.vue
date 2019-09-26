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
            <span>{{nameInOrder[index].M_Name}}</span>
          </span>
          <span>
            <span>订单编号</span>
            <span class="myspan">{{item.O_ID}}</span>
            <span class="myspan">&nbsp;&nbsp;</span>
          </span>
        </h3>
        <div class="div2">
          <ul>
            <li>下单用户</li>
            <li>{{nameInOrder[index].U_NickName}}</li>
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
        <div class="div4">
          <span @click="deleteOrder(index)">取消订单</span>
          <span class="zxdc" @click="watchOrder(index)">查看详情</span>
        </div>
      </div>
    </div>
    <!-- 暂无点餐订单 -->
    <nodiancanOrder v-if="orderNum==0"></nodiancanOrder>
  </div>
</template>
<script>
//负责引入nodiancanOrder.vue 子组件
import nodiancanOrder from "./nodiancanOrder";

export default {
  data() {
    return {
      orderList: [], //用于存储这个用户所有的订单内容
      nameInOrder: [],
      orderNum:0,
    };
  },
  components: {
    nodiancanOrder: nodiancanOrder
  },
  methods: {
    getList() {
      let U_ID = sessionStorage.getItem("accessToken"); //拿到用户ID

      let url = "/menu/getUserOrder"; //获取左边所有菜品类名
      this.axios.get(url, { params: { U_ID: U_ID } }).then(res => {
        if (res.data.code == 1) {
          this.orderList = res.data.data;

          //根据里面的ID获取对应的名称
          for (let i = 0; i < this.orderList.length; i++) {
            let userID = this.orderList[i].O_UID; //用户ID
            let merID = this.orderList[i].O_MID; //店家ID
            this.nameInOrder.push({ U_Name: "", U_NickName: "", M_Name: "" });

            let url1 = "/user/getUser";
            let url2 = "/menu/getMerName";
            this.axios.get(url1, { params: { U_ID: userID } }).then(res => {
              if (res.data.code == 1) {
                this.nameInOrder[i].U_Name = res.data.data[0].U_Name;
                this.nameInOrder[i].U_NickName = res.data.data[0].U_Name;
              }
            });
            this.axios.get(url2, { params: { M_ID: merID } }).then(res => {
              if (res.data.code == 1) {
                this.nameInOrder[i].M_Name = res.data.data[0].M_Name;
              }
            });
            this.orderNum=this.orderList.length;
          }
        }
      });
    },

    //删除订单
    deleteOrder(index) {
      var O_ID = this.orderList[index].O_ID;
      this.$messagebox.confirm("确定要删除订单" + O_ID + "吗?").then(action => {
        var url = "/menu/deleteOrder";
        this.axios.get(url, { params: { O_ID: O_ID } }).then(res => {
          if (res.data.code == 1) {
            this.$router.go(0);
          }
        });
      });
    },

    //查看订单详情
    watchOrder(index) {
      var O_ID = this.orderList[index].O_ID;
      var merName=this.nameInOrder[index].M_Name;
      this.$router.push({ path: '/diancanordercontent' ,query: {O_ID: O_ID,M_Name:merName,totalPrice:this.orderList[index].O_Totle}});
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

