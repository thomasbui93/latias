import { shallowMount, createLocalVue } from '@vue/test-utils';
import NavTip from '@/components/core/nav/NavTip.vue';
import VueRouter from 'vue-router';

const localVue = createLocalVue();
localVue.use(VueRouter);

describe('NavTip component', () => {
  it('matches snapshot', () => {
    const wrapper = shallowMount(NavTip, {
      stubs: ['router-link', 'router-view'],
      propsData: {
        path: '/',
        backgroundImage: '/sample.jpg',
        name: 'Latias',
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
