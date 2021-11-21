<template>
  <div class="bg-primary min-vh-100 ming-vw-100">
    <Header />
    <button v-on:click="resetLikes" class="btn btn-outline-dark p-2 mt-2" style="margin-left: 40%; width: 20%">RESET LIKES</button>
    <div style="width: 60%; margin-left: 20%">
      <Posts />
    </div>
    <div style="margin-top: auto">
      <Footer />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Posts from '@/components/Posts.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Footer,
    Posts
  },
  //HOME BUTTON TO RESET LIKES ON POSTS
  methods: {
    resetLikes: function() {
      this.$store.dispatch("resetLikes")
    }
  }
}
</script>
