<!--menu.vue 菜单组件-->
<template>
  <div class="menu">
    <div class="left">
      <ul>
        <li v-for="(item, i) in foodType" :key="i">{{item.FT_Name}}</li>
      </ul>
    </div>
    <div class="jiade"></div><!-- 左侧空div撑开 -->
    <div class="right"><!-- 右侧菜品 -->
      <div v-for="(item,index) in foodType" :key="index">
        <div class="fenlei">{{item.FT_Name}}</div>
        <div v-for="(food,index) in foodData" :key="index" class="guilei">
          <img v-if="food.F_FTID==item.FT_ID" :src="`http://127.0.0.1:5050/menu${food.F_Url}`" alt>
          <div v-if="food.F_FTID==item.FT_ID" class="food">
            <p class="mTitle">{{food.F_Name}}</p>
            <p class="mPrice">
              <i>￥</i>
              {{food.F_Price}}
            </p>
          </div>
          <div v-if="food.F_FTID==item.FT_ID" class="count">
            <a class="cut" @click="cuts(food.F_ID)"></a>
            <span>{{food.num}}</span>
            <!-- 再见了，我的倔强 -->
            <span style="display:none;">{{count}}</span>
            <a class="add" @click="add(food.F_ID)"></a>
          </div>
        </div>
      </div>

      <div class="faker"></div><!-- 用于顶起被底部购物车遮住的部分 -->
    </div>
    
    <div class="shopcartcontent"><!-- 购物车里面食物的内容 -->
      
    </div>
    <div class="shopcart" ><!-- 底部购物车 -->
      <div class="shopcart_img" :style="`background-color:${shopcart_imgbgcolor}`">
        <img src="http://127.0.0.1:5050/icon/shopcart_icon.png">
        <div :style="`display:${shopcart_countdisplay}`">{{count}}</div><!-- 右上食物计数 -->
        <span class="totalprice">￥132</span>
      </div>
    </div>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      foodType: [],//FT_ID食物类型ID,FT_Name食物类型名字
      foodData: [],//F_ID食物编号,F_FTID店家编号,F_Name食物名字,F_Url食物图片地址,F_Price价格,num点了多少个
      count:0,//无意义，无视(嗯，当成一共点了多少个食物好了，完美)
      shopcart_imgbgcolor:"#555",//控制购物车背景变色
      shopcart_countdisplay:"none",//控制右上红色数字到0的时候不显示
      totalprice,     //食物的总价
    };
  },
  methods: {
    loadMenu() {

      // var M_ID=this.$route.query.M_ID; 拿到店面ID
      var M_ID=1;
      // var D_ID=this.$route.query.D_ID; 拿到桌子ID
      var D_ID=1;

      var url = "/menu";//获取左边所有菜品类名
      this.axios.get(url,{params:{'M_ID':M_ID}}).then(res => {
        if (res.data.code == 1) {
          this.foodType = res.data.data;
        }
      });

      var url2 = "/menu/food";//获取所有食物
      this.axios.get(url2,{params:{'M_ID':M_ID}}).then(res => {
        if (res.data.code == 1) {
          this.foodData = res.data.data;
          // console.log(this.foodData);
          for (var i = 0; i < this.foodData.length; i++) {
            this.foodData[i].num = 0;
          }
        }
      });
    },
    // 数量--
    cuts: function(n) {
      if (this.foodData[n - 1].num < 1) return;
      this.count--;
      console.log(this.count);
      this.foodData[n - 1].num--; //对应食物数量减少 数组下标是(n-1)
      if(this.count==0){//减到0之后，失去高光(灰色)和count
        this.shopcart_imgbgcolor="#555";
        this.shopcart_countdisplay="none";
      }
    },
    //数量++
    add: function(n) {
      this.count++;
      console.log(this.count);
      this.foodData[n - 1].num++; //对应食物数量增加 数组下标是(n-1)
      this.shopcart_imgbgcolor="#1798dc"//增加后绝对大于0，不加判断了
      this.shopcart_countdisplay="";//同上一行
    }
  },
  created() {
    this.loadMenu();
  },
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
      position: absolute;
      bottom: 0.2rem;
      right: 0.2rem;
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

.guilei {
  position: relative;
}

.shopcart{
  width: 100%;
  height: 1rem;
  position: fixed;
  z-index: 10;
  bottom: 0;
  background-color: #555;
}
.shopcart>.shopcart_img{
  position: relative;
  text-align: center;
  line-height: 0.8rem;
  height: 0.8rem;
  width: 0.8rem;
  border-radius: 50%;
  border: 0.1rem solid black;
  img{
    height: 80%;
  }
  div{
    line-height: 0.35rem;
    font-size: 0.1rem;
    color: #fff;
    width: 0.35rem;
    height: 0.35rem;
    border-radius: 50%;
    border: 0.01rem solid #fff;
    background-color: #fb3b2a;
    position: absolute;
    right: -0.15rem;
    top: -0.15rem;
  }
  .totalprice{
    color: #fff;
    font-size: 0.5rem;
    position: absolute;
    top: 0rem;
    left: 1rem;
  }
}
.faker{height: 1rem;width: 100%;}
</style>
