<template>
  <v-card>
    <v-row align="center">
      <v-col cols="3" class="py-0">
        <v-avatar tile>
          <v-img :src="content.image"></v-img>
        </v-avatar>
      </v-col>
      <v-col cols="9" class="py-1">
        <v-card-title>{{content.name}}</v-card-title>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row>
      <div v-for="(num, index) in content.repsAndKg" :key="index" class="mx-3">
          <v-row justify="center">
              <v-col cols="3" class="pb-0">
                  <p class="mb-0">Sets</p>
              </v-col>
              <v-col cols="4" class="pb-0">
                  <p class="mb-0">Reps</p>
              </v-col>
              <v-col cols="4" class="pb-0">
                  <p class="mb-0">Vægt</p>
              </v-col>
              
          </v-row>
        <v-row justify="center">
          <v-col cols="3">
            <h4 class="text-color">{{index + 1}}.</h4>
          </v-col>
          <v-col cols="4">
            <v-text-field dense class="corner center-text-input" @keyup="$emit('update:content', content)" outlined v-model.number="num.rep"></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field dense class="corner center-text-input" @keyup="$emit('update:content', content)" suffix="Kg" outlined v-model.number="num.kg"></v-text-field>
          </v-col>
        </v-row>
      </div>
    </v-row>
    
    <v-row justify="center">
      <v-btn small color="#FFAE8A" @click="addSet" rounded class="white--text mb-3">
        <v-icon>mdi-plus</v-icon>Tilføj sæt
      </v-btn>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "MakeRoutineExerciseCard",
  props: ["content"],
  data() {
    return {};
  },
  methods: {
      addSet() {
          
      }
  }
};
</script>

<style lang="scss">
    .center-text-input {
        input {
            text-align: center;
        }
    }
</style>
