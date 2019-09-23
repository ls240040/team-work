<!--set.vue 设置页面组件--> 
<template>
  <div class="set">
    <mt-header title="设置">
        <router-link to="/mine" slot="left">
            <mt-button icon="back"></mt-button>
        </router-link>
    </mt-header>  
        <mt-cell title="消息设置" is-link>
        <span>未开启</span>
        </mt-cell>
        <h6>请在“设置-通知-功能”中找到“海底捞”更改</h6>

        <mt-cell title="黑名单" is-link>
        </mt-cell>
        <mt-cell to="/setPassword" title="修改密码" is-link>
        </mt-cell>
        <mt-cell title="清除缓存" is-link>
          <span>64.82M</span>
        </mt-cell>
        <mt-cell title="版本信息">
          <span>7.0.1</span>
        </mt-cell>
        <mt-cell title="隐私政策" is-link>
        </mt-cell>
        <mt-cell title="用户许可使用协议" is-link>
        </mt-cell>
        <mt-cell title="去评分" is-link>
        </mt-cell>
        <h4 @click="logout">退出登录</h4>
           
  </div>  
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    logout(){
      sessionStorage.removeItem('accessToken')
      this.$router.push("/")
    }
  },
 
};
 
</script>

<style lang="scss">    
    
    .set{
        background:#eee;   
        // 个人资料
    .mint-header{
              padding-top:0.4rem;
              padding-bottom:0.2rem;
              background:#fff;
              color:#000;
              font-size:0.3rem;       
          }      
          // 基本信息  联系方式
      h6{
        font-size:0.1rem;
        font-weight: lighter;
        color:#888;
        text-align:left;
        margin:0.2rem 0rem 0.3rem 0.2rem;
        }    
        /* 左对齐 */         
      .mint-cell-title{text-align: left;}     
      /* 设置字体大小 rem */
      .mint-cell-wrapper{
        font-size:0.3rem;
        border-top:0.001rem solid #eee;
        padding:0rem 0.2rem;
        }
        .mint-cell-value.is-link{
          font-size:0.3rem;
        }
        h4{
          background:#fff;
          font-size:0.3rem;
          padding:0.2rem 0rem; 
          background:#eee;
          font-size:0.3rem;
        }    
   }
</style>
 