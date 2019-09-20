<template>
    <div>
        <div class="crecommend">
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
                <p class="p1">哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</p>
                <div class="pictures">
                    <div class="im">
                        <img src="http://127.0.0.1:5050/icon/food.png">
                    </div>
                    <div class="im">
                        <img src="http://127.0.0.1:5050/icon/food.png">
                    </div>
                </div>
            </div>
            <div class="bottominfo">
                <div class="left">
                    <p>发布于星期一</p>
                    <p>来自<i>最新活动</i></p>
                </div>
                <div class="right">
                    <div><img src="http://127.0.0.1:5050/icon/message.png"><span>18</span></div>
                    <div><img src="http://127.0.0.1:5050/icon/collect.png"><span>16</span></div>
                </div>
            </div>
            <hr>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
@import url('../../assets/scss/reset.scss');
    .crecommend{
        padding:0 .2rem .5rem;
    }
    hr{
        opacity: .5;
    }
    .info{
        display: flex;
        justify-content: space-between;
        margin-top:.6rem;
        .left{
            display: flex;
            justify-content: space-between;
            line-height: .35rem;
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
                P{
                    font-size: .2rem;
                    color:#999;
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
        text-align: left;
        font-size: .25rem;
        box-sizing:border-box;
        .pictures{
            display: flex;
            margin:.2rem 0;
            .im{
                width:33%;
                overflow: hidden;
                margin-right:.2rem;
                background: #999;
                img{
                    width: 100%;
                }
            }
        }
        p{
            margin-top:.3rem;
            line-height: .4rem;
        }
    }
    .bottominfo{
        display: flex;
        justify-content: space-between;
        font-size: .25rem;
        color: #999;
        .left{
            display: flex;
            line-height: .35rem;
            p{
                margin-right:.2rem;
            }
            i{
                font-style: normal;
                color:#ff8315;
                margin-left:.1rem;
            }
        }
        .right{
            display: flex;
            div{
                display: flex;
                margin-right:.1rem;
                 img{
                    height: .35rem;
                    display: block;
                    margin:0 .06rem;
                }
            }
        }
    }
</style>