<!--mineDatum.vue 我的订单页面组件-->
<template>
  <div class="order">
      <!-- 我的订单 -->
      <h6>我的订单</h6>
          <ul>
              <li @click="paihao">
                  <img src="http://127.0.0.1:5050/icon/paihao.png" alt="">
                  <span>排号</span>
              </li>
              <li @click="yuding">
                  <img src="http://127.0.0.1:5050/icon/dingwei.png" alt="">
                  <span>订位</span>
              </li>
              <li @click="diancan">
                  <img src="http://127.0.0.1:5050/icon/diancan.png" alt="">
                  <span>点餐</span>
              </li>
              <li>
                  <img src="http://127.0.0.1:5050/icon/waimai.png" alt="">
                  <span>外卖</span>
              </li>
              <li>
                  <img src="http://127.0.0.1:5050/icon/gouwu.png" alt="">
                  <span>购物</span>
              </li>
          </ul>          
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {    
     paihao(){
      this.$router.push('/paihao');
    },
     yuding(){
      this.$router.push('/yuding');
    },
     diancan(){
      this.$router.push('/diancan');
    },
  }
};
</script>

<style lang="scss" scoped>
/* 我的订单 */
    
    .order{
        font-size:0.3rem;        
       h6{
        margin-left:0.2rem;
        margin-bottom:0.2rem;
        text-align:left;
        }
        img{
            width:0.6rem;
            height: 0.6rem;
        }
        ul{
            width:100%;
            background:#fff;            
            display:inline-flex;
            justify-content: space-around;
            li{
                margin:0.4rem 0rem;
                span{
                    display:block;
                    margin-top:0.1rem;                    
                    }
            }
        }
        margin-bottom:0.2rem;
    }
    
</style>

