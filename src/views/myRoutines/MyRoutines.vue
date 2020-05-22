<template>
  <v-container>
    <v-row justify="center">
      <h1 class="tex-center">
        <span class="text-color">Dine</span> rutiner
      </h1>
    </v-row>
    <routine-card
      v-for="(content, index) in myRoutines"
      :key="index"
      :navName="navName"
      :content="content"
    ></routine-card>

    <v-btn :to="{name: 'MakeRoutine'}" color="#FFAE8A" class="white--text" fab right absolute>
      <v-icon>mdi-plus</v-icon>
    </v-btn>

    <div class="navProtector"></div>
    <div class="navProtector"></div>
  </v-container>
</template>

<script>
import RoutineCard from "@/components/cards/RoutineCard.vue";

export default {
  name: "MyRoutines",
  components: {
    RoutineCard
  },
  data() {
    return {
      id: "hej",
      navName: "minerutiner"
    };
  },
  computed: {
    myRoutines() {
      return this.$store.getters["routine/myRoutines"];
    }
  },
  created() {
    this.$store.dispatch("routine/fetchMyRoutines");
  }
};
</script>

<style>
</style>
