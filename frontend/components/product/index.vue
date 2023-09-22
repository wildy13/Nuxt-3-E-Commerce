<template>
  <div>
    <!-- Dropdown -->
    <div>
      <UDropdown :items="categoryItem" :popper="{ placement: 'bottom-start' }">
        <UButton
          color="white"
          label="Options"
          trailing-icon="i-heroicons-chevron-down-20-solid"
        />
      </UDropdown>
    </div>
    <!-- Card -->
    <div
      class="flex flex-col justify-center items-center md:grid md:grid-cols-2 xl:grid-cols-3"
    >
      <div v-for="product in filterProducts" :key="product.id">
        <ProductCard :product="product" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useProductStore } from "../../stores/products";
import { useCategoryStore } from "../../stores/category";

const search = ref("");
const category = ref("");
const filteredByCategory = ref([]);

const productStore = useProductStore();
const categoryStore = useCategoryStore();

const loadAsyncData = async () => {
  await Promise.all([productStore.getAll(), categoryStore.getAll()]);
  isLoading.value = false;
};

const isLoading = ref(true);

onMounted(loadAsyncData);

const categoryItem = computed(() => {
  return categoryStore.items.map((item) => [
    {
      label: item.name,
      click: () => {
        category.value = item.name;
      },
    },
  ]);
});

const filterProducts = computed(() => {
  if (category.value === "") {
    return productStore.items;
  } else {
    return productStore.items.map(
      (product) =>
      product.category.toLowerCase() === category.value.toLowerCase()
    );
  }
});
</script>
