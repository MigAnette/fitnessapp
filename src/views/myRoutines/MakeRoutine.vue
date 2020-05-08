<template>
  <div>
      <p>MakeRoutine</p>
      <v-btn :to="{name: 'PickExercise'}">Øvelser</v-btn>
      <v-btn :to="{name: 'MyRoutines'}">Færdig</v-btn>
  </div>
</template>

<script>
export default {
  name: 'MakeRoutine',
  data() {
  return {
  };
 },
};
</script>

<style>
</style>
