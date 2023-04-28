import { defineStore } from 'pinia';
interface ITheme {
  primaryColor?: string;
  infoColor?: string;
  successColor?: string;
  processingColor?: string;
  errorColor?: string;
  warningColor?: string;
}
export const useProvidStore = defineStore('providStore', {
  state: () => {
    return {
      colorState: {
        primaryColor: '#1890ff',
        errorColor: '#ff4d4f',
        warningColor: '#faad14',
        successColor: '#52c41a',
        infoColor: '#eeeeee',
      } as ITheme,
    };
  },
  actions: {
    updateTheme(data: ITheme) {
      this.colorState = data;
    },
  },
});
