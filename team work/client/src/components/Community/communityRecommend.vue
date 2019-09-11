<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item class="swipe">1111</mt-swipe-item>
            <mt-swipe-item class="swipe">2222</mt-swipe-item>
            <mt-swipe-item class="swipe">3333</mt-swipe-item>
            <mt-swipe-item class="swipe">4444</mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<style lang="scss" scoped>
    .mint-swipe{
            width:100%;
            height:15rem;
            background: black
        }
        .mint-swipe >>> .mint-swipe-indicator{
            width: 44px;
            height: 4px;
        }
        .swipe .mint-swipe-indicator{
            background: rgb(255, 0, 0);
        }
</style>