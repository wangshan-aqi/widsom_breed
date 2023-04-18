<template>
  <a-breadcrumb separator=">" style="margin: 16px 0">
    <a-breadcrumb-item @click="goback">
      <span style="cursor: pointer">返回</span>
    </a-breadcrumb-item>
    <a-breadcrumb-item v-for="(item, index) in breadList" :key="item.name">
      <router-link
        v-if="item.name !== name && index !== 0"
        :to="{ path: item.path === '' ? '/' : item.path }"
      >
        {{ item.meta?.title }}
      </router-link>
      <span v-else>{{ item.meta?.title }}</span>
    </a-breadcrumb-item>
  </a-breadcrumb>
</template>

<script setup lang="ts">
import { onBeforeMount, ref, watch } from 'vue';
import {
  useRoute,
  useRouter,
  type RouteRecord,
  type RouteRecordName,
} from 'vue-router';
const route = useRoute();
const router = useRouter();
const breadList = ref<RouteRecord[]>([]);
const name = ref<RouteRecordName | null | undefined>();

/** 获取面包屑 */
const getBreadcrumb = () => {
  breadList.value = [];
  name.value = route.name;
  route.matched.forEach((item) => {
    item.path && breadList.value.push(item);
  });
};

/** 监视路由 */
watch(() => route.path, getBreadcrumb);

/** 初始化路由 */
onBeforeMount(() => {
  getBreadcrumb();
});

/** 点击了返回按钮，调用方法 router.back();*/
const goback = () => {
  //点击了返回按钮
  router.back();
};
</script>

<style></style>
