<!--datum.vue 用户页面组件--> 
<template>
  <div class="datum">
    <mt-header title="个人资料">
        <router-link to="/mine" slot="left">
            <mt-button icon="back"></mt-button>
        </router-link>
    </mt-header>  
    <h6>基本信息</h6>
        <mt-cell id="btn_show1" title="头像" is-link>
          <span>
            <img src="http://127.0.0.1:5050/icon/touxiang.png" alt="">
          </span>
        </mt-cell>
        <mt-cell to="/set_user" title="用户名" is-link>
          <span>用户名</span>  
        </mt-cell>
        <mt-cell to="/true_name" title="真实姓名" is-link>
          <span>真实姓名</span>
        </mt-cell>
        <mt-cell id="btn_show2" title="性别" is-link>
          <span>性别</span>
        </mt-cell>
        <mt-cell title="生日" is-link>
          <span>生日</span>
        </mt-cell>
        <mt-cell title="常住" is-link>
          <span>真实姓名</span>
        </mt-cell>
        <mt-cell to="/underwrite" title="个性签名" is-link>
          <span>个性签名</span>
        </mt-cell>
        <mt-cell id="btn_show3" title="收入" is-link>
          <span>收入</span>
        </mt-cell>
    <h6>联系方式</h6>
      <mt-cell to="/phone" title="手机号" is-link>
      <span>手机号</span>
      </mt-cell>
      <mt-cell to="/email" title="邮箱" is-link>
        <span>邮箱</span>
      </mt-cell>
      <!-- 修改头像 -->
       <div class="head" id="heads" style="display:none">      
          <ul>
              <li class="bianji">编辑头像</li>
              <li>拍照</li>
              <li>从相册选择</li>
              <li class="quxiao" id="btn_hidden1">取消</li>
          </ul>             
      </div>
      <!-- 修改性别 -->
      <div class="sex" id="sexs" style="display:none">      
          <div>
              <span id="btn_hidden2">取消</span>
              <span class="sexs">性别</span>
              <span class="ok">确认</span>
          </div>
          <h3 class="man">男</h3>   
          <h3 class="woman">女</h3>   
      </div>
      <!-- 收入范围 -->
      <div class="income" id="incomes" style="display:none">      
          <div>
              <span id="btn_hidden3">取消</span>
              <span class="incomes">收入范围</span>
              <span class="ok">确认</span>
          </div>
          <div>
            <span class="spans">0-5k</span>   
            <span class="spans">5-8k</span>   
            <span class="spans">8-10k</span>   
            <span class="spans">10-15k</span>   
            <span class="spans">15-30k</span>   
            <span class="spans">30-50k</span>   
            <span class="spans">>50k</span> 
          </div>            
      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
   
    /* 头像 */
    head(){
        var heads = document.getElementById("heads");
        var btn_show1 = document.getElementById("btn_show1");
        var btn_hidden1 = document.getElementById("btn_hidden1");
        btn_show1.onclick = function () {
            heads.style.display = "block";
        }
        btn_hidden1.onclick = function () {
            heads.style.display = "none";
        }
    },
    /* 性别 */
    sex() {
      /*获取sexs="id"给变量 sexs*/
        var sexs = document.getElementById("sexs");
         /*获取显示按钮id="btn_show"给变量 btn_show*/
        var btn_show2 = document.getElementById("btn_show2");
       /*获取隐藏按钮id=“btn_show”给变量 btn_hidden */
        var btn_hidden2 = document.getElementById("btn_hidden2");
        /*点击性别时，sexs的样式style的display属性赋值为“block”*/
        btn_show2.onclick = function () {
            sexs.style.display = "block";
        }
        /*点击取消时，sexs的样式style的display属性赋值为“none”*/        
        btn_hidden2.onclick = function () {
            sexs.style.display = "none";
        }
      },
      /* 收入范围 */
      income(){
        var incomes = document.getElementById("incomes");
        var btn_show3 = document.getElementById("btn_show3");
        var btn_hidden3 = document.getElementById("btn_hidden3");
        btn_show3.onclick = function () {
            incomes.style.display = "block";
        }
        btn_hidden3.onclick = function () {
            incomes.style.display = "none";
        }
    },
    
  },
  mounted() {
    this.head(),
    this.sex(),
    this.income()
  },
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
          width:0.7rem;height:0.7rem;
        }
        /* 头像 */
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
        /* 性别 */
        .sex{
            width:100%;
            border-top:0.01rem solid #ddd;
            position:absolute;
            bottom:0rem;
            background:#fff;
            div{
                font-size:0.3rem;
                display: flex;
                justify-content: space-around;
                padding:0.3rem;
                margin-bottom:0.5rem;
                .sexs{
                    font-size:0.4rem;
                }
                .ok{color:#f00;}
              }
              h3{
                  font-size:0.5rem;
                  padding:0.2rem;              
              }
              
              h3:hover{background:#eae0e3;}
        } 
        .income{
            width:100%;
            border-top:0.01rem solid #ddd;
            position:absolute;
            bottom:0rem;
            background:#fff;
            padding-bottom:0.8rem;
            div{
                font-size:0.3rem;
                display: flex;
                justify-content: space-between;
                padding:0.3rem;
                margin-bottom:0rem;
                .incomes{
                    font-size:0.4rem;
                }
                .ok{color:#f00;}
              }
              .spans{

                  border:1px solid #ccc;
                  border-radius:0.1rem;
                  font-size:0.2rem;
                  padding:0.1rem;   
                  margin:0.1rem;           
              }
              
              .spans:hover{background:#d6c4c9;}
          }
   }
</style>
 