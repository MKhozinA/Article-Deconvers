<template>
  <nav class="bg-[#028391] text-white py-6 px-16 flex justify-between items-center w-full">
    <!-- Left Section: Logo and Title -->
    <div class="flex items-center gap-[3.49px]">
      <img src="/logo/logo.png" alt="Logo" class="h-8 w-8" />
      <span class="text-xl font-semibold">Deconverse</span>
    </div>

    <!-- Right Section: Buttons -->
    <div class="flex items-center gap-4">
      <button
        class="bg-transparent border border-white py-2 px-4 rounded hover:bg-white hover:text-[#028391] transition"
      >
        Log In
      </button>
      <button class="bg-white text-[#028391] py-2 px-4 rounded hover:bg-opacity-90 transition">
        Sign Up
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
}
</script>
