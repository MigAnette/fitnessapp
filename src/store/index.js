import Vue from "vue";
import Vuex from "vuex";
// import db from "../firebase/init";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    categoryName: "",
    predRoutines: [],
    myRoutines: []
  },
  mutations: {
    SET_CATEGORY_NAME(state, name) {
      state.categoryName = name;
    }
    // --------- preRoutines----------

  },
  actions: {
    // --------- preRoutines----------
   
  },
  getters: {
    // --------- preRoutines----------
    
  },
});