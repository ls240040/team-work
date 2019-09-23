<template>
  <div class="card">
    <span class="rednum">00016Ez1</span>
    <div @click="myNum">我的会员码</div>
    <span class="coin">{{coin}}</span><span class="tocoin">捞币</span>
    <span class="mynum">NO.8620190910001675</span>
  </div>
</template>

<script>
export default {
  data(){
    return{
      coin:1,
    }
  },
  methods:{
    myNum:function(){
      alert("码");
    }
  }
}
</script>

<style scoped>
    .card{
        background-image: url("http://127.0.0.1:5050/icon/member_red_card.png");
        background-repeat:no-repeat;
        background-size:100% 100%;
        height: 3.5rem;
        position: relative;
    }
    .card>div{
      height: 0.8rem;
      width: 1.8rem;
      font-size: 0.3rem;
      color: red;
      background-color: white;
      line-height: 0.85rem;
      border-radius: 0.4rem;
      position: relative;
      left: 4.4rem;
      top: 0.8rem;
    }
    .card>.rednum{
      font-size: 0.3rem;
      color: #fff;
      position: absolute;
      top: 0.7rem;
      left: 0.7rem;
    }
    .card>.mynum{
      font-size: 0.3rem;
      color: #fff;
      position: absolute;
      bottom: 1rem;
      right: 0.7rem;
    }
    .card>.coin{
      font-size: 0.5rem;
      color: #fff;
      position: absolute;
      bottom: 0.9rem;
      left: 0.7rem;
    }
    .card>.tocoin{
      font-size: 0.3rem;
      color: #fff;
      position: absolute;
      bottom: 1rem;
      left: 1rem;
    }

</style>