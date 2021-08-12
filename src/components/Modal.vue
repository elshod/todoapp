<template>
  <div class="modal">
      <div class="modal__title">New Todo</div>
      <input type="text" v-model='todo.title'>
      <select v-model='todo.important'>
          <option value="normal">Normal</option>
          <option value="Minor">Minor</option>
          <option value="Critical">Critical</option>
      </select>
      <div class="modal__list">
          <label>
              <input type="checkbox" v-model='todo.team' value="Person-1">Person-1
          </label>
          <label>
              <input type="checkbox" v-model='todo.team' value="Person-2">Person-2
          </label>
          <label>
              <input type="checkbox" v-model='todo.team' value="Person-3">Person-3
          </label>
          <label>
              <input type="checkbox" v-model='todo.team' value="Person-4">Person-4
          </label>
      </div>
      <button @click="add()">Create todo</button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            todo: {
                status:0,
                process:0,
                team:[]
            }
        }
    },
    methods: {
        add(){
            this.$store.dispatch('addNewTodo',this.todo)
            this.todo = {
                status:0,
                process:0,
                team:[]
            }
            this.$emit('closeModal',false)
        }
    }
}
</script>

<style lang='less'>
    .modal {
        position: fixed;
        top: -1000px;
        width: 400px;
        box-shadow: 0px 4px 12px 0px rgba(0,0,0,0.19);
        padding: 20px;
        background-color: #fff;
        left: 0;
        right: 0;
        margin: auto;
        display: flex;
        flex-direction: column;
        transition: 0.5s;
        z-index: 1;
        &__title {
            text-align: center;
            font-weight: bold;
            margin-bottom: 20px;
        }
        &.active {
            top: 50px;
        }
        &__list {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 10px;
            flex-wrap: wrap;
            label {
                flex-basis: 50%;
                margin-bottom: 10px;
            }
        }
        input[type=checkbox]{
            margin-right: 5px;
            display: inline-block;
        }
        input[type=text],
        select {
            display: block;
            width: 100%;
            border-radius: 10px;
            padding: 10px;
            border:1px solid #e7e7e7;
            margin-bottom: 10px;
        }
        button {
            width: 200px;
            padding: 10px;
            border:0;
            background-color: #42b983;
            border-radius: 10px;
            color: #fff;
            font-size: 16px;
            font-weight: 700;
            margin: auto;
        }
    }
</style>