<template>
  <Nav />
  <main>
    <RouterView />
  </main>
  <Footer />
</template>

<script>
import Footer from './views/components/Footer.vue'
import Nav from './views/components/Nav.vue'

export default {
  name: 'App',
  components: {
    Nav,
    Footer,
  },
}
</script>
