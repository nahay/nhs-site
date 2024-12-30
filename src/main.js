import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
document.title = "Nahay Home Solutions";


const app = createApp(App);
app.use(router);
app.mount('#app');

