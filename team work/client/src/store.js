import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  //共享数据
  state: {
    msg:"",
  },
  //添加修改数据的函数
  mutations: {
    updateMsg(state,msg){ //调用函数传参
      state.msg=msg
    },
  },
  //添加获取数据函数
  getters:{
    getMsg(state){
      return state.msg;
    },
  },
  actions: {

  }
})

//12：将实例对象添加Vue中
Vue.config.productionTip = false


