<script setup lang="ts">
import {ref} from "vue";
import txtData from "../tools/Data.ts";
const {setShowTxtFunction} = defineProps(["setShowTxtFunction"])

let txt = ref("")
function setTxt() {
  txtData.setData(txt.value)
  setShowTxtFunction()
}
</script>

<template>
  <div class="input-container">
    <input type="text" v-model="txt" class="new-input">
    <button @click="setTxt">确定</button>
    <button @click="txt = ''">取消</button>
  </div>
</template>

<style scoped>
.input-container {
  height: 20vh;
  line-height: 20vh;
  * {
    margin: 0 5px;
  }

  input {
    width: 20vw;
  }
}
</style>