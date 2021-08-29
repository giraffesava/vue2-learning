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
  margin-top: 20px;
  border: 2px solid green;
  background-color: teal;
  cursor: pointer;
  min-width: 80px;
  min-height: 40px;
  font-size: 20px;
}
</style>
