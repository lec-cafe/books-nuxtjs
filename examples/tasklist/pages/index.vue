<template>
  <div>
    <ul class="list-group-flush">
      <li class="list-group-item">task一覧</li>
      <li class="list-group-item" v-for="(task, index) in tasks">{{ task.name }}</li>
      <li class="list-group-item">
        <router-link to="/form">
          投稿画面
        </router-link>
      </li>
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
