<template>
  <nav class="bg-white border">
    <div class="d-flex p-2">
      <span class="col-sm"><router-link to="/home"><img class="d-flex flex-start" src="../assets/logo.jpg" style="width:60px"></router-link></span>
      <span class="col-sm"><input class="search form-control flex form-control-sm mt-2" type="text" placeholder="Search.." /></span>
      <div class="col-sm d-flex flex-row-reverse">
        <span class="mx-2"><router-link to="/"><img src="../assets/logout.png" style="width:40px;height:40px"></router-link></span>
        <span class="mx-2"><router-link to="/profile"><img src="../assets/me.png" style="width:40px;height:40px"></router-link></span>
      </div>
    </div>
  </nav>
</template>