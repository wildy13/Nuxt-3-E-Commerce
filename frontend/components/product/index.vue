<template>
  <div>
    <div class="flex justify-between mx-4">
      <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
        <UButton
          color="white"
          label="Options"
          trailing-icon="i-heroicons-chevron-down-20-solid"
        />
      </UDropdown>
      <UInput
        icon="i-heroicons-magnifying-glass-20-solid"
        placeholder="Search..."
        v-model="searchQuery"
        trailing
      />
    </div>
    <div
      class="flex flex-col justify-center items-center md:grid md:grid-cols-2 xl:grid-cols-3"
    >
      <div v-for="product in filteredProducts" :key="product.id">
        <General :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: "",
      category: [], // Array untuk menyimpan kategori yang dipilih
      products: [
        {
          id: 1,
          name: "Product 1",
          image:
            "https://www.tradeinn.com/f/13977/139776682/innovation-it-performance-gen-4-512gb-m2-ssd-hard-drive-m.2.jpg",
          imageDescription:
            "Product 1 - This image shows the Innovation IT Performance Gen 4 512GB M.2 SSD Hard Drive.",
          price: "Rp. 100,000",
          category: "hardware",
          rating: "3.5",
        },
        {
          id: 2,
          name: "Product 2",
          image:
            "https://channellife.co.nz/uploads/story/2021/04/29/NV1_NVMe_SSD_Product_Image_02.webp",
          imageDescription:
            "Product 2 - This image displays the NV1 NVMe SSD Product.",
          price: "Rp. 150,000",
          category: "hardware",
          rating: "3.5",
        },
        {
          id: 3,
          name: "Product 3",
          image:
            "https://serverpartdeals.com/cdn/shop/products/SSDSC2KG038T8R-FS-g14-main_2000x2000_501bfe7a-d763-4cfa-b0a0-97ceb76e6175_2000x2000.jpg?v=1686173545",
          imageDescription:
            "Product 3 - This image showcases the SSDSC2KG038T8R-FS-g14.",
          price: "Rp. 75,000",
          category: "hardware",
          rating: "3.5",
        },
        {
          id: 4,
          name: "Product 4",
          image:
            "https://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpg",
          imageDescription:
            "Product 4 - This image represents a Laptop computer.",
          price: "Rp. 75,000",
          category: "device",
          rating: "4.5",
        },
        {
          id: 5,
          name: "Product 5",
          image:
            "https://m.media-amazon.com/images/I/61lCLrCtuhL._AC_UF894,1000_QL80_.jpg",
          imageDescription:
            "Product 5 - This image displays a product available on Amazon.",
          price: "Rp. 75,000",
          category: "device",
          rating: "4.5",
        },
        {
          id: 6,
          name: "Product 6",
          image:
            "https://ae01.alicdn.com/kf/Sc76395fbb89f4b4e9bb486635753f32dU/Mouse-Nirkabel-Razer-Pokemon-Gengar-Edition-Orochi-V2-Baru-Hingga-950hrs-Sakelar-Mouse-Mekanis-Tahan-Baterai.jpg",
          imageDescription:
            "Product 6 - This image features the Razer Pokemon Gengar Edition Orochi V2 Wireless Mouse.",
          price: "Rp. 75,000",
          category: "device",
          rating: "2.5",
        },
      ],
      items: [
        [
          {
            label: "All",
            click: () => {
              this.category = [];
            },
          },
          {
            label: "Hardware",
            click: () => {
              this.category = ["hardware"];
            },
          },
          {
            label: "Device",
            click: () => {
              this.category = ["device"];
            },
          },
        ],
      ],
    };
  },
  computed: {
    filteredProducts() {
      let filteredByCategory = [];
      /* Dropdown Query */
      if (this.category.length === 0) {
        filteredByCategory = this.products;
      } else {
        filteredByCategory = this.products.filter((product) =>
          this.category.includes(product.category)
        );
      }
      /* Search Query */
      if (this.searchQuery) {
        return filteredByCategory.filter(
          (product) =>
            product.name
              .toLowerCase()
              .includes(this.searchQuery.toLowerCase()) ||
            product.category
              .toLowerCase()
              .includes(this.searchQuery.toLowerCase())
        );
      } else {
        return filteredByCategory;
      }
    },
  },
};
</script>
