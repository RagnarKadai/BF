<template>
  <div class="bg-primary min-vh-100 ming-vw-100 d-flex flex-column">
    <Header />
    <ContactUs />
    <div style="margin-top: auto">
      <Footer />
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import ContactUs from '@/components/ContactUs.vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Footer,
    ContactUs
  }
}
</script>