<template>
  <a-config-provider>
    <!-- <RouterView /> -->
    <Layout />
  </a-config-provider>
</template>
<script setup lang="ts">
import Layout from "@/layout/index.vue";
import { ConfigProvider } from "ant-design-vue";
import { reactive } from "vue";

// 直接官网复制的代码
const colorState = reactive({
  primaryColor: "#1890ff",
  errorColor: "#ff4d4f",
  warningColor: "#faad14",
  successColor: "#52c41a",
  infoColor: "#eeeeee"
});
ConfigProvider.config({
  theme: colorState
});
</script>
<style scoped></style>
