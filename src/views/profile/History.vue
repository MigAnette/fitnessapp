<template>
  <div>
     <v-btn small color="grey lighten-3" :to="{name: 'Profile'}" circle outlined fab>
      <v-icon color="#FFAE8A">mdi-arrow-left</v-icon>
  </v-btn>
      <v-btn v-for="content in history" :key="content.id" @click="navigation(content.id)">{{content.name}} </v-btn>
  </div>
</template>

<script>

export default {
  name: 'History',

  data() {
  return {
  };
 },
 methods: {
   navigation(id) {
     this.$store.commit("user/SET_HISTORY_ID", id);
      this.$router.push({
        name: "SingleHistory",
        params: { history_id: id }
      });
   }
 },
 computed: {
   history() {
     return this.$store.getters['user/history'];
   }
 },
 created() {
   this.$store.dispatch("user/fetchHistory");
 }
};
</script>

<style>
</style>
