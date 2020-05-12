import Vue from "vue";
import Vuex from "vuex";
import db from "../firebase/init";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    categoryName: "",
    selectedRoutines: [],
    myRoutines: [],
    currentUser: "ca9SpNZEzoQ79hBHipCn",
  },
  mutations: {
    SET_CATEGORY_NAME(state, name) {
      state.categoryName = name;
    },
    // --------- selectedRoutines----------
    SET_SELECTED_ROUTINES(state, payload) {
      state.selectedRoutines = payload;
    },

    // --------- myRoutines----------
    SET_MY_ROUTINES(state, payload) {
      state.myRoutines = payload;
    },
  },
  actions: {
    // --------- selectedRoutines----------
    fetchSelectedRoutines({ commit }) {
      db.collection("routine")
        .where("category", "==", this.state.categoryName)
        .get()
        .then((snapshot) => {
          const selectedRoutines = [];
          snapshot.forEach((doc) => {
            const data = doc.data();
            data.id = doc.id;
            selectedRoutines.push(data);
          });
          commit("SET_SELECTED_ROUTINES", selectedRoutines);
        });
    },

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
    // --------- selectedRoutines----------
    selectedRoutines(state) {
      return state.selectedRoutines;
      
    },
    // --------- myRoutines----------
    myRoutines(state) {
      return state.myRoutines;
    },
  },
});
