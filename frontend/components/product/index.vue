<template>
  <div>
    <!-- Dropdown -->
    <div class="flex justify-between mx-4">
      <UDropdown :items="categoryItem" :popper="{ placement: 'bottom-start' }" :ui="{background:'bg-gray-800', item:{active:'bg-gray-900 text-white',  inactive:'text-gray-200'}}">
        <UButton
          color="white"
          label="Options"
          trailing-icon="i-heroicons-chevron-down-20-solid"
          :ui="{color:{white:{solid:'bg-gray-900 hover:bg-gray-800/50 disabled:bg-gray-900 focus-visible:ring-primary-400 text-white ring-gray-700'}}}"
        />
      </UDropdown>
      <!-- Search -->
      <UInput
        icon="i-heroicons-magnifying-glass-20-solid"
        placeholder="Search..."
        v-model="search"
        color="white"
        :ui="{color:{white:{outline:'bg-gray-900 text-white'}}}"
        trailing
      />
    </div>
    <!-- Card -->
    <div
      class="flex flex-col justify-center items-center md:grid md:grid-cols-2 xl:grid-cols-3 justify-items-center"
    >
      <div v-for="product in displayedProducts" :key="product.id">
        <ProductCard :product="product" />
      </div>
    </div>
    <!-- Pagination -->
    <div>
      <UPagination
        v-model="currentPage"
        :page-count="pageCount"
        :current-page.sync="currentPage"
        :total="filterProducts.length"
        :prev-button="{
          icon: 'i-heroicons-arrow-small-left-20-solid',
          label: 'Prev',
          color: 'gray',
        }"
        :next-button="{
          icon: 'i-heroicons-arrow-small-right-20-solid',
          trailing: true,
          label: 'Next',
          color: 'gray',
        }"
        :ui="{default:{prevButton:{color:'gray'}, nextButton:{color:'gray'}}}"
        @page-change="handlePageChange"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useProductStore } from "../../stores/products";
import { useCategoryStore } from "../../stores/category";

const itemPerPage = ref(6);
const currentPage = ref(1); 

const search = ref("");
const category = ref("");
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
        category.value = item.id;
      },
    },
  ]);
});

const pageCount = computed(() => {
  const totalProducts = filterProducts.value.length;
  return Math.max(itemPerPage.value, Math.ceil(totalProducts / itemPerPage.value));
});


const displayedProducts = computed(() => {
  const startIndex = (currentPage.value - 1) * itemPerPage.value;
  const endIndex = startIndex + itemPerPage.value;
  return filterProducts.value.slice(startIndex, endIndex);
});

const filterProducts = computed(() => {
  if (search.value) {
    return productStore.items.filter((item) => {
      return (
        item.name.toLowerCase().includes(search.value.toLowerCase()) ||
        (item.categoryId == category.value && category.value !== "")
      );
    });
  } else {
    if (category.value === "") {
      return productStore.items;
    } else {
      return productStore.items.filter((item) => {
        return item.categoryId == category.value;
      });
    }
  }
});


const handlePageChange = (newPage) => {
  currentPage.value = newPage;
};
</script>
