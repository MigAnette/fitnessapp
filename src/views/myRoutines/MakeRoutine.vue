<template>
  <div>
    <back-button></back-button>
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

    <!-- <p>{{exercise[0].repsAndKg}} </p> -->
    <navigation-button v-if="limited" :routeName="excersice" buttonValue="Øvelser"></navigation-button>
    <functions-button buttonValue="Færdig" @functionClicked="handleCreate"></functions-button>
  </div>
</template>

<script>
import NavigationButton from "@/components/buttons/NavigationButton.vue";
import FunctionsButton from "@/components/buttons/FunctionsButton.vue";
import MakeRoutineExerciseCard from "@/components/cards/MakeRoutineExerciseCard.vue";
import BackButton from "@/components/buttons/BackButton.vue";

export default {
  name: "MakeRoutine",
  components: {
    NavigationButton,
    FunctionsButton,
    BackButton,
    MakeRoutineExerciseCard
  },
  data() {
    return {
      excersice: "PickExercise",
      myRoutines: "MyRoutines",
      limited: true
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
