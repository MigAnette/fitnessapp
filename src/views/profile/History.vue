<template>
  <div>
    <back-button></back-button>
      <v-btn v-for="content in history" :key="content.id" @click="navigation(content.id)">{{content.name}} </v-btn>
  </div>
</template>

<script>
import BackButton from "@/components/buttons/BackButton.vue";

export default {
  name: 'History',
  components: {
    BackButton
  },
  data() {
  return {
  };
 },
 methods: {
   navigation(id) {
     this.$store.commit("SET_HISTORY_ID", id);
      this.$router.push({
        name: "SingleHistory",
        params: { history_id: id }
      });
   }
 },
 computed: {
   history() {
     return this.$store.getters.history;
   }
 },
 created() {
   this.$store.dispatch("fetchHistory");
 }
};
</script>

<style>
</style>
