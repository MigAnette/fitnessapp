import Vue from "vue";
import VueRouter from "vue-router";
import firebase from 'firebase/app' 
require('firebase/auth')

// components imported for routing
import FrontPage from "@/views/FrontPage.vue";

// components from routine categories
import RoutineCategories from "@/views/routineCategories/RoutineCategories.vue";
import SelectedCategory from "@/views/routineCategories/SelectedCategory.vue";

// components from my routines
import MyRoutines from "@/views/myRoutines/MyRoutines.vue";
import MakeRoutine from "@/views/myRoutines/MakeRoutine.vue";
import PickExercise from "@/views/myRoutines/PickExercise.vue";

// components from profile
import Profile from "@/views/profile/Profile.vue";
import History from "@/views/profile/History.vue";
import SingleHistory from "@/views/profile/SingleHistory.vue";

// components from combined pages
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
    meta: {
      requiresAuth: true
    }
  },

  // Routes for Routine categories
  {
    path: "/kategorier",
    name: "RoutineCategories",
    meta: { layout: "nav-bar", requiresAuth: true },
    component: RoutineCategories,
  },
  {
    path: "/kategorier/:category_name",
    name: "SelectedCategory",
    meta: { layout: "nav-bar", requiresAuth: true },
    component: SelectedCategory,
  },

  // Routes for My Routine
  {
    path: "/minerutiner",
    name: "MyRoutines",
    meta: { layout: "nav-bar", requiresAuth: true },
    component: MyRoutines,
  },
  {
    path: "/minerutiner/lav-rutine",
    name: "MakeRoutine",
    component: MakeRoutine,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/minerutiner/lav-rutine/øvelser",
    name: "PickExercise",
    component: PickExercise,
    meta: {
      requiresAuth: true
    }
  },

  // Routines for Profile
  {
    path: "/profil",
    name: "Profile",
    meta: { layout: "nav-bar", requiresAuth: true },
    component: Profile,
  },
  {
    path: "/profil/historie",
    name: "History",
    meta: { layout: "nav-bar", requiresAuth: true },
    component: History,
    
  },
  {
    path: "/profil/historie/:history_id",
    name: "SingleHistory",
    component: SingleHistory,
    meta: {
      requiresAuth: true
    } 
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// Comes from geo-ninjas router:
router.beforeEach((to, from, next) => {
  //check to see if route requires auth
  if(to.matched.some(rec => rec.meta.requiresAuth)){
    //check auth state of user
    let user = firebase.auth().currentUser
    if(user) {
      //user signed in, proceed to route
      next()
    } else {
      //no user signed up, redirect to signUp
      next({name: 'FrontPage'});
    }
  }else {
    next()
  }
});

export default router;
