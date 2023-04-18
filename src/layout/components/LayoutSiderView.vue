<template>
  <div class="sider-wrapper">
    <a-layout-sider
      v-model:collapsed="state.collapsed"
      :trigger="null"
      collapsible
      class="sider"
    >
      <div class="logo">
        <img src="@/assets/logo.svg" height="32" alt="" />
      </div>
      <a-menu
        v-model:openKeys="state.openKeys"
        v-model:selectedKeys="selectedKeys"
        mode="inline"
        theme="dark"
      >
        <template v-for="item in list" :key="item.key">
          <template v-if="!item.children">
            <a-menu-item :key="item.key" @click="handleToPath(item)">
              <template #icon>
                <PieChartOutlined />
              </template>
              {{ item.title }}
            </a-menu-item>
          </template>
          <template v-else>
            <sub-menu :key="item.key" :menu-info="item" />
          </template>
        </template>
      </a-menu>
    </a-layout-sider>
    <div class="trigger-wrapper">
      <div @click="toggleCollapsed" class="trigger">
        <span v-if="!state.collapsed">&lt;</span>
        <span v-else>&gt;</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PieChartOutlined } from '@ant-design/icons-vue';
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import SubMenu, { type MenuItem } from './SubMenu.vue';
const router = useRouter();

const selectedKeys = ref<string[]>(['1']);
const state = reactive({
  collapsed: false,
  selectedKeys: ['1'],
  openKeys: ['sub1'],
  preOpenKeys: ['sub1'],
});
const list = [
  {
    key: '1',
    path: '/home',
    title: '首页',
  },
  {
    key: '2',
    title: '关于',
    path: '/about',
    children: [
      {
        key: '2.1',
        title: '关于二级',
        path: '/about/test',
        children: [
          { key: '2.1.1', path: '/about/test/temp', title: '关于三级' },
        ],
      },
    ],
  },
];

const toggleCollapsed = () => {
  state.collapsed = !state.collapsed;
  state.openKeys = state.collapsed ? [] : state.preOpenKeys;
};
const handleToPath = (item: MenuItem) => {
  router.push(item.path);
};
</script>

<style lang="less" scoped>
.sider-wrapper {
  position: relative;
  min-height: 100vh;
}
.sider {
  position: relative;
  min-height: 100vh;
  z-index: 10;
}
.logo {
  height: 32px;
  margin: 16px;
  background: rgba(238, 151, 222, 0.3);
  text-align: center;
}

.trigger {
  width: 18px;
  height: 50px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border: none;
  background: rgb(63, 198, 242, 0.3);
  color: #000;
  font-size: 20px;
  text-align: center;
  line-height: 50px;
  transition: all 0.3s;
  &:hover {
    background: rgba(63, 198, 242, 0.8);
    color: #000;
  }
}
.trigger-wrapper {
  position: absolute;
  top: 50%;
  z-index: 9;
  height: 50px;
  right: -12px;
  margin: 0 6px;
  cursor: pointer;
  &:hover {
    right: -23px;
  }
}
</style>
