<template>
  <v-card class="routine-card corner ma-4" @click="navigation">
    <v-img
      src="@/assets/treadmill.jpg"
      aspect-ratio="2.4"
      gradient="to top right, rgba(25,32,72,.7), rgba(200,115,201,.33)"
      class="pb-0"
    >
      <v-card-text class="white--text pt-12 pb-0">{{content.exercises}} Øvelser</v-card-text>
      <v-card-title class="white--text py-0" v-text="content.name"></v-card-title>
    </v-img>
  </v-card>
</template>

<script>
export default {
  name: "RoutineCard",
  props: ["content", "navName"],
  data() {
    return {};
  },
  methods: {
    navigation() {
      this.$store.commit("SET_ROUTINE_ID", this.content.id);
      this.$router.push({
        name: "Routine",
        params: { nav_name: this.navName, routine_id: this.content.id }
      });
    }
  }
};
</script>

<style>
</style>
