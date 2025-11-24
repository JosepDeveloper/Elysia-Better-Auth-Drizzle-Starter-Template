import { createRouter, createWebHistory } from "vue-router";

import Main from "../pages/Main.vue";
import Protected from "../pages/Protected.vue";
import NotFoundView from "../pages/NotFoundView.vue";

const routes = [
  { path: "/", component: Main },
  { path: "/protected", component: Protected },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFoundView,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
