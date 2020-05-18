import db from "@/firebase/init";
import firebase from "firebase/app";
export default {
  namespaced: true,
  state: {
    selectedRoutines: [],
    categoryName: "",
    myRoutines: [],
    routineId: "",
    routine: {},
    routineName: "",
    routineDescription: "",
    markChecked: false,
  },

  mutations: {
    EDIT_REP(state, payload) {
      state.routine.exercises[payload.i].repsAndKg[payload.index].rep =
        payload.value;
    },

    EDIT_KG(state, payload) {
      state.routine.exercises[payload.i].repsAndKg[payload.index].kg = payload.value;
    },

    EDIT_MINS(state, payload) {
      state.routine.exercises[payload.i].mins = payload.value;
    },

    // checking to see if a checkmark in an exercise has been marked
    SET_MARK_CHECKED(state, payload) {
      state.markChecked = payload;
    },

    // emptying the routine data if user goes back
    EMPTY_ROUTINE(state) {
      state.routineDescription = "";
      state.routineName = "";
    },
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
    // --------- Routine----------
    deleteRoutine({ state }) {
      console.log(state.routineId);
      db.collection("routine").doc(state.routineId).delete();
      
    },
    saveDoneRoutine({ state, rootState }) {
      const now = new Date();
      console.log(state.routine);
      db.collection("users").doc(rootState.user.currentUser).collection("history").add({
        ...state.routine,
        created_at: firebase.firestore.Timestamp.fromDate(now)
      });
    },

    // --------- makeRoutine----------
    createRoutine({ state, rootState }) {
      console.log(rootState.exercise.exerciseTest);
      db.collection("routine").add({
        author: rootState.user.currentUser,
        description: state.routineDescription,
        name: state.routineName,
        exercises: rootState.exercise.exerciseTest,
      });
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
    markChecked(state) {
      return state.markChecked;
    },
    exerciseSize(state) {
      return state.routine.exercises.length;
    },
  },
};
