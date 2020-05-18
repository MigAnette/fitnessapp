<template>
  <v-card class="ma-4 corner" @click="sendData">
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
  </v-card>
</template>

<script>
export default {
  name: "PickExerciseCard",
  props: ["content"],
  data() {
    return {
      routeName: "MakeRoutine"
    };
  },
  methods: {
    sendData() {
      let data;
      
      if(this.content.repsAndSets) {
        data = {
        image: this.content.image,
        name: this.content.name,
        repsAndSets: this.content.repsAndSets,
        repsAndKg: [
          {rep: 0, kg: 0}
        ]
      };
      } else {
        data = {
        image: this.content.image,
        name: this.content.name,
        repsAndSets: this.content.repsAndSets,
        mins: 0
      };
      }

      this.$store.commit("exercise/SET_EXERCISE_TEST", data);
      this.$router.push({
        name: this.routeName
      });
    }
  }
};
</script>

<style>
</style>
