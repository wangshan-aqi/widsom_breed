<template>
  <a-layout style="min-height: 100vh">
    <layout-sider-view />
    <a-layout>
      <layout-header-view />
      <a-layout-content style="margin: 0 16px">
        <breadcrumb-view></breadcrumb-view>
        <div :style="{ padding: '24px', background: '#fff' }">
          <router-view></router-view>
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
import LayoutSiderView from '@/layout/components/LayoutSiderView.vue';
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
