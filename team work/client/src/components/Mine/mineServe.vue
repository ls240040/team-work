<!--mineServe.vue 我的服务页面组件-->
<template>
  <div class="serve">
      <h6>我的服务</h6>
      <ul>
          <li>
              <img src="http://127.0.0.1:5050/icon/bangzhu.png" alt="">
              <span>寻求帮助</span>
          </li>
          <li class="my_li">
              <img src="http://127.0.0.1:5050/icon/tousu.png" alt="">
              <span>投诉表扬</span>
          </li>
          <li>
              <img src="http://127.0.0.1:5050/icon/laoxiaomi.png" alt="">
              <span>捞小秘</span>
          </li>
      </ul>
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

<style lang="scss" scoped>
    .serve{
        font-size:0.3rem;
        h6{
        margin:0.5rem 0rem 0.2rem 0.2rem;
        text-align:left;
        }
        ul{
            background:#fff;
            text-align: left;
            padding:0.2rem 0rem;
            li{
               margin:0.2rem;
               img{
                   width:0.5rem;height:0.5rem;
                   vertical-align: middle;
                   margin-right: 0.2rem;
                   span{
                       display:inline-block;
                   }
                   
               }
            }
        }
    }
    .my_li{
            border-top:0.01rem solid #eee;
            border-bottom:0.01rem solid #eee;
            padding:0.2rem 0rem;
    }
    
</style>

