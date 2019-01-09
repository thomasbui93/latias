import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import SphinxDocSearch from '@/components/sphinx/SphinxDocSearch.vue';
import Loading from '@/components/base/Loading.vue';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('SphinxDocSearch component', () => {
  let store;
  const sphinxModule = {
    namespaced: true,
    state: {
      isError: false,
      isInProgress: false,
      documents: [],
    },
    actions: {
      search: value => value,
    },
  };
  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        sphinx: sphinxModule,
      },
    });
  });

  it('calculate state correctly from vuex store', () => {
    const pairedStates = [{
      state: {
        isError: false,
        isInProgress: false,
        documents: [],
      },
      computed: {
        documents: [],
        isError: false,
        isInProgress: false,
        isEmpty: true,
      },
    }, {
      state: {
        isError: true,
        isInProgress: false,
        documents: [],
      },
      computed: {
        documents: [],
        isError: true,
        isInProgress: false,
        isEmpty: true,
      },
    }, {
      state: {
        isError: false,
        isInProgress: true,
        documents: [],
      },
      computed: {
        documents: [],
        isError: false,
        isInProgress: true,
        isEmpty: true,
      },
    }, {
      state: {
        isError: false,
        isInProgress: false,
        documents: [{
          question: 'test question',
          keywords: ['keyword1', 'keyword2'],
          categories: 'category',
          answer: 'answer',
          level: 'BEGINER',
          createdAt: new Date().toString(),
        }],
      },
      computed: {
        documents: [{
          question: 'test question',
          keywords: ['keyword1', 'keyword2'],
          categories: 'category',
          answer: 'answer',
          level: 'BEGINER',
          createdAt: new Date().toString(),
        }],
        isError: false,
        isInProgress: false,
        isEmpty: false,
      },
    }];

    pairedStates.forEach(({ state, computed }) => {
      const customStore = new Vuex.Store({
        strict: true,
        namespaced: true,
        modules: {
          sphinx: {
            ...sphinxModule,
            ...{
              state,
            },
          },
        },
      });
      const component = shallowMount(SphinxDocSearch, {
        store: customStore,
        localVue,
        components: {
          Loading,
        },
      });
      expect(component.vm.documents).toEqual(computed.documents);
      expect(component.vm.isError).toBe(computed.isError);
      expect(component.vm.isInProgress).toBe(computed.isInProgress);
      expect(component.vm.isEmpty).toBe(computed.isEmpty);
    });
  });

  it('should call performSearch when mounted and after onToggleKeyword, onToggleLevel', () => {
    const spy = jest.spyOn(sphinxModule.actions, 'search');
    const customStore = new Vuex.Store({
      modules: {
        sphinx: sphinxModule,
      },
    });
    const component = shallowMount(SphinxDocSearch, {
      store: customStore,
      localVue,
      components: {
        Loading,
      },
    });
    expect(spy).toBeCalledTimes(1);
    component.vm.onToggleKeyword('test');
    expect(spy).toBeCalledTimes(2);
    component.vm.onToggleLevel('test');
    expect(spy).toBeCalledTimes(3);
  });

  it('onToggleKeyword toggle keyword in the data', () => {
    const component = shallowMount(SphinxDocSearch, {
      store,
      localVue,
      components: {
        Loading,
      },
    });
    component.vm.onToggleKeyword('test');
    expect(component.vm.searchState.keywords).toEqual(['test']);
    component.vm.onToggleKeyword('test');
    expect(component.vm.searchState.keywords).toEqual([]);
  });

  it('onToggleLevel toggle level in the data', () => {
    const component = shallowMount(SphinxDocSearch, {
      store,
      localVue,
      components: {
        Loading,
      },
    });
    component.vm.onToggleLevel('test');
    expect(component.vm.searchState.level).toEqual('test');
    component.vm.onToggleLevel('test');
    expect(component.vm.searchState.level).toBeUndefined();
  });
});
