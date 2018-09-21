import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    session: ''
  },
  mutations: {
    changeSession (state,session) {
      state.session = session
    }
  } 
})