<template>
  <v-card class="my-5">
    <v-row align="center">
      <v-col cols="3" class="py-0">
        <v-avatar tile>
          <v-img :src="content.image"></v-img>
        </v-avatar>
      </v-col>
      <v-col cols="9" class="py-1">
        <v-card-title>{{content.name}}</v-card-title>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row>
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

        <rep-and-kg
          v-for="(num, index) in content.repsAndKg"
          :key="index"
          class="mx-3"
          :i="i"
          :index="index"
        ></rep-and-kg>

        <v-row justify="center">
          <v-btn small color="#FFAE8A" @click="addSet" rounded class="white--text mb-3">
            <v-icon>mdi-plus</v-icon>Tilføj sæt
          </v-btn>
        </v-row>
      </div>
    </v-row>
  </v-card>
</template>

<script>
import RepAndKg from "@/components/repsKgMin/RepAndKg.vue";

export default {
  name: "MakeRoutineExerciseCard",
  props: ["content", "i"],
  components: {
    RepAndKg
  },
  data() {
    return {};
  },
  methods: {
    addSet() {}
  }
};
</script>

<style lang="scss">
.center-text-input {
  input {
    text-align: center;
  }
}
</style>
