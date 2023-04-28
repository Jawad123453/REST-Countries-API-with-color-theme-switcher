<template>
  <RouterLink :to="`/${index}`">
  <div class="rounded cursor-pointer shadow" :class="`bg-${backgroundc}`">
    <img :src="country.flags.png" :alt="country.flags.alt" class=" bg-cover bg-center h-48 w-full">
    <div class="p-5" :class="`text-${color}`">
      <h1 class="font-bold text-xl pb-5">{{ country.name.common }}</h1>
      <p class="pb-1">Population: <span class="text-Dark-Gray">{{ country.population }}</span></p>
      <p class="pb-1">Region: <span class="text-Dark-Gray">{{ country.region }}</span></p>
      <p class="pb-1">Capital: <span class="text-Dark-Gray">{{ country.capital.join("") }}</span></p>
    </div>
  </div>
  </RouterLink>
</template>

<script>
import { RouterLink } from 'vue-router';
export default {
  props:{
    country: Object,
    index: Number,
    backgroundc: String,
    color: String
  },
  components:{ RouterLink }
}
</script>

<style scoped>

</style>