<template>
  <div>
    <div v-if="navName1">
      this is kategorier pages
      <navigation-button :routeName="routeName" buttonValue="Færdig" :routeParams="kategorierParams"></navigation-button>
    </div>

    <div v-if="navName2">
      this is minerutiner pages
      <navigation-button :routeName="routeName" buttonValue="Færdig" :routeParams="mineRutinerParams"></navigation-button>
    </div>
  </div>
</template>

<script>
import NavigationButton from "@/components/buttons/NavigationButton.vue";

export default {
  name: "Routine",
  components: {
    NavigationButton
  },
  data() {
    return {
      navName1: Boolean,
      navName2: Boolean,
      id: "hej",
      routeName: "CompletedRoutine",
      kategorierParams: {
        nav_name: "kategorier",
        routine_id: this.$route.params.routine_id
      },
      mineRutinerParams: {
        nav_name: "minerutiner",
        routine_id: this.$route.params.routine_id
      }
    };
  },
  created() {
    if (this.$route.params.nav_name == "kategorier") {
      this.navName1 = true;
      this.navName2 = false;
    } else if (this.$route.params.nav_name == "minerutiner") {
      this.navName2 = true;
      this.navName1 = false;
    }
  }
};
</script>

<style>
</style>
