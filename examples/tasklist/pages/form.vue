<template>
  <div>
    <form>
      <div class="form-group">
        <label>タスク</label>
        <input v-model="form.name" type="text" class="form-control">
      </div>
      <div class="form-group">
        <label>日時</label>
        <input v-model="form.date" type="date" class="form-control">
      </div>
      <button @click="submit" type="submit" class="btn btn-primary">投稿</button>
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
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
