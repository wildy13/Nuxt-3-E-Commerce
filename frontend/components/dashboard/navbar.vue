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
    <USlideover v-model="isOpen" :overlay="false" :ui="{ background: 'bg-gray-900  text-white', width: 'w-2/4 sm:w-full'}" prevent-close>
      <UCard class="flex flex-col flex-1" :ui="{ body: { base: 'flex-1' }, ring: '', divide: 'divide-y divide-gray-700 dark:divide-gray-800' }">
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-base font-semibold leading-6 text-white">
              Slideover
            </h3>
            <UButton color="gray" variant="link" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="isOpen = false" />
            <UButton @click="logout" label="Sign Out" icon="i-heroicons-arrow-right-on-rectangle" variant="link" color="white" class="absolute bottom-0" />
          </div>
        </template>
        <Placeholder class="h-full" />
      </UCard>
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