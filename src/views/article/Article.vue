<template>
  <h1 class="text-black">Tess</h1>
  <Hero />
  <Latest />
  <Trending />
</template>

<script>
import Hero from './components/Hero.vue';
import Latest from './components/Latest.vue';
import Trending from './components/Trending.vue';

export default {
  name: 'Article',
  components: {
    Hero, Latest, Trending,
  },
}
</script>

