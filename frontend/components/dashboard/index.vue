<template>
  <div class="h-screen">
    <DashboardNavbar v-if="data.user.userId" />
    <div v-else>Ini dashboard User</div>
  </div>
</template>

<script setup>
  const { data } = useAuth();
</script>
