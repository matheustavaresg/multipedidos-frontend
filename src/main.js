import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './index.css'
import "./axios"
import router from './router'
import { FontAwesomeIcon } from './plugins/font-awesome'

const app = createApp(App);

app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
