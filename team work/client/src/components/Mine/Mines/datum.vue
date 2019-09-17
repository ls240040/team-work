<!--datum.vue 用户页面组件-->
<template>
  <div class="datum">
    <mt-header title="个人资料">
        <router-link to="/" slot="left">
            <mt-button icon="back"></mt-button>
        </router-link>
    </mt-header>  
    <h6>基本信息</h6>
        <mt-actionsheet
          :actions="actions"
          v-model="sheetVisible">
        </mt-actionsheet>
        <mt-cell title="头像" is-link>
          <span>
            <img src="http://127.0.0.1:5050/icon/touxiang.png" alt="">
          </span>
        </mt-cell>
        <mt-cell title="用户名" is-link>
          <span>用户名</span>
        </mt-cell>
        <mt-cell title="真实姓名" is-link>
          <span>真实姓名</span>
        </mt-cell>
        <mt-cell title="性别" is-link>
          <span>性别</span>
        </mt-cell>
        <mt-cell title="生日" is-link>
          <span>生日</span>
        </mt-cell>
        <mt-cell title="常住" is-link>
          <span>真实姓名</span>
        </mt-cell>
        <mt-cell title="个性签名" is-link>
          <span>个性签名</span>
        </mt-cell>
        <mt-cell title="收入" is-link>
          <span>收入</span>
        </mt-cell>
    <h6>联系方式</h6>
      <mt-cell title="手机号" is-link>
      <span>手机号</span>
      </mt-cell>
      <mt-cell title="邮箱" is-link>
        <span>邮箱</span>
      </mt-cell>
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
    
    
    .datum{
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
        font-size:0.25rem;
        text-align:left;
        margin:0.3rem 0rem 0.1rem 0.2rem;
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
        /* 头像大小 rem */
        img{
          width:0.4rem;height:0.4rem;
        }
    }
</style>

