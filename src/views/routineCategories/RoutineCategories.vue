<template>
  <div>  
  <category-card v-for="(content, index) in categoryContent" :key="index" :content="content"></category-card>
  
  </div>
</template>

<script>
import CategoryCard from '@/components/cards/CategoryCard.vue';

export default {
  name: 'RoutineCategories',
  components: {
    CategoryCard
  },
  data() {
  return {
    categoryContent: [
      {programs: 3, name: 'Cardio'},
      {programs: 4, name: 'Chest'},
      {programs: 3, name: 'Shoulders'}
    ]
  };
 },
};
</script>

<style>
</style>
