<template>
  <h1 class="text-black">Tess</h1>
  <Hero />
  <Latest />
  <Trending />
</template>

<script>
import Hero from './components/Hero.vue'
import Trending from './components/Trending.vue'
import Latest from './components/Latest.vue'

export default {
  name: 'Article',
  components: {
    Hero,
    Trending,
    Latest,
  },
}
</script>
