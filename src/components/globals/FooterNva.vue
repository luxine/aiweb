<template>
    <footer class="footer">
      <div class="footer-content">
        <h1>MARS.AI</h1>
        <p>studio Mars.AI提供当前流行的AI教程及资源下载，包括AI换脸、AI绘画、数字人直播、ChatGPT等方面的内容，持续更新中，敬请期待！</p>
      </div>
      <ul class="footer-links">
        <li><a href="#">友链申请</a></li>
        <li><a href="#">免责声明</a></li>
        <li><a href="#">广告合作</a></li>
        <li><a href="#">关于我们</a></li>
      </ul>
    </footer>
  </template>
  
  <script setup lang="ts">
  </script>
  
  <style scoped>
  .footer {
    background-color: #000;
    color: #fff;
    padding: 40px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .footer-content {
    margin-bottom: 20px;
  }
  
  .footer-content h1 {
    margin: 0;
    font-size: 36px;
    font-weight: bold;
  }
  
  .footer-content p {
    margin: 10px 0 0;
    font-size: 16px;
    line-height: 1.5;
  }
  
  .footer-links {
    list-style: none;
    padding: 0;
    display: flex;
    gap: 30px;
  }
  
  .footer-links a {
    text-decoration: none;
    color: #fff;
    font-size: 16px;
    transition: color 0.3s;
  }
  
  .footer-links a:hover {
    color: #007bff;
  }
  </style>
  