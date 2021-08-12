import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos:[],
  },
  mutations: {
    newTodo(state,payload){
      state.todos.push(payload)
    },
    allTodo(state,payload){
      state.todos = payload
    }
  },
  getters: {
    todosOnHold(state){
      return state.todos.filter(todo => {
        return todo.status == 0
      })
    },
    todosCompleted(state){
      return state.todos.filter(todo => {
        return todo.status == 1
      })
    },
    countTodos(state){
      return state.todos.length
    }
  },
  actions: {
    addNewTodo(context,payload){
      axios.post('http://localhost:3000/todos',payload).then(response => {
        context.commit('newTodo',response.data)
      })
    },
    getAllTodos(context){
      axios.get('http://localhost:3000/todos').then(response => {
        context.commit('allTodo',response.data)
      })
    }
  },
  modules: {

  }
})
