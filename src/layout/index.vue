<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
      <div class="logo"></div>
    </a-layout-sider>
    <a-layout>
      <layout-header-view />
      <a-layout-content style="margin: 0 16px">
        <breadcrumb-view></breadcrumb-view>
        <div
          :style="{ padding: '24px', background: '#fff', minHeight: '360px' }"
        >
          Bill is a cat.
        </div>
      </a-layout-content>
      <layout-footer-view />
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import BreadcrumbView from '@/layout/components/BreadcrumbView.vue';
import LayoutFooterView from '@/layout/components/LayoutFooterView.vue';
import LayoutHeaderView from '@/layout/components/LayoutHeaderView.vue';
// import {
//   PieChartOutlined,
//   DesktopOutlined,
//   UserOutlined,
//   TeamOutlined,
//   FileOutlined,
// } from '@ant-design/icons-vue';
import { reactive, ref } from 'vue';

const collapsed = ref<boolean>(false);
// const selectedKeys = ref<string[]>(["1"]);
const a = reactive({
  b: 1,
});
console.log(a.b);
</script>
<style>
#components-layout-demo-side .logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}

.site-layout .site-layout-background {
  background: #fff;
}
[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
}
</style>
