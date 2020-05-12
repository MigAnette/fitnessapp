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
    routine: {}
  },
  mutations: {
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
    }

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
    fetchIndividualRoutine({commit}) {
      db.collection("routine").doc(this.state.routineId).get().then(doc => {
        if(!doc.exists) return;
        let data = doc.data();
        data.id = doc.id;

        commit("SET_ROUTINE", data);
      })
    }
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
    }
  },
});
