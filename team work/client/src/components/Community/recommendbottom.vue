<template>
  <div class="reBottom">
    <div class="box1">
      <div>
        <img src="http://127.0.0.1:5050/icon/collect-fill.png" alt />点赞
      </div>
      <div @click="pinglun">
        <img src="http://127.0.0.1:5050/icon/comment.png" alt />评论
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: []
    };
  },
  methods: {
      pinglun(){
        this.$messagebox.prompt("我想说。。。","").then(

            
        ).catch()
        
  

      },
  }
};
</script>
<style lang="scss">
@import url("../../assets/scss/reset.scss");
    div.mint-msgbox{
        width: 80%!important;
    }
.reBottom {

  width: 100%;
  position: fixed;
  bottom: 0;
  .box1 {
    display: flex;
    justify-content: space-around;
    div {
      font-size: 0.5rem;
      img {
        width: 0.5rem;
      }
    }
  }
}
</style>