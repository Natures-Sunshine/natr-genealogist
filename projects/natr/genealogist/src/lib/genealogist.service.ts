import {Injectable} from '@angular/core';
import {selectTreeData} from '@natr/the-trees';
import {Store} from '@ngrx/store';
import {CallbackSearchActionPropType, doCallbackSearch, doSearch, SearchCallbackFunctionType} from './+state/search/actions/search.actions';
import {TreeModel} from '@natr/the-trees/lib/models/tree.model';
import {Node} from '@swimlane/ngx-graph';

@Injectable({
  providedIn: 'root'
})
export class GenealogistService {

  constructor(private treeStore: Store<any>) {
    this.treeStore.select(selectTreeData)
      .subscribe(state => console.log(`${GenealogistService.name}.${selectTreeData.name} state is`, state));
  }

  dispatchSearch(searchString: string) {
    this.treeStore.dispatch(doSearch({searchObject: searchString}));
  }

  dispatchCallbackSearch(searchString: string, callback: SearchCallbackFunctionType) {
    this.treeStore.dispatch(doCallbackSearch({searchObject: searchString, callback}));
  }

  search(search, treeData: TreeModel): TreeModel {
    const root = treeData.nodes.find(node => node.label === search);
    console.log(`${GenealogistService.name} root`, root);

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
        }
      ],
      edges: [
        {
          id: 'a',
          source: 'first',
          target: 'second',
          label: 'is parent of'
        },
        {
          id: 'b',
          source: 'first',
          target: 'third',
          label: 'is parent of'
        }
      ]
    };

    return newData;
  }
}
