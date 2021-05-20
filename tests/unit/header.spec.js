import Header from '@/components/header.vue'
import { mount, shallowMount, RouterLinkStub, createLocalVue } from '@vue/test-utils'


describe('header.vue', () => {
  const localVue = createLocalVue();

  const wrapper = shallowMount(Header, {
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

});
