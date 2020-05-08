<template>
  <div>
      <p>MakeRoutine</p>
      <navigation-button :routeName="excersice" buttonValue="Øvelser"></navigation-button>
      <navigation-button :routeName="myRoutines" buttonValue="Færdig"></navigation-button>
  </div>
</template>

<script>
import NavigationButton from '@/components/buttons/NavigationButton.vue';

export default {
  name: 'MakeRoutine',
  components: {
    NavigationButton
  },
  data() {
  return {
    excersice: 'PickExercise',
    myRoutines: 'MyRoutines',
  };
 },
};
</script>

<style>
</style>
