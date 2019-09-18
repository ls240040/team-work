<template>
    <div class="demand">
        <!-- 头部 -->
        <div class="top">
            <img @click="linkTo" src="http://127.0.0.1:5050/icon/arrow-left.png">
            <p>特殊需求</p>
        </div>
        <div class="txtbox">
            <h4>备注：</h4>
            <textarea cols="30" rows="4" placeholder="您的需求补助或描述，可不填。" v-model="text"></textarea>
        </div>
        <div>
            <button @click="confirm">确认</button>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            text:""
        }
    },
    methods:{
        linkTo(){
            this.$router.push("/reserve");

        },
        confirm(){
            if(this.text==""){
                this.$store.commit("updateMsg",this.text);
            }else{
                this.$store.commit("updateMsg","备注："+this.text);
            }
            this.$router.push("/reserve");
        }
    }
}
</script>
<style lang="scss" scoped>
    .demand{
        position: relative;
        height: 100vh;
        .top{
            padding: .2rem .3rem;
            font-size: .4rem;
            display: flex;
            justify-content: space-between;
            line-height: .6rem;
            position: relative;
            background-color: #fff;
            border-bottom: 1px solid #f7f7f7;
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
        .txtbox{
            padding: .3rem;
            box-sizing: border-box;
            width: 100%;
            h4{
            font-size: .35rem;
            text-align: left;
            margin-top:20%;
            margin-left:.1rem;
            margin-bottom: .3rem;
            }
            textarea{
                width: 90%;
                border-radius: .2rem;
                outline: 0;
                font-size: .3rem;
                padding: .2rem;
                caret-color:red;
                resize: none;
                line-height: .6rem;
                
            }
            textarea::-webkit-scrollbar{
                display: none;
            }
        }
        button{
            border: 0;
            width: 100%;
            font-size: .3rem;
            color:#fff;
            line-height: 2.2;
            background-color: #e70216;
            letter-spacing: .04rem;
            outline: 0;
            position: absolute;
            bottom: 0;
            left:0;
        }
    }
</style>