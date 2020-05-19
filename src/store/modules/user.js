import db from "@/firebase/init";
import firebase from "firebase/app";
require("firebase/auth");
import router from "@/router";

export default {
  namespaced: true,
  state: {
    user: {},
    history: [],
    historyId: "",
    singleHistory: {},
    currentUser: "",
    feedback: "",
  },
  mutations: {
    EMPTY_USER_ID(state) {
      state.currentUser = "";
    },

    SET_USER_ID(state) {
      state.currentUser = firebase.auth().currentUser.uid;
    },

    SET_FEEDBACK(state, payload) {
      state.feedback = payload;
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
    },
  },
  actions: {
    signOut({ commit }) {
      firebase
        .auth()
        .signOut()
        .then(() => {
          commit("EMPTY_USER_ID");
          router.push({ name: "FrontPage" });
        })
        .catch((err) => {
          commit("SET_FEEDBACK", err);
        });
    },
    setUser({ commit }) {
      commit("SET_USER_ID");
    },
    // --------- sign in user from frontpage ----------
    signinUser({ dispatch, commit }) {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          const user = result.user;
          dispatch("updateUser", user);
        })
        .catch((err) => {
          commit("SET_FEEDBACK", err.message);
        });
    },

    updateUser({ state, commit }, user) {
      console.log(user.uid);
      console.log(state.feedback);

      db.collection("users")
        .doc(user.uid)
        .set(
          {
            email: user.email,
            name: user.displayName,
            photo: user.photoURL,
          },
          { merge: true }
        )
        .then(() => {
          router.push({ name: "RoutineCategories" });
          commit("SET_USER_ID", user.uid);
        })
        .catch((err) => {
          commit("SET_FEEDBACK", err.message);
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
        .orderBy("created_at", "desc")
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
    },
  },
};
