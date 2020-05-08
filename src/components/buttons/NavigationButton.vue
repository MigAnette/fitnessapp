<template>
  <v-btn :to="{name: routeName, params: routeParams}">{{buttonValue}}</v-btn>
</template>

<script>
export default {
  name: 'NavigationButton',
  props: ["routeName", "buttonValue", "routeParams"],
  data() {
  return {
  };
 },
};
</script>

<style>
</style>
