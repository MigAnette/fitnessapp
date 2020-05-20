<template>
  <v-row justify="center">
    <v-col cols="2">
      <h4 class="text-color">{{index + 1}}.</h4>
    </v-col>
    <v-col cols="3">
      <v-text-field dense class="corner center-text-input" outlined v-model.number="rep" type="number"></v-text-field>
    </v-col>
    <v-col cols="3">
      <v-text-field dense class="corner center-text-input" suffix="Kg" outlined v-model.number="kg"  type="number"></v-text-field>
    </v-col>
    <v-col cols="1">
      <v-btn outlined fab icon small @click="removeSet" v-if="removeIcon" color="grey darken-1">
        <v-icon>mdi-trash-can</v-icon>
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "MakeRepAndKg",
  props: ["i", "index"],
  data() {
    return {
       removeIcon: false
    };
  },
  methods: {
    removeSet() {
      this.$store.commit("exercise/REMOVE_SET", {
        index: this.index,
        i: this.i
      });
    },
    deleteIcon() {
      if (this.index == 0) {
        this.removeIcon = false;
      } else {
        this.removeIcon = true;
      }
    }
  },
  created() {
    this.deleteIcon();
  },
  computed: {
    rep: {
      get() {
        return this.$store.state.exercise.exerciseTest[this.i].repsAndKg[
          this.index
        ].rep;
      },
      set(value) {
        this.$store.commit("exercise/UPDATE_REP", {
          value,
          index: this.index,
          i: this.i
        });
      }
    },
    kg: {
      get() {
        return this.$store.state.exercise.exerciseTest[this.i].repsAndKg[
          this.index
        ].kg;
      },
      set(value) {
        this.$store.commit("exercise/UPDATE_KG", {
          value,
          index: this.index,
          i: this.i
        });
      }
    }
  }
};
</script>

<style>
</style>
