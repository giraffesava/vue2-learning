<template>
  <div class="wrapper">
    <select class="select" :value="value" @change="changeValue($event.target.value)">
      <option disabled value="">Sort by</option>
      <option v-for="opt in options" :key="opt.name" :value="opt.value">{{ opt.name }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'my-select',
  props: {
    value: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
  },
  methods: {
    changeValue(e) {
      this.$emit('update:value', e)
    },
  },
}
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: row;
  margin-top: 20px;
}

.select {
  font-size: 20px;
}
</style>
