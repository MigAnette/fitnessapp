<template>
  <div>
    <back-button></back-button>
    <p>MakeRoutine</p>
    <make-routine-exercise-card v-for="(content, index) in exercise" :key="index" :content.sync="content"></make-routine-exercise-card>

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
       this.$store.dispatch('createRoutine');
      // this.$router.push({ name: this.myRoutines });
    },
    limitExercises() {
      if (this.exercise.length >= 5) {
        this.limited = false;
      }
    }
  },
  computed: {
    exercise: {
      get() {
        return this.$store.state.exerciseTest;
      },
      set(value) {
        this.$store.commit('UPDATE_EXERCISE', value);
      }
    }
  },
  created() {
    this.limitExercises();
  }
};
</script>

<style>
</style>
