<template>
    <div class="community">
        <div class="chead">
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
        }
    },
    components:{
        "communityfriends":communityFriends,
        "communityrecommend":communityRecommend,
        "communityhotchpotch":communityHotchpotch,
        "communitydoyen":communityDoyen,
    }
}
</script>
<style lang="scss">
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
            padding: .3rem 0;
        }
        .chead{
            display: flex;
            justify-content: space-between;
            width: 100%;
            h2{
                margin: 0;
                line-height: 2rem;
            }
            img{
                width:2rem;
                height: 2rem;
            }
        }
        h1{
            text-align: left;
        }
        .mint-swipe-indicator.is-active{
            background-color: #ff2626!important;
            opacity: 1!important;
        }
        .mint-swipe-indicator{
            background-color: #999!important;
            margin-right: .6rem!important;
        }
    }
</style>