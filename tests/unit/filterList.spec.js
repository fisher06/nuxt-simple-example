import FilterList from '@/components/category/filter/filterList.vue'
import { mount, shallowMount, RouterLinkStub, createLocalVue } from '@vue/test-utils'
import Vuex from "vuex"

describe('filterList.vue', () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);
  const store = new Vuex.Store({
    state: {
      catalog: {
        filtersToDisplay: ["gender"],
        filters: {
          gender: ["Girl"]
        }
      }
    }
  });

  store.dispatch = jest.fn();

  const wrapper = shallowMount(FilterList, {
    mocks: {
      $t: () => {}
    },
    store,
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
    expect(wrapper.html()).toContain(`<v-col-stub cols=\"12\" tag=\"div\" class=\"filter-items pa-0 gender\">`);
  });

  it("watch event worked", () => {
    wrapper.vm.$options.watch.activatedFilters.handler.call(wrapper.vm, {
      gender: ['Test'],
      category: []
    });
    expect(store.dispatch).toHaveBeenCalledWith('catalog/SET_FILTER', {
      gender: ['Test'],
      category: []
    });
  });
});