<template>
  <v-dialog v-model="dialog" persistent max-width="500">
    <template v-slot:activator="{ on }">
      <v-btn
        v-on="on"
        color="#FFAE8A"
        :disabled="exercisesMarked"
        @click="saveDoneRoutine"
        rounded
        class="white--text"
      >Færdig</v-btn>
    </template>

    <v-card class="corner pa-4 py-9">
      <v-row justify="center" class="mb-4">
        <h1>
          <span class="text-color">Godt</span> gået
        </h1>
      </v-row>

      <v-row justify="center" class="my-8">
        <div class="completed-circle icon-circle">
          <v-row justify="center" align="center">
            <v-icon color="green" x-large style="font-size: 90px;"  justify="center" >mdi-trophy-variant</v-icon>
          </v-row>
        </div>
      </v-row>

      <v-row justify="center" class="mt-4">
        <h2>Du fuldførte</h2>
      </v-row>
      <v-row justify="center" class="mb-4">
        <h2 class="text-color">{{content.name}}</h2>
      </v-row>

      <v-row justify="center">
        <v-col cols="4" class="coll-center">
          <h4 class="text-center">Tid</h4>
          <div class="completed-circle text-circle">
            <v-row justify="center" >
              <h2 class="text-color">9.50</h2>
            </v-row>
          </div>
        </v-col>
        <v-col cols="4" class="coll-center">
          <h4 class="text-center">Kj</h4>
          <div class="completed-circle text-circle">
            <v-row justify="center" >
              <h2 class="text-color">85</h2>
            </v-row>
          </div>
        </v-col>
        <v-col cols="4" class="coll-center">
          <h4 class="text-center">Øvelser</h4>
          <div class="completed-circle text-circle">
            <v-row justify="center" >
              <h2 class="text-color">{{exercises}}</h2>
            </v-row>
          </div>
        </v-col>
      </v-row>
      <v-divider color="#707070"></v-divider>
      <v-row justify="center" align="center" class="mt-3">
        <navigation-button :routeName="routeName" buttonValue="Videre"></navigation-button>

        <v-btn color="#3D3D3D" rounded class="white--text ml-5" :to="{name: historyName}">Historik</v-btn>
      </v-row>
    </v-card>
  </v-dialog>
</template>

<script>
import NavigationButton from "@/components/buttons/NavigationButton.vue";

export default {
  name: "CompletedRoutineModal",
  props: ["content", "pageName", "exercisesMarked"],
  components: {
    NavigationButton
  },
  data() {
    return {
      dialog: false,
      exercises: 0,
      historyName: "History"
    };
  },
  methods: {
    exerciseAmount() {
      const amount = this.content.exercises.length;
      this.exercises = amount;
    },
    saveDoneRoutine() {
      this.$store.dispatch("routine/saveDoneRoutine");
    }
  },
  computed: {
    routeName() {
      if (this.pageName == true) {
        return "MyRoutines";
      } else {
        return "RoutineCategories";
      }
    }
  },
  mounted() {
    this.exerciseAmount();
  },
  updated() {
    this.exerciseAmount();
  }
};
</script>

<style lang="scss">
.completed-circle {
  border: 1px solid #757575;
  border-radius: 100%;
}
.icon-circle {
  width: 135px;
  height: 135px;
  display: flex;
}

.coll-center {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.text-circle {
  width: 80px;
  height: 80px;
  margin-right: 0;
  display: flex;
  align-items: center;

  h2 {
    font-size: 24px;
    text-decoration: underline;
  }
}
</style>
