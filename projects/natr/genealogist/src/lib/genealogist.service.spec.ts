import {TestBed} from '@angular/core/testing';

import {GenealogistService} from './genealogist.service';
import {TreeModel} from '@natr/the-trees/lib/models/tree.model';
import {MockStore, provideMockStore} from '@ngrx/store/testing';
import {initialState} from '@natr/the-trees';
import {Store} from '@ngrx/store';

const newData: TreeModel = {
  nodes: [
    {
      id: 'first',
      label: 'A'
    },
    {
      id: 'second',
      label: 'B'
    },
    {
      id: 'third',
      label: 'c'
    },
    {
      id: 'forth',
      label: 'c'
    },
    {
      id: 'fifth',
      label: 'c'
    },
    {
      id: 'sixth',
      label: 'c'
    },
    {
      id: 'seventh',
      label: 'c'
    },
    {
      id: 'eighth',
      label: 'c'
    }
  ],
  edges: [
    {
      id: 'b',
      source: 'forth',
      target: 'sixth',
      label: 'is parent of'
    },
    {
      id: 'a',
      source: 'first',
      target: 'second',
      label: 'is parent of'
    },
    {
      id: 'a',
      source: 'first',
      target: 'eighth',
      label: 'is parent of'
    },
    {
      id: 'c',
      source: 'first',
      target: 'third',
      label: 'is parent of'
    },
    {
      id: 'd',
      source: 'second',
      target: 'forth',
      label: 'is parent of'
    },
    {
      id: 'e',
      source: 'second',
      target: 'fifth',
      label: 'is parent of'
    },
    {
      id: 'f',
      source: 'forth',
      target: 'seventh',
      label: 'is parent of'
    }
  ]
};


describe('GenealogistService', () => {
  let service: GenealogistService;
  let store: MockStore<any>;

  beforeEach(
    () => {
      TestBed.configureTestingModule(
        {
          providers: [provideMockStore({ initialState })]
        }
      );
      service = TestBed.get(GenealogistService);
      store = TestBed.get(Store);
    }
  );

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(
    'should build flat tree',
    () => {
      let newTree = GenealogistService.buildFlatTree(newData.nodes[2], newData);
      expect(newTree.nodes.length).toBe(1);

      newTree = GenealogistService.buildFlatTree(newData.nodes[1], newData);
      expect(newTree.nodes.length).toBe(5);
      expect(newTree.edges.length).toBe(4);
    }
  );

  it(
    'should return null',
    () => {
      const filteredTree = service.search('bob', newData);
      expect(filteredTree).toBeNull();

    }
  );

});
