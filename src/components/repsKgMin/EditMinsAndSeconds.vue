<template>
  <v-row justify="center">
    <v-col cols="3">Mins:</v-col>
    <v-col cols="6">
      <v-text-field dense class="corner center-text-input" outlined :value="content"></v-text-field>
    </v-col>
    <v-col cols="1">
      <v-btn
        outlined
        fab
        icon
        small
        @click="checkExercise"
        :class="{markChecked: booleanCheck == true, notChecked: booleanCheck == false}"
      >
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
      this.booleanCheck = !this.booleanCheck;
      this.$emit("checked", this.booleanCheck);
    }
  }
};
</script>

<style>
</style>
