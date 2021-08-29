<template>
  <form class="form" @submit.prevent>
    <h1>Adding post</h1>
    <my-input v-model="post.title" placeholder="title" />
    <my-input v-model="post.desc" placeholder="description" />
    <my-button @click="addPost">Add</my-button>
  </form>
</template>
<script>
import MyInput from './UI/MyInput.vue'
export default {
  components: { MyInput },
  data() {
    return {
      post: {
        title: '',
        desc: '',
      },
    }
  },
  methods: {
    addPost() {
      this.post.id = Date.now()
      this.$emit('addPost', this.post)
      this.post = {
        title: '',
        desc: '',
      }
    },
  },
}
</script>

<style scoped>
.form {
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
