<template>
    <div class="recommend">
        <mt-swipe :auto="4000">
            <mt-swipe-item class="swipe">1111</mt-swipe-item>
            <mt-swipe-item class="swipe">2222</mt-swipe-item>
            <mt-swipe-item class="swipe">3333</mt-swipe-item>
            <mt-swipe-item class="swipe">4444</mt-swipe-item>
        </mt-swipe>
        <div class="logo-list">
            <div class="list-box">
                <div>
                    <img src="../../assets/img/camera.png"> 
                </div>
                <p>海捞天地</p>
            </div>
            <div class="list-box">
                <div>
                    <img src="../../assets/img/camera.png"> 
                </div>
                <p>讨论专区</p>
            </div>
            <div class="list-box">
                <div>
                    <img src="../../assets/img/camera.png"> 
                </div>
                <p>投诉表扬</p>
            </div>
            <div class="list-box">
                <div>
                    <img src="../../assets/img/camera.png"> 
                </div>
                <p>最新活动</p>
            </div>
            <div class="list-box">
                <div>
                    <img src="../../assets/img/camera.png"> 
                </div>
                <p>短视频</p>
            </div>
            <div class="list-box">
                <div>
                    <img src="../../assets/img/camera.png"> 
                </div>
                <p>互助专区</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        
    }
}
</script>
<style lang="scss" scoped>
    .recommend{
         .mint-swipe{
            width:100%;
            height:15rem;
            background: black;
        }
        .mint-swipe-indicator.is-active{
            background-color: #ff2626!important;
            opacity: 1!important;
        }
        .mint-swipe-indicator{
            background-color: #999!important;
            margin-right: .6rem!important;
        }
        .logo-list{
            display: flex;
            justify-content: space-between;
            overflow-x: scroll;
            .list-box{
                margin:0 1rem;
                div{
                    background-color: #eae4e4;
                    border-radius: 50%;
                    p{
                        font-size: .6rem;
                    }
                    img{
                        width: 2.5rem;
                    }
                }
                
            }
        }
        .logo-list::-webkit-scrollbar{
            display: none;
        }
    }
   
</style>