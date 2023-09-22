import { ref } from "vue";
import { defineStore } from "pinia";
import { mande } from "mande";

export const useProductStore = defineStore("product", () => {
  const config = useRuntimeConfig();
  const url = config.public.apiUrl;
  
  const items = ref([]);
  async function getAll() {
    this.items = await mande(`${url}api/product`).get();
  }

  async function create(payload) {
    const newItem = await mande(`${url}api/product`).post(payload);
    this.items.push(newItem);
  }


  return {
    items, getAll, create
  }
});
