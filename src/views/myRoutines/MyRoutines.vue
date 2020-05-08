<template>
  <div>

    <routine-card v-for="(content, index) in routineContent" :key="index" :navName="navName" :content="content"></routine-card>

    <v-btn :to="{name: 'MakeRoutine'}" color="#FFAE8A" class="white--text" fab right absolute> <v-icon>mdi-plus</v-icon> </v-btn>

    
    <!-- <v-btn :to="{name: 'MyRoutine', params: {routine_id: id}}">Rutine</v-btn> -->
    <!-- <p>testing combined pages folder to see about dynamic components and routes:</p> -->
    <!-- <v-btn :to="{name: 'Routine', params: {nav_name: navName, routine_id: id}}">XRutine</v-btn> -->

  </div>
</template>

<script>
import RoutineCard from "@/components/cards/RoutineCard.vue";

export default {
  name: 'MyRoutines',
  components: {
    RoutineCard
  },
  data() {
  return {
    id: 'hej',
    navName: 'minerutiner',
    routineContent: [
        {name: 'Styrketræning', exercises: 5}
      ]
  };
 },
};
</script>

<style>
</style>
