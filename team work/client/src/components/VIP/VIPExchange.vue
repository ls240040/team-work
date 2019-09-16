<template>
  <div>
    <span>捞币可兑换多种大礼</span>
    <br />
    <div class="ex1">
      <span>代金券</span>
      <span>抵用现金就餐更优惠</span>
    </div>
    <div class="ex2">
      <span>菜品类</span>
      <span>门店推荐菜品免费换</span>
    </div>
    <div class="ex3">
      <span>商品类</span>
      <span>更多好物任你兑</span>
    </div>
    <div class="ex4">
      <span>黑海专区</span>
      <span>专属礼品等你发现</span>
    </div>
  </div>
</template>
<style scoped>
div {
  text-align: left;
  margin-bottom: 0.5rem;
}
span {
  font-size: 0.3rem;
  font-weight: bold;
  margin: 0.2rem;
}
.ex1,
.ex2,
.ex3,
.ex4 {
  display: inline-block;
  height: 1.5rem;
  width: 3rem;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  margin-left: 0.21rem;
  margin-right: 0.21rem;
  margin-bottom: 0.1rem;
  margin-top: 0.1rem;
}
.ex1 {
  background-image: url("http://127.0.0.1:5050/icon/redeem_card.png");
}
.ex2 {
  background-image: url("http://127.0.0.1:5050/icon/redeem_dish.png");
}
.ex3 {
  background-image: url("http://127.0.0.1:5050/icon/redeem_goods.png");
}
.ex4 {
  background-image: url("http://127.0.0.1:5050/icon/redeem_member.png");
}

.ex1>span,
.ex2>span,
.ex3>span,
.ex4>span{
    color: white;
    display: block;
    font-size: 0.28rem;
}

</style>