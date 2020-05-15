import db from "@/firebase/init";
export default {
  namespaced: true,
  state: {
    selectedRoutines: [],
    categoryName: "",
    myRoutines: [],
    routineId: "",
    routine: {},
    routineName: "",
    routineDescription: ""
  },

  mutations: {
    // two way binding with routineName
    SET_ROUTINE_NAME(state, payload) {
      state.routineName = payload;
    },
    // two way binding with routineDescription
    SET_ROUTINE_DESCRIPTION(state, payload) {
      state.routineDescription = payload;
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

    // --------- individualRoutine----------
    SET_ROUTINE(state, payload) {
      state.routine = payload;
    },
  },
  actions: {
    // --------- makeRoutine----------
    createRoutine({ rootState }) {
      console.log(rootState.exercise.exerciseTest);
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
    fetchMyRoutines({ commit, rootState }) {
      db.collection("routine")
        .where("author", "==", rootState.user.currentUser)
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
    // --------- individualRoutine----------
    routine(state) {
      return state.routine;
    },
  },
};
