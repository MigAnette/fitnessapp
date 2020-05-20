<template>
  <div>
    <back-button></back-button>
    <top-banner content="Vælg Øvelse"></top-banner>


  <v-container>
    <pick-exercise-card v-for="content in pickExercises" :key="content.id" :content="content"></pick-exercise-card>
  </v-container>
  </div>
</template>

<script>
import PickExerciseCard from "@/components/cards/PickExerciseCard.vue";
import BackButton from "@/components/buttons/BackButton.vue";
import TopBanner from "@/components/TopBanner.vue";

export default {
  name: "PickExercise",
  components: {
    PickExerciseCard,
    BackButton,
    TopBanner

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
