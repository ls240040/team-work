<!--paihaoOrder.vue 用户页面组件-->
<template>
  <div class="paihaoOrder">
      <div class="div1">
          <h3>
              <span>
                  <span>波澜大象城店</span> 
                  <span>1.68km</span> 
              </span>
              <span>待叫号</span>
          </h3>
          <div class="div2">
              <ul>
                  <li>小桌</li>
                  <li>11</li>
              </ul>
              <ul>
                  <li>就餐时间</li>
                  <li>15：19</li>
              </ul>
              <ul>
                  <li>就餐人数</li>
                  <li><span>1</span>人</li>
              </ul>
          </div>
          <div class="div3">
              <span>取消排号</span>
              <span class="zxdc">在线点餐</span>
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

<style lang="scss" scoped>
    .paihaoOrder{
        font-size:0.2rem;
        padding:0.2rem;
        background:#f1f1f1;
        .div1{
            background:#fff;
            padding-bottom:0.1rem;
        }
        h3{
            display:flex;
            justify-content: space-between;
            padding:0.2rem;
        }
        .div2{
            display:flex;
            justify-content: space-around;
            color:#666;
            font-weight: lighter;
            margin:0.1rem 0.3rem;
            padding-bottom:0rem;
            background:#eee;
            li{
                margin:0.2rem;
            }
        }
        .div3{
            text-align: right;
            padding:0.25rem;
            span{
                border:1px solid #ccc;
                padding:0.1rem 0.2rem;
                border-radius:0.5rem;
                margin-right:0.2rem;
            }
            .zxdc{
                background:#f00;
                color:#fff;
                border:none;
            }
        }
    }
    
    
</style>

