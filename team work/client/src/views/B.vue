<template>
  <div>
    B组件:子
    <input type="button" value="点击触发" @click="to" />
    <span>{{name}}</span>
  </div>
</template>
<script>
import Bus from "../../src/Bus";
export default {
  data() {
    return {
      name: 0
    };
  },
  // mounted: function() {
  //   // 用$on事件来接收参数
  //   Bus.$on("val", data => {
  //     console.log(data);
  //     this.name = data;
  //   });
  // },
  methods: {
    to: function () {
        Bus.$emit('val', this.name)
      },
    
  }
};
</script>