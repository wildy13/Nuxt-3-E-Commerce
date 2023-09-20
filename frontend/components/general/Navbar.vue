<template>
  <div class="p-2 fixed top-0 w-full z-10">
    <div class="flex justify-between items-center mx-4">
      <div>This is Logo</div>
      <div class="flex items-center gap-4">
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
