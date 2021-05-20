<template>
  <v-row class="breadcrumbs">
    <v-col cols="12">
      <h1>
        {{ $t('category.clothing') + ' ' + title }}
      </h1>
    </v-col>
    <v-col cols="12">
      <p class="sub-title">
        {{ categoryProductsTotal + ' ' + $t('category.articles') }}
      </p>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      title: ''
    };
  },
  computed: {
    categoryProductsTotal() {
      return this.$store.state.catalog.total;
    },
    activatedFilters() {
      return this.$store.state.catalog.activatedFilters;
    }
  },
  watch: {
    activatedFilters(val) {
      this.title = val.join(' ');
    }
  }
};
</script>

<style lang="scss" scoped>
.breadcrumbs {
  text-align: center;
  .sub-title {
    color: $gray-deep;
  }
}
</style>
