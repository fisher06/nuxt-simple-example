import Products from '@/components/category/products.vue'
import { mount, shallowMount, RouterLinkStub, createLocalVue } from '@vue/test-utils'
import Vuex from "vuex"

describe('products.vue', () => {
  const localVue = createLocalVue()
  localVue.use(Vuex);
  const store = new Vuex.Store({
    state: {
      catalog: {
        products: [
          [
            {"product_id":"193605","name":"TopMC Blanc Fille Storytelling","price":"15","description":"TopMC","category":"Tops","type":"TopMC","gender":"Girl","brand":"Storytelling","image":"https://lh3.googleusercontent.com/pVpeuKJKTYtUywqJsp43vqfVhg_dIaIaerUF3KqIgisIcbXEDkgQhpIoL_lTYLeEERaqtNDn4P-ygWO7kG0W1TEnb7VhcGWr"}
          ]
        ],
        pages: 1
      }
    }
  });
  const wrapper = shallowMount(Products, {
    mocks: {
      $t: () => {}
    },
    store,
    localVue
  });
  it('snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('is a vue instance', () => {
    expect(wrapper.vm).toBeTruthy();
  });

  it("html page rendered", () => {
    expect(wrapper.html()).toContain(`<app-product-thumb-stub productid=\"193605\"`);
  });

  // todo : test pagination
});