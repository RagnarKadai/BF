<template>
  <div class="bg-white m-3">
      <h3 class="m-2 contact">How to reach us: </h3>
      <p class="m-2 contact"><img src="../assets/contact.png" style="width:40px;height:40px"> : 123456789</p>
      <p class="m-2 contact"><img src="../assets/home.png" style="width:40px;height:40px"> : Tartu City</p>
      <p class="m-2 contact"><img src="../assets/email.png" style="width:40px;height:40px"> : ProfessionalEmail@vueproject.com</p>
      <h3 style="text-align: left" class="m-2 contact">Send us an email:</h3>
      <textarea id="form" class="form form-control" style="width:95%; margin-left: 7px"></textarea>
      <p class="m-2 contact"><button v-on:click="resetForm" class="btn btn-primary mt-2">Send</button></p>
  </div>
</template>

<script>
export default {
  methods: {
    resetForm(){
      document.getElementById("form").value = ""
    }
  }
}
</script>


<style scoped>
.contact {
  text-align: left;
}
</style>