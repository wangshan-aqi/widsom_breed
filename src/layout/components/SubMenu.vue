<template>
  <a-sub-menu :key="menuInfo.key">
    <template #icon>111</template>
    <template #title>{{ menuInfo.title }}</template>
    <template v-for="item in menuInfo.children" :key="item.key">
      <template v-if="!item.children">
        <a-menu-item :key="item.key" @click="handleToPath(item)">
          <template #icon> 222 </template>
          {{ item.title }}
        </a-menu-item>
      </template>
      <template v-else>
        <sub-menu :menu-info="item" :key="item.key" />
      </template>
    </template>
  </a-sub-menu>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
import { useRouter } from 'vue-router';

export interface MenuItem {
  key: string;
  title: string;
  path: string;
  children?: MenuItem[];
}
export interface Props {
  menuInfo: MenuItem;
}
const router = useRouter();

const props = defineProps<Props>();

const { menuInfo } = toRefs(props);

const handleToPath = (item: MenuItem) => {
  router.push(item.path);
};
</script>
