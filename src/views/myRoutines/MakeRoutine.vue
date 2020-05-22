<template>
  <div>
      <go-back-modal @goBack="goBack" :content="modalContent"></go-back-modal>
    <top-banner content="Lav Rutine"></top-banner>

    <v-container>
      <v-row justify="center">
        <!-- <h1>
          <span class="text-color">Lav</span> Rutine
        </h1> -->
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
        <navigation-button
          class="mr-3 my-8"
          :routeName="excersice"
          buttonValue="Øvelser"
          :working="limited"
        ></navigation-button>
        <functions-button class="mr-3 my-8" buttonValue="Færdig" @functionClicked="handleCreate"></functions-button>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import NavigationButton from "@/components/buttons/NavigationButton.vue";
import FunctionsButton from "@/components/buttons/FunctionsButton.vue";
import MakeRoutineExerciseCard from "@/components/cards/MakeRoutineExerciseCard.vue";
import GoBackModal from "@/components/modals/GoBackModal.vue";
import * as easings from "vuetify/es5/services/goto/easing-patterns";
import TopBanner from "@/components/TopBanner.vue";


export default {
  name: "MakeRoutine",
  components: {
    NavigationButton,
    FunctionsButton,
    MakeRoutineExerciseCard,
    GoBackModal,
    TopBanner

  },
  data() {
    return {
      excersice: "PickExercise",
      myRoutines: "MyRoutines",
      limited: false,
      number: 9999,
      selector: "",
      duration: 300,
      offset: 0,
      easing: "easeInOutCubic",
      easings: Object.keys(easings),
      modalContent: {
        text1: "Er du sikker på du vil anullere?",
        text2: "Din data",
        text3: "vil gå tabt"
      }
    };
  },
  methods: {
    handleCreate() {
      this.$store.dispatch("routine/createRoutine");
      this.$router.push({ name: this.myRoutines });
    },
    limitExercises() {
      if (this.exercise.length >= 5) {
        this.limited = true;
      }
    },
    goBack() {
      this.$store.commit("routine/EMPTY_ROUTINE");
      this.$store.commit("exercise/EMPTY_EXERCISE_TEST");
      this.$router.push({ name: this.myRoutines });
    },
    getLastElement() {
      const my_array = this.exercise;
      const lastElement = my_array.length - 1;
      if (lastElement == -1) {
        this.selector = "empty";
      } else {
        this.selector = "#t" + lastElement.toString();
        this.$nextTick(() => {
          this.$vuetify.goTo(this.target, this.options);
        });
      }
    }
  },
  computed: {
    target() {
      const value = this.selector;
      return value;
    },
    options() {
      return {
        duration: this.duration,
        offset: this.offset,
        easing: this.easing
      };
    },
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

    this.getLastElement();
  }
};
</script>

<style lang="scss">
.text-area-height {
  textarea {
    height: 90px;
  }
}
.row {
  margin-right: 0 !important;
  margin-left: 0 !important;
}
</style>
