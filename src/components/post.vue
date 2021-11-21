<template>
<div class="Post">
<div>
 <div class="small flex-row">
  <img src={{post.userIcon}} style="width: 35px; height: 35px; border-radius: 50%"></img>
  <p>{{post.userName}}</p>
  <p class="time">{{post.userPostTime}}</p>
</div>
<div>
 <img src ={{post.userPostImage}} alt=""></img>
 <h2>{{post.userPostContent}}</h2>
 </div>
 <p class="likes">{{post.likes}}</p>
 <button v-on:klick='IncreaseLikes'><i class="fa fa-thumbs-up"></i></button>
 </div>
</template>
<script>
export default {
 name: "Post",
 data: function() {
 return {
 }},
 computed: {
 post(){ return this.$store.getters.post },
 },
 methods: {
 IncreaseLikes: function() {
  this.$store.commit('IncreaseLikes')

 }
 }
 }
 </script>
 <style scoped>
 </style>
