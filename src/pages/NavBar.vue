<template>
  <div class="navbar">
    <div @click="$router.push('/')" class="logo">Vue2</div>
    <div class="navbtn">
      <my-button @click="$router.push('/posts')">Posts</my-button>
      <my-button @click="$router.push('/about')">About</my-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'nav-bar',
}
</script>

<style>
.navbar {
  height: 40px;
  background-color: teal;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  font-size: 30px;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  color: #fff;
}
.logo {
  margin-left: 20px;
  cursor: pointer;
  padding: 0 5px;
}
.logo:hover {
  background-color: #fff;
  color: black;
  border-radius: 10px;
}

.navbtn {
  display: flex;
  justify-content: space-around;
  width: 200px;
}
</style>
