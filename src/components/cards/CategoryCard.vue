<template>
  <v-card class="category-card corner ma-4" @click="navigate(content)">
    <v-img
      src="@/assets/treadmill.jpg"
      aspect-ratio="2.4"
      gradient="to top right, rgba(25,32,72,.7), rgba(200,115,201,.33)"
    >
      <v-card-text class="white--text pb-0">3 Programs</v-card-text>
      <v-card-title class="white--text pt-0">{{content | capitalize}}</v-card-title>
    </v-img>
  </v-card>
</template>

<script>
export default {
  name: "CategoryCard",
  props: ["content"],
  data() {
    return {};
  },
  methods: {
    navigate(name) {
      this.$store.commit("SET_CATEGORY_NAME", name);
      this.$router.push({
        name: "SelectedCategory",
        params: { category_name: name }
      });
    }
  },
  filters: {
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  }
};
</script>


<style lang="scss">
.corner {
  border-radius: 16px !important;
}
</style>
