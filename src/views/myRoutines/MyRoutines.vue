<template>
  <div>
    <v-btn :to="{name: 'MyRoutine', params: {routine_id: id}}">Rutine</v-btn>
    <v-btn :to="{name: 'MakeRoutine'}" fab right absolute> <v-icon>mdi-plus</v-icon> </v-btn>

  </div>
</template>

<script>
export default {
  name: 'MyRoutines',
  data() {
  return {
    id: 'hej'
  };
 },
};
</script>

<style>
</style>
