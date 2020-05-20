<template>
  <!-- Disclosure: pageName = myRoutines, !pageName = category -->
  <div>
    <back-button v-if="!markChecked"></back-button>
    <go-back-modal v-if="markChecked" @goBack="goBack" :content="modalContent"></go-back-modal>
    <delete-modal
      :markChecked="markChecked"
      @deleteRoutine="deleteRoutine"
      :content="deleteModalContent"
      :pageName="pageName"
    ></delete-modal>
    <top-banner :content="routine.name"></top-banner>

    <v-container>
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
      <div class="navProtector"></div>
    </v-container>
  </div>
</template>

<script>
import BackButton from "@/components/buttons/BackButton.vue";
import ExerciseCard from "@/components/cards/ExerciseCard.vue";
import GoBackModal from "@/components/modals/GoBackModal.vue";
import DeleteModal from "@/components/modals/DeleteModal.vue";
import CompletedRoutineModal from "@/components/modals/CompletedRoutineModal.vue";
import TopBanner from "@/components/TopBanner.vue";

export default {
  name: "Routine",
  components: {
    BackButton,
    ExerciseCard,
    GoBackModal,
    DeleteModal,
    CompletedRoutineModal,
    TopBanner
  },
  data() {
    return {
      pageName: Boolean,
      editRoutine: false,
      modalContent: {
        text1: "Er du sikker på du vil anullere?",
        text2: "Din data",
        text3: "vil gå tabt"
      },
      deleteModalContent: {
        text1: "Er du sikker på du vil slette?",
        text2: "Din rutine",
        text3: "vil blive slettet"
      }
    };
  },
  methods: {
    deleteRoutine() {
      this.$store.dispatch("routine/deleteRoutine");
      this.$router.push({ name: "MyRoutines" });
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
    this.categoryOrMine();
  },
  mounted() {
    this.$store.dispatch("routine/fetchIndividualRoutine");
  }
};
</script>

<style>
</style>
