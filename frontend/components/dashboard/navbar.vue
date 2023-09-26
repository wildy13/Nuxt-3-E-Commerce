<template>
  <div>
    <div class="flex justify-between items-center p-4">
      <UButton
        @click="isOpen = true"
        variant="link"
        color="white"
        icon="i-heroicons-bars-3"
      />
      <div>Welcome Back {{ data?.user?.username }}</div>
    </div>
    <USlideover v-model="isOpen" :overlay="false" :ui="{ background: 'bg-gray-900  text-white', base: 'w-2/4 sm:w-full'}">  
      <UButton @click="logout" label="Sign Out" icon="i-heroicons-arrow-right-on-rectangle" variant="link" color="white" class="absolute bottom-0" />
    </USlideover>
  </div>
</template>


<script setup>
  const { data, signOut } = useAuth();
  const isOpen = ref(false)

  const logout = async () => {
    await signOut({ callbackUrl: '/'});
  }
</script>