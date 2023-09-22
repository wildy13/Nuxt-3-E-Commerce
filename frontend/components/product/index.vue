<template>
  <div>
    <!-- Dropdown -->
    <div>
      {{ categoryItem }}
      <UDropdown
        :items="categoryItem"
        :popper="{ placement: 'bottom-start' }"
      >
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
      <div v-for="product in productsItem" :key="product.id">
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

const productStore = useProductStore();
const categoryStore = useCategoryStore();

const loadAsyncData = async () => {
  await Promise.all([productStore.getAll(), categoryStore.getAll()]);
  isLoading.value = false;
};

const isLoading = ref(true);

onMounted(loadAsyncData);

const categoryItem = computed(() => {
  return categoryStore.items.map((item) => ({
    label: item.name,
  }));
});

const productsItem = computed(() =>
  productStore.items.filter(({ name }) =>
    [name].some((val) => val.toLowerCase().includes(search.value.toLowerCase()))
  )
);
</script>
