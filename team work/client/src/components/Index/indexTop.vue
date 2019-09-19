<!--index.vue 用户登录组件-->
<template>
<div style="background:#fff">
  <div class="iTop">
    <div class="navBar">
      <img class="leftImg" src="http://127.0.0.1:5050/icon/msg.png" alt>
      <input class="search" placeholder="搜索门店·内容·用户" type="text">
      <img class="more" src="http://127.0.0.1:5050/icon/more.png" alt>
      <img class="kefu" src="http://127.0.0.1:5050/icon/kefu.png" alt>
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
</div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {}
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
  .search {
    // position: fixed;
    top: 0.3rem;
    left: 1.1rem;
    width: 4rem;
    height: 0.45rem;
    border: 0;
    border-radius: 0.15rem;
    background-color: rgba(85, 85, 85, 0.2);
    padding-left: 0.2rem;
  }
  .search::placeholder {
    color: rgba(255, 255, 255, 0.5);
    font-weight: 100;
  }
}
</style>

