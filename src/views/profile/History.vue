<template>
  <div>
      <v-btn :to="{name: 'SingleHistory', params: {history_id: id}}">Historie</v-btn>
  </div>
</template>

<script>
export default {
  name: 'History',
  data() {
  return {
      id: 'hej'
  };
 },
};
</script>

<style>
</style>
