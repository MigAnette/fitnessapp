<template>
  <div>
    <navigation-button :routeName="routeName" buttonValue="Historik"></navigation-button>

    <div>{{user.name}}</div>
    <div>{{user.allReps}}</div>
    <div v-for="(content, index) in user.achievments" :key="index">{{content.name}}</div>
  </div>
</template>

<script>
import NavigationButton from "@/components/buttons/NavigationButton.vue";

export default {
  name: "Profile",
  components: {
    NavigationButton
  },
  data() {
    return {
      routeName: "History"
    };
  },
  computed: {
    user() {
      return this.$store.getters["user/user"];
    }
  },
  created() {
    this.$store.dispatch("user/fetchUser");
  },
};
</script>

<style>
</style>
