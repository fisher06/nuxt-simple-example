<template>
  <v-row class="product-desc">
    <v-col cols="8">
      <h1 class="product-name">{{ product.name }}</h1>
      <p class="last-item">{{ $t('product.lastStock') }}</p>
    </v-col>
    <v-col cols="4">
      <p class="product-price">
        {{ $formatData.price(parseInt(product.price), 'EUR', 'fr-FR') }}
      </p>
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

<style lang="scss" scoped>
.product-desc {
  .product-name {
    font-size: 1.5em;
    font-weight: bold;
  }
  .product-price {
    font-size: 1.5em;
    font-weight: 800;
  }
  .last-item {
    color: $gray-deep;
    font-size: 1.3em;
  }
}
</style>
