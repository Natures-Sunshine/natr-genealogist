import {Component, OnInit} from '@angular/core';
import {TreeDataFacadeService} from '@natr/the-trees';
import {GenealogistService} from '../../../../../natr/genealogist/src/lib/genealogist.service';
import {SearchCallbackFunctionType} from '../../../../../natr/genealogist/src/lib/+state/search/actions/search.actions';
import {TreeModel} from '@natr/the-trees/lib/models/tree.model';

@Component({
  selector: 'app-tree-search',
  templateUrl: './tree-search.component.html',
  styleUrls: ['./tree-search.component.scss']
})
export class TreeSearchComponent implements OnInit {


  constructor(private treeDataFacade: TreeDataFacadeService, private genealogistService: GenealogistService) {
  }

  private static searchCallback(searchObject, treeData) {
    console.log(`${TreeSearchComponent.searchCallback.name} callback treeData`, treeData);
    console.log(`${TreeSearchComponent.searchCallback.name} callback searchObject`, searchObject);
    return treeData;
  }

  ngOnInit() {
    console.log('tree changed from remote');
    this.treeDataFacade.dispatchRemoteLoadTree(new URL('http://localhost:4200/assets/tree.json'));
  }

  search() {
    this.genealogistService.dispatchSearch('C');
  }

  callbackSearch() {
    this.genealogistService.dispatchCallbackSearch('C', TreeSearchComponent.searchCallback);
  }

}
