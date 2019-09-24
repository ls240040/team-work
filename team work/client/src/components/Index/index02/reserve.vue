<template>
    <div class="reserve">
        <!-- 头部 -->
        <div class="top">
            <img @click="linkTo2" src="http://127.0.0.1:5050/icon/arrow-left.png">
            <p>预订</p>
        </div>
        <!-- banner -->
        <img class="banner" src="http://127.0.0.1:5050/icon/reserve-banner.png">
        <!-- 主体 -->
        <div class="confirm">
            <div class="select-box">
                <div class="select">
                    <p>就餐时间</p>
                    <p @click="chooseTime">{{time}}<img src="http://127.0.0.1:5050/icon/arrow-right.png"></p>
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
        <div class="confirm">
            <div class="verify-box">
                <div class="verify">
                    <mt-field label="姓名：" :placeholder="list.U_Name" v-model="username" readonly></mt-field>
                    <mt-radio
                    v-model="value2"
                    :options="['先生', '女士']">
                    </mt-radio>
                </div>
            </div>
             <div class="verify-box">
                <div class="verify">
                    <mt-field label="手机号：" :placeholder="list.U_LoginID" v-model="phone" readonly></mt-field>
                </div>
            </div>
            <div class="verify-box">
                <div class="verify" @click="linkTo">
                    <p>特殊需求</p> 
                    <img src="http://127.0.0.1:5050/icon/arrow-right.png"> 
                </div>
            </div>
            <div class="msgbox">
                <p class="getMsg">{{$store.getters.getMsg}}</p>
            </div>
            <div class="submit-box">
            <div class="submit">
                <p>*提交订单后需要等待餐厅确认</p>
                <button @click="linkTo3">立即预订</button>
            </div>
        </div>
        </div>
        <!-- 选择人数 -->
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
        <!-- 日历 -->
        <transition name="pull-up">
            <div class="calbox" v-show="calshow">
                <div class="confirmCal">
                    <span @click="closeCal">取消</span>
                    <span>日历</span>
                    <span @click="sure">确定</span>
                </div>
                <Calendar :choseDay="clickDay" :changeMonth="changeDate" :isToday="clickToday" class="calendar" :agoDayHide="ago" :futureDayHide="future"></Calendar>
            </div>
        </transition>
    </div>
</template>
<script>
import Calendar from 'vue-calendar-component';
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
            time:"请选择",
            show:false,
            value1:false,
            selected:[""],
            options:["没有包房可接受大厅"],
            username:"",
            value2:"",
            phone:"",
            calshow:false,
            ago:"",
            future:"",
            list:[]
        }
    },
    components: {
        Calendar
    },
    methods:{
        linkTo(){
            this.$router.push("/demand");
        },
        linkTo2(){
            this.$router.push("/shopList");
        },
        linkTo3(){
             // 传递数据给后台
            var time;
            var hall;
            var num;
            var room;
            var sex;
            var name=this.username;
            var phone=this.phone;


            if(this.num=="请选择"){
                num=null;
                // this.$toast("请选择就餐人数")
            }else{
                num=this.num+"人";
            }

            
            if(this.time=="请选择"){
                time=null;
            }else{
                time=this.time;
            }

            if(this.value1==false){
                room=0;
            }else{
                room=this.value1;
            }

            if(this.selected==null){
                hall="不接受大厅";
            }else{
                hall=this.selected;
            }
            
            if(this.value2==""){
                sex=null;
            }else{
                sex=this.value2;
            }

            var getmsg=this.$store.getters.getMsg;
            if(getmsg==""){
                var demand=null;
            }else{
                var demand=getmsg;
            }
            
            phone=this.list.U_LoginID;
            name=this.list.U_Name;
            var uid = sessionStorage.getItem("accessToken");
            var M_Name=this.$route.params.M_Name;
            var M_Distance=this.$route.params.M_Distance;


            // (NULL,'${time}','${num}',${room},'${hall}','${R_Name}',${R_Phone},'${sex}','${demand}'
            var obj={time,num,room,hall,name,phone,sex,demand,uid,M_Name,M_Distance};
            if(num!==null && time!==null){
                this.axios.get("/index/reserve", {params:obj}).then(res=>{
                    if(res.data.code==1){
                        this.$messagebox("预订成功").then(res=>{
                            this.$router.push("/yuding");
                        })
                    }else if(res.data.code==2){
                        this.$messagebox("不可重复预订").then(res=>{
                            this.$router.push("/yuding");
                        })
                    }
                }).catch(err=>{
                    console.log(err)
                })
            }else if(time==null){
                this.$toast("请选择就餐时间")
            }else if(num==null){
                this.$toast("请选择就餐人数")
            }
        },
        clickDay(){
            
        },
        changeDate(){
            
        },
        clickToday(){
            
        },
        close(){
            this.show=false;
        },
        closeCal(){
            this.calshow=false;
        },
        sure(){
            this.calshow=false;
            var chosenDay=document.getElementsByClassName("wh_chose_day")[0];
            if(chosenDay!=null){
                chosenDay=chosenDay.innerHTML;
                var date=document.getElementsByClassName("wh_content_li")[0].innerHTML;
                var year=date.slice(0,4);
                if(date.length==7){
                    var day=date.slice(5,6);
                }else if(date.length>7){
                    var day=date.slice(5,7);
                }
                this.time=year+"-"+day+"-"+chosenDay;
            }else{
                this.time="请选择"
            }
        },
        confirm(){
            var selected=document.getElementsByClassName("picker-selected")[0];
            var greySel=document.getElementsByClassName("greySel")[0];
            this.num=selected.innerHTML;
            greySel.style.color="#000";
            this.show=false;
        },
        choose(){
            this.show=true;
            this.calshow=false;
        },
        chooseTime(){
            this.calshow=true;
            this.show=false;
            // var today=document.querySelector(".wh_content_item .wh_isToday[data-v-2ebcbc83]");
            // today.innerHTML="今";

        },
        onValuesChange(picker,values){
            if(values[0]>values[1]){
                picker.setSlotValue(1, values[0]);
            }
        },
        loadMore(){
            this.$messagebox("温馨提示","各位捞粉大家好，每日早上7:00-9:00是我们闭店打扫时间，擦亮桌椅迎接您的到来，期间无法为您提供用餐服务，感谢您的谅解与支持。")
            // 预定时间
            var start=Date.parse(new Date());
            start=start/1000;
            start=start.toString();
            var end=Date.parse(new Date());
            var addtime=20*24*60*60*1000;
            end=parseInt(end)+parseInt(addtime);
            end=end/1000;
            end=end.toString();
            this.ago=start
            this.future=end;
            // getUser
            var uid = sessionStorage.getItem("accessToken");
            var obj = { uid: uid };
            var url='user/getUser2';
            this.axios.get(url,{params:obj}).then(res=>{
                if(res.data.code==1){
                    this.list=res.data.data[0];
                    console.log(this.list)
                }
            })
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
        background-color: #f7f7f7;
        height: 100vh;
        .top{
            padding: .2rem .3rem;
            font-size: .4rem;
            display: flex;
            justify-content: space-between;
            line-height: .6rem;
            position: relative;
            background-color: #fff;
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
            height:43%;
            position: fixed;
            bottom: 12vh;
            width: 100%;
            overflow: hidden;
            background-color: #fff;
            z-index: 99;
            box-shadow:0 -0.2rem 0.3rem 0 #d6d6d6;
            .confirm{
                font-size: .3rem;
                color:#000;
                display: flex;
                justify-content: space-between;
                padding:.4rem .5rem;
                z-index: 100;
                background-color: #fff;
            }
            .picker-items{
                position: fixed;
                bottom: 0;
                width: 100%;
                height: 45%;
                box-sizing: border-box;
                z-index: 3;
                overflow: hidden;
                background-color: #fff;
            }
            .picker-center-highlight:before, .picker-center-highlight:after{
                background-color: transparent;
            }
            .picker-item{
                font-size: .4rem;
                // line-height: .4rem!important;
            }
            .picker-selected{
                color:#000;
                background-color:#ffe2cd;
            }
            .picker-slot.picker-slot-center.slot1{
                z-index: 2;
            }
        }
        .confirm{
            background-color: #f7f7f7;
             padding: 0 .3rem .2rem;
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
                background-color: #e70216;
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
                border-radius: 50%;
            }
            .mint-cell{
                background-color: transparent;
                min-height: 0.4rem;
            }
            .mint-field .mint-cell-title{
                margin-right: .2rem;
            }
            .mint-field-core{
                width: auto;
            }
            .mint-cell:last-child{
                background-image: none;
            }
            .mint-cell-wrapper{
                background-image: none;
            }
            .verify-box{
                padding: .3rem .3rem 0;
                background-color:#fff;
            }
            .msgbox{
                padding:0 .3rem;
                font-size: .25rem;
                background-color:#efefef;
                text-align: left;
                max-height: .75rem;
                overflow: hidden;
                .getMsg{
                    -webkit-line-clamp:1;
                    line-height: 3;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    -webkit-box-orient: vertical;
                    white-space:nowrap;
                }
            }
            .verify{
                justify-content: space-between;
                display: flex;
                border-bottom: 1px solid #f7f7f7;
                padding-bottom:.3rem;
                text-align: left;
                p{
                    font-size: .25rem;
                    color:#000;
                }
                img{
                    height: .3rem;
                }
            }
            .mint-radiolist-label,.mint-radiolist{
                display: flex;
                padding: 0;
                flex-wrap: nowrap;
            }
            .mint-field .mint-cell-title{
                width: 1rem;
            }
            .mint-radio-label{
                margin-right:.1rem;
                width: .6rem;
                line-height: .35rem;
                font-size: .25rem;
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
            .mint-radio-core{
                width: .35rem;
                height: .35rem;
            }
            .mint-radio-core::after{
                top:0;
                left:0;
                width: .3rem;
                height: .3rem;
                background-color: transparent;
                background-image: url("http://127.0.0.1:5050/icon/chosen.png");
                background-repeat: no-repeat;
                background-position:top;
                background-size: contain; 
            }
            .mint-radio-input:checked + .mint-radio-core{
                background-color: #e70216;
                border-color:#e70216;
            }
            .mintui-field-error:before{
                content: "";
            }
            .mint-field-core{
                color:#7b7b7b;
            }
        }
        .submit{
            font-size: .2rem;
            padding:.3rem;
            background-color: #fff;
            p{
                margin-top:1rem
            }
            button{
                border: 0;
                width: 100%;
                font-size: .3rem;
                color:#fff;
                line-height: 2.2;
                background-color: #e70216;
                border-radius: .6rem;
                margin-top:.3rem;
                letter-spacing: .04rem;
                outline: 0;
            }
        }
        .calbox{
            position: fixed;
            bottom: 0;
            background-color: #fff;
            padding:0 .3rem;
            height:55%!important;
            box-shadow:0 -0.2rem 0.3rem 0 #d6d6d6;
        }
        .confirmCal{
            font-size: .3rem;
            color:#000;
            background-color: #fff;
            padding: .3rem;
            display: flex;
            justify-content: space-between;
            span:first-child{
                color:#b1b1b1;
            }
            span:last-child{
                color:#e70216;
            }
        }
        .calendar{
            .wh_content_item[data-v-2ebcbc83], wh_content_item_tag[data-v-2ebcbc83],.wh_top_changge li[data-v-2ebcbc83]{
                color:#000
            }
            .wh_jiantou2[data-v-2ebcbc83]{
                border-top:2px solid #e70216;
                border-right:2px solid #e70216;
            }
            .wh_jiantou1[data-v-2ebcbc83]{
                border-top:2px solid #b1b1b1;
                border-left:2px solid #b1b1b1;
            }
            .wh_content_all[data-v-2ebcbc83]{
                background-color: #fff;
            }
            .wh_content_item .wh_isToday[data-v-2ebcbc83]{
                background-color: transparent;
            }
            .wh_content_item .wh_chose_day[data-v-2ebcbc83]{
                background: #e70216;
                border-radius:.1rem;
                color:#fff;
            }
            .wh_item_date[data-v-2ebcbc83], .wh_top_tag[data-v-2ebcbc83]{
                width: 0.8rem;
                height: .4rem;
            }

        }
    }
    .reserve .calendar{
        max-width: 100%!important;
        background: #fff!important;
    }
</style>