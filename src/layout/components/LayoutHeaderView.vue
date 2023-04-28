<template>
  <header class="l-header">
    <div>头部1111111</div>
    <div>
      <input
        type="color"
        :value="colorState.primaryColor"
        @input="(e) => onColorChange('primaryColor', e)"
      />
    </div>
  </header>
</template>

<script setup lang="ts">
import { useProvidStore } from '@/stores/provid';

import { ConfigProvider } from 'ant-design-vue';
import { storeToRefs } from 'pinia';
import { reactive } from 'vue';
const providStore = useProvidStore();
const { colorState } = storeToRefs(providStore);

providStore.$subscribe((mutations, state) => {
  ConfigProvider.config({
    theme: { ...state.colorState },
  });
  console.log(state.colorState, 'state.colorState');
});

const colorState1 = reactive({
  primaryColor: '#1890ff',
  errorColor: '#ff4d4f',
  warningColor: '#faad14',
  successColor: '#52c41a',
  infoColor: '#eeeeee',
});
const onColorChange = (type: string, e: Event) => {
  // console.log(type, (e.target as HTMLInputElement).value, '颜色');
  Object.assign(colorState1, {
    [type]: (e.target as HTMLInputElement).value,
  });

  providStore.updateTheme(colorState1);
};
</script>

<style lang="less" scoped>
.l-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  background: #fff;
  box-shadow: 0 2px 8px #f0f1f2;
  box-sizing: border-box;
}
</style>
