<template>
  <v-dialog v-model="dialog" persistent max-width="400">
    <template v-slot:activator="{ on }">
      <v-btn small color="grey lighten-3" v-on="on" circle outlined fab>
        <v-icon color="#FFAE8A">mdi-arrow-left</v-icon>
      </v-btn>
    </template>

    <v-card class="corner">
      <v-row justify="center">
        <v-card-title>{{content.text1}}</v-card-title>
      </v-row>
      <v-card-text>
        <p class="text-center">
          {{content.text2}}
          <v-span class="color-red">{{content.text3}}</v-span>
        </p>
      </v-card-text>
      <v-row justify="center">
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-col>
            <v-btn color="red" rounded class="white--text mr-4" @click="goBack">Ja</v-btn>
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
  name: "GoBackModal",
  props: ["content"],
  data() {
    return {
      dialog: false
    };
  },
  methods: {
    goBack() {
      this.$emit("goBack");
      this.dialog = false;
    }
  }
};
</script>

<style lang="scss">
.color-red {
  color: #c62828;
}
</style>
