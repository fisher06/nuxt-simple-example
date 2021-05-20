import ProductDescription from '@/components/product/productDescription.vue'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from "vuex"

describe('productDescription.vue', () => {
  const localVue = createLocalVue()
  localVue.use(Vuex);

  const store = new Vuex.Store({
    state: {
      product: {
        product: {
          name: 'First test product',
          price: 99
        }
      }
    }
  });
  const wrapper = shallowMount(ProductDescription, {
    mocks: {
      $t: () => {},
      $formatData: {
        price: () => { return '99 €' }
      }
    },
    store,
    localVue
  });

  it('snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

  it('is a vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  });

  it("html page rendered", () => {
    expect(wrapper.html()).toContain(`<h1 class=\"product-name\">First test product</h1>`);
    expect(wrapper.html()).toContain(`99 €`);
  });

});