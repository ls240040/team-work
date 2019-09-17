<!--head.vue 头像设置页面组件-->
<template>
  <div class="head">      
     <ul>
          <li class="bianji">编辑头像</li>
          <li>拍照</li>
          <li>从相册选择</li>
          <li class="quxiao">取消</li>
      </ul>             
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss">
    .head{
        ul{
            width:100%;
            font-size:0.35rem;
            background:#ddd;
            position: absolute;
            bottom:0rem;
            .bianji{
                font-size:0.25rem;
                color:#999;
                background:#ddd;
                padding:0.08rem;
            }
            li{
                display: block;
                padding:0.3rem;
                border-top:0.001rem solid #ccc;
                background:#fff;
            }
            .quxiao{
                margin-top:0.1rem;
            }
          }
    }
</style>

