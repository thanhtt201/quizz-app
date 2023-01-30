import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home.vue";
import QuestionsView from "../views/Questions.vue";
import ScoreRessultView from "../views/ScoreResult.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/questions",
    name: "questions",
    component: QuestionsView,
  },
  {
    path: "/score-result",
    name: "score-result",
    component: ScoreRessultView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
