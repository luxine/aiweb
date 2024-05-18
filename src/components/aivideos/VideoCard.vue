<template>
  <div class="card">
    <div class="thumbnail">
      <img :src="thumbnail" alt="Video Thumbnail" />
    </div>
    <div class="card-content">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
      <div class="card-footer">
        <div class="author">
          <img :src="authorAvatar" alt="Author" class="author-avatar" />
          {{ author }}
        </div>
        <div class="likes">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
          {{ likes }}
        </div>
      </div>
      <button>同款视频</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  thumbnail: String,
  title: String,
  description: String,
  author: String,
  authorAvatar: String,
  likes: Number
})
</script>

<style scoped>
.card {
  width: 300px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: scale(1.05);
}

.thumbnail img {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

.card-content {
  padding: 16px;
}

.card-content h3 {
  font-size: 16px;
  margin: 0;
  margin-bottom: 8px;
}

.card-content p {
  font-size: 14px;
  color: #666;
  margin: 0;
  margin-bottom: 16px;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.card-footer .author {
  display: flex;
  align-items: center;
}

.card-footer .author-avatar {
  width: 24px;
  height: 24px;
  background-color: #ccc;
  border-radius: 50%;
  margin-right: 8px;
}

.card-footer .likes {
  display: flex;
  align-items: center;
}

.card-footer .likes svg {
  margin-right: 4px;
  color: #666;
}

button {
  background-color: #e6f7ff;
  border: none;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  font-size: 14px;
  color: #333;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #b3e5ff;
}
</style>
