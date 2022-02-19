import { createRouter, createWebHistory } from "vue-router";
import Weather from "../views/WeatherView.vue";

const routes = [
  {
    path: "/weather/:city",
    name: "Weather",
    component: Weather,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
