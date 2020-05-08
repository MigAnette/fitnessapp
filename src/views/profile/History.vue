<template>
  <div>
    <back-button></back-button>
      <v-btn :to="{name: 'SingleHistory', params: {history_id: id}}">Historie</v-btn>
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
      id: 'hej'
  };
 },
};
</script>

<style>
</style>
