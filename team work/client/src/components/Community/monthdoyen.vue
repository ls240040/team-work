<template>
    <div class="main">
        <div class="info">
            <div class="left">
                <div class="avatar">
                    <img src="http://127.0.0.1:5050/icon/month1.png">
                    <img class="im1" src="http://127.0.0.1:5050/icon/avatar4.png">
                </div>
                <div class="name">
                    <span>大H8</span>
                    <p>达人称号：海捞达人</p>
                </div>
            </div>
            <div class="right">
                <img src="http://127.0.0.1:5050/icon/label1.png">
                <p>获得奖励：50捞币</p>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .main{
        background: #f7f7f7;
        padding: .3rem 0;
        margin-top:.6rem;
    }
    .info{
        display: flex;
        justify-content: space-between;
        .left{
            display: flex;
            justify-content: space-between;
            line-height: .35rem;
            padding-left: .2rem;
            .avatar{
                position: relative;
                bottom: 0;
                align-self:flex-end;
                margin-right:.2rem;
                img{
                    width: 22vw;
                    z-index: 2;
                    position: relative;
                }
                .im1{
                    position: absolute;
                    z-index: 1;
                    left: .35rem;
                    width: 14vw;
                    height: 14vw;
                    margin-top: .1rem;
                }
            }
            .name{
                line-height: .4rem;
                align-self: top;
                text-align: left;
                padding-top: .2rem;
                span{
                    font-size: .3rem;
                    margin-right:.2rem;
                }
                P{
                    font-size: .2rem;
                    color:#999;
                }
            }
        }
        .right{
            line-height: .35rem;
            font-size: .3rem;
            img{
                height: .5rem;
                margin-right: -1rem;
                margin-top: .1rem;
            }
            p{
                margin-top: .2rem;
                margin-right: .2rem;
            }
        }
    }
</style>