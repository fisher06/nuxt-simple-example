<template>
  <div>
    <v-main class="category-page">
      <v-container fluid>
        <v-row wrap>
          <v-col cols="12">
            <app-category-breadcrumbs />
          </v-col>
          <v-col cols="12">
            <app-page-filters />
          </v-col>
          <v-col cols="12">
            <app-products />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </div>
</template>

<script>
import categoryBreadcrumbs from '~/components/category/breadcrumbs.vue';
import pageFilters from '~/components/category/filters.vue';
import products from '~/components/category/products.vue';

export default {
  components: {
    appPageFilters: pageFilters,
    appProducts: products,
    appCategoryBreadcrumbs: categoryBreadcrumbs
  },
  async fetch({ store, route }) {
    await store.dispatch('catalog/SET_DATA');
  }
};
</script>
