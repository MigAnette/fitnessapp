<template>
  <v-dialog v-model="dialog" persistent max-width="400">
    <template v-slot:activator="{ on }">
      <v-btn
        v-if="pageName"
        right
        absolute
        small
        :disabled="markChecked"
        icon
        circle
        fab
        v-on="on"
      >
        <v-icon>mdi-trash-can</v-icon>
      </v-btn>
    </template>

    <v-card class="corner">
      <v-row justify="center">
        <v-card-title>{{content.text1}}</v-card-title>
      </v-row>
      <v-card-text>
        <p class="text-center">
          {{content.text2}}
          <span class="color-red">{{content.text3}}</span>
        </p>
      </v-card-text>
      <v-row justify="center">
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-col>
            <v-btn color="red" rounded class="white--text mr-4" @click="deleteRoutine">Ja</v-btn>
          </v-col>
          <v-col>
            <v-btn @click="dialog = false" color="#FFAE8A" rounded class="white--text ml-4">Nej</v-btn>
          </v-col>
        </v-card-actions>
      </v-row>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "DeleteModal",
  props: ["pageName", "content", "markChecked"],
  data() {
    return {
      dialog: false
    };
  },
  methods: {
    deleteRoutine() {
      this.$emit("deleteRoutine");
      this.dialog = false;
    }
  }
};
</script>

<style>
</style>
