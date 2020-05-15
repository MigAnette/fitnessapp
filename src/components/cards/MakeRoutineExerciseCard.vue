<template>
  <v-card class="my-5">
    <v-row align="center" justify="center">
      <v-col cols="3" class="py-0">
        <v-avatar tile>
          <v-img :src="content.image"></v-img>
        </v-avatar>
      </v-col>
      <v-col cols="7">
        <v-card-title class="py-1 pl-0">{{content.name}}</v-card-title>
      </v-col>
      <v-col cols="2">
        <v-btn fab icon @click="removeExercise" color="red" small>
          <v-icon class="icon-size">mdi-minus-circle</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row>
      <!-- |||||||||||||||||||||||||||||||||||||||||||||||||REPS AND KG||||||||||||||||||||||||||||||||||||||||||||||||||||||||| -->
      <div v-if="content.repsAndSets">
        <v-row justify="center">
          <v-col cols="3" class="pb-0">
            <p class="mb-0">Sets</p>
          </v-col>
          <v-col cols="4" class="pb-0">
            <p class="mb-0">Reps</p>
          </v-col>
          <v-col cols="4" class="pb-0">
            <p class="mb-0">Vægt</p>
          </v-col>
        </v-row>

        <rep-and-kg v-for="(num, index) in content.repsAndKg" :key="index" :i="i" :index="index"></rep-and-kg>

        <v-row justify="center">
          <v-btn small color="#FFAE8A" @click="addSet()" rounded class="white--text mb-3">
            <v-icon>mdi-plus</v-icon>Tilføj sæt
          </v-btn>
        </v-row>
      </div>
      <!-- ||||||||||||||||||||||||||||||||||||||||||||||||| MINS ||||||||||||||||||||||||||||||||||||||||||||||||||||||||| -->
      <div v-if="!content.repsAndSets">
        <v-row justify="center">
          <mins-and-seconds :i="i"></mins-and-seconds>
        </v-row>
      </div>
    </v-row>
  </v-card>
</template>

<script>
import RepAndKg from "@/components/repsKgMin/RepAndKg.vue";
import MinsAndSeconds from "@/components/repsKgMin/MinsAndSeconds.vue";

export default {
  name: "MakeRoutineExerciseCard",
  props: ["content", "i"],
  components: {
    RepAndKg,
    MinsAndSeconds
  },
  data() {
    return {};
  },
  methods: {
    addSet() {
      const data = {
        rep: 0,
        kg: 0
      };

      this.$store.commit("exercise/ADD_SET", { data, i: this.i });
    },
    removeExercise() {
      this.$store.commit("exercise/REMOVE_EXERCISE", { i: this.i });
    }
  }
};
</script>

<style lang="scss">
.center-text-input {
  input {
    text-align: center;
  }
}
.icon-size {
  font-size: 36px !important;
}
</style>
