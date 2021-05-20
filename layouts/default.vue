<template>
  <v-app>
    <app-header />
    <v-container fluid class="pt-0">
      <nuxt />
    </v-container>
    <app-footer />
  </v-app>
</template>

<script>
import header from '~/components/header.vue';
import footer from '~/components/footer.vue';

export default {
  components: {
    appHeader: header,
    appFooter: footer
  }
};
</script>

<style scoped>
#app {
  background-color: white;
}
</style>
