<!--yudingOrder.vue 预定页面组件-->
<template>
  <div class="yudingOrder">
      <div class="div1">
          <h3>
              <span>
                  <span>下沙银泰店</span> 
                  <span>5.5km</span> 
              </span>
              <span>
                  <span class="myspan">到店</span>
                  <span>外卖</span>
                  <span class="myspan">已取消</span>
              </span>
          </h3>
          <div class="div2">
              <ul>
                  <li>大桌</li>
                  <li>1</li>
              </ul>
              <ul>
                  <li>就餐时间</li>
                  <li>12：20</li>
              </ul>
              <ul>
                  <li>就餐人数</li>
                  <li><span>6</span>人</li>
              </ul>
          </div>
          <div>
              
          </div>
          <div class="div4">
              <span>导航</span>
              <span class="zxdc">继续点餐</span>
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
    .yudingOrder{
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
            .myspan{
                color:#f00;
            }
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
        .div4{
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

