<template>
  <div>
    <v-btn :to="{name: 'SelectedCategory', params: {category_name: category}}">Category</v-btn>
  </div>
</template>

<script>
export default {
  name: 'RoutineCategories',
  data() {
  return {
    category: 'arme'
  };
 },
};
</script>

<style>
</style>
