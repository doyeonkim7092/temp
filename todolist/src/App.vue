<template>
  <div id="app">
    <div class="container">
      <div class="col-md-6 offser-md-3">
        <h1 class="text-center mb-4">ToDO</h1>
        <input
          type="text"
          class="form-control"
          v-model="userInput"
          @keyup.enter="addNewTodo"
        />
        <div class="list-group mb-4">
          <template v-for="todo in activeTodoList" v-bind:todo="todo">
            <todo :label="todo.label" @componentClick="toggleTodoState(todo)" />
          </template>
        </div>
        <div class="text-right">
          <button
            type="button"
            class="btn btn-sm"
            @click="changeCurrentState('active')"
          >
            TODO
          </button>
          <button
            type="button"
            class="btn btn-sm"
            @click="changeCurrentState('done')"
          >
            DONE
          </button>
          <button
            type="button"
            class="btn btn-sm"
            @click="changeCurrentState('all')"
          >
            ALL
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Todo from "./components/Todo";

export default {
  name: "App",
  data() {
    return {
      userInput: "",
      todoList: [],
      currentState: "active",
    };
  },
  computed: {
    activeTodoList() {
      //currentState값이 all 이면, 모든항목을 가져오고, 아니면 currentState값만 가져온다
      return this.todoList.filter(
        (todo) =>
          this.currentState === "all" || todo.state === this.currentState
      );
    },
  },
  methods: {
    changeCurrentState(state) {
      this.currentState = state;
    },
    addNewTodo() {
      this.todoList.push({
        label: this.userInput,
        state: "active",
      });
      this.userInput = "";
    },
    toggleTodoState(todo) {
      todo.state = todo.state === "active" ? "done" : "active";
    },
  },
  components: {
    Todo,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
