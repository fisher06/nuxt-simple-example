import Filters from '@/components/category/filters.vue'
import { mount, shallowMount, RouterLinkStub, createLocalVue } from '@vue/test-utils'
import Vuex from "vuex"

describe('filters.vue', () => {
  const localVue = createLocalVue()
  localVue.use(Vuex);

  const store = new Vuex.Store({
    state: {
      catalog: {
        activatedFilters: ["GirlTest"]
      }
    }
  });

  store.dispatch = jest.fn()

  const wrapper = shallowMount(Filters, {
    mocks: {
      $t: () => { return 'Jest test' }
    },
    store,
    localVue,
    stubs: {
      NuxtLink: RouterLinkStub
    }
  });
  //wrapper.setData({ title: 'First-bar' });

  it('snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('is a vue instance', () => {
    expect(wrapper.vm).toBeTruthy();
  });

  it("html page rendered", () => {
    expect(wrapper.html()).toContain(`<v-col-stub cols=\"8\" tag=\"div\" class=\"search-bar\">`);
    expect(wrapper.find("app-filter-list")).toBeTruthy();
    expect(wrapper.html()).toContain(`<!---->`);
    expect(wrapper.html()).toContain(`keyboard_arrow_down`);
  });

  it("v-if works", () => {
    wrapper.setData({ filterOpened: true }).then(() => {
      expect(wrapper.html()).toContain(`<app-filter-list-stub></app-filter-list-stub>`);
      expect(wrapper.html()).toContain(`keyboard_arrow_up`);
      wrapper.setData({ filterOpened: false })
    }).then(() => {
      expect(wrapper.html()).not.toContain(`<app-filter-list-stub></app-filter-list-stub>`);
      expect(wrapper.html()).toContain(`keyboard_arrow_down`);
    });
  });

  it("watch event worked", () => {
    wrapper.vm.$options.watch.search.call(wrapper.vm, 'testjest');
    expect(store.dispatch).toHaveBeenCalledWith('catalog/SET_SEARCH_DATA', 'testjest')
  });

});