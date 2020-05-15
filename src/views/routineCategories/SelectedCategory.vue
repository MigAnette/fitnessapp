<template>
  <div>
    <back-button></back-button>

    <routine-card
      v-for="content in selectedRoutines"
      :key="content.id"
      :navName="navName"
      :content="content"
    ></routine-card>
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
      id: "hej",
      navName: "kategorier"
    };
  },
  methods: {
    updateCategoryName() {
      const name = this.$route.params.category_name;
      console.log(name);
      
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
