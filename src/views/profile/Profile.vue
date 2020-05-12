<template>
  <div>
    <navigation-button :routeName="routeName" buttonValue="Historik"></navigation-button>
  
    <div>{{user.name}} </div>
  
  </div>
</template>

<script>
import NavigationButton from '@/components/buttons/NavigationButton.vue';

export default {
  name: 'Profile',
  components: {
    NavigationButton
  },
  data() {
  return {
    routeName: 'History'
  };
 },
 computed: {
   user() {
     return this.$store.getters.user;
   }
 },
 created() {
   this.$store.dispatch("fetchUser");
 }
};
</script>

<style>
</style>
