import Vue from "vue";
import VueRouter from "vue-router";

// components imported for routing
import FrontPage from "@/views/FrontPage.vue";

// components from routine categories
import RoutineCategories from "@/views/routineCategories/RoutineCategories.vue";
import SelectedCategory from "@/views/routineCategories/SelectedCategory.vue";
import PreRoutine from "@/views/routineCategories/PreRoutine.vue";
import PreCompletedRoutine from "@/views/routineCategories/PreCompletedRoutine.vue";

// components from my routines
import MyRoutines from "@/views/myRoutines/MyRoutines.vue";
import MakeRoutine from "@/views/myRoutines/MakeRoutine.vue";
import PickExercise from "@/views/myRoutines/PickExercise.vue";
import MyRoutine from "@/views/myRoutines/MyRoutine.vue";
import MyCompletedRoutine from "@/views/myRoutines/MyCompletedRoutine.vue";

// components from profile
import Profile from "@/views/profile/Profile.vue";
import History from "@/views/profile/History.vue";
import SingleHistory from "@/views/profile/SingleHistory.vue";

// components from combined pages
import CompletedRoutine from "@/views/combinedPages/CompletedRoutine.vue";
import Routine from "@/views/combinedPages/Routine.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "FrontPage",
    component: FrontPage,
  },

  // Routes for Combined Pages
  {
    path: "/:nav_name/rutine/:routine_id",
    name: "Routine",
    component: Routine,
  },
  {
    path: "/:nav_name/rutine/:routine_id/completed",
    name: "CompletedRoutine",
    component: CompletedRoutine,
  },

  // Routes for Routine categories
  {
    path: "/kategorier",
    name: "RoutineCategories",
    meta: {layout: "nav-bar"},
    component: RoutineCategories,
  },
  {
    path: "/kategorier/:category_name",
    name: "SelectedCategory",
    component: SelectedCategory,
  },
  {
    path: "/kategorier/:category_name/:routine_id",
    name: "PreRoutine",
    component: PreRoutine,
  },
  {
    path: "/kategorier/:category_name/:routine_id/completed",
    name: "PreCompletedRoutine",
    component: PreCompletedRoutine,
  },

  // Routes for My Routine
  {
    path: "/minerutiner",
    name: "MyRoutines",
    meta: {layout: "nav-bar"},
    component: MyRoutines,
  },
  {
    path: "/minerutiner/lav-rutine",
    name: "MakeRoutine",
    component: MakeRoutine,
  },
  {
    path: "/minerutiner/lav-rutine/øvelser",
    name: "PickExercise",
    component: PickExercise,
  },
  {
    path: "/minerutiner/:routine_id",
    name: "MyRoutine",
    component: MyRoutine,
  },
  {
    path: "/minerutiner/:routine_id/completed",
    name: "MyCompletedRoutine",
    component: MyCompletedRoutine,
  },

  // Routines for Profile
  {
    path: "/profil",
    name: "Profile",
    meta: {layout: "nav-bar"},
    component: Profile,
  },
  {
    path: "/profil/historie",
    name: "History",
    component: History,
  },
  {
    path: "/profil/historie/:history_id",
    name: "SingleHistory",
    component: SingleHistory,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
