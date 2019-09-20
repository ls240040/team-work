<template>
    <div class="doyen">
        <img class="banner" src="http://127.0.0.1:5050/icon/Doyen_banner.png">
        <div class="logo">
            <div>
            <img :src="active1?img1_active:img1" :v-model="content1">
            <p>周达人</p>
            </div>
            <div>
                <img :src="active2?img2_active:img2" :v-model="content2">
                <p>月达人</p>
            </div>
            <div>
                <img :src="active3?img3_active:img3" :v-model="content3">
                <p>年达人</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            active1:true,
            active2:false,
            active3:false,
            img1_active:"http://127.0.0.1:5050/icon/Doyen1_active.png",
            img2_active:"http://127.0.0.1:5050/icon/Doyen2_active.png",
            img3_active:"http://127.0.0.1:5050/icon/Doyen3_active.png",
            img1:"http://127.0.0.1:5050/icon/Doyen1.png",
            img2:"http://127.0.0.1:5050/icon/Doyen2.png",
            img3:"http://127.0.0.1:5050/icon/Doyen3.png",
            content1:"",
            content2:"",
            content3:""
        }
    }
}
</script>
<style lang="scss">
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
            }
        }
    }
</style>