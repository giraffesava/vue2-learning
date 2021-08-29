<template>
  <div>
    <div v-if="posts.length > 0">
      <h1 class="posts-title">Posts</h1>
      <div>
        <post-item
          v-for="post in posts"
          :post="post"
          :key="post.id"
          @remove="$emit('remove', post)"
        />
      </div>
    </div>
    <h1 v-else>There're not any posts</h1>
  </div>
</template>

<script>
import PostItem from './PostItem'
export default {
  components: { PostItem },
  props: {
    posts: {
      type: Array,
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
}
.posts-title {
  text-align: center;
  margin-top: 20px;
  font-size: 25px;
}
</style>
