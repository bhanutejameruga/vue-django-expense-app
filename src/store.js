//import { resolve } from 'core-js/fn/promise'
import Vue from 'vue'
import Vuex from 'vuex'
import { getAPI } from './axios-api'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
     accessToken: null,
     refreshToken: null,
     APIData: ''
   
  },
  mutations: {
    updateStorage (state, { token, expire }) {
      state.accessToken = token;
      state.refreshToken = expire;
      localStorage.setItem('token', token);
      localStorage.setItem('expire', expire);
    },
    destroyToken (state) {
      state.accessToken = null
      state.refreshToken = null
    }
  },
  getters: {
    loggedIn (state) {
      return state.accessToken != null
    }
  },
  actions: {
    userLogout (context) {
      if (context.getters.loggedIn) {
          context.commit('destroyToken')
      }
    },
    userLogin (context, usercredentials) {
      return new Promise((resolve, reject) => {
        getAPI.post('api/login/', {
          username: usercredentials.username,
          password: usercredentials.password
        })
          .then(response => {
             context.commit('updateStorage', { token: response.data.token, expire: response.data.expiry }) 
            resolve()
          })
          .catch(err => {
            reject(err)
          })
      })
  }
  //localStorage.setItem('token', accessToken ):
  //localStorage.setItem('expire', refreshToken);     

  }
})
