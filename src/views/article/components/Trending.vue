<template>
  <section class="py-16 bg-gray-50">
    <!-- Section Title -->
    <div class="container mx-auto px-16 mb-10">
      <h2 class="font-bevietnampro font-semibold text-4xl text-[#028391]">Trending Articles</h2>
    </div>

    <!-- Card Layout -->
    <div class="container mx-auto px-16 flex flex-wrap gap-10">
      <!-- Left Card -->
      <div class="left-card bg-white shadow-lg rounded-2xl overflow-hidden">
        <!-- Image -->
        <img
          src="/trending-section/content-1.png"
          alt="Article 1"
          class="w-full h-[236px] object-cover rounded-t-2xl"
        />

        <!-- Content -->
        <div class="p-6 flex flex-col gap-4">
          <!-- Date -->
          <div class="flex items-center gap-2 text-gray-500 text-sm">
            <i class="fas fa-calendar"></i>
            <span>January 21, 2025</span>
          </div>

          <!-- Title -->
          <h3 class="font-bevietnampro font-semibold text-xl text-[#333333] leading-8">
            Pink Stairs Leading to the Sky
          </h3>

          <!-- Description -->
          <p class="font-bevietnampro text-gray-700 text-base leading-7">
            In my opinion, Ui/Ux design is the foundation of a product, its face and soul. You can
            create an infinitely high-quality...
          </p>

          <!-- Author -->
          <div class="flex items-center gap-4">
            <img
              src="/trending-section/account.png"
              alt="Author"
              class="w-8 h-8 rounded-full object-cover"
            />
            <span class="font-bevietnampro text-gray-800 text-sm">John Doe</span>
          </div>
        </div>
      </div>

      <!-- Right Cards -->
      <div class="right-cards flex flex-col gap-8">
        <!-- Right Card 1 -->
        <div class="right-card bg-white shadow-lg rounded-xl p-6 flex">
          <img
            src="/trending-section/content-2.png"
            alt="Article 2"
            class="w-1/3 h-[200px] object-cover rounded-lg mr-4"
          />
          <div class="content flex flex-col justify-between">
            <div class="flex items-center gap-2 text-gray-500 text-sm">
              <i class="fas fa-calendar"></i>
              <span>January 22, 2025</span>
            </div>
            <h3 class="font-bevietnampro font-semibold text-xl text-[#333333] leading-8 mb-2">
              Article Title 2
            </h3>
            <p class="font-bevietnampro text-gray-700 text-base leading-7">
              A short description of the second trending article that engages readers.
            </p>
            <div class="flex items-center gap-4">
              <img
                src="/trending-section/account.png"
                alt="Author"
                class="w-8 h-8 rounded-full object-cover"
              />
              <span class="font-bevietnampro text-gray-800 text-sm">John Doe</span>
            </div>
          </div>
        </div>

        <!-- Right Card 2 -->
        <div class="right-card bg-white shadow-lg rounded-xl p-6 flex">
          <img
            src="/trending-section/content-2.png"
            alt="Article 3"
            class="w-1/3 h-[200px] object-cover rounded-lg mr-4"
          />
          <div class="content flex flex-col justify-between">
            <div class="flex items-center gap-2 text-gray-500 text-sm">
              <i class="fas fa-calendar"></i>
              <span>January 23, 2025</span>
            </div>
            <h3 class="font-bevietnampro font-semibold text-xl text-[#333333] leading-8 mb-2">
              Article Title 3
            </h3>
            <p class="font-bevietnampro text-gray-700 text-base leading-7">
              A concise overview of the third trending article that informs the audience.
            </p>
            <div class="flex items-center gap-4">
              <img
                src="/trending-section/account.png"
                alt="Author"
                class="w-8 h-8 rounded-full object-cover"
              />
              <span class="font-bevietnampro text-gray-800 text-sm">John Doe</span>
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

<style scoped>
.left-card {
  width: 600px;
  height: 472px;
}

.right-cards {
  width: 672px;
  height: auto; /* This will allow the right cards to adjust dynamically */
}

.right-card {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 672px;
  height: auto;
  background: #ffffff;
  box-shadow: 0px 7px 29px rgba(100, 100, 111, 0.12);
  border-radius: 12px;
  padding: 12px;
  margin-bottom: 16px;
}

.right-card img {
  width: 1/3;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
}

.right-card .content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 16px;
  width: calc(100% - 224px); /* Adjust content width based on image width */
}

.right-card .content h3 {
  font-family: 'Be Vietnam Pro';
  font-weight: 600;
  font-size: 24px;
  color: #333333;
  margin-bottom: 12px;
}

.right-card .content p {
  font-family: 'Be Vietnam Pro';
  font-weight: 400;
  font-size: 16px;
  color: #303030;
  margin-bottom: 0;
}

.right-card .content .flex {
  gap: 8px;
}
</style>
