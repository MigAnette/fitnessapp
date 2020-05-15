<template>
  <v-btn color="#FFAE8A" :disabled="working" rounded class="white--text" :to="{name: routeName, params: routeParams}">{{buttonValue}}</v-btn>
</template>

<script>
export default {
  name: 'NavigationButton',
  props: ["routeName", "buttonValue", "routeParams", "working"],
  data() {
  return {
  };
 },
};
</script>

<style>
</style>
