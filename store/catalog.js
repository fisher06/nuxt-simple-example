export const state = () => ({
  sourceData: [],
  products: [],
  pages: 1,
  filters: {},
  activatedFilters: [],
  filtersToDisplay: ['gender', 'category'],
  total: 0
});

export const mutations = {
  SET_SOURCE_DATA(state, data) {
    state.sourceData = data;
  },
  SET_CATEGORY_DATA(state, data) {
    state.products = data.products;
    state.total = data.total;
    state.pages = data.pages;
  },
  SET_FILTER_DATA(state, data) {
    state.filters = data;
  },
  UPDATA_ACTIVATED_FILTER(state, data) {
    state.activatedFilters = data;
  }
};

export const actions = {
  async SET_DATA({ commit, rootState, dispatch, state }, data) {
    try {
      // get products data as the way we used for API
      const res = await this.$axios.get('http://localhost:3000/products.json');
      const sourceData = res.data;
      let genders = this.$nativeFunction.uniqBy(sourceData, 'gender');
      genders = genders.map(function(value, index) {
        return value.gender;
      });
      let categories = this.$nativeFunction.uniqBy(sourceData, 'category');
      categories = categories.map(function(value, index) {
        return value.category;
      });
      const filters = {
        gender: genders,
        category: categories
      };
      commit('SET_SOURCE_DATA', sourceData);
      dispatch('SET_PRODUCT_DATA', {
        products: sourceData
      });
      commit('SET_FILTER_DATA', filters);
    } catch (e) {
      // eslint-disable-next-line no-new
      new Error({ statusCode: 404, message: 'No Data' });
    }
  },
  SET_PRODUCT_DATA({ commit, rootState, dispatch, state }, data) {
    try {
      // create products list, pagination, API part
      const res = data.products;
      const total = res.length;
      const size = 12;
      const products = [];
      for (let i = 0; i < res.length; i += size) {
        products.push(res.slice(i, i + size));
      }
      const pages = products.length;
      commit('SET_CATEGORY_DATA', {
        products: products,
        pages: pages,
        total: total
      });
    } catch (e) {
      // eslint-disable-next-line no-new
      new Error({ statusCode: 404, message: 'No Data' });
    }
  },
  SET_FILTER({ commit, rootState, dispatch, state }, data) {
    try {
      // filter the products, normally this part need move to api
      let res = JSON.parse(JSON.stringify(state.sourceData));
      const activatedFilters = [];
      if (data.gender.length) {
        const filtersGender = [];
        data.gender.forEach(element => {
          filtersGender.push(state.filters.gender[element]);
          activatedFilters.push(
            this.$i18n.t('category.' + state.filters.gender[element])
          );
        });
        res = this.$nativeFunction.filter(res, function(o) {
          return filtersGender.includes(o.gender);
        });
      }
      if (data.category.length) {
        const filtersCategory = [];
        data.category.forEach(element => {
          filtersCategory.push(state.filters.category[element]);
          activatedFilters.push(state.filters.category[element]);
        });
        res = this.$nativeFunction.filter(res, function(o) {
          return filtersCategory.includes(o.category);
        });
      }
      dispatch('SET_PRODUCT_DATA', {
        products: res
      });
      commit('UPDATA_ACTIVATED_FILTER', activatedFilters);
    } catch (e) {
      // eslint-disable-next-line no-new
      new Error({ statusCode: 404, message: 'No Data' });
    }
  },
  SET_SEARCH_DATA({ commit, rootState, dispatch, state }, data) {
    try {
      // filter the products, normally this part need move to api
      let res = JSON.parse(JSON.stringify(state.sourceData));
      res = this.$nativeFunction.filter(res, function(o) {
        return o.name.toLowerCase().includes(data.toLowerCase());
      });
      dispatch('SET_PRODUCT_DATA', {
        products: res
      });
    } catch (e) {
      // eslint-disable-next-line no-new
      new Error({ statusCode: 404, message: 'No Data' });
    }
  }
};
