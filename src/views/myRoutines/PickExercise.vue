<template>
  <div>
    <back-button></back-button>
    <v-row justify="center">
      <h1><span class="text-color">Vælg</span> Øvelse</h1>
    </v-row>
    <pick-exercise-card v-for="content in pickExercises" :key="content.id" :content="content"></pick-exercise-card>
  </div>
</template>

<script>
import PickExerciseCard from "@/components/cards/PickExerciseCard.vue";
import BackButton from "@/components/buttons/BackButton.vue";

export default {
  name: "PickExercise",
  components: {
    PickExerciseCard,
    BackButton
  },
  data() {
    return {};
  },
  computed: {
    pickExercises() {
      return this.$store.getters['exercise/pickExercises'];
    }
  },
  created() {
    this.$store.dispatch("exercise/fetchPickExercises");
  }
};
</script>

<style lang="scss">
  .text-color {
    color: #FFAE8A;
  }
</style>
