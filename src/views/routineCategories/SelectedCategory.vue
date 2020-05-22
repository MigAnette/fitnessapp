<template>
  <div>
    <back-button></back-button>
    <v-container>
      <v-row justify="center">
        <h1>
          <span class="text-color">{{categoryName | capitalize }}</span> rutiner
        </h1>
      </v-row>
      <routine-card
        v-for="content in selectedRoutines"
        :key="content.id"
        :navName="navName"
        :content="content"
      ></routine-card>
      <div class="navProtector"></div>
    </v-container>
  </div>
</template>

<script>
import BackButton from "@/components/buttons/BackButton.vue";
import RoutineCard from "@/components/cards/RoutineCard.vue";

export default {
  name: "SelectedCategory",
  components: {
    BackButton,
    RoutineCard
  },
  data() {
    return {
      navName: "kategorier",
      categoryName: this.$route.params.category_name
    };
  },
  methods: {
    updateCategoryName() {
      const name = this.$route.params.category_name;
      this.$store.commit("routine/SET_CATEGORY_NAME", name);
    }
  },
  computed: {
    selectedRoutines() {
      return this.$store.getters["routine/selectedRoutines"];
    }
  },
  created() {
    this.updateCategoryName();
  },
  mounted() {
    this.$store.dispatch("routine/fetchSelectedRoutines");
  }
};
</script>

<style>
</style>
