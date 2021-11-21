<template>
  <section class="vh-100 bg-primary">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card shadow-2-strong" style="border-radius: 1rem;">
          <div class="card-body p-5 text-center">
            <h3 class="mb-5"><img src="../assets/logo.jpg" style="width: 60px">Welcome to PostIt!</h3>
            <form>
            <div class="form-outline mb-4">
              <input type="email" id="emai" class="form-control form-control-lg" v-model="email" />
              <label class="form-label" for="email">Email</label>
            </div>

            <div class="form-outline mb-4">
              <input type="password" id="password" class="form-control form-control-lg" v-model="password"/>
              <label class="form-label" for="password">Password</label>
            </div>
              <router-link to="/home" ><button class="btn btn-primary btn-lg btn-block" type="submit" value="Login">Login</button></router-link>
            </form>
            <hr class="my-4">
            <a href="#">Forgot password?</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>