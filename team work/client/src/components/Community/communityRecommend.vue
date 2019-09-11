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
            carousel:[]
        }
    },
    methods:{
        loadMore(){
            var url='community/recommend';
            this.axios.get(url).then(res=>{
                console.log(res.data.data);
                if(res.data.code==1){
                    this.carousel=res.data.data;
                    console.log(this.carousel)
                }
            })
        }
    },
    created () {
        this.loadMore();
    }
}
</script>
<style lang="scss">
    .recommend{
         .mint-swipe{
             height: 10rem;
             margin:.5rem 0 1rem;
            img{
                height: 100%;
            }
        }
        .mint-swipe-indicator.is-active{
            background-color: #ff2626!important;
            opacity: 1!important;
        }
        .mint-swipe-indicator{
            background-color: #fff!important;
            margin-right: .3rem!important;
            opacity: 1!important;
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