<template>
    <div>
        <img src="" alt="">
        <p>关闭</p>
        <p>确认订单</p>
        <div v-for="(item,i) of temp" :key=i style="position: relative;">
           <img :src="`http://127.0.0.1:5050/icon/image${i}.png`" alt="">
           <span class="table1">{{item}}</span>
           <img class="img1" src="http://127.0.0.1:5050/icon/arrow-right.png" alt=""> 
        </div>
        <div>
            <p>海底捞火锅外送(庆春路店)</p>
            <span class="table2">已选商品</span>
            <span class="table2">共5份</span>
            <span class="table02">6-8人餐nq1x</span>
            <span>￥699</span>
            <span class="table02">配送费</span>
            <span>￥38</span>
        </div>
        <div>
            <span class="table1">整单商品优惠</span>
            <span>未使用优惠</span>
            <img src="http://127.0.0.1:5050/icon/next.png" alt="">
        </div>
        <p>选填</p>
        <div v-for="(item1,i) of tep" :key="i">
            <span>{{item1}}</span>
            <span></span>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            temp:["收获地址","送达时间","支付方式"]
        }
    }
}
</script>
<style lang="scss">
    div.div{
        background: #000;
        opacity: 0.1;
        z-index: -1;
        height: 3rem;
    }
    .table1{
        font-size:0.15rem;
        color: #000;
    }
    .table2{
        font-size:0.05rem;
        color:#666;
    }
    .table02{
        font-size: 0.1rem;
        color: rgb(46, 45, 45);
    }
    .img1{
        position:absolute;
        right: 0.1rem;
        width:0.3rem;
        height:0.3rem;
    }
</style>