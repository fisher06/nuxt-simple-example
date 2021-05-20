import Links from '@/components/footer/links.vue'
import { mount, shallowMount, RouterLinkStub, createLocalVue } from '@vue/test-utils'

describe('links.vue', () => {
  
  const localVue = createLocalVue();

  const wrapper = shallowMount(Links, {
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
    expect(wrapper.html()).toContain(`<v-icon-stub>keyboard_arrow_right</v-icon-stub>`);
  })

  // todo test regex 
});