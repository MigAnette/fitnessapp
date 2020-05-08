<template>
  <div>
      <back-button></back-button>
       <div v-if="navName1">this is kategorier pages from RoutineCategories
           <navigation-button :routeName="kategorier" buttonValue="Fortsæt"></navigation-button>
       </div>
     
      <div v-if="navName2">this is minerutiner pages from MyRoutines
           <navigation-button :routeName="mineRutiner" buttonValue="Fortsæt"></navigation-button>

      </div>
    <navigation-button :routeName="singleHistoryRoute" buttonValue="Historik" :routeParams="singleHistoryParams"></navigation-button>
  </div>
</template>

<script>
import NavigationButton from '@/components/buttons/NavigationButton.vue';
import BackButton from "@/components/buttons/BackButton.vue";

export default {
  name: 'CompletedRoutine',
  components: {
    NavigationButton,
    BackButton
  },
  data() {
  return {
      navName1: Boolean,
      navName2: Boolean,
      singleHistoryRoute: 'SingleHistory',
      singleHistoryParams: {history_id: this.$route.params.routine_id},
      kategorier: 'RoutineCategories',
      mineRutiner: 'MyRoutines'
  };
 },
 created() {
     if(this.$route.params.nav_name == 'kategorier') {
         this.navName1 = true;
         this.navName2 = false;
     } else if(this.$route.params.nav_name == 'minerutiner') {
         this.navName2 = true;
         this.navName1 = false;
     }
 }
};
</script>

<style>
</style>
