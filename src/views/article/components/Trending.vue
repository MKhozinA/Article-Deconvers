<template>
  <section class="py-16">
    <!-- Section Title (Positioned above the left card) -->
    <div class="container mx-auto px-6 mb-8">
      <h2 class="font-bold text-4xl text-[#028391]">Trending Articles</h2>
    </div>

    <!-- Card Layout -->
    <div class="container mx-auto px-6 flex flex-wrap">
      <!-- Left Card -->
      <div class="w-full sm:w-1/2 p-4">
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <img
            src="/trending-section/content-1.png"
            alt="Article 1"
            class="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 class="text-xl font-semibold text-black mb-2">Article Title 1</h3>
          <p class="text-sm text-gray-700">
            A brief description of the first trending article that grabs attention.
          </p>
        </div>
      </div>

      <!-- Right Cards (Top-Bottom) -->
      <div class="w-full sm:w-1/2 p-4">
        <div class="flex flex-col space-y-4">
          <!-- Right Card 1 -->
          <div class="bg-white p-6 rounded-lg shadow-lg flex">
            <img
              src="/trending-section/content-2.png"
              alt="Article 2"
              class="w-1/3 h-48 object-cover rounded-md mr-4"
            />
            <div>
              <h3 class="text-xl font-semibold text-black mb-2">Article Title 2</h3>
              <p class="text-sm text-gray-700">
                A short description of the second trending article that engages readers.
              </p>
            </div>
          </div>

          <!-- Right Card 2 -->
          <div class="bg-white p-6 rounded-lg shadow-lg flex">
            <img
              src="/trending-section/content-2.png"
              alt="Article 3"
              class="w-1/3 h-48 object-cover rounded-md mr-4"
            />
            <div>
              <h3 class="text-xl font-semibold text-black mb-2">Article Title 3</h3>
              <p class="text-sm text-gray-700">
                A concise overview of the third trending article that informs the audience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Trending',
}
</script>
