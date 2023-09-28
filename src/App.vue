<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <header>
    <router-link :to="'/'">Gorn frontend</router-link>
  </header>

  <RouterView />
</template>
