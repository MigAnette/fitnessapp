<template>
  <div>
    <back-button></back-button>

    <routine-card v-for="content in selectedRoutines" :key="content.id" :navName="navName" :content="content"></routine-card>

    <!-- <v-btn
      :to="{name: 'PreRoutine', params: {category_name: this.$route.params.category_name, routine_id: id}}"
    >Rutine</v-btn> -->

    <!-- <v-btn :to="{name: 'Routine', params: {nav_name: navName, routine_id: id}}">XRutine</v-btn> -->
  </div>
</template>

<script>
import BackButton from "@/components/buttons/BackButton.vue";
import RoutineCard from "@/components/cards/RoutineCard.vue";

export default {
  name: "SelectedCategory",
  components: {
    BackButton,
    RoutineCard
  },
  data() {
    return {
      id: "hej",
      navName: "kategorier",
    };
  },
  computed: {
    selectedRoutines() {
      return this.$store.getters['routine/selectedRoutines'];
    }
  },
  created() {
    this.$store.dispatch("routine/fetchSelectedRoutines");
  }
};
</script>

<style>
</style>
