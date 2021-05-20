import ProductId from '@/pages/products/_id.vue'
import { mount, shallowMount, RouterLinkStub, createLocalVue } from '@vue/test-utils'


describe('_id.vue', () => {
  const localVue = createLocalVue();

  const wrapper = shallowMount(ProductId, {
    mocks: {
      $t: () => {}
    },
    localVue,
    stubs: {
      NuxtLink: RouterLinkStub
    }
  });

  it('snapshot', () => {

    expect(wrapper).toMatchSnapshot();

  });

  it("child page rendered", () => {

    expect(wrapper.html()).toContain(`<app-product-gallery-stub></app-product-gallery-stub>`);
    expect(wrapper.html()).toContain(`<app-product-description-stub></app-product-description-stub>`);
    expect(wrapper.html()).toContain(`<app-product-actions-stub></app-product-actions-stub>`);
    expect(wrapper.html()).toContain(`<app-product-accordion-stub></app-product-accordion-stub>`);
  })
});