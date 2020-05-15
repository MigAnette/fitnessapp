<template>
  <v-card class="my-5 corner">
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

        <rep-and-kg v-for="(num, index) in content.repsAndKg" :content="num" :key="index" :i="i" :index="index"></rep-and-kg>

        <v-row justify="center">
      
        </v-row>
      </div>
      <!-- ||||||||||||||||||||||||||||||||||||||||||||||||| MINS ||||||||||||||||||||||||||||||||||||||||||||||||||||||||| -->
      <div v-if="!content.repsAndSets">
        <v-row justify="center">
          <mins-and-seconds :i="i" :content="content.mins"></mins-and-seconds>
        </v-row>
      </div>
    </v-row>
  </v-card>
</template>

<script>
import RepAndKg from "@/components/repsKgMin/EditRepAndKg.vue";
import MinsAndSeconds from "@/components/repsKgMin/EditMinsAndSeconds.vue";

export default {
  name: "ExerciseCard",
  props: ["content", "editRoutine", "i"],
  components: {
    RepAndKg,
    MinsAndSeconds
  },
  data() {
    return {};
  },
  methods: {
    removeExercise() {
      console.log("removed");
    },
    addSet() {
      console.log("added");
    }
  }
};
</script>

<style>
</style>
