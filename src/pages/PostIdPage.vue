<template>
  <div>
    <nav-bar></nav-bar>
    <h1 class="idPage">Some information about id № {{ $route.params.id }}</h1>
  </div>
</template>

<script>
import NavBar from '@/pages/NavBar.vue'
export default {
  components: {
    NavBar,
  },
}
</script>

<style>
.idPage {
  margin-top: 20px;
  text-align: center;
}
</style>
