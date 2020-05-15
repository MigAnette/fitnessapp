<template>
  <!-- Disclosure: pageName = myRoutines, !pageName = category -->
  <div>
    <back-button v-if="!markChecked"></back-button>
    <go-back-modal v-if="markChecked" @goBack="goBack" :content="modalContent"></go-back-modal>

    <v-row justify="center">
      <h1>{{routine.name}}</h1>
    </v-row>
    <v-row justify="center" v-if="!pageName">
      <h4>{{routine.category | capitalize}}</h4>
    </v-row>

    <exercise-card
      v-for="(content, index) in routine.exercises"
      :editRoutine="editRoutine"
      :i="index"
      :content="content"
      :key="index"
    ></exercise-card>

    <v-row justify="center">
      <completed-routine-modal :pageName="pageName" :content="routine"></completed-routine-modal>
    </v-row>
  </div>
</template>

<script>
import BackButton from "@/components/buttons/BackButton.vue";
import ExerciseCard from "@/components/cards/ExerciseCard.vue";
import GoBackModal from "@/components/modals/GoBackModal.vue";
import CompletedRoutineModal from "@/components/modals/CompletedRoutineModal.vue";

export default {
  name: "Routine",
  components: {
    BackButton,
    ExerciseCard,
    GoBackModal,
    CompletedRoutineModal
  },
  data() {
    return {
      pageName: Boolean,
      editRoutine: false,
      id: "hej",
      modalContent: {
        text1: "Er du sikker på du vil anullere?",
        text2: "Din data",
        text3: "vil gå tabt"
      }
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
    },
    goBack() {
      if (this.pageName == true) {
        this.$router.push({ name: "MyRoutines" });
      } else {
        this.$router.push({ name: "RoutineCategories" });
      }
    }
  },
  computed: {
    routine() {
      return this.$store.getters["routine/routine"];
    },
    markChecked() {
      return this.$store.getters["routine/markChecked"];
    }
  },
  created() {
    this.updateRoutineId();
  },
  mounted() {
    this.categoryOrMine();
    this.$store.dispatch("routine/fetchIndividualRoutine");
  },
  filters: {
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  }
};
</script>

<style>
</style>
