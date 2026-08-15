import { createApp } from "vue";
import App from './App.vue';
//导入路由器
import router from "./router";
//创建应用
const app = createApp(App)
//使用路由器
app.use(router)
//挂载应用（挂载一定要写在最后）
app.mount('#app')