<template>
  <div
    class="p-2 fixed bottom-0 w-full z-10 bg-gradient-to-tr from-gray-900 to-slate-500"
  >
    <div class="flex justify-between items-center text-sm">
      <div class="flex gap-4">
        <div>CONTACT US</div>
        <div>ABOUT US</div>
      </div>
      <div class="flex gap-4">
        <a href="">
            <Icon icon="mdi:instagram" class="h-4 w-4 md:h-6 md:w-6" />
        </a>
        <a href="">
            <Icon icon="mdi:facebook" class="h-4 w-4 md:h-6 md:w-6" />
        </a>
        <a href="">
            <Icon icon="mdi:whatsapp" class="h-4 w-4 md:h-6 md:w-6" />
        </a>
        <a href="">
            <Icon icon="mdi:email" class="h-4 w-4 md:h-6 md:w-6" />
        </a>
      </div>
    </div>
  </div>
</template>


<script>
import { Icon } from "@iconify/vue";
export default {
  components: {
    Icon,
  },
};
</script>