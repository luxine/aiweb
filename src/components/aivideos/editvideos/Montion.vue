<template>
    <div class="motion-enhance-container">
      <div class="motion-enhance-header">
        <div class="motion-enhance-label">运动增强</div>
        <div class="motion-enhance-controls">
          <button class="control-button" @click="decreaseValue">-</button>
          <span class="value">{{ value }}</span>
          <button class="control-button" @click="increaseValue">+</button>
        </div>
      </div>
      <!-- <input type="range" min="1" max="10" v-model="value" class="slider" /> -->
      <el-slider v-model="value"  max="10" />
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const value = ref(5);
  
  const decreaseValue = () => {
    if (value.value > 1) value.value--;
  };
  
  const increaseValue = () => {
    if (value.value < 10) value.value++;
  };
  </script>
  
  <style scoped>
  .motion-enhance-container {
    width: 100%;
    margin-top: 20px;
  }
  
  .motion-enhance-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }
  
  .motion-enhance-label {
    font-size: 14px;
    font-weight: bold;
  }
  
  .motion-enhance-controls {
    display: flex;
    align-items: center;
  }
  
  .control-button {
    width: 30px;
    height: 30px;
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  
  .value {
    margin: 0 10px;
    font-size: 14px;
    width: 20px;
    text-align: center;
  }
  
  .slider {
      -webkit-appearance: none;
      width: 100%;
      height: 5px;
      background:  #87ceeb;
      background-color: #87ceeb;
      outline: none;
      opacity: 0.7;
      transition: opacity .15s ease-in-out;
      border-radius: 5px;
}

  .slider:hover {
      opacity: 1;
  }

  .slider::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: #87ceeb;
      background-color: #87ceeb;
      cursor: pointer;
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  }

  .slider::-moz-range-thumb {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: #87ceeb;
      background-color: #87ceeb;
      cursor: pointer;
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  }


  </style>
  