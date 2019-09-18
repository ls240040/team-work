<!--menu.vue 菜单组件-->
<template>
  <div class="menu">
    <div class="left">
      <ul>
        <li v-for="(item, i) in foodType" :key="i">{{item.FT_Name}}</li>
      </ul>
    </div>
    <div class="jiade"></div>
    <div class="right">
      <div v-for="(item,index) in foodType" :key="index">
        <div  class="fenlei">{{item.FT_Name}}</div>
        <div>
          <img src="http://127.0.0.1:5050/menu/danguo/danguo_1.jpg" alt>
          <div class="food">
            <p class="mTitle">火锅牛排</p>
            <p class="mPrice">
              <i>￥</i> 599.22
            </p>
          </div>
          <div class="count">
            <a class="cut" @click="cuts()"></a>
            <span>{{num}}</span>
            <a class="add" @click="add()"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      foodType: [],
      num: 0
    };
  },
  methods: {
    loadMenu() {
      var url = "/menu";
      this.axios.get(url).then(res => {
        if (res.data.code == 1) {
          this.foodType = res.data.data;
        }
        console.log(this.foodType);
      });
     
    },
     loadFood(){
        var url = "/menu/food";
        
      },
    cuts: function() {
      if (this.num < 1) return;
      this.num--;
    },
    add: function() {
      this.num++;
    }
  },
  created() {
    this.loadMenu();
  }
};
</script>

<style lang="scss" scoped>
div.menu {
  div.jiade {
    float: left;
    width: 20%;
    height: 1rem;
  }
  box-sizing: border-box;
  div.left {
    width: 20%;
    position: fixed;

    ul li {
      padding-top: 0.5rem;
      height: 0.5rem;
      width: 100%;
      background: #f3f1f4;
      // border-bottom: 1px solid #bbb;
      // border-right: 1px solid #bbb;
      font-size: 0.3rem;
    }
  }
  div.right {
    div.fenlei {
      padding: 0.2rem 0 0.3rem 0.2rem;

      font-size: 0.3rem;
      background: #f9f7fa;
    }
    div.food {
      display: inline-block;
      p {
        font-size: 0.3rem;
      }
      p.mPrice {
        margin-top: 0.5rem;
        color: #fb3b2a;
        font-weight: 700;
        i {
          font-style: normal;
          font-size: 0.2rem;
          margin-right: -0.1rem;
        }
      }
      p.mTitle {
        margin-top: 0.3rem;
      }
    }
    text-align: left;
    float: left;
    width: 80%;
    div.count {
      display: inline-block;
      text-align: center;
      margin-left: 1rem;
      span {
        display: inline-block;
        width: 0.5rem;
        font-size: 0.35rem;
        position: relative;
        top: -0.05rem;
      }
      a.add {
        display: inline-block;
        height: 0.35rem;
        width: 0.35rem;
        border-radius: 50%;
        background-image: url(http://127.1:5050/icon/plus.png);
        background-size: contain;
        background-position: bottom;
        background-repeat: no-repeat;
      }
      a.cut {
        display: inline-block;
        height: 0.35rem;
        width: 0.35rem;
        border-radius: 50%;
        background-image: url(http://127.1:5050/icon/reduce.png);
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
      }
    }
    img {
      width: 1.5rem;
      vertical-align: top;
      margin: 0.2rem 0.2rem 0 0.2rem;
    }
  }
}
</style>
