<template>
  <v-card class="category-card corner ma-4" :to="{name: 'SelectedCategory', params: {category_name: content.name}}">
    <v-img
      src="@/assets/treadmill.jpg"
      aspect-ratio="2.4"
      gradient="to top right, rgba(25,32,72,.7), rgba(200,115,201,.33)"
    >
      <v-card-text class="white--text pb-0">{{content.programs}} Programs </v-card-text>
      <v-card-title class="white--text pt-0" v-text="content.name"></v-card-title>
    </v-img>
  </v-card>
</template>

<script>
export default {
  name: "CategoryCard",
  props: ["content"],
  data() {
    return {};
  }
};
</script>

<style>
.corner {
  border-radius: 16px !important;
}
</style>
