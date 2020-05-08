<template>
  <v-btn color="#FFAE8A" rounded class="white--text" :to="{name: routeName, params: routeParams}">{{buttonValue}}</v-btn>
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
