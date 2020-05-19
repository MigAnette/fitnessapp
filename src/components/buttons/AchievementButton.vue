<template>
  <v-col>
    <v-row justify="center">
      <v-btn x-large fab outlined icon>
        <v-icon :color="content.color" style="font-size: 50px;" x-large>{{content.icon}}</v-icon>
      </v-btn>
      <h4 class="caption">{{content.text}}</h4>
    </v-row>
  </v-col>
</template>

<script>
export default {
  name: "AchievementButton",
  props: ["content"],
  data() {
    return {};
  }
};
</script>

<style lang="scss">
</style>
