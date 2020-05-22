<template>
  <div>
    <!-- <<<<<<<<<<<<<<<<<<<<<<<<< Profile name and picture >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> -->
    <v-container>
      <v-row>
        <v-col class="pr-0 mr-n6">
          <v-avatar class="profile-photo" height="125px" width="125px">
            <v-img :src="user.photo"></v-img>
          </v-avatar>
        </v-col>
        <v-col class="pl-0">
          <v-row>
            <h3>{{user.name}}</h3>
          </v-row>
         
            <v-row class="mt-2">
              <h3 class="text-color font-weight-bold">14</h3>
            </v-row>
            <v-row>
              <h5 class="caption">Kalorier brændt i denne uge</h5>
            </v-row>
         
          <v-row>
            <v-row class="mt-3">
              <h4 class="font-weight-bold">1 ud af 3</h4>
            </v-row>

            <v-progress-linear value="33" color="#FFAE8A"></v-progress-linear>
            <v-row>
              <h5 class="caption">Achievments er opnået</h5>
            </v-row>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <v-divider></v-divider>

    <!-- <<<<<<<<<<<<<<<<<<<<<<<<< Statistics >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> -->
    <v-container>
      <v-row>
        <h2>Statistik</h2>
      </v-row>
      <v-row justify="center" class="my-3">
        <v-card color="#FFAE8A" class="corner">
          <v-row class="white--text" align="center">
            <v-col>
              <v-row justify="center">
                <p class="body-1 font-weight-bold text-center mb-0">{{history.length}}</p>
              </v-row>
              <v-row justify="center">
                <p class="body-2 text-center">Fuldførte træninger</p>
              </v-row>
            </v-col>
            <v-divider vertical color="white"></v-divider>
            <v-col>
              <v-row justify="center">
                <p class="body-1 font-weight-bold text-center mb-0">{{myRoutines.length}}</p>
              </v-row>
              <v-row justify="center">
                <p class="body-2 text-center">Rutiner oprettet</p>
              </v-row>
            </v-col>
            <v-divider vertical color="white"></v-divider>
            <v-col>
              <v-row justify="center">
                <p class="body-1 font-weight-bold text-center mb-0">10</p>
              </v-row>
              <v-row justify="center">
                <p class="body-2 text-center">Kalorier Forbrændt</p>
              </v-row>
            </v-col>
          </v-row>
        </v-card>
      </v-row>
    </v-container>

    <!-- <<<<<<<<<<<<<<<<<<<<<<<<< History >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> -->
    <v-row class="my-3">
      <v-sheet tile class="white--text pa-3" color="#474747" min-width="100%">
        <v-row justify="center" class="my-3">
          <h2>Fuldførte træninger</h2>
        </v-row>
        <v-row justify="center" class="my-4">
          <h5>Dan et overblik over dine træninger</h5>
        </v-row>
        <v-row justify="center" class="my-3">
          <navigation-button :routeName="routeName" buttonValue="Gå til oversigt"></navigation-button>
        </v-row>
      </v-sheet>
    </v-row>
    <!-- <<<<<<<<<<<<<<<<<<<<<<<<< Achievements >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> -->
    <v-container>
      <v-row>
        <h2>Achievements</h2>
      </v-row>
      <v-row justify="center">
        <achievement-button v-for="(achiev, index) in achievements" :key="index" :content="achiev"></achievement-button>
      </v-row>
      <v-row justify="center">
        <navigation-button buttonValue="Se Alle"></navigation-button>
      </v-row>
      <v-row justify="center" class="my-12">
        <sign-out-modal content="Er du sikker på du vil logge af?" @signOut="signOut"></sign-out-modal>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import NavigationButton from "@/components/buttons/NavigationButton.vue";
import AchievementButton from "@/components/buttons/AchievementButton.vue";
import SignOutModal from "@/components/modals/SignOutModal.vue";

export default {
  name: "Profile",
  components: {
    NavigationButton,
    AchievementButton,
    SignOutModal
  },
  data() {
    return {
      routeName: "History",
      achievements: [
        { icon: "mdi-trophy-variant", color: "#5AB450", text: "Achievments" },
        { icon: "mdi-calendar-blank", color: "", text: "Rutineret" },
        { icon: "mdi-trophy-variant", color: "", text: "Achievments" }
      ]
    };
  },
  methods: {
    signOut() {
      this.$store.dispatch("user/signOut");
    }
  },
  computed: {
    user() {
      return this.$store.getters["user/user"];
    },
    history() {
      return this.$store.getters["user/history"];
    },
    myRoutines() {
      return this.$store.getters["routine/myRoutines"];
    }
  },
  created() {
    this.$store.dispatch("user/fetchUser");
    this.$store.dispatch("user/fetchHistory");
    this.$store.dispatch("routine/fetchMyRoutines");
  }
};
</script>

<style lang="scss">
</style>
