<template>
  <div class="post">
    <div>
      <strong>{{ post.id }}. Title:</strong> {{ post.title }}
    </div>
    <div><strong>Description:</strong> {{ post.desc }}</div>
    <my-button @click="$emit('remove')">Delete</my-button>
    <my-button @click="$emit('remove')">Open</my-button>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style>
.post {
  border: 2px solid green;
  padding: 5px;
  margin-top: 15px;
  align-items: center;
  justify-content: space-between;
  font-size: 22px;
}
</style>
