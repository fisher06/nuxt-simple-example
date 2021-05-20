import ProductAccordion from '@/components/product/productAccordion.vue'
import { mount, shallowMount, RouterLinkStub, createLocalVue } from '@vue/test-utils'
import Vuex from "vuex"

describe('productAccordion.vue', () => {
  const localVue = createLocalVue()
  localVue.use(Vuex);
  const store = new Vuex.Store({
    state: {
      product: {
        product: {
          description: 'Jest test product desc'
        }
      }
    }
  });
  const wrapper = shallowMount(ProductAccordion, {
    mocks: {
      $t: () => { return 'Jest transalte test' }
    },
    store,
    localVue
  });
  wrapper.setData({ 
    items: [
      {
        title: 'description',
        text: store.state.product.product.description,
        active: false
      }
    ]
  });

  it('snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

  it('is a vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  });

  it("html page rendered", () => {
    expect(wrapper.html()).toContain(`<p class=\"accordion-title\">Jest transalte test</p>`)
    expect(wrapper.html()).toContain(`<v-icon-stub class=\"accordion-icon\">keyboard_arrow_right</v-icon-stub>`)
  });

  it("click event worked", () => {
    wrapper.find(".description").trigger("click").then(() => {
      expect(wrapper.html()).toContain(`<p>Jest test product desc</p>`);
      wrapper.find(".description").trigger("click");
    }).then(() => {
      expect(wrapper.html()).not.toContain(`<p>Jest test product desc</p>`);
    });
  });

});