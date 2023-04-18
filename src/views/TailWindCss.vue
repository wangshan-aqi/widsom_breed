<template>
  <div class="container">
    TailWindCss 配置，使用
    <p class="text-blue-100">{{ count }}</p>
    <x-button type="primary">测试</x-button>
  </div>
  <div>
    <p>测试二级页面</p>
    <router-view></router-view>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const count = ref(0);
</script>

<style scoped lang="less">
.p-color {
  color: @default-green;
}
</style>
