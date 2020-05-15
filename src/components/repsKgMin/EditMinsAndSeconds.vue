<template>
  <v-row justify="center">
    <v-col cols="3">
      Mins:
    </v-col>
    <v-col cols="4">
      <v-text-field dense class="corner center-text-input" outlined :value="content"></v-text-field>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'EditMinsAndSeconds',
  props: ["i", "content"],
  data() {
  return {
  };
 },
};
</script>

<style>
</style>
