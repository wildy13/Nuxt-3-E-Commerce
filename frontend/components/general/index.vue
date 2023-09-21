<template>
    <div class="relative group">
      <UCard class="my-4 w-80 h-[430px] relative">
        <template #header>
          <div class="text-center">{{ product.name }}</div>
        </template>
        <div>
          <div class="flex justify-center">
            <img
              :src="product.image"
              class="w-full h-56 rounded-md"
              @mouseenter="showText = true"
              @mouseleave="showText = false"
            />
          </div>
          <div class="flex justify-center text-center mt-2">
            <!-- Menampilkan bintang sesuai dengan nilai rating -->
            <span v-if="product.rating >= 1">
              <Icon icon="mdi:star" />
            </span>
            <span v-if="product.rating == 1.5">
              <Icon icon="mdi:star-half-full" />
            </span>
            <span v-if="product.rating >= 2">
              <Icon icon="mdi:star" />
            </span>
            <span v-if="product.rating == 2.5">
              <Icon icon="mdi:star-half-full" />
            </span>
            <span v-if="product.rating >= 3">
              <Icon icon="mdi:star" />
            </span>
            <span v-if="product.rating == 3.5">
              <Icon icon="mdi:star-half-full" />
            </span>
            <span v-if="product.rating >= 4">
              <Icon icon="mdi:star" />
            </span>
            <span v-if="product.rating == 4.5">
              <Icon icon="mdi:star-half-full" />
            </span>
            <span v-if="product.rating >= 5">
              <Icon icon="mdi:star" />
            </span>
          </div>
        </div>
        <template #footer>
          <div
            class="flex justify-between items-center"
            @mouseenter="showText = false"
          >
            <div>{{ product.price }}</div>
            <UButton>
              <UIcon name="i-heroicons-shopping-bag" />
            </UButton>
          </div>
        </template>
      </UCard>
      <div
        v-if="showText"
        class="absolute z-10 top-10 left-80 bg-gray-900 p-1 rounded-lg w-80 h-[400px]"
      >
        {{ product.imageDescription }}
      </div>
    </div>
  </template>
  
  <script>
  import { Icon } from "@iconify/vue";
  export default {
    components: {
      Icon,
    },
    props: {
      product: Object, // Menerima prop 'product' dari komponen Product
    },
    data() {
      return {
        showText: false, // Menambahkan data showText untuk mengontrol tampilan teks saat hover
      };
    },
  };
  </script>
  