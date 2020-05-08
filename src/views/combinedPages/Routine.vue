<template>
  <div>
      
      <div v-if="navName1">this is kategorier pages</div>
     
      <div v-if="navName2">this is minerutiner pages</div>



  </div>
</template>

<script>
export default {
  name: 'Routine',
  data() {
  return {
      navName1: Boolean,
      navName2: Boolean
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
