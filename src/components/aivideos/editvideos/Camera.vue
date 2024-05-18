<template>
    <div class="camera-control-container">
      <div class="control-title">机位控制（可不选）</div>
      <div class="control-section">
        <div class="control-row">
          <div class="control-group">
            <div class="control-label">左右</div>
            <div class="control-buttons">
              <button class="control-button">&larr;</button>
              <button class="control-button">&rarr;</button>
            </div>
          </div>
          <div class="control-group">
            <div class="control-label">上下</div>
            <div class="control-buttons">
              <button class="control-button">&uarr;</button>
              <button class="control-button">&darr;</button>
            </div>
          </div>
        </div>
        <div class="control-row">
          <div class="control-group">
            <div class="control-label">旋转</div>
            <div class="control-buttons">
              <button class="control-button">&#8634;</button>
              <button class="control-button">&#8635;</button>
            </div>
          </div>
          <div class="control-group">
            <div class="control-label">缩放</div>
            <div class="control-buttons">
              <button class="control-button">-</button>
              <button class="control-button">+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  // This script setup is empty as we are not using any reactive properties or methods
  </script>
  
  <style scoped>
  .camera-control-container {
    margin-top: 20px;
  }
  
  .control-title {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .control-section {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  .control-row {
    display: flex;
    justify-content: space-between;
  }
  
  .control-group {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  
  .control-label {
    font-size: 14px;
    margin:1em;
    margin-bottom: 5px;
  }
  
  .control-buttons {
    display: flex;
    gap: 5px;
  }
  
  .control-button {
    width: 6em;
    height: 40px;
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .control-button:hover {
    background-color: #e0e0e0;
  }
  </style>
  