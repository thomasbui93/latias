import { shallowMount } from '@vue/test-utils';
import Timeout from '@/components/core/utils/Timeout.vue';

describe('Timeout component', () => {
  it('matches snapshot', () => {
    const wrapper = shallowMount(Timeout, {
      propsData: {
        timeout: 2000,
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('set text for time remaining in the clock', () => {
    const wrapper = shallowMount(Timeout, {
      propsData: {
        timeout: 2,
      },
    });
    jest.advanceTimersByTime(1000);
    expect(wrapper.vm.timeLeft).toBe(1);
    jest.advanceTimersByTime(1000);
    expect(wrapper.vm.timeLeft).toBe(0);
    jest.advanceTimersByTime(1000);
    expect(wrapper.vm.timeLeft).toBe(0);
  });
});
