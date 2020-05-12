<template>
  <div>
    <back-button></back-button>
    <pick-exercise-card v-for="content in pickExercises" :key="content.id" :content="content"></pick-exercise-card>
      <navigation-button :routeName="routeName" buttonValue="Øvelser"></navigation-button>
  </div>
</template>

<script>
import NavigationButton from '@/components/buttons/NavigationButton.vue';
import PickExerciseCard from '@/components/cards/PickExerciseCard.vue';
import BackButton from "@/components/buttons/BackButton.vue";

export default {
  name: 'PickExercise',
  components: {
    NavigationButton,
    PickExerciseCard,
    BackButton
  },
  data() {
  return {
    routeName: 'MakeRoutine'
  };
 },
 computed: {
   pickExercises() {
     return this.$store.getters.pickExercises;
   }
 },
 created() {
   this.$store.dispatch("fetchPickExercises");
 }
};
</script>

<style>
</style>
