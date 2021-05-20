<template>
  <v-row class="product-gallery">
    <v-col cols="12">
      <v-card flat>
        <v-img
          :src="product.image"
          :alt="product.name ? product.name : product.brand"
          contain
          class="product-image grey lighten-5"
        ></v-img>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  computed: {
    product() {
      return this.$store.state.product.product;
    }
  }
};
</script>
