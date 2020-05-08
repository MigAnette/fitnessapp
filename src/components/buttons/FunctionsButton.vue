<template>
  <v-btn color="#FFAE8A" rounded @click="clickFunction" class="white--text" >{{buttonValue}}</v-btn>
</template>

<script>
export default {
  name: 'FunctionsButton',
  props: ["buttonValue"],
  data() {
  return {
  };
 },
 methods: {
   clickFunction() {
     this.$emit('functionClicked')
   }
 },
};
</script>

<style>
</style>
