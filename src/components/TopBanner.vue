<template>
  <div>
    <v-img
      src="@/assets/treadmill.jpg"
      aspect-ratio="2.0"
      gradient="to top right, rgba(25,32,72,.7), rgba(200,115,201,.33)"
      class="corner-banner"
    >
      <h1 class="white--text pt-12 text-center">{{content}}</h1>
    </v-img>
  </div>
</template>

<script>
export default {
  name: "Banner",
  props: ["content"],
  data() {
    return {};
  },
  // filters: {
  //   highlight(value) {
  //     if (!value) return "";
  //     value = value.toString();
  //     value.slice(0, 5); 
  //   }
  // }
};
</script>

<style lang="scss">
.corner-banner {
  border-bottom-right-radius: 12px;
  border-bottom-left-radius: 12px;
}
</style>
