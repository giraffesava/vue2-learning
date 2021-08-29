<template>
  <div v-show="value" :value="value" class="dialog" @click="$emit('click')">
    <div class="dialog-content" @click.stop>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'my-dialog',
  props: ['value'],
}
</script>

<style>
.dialog {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  background-color: rgba(0, 0, 0, 0.5);
}
.dialog-content {
  padding: 20px;
  margin: auto;
  background-color: #fff;
  min-height: 50px;
  min-width: 300px;
  border-radius: 12px;
}
</style>
