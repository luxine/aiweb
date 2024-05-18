<template>
    <div class="size-selection-container">
      <div class="size-title">选择尺寸</div>
      <div class="size-options">
        <div
          v-for="(option, index) in sizeOptions"
          :key="index"
          :class="['size-option', { selected: selectedSize === option.value }]"
          @click="selectSize(option.value)"
        >
          <div class="size-rectangle-container">
            <div :class="['size-rectangle', option.class]"></div>
          </div>
          <div class="size-label">{{ option.label }}</div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const sizeOptions = [
    { label: '1:1', value: '1:1', class: 'size-1-1' },
    { label: '4:3', value: '4:3', class: 'size-4-3' },
    { label: '3:4', value: '3:4', class: 'size-3-4' },
    { label: '16:9', value: '16:9', class: 'size-16-9' },
    { label: '9:16', value: '9:16', class: 'size-9-16' }
  ];
  
  const selectedSize = ref('1:1');
  
  const selectSize = (size: string) => {
    selectedSize.value = size;
  };
  </script>
  
  <style scoped>
  .size-selection-container {
    margin-top: 0px;
  }
  
  .size-title {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .size-options {
    display: flex;
    justify-content: space-evenly;
  }
  
  .size-option {
    width: 60px;
    height: 100px;
    background-color: #f9f9f9;
    border: 1px solid #ccc;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    transition: border-color 0.3s;
  }
  
  .size-option.selected {
    border-color: #007bff;
  }
  
  .size-rectangle-container {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .size-rectangle {
    border: 1px solid #333;
  }
  
  .size-1-1 {
    width: 30px;
    height: 30px;
  }
  
  .size-4-3 {
    width: 40px;
    height: 30px;
  }
  
  .size-3-4 {
    width: 30px;
    height: 40px;
  }
  
  .size-16-9 {
    width: 50px;
    height: 28px;
  }
  
  .size-9-16 {
    width: 28px;
    height: 50px;
  }
  
  .size-label {
    font-size: 14px;
    color: #333;
    /* margin-top: 10px; */
    margin-bottom: 1em;
  }
  </style>
  