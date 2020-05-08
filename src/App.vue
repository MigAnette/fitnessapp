<template>
  <v-app>
    <v-container>
      <router-view></router-view>
    </v-container>
    <bottom-nav></bottom-nav>
  </v-app>
</template>

<script>
import BottomNav from "@/components/layout/BottomNav.vue";

export default {
  name: "App",
  components: {
    BottomNav
  },
  data() {
    return {};
  }
};
</script>

<style>
</style>
