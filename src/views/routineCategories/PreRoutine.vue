<template>
  <div>
      <v-btn :to="{name: 'PreCompletedRoutine', params: {category_name: this.$route.params.category_name, routine_id: this.$route.params.routine_id}}">finish</v-btn>
  </div>
</template>

<script>
export default {
  name: 'PreRoutine',
  data() {
  return {
  };
 },
};
</script>

<style>
</style>
