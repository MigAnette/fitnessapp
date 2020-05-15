<template>
  <v-row justify="center">
    <v-col cols="2">
      <h4 class="text-color">{{index + 1}}.</h4>
    </v-col>
    <v-col cols="3">
      <v-text-field dense class="corner center-text-input" outlined :value="content.rep"></v-text-field>
    </v-col>
    <v-col cols="3">
      <v-text-field dense class="corner center-text-input" suffix="Kg" outlined :value="content.kg"></v-text-field>
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
  name: 'EditRepAndKg',
    props: ["i", "index", "content"],
  data() {
  return {
      checkColor: "grey darken-1"
  };
 },
 methods: {
     checkExercise() {
         console.log('checked');
         
         
     }
 }
};
</script>

<style>
</style>
