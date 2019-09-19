<!--mineStatus.vue 我的动态页面组件-->
<template>
  <div class="status">
      <h6>我的动态</h6>
      <ul>
          <li>
              <img src="http://127.0.0.1:5050/icon/shoucangjia.png" alt="">
              <span>收藏夹</span>
          </li>
          <li class="my_li">
              <img src="http://127.0.0.1:5050/icon/shequ.png" alt="">
              <span>社区</span>
          </li>
          <li>
              <img src="http://127.0.0.1:5050/icon/xiaoxi.png" alt="">
              <span>消息</span>
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
    .status{
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

