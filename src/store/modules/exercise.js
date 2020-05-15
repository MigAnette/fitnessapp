import db from "@/firebase/init";
export default {
  namespaced: true,
  state: {
    pickExercises: [],
    exerciseTest: [],
  },
  mutations: {
    
    EMPTY_EXERCISE_TEST(state) {
      state.exerciseTest.length = 0;
    },
    // updating exercise test
    UPDATE_REP(state, payload) {
      state.exerciseTest[payload.i].repsAndKg[payload.index].rep =
        payload.value;
    },
    UPDATE_KG(state, payload) {
      state.exerciseTest[payload.i].repsAndKg[payload.index].kg = payload.value;
    },
    UPDATE_MINS(state, payload) {
      state.exerciseTest[payload.i].mins = payload.value;
    },
    UPDATE_EXERCISE(state, payload) {
      state.exerciseTest = payload;
    },
    ADD_SET(state, payload) {
      state.exerciseTest[payload.i].repsAndKg.push(payload.data);
    },
    REMOVE_SET(state, payload) {
      state.exerciseTest[payload.i].repsAndKg.pop(payload.index, 1);
    },

    REMOVE_EXERCISE(state, payload) {
      state.exerciseTest.pop(payload.i, 1);
    },

    // testing exercise
    SET_EXERCISE_TEST(state, payload) {
      state.exerciseTest.push(payload);
    },
    // --------- pickExercise----------
    SET_PICK_EXERCISES(state, payload) {
      state.pickExercises = payload;
    },
  },
  actions: {
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
  },
  getters: {
    // --------- pickExercise----------
    pickExercises(state) {
      return state.pickExercises;
    },
    exerciseTest(state) {
      return state.exerciseTest;
    },
  },
};
