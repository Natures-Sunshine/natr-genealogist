import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {TreeState} from '@natr/the-trees/lib/+state/reducers/tree.reducer';
import {TreeDataFacadeService} from '@natr/the-trees';

@Component({
  selector: 'app-tree-search',
  templateUrl: './tree-search.component.html',
  styleUrls: ['./tree-search.component.scss']
})
export class TreeSearchComponent implements OnInit {

  constructor(private treeDataFacade: TreeDataFacadeService) {
  }

  ngOnInit() {
    console.log('tree changed from remote');
    this.treeDataFacade.dispatchRemoteLoadTree(new URL('http://localhost:4200/assets/tree.json'));
  }

}
