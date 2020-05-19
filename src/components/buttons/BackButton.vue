<template>
  <v-btn absolute class="ma-2" small color="grey lighten-3" @click="goBack" circle outlined fab>
      <v-icon color="#FFAE8A" large>mdi-arrow-left</v-icon>
  </v-btn>
</template>

<script>
export default {
  name: 'BackButton',
  data() {
  return {
  };
 },
 methods: {
     goBack() {
         this.$router.go(-1);
     }
 } 
};
</script>

<style>
</style>
