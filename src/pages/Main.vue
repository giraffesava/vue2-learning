<template>
  <div>
    <nav-bar></nav-bar>
    <h1 class="welcome">Welcome to my project</h1>
  </div>
</template>

<script>
import NavBar from './NavBar.vue'
export default {
  components: {
    NavBar,
  },
}
</script>

<style scoped>
.welcome {
  width: 100%;
  text-align: center;
  margin-top: 20px;
}
</style>
