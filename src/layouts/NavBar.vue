<template>
<div>

  <v-container>
    <slot></slot>
  </v-container>
  <bottom-nav></bottom-nav>
</div>
</template>

<script>
import BottomNav from "@/components/layout/BottomNav.vue";

export default {
     components: {
    BottomNav
  }
};
</script>

<style>
</style>
