<template>
    <div class="start-button">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit">
        <path d="M12 20h9"></path>
        <path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19 3 20l1-4 12.5-12.5z"></path>
      </svg>
      <span>开始创作</span>
    </div>
  </template>
  
  <script setup lang="ts">
  </script>
  
  <style scoped>
  .start-button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #e6f7ff;
    color: #007bff;
    font-size: 24px;
    font-weight: bold;
    padding: 20px;
    border-radius: 8px;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .start-button:hover {
    background-color: #b3e5ff;
  }
  
  .start-button svg {
    margin-right: 10px;
    width: 36px;
    height: 36px;
    color: #007bff;
  }
  </style>
  