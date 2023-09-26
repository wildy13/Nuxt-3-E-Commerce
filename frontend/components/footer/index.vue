<template>
  <div
    class="p-5 bg-slate-200 border-t-2 border-slate-400"
  >
    <div class="flex justify-between items-center text-sm">
      <div class="flex gap-4">
        <div>CONTACT US</div>
        <div>ABOUT US</div>
      </div>
      <div class="flex gap-4">
        <a href="">
            <Icon icon="mdi:instagram" class="h-6 w-6" />
        </a>
        <a href="">
            <Icon icon="mdi:facebook" class="h-6 w-6" />
        </a>
        <a href="">
            <Icon icon="mdi:whatsapp" class="h-6 w-6" />
        </a>
        <a href="">
            <Icon icon="mdi:email" class="h-6 w-6" />
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