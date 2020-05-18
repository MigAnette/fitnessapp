<template>
  <div id="frontpage">
    <v-img src="@/assets/workoutbuddy.png" class="pa-7"></v-img>
    <v-card tile>
      <v-row justify="center">
        <v-card-title class="headline font-weight-bold">
          Workout
          <span class="text-color">Buddy</span>
        </v-card-title>
      </v-row>
    </v-card>

    <div class="my-5">
      <v-row justify="center">
        <h3>
          Din
          <span class="text-color">all-in-one</span>
        </h3>
      </v-row>
      <v-row justify="center">
        <h3>workout companion</h3>
      </v-row>
    </div>

    <div class="my-5">
      <v-row justify="center" class="mb-5">
        <v-btn @click="login" color="black" class="white--text" rounded>Opret bruger</v-btn>
      </v-row>

      <v-row justify="center">
        <v-btn @click="login" rounded>Log ind med Google</v-btn>
      </v-row>
    </div>

    <v-row justify="center">
      <h5>
        Allerede medlem?
        <span @click="login" class="text-color">Log ind</span>
      </h5>
    </v-row>
  </div>
</template>

<script>
import firebase from "firebase/app";
require("firebase/auth");

export default {
  name: "FrontPage",
  data() {
    return {};
  },
  methods: {
    login() {
      this.$store.dispatch("user/signinUser", {
        name: firebase.auth().currentUser
      });
    }
  }
};
</script>

<style lang="scss">
</style>
