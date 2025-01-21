<template>
  <section class="bg-[#028391] text-white py-16">
    <div class="container mx-auto px-6 text-center">
      <!-- Title -->
      <h1 class="font-bold text-4xl mb-4">Deconvers Articles</h1>
      <!-- Subtitle -->
      <p class="text-lg mb-8">
        Enhance your English learning journey with curated tips, guides, and inspiring stories
        designed to help you grow.
      </p>

      <!-- Box with Image and Text -->
      <div class="bg-white p-6 rounded-lg flex items-start">
        <!-- Image Section -->
        <div class="w-1/4 mr-6 relative">
          <img src="/hero/background.png" alt="author" class="w-full h-full object-cover mb-4" />
          <img
            src="/hero/bg-content.png"
            alt="content"
            class="w-full h-full object-cover absolute top-0 left-0"
          />
        </div>

        <!-- Text Section -->
        <div class="flex-1 text-left">
          <div class="flex items-center mb-4">
            <!-- Icon Calendar -->
            <i class="fas fa-calendar text-black mr-2"></i>
            <span class="text-black">Today</span>
          </div>

          <h2 class="font-semibold text-xl text-black mb-2">
            Use of Hostinger dbt (data build tool): Enhancing data accuracy and providing insights
            for growth
          </h2>
          <p class="truncate text-sm text-black mb-2">
            Our Data Platform Team participated in Coalesce 2024, Las Vegas, the premier conference
            for analytics engineers. Coalesce brings together data practitioners to sharpen their
            skills, connect with peers, a...
          </p>

          <div class="flex items-center mt-4">
            <img src="/hero/account.png" alt="author" class="rounded-full w-10 h-10 mr-3" />
            <span class="text-black">Maksym Ostrozhynskyy</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
}
</script>
