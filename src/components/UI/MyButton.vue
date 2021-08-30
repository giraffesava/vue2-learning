<template>
  <button class="btn" @click="clickFunc">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'my-button',
  methods: {
    clickFunc() {
      this.$emit('click')
    },
  },
}
</script>

<style scoped>
.btn {
  border: 4px solid rgb(255, 255, 255);
  border-radius: 10px;
  background-color: teal;
  cursor: pointer;
  min-width: 80px;
  padding: 5px;
  height: 40px;
  font-size: 20px;
  color: #fff;
}
.btn:hover {
  background-color: rgb(255, 255, 255);
  color: black;
}
</style>
