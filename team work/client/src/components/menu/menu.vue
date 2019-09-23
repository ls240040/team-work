<!--menu.vue 菜单组件-->
<template>
  <div class="menu">
    <div class="left">
      <ul>
        <li v-for="(item, i) in foodType" :key="i" @click="jump(i)" :style="`background-color:${item.bgcolor}`">{{item.FT_Name}}
          <span style="display:none">{{now}}</span>
        </li>
      </ul>
    </div>
    <div class="jiade"></div>
    <!-- 左侧空div撑开 -->
    <div class="right">
      <!-- 右侧菜品 -->
      <div v-for="(item,index) in foodType" :key="index">
        <div class="fenlei" :id="`FT${item.FT_ID}`">{{item.FT_Name}}</div>
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
            <a class="add" @click="add(food.F_ID)"></a>
            <span style="display:none;">{{count}}</span>
          </div>
        </div>
      </div>

      <div class="faker"></div>
      <!-- 用于顶起被底部购物车遮住的部分 -->
    </div>

    <div class="shopcartcontent" v-if="count!=0 && cartDisplay!=0">
      <!-- 购物车里面食物的内容 -->
      <div>
        <span>购物车</span>
        <a @click="clearCart">清空购物车</a>
      </div>
      <div></div>
      <ul>
        <li v-for="(food,index) in foodData" :key="index">
          <div v-if="food.num!=0">
            <span>{{food.F_Name}}</span>
            <span>￥{{food.F_Price*food.num}}</span>
            <a class="cut" @click="cuts(food.F_ID)"></a>
            <span>{{food.num}}</span>
            <a class="add" @click="add(food.F_ID)"></a>
            <span style="display:none;">{{count}}</span>
          </div>
        </li>
      </ul>
    </div>

    <div class="shopcart">
      <!-- 底部购物车 -->
      <div
        class="shopcart_img"
        :style="`background-color:${shopcart_imgbgcolor}`"
        @click="showCart"
      >
        <img src="http://127.0.0.1:5050/icon/shopcart_icon.png">
        <div :style="`display:${shopcart_countdisplay}`">{{count}}</div>
        <!-- 右上食物计数 -->
        <span class="totalprice">￥{{totalPrice}}</span>
      </div>
      <button v-if="totalPrice>=sendPrice" @click="toOrder">选好啦</button>
      <span v-if="totalPrice<sendPrice">￥{{sendPrice}}起</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      foodType: [], //FT_ID食物类型ID,FT_Name食物类型名字
      foodData: [], //F_ID食物编号,F_FTID店家编号,F_Name食物名字,F_Url食物图片地址,F_Price价格,num点了多少个
      count: 0, //嗯，当成一共点了多少个食物好了，完美
      shopcart_imgbgcolor: "#555", //控制购物车背景变色
      shopcart_countdisplay: "none", //控制右上红色数字到0的时候不显示
      cartDisplay: 0, //判断购物车是否展开
      totalPrice: 0, //食物的总价
      sendPrice: 400, //先来个起送价400
      now:0,//辅助修改颜色

      //{ M_ID(店家ID),D_ID(桌子ID),foodData:[{F_ID(F_ID食物编号),F_Price(F_Price价格),num(num点了多少个)},{},{},...] }

    };
  },
  methods: {
    loadMenu() {
      // var M_ID=this.$route.query.M_ID; 拿到店面ID
      var M_ID = 1;
      // var D_ID=this.$route.query.D_ID; 拿到桌子ID
      // var D_ID=1;

      var url = "/menu"; //获取左边所有菜品类名
      this.axios.get(url, { params: { M_ID: M_ID } }).then(res => {
        if (res.data.code == 1) {
          this.foodType = res.data.data;
          for (var i = 0; i < this.foodType.length; i++) {
            this.foodType[i].bgcolor = "";//增加一个属性用于修改滚动条到了之后的颜色
          }
        }
      });

      var url2 = "/menu/food"; //获取所有食物
      this.axios.get(url2, { params: { M_ID: M_ID } }).then(res => {
        if (res.data.code == 1) {
          this.foodData = res.data.data;
          // console.log(this.foodData);
          for (var i = 0; i < this.foodData.length; i++) {
            this.foodData[i].num = 0;//增加一个属性用于计数
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
      if (this.count == 0) {
        //减到0之后，失去高光(灰色)和count
        this.shopcart_imgbgcolor = "#555";
        this.shopcart_countdisplay = "none";
      }
      this.totalPrice -= this.foodData[n - 1].F_Price; //总价减少
    },
    //数量++
    add: function(n) {
      this.count++;
      console.log(this.count);
      this.foodData[n - 1].num++; //对应食物数量增加 数组下标是(n-1)
      this.shopcart_imgbgcolor = "#1798dc"; //增加后绝对大于0，不加判断了
      this.shopcart_countdisplay = ""; //同上一行
      this.totalPrice += this.foodData[n - 1].F_Price; //总价增加
    },

    //清空购物车
    clearCart() {
      this.$messagebox.confirm("确认清空吗？").then(action => {
        for (var i = 0; i < this.foodData.length; i++) {
          this.foodData[i].num = 0;
          this.totalPrice = 0; //总价清零
          this.shopcart_imgbgcolor = "#555"; //控制购物车背景变色
          this.shopcart_countdisplay = "none"; //控制右上红色数字到0的时候不显示
          this.cartDisplay = 0;//重置是否展开状态
        }
        this.count = 0;
      });
    },
    //展开或关闭购物车
    showCart() {
      if (this.cartDisplay == 0) {
        this.cartDisplay = 1;
      } else {
        this.cartDisplay = 0;
      }
    },

    jump(index) {
      // 用 class="d_jump" 添加锚点
      let jump = document.querySelectorAll(".fenlei");
      let total = jump[index].offsetTop;
      let distance = document.documentElement.scrollTop || document.body.scrollTop;
      // 平滑滚动，时长500ms，每10ms一跳，共10跳
      let step = total / 10;//10跳
      if (total > distance) {
        smoothDown();
      } else {
        let newTotal = distance - total;
        step = newTotal / 10;//上升速度
        smoothUp();
      }
      function smoothDown() {
        if (distance < total) {
          distance += step;
          document.body.scrollTop = distance;
          document.documentElement.scrollTop = distance;
          setTimeout(smoothDown, 10);
        } else {
          document.body.scrollTop = total;
          document.documentElement.scrollTop = total;
        }
      }
      function smoothUp() {
        if (distance > total) {
          distance -= step;
          document.body.scrollTop = distance;
          document.documentElement.scrollTop = distance;
          setTimeout(smoothUp, 10);
        } else {
          document.body.scrollTop = total;
          document.documentElement.scrollTop = total;
        }
      }
    },

    //监听滚动条
    onScroll() {
      //滚动条现在的高度
      let scrolled =
        document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        let jump = document.querySelectorAll(".fenlei");
        //jump[index].offsetTop;这个是高度
        //用于重置颜色
        for(var i=0;i<this.foodType.length;i++){
          this.foodType[i].bgcolor="";
        }
        for(var index=0;index<jump.length-1;index++){
          if(jump[index].offsetTop<scrolled&&scrolled<jump[index+1].offsetTop){
            this.foodType[index].bgcolor="#fff";//变成该颜色(白)
            this.now++;//辅助修改颜色(无意义)
          }
        }
      // if (scrolled >= 1063) {
      //   this.steps.active = 2;
      // } else if (scrolled < 1063 && scrolled >= 586) {
      //   this.steps.active = 1;
      // } else {
      //   this.steps.active = 0;
      // }
    },
    //选好后去订单页面
    toOrder(){
      //{ M_ID(店家ID),D_ID(桌子ID),foodData:[{F_ID(F_ID食物编号),F_Price(F_Price价格),num(num点了多少个)},{},{},...] }需要传输的数据
      var potCount=0;

      for(var i=0;i<this.foodData.length;i++){//遍历计数锅的个数
        if(this.foodData[i].F_FTID==1||this.foodData[i].F_FTID==2||this.foodData[i].F_FTID==3){
          potCount+=this.foodData[i].num;
        }
      }
      //根据锅的数量判断
      if(potCount>1){
        this.$toast({message:"一单只限一个锅。"});
      }
      if(potCount<1){
        this.$toast({message:"请至少点一个锅。"});
      }
      if(potCount==1){
        var foodData=[];
        for(var i=0;i<this.foodData.length;i++){
          if(this.foodData[i].num==0){continue;}
          var example={F_ID:this.foodData[i].F_ID,F_Price:this.foodData[i].F_Price,num:this.foodData[i].num}
          foodData.push(example);
        }
        this.$router.push({ path: '/waisong' ,query: {M_ID: 1,D_ID:1,foodData,count:this.count,totalPrice:this.totalPrice}});
                                               //this.$route.query.M_ID,this.$route.query.D_ID
        console.log(foodData);
      }

    }
  },
  created() {
    this.loadMenu();
  },
  mounted() {
    this.$nextTick(function() {
      window.addEventListener("scroll", this.onScroll);
    });
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
      padding: 0.2rem 0 0.2rem 0.2rem;
      font-size: 0.3rem;
      // background:#868586;
      font-weight: bold;
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
.faker {
  height: 1rem;
  width: 100%;
}

.shopcart {
  position: relative;
  width: 100%;
  height: 1rem;
  position: fixed;
  z-index: 10;
  bottom: 0;
  background-color: #555;
  button {
    position: absolute;
    bottom: 0rem;
    right: 0rem;
    height: 1rem;
    width: 2rem;
    background-color: #1798dc;
    font-size: 0.3rem; // "选好啦"字体大小
    color: #fff;
    font-weight: bold;
    z-index: 10;
  }
}
.shopcart > span {
  //XX元起送
  position: absolute;
  bottom: 0rem;
  right: 0.2rem;
  font-size: 0.4rem;
  color: #fff;
  line-height: 1rem;
  z-index: 5;
}
.shopcart > .shopcart_img {
  //购物车图片
  position: relative;
  text-align: center;
  line-height: 0.8rem;
  height: 0.8rem;
  width: 0.8rem;
  border-radius: 50%;
  border: 0.1rem solid black;
  img {
    height: 80%;
  }
  div {
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
  .totalprice {
    color: #fff;
    font-size: 0.5rem;
    position: absolute;
    top: 0rem;
    left: 1rem;
  }
}

.shopcartcontent {
  //存放已点的食物
  height: 3rem;
  width: 100%;
  overflow-y: auto;
  position: fixed;
  bottom: 1rem;
  background-color: #fff;
}
.shopcartcontent > div {
  position: relative;
  height: 0.5rem;
  background-color: #fdc09d;
  line-height: 0.3rem;
  font-size: 0.3rem;

  span {
    position: absolute;
    left: 0.2rem;
    top: 0.1rem;
  }
  a {
    font-size: 0.28rem;
    position: absolute;
    right: 0.2rem;
    top: 0.1rem;
  }
}
.shopcartcontent > div:nth-child(1) {
  z-index: 10;
  position: fixed;
  height: 0rem;
  height: 0.5rem;
  width: 100%;
  background-color: #fdc09d;
  line-height: 0.3rem;
  font-size: 0.3rem;
}

.shopcartcontent > ul > li > div {
  height: 0.6rem;
  position: relative;
  font-size: 0.3rem;
  span:nth-child(1) {
    //食物名字
    position: absolute;
    left: 0.2rem;
    top: 0.2rem;
  }
  span:nth-child(2) {
    //食物总价
    position: absolute;
    left: 3.5rem;
    top: 0.2rem;
  }
  a:nth-child(3) {
    //"-"
    position: absolute;
    right: 1rem;
    top: 0.2rem;
  }
  span:nth-child(4) {
    //食物数量
    position: absolute;
    right: 0.6rem;
    top: 0.23rem;
  }
  a:nth-child(5) {
    //"+"
    position: absolute;
    right: 0.2rem;
    top: 0.2rem;
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
  a.add {
    display: inline-block;
    height: 0.35rem;
    width: 0.35rem;
    border-radius: 50%;
    background-image: url(http://127.1:5050/icon/plus.png);
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
}
</style>
