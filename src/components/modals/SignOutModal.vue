<template>
  <v-dialog v-model="dialog" persistent max-width="400">
    <template v-slot:activator="{ on }">
      <v-btn class="mb-5 underline"  color="error" text v-on="on">
       Log ud
      </v-btn>
    </template>

    <v-card class="corner">
      <v-row justify="center">
        <v-card-title>{{content}}</v-card-title>
      </v-row>
      <v-row justify="center">
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-col>
            <v-btn color="red" rounded class="white--text mr-4" @click="signOut">Ja</v-btn>
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
  name: "SignOutModal",
  props: ["content"],
  data() {
    return {
      dialog: false
    };
  },
  methods: {
    signOut() {
      this.$emit("signOut");
      this.dialog = false;
    }
  }
};
</script>

<style lang="scss">
    .underline {
        text-decoration: underline;
    }
</style>
