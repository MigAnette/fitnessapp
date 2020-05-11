import Vue from "vue";
import Vuex from "vuex";
import db from "../firebase/init";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    categoryName: "",
    predRoutines: [],
    myRoutines: [],
    currentUser: "ca9SpNZEzoQ79hBHipCn",
  },
  mutations: {
    SET_CATEGORY_NAME(state, name) {
      state.categoryName = name;
    },
    // --------- preRoutines----------

    // --------- myRoutines----------
    SET_MY_ROUTINES(state, payload) {
      state.myRoutines = payload;
    }
  },
  actions: {
    // --------- preRoutines----------
    // --------- myRoutines----------
    fetchMyRoutines({ commit }) {
      db.collection("routine")
        .where("author", "==", this.state.currentUser)
        .onSnapshot((snapshot) => {
          const myRoutines = [];
          snapshot.forEach((doc) => {
            const data = doc.data();
            data.id = doc.id;
            myRoutines.push(data);
          });
          commit("SET_MY_ROUTINES", myRoutines);
        });
    },
  },
  getters: {
    // --------- preRoutines----------
    // --------- myRoutines----------
    myRoutines(state) {
      return state.myRoutines;
    }
  },
});
