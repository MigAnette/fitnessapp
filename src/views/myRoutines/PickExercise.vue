<template>
  <div>
    <back-button></back-button>
    <pick-exercise-card v-for="content in pickExercises" :key="content.id" :content="content"></pick-exercise-card>
      
  </div>
</template>

<script>
import PickExerciseCard from '@/components/cards/PickExerciseCard.vue';
import BackButton from "@/components/buttons/BackButton.vue";

export default {
  name: 'PickExercise',
  components: {
    PickExerciseCard,
    BackButton
  },
  data() {
  return {
   
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
