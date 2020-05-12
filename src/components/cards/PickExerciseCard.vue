<template>
  <v-card class="ma-4" @click="sendData">
      <v-img :src="content.image" aspect-ratio="1.6"></v-img>
      <v-card-title>{{content.name}} </v-card-title>
  </v-card>
</template>

<script>
export default {
  name: 'PickExerciseCard',
  props: ["content"],
  data() {
  return {
  };
 },
 methods: {
     sendData() {
        const data = {
            image: this.content.image,
            name: this.content.name,
            repsAndSets: this.content.repsAndSets,
            description: this.content.description
        };

        this.$store.commit("SET_EXERCISE_TEST", data);

     }
 }
};
</script>

<style>
</style>
