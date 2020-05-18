import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import firebase from "firebase/app";
require("firebase/auth");

import Default from "@/layouts/NoNavBar.vue";
import NavBar from "@/layouts/NavBar.vue";

Vue.component("default-layout", Default);
Vue.component("nav-bar-layout", NavBar);

Vue.config.productionTip = false;

//wait for firebase auth to init before creating the app
firebase.auth().onAuthStateChanged(() => {
  new Vue({
    router,
    store,
    vuetify,
    render: (h) => h(App),
  }).$mount("#app");
});
