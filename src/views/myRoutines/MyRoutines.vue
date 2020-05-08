<template>
  <div>
    <v-btn :to="{name: 'MyRoutine', params: {routine_id: id}}">Rutine</v-btn>
    <v-btn :to="{name: 'MakeRoutine'}" fab right absolute> <v-icon>mdi-plus</v-icon> </v-btn>

    <p>testing combined pages folder to see about dynamic components and routes:</p>
    <v-btn :to="{name: 'Routine', params: {nav_name: navName, routine_id: id}}">XRutine</v-btn>

  </div>
</template>

<script>
export default {
  name: 'MyRoutines',
  data() {
  return {
    id: 'hej',
    navName: 'minerutiner'
  };
 },
};
</script>

<style>
</style>
