<template>
  <v-bottom-navigation fixed class="hidden-md-and-up" grow color="#FFAE8A">
      <v-btn height="100%" :to="{name: 'RoutineCategories'}" value="kategorier">
          <span>Kategorier</span>
          <v-icon>mdi-view-list</v-icon>
      </v-btn>
      <v-btn height="100%" :to="{name: 'MyRoutines'}" value="mine rutiner">
          <span>Mine Rutiner</span>
          <v-icon>mdi-clipboard-text</v-icon>
      </v-btn>
      <v-btn height="100%" :to="{name: 'Profile'}" value="Profil">
          <span>Profil</span>
          <v-icon>mdi-account-outline</v-icon>
      </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  name: 'BottomNav',
  data() {
  return {
  };
 },
};
</script>

<style>
</style>
