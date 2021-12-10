<template>
  <div class="bg-primary min-vh-100 ming-vw-100 d-flex flex-column">
    <Header />
    <AboutUs />
    <div style="margin-top: auto">
      <Footer />
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import AboutUs from '@/components/AboutUs.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Footer,
    AboutUs
  }
}
</script>