// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";
export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    "@": resolve(__dirname, "/"),
  },
  css: [
    "~/assets/main.scss",
    "leaflet/dist/leaflet.css"

  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  plugins: [
    "~/plugins/vue-highcharts.js"
  ],
  build: {
    transpile: ["vue-highcharts"],
  },
  modules: ["nuxt3-leaflet"],
});
