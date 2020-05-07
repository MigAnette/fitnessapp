<template>
  <v-app>
    <router-view></router-view>
    <bottom-nav></bottom-nav>
  </v-app>
</template>

<script>
import BottomNav from '@/components/layout/BottomNav.vue';

export default {
  name: 'App',
  components: {
    BottomNav
  },
  data() {
  return {
  };
 },
};
</script>

<style>
</style>
