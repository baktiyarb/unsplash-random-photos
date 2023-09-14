import { createRouter, createWebHistory } from "vue-router";

// Импортируйте компоненты, которые вы хотите использовать в маршрутах
import HeaderMain from "./src/components/HeaderMain.vue";
import favorites from "./src/components/FavoriteItems.vue";

const routes = [
  {
    path: "/",
    name: "HeaderMain",
    component: HeaderMain,
  },
  {
    path: "/favorites",
    name: "favorites",
    component: favorites,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
