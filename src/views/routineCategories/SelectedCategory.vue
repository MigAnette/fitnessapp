<template>
  <div>
    <v-btn
      :to="{name: 'PreRoutine', params: {category_name: this.$route.params.category_name, routine_id: id}}"
    >Rutine</v-btn>
  </div>
</template>

<script>
export default {
  name: "SelectedCategory",
  data() {
    return {
      id: "hej"
    };
  }
};
</script>

<style>
</style>
