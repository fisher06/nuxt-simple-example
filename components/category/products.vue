<template>
  <v-row v-if="page && page > 0" class="category-products">
    <v-col
      v-for="(product, index) in categoryProducts[page - 1]"
      :key="index"
      class="product-item"
      cols="6"
    >
      <app-product-thumb
        :product-id="product.product_id"
        :name="product.name"
        :price="product.price"
        :image="product.image"
        :brand="product.brand"
      />
    </v-col>
    <v-col cols="12">
      <v-pagination
        v-model="page"
        :length="pages"
        :total-visible="7"
        class="first-pagination"
      ></v-pagination>
    </v-col>
    <v-col cols="6">
      <v-btn
        :disabled="page <= 1 ? true : false"
        block
        text
        large
        plain
        class="previous-btn"
        @click="page--"
      >
        <v-icon>
          arrow_back
        </v-icon>
        {{ $t('category.previousPage') }}
      </v-btn>
    </v-col>
    <v-col cols="6">
      <v-btn
        :disabled="page >= pages ? true : false"
        block
        text
        large
        plain
        class="next-btn"
        @click="page++"
      >
        {{ $t('category.nextPage') }}
        <v-icon>
          arrow_forward
        </v-icon>
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
import productThumb from '~/components/product/productThumb.vue';

export default {
  components: {
    appProductThumb: productThumb
  },
  data() {
    return {
      page: 1
    };
  },
  computed: {
    categoryProducts() {
      return this.$store.state.catalog.products;
    },
    pages() {
      return this.$store.state.catalog.pages;
    }
  }
};
</script>

<style lang="scss" scoped>
.category-products {
  .first-pagination {
    & ::v-deep .v-pagination__navigation {
      display: none;
    }
  }
  .next-btn,
  .previous-btn {
    & ::v-deep .v-btn__content {
      opacity: 1 !important;
    }
  }
}
</style>
