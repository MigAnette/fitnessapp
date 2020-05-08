<template>
  <div>
      <navigation-button :routeName="routeName" buttonValue="Øvelser"></navigation-button>
  </div>
</template>

<script>
import NavigationButton from '@/components/buttons/NavigationButton.vue';

export default {
  name: 'PickExercise',
  components: {
    NavigationButton
  },
  data() {
  return {
    routeName: 'MakeRoutine'
  };
 },
};
</script>

<style>
</style>
