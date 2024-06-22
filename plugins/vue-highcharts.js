import Highcharts from 'highcharts'
import VueHighcharts from 'vue-highcharts'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueHighcharts, { Highcharts })
})