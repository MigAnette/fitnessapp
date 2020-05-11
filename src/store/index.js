import Vue from "vue";
import Vuex from "vuex";
import db from "../firebase/init";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    routines: [],
  },
  mutations: {
    SET_ROUTINES(state, payload) {
      state.routines = payload;
    },
  },
  actions: {
    fetchRoutines({ commit }) {
      db.collection("routine").onSnapshot((snapshot) => {
        const routines = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          data.id = doc.id;
          routines.push(data);
        });
        commit("SET_ROUTINES", routines);
      });
    },
  },
  getters: {
    routines(state) {
      return state.routines;
    },
  },
});
