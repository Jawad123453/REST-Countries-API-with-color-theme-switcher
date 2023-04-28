<template>
  <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 sm:px-7 px-4sm:px-7 px-4 container mx-auto justify-between gap-10 pb-10" v-if="!areavalue">
    <CardVue v-if="countries.length > 0" v-for="(country,index) in changewhatinside" :key="index" :country="country" :index="index" :color="color" :backgroundc="backgroundc"/>
    <p v-if="countries.length == 0" :class="`text-${color}`">Loading...</p>
  </div>

  <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 sm:px-7 px-4sm:px-7 px-4 container mx-auto justify-between gap-10 pb-10" v-if="areavalue">
      <CardVue v-if="countries.length > 0" v-for="(country, index) in changeonclick" :key="index" :country="country" :index="index" :color="color" :backgroundc="backgroundc"/>
    </div>
</template>

<script>
import CardVue from './Card.vue';
import axios from 'axios';

export default {
  components: { CardVue },
  props: {
    backgroundc: String,
    color: String,
    receivedData: String,
    areavalue:String
  },
  data() {
    return {
      countries: [],
      countries2: [],
    };
  },
  mounted() {
    axios.get('https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital')
      .then(response => {
        this.countries = response.data;
        this.countries2 = response.data;
      })
      .catch(error => {
        console.error(error);
      });
  },
  computed:{
    changewhatinside() {
      const receivedData = this.receivedData.toLowerCase();
      this.countries = this.countries2;
      this.countries = this.countries.filter((contry) => {
        return contry.name.common.toLowerCase().includes(receivedData);
      })
      return this.countries
    },
    changeonclick() {
      const anydataholder = this.areavalue.toLowerCase();
      this.countries = this.countries2;
      this.countries = this.countries.filter((contry) => {
        return contry.region.toLowerCase().includes(anydataholder);
      })
      return this.countries
    },
  }
}
</script>

<style scoped>

</style>