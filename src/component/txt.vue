<script setup lang="ts">
import {onMounted} from "vue";

import txtData from "../tools/Data.ts";

function setDataStyling(id: string) {
  txtData.setColor(id)
  txtData.setUnderline(id)
}
onMounted(() => {
  for (let i of txtData.data) {
    txtData.setColor(i.id)
    txtData.setUnderline(i.id)
  }
})
</script>

<template>
  <div class="txt-container">
    <div id="txt" style="flex-grow: 1">
      <span v-for="data in txtData.data"><span :id="data.id" class="txt-data" @click="setDataStyling(data.id)">{{ data.txt }}</span></span>
    </div>
  </div>
</template>

<style scoped>
.txt-container {
  #txt {
    height: auto;
    font-size: 20px;
    line-height: normal;

    .txt-data {
      cursor: pointer;
    }
  }
}
</style>