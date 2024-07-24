<script setup lang="ts">
import txtData from "../tools/Data.ts";
import { ElMessage } from 'element-plus'
import {ref} from "vue";

let color = ref("#" + txtData.color);
let underline = ref(false)

function changeColor() {
  txtData.changeColor(color.value.slice(1, ));
}

function setUnderline () {
  txtData.underline = !underline.value;
}

function copyData() {
  navigator.clipboard.writeText(txtData.getData()).then(function() {
    ElMessage.success("复制成功");
  });
}
</script>

<template>
  <div id="tools">
    <div class="input-container">
      <span>选择颜色:</span>
      <input type="color" v-model="color" @change="changeColor" id="colorPicker"/>
    </div>
    <div class="input-container">
      <span>下划线:</span>
      <input type="checkbox" v-model="underline" class="new-input" @click="setUnderline"/>
    </div>
    <div class="input-container">
      <button @click="copyData">
        复制
      </button>
    </div>
  </div>
</template>

<style scoped>
#tools {
  width: 30vw;
  display: flex;
  display: -webkit-flex;
  flex-direction: row;
  justify-content: center;

  .input-container {
    flex-grow: 1;
    span {
      margin-right: 10%;
    }

    #colorPicker {
      width: 20px;
      height: 25px;
      padding: 0;
      margin: 0;
      vertical-align: middle;
      border: rgba(0, 0, 0, 0);
      background-color: rgba(0, 0, 0, 0);
    }
  }
}
</style>