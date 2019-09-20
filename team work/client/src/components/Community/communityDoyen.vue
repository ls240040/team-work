<template>
    <div class="doyen">
        <img class="banner" src="http://127.0.0.1:5050/icon/Doyen_banner.png">
    
        <!-- logo -->
        <div class="logo">
            <div id="week" @click="select1">
                <img :src="active1?img1_active:img1">
                <p>周达人</p>
            </div>
            <div id="month" @click="select2">
                <img :src="active2?img2_active:img2">
                <p>月达人</p>
            </div>
            <div id="year" @click="select3">
                <img :src="active3?img3_active:img3">
                <p>年达人</p>
            </div>
        </div>
        <!--切换面板列表-->
        <mt-tab-container class="container" v-model="selected">
            <mt-tab-container-item id="week">
                <weekdoyen></weekdoyen>
            </mt-tab-container-item>
            <mt-tab-container-item id="month">
                <monthdoyen></monthdoyen>
            </mt-tab-container-item>
            <mt-tab-container-item id="year">
                <yeardoyen></yeardoyen>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>
<script>
import weekdoyen from "./weekdoyen"
import monthdoyen from "./monthdoyen"
import yeardoyen from "./yeardoyen"
export default {
    data () {
        return {
            img1:"http://127.0.0.1:5050/icon/Doyen1.png",
            img2:"http://127.0.0.1:5050/icon/Doyen2.png",
            img3:"http://127.0.0.1:5050/icon/Doyen3.png",
            img1_active:"http://127.0.0.1:5050/icon/Doyen1_active.png",
            img2_active:"http://127.0.0.1:5050/icon/Doyen2_active.png",
            img3_active:"http://127.0.0.1:5050/icon/Doyen3_active.png",
            active1:true,
            active2:false,
            active3:false,
            selected:"week"
        }
    },
    methods: {
        select1(){
            this.selected="week";
            this.active1=true;
            this.active2=false;
            this.active3=false;
        },
        select2(){
            this.selected="month";
            this.active1=false;
            this.active2=true;
            this.active3=false;
        },
        select3(){
            this.selected="year";
            this.active1=false;
            this.active2=false;
            this.active3=true;
        }
    },
    components:{
        weekdoyen,
        monthdoyen,
        yeardoyen
    }
}
</script>
<style lang="scss" scoped>
    @import url('../../assets/scss/reset.scss');
    .doyen{
        .banner{
            width: 100%;
        }
        .logo{
            display: flex;
            justify-content: space-between;
            font-size: .3rem;
            padding: 0 1rem;
            box-sizing: border-box;
            img{
                height: 1rem;
                margin-bottom:.15rem;
            }
        }
        hr{
        opacity: .5;
    }
    }
    
</style>