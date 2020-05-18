<template>
  <v-row justify="center">
    <v-col cols="2">
      <h4 class="text-color">{{index + 1}}.</h4>
    </v-col>
    <v-col cols="3">
      <v-text-field dense class="corner center-text-input" outlined v-model.number="rep"></v-text-field>
    </v-col>
    <v-col cols="3">
      <v-text-field dense class="corner center-text-input" suffix="Kg" outlined v-model.number="kg"></v-text-field>
    </v-col>
    <v-col cols="1">
      <v-btn
        outlined
        fab
        icon
        small
        @click="checkExercise"
        :class="{markChecked: booleanCheck == true, notChecked: booleanCheck == false}"
      >
        <v-icon>mdi-check</v-icon>
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "EditRepAndKg",
  props: ["i", "index", "content"],
  data() {
    return {
      checkColor: "",
      booleanCheck: false
    };
  },
  methods: {
    checkExercise() {
      this.booleanCheck = !this.booleanCheck;

      if (this.booleanCheck == true) {
        this.$store.commit("routine/SET_MARK_CHECKED", true);
      }

      this.$emit("checked", { check: this.booleanCheck, id: this.index });
    }
  },
  computed: {
    rep: {
      get() {
        return this.$store.state.routine.routine.exercises[this.i].repsAndKg[
          this.index
        ].rep;
      },
      set(value) {
        this.$store.commit("routine/EDIT_REP", {
          value,
          index: this.index,
          i: this.i
        });
      }
    },
    kg: {
      get() {
        return this.$store.state.routine.routine.exercises[this.i].repsAndKg[
          this.index
        ].kg;
      },
      set(value) {
        this.$store.commit("routine/EDIT_KG", {
          value,
          index: this.index,
          i: this.i
        });
      }
    }
  }
};
</script>

<style lang="scss">
.markChecked {
  color: #ffae8a !important;
}

.notChecked {
  color: #757575 !important;
}
</style>
