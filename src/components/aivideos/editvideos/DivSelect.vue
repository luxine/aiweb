<template>
    <div class="dropdown-container" @click="toggleDropdown">
      <div class="dropdown">
        {{ selectedOption }}
        <span class="arrow" :class="{ open: isOpen }">▼</span>
      </div>
      <div v-if="isOpen" class="dropdown-menu">
        <div class="dropdown-item" v-for="option in options" :key="option" @click.stop="selectOption(option)">
          {{ option }}
        </div>
      </div>
    </div>
    <div class="i">此处为选项的说明文字，记得修改</div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const isOpen = ref(false);
  const selectedOption = ref('Runway');
  const options = ref(['Option 1', 'Option 2', 'Option 3']);
  
  const toggleDropdown = () => {
    isOpen.value = !isOpen.value;
  };
  
  const selectOption = (option: string) => {
    selectedOption.value = option;
    isOpen.value = false;
  };
  </script>
  
  <style scoped>
  .i{
    font-size: 12px;
    padding-top: 1em;
  }

  .dropdown-container {

    position: relative;
    cursor: pointer;
  }
  
  .dropdown {
    background: linear-gradient(to right, #8ec5fc, #e0c3fc);
    padding: 10px;
    border-radius: 4px;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .arrow {
    transition: transform 0.3s ease;
  }
  
  .arrow.open {
    transform: rotate(180deg);
  }
  
  .dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    margin-top: 5px;
  }
  
  .dropdown-item {
    padding: 10px;
    cursor: pointer;
  }
  
  .dropdown-item:hover {
    background-color: #f5f5f5;
  }
  </style>
  