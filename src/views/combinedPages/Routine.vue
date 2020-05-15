<template>
<!-- Disclosure: pageName = myRoutines, !pageName = category -->
  <div>
    <back-button></back-button>

    <v-row justify="center">
      <h1>{{routine.name}}</h1>
    </v-row>
    <v-row justify="center" v-if="!pageName">
      <h4>{{routine.category}}</h4>
    </v-row>

    <exercise-card v-for="(content, index) in routine.exercises" :editRoutine="editRoutine" :i="index" :content="content" :key="index"></exercise-card>

    <div
      v-if="!pageName"
      class="below-cards category-routines"
    >this is kategorier pages from RoutineCategories</div>

    <div v-if="pageName" class="below-cards my-routines">this is minerutiner pages from MyRoutines</div>
  </div>
</template>

<script>
import BackButton from "@/components/buttons/BackButton.vue";
import ExerciseCard from '@/components/cards/ExerciseCard.vue';

export default {
  name: "Routine",
  components: {
    BackButton,
    ExerciseCard
  },
  data() {
    return {
      pageName: Boolean,
      editRoutine: false,
      id: "hej"
    };
  },
  methods: {
    updateRoutineId() {
      const id = this.$route.params.routine_id;
      
      this.$store.commit("routine/SET_ROUTINE_ID", id);
    },
    categoryOrMine() {
      if (this.$route.params.nav_name == "kategorier") {
      this.pageName = false;
    } else if (this.$route.params.nav_name == "minerutiner") {
      this.pageName = true;
    }
    }
  },
  computed: {
    routine() {
      return this.$store.getters["routine/routine"];
    }
  },
  created() {
    this.updateRoutineId();
  },
  mounted() {
    this.categoryOrMine();
    this.$store.dispatch("routine/fetchIndividualRoutine");

  }
};
</script>

<style>
</style>
