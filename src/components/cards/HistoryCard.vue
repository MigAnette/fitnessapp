<template>
  <v-card class="routine-card corner ma-4" @click="navigation">
    <v-img
      src="@/assets/treadmill.jpg"
      aspect-ratio="2.4"
      gradient="to top right, rgba(25,32,72,.7), rgba(200,115,201,.33)"
      class="pb-0"
    >
      <v-card-subtitle
        class="white--text"
      >{{format(new Date(content.created_at.toDate()), 'dd/MM/yyyy, k.mm')}}</v-card-subtitle>
      <v-card-text class="white--text pt-3 pb-0">{{exercises}} Øvelser</v-card-text>
      <v-card-title v-if="!content.category" class="white--text pt-0">{{content.name}} </v-card-title>
      <v-card-title v-if="content.category" class="white--text pt-0">
        <span class="text-color">{{content.category | capitalize}}</span>
        - {{content.name}}
      </v-card-title>
    </v-img>
  </v-card>
</template>

<script>
import { format } from "date-fns";

export default {
  name: "RoutineCard",
  props: ["content"],
  data() {
    return {
      exercises: 0,
      format
    };
  },
  methods: {
    navigation() {
      this.$store.commit("user/SET_HISTORY_ID", this.content.id);
      this.$router.push({
        name: "SingleHistory",
        params: { history_id: this.content.id }
      });
    },
    exerciseAmount() {
      const amount = this.content.exercises.length;
      this.exercises = amount;
    }
  },
  filters: {
    colorFirstWord: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.substring(0, value.indexOf(" "));
    }
  },
  created() {
    this.exerciseAmount();
  }
};
</script>

<style lang="scss">
</style>