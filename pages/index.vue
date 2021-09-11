<template>
  <div>
    <Header />
    <ul>
      <li v-for="todo in todos.todo.list" :key="todo.id">
        <input :checked="todo.done" @change="toggle(todo)" type="checkbox" />
        <span :class="{ done: todo.done }">{{ todo.text }}</span>
      </li>
      <li>
        <input @keyup.enter="addTodo" placeholder="What needs to be done?" />
      </li>
    </ul>
    <Footer />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  computed: {
    todos() {
      return this.logge(this.$store.state)
    },
  },
  methods: {
    logge(data) {
      return JSON.parse(JSON.stringify(data))
    },
    addTodo(e) {
      this.$store.commit('todo/add', e.target.value)
      e.target.value = ''
    },
    ...mapMutations({
      toggle: 'todo/toggle',
    }),
  },
  created() {
    console.log(this.logge(this.$store.state))
  },
}
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>
