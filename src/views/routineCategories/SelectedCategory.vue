<template>
  <div>
    <v-btn
      :to="{name: 'PreRoutine', params: {category_name: this.$route.params.category_name, routine_id: id}}"
    >Rutine</v-btn>


    <v-btn :to="{name: 'Routine', params: {nav_name: navName, routine_id: id}}">XRutine</v-btn>
  </div>
</template>

<script>
export default {
  name: "SelectedCategory",
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
