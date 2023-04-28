<template>
  <div v-if="!falsa" class="shadow" :class="`bg-${backgroundc}`">
    <div class="container flex items-center justify-between mx-auto py-5 sm:px-7 px-4" >
      <h1 class="sm:text-2xl font-bold" :class="`text-${color}`" >Where in the world?</h1>
      <button :class="`text-${color}`" @click="sendData"><i class="fa-solid fa-moon"></i>  Dark Mode</button>
    </div>
  </div>
  <div v-else>
    <div class="bg-Dark-Blue">hello</div>
    <div class="bg-Very-Dark-Blue">hello</div>
    <div class="bg-Very-Dark-Gray">hello</div>
    <div class="bg-Very-Light-Gray">hello</div>
    <div class="bg-white">hello</div>
  </div>
</template>

<script>
export default {
  props:{
    backgroundc:String,
    color: String
  },
  data() {
    return {
      falsa: false
    }
  },
  methods: {
    sendData() {
      this.$emit('change-itsv');
    }
  },
}
</script>

<style scoped>

</style>