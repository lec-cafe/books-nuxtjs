<template>
  <div>
    <router-link class="btn btn-light" to="/form">
      投稿画面
    </router-link>
    <br><br>
    <ul class="list-group list-group-flush">
      <li class="list-group-item" v-for="task in tasks">{{ task.name }}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tasks: [
          {
            name: "牛乳を買う",
            date: ""
          },
          {
            name: "本を読む",
            date: ""
          }
        ]
      }
    }
  }
</script>

<style>
</style>
