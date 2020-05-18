<template>
  <v-app>
   <component :is="layout">
      <router-view :key="$route.fullPath"></router-view>
   </component>
  </v-app>
</template>

<script>
const default_layout = "default";

export default {
  name: "App",
  data() {
    return {};
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || default_layout) + '-layout';
    },
  },
  methods: {
   
  },
  created() {
    this.$store.dispatch("user/setUser");
    
  }
};
</script>

<style>
</style>
