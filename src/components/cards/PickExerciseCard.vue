<template>
  <v-card class="ma-4" @click="sendData">
    <v-img :src="content.image"></v-img>
    <v-card-title>{{content.name}}</v-card-title>
  </v-card>
</template>

<script>
export default {
  name: "PickExerciseCard",
  props: ["content"],
  data() {
    return {
      routeName: "MakeRoutine"
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
      this.$router.push({
        name: this.routeName
      });
    }
  }
};
</script>

<style>
</style>
