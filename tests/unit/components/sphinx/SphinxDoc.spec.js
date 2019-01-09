import SphinxDoc from '@/components/sphinx/SphinxDoc.vue';
import { mount, shallowMount } from '@vue/test-utils';
import '@/filters/date';

describe('SphinxDoc component', () => {
  it('match snapshot', () => {
    const wrapper = shallowMount(SphinxDoc, {
      propsData: {
        question: 'test question',
        keywords: ['keyword1', 'keyword2'],
        categories: 'category',
        answer: 'answer',
        level: 'BEGINER',
        createdAt: new Date().toString(),
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('render empty tags if keywords are missing', () => {
    const wrapper = shallowMount(SphinxDoc, {
      propsData: {
        question: 'test question',
        categories: 'category',
        answer: 'answer',
        level: 'BEGINER',
        createdAt: new Date().toString(),
      },
    });
    expect(wrapper.vm.keywords.length).toBe(0);
  });

  it('click on level to emit toggleLevel', () => {
    const wrapper = mount(SphinxDoc, {
      propsData: {
        question: 'test question',
        keywords: ['keyword1', 'keyword2'],
        categories: 'category',
        answer: 'answer',
        level: 'BEGINER',
        createdAt: new Date().toString(),
      },
    });
    wrapper.find('.sphinx-doc__level .is-lowercase').trigger('click');
    expect(wrapper.emitted().toggleLevel[0]).toEqual(['BEGINER']);
  });

  it('click on tag to emit toggleKeyword', () => {
    const wrapper = mount(SphinxDoc, {
      propsData: {
        question: 'test question',
        keywords: ['keyword1', 'keyword2'],
        categories: 'category',
        answer: 'answer',
        level: 'BEGINER',
        createdAt: new Date().toString(),
      },
    });
    wrapper.find('.sphinx-tag:nth-child(2)').trigger('click');
    expect(wrapper.emitted().toggleKeyword[0]).toEqual(['keyword2']);
  });
});
