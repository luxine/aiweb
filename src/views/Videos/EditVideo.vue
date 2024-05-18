<template>
    <!-- 整体 -->
  <div class="global">
    <!-- 上面部分 -->
    <div class="bodyTop">
      <!-- 左面部分 -->
      <div class="TopLeft">
        <!-- 第一排文字 -->
        <div>
        <div class="tabs">
            <button class="tab selected">文生视频</button>
            <button class="tab">图生视频</button>
        </div>
        </div>
        <!-- 中间的功能说明部分 -->
        <div>
            <div class="function-description-container">
                <div class="title">功能说明</div>
                <div class="description">
                在线生成AI视频，图片生成视频，火爆全球的Sora模型，以及Runway Gen 2 影视级动画特效，热门的Pika模型
            </div>
  </div>
        </div>
        <!-- 下面的输入部分 -->
        <Taxtarea/>
      </div>

      <!-- 中间部分 -->
      <div class="TopMiddle">
        <!-- 上面的下拉选择框，使用div模拟 -->
        <div>
            <DivSelect/>
        </div>
        <!-- 提示字 -->
        <div></div>
        <!-- 选择风格部分 -->
        <div>
          <FgImg/>
        </div>
  
        <!-- 运动增强部分 -->
        <div>
            <Montion/>
        </div>
        
      </div>
  
      <!-- 右面部分 -->
      <div class="TopRight">
        <!-- 选择尺寸部分 -->
        <div>
          <SizeSelection />
        </div>
  
        <!-- 机位控制部分 -->
        <div>
          <!-- 上面一排 -->
            <Camera/>
        </div>
      </div>
    </div>
    <!-- 下面部分 -->
    <div>
      <!-- 左面部分使用div 作为蒙层占位 -->
      <div></div>
      <!-- 右面部分 -->
      <div>
        <!-- 生成视频按钮 -->
        <!-- <button>生成视频</button> -->
  
        <!-- 文字框 -->
  
      </div>
    </div>
  
  </div>
  
  </template>

<script setup lang="ts" >
import './editvideo.css'
import Taxtarea from '@/components/aivideos/editvideos/Taxtarea.vue'
import DivSelect from '@/components/aivideos/editvideos/DivSelect.vue'
import FgImg from '@/components/aivideos/editvideos/FgImg.vue'
import Montion from '@/components/aivideos/editvideos/Montion.vue'
import SizeSelection from '@/components/aivideos/editvideos/SizeSelection.vue'
import Camera from '@/components/aivideos/editvideos/Camera.vue'

</script>

<style lang="scss" scoped>
</style>

