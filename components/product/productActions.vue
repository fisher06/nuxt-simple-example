<template>
  <v-row class="product-actions">
    <v-col cols="12">
      <v-select
        :items="items"
        :label="$t('product.chooseSize')"
        dense
        outlined
        chip
        color="#636363"
      >
      </v-select>
    </v-col>
    <v-col cols="12">
      <v-btn class="white--text pt-5 pb-5" color="red" block large>
        {{ $t('product.addToCart') }}
      </v-btn>
    </v-col>
    <v-col cols="12">
      <div v-for="(reinsurance, index) in reinsurances" :key="index">
        <v-icon color="black" class="r-icon">
          done
        </v-icon>
        <p class="r-text">{{ $t(reinsurance) }}</p>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      items: ['S', 'M', 'X', 'XL'],
      reinsurances: [
        'product.freeOrdering',
        'product.noObligationToPurchase',
        'product.alwaysFreeReturns'
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.product-actions {
  border-bottom: $gray 1px solid;
  .r-icon,
  .r-text {
    display: inline-block;
  }
}
</style>
