<template>
  <v-row class="filter-list">
    <v-col
      v-for="filterName in filtersToDisplay"
      :key="filterName"
      :class="filterName"
      class="filter-items pa-0"
      cols="12"
    >
      <v-list v-if="filters[filterName] && filters[filterName].length" flat>
        <v-subheader>{{ $t('category.' + filterName) }}</v-subheader>
        <v-list-item-group
          v-model="activatedFilters[filterName]"
          multiple
          active-class=""
        >
          <v-list-item
            v-for="(subItem, index) in filters[filterName]"
            :key="index"
            :class="subItem"
          >
            <template #default="{ active }">
              <v-list-item-action>
                <v-checkbox :input-value="active" color="red"></v-checkbox>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title>
                  {{ $t('category.' + subItem) }}
                </v-list-item-title>
              </v-list-item-content>
            </template>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      activatedFilters: {
        gender: [],
        category: []
      }
    };
  },
  computed: {
    filtersToDisplay() {
      return this.$store.state.catalog.filtersToDisplay;
    },
    filters() {
      return this.$store.state.catalog.filters;
    }
  },
  watch: {
    activatedFilters: {
      deep: true,
      handler(val) {
        this.$store.dispatch('catalog/SET_FILTER', val);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.filter-list {
  position: absolute;
  z-index: 999;
  width: 100%;
  .filter-items {
    & ::v-deep .v-subheader {
      color: $black;
      font-size: 1.2em;
      font-weight: bold;
    }
  }
}
</style>
