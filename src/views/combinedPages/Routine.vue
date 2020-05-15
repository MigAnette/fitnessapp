<template>
  <div>
    <back-button></back-button>

    <v-row justify="center">
      <h1>{{routine.name}}</h1>
    </v-row>
    <v-row justify="center" v-if="categoryRoutines">
      <h4>{{routine.category}}</h4>
    </v-row>

    <div v-for="(content, index) in routine.exercises" :key="index">{{content.name}}</div>

    <div
      v-if="categoryRoutines"
      class="below-cards category-routines"
    >this is kategorier pages from RoutineCategories</div>

    <div v-if="myRoutines" class="below-cards my-routines">this is minerutiner pages from MyRoutines</div>
  </div>
</template>

<script>
import BackButton from "@/components/buttons/BackButton.vue";

export default {
  name: "Routine",
  components: {
    BackButton
  },
  data() {
    return {
      categoryRoutines: Boolean,
      myRoutines: Boolean,
      id: "hej"
    };
  },
  methods: {
    updateRoutineId() {
      const id = this.$route.params.routine_id;
      console.log(id);
      
      this.$store.commit("routine/SET_ROUTINE_ID", id);
    },
    categoryOrMine() {
      if (this.$route.params.nav_name == "kategorier") {
      this.categoryRoutines = true;
      this.myRoutines = false;
    } else if (this.$route.params.nav_name == "minerutiner") {
      this.myRoutines = true;
      this.categoryRoutines = false;
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
    this.categoryOrMine();
  },
  mounted() {
    this.$store.dispatch("routine/fetchIndividualRoutine");

  }
};
</script>

<style>
</style>
