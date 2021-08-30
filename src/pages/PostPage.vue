<template>
  <div>
    <nav-bar></nav-bar>
    <div class="buttons">
      <my-button @click="show = true">Add post</my-button>
      <my-input v-model="searchQuery" placeholder="Search..."></my-input>
      <my-select :options="options" :value.sync="selectedSort"></my-select>
    </div>
    <my-dialog v-model="show" @click="modalDisplay">
      <create-post @addPost="addPost" />
    </my-dialog>
    <post-list v-if="!loading" :posts="filterSortedPosts" @remove="removePost" />
    <div v-else>Loading...</div>
    <div v-intersection="loadMorePosts"></div>
    <!-- Page pagination by click -->
    <!-- <div class="pages">
      <div
        v-for="pageNumber in totalPages"
        :key="pageNumber"
        class="page"
        @click="changePage(pageNumber)"
        :class="{
          'active-page': page === pageNumber,
        }"
      >
        {{ pageNumber }}
      </div>
    </div> -->
  </div>
</template>

<script>
import CreatePost from '@/Components/CreatePost'
import PostList from '@/Components/PostList'
import axios from 'axios'
import MySelect from '@/Components/UI/MySelect.vue'
import NavBar from './NavBar.vue'

export default {
  components: {
    CreatePost,
    PostList,
    MySelect,
    NavBar,
  },
  name: 'App',
  data() {
    return {
      posts: [],
      show: false,
      loading: false,
      options: [
        { name: 'Title name', value: 'title' },
        { name: 'Description name', value: 'desc' },
      ],
      selectedSort: '',
      searchQuery: '',
      page: 1,
      limit: 10,
      totalPages: 0,
    }
  },
  methods: {
    addPost(post) {
      if (post.title.length > 0 && post.desc.length > 0) {
        this.posts.push(post)
        this.show = false
      }
    },
    removePost(deletingPost) {
      this.posts = this.posts.filter(post => post.id !== deletingPost.id)
    },
    modalDisplay() {
      this.show = false
    },
    // Page pagination by click
    // changePage(pageNumber) {
    //   this.page = pageNumber
    // },
    async fetchPosts() {
      try {
        this.loading = true
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: this.limit,
          },
        })
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
        const final = response.data.map(item => {
          return {
            id: item.id,
            title: item.title,
            desc: item.body,
          }
        })
        this.posts = final
      } catch (e) {
        console.log(e)
      } finally {
        this.loading = false
      }
    },
    async loadMorePosts() {
      try {
        this.page += 1
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: this.limit,
          },
        })
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
        const final = response.data.map(item => {
          return {
            id: item.id,
            title: item.title,
            desc: item.body,
          }
        })
        //Adding posts into existing posts array
        this.posts = [...this.posts, ...final]
      } catch (e) {
        console.log(e)
      }
    },
  },
  mounted() {
    this.fetchPosts()
    //https://developer.mozilla.org/ru/docs/Web/API/Intersection_Observer_API
    // const options = {
    //   rootMargin: '0px',
    //   threshold: 1.0,
    // }
    // const callback = (entries, observer) => {
    //   if (entries[0].isIntersecting && this.page < this.totalPages) {
    //     this.loadMorePosts()
    //   }
    // }
    // const observer = new IntersectionObserver(callback, options)
    // observer.observe(this.$refs.observer)
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((a, b) => {
        return a[this.selectedSort]?.localeCompare(b[this.selectedSort])
      })
    },
    filterSortedPosts() {
      return this.sortedPosts.filter(item =>
        item.title.toLowerCase().includes(this.searchQuery.toLowerCase()),
      )
    },
  },
  watch: {
    // Page pagination by click
    // page() {
    //   this.fetchPosts()
    // },
  },
}
</script>

<style>
* {
  margin: 0;
  box-sizing: border-box;
  padding: 0;
}

.app {
  width: 80%;
  margin: 0 auto;
}
.buttons {
  align-items: flex-end;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.pages {
  display: flex;
  margin: 20px 0;
  font-size: 50px;
  justify-content: center;
  text-align: center;
}
.page {
  border: 1px solid black;
  cursor: pointer;
  width: 100px;
}
.page:hover {
  background-color: rgb(187, 187, 187);
}
.active-page {
  background-color: green;
}
</style>
