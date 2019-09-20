<!--mineSet.vue 设置页面组件-->
<template>
  <div class="set">
      <ul>
          <li @click="set">
              <img src="http://127.0.0.1:5050/icon/shezhi.png" alt="">
              <span>设置</span>
          </li>
      </ul>      
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
      set(){
          this.$router.push('/set');
      }
  }
};
</script>

<style lang="scss" scoped>
    .set{
        font-size:0.3rem;
        ul{
            background:#fff;
            text-align: left;            
            li{
               margin:0.2rem;
               padding:0.2rem 0rem;
               img{
                   width:0.5rem;height:0.5rem;
                   vertical-align: middle;
                   margin-right: 0.2rem;
                   span{
                       display:inline-block;
                   }                   
               }
            }
        }
    }
    
</style>

