<template>
  <v-row class="product-accordion">
    <v-col
      v-for="(item, index) in items"
      :key="index"
      cols="12"
      class="pt-10 pb-10 accordion-item"
      :class="item.title"
      @click="item.active = !item.active"
    >
      <div>
        <p class="accordion-title" v-text="$t('product.' + item.title)" />
        <v-icon v-if="item.active" class="accordion-icon">
          keyboard_arrow_down
        </v-icon>
        <v-icon v-else class="accordion-icon">keyboard_arrow_right</v-icon>
      </div>
      <div v-if="item.active" class="accordion-text">
        <p v-text="item.text" />
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: 'description',
          text: this.$store.state.product.product.description,
          active: false
        },
        {
          title: 'composition',
          text: 'I dont know where it is.',
          active: false
        },
        {
          title: 'interview',
          text: 'I dont know where it is.',
          active: false
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.product-accordion {
  margin-bottom: 30px;
  .accordion-item {
    border-bottom: $gray 1px solid;
  }
  .accordion-title {
    display: inline;
  }
  .accordion-icon {
    display: inline;
    float: right;
  }
  .accordion-text {
    padding-top: 10px;
    color: $gray-deep;
    p {
      margin-bottom: 0;
    }
  }
}
</style>
