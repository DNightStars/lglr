<script setup lang="ts">
import Txt from "./component/txt.vue";
import Input from "./component/input.vue";
import txtData from "./tools/Data.ts";
import {ref} from "vue";
import StylingTools from "./component/styling-tools.vue";

let showTxt = ref(false)
function setShowTxt(): void {
  showTxt.value = (txtData.txt !== "")
}
</script>

<template>
  <div>
    <div v-if="showTxt" class="txt-styling-tools">
      <StylingTools/>
      <Txt/>
    </div>
    <Input v-else :setShowTxtFunction="setShowTxt"/>
  </div>
</template>

<style scoped>
.txt-styling-tools {
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  justify-content: center;
}
</style>
