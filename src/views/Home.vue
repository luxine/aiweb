<template>
  <div>
    <NavBar />
    <div class="router-view">
      <RouterView />
    </div>
    <FooterNva />
  </div>
</template>

<script setup lang="ts">
import NavBar from '@/components/globals/NavBar.vue'
import FooterNva from '@/components/globals/FooterNva.vue'
</script>

<style scoped>
.router-view{
  width: 80%;
  display: flex;
  margin: 0 auto;
}
</style>
