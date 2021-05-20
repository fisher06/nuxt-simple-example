import ProductGallery from '@/components/product/productGallery.vue'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from "vuex"

describe('productGallery.vue', () => {
  const localVue = createLocalVue()
  localVue.use(Vuex);

  const store = new Vuex.Store({
    state: {
      product: {
        product: {
          name: 'First test product',
          brand: 'Test brand',
          image: 'image link'
        }
      }
    }
  });
  const wrapper = shallowMount(ProductGallery, {
    mocks: {
      $t: () => {}
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
    expect(wrapper.html()).toContain(` src=\"image link\"`);
  });
})
