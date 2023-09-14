// src/main.js
import { createApp } from "vue";
import axios from "axios";
import App from "./App.vue";
import store from "../store.js";
import router from "../router.js";
const app = createApp(App);

// Configure Axios with the base URL and other settings
axios.defaults.baseURL = "https://api.unsplash.com/";
axios.defaults.headers.common[
  "Authorization"
] = `Client-ID YOUR_UNSPLASH_API_KEY`;

// Make Axios available globally in Vue components
app.config.globalProperties.$axios = axios;
app.use(router);

app.use(store);
app.mount("#app");
