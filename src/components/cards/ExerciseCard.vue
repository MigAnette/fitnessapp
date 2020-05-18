<template>
  <v-card class="my-5 corner" :class="{borderCheck: borderChecked }">
    <v-row align="center" justify="center">
      <v-col cols="3" class="py-0">
        <v-avatar tile>
          <v-img :src="content.image"></v-img>
        </v-avatar>
      </v-col>
      <v-col cols="7">
        <v-card-title class="py-1 pl-0">{{content.name}}</v-card-title>
      </v-col>
      <v-col cols="2"></v-col>
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

        <rep-and-kg
          v-for="(num, index) in content.repsAndKg"
          :content="num"
          @checked="checkedReps"
          :key="index"
          :i="i"
          :index="index"
        ></rep-and-kg>

        <v-row justify="center"></v-row>
      </div>
      <!-- ||||||||||||||||||||||||||||||||||||||||||||||||| MINS ||||||||||||||||||||||||||||||||||||||||||||||||||||||||| -->
      <div v-if="!content.repsAndSets">
        <v-row justify="center">
          <mins-and-seconds :i="i" :content="content.mins" @checked="checkedMins"></mins-and-seconds>
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
    return {
      amountChecked: [],
      borderChecked: false
    };
  },
  methods: {
    checkedReps(value) {
      if (value.check) {
        this.amountChecked.push(value.id);
      } else {
        this.amountChecked.pop(++value.id, 1);
      }

      if (this.content.repsAndKg.length == this.amountChecked.length) {
        this.borderChecked = true;
      } else {
        this.borderChecked = false;
      }

      if(this.borderChecked) {
        this.$store.commit("exercise/EXERCISE_DONE", this.i)
      } else {
        this.$store.commit("exercise/EXERCISE_NOT_DONE", this.i)
      }
    },
    checkedMins(value) {
      this.borderChecked = value;
      if(this.borderChecked) {
        this.$store.commit("exercise/EXERCISE_DONE", this.i)
      } else {
        this.$store.commit("exercise/EXERCISE_NOT_DONE", this.i)
      }
    }
  },
  created() {}
};
</script>

<style lang="scss">
.borderCheck {
  box-shadow: 0px 3px 1px -2px #ffae8a, 0px 2px 2px 0px #ffae8a,
    0px 1px 5px 0px #ffae8a !important;
}
</style>
