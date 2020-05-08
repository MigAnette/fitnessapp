<template>
  <div>
    <back-button></back-button>
    <v-btn
      :to="{name: 'PreRoutine', params: {category_name: this.$route.params.category_name, routine_id: id}}"
    >Rutine</v-btn>


    <v-btn :to="{name: 'Routine', params: {nav_name: navName, routine_id: id}}">XRutine</v-btn>
  </div>
</template>

<script>
import BackButton from "@/components/buttons/BackButton.vue";

export default {
  name: "SelectedCategory",
  components: {
     BackButton
  },
  data() {
    return {
      id: "hej",
      navName: 'kategorier'
    };
  }
};
</script>

<style>
</style>
