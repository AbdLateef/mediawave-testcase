<template>
  <div class="container mx-auto p-4 pt-6 md:p-6 lg:p-12">   
    <div class="mt-12">
      <h3 class="text-lg font-bold mb-2">The spread of COVID-19 in the world wide</h3>
      <client-only>
        <Map :data="mapData" />
      </client-only>
    </div>
  </div>
</template>

<script>

import Map from "~/components/Map.vue";
import axios from "axios";

export default {
  components: { Map },
  data() {
    return {
      mapData: []
    }
  },
  async created() {
    try {
      const response = await axios.get('https://disease.sh/v3/covid-19/countries')
      this.mapData = response.data
    } catch (error) {
      console.error(error)
    }
  }
}

</script>
