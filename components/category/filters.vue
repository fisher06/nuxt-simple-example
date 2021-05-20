<template>
  <div>
    <v-row class="filter">
      <v-col cols="8" class="search-bar">
        <v-text-field
          v-model="search"
          :label="$t('search.findAProduct')"
          prepend-inner-icon="search"
          solo
          flat
          class="search-input ma-0 pa-0"
          clearable
          hide-details
        />
      </v-col>
      <v-col cols="4">
        <v-btn
          block
          text
          large
          plain
          height="48"
          class="filter-btn"
          @click="filterOpened = !filterOpened"
        >
          {{ $t('filter.filter') }}
          <p v-if="activatedFilters.length">{{ activatedFilters.length }}</p>
          <v-icon v-if="filterOpened" class="arrow-up-icon">
            keyboard_arrow_up
          </v-icon>
          <v-icon v-else class="arrow-down-icon">
            keyboard_arrow_down
          </v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <keep-alive>
      <app-filter-list v-if="filterOpened" />
    </keep-alive>
  </div>
</template>

<script>
import filterList from '~/components/category/filter/filterList.vue';

export default {
  components: {
    appFilterList: filterList
  },
  data() {
    return {
      search: '',
      filterOpened: false
    };
  },
  computed: {
    activatedFilters() {
      return this.$store.state.catalog.activatedFilters;
    }
  },
  watch: {
    search(val) {
      this.$store.dispatch('catalog/SET_SEARCH_DATA', val);
    }
  }
};
</script>

<style lang="scss" scoped>
.filter {
  border-top: $gray 1px solid;
  border-bottom: $gray 1px solid;
  .search-bar {
    border-right: $gray 1px solid;
  }
  .filter-btn {
    & ::v-deep .v-btn__content {
      opacity: 1 !important;
    }
  }
}
</style>
