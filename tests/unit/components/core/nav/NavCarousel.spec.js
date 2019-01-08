import { shallowMount } from '@vue/test-utils';
import NavCarousel from '@/components/core/nav/NavCarousel.vue';
import NavTip from '@/components/core/nav/NavTip.vue';

jest.mock('@/services/constants/nav', () => ([
  {
    backgroundImage: '@/assets/nav/latias.png',
    name: '1',
    path: '/1',
  },
]));

describe('NavCarousel component', () => {
  it('should render NavTip accordingly', () => {
    const wrapper = shallowMount(NavCarousel, {
      stubs: ['router-link', 'router-view'],
    });
    expect(wrapper.findAll(NavTip).length).toBe(1);
  });
});
