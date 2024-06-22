<template>
  <div class="bg-white shadow-md rounded p-4">
    <highcharts ref="chart" :options="chartOptions"></highcharts>
  </div>
</template>

<script>
import Highcharts from "highcharts";
import VueHighcharts from "vue-highcharts";
import axios from "axios";

export default {
  name: "ChartCard",
  data() {
    return {
      chartOptions: {
        chart: {
          type: "bar",
        },
        title: {
          text: "COVID-19 Deaths Statistics by Continents",
        },
        xAxis: {
          categories: ["Deaths"],
        },
        yAxis: {
          title: {
            text: "Count",
          },
        },
        series: [],
      },
    };
  },
  async asyncData() {
    try {
      const response = await axios.get(
        "https://disease.sh/v3/covid-19/continents"
      );
      const mappedData = response.data.map((item) => ({
        name: item.continent,
        data: [item.deaths],
      }));
      return { chartOptions: { ...this.chartOptions, series: mappedData } };
    } catch (error) {
      console.error(error);
      return { chartData: [] };
    }
  },
  created() {
    this.$options.asyncData().then(data => {
      this.chartOptions.series = data.chartOptions.series;
    }).catch(error => {
      console.error(error);
    });
  },
};
</script>
