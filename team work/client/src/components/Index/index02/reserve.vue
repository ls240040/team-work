<template>
    <div class="reserve">
        <div class="top">
            <img src="http://127.0.0.1:5050/icon/arrow-left.png">
            <p>预订</p>
        </div>
        <img class="banner" src="http://127.0.0.1:5050/icon/reserve-banner.png">
        <div class="confirm-box">
            <div class="confirm">
                <span>取消</span>
                <span>就餐人数</span>
                <span>确定</span>
            </div>
            <mt-picker v-show="show" :slots="slots" @change="onValuesChange"></mt-picker>
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
            show:true,
        }
    },
    methods:{
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
        }
        .confirm-box{
            height: 50vw;
            position: fixed;
            bottom: 12vh;
            width: 100%;
            .confirm{
                font-size: .3rem;
                color:#000;
                display: flex;
                justify-content: space-between;
                padding:0 .5rem;
            }
            .picker-items{
                position: fixed;
                bottom: 0;
                width: 100%;
                height: 36%;
            }
            .picker-selected{
                background-color:#ffe2cd;
                color:#000;
            }
            // .picker-slot-wrapper{
            //     transform:translate(0px, 0) translateZ(0px)!important;
            // }
            // .picker-selected~.picker-item {
            //     // background-color:#ffe2cd;
            //     transform: translate3d(0, 0, 0) rotateX(35deg)!important;
            // }
            .picker-items div:not(.picker-selected){
                transform: translate3d(0, 0, 0) rotateX(30deg)!important;
            }
        }
    }
</style>