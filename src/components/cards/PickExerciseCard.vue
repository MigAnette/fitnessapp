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
            image: this.props.content.image,
            name: this.props.content.name,
            repsAndSets: this.props.content.repsAndSets
        };

        this.$store.commit("SET_EXERCISE_TEXT", data);

     }
 }
};
</script>

<style>
</style>
