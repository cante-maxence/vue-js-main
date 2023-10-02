<script setup>
import DefaultLayout from '@/components/layouts/DefaultLayout.vue'
</script>
<template>
  <DefaultLayout>
    <template #header> Nouveau Header </template>
    Page about
    <template #aside> aside about </template>
    <template #footer> Nouveau Footer </template>
  </DefaultLayout>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
