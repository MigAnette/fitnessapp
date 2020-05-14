import db from "@/firebase/init";
export default {
  namespaced: true,
  state: {
    pickExercises: [],
    exerciseTest: [],
  },
  mutations: {
    // updating exercise test
    UPDATE_REP(state, payload) {
      state.exerciseTest.repsAndKg.rep = payload;
    },
    UPDATE_EXERCISE(state, payload) {
      state.exerciseTest = payload;
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
