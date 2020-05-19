<template>
  <v-row justify="center">
    <v-col cols="3">Mins:</v-col>
    <v-col cols="6">
      <v-text-field dense class="corner center-text-input" outlined :value="content.mins"></v-text-field>
    </v-col>
    <v-col cols="1">
      <v-btn
        outlined
        fab
        icon
        small
        class="markChecked"
      >
        <v-icon>mdi-check</v-icon>
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'ShowMinsAndSeconds',
  props: ["content"],
  data() {
  return {
  };
 },
};
</script>

<style>
</style>
