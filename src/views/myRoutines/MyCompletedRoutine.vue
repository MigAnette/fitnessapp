<template>
  <div>
      <navigation-button :routeName="routeName" buttonValue="Færdig"></navigation-button>
  </div>
</template>

<script>
import NavigationButton from '@/components/buttons/NavigationButton.vue';

export default {
  name: 'MyCompletedRoutine',
  components: {
    NavigationButton
  },
  data() {
  return {
    routeName: 'MyRoutines',
    
  };
 },
};
</script>

<style>
</style>
