<template>
  <div>
    <back-button></back-button>
    <navigation-button :routeName="routeName" buttonValue="Færdig"></navigation-button>
  </div>
</template>

<script>
import NavigationButton from "@/components/buttons/NavigationButton.vue";
import BackButton from "@/components/buttons/BackButton.vue";

export default {
  name: "PreCompletedRoutine",
  components: {
    NavigationButton,
    BackButton
  },
  data() {
    return {
      routeName: "RoutineCategories"
    };
  }
};
</script>

<style>
</style>
