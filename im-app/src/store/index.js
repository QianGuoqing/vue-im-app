import Vue from 'vue'
import Vuex from 'vuex'

import { requestUserInfoByGet } from '../common/js/request'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user: {
      username: '',
      password: '',
      type: '',
      avatar: '',
      description: '',
      title: '',
      company: '',
      money: ''
    }
  },
  getters: {
    account: state => state.user
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    }
  },
  actions: {
    
  }
})

export default store