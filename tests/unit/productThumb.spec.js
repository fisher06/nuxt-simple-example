import ProductThumb from '@/components/product/productThumb.vue'
import { shallowMount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import Vuex from "vuex"

describe('productThumb.vue', () => {
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
  const wrapper = shallowMount(ProductThumb, {
    mocks: {
      $t: () => {},
      $formatData: {
        price: () => { return '99 €' }
      }
    },
    store,
    stubs: {
      NuxtLink: RouterLinkStub
    },
    localVue
  });

  wrapper.setProps({ 
    productId: '199999',
    price: '99',
    name: 'test name',
    image: 'test image',
    brand: 'test brand'
  })

  it('snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

  it('is a vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  });

  it("html page rendered", () => {
    expect(wrapper.html()).toContain(`<a class=\"product-link\">`);
    expect(wrapper.html()).toContain(`99 €`);
    expect(wrapper.html()).toContain(`<p>test name</p>`);
  });

});