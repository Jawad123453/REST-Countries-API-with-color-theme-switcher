<template>
  <div  class="big-screen py-12" :class="`bg-${background2}`">
    <div class="container mx-auto sm:px-7 px-4">
    <RouterLink v-if="countries.length > 0" to="/" class="text-white flex gap-4 items-center shadow w-fit px-6 py-2 rounded" :class="`text-${color} bg-${backgroundc}`">
      <i class="fa-solid fa-arrow-left-long" :class="`text-${color}`"></i> <span :class="`text-${color}`">Back</span>
    </RouterLink>
      <div v-if="countries.length > 0" class="flex lg:justify-between items-center mt-12 lg:flex-row flex-col lg:gap-20">
        <img :src="countries[id].flags.png" alt=""
          class="lg:basis-3/6 w-full bg-cover bg-no-repeat">
        <div class="lg:basis-3/6 w-full">
          <h1 class="font-bold text-2xl mb-5 lg:mt-0 mt-7" :class="`text-${color}`">{{ countries[id].name.common }}</h1>
          <div class="flex mb-10 sm:flex-row flex-col gap-10">
            <div class="flex gap-3 flex-col">
              <p class="text-sm" :class="`text-${color}`">Native Name: <span class="text-Dark-Gray">{{ countries[id].name.official }}</span></p>
              <p class="text-sm" :class="`text-${color}`">Population: <span class="text-Dark-Gray">{{ countries[id].population }}</span></p>
              <p class="text-sm" :class="`text-${color}`">Region: <span class="text-Dark-Gray">{{ countries[id].region }}</span></p>
              <p class="text-sm" :class="`text-${color}`">Sub Region: <span class="text-Dark-Gray">{{ countries[id].subregion }}</span></p>
              <p class="text-sm" :class="`text-${color}`">Capital: <span class="text-Dark-Gray">{{ countries[id].capital.join("") }}</span></p>
            </div>
            <div class="flex gap-3 flex-col">
              <p class="text-sm" :class="`text-${color}`">Top Level Domain: <span class="text-Dark-Gray">No Data About It</span></p>
              <p class="text-sm" :class="`text-${color}`">Currencies: <span class="text-Dark-Gray">{{ CurrenciesValue }}</span></p>
              <p class="text-sm" :class="`text-${color}`">Language: <span class="text-Dark-Gray">{{ languagesValue }}</span></p>
            </div>
          </div>
          <div>
            <div class="text-sm flex sm:flex-row gap-2 flex-col sm:items-center lg:flex-col lg:items-start" :class="`text-${color}`">
            <p>Border Countries :</p>
            <div class="flex items-center flex-wrap gap-3">
              <span class="py-1 px-7 rounded shadow-md" v-if="countries[id].borders.length > 0" v-for="smallones in countries[id].borders" :key="smallones" :class="`bg-${background2}`">{{ smallones }}</span>
              <span v-else>There is none</span>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else :class="`text-${color}`" >Loading...</div>
    </div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';
import axios from 'axios';
export default {
  components: { RouterLink },
  props: {
    color: String,
    background2: String,
    backgroundc:String
  },
  data() {
    return {
      countries: [],
      id: null
    };
  },
  computed: {
    languagesValue() {
      if (this.countries.length > 0) {
        const firstValue = Object.values(this.countries[this.id].languages)[0];
        return firstValue;
      }
    },
    CurrenciesValue() {
      if (this.countries.length > 0) {
        const firstValue = Object.values(this.countries[this.id].currencies)[0].name;
        return firstValue;
      }
    }
  },
  mounted() {
    this.id = this.$route.params.id;
    axios.get('https://restcountries.com/v3.1/all?fields=name,flags,population,region,subregion,capital,languages,currencies,borders,topleveldomain')
      .then(response => {
        this.countries = response.data;
      })
      .catch(error => {
        console.error(error);
      });
  }
};
</script>

<style scoped>
.big-screen {
  min-height: calc(100vh - 72px);
}

@media (max-width:640px) {
  .big-screen {
    min-height: calc(100vh - 64px)
  }
}
</style>