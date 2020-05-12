<template>
  <div>
    <back-button></back-button>
      <p>MakeRoutine</p>
      <div v-for="(content, index) in exercise" :key="index">
        {{content.name}}
      </div>
      <navigation-button v-if="limited" :routeName="excersice" buttonValue="Øvelser"></navigation-button>
      <functions-button buttonValue="Færdig" @functionClicked="handleCreate"></functions-button>
  </div>
</template>

<script>
import NavigationButton from '@/components/buttons/NavigationButton.vue';
import FunctionsButton from '@/components/buttons/FunctionsButton.vue';
import BackButton from "@/components/buttons/BackButton.vue";

export default {
  name: 'MakeRoutine',
  components: {
    NavigationButton,
    FunctionsButton,
    BackButton
  },
  data() {
  return {
    excersice: 'PickExercise',
    myRoutines: 'MyRoutines',
    limited: true
  };
 },
 methods: {
   handleCreate() {
    //  this.$store.dispatch('something');
    this.$router.push({name: this.myRoutines});
   },
   limitExercises() {
     if(this.exercise.length >= 5) {
       this.limited = false;
     }
   }
 },
 computed: {
   exercise() {
     return this.$store.getters.exerciseTest;
   }
 },
 created() {
   this.limitExercises();
 }
 
};
</script>

<style>
</style>
