<template>
    <div class="community">
        <div class="head">
            <img src="../assets/img/search.png">
            <h2>社区</h2>
            <img src="../assets/img/camera.png">
        </div>
        <h1>社区</h1>
        <!-- nav -->
        <mt-navbar class="nav" v-model="active">
            <mt-tab-item id="attention">关注</mt-tab-item>
            <mt-tab-item id="recommend">推荐</mt-tab-item>
            <mt-tab-item id="hotchpotch">杂烩</mt-tab-item>
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
            <mt-tab-container-item id="hotchpotch">
                <communityhotchpotch></communityhotchpotch>
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
import communityHotchpotch from '../components/Community/communityHotchpotch' 
import communityDoyen from '../components/Community/communityDoyen' 
export default {
    data () {
        return {
            active:"recommend",
            carousel:[],
        }
    },
    components:{
        "communityfriends":communityFriends,
        "communityrecommend":communityRecommend,
        "communityhotchpotch":communityHotchpotch,
        "communitydoyen":communityDoyen,
    },
    methods: {
        
    },
    
}
</script>
<style lang="scss">
@import url('../assets/scss/reset.scss');
    .community{
        .mint-navbar .mint-tab-item.is-selected{
            border-bottom:.1rem  solid #ff2626!important;
            color:#ff2626!important;
            margin-bottom:0;
        }
        .mint-tab-item-label{
            font-size: 1rem!important;
        }
        .mint-navbar .mint-tab-item{
            padding: .5rem 0;
        }
        .head{
            display: flex;
            justify-content: space-between;
            width: 100%;
            padding: 1rem;
            box-sizing: border-box;
            h2{
                line-height: 2rem;
                font-size: 1.3rem;
            }
            img{
                height: 2rem;
            }
        }
        h1{
            text-align: left;
            padding: 1rem;
            padding-top: 0;
            font-size: 2rem;
        }
    }
</style>