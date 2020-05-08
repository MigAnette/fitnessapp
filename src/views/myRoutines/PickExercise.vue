<template>
  <div>
    <back-button></back-button>
      <navigation-button :routeName="routeName" buttonValue="Øvelser"></navigation-button>
  </div>
</template>

<script>
import NavigationButton from '@/components/buttons/NavigationButton.vue';
import BackButton from "@/components/buttons/BackButton.vue";

export default {
  name: 'PickExercise',
  components: {
    NavigationButton,
    BackButton
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
