<template>
  <div id="app">
    <Header/>
    <Modal :class="{'active':modalToggle}" @closeModal = 'modalToggle = $event'/>
    <div class="row">
      <div class="col-9">
        <div class="bigtitle">
          You’ve got <span>7 task</span> today 
          <button @click="modalToggle = !modalToggle">
            <img src="@/assets/plus.png" alt="">
            Add New
          </button>
        </div>
        <Todos :todos='onHold'>
          <template v-slot:todos__title>
            On hold
          </template>
        </Todos>

        <Todos :todos='completed'>
          <template v-slot:todos__title>
            Completed
          </template>
        </Todos>
      </div>
      <div class="col-3"></div>
    </div>
  </div>
</template>

<script>
import Todos from './components/Todos.vue'
import Header from './components/Header.vue'
import Modal from './components/Modal.vue'
export default {
  components:{
    Header, Todos, Modal
  },
  data() {
    return {
      modalToggle:false
    }
  },
  computed:{
    onHold(){
      return this.$store.getters.todosOnHold
    },
    completed(){
      return this.$store.getters.todosCompleted
    },
  },
  created(){
    this.$store.dispatch('getAllTodos')
  }
}
</script>

<style lang="less">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
}
.row {
  margin-left: -15px;
  margin-right: -15px;
  display: flex;
  flex-wrap: wrap;
}
.col-9 {
  flex-basis: 75%;
  max-width: 75%;
  width: 75%;
  padding: 15px;
}
.col-3 {
  flex-basis: 25%;
  max-width: 25%;
  width: 25%;
  padding: 15px;
}
#app {
  padding: 40px;
}
button {
  transition: 0.5s;
  cursor: pointer;
}
.bigtitle {
  font-size: 36px;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  display: flex;
  align-items: center;
  margin-bottom: 41px;
  span {
    color: #F3477A;
    display: inline-block;
    margin: 0px 6px;
  }
  button {
    background-color: #884CB2;
    border-radius: 10px;
    padding: 8px 30px;
    color: #fff;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    display: flex;
    align-items: center;
    margin-left: 25px;
    border:0;
    &:hover {
      transform: translateY(-5px);
      box-shadow: 1px 4px 12px 0px rgba(136,76,178,0.5);
    }
    img {
      margin-right: 5px;
    }
  }
}
input,
select {
  &:focus {
    outline: 0;
  }
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
