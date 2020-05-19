<template>
  <v-container>
    <v-btn small color="grey lighten-3" :to="{name: 'Profile'}" circle outlined fab>
      <v-icon color="#FFAE8A">mdi-arrow-left</v-icon>
    </v-btn>
    <v-row justify="center">
      <h1>
        <span class="text-color">Fuldførte</span> træninger
      </h1>
    </v-row>
    <history-card v-for="content in history" :key="content.id" :content="content"></history-card>
    <div class="navProtector"></div>
  </v-container>
</template>

<script>
import HistoryCard from "@/components/cards/HistoryCard.vue";

export default {
  name: "History",
  components: {
    HistoryCard
  },
  data() {
    return {
      navName: "SingleHistory",
    };
  },
  methods: {},
  computed: {
    history() {
      return this.$store.getters["user/history"];
    }
  },
  created() {
    this.$store.dispatch("user/fetchHistory");
  }
};
</script>

<style lang="scss">
.navProtector {
  height: 10vh;
  bottom: 0;
}
</style>
