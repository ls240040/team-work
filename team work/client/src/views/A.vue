<template>
  <div>
    A组件:
    <span>{{value}}</span>
    <input type="button" value="点击触发" @click="getData">
    <b1></b1>
  </div>
</template>
<script>
  // 引入公共的bus，来做为中间传达的工具
  import Bus from "../../src/Bus";
  import B from './B.vue'
  export default {
    data () {
      return {
        value: 4
      }
    },
     components: {
      b1:B
    },
    mounted: function() {
    // 用$on事件来接收参数
    Bus.$on("val", data => {
      console.log(data);
      this.value = data;
    });
  },
    methods: {
      getData: function() {
        this.value++;
      }
    }
  }
</script>