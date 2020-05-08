import Vue from 'vue'
import VueRouter from 'vue-router'

// components imported for routing
import FrontPage from '@/views/FrontPage.vue';

// components from routine categories
import RoutineCategories from '@/views/routineCategories/RoutineCategories.vue';
import SelectedCategory from '@/views/routineCategories/SelectedCategory.vue';
import PreRoutine from '@/views/routineCategories/PreRoutine.vue';
import PreCompletedRoutine from '@/views/routineCategories/PreCompletedRoutine.vue';


// components from my routines
import MyRoutines from '@/views/myRoutines/MyRoutines.vue';
import MakeRoutine from '@/views/myRoutines/MakeRoutine.vue';
import PickExercise from '@/views/myRoutines/PickExercise.vue';
import MyRoutine from '@/views/myRoutines/MyRoutine.vue';
import MyCompletedRoutine from '@/views/myRoutines/MyCompletedRoutine.vue';

// components from profile
import Profile from '@/views/profile/Profile.vue';


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'FrontPage',
    component: FrontPage
  },

  // Routes for Routine categories
  {
    path: '/kategorier',
    name: 'RoutineCategories',
    component: RoutineCategories
  },
  {
    path: '/kategorier/:category_name',
    name: 'SelectedCategory',
    component: SelectedCategory
  },
  {
    path: '/kategorier/:category_name/:routine_id',
    name: 'PreRoutine',
    component: PreRoutine
  },
  {
    path: '/kategorier/:category_name/:routine_id/completed',
    name: 'PreCompletedRoutine',
    component: PreCompletedRoutine
  },

  // Routes for My Routine
  {
    path: '/minerutiner',
    name: 'MyRoutines',
    component: MyRoutines
  },
  {
    path: '/minerutiner/lav-rutine',
    name: 'MakeRoutine',
    component: MakeRoutine
  },
  {
    path: '/minerutiner/lav-rutine/øvelser',
    name: 'PickExercise',
    component: PickExercise
  },
  {
    path: '/minerutiner/:routine_id',
    name: 'MyRoutine',
    component: MyRoutine
  },
  {
    path: '/minerutiner/:routine_id/completed',
    name: 'MyCompletedRoutine',
    component: MyCompletedRoutine
  },

  // Routines for Profile
  {
    path: '/profil',
    name: 'Profile',
    component: Profile
  }
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
