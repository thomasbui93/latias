import { shallowMount, createLocalVue } from '@vue/test-utils';
import Navbar from '@/components/core/navbar/Navbar.vue';
import VueRouter from 'vue-router';

const localVue = createLocalVue();
localVue.use(VueRouter);

describe('Navbar component', () => {
  it('matches snapshot', () => {
    const wrapper = shallowMount(Navbar, {
      stubs: ['router-link', 'router-view'],
      propsData: {
        isAuthenticated: true,
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should render sign in button if isAuthenticated is false', () => {
    const wrapper = shallowMount(Navbar, {
      stubs: ['router-link', 'router-view'],
      propsData: {
        isAuthenticated: false,
      },
    });
    expect(wrapper.findAll('.login').length).toBe(1);
    expect(wrapper.findAll('.logout').length).toBe(0);
  });
});
