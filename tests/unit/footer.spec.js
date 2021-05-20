import Footer from '@/components/footer.vue'
import { mount, shallowMount, RouterLinkStub, createLocalVue } from '@vue/test-utils'

describe('footer.vue', () => {
  const localVue = createLocalVue();

  const wrapper = shallowMount(Footer, {
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

  it('is a vue instance', () => {
  
    expect(wrapper.vm).toBeTruthy();
  });

  it("html page rendered", () => {

    expect(wrapper.find('p').text()).toBe('little cigogne');
    expect(wrapper.html()).toContain(`<app-footer-links-stub></app-footer-links-stub>`);
  })
});
