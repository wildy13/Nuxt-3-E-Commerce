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
    <USlideover v-model="isOpen" :overlay="false">  
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