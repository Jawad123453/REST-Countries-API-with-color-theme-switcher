<template>
  <div class="container sm:justify-between sm:items-center flex sm:mx-auto sm:px-7 px-4 py-5 sm:flex-row flex-col sm:gap-0 gap-5">
    <div class="px-5 py-2 flex items-center gap-3 rounded shadow" :class="`bg-${backgrounda}`">
      <i class="fa-solid fa-magnifying-glass" :class="`text-${color}`"></i>
      <input type="text" placeholder="Search for a country..." class="outline-none px-3 py-1" :class="`text-${color} bg-${backgrounda}`" v-model="data" @input="updateData">
    </div>
    <div class="flex items-center justify-between py-3 px-5 rounded w-48 relative cursor-pointer shadow" @click="cahngeitsvalue" :class="`text-${color} bg-${backgrounda}`">
      <p>{{ areavalue }}</p>
      <i class="fa-solid fa-angle-down"></i>
      <ul :class="`bg-${backgrounda}`" class="w-full absolute top-14 left-0 rounded p-3 cursor-auto z-10" v-if="seewhatinit">
        <li class="px-4 py-1 cursor-pointer transition-all duration-200" v-for="country in contryarray" :key="country" :class="`text-${color} hover:bg-${background2}`" @click="changethearea(country)"  v-on:click="updateareavalue">{{ country }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    background2: String,
    backgrounda: String,
    color: String
  },
  data() {
    return {
      contryarray: ["Africa", "Americas", "Asia", "Europe", "Oceania"],
      seewhatinit: false,
      data: '',
      areavalue: "Filter by Regain"
    }
  },methods: {
    updateData() {
      this.$emit('data-updated', this.data);
    },
    updateareavalue() {
      this.$emit('data-transfore', this.areavalue);
    },
    cahngeitsvalue() {
      this.seewhatinit = !this.seewhatinit;
    },
    changethearea(e) {
      this.areavalue=e
    }
  },
}
</script>

<style scoped>
</style>