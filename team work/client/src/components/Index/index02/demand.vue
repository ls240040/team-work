<template>
    <div class="demand">
        <!-- 头部 -->
        <div class="top">
            <img src="http://127.0.0.1:5050/icon/arrow-left.png">
            <p>特殊需求</p>
        </div>
        <h4>备注：</h4>
        <textarea cols="30" rows="3"></textarea>
    </div>
</template>
<style lang="scss" scoped>
    .demand{
        .top{
            padding: .2rem .3rem;
            font-size: .4rem;
            display: flex;
            justify-content: space-between;
            line-height: .6rem;
            position: relative;
            background-color: #fff;
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
        h4{
            font-size: .35rem;
        }
        textarea{
            width: 80vw;
            border-radius: .2rem;
            outline: 0;
            font-size: .3rem;
            padding: .2rem;

        }
    }
</style>