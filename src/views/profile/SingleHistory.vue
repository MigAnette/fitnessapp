<template>
  <div>
    <back-button></back-button>

    <div>{{singleHistory.name}} </div>

    <div v-for="(content, index) in singleHistory.exercises" :key="index">
      {{content.name}}
    </div>

  </div>
</template>

<script>
import BackButton from "@/components/buttons/BackButton.vue";

export default {
  name: 'SingleHistory',
  components: {
    BackButton
  },
  data() {
  return {
  };
 },
 computed: {
   singleHistory() {
     return this.$store.getters['user/singleHistory'];
   }
 },
 created() {
   this.$store.dispatch("user/fetchSingleHistory");
 }
};
</script>

<style>
</style>
