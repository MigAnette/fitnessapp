<template>
  <v-row justify="center">
    <v-col cols="3">Mins:</v-col>
    <v-col cols="6">
      <v-text-field dense class="corner center-text-input" outlined :value="content"></v-text-field>
    </v-col>
    <v-col cols="1">
      <v-btn outlined fab icon small @click="checkExercise" :color="checkColor">
        <v-icon>mdi-check</v-icon>
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "EditMinsAndSeconds",
  props: ["i", "content"],
  data() {
    return {
      checkColor: "grey darken-1",
      booleanCheck: false
    };
  },
  methods: {
    checkExercise() {
      if (this.booleanCheck) {
        this.checkColor = "grey darken-1";
        this.booleanCheck = false;
      } else {
        this.checkColor = "#FFAE8A";
        this.booleanCheck = true;
      }
    }
  }
};
</script>

<style>
</style>
