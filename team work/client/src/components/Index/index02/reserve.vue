<template>
    <div class="reserve">
        <div class="top">
            <img src="http://127.0.0.1:5050/icon/arrow-left.png">
            <p>预订</p>
        </div>
        <img class="banner" src="http://127.0.0.1:5050/icon/reserve-banner.png">
        <div class="confirm">
            <div class="select-box">
                <div class="select">
                    <p>就餐时间</p>
                    <p>请选择<img src="http://127.0.0.1:5050/icon/arrow-right.png"></p>
                </div>
            </div>
            <div class="select-box">
                <div class="select">
                    <p>就餐人数</p>
                    <p class="greySel" @click="choose">{{num}}</p>
                </div>
            </div>
            <div class="select-box">
                <div class="select">
                    <p>我要订包房</p>
                    <mt-switch v-model="value1"></mt-switch>
                </div>
            </div>
            <mt-checklist
            align="left"
            v-model="selected"
            :options="options"
            v-show="value1">
            </mt-checklist>
        </div>
        <transition name="pull-up">
            <div class="confirm-box"  v-show="show">
                <div class="confirm">
                    <span @click="close">取消</span>
                    <span>就餐人数</span>
                    <span @click="confirm">确定</span>
                </div>
                <mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
            </div>
        </transition>
        <div class="confirm">
            <div class="verify">
                <mt-field label="姓名：" placeholder="000vUEz1" v-model="username"></mt-field>
                <mt-radio
                v-model="value"
                :options="['先生', '女士']">
                </mt-radio>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            slots: [
                {
                flex: 1,
                values: ['1人', '2人', '3人', '4人', '5人', '6人','7人','8人','9人','10人'],
                className: 'slot1',
                textAlign: 'center'
                }, 
            ],
            num:"请选择",
            show:false,
            value1:false,
            selected:[""],
            options:["没有包房可接受大厅"]
        }
    },
    methods:{
        close(){
            this.show=false;
        },
        confirm(){
            var selected=document.getElementsByClassName("picker-selected")[0];
            var greySel=document.getElementsByClassName("greySel")[0];
            console.log(selected.innerHTML);
            this.num=selected.innerHTML;
            greySel.style.color="#000";
            this.show=false;
        },
        choose(){
            this.show=true;
        },
        onValuesChange(picker,values){
            if(values[0]>values[1]){
                picker.setSlotValue(1, values[0]);
            }
        },
        loadMore(){
            this.$messagebox("温馨提示","各位捞粉大家好，每日早上7:00-9:00是我们闭店打扫时间，擦亮桌椅迎接您的到来，期间无法为您提供用餐服务，感谢您的谅解与支持。")
        }
    },
    created(){
        this.loadMore();
    }
}
</script>
<style lang="scss">
    // $deg:5;
    .mint-msgbox-message{
        font-size: .22rem;
        color:rgb(41, 41, 41)!important;
        line-height: .32rem!important;
        text-align: left!important;
    }
    .mint-msgbox-confirm{
        color:#222!important;
        font-size: .3rem;
    }
    .mint-msgbox{
        width: 70%!important;
        border-radius: .3rem!important;
    }
    .mint-msgbox-title{
        font-size: .3rem!important;
    }
    .reserve{
        .top{
            padding: .2rem .3rem;
            font-size: .4rem;
            display: flex;
            justify-content: space-between;
            line-height: .6rem;
            position: relative;
            img{
                height: .4rem;
                display: block;
                margin-top:.1rem;
            }
            p{
                position: absolute;
                left:50%;
                margin-left:-.5rem;
            }
        }
        .banner{
            width: 100%;
            display: block;
        }
        .pull-up-enter-active.pull-up-enter-to,
        .pull-up-leave-active.pull-up-leave-to {
            transform: translateY(1);
            transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1) 0s;
            -ms-transform-origin:center bottom; 
            transform-origin:center bottom; 
        }
        .pull-up-enter,
        .pull-up-leave-active{
            -ms-transform: translateY(7rem);
            transform: translateY(7rem);
        }

        .confirm-box{
            height: 40vh;
            position: fixed;
            bottom: 12vh;
            width: 100%;
            overflow: hidden;
            .confirm{
                font-size: .3rem;
                color:#000;
                display: flex;
                justify-content: space-between;
                padding:.3rem .5rem;
                z-index: 100;
                background-color: #fff;
            }
            .picker-items{
                position: fixed;
                bottom: 0;
                width: 100%;
                height: 45vh;
                box-sizing: border-box;
                z-index: 3;
                overflow: hidden;
            }
            .picker-item{
                top:1.2rem;
                font-size: .4rem;
            }
            .picker-selected{
                color:#000;
            }
            .picker-center-highlight{
                background-color:#ffe2cd;
                z-index: 1;
                // margin-top:.45rem!important;
            }
            .picker-slot.picker-slot-center.slot1{
                z-index: 2;
            }
            
            // @for $i from 1 through 10{
            //         .picker-item.picker-selected~.picker-item:nth-child(#{$i}){
            //             @if $i == 1{
            //                 transform: rotateX(($deg*1) +10deg)!important;
            //             } @else if $i == 2{
            //                 transform: rotateX(($deg*2) +10deg)!important;
            //             } @else if $i == 3{
            //                 transform: rotateX(($deg*3) +10deg)!important;
            //             } @else if $i == 4{
            //                 transform: rotateX(($deg*4) +10deg)!important;
            //             }
            //         }
            // }
            // .picker-item.picker-selected{
            //     transform: translate3d(0, 0, 0) rotateX(0deg)!important;
            // }
        }
        .confirm{
            background-color: #f7f7f7;
             padding: 0 .3rem .3rem;
            .select-box{
                font-size: .25rem;
                color:#000;
                padding:.3rem .3rem 0;
                background-color: #fff;
                .select{
                    border-bottom: 1px solid #f7f7f7;
                    display: flex;
                    justify-content: space-between;
                    padding-bottom:.3rem;
                    img{
                        height: .25rem;
                        vertical-align: bottom;
                        margin-left:.15rem;
                    }
                    .greySel{
                        color:#a0a0a0;
                    }
                    .mint-switch-input:checked + .mint-switch-core{
                        border-color:#f1d3dd;
                        background-color: #fb3e7e;
                    }
                    .mint-switch{
                        margin-right:.2rem;
                    }
                    .mint-switch-core{
                        width: .5rem;
                        height: .3rem;
                    }
                    .mint-switch-core::before{
                        width: .4rem;
                        height: .4rem;
                        transform: translateX(.2rem) translateY(-.08rem);
                        background-color: transparent;
                    }
                    .mint-switch-core::after{
                        background-color: #ececec;
                        width: .4rem;
                        height: .4rem;
                        transform: translateX(-0.1rem) translateY(-0.08rem);
                    }
                    .mint-switch-input:checked + .mint-switch-core::after{
                        transform: translateX(.2rem) translateY(-.08rem);
                    }
                }
            }
            .mint-cell-wrapper{
                width: 60%;
                font-size: .25rem;
                color:#000;
            }
            .mint-checkbox-input:checked + .mint-checkbox-core{
                background-color: #fff;
                border-color:#ff2626;
            }
            .mint-checkbox-input:checked + .mint-checkbox-core::after{
                background-color: #ff2626;
                border-radius: 50%;
                border: transparent;
                width: .24rem;
                height: .24rem;
            }
            .mint-checkbox-core{
                width: .4rem;
                height: .4rem;
            }
            .mint-checkbox-core::after{
                top:0;
                left:0;
                margin-left:.08rem;
                margin-top:.08rem;
            }
            .mint-cell{
                background-color: transparent;
                min-height: 0.4rem;
            }
            .mint-cell:last-child{
                background-image: none;
            }
            .mint-cell-wrapper{
                background-image: none;
            }
            .verify{
                justify-content: space-between;
                display: flex;
            }
            .mint-radiolist-label{
                width: 2rem;
            }
            .mint-radiolist-label,.mint-radiolist{
                display: flex;
                padding: 0;
                flex-wrap: nowrap;
            }
            .mint-radiolist{
                width: 40vw;
                border: 1px solid red;
            }
            .mint-field .mint-cell-title{
                width: 1rem;
            }
            .mint-radio-label{
                margin-right:.1rem;
                width: .6rem;
                line-height: 1
            }
            .mint-cell-wrapper{
                overflow:initial;
            }
            .mint-radiolist-title{
                margin: 0;
            }
            .mint-cell-wrapper{
                padding: 0;
            }
        }
    }
</style>