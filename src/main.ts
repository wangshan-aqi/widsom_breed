import { createPinia } from 'pinia';
import { createApp } from 'vue';

import App from './App.vue';
import router from './router';

// import { Button } from 'ant-design-vue';
// import 'ant-design-vue/dist/antd.variable.min.css';
import './assets/main.css';

const app = createApp(App);

// app.component('XButton', Button);

app.use(createPinia());
app.use(router);

app.mount('#app');
