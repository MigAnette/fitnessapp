<template>
  <v-row justify="center">
    <v-col cols="3">
      Mins:
    </v-col>
    <v-col cols="4">
      <v-text-field dense class="corner center-text-input" outlined v-model.number="mins"  type="number"></v-text-field>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'MakeMinsAndSeconds',
  props: ["i"],
  data() {
  return {
  };
 },
 computed: {
     mins: {
      get() {
        return this.$store.state.exercise.exerciseTest[this.i].mins
      },
      set(value) {
        this.$store.commit("exercise/UPDATE_MINS", {
          value,
          i: this.i
        });
      }
    },
 }
};
</script>

<style>
</style>
