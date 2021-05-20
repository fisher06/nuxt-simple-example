export const state = () => ({
  product: {}
});

export const mutations = {
  SET_DATA(state, data) {
    state.product = data;
  }
};

export const actions = {
  async SET_DATA({ commit, rootState, dispatch, state }, data) {
    try {
      // get product data as the way we used for API
      const sourceData = await this.$axios.get(
        'http://localhost:3000/products.json'
      );
      const res = this.$nativeFunction.filter(sourceData.data, function(o) {
        return o.product_id === data;
      });
      if (res.length) {
        commit('SET_DATA', res[0]);
      }
    } catch (e) {
      // eslint-disable-next-line no-new
      new Error({ statusCode: 404, message: 'No Data' });
    }
  }
};
