<template>
  <section class="py-16">
    <!-- Section Title -->
    <div class="container mx-auto px-6 mb-8">
      <h2 class="font-bold text-4xl text-[#028391]">Latest Articles</h2>
    </div>

    <!-- Card Layout -->
    <div class="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Loop through articles -->
      <div
        v-for="(article, index) in paginatedArticles"
        :key="index"
        class="bg-white p-6 rounded-lg shadow-lg"
      >
        <img :src="article.image" alt="Article" class="w-full h-48 object-cover rounded-md mb-4" />
        <div class="flex flex-col">
          <!-- Text Section -->
          <div class="flex items-center mb-4">
            <i class="fas fa-calendar text-black mr-2"></i>
            <span class="text-black text-sm">{{ article.date }}</span>
          </div>

          <h3 class="font-semibold text-xl text-black mb-2">{{ article.title }}</h3>
          <p class="text-sm text-black mb-2">{{ article.description }}</p>

          <div class="flex items-center mt-4">
            <img :src="article.authorImage" alt="author" class="rounded-full w-10 h-10 mr-3" />
            <span class="text-black">{{ article.author }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Pagination -->
    <div class="flex justify-center mt-8">
      <button
        @click="previousPage"
        :disabled="currentPage === 1"
        class="px-4 py-2 bg-[#028391] text-white rounded-l-md"
      >
        Previous
      </button>
      <button
        @click="nextPage"
        :disabled="currentPage === totalPages"
        class="px-4 py-2 bg-[#028391] text-white rounded-r-md"
      >
        Next
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Latest',
  data() {
    return {
      currentPage: 1,
      articles: [
        {
          image: '/latest-section/latest-1.png',
          date: '16 May 2024',
          title: 'Use of Hostinger dbt (data build tool)',
          description: 'Enhancing data accuracy and providing insights for growth.',
          authorImage: '/hero/account.png',
          author: 'Maksym Ostrozhynskyy',
        },
        {
          image: '/latest-section/latest-1.png',
          date: '17 May 2024',
          title: 'Data Science and Machine Learning',
          description: 'A Guide for Beginners in Data Science.',
          authorImage: '/hero/account.png',
          author: 'Jane Doe',
        },
        {
          image: '/latest-section/latest-1.png',
          date: '18 May 2024',
          title: 'AI and Automation in Business',
          description: 'Exploring how AI is transforming industries.',
          authorImage: '/hero/account.png',
          author: 'John Smith',
        },
        {
          image: '/latest-section/latest-1.png',
          date: '19 May 2024',
          title: 'The Future of Blockchain',
          description: 'What lies ahead for blockchain technology?',
          authorImage: '/hero/account.png',
          author: 'Alice Johnson',
        },
        {
          image: '/latest-section/latest-1.png',
          date: '20 May 2024',
          title: 'Cybersecurity Trends in 2024',
          description: 'How businesses are defending against new threats.',
          authorImage: '/hero/account.png',
          author: 'Bob Brown',
        },
        {
          image: '/latest-section/latest-1.png',
          date: '21 May 2024',
          title: 'Cloud Computing: The Next Step',
          description: 'Cloud technologies that will shape the future.',
          authorImage: '/hero/account.png',
          author: 'Maggie Taylor',
        },
      ],
    }
  },
  computed: {
    totalPages() {
      return Math.ceil(this.articles.length / 3)
    },
    paginatedArticles() {
      const start = (this.currentPage - 1) * 3
      return this.articles.slice(start, start + 3)
    },
  },
  methods: {
    previousPage() {
      if (this.currentPage > 1) this.currentPage--
    },
    nextPage() {
      if (this.currentPage < this.totalPages) this.currentPage++
    },
  },
}
</script>

<style scoped>
/* Styling for pagination buttons */
button:disabled {
  opacity: 0.5;
}
</style>
