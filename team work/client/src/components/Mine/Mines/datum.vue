<!--mineAbout.vue 用户页面组件-->
<template>
  <div class="about">
    <mt-header title="个人资料">
        <router-link to="/" slot="left">
            <mt-button icon="back"></mt-button>
        </router-link>
    </mt-header>  
    <h6>基本信息</h6>
        <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
        <mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="email"></mt-field>
        <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
        <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
        <mt-field label="网站" placeholder="请输入网址" type="url" v-model="website"></mt-field>
        <mt-field label="数字" placeholder="请输入数字" type="number" v-model="number"></mt-field>
        <mt-field label="生日" placeholder="请输入生日" type="date" v-model="birthday"></mt-field>
        <mt-field label="自我介绍" placeholder="自我介绍" type="textarea" rows="4" v-modal="introduction"></mt-field>
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

<style lang="scss" scoped>
    h6{
        font-size:0.25rem;
        text-align:left;
        margin:0.2rem 0rem 0.1rem 0.2rem;
        }
    mt-field{
        padding-left:0.3rem;
    }    
    .about{
        background:#eee;
       
      .mint-header{
          padding-top:0.4rem;
          padding-bottom:0.2rem;
          background:#fff;
          color:#000;
          font-size:0.3rem;
      }
      
    }.mint-cell-wrapper{
          font-size:0.3rem;
      }
</style>

