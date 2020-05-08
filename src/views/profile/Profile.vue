<template>
  <div>
    <navigation-button :routeName="routeName" buttonValue="Historik"></navigation-button>
  </div>
</template>

<script>
import NavigationButton from '@/components/buttons/NavigationButton.vue';

export default {
  name: 'Profile',
  components: {
    NavigationButton
  },
  data() {
  return {
    routeName: 'History'
  };
 },
};
</script>

<style>
</style>
