<template>
  <div>
    <!--Loop for posts-->
    <div >
    <div v-for="(post, index) in postList" :key="index" class="m-5 bg-white">
      <!--Header-->
      <div class="d-flex p-2">
          <div class="col-sm d-flex">
            <span><img :src="post.userIcon" alt="" style="width: 50px; height: 50px; border-radius: 50%"/></span>
            <span style="margin-top: 10px; margin-left: 20px"><p>{{ post.userName }}</p></span>
          </div>
          <div class="col-3" style="margin-top:10px">
          <span><p>{{post.userPostTime}}</p></span>
          </div>
      </div>
      <div class="p-2">
        <!--Body-->
        <img :src="post.userPostImage" alt="" style="width: 100%"/>
        <h3 style="margin-top: 5px">{{ post.userPostContent }}</h3>
      </div>
      <div>
        <!--Likes-->
        <button class="btn" v-on:click="addLike(post)">
          <img class="pb-2" src="../assets/like.png" style="width:50px">
        </button>
        <span>{{ post.likes }}</span>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Posts",
  methods: {  
    addLike: function(post) {
      this.$store.dispatch("increaseLikes", post)
    }
  },
  computed: {
    postList() {
      console.log("postlist")
      return this.$store.getters.postList
    }
  }
}

</script>