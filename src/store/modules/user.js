import db from "@/firebase/init";
export default {
  namespaced: true,
  state: {
    user: {},
    history: [],
    historyId: "",
    singleHistory: {},
    currentUser: "ca9SpNZEzoQ79hBHipCn",
  },
  mutations: {
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
