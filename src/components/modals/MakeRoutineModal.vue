<template>
  <v-dialog v-model="dialog" persistent max-width="290">
    <template v-slot:activator="{ on }">
      <v-btn small color="grey lighten-3" v-on="on" circle outlined fab>
      <v-icon color="#FFAE8A">mdi-arrow-left</v-icon>
    </v-btn>
    </template>

    <v-card class="corner">
        <v-card-title class="headline">Use Google's location service?</v-card-title>
        <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">Nej</v-btn>
          <v-btn color="green darken-1" text @click="goBack">Ja</v-btn>
        </v-card-actions>
      </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "MakeRoutineModal",
//   props: ["myRoutines"],
  data() {
    return {
      dialog: false
    };
  },
  methods: {
      goBack() {
          this.$emit('goBack');
          this.dialog = false;
      }
  }
};
</script>

<style>
</style>
