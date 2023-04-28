<script>
import { RouterView } from 'vue-router'
import Header from './components/Header.vue';
export default {
  components:{ RouterView, Header },
  data() {
    return {
      isitdark: false,
      color: "white",
      backgroundc: "Dark-Blue",

      background2: "Very-Dark-Blue",
      backgrounda : "Dark-Blue"
    }
  },
  methods: {
    changetolightorDark() {
      this.isitdark = !this.isitdark;
      if (this.isitdark) {
        this.color = "white"
        this.backgroundc = "Dark-Blue"

        this.background2 = "Very-Dark-Blue"
        this.backgrounda= "Dark-Blue"
      } else {
        this.color = "Dark-Blue"
        this.backgroundc = "white"

        this.background2 = "Dark-Gray"
        this.backgrounda = "white"
      }
    }
  },
}
</script>

<template>
  <Header :backgroundc="backgroundc" :color="color" @change-itsv="changetolightorDark"/>
  <RouterView :background2="background2" :color="color" :backgrounda="backgrounda" :backgroundc="backgroundc"/>
</template>

<style scoped>
*{
  padding:0;
  margin:0;
  box-sizing: border-box;
}
body{
  font-family: 'Nunito Sans', sans-serif;
}
</style>
