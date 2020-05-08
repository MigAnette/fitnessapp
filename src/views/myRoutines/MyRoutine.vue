<template>
  <div>
    <back-button></back-button>
    <navigation-button :routeName="routeName" buttonValue="Færdig" :routeParams="routeParams"></navigation-button>
  </div>
</template>

<script>
import NavigationButton from "@/components/buttons/NavigationButton.vue";
import BackButton from "@/components/buttons/BackButton.vue";

export default {
  name: "MyRoutine",
  components: {
    NavigationButton,
    BackButton
  },
  data() {
    return {
      routeName: "MyCompletedRoutine",
      routeParams: { routine_id: this.$route.params.routine_id }
    };
  }
};
</script>

<style>
</style>
