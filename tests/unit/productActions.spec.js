import productActions from '@/components/product/productActions.vue'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from "vuex"

describe('productActions.vue', () => {
  const localVue = createLocalVue()

  const wrapper = shallowMount(productActions, {
    mocks: {
      $t: () => { return 'Jest transalte test' }
    },
    localVue
  });
  wrapper.setData({ 
    items: ['S'],
    reinsurances: ['product.freeOrdering']
  });

  it('snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

  it('is a vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  });

  it("html page rendered", () => {
    expect(wrapper.html()).toContain(`<v-row-stub tag=\"div\" class=\"product-actions\">`)
  });

});