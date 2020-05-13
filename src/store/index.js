import Vue from "vue";
import Vuex from "vuex";
// import exercise from "./modules/exercise.js";
// import user from "./modules/user.js";
// import routine from "./modules/routine.js";
import modules from './modules';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  modules
});
