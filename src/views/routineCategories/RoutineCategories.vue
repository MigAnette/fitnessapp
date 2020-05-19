<template>
  <v-container>
    <v-row justify="center">
      <h1 class="tex-center">
        <span class="text-color">Udforsk</span> vores rutiner
      </h1>
    </v-row>
    <category-card v-for="content in routineCategory" :key="content.id" :content="content"></category-card>
    <div class="navProtector"></div>
  </v-container>
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
      .get().then(snapshot => {
        snapshot.forEach(doc => {
          const data = doc.data();
          data.id = doc.id;
          if (!this.existsCategory(data.category)) {
            this.routineCategory.push(data.category);
          }
        });
      });
  },
  
};
</script>

<style>


</style>
