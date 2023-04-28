<template>
  <div class="big-screen" :class="`bg-${background2}`">
    <SearthInput :color="color" :background2="background2" :backgrounda="backgrounda" @data-updated="onDataUpdated"  v-on:data-transfore="onAreaUpdated"/>
    <Cards :backgroundc="backgroundc" :color="color" :receivedData="receivedData" :areavalue="areavalue"/>
  </div>
</template>

<script>
import SearthInput from "../components/SeartchInput.vue"
import Cards from "../components/Cards.vue"

export default {
  components: { SearthInput, Cards },
  props: {
    background2: String,
    backgroundc: String,
    backgrounda: String,
    color:String
  },
  data() {
    return {
      receivedData: "",
      areavalue:""
    }
  },
  methods: {
    onDataUpdated(data) {
      this.receivedData = data;
    },
    onAreaUpdated(data2) {
      this.areavalue = data2;
    }
    
  },
}

</script>

<style scoped>
.big-screen{
  min-height:calc(100vh - 72px)
}
@media (max-width:640px) {
  .big-screen{
    min-height:calc(100vh - 64px)
  }
}
</style>