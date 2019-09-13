<!--index.vue 商品组件-->
<template>
  <div class="shop">
    <div>
      <img src="http://127.1:5050/index/sp1.png" alt>
      <p class="shopTitle">招牌虾滑</p>
      <p><span>580捞币</span>&nbsp;兑换59813</p>
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
    .shop{
        text-align: left;
        margin-top:.3rem; 
        img{
            width:3rem;
            border-radius: .1rem;
        }
        p{
            margin-top: .2rem;
            font-size: .3rem;
            color: #999;
            span{
                color: #CFB53B;
                font-weight: 600;
            }
        }
        p.shopTitle{
            font-size: .4rem;
            color: #000;
        }

    }
</style>

