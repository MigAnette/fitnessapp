<template>
  <div>
    <make-routine-modal @goBack="goBack"></make-routine-modal>
    <v-row justify="center">
      <h1>
        <span class="text-color">Lav</span> Rutine
      </h1>
    </v-row>
    <v-container>
      <v-row>
        <v-text-field label="Navn på rutine" v-model="routineName"></v-text-field>
      </v-row>
      <v-row>
        <v-textarea class="text-area-height" label="Beskrivelse" v-model="routineDescription"></v-textarea>
      </v-row>
    </v-container>

    <make-routine-exercise-card
      v-for="(content, index) in exercise"
      :key="index"
      :i="index"
      :content="content"
    ></make-routine-exercise-card>

    <v-row justify="center">

    <navigation-button class="mr-3 my-8" v-if="limited" :routeName="excersice" buttonValue="Øvelser"></navigation-button>
    <functions-button class="mr-3 my-8" buttonValue="Færdig" @functionClicked="handleCreate"></functions-button>
    </v-row>
  </div>
</template>

<script>
import NavigationButton from "@/components/buttons/NavigationButton.vue";
import FunctionsButton from "@/components/buttons/FunctionsButton.vue";
import MakeRoutineExerciseCard from "@/components/cards/MakeRoutineExerciseCard.vue";
import MakeRoutineModal from "@/components/modals/MakeRoutineModal.vue";

export default {
  name: "MakeRoutine",
  components: {
    NavigationButton,
    FunctionsButton,
    MakeRoutineExerciseCard,
    MakeRoutineModal
  },
  data() {
    return {
      excersice: "PickExercise",
      myRoutines: "MyRoutines",
      limited: true,
    };
  },
  methods: {
    handleCreate() {
      this.$store.dispatch("routine/createRoutine");
      // this.$router.push({ name: this.myRoutines });
    },
    limitExercises() {
      if (this.exercise.length >= 5) {
        this.limited = false;
      }
    },
    goBack() {
      console.log('nice');
      this.$store.commit("routine/EMPTY_ROUTINE");
      this.$store.commit("exercise/EMPTY_EXERCISE_TEST");
      this.$router.push({ name: this.myRoutines });
      
    }
  },
  computed: {
    exercise() {
      return this.$store.getters["exercise/exerciseTest"];
    },
    routineName: {
      get() {
        return this.$store.state.routine.routineName;
      },
      set(value) {
        this.$store.commit("routine/SET_ROUTINE_NAME", value);
      }
    },
    routineDescription: {
      get() {
        return this.$store.state.routine.routineDescription;
      },
      set(value) {
        this.$store.commit("routine/SET_ROUTINE_DESCRIPTION", value);
      }
    }
  },
  created() {
    this.limitExercises();
  }
};
</script>

<style lang="scss">
.text-area-height {
  textarea {
    height: 90px;
  }
}
</style>
