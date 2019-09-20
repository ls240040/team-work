<!-- 门店组件-->
<template>
    <div class="store">      
        <div class="div1">
            <img src="http://127.0.0.1:5050/icon/login_logo_img.png" alt="">
            <div class="div2">
                <h4>海底捞火锅外送(庆春路店)</h4>
                <span class="span1">营业中</span>
                <span>湖滨</span>
            </div>
            <span class="span2">≤4.7km</span>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
        }
    },
    methods:{

    }
}
</script>
<style lang="scss">   
    .store{       
       .div1{
           display:flex;
           justify-content: space-around;
           padding:0.3rem;
           background:#fff;
           font-size:0.3rem;
           border-top:1px solid #ddd;
           border-bottom:1px solid #ddd;
           img{
               width:0.7rem;height:0.7rem;
           }
         .div2{
             text-align: left;
             h4{
                 margin-bottom:0.2rem;
             }
             .span1{
               color:#fff;
               font-size:0.1rem;
               background:#23a6ff;
               border-radius:0.5rem;
               padding:0.03rem 0.08rem;
               margin-right:0.2rem;
           }
           .span1+span{color:#aaa;}
         }  
           .span2{
               color:#aaa;
                position: relative;
                top: 50%;
                transform: translateY(50%);
           }
       }
    }
</style>