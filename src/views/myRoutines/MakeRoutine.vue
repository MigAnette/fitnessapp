<template>
  <div>
    <back-button></back-button>
      <p>MakeRoutine</p>
      <navigation-button :routeName="excersice" buttonValue="Øvelser"></navigation-button>
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
  };
 },
 methods: {
   handleCreate() {
    //  this.$store.dispatch('something');
    this.$router.push({name: this.myRoutines});
   }
 }
};
</script>

<style>
</style>
