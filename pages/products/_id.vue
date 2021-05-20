<template>
  <div>
    <v-main class="product-page">
      <v-container fluid>
        <v-row wrap>
          <v-col cols="12" class="product-images">
            <app-product-gallery />
          </v-col>
          <v-col cols="12">
            <app-product-description />
          </v-col>
          <v-col cols="12">
            <app-product-actions />
          </v-col>
          <v-col cols="12">
            <app-product-accordion />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </div>
</template>

<script>
import productGallery from '~/components/product/productGallery.vue';
import productDescription from '~/components/product/productDescription.vue';
import productActions from '~/components/product/productActions.vue';
import productAccordion from '~/components/product/productAccordion.vue';

export default {
  components: {
    appProductGallery: productGallery,
    appProductDescription: productDescription,
    appProductActions: productActions,
    appProductAccordion: productAccordion
  },
  async fetch({ store, route }) {
    await store.dispatch('product/SET_DATA', route.params.id);
  }
};
</script>
