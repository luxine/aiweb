<template>
  <nav class="navbar">
    <div class="logo">
      <img src="https://via.placeholder.com/50" alt="Logo" />
      <span >匠极科技</span>
      <ul class="nav-links">
      <li><a href="#" @click="selectLink('Ai视频')" :class="{ active: selectedLink === 'Ai视频' }">Ai视频</a></li>
      <li><a href="#" @click="selectLink('Ai翻译')" :class="{ active: selectedLink === 'Ai翻译' }">Ai翻译</a></li>
      <li><a href="#" @click="selectLink('Ai绘图')" :class="{ active: selectedLink === 'Ai绘图' }">Ai绘图</a></li>
      <li><a href="#" @click="selectLink('Ai音乐')" :class="{ active: selectedLink === 'Ai音乐' }">Ai音乐</a></li>
      <li><a href="#" @click="selectLink('Ai机器人')" :class="{ active: selectedLink === 'Ai机器人' }">Ai机器人</a></li>
    </ul>
    </div>
   
    <ul class="nav-actions">
      <li><a href="#">收藏本站</a></li>
      <li><a href="#">联系客服</a></li>
      <li><a href="#">VIP会员</a></li>
      <li><a href="#" @click="selectLink('登录注册')" :class="{ active: selectedLink === '登录注册' }">登录/注册</a></li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const selectedLink = ref('Ai视频')

const selectLink = (link: string) => {
  selectedLink.value = link
}
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.logo {
  display: flex;
  align-items: center;
}

.logo img {
  width: 50px;
  height: 50px;
  margin-right: 10px;
  border-radius: 50%;
}

.logo span {
  font-size: 24px;
  font-weight: bold;
}

.nav-links,
.nav-actions {
  display: flex;
  list-style: none;
  font-size: 12px;
  gap: 20px;
}

.nav-links a{
  text-decoration: none;
  color: #333;
  font-size: 16px;
  transition: color 0.3s;
  font-size: 18px;
  margin: 0 20px;
}

.nav-actions a {
  text-decoration: none;
  color: #333;
  font-size: 16px;
  transition: color 0.3s;
  font-size: 12px;
}

.nav-links a:hover,
.nav-actions a:hover,
.nav-links a.active,
.nav-actions a.active {
  color: #007bff;
}

.nav-actions a {
  margin-left: 15px;
}
</style>
