<template>
  <div>
    <v-btn
      small
      absolute
      class="ma-2"
      color="grey lighten-3"
      :to="{name: 'History'}"
      circle
      outlined
      fab
    >
      <v-icon color="#FFAE8A" large>mdi-arrow-left</v-icon>
    </v-btn>
    <top-banner :content="singleHistory.name"></top-banner>

    <v-container>
      <div class="ml-7">
        <v-row>
          <h3>Beskrivelse</h3>
        </v-row>
        <v-row>
          <p>{{singleHistory.description}}</p>
        </v-row>
      </div>

      <history-exercise-card
        v-for="(content, index) in singleHistory.exercises"
        :content="content"
        :key="index"
      ></history-exercise-card>
    </v-container>
  </div>
</template>

<script>
import HistoryExerciseCard from "@/components/cards/HistoryExerciseCard.vue";
import TopBanner from "@/components/TopBanner.vue";

export default {
  name: "SingleHistory",
  components: {
    HistoryExerciseCard,
    TopBanner
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
