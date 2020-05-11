<template>
  <div>
    <category-card v-for="(content, index) in routineCategory" :key="index" :content="content"></category-card>
  </div>
</template>

<script>
import CategoryCard from "@/components/cards/CategoryCard.vue";
import db from "@/firebase/init";

export default {
  name: "RoutineCategories",
  components: {
    CategoryCard
  },
  data() {
    return {
      routineCategory: []
    };
  },
  methods: {
     existsCategory(name){
      let counter = 0;
      let found = false;
      
      while (counter < this.routineCategory.length && !found) {
        if(this.routineCategory[counter] == name) {
          found = true;
        }
        counter ++;
      }
      return found;
    }
  },
  created() {
    db.collection("routine")
      .where("author", "==", "predefined")
      .onSnapshot(snapshot => {
        const routineCategory = [];
        snapshot.forEach(doc => {
          const data = doc.data();
          data.id = doc.id;
          if (!this.existsCategory(data.category)) {
            this.routineCategory.push(data.category);
            console.log(data.category);
          }
        });
        console.log(routineCategory);
      });
  },
  
};
</script>

<style>
</style>
