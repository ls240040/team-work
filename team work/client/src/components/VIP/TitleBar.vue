<template>
  <div>
    <div class="page-head">
      <span>会员</span>
      <div class="right-head">
        <span>帮助</span>
      </div>
    </div>
    <div class="null"></div>
  </div>
</template>

<style scoped>
.null {
  height: 0.8rem;
  width: 100%;
}
div{z-index: 10;}
.page-head {
  height: 0.8rem;
  text-align: center;
  background-color: white;
  line-height: 0.4rem;
  position: fixed;
  width: 100%;
  top: 0;
}
.page-head > span {
  color: black;
  font-size: 0.35rem;
  font-weight: bold;
}
.right-head {
  float: right;
  position: relative;
  right: 1rem;
}
.right-head > span {
  color: black;
  font-size: 0.2rem;
}
</style>