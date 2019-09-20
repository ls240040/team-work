<template>
    <div class="res_det">
        <mt-header class="myheader" title="预定详情">
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>  
        <div class="div1">
            <img src="http://127.0.0.1:5050/icon/err.png" alt="">
            <span>不能重复下单</span>
        </div>
        <div class="div1" style="display:none">
            <img src="http://127.0.0.1:5050/icon/err.png" alt="">
            <span>本时段预定餐位已满，可选其他时段或排号</span>
        </div>
        <div class="div1" style="display:none">
            <img src="http://127.0.0.1:5050/icon/dui.png" alt="">
            <span>预定成功</span>
        </div>
        <div style="background:#eee margin:0.2rem 0rem;"></div>
        <div class="div2">
            <h5>
                <span>绍兴路店</span>
                <img src="http://127.0.0.1:5050/icon/arrow-right.png" alt="">
            </h5>
            <h5>
                <span>就餐时间</span>
                <span>2019-9-23 06:45</span>
            </h5>
            <h5>
                <span>就餐人数</span>
                <span><span>2</span>人</span>
            </h5>
            <h5>
                <span>顾客信息</span>
                <span>某某人</span>
                <span>15312345678</span>
            </h5>
        </div>
        <div class="div3">
            <img src="http://127.0.0.1:5050/icon/row_num_posi.png" alt="">
            <span>浙江省杭州市下城区绍兴路337号3层(野风现代之星大厦)</span>
            <img src="http://127.0.0.1:5050/icon/arrow-right.png" alt="">
        </div>
        <div class="div4">
            <span>重新预定</span>
            <span class="myspan">去取号</span>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            
        }
    },
    methods:{

    }
}
</script>
<style lang="scss">
    .res_det{
        .myheader{
            height:1.2rem;
            font-size:0.4rem;
            border-bottom:1px solid #ccc;
            padding:0.4rem 0 0.2rem 0.2rem;
        }
        div{
            background:#fff;
            font-size:0.2rem;
            img{
                vertical-align: middle;
                width:0.4rem;
            }
        }
        .div1{
            padding:0.15rem;
            text-align: left;
        }
        .div2{
            margin:0.2rem 0rem;
        }
        h5{
            display:flex;
            justify-content: space-between;
            padding:0.3rem;
            border-top:0.01rem solid #eee;
            border-bottom:0.01rem solid #eee;
        }
        .div3{
            display:flex;
            justify-content: space-between;
            padding:0.2rem 0.15rem;
            font-size:0.1rem;
            margin:0.5rem 0 1rem 0;
            img{
                width:0.4rem;height:0.4rem;
                vertical-align: top;
                +span{
                    display:inline-block;
                    width:6rem;
                    text-align: left;
                }
            }            
        }
        .div4{
            display:flex;
            justify-content: space-around;
            span{
                display:inline-block;
                padding:0.2rem 0.5rem;
                background:#ccc;
                border-radius:0.1rem;
                border:1px solid #ccc;
            }
            .myspan{
                background:#e0272c;
                color:#fff;
            }
        }
    }
</style>