<template>
    <div class="function-description-container">
      <textarea
        v-model="description"
        @input="updateCharCount"
        placeholder="一句话描述您的视频主题，场景，风格等！"
        rows="4"
        maxlength="300"
      ></textarea>
      <div class="input-footer">
        <button class="optimize-prompt">优化提示词</button>
        <span class="char-count">{{ charCount }}/300</span>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const description = ref('');
  const charCount = ref(0);
  
  const updateCharCount = () => {
    charCount.value = description.value.length;
  };
  </script>
  
  <style scoped>
  .function-description-container {
    background-color: #f5f5f5;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-bottom: 20px;
  }
  
  .title {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .description {
    font-size: 14px;
    color: #333;
    margin-bottom: 20px;
  }
  
  textarea {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 10px;
    resize: none;
  }
  
  .input-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .optimize-prompt {
    padding: 10px 20px;
    border: 1px solid #007bff;
    background-color: #007bff;
    color: white;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .char-count {
    color: #999;
  }
  </style>
  