<template>
  <div class="h-96 w-full">
    <LMap
      style="height: 480px"
      :zoom="4"
      :center="[-6.180659168843213, 106.82840964553283]"
      :use-global-leaflet="false"
    >
      <LTileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&amp;copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        layer-type="base"
        name="OpenStreetMap"
      />
      <div v-for="(result, i) in data" :key="i">
        <LCircleMarker
          :lat-lng="[result.countryInfo.lat, result.countryInfo.long]"
          :radius="7"
          :color="'green'"
        >
          <LPopup>            
              <div class="flex">
                <div>
                  <p class="font-bold">{{ result.country }}</p>
                  <p class="text-sm">
                    Cases: {{ result.cases.toLocaleString() }}<br/>
                    Deaths: {{ result.deaths.toLocaleString() }}
                  </p>
                </div>
              </div>            
          </LPopup>
        </LCircleMarker>
      </div>
      <!-- <LCircleMarker
          :lat-lng="[30, -4]"
          :radius="7"
          :color="'green'"
        >
          <LPopup>            
              <div class="flex">
                <div>
                  <p class="font-bold">asdf
                  </p>
                </div>
              </div>            
          </LPopup>
        </LCircleMarker> -->
    </LMap>
  </div>
</template>

<script>

import axios from "axios";

export default {
  props: {
    data: {
      type: Array,
      required: true,
    }
  },
};
</script>
