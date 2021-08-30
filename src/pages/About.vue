<template>
  <div>
    <nav-bar></nav-bar>
    <h1 class="about">This is about page</h1>
  </div>
</template>

<script>
import NavBar from './NavBar.vue'
export default {
  components: { NavBar },
}
</script>

<style>
.about {
  width: 100%;
  text-align: center;
  margin-top: 20px;
}
</style>
