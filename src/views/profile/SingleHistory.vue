<template>
  <v-container>
    <v-btn small color="grey lighten-3" :to="{name: 'History'}" circle outlined fab>
      <v-icon color="#FFAE8A">mdi-arrow-left</v-icon>
    </v-btn>

    <div>{{singleHistory.name}}</div>

    <div v-for="(content, index) in singleHistory.exercises" :key="index">{{content.name}}</div>
  </v-container>
</template>

<script>
export default {
  name: "SingleHistory",

  data() {
    return {};
  },
  computed: {
    singleHistory() {
      return this.$store.getters["user/singleHistory"];
    }
  },
  created() {
    this.$store.dispatch("user/fetchSingleHistory");
  }
};
</script>

<style>
</style>
