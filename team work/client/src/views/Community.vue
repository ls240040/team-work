<template>
    <div class="community"  style="overflow:auto">
        <div class="head">
            <img src="http://127.0.0.1:5050/icon/search.png">
            <h2>社区</h2>
            <img src="http://127.0.0.1:5050/icon/camera.png">
        </div>
        <h1>社区</h1>
        <!-- nav -->
        <mt-navbar class="nav" v-model="active">
            <mt-tab-item id="attention">关注</mt-tab-item>
            <mt-tab-item id="recommend">推荐</mt-tab-item>
            <mt-tab-item id="doyen">达人</mt-tab-item>
        </mt-navbar>
        <!--切换面板列表-->
        <mt-tab-container class="container" v-model="active">
            <mt-tab-container-item id="attention">
                <communityfriends></communityfriends>
            </mt-tab-container-item>
            <mt-tab-container-item id="recommend">
                <communityrecommend></communityrecommend>
            </mt-tab-container-item>
            <mt-tab-container-item id="doyen">
                <communitydoyen></communitydoyen>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>
<script>
import communityFriends from '../components/Community/communityFriends' 
import communityRecommend from '../components/Community/communityRecommend' 
import communityDoyen from '../components/Community/communityDoyen' 
export default {
    data () {
        return {
            active:"recommend",
        }
    },
    components:{
        "communityfriends":communityFriends,
        "communityrecommend":communityRecommend,
        "communitydoyen":communityDoyen,
    },
    methods: {
        
    },
    
}
</script>
<style lang="scss">
@import url('../assets/scss/reset.scss');
    .community{
        background-color: #fff;
        .mint-navbar .mint-tab-item.is-selected{
            border-bottom:.03rem  solid #ff2626!important;
            color:#ff2626!important;
            margin-bottom:0;
        }
        .mint-tab-item-label{
            font-size: .3rem!important;
        }
        .mint-navbar .mint-tab-item{
            padding: .2rem 0;
        }
        .head{
            display: flex;
            justify-content: space-between;
            width: 100%;
            padding: .4rem;
            box-sizing: border-box;
            h2{
                line-height: .6rem;
                font-size: .4rem;
            }
            img{
                height: .6rem;
            }
        }
        h1{
            text-align: left;
            padding: .4rem;
            padding-top: 0;
            font-size: .6rem;
        }
    }
</style>