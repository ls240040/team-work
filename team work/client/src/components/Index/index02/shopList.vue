<template>
    <div class="shoplist">
        <div class="top">
            <img @click="linkTo2" src="http://127.0.0.1:5050/icon/arrow-left.png">
            <p>预订</p>
            <div class="location">
                <img src="http://127.0.0.1:5050/icon/row_num_posi.png">
                <span>杭州</span>
            </div>
        </div>
        <div class="container" v-for="(item,index) of list" :key="index" @click="linkTo">
            <img class="logo" src="http://127.0.0.1:5050/icon/su_logo.png">
            <div class="info">
                <div class="infotop">
                    <div class="time">
                        <p>{{item.M_Name}}</p>
                        <p>早晨9:00-次日凌晨7:00</p>
                    </div>
                    <div class="distance">
                        <p>{{item.M_Distance}}km</p>
                        <p>正在营业</p>
                    </div>
                </div>
                <div class="infobottom">
                    <img src="http://127.0.0.1:5050/icon/row_num_posi.png">
                    <p>{{item.M_Address}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            list:[]
        }
    },
    methods:{
        linkTo(){
            this.$router.push("/reserve").then(this.$messagebox("温馨提示","各位捞粉大家好，每日早上7:00-9:00是我们闭店打扫时间，擦亮桌椅迎接您的到来，期间无法为您提供用餐服务，感谢您的谅解与支持。"));
        },
        linkTo2(){
            this.$router.push("/");
        },
        loadMore(){
            var url='index/shoplist';
            this.axios.get(url).then(res=>{
                console.log(res.data.data);
                if(res.data.code==1){
                    this.list=res.data.data;
                    console.log(this.list)
                }
            })
        }
    },
    created () {
        this.loadMore();
    }
}
</script>
<style lang="scss" scoped>
// @import url('../../../assets/scss/reset.scss');
    .shoplist{
        .top{
            padding: .2rem .3rem;
            font-size: .4rem;
            display: flex;
            justify-content: space-between;
            line-height: .6rem;
            position: relative;
            border-bottom: 1px solid #e7e7e7;
            p{
                position: absolute;
                left:50%;
                margin-left:-.5rem;
            }
            img{
                height: .4rem;
                display: block;
                margin-top:.1rem;
            }
            .location{
                display: flex;
                img{
                    height: .6rem;
                    margin-top:0;
                }
            }
        }
        .container{
            padding: .3rem;
            display: flex;
            justify-content: space-between;
            font-size: .4rem;
            border-bottom: 1px solid #ebebeb;
            .logo{
                height: 1.3rem;
                margin-right: .3rem;
            }
            .info{
                line-height: .5rem;
                text-align: left;
                font-size: .3rem;
                .infotop{
                    display: flex;
                    justify-content: space-between;
                    .time p:last-child{
                        font-size: .25rem;
                        color:#bbb;
                    }
                    .distance p:last-child{
                        font-size: .2rem;
                        color:#ff2626;
                        border: 1px solid #ff2626;
                        line-height: .3rem;
                        text-align: center;
                    }
                }
                .infobottom{
                    padding-right: .2rem;
                    position: relative;
                    img{
                        width: .35rem;
                        vertical-align: bottom;
                        position: absolute;
                    }
                    p{
                        font-size: .25rem;
                        padding-left: .38rem;
                        line-height: 1.2;
                    }
                }
            }
        }
    }
</style>