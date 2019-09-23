<template>
    <div class="main">
        <div class="info" v-for="(item,index) of list" :key="index">
            <div class="left">
                <div class="avatar">
                    <img :src="`http://127.0.0.1:5050${item.R_Back}`">
                    <img class="im1" :src="`http://127.0.0.1:5050${item.R_Avatar}`">
                </div>
                <div class="name">
                    <span>{{item.R_Name}}</span>
                    <p>{{item.R_Title}}</p>
                </div>
            </div>
            <div class="right">
                <img :src="`http://127.0.0.1:5050${item.R_Label}`">
                <p>获得奖励：50捞币</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            list:[]
        }
    },
     methods:{
        loadMore(){
            var url='community/dweek';
            this.axios.get(url).then(res=>{
                console.log(res.data.data);
                if(res.data.code==1){
                    this.list=res.data.data;
                }
            });
            
        }
    },
    created () {
        this.loadMore();
    }
}
</script>
<style lang="scss" scoped>
    .main{
        background: #fff;
        padding: .3rem 0;
        margin-top:.6rem;
    }
    .info{
        display: flex;
        justify-content: space-between;
        margin-bottom:.3rem;
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
                z-index: 0;
                img{
                    width: 22vw;
                    z-index: 2;
                    position: relative;
                }
                .im1{
                    position: absolute;
                    z-index: 1;
                    left: .26rem;
                    width: 16vw;
                    height: 16vw;
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