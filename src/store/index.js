import { createStore } from 'vuex'

export default createStore({
  state: {
    users: []
  },
  mutations: {
    asignData(state,data){
      state.users = [...data]
      
    },
    
    saveChanges(state,changes){
      state.users = [...state.users,changes]
      localStorage.setItem('users',JSON.stringify(state.users))

    },

    updateData(state,changes){
      state.users = state.users.map(user=>user.cpf==changes.cpf?{...changes}:user)
      localStorage.setItem('users',JSON.stringify(state.users))
      
    }
  },
  actions: {
    async fetchData({commit}){

      if(!localStorage.users) {
        
        let url = 'http://localhost:5000/users'
        let res = await fetch(url)
        let data = await res.json()

        commit('asignData',data)

        localStorage.setItem('users',JSON.stringify(data))

      }else {
        commit('asignData',JSON.parse(localStorage.users))

      }
      
    }
  }

})
