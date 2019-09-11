<template>
    <div class="crecommend">
        <!--  -->
        <div class="info">
            <div class="left">
                <div class="avatar">
                    <img src="http://127.0.0.1:5050/icon/camera.png">
                </div>
                <div class="name">
                    <span>大H8</span>
                    <img src="http://127.0.0.1:5050/icon/warmth_v_4.png">
                    <p>吃不胖</p>
                </div>
            </div>
            <div class="logo">
                <span class="attention">+关注</span>
                <img src="http://127.0.0.1:5050/icon/elipsis.png">
            </div>
        </div>
        <div class="centerinfo">
            <p class="p1">哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</p>
            <div class="pictures">
                <img src="http://127.0.0.1:5050/icon/food.png">
                <img src="http://127.0.0.1:5050/icon/food.png">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
@import url('../../assets/scss/reset.scss');
    .info{
        padding: 0 .2rem;
        display: flex;
        justify-content: space-between;
        margin-top:.6rem;
        .left{
            display: flex;
            justify-content: space-between;
            .avatar{
                width: 12vw;
                height: 12vw;
                border-radius: 50%;
                background: #999;
                overflow: hidden;
                bottom: 0;
                align-self:flex-end;
                margin-right:.2rem;
                img{
                    width: 12vw;
                }
            }
            .name{
                line-height: .4rem;
                align-self: top;
                text-align: left;
                span{
                    font-size: .3rem;
                    margin-right:.2rem;
                }
                img{
                    height: .3rem;
                    margin-bottom:-.05rem;
                }
            }
        }
        .logo{
            width: 60vw;
            display: flex;
            justify-content:flex-end;
           .attention{
               border: 1px solid #ff2626;
               color:#ff2626;
               border-radius: .3rem;
               font-size: .25rem;
               padding: .1rem .3rem;
               align-self: center;
           }
           img{
               height: .6rem;
               align-self: center;
               margin-left:.1rem;
           }
        }
    }
    .centerinfo{
        padding: .3rem;
        text-align: left;
    }
</style>