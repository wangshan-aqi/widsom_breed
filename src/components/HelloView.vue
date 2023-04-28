<template>
  <a-card>
    <a-row :gutter="20" align="middle" justify="center">
      <a-col>
        <a-checkbox v-model:checked="checked">Checkbox</a-checkbox>
      </a-col>
      <a-col>
        <a-button type="primary">Primary</a-button>
      </a-col>
      <a-col>
        <a-button>Default</a-button>
      </a-col>
      <a-col>
        <a-button type="dashed">Dashed</a-button>
      </a-col>
      <a-col>
        <a-button type="text">Text</a-button>
      </a-col>
      <a-col>
        <a-button type="link">Link</a-button>
      </a-col>
      <a-col>
        <a-checkable-tag checked>CheckableTag</a-checkable-tag>
      </a-col>
    </a-row>
  </a-card>
</template>
<script lang="ts">
// 引入配置
import { ref } from 'vue';

export default {
  setup() {
    const checked = ref(false);

    const info = () => {
      console.log('info');
    };
    return {
      checked,
      info,
    };
  },
};
</script>
