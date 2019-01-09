import SphinxDocFilter from '@/components/sphinx/SphinxDocFilter.vue';
import { mount, shallowMount } from '@vue/test-utils';
import '@/filters/date';

describe('SphinxDocFilter component', () => {
  it('match snapshot', () => {
    const wrapper = shallowMount(SphinxDocFilter, {
      propsData: {
        value: {
          text: 'sample',
          keywords: ['keyword1', 'keyword2'],
          sortType: 'ASC',
          sortBy: 'createdAt',
          level: 'ADVANCED',
        },
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('render default value if prop value is missing.', () => {
    const wrapper = mount(SphinxDocFilter);
    expect(wrapper.vm.value).toEqual({
      text: '',
      keywords: [],
      sortType: 'ASC',
      sortBy: 'createdAt',
      level: '',
    });
  });

  it('click on level to emit toggleLevel', () => {
    const wrapper = mount(SphinxDocFilter, {
      propsData: {
        value: {
          text: 'sample',
          keywords: ['keyword1', 'keyword2'],
          sortType: 'ASC',
          sortBy: 'createdAt',
          level: 'ADVANCED',
        },
      },
    });
    wrapper.find('.sphinx-level').trigger('click');
    expect(wrapper.emitted().toggleLevel[0]).toEqual(['ADVANCED']);
  });

  it('click on keyword to emit toggleKeyword', () => {
    const wrapper = mount(SphinxDocFilter, {
      propsData: {
        value: {
          text: 'sample',
          keywords: ['keyword1', 'keyword2'],
          sortType: 'ASC',
          sortBy: 'createdAt',
          level: 'ADVANCED',
        },
      },
    });
    wrapper.find('.sphinx-tag:nth-child(2)').trigger('click');
    expect(wrapper.emitted().toggleKeyword[0]).toEqual(['keyword2']);
  });

  it('click on button to emit change', () => {
    const wrapper = mount(SphinxDocFilter, {
      propsData: {
        value: {
          text: 'sample',
          keywords: ['keyword1', 'keyword2'],
          sortType: 'ASC',
          sortBy: 'createdAt',
          level: 'ADVANCED',
        },
      },
    });
    wrapper.find('.sphinx-search__field-action button').trigger('click');
    expect(wrapper.emitted().input[0]).toEqual([{
      text: wrapper.vm.text,
      keywords: wrapper.vm.keywords,
      sortType: wrapper.vm.sortType,
      sortBy: wrapper.vm.sortBy,
      level: wrapper.vm.value.level,
    }]);
  });
});
