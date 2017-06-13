import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({

})

store.registerModule('bn', {
  state: {
    isLoading: false,
    route:{},
    direction: 'forward'
  },
  mutations: {
    updateLoadingStatus (state, payload) {
      state.isLoading = payload.isLoading
    },
    updateRouteStatus (state, payload) {
      state.route = payload.route
    },
    updateDirection (state, payload) {
      state.direction = payload.direction
    }
  }
})
export default store
