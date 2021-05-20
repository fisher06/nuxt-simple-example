<template>
  <div class="product">
    <nuxt-link :to="'/products/' + productId" class="product-link">
      <v-card flat>
        <v-img
          :src="image"
          height="350"
          :alt="name ? name : brand"
          contain
          class="product-image grey lighten-5"
        ></v-img>
        <v-card-title class="title">
          <p>{{ name }}</p>
          <p>{{ $formatData.price(parseInt(price), 'EUR', 'fr-FR') }}</p>
        </v-card-title>
      </v-card>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    productId: {
      default: null,
      type: String
    },
    price: {
      default: null,
      type: String
    },
    name: {
      default: null,
      type: String
    },
    image: {
      default: null,
      type: String
    },
    brand: {
      default: null,
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
.product {
  .product-link {
    text-decoration: none;
    .title {
      p {
        text-align: center;
        width: 100%;
      }
    }
  }
}
</style>
