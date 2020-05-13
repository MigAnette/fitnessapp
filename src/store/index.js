import Vue from "vue";
import Vuex from "vuex";
import db from "../firebase/init";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    categoryName: "",
    selectedRoutines: [],
    myRoutines: [],
    pickExercises: [],
    currentUser: "ca9SpNZEzoQ79hBHipCn",
    exerciseTest: [],
    routineId: "",
    routine: {},
    user: {},
    history: [],
    historyId: "",
    singleHistory: {}
  },
  mutations: {
    // updating exercise test
    UPDATE_EXERCISE(state, payload) {
      state.exerciseTest = payload;
    },

    // testing exercise
    SET_EXERCISE_TEST(state, payload) {
      state.exerciseTest.push(payload);
    },

    // changning the id to get the individual routine
    SET_ROUTINE_ID(state, payload) {
      state.routineId = payload;
    },

    // changning the category name, when category is clicked on RoutineCategories
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

    // --------- pickExercise----------
    SET_PICK_EXERCISES(state, payload) {
      state.pickExercises = payload;
    },

    // --------- individualRoutine----------
    SET_ROUTINE(state, payload) {
      state.routine = payload;
    },

    // --------- user ----------
    SET_USER(state, payload) {
      state.user = payload;
    },

    // --------- history ----------
    SET_HISTORY(state, payload) {
      state.history = payload;
    },

    SET_HISTORY_ID(state, payload) {
      state.historyId = payload;
    },

    // --------- singleHistory ----------
    SET_SINGLE_HISTORY(state, payload) {
      state.singleHistory = payload;
    }
  },
  actions: {
    // --------- makeRoutine----------
    createRoutine({state}) {
      console.log(state.exerciseTest);
    },
    // --------- selectedRoutines----------
    fetchSelectedRoutines({ commit, state }) {
      db.collection("routine")
        .where("category", "==", state.categoryName)
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
    fetchMyRoutines({ commit, state }) {
      db.collection("routine")
        .where("author", "==", state.currentUser)
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
    // --------- pickExercise----------
    fetchPickExercises({ commit }) {
      db.collection("exercises")
        .get()
        .then((snapshot) => {
          const pickExercises = [];
          snapshot.forEach((doc) => {
            const data = doc.data();
            data.id = doc.id;
            pickExercises.push(data);
          });
          commit("SET_PICK_EXERCISES", pickExercises);
        });
    },
    // --------- individualRoutine----------
    fetchIndividualRoutine({ commit, state }) {
      db.collection("routine")
        .doc(state.routineId)
        .get()
        .then((doc) => {
          if (!doc.exists) return;
          let data = doc.data();
          data.id = doc.id;

          commit("SET_ROUTINE", data);
        });
    },
    // --------- user ----------
    fetchUser({ commit, state }) {
      db.collection("users")
        .doc(state.currentUser)
        .get()
        .then((doc) => {
          if (!doc.exists) return;
          let data = doc.data();
          data.id = doc.id;

          commit("SET_USER", data);
        });
    },

    // --------- history ----------
    fetchHistory({ commit, state }) {
      db.collection("users")
        .doc(state.currentUser)
        .collection("history")
        .get()
        .then((snapshot) => {
          const history = [];
          snapshot.forEach((doc) => {
            const data = doc.data();
            data.id = doc.id;
            history.push(data);
          });
          commit("SET_HISTORY", history);
        });
    },

    // --------- singleHistory ----------
    fetchSingleHistory({ commit, state }) {
      db.collection("users")
        .doc(state.currentUser)
        .collection("history")
        .doc(state.historyId)
        .get()
        .then((doc) => {
          if (!doc.exists) return;
          let data = doc.data();
          data.id = doc.id;

          commit("SET_SINGLE_HISTORY", data);
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

    // --------- pickExercise----------
    pickExercises(state) {
      return state.pickExercises;
    },

    // --------- individualRoutine----------
    routine(state) {
      return state.routine;
    },

    exerciseTest(state) {
      return state.exerciseTest;
    },

    // --------- user ----------
    user(state) {
      return state.user;
    },

    // --------- history ----------
    history(state) {
      return state.history;
    },

    // --------- singleHistory ----------
    singleHistory(state) {
      return state.singleHistory;
    }
  },
});
