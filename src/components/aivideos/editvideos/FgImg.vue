<template>
    <div class="style-selection-container">
      <div class="style-title">选择风格</div>
      <div class="styles">
        <div class="style-item">
          <div class="style-image" style="background-image: url('/path/to/image1.jpg');"></div>
          <div class="style-text">国风</div>
        </div>
        <div class="style-item">
          <div class="style-image" style="background-image: url('/path/to/image2.jpg');"></div>
          <div class="style-text">二次元</div>
        </div>
        <div class="style-item">
          <div class="style-image" style="background-image: url('/path/to/image3.jpg');"></div>
          <div class="style-text">欧美</div>
        </div>
        <div class="style-item">
          <div class="style-image" style="background-image: url('/path/to/image4.jpg');"></div>
          <div class="style-text">纪实</div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  // 此处可以导入图片路径
  </script>
  
  <style scoped>
  .style-selection-container {
    width: 100%;
    margin-top: 20px;
  }
  
  .style-title {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .styles {
    display: flex;
    justify-content: space-between;
  }
  
  .style-item {
    text-align: center;
  }
  
  .style-image {
    width: 80px;
    height: 80px;
    border-radius: 8px;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
    background-color: #fcdbdb;
  }
  
  .style-text {
    font-size: 14px;
    color: #333;
  }
  </style>
  