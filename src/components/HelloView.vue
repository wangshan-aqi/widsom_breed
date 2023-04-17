<template>
  <a-card>
    <a-row justify="center">
      <a-col>
        <input
          type="color"
          :value="colorState.primaryColor"
          @input="(e) => onColorChange('primaryColor', e)"
        />
      </a-col>
    </a-row>
    <br />
    <a-row :gutter="20" align="middle" justify="center">
      <a-col>
        <a-checkbox v-model:checked="checked">Checkbox</a-checkbox>
      </a-col>
      <a-col>
        <x-button type="primary">Primary</x-button>
      </a-col>
      <a-col>
        <a-button>Default</a-button>
      </a-col>
      <a-col>
        <x-button type="dashed">Dashed</x-button>
      </a-col>
      <a-col>
        <x-button type="text">Text</x-button>
      </a-col>
      <a-col>
        <x-button type="link">Link</x-button>
      </a-col>
      <a-col>
        <a-button type="primary" @click="info">HelloWorld</a-button>
      </a-col>
      <a-col>
        <a-checkable-tag checked>CheckableTag</a-checkable-tag>
      </a-col>
    </a-row>
  </a-card>
</template>
<script lang="ts">
// 引入配置
import { ConfigProvider } from "ant-design-vue";
import { reactive, ref } from "vue";
export default {
  setup() {
    const checked = ref(false);

    //与app.vue一致
    const colorState = reactive({
      primaryColor: "#25b864",
      textColor: "#000000"
    });
    const onColorChange = (type: string, e: Event) => {
      console.log(type, (e.target as HTMLInputElement).value, "颜色");
      Object.assign(colorState, {
        [type]: (e.target as HTMLInputElement).value
      });
      ConfigProvider.config({
        theme: colorState
      });
    };
    const info = () => {
      console.log("info");
    };
    return {
      checked,
      colorState,
      onColorChange,
      info
    };
  }
};
</script>
