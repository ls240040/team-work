<!--recommendName.vue 评论页面组件-->
<template>
  <div class="recommendName">
      <div class="photo">
          <img src="http://127.0.0.1:5050/icon/timg.jpg" alt="">
          <img src="http://127.0.0.1:5050/icon/timg.jpg" alt="">
          <img src="http://127.0.0.1:5050/icon/timg.jpg" alt="">
          <img src="http://127.0.0.1:5050/icon/timg.jpg" alt="">
          <img src="http://127.0.0.1:5050/icon/timg.jpg" alt="">
          <img src="http://127.0.0.1:5050/icon/timg.jpg" alt="">
          <img src="http://127.0.0.1:5050/icon/timg.jpg" alt="">
          <img src="http://127.0.0.1:5050/icon/timg.jpg" alt="">
          <img src="http://127.0.0.1:5050/icon/timg.jpg" alt="">
          <img src="http://127.0.0.1:5050/icon/timg.jpg" alt="">
          <img src="http://127.0.0.1:5050/icon/timg.jpg" alt="">
          <img src="http://127.0.0.1:5050/icon/timg.jpg" alt="">
          <img src="http://127.0.0.1:5050/icon/timg.jpg" alt="">
          <img src="http://127.0.0.1:5050/icon/timg.jpg" alt="">
          <img src="http://127.0.0.1:5050/icon/timg.jpg" alt="">
          <img src="http://127.0.0.1:5050/icon/timg.jpg" alt="">
          <img src="http://127.0.0.1:5050/icon/timg.jpg" alt="">
          <img src="http://127.0.0.1:5050/icon/timg.jpg" alt="">
      </div>
      <!-- 评论框 -->
      <div>
        <div class="comment">
            <div class="divs">
                    <img class="head" src="http://127.0.0.1:5050/icon/timg.jpg" alt="">
                    <div class="text">
                            <p class="p1">阿尔法</p>
                            <img src="http://127.0.0.1:5050/icon/warmth_v_4.png" alt="">
                            <img src="http://127.0.0.1:5050/icon/su_vipgold.png" alt="">
                            <img src="http://127.0.0.1:5050/icon/su_vipred.png" alt="">
                            <img src="http://127.0.0.1:5050/icon/su_vipsilver.png" alt="">
                            <p class="p2">发布于<span>14:20</span></p>                
                    </div>
            </div> 
            <div>
                <img class="heart" src="http://127.0.0.1:5050/icon/collect.png" alt="">
                    <img class="heart" src="http://127.0.0.1:5050/icon/collect-fill.png" alt="">
                    <span>5</span>
            </div>            
        </div> 
        <p class="ptext">xixi asdfj asdf嘻嘻哈哈啊哈哈xixi asdfj asdf嘻嘻哈哈啊哈哈xixi asdfj asdf嘻嘻哈哈啊哈哈</p>
     </div>   
     <!-- 评论框 -->
      <div>
        <div class="comment">
            <div class="divs">
                    <img class="head" src="http://127.0.0.1:5050/icon/timg.jpg" alt="">
                    <div class="text">
                            <p class="p1">阿尔法</p>
                            <img src="http://127.0.0.1:5050/icon/warmth_v_4.png" alt="">
                            <img src="http://127.0.0.1:5050/icon/su_vipgold.png" alt="">
                            <img src="http://127.0.0.1:5050/icon/su_vipred.png" alt="">
                            <img src="http://127.0.0.1:5050/icon/su_vipsilver.png" alt="">
                            <p class="p2">发布于<span>14:20</span></p>                
                    </div>
            </div> 
            <div>
                <img class="heart" src="http://127.0.0.1:5050/icon/collect.png" alt="">
                    <img class="heart" src="http://127.0.0.1:5050/icon/collect-fill.png" alt="">
                    <span>5</span>
            </div>            
        </div> 
        <p class="ptext">xixi asdfj asdf嘻嘻哈哈啊哈哈xixi asdfj asdf嘻嘻哈哈啊哈哈xixi asdfj asdf嘻嘻哈哈啊哈哈</p>
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
    .recommendName{       
        .photo{
            width:95%;            
            background:#eee;
            text-align: left;
            margin:0rem 0.2rem 0rem 0.2rem;
            img{                
                width:0.5rem;height:0.5rem;
                border-radius:50%;
                margin:0rem 0.05rem 0rem 0.05rem;
            }
        }
        .comment{
            margin-top:0.2rem;
            font-size:0.25rem;
            display: flex;
            justify-content: space-between;      
            padding:0.2rem;
            border-top:1px solid #ddd;
            .divs{
                width:50%;
                 text-align: left;
            .head{
                width:0.6rem;height:0.6rem;
                border-radius:50%;
                margin-right:0.1rem;
            }
            .text{
                display: inline-block;
                text-align: left;
                .p1{
                display:inline-block;                
            }
            img{
                width:0.3rem;height:0.3rem;
                vertical-align: middle;
                margin-left:0.1rem;
            }
            }
           } 
            .heart{
                width:0.4rem;height:0.4rem;
                vertical-align: middle;
                margin-right:0.1rem;
            }
           
        }
        .ptext{
            font-size:0.25rem;
            text-align: left;
            padding:0rem 0.3rem 0rem 0.9rem;
            border-bottom:1px solid #ddd;
            padding-bottom:0.2rem;
        }
    }
    
</style>

