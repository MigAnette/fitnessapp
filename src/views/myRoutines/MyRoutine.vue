<template>
  <div>
      <v-btn :to="{name: 'MyCompletedRoutine', params: {routine_id: this.$route.params.routine_id}}">Færdig</v-btn>
  </div>
</template>

<script>
export default {
  name: 'MyRoutine',
  data() {
  return {
  };
 },
};
</script>

<style>
</style>
