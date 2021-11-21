<template>
 <div id= "comp-list">
 <div class="flex-container" id="posts" v-for = "post in postsList" :key="post.userId">
 <div>
  <div class="small flex-row">
   <img src={{post.userIcon}} style="width: 35px; height: 35px; border-radius: 50%"/>
   <p>{{post.userName}}</p>
   <p class="time">{{post.userPostTime}}</p>
  </div>
  <div>
   <img src ={{post.userPostImage}} alt=""/>
   <h2>{{post.userPostContent}}</h2>
  </div>
  <button><i class="fa fa-thumbs-up"></i></button>
</div>
</div>
</div>
</template>

<script>
export default {
 name: "posts_component",
 data: function() {
 return {
 }},
 computed: {
 postList(){ return this.$store.state.postList },
 postsList(){ return this.$store.getters.postsList },
 testpro(){ return this.$store.state.testString },
 }}

</script>

<style scoped>
#comp-list{
    background: #ffb1b1;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    margin-bottom: 30px;
    padding: 10px 20px;
}
</style>
