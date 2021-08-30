<template>
  <input :value="value" @input="inputChange($event.target.value)" class="input" type="text" />
</template>

<script>
export default {
  name: 'my-input',
  props: ['value'],
  methods: {
    inputChange(e) {
      this.$emit('input', e)
    },
  },
}
</script>

<style>
.input {
  margin-top: 20px;
  padding: 1;
  font-size: 20px;
  width: 300px;
  height: 40px;
}
</style>
