<template>
  <div class="container">
    TailWindCss 配置，使用
    <p class="text-blue-100">{{ count }}</p>
    <a-button type="primary">测试</a-button>
    <div class="content-wrap">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const count = ref(0);
</script>

<style scoped lang="less">
.container {
  .content-wrap {
    overflow: hidden;
    height: 500px;
  }
}
.p-color {
  color: @default-green;
}
</style>
