<!--index.vue 用户登录组件-->
<template>
  <div class="iTop" ref="top">
    <div class="navBar" v-show="show" ref="navbar">
      <img @click="Messagelist" class="leftImg" :src="image1">
      <input class="search1" :class="{class2:isScroll}" placeholder="搜索门店·内容·用户" type="text" ref="search">
      <img class="more" :src="image2">
      <img class="kefu" :src="image3">
    </div>
    <div class="vipMsg">
      <div>
        <p>
          <span>1</span>捞币
        </p>
      </div>
      <div>
        <p>
          <span>0</span>券
        </p>
      </div>
      <div>
        <p class="change">去兑换
          <img src="http://127.0.0.1:5050/icon/arrow.png" alt>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show:true,
      image1:"http://127.0.0.1:5050/icon/msg.png",
      image2:"http://127.0.0.1:5050/icon/more.png",
      image3:"http://127.0.0.1:5050/icon/kefu.png",
      isScroll:false
    }
  },
  mounted() {
    window.addEventListener('scroll',this.handleScroll);
  },
  methods: {
    Messagelist(){
            this.$router.push('/Messagelist')
        },
    handleScroll(e){
      e.stopPropagation();
      e.preventDefault();
      var scrollTop=document.documentElement.scrollTop || document.body.scrollTop;
      if(scrollTop>200){
        this.$refs.navbar.style.background="#fff";
        this.image1="http://127.0.0.1:5050/icon/msg2.png";
        this.image2="http://127.0.0.1:5050/icon/more2.png";
        this.image3="http://127.0.0.1:5050/icon/kefu2.png";
        this.$refs.search.style.backgroundColor="rgba(187, 187, 187, 0.2)";
        this.isScroll=true
      }else if(scrollTop<200 || scrollTop==0){
        this.$refs.navbar.style.background="url(http://127.1:5050/icon/header_bg.png) no-repeat";
        this.$refs.navbar.style.backgroundAttachment="fixed";
        this.$refs.navbar.style.backgroundSize="100%";
        this.$refs.navbar.style.height="1rem";
        this.image1="http://127.0.0.1:5050/icon/msg.png";
        this.image2="http://127.0.0.1:5050/icon/more.png";
        this.image3="http://127.0.0.1:5050/icon/kefu.png";
        this.$refs.search.style.backgroundColor="rgba(216, 216, 216, 0.2)";
        this.isScroll=false;
        
      }
    },
  },
  destroyed () {
    window.removeEventListener('scroll',this.handleScroll);
  }
};
</script>

<style lang="scss">
.iTop {
  position: relative;
  width: 100%;
  height: 3.6rem;
  background: url(http://127.1:5050/icon/header_bg.png) no-repeat;
  background-size: 100%;
  background-attachment: fixed;
  -webkit-overflow-scrolling: touch;
  touch-action: none;
  .navBar{
    background: url(http://127.1:5050/icon/header_bg.png) no-repeat;
    background-attachment: fixed;
    height: 3.6rem;
    background-size: 100%;
    position: fixed;
    width: 100%;
    height: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 .3rem;
    box-sizing: border-box;
    z-index: 100;
  }
  .vipMsg {
    display: flex;
    padding-top: 2rem;
    color: #fff;
    justify-content: space-around;
    p {
      font-size: 0.4rem;
      span {
        font-size: 0.8rem;
      }
    }
    p.change {
      font-size: 0.3rem;
      margin-top: 0.3rem;
    }
    img {
      vertical-align: middle;
      position: relative;
      bottom: 0.05rem;
    }
  }
  .navBar img.leftImg {
    height: 0.45rem;
    vertical-align: middle;
    // position: fixed;
    top: 0.3rem;
    left: 0.2rem;
  }
  .navBar img.more {
    height: 0.45rem;
    // position: fixed;
    top: 0.3rem;
    right: 0.2rem;
  }
  .navBar img.kefu {
    height: 0.45rem;
    // position: fixed;
    top: 0.3rem;
    right: 1rem;
  }
  input {
    // position: fixed;
    top: 0.3rem;
    left: 1.1rem;
    width: 4rem;
    height: 0.45rem;
    border: 0;
    border-radius: 0.45rem;
    background-color: rgba(113, 0, 0, 0.2);
    padding-left: 0.2rem;
    outline: 0;
  }
  .search1::placeholder {
    color: rgba(255, 255, 255, 0.5);
    font-weight: 100;
  }
  .class2::placeholder{
    color: rgb(82, 82, 82);
    font-weight: 100;
  }
}
</style>

