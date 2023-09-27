
<template>
  <div class="relative group">
    <UCard class="my-4 relative">
      <div class="flex flex-col bg-white aspect-video w-56 h-72 rounded-sm">
        <div class="flex justify-center">
          <img
            :src="product.image"
            class="w-48 h-48 object-contain aspect-video" 
            @mouseenter="showText = true"
            @mouseleave="showText = false"
          />
        </div>
        <div class="mx-2 text-sm">{{ product.name }}</div>
        <div class="flex flex-row justify-between items-center mx-2 mt-auto"> <!-- Move this div to the bottom of the card -->
          <div class="text-md font-light">Rp. {{ product.price }}</div>
          <UButton @click="addToCart(product)" variant="link" color="white" size="xl">
            <UIcon name="i-heroicons-shopping-bag" />
          </UButton>
        </div>
        <!-- End of moved div -->
      </div>
    </UCard>
  </div>
</template>


  
  <script setup>
  const { product } = defineProps(["product"]);
  </script>
  