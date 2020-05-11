import Vue from 'vue'
import Vuex from 'vuex'
import routine from './routine.js';
import user from './user.js';
import exercises from './exercises.js';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    a: routine,
    b: user,
    c: exercises
  }
})