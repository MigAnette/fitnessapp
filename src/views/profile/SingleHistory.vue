<template>
  <v-container>
    <v-btn small color="grey lighten-3" :to="{name: 'History'}" circle outlined fab>
      <v-icon color="#FFAE8A">mdi-arrow-left</v-icon>
    </v-btn>

    <v-row justify="center">
      <h1>{{singleHistory.name}}</h1>
    </v-row>

    <v-container>
      <v-row>
        <h3>Beskrivelse</h3>
      </v-row>
      <v-row>
        <p>{{singleHistory.description}}</p>
      </v-row>
    </v-container>

    <history-exercise-card
      v-for="(content, index) in singleHistory.exercises"
      :content="content"
      :key="index"
    ></history-exercise-card>
  </v-container>
</template>

<script>
import HistoryExerciseCard from "@/components/cards/HistoryExerciseCard.vue";

export default {
  name: "SingleHistory",
  components: {
    HistoryExerciseCard
  },
  data() {
    return {};
  },
  methods: {
    updateHistoryId() {
      const id = this.$route.params.history_id;

      this.$store.commit("user/SET_HISTORY_ID", id);
    }
  },
  computed: {
    singleHistory() {
      return this.$store.getters["user/singleHistory"];
    }
  },
  created() {
    this.updateHistoryId();
  },
  mounted() {
    this.$store.dispatch("user/fetchSingleHistory");
  }
};
</script>

<style>
</style>
