<template>
  <Flag :color="color" :background2="background2" :backgroundc="backgroundc"/>
</template>

<script>
import Flag from '../components/Flag.vue';
export default {
  components:{ Flag },
  props: {
    color: String,
    background2:String,
    backgroundc: String
  }
}
</script>

<style scoped>
</style>