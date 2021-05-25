import { createStore } from 'vuex'

export default createStore({
  state: {
    users: []
  },
  mutations: {
    asignData(state,data){
      state.users = [...data]
    }
  },
  actions: {
    async fetchData({commit}){
      let url = 'http://localhost:5000/users'
      let res = await fetch(url)
      let data = await res.json()

      commit('asignData',data)
    }
  },
  modules: {
  }
})
