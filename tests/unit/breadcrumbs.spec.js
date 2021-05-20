import Breadcrumbs from '@/components/category/breadcrumbs.vue'
import { mount, shallowMount, RouterLinkStub, createLocalVue } from '@vue/test-utils'
import Vuex from "vuex"

describe('breadcrumbs.vue', () => {
  const localVue = createLocalVue()
  localVue.use(Vuex);
  const store = new Vuex.Store({
    state: {
      catalog: {
        total: 3,
        activatedFilters: ["GirlTest"]
      }
    }
  });
  const wrapper = shallowMount(Breadcrumbs, {
    mocks: {
      $t: () => { return 'Jest test' }
    },
    store,
    localVue,
    stubs: {
      NuxtLink: RouterLinkStub
    }
  });
  wrapper.setData({ title: 'First-bar' });

  it('snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

  it('is a vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  });

  it("html page rendered", () => {
    expect(wrapper.html()).toContain(`Jest test First-bar`)
    expect(wrapper.html()).toContain(`3 Jest test`)
  });

  it("watch event worked", () => {
    wrapper.vm.$options.watch.activatedFilters.call(wrapper.vm, ['First-bar', 'SecondFilter']);
    expect(wrapper.vm.title).toContain(`First-bar SecondFilter`)
  });
  
});