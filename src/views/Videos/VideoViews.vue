<template>

<div class="body-home">
  <div class="start-button" @click="handleClick">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit">
      <path d="M12 20h9"></path>
      <path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19 3 20l1-4 12.5-12.5z"></path>
    </svg>
    <span >开始创作</span>
  </div>
<div class="marketplace-title">
    <h2>创作者广场</h2>
</div>

<div class="marketplace" >
  <!-- ts-ignore -->
    <template  v-for=" i in 10" :key="i">
    <VideoCard
    v-for="(video, index) in videos" 
    :key="index"
    :thumbnail="video.thumbnail"
    :title="video.title"
    :description="video.description"
    :author="video.author"
    :authorAvatar="video.authorAvatar"
    :likes="video.likes"
    class="video-card"
    />
</template>
</div>

</div>
</template>

<script setup lang="ts" >
import VideoCard from '@/components/aivideos/VideoCard.vue';
import {  ref } from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter()

const handleClick = () => {
  router.push({
    name: 'editvideos'
  })
}
const videos = ref([
  {
    thumbnail: 'https://via.placeholder.com/300x150',
    title: '这里是视频介绍',
    description: 'Here is the video introduction Here is the video introduction Here is the video introduction Here is the video',
    author: 'solo',
    authorAvatar: 'https://via.placeholder.com/24',
    likes: 26
  },
  // 添加更多视频数据...
])
</script>

<style scoped>
.body-home{
  display: flex;
  flex-direction: column;
  margin-top: 2em;
}

.start-button {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color:  #b3e5ff;
  color: #007bff;
  font-size: 24px;
  font-weight: bold;
  padding: 20px;
  border-radius: 12px;
  margin-top: 2em;
  width: 95%;
  margin: 0 auto;
  cursor: pointer;
  transition: background-color 0.3s ease;
  transition: transform 0.3s ease;
}

.start-button:hover {
  background-color:#e6f7ff ;
  transform: scale(1.05);
}

.start-button svg {
  margin-right: 10px;
  width: 36px;
  height: 36px;
  color: #007bff;
}

.video-card{
  margin-left: 0.5em;
  margin-right: 0.5em;
}

.marketplace-title {
  text-align: left;
  margin-top: 3em;
  width: 50%;
  margin-left: 2em;
}

.marketplace {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  padding: 0 20px;
  width: 100%;
}
</style>

