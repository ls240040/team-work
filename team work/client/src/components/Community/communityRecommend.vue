<template>
    <div class="recommend">
        <mt-swipe :auto="4000">
            <mt-swipe-item class="swipe"  v-for="(item,index) of carousel" :key="index">
                <img :src="`http://127.0.0.1:5050/${item.C_Href}`">
            </mt-swipe-item>
        </mt-swipe>
        <div class="logo-list">
            <div class="list-box">
                <div>
                    <img src="http://127.0.0.1:5050/icon/food.png"> 
                </div>
                <p>海捞天地</p>
            </div>
            <div class="list-box">
                <div>
                    <img src="http://127.0.0.1:5050/icon/comment.png"> 
                </div>
                <p>讨论专区</p>
            </div>
            <div class="list-box">
                <div>
                    <img src="http://127.0.0.1:5050/icon/complain.png"> 
                </div>
                <p>投诉表扬</p>
            </div>
            <div class="list-box">
                <div>
                    <img src="http://127.0.0.1:5050/icon/activity.png"> 
                </div>
                <p>最新活动</p>
            </div>
            <div class="list-box">
                <div>
                    <img src="http://127.0.0.1:5050/icon/video.png"> 
                </div>
                <p>短视频</p>
            </div>
            <div class="list-box">
                <div>
                    <img src="http://127.0.0.1:5050/icon/camera.png"> 
                </div>
                <p>互助专区</p>
            </div>
        </div>
        <recommend></recommend>
    </div>
</template>
<script>
import recommend from './recommend' 
export default {
    data(){
        return{
            carousel:[],
        }
    },
    components:{
        "recommend":recommend,
    },
    methods:{
        loadMore(){
            // 轮播
            var url='community/carousel';
            this.axios.get(url).then(res=>{
                console.log(res.data.data);
                if(res.data.code==1){
                    this.carousel=res.data.data;
                }
            });
            
        }
    },
    created () {
        this.loadMore();
    }
}
</script>
<style lang="scss">
    .recommend{
        padding-bottom: .3rem;
         .mint-swipe{
             height: 3rem;
             margin:.2rem 0 .2rem;
            img{
                width: 100%;
            }
        }
        .mint-swipe-indicator.is-active{
            background-color: #ff2626!important;
            opacity: 1!important;
        }
        .mint-swipe-indicator{
            background-color: #fff!important;
            margin-right: .1rem!important;
            opacity: 1!important;
        }
        .logo-list{
            display: flex;
            justify-content: space-between;
            overflow-x: scroll;
            padding-bottom: .4rem;
            box-shadow: 0 0.1rem 0.3rem #ddd;
            .list-box{
                margin:0 .2rem;
                p{
                    font-size: .25rem;
                    margin-top: .2rem;
                }
                div{
                    background-color: #eaeaea;
                    border-radius: 50%;
                    width: 1.2rem;
                    height: 1.2rem;
                    img{
                        width: .6rem;
                        vertical-align: middle;
                    }
                }
                
            }
        }
        .logo-list::-webkit-scrollbar{
            display: none;
        }
    }
   
</style>