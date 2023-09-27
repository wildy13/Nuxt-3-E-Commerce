<template>
  <div class="p-4 fixed top-0 w-full z-10 bg-gradient-to-tr from-blue-400 to-indigo-600">
    <div class="flex justify-between items-center gap-10">
      <div class="text-white">This is Logo</div>
      <div class="flex items-center gap-4 text-white">
        <nuxt-link to="/" exact active-class="text-slate-800">
          <div class="hover:text-slate-800 cursor-pointer">Home</div>
        </nuxt-link>
        <nuxt-link to="/product" exact active-class="text-slate-800">
          <div class="hover:text-slate-800 cursor-pointer">Product</div>
        </nuxt-link>
        <nuxt-link to="/contact" exact active-class="text-slate-800">
          <div class="hover:text-slate-800 cursor-pointer">Contact</div>
        </nuxt-link>
        <nuxt-link to="/auth/login" exact active-class="text-slate-800">
          <UButton
            icon="i-heroicons-arrow-left-on-rectangle"
            size="xl"
            color="white"
            variant="link"
            class="hover:text-slate-800"
          />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
