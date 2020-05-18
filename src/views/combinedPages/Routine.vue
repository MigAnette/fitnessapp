<template>
  <!-- Disclosure: pageName = myRoutines, !pageName = category -->
  <v-container>
    <back-button v-if="!markChecked"></back-button>
    <go-back-modal v-if="markChecked" @goBack="goBack" :content="modalContent"></go-back-modal>

    <v-btn
      v-if="pageName"
      @click="deleteRoutine"
      right
      absolute
      small
      :disabled="markChecked"
      icon
      circle
      fab
    >
      <v-icon>mdi-trash-can</v-icon>
    </v-btn>

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
      <completed-routine-modal
        :exercisesMarked="disabledButton"
        :pageName="pageName"
        :content="routine"
      ></completed-routine-modal>
    </v-row>
  </v-container>
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
    deleteRoutine() {
      this.$store.dispatch("routine/deleteRoutine");
      this.$router.push({ name: "MyRoutines" });
      console.log(this.routine.id);
    },
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
        this.$router.go(-1);
      }
      this.$store.commit("routine/SET_MARK_CHECKED", false);
      this.$store.commit("exercise/EMPTY_EXERCISE_DONE");
    }
  },
  computed: {
    routine() {
      return this.$store.getters["routine/routine"];
    },
    exerciseSize() {
      return this.$store.getters["routine/exerciseSize"];
    },
    markChecked() {
      return this.$store.getters["routine/markChecked"];
    },
    exerciseDone() {
      return this.$store.getters["exercise/exerciseDone"];
    },
    disabledButton() {
      if (this.exerciseDone.length == this.exerciseSize) {
        return false;
      } else {
        return true;
      }
    }
  },
  created() {
    this.updateRoutineId();
    console.log("created");

    this.categoryOrMine();
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    this.$store.dispatch("routine/fetchIndividualRoutine");
    console.log("mounted");
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
