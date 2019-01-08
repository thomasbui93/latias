import { shallowMount } from '@vue/test-utils';
import Loading from '@/components/base/Loading.vue';

describe('Loading component', () => {
  it('matches snapshot', () => {
    const wrapper = shallowMount(Loading);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
