<template>
  <div class="container">
    <form>
      <div class="form-group">
        <label>タスク</label>
        <input v-model="task.name" type="text" class="form-control">
      </div>
      <div class="form-group">
        <label>日時</label>
        <input v-model="task.date" type="date" class="form-control">
      </div>
      <button @click="submit" type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        task: {
          name: "",
          date: ""
        },
      }
    },
    methods: {
      submit() {
        this.$router.push("/")
      }
    }
  }
</script>

<style>
</style>
