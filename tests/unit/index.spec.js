import Index from '@/pages/index.vue'
import { mount, shallowMount, RouterLinkStub, createLocalVue } from '@vue/test-utils'

describe('index.vue', () => {
  const localVue = createLocalVue();

  const wrapper = shallowMount(Index, {
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

    expect(wrapper.html()).toContain(`<app-category-breadcrumbs-stub></app-category-breadcrumbs-stub>`);
    expect(wrapper.html()).toContain(`<app-page-filters-stub></app-page-filters-stub>`);
    expect(wrapper.html()).toContain(`<app-products-stub></app-products-stub>`);
  })
});