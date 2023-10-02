<template>
  <div class="h-screen">
    <DashboardNavbar v-if="data.user.roleId == 1" />
    <div v-else>Ini dashboard User</div>
  </div>
</template>

<script setup>
  const { data } = useAuth();
</script>
