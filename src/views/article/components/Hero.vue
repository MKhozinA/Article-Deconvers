<template>
  <section class="relative bg-gradient-to-r from-[#028391] to-[#02A8A3] text-white py-16">
    <!-- Wrapper -->
    <div class="flex flex-col items-center justify-center gap-8 w-full px-6 mx-auto">
      <!-- Title & Subtitle -->
      <div
        class="flex flex-col justify-center items-center gap-2 w-full max-w-[1440px] px-10 py-10"
      >
        <h1
          class="font-semibold text-2xl md:text-4xl leading-[40px] tracking-[-0.005em] text-center"
        >
          Deconvers Articles
        </h1>
        <p class="font-semibold text-lg md:text-2xl leading-[32px] tracking-[-0.02em] text-center">
          Enhance your English learning journey with curated tips, guides, and inspiring stories
          designed to help you grow.
        </p>
      </div>

      <!-- Box -->
      <div
        class="flex flex-col md:flex-row items-start gap-20 w-full max-w-[1440px] bg-white shadow-md rounded-lg px-16 py-16"
      >
        <!-- Gambar -->
        <div class="relative w-[360px] h-[244px]">
          <img
            src="/hero/background.png"
            alt="author"
            class="absolute w-[360px] h-[244px] object-cover rounded-lg"
          />
          <img
            src="/hero/bg-content.png"
            alt="content"
            class="absolute w-[328px] h-[188px] object-cover rounded-lg top-[44px] left-[16px]"
          />
        </div>

        <!-- Konten -->
        <div class="flex flex-col gap-4 w-[832px] h-[244px]">
          <!-- Tanggal -->
          <div class="flex items-center gap-2 text-black">
            <i class="fas fa-calendar"></i>
            <span>Today</span>
          </div>

          <!-- Judul -->
          <h2
            class="font-semibold text-xl md:text-2xl leading-[40px] tracking-[-0.005em] text-[#303030]"
          >
            Use of Hostinger dbt (data build tool): Enhancing data accuracy and providing insights
            for growth
          </h2>

          <!-- Deskripsi -->
          <p class="text-base leading-[28px] tracking-[0.01em] text-[#303030] line-clamp-2">
            Our Data Platform Team participated in Coalesce 2024, Las Vegas, the premier conference
            for analytics engineers. Coalesce brings together data practitioners to sharpen their
            skills, connect with peers, a...
          </p>

          <!-- Penulis -->
          <div class="flex items-center gap-4">
            <img src="/hero/account.png" alt="author" class="w-10 h-10 rounded-full" />
            <span class="text-[#303030]">Maksym Ostrozhynskyy</span>
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
