<script>
import OutPutApp from "../components/OutPutApp.vue";

export default {
  components: { OutPutApp },
  props: {
    background2: String,
    backgrounda: String,
    backgroundc: String,
    color: String
  }
}

</script>
  
<template>
  
  <OutPutApp :background2="background2" :color="color" :backgrounda="backgrounda" :backgroundc="backgroundc"/>
</template>
